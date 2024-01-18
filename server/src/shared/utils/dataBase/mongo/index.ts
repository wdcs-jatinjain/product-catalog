import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const connectDB = async () => {
  try {
    const options: any = {
      useCreateIndex: true,
      useFindAndModify: false,
    };

    await mongoose.connect(process.env.MONGO_URL || '', options);

    console.log("Connected to the database");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
