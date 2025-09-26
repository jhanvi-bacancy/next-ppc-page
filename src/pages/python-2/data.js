const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;
import { formatDateWithDay } from "../../lib/helper";

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

// export steps section data
export const stepsSectionData = {
  title: {
    text: "Three steps to your",
    highlight: "perfect Specialist",
    suffix: "",
  },
  subtitle: "Get hand-picked talent in days—our 3-step process makes it simple",
  backgroundImage: `${cdnImage}landing/images/common-img/step-section-bg.png`,
  steps: [
    {
      stepNumber: 1,
      title: "BOOK A MEETING",
      description:
        "Start with a quick 20-minute call where we learn about your goals, team structure, and what kind of talent you're looking for.",
      contentImage: `${cdnImage}landing/images/common-img/book-meeting.png`,
      stepIcon: `${cdnImage}landing/images/fullstack-ppc/mentoring.gif`,
      dateButton: {
        text: `TODAY, ${formatDateWithDay()}`,
        href: "https://calendly.com/americas-3/30min?_gl=1*1omd485*_gcl_au*MjYzMjE4MzIzLjE3NTcwNjUyNjk.*_ga*MTMwNjQxMjg5NS4xNzQ4ODQyMDM5*_ga_5ZSTFLNPDY*czE3NTg2MDQ5NDQkbzMzJGcxJHQxNzU4NjA5MzcxJGo1MiRsMCRoMTUxMDYzNDE2Mw..",
        target: "_blank",
      },
      isButton: true,
    },
    {
      stepNumber: 2,
      title: "REVIEW YOUR MATCHES",
      description:
        "Within 48 hours, you'll receive a tailored shortlist of vetted, ready-to-go specialists—complete with direct links to book interviews at your convenience.",
      contentImage: `${cdnImage}landing/images/common-img/ai-step-2.png`,
      stepIcon: `${cdnImage}landing/images/fullstack-ppc/teamwork.gif`,
      dateButton: {
        text: formatDateWithDay(undefined, 1),
      },
      isButton: false,
    },
    {
      stepNumber: 3,
      title: "START WORKING TOGETHER",
      description:
        "Your chosen candidates can be fully integrated in as little as 10 days. We take care of HR, contracts, and onboarding so you can stay focused on execution.",
      contentImage: `${cdnImage}landing/images/common-img/start-working-together.png`,
      stepIcon: `${cdnImage}landing/images/fullstack-ppc/handshake.gif`,
      dateButton: {
        text: formatDateWithDay(undefined, 2),
      },
      isButton: false,
      bgColor: "bg-light-orange",
    },
  ],
};

// export AI Talent section data
export const aiTalentSectionData = {
  title: "Get Your Work Done Faster with",
  highlight: "AI-Enhanced Talent",
  description: [
    "Our developers leverage powerful AI tools to automate tasks, enhance productivity, and optimize workflows.",
    "Get 3X faster Product delivery than ordinary development process.",
    "Launch your First Module/Product in 15 Days!",
  ],
  tools: [
    {
      name: "GitHub Copilot",
      icon: `${cdnImage}landing/images/icons/copilot.svg`,
    },
    { name: "Cursor AI", icon: `${cdnImage}landing/images/icons/cursor.svg` },
  ],
  headingIcon: `${cdnImage}landing/images/icons/heading-icon.svg`,
  bacancyLogo: `${cdnImage}landing/images/icons/bacancy-icon.svg`,
  ctaButton: {
    text: "Talk to Our Expert",
    href: "#form",
    target: "_blank",
  },
};

