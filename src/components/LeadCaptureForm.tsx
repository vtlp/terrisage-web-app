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
import { Check, CheckCircle, ChevronsUpDown, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const countries = [
  { name: "Afghanistan", code: "AF", dialCode: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "AL", dialCode: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", dialCode: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "AD", dialCode: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "AO", dialCode: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "AR", dialCode: "+54", flag: "🇦🇷" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "AT", dialCode: "+43", flag: "🇦🇹" },
  { name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", dialCode: "+880", flag: "🇧🇩" },
  { name: "Belgium", code: "BE", dialCode: "+32", flag: "🇧🇪" },
  { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "Chile", code: "CL", dialCode: "+56", flag: "🇨🇱" },
  { name: "China", code: "CN", dialCode: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", dialCode: "+57", flag: "🇨🇴" },
  { name: "Denmark", code: "DK", dialCode: "+45", flag: "🇩🇰" },
  { name: "Egypt", code: "EG", dialCode: "+20", flag: "🇪🇬" },
  { name: "Finland", code: "FI", dialCode: "+358", flag: "🇫🇮" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "Greece", code: "GR", dialCode: "+30", flag: "🇬🇷" },
  { name: "Hong Kong", code: "HK", dialCode: "+852", flag: "🇭🇰" },
  { name: "Hungary", code: "HU", dialCode: "+36", flag: "🇭🇺" },
  { name: "Iceland", code: "IS", dialCode: "+354", flag: "🇮🇸" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", dialCode: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "IR", dialCode: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", dialCode: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "IL", dialCode: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", dialCode: "+962", flag: "🇯🇴" },
  { name: "Kenya", code: "KE", dialCode: "+254", flag: "🇰🇪" },
  { name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼" },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾" },
  { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽" },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿" },
  { name: "Nigeria", code: "NG", dialCode: "+234", flag: "🇳🇬" },
  { name: "Norway", code: "NO", dialCode: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "OM", dialCode: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "PK", dialCode: "+92", flag: "🇵🇰" },
  { name: "Peru", code: "PE", dialCode: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "PH", dialCode: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "PL", dialCode: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", dialCode: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦" },
  { name: "Romania", code: "RO", dialCode: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "RU", dialCode: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", dialCode: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", dialCode: "+94", flag: "🇱🇰" },
  { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { name: "Taiwan", code: "TW", dialCode: "+886", flag: "🇹🇼" },
  { name: "Thailand", code: "TH", dialCode: "+66", flag: "🇹🇭" },
  { name: "Turkey", code: "TR", dialCode: "+90", flag: "🇹🇷" },
  { name: "Ukraine", code: "UA", dialCode: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "Vietnam", code: "VN", dialCode: "+84", flag: "🇻🇳" },
].sort((a, b) => a.name.localeCompare(b.name));

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80, "Name must be at most 80 characters"),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(5, "Please enter a valid phone number").max(20, "Phone number must be at most 20 characters"),
  company: z.string().max(100).optional(),
  message: z.string().max(2000, "Message must be at most 2000 characters").optional(),
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
    description: "Join our first 50 accounts and secure preferred pricing with priority onboarding.",
  },
};

export function LeadCaptureForm({ open, onOpenChange, variant }: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "IN") || countries[0]);
  const [isCountryPickerOpen, setIsCountryPickerOpen] = useState(false);
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
    const phoneNumber = `${selectedCountry.dialCode}${data.phone.replace(/\s+/g, "")}`;

    const mutation = `
      mutation CreateShowInterest($input: CreateShowInterestInput!) {
        createShowInterest(input: $input) {
          id
          createdAt
        }
      }
    `;

    const variables = {
      input: {
        name: data.name,
        email: data.email.toLowerCase(),
        phoneNumber: phoneNumber,
        companyName: data.company || "",
        message: data.message || "",
        source: "WEBSITE",
      },
    };

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: mutation,
          variables,
        }),
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0]?.message || "Failed to submit interest");
      }

      setIsSuccess(true);

      // Show success state for 3 seconds then close
      setTimeout(() => {
        onOpenChange(false);
        setIsSuccess(false);
        reset();
      }, 3000);

    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or email us directly at contact@terrisage.com",
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
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
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
                <div className="flex gap-1">
                  <Popover open={isCountryPickerOpen} onOpenChange={setIsCountryPickerOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={isCountryPickerOpen}
                        className="w-[80px] justify-between px-3"
                      >
                        <span className="flex items-center gap-1 overflow-hidden">
                          {/* <span className="text-base">{selectedCountry.flag}</span> */}
                          <span className="text-sm font-medium">{selectedCountry.dialCode}</span>
                        </span>
                        <ChevronsUpDown className="h-3 w-3 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0" align="start">
                      <Command>
                        <CommandInput placeholder="Search country..." className="h-9" />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((country) => (
                              <CommandItem
                                key={country.code}
                                value={`${country.name} ${country.dialCode}`}
                                onSelect={() => {
                                  setSelectedCountry(country);
                                  setIsCountryPickerOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedCountry.code === country.code ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                <span className="mr-2">{country.flag}</span>
                                <span className="flex-1 truncate">{country.name}</span>
                                <span className="text-muted-foreground ml-auto">{country.dialCode}</span>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="7XXX XXXXXX"
                    {...register("phone")}
                    className={cn("flex-1", errors.phone ? "border-destructive" : "")}
                  />
                </div>
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
