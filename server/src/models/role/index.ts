import mongoose, { Schema } from "mongoose";

const RoleSchema = new mongoose.Schema({
    _id: Schema.ObjectId,
  name: { type: String },
  rolePermissions: [

  ],
  
  }, { timestamps: true });

const Roles = mongoose.models.Role || mongoose.model('role', RoleSchema);

export default Roles
