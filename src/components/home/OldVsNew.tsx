import { X, Check } from "lucide-react";

const comparisons = [
  // {
  //   old: "WhatsApp + notes fragmented across devices",
  //   new: "Conversations and context in one place",
  // },
  {
    old: "Missed follow-ups and forgotten leads",
    new: "Automated reminders and clear next steps",
  },
  {
    old: "Unclear pipeline ownership",
    new: "Every lead has an owner and a stage",
  },
  {
    old: "Inconsistent team updates",
    new: "Real-time visibility for managers",
  },
  {
    old: "Poor lead source attribution",
    new: "Know exactly where leads come from",
  },
  {
    old: "Slow response times",
    new: "Mobile-first for instant action",
  },
  {
    old: "Manual data entry after hours",
    new: "Capture information as you work",
  },
  // {
  //   old: "No visibility into team performance",
  //   new: "Activity and outcome dashboards",
  // },
  {
    old: "Unclear lead claims and disputed eligibility",
    new: "Tagged leads with clear claim windows and status timers",
  },
  {
    old: "Builder projects scattered across PDFs, portals, and chats",
    new: "Builders and authorised projects organised in one place, ready to share",
  },
];

export function OldVsNew() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The old way vs the Terrisage way
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop firefighting. Start building a system that works.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-3">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="grid sm:grid-cols-2 gap-3 sm:gap-6"
              >
                {/* Old way */}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {comparison.old}
                  </p>
                </div>

                {/* Terrisage way */}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/10">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-foreground">
                    {comparison.new}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
