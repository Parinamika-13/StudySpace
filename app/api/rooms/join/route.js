import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Room from "@/models/Room";

export async function POST(req) {
    await connectDB();
    try {
        const { roomId } = await req.json();

        const room = await Room.findById(roomId);
        if (!room) {
            return NextResponse.json({ error: "Room not found" }, { status: 404 });
        }

        if (room.currentCount >= room.maxCapacity) {
            return NextResponse.json({ error: "Room is full" }, { status: 400 });
        }

        room.currentCount += 1;
        await room.save();

        return NextResponse.json(room);
    } catch (error) {
        return NextResponse.json({ error: "Failed to join room" }, { status: 500 });
    }
}
