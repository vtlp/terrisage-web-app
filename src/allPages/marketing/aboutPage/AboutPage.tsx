"use client";

import { useFormOpener } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Lightbulb, Heart, Zap } from "lucide-react";



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
                                Terrisage is a mobile-first CRM for real estate teams. It is a sales desk in your pocket: your lead book, follow-up diary, and site-visit register, organised as an enquiry-to-closure pipeline, with clear ownership across the team.
                            </p>
                            <p>
                                Real estate is, at its heart, personal because every decision is tied to someone’s life, time, and money. When it’s personal, trust isn’t a slogan; it’s built in the everyday moments.
                            </p>
                            <p>
                                Terrisage is built for agents, brokers, developers' sales wing, and property managers to help them stay responsive, handle information with care, and take the right next step at the right time, yielding smoother transactions and trust at scale.
                            </p>
                        </div>
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
