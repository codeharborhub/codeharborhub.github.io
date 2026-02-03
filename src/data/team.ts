export interface Socials {
  github?: string;
  twitter?: string;
  linkedin?: string;
}

export interface Member {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  location: string;
  skills: string[];
  socials: Socials;
}

export const teamMembers: Member[] = [
  {
    slug: "ajay-dhangar",
    name: "Ajay Dhangar",
    role: "Founder & CEO",
    image: "https://github.com/ajay-dhangar.png",
    bio: "Visionary developer and open-source advocate. Ajay founded CodeHarborHub to democratize tech education and build a collaborative ecosystem for developers worldwide.",
    email: "ajaydhangar49@gmail.com",
    location: "Mandsaur, MP, India",
    skills: ["Full Stack Dev", "System Design", "Open Source", "Leadership"],
    socials: {
      twitter: "https://x.com/CodesWithAjay",
      github: "https://github.com/ajay-dhangar",
      linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
    },
  },
  {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500",
    bio: "Expert in building scalable MERN stack applications. Sarah leads the frontend architecture and ensures a seamless user experience across the platform.",
    email: "sarah@example.com",
    location: "London, UK",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    slug: "jhon-smith",
    name: "Jhon Smith",
    role: "Web Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500",
    bio: "Passionate about clean UI and accessible design. Jhon crafts the visual identity of CodeHarborHub, making complex documentation easy to navigate.",
    email: "jhon@example.com",
    location: "New York, USA",
    skills: ["UI/UX", "Figma", "Accessibility", "CSS3"],
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    slug: "jake-nackos",
    name: "Elena Owens",
    role: "Product Manager",
    image: "https://www.untitledui.com/images/avatars/elena-owens?",
    bio: "Skilled in agile methodologies and user-centric design. Elena ensures that CodeHarborHub meets the needs of its community while driving growth and engagement.",
    email: "elena@example.com",
    location: "Berlin, Germany",
    skills: ["Product Strategy", "Agile", "Community Building"],
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
];