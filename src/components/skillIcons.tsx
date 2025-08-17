import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaStripe,
  FaCode,
  FaDocker

} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiWebpack,
  SiExpress,
  SiMongodb,
  SiJira,
  SiSocketdotio,
  SiTailwindcss,
  SiRedis,
  SiRazorpay,
  SiPostman,
  SiMysql
} from "react-icons/si";
import { MdHttp } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import { HiOutlineServer } from "react-icons/hi";
import { JSX } from "react";

const skillIcons: Record<string, JSX.Element> = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  Javascript: <FaJs />,
  "React.js": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Redux Toolkit": <SiRedux />,
  TypeScript: <SiTypescript />,
  Sass: <FaSass />,
  Webpack: <SiWebpack />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  "REST APIs": <MdHttp />,
  Amplify: <FaAws />,
  S3: <FaAws />,
  CloudFront: <FaAws />,
  ECS: <FaAws />,
  Route53: <FaAws />,
  "GitHub Actions": <FaGithub />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  "VS Code": <FaCode />,
  Jira: <SiJira />,
  OAuth: <BsFillLockFill />,
  Stripe: <FaStripe />,
  "CI/CD": <HiOutlineServer />,
  "Socket.io": <SiSocketdotio />,
  "Docker": <FaDocker />,
  "Redis": <SiRedis />,
  "Razorpay": <SiRazorpay />,
  "Postman": <SiPostman />,
  "MySQL": <SiMysql />,
  "AWS S3": <FaAws />,
  "AWS EC2": <FaAws />,
  "AWS IAM": <FaAws />,
};

export default skillIcons;
