import styles from "./services.module.css";

import cartIcon from "@/assets/cart.svg";
import webIcon from "@/assets/website.svg";
import appIcon from "@/assets/app.svg";

import Link from "next/link";
import Image from "next/image";

export function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.sectionTitle}>Servizi</h2>
      <div className="container">
        <h3>
          Hai bisogno di un sito web professionale, un&apos;applicazione web
          innovativa o un eCommerce su misura?
        </h3>
        <div className={`row ${styles.servicesColumns} gap-4 gap-md-0`}>
          <div className="col-12 col-md-4">
            <div className={styles.serviceHeading}>
              <Image src={webIcon} alt="Web Development" />
              <h4>Sviluppo Siti Web</h4>
            </div>
            <p>
              Crea una presenza online unica e accattivante con siti veloci,
              moderni e ottimizzati.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.serviceHeading}>
              <Image src={appIcon} alt="Web App Development" />
              <h4>Sviluppo Web App</h4>
            </div>
            <p>
              Dai vita a soluzioni su misura per semplificare i processi e
              coinvolgere gli utenti.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.serviceHeading}>
              <Image src={cartIcon} alt="eCommerce Development" />
              <h4>Sviluppo eCommerce</h4>
            </div>
            <p>
              Costruisci il tuo negozio online per vendere ovunque, con una
              piattaforma sicura e facile da gestire.
            </p>
          </div>
        </div>
        <a href="https://fmwebagency.it/contatti" className={styles.ctaButton}>
          Compila il form
        </a>
        <p className="text-center mt-1 mb-0">
          oppure contattami ai recapiti che trovi{" "}
          <Link href="#contatti">qui</Link>
        </p>
      </div>
    </section>
  );
}
