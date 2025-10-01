import React from "react";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";
import { HeadingH2, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";
import { renderHighlightedText } from "../../lib/helper";

const CustomerReviews = ({ data, className }) => {
  const { title, description, reviews, rating } = data;

  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-sm gap-sm">
          <div className="text-center md:text-left w-full md:w-2/3">
            <HeadingH2 className="">
              {renderHighlightedText(title.text, title.highlight, "span")}
            </HeadingH2>
            <ParagraphElement color="secondary" noMargin>
              {description}
            </ParagraphElement>
          </div>

          {rating && (
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={rating}
                alt="Clutch Logo"
                width={100}
                height={100}
                className="!h-52 !w-52"
              />
            </div>
          )}
        </div>
      </div>

      <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden">
        <ReviewCarousel>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </ReviewCarousel>
      </div>
    </section>
  );
};

export default CustomerReviews;
