import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(5, "Please enter a valid phone number").max(20),
  company: z.string().max(100).optional(),
  message: z.string().max(1000).optional(),
  honeypot: z.string().max(0), // Anti-spam honeypot
});

type FormData = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: "register" | "demo" | "earlybird";
}

const variants = {
  register: {
    title: "Register your interest",
    description: "Share your details and we'll get in touch to discuss how Terrisage can work for your team.",
  },
  demo: {
    title: "Book a demo",
    description: "Share a few details and we’ll tailor a quick view of how Terrisage fits your team’s day-to-day.",
  },
  earlybird: {
    title: "Apply for Early Bird",
    description: "Join our first 50 agency partners and secure preferred pricing with priority onboarding.",
  },
};

export function LeadCaptureForm({ open, onOpenChange, variant }: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.honeypot) {
      console.log("Spam detected");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual email service integration
      // Example using EmailJS, Resend, SendGrid, or Postmark
      // For now, we'll simulate the submission

      console.log("Form submission:", {
        to: "contact@terrisage.com",
        from: data.email,
        subject: `New ${variant} request from ${data.name}`,
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || "Not provided",
          message: data.message || "No message",
          variant,
        },
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);

      // Show success state for 3 seconds then close
      setTimeout(() => {
        onOpenChange(false);
        setIsSuccess(false);
        reset();
      }, 3000);

    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at contact@terrisage.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setIsSuccess(false);
    reset();
  };

  const { title, description } = variants[variant];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-xl mb-2">We've received your request</DialogTitle>
            <DialogDescription className="text-muted-foreground mb-6">
              Thank you for your interest. We'll be in touch shortly.
            </DialogDescription>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleClose}
            >
              Back to Home
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              {/* Honeypot - hidden from users */}
              <input
                type="text"
                {...register("honeypot")}
                className="absolute -left-[9999px] opacity-0"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+44 7XXX XXXXXX"
                  {...register("phone")}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company name</Label>
                <Input
                  id="company"
                  placeholder="Your agency or company"
                  {...register("company")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your team or requirements..."
                  rows={3}
                  {...register("message")}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
