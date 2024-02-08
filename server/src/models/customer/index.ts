import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone:{type:String, required: true},
  city:{type:String , default:''},
  address:{type:String},
  country:{type:String},
  zipCode:{type:String, required: true}
  }, { timestamps: true });

const Customer = mongoose.models.Customer || mongoose.model('customers', CustomerSchema);

export default Customer
