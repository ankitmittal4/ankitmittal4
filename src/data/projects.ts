export const projects = [
  {
    title: "Besti.AI",
    link: "https://dev-web.bestiai.ai",
    description:
      `-> A comprehensive AI-powered clinical support platform for licensed estheticians.
      -> Designed and implemented RESTful APIs for user authentication, subscription management, and client/studio(owners, users) operations.
      -> Integrated OpenAI GPT models to generate personalized skincare regimens and structured treatment protocols dynamically based on user prompts and product inventory.
      -> Integrated Stripe for plan-based subscription billing, renewals, cancellations, and trial management.`,
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI GPT",
      "Stripe",
      "Docker",
      "NodeMailer",
      "Firebase",
      "AWS",
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
  {
    title: "Clean Neighbourhood",
    link: "",
    description:
      `-> A community-focused app that enables students and residents to log litter cleanup activities, upload proof, and track service hours, with an admin panel for verifying submissions and managing users. 
      -> Integrated Firebase notifications for real-time updates and Twilio OTP for secure sign-in.
      -> Developed admin panel APIs for reviewing submissions, verifying service hours, and managing user data.`,
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Postman",
      "AWS",
      "Firebase",
      "Nodemailer",
      "Twilio",
    ],
  },
  {
    title: "Oshoppe E-Commerce Platform",
    link: "https://oshoppe-ecom.onrender.com/",
    description:
      `-> Developed a full-stack AI-powered web application that enables users to upload PDF or text files and ask questions based on their content.
      -> Implemented document parsing and semantic search using Node.js, Express, FAISS and transformer-based models to generate embeddings and retrieve contextually relevant answers.`,
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "AWS S3"
    ],
  },
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
