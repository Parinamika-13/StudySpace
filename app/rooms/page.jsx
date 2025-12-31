"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Lock, Volume2, VideoOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function RoomsPage() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    // Seed data if empty (for demo purposes)
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await fetch("/api/rooms");
                const data = await res.json();

                if (data.length === 0) {
                    // Auto-seed for demo
                    const seed = [
                        { name: "Deep Space Alpha", maxCapacity: 12, tags: ["Deep Focus", "Pomodoro"] },
                        { name: "Nebula Quiet Zone", maxCapacity: 12, tags: ["Silent", "No Cams"] },
                        { name: "Stardust Library", maxCapacity: 12, tags: ["Casual", "Ambient"] },
                    ];
                    await Promise.all(seed.map(r => fetch("/api/rooms", { method: "POST", body: JSON.stringify(r) })));
                    const reRes = await fetch("/api/rooms");
                    setRooms(await reRes.json());
                } else {
                    setRooms(data);
                }
            } catch (e) {
                console.error("Failed to fetch rooms");
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    const joinRoom = async (roomId) => {
        try {
            const res = await fetch("/api/rooms/join", {
                method: "POST",
                body: JSON.stringify({ roomId }),
            });
            if (res.ok) {
                const updatedRoom = await res.json();
                setRooms(prev => prev.map(r => r._id === updatedRoom._id ? updatedRoom : r));
            }
        } catch (e) {
            console.error("Failed to join room");
        }
    };

    return (
        <div className="min-h-screen p-4 md:p-8 relative">
            {/* Background */}
            <div className="absolute top-0 right-0 w-full h-[50vh] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 text-gray-400 hover:text-white" asChild>
                            <Link href="/dashboard">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold text-white tracking-tight">Study Rooms</h1>
                            <p className="text-gray-400 text-sm">Find your frequency. Silence is golden.</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline" className="rounded-full border-white/10 text-gray-300 hover:text-white bg-black/20 backdrop-blur-md">
                            <Lock className="w-4 h-4 mr-2" /> Private Room
                        </Button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex h-64 items-center justify-center">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rooms.map((room) => {
                            const isFull = room.currentCount >= room.maxCapacity;
                            return (
                                <Card key={room._id} className={cn(
                                    "group border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden relative",
                                    isFull && "opacity-75"
                                )}>
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <CardHeader className="pb-3 relative">
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg text-white group-hover:text-primary transition-colors">
                                                {room.name}
                                            </CardTitle>
                                            {isFull && (
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-400/10 px-2 py-1 rounded-full border border-red-400/20">
                                                    Full
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            {room.tags.map(tag => (
                                                <span key={tag} className="text-[10px] text-gray-400 bg-black/20 px-2 py-1 rounded-md border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardHeader>

                                    <CardContent className="relative">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <Users className="w-4 h-4" />
                                                <span className={cn(isFull ? "text-red-400" : "text-gray-300")}>
                                                    {room.currentCount} / {room.maxCapacity}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-500">
                                                <Volume2 className="w-4 h-4 text-gray-600" />
                                                <VideoOff className="w-4 h-4 text-gray-600" />
                                            </div>
                                        </div>

                                        {/* Progress bar for capacity */}
                                        <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                                            <div
                                                className={cn("h-full rounded-full transition-all duration-1000", isFull ? "bg-red-500" : "bg-primary")}
                                                style={{ width: `${(room.currentCount / room.maxCapacity) * 100}%` }}
                                            />
                                        </div>
                                    </CardContent>

                                    <CardFooter className="relative">
                                        <Button
                                            className="w-full rounded-xl"
                                            variant={isFull ? "secondary" : "default"}
                                            disabled={isFull}
                                            onClick={() => joinRoom(room._id)}
                                        >
                                            {isFull ? "Room is Full" : "Join Session"}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
