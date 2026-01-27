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
            Share your details and we'll show you how Terrisage fits your team.
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
              onClick={() => openForm("demo")}
            >
              Book a demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No calendar links. We'll get in touch.
          </p>
        </div>
      </div>
    </section>
  );
}
