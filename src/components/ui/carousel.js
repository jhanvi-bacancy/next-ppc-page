import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH6,
  HeadingH5,
  ParagraphElement,
} from "./typography";
import { cn } from "../../lib/utils";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

export function ExpertCarousel({ title, subtitle, experts, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  const cardsPerPage = 3;
  const maxIndex = experts.length - cardsPerPage; // Maximum scroll position (for single card scrolling)
  const totalPages = Math.ceil(experts.length / cardsPerPage);

  // Handle mouse drag functionality
  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);

    // Get current scroll position from transform
    const gridContainer = containerRef.current.querySelector("div");
    if (gridContainer) {
      const transform = gridContainer.style.transform || "translateX(0%)";
      const currentPosition =
        parseFloat(transform.replace(/[^0-9.-]/g, "")) || 0;
      setScrollLeft(currentPosition);
    }

    containerRef.current.style.cursor = "default";
    containerRef.current.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "default";
      containerRef.current.style.userSelect = "auto";
    }
  };

  const snapToNearestCard = () => {
    if (!containerRef.current) return;

    const gridContainer = containerRef.current.querySelector("div");
    if (gridContainer) {
      const transform = gridContainer.style.transform || "translateX(0%)";
      const currentPosition =
        parseFloat(transform.replace(/[^0-9.-]/g, "")) || 0;

      // Find nearest page (set of 3 cards)
      const nearestPage = Math.round(currentPosition / 100);
      const newIndex = nearestPage * 3;
      const clampedIndex = Math.min(maxIndex, newIndex);

      // Update both index and transform
      setCurrentIndex(clampedIndex);
      const newPosition = nearestPage * 100;
      gridContainer.style.transform = `translateX(-${newPosition}%)`;
      setScrollLeft(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "default";
      containerRef.current.style.userSelect = "auto";
      snapToNearestCard();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();

    const currentX = e.pageX;
    const diff = startX - currentX;
    const containerWidth = containerRef.current.offsetWidth;

    // Calculate scroll position as a percentage of container width
    const scrollPercentage = (diff / containerWidth) * 100;
    const newPosition = scrollLeft + scrollPercentage;

    // Update transform directly for smooth scrolling
    const gridContainer = containerRef.current.querySelector("div");
    if (gridContainer) {
      const clampedPosition = Math.max(
        0,
        Math.min(maxIndex * 33.333, newPosition)
      );
      gridContainer.style.transform = `translateX(-${clampedPosition}%)`;
    }
  };

  // Touch support for mobile
  const handleTouchStart = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);

    // Get current scroll position from transform
    const gridContainer = containerRef.current.querySelector("div");
    if (gridContainer) {
      const transform = gridContainer.style.transform || "translateX(0%)";
      const currentPosition =
        parseFloat(transform.replace(/[^0-9.-]/g, "")) || 0;
      setScrollLeft(currentPosition);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const currentX = e.touches[0].pageX;
    const diff = startX - currentX;
    const containerWidth = containerRef.current.offsetWidth;

    // Calculate scroll position as a percentage of container width
    const scrollPercentage = (diff / containerWidth) * 100;
    const newPosition = scrollLeft + scrollPercentage;

    // Update transform directly for smooth scrolling
    const gridContainer = containerRef.current.querySelector("div");
    if (gridContainer) {
      const clampedPosition = Math.max(
        0,
        Math.min(maxIndex * 33.333, newPosition)
      );
      gridContainer.style.transform = `translateX(-${clampedPosition}%)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    snapToNearestCard();
  };

  // Handle pagination click - jump to page (3 cards at a time)
  const handlePageClick = (pageIndex) => {
    const newIndex = pageIndex * 3; // Move by sets of 3
    const position = pageIndex * 100; // Each page is 100% width

    // Update both index and transform
    setCurrentIndex(newIndex);

    const gridContainer = containerRef.current?.querySelector("div");
    if (gridContainer) {
      gridContainer.style.transform = `translateX(-${position}%)`;
      setScrollLeft(position);
    }
  };

  // Get current page experts (3 consecutive cards from currentIndex)
  const getCurrentPageExperts = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + cardsPerPage;
    return experts.slice(startIndex, endIndex);
  };

  return (
    <section className={cn("", className)}>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <HeadingH2 className="mb-4">{title}</HeadingH2>
          <HeadingH4 className="">{subtitle}</HeadingH4>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="cursor-default select-none overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Show all cards in a row */}
              <div className="flex gap-6 transition-transform duration-[1500ms] ease-out">
                {experts.map((expert, index) => (
                  <div
                    key={index}
                    className="bg-gray-light rounded-lg p-6 shadow-sm border border-gray-200 flex-shrink-0"
                    style={{ width: "calc((100% - 48px) / 3)" }} // Width for 3 cards with gaps
                  >
                    {/* Expert Header */}
                    <div className="flex items-center gap-4 mb-9">
                      <div className="w-97 h-97 rounded-full overflow-hidden relative flex-shrink-0">
                        <Image
                          src={expert.image}
                          alt={expert.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <HeadingH6 className="truncate !mb-2">
                          {expert.name}
                        </HeadingH6>
                        <p className="text-gray-600 text-sm truncate">
                          {expert.role}
                        </p>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-9">
                      <div className="text-left">
                        <p className="font-bold text-gray-900 text-sm !mb-0.5">
                          {expert.experience}
                        </p>
                        <p className="text-sm text-gray-600 mb-0.5">
                          Experience
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900 text-sm !mb-0.5">
                          {expert.availability}
                        </p>
                        <p className="text-sm text-gray-600 mb-0.5">
                          Availability
                        </p>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900 text-sm !mb-0.5">
                          {expert.projects}
                        </p>
                        <p className="text-sm text-gray-600 mb-0.5">
                          Completed
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm !mb-9 leading-relaxed line-clamp-3">
                      {expert.description}
                    </p>

                    {/* Expert Skills */}
                    <div className="mb-9">
                      <span className="inline-flex items-center px-2 py-1 bg-dark text-white relative pr-3 text-sm">
                        <Image
                          src={`${cdnImage}main-boot-5/images/laravel-ppc/ic_star.png`}
                          alt="star"
                          title="star"
                          width={16}
                          height={16}
                          className="mr-2 w-auto"
                        />
                        <Image
                          src={`${cdnImage}main-boot-5/images/laravel-ppc/holder.png`}
                          alt="holder"
                          width={8}
                          height={24}
                          className="absolute bottom-0 -right-2 top-0 w-auto"
                        />
                        Expert in
                      </span>
                      <ParagraphElement className="text-sm">
                        {expert.expertIn.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 bg-orange-50 border border-orange-500 py-1 mr-2 mt-2 inline-block"
                          >
                            {skill}
                          </span>
                        ))}
                      </ParagraphElement>
                    </div>

                    {/* Additional Skills */}
                    <div className="mb-9">
                      <span className="font-medium text-sm text-gray-900">
                        Also Skilled in
                      </span>
                      <ParagraphElement className="text-sm">
                        {expert.alsoSkilledIn.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 border py-1 mr-2 mt-2 inline-block"
                          >
                            {skill}
                          </span>
                        ))}
                      </ParagraphElement>
                    </div>

                    {/* Worked With */}
                    <div className="mb-9">
                      <span className="font-medium text-sm text-gray-900">
                        Worked With
                      </span>
                      <ParagraphElement className="text-sm">
                        {expert.workedWith.map((company, idx) => (
                          <span
                            key={idx}
                            className="relative h-9 w-9 flex-shrink-0 mr-2 mt-2 inline-block"
                          >
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              className="object-contain"
                            />
                          </span>
                        ))}
                      </ParagraphElement>
                    </div>

                    {/* Hire Button */}
                    <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-orange-600 transition-colors font-normal text-sm">
                      HIRE {expert.name.toUpperCase()}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        {experts.length > 3 && (
          <div className="flex justify-center items-center mt-8 gap-2">
            {Array.from(
              { length: Math.ceil(experts.length / 3) },
              (_, index) => {
                const isActivePage = Math.floor(currentIndex / 3) === index;

                return (
                  <button
                    key={index}
                    onClick={() => handlePageClick(index)}
                    className={cn(
                      "w-6 h-1 rounded-full transition-all duration-1000",
                      isActivePage
                        ? "bg-orange-500"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Go to page ${index + 1}`}
                  />
                );
              }
            )}
          </div>
        )}
      </div>
    </section>
  );
}
