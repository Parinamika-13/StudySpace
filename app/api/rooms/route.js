import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Room from "@/models/Room";

export async function GET() {
    await connectDB();
    try {
        const rooms = await Room.find({}).sort({ createdAt: -1 });
        return NextResponse.json(rooms);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch rooms" }, { status: 500 });
    }
}

export async function POST(req) {
    await connectDB();
    try {
        const body = await req.json();
        const room = await Room.create(body);
        return NextResponse.json(room, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create room" }, { status: 500 });
    }
}
