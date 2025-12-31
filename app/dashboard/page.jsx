import { DashboardNav } from "@/components/dashboard-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Users, Clock, Flame, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen pb-20 overflow-x-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <DashboardNav />

      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 relative z-10">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-white/5 bg-white/5 backdrop-blur-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Today's Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">2h 45m</div>
              <p className="text-xs text-gray-500 mt-1">+15% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="border-white/5 bg-white/5 backdrop-blur-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Flame className="w-4 h-4 text-accent" /> Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">12 Days</div>
              <p className="text-xs text-gray-500 mt-1">Keep the fire burning!</p>
            </CardContent>
          </Card>

          <Card className="border-white/5 bg-white/5 backdrop-blur-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" /> Tasks Done
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">8/12</div>
              <p className="text-xs text-gray-500 mt-1">Almost there</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Solo Study */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[2/1] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            <div className="absolute top-6 left-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Solo Focus</h3>
              <p className="text-gray-300 text-sm mb-4 max-w-sm">
                Enter a private void to accomplish your deepest work tasks without distraction.
              </p>
              <Button variant="glass" className="rounded-full bg-white/10 hover:bg-white/20 border-white/10 text-white">
                Start Session
              </Button>
            </div>
          </div>

          {/* Study Room */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[2/1] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 to-rose-900/40 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            <div className="absolute top-6 left-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <Users className="w-6 h-6 text-white" />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-2">Join a Room</h3>
              <p className="text-gray-300 text-sm mb-4 max-w-sm">
                Study alongside others in silence. Feel the collective energy of the cosmos.
              </p>
              <Button variant="glass" className="rounded-full bg-white/10 hover:bg-white/20 border-white/10 text-white" asChild>
                <Link href="/rooms">
                  Find Room
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Section (Placeholder) */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Recent Sessions</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Deep Work Session</h4>
                    <p className="text-xs text-gray-500">Yesterday • 45 mins</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-500">Completed</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
