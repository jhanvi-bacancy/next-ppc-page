import React from "react";
import { cn } from "@/lib/utils";
import { HeadingH2, ParagraphElement, Button, Carousel } from "../ui";
import StepCard from "./StepCard";
import { ArrowIcon } from "@/icons";
import { formatDateWithDay } from "@/lib/helper";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

const stepsSectionData = {
  title: {
    text: "Three steps to your",
    highlight: "perfect Specialist",
    suffix: "",
  },
  subtitle: "Get hand-picked talent in days—our 3-step process makes it simple",
  backgroundImage: `${cdnImage}landing/images/common-img/step-section-bg.png`,
  steps: [
    {
      stepNumber: 1,
      title: "BOOK A MEETING",
      description:
        "Start with a quick 20-minute call where we learn about your goals, team structure, and what kind of talent you're looking for.",
      contentImage: `${cdnImage}landing/images/common-img/book-meeting.png`,
      stepIcon: `${cdnImage}landing/images/fullstack-ppc/mentoring.gif`,
      dateButton: {
        text: `TODAY, ${formatDateWithDay()}`, // Write date directly to show
        href: "https://calendly.com/americas-3/30min?_gl=1*1omd485*_gcl_au*MjYzMjE4MzIzLjE3NTcwNjUyNjk.*_ga*MTMwNjQxMjg5NS4xNzQ4ODQyMDM5*_ga_5ZSTFLNPDY*czE3NTg2MDQ5NDQkbzMzJGcxJHQxNzU4NjA5MzcxJGo1MiRsMCRoMTUxMDYzNDE2Mw..",
        target: "_blank",
      },
      isButton: true,
    },
    {
      stepNumber: 2,
      title: "REVIEW YOUR MATCHES",
      description:
        "Within 48 hours, you'll receive a tailored shortlist of vetted, ready-to-go specialists—complete with direct links to book interviews at your convenience.",
      contentImage: `${cdnImage}landing/images/common-img/ai-step-2.png`,
      stepIcon: `${cdnImage}landing/images/fullstack-ppc/teamwork.gif`,
      dateButton: {
        text: formatDateWithDay(undefined, 1), // Write date directly to show
      },
      isButton: false,
    },
    {
      stepNumber: 3,
      title: "START WORKING TOGETHER",
      description:
        "Your chosen candidates can be fully integrated in as little as 10 days. We take care of HR, contracts, and onboarding so you can stay focused on execution.",
      contentImage: `${cdnImage}landing/images/common-img/start-working-together.png`,
      stepIcon: `${cdnImage}landing/images/fullstack-ppc/handshake.gif`,
      dateButton: {
        text: formatDateWithDay(undefined, 2), // Write date directly to show
      },
      isButton: false,
      bgColor: "bg-light-orange",
    },
  ],
};

const StepsSection = ({ className }) => {
  const { title, subtitle, steps, backgroundImage } = stepsSectionData;

  const CustomArrow = ({ className, onClick, direction }) => {
    const isDisabled = className?.includes("slick-disabled");
    return (
      <Button
        onClick={onClick}
        variant="light"
        className={cn(
          "absolute p-0 -top-3 -translate-y-1/2 !rounded-full shadow-md z-10 md:hidden",
          direction === "next" ? "-right-5" : "right-0",
          isDisabled && "!opacity-50 !cursor-not-allowed"
        )}
        disabled={isDisabled}
      >
        <ArrowIcon
          direction={direction === "prev" ? "left" : "right"}
          className="text-white bg-primary rounded-full"
          size="sm"
        />
      </Button>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    autoPlay: false,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <section
      className={cn("py-10 sm:py-20 relative overflow-hidden", className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-sm">
          <HeadingH2>
            {title.text}
            <span className="text-primary"> {title.highlight}</span>
            {title.suffix && ` ${title.suffix}`}
          </HeadingH2>
          <ParagraphElement color="secondary" noMargin>
            {subtitle}
          </ParagraphElement>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Mobile View */}
          <div className="md:hidden px-4">
            <style jsx global>{`
              .slick-dots {
                position: static;
                margin-top: 24px;
              }
              .slick-dots li {
                margin: 0;
                width: auto;
                height: auto;
              }
              .slick-dots li button {
                width: 24px;
                height: 4px;
                padding: 0;
              }
              .slick-dots li {
                margin: 0 4px;
                opacity: 1 !important;
              }
              .slick-dots li button {
                opacity: 1;
                background-color: #d1d5db !important;
              }
              .slick-dots li button:before {
                display: none;
                content: none;
              }
              .slick-dots li.slick-active button {
                background-color: #f58220 !important;
              }
            `}</style>

            <Carousel carouselSettings={sliderSettings}>
              {steps.map((step, index) => (
                <div key={index} className="px-2">
                  <StepCard
                    stepNumber={step.stepNumber}
                    title={step.title}
                    description={step.description}
                    contentImage={step.contentImage}
                    stepIcon={step.stepIcon}
                    dateButton={step.dateButton}
                    isButton={step.isButton}
                    bgColor={step.bgColor}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                contentImage={step.contentImage}
                stepIcon={step.stepIcon}
                dateButton={step.dateButton}
                isButton={step.isButton}
                bgColor={step.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
