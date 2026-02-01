"use client";

import { useFormOpener } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const benefits = [
    "Discounted subscription pricing for early adopters",
    "Free onboarding to get your team live quickly and consistently",
    "All new features released in your first 12 months included at no extra cost",
    // "Priority implementation support during your launch period",
    "Early access to partner resources (templates, playbooks and rollout guidance)",
    "Limited availability: offered to the first 50 accounts to complete sign-up",
];

export default function EarlybirdPage() {
    const openForm = useFormOpener();

    return (
        <>
            <section className="section-padding bg-background">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-primary mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">Limited to first 50 accounts</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Early Bird Offer for Accounts
                        </h1>
                        <p className="text-lg text-muted-foreground mb-10">
                            Secure preferred pricing and priority onboarding as one of our first 50 accounts.
                        </p>

                        {/* Benefits */}
                        <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 mb-10">
                            <h2 className="font-semibold text-xl mb-6">What's included</h2>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="text-center mb-12">
                            <Button
                                variant="hero"
                                size="xl"
                                onClick={() => openForm("earlybird")}
                            >
                                Enquire to apply
                            </Button>
                        </div>

                        {/* Terms */}
                        <div className="mt-12 pt-8 border-t border-border/50">
                            <p className="text-xs sm:text-sm italic text-muted-foreground leading-relaxed">
                                {/* Early Bird availability is limited to the first 50 eligible agencies and is secured on contract signature and/or first payment (as stated in your order form). Discount applies to the agreed plan only and is not transferable. Free onboarding is provided within a defined scope and timeframe; additional services are chargeable. "New features" refers to standard plan releases during the first 12 months; excludes premium modules, usage-based charges, third-party fees, and bespoke development. Offer may be amended or withdrawn at any time prior to acceptance. */}
                                Early Bird is limited to the first 50 eligible agency or builder accounts successfully onboarded and is secured only on order form/contract signature and first payment (as set out in the order form). The discount applies only to the agreed plan and is non-transferable. Free onboarding is included within a defined scope and timeframe; anything outside scope may be chargeable, subject to availability and prior agreement. “New features” means standard plan releases made generally available during the first 12 months, excluding premium modules, add-ons, usage-based charges, third-party fees, and bespoke development. <br />
                                We may amend or withdraw the offer at any time before acceptance; this will not affect orders already accepted.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
