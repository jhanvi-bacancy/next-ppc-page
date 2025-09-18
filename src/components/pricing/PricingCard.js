import React from "react";
import { Button } from "../ui/button";
import { HeadingH2, HeadingH3, ParagraphElement } from "../ui/typography";
import { cn } from "../../lib/utils";

export function PricingCard({
  title,
  price,
  currency = "USD",
  features,
  ctaButton,
  highlighted = false,
  className,
}) {
  return (
    <div
      className={cn(
        "p-8 rounded-xl flex flex-col",
        highlighted ? "bg-white border border-primary" : "bg-primary-light",
        className
      )}
    >
      <div className="mb-6 border-b-2 border-primary">
        <div className="text-center mb-4">
          {price ? (
            <>
              <span className="text-primary text-h3 font-semibold">
                ${price}
              </span>
              <ParagraphElement className="font-normal">
                {title} ({currency})
              </ParagraphElement>
            </>
          ) : (
            <HeadingH3 className="!text-primary font-semibold text-h3 mb-0 leading-none">
              {title}
            </HeadingH3>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <ul
          className={cn(
            "space-y-2 mb-8 list-disc pl-5",
            highlighted ? "mb-12" : "mb-8"
          )}
        >
          {features.map((feature, index) => (
            <li key={index} className="text-secondary marker:text-secondary">
              <ParagraphElement className="text-sm" color="secondary">
                {feature}
              </ParagraphElement>
            </li>
          ))}
        </ul>
      </div>

      <Button
        href={ctaButton.href}
        variant={highlighted ? "outline" : "filled"}
        size="md"
        fullWidth
        className="font-normal"
      >
        {ctaButton.text}
      </Button>
    </div>
  );
}
