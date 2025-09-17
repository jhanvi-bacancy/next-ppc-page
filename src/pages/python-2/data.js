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

// export python experts data
export const pythonExpertsData = {
  title: "Our Top Talent, Available for Hire",
  subtitle: "180+ Python projects done. Get the best Tech support",
  experts: [
    {
      name: "Mehul",
      role: "Lead Python Architect",
      image: `${cdnImage}landing/images/python-ppc/neel.png`,
      experience: "15+ Years",
      availability: "Full-time",
      projects: "10+ Projects",
      description:
        "Mehul is a certified expert in AI-driven data analysis and scalable cloud solutions, with proven delivery across FinTech, Data Science, and Gaming domains.",
      expertIn: ["Dash", "Pandas", "NumPy", "TensorFlow"],
      alsoSkilledIn: ["Django", "Flask", "AI/ML", "DevOps"],
      workedWith: [
        {
          name: "Company1",
          logo: `${cdnImage}main-boot-5/images/python-ppc/bangkok-bank.png`,
        },
        {
          name: "Company2",
          logo: `${cdnImage}main-boot-5/images/python-ppc/wizkids.png`,
        },
        {
          name: "Company3",
          logo: `${cdnImage}main-boot-5/images/python-ppc/verizon.png`,
        },
      ],
    },
    {
      name: "Uttam",
      role: "Senior Python Architect",
      image: `${cdnImage}landing/images/python-ppc/uttam.png`,
      experience: "12+ Years",
      availability: "Full-time",
      projects: "9+ Projects",
      description:
        "Uttam specializes in Python automation, OCR, and text analysis for mobile and enterprise platforms, with solid backend and database expertise.",
      expertIn: ["Flask", "Openpyxl", "Django"],
      alsoSkilledIn: ["Selenium", "Robot Framework", "pytest", "AI"],
      workedWith: [
        {
          name: "Company4",
          logo: `${cdnImage}main-boot-5/images/python-ppc/renault.png`,
        },
        {
          name: "Company5",
          logo: `${cdnImage}main-boot-5/images/python-ppc/infosys.png`,
        },
        {
          name: "Company6",
          logo: `${cdnImage}main-boot-5/images/python-ppc/3m.png`,
        },
      ],
    },
    {
      name: "Neel",
      role: "Senior Python Developer",
      image: `${cdnImage}landing/images/python-ppc/hire-dev-4.png`,
      experience: "8+ Years",
      availability: "Full-time",
      projects: "6+ Projects",
      description:
        "Neel delivers AI-ready Python services using FastAPI, Flask, and Scrapy. He builds intelligent data pipelines and workflows for cloud-native apps.",
      expertIn: ["FastAPI", "Pandas", "Scikit-learn", "Keras"],
      alsoSkilledIn: ["AppSync", "Amazon AI Services", "Django", "GCP"],
      workedWith: [
        {
          name: "Company7",
          logo: `${cdnImage}main-boot-5/images/python-ppc/disney.png`,
        },
        {
          name: "Company8",
          logo: `${cdnImage}main-boot-5/images/python-ppc/national.png`,
        },
        {
          name: "Company9",
          logo: `${cdnImage}main-boot-5/images/python-ppc/kpmg.png`,
        },
      ],
    },
  ],
};
