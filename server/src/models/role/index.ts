import mongoose, { Schema } from "mongoose";
import user from "../user";

const RoleSchema = new mongoose.Schema({
    _id: Schema.ObjectId,
  name: { type: String },
  rolePermissions: [

  ],
  
  }, { timestamps: true });

const Role = mongoose.models.Role || mongoose.model('role', RoleSchema);

export default Role
