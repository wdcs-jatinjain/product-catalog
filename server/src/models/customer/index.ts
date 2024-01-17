import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  }, { timestamps: true });

const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer
