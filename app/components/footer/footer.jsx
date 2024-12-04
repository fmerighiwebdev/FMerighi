import Image from "next/image";
import styles from "./footer.module.css";

import fmLogo from "@/assets/fm-logo.svg";
import Link from "next/link";

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div
          className={`row align-items-center justify-center ${styles.footerColumns} gap-5 gap-md-0`}
        >
          <div className="col-12 col-md-4">
            <p>Via III Novembre, 6</p>
            <p>38060, Nogaredo (TN)</p>
            <p>
              <strong>P.IVA: 02721170229</strong>
            </p>
          </div>
          <div className="col-12 col-md-4">
            <Image src={fmLogo} alt="FMerighi Logo" width={40} height={40} />
            <p>&copy; {currentYear} Francesco Merighi</p>
          </div>
          <div className="col-12 col-md-4">
            <Link href="/privacy-cookie-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
