import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || '');

    console.log("Connected to the database");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
