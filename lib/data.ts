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
  hardware?: string[];
  features?: string[];
  publication?: string;
  challenges?: { issue: string; solution: string }[];
  technicalHighlights?: { title: string; description: string }[];
  gallery?: string[];
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
    slug: "mms-dashboard",
    title: "Smart Factory MMS Dashboard",
    description: "Real-time Machine Monitoring Systems (MMS) and dashboards for data-driven decision-making in manufacturing operations.",
    tags: ["React", "Node.js", "Firebase", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: true, year: "2024", duration: "Jan 2024 - Present",
    details: {
      objective: "พัฒนาระบบ Dashboard แสดงผลสถานะเครื่องจักรแบบ Real-time เพื่อรองรับการตัดสินใจเชิงข้อมูลในสายการผลิต",
      features: ["Real-time machine status monitoring", "OEE (Overall Equipment Effectiveness) tracking", "Downtime analysis & reporting", "Alert notification system", "Multi-line production overview"],
      results: ["ลดเวลา Downtime ที่ไม่ได้วางแผนได้ 30%", "เพิ่มความเร็วในการตอบสนองต่อความผิดปกติของเครื่องจักร", "รองรับการตรวจสอบจากระยะไกลผ่าน Web Browser"],
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
      objective: "พัฒนา ML Pipeline สำหรับพยากรณ์ความล้มเหลวของเครื่องจักรล่วงหน้า ก่อนที่จะเกิดการหยุดทำงานจริง",
      methodology: ["เก็บข้อมูล Sensor จากเครื่องจักรแบบ Time-series", "Feature Engineering และ Data Preprocessing", "Train Model ด้วย Scikit-Learn (Random Forest, XGBoost)", "Deploy ผ่าน FastAPI เชื่อมต่อกับ MMS Dashboard"],
      results: ["สามารถพยากรณ์ความล้มเหลวล่วงหน้าได้ 72+ ชั่วโมง", "ความแม่นยำของการพยากรณ์ > 85%", "ลดค่าใช้จ่ายในการซ่อมบำรุงแบบ Emergency"],
    },
  },
  {
    slug: "ai-defect-inspection",
    title: "AI Defect Inspection System",
    description: "Applied AI-based Machine Vision utilizing HIKROBOT technologies to enhance inspection accuracy and decrease defect rate.",
    tags: ["Python", "YOLO", "Machine Vision"],
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: true, year: "2023", duration: "Aug 2023 - Nov 2023",
    details: {
      context: "ระบบตรวจสอบข้อบกพร่องชิ้นงานอัตโนมัติด้วย AI — ใช้กล้องอุตสาหกรรมและ Deep Learning ตรวจหาความผิดปกติบนชิ้นส่วนที่ผ่านสายการผลิต แทนการใช้สายตามนุษย์ซึ่งเมื่อยล้าและพลาดได้",
      origin: "โปรเจกต์ในบริษัท NMB-Minebea Thai Ltd. (2023) ซึ่งเป็นโรงงานผลิตชิ้นส่วนอิเล็กทรอนิกส์ ต้องการยกระดับกระบวนการ QC ให้เป็น Zero-defect Manufacturing",
      painPoint: "ระบบตรวจสอบแบบเดิมใช้พนักงานตรวจด้วยตา ทำให้มีความผิดพลาดจากความเมื่อยล้า (Human Error) และไม่สามารถรักษาความสม่ำเสมอในการผลิตแบบ High-volume ได้",
      objective: "ติดตั้งระบบตรวจสอบชิ้นงานด้วย AI Machine Vision เพื่อเพิ่มความแม่นยำในการตรวจหาของเสียและลด Human Error ในกระบวนการ QC",
      yourRole: "วิศวกรผู้รับผิดชอบหลัก — ออกแบบ Data Collection Pipeline, Label ข้อมูลชิ้นงาน, Train YOLO Model, Integrate กับ HIKROBOT SDK, และ Deploy ระบบในสายการผลิตจริง",
      keySkillsUsed: ["Python", "YOLOv8", "HIKROBOT SDK", "OpenCV", "Edge Computing", "Dataset Labeling", "Model Training & Evaluation"],
      hardware: ["HIKROBOT Industrial Camera", "High-speed LED Lighting System", "Industrial PC (Edge Computing)"],
      methodology: ["รวบรวมและ Label Dataset ชิ้นงานจริงในสายการผลิต", "Train YOLO Model และปรับ Hyperparameter จนได้ mAP > 95%", "Integrate กับ HIKROBOT SDK เพื่อรับ-ส่งข้อมูลกล้อง", "Deploy บน Edge Device และทดสอบกับสายการผลิตจริง"],
      results: ["ความแม่นยำการตรวจจับข้อบกพร่อง > 95%", "ลด Defect Rate ที่ผ่านไปถึงลูกค้าได้อย่างมีนัยสำคัญ", "ความเร็ว Inference < 50ms ต่อชิ้นงาน — ไม่กระทบ Takt Time"],
      challenges: [
        { issue: "Dataset ชิ้นงานเสียในสายการผลิตจริงมีจำนวนน้อยมาก ทำให้ Model Overfit กับ Training Data", solution: "ใช้เทคนิค Data Augmentation (Rotation, Brightness, Noise) และ Transfer Learning จาก Pre-trained YOLO เพื่อเพิ่มประสิทธิภาพ Model ด้วย Dataset ขนาดเล็ก" },
        { issue: "แสงในสายการผลิตมีความแปรปรวน ทำให้ Model Accuracy ลดลงในบางช่วงเวลา", solution: "ติดตั้ง Controlled LED Lighting System และปรับ Camera Exposure ให้คงที่ ลดตัวแปรด้านแสงออกจากระบบ" },
      ],
      lessonsLearned: [
        "เทคนิค: Data Quality สำคัญกว่า Model Complexity — Dataset ที่ Label ถูกต้องและหลากหลายสร้างผลลัพธ์ดีกว่า Model ซับซ้อนที่ใช้ข้อมูลไม่ดี",
        "สภาพแวดล้อม: ปัจจัยทางกายภาพ (แสง, ฝุ่น, สั่น) ในโรงงานมีผลต่อ AI มากกว่าที่คาด ต้องควบคุม Environment ก่อน Deploy",
      ],
      nextSteps: [
        "ขยายไปยังชิ้นส่วนประเภทอื่นในโรงงานโดย Reuse Pipeline เดิม",
        "เพิ่ม Anomaly Detection สำหรับ Defect ประเภทใหม่ที่ไม่เคยเห็นใน Training Data",
        "บูรณาการกับระบบ MES เพื่อส่ง Alert และหยุดสายการผลิตอัตโนมัติเมื่อพบ Defect Rate เกิน Threshold",
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
      objective: "พัฒนา RESTful API สำหรับจัดการ Inventory และสื่อสารกับ AGV แบบ Real-time",
      features: ["Inventory tracking & management", "Real-time AGV communication via WebSocket", "Location mapping & route optimization", "Transaction logging & audit trail"],
      results: ["รองรับการสื่อสารกับ AGV ได้ > 10 คันพร้อมกัน", "ลดเวลาการค้นหาและจัดเก็บสินค้า 40%"],
    },
  },
  {
    slug: "ros-automation",
    title: "ROS-based Automation Systems",
    description: "Designed and developed ROS-based automation systems (AGV, Robot Arms) aligned with Industry 4.0 standards.",
    tags: ["ROS", "Python", "Linux", "IoT"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: true, year: "2023", duration: "Feb 2023 - Jul 2023",
    details: {
      objective: "ออกแบบและพัฒนาระบบอัตโนมัติด้วย ROS สำหรับ AGV และหุ่นยนต์แขนกลในโรงงาน Industry 4.0",
      hardware: ["AGV Platform", "Robot Arm (6-DOF)", "LiDAR Sensor", "Depth Camera", "Linux Server"],
      methodology: ["ออกแบบ ROS Node Architecture", "พัฒนา Navigation Stack สำหรับ AGV", "ควบคุมหุ่นยนต์แขนกลผ่าน MoveIt!", "Integrate กับระบบ MES ของโรงงาน"],
      results: ["AGV สามารถนำทางอัตโนมัติในพื้นที่โรงงาน", "ลดการใช้แรงงานในการขนย้ายวัสดุ 60%"],
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
      objective: "พัฒนาชุดแอปพลิเคชันดิจิทัลเพื่อรองรับการดำเนินงานประจำวันในโรงงาน",
      features: ["Maintenance Request System", "Job Request & Tracking", "Master Job Control Dashboard", "Work Order Management", "Report Generation"],
      results: ["ลดการใช้กระดาษในกระบวนการขอซ่อมบำรุง 100%", "ลดเวลาการประมวลผล Work Order 50%"],
    },
  },
  {
    slug: "smart-agriculture",
    title: "Smart Agricultural Machinery (IoT)",
    description: "Applied IoT technologies and sensor integration to engineer and develop smart agricultural machinery concepts for Kubota.",
    tags: ["IoT", "Hardware Integration", "Sensors"],
    image: "https://images.unsplash.com/photo-1628186175949-366f030bc39e?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: false, year: "2021", duration: "Sep 2021 - Apr 2022",
    details: {
      objective: "ศึกษาและพัฒนา Concept ของเครื่องจักรกลเกษตรอัจฉริยะด้วยเทคโนโลยี IoT สำหรับ Kubota",
      methodology: ["ศึกษาความเป็นไปได้ของตลาดเครื่องจักรกลเกษตร", "ออกแบบ Concept ผลิตภัณฑ์ใหม่", "บูรณาการเซ็นเซอร์และ IoT เข้ากับเครื่องจักร", "ทดสอบประสิทธิภาพในสภาวะจริง"],
      hardware: ["IoT Sensors (Temperature, Humidity, GPS)", "Microcontroller (ESP32)", "Cloud Platform (AWS IoT)"],
      results: ["พัฒนา Concept ผลิตภัณฑ์ที่ผ่านการอนุมัติ", "ลดการสูญเสียในกระบวนการเพาะปลูก"],
    },
  },
  {
    slug: "uav-drone",
    title: "Fixed-Wing UAV Control System",
    description: "Mathematical modeling and PID control system design for fixed-wing UAV using meta-heuristic optimization. Thesis evaluated 'Excellent'.",
    tags: ["MATLAB", "Python", "PID Control", "Raspberry Pi", "UAV"],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
    theme: "purple", isFeatured: true, year: "2021", duration: "2019 - 2021",
    details: {
      context: "ระบบควบคุม UAV ปีกตรึง (Fixed-Wing) แบบอัตโนมัติ — บินได้เองโดยไม่ต้องมีนักบิน โดยใช้ Algorithm ทางคณิตศาสตร์หาแบบจำลองของอากาศยานและออกแบบตัวควบคุม PID แทนการหาค่าด้วยมือ",
      origin: "วิทยานิพนธ์ระดับปริญญาโท สาขาวิศวกรรมเครื่องกล มหาวิทยาลัยขอนแก่น (2019–2021) ทำคนเดียวตลอดโครงการ ภายใต้การดูแลของอาจารย์ที่ปรึกษา",
      painPoint: "การออกแบบระบบควบคุม UAV แบบดั้งเดิมต้องอาศัยผู้เชี่ยวชาญคำนวณ Mathematical Model ด้วยมือ ซึ่งใช้เวลานานและมีความคลาดเคลื่อนสูง อีกทั้งยากต่อการนำไปใช้กับอากาศยานต้นแบบใหม่",
      objective: "สร้างแบบจำลองทางคณิตศาสตร์และออกแบบระบบควบคุม PID สำหรับ Fixed-Wing UAV ด้วยเทคนิค Meta-Heuristic Optimization (วิทยานิพนธ์ระดับปริญญาโท — ประเมิน Excellent)",
      yourRole: "นักวิจัยและวิศวกรระบบควบคุมเพียงคนเดียว — รับผิดชอบตั้งแต่การออกแบบการทดลอง, เก็บข้อมูลบินจริง, เขียนโค้ด MATLAB/Python สำหรับ System Identification และ Optimization, ไปจนถึงทดสอบบินจริงและเขียนวิทยานิพนธ์",
      keySkillsUsed: ["MATLAB", "Python", "PID Control Design", "Meta-Heuristic Optimization (L-SHADE)", "System Identification", "Raspberry Pi", "Data Analysis", "Academic Writing"],
      methodology: [
        "Step 1 — System Identification: ป้อนสัญญาณกระตุ้นระบบและเก็บข้อมูลจริง จากนั้นหา Mathematical Model ด้วย Meta-Heuristics (ความแม่นยำ 87–98%)",
        "Step 2 — PID Control Design: ออกแบบ PID Controller ด้วย L-SHADE Optimization Algorithm สำหรับทั้ง Longitudinal และ Lateral Dynamic",
        "Step 3 — Real Flight Test: ทดสอบบินจริงเปรียบเทียบกับ Simulation พบว่า Error < 10%",
      ],
      hardware: ["Raspberry Pi 3 Model B+", "Arduino Mega 2560", "BNO080 IMU Sensor", "MS5611 Pressure Sensor", "Analog Airspeed Sensor", "FrSky R9 Receiver"],
      metrics: [
        { label: "Model Accuracy", value: "87–98", unit: "%", icon: "🎯" },
        { label: "Real Flight Error", value: "<10", unit: "%", icon: "✈️" },
        { label: "Longitudinal Rise Time", value: "0.15", unit: "s", icon: "⏱️" },
        { label: "Lateral Settling Time", value: "3.15", unit: "s", icon: "⏱️" },
        { label: "ผลประเมินวิทยานิพนธ์", value: "Excellent", unit: "", icon: "🏆" },
        { label: "ตีพิมพ์นานาชาติ", value: "ISI", unit: "Indexed", icon: "📚" },
      ],
      programFlow: [
        { id: "excite", label: "ป้อนสัญญาณกระตุ้น UAV จริง", icon: "✈️", type: "action" as const, detail: "Input: คลื่นทาร์ → เก็บ Response" },
        { id: "sysid", label: "Meta-Heuristics System ID", icon: "🧠", type: "process" as const, detail: "L-SHADE Algorithm → Model 87–98%" },
        { id: "pid_design", label: "PID Controller Design", icon: "⚙️", type: "process" as const, detail: "Optimize Kp, Ki, Kd ทั้ง Long + Lat" },
        { id: "sim", label: "Simulate ใน MATLAB", icon: "🖥️", type: "process" as const, detail: "Verify ตาม Spec" },
        { id: "embed", label: "Deploy บน Raspberry Pi", icon: "🍓", type: "action" as const, detail: "Python PID loop" },
        { id: "flight", label: "Real Flight Test", icon: "✈️", type: "success" as const, detail: "Error < 10% vs Simulation" },
      ],
      results: [
        "Mathematical Model มีความแม่นยำ 87–98%",
        "Longitudinal PID: Rise Time 0.15s, Overshoot 11.1%, Settling Time 5.0s",
        "Lateral PID: Rise Time 0.52s, Overshoot 5.0%, Settling Time 3.15s",
        "Real Flight Error < 10% เปรียบเทียบกับ Simulation",
        "ผลการประเมินวิทยานิพนธ์: Excellent และได้รับการตีพิมพ์ในวารสารนานาชาติ",
      ],
      publication: "https://www.tandfonline.com/doi/full/10.1080/23311916.2022.2114196",
      lessonsLearned: [
        "เทคนิค: การทำ System Identification ด้วย Meta-Heuristics ให้ความแม่นยำสูง แต่ต้องระวัง Overfitting กับ Dataset ที่เก็บมา",
        "กระบวนการ: ผลจาก Simulation ไม่เท่ากับผลจริงเสมอไป การทดสอบกับสภาพแวดล้อมจริงมีความสำคัญมาก",
        "การวิจัย: การเขียนเพื่อตีพิมพ์ต้องการความชัดเจนและการนำเสนอ Methodology ที่ทำซ้ำได้ (Reproducible)",
      ],
      nextSteps: [
        "ขยายไปสู่ Adaptive Control ที่ปรับตัวได้เมื่อสภาพอากาศเปลี่ยน (Gain Scheduling)",
        "บูรณาการกับ GPS/Waypoint Navigation เพื่อให้บินตามเส้นทางอัตโนมัติได้",
        "ทดลองใช้ Reinforcement Learning แทน PID เพื่อเปรียบเทียบประสิทธิภาพ",
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
      context: "หุ่นยนต์แขนกลที่สามารถตีปิงปองโต้กับมนุษย์ได้อัตโนมัติ — ใช้กล้องจับตำแหน่งลูกแบบ Real-time, คำนวณทำนายจุดตก, แล้วสั่งให้แขนกลเคลื่อนไปรับลูกทัน",
      origin: "Senior Project ปริญญาตรี สาขาวิศวกรรมไฟฟ้า มหาวิทยาลัยขอนแก่น (ม.ค.–พ.ค. 2019) ทำเป็นทีม 3 คน โดยฉันรับผิดชอบหลักด้าน Software และ Control System",
      painPoint: "โปรเจกต์นี้ต้องการแก้ปัญหาความล่าช้าของระบบ (Latency) ที่เกิดจากการประมวลผลภาพ ซึ่งทำให้หุ่นยนต์ไม่สามารถตอบสนองได้ทันกับลูกปิงปองที่เคลื่อนที่เร็ว",
      objective: "พัฒนาหุ่นยนต์แขนกลสำหรับตีปิงปองโต้ตอบอัตโนมัติ ผสาน Computer Vision สำหรับตรวจจับและทำนายตำแหน่งลูก (Senior Project ปริญญาตรี)",
      yourRole: "รับผิดชอบหลักด้าน Software & Control — พัฒนาระบบ Computer Vision ใน LabVIEW, เขียน Linear Prediction Algorithm, คำนวณ Inverse Kinematics, ออกแบบและ Tune PID Controller สำหรับ DC Motor ทุกแกน",
      metrics: [
        { label: "Time Delay", value: "0.35", unit: "s", icon: "⏱️" },
        { label: "ความผิดพลาดทำนาย", value: "3.82–5.3", unit: "cm", icon: "🎯" },
        { label: "DOF แขนกล", value: "4", unit: "DOF", icon: "🤖" },
        { label: "รุ่นที่พัฒนา", value: "4", unit: "รุ่น", icon: "🔄" },
        { label: "ติดตามตำแหน่ง", value: "3D", unit: "X,Y,Z", icon: "📍" },
        { label: "การประเมิน", value: "A", unit: "Excellent", icon: "⭐" },
      ],
      userFlow: [
        { id: "ball_thrown", label: "Player เสิร์ฟลูกปิงปอง", icon: "🏓", type: "action" as const },
        { id: "camera", label: "กล้องจับภาพ Real-time", icon: "📹", type: "process" as const, detail: "30 fps" },
        { id: "detect", label: "LabVIEW ตรวจจับลูกเจอ X,Y", icon: "🔍", type: "process" as const, detail: "Color Blob Detection" },
        { id: "predict", label: "ทำนายจุดตกจาก 2 จุดแรก", icon: "🧠", type: "process" as const, detail: "Linear Prediction" },
        { id: "ik", label: "คำนวณ Inverse Kinematics", icon: "⚙️", type: "process" as const, detail: "แปลง X,Y,Z เป็นมุม Joint" },
        { id: "pid", label: "PID Controller สั่งมอเตอร์ 4 แกน", icon: "🏓", type: "action" as const, detail: "ผ่าน NI myRIO" },
        { id: "hit", label: "ไม้ปิงปองตีลูกคืน", icon: "✨", type: "success" as const },
      ],
      programFlow: [
        { id: "img_acq", label: "Image Acquisition", icon: "📷", type: "action" as const, detail: "USB Camera → LabVIEW" },
        { id: "proc", label: "Image Processing (PC)", icon: "🖥️", type: "process" as const, detail: "Color Threshold + Blob" },
        { id: "coord", label: "ส่งพิกัด X,Y ไป myRIO", icon: "📡", type: "action" as const, detail: "TCP/IP (ลด Latency)" },
        { id: "predict2", label: "Linear Prediction Algorithm", icon: "🧠", type: "process" as const, detail: "หาจุดตก Z จาก 2 จุด" },
        { id: "ik2", label: "Inverse Kinematics", icon: "⚙️", type: "process" as const, detail: "คำนวณ Joint Angles 4 แกน" },
        { id: "pid2", label: "PID Motor Control", icon: "🏓", type: "action" as const, detail: "DC Motor Encoder Feedback" },
      ],
      gallery: [
        "/projects/ping-pong-robot/p007_img01.jpeg",
        "/projects/ping-pong-robot/p011_img01.jpeg",
        "/projects/ping-pong-robot/p010_img02.jpeg",
      ],
      lessonsLearned: [
        "เทคนิค: การแยก Image Processing ออกจาก Controller (PC vs myRIO) เป็นหลัก Separation of Concerns ที่สำคัญมากในระบบ Real-time",
        "การออกแบบ: ชิ้นส่วน 3D Printed ต้องคำนึงถึงน้ำหนักและความแข็งแรงตั้งแต่ต้น ไม่ใช่แก้ปัญหาทีหลัง",
        "การทำงานทีม: การแบ่งบทบาทที่ชัดเจน (Hardware/Software/Testing) ทำให้ทีมขนาดเล็กทำงานได้มีประสิทธิภาพ",
      ],
      nextSteps: [
        "เปลี่ยนจาก Linear Prediction เป็น Kalman Filter หรือ ML-based Trajectory Prediction เพื่อความแม่นยำขึ้น",
        "ใช้กล้อง Stereo Vision เพื่อจับ 3D Position ได้โดยตรง ไม่ต้องประมาณค่า Z",
        "เพิ่ม Degree of Freedom ของแขนกลเป็น 6 DOF เพื่อรองรับการโต้ตอบที่ซับซ้อนขึ้น",
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
      objective: "ต่อยอดระบบจาก Ping Pong Robot มาประยุกต์ใช้กับ Air Hockey โดยปรับ Algorithm การติดตามสำหรับการเคลื่อนที่บนพื้นราบ",
      methodology: ["ปรับ Computer Vision Algorithm สำหรับ Air Hockey Puck", "ปรับระบบควบคุม 2 มิติ (X, Y)", "ทดสอบความเร็วในการตอบสนอง"],
      hardware: ["NI myRIO Controller", "DC Motor x2 (X, Y axis)", "USB Camera", "Air Hockey Table"],
      results: ["โต้ตอบลูก Puck ได้แบบ Real-time", "ความเร็วตอบสนองเพียงพอสำหรับการเล่น Air Hockey"],
    },
  },
  {
    slug: "medical-thermostat",
    title: "Thermostat for Brain Injury Patients",
    description: "Collaborated with Faculty of Nursing KKU to develop a thermostat device for brain injury patients with high fever.",
    tags: ["Embedded Systems", "Sensors", "Medical Device", "Hardware Design"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: false, year: "2018", duration: "2018",
    details: {
      objective: "ร่วมมือกับคณะพยาบาลศาสตร์ มหาวิทยาลัยขอนแก่น พัฒนาอุปกรณ์ควบคุมอุณหภูมิสำหรับผู้ป่วยสมองบาดเจ็บที่มีไข้สูง",
      methodology: ["วิเคราะห์ความต้องการทางการแพทย์ร่วมกับพยาบาลผู้เชี่ยวชาญ", "ออกแบบวงจรควบคุมอุณหภูมิแบบ Closed-loop", "ทดสอบความแม่นยำและความปลอดภัย"],
      hardware: ["Temperature Sensor (DS18B20)", "Microcontroller", "Relay Module", "Cooling Element", "LCD Display"],
      results: ["ควบคุมอุณหภูมิได้ภายใน ±0.5°C จากค่าที่กำหนด", "ระบบ Safety Alarm เมื่ออุณหภูมิเกินขีดจำกัด"],
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
      objective: "ออกแบบและสร้าง Robot Arm 4 DOF ด้วย SolidWorks และ 3D Printer จากนั้นพัฒนาระบบควบคุมด้วย Inverse Kinematics และ PID",
      methodology: ["ออกแบบโครงสร้าง 4 DOF ด้วย SolidWorks", "พิมพ์ชิ้นส่วนด้วย 3D Printer", "คำนวณ Inverse Kinematics", "ออกแบบ PID Control สำหรับ Servo Motor แต่ละ Joint"],
      hardware: ["Servo Motor x4", "3D Printed Structure", "Microcontroller", "Power Supply"],
      results: ["เคลื่อนที่ไปยังตำแหน่งที่กำหนดได้ด้วย Inverse Kinematics", "ระบบ Master-Slave ควบคุม 2 แขนกลเคลื่อนที่ตามกัน"],
    },
  },
  {
    slug: "plc-door-system",
    title: "Warehouse Door System (PLC)",
    description: "Industrial internship project: PLC-controlled warehouse door with 4-digit password security and pneumatic actuation at NHK Spring.",
    tags: ["Mitsubishi PLC", "Pneumatic System", "Ladder Logic", "Industrial Automation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: false, year: "2018", duration: "2018 (Internship)",
    details: {
      context: "ระบบควบคุมประตูคลังสินค้าด้วย PLC — ใช้ Keypad กรอกรหัสผ่าน 4 หลัก ระบบตรวจสอบแล้วสั่ง Pneumatic Valve เปิด/ปิดประตูอัตโนมัติ มีระบบป้องกัน Auto-lock เมื่อกรอกผิดซ้ำ",
      origin: "Summer Internship ที่ NHK Spring Co., Ltd. (2018) ได้รับมอบหมายให้ออกแบบและพัฒนาระบบรักษาความปลอดภัยสำหรับประตูคลังสินค้า",
      painPoint: "ประตูคลังสินค้าเดิมไม่มีระบบรักษาความปลอดภัย ใครก็เปิดได้ ทำให้มีความเสี่ยงต่อการสูญหายของวัสดุและความปลอดภัยในโรงงาน",
      yourRole: "วิศวกรผู้รับผิดชอบทั้งโปรเจกต์ — ออกแบบ Ladder Logic ใน Mitsubishi PLC ระบบ Security, Timeout, Auto-lock และ Alert ทั้งหมด รวมถึงทดสอบกับ Pneumatic System จริง",
      keySkillsUsed: ["Mitsubishi PLC", "Ladder Logic Programming", "Pneumatic System", "Sequential Control Design", "Safety System Design"],
      objective: "พัฒนาระบบควบคุมประตูคลังสินค้าด้วย Mitsubishi PLC และระบบนิวเมติก โดยใช้รหัสผ่าน 4 หลัก (Summer Internship ที่ NHK Spring Co., Ltd.)",
      features: ["รองรับรหัสผ่านได้ 4 ชุด (แต่ละชุด 4 หลัก)", "Timeout อัตโนมัติ 10 วินาทีหากไม่กรอกรหัส", "Auto-lock หลังกรอกรหัสผิด 3 ครั้งติดต่อกัน", "Alert System แจ้งเตือนเมื่อ Auto-lock ทำงาน"],
      hardware: ["Mitsubishi PLC", "Pneumatic Cylinder & Valve", "Keypad Input Module", "Indicator Lights"],
      metrics: [
        { label: "รหัสผ่านที่รองรับ", value: "4", unit: "ชุด", icon: "🔑" },
        { label: "หลักต่อรหัส", value: "4", unit: "หลัก", icon: "🔢" },
        { label: "Timeout", value: "10", unit: "วินาที", icon: "⏱️" },
        { label: "Auto-lock หลังผิด", value: "3", unit: "ครั้ง", icon: "🔒" },
        { label: "Response Time", value: "<1", unit: "วินาที", icon: "⚡" },
        { label: "ผ่านการทดสอบ", value: "100", unit: "%", icon: "✅" },
      ],
      userFlow: [
        { id: "approach", label: "User เดินเข้ามาหน้าประตู", icon: "🚶", type: "action" },
        { id: "keypad", label: "กด Keypad เริ่มกรอกรหัส", icon: "⌨️", type: "action", detail: "Timeout เริ่มนับ 10 วินาที" },
        { id: "enter4", label: "กรอกรหัส 4 หลัก", icon: "🔢", type: "action" },
        {
          id: "check",
          label: "PLC ตรวจสอบรหัส",
          icon: "🖥️",
          type: "decision",
          branches: [
            {
              condition: "✅ ถูกต้อง",
              type: "success",
              steps: [
                { id: "valve_open", label: "Pneumatic Valve เปิด", icon: "💨", type: "success" },
                { id: "door_open", label: "ประตูเปิด", icon: "🚪", type: "success", detail: "ไฟสีเขียวติด" },
                { id: "auto_close", label: "ประตูปิดอัตโนมัติ", icon: "🔒", type: "action", detail: "หลัง User ผ่าน" },
              ],
            },
            {
              condition: "❌ ผิด",
              type: "error",
              steps: [
                { id: "count", label: "นับจำนวนครั้งที่ผิด", icon: "🔢", type: "warning" },
                {
                  id: "lockcheck",
                  label: "ผิดครบ 3 ครั้ง?",
                  icon: "⚠️",
                  type: "decision",
                  branches: [
                    {
                      condition: "ใช่",
                      type: "error",
                      steps: [
                        { id: "autolock", label: "Auto-Lock ทำงาน", icon: "🔴", type: "error" },
                        { id: "alert", label: "Alert แจ้งเตือน", icon: "🚨", type: "error", detail: "ไฟสีแดงกะพริบ" },
                      ],
                    },
                    {
                      condition: "ยัง",
                      type: "warning",
                      steps: [
                        { id: "retry", label: "กรอกรหัสใหม่ได้", icon: "🔄", type: "warning" },
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
        { id: "input", label: "รับ Input จาก Keypad", icon: "⌨️", type: "action", detail: "Ladder Rung: Input Module" },
        { id: "timer", label: "Timeout Timer เริ่มทำงาน", icon: "⏱️", type: "process", detail: "TON: 10 วินาที" },
        { id: "store", label: "เก็บรหัสใน Data Register", icon: "💾", type: "process", detail: "D100–D103" },
        { id: "compare", label: "เปรียบเทียบกับ 4 รหัสที่ตั้ง", icon: "🔍", type: "decision", detail: "CMP Instruction" },
        { id: "counter", label: "อัปเดต Error Counter", icon: "🔢", type: "process", detail: "C0: 0–3" },
        { id: "output", label: "สั่ง Output: Valve / Lock / Alert", icon: "⚡", type: "output" as "process", detail: "Y000, Y001, Y002" },
      ],
      results: ["ระบบทำงานตามข้อกำหนดทั้งหมด", "ผ่านการทดสอบและใช้งานจริงในโรงงาน NHK Spring", "Response Time < 1 วินาที", "ลดความเสี่ยงการเข้าถึงโดยไม่ได้รับอนุญาต 100%"],
      lessonsLearned: [
        "PLC Ladder Logic: การออกแบบ Sequential Control ต้องคำนึงถึง Edge case เช่น Timeout และ Power Failure",
        "Safety Design: Auto-lock ต้องมี Manual Override สำหรับกรณีฉุกเฉิน — เพิ่มเติมหลังรีวิวกับหัวหน้างาน",
      ],
      nextSteps: [
        "เพิ่ม RFID Card สำหรับผู้ที่มีสิทธิ์พิเศษ",
        "บันทึก Access Log ลง Database",
        "เชื่อมต่อกับระบบ CCTV เมื่อ Auto-lock ทำงาน",
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
    details: "Thesis: System Identification and Inner-Loop Stability Control for Fixed-Wing UAVs using Meta-Heuristics.",
  },
  {
    degree: "Bachelor of Engineering in Electrical Engineering",
    university: "Khon Kaen University",
    period: "2015 - 2019",
    details: "Senior Project: Ping Pong Robot using LabVIEW and NI myRIO. (GPA: 3.35, Second Class Honors)",
  },
];
