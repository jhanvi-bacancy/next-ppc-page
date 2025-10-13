import { developmentStrengthVariables } from "../../variables/pages";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;
const landingPage = process.env.NEXT_PUBLIC_API_BASE_URL;

export const metaProperties = {
  title: "Hire Python Developer on Hourly or Monthly Basis",
  description:
    "Hire Python developer having experience with advanced Python frameworks. Our Python programmer is skilled at Django, Flask, web2py, and machine learning.",
  ogImage: `${cdnImage}main/img/og/python-development.png?v-7`,
  path: `${landingPage}python-2`,
};

// Data for the Python Development page
export const pythonBannerData = {
  backgroundImage: "landing/images/banner-ppc/python-banner.jpg",
  badge: "USA #1 Python Development Company",
  title: {
    text: "Hire",
    highlight: " FullStack Python ",
    suffix: "Developers",
  },
  description:
    "Hire Python developers to build secure, scalable, and AI-powered enterprise-grade web apps with strong OOP expertise. Get 80+ full-stack Python developers proficient in Django, Flask, FastAPI, ML frameworks, Tornado, and more.",
  ctaButton: {
    text: "Schedule a Quick Call",
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

// export python experts data
export const pythonExpertsData = {
  title: {
    text: "Hire",
    highlight: " Dedicated Python Developers ",
    suffix: "in 48 Hours",
  },
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
    href: "https://calendly.com/americas-3/30min",
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
      price: "$22",
      currency: "USD",
      features: [
        "Usage-based billing",
        "Dedicated Developer in Your Time-zone",
        "Interview before Hiring",
        "100% QA & DevOps",
      ],
      ctaButton: {
        text: "Get Started on Hourly Basis",
        href: `${landingPage}landing/python-2#form`,
        target: "_blank",
      },
    },
    {
      title: "Monthly",
      price: "$3200",
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
        href: `${landingPage}landing/python-2#form`,
        target: "_blank",
      },
      highlighted: true,
    },
    {
      price: "Fixed Cost Solution",
      title: "As per your needs",
      features: [
        "Get a Free Quote",
        "Fully Signed NDA",
        "Design, Develop, Maintain & Scale",
        "100% QA & DevOps",
      ],
      ctaButton: {
        text: "Get a Free Estimate",
        href: `${landingPage}landing/python-2#form`,
        target: "_blank",
      },
    },
  ],
  ctaButton: {
    text: "Talk to Our Expert",
    href: `${landingPage}landing/python-2#form`,
    target: "_blank",
    icon: "landing/images/icons/calendar.svg",
  },
};

// export contact section data
export const contactSectionData = {
  backgroundImage: "landing/images/banner-ppc/Conversation-sec-min.jpg",
  ctaButton: {
    text: "Start my free trial",
  },
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
    href: "https://calendly.com/americas-3/30min",
    target: "_blank",
    icon: "",
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
    href: `${landingPage}landing/privacy-policy`,
    target: "_blank",
  },
  faqsButton: {
    btnText: "FAQs",
    href: `${landingPage}landing/faqs`,
    target: "_blank",
  },
};

