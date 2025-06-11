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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        
        {/* Optional: Other device icons */}
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" sizes="192x192" href="/favicon.png" />
        <link rel="icon" sizes="16x16 32x32 48x48" href="/favicon.png" />
      </head>
     
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
