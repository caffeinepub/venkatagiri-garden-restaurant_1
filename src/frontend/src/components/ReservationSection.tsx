import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useMakeReservation } from "../hooks/useQueries";
import { useScrollReveal } from "../hooks/useScrollReveal";

const timeSlots = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "",
  specialRequests: "",
};

export default function ReservationSection() {
  const ref = useScrollReveal();
  const { mutate, isPending, isSuccess, isError, reset } = useMakeReservation();
  const [form, setForm] = useState(emptyForm);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      name: form.name,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: Number.parseInt(form.guests) || 1,
      specialRequests: form.specialRequests,
    });
  };

  const handleReset = () => {
    setForm(emptyForm);
    reset();
  };

  return (
    <section id="reservations" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div ref={ref} className="scroll-reveal text-center mb-10">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">
            Reservations
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green">
            Book a Table
          </h2>
          <p className="text-muted-foreground mt-3">
            Reserve your spot and we&apos;ll make sure everything is perfect
          </p>
        </div>
        <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
          {isSuccess ? (
            <div
              className="text-center py-10"
              data-ocid="reservation.success_state"
            >
              <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-green mb-2">
                Reservation Confirmed!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you! We&apos;ve received your booking. Our team will call
                you to confirm.
              </p>
              <Button
                onClick={handleReset}
                className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-8"
                data-ocid="reservation.secondary_button"
              >
                Make Another Booking
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="reservation.panel"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Full Name *
                  </Label>
                  <Input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    className="rounded-lg"
                    data-ocid="reservation.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Phone Number *
                  </Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    type="tel"
                    className="rounded-lg"
                    data-ocid="reservation.input"
                  />
                </div>
              </div>
              <div>
                <Label className="text-sm font-semibold mb-1.5 block">
                  Email Address
                </Label>
                <Input
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="your@email.com"
                  type="email"
                  className="rounded-lg"
                  data-ocid="reservation.input"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Date *
                  </Label>
                  <Input
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="rounded-lg"
                    data-ocid="reservation.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Time *
                  </Label>
                  <Select onValueChange={(v) => update("time", v)}>
                    <SelectTrigger
                      className="rounded-lg"
                      data-ocid="reservation.select"
                    >
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="text-sm font-semibold mb-1.5 block">
                  Number of Guests *
                </Label>
                <Select onValueChange={(v) => update("guests", v)}>
                  <SelectTrigger
                    className="rounded-lg"
                    data-ocid="reservation.select"
                  >
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-semibold mb-1.5 block">
                  Special Requests
                </Label>
                <Textarea
                  value={form.specialRequests}
                  onChange={(e) => update("specialRequests", e.target.value)}
                  placeholder="Any special requirements or celebrations..."
                  rows={3}
                  className="rounded-lg resize-none"
                  data-ocid="reservation.textarea"
                />
              </div>
              {isError && (
                <p
                  className="text-destructive text-sm"
                  data-ocid="reservation.error_state"
                >
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-brand-green hover:bg-brand-green-dark text-white rounded-full py-3 font-bold text-base"
                data-ocid="reservation.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Booking...
                  </>
                ) : (
                  "Confirm Reservation"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
