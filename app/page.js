import styles from "./page.module.css";

import Hero from "./components/hero/hero";
import About from "./components/about/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
