// ============================================================
// Portfolio Data — Apiwat Nonut
// ============================================================

export const personalInfo = {
  name: "Apiwat",
  fullName: "Apiwat Nonut",
  role: "Software Developer Engineer",
  email: "apiwat.apply@gmail.com",
  phone: "092-5853800",
  location: "Suratthani, Thailand",
  github: "https://github.com/apiwatapply-svg",
  linkedin: "https://linkedin.com/in/apiwatnonut",
  facebook: "https://www.facebook.com/apiwat.nonut",
  line: "0925853800",
  lineId: "oatza38",
  bio: "Passionate about bridging the gap between Software Engineering and Industrial Automation. I design and develop intelligent solutions that enhance decision-making and resolve complex production challenges.",
  availability: "Available for new opportunities",
  yearsOfExperience: "5+",
  avatar: "/Apiwat.png",
};

export type SkillCategory = {
  title: string;
  iconKey: "frontend" | "backend" | "ai" | "devops";
  theme: "blue" | "emerald" | "purple" | "orange";
  skills: { name: string; iconKey?: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    iconKey: "frontend",
    theme: "blue",
    skills: [
      { name: "React.js", iconKey: "react" },
      { name: "Next.js", iconKey: "nextjs" },
      { name: "HTML/CSS", iconKey: "html" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "Bootstrap", iconKey: "bootstrap" },
    ],
  },
  {
    title: "Backend & DB",
    iconKey: "backend",
    theme: "emerald",
    skills: [
      { name: "Python", iconKey: "python" },
      { name: "Node.js", iconKey: "nodejs" },
      { name: "FastAPI", iconKey: "fastapi" },
      { name: "PostgreSQL", iconKey: "postgres" },
      { name: "Supabase", iconKey: "supabase" },
      { name: "Vector DB", iconKey: "vectordb" },
    ],
  },
  {
    title: "AI & Automation",
    iconKey: "ai",
    theme: "purple",
    skills: [
      { name: "LLM Integration", iconKey: "llm" },
      { name: "Prompt Eng.", iconKey: "prompt" },
      { name: "Machine Vision (YOLO)", iconKey: "vision" },
      { name: "ROS", iconKey: "ros" },
      { name: "Anomaly Detection", iconKey: "anomaly" },
    ],
  },
  {
    title: "DevOps & Systems",
    iconKey: "devops",
    theme: "orange",
    skills: [
      { name: "Git", iconKey: "git" },
      { name: "Docker", iconKey: "docker" },
      { name: "Linux Server", iconKey: "linux" },
      { name: "REST API", iconKey: "api" },
      { name: "Cloud (Vercel)", iconKey: "vercel" },
    ],
  },
];

export const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Cross-functional Collaboration",
  "Adaptability & Fast Learning",
  "Leadership & Mentoring",
];

