import mongoose, { Schema } from "mongoose";

const RoleSchema = new mongoose.Schema({
    _id: Schema.ObjectId,
  name: { type: String },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  rolePermissions: [

  ],
  
  }, { timestamps: true });

const Role = mongoose.models.Role || mongoose.model('Role', RoleSchema);

export default Role
