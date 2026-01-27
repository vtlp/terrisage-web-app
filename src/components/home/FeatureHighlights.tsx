import { useRef } from "react";
import { Inbox, Target, Building2, Users, CalendarCheck, Zap, Brain, Link } from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Enquiries, instantly organised",
    description: "Capture enquiries from forms, ads and messages, then route them to the right owner with the right context—ready to action.",
  },
  {
    icon: Target,
    title: "Leads, under control",
    description: "Assign owners, qualify quickly, and keep next steps visible so nothing slips.",
  },
  {
    icon: Building2,
    title: "Properties that sell",
    description: "Keep listings structured, media-ready, and linked to leads, viewings and feedback—one clean record.",
  },
  {
    icon: Link,
    title: "Best matches, faster",
    description: "Match buyers and tenants to the right listings using preferences, budget bands, and intent signals—instantly.",
  },
  {
    icon: Users,
    title: "Agent network, curated",
    description: "Build a trusted partner network, route opportunities, and keep collaboration accountable.",
  },
  {
    icon: CalendarCheck,
    title: "Follow-ups you can trust",
    description: "Tasks, reminders and queues that keep momentum—without managers chasing updates.",
  },
  {
    icon: Zap,
    title: "Automation that behaves",
    description: "Trigger nudges and updates based on activity—simple rules, fully under your control.",
  },
  {
    icon: Brain,
    title: "AI with judgement",
    description: "Surface intent and patterns—then refine them with human judgement and relationship notes that keep deals real.",
  },
];

export function FeatureHighlights() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A considered set of tools for teams who want to sell more, not manage more.
          </p>
        </div>

        {/* Mobile: Horizontal Scroller */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
          {/* Progress dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {features.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted"
              />
            ))}
          </div>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const Icon = feature.icon;
  
  return (
    <div className="flex-shrink-0 w-[280px] lg:w-auto snap-start">
      <div className="bg-background rounded-xl p-6 h-full border border-border/50 card-hover group">
        {/* Illustration block */}
        <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        {/* Title */}
        <h3 className="font-semibold text-lg mb-2">
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
