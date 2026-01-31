import { useFormOpener } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  const openForm = useFormOpener();

  return (
    <section className="section-padding bg-card border-t border-border">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to work smarter?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Share a few details and we’ll tailor a quick view of how Terrisage fits your team’s day-to-day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              data-cal-namespace="30min"
              data-cal-link="terrisage-product-demo/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Book a demo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
