export interface ProjectProps {
  title: string;
  date: string;
  compony: string;
  href: string;
  images: ProjectImageProps[];
  desc: string;
  tags: string[];
}

export interface ProjectImageProps {
  alt: string;
  url: string;
}

export const Projects = [
  {
    title: "Xin Flight",
    date: "2024 APR - NOW",
    compony: "Lion Travel",
    href: "",
    images: [
      { alt: "xin-flight-1", url: "/images/fuji.jpg" },
      { alt: "xin-flight-2", url: "/images/fuji.jpg" },
      { alt: "xin-flight-3", url: "/images/fuji.jpg" },
    ],
    desc: `Led the end-to-end frontend development of the Xin Flight project, from conception to completion. Assisted in implementing Server-Side Rendering ( SSR ) for the company's website, significantly enhancing user experience and SEO performance.`,
    tags: ["NextJS", "Typescript", "Tailwind CSS"],
  },
  {
    title: "Lion Travel Flight",
    date: "2022 DEC - NOW",
    compony: "Lion Travel",
    href: "https://flight.liontravel.com/search",
    images: [
      { alt: "lion-travel-flight-1", url: "/images/lion-travel-flight-1.png" },
      { alt: "lion-travel-flight-2", url: "/images/lion-travel-flight-2.png" },
      { alt: "lion-travel-flight-3", url: "/images/lion-travel-flight-3.png" },
    ],
    desc: `Led the frontend projects for Lion Travel's B2C products, focusing on the development and maintenance of the flight booking system, enhancing system performance and user experience.`,
    tags: ["React", "Typescript", "Redux"],
  },
  {
    title: "Xin Media",
    date: "2023 MAR - 2023 APR",
    compony: "Lion Travel",
    href: "https://www.xinmedia.com/",
    images: [
      { alt: "xin-media-1", url: "/images/xin-media-1.png" },
      { alt: "xin-media-2", url: "/images/xin-media-2.png" },
      { alt: "xin-media-3", url: "/images/xin-media-3.png" },
    ],
    desc: `Collaborated with the Xin Media team on feature development and page creation, contributing to a smooth user experience. Worked alongside designers and engineers to enhance product quality, helping to develop the website into a key project for the company.`,
    tags: ["NextJS", "Typescript", "Tailwind CSS"],
  },
];
