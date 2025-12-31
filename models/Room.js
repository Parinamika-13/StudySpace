import mongoose, { Schema, model, models } from "mongoose";

const RoomSchema = new Schema(
    {
        name: { type: String, required: true },
        currentCount: { type: Number, default: 0 },
        maxCapacity: { type: Number, required: true },
        tags: [{ type: String }],
        isPrivate: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Room = models.Room || model("Room", RoomSchema);

export default Room;
