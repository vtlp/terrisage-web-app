"use client";

import { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { usePathname } from "next/navigation";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [formOpen, setFormOpen] = useState(false);
  const [formVariant, setFormVariant] = useState<"register" | "demo" | "earlybird">("register");
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      const currentTheme = (theme === 'system' ? resolvedTheme : theme) || 'light';
      cal("ui", {
        "theme": currentTheme as any,
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#667a00" },
          "dark": { "cal-brand": "#283000" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, [theme, resolvedTheme]);

  const handleOpenForm = (variant: "register" | "demo" | "earlybird") => {
    setFormVariant(variant);
    setFormOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onOpenForm={handleOpenForm} />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <LeadCaptureForm
        open={formOpen}
        onOpenChange={setFormOpen}
        variant={formVariant}
      />
    </div>
  );
}

// Export context for opening form from anywhere
import { createContext, useContext } from "react";

type FormOpener = (variant: "register" | "demo" | "earlybird") => void;
export const FormContext = createContext<FormOpener>(() => { });
export const useFormOpener = () => useContext(FormContext);

export function LayoutWithContext({ children }: LayoutProps) {
  const [formOpen, setFormOpen] = useState(false);
  const [formVariant, setFormVariant] = useState<"register" | "demo" | "earlybird">("register");
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      const currentTheme = (theme === 'system' ? resolvedTheme : theme) || 'light';
      cal("ui", {
        "theme": currentTheme as any,
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#667a00" },
          "dark": { "cal-brand": "#283000" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, [theme, resolvedTheme]);

  const handleOpenForm: FormOpener = (variant) => {
    setFormVariant(variant);
    setFormOpen(true);
  };

  return (
    <FormContext.Provider value={handleOpenForm}>
      <div className="min-h-screen flex flex-col">
        <Navigation onOpenForm={handleOpenForm} />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <LeadCaptureForm
          open={formOpen}
          onOpenChange={setFormOpen}
          variant={formVariant}
        />
      </div>
    </FormContext.Provider>
  );
}
