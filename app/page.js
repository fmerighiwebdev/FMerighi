import styles from "./page.module.css";

import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import { Services } from "./components/services/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Services />
    </main>
  );
}
