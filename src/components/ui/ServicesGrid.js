import React from "react";
import Image from "next/image";
import { HeadingH2, HeadingH6 } from "./typography";
import { Button } from "./button";
import { cn } from "../../lib/utils";

export function ServicesGrid({ className, data }) {
  return (
    <section className={cn("", className)}>
      <div className="container mx-auto px-4 md:px-8">
        <HeadingH2 className="text-center mb-8 lg:mb-12">
          {data.title}
        </HeadingH2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Grid Section - Left Side */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 text-center flex flex-col items-center hover:shadow-sm transition-shadow rounded-lg"
              >
                <div className="relative w-12 md:w-16 h-12 md:h-16 mb-3 md:mb-4">
                  <Image
                    src={service.icon}
                    alt={service.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <HeadingH6 className="text-dark font-normal text-sm md:text-base">
                  {service.title}
                </HeadingH6>
              </div>
            ))}
          </div>

          {/* Additional Services - Right Side */}
          <div className="w-full lg:w-1/3 p-6 rounded-lg self-stretch flex flex-col">
            <div className="flex-grow space-y-7">
              {data.additionalServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-5 h-5 flex-shrink-0 mr-2">
                    <Image
                      src={`https://www.bacancytechnology.com/landing/images/right-arrow.png`}
                      alt="check"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-secondary text-sm md:text-base">
                    {service}
                  </span>
                </div>
              ))}

              {data.ctaButton && (
                <div className="flex gap-6 flex-wrap">
                  <Button
                    href={data.ctaButton.href}
                    target={data.ctaButton.target || "_self"}
                    variant="filled"
                    size="md"
                    uppercase
                    fullWidth
                    className="sm:w-auto font-normal"
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
}
