import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCarousel = ({ children }) => {
  const settings = {
    className: "review-carousel",
    centerMode: true,
    infinite: true,
    centerPadding: "10%",
    slidesToShow: 2.35,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="review-carousel-wrapper">
      <style jsx global>{`
        .review-carousel-wrapper {
          overflow: hidden;
          width: 100%;
          padding-bottom: 50px;
        }

        /* Carousel Container */
        .review-carousel .slick-list {
          overflow: visible !important;
        }

        /* Slide Styling */
        .review-carousel .slick-slide {
          opacity: 1;
          padding: 0 12px;
          transition: all 0.3s ease;
          transform: scale(1);
        }

        /* Adjacent visible slides */
        .review-carousel .slick-slide.slick-active {
          opacity: 1;
          transform: scale(1);
        }

        /* Active/Center Slide */
        .review-carousel .slick-slide.slick-active.slick-center {
          opacity: 1;
          transform: scale(1);
        }

        /* Navigation Dots */
        .review-carousel .slick-dots {
          position: absolute;
          bottom: 5%;
          width: 100%;
          left: -1%;
          display: flex !important;
          justify-content: center;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .review-carousel .slick-dots li {
          margin: 0 6px;
        }

        .review-carousel .slick-dots li button {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: none;
          background-color: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .review-carousel .slick-dots li button:before {
          display: none;
        }

        .review-carousel .slick-dots li button:hover {
          background-color: #f58220;
          transform: scale(1.1);
        }

        .review-carousel .slick-dots li.slick-active button {
          background-color: #ea7110;
          transform: scale(1.1);
          box-shadow: 0 2px 8px rgba(245, 130, 32, 0.3);
        }

        .review-carousel .slick-dots li.slick-active button:hover {
          background-color: #ea7110;
        }

        @media (max-width: 1024px) {
          .review-carousel-wrapper {
            padding-bottom: 40px;
          }
          .review-carousel .slick-dots li button {
            width: 0.75rem;
            height: 0.75rem;
          }
          .review-carousel .slick-dots {
            bottom: 5%;
          }
        }

        @media (max-width: 640px) {
          .review-carousel-wrapper {
            padding-bottom: 40px;
          }
          .review-carousel .slick-slide {
            padding: 0;
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          .review-carousel .slick-dots {
            bottom: 5%;
          }
          .review-carousel .slick-dots li {
            margin: 0 0.25rem;
          }
          .review-carousel .slick-dots li button {
            width: 0.5rem;
            height: 0.5rem;
          }
          .review-carousel .slick-dots li.slick-active button {
            transform: scale(1.2);
            box-shadow: 0 1px 4px rgba(245, 130, 32, 0.3);
          }
        }
      `}</style>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default ReviewCarousel;
