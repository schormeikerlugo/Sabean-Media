export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: "content" | "product" | "brand" | "podcast" | "platform" | "business";
}

export const services: Service[] = [
  {
    id: "content-strategy",
    number: "01",
    title: "Content Strategy",
    subtitle: "Show, Brand & Channel Development",
    description:
      "Content strategy, show, brand or channel development and leadership — engineered around personality-driven storytelling.",
    points: ["Channel architecture", "Show development", "Editorial leadership"],
    icon: "content",
  },
  {
    id: "product-strategy",
    number: "02",
    title: "Product Strategy",
    subtitle: "Digital Tools & Platforms",
    description:
      "Digital tools, mobile and online platform product management and strategy — from zero-to-one to scaled consumer products.",
    points: ["Mobile & web apps", "Product roadmaps", "Go-to-market"],
    icon: "product",
  },
  {
    id: "brand-strategy",
    number: "03",
    title: "Brand Strategy",
    subtitle: "Media-Centric Positioning",
    description:
      "Media-centric strategy for brands, products, services or e-commerce — built for cultural relevance and commerce together.",
    points: ["Positioning", "Narrative systems", "Commerce integration"],
    icon: "brand",
  },
  {
    id: "podcast-roadmap",
    number: "04",
    title: "Podcast Roadmap",
    subtitle: "Analysis, Format & Launch",
    description:
      "Full strategic analysis, format and roadmap development to launch — powered by decades of Howard Stern-era expertise.",
    points: ["Format design", "Distribution", "Audience development"],
    icon: "podcast",
  },
  {
    id: "platform-development",
    number: "05",
    title: "Platform Development",
    subtitle: "Partnerships & Audience",
    description:
      "Partnership development, customer success and audience development — unlocking revenue across every vertical.",
    points: ["Partnerships", "Customer success", "Distribution"],
    icon: "platform",
  },
  {
    id: "business-consulting",
    number: "06",
    title: "Business Consulting",
    subtitle: "Revenue & Growth Strategy",
    description:
      "Financial analysis, revenue performance and business development — from early-stage to billion-dollar operators.",
    points: ["Revenue performance", "Financial modeling", "Business dev"],
    icon: "business",
  },
];
