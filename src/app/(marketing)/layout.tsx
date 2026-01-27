import { LayoutWithContext } from "@/components/layout/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terrisage - Building Trust in Every Acre",
    description: "Terrisage is a land intelligence and management platform for real estate developers.",
};

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <LayoutWithContext>{children}</LayoutWithContext>;
}
