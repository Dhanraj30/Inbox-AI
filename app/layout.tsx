import type { Metadata } from "next"
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import "./globals.css"

export const metadata: Metadata = {
  title: "Inbox AI",
  description: "Autonomous AI agent assistant for email and calendar management",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider
          appearance={{
            theme: dark,
            variables: {
              colorPrimary: "#0f172a",
              colorBackground: "#f8fafc",
              borderRadius: "0.75rem",
            },
            options: {
              socialButtonsVariant: "iconButton",
            },
          }}
        >
          <header className="flex justify-end items-center p-4 gap-4 border-b border-slate-200">
            <Show when="signed-out">
              <SignInButton>
                <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="rounded-full border border-slate-900 px-4 py-2 text-sm font-medium text-slate-900">
                  Sign up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
