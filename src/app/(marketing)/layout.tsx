import { LayoutWithContext } from "@/components/layout/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terrisage - Building Trust in Every Property",
    description: "Terrisage is a mobile-first CRM for real estate teams to manage leads, properties, and follow-ups.",
};

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <LayoutWithContext>{children}</LayoutWithContext>;
}
