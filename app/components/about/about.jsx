import styles from "./about.module.css";

import Image from "next/image";

import codeIcon from "@/assets/code.svg";
import handshakeIcon from "@/assets/handshake.svg";
import starIcon from "@/assets/star.svg";
import bullsEyeIcon from "@/assets/bullseye.svg";
import TechList from "../tech-list/tech-list";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.sectionTitle}>About me</h2>
      <div className="container">
        <p className={styles.aboutIntroText}>
          Mi chiamo Francesco Merighi, vivo a Rovereto (TN) e sono uno{" "}
          <span>Sviluppatore Web e Software</span> con anni di esperienza nella
          progettazione, sviluppo e implementazione di soluzioni digitali
          personalizzate. <br></br> Il mio percorso professionale mi ha portato
          a collaborare su una vasta gamma di progetti per aziende, startup e
          privati, aiutandoli a trasformare idee in realtà digitali efficaci e
          performanti.
        </p>
        <div className={styles.aboutContent}>
          <div className="row w-100 gap-5 gap-md-0">
            <div className={`col-12 col-md-6 ${styles.aboutCard}`}>
              <h3>Competenze Tecniche</h3>
              <p>Mi specializzo nello sviluppo di: </p>
              <ul className={styles.aboutList}>
                <li>
                  <span>Siti Web professionali</span>, progettati per combinare
                  design moderno e funzionalità avanzate.
                </li>
                <li>
                  <span>eCommerce</span>, ottimizzati per migliorare
                  l&apos;esperienza di acquisto e aumentare le conversioni.
                </li>
                <li>
                  <span>Applicazioni web e mobile</span>, scalabili e pensate per
                  rispondere a esigenze specifiche.
                </li>
              </ul>
              <p>
                Nel corso degli anni, ho acquisito una solida padronanza di
                tecnologie e framework sia <span>back-end</span> che{" "}
                <span>front-end</span>, e di strumenti per il controllo di
                versioni come Git. Sono sempre aggiornato sulle ultime tendenze
                tecnologiche per offrire soluzioni moderne e competitive.
              </p>
            </div>
            <div className={`col-12 col-md-6 ${styles.aboutImage}`}>
              <div>
                <Image src={codeIcon} alt="Code Icon" />
              </div>
            </div>
          </div>
          <div className="row w-100 gap-5 gap-md-0">
            <div
              className={`col-12 col-md-6 ${styles.aboutCard} ${styles.inverse}`}
            >
              <h3>Approccio al Lavoro</h3>
              <p>
                Credo che il successo di un progetto dipenda da una combinazione
                di tecnica, collaborazione e comunicazione chiara. Mi impegno a:
              </p>
              <ul className={styles.aboutList}>
                <li>
                  Offrire <span>codice di alta qualità</span>, leggibile e
                  manutenibile.
                </li>
                <li>
                  <span>Collaborare efficacemente</span> con team
                  multidisciplinari, rispettando scadenze e obiettivi.
                </li>
                <li>
                  <span>Adattarmi rapidamente</span> a nuove sfide e ambienti
                  lavorativi, grazie alla mia flessibilità e curiosità
                  professionale.
                </li>
              </ul>
            </div>
            <div className={`col-12 col-md-6 ${styles.aboutImage}`}>
              <div>
                <Image src={handshakeIcon} alt="Code Icon" />
              </div>
            </div>
          </div>
          <div className="row w-100 gap-5 gap-md-0">
            <div className={`col-12 col-md-6 ${styles.aboutCard}`}>
              <h3>Esperienza e Valore Aggiunto</h3>
              <p>
                La mia esperienza include progetti che spaziano dalla creazione
                di piccoli siti web per startup a piattaforme complesse per
                aziende consolidate. Questi progetti mi hanno permesso di:
              </p>
              <ul className={styles.aboutList}>
                <li>
                  Sviluppare un occhio critico per il <span>design</span>{" "}
                  orientato all&apos;utente e la funzionalità.
                </li>
                <li>
                  Comprendere le esigenze di business e tradurle in{" "}
                  <span>soluzioni tecnologiche efficaci</span>.
                </li>
                <li>
                  Accrescere competenze in <span>SEO e marketing digitale</span>
                  , con strategie utilizzate per ottimizzare la visibilità e il
                  successo online dei progetti a cui collaboro.
                </li>
              </ul>
            </div>
            <div className={`col-12 col-md-6 ${styles.aboutImage}`}>
              <div>
                <Image src={starIcon} alt="Code Icon" />
              </div>
            </div>
          </div>

          <div className="row w-100 gap-5 gap-md-0">
            <div
              className={`col-12 col-md-6 ${styles.aboutCard} ${styles.inverse}`}
            >
              <h3>Cosa Cerco</h3>
              <p>
                Sono alla ricerca di opportunità per unirmi a{" "}
                <span>team dinamici e innovativi</span>, dove possa contribuire
                con la mia esperienza e crescere ulteriormente come
                professionista. Sono motivato a lavorare su progetti che abbiano
                un <span>impatto reale</span> e che mi permettano di continuare
                ad imparare e perfezionarmi.
              </p>
              <p>
                Se sei un&apos;azienda o un team che cerca uno Sviluppatore Web
                affidabile, flessibile e orientato ai risultati, sarei felice di
                discutere su come possiamo collaborare.
              </p>
            </div>
            <div className={`col-12 col-md-6 ${styles.aboutImage}`}>
              <div>
                <Image src={bullsEyeIcon} alt="Code Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutTech}>
          <h3>Tecnologie e Linguaggi di Sviluppo</h3>
          <TechList />
        </div>
      </div>
    </section>
  );
}
