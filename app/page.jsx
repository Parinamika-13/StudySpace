import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {/* Decorative background elements using CSS only for performance/simplicity */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 animate-pulse-slow delay-1000" />

      <div className="space-y-8 z-10 animate-float-slow">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-glass border border-glassBorder">
            <Sparkles className="w-5 h-5 text-accent mr-2" />
            <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Welcome to the void</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-gray-400 text-glow">
            StudySpace
          </h1>

          <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl leading-relaxed">
            A quiet cosmic environment for deep focus and shared silence.<br />
            Progress without pressure.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 border-primary/30 hover:bg-primary/20" asChild>
            <Link href="/signup">
              Start Journey
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 text-gray-400 hover:text-white" asChild>
            <Link href="/login">
              Enter Existing
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
