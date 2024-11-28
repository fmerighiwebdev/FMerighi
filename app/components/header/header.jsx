import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import fmLogo from "../../../assets/fm-logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Image src={fmLogo} alt="Francesco Merighi" width={70} height={70} />
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
        </nav>
      </div>
    </header>
  );
}
