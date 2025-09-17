
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeadingH1, HeadingH2, HeadingH3, HeadingH4, HeadingH5, HeadingH6, ParagraphElement } from "./typography";




// Banner with list component
export function BannerWithList({ data }) {
    const {
        backgroundImage,
        badge,
        title,
        description,
        ctaButton,
        statsList
    } = data;

    // Fallback URL for images
    const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

    return (
        <section className="bg-dark mt-97 py-98 flex items-center relative min-h-banner-height">
            {/* Background Image */}
            <Image 
                src={`${cdnImage}${backgroundImage}`}
                alt="Banner background"
                width={1900}
                height={900}
                className="absolute inset-0 object-cover z-1 h-full w-full"
                priority
            />

            {/* Content */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-5 relative z-10 container white items-center">
                {/* Left Content */}
                <div className="lg:col-span-3">
                    {badge && (
                        <div className="mb-5">
                            <span className="border-b-2 border-orange-500 pb-2">
                                {badge}
                            </span>
                        </div>
                    )}

                    <HeadingH1 className="text-h2  font-bold">
                        {title.text} <span className="text-orange-500">{title.highlight}</span> {title.suffix}
                    </HeadingH1>

                    <ParagraphElement color="white" className="text-base">
                        {description}
                    </ParagraphElement>

                    {ctaButton && (
                        <div className="flex gap-6 flex-wrap">
                            <Link
                                href={ctaButton.href}
                                target={ctaButton.target || "_self"}
                                className="w-full sm:w-auto px-4 py-2 hover:bg-primary uppercase text-center inline-flex items-center justify-center transition-all ease-in delay-75 bg-primary white hover:bg-primary-hover"
                            >
                                {ctaButton.icon && (
                                    <Image
                                        src={`${cdnImage}${ctaButton.icon}`}
                                        alt="icon"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                )}
                                {ctaButton.text}
                            </Link>
                        </div>
                    )}

                   
                </div>

                {/* Right Content - Image */}
                <div className="lg:col-span-2 lg:block hidden">
                     {/* Stats Grid */}
                     <div className="">
                        {statsList.map((stat, index) => (
                            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-sm mb-4">
                                <div className=" mr-2">
                                    <Image
                                        src={`${cdnImage}${stat.icon}`}
                                        alt={stat.text}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </div>
                                <p className="text-base w-3/4">{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

