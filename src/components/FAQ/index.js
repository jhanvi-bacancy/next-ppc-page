import React from "react";
import { HeadingH2, HeadingH5 } from "../ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "../../lib/utils";

const FAQ = ({ data, className }) => {
  return (
    <section className={cn("", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-12 md:relative md:flex-row w-full">
          {/* Left Container - Sticky */}
          <div className="w-full md:w-1/4 md:sticky md:top-[10rem] md:h-fit">
            <HeadingH2 className="">Frequently Asked Questions</HeadingH2>
            <div className="flex md:flex-col gap-x-1 mt-20">
              <HeadingH5 className="!text-primary !mb-0">
                Still have questions?
              </HeadingH5>
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={() => {
                  window.location.href = "#contact-form-id";
                }}
              >
                <span
                  className="text-primary text-h5 font-semibold"
                  onClick={() => {
                    window.location.href = "#contact-form-id";
                  }}
                >
                  Let&apos;s talk
                </span>
                <span className="text-gray-light text-h5">&rarr;</span>
              </div>
            </div>
          </div>

          {/* Right Container - Scrollable Accordion */}
          <div className="w-full md:w-3/4 md:pl-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {data.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg px-6 bg-white shadow-sm"
                >
                  <AccordionTrigger
                    className="md:text-xl text-sm leading-relaxed font-medium text-dark hover:no-underline py-6"
                    iconClassName="text-primary h-8 w-8"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="md:text-xl text-sm leading-relaxed text-secondary pb-6 mt-2">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
