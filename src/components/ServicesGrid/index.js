import React from "react";
import Image from "next/image";
import { HeadingH2, Button, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";

const ServicesGrid = ({ className, data }) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <HeadingH2 className="text-center">{data.title}</HeadingH2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Grid Section - Left Side */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="bg-white boxed text-center flex flex-col items-center hover:shadow-sm transition-shadow"
              >
                <div className="relative svg-icon w-12 md:w-16 h-12 md:h-16 mb-3 md:mb-4">
                  <Image
                    src={service.icon}
                    alt={service.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <ParagraphElement color="secondary" noMargin>
                  {service.title}
                </ParagraphElement>
              </div>
            ))}
          </div>

          {/* Additional Services - Right Side */}
          <div className="w-full lg:w-1/3 boxed self-stretch flex flex-col">
            <div className="flex-grow space-y-6">
              {data.additionalServices.map((service, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-5 h-5 flex-shrink-0 mr-2">
                    <Image
                      src={`https://www.bacancytechnology.com/landing/images/right-arrow.png`}
                      alt="check"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <ParagraphElement color="secondary" noMargin>
                    {service}
                  </ParagraphElement>
                </div>
              ))}

              {data.ctaButton && (
                <div className="flex gap-6 flex-wrap">
                  <Button
                    href={data.ctaButton.href}
                    target={data.ctaButton.target || "_self"}
                    className="font-normal"
                    uppercase
                    fullWidth
                  >
                    {data.ctaButton.text}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
