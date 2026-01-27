"use client";

import { FileText, Clock, TrendingUp, Target, Image, Lightbulb } from "lucide-react";

const resources = [
    {
        icon: FileText,
        title: "CRM Hygiene That Prints Money",
        subtitle: "Notes, Tags, Pipelines, and Follow-up Discipline",
        summary: "Practical habits that make a CRM worth using—clean data, clear next-steps, and follow-up discipline that directly improves conversion.",
    },
    {
        icon: Clock,
        title: "Rocks, Pebbles, and Sand",
        subtitle: "The Time Framework Every Agent Needs",
        summary: "A simple productivity model to protect revenue-driving work and reduce busywork—ideal for agents who want structure without complexity.",
    },
    {
        icon: TrendingUp,
        title: "Price Stats That Actually Help",
        subtitle: "Stop Guessing, Start Positioning",
        summary: "How to use pricing signals and comps in a structured way so agents can justify pricing, manage seller expectations, and reduce negotiation friction.",
    },
    {
        icon: Target,
        title: "Reading the Real Motive",
        subtitle: "Using 'Reason for Selling' to Close More Deals",
        summary: "Shows the value of structured CRM fields—how the right dropdowns and notes uncover motivation, improve conversations, and shorten time-to-close.",
    },
    {
        icon: Image,
        title: "Cover Shot Secrets",
        subtitle: "How the Right Property Image Boosts Clicks and Conversions",
        summary: "A conversion-focused piece that positions your CRM as performance-led (not admin-led): better listings → higher engagement → better pipeline.",
    },
    {
        icon: Lightbulb,
        title: "Think Like an Investor",
        subtitle: "10-Year Vision → 90-Day Rocks for Execution",
        summary: "A modern operator mindset article: how top agents build systems, commit to one path, and execute consistently—aligns strongly with adopting tools.",
    },
];

export default function ResourcesPage() {
    return (
        <>
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-2xl mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Resources for modern real estate teams
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Thinking and frameworks for agents and agencies who want to work smarter.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((resource, index) => {
                            const Icon = resource.icon;
                            return (
                                <article
                                    key={index}
                                    className="bg-card rounded-xl border border-border/50 overflow-hidden card-hover group"
                                >
                                    {/* Thumbnail */}
                                    <div className="aspect-[16/10] bg-muted flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h2 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                            {resource.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {resource.subtitle}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {resource.summary}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
