// ============================================================
// Portfolio Data - Apiwat Nonut
// ============================================================

export const personalInfo = {
  name: "Apiwat",
  fullName: "Apiwat Nonut",
  role: "Industrial Software & DevOps Engineer",
  email: "apiwat.apply@gmail.com",
  phone: "092-5853800",
  location: "Suratthani, Thailand",
  github: "https://github.com/apiwatapply-svg",
  facebook: "https://www.facebook.com/apiwat.nonut",
  line: "0925853800",
  lineId: "oatza38",
  bio: "Industrial software developer focused on automation, IoT, AI vision, smart factory systems, and DevOps delivery. I connect production requirements with software architecture, machine-side data, Git workflow, CI/CD, and deployment automation for reliable factory operations.",
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
      { name: "RAG & AI Agents", iconKey: "rag" },
      { name: "Vibe Coding", iconKey: "prompt" },
      { name: "AI Workflow (n8n)", iconKey: "workflow" },
      { name: "Machine Vision & Edge AI", iconKey: "vision" },
      { name: "Predictive Maintenance", iconKey: "predictive" },
      { name: "ROS / Robotics", iconKey: "ros" },
      { name: "Arduino / IoT", iconKey: "arduino" },
    ],
  },
  {
    title: "DevOps & Systems",
    iconKey: "devops",
    theme: "orange",
    skills: [
      { name: "CI/CD", iconKey: "pipeline" },
      { name: "Git Workflow", iconKey: "git" },
      { name: "Release Pipeline", iconKey: "release" },
      { name: "Git", iconKey: "git" },
      { name: "Docker", iconKey: "docker" },
      { name: "Linux Server", iconKey: "linux" },
      { name: "Artifact Publish", iconKey: "artifact" },
      { name: "Deployment Scripts", iconKey: "terminal" },
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
  videos?: { url: string; caption: string }[];
  imageStory?: { url: string; title: string; caption: string }[];
  documents?: { title: string; url: string; description: string }[];
  caseStudyPages?: {
    labels?: { scope: string; jobProcess: string };
    scope: {
      story?: { headline: string; pitch: string; points: string[] };
      metrics?: { label: string; value: string; unit?: string; icon?: string }[];
      beforeAfter?: {
        summary: string;
        benefitMetrics?: { label: string; value: string; unit?: string }[];
        items: { task: string; before: string; after: string; impact: string }[];
      };
      userFlow?: FlowStep[];
      visuals?: { url: string; title: string; caption: string }[];
      screenshots?: { url: string; title: string; caption: string }[];
      benefits?: string[];
      skillGroups?: { title: string; items: string[] }[];
      lessons?: string[];
    };
    jobProcess: {
      techStack?: {
        summary: string;
        layers: { layer: string; tech: string; reason: string }[];
      };
      projectFlowTitle?: string;
      projectFlow?: FlowStep[];
      developmentFlow?: FlowStep[];
      visuals?: { url: string; title: string; caption: string }[];
      screenshots?: { url: string; title: string; caption: string }[];
      challenges?: { issue: string; solution: string }[];
    };
  };
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
  demoCredentials?: { role: string; email: string; password: string }[];
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
  status?: "Completed" | "Upcoming";
  hidden?: boolean;
  link?: string;
  githubUrl?: string;
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    slug: "online-document-storage",
    title: "Online Document Management System",
    description: "Developed a secure, cloud-based document storage system enabling paperless workflows, version control, and role-based access.",
    tags: ["Next.js", "Supabase", "AWS S3", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80",
    theme: "blue", isFeatured: false, year: "2026", duration: "Upcoming", status: "Upcoming", hidden: true,
    details: {
      objective: "Provide a centralized and secure online storage solution for corporate documents.",
      features: ["Role-based access control (RBAC)", "File versioning and history tracking", "Full-text search using OCR"],
    },
  },
  {
    slug: "coffee-shop-pos",
    title: "Coffee Shop POS System",
    description: "Built a production-ready coffee shop POS web app with cashier checkout, live barista queue, product management, reporting, SQL Server persistence, and PM2-ready customer-machine deployment.",
    tags: ["Next.js", "TypeScript", "SQL Server", "PM2", "Vitest", "Playwright"],
    image: "/projects/coffee-shop-pos/cover.png",
    theme: "orange", isFeatured: true, year: "2026", duration: "Apr 2026 - May 2026",
    githubUrl: "https://github.com/apiwatapply-svg/POS_coffee",
    details: {
      objective: "Deliver a reliable POS system that keeps cashier checkout, barista preparation, product catalog management, order history, and sales reporting in one operational workflow.",
      context: "A full-stack coffee shop POS application designed for small cafe teams and customer-side deployment. The system uses Next.js App Router, SQL Server, server actions, protected layouts, role-based access, and documented deployment steps.",
      origin: "Created as a practical production-style business system with a clean path for deployment on a customer machine using PM2 and Microsoft SQL Server.",
      painPoint: "Small shops often rely on manual orders, spreadsheet summaries, and disconnected cashier/barista communication, making it hard to track order status, receipts, and daily sales accurately.",
      yourRole: "Full-stack Developer. Responsible for requirements, system architecture, database schema, role-based access, POS cart flow, server actions, tests, documentation, and PM2-ready deployment preparation.",
      keySkillsUsed: ["Next.js 16", "React 19", "TypeScript", "SQL Server", "Server Actions", "Zustand", "Zod", "Recharts", "Vitest", "Playwright", "PM2 Deployment"],
      demoCredentials: [
        { role: "Admin", email: "admin@example.com", password: "password123" },
        { role: "Manager", email: "manager@example.com", password: "password123" },
        { role: "Cashier", email: "cashier@example.com", password: "password123" },
        { role: "Barista", email: "barista@example.com", password: "password123" }
      ],
      features: [
        "Fast cashier POS with product search, category filters, modifiers, cart totals, and checkout validation",
        "Live barista queue for paid orders, preparation status, and pickup completion",
        "Product management for categories, menu items, prices, availability, and modifiers",
        "Order history, receipt pages, cancellation flow, and operational traceability",
        "Dashboard summary metrics and charts for manager/admin sales visibility",
        "Role-based access for Admin, Manager, Cashier, and Barista workflows"
      ],
      workflow: [
        "Staff Login",
        "Role Redirect",
        "POS Checkout",
        "SQL Server Transaction",
        "Receipt",
        "Barista Queue",
        "Dashboard & Reports",
        "PM2 Deployment"
      ],
      imageStory: [
        {
          url: "/projects/coffee-shop-pos/login.png",
          title: "1. Staff Login & Role Access",
          caption: "Staff start from a shared login screen, then the system redirects Admin, Manager, Cashier, or Barista users into the workflow that matches their role."
        },
        {
          url: "/projects/coffee-shop-pos/pos.png",
          title: "2. Cashier Checkout Screen",
          caption: "The POS view is the main working screen for cashiers: product search, category filters, cart items, modifiers, totals, and checkout all stay visible in one place."
        },
        {
          url: "/projects/coffee-shop-pos/barista.png",
          title: "3. Barista Preparation Queue",
          caption: "After payment, orders move into the barista queue so preparation status and pickup completion are separated from the cashier workflow."
        },
        {
          url: "/projects/coffee-shop-pos/products.png",
          title: "4. Product & Menu Management",
          caption: "Admin and manager users can manage menu items, categories, prices, availability, and modifiers without touching the cashier screen."
        },
        {
          url: "/projects/coffee-shop-pos/dashboard.png",
          title: "5. Sales Dashboard",
          caption: "The dashboard summarizes shop performance with operational metrics and charts so managers can review sales after daily operation."
        }
      ],
      technicalHighlights: [
        {
          title: "SQL Server Operational Database",
          description: "Designed schema and seed data for products, modifiers, orders, payments, staff profiles, and sessions with SQL Server as the system of record."
        },
        {
          title: "Protected Role-Based Workflows",
          description: "Separated Admin, Manager, Cashier, and Barista flows with protected layouts, service-layer permission checks, and HTTP-only session cookies."
        },
        {
          title: "Transaction-Safe Checkout",
          description: "Order creation persists order header, order items, selected modifiers, and payment records through server-side services and database transactions."
        },
        {
          title: "Customer-Machine Deployment",
          description: "Prepared for on-site deployment with environment configuration, SQL Server setup, production build verification, and PM2 process management."
        }
      ],
      results: [
        "Completed MVP foundation with cashier, barista, product, order, dashboard, and authentication areas",
        "Documented requirements, system architecture, API/service contracts, and deployment checklist",
        "Added unit tests for calculations, validations, role guards, permissions, and dashboard summary",
        "Added Playwright E2E coverage for the checkout flow when SQL Server runtime configuration is available",
        "Verified real local login and protected pages for Admin demo access"
      ],
      challenges: [
        {
          issue: "The POS must feel fast while still keeping payment and order persistence reliable.",
          solution: "Kept cart state local with Zustand before checkout, then moved persistence into server-side services and SQL Server transactions."
        },
        {
          issue: "The same app needs different screens and permissions for cashier, barista, manager, and admin users.",
          solution: "Implemented role-aware navigation, protected layouts, and permission checks in service functions before sensitive operations."
        },
        {
          issue: "Customer-machine deployment needs repeatable setup rather than manual ad hoc startup.",
          solution: "Documented environment variables, SQL Server setup, build checks, and a PM2-ready start flow for local production hosting."
        }
      ],
      visualEvidence: [
        { url: "/projects/coffee-shop-pos/pos.png", caption: "Cashier POS product grid and current order panel", type: "image" },
        { url: "/projects/coffee-shop-pos/dashboard.png", caption: "Admin dashboard with sales summary and reporting view", type: "image" },
        { url: "/projects/coffee-shop-pos/barista.png", caption: "Barista queue for order preparation workflow", type: "image" },
        { url: "/projects/coffee-shop-pos/products.png", caption: "Product management for menu and availability control", type: "image" },
        { url: "/projects/coffee-shop-pos/login.png", caption: "Staff login screen with role-based redirect", type: "image" }
      ],
      gallery: [
        "/projects/coffee-shop-pos/pos.png",
        "/projects/coffee-shop-pos/dashboard.png",
        "/projects/coffee-shop-pos/barista.png",
        "/projects/coffee-shop-pos/products.png"
      ],
      lessonsLearned: [
        "POS systems need short cashier interactions, but the backend still needs strict validation and transaction boundaries.",
        "Role-based workflow design improves usability because each staff type sees only the screens needed for their work.",
        "Deployment documentation is part of the product when the system will run on a customer machine."
      ],
      nextSteps: [
        "Add PM2 ecosystem configuration and Windows startup service notes for customer-site deployment.",
        "Add inventory deduction and low-stock alerts after each completed order.",
        "Add receipt printer integration and branch-level reporting for multi-store usage."
      ],
    },
  },
  {
    slug: "uncloned-ecommerce",
    title: "UNCLONED E-Commerce Storefront",
    description: "Built a Supabase-backed handmade apparel storefront with bilingual product browsing, cart checkout, PromptPay QR flow, admin inventory, customer orders, and analytics.",
    tags: ["Next.js", "TypeScript", "Supabase", "RLS", "PromptPay QR", "Zustand", "Playwright", "Vercel"],
    image: "/projects/uncloned/cover.png",
    theme: "orange", isFeatured: true, year: "2025", duration: "Sep 2025 - Nov 2025",
    githubUrl: "https://github.com/apiwatapply-svg/UNCLONED",
    details: {
      objective: "Create a retail-ready e-commerce platform for handmade clothing that connects customer browsing, checkout, product stock, order tracking, and admin analysis in one workflow.",
      context: "UNCLONED is a Next.js 16 storefront for handmade apparel with Thai/English UI, Supabase data storage, product variants, cart state, PromptPay QR checkout, and a protected admin back office.",
      origin: "Added to the portfolio as a practical e-commerce and customer-facing web system, with real Supabase data restored, seeded, and verified for demonstration.",
      painPoint: "Small fashion brands need more than a static catalog: they need stock-aware product pages, checkout records, order follow-up, and admin visibility without a heavy enterprise platform.",
      yourRole: "Full-stack Developer. Responsible for system review, Supabase recovery, demo data preparation, product image repair, storefront/admin verification, real screenshot capture, and portfolio case-study documentation.",
      keySkillsUsed: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL RLS", "Zustand", "PromptPay QR", "Cloudinary-ready Upload", "Playwright", "Vercel"],
      demoCredentials: [
        { role: "Admin Basic Auth", email: "admin", password: "uncloned2026" }
      ],
      features: [
        "Bilingual storefront with hero, story section, collection grid, category filter, product detail, and responsive retail UX",
        "Supabase product catalog with categories, product variants, stock quantities, low-stock badges, and unique real product images",
        "Cart and checkout flow with quantity control, customer shipping form, PromptPay QR payment flow, and order persistence",
        "Protected admin area for inventory management, product visibility, order status, tracking number updates, and sales analytics",
        "SEO-oriented product page structure with metadata and structured data support for product discovery",
        "Portfolio-ready data recovery workflow after Supabase pause, including seed verification and screenshot evidence from the live app"
      ],
      workflow: [
        "Customer Browsing",
        "Product Search & Filter",
        "Product Detail",
        "Cart",
        "Checkout & PromptPay",
        "Supabase Order",
        "Admin Inventory",
        "Orders & Analytics",
        "Vercel Deployment"
      ],
      imageStory: [
        {
          url: "/projects/uncloned/home.png",
          title: "1. Brand Storefront",
          caption: "The customer journey starts from a polished bilingual storefront that presents the handmade apparel brand, navigation, and collection entry points."
        },
        {
          url: "/projects/uncloned/collection.png",
          title: "2. Supabase Product Collection",
          caption: "Products are rendered from restored Supabase data with unique images, category browsing, and retail-style product cards."
        },
        {
          url: "/projects/uncloned/product-detail.png",
          title: "3. Product Detail & Cart Flow",
          caption: "The product detail page shows variants, stock, quantity controls, and add-to-cart behavior that connects browsing to checkout."
        },
        {
          url: "/projects/uncloned/admin-products.png",
          title: "4. Admin Inventory",
          caption: "The admin product screen lets the store owner review inventory, product visibility, variants, stock, and image status after data recovery."
        },
        {
          url: "/projects/uncloned/admin-orders.png",
          title: "5. Order Fulfillment",
          caption: "Admin users can review customer orders, payment state, fulfillment status, and tracking updates from a dedicated operations screen."
        },
        {
          url: "/projects/uncloned/admin-analytics.png",
          title: "6. Store Analytics",
          caption: "Analytics turn restored order data into revenue, conversion, customer, and top-product views for business review."
        }
      ],
      technicalHighlights: [
        {
          title: "Supabase Storefront Data Model",
          description: "Uses Supabase tables for products, variants, orders, and order items with RLS-aware access patterns for storefront and admin workflows."
        },
        {
          title: "Retail UX With Real Product Evidence",
          description: "Product grid, product detail, and admin pages were verified against restored Supabase data with 12 unique product images and 16 product variants."
        },
        {
          title: "Checkout And Order Operations",
          description: "Checkout records customer shipping details, line items, PromptPay payment state, and order status for admin follow-up."
        },
        {
          title: "Admin Analytics Dashboard",
          description: "Admin analytics summarizes revenue, completed orders, drop-off count, payment conversion, customer segments, and top-selling products."
        }
      ],
      results: [
        "Restored the paused Supabase-backed demo and verified that the production server responds correctly",
        "Prepared demo inventory with 12 products, 16 variants, 6 orders, and 9 order items for realistic admin and analytics views",
        "Repaired broken product image links and verified every product image returned HTTP 200 before screenshot capture",
        "Captured real storefront, product detail, inventory, order, and analytics screenshots from the running web app",
        "Verified the UNCLONED production build before adding the project into the portfolio"
      ],
      challenges: [
        {
          issue: "Supabase project was paused because it had not been used for a while.",
          solution: "Restored the Supabase project from the dashboard, then rechecked product, variant, order, and order item reads from the live app."
        },
        {
          issue: "Some external product image URLs were broken after data restoration.",
          solution: "Updated the affected product image URLs with unique working product images and re-captured the portfolio screenshots."
        },
        {
          issue: "Admin order and analytics pages need protected server-side access to operational data.",
          solution: "For demo verification, read access was enabled for portfolio evidence; production should use a service-role server environment variable for admin API routes."
        }
      ],
      visualEvidence: [
        { url: "/projects/uncloned/home.png", caption: "Live UNCLONED storefront hero with bilingual navigation", type: "image" },
        { url: "/projects/uncloned/collection.png", caption: "Collection grid populated from Supabase with unique product images", type: "image" },
        { url: "/projects/uncloned/product-detail.png", caption: "Product detail page with variants, stock, quantity control, and add-to-cart flow", type: "image" },
        { url: "/projects/uncloned/admin-products.png", caption: "Admin inventory management with restored product data", type: "image" },
        { url: "/projects/uncloned/admin-orders.png", caption: "Admin order workflow with demo customer orders and fulfillment status", type: "image" },
        { url: "/projects/uncloned/admin-analytics.png", caption: "Admin analytics dashboard using restored Supabase order data", type: "image" }
      ],
      gallery: [
        "/projects/uncloned/home.png",
        "/projects/uncloned/collection.png",
        "/projects/uncloned/product-detail.png",
        "/projects/uncloned/admin-products.png",
        "/projects/uncloned/admin-orders.png",
        "/projects/uncloned/admin-analytics.png"
      ],
      lessonsLearned: [
        "Portfolio screenshots should be captured from the real running app after data recovery, not from mock or stale states.",
        "Supabase RLS is useful for security, but admin reporting should be planned around server-only credentials.",
        "E-commerce demos look more credible when product images, inventory counts, and admin orders are all consistent."
      ],
      nextSteps: [
        "Move admin read/write access to SUPABASE_SERVICE_ROLE_KEY in the server runtime before production use.",
        "Replace basic auth with a stronger admin authentication flow and role-based authorization.",
        "Add automated payment confirmation, shipping notifications, and richer sales trend exports."
      ],
    },
  },
  {
    slug: "field-booking-system",
    title: "Online Field Booking System",
    description: "Created a reservation platform for sports facilities, allowing users to book football fields and tennis courts in real-time.",
    tags: ["Next.js", "Prisma", "TypeScript", "Vercel"],
    image: "https://images.unsplash.com/photo-1518605368461-1e92211eb717?auto=format&fit=crop&w=800&q=80",
    theme: "emerald", isFeatured: false, year: "2026", duration: "Upcoming", status: "Upcoming", hidden: true,
    details: {
      objective: "Digitize sports facility reservations to prevent double-booking and automate payments.",
      features: ["Real-time availability calendar", "Automated booking confirmations via SMS/Email", "Dynamic pricing based on peak hours"],
    },
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant POS System",
    description: "Built a comprehensive Point-of-Sale solution for full-service restaurants, including table management and kitchen display systems (KDS).",
    tags: ["React Native", "Node.js", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    theme: "orange", isFeatured: false, year: "2024", duration: "Aug 2024 - Oct 2024",
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
    theme: "purple", isFeatured: false, year: "2026", duration: "Upcoming", status: "Upcoming", hidden: true,
    details: {
      objective: "Reduce walk-in wait times and help barbers manage their daily schedules efficiently.",
      features: ["Customer profiles and haircut history", "Barber-specific calendar availability", "Automated appointment reminders"],
    },
  },

  {
    slug: "booking-meeting-room",
    title: "Booking Meeting Room",
    description: "Built a meeting room booking system with real-time room availability, calendar scheduling, admin room/user management, SQL Server data, realistic room images, and PM2-ready single-port deployment.",
    tags: ["Next.js", "Express", "Prisma", "SQL Server", "Socket.IO", "PM2"],
    image: "/projects/booking-meeting-room/cover.png",
    theme: "emerald", isFeatured: true, year: "2025", duration: "Apr 2025 - Jun 2025",
    githubUrl: "https://github.com/apiwatapply-svg/meetng_room_project",
    details: {
      objective: "Provide a centralized platform for staff to check meeting room availability, reserve rooms, prevent schedule conflicts, and let admins manage rooms, users, and usage reports.",
      context: "A factory-style internal booking system with a Next.js static frontend served by an Express backend on one port. The backend uses Prisma with SQL Server and exposes booking, room, user, and report APIs.",
      origin: "Created to replace manual room reservation tracking with a browser-based workflow that is easier to deploy on a customer or internal Windows server with PM2.",
      painPoint: "Manual meeting room booking creates duplicated reservations, unclear availability, and limited visibility for admins who need to manage rooms, users, and daily schedules.",
      yourRole: "Full-stack Developer. Responsible for frontend booking UX, Express API integration, Prisma/SQL Server data model, admin management pages, mock schedule data, realistic meeting room image assets, and PM2-ready deployment shape.",
      keySkillsUsed: ["Next.js", "React", "TypeScript", "Express", "Prisma", "SQL Server", "Socket.IO", "Static Export", "PM2 Deployment"],
      demoCredentials: [
        { role: "Admin", email: "admin", password: "admin" }
      ],
      features: [
        "Room dashboard showing 5 meeting rooms with capacity, facilities, availability, realistic room images, and upcoming bookings",
        "Timeline schedule for checking room usage across working hours",
        "Booking form with topic, date/time, attendee, private booking, and recurring booking support",
        "Admin room management for room name, capacity, facilities, image, and room status",
        "Admin user management and usage reporting for booking activity",
        "Single-port production deployment where Express serves the static Next.js export and API together"
      ],
      workflow: [
        "Admin Login",
        "Dashboard Availability",
        "Select Room",
        "Create Booking",
        "Conflict Validation",
        "Calendar Update",
        "Admin Reports",
        "PM2 Deployment"
      ],
      imageStory: [
        {
          url: "/projects/booking-meeting-room/login.png",
          title: "1. Admin Login",
          caption: "The internal workflow starts with admin access, keeping room management and booking data behind a simple authenticated entry point."
        },
        {
          url: "/projects/booking-meeting-room/dashboard.png",
          title: "2. Room Availability Dashboard",
          caption: "The dashboard shows realistic meeting room cards and a working-hour timeline so staff can scan availability before creating a booking."
        },
        {
          url: "/projects/booking-meeting-room/booking-modal.png",
          title: "3. Booking Form",
          caption: "Users open a room card and create a booking with topic, date, time, attendee count, privacy, and recurring booking options."
        },
        {
          url: "/projects/booking-meeting-room/admin.png",
          title: "4. Admin Management",
          caption: "Admin pages support room, user, calendar, and report management so the system can be maintained after deployment."
        },
        {
          url: "/projects/booking-meeting-room/meeting-room-photoreal-collage.png",
          title: "5. Realistic Room Assets",
          caption: "The seeded rooms use local realistic room images, making the demo stable and easy to understand without relying on external image URLs."
        }
      ],
      technicalHighlights: [
        {
          title: "Single-Port Deployment",
          description: "Configured the frontend as a static export and served it from the Express backend, keeping app pages and APIs under one PM2 process."
        },
        {
          title: "SQL Server Mock Data",
          description: "Seeded admin login, sample users, 5 meeting rooms, realistic room images, one-time bookings, and recurring weekly bookings."
        },
        {
          title: "Real-Time Refresh",
          description: "Used Socket.IO events for booking and room updates so the dashboard can refresh availability when reservations change."
        },
        {
          title: "Admin Operations",
          description: "Included room, user, calendar, and report views so admins can maintain the booking system after deployment."
        }
      ],
      results: [
        "Verified admin login with admin/admin",
        "Created 5 mock meeting rooms with realistic local room images",
        "Created realistic booking mock data for today and future dates",
        "Verified API rooms endpoint and static frontend served from the Express backend",
        "Captured real web screenshots for portfolio evidence"
      ],
      challenges: [
        {
          issue: "The backend schema relation names did not match the JavaScript controllers.",
          solution: "Adjusted controllers to query Prisma relation fields correctly and map responses back to the lowercase shape expected by the frontend."
        },
        {
          issue: "Local SQL Server rejected the original encrypted Prisma connection string.",
          solution: "Updated the local development connection string to use Prisma's plaintext SQL Server setting for localhost while keeping trustServerCertificate enabled."
        },
        {
          issue: "The project needed believable room content without relying on missing uploaded assets.",
          solution: "Generated 5 photorealistic meeting room images and referenced them from seed data through the backend uploads route."
        }
      ],
      visualEvidence: [
        { url: "/projects/booking-meeting-room/dashboard.png", caption: "Dashboard with timeline schedule and 5 available rooms", type: "image" },
        { url: "/projects/booking-meeting-room/booking-modal.png", caption: "Booking modal opened from a real room card", type: "image" },
        { url: "/projects/booking-meeting-room/meeting-room-executive.png", caption: "Executive Boardroom image used by seed data", type: "image" },
        { url: "/projects/booking-meeting-room/meeting-room-focus.png", caption: "Focus Room image used by seed data", type: "image" },
        { url: "/projects/booking-meeting-room/meeting-room-hybrid.png", caption: "Hybrid Conference Room image used by seed data", type: "image" }
      ],
      gallery: [
        "/projects/booking-meeting-room/meeting-room-executive.png",
        "/projects/booking-meeting-room/meeting-room-focus.png",
        "/projects/booking-meeting-room/meeting-room-project.png",
        "/projects/booking-meeting-room/meeting-room-training.png",
        "/projects/booking-meeting-room/meeting-room-hybrid.png",
        "/projects/booking-meeting-room/meeting-room-photoreal-collage.png"
      ],
      lessonsLearned: [
        "Single-port deployment is simpler for internal tools because PM2 only has to supervise one backend process.",
        "Mock data should demonstrate realistic work patterns, not only empty tables.",
        "Generated realistic local assets make the demo stable even when external image URLs are unavailable."
      ],
      nextSteps: [
        "Add PM2 ecosystem configuration and Windows startup notes.",
        "Add room approval workflow for high-priority or executive rooms.",
        "Add email or Teams notifications for booking confirmation and cancellation."
      ],
    },
  },
  {
    slug: "student-attendance",
    title: "Student Attendance Management System",
    description: "Developed a comprehensive web-based and PWA-enabled application to streamline student attendance tracking using NFC/RFID technology.",
    tags: ["Next.js", "Supabase", "RFID", "IoT"],
    image: "/projects/Student_Attendance_Management_System/cover.png",
    theme: "purple", isFeatured: false, year: "2020", duration: "2020",
    githubUrl: "https://github.com/apiwatapply-svg/Student_Attendance_Management_System",
    details: {
      objective: "Develop a fast attendance checking system that reduces teachers' workload, featuring real-time dashboards for administrators and teachers to monitor attendance statistics.",
      context: "A modern student attendance system designed to simplify the traditional check-in process. It utilizes RFID/NFC cards or student ID input to record attendance instead of manual roll calls.",
      painPoint: "Traditional paper-based roll calls are slow, burdensome for teachers, and make it difficult to collect and analyze attendance statistics in a timely manner.",
      yourRole: "Full-stack Developer & Hardware Integration. Responsible for designing the database, developing the backend, and integrating the system with RFID/NFC readers.",
      features: [
        "Kiosk Mode: Interface for students to check-in using NFC/RFID cards or student ID",
        "Role-Based Access Control: Segregated access for Admins, Teachers, and Students",
        "Admin Dashboard: Manage users, subjects, classes, and NFC card registration",
        "Teacher Controls: Manual override for attendance, history editing, and class statistics",
        "Student Portal: Students can check their attendance percentage and history",
        "Real-time Dashboard: Attendance summary for school administrators"
      ],
      hardware: [
        { name: "RFID/NFC Reader", icon: "Wifi", description: "Reads student cards for check-in" },
        { name: "LCD Display / Tablet", icon: "Monitor", description: "Displays check-in confirmation" }
      ],
      results: [
        "Significantly reduced the time spent on roll calls during each class",
        "Highly accurate attendance data, reducing human error",
        "Teachers and administrators can track attendance behavior in real-time"
      ],
      lessonsLearned: [
        "A simple User Interface (UI) is crucial for Kiosk devices with high repetitive usage",
        "Connection stability between the Hardware Reader and Web Server is the heart of the system"
      ],
      imageStory: [
        {
          url: "/projects/Student_Attendance_Management_System/login.png",
          title: "1. Login & Role Entry",
          caption: "Users enter through the login screen before being routed to admin, teacher, or student workflows."
        },
        {
          url: "/projects/Student_Attendance_Management_System/NFC.png",
          title: "2. NFC/RFID Attendance Capture",
          caption: "The NFC/RFID check-in screen is designed for repeated kiosk use, allowing fast student attendance capture with card-based identification."
        },
        {
          url: "/projects/Student_Attendance_Management_System/admin_dashboard.png",
          title: "3. Admin Attendance Overview",
          caption: "Admins can review attendance summaries and manage the school-level setup from a central dashboard."
        },
        {
          url: "/projects/Student_Attendance_Management_System/admin_users.png",
          title: "4. User & Card Management",
          caption: "Admin pages manage users, student cards, subjects, classes, and enrollments so attendance data stays structured."
        },
        {
          url: "/projects/Student_Attendance_Management_System/teacher_dashboard.png",
          title: "5. Teacher Class Monitoring",
          caption: "Teachers can review class attendance status and use manual controls when card-based check-in needs correction."
        },
        {
          url: "/projects/Student_Attendance_Management_System/student_dashboard.png",
          title: "6. Student Attendance View",
          caption: "Students can review their attendance status and history, closing the loop between capture, admin management, and personal visibility."
        }
      ],
      gallery: [
        "/projects/Student_Attendance_Management_System/login.png",
        "/projects/Student_Attendance_Management_System/admin_dashboard.png",
        "/projects/Student_Attendance_Management_System/admin_users.png",
        "/projects/Student_Attendance_Management_System/admin_subjects.png",
        "/projects/Student_Attendance_Management_System/admin_classes.png",
        "/projects/Student_Attendance_Management_System/admin_enrollments.png",
        "/projects/Student_Attendance_Management_System/admin_cards.png",
        "/projects/Student_Attendance_Management_System/NFC.png",
        "/projects/Student_Attendance_Management_System/teacher_dashboard.png",
        "/projects/Student_Attendance_Management_System/student_dashboard.png",
      ]
    },
  },
  {
    slug: "pid-control",
    title: "PID Control System Designer",
    description: "Designed a software interface to simulate and tune Proportional-Integral-Derivative controllers for various dynamic systems.",
    tags: ["MATLAB", "Control Systems", "Simulation"],
    image: "/projects/PID_Control_System_Designer/cover.png",
    theme: "blue", isFeatured: false, year: "2018", duration: "Sep 2018 - Oct 2018",
    details: {
      objective: "Create a simulation tool to quickly tune PID gains for hardware projects.",
      features: ["Step response graphing", "Root locus analysis", "Gain scheduling presets"],
    },
  },

  {
    slug: "mms-dashboard",
    title: "Smart Factory MMS Dashboard",
    description: "Built an on-premise machine monitoring and OEE dashboard for 207 machines across 27 machine types, connecting machine-side data to SQL Server reports and realtime production views.",
    tags: ["Next.js", "Node.js", "SQL Server", "Prisma", "MQTT", "InfluxDB", "Socket.IO", "PM2"],
    image: "/projects/mms-dashboard/cover-v2.png",
    theme: "blue", isFeatured: true, year: "2025", duration: "Jan 2025 - Jul 2025",
    githubUrl: "https://github.com/apiwatapply-svg/MMS_project",
    details: {
      objective: "Turn machine-side signals into clear production visibility: realtime status, output vs target, OEE, downtime, NG, and daily reports by area/type/machine.",
      context: "An on-premise Smart Factory MMS dashboard for production monitoring. The system is designed around a machine master of 207 active machines across 27 machine types, with realtime machine visibility and historical reporting for production review.",
      origin: "Built to replace delayed manual reporting with a connected dashboard that production, maintenance, and management can read from the same source of truth.",
      painPoint: "Before MMS, output, downtime, and OEE were checked through manual logs and spreadsheets. The team could see problems after the loss already happened, and reports were hard to compare across machine type.",
      yourRole: "Full-stack developer responsible for system analysis, machine-data flow design, SQL Server schema usage, backend APIs, realtime dashboard, report pages, CI test workflow, PM2 deployment plan, and portfolio documentation.",
      keySkillsUsed: ["Next.js", "Node.js", "Express", "Prisma", "SQL Server", "MQTT", "InfluxDB", "Socket.IO", "PM2", "GitHub Actions"],
      caseStudyPages: {
        labels: {
          scope: "Project Detail",
          jobProcess: "Tech Detail",
        },
        scope: {
          story: {
            headline: "Smart Factory MMS Dashboard for 207 production machines",
            pitch: "This project turns machine-side production data into realtime visibility and historical reports. Instead of waiting for manual notes and spreadsheet consolidation, supervisors can open one on-premise web dashboard to see machine status, output, target, NG, OEE, and daily reports.",
            points: [
              "What is Project: an on-premise MMS web system for production monitoring, report review, and machine-performance analysis.",
              "Pain Point: manual machine checks made data late, difficult to compare by zone/type, and vulnerable to human error.",
              "New Working Method: machine data flows to realtime dashboards and SQL Server reports so users monitor exceptions instead of copying values from every machine.",
              "System Structure: machine groups are separated by Machine Type, collected by Collector PCs over LAN, and sent to the Merlin Server for realtime display and historical reporting."
            ]
          },
          metrics: [
            { label: "Active machines", value: "207" },
            { label: "Factory zones", value: "4" },
            { label: "Machine types", value: "27" },
          ],
          beforeAfter: {
            summary: "The old method required operators to walk to machine areas, read machine values, write them down, and consolidate reports later. MMS changes this into exception monitoring: users open one dashboard to see status, output, target, OEE, downtime, alarm, and NG information by area, machine type, or machine. The estimate below uses the real MMS scope of 207 active machines, 27 machine types, 4 zones, 1 minute manual check per machine, about 3 minutes dashboard review per full round, 1 full-factory round per day, 18,000 THB/month average salary, 8-hour shift equivalent, and 22 workdays per month.",
            benefitMetrics: [
              { label: "Saved per round", value: "204", unit: "min" },
              { label: "Saved per day", value: "3.4", unit: "hr" },
              { label: "Saving / day", value: "348", unit: "THB" },
              { label: "Saving / month", value: "7,650", unit: "THB" },
              { label: "Saving / year", value: "91,800", unit: "THB" },
              { label: "Reduced workload", value: "0.4", unit: "operator eq." },
            ],
            items: [
              {
                task: "Full factory machine check",
                before: "207 machines x 1 min = 207 min per full round",
                after: "Dashboard review takes about 3 min per full round",
                impact: "Saving = 207 - 3 = 204 min per round",
              },
              {
                task: "Daily full-factory coverage",
                before: "1 full-factory machine check round per working day",
                after: "Users monitor exceptions from one dashboard instead of repeating every machine check",
                impact: "204 min saved/round x 1 round/day = 204 min, or 3.4 hr saved per day",
              },
              {
                task: "Operator workload",
                before: "204 min saved per day / 480 min shift = about 0.4 operator-equivalent of routine checking workload",
                after: "Dashboard centralizes 4 zones and 27 machine types into one monitoring workflow",
                impact: "Repetitive checking changes into exception-based monitoring",
              },
              {
                task: "Labor-time saving",
                before: "Manual checking consumes 3.4 hr per day in repeated work",
                after: "MMS removes most of that repeated recording time",
                impact: "18,000 / 22 / 8 = 102.27 THB/hr; 3.4 hr x 102.27 = about 348 THB saved per day",
              },
              {
                task: "Monthly and yearly estimate",
                before: "Manual checking repeats every working day",
                after: "Dashboard data is available during the same shift and stored for reports",
                impact: "347.73 x 22 = 7,650 THB/month; x 12 = 91,800 THB/year",
              },
              {
                task: "Report quality and response",
                before: "Paper notes, Excel consolidation, and delayed comparison by machine type",
                after: "Daily report, machine report, NG report, OEE, downtime, alarm, and target gap views",
                impact: "Faster same-shift response and fewer transcription mistakes. This benefit is additional to the labor-time estimate.",
              }
            ]
          },
          visuals: [
            { url: "/projects/mms-dashboard/machine-type-network-flow.svg", title: "Machine Type Network Structure", caption: "Network overview of MMS data collection. Each machine group is organized by Machine Type, Collector PCs collect data from machine-side signals, and the Merlin Server receives data over LAN for dashboard monitoring and database reporting." },
            { url: "/projects/mms-dashboard/before-after.png", title: "Old Method vs New Method", caption: "Visual summary of the working method change: manual machine-value recording becomes dashboard monitoring, report drill-down, and same-shift response." },
          ],
          screenshots: [
            { url: "/projects/mms-dashboard/web-layout-dashboard.png", title: "Layout Dashboard", caption: "Actual MMS web screen for full factory visibility. It shows machine status, area grouping, output count, and machine location so users can locate abnormal machines without walking to every station." },
            { url: "/projects/mms-dashboard/web-machine-area.png", title: "Machine Area Entry", caption: "Actual MMS entry screen for production monitoring. Users select working area and machine type, then drill down into a specific machine group or machine detail." },
            { url: "/projects/mms-dashboard/web-overall-abr.png", title: "ABR Machine Group View", caption: "Actual MMS screen for one machine type group. The page compares six ABR machines on the same date with output, target, cycle time, availability, OEE, and operator visibility." },
            { url: "/projects/mms-dashboard/web-machine-abr003.png", title: "ABR-003 Machine Detail", caption: "Actual MMS machine detail screen. It explains one machine from summary table to hourly output monitor and CT/availability monitor, making target gaps and cycle-time loss easier to review." },
            { url: "/projects/mms-dashboard/web-daily-report.png", title: "Daily Report", caption: "Actual MMS report screen for daily production analysis. It compares output, target, downtime, alarms, and cycle-time behavior for the selected day." },
            { url: "/projects/mms-dashboard/web-machine-report.png", title: "Machine Output Report", caption: "Actual MMS web screen for machine-level historical rows: target, output, availability, performance, quality, OEE, and export review." },
            { url: "/projects/mms-dashboard/web-machine-ng.png", title: "Machine NG Report", caption: "Actual MMS web screen for quality traceability. It helps production and QC review NG quantity by machine, model, date, and station/process source." },
          ],
          benefits: [
            "Reduced repetitive manual recording: the old workflow needs about 207 minutes per full round, while the new workflow lets users see all zones from one dashboard.",
            "Reduced routine checking workload: 204 minutes saved per daily round is roughly 0.4 operator-equivalent of an 8-hour shift.",
            "Paperless and more accurate: data is stored digitally and reduces retyping mistakes from paper notes or spreadsheet consolidation.",
            "Realtime analysis: supervisors can detect low output, downtime, NG, and target gaps during the same shift.",
            "Historical analysis: daily, machine, and NG reports support root-cause review and improvement tracking.",
          ],
          skillGroups: [
            {
              title: "Hard Skills",
              items: ["Next.js", "React", "Node.js", "Express", "SQL Server", "Prisma", "MQTT", "InfluxDB", "Socket.IO", "PM2", "GitHub Actions", "CI/CD"],
            },
            {
              title: "Soft Skills",
              items: ["Requirement gathering", "Factory process analysis", "Operator workflow design", "Cross-functional communication", "Problem solving", "Deployment planning"],
            },
          ],
          lessons: [
            "Factory software must explain machine loss visually because production users need quick decisions, not long raw tables.",
            "Realtime data and historical reports should have clear responsibilities: realtime for current status, SQL Server reports for audit and trend review.",
            "Benefit should be calculated from the real working method, such as machine count, check frequency, and operator time per machine.",
            "On-premise deployment needs CI, PM2, environment control, health checks, and rollback planning before it is reliable for a customer server.",
          ],
        },
        jobProcess: {
          techStack: {
            summary: "The stack is selected for an on-premise factory system: realtime machine visibility, SQL Server historical reports, controlled deployment through PM2, and CI/CD before production update.",
            layers: [
              { layer: "Machine Layer", tech: "PLC / Machine Signal", reason: "207 production machines provide status, output, cycle-time, model, alarm, and NG-related machine data." },
              { layer: "Realtime Transport", tech: "MQTT", reason: "Move machine status/output events quickly from the machine network to the server layer." },
              { layer: "Time-series Layer", tech: "InfluxDB", reason: "Store machine telemetry in time order before normalized reporting and historical analysis." },
              { layer: "Reporting Database", tech: "SQL Server / Prisma", reason: "Store target, actual, runtime, OEE, NG, status, alarm, and machine master data for auditable reports." },
              { layer: "Backend API", tech: "Node.js / Express / Socket.IO", reason: "Serve REST APIs for histories and push realtime updates to the dashboard." },
              { layer: "Frontend", tech: "Next.js / React", reason: "Render dashboard, layout, daily reports, machine reports, and NG reports." },
              { layer: "Deployment", tech: "GitHub Actions / SSH / PM2", reason: "CI validates code, CD updates the customer server over SSH, and PM2 restarts the app process." },
            ]
          },
          projectFlowTitle: "Machine data flow: realtime and historical paths",
          projectFlow: [
            { id: "plc", label: "PLC 207 Machines", detail: "Machine status, output, CT, alarm", type: "action" },
            { id: "mqtt", label: "MQTT", detail: "Machine event transport", type: "process" },
            {
              id: "split",
              label: "Data Path",
              detail: "Realtime + histories",
              type: "decision",
              branches: [
                {
                  condition: "Realtime",
                  type: "success",
                  steps: [
                    { id: "socket", label: "Socket.IO", detail: "Live status/output", type: "process" },
                    { id: "realtime-web", label: "Web Dashboard", detail: "Current machine view", type: "success" },
                  ],
                },
                {
                  condition: "Histories",
                  type: "warning",
                  steps: [
                    { id: "influx", label: "InfluxDB", detail: "Time-series telemetry", type: "process" },
                    { id: "mssql", label: "SQL Server", detail: "Target, actual, OEE, NG, status", type: "process" },
                    { id: "report-web", label: "Website Reports", detail: "Daily / machine histories", type: "success" },
                  ],
                },
              ],
            },
          ],
          visuals: [
            { url: "/projects/mms-dashboard/project-lifecycle-flow.png", title: "Project Work Process", caption: "How the work was handled from requirement gathering, architecture, ER/API/tech design, mock UI, development, testing, deploy, and maintenance." },
            { url: "/projects/mms-dashboard/er-diagram.png", title: "ER Diagram and Data Structure", caption: "Core SQL Server tables used for machine master, target, actual, OEE, runtime, NG, status, and alarm history." },
            { url: "/projects/mms-dashboard/git-cicd-flow.png", title: "Git, CI/CD, and PM2 Deploy", caption: "Development flow used in the project: code, Git push, GitHub Actions CI, SSH deployment, and PM2 restart on the customer server." },
          ],
          challenges: [
            { issue: "Realtime and historical data have different timing behavior, so current machine views and historical reports can become confusing if they use the same path.", solution: "Separated realtime data flow from historical report flow: MQTT/Socket.IO for current machine status and InfluxDB/SQL Server for histories." },
            { issue: "The project must run on an on-premise customer server, not only on a developer machine.", solution: "Prepared PM2 process config, `/api/health`, CI checks, SSH-based deployment workflow, and a repeatable `scripts/deploy_pm2.sh` script." },
            { issue: "GitHub Actions runs on Linux while local development was on Windows, causing case-sensitive import and timezone issues.", solution: "Fixed import casing and made date/shift calculation deterministic so CI catches cross-platform problems before deployment." },
          ],
        },
      },
      imageStory: [
        { url: "/projects/mms-dashboard/machine-type-network-flow.svg", title: "Machine-to-Server Network Flow", caption: "Machine-side signals are grouped by Machine Type, collected by Collector PCs, sent through LAN to the Merlin Server, then used by the MMS web system for realtime dashboards and historical reports." },
        { url: "/projects/mms-dashboard/program-flow.png", title: "Program Working Flow", caption: "Users filter by area, type, or machine; the API loads target, actual, OEE, and downtime data; the dashboard renders realtime views and report drill-downs for production action." },
        { url: "/projects/mms-dashboard/before-after.png", title: "Before vs After Workflow", caption: "The project changes the working method from manual logs and delayed spreadsheets to realtime machine data, dashboard monitoring, and faster same-shift decisions." },
        { url: "/projects/mms-dashboard/devops-flow.png", title: "CI/CD and PM2 Deployment Flow", caption: "Development follows Git workflow, CI runs backend unit tests and frontend build, then the release is deployed to an on-premise customer server with PM2." },
        { url: "/projects/mms-dashboard/web-layout-dashboard.png", title: "Factory Layout Dashboard", caption: "Actual MMS layout screen showing the factory-level view by area and machine type. This is the fastest view for finding running, downtime, plan stop, and no-data machines." },
        { url: "/projects/mms-dashboard/web-overall-abr.png", title: "Machine Group Monitoring", caption: "Actual MMS machine group screen. Users can compare multiple machines in one type, check OEE by machine, and inspect output/CT trends before opening a single machine detail." },
        { url: "/projects/mms-dashboard/web-machine-abr003.png", title: "Single Machine Detail", caption: "Actual MMS machine detail screen with output monitor and CT/availability monitor. It helps explain how the system turns raw machine values into readable production analysis." },
        { url: "/projects/mms-dashboard/web-daily-report.png", title: "Daily Dashboard Report", caption: "Actual web screenshot captured from MMS. Daily view compares output target, actual output, OEE, downtime, and alarm patterns so supervisors can review production losses by day." },
      ],
      features: [
        "Realtime machine status monitoring with Socket.IO updates",
        "Machine filters by area, type, and machine name",
        "Output target vs actual output by hour/day/month",
        "OEE calculation using availability, performance, quality, and NG quantity",
        "Daily dashboard, machine report, and NG report",
        "PM2-ready deployment for on-premise customer server",
      ],
      workflow: ["Get requirements", "Design PRD and architecture", "Code backend/frontend", "Use Git workflow", "Run CI unit tests and build", "Deploy with PM2", "Verify dashboard reports"],
      metrics: [
        { label: "Active machines in DB", value: "207" },
        { label: "Machine types", value: "27" },
        { label: "Main report pages", value: "6" },
        { label: "Report period shown", value: "May-Jun", unit: "2026" },
        { label: "Core report tables covered", value: "7" },
        { label: "Deployment mode", value: "PM2" },
      ],
      visualEvidence: [
        { url: "/projects/mms-dashboard/machine-type-network-flow.svg", caption: "Network structure from machine type groups to collector PCs and Merlin Server", type: "graph" },
        { url: "/projects/mms-dashboard/program-flow.png", caption: "Dashboard working flow from filter to action", type: "graph" },
        { url: "/projects/mms-dashboard/before-after.png", caption: "Before and after production reporting workflow", type: "graph" },
        { url: "/projects/mms-dashboard/devops-flow.png", caption: "Git, CI, CD, and PM2 deployment workflow", type: "graph" },
        { url: "/projects/mms-dashboard/web-layout-dashboard.png", caption: "Actual factory layout dashboard screenshot from MMS", type: "image" },
        { url: "/projects/mms-dashboard/web-overall-abr.png", caption: "Actual machine group monitoring screenshot from MMS", type: "image" },
        { url: "/projects/mms-dashboard/web-machine-abr003.png", caption: "Actual single-machine output and cycle-time monitor screenshot from MMS", type: "image" },
        { url: "/projects/mms-dashboard/web-daily-report.png", caption: "Actual daily dashboard screenshot captured from the running web app", type: "image" },
      ],
      technicalHighlights: [
        { title: "Networked Machine Data Pipeline", description: "Machine-side output, status, cycle time, and alarm data are collected through MQTT/Influx paths and normalized into SQL Server reporting tables." },
        { title: "Database by Machine Type", description: "Machine master data separates area, type, and machine name, allowing reports to compare production performance by line, type, or individual machine." },
        { title: "Realtime and Report Data Together", description: "Socket.IO supports live dashboard updates while Prisma queries serve daily, machine, and NG reports from the same SQL Server source." },
        { title: "Deployable for Customer Machines", description: "The project includes PM2 process config, CI workflow, SSH deployment path, documentation, and health-check verification for on-premise operation." },
      ],
      results: [
        "Created a visual portfolio-ready explanation with network flow, program flow, before/after workflow, DevOps flow, and real dashboard screenshots.",
        "Captured actual MMS web pages and used them to explain what each screen does in the portfolio.",
        "Added downloadable PRD, System Architecture, User Manual, Git/DevOps workflow, and data source documentation.",
        "Added CI workflow for backend unit tests and frontend build verification before deployment.",
      ],
      lessonsLearned: [
        "Factory dashboards must be visual first: supervisors need to understand loss and status at a glance.",
        "Machine data needs strict source-of-truth separation between raw telemetry, targets, actuals, runtime, OEE, and reporting summaries."
      ],
      nextSteps: [
        "Add predictive maintenance signals on top of the existing downtime and OEE data.",
        "Add automated release package generation for customer-server deployment."
      ],
    },
  },
  {
    slug: "predictive-maintenance",
    title: "Smart Factory Operation Platform",
    description: "Smart factory operations case study draft. Modal content is being rewritten section by section from verified maintenance_project evidence.",
    tags: ["Next.js", "Node.js", "SQL Server", "Socket.IO", "IoT", "Arduino", "MMS", "Maintenance", "Tooling"],
    image: "/projects/smart-factory-operations/cover.png",
    theme: "orange", isFeatured: true, year: "2026", duration: "Jan 2026 - Present", status: "Completed",
    details: {
      objective: "",
    },
  },
  {
    slug: "ai-defect-inspection",
    title: "AI Defect Inspection System",
    description: "Built a machine-vision inspection pipeline using a Basler camera, controlled blue lighting, photometric stereo, ROI extraction, and YOLO OK/NG classification.",
    tags: ["Python", "OpenCV", "YOLOv11", "Basler Camera", "Photometric Stereo", "SQL Server"],
    image: "/projects/ai-defect-inspection/cover.png",
    theme: "purple", isFeatured: true, year: "2024", duration: "Mar 2024 - Jun 2024",
    githubUrl: "https://github.com/apiwatapply-svg/Defect_Inspection_System",
    details: {
      context: "A real machine-vision prototype for part inspection. The system captures multiple images from a Basler camera under controlled blue lighting, converts them into photometric stereo normal-map features, crops circular ROI inspection points, classifies each ROI as OK / NG / undefined, and saves both images and inspection records.",
      origin: "Developed as a camera and AI inspection experiment for detecting visual defects on small manufactured parts using physical lighting control plus deep-learning classification.",
      painPoint: "Small surface defects are difficult to judge consistently with normal direct-light images. The inspection needed more stable surface detail, repeatable ROI locations, and a simple OK/NG decision that could be stored for traceability.",
      objective: "Build an end-to-end defect-inspection workflow from image capture to photometric stereo processing, YOLO classification, visual result overlay, image saving, and SQL Server logging.",
      yourRole: "Machine Vision / AI Developer. Responsible for the Basler camera capture workflow, photometric stereo processing, ROI crop logic, YOLO model integration, OK/NG decision rules, result image generation, and database logging.",
      keySkillsUsed: ["Python", "OpenCV", "Ultralytics YOLO", "Photometric Stereo", "Basler Camera", "PyTorch", "pymssql", "Dataset Labeling", "Industrial Lighting"],
      hardware: [
        { name: "Basler Camera", icon: "Camera", description: "Captures repeated inspection images from the fixture" },
        { name: "Blue LED Lighting", icon: "Lightbulb", description: "Controlled 12V lighting for surface detail extraction" },
        { name: "AI Workstation", icon: "Server", description: "Runs OpenCV, PyTorch, and YOLO inference locally" },
        { name: "SQL Server", icon: "Database", description: "Stores inspection name, date, time, and point results" }
      ],
      features: [
        "Basler camera capture loop with keyboard-triggered inspection cycle",
        "Four-image photometric stereo processing to generate normal-map visual output",
        "Circular ROI extraction for two inspection points on each part",
        "YOLO classification for OK / NG decisions with confidence threshold logic",
        "Visual overlay that draws inspection circles and labels results on the processed image",
        "Automatic saving of raw images, normal map, ROI images, prediction images, and final result image",
        "SQL Server logging for inspection timestamp and point-level results"
      ],
      workflow: [
        "Capture 4 Images",
        "Convert To Grayscale",
        "Photometric Stereo",
        "Normal Map / B Channel",
        "Crop ROI Points",
        "YOLO OK/NG Classification",
        "Draw Visual Result",
        "Save Images",
        "Insert SQL Record"
      ],
      imageStory: [
        {
          url: "/projects/ai-defect-inspection/device.png",
          title: "1. Camera & Lighting Fixture",
          caption: "The inspection starts from a fixed Basler camera setup with controlled blue lighting. This keeps the part position and light condition repeatable before any AI processing starts."
        },
        {
          url: "/projects/ai-defect-inspection/photometric-setup.png",
          title: "2. Inspection Geometry",
          caption: "The part, lighting, and camera are aligned so the system can compare the same surface area under controlled capture conditions."
        },
        {
          url: "/projects/ai-defect-inspection/normal-map-result.png",
          title: "3. Photometric Stereo Output",
          caption: "Four captured images are converted into a normal-map style image. This makes surface detail easier to inspect than a normal direct-light photo."
        },
        {
          url: "/projects/ai-defect-inspection/training-results.png",
          title: "4. YOLO Training Evidence",
          caption: "The OK/NG classifier is trained on cropped ROI images, then checked with training curves and validation results before being used in the inspection script."
        },
        {
          url: "/projects/ai-defect-inspection/final-result.png",
          title: "5. Final OK/NG Inspection",
          caption: "The final report compares visual inspection and camera inspection at each point, making the result easy to review with actual inspection evidence."
        }
      ],
      methodology: [
        "Build the physical camera and lighting setup for repeatable part imaging",
        "Capture multiple directional-light images and compute a photometric stereo normal map",
        "Extract circular ROI regions from fixed inspection coordinates",
        "Train and validate a YOLO classification model with OK/NG image datasets",
        "Integrate inference, result drawing, file saving, and SQL Server logging into one Python workflow"
      ],
      results: [
        "Created a working end-to-end inspection script in basler/version_4_save_final/main.py",
        "Generated visual inspection reports comparing direct light, photometric stereo, visual inspection, and camera inspection results",
        "Stored full traceability evidence for each inspection cycle: raw images, normal-map image, ROI images, prediction ROI images, and final result image",
        "Prepared dataset folders for OK/NG training, validation, and testing across multiple ROI samples"
      ],
      technicalHighlights: [
        { title: "Photometric Stereo Preprocessing", description: "The pipeline combines four lighting-direction images to compute a normal-map visualization, then uses the B channel as the inspection feature image." },
        { title: "Point-Level ROI Decision", description: "Two circular inspection points are cropped from the processed image and classified independently, allowing OK/NG results for each target region." },
        { title: "YOLO Classification Integration", description: "Ultralytics YOLO is loaded from weight_02.pt, runs on CUDA when available, and classifies cropped ROI images with a confidence threshold before drawing the final result." },
        { title: "Traceable Output", description: "Each inspection cycle saves raw capture images, normal map, ROI crops, prediction crops, final visual result, and SQL result records." }
      ],
      challenges: [
        { issue: "Direct-light images did not expose small surface differences clearly enough for reliable visual judgment.", solution: "Added controlled directional lighting and photometric stereo processing to create stronger surface-feature images before classification." },
        { issue: "The inspection target had fixed circular regions that needed consistent point-level decisions.", solution: "Implemented coordinate-based circular ROI cropping and independent classification for each inspection point." },
        { issue: "Inspection results needed traceability beyond a single screen output.", solution: "Saved all processing stages into result folders and inserted timestamped OK/NG records into SQL Server." }
      ],
      visualEvidence: [
        { url: "/projects/ai-defect-inspection/cover.png", caption: "Portfolio cover composed from the real device, final result, normal map, and training evidence", type: "image" },
        { url: "/projects/ai-defect-inspection/device.png", caption: "Physical Basler camera and blue-light inspection fixture", type: "image" },
        { url: "/projects/ai-defect-inspection/final-result.png", caption: "Final inspection report comparing visual and camera inspection for two points", type: "image" },
        { url: "/projects/ai-defect-inspection/normal-map-result.png", caption: "Photometric stereo normal-map output used for surface-feature extraction", type: "image" },
        { url: "/projects/ai-defect-inspection/train-result.png", caption: "YOLOv11 training result summary from the project slides", type: "image" }
      ],
      gallery: [
        "/projects/ai-defect-inspection/cover.png",
        "/projects/ai-defect-inspection/device.png",
        "/projects/ai-defect-inspection/photometric-setup.png",
        "/projects/ai-defect-inspection/photometric-geometry.png",
        "/projects/ai-defect-inspection/normal-map-result.png",
        "/projects/ai-defect-inspection/training-results.png",
        "/projects/ai-defect-inspection/training-matrix.png",
        "/projects/ai-defect-inspection/train-result.png",
        "/projects/ai-defect-inspection/final-result.png"
      ],
      lessonsLearned: [
        "Lighting and image formation are as important as the AI model in factory inspection work.",
        "Saving intermediate images makes debugging much easier because failures can be traced back to capture, normal-map generation, ROI crop, or classification.",
        "Point-level inspection data should be logged with timestamps so production teams can review trends and compare AI decisions with human inspection."
      ],
      nextSteps: [
        "Move camera, lighting, ROI coordinates, model path, and database credentials into a config file.",
        "Add a small operator UI for live status, latest result image, and SQL connection health.",
        "Add model/version metadata to each inspection record for auditability."
      ],
    },
  },
  {
    slug: "ros-automation",
    title: "ROS-based Automation Systems",
    description: "Built a ROS-based AGV automation system with LiDAR navigation, point-to-point warehouse movement, MQTT/ROS bridge scripts, CAD deliverables, and a React web control panel.",
    tags: ["ROS", "Python", "React", "ROSBridge", "MQTT", "LiDAR", "Arduino", "CAD"],
    image: "/projects/ros-automation/cover.png",
    theme: "emerald", isFeatured: true, year: "2024", duration: "Sep 2023 - Feb 2024",
    githubUrl: "https://github.com/apiwatapply-svg/ROS_agv",
    details: {
      objective: "Design and validate an AGV system that can move between predefined warehouse stations while operators monitor and command the robot through a web dashboard.",
      context: "A factory automation project combining a ROS catkin workspace, LiDAR mapping/navigation, Arduino motor control, MQTT/ROS bridge scripts, CAD files, and field test reports from warehouse validation.",
      origin: "Developed as a practical AGV prototype for warehouse point-to-point movement and operator-friendly control during 2024 test activities.",
      painPoint: "Manual material movement in warehouse areas is repetitive and hard to monitor consistently. The system needed a simple operator UI while still keeping ROS navigation, map feedback, and robot command state visible.",
      yourRole: "Robotics / Industrial Software Developer. Responsible for ROS navigation setup, map and parameter configuration, web control integration, MQTT/ROS bridge scripts, test documentation, and repository cleanup for GitHub handover.",
      keySkillsUsed: ["ROS 1", "Python", "React", "ROSBridge", "ROSLIB", "ROS2D", "NAV2D", "MQTT", "Arduino", "LiDAR", "FreeCAD", "Warehouse Testing"],
      hardware: [
        { name: "AGV Platform", icon: "Bot", description: "Mobile robot base for warehouse point-to-point movement" },
        { name: "LiDAR Scanner", icon: "Camera", description: "Mapping, localization, obstacle awareness, and navigation feedback" },
        { name: "Arduino Controller", icon: "Cpu", description: "Motor-control firmware and hardware I/O integration" },
        { name: "ROSBridge Server", icon: "Server", description: "WebSocket bridge between the React operator UI and ROS topics" }
      ],
      features: [
        "ROS navigation stack with map, AMCL, move_base, costmap, global planner, and DWA local planner configuration",
        "React web control panel for HOME and station A-E point-to-point commands",
        "ROSBridge, ROSLIB, ROS2D, and NAV2D integration for web-based map and goal interaction",
        "Robot connection status, command status, success/failure feedback, and reset workflow",
        "MQTT/ROS bridge scripts for connecting robot state with external systems",
        "CAD, STEP, STL, presentation, and warehouse test report deliverables organized for handover"
      ],
      workflow: [
        "AGV Bring-up",
        "LiDAR Mapping",
        "Map & Costmap Configuration",
        "ROSBridge Connection",
        "Web Station Command",
        "move_base Navigation",
        "Feedback Topic",
        "Warehouse Field Test",
        "Documentation & Git Handover"
      ],
      technicalHighlights: [
        {
          title: "ROS Navigation Workspace",
          description: "The AGV workspace contains launch files, maps, RViz configs, and planner parameters for warehouse navigation and web-connected operation."
        },
        {
          title: "Web Control Through ROSBridge",
          description: "A React dashboard connects to ROSBridge over WebSocket, publishes target station commands, subscribes to robot feedback, and renders the 2D map viewer."
        },
        {
          title: "Hardware-Oriented Integration",
          description: "Arduino scripts, LiDAR maps, MQTT bridge scripts, and CAD files keep the software connected to real AGV hardware and mechanical design constraints."
        },
        {
          title: "Repository Cleanup For Handover",
          description: "Generated catkin build/devel output was removed from Git tracking while source files, maps, CAD, reports, and presentation assets were kept organized."
        }
      ],
      methodology: [
        "Build AGV hardware and collect warehouse map data with LiDAR",
        "Configure ROS launch files, maps, planner parameters, and RViz views",
        "Connect web dashboard to ROSBridge for operator station commands",
        "Publish target goals and subscribe to pose, odometry, and feedback topics",
        "Validate point-to-point operation through warehouse test reports"
      ],
      results: [
        "Built a working AGV control flow for HOME and stations A-E",
        "Created a React web UI showing robot connection, point commands, map viewer, and command feedback",
        "Organized warehouse test reports, CAD files, and presentation deliverables for portfolio and GitHub handover",
        "Removed generated catkin build/devel output from Git tracking to keep the repository source-focused"
      ],
      challenges: [
        {
          issue: "The operator UI needed to communicate with ROS without exposing users to terminal-based commands.",
          solution: "Used ROSBridge, ROSLIB, ROS2D, and NAV2D so station commands and map feedback could be handled from a browser UI."
        },
        {
          issue: "AGV navigation requires consistent map, localization, costmap, and planner settings for real warehouse conditions.",
          solution: "Kept maps, launch files, RViz configs, and planner parameter files versioned together in the ROS workspace."
        },
        {
          issue: "The repository contained generated catkin output that made the Git history noisy and hard to review.",
          solution: "Added ROS/React ignore rules and removed `AGV1/build` and `AGV1/devel` from Git tracking while preserving them locally."
        }
      ],
      visualEvidence: [
        { url: "/projects/ros-automation/cover.png", caption: "Generated portfolio cover using real AGV specification and web-control evidence", type: "image" },
        { url: "/projects/ros-automation/overall-agv-spec.png", caption: "AGV specification with dimensions, payload, navigation, speed, communication, and safety device notes", type: "image" },
        { url: "/projects/ros-automation/agv-web-control.png", caption: "React web control panel connected to ROSBridge with station commands and Map2D viewer", type: "image" }
      ],
      videos: [
        { url: "/projects/ros-automation/HmGA6tf8itk.mp4", caption: "AGV working system demonstration: real movement, station command behavior, and robot response" },
        { url: "/projects/ros-automation/yPlYCydJhrE.mp4", caption: "Point-to-point navigation test: AGV moving between predefined warehouse points" }
      ],
      imageStory: [
        {
          url: "/projects/ros-automation/cover.png",
          title: "1. Full AGV Automation Scope",
          caption: "The project combines the real AGV specification, warehouse movement logic, ROS navigation, and a web control panel into one machine-side automation system."
        },
        {
          url: "/projects/ros-automation/overall-agv-spec.png",
          title: "2. Machine & Hardware Specification",
          caption: "This image shows the AGV body, dimensions, payload, navigation device, speed, communication method, and safety-device notes used to frame the software requirements."
        },
        {
          url: "/projects/ros-automation/agv-web-control.png",
          title: "3. Operator Web Control",
          caption: "The React web UI connects through ROSBridge, shows robot connection state, renders a Map2D view, and lets operators command HOME or station A-E movement."
        }
      ],
      gallery: [
        "/projects/ros-automation/cover.png",
        "/projects/ros-automation/overall-agv-spec.png",
        "/projects/ros-automation/agv-web-control.png"
      ],
      lessonsLearned: [
        "Robotics projects need software, mechanical design, and test evidence to be organized together for reliable handover.",
        "Browser-based robot control is easier for operators, but the ROS topic contract must be kept simple and predictable.",
        "Generated build output should stay out of Git so reviewers can focus on source code, launch files, maps, and documentation."
      ],
      nextSteps: [
        "Add a startup checklist for ROS master, LiDAR driver, rosbridge server, and web dashboard.",
        "Add diagrams for ROS topic flow, MQTT bridge flow, and AGV station command sequence.",
        "Add production safety checklist for emergency stop, obstacle detection validation, and battery monitoring."
      ],
    },
  },
  {
    slug: "smart-agriculture",
    title: "Smart Agricultural Machinery & Auto Steering",
    description: "Tested and developed IoT-integrated agricultural machinery, focusing on drones and tractor Auto Steering systems to boost customer trust and sales.",
    tags: ["IoT", "Auto Steering", "Drone", "Performance Testing"],
    image: "/projects/smart-agriculture/p17_img08.jpeg",
    theme: "emerald", isFeatured: true, year: "2023", duration: "Jan 2023 - Aug 2023",
    details: {
      context: "A Research & Development initiative at Kubota to integrate IoT into agricultural machinery, specifically focusing on Drone performance and Tractor Auto Steering systems.",
      origin: "Driven by the need to increase market share against tech-first competitors by proving Kubota's superior durability and reliability.",
      painPoint: "Farmers were hesitant to adopt new smart farming tech unless it met the rugged 'heavy machinery' standards they expected from traditional tractors.",
      objective: "Rigorously test the performance of agricultural drones and Auto Steering systems in real field conditions to validate their durability and precision.",
      yourRole: "IoT Engineer. Responsible for conducting field tests, data logging, analyzing performance metrics, and co-developing improvements with partners.",
      methodology: [
        "Market feasibility study for agricultural machinery",
        "Integrate sensors and IoT telemetry into machinery",
        "Conduct rigorous performance testing in real field conditions",
        "Analyze data to validate durability and precision"
      ],
      hardware: [
        { name: "IoT Sensors", icon: "Activity", description: "Collect Temp, Humidity, GPS" },
        { name: "Drone Flight System", icon: "Bot", description: "Agricultural spraying drone" },
        { name: "Auto Steering", icon: "Cpu", description: "Tractor GPS navigation" },
        { name: "Data Logger", icon: "Server", description: "Real-time telemetry recording" }
      ],
      workflow: [
        "Setup machinery with IoT data loggers",
        "Define testing parameters and field conditions",
        "Execute automated flight/driving paths",
        "Collect real-time telemetry and error rates",
        "Generate performance and durability reports"
      ],
      programFlow: [
        { id: "setup", label: "Equip Tractor/Drone with Sensors", icon: "⚙️", type: "action" as const, detail: "Install GPS & Telemetry" },
        { id: "test", label: "Execute Field Test", icon: "🚜", type: "process" as const, detail: "Auto Steering / Auto Flight" },
        { id: "log", label: "Data Logging (IoT)", icon: "📡", type: "process" as const, detail: "Record deviation & stress" },
        { id: "analyze", label: "Performance Analysis", icon: "📊", type: "decision" as const, branches: [
          { condition: "Pass", type: "success", steps: [{ id: "certify", label: "Verify Durability", icon: "✅", type: "success" }] },
          { condition: "Fail", type: "error", steps: [{ id: "redesign", label: "Hardware/Software Tweak", icon: "🔧", type: "warning" }] }
        ]},
      ],
      results: [
        "Built immense customer trust by proving 'heavy machinery' durability",
        "Contributed to a 20-25% higher sales growth compared to tech-only competitors",
        "Successfully validated Tractor Auto Steering precision for commercial release"
      ],
      gallery: [
        "/projects/smart-agriculture/p17_img01.jpeg",
        "/projects/smart-agriculture/p17_img02.jpeg",
        "/projects/smart-agriculture/p17_img03.jpeg",
        "/projects/smart-agriculture/p17_img04.jpeg",
        "/projects/smart-agriculture/p17_img05.jpeg",
        "/projects/smart-agriculture/p17_img06.jpeg",
        "/projects/smart-agriculture/p17_img07.jpeg",
        "/projects/smart-agriculture/p17_img08.jpeg",
        "/projects/smart-agriculture/p17_img09.jpeg",
        "/projects/smart-agriculture/p17_img10.jpeg",
        "/projects/smart-agriculture/p17_img11.jpeg",
        "/projects/smart-agriculture/p17_img12.jpeg",
        "/projects/smart-agriculture/p17_img13.jpeg"
      ]
    },
  },
  {
    slug: "uav-drone",
    title: "Fixed-Wing UAV Control System",
    description: "Mathematical modeling and PID control system design for fixed-wing UAV using meta-heuristic optimization. Thesis evaluated 'Excellent'.",
    tags: ["MATLAB", "Python", "PID Control", "Raspberry Pi", "UAV"],
    image: "/projects/uav-drone-thesis/Cover.png",
    theme: "purple", isFeatured: true, year: "2020", duration: "Jan 2020 - Jun 2021",
    details: {
      context: "An autonomous Fixed-Wing UAV control system - flies without a pilot by using mathematical algorithms to derive an aircraft model and design a PID controller, replacing manual tuning.",
      origin: "Master's thesis in Mechanical Engineering at Khon Kaen University (2019-2021), completed solo under thesis advisor supervision.",
      painPoint: "Traditional UAV control design requires experts to manually compute mathematical models - a slow, error-prone process that is difficult to reuse for new aircraft prototypes.",
      objective: "Build a mathematical model and PID control system for a fixed-wing UAV using meta-heuristic optimization (Master's thesis - graded Excellent).",
      yourRole: "Sole researcher and control systems engineer - responsible for experiment design, real flight data collection, MATLAB/Python coding for system identification and optimization, real flight testing, and thesis writing.",
      keySkillsUsed: ["MATLAB", "Python", "PID Control Design", "Meta-Heuristic Optimization (L-SHADE)", "System Identification", "Raspberry Pi", "Data Analysis", "Academic Writing"],
      methodology: [
        "Step 1 - System Identification: Inject excitation signals, collect real data, and determine Mathematical Model via Meta-Heuristics (87-98% accuracy)",
        "Step 2 - PID Control Design: Design PID Controller using L-SHADE Optimization Algorithm for both Longitudinal and Lateral Dynamics",
        "Step 3 - Real Flight Test: Conduct actual flight tests comparing with Simulation, achieving Error < 10%",
      ],
      hardware: [
        { name: "Raspberry Pi", icon: "Server", description: "High-level flight control" },
        { name: "Arduino Mega", icon: "Cpu", description: "Low-level sensor I/O" },
        { name: "Flight Sensors", icon: "Activity", description: "IMU, Airspeed, Pressure" },
        { name: "FrSky Receiver", icon: "Wifi", description: "Radio communication" }
      ],
      metrics: [
        { label: "Model Accuracy", value: "87-98", unit: "%", icon: "Target" },
        { label: "Real Flight Error", value: "<10", unit: "%", icon: "Flight" },
        { label: "Longitudinal Rise Time", value: "0.15", unit: "s", icon: "⏱️" },
        { label: "Lateral Settling Time", value: "3.15", unit: "s", icon: "⏱️" },
        { label: "Thesis Evaluation", value: "Excellent", unit: "", icon: "🏆" },
        { label: "Intl Publication", value: "ISI", unit: "Indexed", icon: "📚" },
      ],
      programFlow: [
        { id: "excite", label: "Excite actual UAV with signal", icon: "Flight", type: "action" as const, detail: "Input: Chirp signal -> record Response" },
        { id: "sysid", label: "Meta-Heuristics System ID", icon: "Brain", type: "process" as const, detail: "L-SHADE Algorithm -> Model 87-98%" },
        { id: "pid_design", label: "PID Controller Design", icon: "⚙️", type: "process" as const, detail: "Optimize Kp, Ki, Kd for Long + Lat" },
        { id: "sim", label: "Simulate in MATLAB", icon: "🖥️", type: "process" as const, detail: "Verify against Spec" },
        { id: "embed", label: "Deploy on Raspberry Pi", icon: "🍓", type: "action" as const, detail: "Python PID loop" },
        { id: "flight", label: "Real Flight Test", icon: "Flight", type: "success" as const, detail: "Error < 10% vs Simulation" },
      ],
      results: [
        "Mathematical Model achieved 87-98% accuracy",
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
    image: "/projects/ping-pong-robot/cover.png",
    theme: "purple", isFeatured: false, year: "2019", duration: "Jan 2019 - May 2019",
    details: {
      context: "An automated robotic arm capable of playing ping pong with a human - uses a camera to track the ball in real-time, predicts its landing point, and moves the arm to hit it.",
      origin: "Senior Project for Bachelor's Degree in Electrical Engineering at Khon Kaen University (Jan-May 2019). Done in a team of 3; I was primarily responsible for Software and Control Systems.",
      painPoint: "The project needed to overcome system latency caused by image processing, which could prevent the robot from reacting quickly enough to a fast-moving ping pong ball.",
      objective: "Develop an automated ping pong playing robotic arm integrating Computer Vision for ball detection and trajectory prediction (Undergraduate Senior Project).",
      yourRole: "Lead for Software & Control - developed Computer Vision system in LabVIEW, wrote Linear Prediction Algorithm, calculated Inverse Kinematics, designed and tuned PID Controllers for all DC motor axes.",
      metrics: [
        { label: "Time Delay", value: "0.35", unit: "s", icon: "⏱️" },
        { label: "Prediction Error", value: "3.82-5.3", unit: "cm", icon: "Target" },
        { label: "Robot Arm DOF", value: "4", unit: "DOF", icon: "🤖" },
        { label: "Versions Built", value: "4", unit: "versions", icon: "🔄" },
        { label: "Tracking", value: "3D", unit: "X,Y,Z", icon: "📍" },
        { label: "Evaluation", value: "A", unit: "Excellent", icon: "⭐" },
      ],
      userFlow: [
        { id: "ball_thrown", label: "Player serves ping pong ball", icon: "🏓", type: "action" as const },
        { id: "camera", label: "Real-time Camera Capture", icon: "📹", type: "process" as const, detail: "30 fps" },
        { id: "detect", label: "LabVIEW Detects X,Y", icon: "🔍", type: "process" as const, detail: "Color Blob Detection" },
        { id: "predict", label: "Predict landing from 2 points", icon: "Brain", type: "process" as const, detail: "Linear Prediction" },
        { id: "ik", label: "Calculate Inverse Kinematics", icon: "⚙️", type: "process" as const, detail: "Convert X,Y,Z to Joint Angles" },
        { id: "pid", label: "PID Controls 4-axis motors", icon: "🏓", type: "action" as const, detail: "via NI myRIO" },
        { id: "hit", label: "Robot hits ball back", icon: "✨", type: "success" as const },
      ],
      programFlow: [
        { id: "img_acq", label: "Image Acquisition", icon: "Camera", type: "action" as const, detail: "USB Camera -> LabVIEW" },
        { id: "proc", label: "Image Processing (PC)", icon: "🖥️", type: "process" as const, detail: "Color Threshold + Blob" },
        { id: "coord", label: "Send X,Y coordinates to myRIO", icon: "📡", type: "action" as const, detail: "TCP/IP (Low Latency)" },
        { id: "predict2", label: "Linear Prediction Algorithm", icon: "Brain", type: "process" as const, detail: "Calculate Z landing point" },
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
    slug: "medical-thermostat",
    title: "Thermostat for Brain Injury Patients",
    description: "Collaborated with Faculty of Nursing KKU to develop a thermostat device for brain injury patients with high fever.",
    tags: ["Embedded Systems", "Sensors", "Medical Device", "Hardware Design"],
    image: "/projects/Thermostat_for_Brain_Injury_Patients/cover.jpg",
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
    slug: "plc-door-system",
    title: "Warehouse Door System (PLC)",
    description: "Industrial internship project: PLC-controlled warehouse door with 4-digit password security and pneumatic actuation at NHK Spring.",
    tags: ["Mitsubishi PLC", "Pneumatic System", "Ladder Logic", "Industrial Automation"],
    image: "/projects/Warehouse_Door_System_(PLC)/cover.png",
    theme: "orange", isFeatured: false, year: "2018", duration: "Mar 2018 - May 2018",
    details: {
      context: "A PLC-controlled warehouse door system - requires a 4-digit password via a Keypad. Upon validation, the system triggers a Pneumatic Valve to automatically open/close the door, with an auto-lock mechanism to prevent repeated unauthorized attempts.",
      origin: "Summer Internship at NHK Spring Co., Ltd. (2018), tasked with designing and developing a security system for warehouse doors.",
      painPoint: "The previous warehouse doors had no security system, allowing unrestricted access and risking material loss and safety hazards.",
      yourRole: "Lead engineer for the project - designed the entire Ladder Logic on a Mitsubishi PLC, including Security, Timeout, Auto-lock, and Alert systems, and tested it with actual pneumatic hardware.",
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
        { label: "Length", value: "4", unit: "digits", icon: "Digits" },
        { label: "Timeout", value: "10", unit: "sec", icon: "⏱️" },
        { label: "Auto-lock Limit", value: "3", unit: "fails", icon: "🔒" },
        { label: "Response Time", value: "<1", unit: "sec", icon: "⚡" },
        { label: "Test Pass Rate", value: "100", unit: "%", icon: "✅" },
      ],
      userFlow: [
        { id: "approach", label: "User approaches door", icon: "🚶", type: "action" },
        { id: "keypad", label: "Press Keypad to enter password", icon: "⌨️", type: "action", detail: "10-sec timeout starts" },
        { id: "enter4", label: "Enter 4 digits", icon: "Digits", type: "action" },
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
                { id: "count", label: "Increment error counter", icon: "Counter", type: "warning" },
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
        { id: "store", label: "Store pass in Data Register", icon: "Save", type: "process", detail: "D100-D103" },
        { id: "compare", label: "Compare with 4 presets", icon: "🔍", type: "decision", detail: "CMP Instruction" },
        { id: "counter", label: "Update Error Counter", icon: "Counter", type: "process", detail: "C0: 0-3" },
        { id: "output", label: "Trigger Output: Valve/Lock/Alert", icon: "⚡", type: "output" as "process", detail: "Y000, Y001, Y002" },
      ],
      results: ["System fully met all operational requirements", "Successfully tested and deployed at NHK Spring facility", "Response Time < 1 second", "Reduced unauthorized access risk by 100%"],
      lessonsLearned: [
        "PLC Ladder Logic: Sequential Control design must account for edge cases such as Timeouts and Power Failures.",
        "Safety Design: Auto-lock mechanisms require a manual override for emergencies - this was added after supervisor review.",
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
      "Designed Git-based development workflows, release readiness steps, and deployment documentation for factory software delivery.",
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
      "Facilitated an SCG and Khon Kaen University collaboration program at Phoenix Pulp and Paper, training operator-level employees in soft skills and engineering hard skills.",
      "Guided employees through practical factory improvement projects, connecting maintenance knowledge, machine failure history, and structured problem-solving methods.",
      "Supported a maintenance improvement project that collected machine breakdown and repair history, then installed sensors at frequent failure points.",
      "Helped design monitoring logic and analysis software to detect machine problems earlier and support maintenance decisions.",
      "Contributed to reducing maintenance working time by 40%, increasing machine availability and production opportunity.",
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
  { id: 4, title: "KOBDEMY - Figma (UI/UX Design & Prototyping)", image: "/certificate/kobdemy-01.png" },
  { id: 5, title: "KOBDEMY - Python Fundamentals (Syntax, Data Structures)", image: "/certificate/kobdemy-02.png" },
  { id: 6, title: "KOBDEMY - SQL Concepts & ORM Fundamentals", image: "/certificate/kobdemy-03.png" },
  { id: 7, title: "KOBDEMY - React (Hooks, Context API, State Management)", image: "/certificate/kobdemy-04.png" },
  { id: 8, title: "KOBDEMY - Next.js (SSR, Static Site Generation, App Router)", image: "/certificate/kobdemy-05.png" },
  { id: 9, title: "KOBDEMY - Django Framework (Full-stack features & Admin)", image: "/certificate/kobdemy-06.png" },
  { id: 10, title: "KOBDEMY - Flask (Micro-framework basics)", image: "/certificate/kobdemy-07.png" },
  { id: 11, title: "KOBDEMY - FastAPI (High-performance API Development)", image: "/certificate/kobdemy-08.png" },
  { id: 12, title: "KOBDEMY - Node.js & ORM (Express.js, Prisma/Sequelize)", image: "/certificate/kobdemy-09.png" },
  { id: 13, title: "KOBDEMY - Java Programming (OOP & Collections)", image: "/certificate/kobdemy-10.png" },
  { id: 14, title: "KOBDEMY - Spring Boot Framework (Security, JPA, REST APIs)", image: "/certificate/kobdemy-11.png" },
  { id: 15, title: "KOBDEMY - Docker (Containerization & Deployment)", image: "/certificate/kobdemy-12.png" },
  { id: 16, title: "KOBDEMY - Final Integration Project & Portfolio", image: "/certificate/kobdemy-13.png" },
];
