import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Moon, Sun, LogOut, Award, Clock, FileText } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen p-4 md:p-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">

        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 text-gray-400 hover:text-white" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-medium text-white">Your Profile</h1>
        </div>

        {/* Profile Card */}
        <div className="glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="h-32 w-32 rounded-full p-[2px] bg-gradient-to-tr from-primary to-accent shadow-2xl shadow-primary/20">
              <Avatar className="h-full w-full border-4 border-black">
                <AvatarFallback className="bg-gradient-to-br from-gray-800 to-black text-2xl text-white">EX</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute bottom-1 right-1 h-8 w-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div className="text-center md:text-left space-y-2 flex-1">
            <h2 className="text-3xl font-bold text-white">Explorer</h2>
            <p className="text-gray-400">Master of the Void • Looking for inner peace</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20">Pro Member</span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium border border-accent/20">Night Owl</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white/5 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Clock className="w-4 h-4 text-primary" /> Total Focus Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">142h</div>
              <p className="text-xs text-gray-500 mt-1">Top 10% of explorers</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" /> Best Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">24 Days</div>
              <p className="text-xs text-gray-500 mt-1">Achieved last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Notes Placeholder */}
        <Card className="bg-transparent border-dashed border-2 border-white/10 hover:border-white/20 transition-colors group cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <FileText className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Personal Notes</h3>
              <p className="text-sm text-gray-500 max-w-xs mx-auto">
                Sync your thoughts across the cosmos. Coming soon.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white px-2">Preferences</h3>
          <div className="glass-card rounded-2xl overflow-hidden p-1">
            <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Appearance</h4>
                  <p className="text-xs text-gray-500">Currently: Dark Nebula</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400">Edit</Button>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer mt-1">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  <LogOut className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-red-400 font-medium">Log Out</h4>
                  <p className="text-xs text-gray-500">Return to Earth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
