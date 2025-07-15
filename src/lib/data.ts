import React from "react";

// Navigation Links
export const Navlinks = [
  { id: "1", name: "Home", link: "#home" },
  { id: "2", name: "About", link: "#about" },
  { id: "3", name: "Experience", link: "#experience" },
  { id: "4", name: "Project", link: "#project" },
  { id: "5", name: "Contact", link: "#contact" },
  { id: "6", name: "Skills", link: "#skills" },
];

// Social Media Links
export const Social_Media = [
  {
    name: "GitHub",
    src: "/social-media-icons/gitwhite.png",
    link: "https://github.com/YashwantSaste",
  },
  {
    name: "LinkedIn",
    src: "/social-media-icons/linkedin-icon.png",
    link: "https://www.linkedin.com/in/yashwant-saste-466b53239",
  },
  {
    name: "Gmail",
    src: "/social-media-icons/gmail-icon.png",
    link: "mailto:sasteyashwant01@gmail.com",
  },
  {
    name: "Discord",
    src: "/social-media-icons/discord.svg",
    link: "https://discord.com/users/1193901818607046772",
  },
];

// About / Skills Section Technologies
export const aboutTechnologies = [
  { id: "1", skill: "Next.JS" },
  { id: "2", skill: "React.JS" },
  { id: "3", skill: "MongoDB" },
  { id: "4", skill: "Node.JS" },
  { id: "5", skill: "Express.JS" },
  { id: "6", skill: "TypeScript" },
  { id: "7", skill: "Javascript" },
  { id: "8", skill: "Tailwind CSS" },
  { id: "9", skill: "Docker" },
];

// Work Experience Interfaces
export interface Role {
  title: string;
  duration: string;
  responsibilities: string[];
}

export interface CompanyExperience {
  companyName: string;
  roles: Role[];
}

// Work Experience Data
export const workExperience: CompanyExperience[] = [
  {
    companyName: "Siemens DISW ((ext) Connecticus Technologies)",
    roles: [
      {
        title: "Graduate Trainee Engineer",
        duration: "July 2025 - Present",
        responsibilities: [
          "Integrated <hl>Polarion ALM</hl> under the <hl>Siemens OneX PLM</hl> Microsoft Teams application.",
          "Authenticated and authorized the Teams client with Polarion ALM using <hl>OAuth2</hl> and <hl>Microsoft Azure AD</hl>.",
          "Established <hl>bidirectional communication</hl> between Microsoft Teams and Polarion ALM to support real-time interaction.",
          "Implemented <hl>RESTful APIs</hl> with a response time of less than <hl>3 seconds</hl> under high load scenarios.",
          "Engineered <hl>Azure Event Hubs</hl> integration for efficient event-driven architecture and streaming.",
          "Contributed across the <hl>full tech stack</hl> using <hl>Java</hl>, <hl>JavaScript</hl>, and <hl>C#</hl> simultaneously throughout the project lifecycle.",
        ],
      },
    ],
  },
  {
    companyName: "Connecticus Technologies Pvt. Ltd",
    roles: [
      {
        title: "Software Engineer Intern",
        duration: "December 2024 - June 2025",
        responsibilities: [
          "Built a custom <hl>Microsoft Teams app</hl> featuring <hl>message extensions</hl>, an intelligent <hl>AI agent</hl>, and full <hl>JIRA integration</hl>.",
          "Implemented secure <hl>authentication & authorization</hl> using <hl>MSAL.js</hl>.",
          "Enabled <hl>two-way task and issue sync</hl> between the Teams app and the JIRA platform.",
          "Developed an AI-powered bot to recognize typed <hl>JIRA issue/type IDs</hl> in chat and respond with <hl>portal links</hl>.",
          "Enabled bot to <hl>update issue states or descriptions</hl> when users issued specific commands.",
          "Closely worked on <hl>frontend-backend integration</hl> and helped stabilize internal demo deployments.",
        ],
      },
    ],
  },
  {
    companyName: "Catalysers Finovate LLP",
    roles: [
      {
        title: "Web Developer Intern",
        duration: "June 2024 - August 2024",
        responsibilities: [
          "Implemented <hl>protected routes</hl> in a <hl>Next.js</hl> application using <hl>Firebase Auth</hl>.",
          "Built a <hl>multipage form</hl> for user creation, editing, and detail management.",
          "Created dynamic <hl>tables</hl> for displaying real-time user data via Firebase.",
          "Integrated <hl>Firebase Realtime Database</hl> for seamless user interaction.",
          "Strengthened understanding of <hl>frontend development</hl> and <hl>authentication flows</hl>.",
        ],
      },
    ],
  },
];
