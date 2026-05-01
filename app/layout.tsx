import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

export const metadata = {
  title: "Inbox AI",
  description: "Autonomous AI agent assistant for email and calendar management",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
