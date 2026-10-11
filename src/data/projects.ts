export const projects = [
  {
    title: "Athlete Marketplace",
    link: "",
    description:
      `-> Architected and developed RESTful backend APIs using Node.js, Express.js, and MongoDB for a multi-role sports marketplace supporting Athletes, Coaches, Mentors and Administrators across India and the US.
      -> Built end-to-end booking and session management with slot availability, cancellations, rescheduling, and validation.
      -> Integrated Razorpay and Stripe payment gateways with country-based routing, refunds and payout workflows.
      -> Implemented authentication, RBAC, OTP verification, and social login with MSG91 and Twilio.
      -> Built backend services for marketplace discovery, filtering, ratings, messaging, notifications, report/block features, and admin approval workflows.`,
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Stripe",
      "Razorpay",
      "Socket.IO",
      "Twilio",
      "AWS",
    ],
  },
  {
    title: "Event Broadcasting",
    link: "",
    description:
      `-> Built a real-time live-streaming backend using Node.js, TypeScript, Agora RTC, Socket.IO, and Redis.
      -> Implemented real-time chat, reactions, viewer tracking, and event-based room communication.
      -> Developed Redis-backed viewer sessions and heartbeat tracking with background workers for accurate view counting.
      -> Implemented webhook-based broadcast lifecycle management with automatic stream finalization.
      -> Built personalized event ranking engine using user behavior, engagement, social signals, and decay-weighted scoring.`,
    stack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Agora RTC",
      "AWS",
    ],
  },
  {
    title: "Versitime - Service Discovery Platform",
    link: "https://www.versitime.com",
    description:
      `-> Designed and developed a scalable backend enabling real-time discovery of nearby service providers using MongoDB geospatial queries (within 10 km radius).
      -> Integrated Square APIs to sync business details, services and availability slots with auto refresh in every 15 mins.
      -> Built subscription and payment system using Stripe, supporting freemium onboarding, plan upgrades and renewals.
      -> Optimized media handling using AWS S3 pre-signed URLs for large-scale uploads, reducing backend load by 30%.
      -> Developed analytics engine and dashboard APIs to track key metrics (search impressions, profile views, conversions) with time-based insights.`,
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Square",
      "Stripe",
      "AWS",
      "Unsplash",
    ],
  },
  {
    title: "Cric11 – Fantasy Cricket Web App",
    link: "https://cric11-fantasy.onrender.com/",
    description:
      `-> Built a full-stack fantasy cricket platform allowing users to create teams, select captain/ vice-captain and join paid contests.
      -> Integrated live score updates, Razorpay payment gateway and automated email notifications using Nodemailer.
      -> Deployed a full-stack app (MERN) on AWS via GitHub Actions CI/CD
      -> Created an admin dashboard for match and contest management.`,
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Docker",
      "NodeMailer",
      "JWT"
    ],
  },
  // {
  //   title: "Oshoppe E-Commerce Platform",
  //   link: "https://oshoppe-ecom.onrender.com/",
  //   description:
  //     `-> Developed a full-stack AI-powered web application that enables users to upload PDF or text files and ask questions based on their content.
  //     -> Implemented document parsing and semantic search using Node.js, Express, FAISS and transformer-based models to generate embeddings and retrieve contextually relevant answers.`,
  //   stack: [
  //     "React",
  //     "Tailwind CSS",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Razorpay",
  //     "AWS S3"
  //   ],
  // },
  // {
  //   title: "Chat with Docs ",
  //   link: "https://chatwithdocs-xflo.onrender.com/",
  //   description:
  //     `Developed a full-stack AI-powered web application that enables users to upload PDF or text files and ask questions based on their content.\nImplemented document parsing and semantic search using Node.js, Express, FAISS and transformer-based models to generate embeddings and retrieve contextually relevant answers.`,
  //   stack: [
  //     "React",
  //     "Tailwind CSS",
  //     "Node.js",
  //     "Express.js",
  //     "FAISS",
  //     "transformer-based models"
  //   ],
  // },
];
