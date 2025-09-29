import React from "react";
import { HeadingH2, HeadingH3 } from "../ui";
import Image from "next/image";
import { cn } from "../../lib/utils";

// Responsive grid of trusted company logos shown under the banner
const TrustedLogos = ({ data, className }) => {
  const { logos } = data;

  return (
    <section className={cn("", className)}>
      <div className="container w-[85%] mx-auto px-4">
        <div className="text-center mb-6 w-5/6 mx-auto">
          <HeadingH2>
            Winning The Trust Of{" "}
            <span className="text-primary">100+ NASDAQ & NYSE</span> Listed
            Companies And Fast-Growing Startups
          </HeadingH2>
          <HeadingH3
            color="primary"
            className="text-sm sm:text-base text-primary mt-2"
          >
            Join Us to Build Your Idea into Reality
          </HeadingH3>
        </div>

        <div className="w-5/6 mx-auto rounded-2xl border-2 border-gray-200/70 p-sm sm:p-6">
          <ul className="flex flex-wrap justify-center items-center gap-8">
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
