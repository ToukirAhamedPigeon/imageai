import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next";
import {  IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ImageAI",
  description: "Image solution for your business with the power of AI",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <ClerkProvider appearance={{
        variables: {
          colorPrimary: "#624cf5",
        },
      }}>
      <body
        className={cn(`${ibmPlexSans.variable} font-IBMPlex antialiased`)}
      >
        {children}
        <Toaster />
      </body>
      </ClerkProvider>
    </html>
   
  );
}
