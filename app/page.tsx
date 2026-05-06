import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PricingTable,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { 
  CheckCircle2, 
  ChevronRight, 
  Inbox, 
  Edit3, 
  CheckSquare, 
  Calendar, 
  Sparkles, 
  Zap, 
  Target, 
  Play,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xl font-bold font-heading">Inbox AI</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                <Link href="#" className="hover:text-foreground transition-colors">Home</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Products</Link>
                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                  Features <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full uppercase font-bold tracking-wider">New</span>
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors">Solutions</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Pricing</Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <SignedIn>
                <Link href="/dashboard">
                  <Button variant="ghost" className="text-foreground">Dashboard</Button>
                </Link>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="ghost" className="text-foreground">Log in</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">Start Free Trial</Button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section Split Layout */}
        <section className="flex flex-col lg:flex-row min-h-[80vh] border-b border-border">
          {/* Left Side */}
          <div className="flex-1 bg-background flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16 border-r border-border relative z-10">
            <div className="max-w-xl relative">
              {/* Soft amber glow behind text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-[100%] blur-3xl -z-10"></div>
              
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-6">
                <span>&lt;</span>
                <span>Powered by Claude AI · Intelligence 3.5</span>
                <span>&gt;</span>
              </div>
              
              <h1 className="mb-6">
                <span className="font-normal">AI That Runs</span> <span className="text-primary glow-container">Your Inbox</span><span className="text-[#7e776e] font-normal"> While You Scale</span>
              </h1>
              
              <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
                Autonomous email automation that analyzes context, drafts replies, extracts intent, and manages your schedule — all automatically.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Button size="lg" className="h-12 px-6 rounded-md text-base font-medium shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Watch Demo
                </Button>
                <Link href="/sign-up">
                  <Button variant="ghost" className="h-12 px-4 text-base font-medium hover:bg-muted hover:text-foreground rounded-md">
                    Start Free Now
                  </Button>
                </Link>
              </div>
              
              <p className="text-xs text-muted-foreground mb-12 flex items-center gap-2">
                <CheckSquare className="w-3 h-3" /> No credit card required
              </p>

              {/* Service Card Highlight */}
              <div className="rounded-2xl border border-border bg-card/50 p-4 flex items-center gap-4 max-w-sm hover:bg-card transition-colors cursor-pointer group glass-card">
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0 shadow-inner">
                  <Sparkles className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground">Explore Our Latest AI Services</h4>
                  <p className="text-xs text-muted-foreground">AI Tasks. Timeline Sync. Optimization Reminders.</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 bg-white flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            {/* UI Mockup Card */}
            <div className="w-full max-w-md rounded-2xl glass-card overflow-hidden relative z-10">
              {/* Mockup Header */}
              <div className="h-12 border-b border-border/50 flex items-center px-4 gap-1.5 bg-card/50">
                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
              </div>
              
              {/* Mockup Content */}
              <div className="p-6 space-y-6 bg-card/80">
                <div className="flex items-center justify-between text-xs text-muted-foreground uppercase font-semibold tracking-wider">
                  <div className="flex items-center gap-2">
                     <CheckCircle2 className="w-3.5 h-3.5" />
                     <span>Reminders</span>
                  </div>
                  <span>Smart Optimization</span>
                </div>

                <div className="space-y-4">
                  {/* Optimize */}
                  <div className="rounded-md border border-border/50 p-4 flex items-center gap-4 bg-background/50">
                    <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-primary">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Optimize</h4>
                      <p className="text-xs text-muted-foreground">Continuously improve workflow.</p>
                    </div>
                  </div>

                  {/* Suggest */}
                  <div className="rounded-md border border-border/50 p-4 flex items-center gap-4 bg-background/50">
                    <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-primary">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Suggest</h4>
                      <p className="text-xs text-muted-foreground">Launch smart campaigns.</p>
                    </div>
                  </div>

                  {/* Prioritize - Active State */}
                  <div className="rounded-md border-2 border-primary/50 p-4 flex items-center gap-4 relative shadow-sm bg-background">
                    <div className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                       <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground shadow-inner">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Prioritize</h4>
                      <p className="text-xs text-muted-foreground">Focus on what converts.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                   <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center shadow-lg shadow-primary/30 glow-container">
                      <Sparkles className="w-6 h-6 text-primary-foreground" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Logos */}
        <section className="py-8 border-b border-border bg-card overflow-hidden flex justify-center relative">
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-muted-foreground font-semibold text-sm">
              <span className="flex items-center gap-2"><div className="w-4 h-4 border border-current rounded-sm"></div> Dropbox</span>
              <span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full border border-current"></div> Grammarly</span>
              <span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full border border-current"></div> Weave</span>
              <span className="flex items-center gap-2"><div className="w-4 h-4 bg-current rounded-sm opacity-50"></div> Benchling</span>
              <span className="flex items-center gap-2"><div className="w-4 h-4 border border-current rounded-sm"></div> Pipedrive</span>
              <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-current rounded-full"></div> Slack</span>
           </div>
        </section>

        {/* Features Section */}
        <section className="bg-background py-24 border-b border-border relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-card to-background z-0"></div>
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="mb-4">Human-centric intelligence</h2>
              <p className="text-muted-foreground text-lg">
                Focus on what matters most. Let our autonomous agent handle the administrative overhead of your professional life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
              {/* Feature 1 */}
              <div className="md:col-span-3 rounded-[1.5rem] border border-border bg-[#faefe5] p-8 hover:shadow-md transition-shadow flex flex-col h-full">
                 <div className="w-12 h-12 rounded-md bg-background flex items-center justify-center text-primary mb-8 shadow-sm">
                   <Inbox className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-semibold mb-3">AI Email Analysis</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                   Claude-powered insights that understand context, tone, and urgency. It doesn't just read; it comprehends your entire workflow.
                 </p>
                 <div className="flex gap-2 mt-auto">
                    <span className="px-3 py-1 rounded-full border border-border bg-white text-[10px] font-bold tracking-widest uppercase text-primary shadow-sm">Priority Detection</span>
                    <span className="px-3 py-1 rounded-full border border-border bg-white text-[10px] font-bold tracking-widest uppercase text-primary shadow-sm">Sentiment Scan</span>
                 </div>
              </div>

              {/* Feature 2 */}
              <div className="md:col-span-2 rounded-[1.5rem] border border-border bg-card p-8 hover:shadow-md transition-shadow flex flex-col h-full shadow-sm">
                 <div className="w-12 h-12 rounded-md bg-[#faefe5] flex items-center justify-center text-primary mb-8 shadow-sm">
                   <Edit3 className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-semibold mb-3">Smart Drafts</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                   Contextual, human-like replies that sound exactly like you, prepared before you even open your inbox.
                 </p>
              </div>

              {/* Feature 3 */}
              <div className="md:col-span-2 rounded-[1.5rem] border border-border bg-card p-8 hover:shadow-md transition-shadow flex flex-col h-full shadow-sm">
                 <div className="w-12 h-12 rounded-md bg-[#faefe5] flex items-center justify-center text-primary mb-8 shadow-sm">
                   <CheckSquare className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-semibold mb-3">Task Extraction</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                   Automatically identify deliverables and commitments hidden within threads and sync them to your task manager.
                 </p>
              </div>

              {/* Feature 4 (Dark Card) */}
              <div className="md:col-span-3 rounded-[1.5rem] bg-[#362e28] text-white p-8 relative overflow-hidden flex flex-col h-full shadow-md border border-[#4a423b]">
                 {/* Decorative curve element */}
                 <div className="absolute -bottom-24 -right-24 w-64 h-64 border-[32px] border-[#4a423b]/30 rounded-full pointer-events-none"></div>
                 
                 <div className="relative z-10">
                   <div className="w-12 h-12 rounded-md bg-[#4a423b] flex items-center justify-center text-[#fabb67] mb-8 shadow-inner">
                     <Calendar className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-semibold mb-3 text-white">Calendar Autopilot</h3>
                   <p className="text-white/80 text-sm leading-relaxed max-w-md">
                     Negotiate meeting times and schedule events without lifting a finger. Your AI assistant manages your availability like a pro.
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-left mb-0 text-primary-foreground leading-tight">Reclaim 10 hours of<br/>your week.</h2>
                <p className="text-primary-foreground/80 text-lg max-w-md">
                  Inbox AI works silently in the background, organizing the chaos of a cluttered inbox into a perfectly orchestrated calendar.
                </p>
                <ul className="space-y-4">
                  {[
                    "Zero setup required for Gmail & Outlook",
                    "Enterprise-grade security and privacy",
                    "Powered by the latest Claude 3.5 Sonnet"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-sm">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                {/* Abstract UI elements mimicking drafting/email process */}
                <div className="bg-black/20 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-8 space-y-4 border border-white/10 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                   
                   <div className="bg-white/10 backdrop-blur-md rounded-[1rem] p-4 flex items-center gap-4 border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-primary-foreground">
                         <Zap className="w-4 h-4" />
                      </div>
                      <div className="flex-1 space-y-2">
                         <div className="w-2/3 h-2 rounded bg-white/30"></div>
                         <div className="w-1/3 h-2 rounded bg-white/20"></div>
                      </div>
                      <div className="text-[10px] font-bold tracking-wider text-secondary uppercase">Drafting...</div>
                   </div>

                   <div className="bg-white/5 backdrop-blur-md rounded-[1rem] p-4 flex items-center gap-4 border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white/60">
                         <Inbox className="w-4 h-4" />
                      </div>
                      <div className="flex-1 space-y-2">
                         <div className="w-1/2 h-2 rounded bg-white/20"></div>
                         <div className="w-1/4 h-2 rounded bg-white/10"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-background py-24 border-b border-border relative" id="pricing">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="mb-4">Simple, Transparent Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">Choose the perfect plan to scale your inbox automation. No hidden fees.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
              {/* Clerk Pricing Table (replaces Starter & Pro) */}
              <div className="md:col-span-2">
                <PricingTable 
                  appearance={{
                    elements: {
                      rootBox: "w-full h-full",
                      pricingTable: "grid md:grid-cols-2 gap-8 items-stretch h-full w-full",
                      pricingTableCard: "rounded-[1.5rem] border border-border !bg-card p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative w-full m-0 overflow-visible",
                      pricingTableCardHeader: "mb-8",
                      pricingTableCardTitle: "text-xl font-semibold text-foreground mb-2",
                      pricingTableCardDescription: "text-muted-foreground text-sm",
                      pricingTableCardPrice: "text-4xl font-bold text-foreground font-heading",
                      pricingTableCardPricePeriod: "text-muted-foreground",
                      pricingTableCardFeatures: "space-y-4 mb-8 flex-1 mt-8",
                      pricingTableCardFeature: "flex items-start gap-3 text-sm font-medium text-foreground/80",
                      pricingTableCardFeatureIcon: "h-5 w-5 text-primary shrink-0",
                      pricingTableButton: "w-full rounded-md h-12 text-base font-medium mt-auto bg-primary text-primary-foreground hover:bg-primary/90",
                      pricingTableCardDivider: "hidden",
                    }
                  }}
                />
              </div>

              {/* Enterprise Plan (Demo) */}
              <div className="rounded-[1.5rem] bg-[#362e28] border border-[#4a423b] text-white p-8 flex flex-col h-full shadow-md relative">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                  <p className="text-white/70 text-sm">Custom solutions for large teams and organizations.</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white font-heading">Custom</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {["Dedicated AI Agent instances", "Custom CRM integrations", "SLA guarantees", "Dedicated success manager"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 className="h-5 w-5 text-[#fabb67] shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full bg-white text-[#362e28] hover:bg-white/90 rounded-md h-12 text-base font-medium">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
