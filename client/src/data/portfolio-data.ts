export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
  achievements?: string[];
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'internship' | 'research';
}

export const experiences: Experience[] = [
  {
    id: "efinix-2025",
    company: "Efinix",
    position: "Part-Time Software Engineer",
    duration: "Feb 2025 - April 2025",
    location: "New Territories, HK",
    type: "part-time",
    description: [
      "Developing a Flutter app using MVC architecture, Dart, and implementing UI, backend with a CI/CD pipeline."
    ],
    technologies: ["Flutter", "Dart", "MVC Architecture", "CI/CD"]
  },
  {
    id: "efinix-2024",
    company: "Efinix",
    position: "Software Engineer",
    duration: "June 2024 - Aug 2024",
    location: "New Territories, HK",
    type: "internship",
    description: [
      "Revamped the codebase for the in-house coding editor (Primus) through extensive testing of Node.js and RestAPI, along with research into the VS Code codebase, achieving a 50% boost in inter-process communication efficiency.",
      "Engineered a Python-based communication framework utilizing ZMQ, PyEE, and Threads, decreasing backend-frontend latency from 0.2 seconds to 0.05 seconds, which improved user experience across the coding editor."
    ],
    technologies: ["Node.js", "Python", "ZMQ", "PyEE", "VS Code", "RestAPI"]
  },
  {
    id: "alpha-ai",
    company: "Alpha AI Technology",
    position: "Software Engineer",
    duration: "June 2023 - Aug 2023",
    location: "Hong Kong Island, HK",
    type: "internship",
    description: [
      "Designed and built the backend of an ERP system using Node.js and PostgreSQL, creating a web application that reduced development time by over 75% for a SaaS platform template builder serving more than 20 clients.",
      "Spearheaded and deployed a Java-based object detection app for dash cameras, leveraging AWS compute units, EMR with Apache Hadoop, and S3 for real-time video uploads every 10 minutes, serving 30+ users."
    ],
    technologies: ["Node.js", "PostgreSQL", "Java", "AWS", "Apache Hadoop", "S3"]
  },
  {
    id: "urop",
    company: "HKUST UROP",
    position: "Software Engineer - Assistive Technology",
    duration: "Feb 2023 - May 2023",
    location: "Kowloon, HK",
    type: "research",
    description: [
      "Designed SEEKR software for 3D reconstruction, utilizing LiDAR technology, OpenCV, and C++ to assist 20+ HK Blind Union members, incorporating findings from research papers.",
      "Collaborated with Professor BRAUD, Tristan Camille and CEO of SEEKR, Turzo Bose on assistive technology for the visually impaired."
    ],
    technologies: ["LiDAR", "OpenCV", "C++", "3D Reconstruction"]
  }
];

export const projects: Project[] = [
  {
    id: "innonautics",
    title: "InnoNautics",
    description: "Revolutionary autonomous marine transportation system designed to upgrade water sports mobility. Features advanced pathfinding, manual override capabilities, and real-time GPS/IMU navigation integration.",
    technologies: ["C++", "MOOS-IvP", "Docker", "Raspberry Pi", "MAVLink", "ROS", "Linux"],
    githubUrl: "https://github.com/Williamarvin/innonautics_moos_dev",
    liveUrl: "https://innonautics.com",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    featured: true,
    achievements: [
      "HKSTP Ideation Program Approval",
      "Led 4-person development team",
      "10 prototypes deployed for manufacturing",
      "Reduced manual control reliance by 40% in transport automation"
    ],
    category: "Autonomous Systems"
  },
  {
    id: "fullstack-search-engine",
    title: "Full-Stack Search Engine",
    description: "A comprehensive full-stack search engine with Java backend and NGINX frontend. Features PageRank algorithm, Vector Space Model, and combined ranking system with Docker containerization.",
    technologies: ["Java", "Spring Boot", "JavaScript", "HTML/CSS", "Docker", "JDBM", "REST API"],
    githubUrl: "https://github.com/Williamarvin/Full-Stack-Search-Engine",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    category: "Full-Stack Development"
  },
  {
    id: "tacor",
    title: "TacOR",
    description: "Software for tactile elevation and integration with hardware for assistive technology applications.",
    technologies: ["Python", "Hardware Integration", "Tactile Technology"],
    githubUrl: "https://github.com/Williamarvin/TacOR",
    imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    category: "Assistive Technology"
  },
  {
    id: "genai-npc",
    title: "GENAI NPC Scheduler",
    description: "Automating NPC schedule to make gaming more fun and interactive using generative AI.",
    technologies: ["C++", "AI", "Game Development", "Scheduling Algorithms"],
    githubUrl: "https://github.com/Williamarvin/GENAI_NPC_scheduler",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    category: "AI & Gaming"
  },
  {
    id: "dungeon-oop",
    title: "Dungeon with OOP",
    description: "Single player game with dictionary data structure and operator overloading implementation.",
    technologies: ["C++", "Game Development", "OOP", "Data Structures"],
    githubUrl: "https://github.com/Williamarvin/Dungeon_with_OOP",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    category: "Game Development"
  },
  {
    id: "hkust-hall",
    title: "HKUST Hall System Enhancement",
    description: "Enhanced hall application system utilizing BST, linkedlist and hashing for improved efficiency.",
    technologies: ["C++", "Data Structures", "BST", "Hashing", "System Design"],
    githubUrl: "https://github.com/Williamarvin/HKUST_HALL_SYSTEM_ENHANCEMENT",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    category: "System Design"
  },
  {
    id: "instant-ngp",
    title: "Instant NGP",
    description: "Instant neural graphics primitives: lightning fast NeRF and more. Forked from NVlabs for research and development.",
    technologies: ["CUDA", "Neural Graphics", "NeRF", "3D Reconstruction"],
    githubUrl: "https://github.com/Williamarvin/instant-ngp-1",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    category: "Neural Graphics"
  }
];

export const achievements = [
  {
    title: "InnoX Competition",
    description: "1st place (Best Product) winning 60,000 HKD from Chan Dang Foundation",
    icon: "fas fa-trophy",
    color: "electric"
  },
  {
    title: "RoboMaster Championship",
    description: "Led hardware/software integration for self-balancing infantry robot, qualified for RoboMaster 2023 University Championship",
    icon: "fas fa-robot",
    color: "neon"
  },
  {
    title: "Web Development Bootcamp",
    description: "Built 16+ projects showcasing full-stack expertise in HTML, CSS, JavaScript, Node.js, React, PostgreSQL, and Web3",
    icon: "fas fa-certificate",
    color: "pink"
  }
];

export const technicalSkills = {
  proficient: ["Python", "C/C++", "Java", "HTML/CSS", "JavaScript"],
  familiar: ["SQL"],
  frameworks: ["Git", "Linux", "REST APIs", "SSH", "OpenCV", "ZMQ", "AWS", "Docker", "React", "Node.js", "PostgreSQL"]
};
