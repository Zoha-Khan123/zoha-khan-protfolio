import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 0) {
      const mongoDbUri = process.env.MONGODB_URL;
      
      if (!mongoDbUri) {
        throw new Error("MongoDB connection string is not defined in environment variables.");
      }

      await mongoose.connect(mongoDbUri);
      console.log("Database connected successfully");
      console.log("MongoDB URL:", process.env.MONGODB_URL); // Check if URL loads correctly

    }
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

export default connectDB;
