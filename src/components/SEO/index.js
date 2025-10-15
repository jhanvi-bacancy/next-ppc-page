import React from "react";
import Head from "next/head";

/**
 * Reusable SEO Component for all pages
 *
 * Usage:
 * <SEO
 *   title="Your Page Title"
 *   description="Your page description"
 *   keywords="keyword1, keyword2"
 *   ogImage="https://..."
 *   canonical="https://..."
 *   structuredData={jsonLdObject}
 * />
 */
const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogImageAlt,
  ogImageWidth = "1200",
  ogImageHeight = "630",
  canonical,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData = [],
  noindex = false,
}) => {
  // Use provided values or fallback to defaults
  const finalTwitterTitle = twitterTitle || title;
  const finalTwitterDescription = twitterDescription || description;
  const finalTwitterImage = twitterImage || ogImage;
  const finalOgImageAlt = ogImageAlt || title;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:alt" content={finalOgImageAlt} />
          <meta property="og:image:width" content={ogImageWidth} />
          <meta property="og:image:height" content={ogImageHeight} />
        </>
      )}
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      {finalTwitterImage && (
        <meta name="twitter:image" content={finalTwitterImage} />
      )}
      {canonical && <meta name="twitter:url" content={canonical} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Additional SEO tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}

      {/* JSON-LD Structured Data */}
      {structuredData.length > 0 &&
        structuredData.map((data, index) => (
          <script
            key={`structured-data-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
        ))}
    </Head>
  );
};

export default SEO;

/**
 * Helper function to create Organization structured data
 */
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bacancy Technology",
  url: "https://www.bacancytechnology.com",
  logo: `${process.env.NEXT_PUBLIC_IMG_URL}img/favicon.png`,
  description:
    "Leading Python Development Company with 13+ years of experience. ISO27001 Certified.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "15-1A, Times Corporate Park, Thaltej",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380059",
    addressCountry: "IN",
  },
  sameAs: [
    "https://twitter.com/bacancytech",
    "https://www.facebook.com/bacancytech",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "500",
  },
});

/**
 * Helper function to create Service structured data
 */
export const createServiceSchema = ({
  serviceType,
  description,
  price,
  priceCurrency = "USD",
  priceUnit = "per hour",
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType,
  provider: {
    "@type": "Organization",
    name: "Bacancy Technology",
  },
  areaServed: "Worldwide",
  description,
  offers: {
    "@type": "Offer",
    price,
    priceCurrency,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency,
      unitText: priceUnit,
    },
  },
});

/**
 * Helper function to create FAQ structured data
 */
export const createFAQSchema = (faqData) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: Array.isArray(faq.answer)
        ? faq.answer.map((item) => item.content).join(" ")
        : faq.answer,
    },
  })),
});

/**
 * Helper function to create BreadcrumbList structured data
 */
export const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
