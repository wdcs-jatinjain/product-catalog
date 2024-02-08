import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  }, 
  { timestamps: true });
const Customer = mongoose.models.Customer || mongoose.model('customers', CustomerSchema);
export default Customer
