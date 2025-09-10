
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
        <section className="relative min-h-screen flex items-center py-16 px-4 overflow-hidden">
            {/* Background Image */}
            <figure className="absolute inset-0 w-full h-full">
                <Image
                    src={`${cdnImage}${backgroundImage}`}
                    alt="Banner background"
                    fill
                    className="object-cover"
                    priority
                />
            </figure>

            {/* Content */}
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="flex-1 lg:max-w-2xl">
                        <div className="space-y-6">
                            {badge && (
                                <div className="text-lg font-bold text-orange-500">
                                    <span className="border-b-2 border-orange-500 pb-2">
                                        {badge}
                                    </span>
                                </div>
                            )}

                            <HeadingH1
                                color="white"
                                className="font-bold leading-tight"
                            >
                                {title.text} <span className="text-orange-500">{title.highlight}</span> {title.suffix}
                            </HeadingH1>

                            <ParagraphElement
                                color="white"
                                className="text-xl leading-relaxed max-w-3xl"
                            >
                                {description}
                            </ParagraphElement>

                            {ctaButton && (
                                <Link
                                    href={ctaButton.href}
                                    target={ctaButton.target || "_self"}
                                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 uppercase tracking-wide"
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
                            )}
                        </div>
                    </div>

                    {/* Right Content - Stats List */}
                    <div className="w-full lg:w-auto lg:max-w-md">
                        <div className="space-y-6">
                            {statsList.map((stat, index) => (
                                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-sm">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={`${cdnImage}${stat.icon}`}
                                            alt={stat.text}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                    <div className="text-lg font-semibold text-white">
                                        {stat.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

