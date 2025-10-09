import React from "react";
import {
  Navbar,
  BannerWithList,
  TrustedLogos,
  ExpertCarousel,
  ServicesGrid,
  ContactSection,
  SuccessBanner,
  TechnicalExpertise,
  StepsSection,
  AITalentSection,
  SuccessStoriesSection,
  CustomerReviews,
  DevelopmentStrength,
  Footer,
  ContactBanner,
  FAQ,
  PricingSection,
} from "../../../components";
import {
  pythonBannerData,
  pythonExpertsData,
  pythonServicesGridData,
  pythonPricingData,
  technicalExpertiseData,
  contactSectionData,
  successStoriesData,
  footerData,
  faqData,
  developmentStrengthData,
} from "../../../data/pages/python-2";

export default function PythonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <BannerWithList data={pythonBannerData} className="" />

      {/* Trusted Logos */}
      <TrustedLogos className=" bg-gray-light" />

      {/* Experts Carousel */}
      <ExpertCarousel
        title={pythonExpertsData.title}
        subtitle={pythonExpertsData.subtitle}
        experts={pythonExpertsData.experts}
      />

      {/* Services Grid */}
      <ServicesGrid className=" bg-gray-light" data={pythonServicesGridData} />

      {/* Pricing Section */}
      <PricingSection data={pythonPricingData} />

      {/* Contact Section */}
      <ContactSection data={contactSectionData} className="pt-10" />

      {/* Success Banner */}
      <SuccessBanner />

      {/* Technical Expertise */}
      <TechnicalExpertise
        data={technicalExpertiseData}
        className="bg-gray-light"
      />

      {/* Steps Section */}
      <StepsSection />

      {/* AITalent Section */}
      <AITalentSection className="bg-light-orange" />

      {/* Success Stories Section */}
      <SuccessStoriesSection
        data={successStoriesData}
        className="bg-gray-light"
      />

      {/* Customer Reviews Section */}
      <CustomerReviews className="bg-light-orange" />

      {/* Development Strength */}
      <DevelopmentStrength data={developmentStrengthData} />

      {/* FAQ */}
      <FAQ data={faqData} className="bg-gray-light" />

      {/* Contact Banner */}
      <ContactBanner />

      {/* Footer */}
      <Footer data={footerData} />
    </div>
  );
}
