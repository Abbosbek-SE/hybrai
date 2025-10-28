import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-border/40 bg-card/40 p-10 shadow-[0_0_40px_rgba(184,134,11,0.2)] backdrop-blur-xl">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Join Hybrai</h1>
          <p className="text-sm text-muted-foreground">
            Unlock exclusive originals, studio tools, and collaborative AI storytelling features.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2 text-left">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Jane Doe" required />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@domain.com" required />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a secure password" required />
          </div>
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Already streaming?{' '}
          <Link href="/(auth)/sign-in" className="text-primary underline-offset-4 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
