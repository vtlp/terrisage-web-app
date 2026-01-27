"use client";

import { useFormOpener } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Lightbulb, Heart, Zap } from "lucide-react";

const principles = [
    {
        icon: Zap,
        title: "Mobile-first, always",
        description: "Real estate happens on the go. Our tools are built for action, not desk work.",
    },
    {
        icon: Shield,
        title: "Privacy by design",
        description: "We build with care for data privacy and good judgement, because reputation is not something you automate.",
    },
    {
        icon: Lightbulb,
        title: "AI with restraint",
        description: "Useful, discreet, and firmly under your control. We build for the former, not the noise.",
    },
    {
        icon: Heart,
        title: "Human touch",
        description: "Technology should support how professionals earn trust: by being responsive, reliable, and respectful.",
    },
];

export default function AboutPage() {
    const openForm = useFormOpener();

    return (
        <>
            {/* Hero */}
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-8">
                            About Terrisage
                        </h1>

                        <div className="prose prose-lg text-muted-foreground space-y-6">
                            <p>
                                Terrisage is a mobile-first CRM for real estate teams, built to keep work moving and relationships intact. It brings order to leads, steadiness to follow-ups, and a clear view of what matters next—without turning your day into a paperwork exercise.
                            </p>
                            <p>
                                We come from technology, and we are convinced it can improve real estate sales and marketing in practical ways. Used well, AI can take care of the routine: surfacing priorities, reducing repetition, and helping teams stay consistent. Used badly, it becomes noise. Terrisage is designed for the former—useful, discreet, and firmly under your control.
                            </p>
                            <p>
                                Real estate is, at its heart, personal. Our aim is to support the way professionals earn trust: by being responsive, reliable, and respectful with information. We build with care for privacy and good judgement, because reputation is not something you automate.
                            </p>
                            <p>
                                Terrisage is for teams who want modern tools, a premium standard, and a system that helps them grow—without losing the human touch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Principles */}
            <section className="section-padding bg-card">
                <div className="container-wide">
                    <h2 className="text-3xl font-bold mb-10">Design principles</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((principle, index) => {
                            const Icon = principle.icon;
                            return (
                                <div key={index} className="bg-background rounded-xl p-6 border border-border/50">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-background border-t border-border">
                <div className="container-wide text-center">
                    <h2 className="text-3xl font-bold mb-4">Let's talk</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                        Interested in learning more about Terrisage? We'd love to hear from you.
                    </p>
                    <Button variant="hero" size="lg" onClick={() => openForm("register")}>
                        Get in touch
                    </Button>
                </div>
            </section>
        </>
    );
}