// export FAQ data
export const faqData = [
  {
    question: "Is 15 days risk-free trial period completely free?",
    answer:
      "Yes, absolutely! Our 15-day risk-free trial allows you to assess the code quality, communication, timely delivery, and Agile development process. 9 out of 10 people who opt for our free-trial turn into our loyal customers. Experience our exceptional service without any commitment and decide if it meets your expectations. Enjoy peace of mind as you experience our exceptional services risk-free for 15 days!",
  },
  {
    question: "What are the different engagement models you have?",
    answer: [
      {
        type: "paragraph",
        content: "We have two different types of engagement models:-",
      },
      {
        type: "heading",
        content: "Time & Material:",
        className: "dark",
      },
      {
        type: "paragraph",
        content:
          "You can hire dedicated developers on a monthly basis (160 hours per month). This is the most suitable model where the developer will work with you as your augmented team member. Here you can also hire a developer on a part time basis (80 hours per month).",
      },
      {
        type: "heading",
        content: "Fixed price:",
        className: "dark",
      },
      {
        type: "paragraph",
        content:
          "You can share your requirements with our team. Our team will evaluate your requirements and then get back to you with the detailed estimation of your project along with time and cost as well as the roadmap of the project.",
      },
    ],
  },
  {
    question: "What would be the Working Hours of the Developer?",
    answer:
      "Developers will be working on US-time zone with an overlapping availability of 6 EST hours, so you will have full time-zone coverage.",
  },
  {
    question: "Do I work directly with the developer?",
    answer: "Yes, You would be working directly with the Developer.",
  },
  {
    question:
      "How do you ensure a smooth project transition from my existing vendor to Bacancy?",
    answer:
      "We understand the pain of a burnt bruise; hence, without any glitch, using Agile methodologies, we instill your trust in us through clear communication, daily stand-up, and retrospective meetings in the scrum. Our skilled developers assure you to take over your mid-way left project and ease out the developmental and management troubles. We ensure you deliver your project on time, smoothly, and successfully using smart project management tools.",
  },
  {
    question:
      "If I want to be involved in the development process, is it okay?",
    answer: [
      {
        type: "paragraph",
        content:
          'Absolutely yes. The Bacancy is incepted based on Agile principles. With this Agile software development iterative approach, the "client – product owner" is always involved in the software development process.',
      },
      {
        type: "paragraph",
        content:
          "The development process is not one-size-fits for all. With that consideration, from the ideation to deployment on each stage and on a daily basis, you will have an update from the team about project progress through Sprint. We let you have one to one interaction with the developer. Our daily scrum includes adaptive planning, continuous improvement, implementation, and rapid response to the changes.",
      },
    ],
  },
  {
    question: "What is your payment method after the engagement?",
    answer:
      "We are a registered entity in the United States with the name Bacancy Technology LLC, so you can choose to pay us in a Bank of America account via ACH or wire transfer. We can also help you save tax with help of a W9 form, here is our TIN number 83-4332237. Regardless of your physical location, we accept wire transfer from all across the globe.",
  },
  {
    question:
      "What is your resource backup strategy? If my existing resource is unavailable due to some emergency or plans to move with the organization?",
    answer:
      "Don't worry at all. We are a team of 1050+ Bacancyers, and we always make sure to take care of mandatory provisions to help you experience hassle-free development with minimal complexities.",
  },
  {
    question:
      'Will you assign a dedicated "Project Manager – Scrum Master" as a point of contact?',
    answer:
      "Yes. Dedicated project manager – Scrum master will be assigned throughout our engagement. With whom you can get in touch for any sort of assistance, query, or resolution.",
  },
  {
    question: "What project management tools do you use?",
    answer:
      "We use industry-standard project management tools like Jira, Trello, Pivotal Tracker, Asana, and Slack. Where you will be able to track developers' productivity and monitor the daily progress of your project, you can create the task, assign the work, and monitor the development progress.",
  },
  {
    question:
      "Do you ensure the security and confidentiality of our intellectual property?",
    answer:
      "Rest assured, you will have 100% ownership of your Python project. It includes NDA, copyright, source code, intellectual property rights, etc.",
  },
  {
    question:
      "What if I am not satisfied with the hired developer's work and would like to exit?",
    answer: [
      {
        type: "paragraph",
        content:
          "Be assured. That will never happen. Client satisfaction is our highest priority. Either Party to this agreement may terminate the contract, with or without cause, by providing at least 14 days (2) weeks written notice to the other Party. Upon termination of this agreement, Bacancy shall deliver a termination invoice for work completed to date, which shall be paid by the client (in 3 business days).",
      },
      {
        type: "paragraph",
        content:
          "The Termination invoice shall specify all unpaid work and the remaining work done until the termination date. On termination, all work completed to time shall be delivered to the client in a usable electronic format.",
      },
    ],
  },
];

export const developmentStrengthData = {
  title: `${developmentStrengthVariables.yearsOfExperience} Years and Counting...`,
  backgroundImage: `${cdnImage}landing/images/aus-img/dot-bg.png`,
  sideImage: `${cdnImage}landing/images/common-img/side-img-5.jpg`,
  description: `By establishing an ${developmentStrengthVariables.technology} development center, we offer our tailored engagement models that cater to the unique needs by providing B2B and B2C Dedicated development support.`,
  strengths: [
    {
      number: "1050+",
      title: "Agile Developers",
    },
    {
      number: developmentStrengthVariables.techDevelopers,
      title: `${developmentStrengthVariables.technology} Developers`,
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

export const formData = {
  leadingPageEndpoint: `${landingPage}landing/python-2`,
  thankYouPageEndpoint: `${landingPage}thank-you`,
};
