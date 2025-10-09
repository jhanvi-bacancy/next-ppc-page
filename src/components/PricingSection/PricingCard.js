import React from "react";
import { Button, HeadingH3, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";

const PricingCard = ({
  title,
  price,
  currency = "USD",
  features,
  ctaButton,
  highlighted = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "boxed flex flex-col",
        highlighted ? "bg-white border border-primary" : "bg-primary-light",
        className
      )}
    >
      <div className="mb-6 border-b-2 border-primary">
        <div className="text-center mb-4">
          {price ? (
            <>
              <span className="primary text-h3 font-semibold">${price}</span>
              <ParagraphElement className="font-normal">
                {title} ({currency})
              </ParagraphElement>
            </>
          ) : (
            <HeadingH3
              color="primary"
              className="font-semibold text-h2 mb-0 leading-none"
            >
              {title}
            </HeadingH3>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <ul className={cn("list-disc pl-5", highlighted ? "mb-12" : "mb-8")}>
          {features.map((feature, index) => (
            <li key={index} className="marker:text-secondary">
              <ParagraphElement color="secondary" noMargin>
                {feature}
              </ParagraphElement>
            </li>
          ))}
        </ul>
      </div>

      <Button
        href={ctaButton.href}
        variant={highlighted ? "outline" : "filled"}
        className="font-normal"
        fullWidth
      >
        {ctaButton.text}
      </Button>
    </div>
  );
};

export default PricingCard;