// export success stories data
export const successStoriesData = {
  title: "Our Amazing Customer Success Stories",
  description:
    "Over the past 13+ years, we have built awesome applications for our valuable clients to solve real-life problems and help them overcome start-up challenges.",
  successStories: [
    {
      category: "E-COMMERCE",
      title: "ACR",
      description:
        "ACR is a leading eCommerce website building a wide range of Electronics for emergency beacons, designed through combined technology expertise in the marine, aviation, and military markets with one purpose: to save lives.",
      clientRequirement:
        "A website in a way that makes the customer's buying journey become easy and seamless and enables category-wise product classification.",
      result:
        "A website was built with a proper classification of a wide range of Electronics beacons including Marine beacons, Outdoor Beacons and Aviation Beacons.",
      image: `${cdnImage}landing/images/case-study/cs-4.jpg`,
    },
    {
      category: "E-COMMERCE",
      title: "National Geographic",
      description:
        "National Geographic is an American magazine legend with a rich history of 125 years. It is one of the most widely read magazines of all time.",
      clientRequirement:
        "Redesigning the B2C website with the aim of flawless availability of the channel's information for the user as previously the user was not able to buy monthly subscriptions and the application received insufficient subscribers even after ranking on top.",
      result:
        "A unified subscription solution was built that helped their end-users to buy the subscription easily.",
      image: `${cdnImage}landing/images/case-study/cs-1.jpg`,
    },
    {
      category: "BIKE AND CYCLING PORTAL",
      title: "JAGZ MTB",
      description:
        "Jagz MTB app is built to enhance the mountain experience. It connects travelers with lodging hosts and professional guides and helps them search for accommodations, tours, and local discounts whenever they travel.",
      clientRequirement:
        "A portal that connects the users to mountain biking locals whenever they are out to travel.",
      result:
        "The portal is built with services that enable the user to connect with the biking local. Moreover, the biking local can search for any region and create and customize his/her profile.",
      image: `${cdnImage}landing/images/case-study/cs-2.jpg`,
    },
    {
      category: "BIKE AND CYCLING PORTAL",
      title: "Academy Sports & Outdoor",
      description:
        "Academy Sports + Outdoors is one of the largest sporting goods and outdoor stores in the USA, with 259+ stores selling a wide range of sport equipments.",
      clientRequirement:
        "Difficulty in changing the app labels & configurations at any time. In addition, there was trouble in recommending the products to users based on their interests.",
      result:
        "ContenStack and Kibo were used and therefore app labels and configuration was possible at any time. Now, the users get recommendations as per their interests and previous searches.",
      image: `${cdnImage}landing/images/case-study/cs-3.jpg`,
    },
  ],
};

// export customer reviews data
export const customerReviewsData = {
  title: { text: "What Our Customers Say", highlight: "Customers" },
  description:
    "Don't just take our word for it. Hear what our valued clients have to say about their experiences with us.",
  rating: `${cdnImage}landing/images/web-ppc/clutchreview-icon.svg`,
  reviews: [
    {
      highlight: "Flexibility",
      review: "Flexibility to work based on demand is impressive",
      name: "Bryan Boulton",
      designation: "IT Lead, Birchmount Network",
      companyLogo: `${cdnImage}landing/images/web-ppc/birchmount-network-logo.svg`,
    },
    {
      highlight: "Timely delivery",
      review: "Timely delivery with a remarkable feedback approach.",
      name: "Dylan de Szabo",
      designation: "Director, D-BIT APAC",
      companyLogo: `${cdnImage}landing/images/web-ppc/d-bit-logo.svg`,
    },
    {
      highlight: "Customer-centric",
      review: "Customer-centric approach paired with effective communication.",
      name: "Philip Gomez",
      designation: "Co-Owner, Patty's Cakes and Desserts",
      companyLogo: `${cdnImage}landing/images/web-ppc/patty-cake-logo.svg`,
    },
    {
      highlight: "affordable prices",
      review: "Exceptional results at affordable prices",
      name: "Yash Daftary",
      designation: "CEO, Fanbasis",
      companyLogo: `${cdnImage}landing/images/web-ppc/fanbasis-logo.svg`,
    },
    {
      highlight: "Collabrative",
      review: "Collabrative environment and highly responsive team",
      name: "Vennila Rajes",
      designation: "Director of Operations, Help Desk Technology",
      companyLogo: `${cdnImage}landing/images/web-ppc/helpdesk-logo.svg`,
    },
  ],
};

