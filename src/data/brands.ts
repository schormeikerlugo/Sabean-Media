export interface Brand {
  id: string;
  name: string;
  logo: string;
  featured?: boolean;
}

export const brands: Brand[] = [
  { id: "howard-stern", name: "The Howard Stern Show", logo: "/images/brands/gold/howard-stern.png", featured: true },
  { id: "siriusxm", name: "SiriusXM Satellite Radio", logo: "/images/brands/gold/siriusxm.png", featured: true },
  { id: "cbs-radio", name: "CBS Radio", logo: "/images/brands/gold/cbs-radio.png", featured: true },
  { id: "westwood-one", name: "Westwood One", logo: "/images/brands/gold/westwood-one.png", featured: true },
  { id: "viacom", name: "Viacom", logo: "/images/brands/gold/viacom.png", featured: true },
  { id: "abc", name: "American Broadcasting Company", logo: "/images/brands/gold/abc.png", featured: true },
  { id: "cumulus", name: "Cumulus Media", logo: "/images/brands/gold/cumulus-media.png", featured: true },
  { id: "comedy-central-radio", name: "Comedy Central Radio", logo: "/images/brands/gold/comedy-central-radio.png" },
  { id: "siriusxm-comedy", name: "SiriusXM Comedy", logo: "/images/brands/gold/siriusxm-comedy.png" },
  { id: "247-comedy", name: "24/7 Comedy", logo: "/images/brands/gold/247-comedy.png" },
  { id: "redlasso", name: "redLasso", logo: "/images/brands/gold/redlasso.png" },
  { id: "just-for-laughs", name: "Just For Laughs", logo: "/images/brands/gold/just-for-laughs.png" },
  { id: "rawdog", name: "Raw Dog Comedy", logo: "/images/brands/gold/rawdog.png" },
  { id: "blue-collar-radio", name: "Blue Collar Radio", logo: "/images/brands/gold/blue-collar-radio.png" },
  { id: "wdre", name: "WDRE", logo: "/images/brands/gold/wdre.png" },
  { id: "wysp", name: "WYSP", logo: "/images/brands/gold/wysp.png" },
  { id: "tango", name: "Tango", logo: "/images/brands/gold/tango.png" },
  { id: "trafficcarma", name: "TrafficCarma", logo: "/images/brands/gold/trafficcarma.png" },
  { id: "carlins-corner", name: "Carlin's Corner", logo: "/images/brands/gold/carlins-corner.png" },
];
