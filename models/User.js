import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, select: false },
        image: { type: String },
        streak: { type: Number, default: 0 },
        focusMinutes: { type: Number, default: 0 },
        provider: { type: String, default: "credentials" },
    },
    { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
