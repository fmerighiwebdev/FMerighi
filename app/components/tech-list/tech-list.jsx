"use client";

import styles from "./tech-list.module.css";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import htmlIcon from "../../../assets/html.svg";
import cssIcon from "../../../assets/css.svg";
import jsIcon from "../../../assets/javascript.svg";
import nextIcon from "../../../assets/nextjs.svg";
import reactIcon from "../../../assets/react.svg";
import expressIcon from "../../../assets/express.svg";
import nodeIcon from "../../../assets/nodejs.svg";
import djangoIcon from "../../../assets/django.svg";
import mongodbIcon from "../../../assets/mongo.svg";
import mysqlIcon from "../../../assets/mysql.svg";
import postgresqlIcon from "../../../assets/postgresql.svg";
import gitIcon from "../../../assets/git.svg";
import javaIcon from "../../../assets/java.svg";
import pythonIcon from "../../../assets/python.svg";
import phpIcon from "../../../assets/php.svg";
import bootstrapIcon from "../../../assets/bootstrap.svg";
import tailwindIcon from "../../../assets/tailwind.svg";
import jqueryIcon from "../../../assets/jquery.svg";
import wordpressIcon from "../../../assets/wordpress.svg";
import woocommerceIcon from "../../../assets/woocommerce.svg";
import shopifyIcon from "../../../assets/shopify.svg";
import figmaIcon from "../../../assets/figma.svg";
import photoshopIcon from "../../../assets/photoshop.svg";

export default function TechList() {
  const techStack = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Next.js", icon: nextIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "jQuery", icon: jqueryIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express", icon: expressIcon },
    { name: "Django", icon: djangoIcon },
    { name: "PHP", icon: phpIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "PostgreSQL", icon: postgresqlIcon },
    { name: "Git", icon: gitIcon },
    { name: "WordPress", icon: wordpressIcon },
    { name: "WooCommerce", icon: woocommerceIcon },
    { name: "Shopify", icon: shopifyIcon },
    { name: "Java", icon: javaIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Photoshop", icon: photoshopIcon },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <ul className={styles.techList}>
      {techStack.map((tech, index) => (
        <li
          key={index}
          className={styles.techItem}
          onMouseOver={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image src={tech.icon} alt={tech.name} />
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                className={styles.itemOverlay}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 1 }}
              >
                <span>{tech.name}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
