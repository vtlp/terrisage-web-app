import { UserCheck, Users, Building } from "lucide-react";

const audiences = [
  {
    icon: UserCheck,
    title: "Channel Partners & Consultants",
    description: "Organise projects, track leads and manage lead claim windows while advising clients confidently.",
  },
  {
    icon: Users,
    title: "Growing broker teams",
    description: "Broker teams scaling operations while maintaining service quality.",
  },
  {
    icon: Building,
    title: "Builders & developer sales teams",
    description: "Developer sales teams managing launches and inventory at scale.",
  },
];

export function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Who is it for?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for real estate professionals who value their time and their relationships.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 lg:p-8 border border-border/50 card-hover text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground italic">
          Not for generic multi-industry CRM needs. Terrisage is purpose-built for real estate.
        </p>
      </div>
    </section>
  );
}
