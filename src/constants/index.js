import {
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  aSpeedInfotech,
  cbre,
  indsys,
  iwow,
  reactNative,
  flutter,
  springBoot,
  mssql,
  aws,
  introductionToTypescript,
  learningAWSLambda,
  learningGit,
  learningReduxToolkit,
  nodejsEssentialTraining,
  gitIntermediateTechnique,
  jsDeepLearning,
  jsEssentialTraining,
  jsForLogicalThinking,
  jsProfessionalCertificate,
  learnJS,
  problemSolvingCertificate,
  reactJSCodeChallenge,
  typescriptForJSDevelopers,
  brindhan,
  krishna,
  manikandan,
  kishore,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Facilities Manager",
    icon: web
  }
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flutter",
    icon: flutter
  },
  {
    name: "Spring Boot",
    icon: springBoot
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Mssql",
    icon: mssql
  },
  {
    name: "AWS",
    icon: aws
  }
];

const experiences = [
  {
    title: "Technical Facilities Manager",
    company_name: "CBRE",
    country: "Singapore",
    icon: cbre,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Oversee the efficient operation and maintenance of critical building systems, ensuring optimal performance and minimal downtime.",
      "Implement preventive and predictive maintenance strategies to extend asset life and reduce operational costs.",
      "Drive energy efficiency programs and sustainability projects to optimize resource utilization and support ESG goals.",
      "Manage vendor contracts, negotiate service agreements, and coordinate with internal stakeholders for seamless facility operations.",
      "Ensure adherence to safety regulations, industry standards, and risk management protocols to maintain a safe working environment."
    ],
  },
  {
    title: "Data Center MEP Manager",
    company_name: "A-Speed Infotech Pte Ltd",
    country: "Singapore",
    icon: aSpeedInfotech,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Aug 2023",
    points: [
      "Managed the operation and maintenance of Mechanical, Electrical, and Plumbing (MEP) systems to ensure maximum uptime and efficiency.",
      "Oversaw UPS, generators, cooling systems, fire suppression, and BMS to maintain 24/7 reliability for the data center.",
      "Implemented energy-efficient solutions and sustainability practices to optimize power usage and reduce operational costs.",
      "Managed third-party service providers, ensuring compliance with SLAs, maintenance schedules, and safety standards.",
      "Ensured adherence to ISO, TIA-942, and local regulatory standards, minimizing risks and enhancing data center resilience."
    ],
  },
  {
    title: "Assistant Engineer",
    company_name: "iWOW Connections Pte Ltd",
    country: "Singapore",
    icon: iwow,
    iconBg: "#383E56",
    date: "Sep 2016 - Aug 2020",
    points: [
      "Provided on-site and remote technical support, troubleshooting network and system issues to ensure smooth operation.",
      "Assisted in the installation, configuration, and maintenance of network hardware, servers, and telecommunications systems.",
      "Collaborated with senior engineers to plan and execute technical projects, ensuring timely delivery and efficient resource management.",
      "Conducted regular system performance monitoring and optimization to improve network reliability and reduce downtime.",
      "Worked closely with clients and vendors to ensure proper implementation of solutions, service delivery, and troubleshooting support."
    ],
  },
  {
    title: "Technical cum Customer Support Engineer",
    company_name: "INDSYS Infotech",
    country: "India",
    icon: indsys,
    iconBg: "#383E56",
    date: "Jun 2013 - Aug 2016",
    points: [
      "Provided on-site and remote technical support, troubleshooting network and system issues to ensure smooth operation.",
      "Assisted in the installation, configuration, and maintenance of network hardware, servers, and telecommunications systems.",
      "Collaborated with senior engineers to plan and execute technical projects, ensuring timely delivery and efficient resource management.",
      "Conducted regular system performance monitoring and optimization to improve network reliability and reduce downtime.",
      "Worked closely with clients and vendors to ensure proper implementation of solutions, service delivery, and troubleshooting support."
    ],
  },
];

