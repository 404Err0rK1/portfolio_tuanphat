export const METADATA = {
  title: "Portfolio | Ho Tuan Phat",
  description: "Portfolio | Ho Tuan PHat | Frontend Developer",
  siteUrl: "www.linkedin.com/in/ho-tuan-phat-web-developer",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ho-tuan-phat-web-developer/",
  github: "https://github.com/404Err0rK1",
  facebook: "https://www.facebook.com/404.Err0r.K1/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Grocer App",
    image: "/projects/grocer-app.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "This project aims to demonstrate my front-end skills providing a seamless online shopping experience for users looking to purchase groceries.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://grocer-go-app.vercel.app/",
    tech: ["next", "typescript", "tailwind", "framer-motion", "material-ui"],
  },
  {
    name: "Ecommerce Food Website",
    image: "/projects/ecommerce-food-app.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description:
      "A food ordering website, including components and features: a homepage, authentication, profile editing page, admin panel, listing products, menu items, and cart page",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://ecommerce-food-seven.vercel.app/",
    tech: ["next", "typescript", "tailwind", "mongodb", "firebase", "aws"],
  },
  {
    name: "BlockchainDoc",
    image: "/projects/blockchain-doc.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description:
      "Building a blockchain-powered web application capable of storing and authenticating documents such as PDFs, Word files, images,etc.",
    gradient: ["#245B57", "#004741"],
    url: "https://github.com/404Err0rK1/BlockchainDoc.git",
    tech: ["html", "javascript", "css", "blockchain", "metamask"],
  },
  {
    name: "Shop Car",
    image: "/projects/shop-car.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production : shop car",
    gradient: ["#003052", "#167187"],
    url: "https://car-shop-nextjs.vercel.app/",
    tech: ["next", "typescript", "tailwind"],
  },
  {
    name: "Ecommerce Shop Apple",
    image: "/projects/ecommerce-shop-apple.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "The website is a sleek, user-friendly e-commerce platform dedicated to selling Apple’s Macbook line of laptops. ",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://github.com/404Err0rK1/Ecommerce-shop-apple.git",
    tech: ["next", "typescript", "tailwind","mongodb"],
  },
];

export const SKILLS = {
  frontend: [
    "next",
    "typescript",
    "javascript",
    "html",
    "css",
    "react",
    "redux",
    "angular",
    "tailwind",
    "sass",
    "svg",
    "gsap",
  ],
  userInterface: ["figma", "illustrator", "photoshop", "lightroom"],
  other: ["git", "webpack"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: " FullStack Developer | Web Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Accept design and development of features, components, pages, or complete websites for clients through freelancing platforms such as Vlancer, Upwork, etc.",
    image: "/timeline/freelancer.svg",
    slideImage: "/timeline/developer.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend  Developer | Web Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Accept website interface design and development for clients through freelancing platforms, acquaintances, students, vlancer, etc.",
    image: "/timeline/freelancer.svg",
    slideImage: "/timeline/freelancer.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Designer UI/UX | Editor",
    size: ItemSize.SMALL,
    subtitle:
      "Accept UX/UI website design. Video editing for businesses to serve marketing purposes for clients through freelancing platforms, acquaintances, students, vlancer, etc.",
    image: "/timeline/freelancer.svg",
    slideImage: "/timeline/editor.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle: "Designing and developing user interface components for the dashboard of the monitoring and alerting system for incidents...",
    image: "/timeline/HPT.png",
    slideImage: "/timeline/HPT.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019 - 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Security Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/KMA.svg",
    slideImage: "/timeline/KMA.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

// export const GTAG = "code";
