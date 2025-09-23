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
        "Uttam specializes in Python automation, OCR, and text analysis for mobile and enterprise platforms, with solid backend and database expertise. ",
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
      image: `${cdnImage}landing/images/profile-client/hire-dev-4.png`,
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
    {
      name: "Krupa",
      role: "Senior Python Developer",
      image: `${cdnImage}landing/images/python-ppc/krupa.png`,
      experience: "8+ Years",
      availability: "Full-time",
      projects: "6+ Projects",
      description:
        "Krupa focuses on ORM, data integration, and server-side logic, with a growing track record in ML projects across eCommerce and healthcare.",
      expertIn: ["Neo4j", "TensorFlow", "Dash Framework"],
      alsoSkilledIn: ["Postgres", "MySQL", "SQL", "Azure"],
      workedWith: [
        {
          name: "Company10",
          logo: `${cdnImage}main-boot-5/images/python-ppc/game-changer.png`,
        },
        {
          name: "Company11",
          logo: `${cdnImage}main-boot-5/images/python-ppc/acr.png`,
        },
        {
          name: "Company12",
          logo: `${cdnImage}main-boot-5/images/python-ppc/sami-aid.png`,
        },
      ],
    },
    {
      name: "Viral",
      role: "Senior Python Developer",
      image: `${cdnImage}landing/images/python-ppc/viral.png`,
      experience: "7+ Years",
      availability: "Full-time",
      projects: "4+ Projects",
      description:
        "Viral builds cloud-based backend systems for finance and telecom, integrating REST APIs, DevOps practices, and AI-enhanced architecture.",
      expertIn: ["Django", "Seaborn", "XGBoost", "Scikitlearn"],
      alsoSkilledIn: ["SQL Server", "Kubernetes", "Flask"],
      workedWith: [
        {
          name: "Company13",
          logo: `${cdnImage}main-boot-5/images/python-ppc/kpmg.png`,
        },
        {
          name: "Company14",
          logo: `${cdnImage}main-boot-5/images/python-ppc/bangkok-bank.png`,
        },
        {
          name: "Company15",
          logo: `${cdnImage}main-boot-5/images/python-ppc/franklin.png`,
        },
      ],
    },
  ],
};

// export python services grid data
export const pythonServicesGridData = {
  title: "Our Full Cycle Python Development Services",
  services: [
    {
      icon: `${cdnImage}landing/images/tech-img/python-experties-1.svg`,
      title: "Python AI and ML Services",
      alt: "Python AI and ML",
    },
    {
      icon: `${cdnImage}landing/images/services-icon/app-development.svg`,
      title: "Python Mobile App Development",
      alt: "Python Mobile Development",
    },
    {
      icon: `${cdnImage}landing/images/services-icon/front-end.svg`,
      title: "Custom Python App Development",
      alt: "Custom Python Development",
    },
    {
      icon: `${cdnImage}landing/images/services-icon/application-development.svg`,
      title: "Python Web Application Development",
      alt: "Python Web Development",
    },
    {
      icon: `${cdnImage}landing/images/services-icon/consulting-2.svg`,
      title: "Enterprise App Development",
      alt: "Enterprise Development",
    },
    {
      icon: `${cdnImage}landing/images/services-icon/migration.svg`,
      title: "Python Migration and Upgradation",
      alt: "Python Migration",
    },
    {
      icon: `${cdnImage}landing/images/services-icon/maintance-support.svg`,
      title: "Python Support & Maintenance",
      alt: "Python Support",
    },
    {
      icon: `${cdnImage}landing/images/tech-img/python-experties-6.svg`,
      title: "Python Framework Development",
      alt: "Python Framework",
    },
  ],
  additionalServices: [
    "Python Testing & QA Services",
    "Python Integration Services",
    "Back-end Development",
    "Data Migration",
    "API Development",
    "Python CMS Development",
    "Cloud-Based Development",
  ],
  ctaButton: {
    text: "Schedule a Discovery Call",
    href: "https://calendly.com/americas-3/30min?_gl=1*11z2jzn*_gcl_au*MjYzMjE4MzIzLjE3NTcwNjUyNjk.*_ga*MTMwNjQxMjg5NS4xNzQ4ODQyMDM5*_ga_5ZSTFLNPDY*czE3NTgxODgwMjAkbzIxJGcxJHQxNzU4MTg5NzIyJGo2MCRsMCRoMTIwODY4MzY2Nw..",
    target: "_blank",
    icon: "landing/images/icons/calendar.svg",
  },
};

