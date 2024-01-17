import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  streetAddress: {type: String},
  postalCode: {type: Number},
  city: {type: String},
  country: {type: String},
  phone: {type: String},
  admin: {type: Boolean, default: true},
  
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User
