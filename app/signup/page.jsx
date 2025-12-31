import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <Card className="w-full max-w-md border-glassBorder bg-glass/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Top decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

        <CardHeader className="text-center space-y-2 pb-8">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2 ring-1 ring-primary/30">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-white">Join the Cosmos</CardTitle>
          <CardDescription className="text-gray-400">
            Begin your journey to calm productivity.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
              <Input id="email" placeholder="explorer@universe.io" required className="bg-black/20 border-white/10 focus:border-primary/50 text-white placeholder:text-gray-600" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-300 ml-1">Password</label>
              <Input id="password" type="password" placeholder="••••••••" required className="bg-black/20 border-white/10 focus:border-primary/50 text-white placeholder:text-gray-600" />
            </div>
            <div className="pt-2">
              <Button className="w-full bg-primary/80 hover:bg-primary text-white shadow-lg shadow-primary/20 transition-all font-semibold h-11" type="button" asChild>
                <Link href="/login">
                  Create Account <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-500">
            Already drifting with us?{" "}
            <Link href="/login" className="text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-colors">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
