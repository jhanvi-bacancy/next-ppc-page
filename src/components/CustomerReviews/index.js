import React from "react";
import { HeadingH2, ParagraphElement } from "../ui/typography";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { renderHighlightedText } from "@/lib/helper";

export const CustomerReviews = ({ data, className }) => {
  const { title, description, reviews, rating } = data;

  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left w-full md:w-2/3">
            <HeadingH2 className="mb-4">
              {renderHighlightedText(title.text, title.highlight, "span")}
            </HeadingH2>
            <ParagraphElement>
              {description ||
                "Don't just take our word for it. Hear what our valued clients have to say about their experiences with us."}
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
