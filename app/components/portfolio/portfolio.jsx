import styles from "./portfolio.module.css";

import { works, personalPrjs } from "@/lib/portfolio";

import rarrIcon from "@/assets/rarr.svg";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <h2 className={styles.sectionTitle}>Lavori e progetti</h2>
      <div className="container">
        <div className={`mb-5 ${styles.portfolioHeading}`}>
          <h3 className={`${styles.sectionSubtitle}`}>Esperienza Lavorativa</h3>
          <a href="/CV.pdf" download>
            Download CV
          </a>
        </div>
        <div className={`row w-100 ${styles.portfolioColumns}`}>
          {works.map((work, index) => (
            <div key={index} className={`col-12 col-md-6 ${styles.workCard}`}>
              <div className={styles.workContent}>
                <h3>{work.title}</h3>
                <p className={styles.workDate}>{work.date}</p>
                <p className={styles.workType}>{work.type}</p>
                <p className={styles.workDescription}>{work.description}</p>
                <ul className={styles.techList}>
                  {work.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.workLink}
                  >
                    Visita il sito
                    <Image
                      src={rarrIcon}
                      alt="Freccia"
                      width={20}
                      height={20}
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={`mb-5 mt-5 ${styles.portfolioHeading}`}>
          <h3 className={`${styles.sectionSubtitle}`}>Progetti Personali</h3>
          <a href="https://github.com/fmerighiwebdev" target="_blank">
            GitHub
          </a>
        </div>
        <div className={`row w-100 ${styles.portfolioColumns}`}>
          {personalPrjs.map((prj, index) => (
            <div key={index} className={`col-12 col-md-6 ${styles.workCard}`}>
              <div className={styles.workContent}>
                <h3>{prj.title}</h3>
                <p className={styles.workDate}>{prj.date}</p>
                <p className={styles.workType}>{prj.type}</p>
                <p className={styles.workDescription}>{prj.description}</p>
                <ul className={styles.techList}>
                  {prj.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <a
                  href={prj.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.workLink}
                >
                  Visita il sito
                  <Image src={rarrIcon} alt="Freccia" width={20} height={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
