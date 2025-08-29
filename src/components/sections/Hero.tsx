"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "H",
    "i",
    " ",
    "I",
    "'",
    "m",
    " ",
    "A",
    "n",
    "k",
    "i",
    "t",
    " ",
    "M",
    "i",
    "t",
    "t",
    "a",
    "l",
  ];

  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 space-y-6 overflow-hidden sm:snap-start"
      id="hero"
    >
      {/* Title */}
      <div className="text-center mt-20 text-3xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          >
            {word === " " ? "\u00A0" : word}{" "}
            {/* Non-breaking space for empty string */}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
      >
        Full-stack developer with strong problem-solving skills, <span className="font-semibold text-foreground">500+ LeetCode</span>{" "}challenges solved, and hands-on experience in <span className="font-semibold text-foreground">React.js</span>,{" "} <span className="font-semibold text-foreground">TypeScript</span>,{" "} <span className="font-semibold text-foreground">Node.js</span>,{" "} <span className="font-semibold text-foreground">Express</span>{" "} and <span className="font-semibold text-foreground">MongoDB</span>. I build scalable, user-friendly applications with clean and efficient code.{" "}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mt-4"
      >
        <Button variant="outline" asChild>
          <a
            href="mailto:ankitmittal0814@gmail.com"
            className="flex items-center gap-2"
          >
            <HiOutlineMail className="w-4 h-4" />
            Contact
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://github.com/ankitmittal4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://linkedin.com/in/ankit305"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://leetcode.com/u/ankitmittal0814/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <SiLeetcode className="w-4 h-4" />
            LeetCode
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://www.hackerrank.com/profile/ankitmittal0814"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <SiHackerrank className="w-4 h-4" />
            HackerRank
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
