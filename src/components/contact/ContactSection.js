import React from "react";
import { ContactForm } from "./ContactForm";
import { CalendlyScript } from "./CalendlyScript";
import { cn } from "@/lib/utils";
import { HeadingH2 } from "../ui/typography";

export function ContactSection({ className }) {
  return (
    <section className={cn("", className)} id="form">
      <div className="relative min-h-screen w-full py-24 pb-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://assets.bacancytechnology.com/landing/images/banner-ppc/Conversation-sec-min.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/80" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-28 w-full">
            {/* Left side - Contact Form */}
            <div className="w-full lg:w-1/2">
              <HeadingH2 className="text-center font-bold !text-white mb-8">
                Start a Conversation
              </HeadingH2>
              <ContactForm />
            </div>

            {/* Center - OR divider (visible only on desktop) */}
            <div className="hidden lg:flex h-full m-auto items-center justify-center">
              <div className="bg-primary text-white text-base font-medium px-6 py-2 rounded-full">
                OR
              </div>
            </div>

            {/* Mobile OR divider */}
            <div className="flex lg:hidden items-center justify-center w-full">
              <div className="bg-primary text-white text-base font-medium px-6 py-2 rounded-full">
                OR
              </div>
            </div>

            {/* Right side - Calendly Widget */}
            <div className="w-full lg:w-1/2">
              <HeadingH2 className="text-center font-bold !text-white mb-8">
                Book a Meeting
              </HeadingH2>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/americas-3/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "600px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <CalendlyScript />
      </div>
    </section>
  );
}
