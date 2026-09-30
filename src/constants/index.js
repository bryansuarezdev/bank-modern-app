import { people01, people02, people03, facebook, instagram,
  linkedin, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets"

export const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/features",
    title: "Features",
  },
  {
    path: "/product",
    title: "Product",
  },
  {
    path: "/clients",
    title: "Clients",
  },
]

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
]

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
]

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
]

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        slug: "content",
      },
      {
        name: "How it Works",
        slug: "how-it-works",
      },
      {
        name: "Create",
        slug: "create",
      },
      {
        name: "Explore",
        slug: "explore",
      },
      {
        name: "Terms & Services",
        slug: "terms-and-services",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        slug: "help-center",
      },
      {
        name: "Partners",
        slug: "partners",
      },
      {
        name: "Suggestions",
        slug: "suggestions",
      },
      {
        name: "Blog",
        slug: "blog",
      },
      {
        name: "Newsletters",
        slug: "newsletters",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        slug: "our-partner",
      },
      {
        name: "Become a Partner",
        slug: "become-a-partner",
      },
    ],
  },
]

export const socialMedia = [
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/bryanrsuarezb/",
  },
  {
    id: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/bryanrsuarezb",
  },
  {
    id: "GitHub",
    icon: null,
    link: "https://github.com/bryansuarezdev",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/bryansuarez1989/",
  },
]

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
]
