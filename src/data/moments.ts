export interface Moment {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tall?: boolean;
  wide?: boolean;
}

export const moments: Moment[] = [
  {
    id: "chris-rock-townhall",
    title: "Chris Rock — Town Hall",
    subtitle: "Personality-driven content event",
    image: "/images/moments/chris-rock-townhall-1.jpg",
    tall: true,
  },
  {
    id: "opie-anthony",
    title: "Opie & Anthony",
    subtitle: "Flagship SiriusXM programming",
    image: "/images/moments/opie-and-anthony.jpg",
  },
  {
    id: "joan-rivers-unmasked",
    title: "Joan Rivers — UnMasked",
    subtitle: "Legendary long-form interview",
    image: "/images/moments/joan-rivers-unmasked.jpg",
  },
  {
    id: "al-tim-gil",
    title: "The Partners",
    subtitle: "Al, Tim & Gil",
    image: "/images/moments/al-tim-gil.jpg",
    wide: true,
  },
  {
    id: "zach-braff-kate-hudson",
    title: "Zach Braff & Kate Hudson",
    subtitle: "UnMasked with Ron Bennington",
    image: "/images/moments/zach-braff-kate-hudson.jpg",
    tall: true,
  },
  {
    id: "ron-white-bennington",
    title: "Ron White × Ron Bennington",
    subtitle: "Comedy programming",
    image: "/images/moments/ron-white-bennington.jpg",
  },
  {
    id: "jerry-lewis-townhall",
    title: "Jerry Lewis — Town Hall",
    subtitle: "An icon on air",
    image: "/images/moments/jerry-lewis-townhall.png",
  },
  {
    id: "montreal-comedy-festival",
    title: "Montreal Comedy Festival",
    subtitle: "On-site programming",
    image: "/images/moments/montreal-comedy-festival.png",
    wide: true,
  },
  {
    id: "jim-norton-opie-anthony",
    title: "Jim Norton, Opie & Anthony",
    subtitle: "The O&A era",
    image: "/images/moments/jim-norton-opie-anthony.jpg",
  },
  {
    id: "kate-hudson",
    title: "Kate Hudson",
    subtitle: "Celebrity access",
    image: "/images/moments/kate-hudson.png",
  },
  {
    id: "chris-rock-cedric",
    title: "Chris Rock & Cedric the Entertainer",
    subtitle: "Town Hall moment",
    image: "/images/moments/chris-rock-cedric-townhall.jpg",
    wide: true,
  },
  {
    id: "ron-and-fez",
    title: "Ron & Fez",
    subtitle: "Cult classic daily show",
    image: "/images/moments/ron-and-fez.png",
  },
];
