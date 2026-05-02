// ============================================================
// Portfolio Data — Apiwat Nonut
// ============================================================

export const personalInfo = {
  name: "Apiwat",
  fullName: "Apiwat Nonut",
  role: "Developer Engineer",
  email: "apiwat.apply@gmail.com",
  phone: "092-5853800",
  location: "Suratthani, Thailand",
  github: "https://github.com/apiwatapply-svg",
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

export type FlowStep = {
  id: string;
  label: string;
  detail?: string;
  icon?: string;
  type: "action" | "decision" | "success" | "error" | "warning" | "process";
  branches?: {
    condition: string;
    steps: FlowStep[];
    type: "success" | "error" | "warning";
  }[];
};

export type ProjectDetails = {
  objective: string;
  methodology?: string[];
  workflow?: string[];
  results?: string[];
  hardware?: { name: string; description: string; icon: string }[];
  features?: string[];
  publication?: string;
  challenges?: { issue: string; solution: string }[];
  technicalHighlights?: { title: string; description: string }[];
  gallery?: string[];
  videoUrl?: string;
  visualEvidence?: {
    url: string;
    caption: string;
    type: 'image' | 'graph';
  }[];
  userFlow?: FlowStep[];
  programFlow?: FlowStep[];
  metrics?: { label: string; value: string; unit?: string; icon?: string }[];
  // --- Presentation Slide Fields (7 sections) ---
  context?: string;
  origin?: string;
  painPoint?: string;
  yourRole?: string;
  keySkillsUsed?: string[];
  lessonsLearned?: string[];
  nextSteps?: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  theme: "blue" | "emerald" | "purple" | "orange";
  isFeatured: boolean;
  year: string;
  duration: string;
  link?: string;
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    slug: "online-document-storage",
    title: "Online Document Management System",
    description: "Developed a secure, cloud-based document storage system enabling paperless workflows, version control, and role-based access.",
    tags: ["Next.js", "Supabase", "AWS S3", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: false, year: "2026", duration: "Jan 2026 - Mar 2026",
    details: {
      objective: "Provide a centralized and secure online storage solution for corporate documents.",
      features: ["Role-based access control (RBAC)", "File versioning and history tracking", "Full-text search using OCR"],
    },
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Built a full-stack online storefront with a seamless checkout experience, inventory management, and payment gateway integration.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: false, year: "2026", duration: "Feb 2026 - Apr 2026",
    details: {
      objective: "Develop a modern e-commerce solution for retail businesses to expand their digital footprint.",
      features: ["Shopping cart and secure Stripe checkout", "Admin dashboard for inventory tracking", "Automated email receipts and shipping updates"],
    },
  },
  {
    slug: "coffee-shop-pos",
    title: "Coffee Shop POS System",
    description: "Engineered a modern Point-of-Sale (POS) system tailored for coffee shops, featuring quick order entry, loyalty programs, and sales analytics.",
    tags: ["Vue.js", "Express", "MongoDB", "WebSocket"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: false, year: "2026", duration: "Apr 2026 - Jun 2026",
    details: {
      objective: "Streamline the ordering and payment process for fast-paced coffee shop environments.",
      features: ["Touch-friendly quick order interface", "Integration with receipt printers and cash drawers", "Real-time daily sales analytics dashboard"],
    },
  },
  {
    slug: "field-booking-system",
    title: "Online Field Booking System",
    description: "Created a reservation platform for sports facilities, allowing users to book football fields and tennis courts in real-time.",
    tags: ["Next.js", "Prisma", "TypeScript", "Vercel"],
    image: "https://images.unsplash.com/photo-1518605368461-1e92211eb717?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: false, year: "2026", duration: "May 2026 - Jul 2026",
    details: {
      objective: "Digitize sports facility reservations to prevent double-booking and automate payments.",
      features: ["Real-time availability calendar", "Automated booking confirmations via SMS/Email", "Dynamic pricing based on peak hours"],
    },
  },
  {
    slug: "material-requisition",
    title: "Material Requisition System",
    description: "Developed an internal inventory and requisition system for factories to track material usage and automate restock alerts.",
    tags: ["React", "GraphQL", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7ce3040?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: false, year: "2026", duration: "Jul 2026 - Sep 2026",
    details: {
      objective: "Optimize internal supply chain and prevent material shortages in the production line.",
      features: ["Barcode scanning for material check-in/out", "Approval workflow for high-value items", "Low stock automated email alerts"],
    },
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant POS System",
    description: "Built a comprehensive Point-of-Sale solution for full-service restaurants, including table management and kitchen display systems (KDS).",
    tags: ["React Native", "Node.js", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: false, year: "2026", duration: "Aug 2026 - Oct 2026",
    details: {
      objective: "Enhance restaurant operations by connecting front-of-house orders directly to the kitchen.",
      features: ["Visual table layout and status tracking", "Kitchen Display System (KDS) integration", "Split bill and multi-payment support"],
    },
  },
  {
    slug: "barbershop-booking",
    title: "Barbershop Booking App",
    description: "Designed a mobile-first booking application for barbershops, enabling clients to choose their preferred barber and time slot.",
    tags: ["Flutter", "Firebase", "Google Calendar API"],
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: false, year: "2026", duration: "Oct 2026 - Dec 2026",
    details: {
      objective: "Reduce walk-in wait times and help barbers manage their daily schedules efficiently.",
      features: ["Customer profiles and haircut history", "Barber-specific calendar availability", "Automated appointment reminders"],
    },
  },

  {
    slug: "n8n-automation",
    title: "n8n Enterprise Workflow Automation",
    description: "Architected a low-code automation pipeline to connect production data to ERP systems and trigger real-time LINE Notify alerts.",
    tags: ["n8n", "Low-code", "REST API", "LINE Notify", "ERP"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: true, year: "2026", duration: "Jan 2026 - Present",
    details: {
      objective: "Streamline factory data workflows and alert systems using n8n to reduce manual data entry and coding overhead.",
      features: ["Automated data synchronization between Factory DB and ERP", "Real-time production issue alerts via LINE Notify", "Webhook integrations for IoT sensors"],
      results: ["Cut development time for new integrations by 70%", "Enabled instant supervisor notifications for critical line down events"],
    },
  },
  {
    slug: "auto-setting-machine",
    title: "Auto Setting Machine",
    description: "Engineered an automated configuration system for manufacturing machines to drastically reduce setup time and operator errors.",
    tags: ["PLC", "HMI", "C#", "Automation"],
    image: "https://images.unsplash.com/photo-1565439390235-c335e9f8546b?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: false, year: "2026", duration: "Mar 2026 - Present",
    details: {
      objective: "Automate machine parameter configuration for new production batches.",
      features: ["Barcode scanning for automatic recipe loading", "Direct parameter injection to PLC", "Audit logs for setting changes"],
      results: ["Reduced machine setup time by 40%", "Zero parameter input errors across deployed lines"],
    },
  },
  {
    slug: "booking-meeting-room",
    title: "Booking Meeting Room",
    description: "Developed a responsive web application for managing factory meeting room reservations and schedules.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1497215840616-091a14151770?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: false, year: "2025", duration: "Feb 2025 - Apr 2025",
    details: {
      objective: "Provide a centralized platform for staff to book meeting rooms and avoid schedule conflicts.",
      features: ["Real-time availability calendar", "Automated email confirmations", "Admin dashboard for room management"],
    },
  },
  {
    slug: "abnormal-defect-detection",
    title: "Abnormal Defect Detection",
    description: "Deployed anomaly detection algorithms to identify rare and unknown production defects outside standard parameters.",
    tags: ["Python", "OpenCV", "Anomaly Detection"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: true, year: "2025", duration: "May 2025 - Aug 2025",
    details: {
      objective: "Detect previously unseen 'abnormal' defects that supervised models miss.",
      methodology: ["Implement unsupervised learning for anomaly detection", "Integrate with high-speed cameras on the line"],
      results: ["Caught 100% of major unexpected anomalies during test period"],
    },
  },
  {
    slug: "oil-recording-paperless",
    title: "Oil Recording (Paperless)",
    description: "Digitized the factory's oil recording process, replacing clipboards with a mobile-friendly web application.",
    tags: ["React", "Mobile Web", "Node.js"],
    image: "https://images.unsplash.com/photo-1507914372368-b2b085ca822c?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: false, year: "2025", duration: "Sep 2025 - Dec 2025",
    details: {
      objective: "Eliminate paper records for machine oil consumption and standardize data entry.",
      features: ["Mobile-first UI for operators on the floor", "Data validation constraints", "Monthly consumption reports generation"],
      results: ["Saved 500+ sheets of paper per month", "Improved data accuracy and visibility for the maintenance team"],
    },
  },
  {
    slug: "student-attendance",
    title: "Student Attendance Management System",
    description: "Built a management platform for tracking student attendance using RFID and web technologies.",
    tags: ["PHP", "MySQL", "RFID", "IoT"],
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: false, year: "2021", duration: "Jul 2021 - Dec 2021",
    details: {
      objective: "Develop a reliable attendance tracking system for educational institutions.",
      features: ["RFID card scanning integration", "Real-time attendance dashboard", "Automated absence alerts"],
    },
  },
  {
    slug: "pid-control",
    title: "PID Control System Designer",
    description: "Designed a software interface to simulate and tune Proportional-Integral-Derivative controllers for various dynamic systems.",
    tags: ["MATLAB", "Control Systems", "Simulation"],
    image: "https://images.unsplash.com/photo-1581092334245-d812bdc14106?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: false, year: "2018", duration: "Sep 2018 - Oct 2018",
    details: {
      objective: "Create a simulation tool to quickly tune PID gains for hardware projects.",
      features: ["Step response graphing", "Root locus analysis", "Gain scheduling presets"],
    },
  },

  {
    slug: "mms-dashboard",
    title: "Smart Factory MMS Dashboard",
    description: "Real-time Machine Monitoring Systems (MMS) and dashboards for data-driven decision-making in manufacturing operations.",
    tags: ["React", "Node.js", "Firebase", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: true, year: "2024", duration: "Jan 2024 - Present",
    details: {
      objective: "Develop a real-time machine status dashboard to support data-driven decision-making in production lines.",
      features: ["Real-time machine status monitoring", "OEE (Overall Equipment Effectiveness) tracking", "Downtime analysis & reporting", "Alert notification system", "Multi-line production overview"],
      results: ["Reduced unplanned downtime by 30%", "Faster anomaly response across production lines", "Remote monitoring accessible via web browser"],
    },
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance Pipeline",
    description: "Developed machine learning models to predict equipment failures before they occur, integrated alongside the MMS dashboard.",
    tags: ["Python", "Scikit-Learn", "FastAPI"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: true, year: "2024", duration: "Mar 2024 - Present",
    details: {
      objective: "Build an ML pipeline to predict equipment failures in advance, before actual downtime occurs.",
      methodology: ["Collect time-series sensor data from machines", "Feature engineering and data preprocessing", "Train models with Scikit-Learn (Random Forest, XGBoost)", "Deploy via FastAPI integrated with MMS Dashboard"],
      results: ["Predicts failures 72+ hours in advance", "Forecast accuracy > 85%", "Reduced emergency maintenance costs significantly"],
    },
  },
  {
    slug: "ai-defect-inspection",
    title: "AI Defect Inspection System",
    description: "Applied AI-based Machine Vision utilizing HIKROBOT technologies to enhance inspection accuracy and decrease defect rate.",
    tags: ["Python", "YOLO", "Machine Vision"],
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: true, year: "2023", duration: "Oct 2023 - Dec 2023",
    details: {
      context: "An automated AI-based defect inspection system — uses industrial cameras and Deep Learning to detect anomalies on parts moving through the production line, replacing human visual inspection which is prone to fatigue and errors.",
      origin: "Internal project at NMB-Minebea Thai Ltd. (2023), an electronics parts manufacturer aiming to upgrade QC processes toward Zero-defect Manufacturing.",
      painPoint: "The legacy inspection relied entirely on manual visual checks, leading to human error from fatigue and inconsistency in high-volume production.",
      objective: "Deploy an AI Machine Vision inspection system to improve defect detection accuracy and reduce human error in the QC process.",
      yourRole: "Lead engineer for the entire project — designed the data collection pipeline, labeled parts dataset, trained YOLO model, integrated with HIKROBOT SDK, and deployed the system on the live production line.",
      keySkillsUsed: ["Python", "YOLOv8", "HIKROBOT SDK", "OpenCV", "Edge Computing", "Dataset Labeling", "Model Training & Evaluation"],
      hardware: [
        { name: "HIKROBOT Camera", icon: "Camera", description: "Captures high-res images" },
        { name: "LED Lighting", icon: "Lightbulb", description: "Controls lighting environment" },
        { name: "Industrial PC", icon: "Server", description: "Runs YOLOv8 locally on edge" }
      ],
      methodology: ["Collect and label real defective parts dataset from the production line", "Train YOLO model and tune hyperparameters to achieve mAP > 95%", "Integrate with HIKROBOT SDK for camera I/O", "Deploy on edge device and validate on live production line"],
      results: ["Defect detection accuracy > 95%", "Significantly reduced defect rate reaching customers", "Inference speed < 50ms per part — no impact on Takt Time"],
      challenges: [
        { issue: "Very limited defective part samples in production caused model overfitting to training data", solution: "Applied Data Augmentation (rotation, brightness, noise) and Transfer Learning from pre-trained YOLO to improve model performance with a small dataset" },
        { issue: "Variable lighting conditions on the production line degraded model accuracy at certain times", solution: "Installed a controlled LED lighting system and fixed camera exposure to remove lighting as a variable" },
      ],
      lessonsLearned: [
        "Data Quality > Model Complexity — a well-labeled, diverse dataset outperforms a complex model trained on poor data.",
        "Physical environment factors (lighting, dust, vibration) in factories impact AI more than expected — control the environment before deploying.",
      ],
      nextSteps: [
        "Expand to other part types in the factory by reusing the existing pipeline",
        "Add Anomaly Detection for new defect types not seen in training data",
        "Integrate with MES to trigger alerts and auto-stop the line when defect rate exceeds threshold",
      ],
    },
  },
  {
    slug: "warehouse-api",
    title: "Automated Warehouse API",
    description: "Built robust RESTful APIs to handle inventory tracking and communicate with automated guided vehicles (AGVs) in real-time.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7ce3040?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: false, year: "2023", duration: "Jun 2023 - Dec 2023",
    details: {
      objective: "Build RESTful APIs for inventory management and real-time AGV communication.",
      features: ["Inventory tracking & management", "Real-time AGV communication via WebSocket", "Location mapping & route optimization", "Transaction logging & audit trail"],
      results: ["Supports simultaneous communication with 10+ AGVs", "Reduced item search and storage time by 40%"],
    },
  },
  {
    slug: "ros-automation",
    title: "ROS-based Automation Systems",
    description: "Designed and developed ROS-based automation systems (AGV, Robot Arms) aligned with Industry 4.0 standards.",
    tags: ["ROS", "Python", "Linux", "IoT"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: true, year: "2023", duration: "Jun 2023 - Sep 2023",
    details: {
      objective: "Design and develop ROS-based automation systems (AGV, Robot Arms) for Industry 4.0 factory environments.",
      hardware: [
        { name: "LiDAR & Depth Camera", icon: "Camera", description: "3D vision & obstacle avoidance" },
        { name: "AGV Platform", icon: "Cpu", description: "Mobile robotic base" },
        { name: "Robot Arm", icon: "Bot", description: "6-DOF manipulator" },
        { name: "Linux Server", icon: "Server", description: "ROS master node" }
      ],
      methodology: ["Design ROS node architecture", "Develop AGV navigation stack", "Control robot arm via MoveIt!", "Integrate with factory MES"],
      results: ["AGV navigates autonomously throughout the factory floor", "Reduced manual material handling labor by 60%"],
    },
  },
  {
    slug: "production-apps",
    title: "Digital Production Support Apps",
    description: "Developed comprehensive applications (maintenance, job request, master job control) to optimize daily operations.",
    tags: ["Next.js", "Tailwind", "REST API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: false, year: "2022", duration: "May 2022 - Oct 2022",
    details: {
      objective: "Develop a suite of digital applications to support daily factory operations.",
      features: ["Maintenance Request System", "Job Request & Tracking", "Master Job Control Dashboard", "Work Order Management", "Report Generation"],
      results: ["Eliminated paper-based maintenance requests (100% paperless)", "Reduced work order processing time by 50%"],
    },
  },
  {
    slug: "smart-agriculture",
    title: "Smart Agricultural Machinery (IoT)",
    description: "Applied IoT technologies and sensor integration to engineer and develop smart agricultural machinery concepts for Kubota.",
    tags: ["IoT", "Hardware Integration", "Sensors"],
    image: "https://images.unsplash.com/photo-1628186175949-366f030bc39e?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: false, year: "2022", duration: "Jan 2022 - Dec 2022",
    details: {
      objective: "Research and develop smart agricultural machinery concepts with IoT technology for Kubota.",
      methodology: ["Market feasibility study for agricultural machinery", "Design new product concepts", "Integrate sensors and IoT into machinery", "Performance testing in real field conditions"],
      hardware: [
        { name: "IoT Sensors", icon: "Activity", description: "Collects Temp, Humidity, GPS" },
        { name: "Microcontroller", icon: "Cpu", description: "ESP32 data processing unit" },
        { name: "Cloud Platform", icon: "Cloud", description: "AWS IoT Core for data sync" }
      ],
      results: ["Developed approved product concept", "Reduced crop losses in farming process"],
    },
  },
  {
    slug: "uav-drone",
    title: "Fixed-Wing UAV Control System",
    description: "Mathematical modeling and PID control system design for fixed-wing UAV using meta-heuristic optimization. Thesis evaluated 'Excellent'.",
    tags: ["MATLAB", "Python", "PID Control", "Raspberry Pi", "UAV"],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: true, year: "2020", duration: "Jan 2020 - Jun 2021",
    details: {
      context: "An autonomous Fixed-Wing UAV control system — flies without a pilot by using mathematical algorithms to derive an aircraft model and design a PID controller, replacing manual tuning.",
      origin: "Master's thesis in Mechanical Engineering at Khon Kaen University (2019–2021), completed solo under thesis advisor supervision.",
      painPoint: "Traditional UAV control design requires experts to manually compute mathematical models — a slow, error-prone process that is difficult to reuse for new aircraft prototypes.",
      objective: "Build a mathematical model and PID control system for a fixed-wing UAV using meta-heuristic optimization (Master's thesis — graded Excellent).",
      yourRole: "Sole researcher and control systems engineer — responsible for experiment design, real flight data collection, MATLAB/Python coding for system identification and optimization, real flight testing, and thesis writing.",
      keySkillsUsed: ["MATLAB", "Python", "PID Control Design", "Meta-Heuristic Optimization (L-SHADE)", "System Identification", "Raspberry Pi", "Data Analysis", "Academic Writing"],
      methodology: [
        "Step 1 — System Identification: Inject excitation signals, collect real data, and determine Mathematical Model via Meta-Heuristics (87–98% accuracy)",
        "Step 2 — PID Control Design: Design PID Controller using L-SHADE Optimization Algorithm for both Longitudinal and Lateral Dynamics",
        "Step 3 — Real Flight Test: Conduct actual flight tests comparing with Simulation, achieving Error < 10%",
      ],
      hardware: [
        { name: "Raspberry Pi", icon: "Server", description: "High-level flight control" },
        { name: "Arduino Mega", icon: "Cpu", description: "Low-level sensor I/O" },
        { name: "Flight Sensors", icon: "Activity", description: "IMU, Airspeed, Pressure" },
        { name: "FrSky Receiver", icon: "Wifi", description: "Radio communication" }
      ],
      metrics: [
        { label: "Model Accuracy", value: "87–98", unit: "%", icon: "🎯" },
        { label: "Real Flight Error", value: "<10", unit: "%", icon: "✈️" },
        { label: "Longitudinal Rise Time", value: "0.15", unit: "s", icon: "⏱️" },
        { label: "Lateral Settling Time", value: "3.15", unit: "s", icon: "⏱️" },
        { label: "Thesis Evaluation", value: "Excellent", unit: "", icon: "🏆" },
        { label: "Intl Publication", value: "ISI", unit: "Indexed", icon: "📚" },
      ],
      programFlow: [
        { id: "excite", label: "Excite actual UAV with signal", icon: "✈️", type: "action" as const, detail: "Input: Chirp signal → record Response" },
        { id: "sysid", label: "Meta-Heuristics System ID", icon: "🧠", type: "process" as const, detail: "L-SHADE Algorithm → Model 87–98%" },
        { id: "pid_design", label: "PID Controller Design", icon: "⚙️", type: "process" as const, detail: "Optimize Kp, Ki, Kd for Long + Lat" },
        { id: "sim", label: "Simulate in MATLAB", icon: "🖥️", type: "process" as const, detail: "Verify against Spec" },
        { id: "embed", label: "Deploy on Raspberry Pi", icon: "🍓", type: "action" as const, detail: "Python PID loop" },
        { id: "flight", label: "Real Flight Test", icon: "✈️", type: "success" as const, detail: "Error < 10% vs Simulation" },
      ],
      results: [
        "Mathematical Model achieved 87–98% accuracy",
        "Longitudinal PID: Rise Time 0.15s, Overshoot 11.1%, Settling Time 5.0s",
        "Lateral PID: Rise Time 0.52s, Overshoot 5.0%, Settling Time 3.15s",
        "Real Flight Error < 10% compared to Simulation",
        "Thesis evaluated as Excellent and published in an international journal",
      ],
      videoUrl: "/projects/uav-drone-thesis/Fly_test.mov",
      visualEvidence: [],
      publication: "https://www.tandfonline.com/doi/full/10.1080/23311916.2022.2114196",
      lessonsLearned: [
        "Technique: System Identification using Meta-Heuristics provides high accuracy, but beware of overfitting to the collected dataset.",
        "Process: Simulation results don't always match reality. Real-world testing is crucial.",
        "Research: Writing for publication requires clarity and a reproducible methodology.",
      ],
      nextSteps: [
        "Expand to Adaptive Control (Gain Scheduling) to adjust to changing weather conditions.",
        "Integrate with GPS/Waypoint Navigation for autonomous flight paths.",
        "Experiment with Reinforcement Learning instead of PID to compare performance.",
      ],
    },
  },
  {
    slug: "ping-pong-robot",
    title: "Ping Pong Robot Arm",
    description: "Developed a Ping Pong playing robot utilizing LabVIEW and NI myRIO for precise mechanical control and computer vision (Senior Project).",
    tags: ["LabVIEW", "NI myRIO", "Computer Vision", "PID Control", "SolidWorks"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: false, year: "2019", duration: "Jan 2019 - May 2019",
    details: {
      context: "An automated robotic arm capable of playing ping pong with a human — uses a camera to track the ball in real-time, predicts its landing point, and moves the arm to hit it.",
      origin: "Senior Project for Bachelor's Degree in Electrical Engineering at Khon Kaen University (Jan–May 2019). Done in a team of 3; I was primarily responsible for Software and Control Systems.",
      painPoint: "The project needed to overcome system latency caused by image processing, which could prevent the robot from reacting quickly enough to a fast-moving ping pong ball.",
      objective: "Develop an automated ping pong playing robotic arm integrating Computer Vision for ball detection and trajectory prediction (Undergraduate Senior Project).",
      yourRole: "Lead for Software & Control — developed Computer Vision system in LabVIEW, wrote Linear Prediction Algorithm, calculated Inverse Kinematics, designed and tuned PID Controllers for all DC motor axes.",
      metrics: [
        { label: "Time Delay", value: "0.35", unit: "s", icon: "⏱️" },
        { label: "Prediction Error", value: "3.82–5.3", unit: "cm", icon: "🎯" },
        { label: "Robot Arm DOF", value: "4", unit: "DOF", icon: "🤖" },
        { label: "Versions Built", value: "4", unit: "versions", icon: "🔄" },
        { label: "Tracking", value: "3D", unit: "X,Y,Z", icon: "📍" },
        { label: "Evaluation", value: "A", unit: "Excellent", icon: "⭐" },
      ],
      userFlow: [
        { id: "ball_thrown", label: "Player serves ping pong ball", icon: "🏓", type: "action" as const },
        { id: "camera", label: "Real-time Camera Capture", icon: "📹", type: "process" as const, detail: "30 fps" },
        { id: "detect", label: "LabVIEW Detects X,Y", icon: "🔍", type: "process" as const, detail: "Color Blob Detection" },
        { id: "predict", label: "Predict landing from 2 points", icon: "🧠", type: "process" as const, detail: "Linear Prediction" },
        { id: "ik", label: "Calculate Inverse Kinematics", icon: "⚙️", type: "process" as const, detail: "Convert X,Y,Z to Joint Angles" },
        { id: "pid", label: "PID Controls 4-axis motors", icon: "🏓", type: "action" as const, detail: "via NI myRIO" },
        { id: "hit", label: "Robot hits ball back", icon: "✨", type: "success" as const },
      ],
      programFlow: [
        { id: "img_acq", label: "Image Acquisition", icon: "📷", type: "action" as const, detail: "USB Camera → LabVIEW" },
        { id: "proc", label: "Image Processing (PC)", icon: "🖥️", type: "process" as const, detail: "Color Threshold + Blob" },
        { id: "coord", label: "Send X,Y coordinates to myRIO", icon: "📡", type: "action" as const, detail: "TCP/IP (Low Latency)" },
        { id: "predict2", label: "Linear Prediction Algorithm", icon: "🧠", type: "process" as const, detail: "Calculate Z landing point" },
        { id: "ik2", label: "Inverse Kinematics", icon: "⚙️", type: "process" as const, detail: "Calculate 4 Joint Angles" },
        { id: "pid2", label: "PID Motor Control", icon: "🏓", type: "action" as const, detail: "DC Motor Encoder Feedback" },
      ],
      gallery: [
        "/projects/ping-pong-robot/p007_img01.jpeg",
        "/projects/ping-pong-robot/p011_img01.jpeg",
        "/projects/ping-pong-robot/p010_img02.jpeg",
      ],
      lessonsLearned: [
        "Architecture: Separating Image Processing (PC) from Controller (myRIO) is a crucial Separation of Concerns in real-time systems.",
        "Design: 3D printed parts must be designed for weight and structural integrity from the start, not as an afterthought.",
        "Teamwork: Clear role delegation (Hardware/Software/Testing) enables a small team to perform efficiently.",
      ],
      nextSteps: [
        "Upgrade from Linear Prediction to Kalman Filter or ML-based Trajectory Prediction for higher accuracy.",
        "Implement Stereo Vision camera to acquire 3D positions directly without estimating Z.",
        "Increase the robot arm's Degree of Freedom to 6 DOF to handle more complex interactions.",
      ],
    },
  },
  {
    slug: "air-hockey-robot",
    title: "Air Hockey Robot Arm",
    description: "Extended the Ping Pong Robot system to play Air Hockey, applying computer vision and real-time motor control.",
    tags: ["LabVIEW", "NI myRIO", "Image Processing", "DC Motor"],
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: false, year: "2019", duration: "2019",
    details: {
      objective: "Extend the Ping Pong Robot system to play Air Hockey, adapting the tracking algorithm for 2D planar motion.",
      methodology: ["Adapt Computer Vision algorithm for Air Hockey Puck", "Adjust 2D (X, Y) control system", "Test response speed capabilities"],
      hardware: [
        { name: "USB Camera", icon: "Camera", description: "Tracks puck in real-time" },
        { name: "NI myRIO", icon: "Cpu", description: "Main logic controller" },
        { name: "DC Motors", icon: "Activity", description: "X and Y axis actuation" }
      ],
      results: ["Achieved real-time interaction with the puck", "Response speed was sufficient for playing Air Hockey"],
    },
  },
  {
    slug: "medical-thermostat",
    title: "Thermostat for Brain Injury Patients",
    description: "Collaborated with Faculty of Nursing KKU to develop a thermostat device for brain injury patients with high fever.",
    tags: ["Embedded Systems", "Sensors", "Medical Device", "Hardware Design"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: false, year: "2018", duration: "Jun 2018 - Aug 2018",
    details: {
      objective: "Collaborate with the Faculty of Nursing at Khon Kaen University to develop a temperature control device for brain injury patients suffering from high fever.",
      methodology: ["Analyze medical requirements with nursing specialists", "Design closed-loop temperature control circuit", "Test for accuracy and safety compliance"],
      hardware: [
        { name: "DS18B20 Sensor", icon: "Activity", description: "Reads patient temperature" },
        { name: "Microcontroller", icon: "Cpu", description: "PID control logic" },
        { name: "Cooling Element", icon: "Activity", description: "Regulates body temperature" }
      ],
      results: ["Maintained temperature within ±0.5°C of target", "Integrated safety alarm system for out-of-bounds temperatures"],
    },
  },
  {
    slug: "servo-robot-arm",
    title: "Servo Robot Arm (4 DOF)",
    description: "Designed a 4 DOF robot arm using SolidWorks and 3D printing, with Inverse Kinematics and PID control system.",
    tags: ["SolidWorks", "3D Printing", "PID Control", "Inverse Kinematics"],
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: false, year: "2018", duration: "2017 - 2018",
    details: {
      objective: "Design and build a 4-DOF Robot Arm using SolidWorks and a 3D Printer, then develop a control system using Inverse Kinematics and PID.",
      methodology: ["Design 4-DOF structure in SolidWorks", "Print components using a 3D Printer", "Compute Inverse Kinematics", "Design PID Control for each Servo Motor joint"],
      hardware: [
        { name: "Servo Motors", icon: "Activity", description: "4-axis robotic actuation" },
        { name: "Microcontroller", icon: "Cpu", description: "Joint position control" },
        { name: "3D Printed Body", icon: "Layers", description: "Custom structural chassis" }
      ],
      results: ["Successfully moved to target coordinates using Inverse Kinematics", "Implemented Master-Slave system to control two robot arms moving synchronously"],
    },
  },
  {
    slug: "plc-door-system",
    title: "Warehouse Door System (PLC)",
    description: "Industrial internship project: PLC-controlled warehouse door with 4-digit password security and pneumatic actuation at NHK Spring.",
    tags: ["Mitsubishi PLC", "Pneumatic System", "Ladder Logic", "Industrial Automation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: false, year: "2018", duration: "Mar 2018 - May 2018",
    details: {
      context: "A PLC-controlled warehouse door system — requires a 4-digit password via a Keypad. Upon validation, the system triggers a Pneumatic Valve to automatically open/close the door, with an auto-lock mechanism to prevent repeated unauthorized attempts.",
      origin: "Summer Internship at NHK Spring Co., Ltd. (2018), tasked with designing and developing a security system for warehouse doors.",
      painPoint: "The previous warehouse doors had no security system, allowing unrestricted access and risking material loss and safety hazards.",
      yourRole: "Lead engineer for the project — designed the entire Ladder Logic on a Mitsubishi PLC, including Security, Timeout, Auto-lock, and Alert systems, and tested it with actual pneumatic hardware.",
      keySkillsUsed: ["Mitsubishi PLC", "Ladder Logic Programming", "Pneumatic System", "Sequential Control Design", "Safety System Design"],
      objective: "Develop a warehouse door control system using a Mitsubishi PLC and pneumatics, secured by a 4-digit password (Summer Internship at NHK Spring Co., Ltd.).",
      features: ["Supports 4 distinct password sets (4 digits each)", "10-second automatic timeout if no input is detected", "Auto-lock triggered after 3 consecutive failed attempts", "Alert System notifies when auto-lock is engaged"],
      hardware: [
        { name: "Keypad Input", icon: "Code", description: "4-digit entry module" },
        { name: "Mitsubishi PLC", icon: "Server", description: "Ladder logic controller" },
        { name: "Pneumatic Valve", icon: "Activity", description: "Door actuating mechanism" },
        { name: "Indicator Lights", icon: "Lightbulb", description: "Visual status feedback" }
      ],
      metrics: [
        { label: "Supported Passwords", value: "4", unit: "sets", icon: "🔑" },
        { label: "Length", value: "4", unit: "digits", icon: "🔢" },
        { label: "Timeout", value: "10", unit: "sec", icon: "⏱️" },
        { label: "Auto-lock Limit", value: "3", unit: "fails", icon: "🔒" },
        { label: "Response Time", value: "<1", unit: "sec", icon: "⚡" },
        { label: "Test Pass Rate", value: "100", unit: "%", icon: "✅" },
      ],
      userFlow: [
        { id: "approach", label: "User approaches door", icon: "🚶", type: "action" },
        { id: "keypad", label: "Press Keypad to enter password", icon: "⌨️", type: "action", detail: "10-sec timeout starts" },
        { id: "enter4", label: "Enter 4 digits", icon: "🔢", type: "action" },
        {
          id: "check",
          label: "PLC validates password",
          icon: "🖥️",
          type: "decision",
          branches: [
            {
              condition: "✅ Correct",
              type: "success",
              steps: [
                { id: "valve_open", label: "Pneumatic Valve Opens", icon: "💨", type: "success" },
                { id: "door_open", label: "Door Opens", icon: "🚪", type: "success", detail: "Green light on" },
                { id: "auto_close", label: "Door Auto-closes", icon: "🔒", type: "action", detail: "After user passes" },
              ],
            },
            {
              condition: "❌ Incorrect",
              type: "error",
              steps: [
                { id: "count", label: "Increment error counter", icon: "🔢", type: "warning" },
                {
                  id: "lockcheck",
                  label: "Failed 3 times?",
                  icon: "⚠️",
                  type: "decision",
                  branches: [
                    {
                      condition: "Yes",
                      type: "error",
                      steps: [
                        { id: "autolock", label: "Auto-Lock engaged", icon: "🔴", type: "error" },
                        { id: "alert", label: "Alert Triggered", icon: "🚨", type: "error", detail: "Red light flashes" },
                      ],
                    },
                    {
                      condition: "No",
                      type: "warning",
                      steps: [
                        { id: "retry", label: "Prompt to retry", icon: "🔄", type: "warning" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      programFlow: [
        { id: "input", label: "Receive Input from Keypad", icon: "⌨️", type: "action", detail: "Ladder Rung: Input Module" },
        { id: "timer", label: "Start Timeout Timer", icon: "⏱️", type: "process", detail: "TON: 10 sec" },
        { id: "store", label: "Store pass in Data Register", icon: "💾", type: "process", detail: "D100–D103" },
        { id: "compare", label: "Compare with 4 presets", icon: "🔍", type: "decision", detail: "CMP Instruction" },
        { id: "counter", label: "Update Error Counter", icon: "🔢", type: "process", detail: "C0: 0–3" },
        { id: "output", label: "Trigger Output: Valve/Lock/Alert", icon: "⚡", type: "output" as "process", detail: "Y000, Y001, Y002" },
      ],
      results: ["System fully met all operational requirements", "Successfully tested and deployed at NHK Spring facility", "Response Time < 1 second", "Reduced unauthorized access risk by 100%"],
      lessonsLearned: [
        "PLC Ladder Logic: Sequential Control design must account for edge cases such as Timeouts and Power Failures.",
        "Safety Design: Auto-lock mechanisms require a manual override for emergencies — this was added after supervisor review.",
      ],
      nextSteps: [
        "Integrate an RFID Card system for authorized personnel",
        "Log access records into a central Database",
        "Trigger CCTV recording when Auto-lock engages",
      ],
    },
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
      "Developed web applications to support production operations and drive paperless initiatives.",
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
    details: "Thesis: System Identification and Inner-Loop Stability Control for Fixed-Wing UAVs using Meta-Heuristics. (Thesis Evaluation: Excellent)",
  },
  {
    degree: "Bachelor of Engineering in Electrical Engineering",
    university: "Khon Kaen University",
    period: "2015 - 2019",
    details: "Senior Project: Ping Pong Robot using LabVIEW and NI myRIO. (GPA: 3.35, Second Class Honors)",
  },
];

export type Certificate = {
  id: number;
  title: string;
  image: string;
};

export const certificates: Certificate[] = [
  { id: 1, title: "Mastering Indoor Vertical Farming for Cannabis (6 Hrs)", image: "/certificate/01.png" },
  { id: 2, title: "Test Case Design Techniques", image: "/certificate/02.png" },
  { id: 3, title: "BASIC STM32 MICROCONTROLLER PROGRAMMER", image: "/certificate/03.png" },
];
