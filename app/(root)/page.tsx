import Image from "next/image";
import { SignInButton, SignUpButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="flex gap-4">
      <SignedOut>
        <SignInButton>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
        <SignUpButton>
          <Button variant="outline">Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  );
}
