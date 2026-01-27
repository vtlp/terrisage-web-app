"use client";

import { useFormOpener } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
    Users,
    BarChart3,
    Check,
    MessageSquare,
    Share2,
    Megaphone,
    Zap,
    CalendarCheck,
    Target
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

const workflowSections = [
    {
        id: "workflows",
        title: "Workflows",
        description: "Purpose-built workflows for real estate sales.",
        items: [
            {
                icon: Target,
                title: "Lead management",
                howItWorks: "Capture → Qualify → Assign → Follow-up queue → Stage updates → Outcome tracking.",
                includes: "Lead source tags, status/stage, next action, owner, notes, conversation links.",
            },
            {
                icon: Users,
                title: "Property management",
                howItWorks: "Create property record → Attach media/details → Link to leads → Track interest/viewings/feedback.",
                includes: "Structured fields, shareable listing views, internal visibility controls.",
            },
            {
                icon: Megaphone,
                title: "Marketing workflows",
                howItWorks: "Campaign → Enquiries captured → Attribution stored → Follow-ups tracked → Conversion visibility.",
                includes: "Meta/Google enquiry handling, forms, lead source analytics.",
            },
            {
                icon: CalendarCheck,
                title: "Tasks & follow-ups",
                howItWorks: "Task templates + Reminders + Daily focus queue; overdue prevention.",
                includes: "Team views, personal queue, manager oversight.",
            },
            {
                icon: Zap,
                title: "Automation",
                howItWorks: "Simple rules trigger nudges (e.g., 'no reply in 2 days'), stage moves, and reminders.",
                includes: "Automation is optional and controlled; no noisy AI.",
            },
        ],
    },
];

const integrations = [
    {
        icon: Share2,
        title: "Productivity",
        description: "Pinned actions, quick search, templates, and shortcuts for internal quick access.",
    },
    {
        icon: MessageSquare,
        title: "Communications",
        description: "WhatsApp and social media touchpoints—capturing context and keeping it organised.",
    },
    {
        icon: Megaphone,
        title: "Marketing",
        description: "Meta and Google integration with AI-enabled content generation support.",
    },
];

const analytics = [
    {
        title: "Lead analytics",
        description: "Prioritise and speed up follow-ups with response time, source quality, and stage drop-off insights.",
    },
    {
        title: "Team analytics",
        description: "Activity, performance, consistency, and follow-up discipline metrics.",
    },
    {
        title: "Market analytics",
        description: "Trends in real estate, sales, and technology—curated signals rather than predictions.",
    },
];

export default function ProductPage() {
    const openForm = useFormOpener();

    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            A mobile-first CRM built for real estate workflows
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Purpose-built tools for lead management, property sales, marketing attribution, and team execution.
                        </p>

                        {/* Jump links */}
                        <div className="flex flex-wrap gap-3">
                            {["Workflows", "Integrations", "Analytics", "Branding"].map((section) => (
                                <a
                                    key={section}
                                    href={`#${section.toLowerCase()}`}
                                    className="px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-accent/20 transition-colors"
                                >
                                    {section}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflows Section */}
            <section id="workflows" className="section-padding bg-card">
                <div className="container-wide">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Workflows</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
                        Five core workflows that cover the complete real estate sales cycle.
                    </p>

                    <div className="space-y-8">
                        {workflowSections[0].items.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-background rounded-xl p-6 lg:p-8 border border-border/50">
                                    <div className="grid lg:grid-cols-3 gap-6">
                                        <div>
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-2">How it works</p>
                                            <p className="text-sm">{item.howItWorks}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-2">Includes</p>
                                            <p className="text-sm">{item.includes}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Button variant="primary" size="lg" onClick={() => openForm("register")}>
                            Register interest
                        </Button>
                        <Button variant="hero-outline" size="lg" onClick={() => openForm("demo")}>
                            Book a demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section id="integrations" className="section-padding bg-background">
                <div className="container-wide">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Integrations</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
                        Connect your tools and channels without losing context.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {integrations.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-card rounded-xl p-6 border border-border/50 card-hover">
                                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Analytics Section */}
            <section id="analytics" className="section-padding bg-card">
                <div className="container-wide">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Data & analytics</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
                        Insights that help you make better decisions, not more dashboards.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {analytics.map((item, index) => (
                            <div key={index} className="bg-background rounded-xl p-6 border border-border/50">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <BarChart3 className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Button variant="primary" size="lg" onClick={() => openForm("register")}>
                            Register interest
                        </Button>
                        <Button variant="hero-outline" size="lg" onClick={() => openForm("demo")}>
                            Book a demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Branding Section */}
            <section id="branding" className="section-padding bg-background">
                <div className="container-wide">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Branding</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                        Present a premium standard to your clients with branded assets and templates.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {["Microsites", "Templates", "Webforms", "Watermarks"].map((item) => (
                            <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
                                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-muted-foreground mt-6">
                        For agencies and builders who want consistency and a premium client experience.
                    </p>
                </div>
            </section>

            <FinalCTA />
        </>
    );
}
