import React from "react";
import Image from "next/image";
import { Button, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";
import { useEqualHeight } from "../../lib/hooks/useEqualHeight";

const Footer = ({ data, className, formData }) => {
  // Use equal height hook for address cards and rating cards
  useEqualHeight([".footer-address-card"]);

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
    <section
      className={cn("pb-md", className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        {/* Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm pb-md">
          {addresses.map((item, index) => (
            <div key={index} className="space-y-sm">
              <div className="footer-address-card">
                <div className="flex items-center gap-6">
                  <Image
                    src={item.flag}
                    alt={item.country}
                    width={24}
                    height={24}
                    className="object-contain !h-10 !w-10"
                  />
                  <ParagraphElement
                    className="text-h4 font-medium"
                    color="white"
                    noMargin
                  >
                    {item.country}
                  </ParagraphElement>
                </div>
                {item.title && (
                  <ParagraphElement
                    className="font-medium !mb-0"
                    color="white"
                    noMargin
                  >
                    {item.title}
                  </ParagraphElement>
                )}
              </div>
              <div>
                <ParagraphElement
                  className="text-sm"
                  color="secondary"
                  noMargin
                >
                  {item.address}
                </ParagraphElement>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start py-md border-t border-gray-700 gap-20 md:gap-48">
          <div className="flex items-center gap-4 mb-sm md:mb-0">
            <Image
              src={getInTouchImage}
              alt="Great Place to Work"
              width={100}
              height={100}
              className="object-contain"
            />
            <Button
              variant="text"
              href={`${formData.leadingPageEndpoint}#form`}
              target="_self"
              className="text-h3 font-medium white hover:text-primary transition-colors"
            >
              Get in Touch
            </Button>
          </div>
          <div className="flex items-center gap-2 mb-sm md:mb-0">
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
              href={"https://calendly.com/americas-3/30min"}
              target="_blank"
              className="text-h4 white font-normal hover:text-primary transition-colors"
            >
              Book a Call
            </Button>
          </div>
        </div>

        {/* Links and Privacy */}
        <div className="flex flex-col items-start justify-start py-md border-t border-gray-700">
          <div className="flex gap-10 mb-sm md:mb-6">
            <Button
              variant="text"
              href={privacyButton.href}
              target={privacyButton.target || "_self"}
              className="text-sm text-white font-normal hover:text-primary transition-colors"
            >
              Privacy Policy
            </Button>
            <Button
              variant="text"
              href={faqsButton.href}
              target={faqsButton.target || "_self"}
              className="text-sm text-white font-normal hover:text-primary transition-colors"
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
                  <ParagraphElement
                    color="white"
                    className="text-h4 font-medium"
                    noMargin
                  >
                    {item.rating}
                  </ParagraphElement>
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
              <span className="text-sm whitespace-nowrap white">
                ISO 27001:2013
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-md border-t border-gray-700">
          <ParagraphElement className="text-sm" color="white" noMargin>
            <span className="text-primary">Copyright &copy; 2025 Bacancy.</span>
            &nbsp; All Rights Reserved. An&nbsp;
            <span className="text-primary">ISO 27001:2013</span> Certified
            Company
          </ParagraphElement>
        </div>
      </div>
    </section>
  );
};

export default Footer;
