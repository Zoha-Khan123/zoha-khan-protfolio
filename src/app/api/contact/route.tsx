import Contact from "@/app/models/contact";
import connectDB from "@/components/ui/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullname, email, message } = await req.json();
    console.log("Received data:", { fullname, email, message });

    // Preliminary validation for required fields
    const validationErrors: string[] = [];
    if (!fullname) validationErrors.push("Name is required");
    if (!email) validationErrors.push("Email is required");
    if (!message) validationErrors.push("Message is required");

    // Additional check for email format
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email && !emailRegex.test(email)) {
      validationErrors.push("Please enter a valid email address.");
    }

    // If there are validation errors, return them immediately
    if (validationErrors.length > 0) {
      return NextResponse.json({ msg: validationErrors, success: false });
    }

    // Connect to the database
    await connectDB();

    // Define the time window and message limit
    const timeWindow = 5 * 60 * 1000; // 5 minutes in milliseconds
    const messageLimit = 3;

    // Calculate the timestamp for the beginning of the time window
    const startTime = new Date(Date.now() - timeWindow);

    // Find messages from the same email within the last 5 minutes
    const recentMessages = await Contact.find({
      email,
      createdAt: { $gte: startTime },
    }).limit(messageLimit); // Limit the number of returned documents for efficiency

    if (recentMessages.length >= messageLimit) {
      return NextResponse.json({
        msg: ["You have reached the max limit of messages. Try again after 5 minutes."],
        success: false,
      });
    }

    // Create a new message document
    const newContact = await Contact.create({ fullname, email, message });
    console.log("Document created:", newContact);

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    console.error("Error during request:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      const errorList: string[] = [];
      for (const field in error.errors) {
        errorList.push(error.errors[field].message);
      }
      console.log("Validation errors:", errorList);
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({
        msg: ["Unable to send message."],
        success: false,
      });
    }
  }
}
