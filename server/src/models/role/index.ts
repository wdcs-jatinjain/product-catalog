import mongoose, { Schema } from "mongoose";
import user from "../user";

const RoleSchema = new mongoose.Schema({
    _id: Schema.ObjectId,
  name: { type: String },
  role: {
    type: [String],
    required: true,
    enum: ["user", "superAdmin","manage"],
    default: [user],
  },
  token:{type:String},
  email: { type: String, required: true, unique: true },

  }, { timestamps: true });

const Role = mongoose.models.Role || mongoose.model('role', RoleSchema);

export default Role
