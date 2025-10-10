import React from "react";
import { HeadingH2, ParagraphElement } from "../ui";
import Image from "next/image";
import { cn } from "../../lib/utils";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

const trustedLogosData = {
  logos: [
    {
      alt: "Disney+",
      src: `${cdnImage}landing/images/react-ppc/client-logo-1.svg`,
    },
    {
      alt: "3M",
      src: `${cdnImage}landing/images/react-ppc/client-logo-2.svg`,
    },
    {
      alt: "National Geographic",
      src: `${cdnImage}landing/images/react-ppc/client-logo-3.svg`,
    },
    {
      alt: "Verizon",
      src: `${cdnImage}landing/images/react-ppc/client-logo-4.svg`,
    },
    {
      alt: "Wipro",
      src: `${cdnImage}landing/images/react-ppc/client-logo-5.svg`,
    },
    {
      alt: "KPMG",
      src: `${cdnImage}landing/images/react-ppc/client-logo-6.svg`,
    },
  ],
};

const TrustedLogos = ({ className }) => {
  const { logos } = trustedLogosData;

  return (
    <section className={cn("", className)}>
      <div className="container w-full">
        <div className="text-center mb-sm mx-auto">
          <HeadingH2>
            Winning The Trust Of
            <span className="text-primary"> 100+ NASDAQ & NYSE</span> Listed
            Companies And Fast-Growing Startups
          </HeadingH2>
          <ParagraphElement
            color="primary"
            className="underline cursor-pointer"
            onClick={() => {
              window.location.href = "#form";
            }}
          >
            Join Us to Build Your Idea into Reality
          </ParagraphElement>
        </div>

        <div className="mx-auto border-2 border-gray-200/70 boxed w-fit">
          <ul className="flex flex-wrap justify-center items-center gap-sm">
            {logos.map((logo, index) => (
              <li key={index} className="flex items-center justify-center">
                {/* As requested, use # for src attribute */}
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="!h-svg-icon !w-svg-icon sm:h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  width={150}
                  height={200}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustedLogos;
