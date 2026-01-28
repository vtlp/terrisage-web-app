"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, addDays, isWeekend, startOfToday } from "date-fns";
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
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle, Loader2, ChevronLeft, Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Please enter a valid email address").max(255),
    phone: z.string().min(5, "Please enter a valid phone number").max(20),
    company: z.string().max(100).optional(),
    notes: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface DemoBookingFlowProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const TIME_SLOTS = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"
];

export function DemoBookingFlow({ open, onOpenChange }: DemoBookingFlowProps) {
    const [step, setStep] = useState<"date" | "details" | "success">("date");
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const handleDateSelect = (date: Date | undefined) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleNext = () => {
        if (selectedDate && selectedTime) {
            setStep("details");
        }
    };

    const handleBack = () => {
        setStep("date");
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            // Simulate API call
            console.log("Booking submission:", {
                to: "contact@terrisage.com",
                date: selectedDate ? format(selectedDate, "PPP") : "",
                time: selectedTime,
                timezone: "Europe/London",
                ...data,
            });

            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStep("success");
        } catch (error) {
            console.error("Booking error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        onOpenChange(false);
        // Reset state after a delay to avoid flickering during close animation
        setTimeout(() => {
            setStep("date");
            setSelectedDate(undefined);
            setSelectedTime(null);
            reset();
        }, 300);
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className={cn(
                "sm:max-w-[480px] transition-all duration-300",
                step === "date" ? "sm:max-w-[600px]" : "sm:max-w-[480px]"
            )}>
                {step === "success" ? (
                    <div className="py-8 text-center">
                        <div className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <DialogTitle className="text-2xl mb-2 font-bold">Demo request confirmed</DialogTitle>
                        <DialogDescription className="text-muted-foreground mb-8">
                            We've received your request for a demo on{" "}
                            <span className="font-semibold text-foreground">
                                {selectedDate && format(selectedDate, "eeee, MMMM do")}
                            </span>{" "}
                            at{" "}
                            <span className="font-semibold text-foreground">{selectedTime} (Europe/London)</span>.
                            <br /><br />
                            A member of our team will reach out shortly to confirm the details.
                        </DialogDescription>
                        <Button
                            variant="outline"
                            className="w-full h-12"
                            onClick={handleClose}
                        >
                            Back to Home
                        </Button>
                    </div>
                ) : (
                    <>
                        <DialogHeader className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                {step === "details" && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 -ml-2"
                                        onClick={handleBack}
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                )}
                                <DialogTitle className="text-xl">
                                    {step === "date" ? "Select a date and time" : "Confirm your details"}
                                </DialogTitle>
                            </div>
                            <DialogDescription>
                                {step === "date"
                                    ? "Choose a slot that works for your team. All times in Europe/London."
                                    : "Nearly there. Tell us a bit about yourself so we can tailor the demo."
                                }
                            </DialogDescription>
                        </DialogHeader>

                        {step === "date" ? (
                            <div className="space-y-6">
                                <div className="grid sm:grid-cols-[1fr,200px] gap-6">
                                    <div className="border rounded-xl p-3 bg-muted/30">
                                        <Calendar
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={handleDateSelect}
                                            disabled={(date) =>
                                                date < startOfToday() || isWeekend(date)
                                            }
                                            initialFocus
                                            className="rounded-md border-none"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
                                            <Clock className="w-4 h-4" />
                                            Available slots
                                        </div>
                                        {selectedDate ? (
                                            <div className="grid grid-cols-1 gap-2 max-h-[280px] overflow-y-auto pr-1">
                                                {TIME_SLOTS.map((slot) => (
                                                    <Button
                                                        key={slot}
                                                        variant={selectedTime === slot ? "primary" : "outline"}
                                                        size="sm"
                                                        className="w-full transition-all"
                                                        onClick={() => setSelectedTime(slot)}
                                                    >
                                                        {slot}
                                                    </Button>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="h-[280px] flex items-center justify-center border-2 border-dashed rounded-xl text-xs text-muted-foreground text-center p-4">
                                                Pick a date to see available times
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    className="w-full h-12"
                                    disabled={!selectedDate || !selectedTime}
                                    onClick={handleNext}
                                >
                                    Continue
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name *</Label>
                                        <Input id="name" {...register("name")} placeholder="Your name" />
                                        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input id="email" type="email" {...register("email")} placeholder="you@company.com" />
                                        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone *</Label>
                                        <Input id="phone" type="tel" {...register("phone")} placeholder="+44 7XXX XXXXXX" />
                                        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" {...register("company")} placeholder="Agency name" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes">Notes (optional)</Label>
                                    <Textarea
                                        id="notes"
                                        {...register("notes")}
                                        placeholder="Anything specific you'd like to see?"
                                        rows={3}
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full h-12"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                                Confirming...
                                            </>
                                        ) : (
                                            "Confirm Demo Booking"
                                        )}
                                    </Button>
                                    <p className="text-[10px] text-center text-muted-foreground mt-3">
                                        By clicking confirm, you agree to our Terms and Privacy Policy.
                                    </p>
                                </div>
                            </form>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
