export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  skills: Array<{
    name: string;
    level: number;
    icon: string;
  }>;
}

export const personalInfo = {
  name: "Rajiv Kumar Yadav",
  profileimage: "/profileimage.png",
  title: "Backend + Machine Learning Engineer",
  tagline: "Building scalable backend systems and intelligent ML solutions",
  email: "rajiv0099c@gmail.com",
  phone: "+91 6284472263",
  location: "Nodia, India",
  bio: "Passionate Backend + Machine Learning Engineer with 2+ years of experience building scalable systems and deploying intelligent solutions. Skilled in Go, Python, and cloud-native systems. I design scalable architectures, automate real-time data pipelines, and deploy AI-powered solutions that drive performance at scale.",
  resumeUrl: "/RajivKumarYadav_Resume.pdf",
  social: {
    github: "https://github.com/rkcuwork",
    linkedin: "https://linkedin.com/in/rk5634",
    twitter: "https://twitter.com/rk5634",
    email: "rajiv0099c@gmail.com"
  }
};

export const skills: Skill[] = [
  {
    category: "Backend Development",
    skills: [
      { name: "Go", level: 90, icon: "Code2" },
      { name: "Python", level: 95, icon: "FileCode" },
      { name: "Flask / FastAPI", level: 85, icon: "Zap" },
      { name: "Gin", level: 80, icon: "Box" },
      { name: "REST APIs", level: 90, icon: "Server" },
      { name: "gRPC", level: 80, icon: "Network" }
    ]
  },
  {
    category: "Frontend & UI",
    skills: [
      { name: "React", level: 85, icon: "Layout" },
      { name: "TypeScript", level: 80, icon: "FileCode2" },
      { name: "JavaScript", level: 85, icon: "Braces" },
      { name: "Next JS", level: 75, icon: "CheckSquare" }, // Added filler
      { name: "HTML / CSS", level: 80, icon: "KeyRound" },
      { name: "Postman", level: 90, icon: "Send" },
    ]
  },
  {
    category: "Databases & Data Engineering",
    skills: [
      { name: "PostgreSQL", level: 85, icon: "Database" },
      { name: "MySQL", level: 80, icon: "DatabaseZap" },
      { name: "Snowflake", level: 85, icon: "Snowflake" },
      { name: "ClickHouse", level: 80, icon: "Table" },
      { name: "ETL Automation", level: 85, icon: "Shuffle" },
      { name: "Data Pipelines", level: 90, icon: "Pipeline" }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "PyTorch", level: 90, icon: "Brain" },
      { name: "TensorFlow", level: 85, icon: "Cpu" },
      { name: "Keras", level: 80, icon: "ActivitySquare" },
      { name: "scikit-learn", level: 95, icon: "BarChart3" },
      { name: "OpenCV", level: 85, icon: "Camera" },
      { name: "LangChain / LangGraph", level: 80, icon: "Bot" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85, icon: "Cloud" },
      { name: "Azure", level: 80, icon: "CloudCog" },
      { name: "Docker", level: 90, icon: "Container" },
      { name: "CI/CD", level: 85, icon: "Workflow" },
      { name: "GitHub Actions", level: 85, icon: "GitCommit" },
      { name: "Kubernetes", level: 70, icon: "Boxes" } // Added filler
    ]
  },
  {
    category: "Tools & Practices",
    skills: [
      { name: "Git", level: 90, icon: "GitBranch" },
      { name: "Linux", level: 85, icon: "Terminal" },
      { name: "Bash", level: 85, icon: "Code" },
      { name: "Grafana", level: 70, icon: "Activity" },
      { name: "Agile / Jira", level: 75, icon: "Users" },
      { name: "Distributed Systems", level: 70, icon: "Grid" } // Added filler
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Secure Authentication System",
    description: "Authentication system with OTP, JWT authorization, and OAuth integration using Go and Redis",
    longDescription: "Built a secure authentication system with JWT-based authorization, OTP via Twilio, and OAuth integration. Implemented modular architecture with Redis caching, rate limiting, and PostgreSQL using SQLC for type-safe operations. Improved API security, reduced unauthorized access, and cut runtime errors by 70%.",
    image: "./authentication.jpg",
    technologies: ["Go", "Redis", "PostgreSQL", "SQLC", "JWT", "Docker"],
    githubUrl: "https://github.com/rk5634/auth-system",
    featured: true
  },
  {
    id: "2",
    title: "Snapgram - Social Media Web App",
    description: "Full-stack social media platform with authentication, CRUD operations, and real-time features",
    longDescription: "Developed a scalable full-stack social media web app with React, TypeScript, and Appwrite. Implemented secure authentication, efficient CRUD operations, and real-time updates to boost engagement. Optimized frontend using React hooks, Context API, and Tailwind CSS, reducing page load times by 40%.",
    image: "./snapgram.png",
    technologies: ["React", "TypeScript", "Appwrite", "Tailwind CSS"],
    githubUrl: "https://github.com/rkcuwork/snapgram",
    liveUrl: "https://rkcuwork.github.io/Sindalah-features/",
    featured: true
  },
  {
    id: "3",
    title: "Smart Traffic Vision System",
    description: "YOLOv8-based real-time vehicle and license plate detection with Flask deployment",
    longDescription: "Designed a real-time vehicle and license plate detection system using YOLOv8. Deployed the model with Flask for automatic number plate recognition (ANPR). Achieved 98% precision despite hardware constraints. Leveraged Python for preprocessing, model training, and real-time deployment, enabling scalable computer vision applications.",
    image: "./vechicledetection.jpg",
    technologies: ["Python", "YOLOv8", "Flask", "OpenCV"],
    githubUrl: "https://github.com/rkcuwork/ANPR",
    featured: true
  },
  // {
  //   id: "4",
  //   title: "AI-Driven Query Generation System",
  //   description: "Knowledge Graph + RAG system generating SQL queries automatically with vector databases",
  //   longDescription: "Developed an AI-powered query generation platform using Python (FastAPI), Knowledge Graphs, Retrieval-Augmented Generation (RAG), and vector databases. Reduced manual SQL query writing by 80% and improved accuracy by 25%. Optimized system performance with batch execution, cutting query time from 30 minutes to 3 minutes.",
  //   image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   technologies: ["Python", "FastAPI", "Knowledge Graphs", "RAG", "Vector DBs", "Docker", "Kubernetes"],
  //   githubUrl: "https://github.com/rkcuwork/ai-query-system",
  //   featured: false
  // }
];


