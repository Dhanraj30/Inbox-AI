import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getOrCreateUser, getUserIntegrations } from "@/db/queries";
import { auth, currentUser } from "@clerk/nextjs/server";
import { CalendarIcon, MailIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    redirect("/sign-in");
  }
  const clerkUser = await currentUser();
  const email = clerkUser?.emailAddresses[0].emailAddress ?? "";
  const name = clerkUser?.fullName ?? "";
  const user = await getOrCreateUser(clerkId, email, name);

  const userIntegrations = await getUserIntegrations(user.id);
  const gmailIntegration = userIntegrations.find(
    (integration) => integration.provider === "gmail",
  );
  const googleCalendarIntegration = userIntegrations.find(
    (integration) => integration.provider === "google_calendar",
  );

  const providers = [
    {
      key: "gmail",
      name: "Gmail",
      description: "Read and manage your emails.",
      icon: MailIcon,
      integration: gmailIntegration,
    },
    {
      key: "google_calendar",
      name: "Google Calendar",
      description: "View and manage your calendar events.",
      icon: CalendarIcon,
      integration: googleCalendarIntegration,
    },
  ];
  return (
    <div className="page-wrapper ">
      <div className="mb-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">Settings</h1>
        <p className="text-lg text-muted-foreground">
          Manage your integrations and preferences.
        </p>
      </div>

      <Card className="glass-card border-border/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl font-bold">Integrations</CardTitle>
          <CardDescription className="text-base">
            Connect your accounts to enable AI assistance and seamless workflows.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {providers.map((provider) => (
            <div 
              key={provider.key} 
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-border/60 rounded-2xl bg-card/40 hover:bg-white/60 dark:hover:bg-card/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-primary/30 gap-4"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <provider.icon className="h-7 w-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground text-lg leading-none tracking-tight">{provider.name}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">{provider.description}</p>
                </div>
              </div>
              <div className="sm:shrink-0 flex items-center">
                {provider.integration ? (
                  <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20 border-green-500/20 px-4 py-1.5 text-sm font-medium rounded-full transition-colors">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      Connected
                    </span>
                  </Badge>
                ) : (
                  <Button asChild className="w-full sm:w-auto rounded-full px-6 font-medium shadow-sm hover:shadow bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                    <a href={`/api/auth/google?provider=${provider.key}`}>
                      Connect
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
