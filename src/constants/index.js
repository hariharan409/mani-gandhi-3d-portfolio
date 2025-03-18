import {
  facilities,
  web,
  aSpeedInfotech,
  cbre,
  indsys,
  iwow,
  //certifications
  cnetTraining,

  noImageAvailable


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
    name: "MEP",
    icon: facilities,
  },
  {
    name: "Vendor mgnt",
    icon: facilities,
  },
  {
    name: "Data Center ops",
    icon: facilities,
  },
  {
    name: "Facility mgnt (FM)",
    icon: facilities,
  },
  {
    name: "Critical Facilities",
    icon: facilities
  },
  {
    name: "Incident mgmt",
    icon: facilities
  },
  {
    name: "Maintenance & Repair",
    icon: facilities,
  },
  {
    name: "Building mgnt Sys",
    icon: facilities,
  },
  {
    name: "Workplace Safety",
    icon: facilities,
  },
  {
    name: "BACnet",
    icon: facilities,
  },
  {
    name: "Modbus",
    icon: facilities,
  },
  {
    name: "AHU",
    icon: facilities
  },
  {
    name: "IP CCTV",
    icon: facilities
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

const certifications = [
  {
    name: "CDCTP",
    description:
      "The Certified Data Centre Technician Professional (CDCTP) certification validates expertise in maintaining, managing, and troubleshooting data center infrastructure. It covers power, cooling, security, and compliance, ensuring operational efficiency and reliability.",
    specialization: [
      {
        name: "CDCTP",
        color: "blue-text-gradient",
      },
    ],
    image: cnetTraining,
    certificateLink: "https://media.licdn.com/dms/image/v2/D562DAQHCPBzJH5auKQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1710240316701?e=1742788800&v=beta&t=rOm05MCsEkxCxH-XCWv95Fr8eNXXm171PntCf2376sM",
  },
  {
    name: "Water Efficiency Manager",
    description:
      "The Water Efficiency Manager certification validates expertise in optimizing water usage, implementing conservation strategies, and ensuring regulatory compliance. It covers sustainable water management, auditing, and efficiency improvements for industries, buildings, and municipalities.",
    specialization: [
      {
        name: "water efficiency",
        color: "blue-text-gradient",
      },
    ],
    image: noImageAvailable,
    certificateLink: "",
  },
  {
    name: "WSQ Manage Work At Height",
    description:
      "The WSQ Manage Work at Height certification trains individuals in risk assessment, safety implementation, and compliance for height-related work. It covers fall prevention, emergency rescue planning, and workplace safety regulations and efficiency improvements for industries, buildings.",
    specialization: [
      {
        name: "wsq management",
        color: "blue-text-gradient",
      },
    ],
    image: noImageAvailable,
    certificateLink: "",
  },
  {
    name: "WSQ Develop a Risk Management Implementation Plan (bizSAFE 2)",
    description:
      "The WSQ Develop a Risk Management Implementation Plan (bizSAFE 2) certification equips professionals with the skills to assess, manage, and mitigate workplace risks, ensuring compliance with safety regulations and promoting a safe working environment.",
    specialization: [
      {
        name: "risk management",
        color: "blue-text-gradient",
      },
    ],
    image: noImageAvailable,
    certificateLink: "",
  },
  {
    name: "A Comparison of AC and DC Power Distribution in the Data Center",
    description:
      "The certification focuses on comparing AC (Alternating Current) and DC (Direct Current) power distribution systems in data centers, examining efficiency, cost, scalability, reliability, and energy consumption to optimize power delivery and infrastructure.",
    specialization: [
      {
        name: "power distribution",
        color: "blue-text-gradient",
      },
    ],
    image: noImageAvailable,
    certificateLink: "",
  }
];

export { services, technologies, experiences, certifications };
