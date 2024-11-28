import Image from "next/image";

import styles from "./page.module.css";
import fmLogo from "../assets/fm-logo.svg";

export default function Home() {
  return (
    <main>
      <Image src={fmLogo} alt="FMerighi Logo" width={125} height={125} />
      <h1>FMERIGHI - IN AGGIORNAMENTO...</h1>
      <p>
        Sviluppatore Web e Software a Rovereto (TN). Esperto in sviluppo di siti
        web, applicazioni web e soluzioni digitali personalizzate per aziende e
        startup.
      </p>
    </main>
  );
}