const mentors = [
  {
    description:
      "Brindhan Settu is the Founder & Managing Director of Inforge Technologies, with vast experience in project management and development. From him, I learned how to handle complex logics efficiently and, beyond work, gained valuable behavioral skills that have shaped my professional growth.",
    name: "Brindhan",
    designation: "MD/CEO",
    company: "Inforge Technologies pvt ltd - coimbatore/india",
    image: brindhan,
  },
  {
    description:
      "Krishna Thivakar is the Technical Team Lead at Inforge Technologies, with extensive experience in full-stack development and debugging. From him, I learned advanced coding skills and problem-solving techniques, while also gaining valuable insights into efficient software development practices that have significantly shaped my technical growth.",
    name: "Krishna Thivakar",
    designation: "TL",
    company: "Inforge Technologies pvt ltd - coimbatore/india",
    image: krishna,
  },
  {
    description:
      "Kishore Kumar is the Technical Team Lead at Inforge Technologies, he mentored me in data structures and algorithms, improving my programming and mobile app dev skills. His guidance on applying efficient algorithms in real-world projects has been key to my growth in backend and mobile app development.",
    name: "Kishore Kumar",
    designation: "TL",
    company: "Inforge Technologies pvt ltd - coimbatore/india",
    image: kishore,
  },
  {
    description:
      "Manikandan Balasubramanian is the Senior Manager at Seatrium and an ex-Software Engineer, with vast experience in leadership, IT environments, and database queries. From him, I learned valuable leadership skills and expertise in DB queries, and beyond work, he has helped me with personal growth, shaping my overall development.",
    name: "Manikandan",
    designation: "Senior Manager",
    company: "Keppel & Seatrium - Singapore",
    image: manikandan,
  },
];

