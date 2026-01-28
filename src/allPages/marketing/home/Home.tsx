"use client";

import { useFormOpener } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { WhoIsItFor } from "@/components/home/WhoIsItFor";
import { OldVsNew } from "@/components/home/OldVsNew";
import { ProductSnapshot } from "@/components/home/ProductSnapshot";
import { ScreenshotsSection } from "@/components/home/ScreenshotsSection";
import { EarlybirdTeaser } from "@/components/home/EarlybirdTeaser";
import { ResourcesTeaser } from "@/components/home/ResourcesTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
    const openForm = useFormOpener();

    return (
        <>
            {/* Hero Section */}
            <section className="section-padding bg-background overflow-hidden">
                <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Hero Content */}
                        <div className="order-2 lg:order-1">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
                                The only CRM you'll ever need
                            </h1>
                            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl text-balance">
                                Mobile-first CRM for real estate teams to manage leads, properties, follow-ups, marketing and team execution without admin chaos.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <Button
                                    variant="hero"
                                    size="lg"
                                    onClick={() => openForm("register")}
                                >
                                    Register interest
                                </Button>
                                <Button
                                    variant="hero-outline"
                                    size="lg"
                                    onClick={() => openForm("demo")}
                                >
                                    Book a demo
                                </Button>
                            </div>

                        </div>

                        {/* Hero Visuals */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative flex items-center justify-center">
                                {/* Mobile Mockup - Primary */}
                                <div className="relative z-10 w-64 sm:w-72">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Terrisage CRM mobile app showing lead management interface"
                                        className="w-full rounded-[2rem] shadow-lg"
                                    />
                                </div>

                                {/* Dashboard Preview - Secondary */}
                                <div className="absolute -right-4 sm:right-0 top-8 w-48 sm:w-56 opacity-80 hidden sm:block">
                                    <div className="bg-card rounded-xl shadow-md p-4 border border-border">
                                        <div className="h-3 w-20 bg-muted rounded mb-3"></div>
                                        <div className="space-y-2">
                                            <div className="h-8 bg-muted rounded"></div>
                                            <div className="h-8 bg-accent/20 rounded"></div>
                                            <div className="h-8 bg-muted rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <FeatureHighlights />

            {/* Who is it for */}
            <WhoIsItFor />

            {/* Old way vs Terrisage way */}
            <OldVsNew />

            {/* Product Snapshot */}
            <ProductSnapshot />

            {/* Screenshots Section */}
            <ScreenshotsSection />

            {/* Earlybird Teaser */}
            <EarlybirdTeaser />

            {/* Resources Teaser */}
            <ResourcesTeaser />

            {/* Final CTA */}
            <FinalCTA />
        </>
    );
}
