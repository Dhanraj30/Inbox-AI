import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Inbox AI - Your Inbox on Autopilot",
  description: "Autonomous email automation that analyzes context, drafts replies, extracts intent, and manages your schedule.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: shadcn }}>
      <html lang="en">
        <body
          className={`${manrope.className} ${manrope.variable} antialiased`}
        >

          {children}
          <footer className="footer-wrapper">
            <div className="section-heading py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>
                  © {new Date().getFullYear()} Inbox AI. Human-centric intelligence for productivity.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                  <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                  <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                  <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
