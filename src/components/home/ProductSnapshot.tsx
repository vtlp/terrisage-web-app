import Link from "next/link";
import { Workflow, Puzzle, BarChart3, Palette, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Workflow,
    title: "Workflows",
    description: "Lead, property, marketing, and task workflows designed for real estate.",
  },
  {
    icon: Puzzle,
    title: "Integrations",
    description: "Connect with WhatsApp, social media, Meta ads, and Google.",
  },
  {
    icon: BarChart3,
    title: "Data & analytics",
    description: "Lead, team, and market insights to make better decisions.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Microsites, templates, and watermarks for a premium standard.",
  },
];

export function ProductSnapshot() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for how you work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four modules that cover the complete real estate sales cycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Explore the full product
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
