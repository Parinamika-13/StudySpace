import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export function DashboardNav() {
    return (
        <header className="flex items-center justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto w-full z-20 relative">
            <div className="flex flex-col">
                <h1 className="text-2xl font-semibold text-white tracking-tight">
                    Hello, Explorer
                </h1>
                <p className="text-sm text-gray-400">Ready to focus?</p>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-full">
                    <Bell className="w-5 h-5" />
                </Button>
                <Link href="/profile">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-accent p-[2px] cursor-pointer hover:scale-105 transition-transform">
                        <div className="h-full w-full rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                            <span className="font-semibold text-xs text-white">EX</span>
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    );
}
