import Contact from "@/app/models/contact";
import connectDB from "@/components/ui/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullname, email, message } = await req.json();
    console.log("Received data:", { fullname, email, message });

    // Connect to the database
    await connectDB();

    // Check if a message with the same email already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return NextResponse.json({
        msg: ["A message from this email has already been sent."],
        success: false,
      });
    }

    // Create the document
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
