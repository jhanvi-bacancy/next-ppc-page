import React from "react";
import Image from "next/image";
import { HeadingH2, HeadingH4 } from "./typography";
import { cn } from "../../lib/utils";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

export function ExpertCarousel({ title, subtitle, experts, className }) {
  return (
    <section className={cn("", className)}>
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <HeadingH2 className="mb-4">{title}</HeadingH2>
          <HeadingH4 className="">{subtitle}</HeadingH4>
        </div>

        {/* Experts Grid/Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              {/* Expert Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden relative">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{expert.name}</h3>
                  <p className="text-gray-600">{expert.role}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="font-bold">{expert.experience}</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
                <div>
                  <p className="font-bold">{expert.availability}</p>
                  <p className="text-sm text-gray-600">Availability</p>
                </div>
                <div>
                  <p className="font-bold">{expert.projects}</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{expert.description}</p>

              {/* Expert Skills */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src={`${cdnImage}main-boot-5/images/laravel-ppc/ic_star.png`}
                    alt="star"
                    height={16}
                    width={16}
                  />
                  <span className="font-medium">Expert in</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expert.expertIn.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-50 text-orange-700 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Skills */}
              <div className="mb-4">
                <p className="font-medium mb-3">Also Skilled in</p>
                <div className="flex flex-wrap gap-2">
                  {expert.alsoSkilledIn.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Worked With */}
              <div className="mb-6">
                <p className="font-medium mb-3">Worked With</p>
                <div className="flex gap-4">
                  {expert.workedWith.map((company, idx) => (
                    <div key={idx} className="relative h-8 w-20">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Hire Button */}
              <button className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors">
                HIRE {expert.name.toUpperCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
