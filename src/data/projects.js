// Project data — edit this file to add, remove, or update projects.
// Leave `github` / `liveDemo` / `image` empty ("") until real links/assets exist.
// Do not invent URLs — the UI will hide links that are left blank.

export const projects = [
  {
    id: 1,
    slug: "flight-hotel-booking",
    number: "01",
    title: "Flight & Hotel Booking Platform",
    category: "Full-Stack Web Application",
    description:
      "A full-stack booking platform that allows users to search and book flight tickets and hotel accommodations.",
    highlight: "Integrated with Skyscanner for flight-related functionality.",
    technologies: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "REST API",
      "SQL",
      "React / Angular",
      "Skyscanner",
    ],
    overview:
      "A booking platform built to let users search flights and hotels and complete reservations in one place, backed by an ASP.NET Core REST API.",
    problem:
      "Travellers need a single flow to compare flight options and hotel availability instead of jumping between separate booking tools.",
    solution:
      "Built a REST API in ASP.NET Core that aggregates flight search results through the Skyscanner integration alongside hotel inventory, with a React/Angular frontend for search, comparison, and booking.",
    architecture: [
      "Frontend (React / Angular)",
      "ASP.NET Core REST API",
      "Business Logic Layer",
      "Repository / Unit of Work",
      "SQL Database",
    ],
    externalServices: ["Skyscanner"],
    github: "",
    liveDemo: "",
    image: "",
  },
  {
    id: 2,
    slug: "lms",
    number: "02",
    title: "Learning Management System",
    category: "Full-Stack Web Application",
    description:
      "A full-stack e-learning platform providing courses and educational content for students from KG1 through secondary school.",
    highlight:
      "Integrated WhatsApp Business Cloud API, Bunny.NET, and Google Cloud to support content delivery and communication.",
    technologies: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "SQL",
      "React / Angular",
    ],
    overview:
      "An e-learning platform covering the full academic range from KG1 through secondary school, handling course content, student progress, and communication.",
    problem:
      "Schools need a way to deliver structured course content online and keep parents and students informed without relying on scattered tools.",
    solution:
      "Developed backend services in ASP.NET Core for course and content management, with WhatsApp Business Cloud API for notifications, Bunny.NET for media delivery, and Google Cloud for infrastructure.",
    architecture: [
      "Frontend (React / Angular)",
      "ASP.NET Core REST API",
      "Business Logic Layer",
      "Repository / Unit of Work",
      "SQL Database",
    ],
    externalServices: ["WhatsApp Business Cloud API", "Bunny.NET", "Google Cloud"],
    github: "",
    liveDemo: "",
    image: "",
  },
  {
    id: 3,
    slug: "ai-meeting",
    number: "03",
    title: "AI Meeting Application",
    category: "Real-Time Application",
    description:
      "An AI meeting application involving real-time communication and notification capabilities.",
    highlight:
      "Implemented WebRTC for real-time communication and SignalR for real-time notifications.",
    technologies: ["ASP.NET Core", "C#", "WebRTC", "SignalR"],
    overview:
      "A real-time meeting application handling live audio/video communication alongside instant in-app notifications.",
    problem:
      "Meeting participants need low-latency communication and to be notified of meeting events (joins, messages, updates) as they happen.",
    solution:
      "Used WebRTC for peer-to-peer real-time communication and SignalR to push live notifications, backed by an ASP.NET Core API for session and meeting management.",
    architecture: [
      "Client (WebRTC)",
      "ASP.NET Core REST API",
      "SignalR Hub (real-time notifications)",
      "Business Logic Layer",
      "Database",
    ],
    externalServices: ["WebRTC", "SignalR"],
    github: "",
    liveDemo: "",
    image: "",
  },
  {
    id: 4,
    slug: "food-ordering",
    number: "04",
    title: "Food Ordering Platform Backend",
    category: "Backend System",
    description:
      "Backend system for an online food ordering platform, handling core ordering workflows and business logic.",
    highlight:
      "Structured with the Repository and Unit of Work patterns for maintainable data access.",
    technologies: [
      "ASP.NET Core",
      "C#",
      "RESTful API",
      "Entity Framework Core",
      "SQL",
      "Repository Pattern",
      "Unit of Work",
    ],
    overview:
      "A backend system powering the core ordering workflow for a food ordering platform — menus, orders, and order state.",
    problem:
      "Ordering platforms need reliable, consistent handling of orders and menu data as they move through multiple states.",
    solution:
      "Built a RESTful API in ASP.NET Core with Entity Framework Core for data access, applying the Repository and Unit of Work patterns to keep business logic and data access cleanly separated.",
    architecture: [
      "ASP.NET Core REST API",
      "Business Logic Layer",
      "Repository / Unit of Work",
      "SQL Database",
    ],
    externalServices: [],
    github: "",
    liveDemo: "",
    image: "",
  },
  {
    id: 5,
    slug: "accounting",
    number: "05",
    title: "Accounting Platform Backend",
    category: "Backend System",
    description:
      "Backend system developed for an accounting-related web application, providing APIs and business logic for the application.",
    highlight: "RESTful APIs and business logic for accounting workflows.",
    technologies: ["ASP.NET Core", "C#", "RESTful API", "Entity Framework Core", "SQL"],
    overview:
      "A backend system providing the APIs and business logic behind an accounting web application.",
    problem:
      "Accounting workflows require accurate, well-structured APIs that other parts of the application can rely on for financial data.",
    solution:
      "Implemented RESTful APIs in ASP.NET Core with Entity Framework Core, encapsulating the business logic needed to support accounting operations.",
    architecture: [
      "ASP.NET Core REST API",
      "Business Logic Layer",
      "Entity Framework Core",
      "SQL Database",
    ],
    externalServices: [],
    github: "",
    liveDemo: "",
    image: "",
  },
];
