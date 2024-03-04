import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone:{type:String, required: true},
  city:{type:String, required: true , default:''},
  address:{type:String, required: true},
  country:{type:String, required: true},
  zipCode:{type:String, required: true}
  }, { timestamps: true });

const Customer = mongoose.models.Customer || mongoose.model('customers', CustomerSchema);
export default Customer
