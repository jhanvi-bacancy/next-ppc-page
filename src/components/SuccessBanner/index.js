import React from "react";
import { cn } from "../../lib/utils";
import { HeadingH2, HeadingH3, ParagraphElement } from "../ui";

const SuccessBanner = ({ data, className }) => {
  const { email, title, description, tools } = data;

  return (
    <section className={cn("w-full relative", className)}>
      <div className="container mx-auto px-4 -mt-32 md:-mt-44">
        <div className="!bg-primary text-center py-12 md:py-16">
          <a
            href={`mailto:${email}`}
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <HeadingH2 className="!text-white mb-3 underline">
              {email}
            </HeadingH2>
          </a>

          <HeadingH3 className="!text-white font-normal !mb-6">
            {title}
          </HeadingH3>

          <ParagraphElement className="!text-white !mb-3">
            {description}
          </ParagraphElement>

          <div className="!text-white flex flex-wrap justify-center items-center gap-x-2">
            <span>We Use</span>
            {tools.map((tool, index) => (
              <React.Fragment key={tool}>
                <span className="font-bold whitespace-nowrap">{tool}</span>
                {index < tools.length - 1 && (
                  <span className="whitespace-nowrap">&</span>
                )}
              </React.Fragment>
            ))}
            <span className="whitespace-normal">
              for Accurate Deployment and Effective Communication.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessBanner;