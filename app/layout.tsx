import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthSync } from "@/components/auth-sync";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberBuckler | Cybersecurity Portfolio",
  description: "Professional portfolio showcasing expertise in cybersecurity - Created by EKJPC",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Include AuthSync component for auto user role assignment */}
        <AuthSync />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}