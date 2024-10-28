export interface ProjectType {
  imageUrl: string;
  projectNum: string;
  projectName: string;
  description: string;
  tecnologies:string[];
  color: string,
}

export const projectDetail: ProjectType[] = [
  {
    imageUrl: "/project-01.webp",
    projectNum: "Project-01",
    projectName: "Forest Adventure Hub",
    description: "I developed a forest-themed website featuring an engaging card section with wildlife images. The site showcases responsive design and interactive elements using Tailwind CSS for a seamless user experience.",
    tecnologies:["#Html","#Css","#Typescript","#Next.JS","#Tailwind"],
    color: "green-500", // Tailwind class name
  },
  {
    imageUrl: "/project-02.webp",
    projectNum: "Project-02",
    projectName: "Dynamic CV Builder",
    description: "I created a dynamic CV website where users can edit, download as PDF, and generate a shareable link for their CV. The project is built with TypeScript, providing real-time updates and an intuitive user experience.",
    tecnologies:["#Html","#Css","#Typescript","#Next.JS","#Tailwind"],
    color: "blue-800", // Another valid Tailwind class
  },
  {
    imageUrl: "/project-03.webp",
    projectNum: "Project-03",
    projectName: "Figma to Web Conversion",
    description:
      "I developed a responsive website based on a Figma design, focusing on pixel-perfect implementation and mobile-friendly layouts. The project highlights my ability to translate design into functional, visually appealing websites.",
    tecnologies:["#Html","#Css","#Typescript","#Next.JS","#Tailwind"],
    color: "yellow-500",
  },
  {
    imageUrl: "/project-04.webp",
    projectNum: "Project-04",
    projectName: "Grid Card Layout",
    description:
      "I designed a responsive card layout using CSS Grid, ensuring all cards are aligned on a single row and adapt seamlessly to different screen sizes. This project demonstrates my skills in modern layout techniques and responsive design.",
    tecnologies:["#Html","#Css","#Typescript","#Next.JS","#Tailwind"],
    color: "purple-500",
  },
  {
    imageUrl: "/project-05.webp",
    projectNum: "Project-05",
    projectName: "Static CV Portfolio",
    description:
      "I created a static CV showcasing my skills, education, and experience in a clean and organized layout. The design emphasizes clarity and professionalism, making it easy for potential employers to navigate and understand my qualifications.",
    tecnologies:["#Html","#Css","#Typescript","#Next.JS","#Tailwind"],
    color: "green-500",
  },
];