// export pricing section data
export const pythonPricingData = {
  title:
    "Developer Hiring Made Simple: Hourly, Monthly or Fixed Cost Based on Your Needs",
  subtitle:
    "Simple & Transparent Pricing | Time-Zone Aligned | Code Security | Cut Costs By 40%",
  plans: [
    {
      title: "Hourly",
      price: "22",
      currency: "USD",
      features: [
        "Usage-based billing",
        "Dedicated Developer in Your Time-zone",
        "Interview before Hiring",
        "100% QA & DevOps",
      ],
      ctaButton: {
        text: "Get Started on Hourly Basis",
        href: "#form",
        target: "_blank",
      },
    },
    {
      title: "Monthly",
      price: "3200",
      currency: "USD",
      features: [
        "160 Working Hours",
        "15 Days Free Trial",
        "Interview before Hiring",
        "Dedicated PM Support",
        "5+ Yrs Senior Python Developer",
      ],
      ctaButton: {
        text: "Get Started on Monthly Basis",
        href: "#form",
        target: "_blank",
      },
      highlighted: true,
    },
    {
      title: "Fixed Cost Solution",
      features: [
        "Get a Free Quote",
        "Fully Signed NDA",
        "Design, Develop, Maintain & Scale",
        "100% QA & DevOps",
      ],
      ctaButton: {
        text: "Get a Free Estimate",
        href: "#form",
        target: "_blank",
      },
    },
  ],
  ctaButton: {
    text: "Talk to Our Expert",
    href: "#form",
    target: "_blank",
    icon: "landing/images/icons/calendar.svg",
  },
  options: {
    title: "Let's Get Your Python Project Moving!",
    subtitle: "Select what you need help with - we'll handle the rest.",
    buttonText: "Submit My Requirements",
    optionsList: [
      { value: "outline", label: "Outline My Requirements" },
      { value: "rfp", label: "Request For Proposal (RFP)" },
      { value: "continue", label: "Continue My Existing Project" },
      { value: "cv", label: "Request Developer CVs" },
    ],
  },
};

// export contact section data
export const contactSectionData = {
  backgroundImage: "landing/images/banner-ppc/Conversation-sec-min.jpg",
  ctaButton: {
    text: "Start my free trial",
    href: "#form",
    target: "_self",
    icon: "",
  },
};

// export success banner data
export const successBannerData = {
  email: "solutions@bacancy.com",
  title: "Your Success is Guaranteed !",
  description:
    "We accelerate the release of digital products and guarantee your success",
  tools: ["Slack", "Jira", "GitHub"],
};

// export technical expertise data
export const technicalExpertiseData = {
  title: "Technical Expertise of our Python Developer",
  subtitle:
    "Our Python Programmers use best-in-class tools, state-of-the-art technologies and modern approaches to scale up your business",
  categories: [
    {
      title: "Frameworks",
      items: [
        "Django",
        "Zope",
        "Pyramid",
        "Flask",
        "Web2py",
        "Tornado",
        "Bottle",
      ],
    },
    {
      title: "Libraries",
      items: [
        "Fabric",
        "Requests",
        "Pika",
        "Gdata",
        "Urllib2",
        "Pillow/PIL",
        "wxPython",
        "Scrapy",
        "NetworkX",
        "Pandas",
      ],
    },
    {
      title: "Tools & Utilities",
      items: [
        "Asyncio",
        "NumPy",
        "South",
        "Beautiful Soap",
        "Celery",
        "Pycrypto",
        "Factory Boy",
        "Sqlalchemy",
        "Gunicorn",
        "PyQt",
        "Virtualenv",
        "Memcached",
      ],
    },
    {
      title: "Databases",
      items: [
        "MySQL",
        "Oracle",
        "SQLite",
        "MS SQL",
        "MongoDB",
        "Postgress",
        "Redis",
      ],
    },
    {
      title: "PM Tools",
      items: ["Jira", "Trello", "Slack"],
    },
    {
      title: "Testing",
      items: ["Pytest"],
    },
    {
      title: "ORMs",
      items: ["SQLAlchemy"],
    },
    {
      title: "General framework & Libraries",
      items: ["Requests", "Pillow", "Scrapy"],
    },
    {
      title: "Editors & IDEs",
      items: [
        "PyCharm Professional Edition",
        "VS Code",
        "PyCharm Community Edition",
      ],
    },
    {
      title: "CMS",
      items: ["Wagtail"],
    },
    {
      title: "Upgrade Services",
      items: [
        "3.5",
        "3.6",
        "3.7",
        "3.8",
        "3.9",
        "3.10",
        "3.11",
        "3.12",
        "3.13",
      ],
    },
    {
      title: "Deployment Process",
      items: ["CI/CD"],
    },
    {
      title: "AI Tools",
      items: ["GitHub", "Co-Pilot", "ChatGPT", "Claude"],
    },
    {
      title: "AI Automation",
      items: ["n8n", "Make", "Zapier"],
    },
  ],
  ctaButton: {
    text: "Schedule a Developer Interview",
    href: "https://calendly.com/americas-3/30min?_gl=1*1cfuvr1*_gcl_au*MjYzMjE4MzIzLjE3NTcwNjUyNjk.*_ga*MTMwNjQxMjg5NS4xNzQ4ODQyMDM5*_ga_5ZSTFLNPDY*czE3NTg1Mzk0MzIkbzMxJGcxJHQxNzU4NTQxMDA4JGo2MCRsMCRoMTYyMzQ1NTg4Mw..",
    target: "_blank",
    icon: "",
  },
};
