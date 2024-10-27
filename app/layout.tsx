import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "Finto",
  description: "Created by Tariq Lashley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <QueryProvider>
            <SheetProvider/>
            <Toaster/>
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
