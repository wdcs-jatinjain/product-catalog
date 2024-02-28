import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    isSuperAdmin: { type: Boolean },
    lastLogin: { type: Number }
  });

  const SessionSchema = new mongoose.Schema(
    {
      nameId: { type: String },
      nameIdFormat: { type: String },
      user: UserSchema,
      accessToken: { type: String },
      accessTokenExpiresAt: { type: Number },
      isSuperAdmin: { type: Boolean },
      permissions: [{ type: String }],
      rememberMe: { type: Boolean, default: false }
    },
    {
      timestamps: true 
    }
  );

const Sessions = mongoose.models.Session || mongoose.model('session', SessionSchema);

export default Sessions
