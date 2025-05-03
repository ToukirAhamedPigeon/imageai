import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <Button size="lg" className="bg-lime-500 text-white">Hello World</Button>
    </div>
  );
}
