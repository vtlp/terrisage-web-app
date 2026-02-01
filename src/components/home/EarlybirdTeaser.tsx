import { useFormOpener } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function EarlybirdTeaser() {
  const openForm = useFormOpener();

  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Limited to first 50 accounts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join our Early Bird programme
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            Secure preferred pricing, priority onboarding, and early access to partner resources.
          </p>

          <Button
            variant="hero"
            size="lg"
            onClick={() => openForm("earlybird")}
          >
            Apply for Early Bird
          </Button>
        </div>
      </div>
    </section>
  );
}
