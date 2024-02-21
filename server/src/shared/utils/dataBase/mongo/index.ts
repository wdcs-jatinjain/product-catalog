import dotenv from "dotenv";
import mongoose from "mongoose";
import { MONGO_URL } from "../../../../config";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL || "", {
      dbName: "product-catalogs",
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
export default connectDB;
