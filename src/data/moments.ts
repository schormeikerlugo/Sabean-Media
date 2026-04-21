export interface Moment {
  id: string;
  name: string;
  caption: string;
  image: string;
  span: "tall" | "wide";
}

// Curated to alternate tall/wide for an editorial rhythm (4-col grid).
export const moments: Moment[] = [
  { id: "chris-rock-townhall",     name: "Chris Rock",                caption: "SiriusXM Town Hall",             image: "/images/moments/chris-rock-townhall-1.jpg",    span: "tall" },
  { id: "sting",                   name: "Sting",                     caption: "Backstage, with Gil Edwards",    image: "/images/moments/sting-gil.jpg",                span: "tall" },
  { id: "opie-anthony",            name: "Opie & Anthony",            caption: "Radio Legends · SiriusXM",       image: "/images/moments/opie-and-anthony.jpg",         span: "wide" },
  { id: "dice",                    name: "Andrew Dice Clay",          caption: "w/ Gil Edwards · SiriusXM",      image: "/images/moments/dice.png",                     span: "tall" },
  { id: "dan-aykroyd",             name: "Dan Aykroyd",               caption: "SiriusXM Studios",               image: "/images/moments/dan-akroyd.png",               span: "tall" },
  { id: "chris-rock-cedric",       name: "Chris Rock & Cedric",       caption: "Town Hall · SiriusXM",           image: "/images/moments/chris-rock-cedric-townhall.jpg", span: "wide" },
  { id: "joan-rivers",             name: "Joan Rivers",               caption: "Unmasked · SiriusXM",            image: "/images/moments/joan-rivers-unmasked.jpg",     span: "tall" },
  { id: "kate-hudson",             name: "Kate Hudson",               caption: "SiriusXM Live",                  image: "/images/moments/kate-hudson.png",              span: "tall" },
  { id: "chris-cornell",           name: "Chris Cornell",             caption: "w/ Gil Edwards · Soundgarden",   image: "/images/moments/gil-chris-cornell.jpg",        span: "wide" },
  { id: "foo-fighters",            name: "Foo Fighters",              caption: "MTV2 · WYSP",                    image: "/images/moments/foo-fighters.png",             span: "tall" },
  { id: "jerry-lewis",             name: "Jerry Lewis",               caption: "Town Hall · SiriusXM",           image: "/images/moments/jerry-lewis-townhall.png",     span: "wide" },
  { id: "zach-braff-kate",         name: "Zach Braff & Kate Hudson",  caption: "Unmasked · SiriusXM",            image: "/images/moments/zach-braff-kate-hudson.jpg",   span: "tall" },
  { id: "ron-and-fez",             name: "Ron & Fez",                 caption: "Radio Legends",                  image: "/images/moments/ron-and-fez.png",              span: "wide" },
  { id: "montreal",                name: "Montreal Comedy Festival",  caption: "Industry Panel",                 image: "/images/moments/montreal-comedy-festival.png", span: "wide" },
  { id: "al-gil-miami",            name: "Al & Gil",                  caption: "Miami",                          image: "/images/moments/al-gil-miami.jpg",             span: "tall" },
  { id: "team-partners",           name: "Al · Tim · Gil",            caption: "The Partners",                   image: "/images/moments/al-tim-gil.jpg",               span: "wide" },
];
