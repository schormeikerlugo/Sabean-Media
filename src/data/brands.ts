export interface Brand {
  id: string;
  name: string;
  logo: string;
  featured?: boolean;
}

export const brands: Brand[] = [
  { id: "howard-stern", name: "The Howard Stern Show", logo: "/images/brands/howard-stern.png", featured: true },
  { id: "siriusxm", name: "SiriusXM Satellite Radio", logo: "/images/brands/siriusxm.png", featured: true },
  { id: "cbs-radio", name: "CBS Radio", logo: "/images/brands/cbs-radio.png", featured: true },
  { id: "westwood-one", name: "Westwood One", logo: "/images/brands/westwood-one.png", featured: true },
  { id: "viacom", name: "Viacom", logo: "/images/brands/viacom.png", featured: true },
  { id: "abc", name: "American Broadcasting Company", logo: "/images/brands/abc.png", featured: true },
  { id: "cumulus", name: "Cumulus Media", logo: "/images/brands/cumulus-media.png", featured: true },
  { id: "comedy-central-radio", name: "Comedy Central Radio", logo: "/images/brands/comedy-central-radio.png" },
  { id: "siriusxm-comedy", name: "SiriusXM Comedy", logo: "/images/brands/siriusxm-comedy.jpg" },
  { id: "247-comedy", name: "24/7 Comedy", logo: "/images/brands/247-comedy.jpg" },
  { id: "redlasso", name: "redLasso", logo: "/images/brands/redlasso.png" },
  { id: "just-for-laughs", name: "Just For Laughs", logo: "/images/brands/just-for-laughs.jpg" },
  { id: "rawdog", name: "Raw Dog Comedy", logo: "/images/brands/rawdog.png" },
  { id: "blue-collar-radio", name: "Blue Collar Radio", logo: "/images/brands/blue-collar-radio.png" },
  { id: "wdre", name: "WDRE", logo: "/images/brands/wdre.jpg" },
  { id: "wysp", name: "WYSP", logo: "/images/brands/wysp.jpg" },
  { id: "tango", name: "Tango", logo: "/images/brands/tango.png" },
  { id: "trafficcarma", name: "TrafficCarma", logo: "/images/brands/trafficcarma.png" },
  { id: "carlins-corner", name: "Carlin's Corner", logo: "/images/brands/carlins-corner.jpg" },
];
