export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  image: string;
  focus: string[];
}

export const team: TeamMember[] = [
  {
    id: "tim-sabean",
    name: "Tim Sabean",
    role: "President & Founder — Content, Talent and Brand Strategy",
    shortRole: "Founder & President",
    bio: "Sabean Media and The Sabean Group, LLC is founded by content executive Tim Sabean, one of the most highly regarded experts in personality-driven content. Previously founder of the Howard Stern Channels on SiriusXM, leaning on a 30-year career building content brands for some of the biggest personalities in media — spanning Radio, Podcasting and beyond. Tim served as Head of Podcasts for Westwood One and SVP of Programming for CBS Radio. He drives value through an incredible ability to transform business through strategic vision and powerful partnerships.",
    image: "/images/team/tim-sabean.png",
    focus: ["Content", "Talent", "Brand"],
  },
  {
    id: "gil-edwards",
    name: "Gil Edwards",
    role: "CCO — Content, Platform and Product Strategy",
    shortRole: "Chief Content Officer",
    bio: "Gil served in leadership roles at CBS Radio and SiriusXM developing national and local media brands, music and top-tier spoken-word content. In 2007, Gil moved into digital product leadership and strategy, working on consumer-facing start-up platforms in streaming audio, online video and mobile app development — with a focus on digital content syndication, audio search and distribution including podcasting. Gil has an MBA from Villanova and is the founder of Ignite Content Strategy, LLC. and co-founder of Ignite Creator Studios in suburban New York City.",
    image: "/images/team/gil-edwards.jpg",
    focus: ["Platform", "Product", "Content"],
  },
  {
    id: "jim-keller",
    name: "Jim Keller",
    role: "CFO — Finance, Valuation and Business Strategy",
    shortRole: "Chief Financial Officer",
    bio: "Jim has over 35 years of experience providing financial, administrative, operational and strategic leadership to global software, consulting, distribution, manufacturing and public accounting firms — ranging from early-stage to established billion-dollar corporations. As Executive VP and CFO, he plays a broad organization-wide role providing leadership, support and mentoring across teams to achieve growth and success.",
    image: "/images/team/jim-keller.png",
    focus: ["Finance", "Valuation", "Strategy"],
  },
  {
    id: "al-mcgowan",
    name: "Al McGowan",
    role: "CEO — Business and Operations Strategy and Development",
    shortRole: "Chief Executive Officer",
    bio: "Al is a uniquely experienced technology executive with a career spanning nuclear power, aerospace, media, digital and big data analytics. He helped create and manage numerous companies to deliver products, content and experiences at the leading edge of technology. Al has decades of experience as a founder, COO, CEO, advisor and board member of private and public companies.",
    image: "/images/team/al-mcgowan.jpg",
    focus: ["Operations", "Business", "Technology"],
  },
];
