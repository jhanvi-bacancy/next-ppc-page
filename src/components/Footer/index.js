import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { ParagraphElement, HeadingH5 } from "../ui/typography";

export const Footer = ({ data, className }) => {
  const {
    backgroundImage,
    addresses,
    ratings,
    isoImage,
    getInTouchImage,
    bookCallImage,
    privacyButton,
    faqsButton,
    starImage,
  } = data;
  return (
    <footer
      className={cn("", className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 pb-20">
          {addresses.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-4 font-semibold text-white">
                <Image
                  src={item.flag}
                  alt={item.country}
                  width={24}
                  height={24}
                  className="object-contain !h-10 !w-10"
                />
                <span className="text-h4">{item.country}</span>
              </div>
              {item.title && (
                <span className="font-medium text-white !mt-1">
                  {item.title}
                </span>
              )}
              <ParagraphElement className="text-sm !text-secondary">
                {item.address}
              </ParagraphElement>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start py-20 border-t border-gray-700 gap-20 md:gap-48">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image
              src={getInTouchImage}
              alt="Great Place to Work"
              width={100}
              height={100}
              className="object-contain"
            />
            <Button
              variant="text"
              size="md"
              href={"#form"}
              className="!text-h5 font-normal text-white hover:text-primary transition-colors"
            >
              Get in Touch
            </Button>
          </div>
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-12 w-12 md:h-20 md:w-20 flex items-center justify-center rounded-full bg-dark">
              <Image
                src={bookCallImage}
                alt="Book a Call"
                width={24}
                height={24}
                className="object-contain !h-6 !w-6 md:!h-8 md:!w-8"
              />
            </div>
            <Button
              variant="text"
              size="md"
              href={
                "https://calendly.com/americas-3/30min?_gl=1*13146a6*_gcl_au*MjYzMjE4MzIzLjE3NTcwNjUyNjk.*_ga*MTMwNjQxMjg5NS4xNzQ4ODQyMDM5*_ga_5ZSTFLNPDY*czE3NTg4MDE5NzYkbzQ4JGcxJHQxNzU4ODA0NTg5JGo2MCRsMCRoNDMzMTcwNzUx"
              }
              target="_blank"
              className="text-white !text-h4 font-normal hover:text-primary transition-colors"
            >
              Book a Call
            </Button>
          </div>
        </div>

        {/* Links and Privacy */}
        <div className="flex flex-col items-start justify-start py-20 border-t border-gray-700">
          <div className="flex gap-10 mb-4 md:mb-6">
            <Button
              variant="text"
              size="md"
              href={privacyButton.href}
              target={privacyButton.target || "_self"}
              className="text-sm p-0 font-normal text-white hover:text-primary transition-colors"
            >
              Privacy Policy
            </Button>
            <Button
              variant="text"
              size="md"
              href={faqsButton.href}
              target={faqsButton.target || "_self"}
              className="text-sm p-0 font-normal text-white hover:text-primary transition-colors"
            >
              FAQS
            </Button>
          </div>

          {/* Ratings */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-full py-8">
            {ratings.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-start justify-center gap-3 w-full",
                  index <= ratings.length - 1 &&
                    "xl:border-r border-r-[#3f3f3f]"
                )}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={starImage}
                    alt={item.platform}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span className="text-white text-h4 font-medium">
                    {item.rating}
                  </span>
                </div>
                <Image
                  src={item.image}
                  alt={item.platform}
                  width={120}
                  height={30}
                  className="object-contain h-8"
                  priority
                />
              </div>
            ))}
            <div className="flex items-center justify-center sm:justify-start gap-3 col-span-2 md:col-span-1">
              <Image
                src={isoImage}
                alt="ISO 27001:2013"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
              <span className="text-white text-sm whitespace-nowrap">
                ISO 27001:2013
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-20 border-t border-gray-700">
          <HeadingH5 className="text-sm !mb-0 !text-white leading-relaxed">
            <span className="text-primary">Copyright &copy; 2025 Bacancy.</span>{" "}
            All Rights Reserved. An{" "}
            <span className="text-primary">ISO 27001:2013</span> Certified
            Company
          </HeadingH5>
        </div>
      </div>
    </footer>
  );
};
