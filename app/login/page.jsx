import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[30%] w-72 h-72 bg-secondary/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <Card className="w-full max-w-md border-glassBorder bg-glass/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

        <CardHeader className="text-center space-y-2 pb-8">
          <div className="mx-auto w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-2 ring-1 ring-accent/30">
            <LogIn className="w-6 h-6 text-accent" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-white">Welcome Back</CardTitle>
          <CardDescription className="text-gray-400">
            Resume your focus session.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
              <Input id="email" placeholder="explorer@universe.io" required className="bg-black/20 border-white/10 focus:border-accent/50 text-white placeholder:text-gray-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium text-gray-300 ml-1">Password</label>
                <Link href="#" className="text-xs text-accent hover:text-accent/80">Forgot password?</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required className="bg-black/20 border-white/10 focus:border-accent/50 text-white placeholder:text-gray-600" />
            </div>
            <div className="pt-2">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 transition-all font-semibold h-11" type="button" asChild>
                <Link href="/dashboard">
                  Enter Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-500">
            New to this galaxy?{" "}
            <Link href="/signup" className="text-accent hover:text-accent/80 hover:underline underline-offset-4 transition-colors">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
