"use client"

import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import fmLogo from "../../../assets/fm-logo.svg";
import { useEffect, useState } from "react";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header
      className={
        isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header
      }
    >
      <div className="container">
        <nav className={styles.nav}>
          <Image
            src={fmLogo}
            alt="Francesco Merighi - Sviluppatore Web a Rovereto (TN)"
          />
          <ul className={styles.navList}>
            <li>
              <Link href="#about">About Me</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#services">Servizi</Link>
            </li>
            <li>
              <Link href="#contact">Contatti</Link>
            </li>
          </ul>
          <div className={styles.hamburgerMenu}>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