const certifications = [
  {
    name: "Introduction To Typescript",
    description:
      "The Introduction to TypeScript course from Great Learning covers key concepts like strong typing, classes, interfaces, and OOP, helping developers write scalable, maintainable code for modern web apps.",
    specialization: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: introductionToTypescript,
    certificateLink: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-typescript?utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin_certificate_share&utm_source_page=public_certificate_view",
  },
  {
    name: "AWS Lambda",
    description: "The Learning Amazon Web Services Lambda course covers AWS Lambda's core concepts, event-driven architecture, deployment, and integration with AWS services, helping build scalable, serverless applications efficiently.",
    specialization: [
      {
        name: "aws lambda",
        color: "blue-text-gradient",
      },
    ],
    image: learningAWSLambda,
    certificateLink: "https://www.linkedin.com/learning/certificates/0a6ae7aa42ec45e93c335fa1e798e02744066bf327a8995abb876e5d2f197609?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bc5SxWybrTCqXsoqpleqFAg%3D%3D",
  },
  {
    name: "Git and Github",
    description: "The Learning Git and GitHub course covers version control basics, branching, merging, pull requests, and collaboration using Git and GitHub, enabling efficient code management and teamwork in software development.",
    specialization: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
    ],
    image: learningGit,
    certificateLink: "https://www.linkedin.com/learning/certificates/f1ba474f9035cdc068efc2a8d3db98fd0ad951a7f5da7caef93802f727b58365?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bc5SxWybrTCqXsoqpleqFAg%3D%3D",
  },
  {
    name: "Learning Redux Toolkit",
    description: "The Learning Redux Toolkit course covers state management, reducers, slices, async operations, and best practices, helping developers efficiently manage application state in React using Redux Toolkit.",
    specialization: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux.js",
        color: "green-text-gradient",
      },
    ],
    image: learningReduxToolkit,
    certificateLink: "https://www.linkedin.com/learning/certificates/52aae58554d124ae2d06cb030b7ea41b11e5831b5f3fa36dab9972ea72b79f63?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bc5SxWybrTCqXsoqpleqFAg%3D%3D",
  },
  {
    name: "Node.js Essential Training",
    description: "The Node.js Essential Training course covers core Node.js concepts, including asynchronous programming, modules, REST APIs, and database integration, helping developers build scalable and efficient server-side applications.",
    specialization: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: nodejsEssentialTraining,
    certificateLink: "https://www.linkedin.com/learning/certificates/59c524b6355ec7e787291b7095581b8ed8c688accb556c161c002cc770021dda?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bc5SxWybrTCqXsoqpleqFAg%3D%3D",
  },

  {
    name: "TypeScript for Developers",
    description: "TypeScript for JavaScript Developers is a course designed to help JavaScript programmers learn TypeScript, covering types, interfaces, generics, and advanced features to build scalable, maintainable code.",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: typescriptForJSDevelopers,
    certificateLink: "https://www.linkedin.com/learning/certificates/e460c0c3d314198f94e5b50f6a7e3de791258064599c51c4e3c28913a2880821?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "Hacker Rank Problem Solving",
    description: "HackerRank Problem Solving enhances algorithmic thinking and coding skills through challenges on data structures sorting graph theory and more helping developers improve efficiency and logic.",
    specialization: [
      {
        name: "data structure",
        color: "blue-text-gradient",
      },
      {
        name: "algorithm",
        color: "green-text-gradient",
      },
    ],
    image: problemSolvingCertificate,
    certificateLink: "https://www.hackerrank.com/certificates/156401efb2da",
  },

  {
    name: "React.js Code Challenges",
    description: "React.js Code Challenges helps developers improve their React skills through hands-on coding exercises covering components state props hooks and advanced patterns to build efficient and scalable applications.",
    specialization: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
    ],
    image: reactJSCodeChallenge,
    certificateLink: "https://www.linkedin.com/learning/certificates/ed6566487f988f70e8d9cd7bdf82c565edf3013e8c0670a390e3f3f1b6224036?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "Git Intermediate Techniques",
    description: "Git Intermediate Techniques covers branching merging rebasing stash interactive rebase and advanced commit management helping developers enhance their version control skills for efficient collaboration",
    specialization: [
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "version control",
        color: "green-text-gradient",
      },
    ],
    image: gitIntermediateTechnique,
    certificateLink: "https://www.linkedin.com/learning/certificates/84e6ec7b8b39fcb84bbcb71fb42f260221e3dd18ea1861c29cf0326e65d449f4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "JavaScript Essential Training",
    description: "JavaScript Essential Training covers core concepts like variables functions objects DOM manipulation and asynchronous programming helping developers build dynamic and interactive web applications efficiently",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: jsEssentialTraining,
    certificateLink: "https://www.linkedin.com/learning/certificates/7ed5c5ae26231c4bfa02e5dbb42c3cffe3c0ab76a2b15b8069288cd42bca5a34?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "JavaScript Certificate by Mozilla",
    description: "JavaScript Foundations Professional Certificate by Mozilla covers fundamental JavaScript concepts including variables functions objects and event handling helping developers build interactive and dynamic web applications",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "web development",
        color: "green-text-gradient",
      },
    ],
    image: jsProfessionalCertificate,
    certificateLink: "https://www.linkedin.com/learning/certificates/129bfced981d20a863c24db6356ca597e7b965ea234ae81957c31a7c796ac28d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },

  {
    name: "JavaScript: Under the Hood",
    description: "JavaScript: Under the Hood explores the inner workings of JavaScript including how the engine interprets code memory management event loops and the call stack empowering developers to write more efficient and optimized code.",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: jsDeepLearning,
    certificateLink: "https://www.linkedin.com/learning/certificates/1a254590562fdd8da474de477723f5a0ca5d45a0e283e0f3aa6461be8a35ea95?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },
  {
    name: "Javascript for Logical Thinking",
    description: "JavaScript for Logical Thinking and Problem Solving focuses on using JavaScript to develop strong problem-solving skills by covering algorithms, data structures, and logic-based challenges to enhance coding efficiency and clarity.",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "problem solving",
        color: "green-text-gradient",
      },
    ],
    image: jsForLogicalThinking,
    certificateLink: "https://www.udemy.com/certificate/UC-afa7d773-7f7b-4b45-a3e5-ee95c3e1497a/",
  },
  {
    name: "Learning the JavaScript Language",
    description: "Learning the JavaScript Language covers the fundamentals of JavaScript, including syntax, variables, data types, functions, and control structures, helping developers build a strong foundation for web development.",
    specialization: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: learnJS,
    certificateLink: "https://www.linkedin.com/learning/certificates/2a56ed354117b8632e6f60da58051ac62d3a9f79bf534ffb072301bd5e9b7649?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BNwhPBRMuRvq7m4rRj2wMXA%3D%3D",
  },
];

export { services, technologies, experiences, mentors, certifications };
