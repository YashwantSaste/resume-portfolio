

export const Navlinks=[
    {
        id:"1",
        name:"Home",
        link:"#home"
    },
    {
        id:"2",
        name:"About",
        link:"#about"
    },
    {
        id:"3",
        name:"Experience",
        link:"#experience"
    },
    {
        id:"4",
        name:"Project",
        link:"#project"
    },
    {
        id:"5",
        name:"Contact",
        link:"#contact"
    },
    {
        id:"6",
        name:"Skills",
        link:"#skills"
    },
]



export const Social_Media= [
    {
        name: "GitHub",
        src: "/social-media-icons/gitwhite.png",
        link:"https://github.com/YashwantSaste"
    },
    {
      name: "LinkedIn",
      src: "/social-media-icons/linkedin-icon.png",
      link:"https://www.linkedin.com/in/yashwant-saste-466b53239"
    },
    {
      name: "Gmail",
      src: "/social-media-icons/gmail-icon.png",
      link:"mailto:sasteyashwant01@gmail.com"
    },
    {
      name: "Discord",
      src: "/social-media-icons/discord.svg",
      link:"https://discord.com/users/1193901818607046772"
    },
  ];


export const aboutTechnologies=[
    {
        id:"1",
        skill:"Next.JS"
    },
    {
        id:"2",
        skill:"React.JS"
    },
    {
        id:"3",
        skill:"MongoDB"
    },
    {
        id:"4",
        skill:"Node.JS"
    },
    {
        id:"5",
        skill:"Express.JS"
    },
    {
        id:"6",
        skill:"TypeScript"
    },
    {
        id:"7",
        skill:"Javascript"
    },
    {
        id:"8",
        skill:"Tailwind CSS"
    },
    {
        id:"9",
        skill:"Docker"
    },
]

// export const workExperience=[
//     {
//         num:"1",
//         companyName:"Catalysers Finovate LLP",
//         role:"Member",
//         duration:"Jan 2023- Present",
//         work:[
//             {
//                 work:"1",
//                 description:"Write modern, performant, maintainable code for a diverse array of client and internal projects"
//             },
//             {
//                 work:"1",
//                 description:"Write modern, performant, maintainable code for a diverse array of client and internal projects"
//             },
//             {
//                 work:"1",
//                 description:"Write modern, performant, maintainable code for a diverse array of client and internal projects"
//             }
//         ]
//     },



    
//     // {
//     //     num:"2",
//     //     companyName:"HackIt Club",
//     //     role:"Workshop Coordinator",
//     //     duration:"Jan 2023- Present",
//     //     work:[
//     //         {
//     //             work:"1",
//     //             description:"Write modern, performant, maintainable code for a diverse array of client and internal projects"
//     //         },
//     //         {
//     //             work:"1",
//     //             description:"Write modern, performant, maintainable code for a diverse array of client and internal projects"
//     //         },
//     //         {
//     //             work:"1",
//     //             description:"Write modern, performant, maintainable code for a diverse array of client and internal projects"
//     //         }
//     //     ]
//     // },
// ]

export interface WorkExperience {
    num: number;
    title: string;
    companyName: string;
    duration: string;
    responsibilities: string[];
  }
  
  export const workExperience: WorkExperience[] = [
    {
        num: 1,
        title: "Frontend Developer Intern",
        companyName: "Tech Solutions Inc.",
        duration: "December 2024 - Ongoing",
        responsibilities: [
            "Built a scalable backend for the Ground Transportation System using Java, following OOP and SOLID principles to make the code easy to maintain and extend.",
            "Used Spring Data JPA to manage database operations efficiently and connected to a MySQL database hosted on Aiven Cloud.",
            "Maintained code quality by using SonarQube to identify and fix bugs, security issues, and areas for improvement.",
            "Documented all APIs using Swagger to ensure easy understanding and integration for other developers.",
            "Worked in IntelliJ IDEA for writing and testing code and used GitHub for version control and resolving merge conflicts.",
            "Managed tasks and tracked progress using Jira, ensuring the project was completed on time without delays.,"
        ],
      },  
    {
        num: 2,
        title: "Web Developer Intern",
        companyName: "Catalysers Finovate LLP",
        duration: "June 2024 - August 2024",
        responsibilities: [
            "Implemented protected routes in a Next.js application using Firebase authentication and authorization.",
            "Developed a multipage form for user management, enabling seamless creation, editing, and viewing of user details.",
            "Built dynamic tables to display and manage user data entered via forms, integrating with Firebase for real-time data retrieval and updates.",
            "Enhanced skills in Firebase and Next.js, gaining hands-on experience with frontend development, authentication, and real-time data handling.",
        ],
        },
];
  