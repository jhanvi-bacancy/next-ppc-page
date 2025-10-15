import React from "react";
import SEO, {
  createOrganizationSchema,
  createServiceSchema,
  createFAQSchema,
} from "../../../components/SEO";
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
  RequirementSelector,
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
  formData,
  metaProperties,
} from "../../../data/pages/python-2";

export default function PythonPage() {
  // Create structured data schemas
  const structuredData = [
    createOrganizationSchema(),
    createServiceSchema({
      serviceType: "Python Development Services",
      description:
        "Hire dedicated Python developers proficient in Django, Flask, FastAPI, ML frameworks, and more. 40% cost savings with 15 days free trial.",
      price: "22",
      priceCurrency: "USD",
      priceUnit: "per hour",
    }),
    createFAQSchema(faqData.slice(0, 5)),
  ];

  return (
    <>
      {/* Reusable SEO Component */}
      <SEO
        title={metaProperties.title}
        description={metaProperties.description}
        keywords={metaProperties.keywords}
        ogImage={metaProperties.ogImage}
        ogImageAlt={metaProperties.ogImageAlt}
        ogImageWidth={metaProperties.ogImageWidth}
        ogImageHeight={metaProperties.ogImageHeight}
        canonical={metaProperties.path}
        twitterCard={metaProperties.twitterCard}
        twitterTitle={metaProperties.twitterTitle}
        twitterDescription={metaProperties.twitterDescription}
        twitterImage={metaProperties.twitterImage}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-white">
        <Navbar formData={formData} />

        {/* Banner */}
        <BannerWithList data={pythonBannerData} className="" />

        {/* Trusted Logos */}
        <TrustedLogos className=" bg-gray-light" formData={formData} />

        {/* Experts Carousel */}
        <ExpertCarousel
          title={pythonExpertsData.title}
          subtitle={pythonExpertsData.subtitle}
          experts={pythonExpertsData.experts}
          formData={formData}
        />

        {/* Pricing Section */}
        <PricingSection data={pythonPricingData} className="bg-gray-light" />

        {/* Contact Section */}
        <ContactSection data={contactSectionData} formData={formData} />

        {/* Success Banner */}
        <SuccessBanner />

        {/* Services Grid */}
        <ServicesGrid
          className=" bg-gray-light"
          data={pythonServicesGridData}
        />

        {/* Technical Expertise */}
        <TechnicalExpertise data={technicalExpertiseData} />

        {/* Requirement Section */}
        <RequirementSelector className="bg-light-orange" formData={formData} />

        {/* Steps Section */}
        <StepsSection />

        {/* Success Stories Section */}
        <SuccessStoriesSection
          data={successStoriesData}
          className="bg-gray-light"
          formData={formData}
        />

        {/* AITalent Section */}
        <AITalentSection className="bg-light-orange" formData={formData} />

        {/* Customer Reviews Section */}
        <CustomerReviews className="bg-gray-light" />

        {/* Development Strength */}
        <DevelopmentStrength data={developmentStrengthData} />

        {/* FAQ */}
        <FAQ data={faqData} className="bg-gray-light" formData={formData} />

        {/* Contact Banner */}
        <ContactBanner formData={formData} />

        {/* Footer */}
        <Footer data={footerData} formData={formData} />
      </div>
    </>
  );
}
