import { Icons } from "@/components/Icons";
import packageJson from "../../package.json";

export const appPrefix = "sn";

export const appConfig = {
  name: packageJson.name.replace(/-/g, " "),
  version: packageJson.version,
  description: "Linktree alternative, share your links with the world.",
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "Use Cases", href: "#use-cases" },
      { id: 3, name: "Open Source", href: "#open-source" },
      { id: 4, name: "Pricing", href: "#pricing" },
    ],
  },
  hero: {
    badgeIcon: Icons.badge,
    badge: "100% OPEN SOURCE",
    githubUrl: "https://github.com/souravsspace/sana",
    title: "sana, the AI Employee.",
    description:
      "Sana by souravsspace - is a linktree anternative, share your links with the world.",
    inputPlaceholder: "Ask sana to...",
  },
  useCases: [
    {
      id: "competitor-analysis",
      title: "Competitor Analysis",
      description:
        "Analyze the market for my next company in the healthcare industry, located in the UK. Give me the major players, their market size, strengths, and weaknesses, and add their website URLs. Once done, generate a PDF report.",
      category: "research",
      featured: true,
      icon: Icons.research,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
      url: "https://suna.so/share/2fbf0552-87d6-4d12-be25-d54f435bc493",
    },
    {
      id: "vc-list",
      title: "VC List",
      description:
        "Give me the list of the most important VC Funds in the United States based on Assets Under Management. Give me website URLs, and if possible an email to reach them out.",
      category: "finance",
      featured: true,
      icon: Icons.finance,
      image:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
      url: "https://suna.so/share/a172382b-aa77-42a2-a3e1-46f32a0f9c37",
    },
    {
      id: "candidate-search",
      title: "Looking for Candidates",
      description:
        "Go on LinkedIn, and find 10 profiles available - they are not working right now - for a junior software engineer position, who are located in Munich, Germany. They should have at least one bachelor's degree in Computer Science or anything related to it, and 1-year of experience in any field/role.",
      category: "recruitment",
      featured: true,
      icon: Icons.recruitment,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
      url: "https://suna.so/share/d9e39c94-4f6f-4b5a-b1a0-b681bfe0dee8",
    },
    {
      id: "company-trip",
      title: "Planning Company Trip",
      description:
        "Generate a route plan for my company. We should go to California. We'll be 8 people. Compose the trip from the departure (Paris, France) to the activities we can do considering that the trip will be 7 days long - departure on the 21st of Jun 2025.",
      category: "travel",
      featured: true,
      icon: Icons.travel,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
      url: "https://suna.so/share/23f7d904-eb66-4a9c-9247-b9704ddfd233",
    },
    {
      id: "excel-spreadsheet",
      title: "Working on Excel",
      description:
        "My company asked to set up an Excel spreadsheet with all the information about Italian lottery games (Lotto, 10eLotto, and Million Day). Based on that, generate and send me a spreadsheet with all the basic information (public ones).",
      category: "data",
      featured: true,
      icon: Icons.data,
      image:
        "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
      url: "https://suna.so/share/2a147a3a-3778-4624-8285-42474c8c1c9c",
    },
    {
      id: "speaker-prospecting",
      title: "Automate Event Speaker Prospecting",
      description:
        "Find 20 AI ethics speakers from Europe who've spoken at conferences in the past year. Scrapes conference sites, cross-references LinkedIn and YouTube, and outputs contact info + talk summaries.",
      category: "research",
      featured: true,
      icon: Icons.researchTwo,
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
      url: "https://suna.so/share/6830cc6d-3fbd-492a-93f8-510a5f48ce50",
    },
  ],
  cloudPricingItems: [
    {
      name: "Free",
      price: "$0",
      description: "Get started with",
      buttonText: "Start Free",
      buttonColor: "bg-secondary text-white",
      isPopular: false,
      /** @deprecated */
      hours: "60 min",
      features: [
        "Free $5/month usage included",
        "Public Projects",
        "Limited models",
      ],
      // stripePriceId: config.SUBSCRIPTION_TIERS.FREE.priceId,
      upgradePlans: [],
    },
    {
      name: "Plus",
      price: "$20",
      yearlyPrice: "$204",
      originalYearlyPrice: "$240",
      discountPercentage: 15,
      description: "Everything in Free, plus:",
      buttonText: "Start Free",
      buttonColor: "bg-primary text-white dark:text-black",
      isPopular: true,
      /** @deprecated */
      hours: "2 hours",
      features: [
        "$20/month usage",
        // '+ $5 free included',
        "Private projects",
        "More models",
      ],
      // stripePriceId: config.SUBSCRIPTION_TIERS.TIER_2_20.priceId,
      // yearlyStripePriceId: config.SUBSCRIPTION_TIERS.TIER_2_20_YEARLY.priceId,
      upgradePlans: [],
    },
    {
      name: "Pro",
      price: "$50",
      yearlyPrice: "$510",
      originalYearlyPrice: "$600",
      discountPercentage: 15,
      description: "Everything in Free, plus:",
      buttonText: "Start Free",
      buttonColor: "bg-secondary text-white",
      isPopular: false,
      /** @deprecated */
      hours: "6 hours",
      features: [
        "$50/month usage",
        // '+ $5 free included',
        "Private projects",
        "More models",
      ],
      // stripePriceId: config.SUBSCRIPTION_TIERS.TIER_6_50.priceId,
      // yearlyStripePriceId: config.SUBSCRIPTION_TIERS.TIER_6_50_YEARLY.priceId,
      upgradePlans: [],
    },
  ],
  ctaSection: {
    id: "cta",
    title: "Start Using Sana DIY Today",
    backgroundImage: "/holo.png",
    button: {
      text: "Get Started for free",
      href: "/auth",
    },
    subtext: "The generalist links that acts on your behalf",
  },
  footerLinks: [
    {
      title: "Sana",
      links: [
        { id: 1, title: "About", url: "https://sana.diy" },
        { id: 3, title: "Contact", url: "mailto:hey@sana.diy" },
        { id: 4, title: "Careers", url: "https://sana.diy/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          id: 5,
          title: "Documentation",
          url: "https://github.com/souravsspace/sana",
        },
        { id: 7, title: "Discord", url: "https://discord.gg/Py6pCBUUPw" },
        {
          id: 8,
          title: "GitHub",
          url: "https://github.com/souravsspace/sana.diy",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          id: 9,
          title: "Privacy Policy",
          url: "https://suna.so/legal?tab=privacy",
        },
        {
          id: 10,
          title: "Terms of Service",
          url: "https://suna.so/legal?tab=terms",
        },
        {
          id: 11,
          title: "License Apache 2.0",
          url: "https://github.com/souravsspace/sana/blob/main/LICENSE",
        },
      ],
    },
  ],
} as const;
