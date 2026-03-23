import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { useSendMessage } from "../hooks/useQueries";
import { useScrollReveal } from "../hooks/useScrollReveal";

const emptyForm = { name: "", email: "", phone: "", message: "" };

export default function ContactSection() {
  const ref = useScrollReveal();
  const { mutate, isPending, isSuccess, isError, reset } = useSendMessage();
  const [form, setForm] = useState(emptyForm);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={ref} className="scroll-reveal text-center mb-10">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green">
            Find Us
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-card h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5!2d76.8228!3d17.3297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzQ2LjkiTiA3NsKwNDknMjIuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant location"
              />
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Address
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Old Jewargi Rd, beside Siddeshwar Kalyan Mantap, Kalaburagi,
                    Karnataka 585101
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">⏰</span>
                <div>
                  <p className="font-semibold text-foreground text-sm">Hours</p>
                  <p className="text-muted-foreground text-sm">
                    Mon – Sun: 11:00 AM – 10:30 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📞</span>
                <div>
                  <p className="font-semibold text-foreground text-sm">Phone</p>
                  <a
                    href="tel:+918904839954"
                    className="text-brand-green font-medium text-sm hover:underline"
                    data-ocid="contact.link"
                  >
                    +91 89048 39954
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/918904839954"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.button"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5e] text-white font-bold py-3 rounded-full transition-colors"
              >
                <SiWhatsapp className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-xl font-bold text-brand-green mb-6">
              Send us a Message
            </h3>
            {isSuccess ? (
              <div
                className="text-center py-8"
                data-ocid="contact.success_state"
              >
                <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto mb-3" />
                <h4 className="text-lg font-bold text-brand-green mb-1">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  We&apos;ll get back to you shortly.
                </p>
                <Button
                  onClick={() => {
                    setForm(emptyForm);
                    reset();
                  }}
                  variant="outline"
                  className="rounded-full"
                  data-ocid="contact.secondary_button"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="contact.panel"
              >
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Your Name *
                  </Label>
                  <Input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Full name"
                    required
                    className="rounded-lg"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Email *
                  </Label>
                  <Input
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="your@email.com"
                    type="email"
                    required
                    className="rounded-lg"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Phone
                  </Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                    className="rounded-lg"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-1.5 block">
                    Message *
                  </Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                    className="rounded-lg resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                {isError && (
                  <p
                    className="text-destructive text-sm"
                    data-ocid="contact.error_state"
                  >
                    Failed to send. Please try calling us directly.
                  </p>
                )}
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white rounded-full py-3 font-bold"
                  data-ocid="contact.submit_button"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
