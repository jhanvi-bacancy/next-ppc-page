import React from "react";
import { cn } from "../../lib/utils";
import { ParagraphElement } from "../ui";

const successBannerData = {
  email: "solutions@bacancy.com",
  title: "Your Success is Guaranteed !",
  description:
    "We accelerate the release of digital products and guarantee your success",
};

const SuccessBanner = ({ className }) => {
  const { email, title, description } = successBannerData;

  return (
    <section className={cn("w-full relative", className)}>
      <div className="container -mt-32 md:-mt-44">
        <div className="bg-primary text-center boxed">
          <ParagraphElement color="white" className="font-normal text-h2">
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