// export development strength data
export const developmentStrengthData = {
  title: "13+ Years and Counting...",
  backgroundImage: `${cdnImage}landing/images/aus-img/dot-bg.png`,
  sideImage: `${cdnImage}landing/images/common-img/side-img-5.jpg`,
  description:
    "By establishing an Python development center, we offer our tailored engagement models that cater to the unique needs by providing B2B and B2C Dedicated development support.",
  strengths: [
    {
      number: "1050+",
      title: "Agile Developers",
    },
    {
      number: "80+",
      title: "Python Developers",
    },
    {
      number: "05",
      title: "Agile Coaches",
    },
    {
      number: "14",
      title: "Certified Scrum Masters",
    },
  ],
  features: [
    {
      icon: `${cdnImage}landing/images/common-img/counting-ico-1.png`,
      title: "Work at Your Time Zone",
    },
    {
      icon: `${cdnImage}landing/images/common-img/counting-ico-3.png`,
      title: "Easy Communication",
    },
    {
      icon: `${cdnImage}landing/images/common-img/counting-ico-4.png`,
      title: "Hire in 48 Hours",
    },
    {
      icon: `${cdnImage}landing/images/common-img/counting-ico-2.png`,
      title: "In Business Since 2011",
    },
    {
      icon: `${cdnImage}landing/images/common-img/counting-ico-5.png`,
      title: "5/5 Pro User Rating",
    },
  ],
};

// export footer data
export const footerData = {
  backgroundImage: `${cdnImage}landing/images/footer-bg.png`,
  getInTouchImage: `${cdnImage}landing/images/footer-ppc/gptw-1.svg`,
  bookCallImage: `${cdnImage}landing/images/footer-ppc/call.svg`,
  isoImage: `${cdnImage}landing/images/iso-2013.svg`,
  starImage: `${cdnImage}landing/images/footer-ppc/star.svg`,
  addresses: [
    {
      country: "India (HQ)",
      flag: `${cdnImage}landing/images/footer-ppc/india.svg`,
      title: "Corporate House",
      address: "15-1A, Times Corporate Park,Thaltej, Ahmedabad, Gujarat 380059",
    },
    {
      country: "USA",
      flag: `${cdnImage}landing/images/footer-ppc/usa.svg`,
      address: "33 South ave, Suit 600 Iselin, NJ 08830",
    },
    {
      country: "Canada",
      flag: `${cdnImage}landing/images/footer-ppc/canada.svg`,
      address: "71 Dawes Road, Brampton, On L6X 5N9, Toronto",
    },
    {
      country: "Australia",
      flag: `${cdnImage}landing/images/footer-ppc/australia.svg`,
      address: "351A Hempstead Rd, Northfield SA 5085",
    },
    {
      country: "UAE",
      flag: `${cdnImage}landing/images/footer-ppc/uae.svg`,
      address: "1408 Clover Bay, Business Bay, Dubai, UAE, PO Box 62049",
    },
    {
      country: "Sweden",
      flag: `${cdnImage}landing/images/footer-ppc/sweden.svg`,
      address: "Junkergatan 4, 126 53 Hagersten",
    },
  ],
  ratings: [
    {
      platform: "Google",
      rating: "4.6",
      image: `${cdnImage}landing/images/dev-ppc/google.svg`,
    },
    {
      platform: "Glassdoor",
      rating: "4.5",
      image: `${cdnImage}landing/images/footer-ppc/glassdoor.svg`,
    },
    {
      platform: "Clutch",
      rating: "4.7",
      image: `${cdnImage}landing/images/footer-ppc/clutch.svg`,
    },
    {
      platform: "GoodFirms",
      rating: "4.8",
      image: `${cdnImage}landing/images/dev-ppc/good-firm.svg`,
    },
  ],
  privacyButton: {
    btnText: "Privacy Policy",
    href: "https://www.bacancytechnology.com/landing/privacy-policy",
    target: "_blank",
  },
  faqsButton: {
    btnText: "FAQs",
    href: "https://www.bacancytechnology.com/landing/faqs",
    target: "_blank",
  },
};
