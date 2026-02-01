import { useRef } from "react";
import { Inbox, Target, Building2, Users, CalendarCheck, Zap, Brain, Link } from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Enquiries, instantly organised",
    description: "Capture enquiries from web forms, ads and portals, then route them to the right owner with the right context, ready to action.",
  },
  {
    icon: Target,
    title: "Qualified leads, clean stages",
    description: "Qualify early, assign clear ownership, and move leads through stage gates only when real actions happen, so next steps remain obvious, and attention is directed toward serious buyers and tenants.",
  },
  {
    icon: Building2,
    title: "Inventory, on the move",
    description: "Keep every property clean, current, and close-ready in one record. Capture the context prospects care about, then use gentle nudges to keep availability fresh and link it all to leads and feedback.",
  },
  {
    icon: Link,
    title: "Best matches, faster",
    description: "Match buyers and tenants to the right properties using preferences, budget bands, and intent signals instantly.",
  },
  {
    icon: Zap,
    title: "Automation that behaves",
    description: "Preset automation keeps tasks, reminders and queues moving, with timely nudges and status updates sent automatically.",
  },
  {
    icon: Users,
    title: "Agent network, curated",
    description: "Build a trusted partner network, route opportunities, and keep collaboration accountable.",
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

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
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
