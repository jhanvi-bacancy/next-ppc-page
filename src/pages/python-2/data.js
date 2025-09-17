const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

// Data for the Python Development page
export const pythonBannerData = {
  backgroundImage: "landing/images/banner-ppc/python-banner.jpg",
  badge: "USA #1 Python Development Company",
  title: {
    text: "Hire",
    highlight: "FullStack Python",
    suffix: "Developers",
  },
  description:
    "Hire Python developers to build secure, scalable, and AI-powered enterprise-grade web apps with strong OOP expertise. Get 80+ full-stack Python developers proficient in Django, Flask, FastAPI, ML frameworks, Tornado, and more.",
  ctaButton: {
    text: "Contact Us",
    href: "https://calendly.com/americas-3/30min",
    target: "_blank",
    icon: "landing/images/icons/calendar.svg",
  },
  statsList: [
    {
      icon: "landing/images/icons/cost-money-icon.svg",
      text: "40% Cost Savings",
    },
    {
      icon: "landing/images/icons/experience.svg",
      text: "13+ Years of Experience",
    },
    {
      icon: "landing/images/icons/iso-white.svg",
      text: "ISO27001 Certified Company",
    },
    {
      icon: "landing/images/angular-dev/banner-icon-n5.svg",
      text: "500+ USA Clients",
    },
  ],
};

// Additional banner data for other banner types (for future use)
export const bannerTypes = {
  withList: pythonBannerData,
  // Add other banner types here as needed
  // simple: simpleBannerData,
  // withVideo: videoBannerData,
  // etc.
};

// export trusted logos data
export const trustedLogosData = {
  logos: [
    {
      alt: "Disney+",
      src: `${cdnImage}landing/images/react-ppc/client-logo-1.svg`,
    },
    {
      alt: "3M",
      src: `${cdnImage}landing/images/react-ppc/client-logo-2.svg`,
    },
    {
      alt: "National Geographic",
      src: `${cdnImage}landing/images/react-ppc/client-logo-3.svg`,
    },
    {
      alt: "Verizon",
      src: `${cdnImage}landing/images/react-ppc/client-logo-4.svg`,
    },
    {
      alt: "Wipro",
      src: `${cdnImage}landing/images/react-ppc/client-logo-5.svg`,
    },
    {
      alt: "KPMG",
      src: `${cdnImage}landing/images/react-ppc/client-logo-6.svg`,
    },
  ],
};
