import React from "react";
import { HeadingH2, HeadingH3, ParagraphElement } from "../ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "../../lib/utils";
import Image from "next/image";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

const FAQ = ({ data, className }) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <div className="flex flex-col gap-y-sm md:relative md:flex-row w-full">
          {/* Left Container - Sticky */}
          <div className="w-full md:w-1/4 md:sticky md:top-[10rem] md:h-fit">
            <HeadingH2 className="">Frequently Asked Questions</HeadingH2>
            <div className="flex md:flex-col gap-x-1">
              <ParagraphElement
                color="primary"
                className="text-h5 !mb-0"
                noMargin
              >
                Still have questions?
              </ParagraphElement>
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.location.href = "#contact-form-id";
                }}
              >
                <ParagraphElement
                  color="primary"
                  className="text-h5"
                  onClick={() => {
                    window.location.href = "#contact-form-id";
                  }}
                  noMargin
                >
                  Let&apos;s talk{" "}
                  <span className="inline-block h-svg-icon-24 w-svg-icon-24">
                    <Image
                      src={`${cdnImage}main-boot-5/images/tailwind/images/right-arrow-line-black.svg`}
                      alt="right-arrow"
                      width={16}
                      height={16}
                      className="object-contain inline-block h-full w-full bg-no-repeat"
                    />
                  </span>
                </ParagraphElement>
              </div>
            </div>
          </div>

          {/* Right Container - Scrollable Accordion */}
          <div className="w-full md:w-3/4 md:pl-8">
            <Accordion type="single" collapsible className="w-full space-y-sm">
              {data.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg px-6 bg-white shadow-sm"
                >
                  <AccordionTrigger
                    className="hover:no-underline"
                    iconClassName="text-primary h-8 w-8"
                  >
                    <HeadingH3 className="text-sm dark py-2" noMargin>
                      {faq.question}
                    </HeadingH3>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-secondary pb-6 mt-sm">
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
