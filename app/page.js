import styles from "./page.module.css";

import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className={styles.about} id="about">
        <h2>About me</h2>
        <div className="container">
          <p>
            Sviluppatore Web e Software con anni di esperienza nella
            progettazione e realizzazione di soluzioni digitali personalizzate.
            Ho completato con successo numerosi progetti per aziende e privati,
            offrendo competenze tecniche avanzate e un approccio orientato ai
            risultati. Mi specializzo nello sviluppo di siti web, e-commerce e
            applicazioni web, garantendo un design funzionale e un&apos;esperienza
            utente ottimale. Grazie alla mia esperienza in digital marketing e
            SEO, aiuto i clienti a migliorare la loro visibilità online e a
            raggiungere il loro pubblico di riferimento in modo efficace. Sempre
            aggiornato sulle ultime tecnologie, lavoro con passione per
            trasformare le idee in realtà digitali performanti e di valore.
          </p>
        </div>
      </section>
    </main>
  );
}
