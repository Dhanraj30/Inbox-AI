import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Inbox AI",
  description: "Autonomous AI agent for email and calendar management",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