export const experience: Experience[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Axtria",
    location: "Noida, India",
    startDate: "2025-01",
    endDate: "Present",
    description: [
      "Designed and implemented an AI-driven query generation system in Python (FastAPI), Knowledge Graphs, RAG, and vector databases, cutting manual SQL query effort by 80% and improving accuracy by 25%.",
      "Optimized system performance with batch processing and parallel execution, reducing query generation time from 30 min to 3 min and boosting throughput by 300%.",
      "Architected concurrent, event-driven distributed systems in Go, processing 10M+ records 40% faster.",
      "Automated 5+ data pipelines using Go microservices, Kafka, and REST APIs, enabling real-time alerts in a cloud-native environment and reducing manual intervention by 60%.",
      "Collaborated with DevOps, frontend, and data engineering teams to enhance CI/CD pipelines using Docker and Kubernetes, delivering reliable and scalable releases."
  ],
    technologies: ["Python", "GO", "SQL", "GenAI", "Snowflake", "AWS", "Docker"]
  },
  {
    id: "2", 
    title: "Junior Backend Engineer",
    company: "Archmed Biotech",
    location: "Remote",
    startDate: "2023-10",
    endDate: "2024-12",
    description: [
        "Engineered a scalable inventory management system with Python (FastAPI) & PostgreSQL, improving tracking accuracy to 99.5% and reducing manual data entry by 40%; containerized with Docker and deployed on AWS EC2.",
        "Developed a back-end for an internal reporting dashboard in Python, processing 1,000+ daily data points to deliver real-time performance insights for stakeholders.",
        "Built a custom CRM system consolidating client data, boosting lead management efficiency by 20% and increasing conversion rates by 15% within three months.",
        "Automated batch-expiry notifications with a Python utility, ensuring timely alerts for sales teams and reducing missed sales opportunities."
    ],
    technologies: ["Python", "PostgreSQL", "Docker", "AWS"]
  },
];