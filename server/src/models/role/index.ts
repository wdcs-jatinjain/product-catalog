import mongoose, { Schema } from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: { type: String },
  rolePermissions: [

  ],
  
  }, { timestamps: true });

const Roles = mongoose.models.Role || mongoose.model('role', RoleSchema);

export default Roles