export const languageSkills = [
  { name: "Thai", level: "Native" },
  { name: "English", level: "Conversational" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  theme: "blue" | "emerald" | "purple" | "orange";
  isFeatured: boolean;
  year: string;
  duration: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Smart Factory MMS Dashboard",
    description:
      "Real-time Machine Monitoring Systems (MMS) and dashboards for data-driven decision-making in manufacturing operations.",
    tags: ["React", "Node.js", "Firebase", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    theme: "blue",
    isFeatured: true,
    year: "2024",
    duration: "Jan 2024 - Present",
  },
  {
    title: "Predictive Maintenance Pipeline",
    description:
      "Developed machine learning models to predict equipment failures before they occur, integrated alongside the MMS dashboard.",
    tags: ["Python", "Scikit-Learn", "FastAPI"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    theme: "orange",
    isFeatured: true,
    year: "2024",
    duration: "Mar 2024 - Present",
  },
  {
    title: "AI Defect Inspection System",
    description:
      "Applied AI-based Machine Vision utilizing HIKROBOT technologies to enhance inspection accuracy and decrease defect rate.",
    tags: ["Python", "YOLO", "Machine Vision"],
    image:
      "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80",
    theme: "purple",
    isFeatured: true,
    year: "2023",
    duration: "Aug 2023 - Nov 2023",
  },
  {
    title: "Automated Warehouse API",
    description:
      "Built robust RESTful APIs to handle inventory tracking and communicate with automated guided vehicles (AGVs) in real-time.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8ed7ce3040?auto=format&fit=crop&w=800&q=80",
    theme: "blue",
    isFeatured: false,
    year: "2023",
    duration: "Jun 2023 - Dec 2023",
  },
  {
    title: "ROS-based Automation Systems",
    description:
      "Designed and developed ROS-based automation systems (AGV, Robot Arms) aligned with Industry 4.0 standards.",
    tags: ["ROS", "Python", "Linux", "IoT"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    theme: "emerald",
    isFeatured: true,
    year: "2023",
    duration: "Feb 2023 - Jul 2023",
  },
  {
    title: "Digital Production Support Apps",
    description:
      "Developed comprehensive applications (maintenance, job request, master job control) to optimize daily operations.",
    tags: ["Next.js", "Tailwind", "REST API"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    theme: "orange",
    isFeatured: false,
    year: "2022",
    duration: "May 2022 - Oct 2022",
  },
  {
    title: "Smart Agricultural Machinery (IoT)",
    description:
      "Applied IoT technologies and sensor integration to engineer and develop smart agricultural machinery concepts for Kubota.",
    tags: ["IoT", "Hardware Integration", "Sensors"],
    image:
      "https://images.unsplash.com/photo-1628186175949-366f030bc39e?auto=format&fit=crop&w=800&q=80",
    theme: "emerald",
    isFeatured: false,
    year: "2021",
    duration: "Sep 2021 - Apr 2022",
  },
  {
    title: "Ping Pong Robot (Senior Project)",
    description:
      "Developed a Ping Pong playing robot utilizing LabVIEW and NI myRIO for precise mechanical control and computer vision.",
    tags: ["LabVIEW", "NI myRIO", "Robotics"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    theme: "purple",
    isFeatured: false,
    year: "2019",
    duration: "Jan 2019 - May 2019",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  color: "blue" | "emerald" | "orange";
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Developer Engineer",
    company: "NMB-Minebea Thai Ltd.",
    period: "Aug 2023 - Present",
    color: "blue",
    bullets: [
      "Architected and developed ROS-based automation systems (AGVs, Robot Arms) in alignment with Industry 4.0.",
      "Implemented AI-based Machine Vision solutions utilizing HIKROBOT technologies for smart inspection.",
      "Engineered end-to-end smart factory solutions, including real-time Machine Monitoring Systems (MMS).",
    ],
  },
  {
    role: "IoT Engineer",
    company: "Kubota Research & Development Asia",
    period: "Sep 2021 - Aug 2023",
    color: "emerald",
    bullets: [
      "Applied IoT technologies to develop smart agricultural machinery.",
      "Conducted market feasibility studies and designed new agricultural product concepts.",
      "Performed performance testing and validation to ensure product quality.",
    ],
  },
  {
    role: "Facilitator",
    company: "Phoenix Pulp and Paper Plc Ltd.",
    period: "May 2019 - Dec 2019",
    color: "orange",
    bullets: [
      "Mentored and facilitated soft & hard skills training for over 15 employees, enhancing operational efficiency.",
      "Supported factory problem-solving, empowering employees to resolve issues independently.",
    ],
  },
];

export type Education = {
  degree: string;
  university: string;
  period: string;
  details: string;
};

export const education: Education[] = [
  {
    degree: "Master of Engineering in Mechanical Engineering",
    university: "Khon Kaen University",
    period: "2019 - 2021",
    details:
      "Thesis: System Identification and Inner-Loop Stability Control for Fixed-Wing UAVs using Meta-Heuristics.",
  },
  {
    degree: "Bachelor of Engineering in Electrical Engineering",
    university: "Khon Kaen University",
    period: "2015 - 2019",
    details:
      "Senior Project: Ping Pong Robot using LabVIEW and NI myRIO. (GPA: 3.35, Second Class Honors)",
  },
];
