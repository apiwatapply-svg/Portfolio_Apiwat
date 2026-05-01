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
      objective: "ติดตั้งระบบตรวจสอบชิ้นงานด้วย AI Machine Vision เพื่อเพิ่มความแม่นยำในการตรวจหาของเสีย",
      hardware: ["HIKROBOT Industrial Camera", "High-speed LED Lighting System", "Industrial PC (Edge Computing)"],
      methodology: ["Train YOLO Model ด้วย Dataset ชิ้นงานจริง", "Integrate กับ HIKROBOT SDK", "Deploy บน Edge Device ในสายการผลิต"],
      results: ["ความแม่นยำการตรวจจับข้อบกพร่อง > 95%", "ลด Defect Rate ในสายการผลิต", "ความเร็ว Inference < 50ms ต่อชิ้นงาน"],
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
      objective: "สร้างแบบจำลองทางคณิตศาสตร์และออกแบบระบบควบคุม PID สำหรับ Fixed-Wing UAV ด้วยเทคนิค Meta-Heuristic Optimization (วิทยานิพนธ์ระดับปริญญาโท — ประเมิน Excellent)",
      methodology: [
        "Step 1 — System Identification: ป้อนสัญญาณกระตุ้นระบบและเก็บข้อมูลจริง จากนั้นหา Mathematical Model ด้วย Meta-Heuristics (ความแม่นยำ 87–98%)",
        "Step 2 — PID Control Design: ออกแบบ PID Controller ด้วย L-SHADE Optimization Algorithm สำหรับทั้ง Longitudinal และ Lateral Dynamic",
        "Step 3 — Real Flight Test: ทดสอบบินจริงเปรียบเทียบกับ Simulation พบว่า Error < 10%",
      ],
      hardware: ["Raspberry Pi 3 Model B+", "Arduino Mega 2560", "BNO080 IMU Sensor", "MS5611 Pressure Sensor", "Analog Airspeed Sensor", "FrSky R9 Receiver"],
      results: [
        "Mathematical Model มีความแม่นยำ 87–98%",
        "Longitudinal PID: Rise Time 0.15s, Overshoot 11.1%, Settling Time 5.0s",
        "Lateral PID: Rise Time 0.52s, Overshoot 5.0%, Settling Time 3.15s",
        "Real Flight Error < 10% เปรียบเทียบกับ Simulation",
        "ผลการประเมินวิทยานิพนธ์: Excellent",
      ],
      publication: "https://www.tandfonline.com/doi/full/10.1080/23311916.2022.2114196",
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
      objective: "พัฒนาหุ่นยนต์แขนกลสำหรับตีปิงปองโต้ตอบอัตโนมัติ ผสาน Computer Vision สำหรับตรวจจับและทำนายตำแหน่งลูก (Senior Project ปริญญาตรี)",
      workflow: [
        "รับภาพจากกล้อง (Image Acquisition)",
        "ประมวลผลหาลูกปิงปอง (Image Processing)",
        "คำนวณทำนายจุดตก (Prediction Algorithm)",
        "คำนวณพิกัดและส่งค่า (Inverse Kinematics & PID)",
        "ขับเคลื่อนกลไก (DC Motor Actuation)"
      ],
      methodology: [
        "ออกแบบและพิมพ์ 3D ชิ้นส่วน Robot Arm ด้วย SolidWorks (พัฒนา 4 รุ่น)",
        "ออกแบบระบบควบคุม PID สำหรับ DC Motor ผ่าน NI myRIO",
        "พัฒนาระบบ Computer Vision ด้วย LabVIEW เพื่อจับตำแหน่งลูกปิงปอง",
        "ทำนายตำแหน่งลูกตกด้วยสมการเส้นตรงจาก 2 จุดแรก",
      ],
      hardware: ["NI myRIO Controller", "DC Motor + Encoder", "USB Camera", "3D Printed Robot Arm (4 DOF)"],
      results: [
        "Time Delay การติดตามลูกปิงปอง = 0.35 วินาที",
        "ความผิดพลาดการทำนายตำแหน่งลูกตก = 3.82–5.3 cm",
        "ติดตามลูกได้ต่อเนื่องในแกน X, Y และ Z",
      ],
      challenges: [
        { issue: "ความหน่วง (Latency) ในการประมวลผลภาพจากกล้องทำให้หุ่นยนต์ตอบสนองไม่ทัน", solution: "ปรับแก้ให้ LabVIEW ประมวลผลภาพขั้นสูงบน PC แล้วส่งเฉพาะค่าพิกัดพิกัดเป้าหมาย (X, Y) ไปยัง NI myRIO เพื่อลดภาระการคำนวณของบอร์ดควบคุม" },
        { issue: "ความคลาดเคลื่อนของตำแหน่งที่เกิดจากน้ำหนักของชิ้นส่วนที่พิมพ์จาก 3D Printer", solution: "คำนวณและปรับสมการ Inverse Kinematics ใหม่ พร้อมจูนค่า PID Control ของมอเตอร์แต่ละแกนอย่างละเอียดเพื่อชดเชยน้ำหนัก" }
      ],
      technicalHighlights: [
        { title: "Linear Prediction Algorithm", description: "ประยุกต์ใช้สมการเส้นตรงคำนวณจากพิกัด 2 จุดแรกที่กล้องจับได้แบบ Real-time เพื่อทำนายหาตำแหน่งและจังหวะที่ลูกปิงปองจะเคลื่อนที่มาถึงจุดตกเป้าหมาย" },
        { title: "Inverse Kinematics Mapping", description: "ใช้วิธีการทางคณิตศาสตร์ในการแปลงพิกัดเป้าหมาย 3 มิติ (X, Y, Z) ย้อนกลับไปเป็นมุมองศา (Joint Angles) เพื่อสั่งการมอเตอร์ 4 แกนให้เคลื่อนไม้ปิงปองไปรับลูกได้อย่างแม่นยำ" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
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
      objective: "พัฒนาระบบควบคุมประตูคลังสินค้าด้วย Mitsubishi PLC และระบบนิวเมติก โดยใช้รหัสผ่าน 4 หลัก (Summer Internship ที่ NHK Spring Co., Ltd.)",
      features: ["รองรับรหัสผ่านได้ 4 ชุด (แต่ละชุด 4 หลัก)", "Timeout อัตโนมัติ 10 วินาทีหากไม่กรอกรหัส", "Auto-lock หลังกรอกรหัสผิด 3 ครั้งติดต่อกัน", "Alert System แจ้งเตือนเมื่อ Auto-lock ทำงาน"],
      hardware: ["Mitsubishi PLC", "Pneumatic Cylinder & Valve", "Keypad Input Module", "Indicator Lights"],
      results: ["ระบบทำงานตามข้อกำหนดทั้งหมด", "ผ่านการทดสอบและใช้งานจริงในโรงงาน NHK Spring"],
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
