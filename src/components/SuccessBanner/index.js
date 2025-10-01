import React from "react";
import { cn } from "../../lib/utils";
import { ParagraphElement } from "../ui";

const SuccessBanner = ({ data, className }) => {
  const { email, title, description, tools } = data;

  return (
    <section className={cn("w-full relative", className)}>
      <div className="container -mt-36 md:-mt-72">
        <div className="bg-primary text-center boxed">
          <a
            href={`mailto:${email}`}
            className="inline-block hover:opacity-90 transition-opacity mb-sm"
          >
            <ParagraphElement
              color="white"
              className="underline text-h3"
              noMargin
            >
              {email}
            </ParagraphElement>
          </a>

          <ParagraphElement color="white" className="font-normal text-h3">
            {title}
          </ParagraphElement>

          <ParagraphElement color="white" className="mb-sm">
            {description}
          </ParagraphElement>

          <div className="text-white flex flex-wrap justify-center items-center gap-x-2">
            <span>We Use</span>
            <span className="font-bold whitespace-nowrap">
              Slack, Jira &amp; GitHub
            </span>
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
