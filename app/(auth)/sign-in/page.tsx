import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-border/40 bg-card/40 p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(193,63,255,0.25)]">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Continue your cinematic journey with access to curated AI-generated stories.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@domain.com" required />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          New to Hybrai?{" "}
          <Link href="/(auth)/sign-up" className="text-primary underline-offset-4 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}
