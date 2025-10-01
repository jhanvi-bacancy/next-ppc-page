import React from "react";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";
import { HeadingH2, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";
import { renderHighlightedText } from "../../lib/helper";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

const customerReviewsData = {
  title: { text: "What Our Customers Say", highlight: "Customers" },
  description:
    "Don't just take our word for it. Hear what our valued clients have to say about their experiences with us.",
  rating: `${cdnImage}landing/images/web-ppc/clutchreview-icon.svg`,
  reviews: [
    {
      highlight: "Flexibility",
      review: "Flexibility to work based on demand is impressive",
      name: "Bryan Boulton",
      designation: "IT Lead, Birchmount Network",
      companyLogo: `${cdnImage}landing/images/web-ppc/birchmount-network-logo.svg`,
    },
    {
      highlight: "Timely delivery",
      review: "Timely delivery with a remarkable feedback approach.",
      name: "Dylan de Szabo",
      designation: "Director, D-BIT APAC",
      companyLogo: `${cdnImage}landing/images/web-ppc/d-bit-logo.svg`,
    },
    {
      highlight: "Customer-centric",
      review: "Customer-centric approach paired with effective communication.",
      name: "Philip Gomez",
      designation: "Co-Owner, Patty's Cakes and Desserts",
      companyLogo: `${cdnImage}landing/images/web-ppc/patty-cake-logo.svg`,
    },
    {
      highlight: "affordable prices",
      review: "Exceptional results at affordable prices",
      name: "Yash Daftary",
      designation: "CEO, Fanbasis",
      companyLogo: `${cdnImage}landing/images/web-ppc/fanbasis-logo.svg`,
    },
    {
      highlight: "Collabrative",
      review: "Collabrative environment and highly responsive team",
      name: "Vennila Rajes",
      designation: "Director of Operations, Help Desk Technology",
      companyLogo: `${cdnImage}landing/images/web-ppc/helpdesk-logo.svg`,
    },
  ],
};

const CustomerReviews = ({ className }) => {
  const { title, description, reviews, rating } = customerReviewsData;

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
