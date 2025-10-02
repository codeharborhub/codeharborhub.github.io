export interface Event {
  id: string;
  name: string;
  logo: string;
  dates: string;
  description: string;
  link: string;
  tags: string[];
}

export const events: Event[] = [
  {
    id: "hacktoberfest",
    name: "Hacktoberfest",
    logo: "/images/hacktoberfest.png",
    dates: "October 1–31",
    description:
      "Celebrate open-source with Hacktoberfest! Contribute to projects, earn swag, and support the community.",
    link: "https://hacktoberfest.com/",
    tags: ["Global", "Beginner Friendly"],
  },
  {
    id: "gsoc",
    name: "Google Summer of Code",
    logo: "/images/gsoc.png",
    dates: "May–August",
    description:
      "A global program focused on bringing student developers into open source software development.",
    link: "https://summerofcode.withgoogle.com/",
    tags: ["Student Program", "Global"],
  },
  {
    id: "gssoc",
    name: "GirlScript Summer of Code",
    logo: "/images/gssoc.png",
    dates: "March–May",
    description:
      "A 3-month-long open-source program by GirlScript Foundation helping beginners get into open-source development.",
    link: "https://gssoc.girlscript.tech/",
    tags: ["Beginner Friendly", "Community"],
  },
];
