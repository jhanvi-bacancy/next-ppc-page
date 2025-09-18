import React from "react";
import {
  BannerWithList,
  TrustedLogos,
  ExpertCarousel,
  ServicesGrid,
} from "../../components/ui";
import {
  pythonBannerData,
  trustedLogosData,
  pythonExpertsData,
  pythonServicesGridData,
} from "./data";

export default function PythonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <BannerWithList data={pythonBannerData} className="py-lg" />
      {/* Trusted Logos */}
      <TrustedLogos data={trustedLogosData} className="py-lg bg-gray-light" />

      {/* Experts Carousel */}
      <ExpertCarousel
        title={pythonExpertsData.title}
        subtitle={pythonExpertsData.subtitle}
        experts={pythonExpertsData.experts}
        className="py-lg bg-white"
      />

      {/* Services Grid */}
      <ServicesGrid
        className="py-lg bg-gray-light"
        data={pythonServicesGridData}
      />
    </div>
  );
}
