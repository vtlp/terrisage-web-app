import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredResources = [
  {
    title: "CRM Hygiene That Prints Money",
    summary: "Practical habits that make a CRM worth using: clean data, clear next-steps, and follow-up discipline.",
  },
  {
    title: "Rocks, Pebbles, and Sand",
    summary: "A simple productivity model to protect revenue-driving work and reduce busywork.",
  },
  {
    title: "Reading the Real Motive",
    summary: "How the right dropdowns and notes uncover motivation and shorten time-to-close.",
  },
];

export function ResourcesTeaser() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Thinking and frameworks for modern real estate teams.
            </p>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {featuredResources.map((resource, index) => (
            <Link
              key={index}
              href="/resources"
              className="group bg-card rounded-xl p-6 border border-border/50 card-hover"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-[16/10] bg-muted rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10"></div>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resource.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
