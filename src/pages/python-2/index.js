import React from "react";
import {
  BannerWithList,
  TrustedLogos,
  ExpertCarousel,
  ServicesGrid,
  ContactSection,
  SuccessBanner,
  TechnicalExpertise,
  StepsSection,
} from "../../components/ui";
import {
  pythonBannerData,
  trustedLogosData,
  pythonExpertsData,
  pythonServicesGridData,
  pythonPricingData,
  successBannerData,
  technicalExpertiseData,
  contactSectionData,
  stepsSectionData,
} from "./data";
import { PricingSection } from "@/components/pricing";

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

      {/* Pricing Section */}
      <PricingSection data={pythonPricingData} className="py-lg bg-white" />

      {/* Contact Section */}
      <ContactSection data={contactSectionData} className="pt-10" />

      {/* Success Banner */}
      <SuccessBanner data={successBannerData} className="bg-gray-light py-lg" />

      {/* Technical Expertise */}
      <TechnicalExpertise
        data={technicalExpertiseData}
        className="bg-gray-light py-lg"
      />

      {/* Steps Section */}
      <StepsSection data={stepsSectionData} className="bg-white py-lg" />
    </div>
  );
}
