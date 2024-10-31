import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: [2, "Name must be larger than 2 characters"],
      maxLength: [50, "Name must be lesser than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address."],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  }
);

// Compound index to optimize searching by email and createdAt timestamp
contactSchema.index({ email: 1, createdAt: -1 });

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
