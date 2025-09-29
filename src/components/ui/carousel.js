import React from "react";
import Slider from "react-slick";

const Carousel = ({ children, carouselSettings }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div className="w-full">
        <ul className="flex justify-center items-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className="w-6 h-1 p-0 m-0 border-0 rounded-none transition-all duration-300 ease-in-out cursor-pointer bg-[#D1D5DB] hover:bg-gray-400 [&.slick-active]:!bg-[#f58220]"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    ...carouselSettings,
  };

  return (
    <div className="relative md:px-12">
      <style jsx global>{`
        .slick-slider {
          position: static;
        }
        .slick-list {
          margin: 0 -12px;
        }
        .slick-slide {
          padding: 0 12px;
        }
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
        .slick-dots {
          @apply mt-8;
        }
        .slick-dots li {
          @apply mx-1;
          opacity: 1 !important;
        }
        .slick-dots li button {
          @apply opacity-100;
          background-color: #d1d5db !important;
        }
        .slick-dots li button:before {
          @apply hidden;
          content: none;
        }
        .slick-dots li.slick-active button {
          background-color: #f58220 !important;
        }
        .slick-prev,
        .slick-next {
          width: 40px;
          height: 40px;
          background-color: #f58220 !important;
          border-radius: 9999px;
          z-index: 10;
          transition: all 0.3s ease;
          transform: translateY(-50%);
        }
        .slick-prev {
          left: -8px;
        }
        .slick-next {
          right: -8px;
        }
        .slick-prev:hover,
        .slick-next:hover {
          background-color: #ea7110 !important;
        }
        .slick-prev:before,
        .slick-next:before {
          color: white;
          font-size: 24px;
          opacity: 1;
          line-height: 1;
        }
        @media (min-width: 1024px) {
          .slick-prev {
            left: -20px;
          }
          .slick-next {
            right: -20px;
          }
        }
      `}</style>
      <Slider {...sliderSettings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
