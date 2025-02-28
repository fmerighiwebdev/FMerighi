import { Button } from "@/once-ui/components";
import { posts } from "./posts";

const person = {
  firstName: "Francesco",
  lastName: "Merighi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Web Developer",
  avatar: "/images/avatar.webp",
  location: "", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Italiano", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Iscriviti alla mia newsletter!</>,
  description: (
    <>
      Occasionalmente mi piace parlare di sviluppo web e nuove tecnologie,
      condividendo riflessioni sull'intersezione tra codice e creatività. <br />
      Resta aggiornato per approfondimenti sui framework moderni, best practices
      di sviluppo e qualche riflessione sul futuro del web.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Telefono",
    icon: "phone",
    link: "tel:+393426476626",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fmerighiwebdev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/francesco-merighi-373939217/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:francescomerighi61@gmail.com",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/fmerighi.dev/",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/fmerighiwebdev",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Web/Software Developer</>,
  subline: (
    <>
      Mi chiamo Francesco Merighi e sono uno{" "}
      <span>Sviluppatore Web e Software</span> con anni di esperienza nella
      progettazione, sviluppo e implementazione di soluzioni digitali
      personalizzate.
    </>
  ),
};

const about = {
  label: "Home",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduzione",
    description: (
      <>
        Mi chiamo Francesco Merighi e sono uno Sviluppatore Web e Software con
        anni di esperienza nella progettazione, sviluppo e implementazione di
        soluzioni digitali personalizzate.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Esperienza Lavorativa",
    experiences: [
      {
        company: "OGP Comunicazione",
        timeframe: "Dic 2024 - Presente",
        role: "Full-Stack Web Developer",
        achievements: [
          <>
            Sviluppo, gestione e manutenzione siti web e piattaforme dei clienti
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/ogp-logo.webp",
            alt: "OGP Logo",
            width: 16,
            height: 9,
          },
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress", "Joomla"],
      },
      {
        company: "IkonArt Academy",
        timeframe: "Nov 2024 - Presente",
        role: "Full-Stack Web Developer",
        achievements: [
          <>
            Sviluppo Software Web TEMPO GIOVANI 2024. <br /> “TEMPO GIOVANI
            2024” è un'iniziativa promossa dal Comune di Arco, volta ad
            incentivare e sostenere la partecipazione ad attività sportive,
            culturali, ricreative-aggregative e formative dei/delle giovani del
            proprio territorio.
            <Button
              href="https://www.tempogiovani.it"
              variant="secondary"
              size="s"
              label="Visita il sito web"
              prefixIcon="openLink"
              className="mt-16"
            />
          </>,
        ],
        images: [
          {
            src: "/images/ikonart-logo.webp",
            alt: "IkonArt Academy Logo",
            width: 16,
            height: 9,
          },
        ],
        skills: [],
      },
      {
        company: "CMG Baldessarelli",
        timeframe: "Dic 2024 - Gen 2025",
        role: "Full-Stack Web Developer",
        achievements: [
          <>
            Sviluppo design, sviluppo sito web, hosting, SEO e PWA per
            l&apos;azienda CMG Baldessarelli di Villa Lagarina (TN).
            <Button
              href="https://www.cmgbaldessarelli.com"
              variant="secondary"
              size="s"
              label="Visita il sito web"
              prefixIcon="openLink"
              className="mt-16"
            />
          </>,
        ],
        images: [
          {
            src: "/images/cmg-logo.webp",
            alt: "CMG Logo",
            width: 16,
            height: 9,
          },
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "Next.js", "React", "SEO"],
      },
      {
        company: "Entropy Search Conscious Corporation",
        timeframe: "Apr 2024 - Giu 2024",
        role: "Full-Stack Web Developer",
        achievements: [
          <>
            Sviluppo design, sviluppo e-commerce shop, hosting, SEO e marketing
            per il brand di abbigliamento "ESC CORPORATION" di Trento (TN).
            <Button
              href="https://www.esccorp.it"
              variant="secondary"
              size="s"
              label="Visita il sito web"
              prefixIcon="openLink"
              className="mt-16"
            />
          </>,
        ],
        images: [
          {
            src: "/images/esc-logo.webp",
            alt: "ESC Logo",
            width: 16,
            height: 9,
          },
        ],
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "PHP",
          "WordPress",
          "SEO",
          "WooCommerce",
        ],
      },
      {
        company: "Moschini ADVCOM",
        timeframe: "Mar 2024 - Mag 2024",
        role: "Full-Stack Web Developer",
        achievements: [
          <>
            Sviluppo in autonomia di un gestionale che comprende la creazione e
            la gestione di interventi (da fare/in corso/completati) e la
            visualizzazione degli eventi associati al Calendario Google
            dell&apos;azienda.
          </>,
        ],
        images: [
          {
            src: "/images/advcom-logo.webp",
            alt: "Moschini ADVCOM Logo",
            width: 16,
            height: 9,
          },
        ],
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React",
          "Node.js",
          "Express.js",
          "PostgreSQL",
        ],
      },
      {
        company: "Ristorante Pizzeria Tre Pini",
        timeframe: "Dic 2023 - Gen 2024",
        role: "Full-Stack Web Developer",
        achievements: [
          <>
            Sviluppo design, sviluppo sito web, hosting, SEO per il Ristorante
            Pizzeria Tre Pini di Rovereto (TN).
            <Button
              href="https://www.ristorante3pini.it"
              variant="secondary"
              size="s"
              label="Visita il sito web"
              prefixIcon="openLink"
              className="mt-16"
            />
          </>,
        ],
        images: [
          {
            src: "/images/tre-pini-logo.webp",
            alt: "Tre Pini Logo",
            width: 16,
            height: 9,
          },
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "Express.js", "SEO"],
      },
      {
        company: "Ristorante Pizzeria Al Teatro",
        timeframe: "Lug 2023 - Ago 2023",
        role: "Full-Stack Web Developer",
        achievements: [
          <>
            Sviluppo design, sviluppo sito web, sistema di booking tavoli,
            hosting, SEO e PWA per il Ristorante Pizzeria Al Teatro di Desenzano
            del Garda (BS).
            <Button
              href="https://www.ristorantealteatro.it"
              variant="secondary"
              size="s"
              label="Visita il sito web"
              prefixIcon="openLink"
              className="mt-16"
            />
          </>,
        ],
        images: [
          {
            src: "/images/al-teatro-logo.webp",
            alt: "Al Teatro Logo",
            width: 16,
            height: 9,
          },
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "Next.js", "React", "SEO"],
      },
      {
        company: "Trilogis SRL",
        timeframe: "Gen 2020 - Feb 2020",
        role: "Junior Web Developer",
        achievements: [
          <>
            Stage: Aiuto nello sviluppo di una Web App utilizzando il framework
            Angular
          </>,
        ],
        images: [
          {
            src: "/images/trilogis-logo.webp",
            alt: "Trilogis Logo",
            width: 16,
            height: 9,
          },
        ],
        skills: [],
      },
    ],
  },
  studies: {
    // set to false to hide this section
    display: true,
    title: "Formazione",
    institutions: [
      {
        name: "University of Verona",
        description: <>Laurea triennale in Scienze e Tecnologie Informatiche</>,
      },
      {
        name: "ITT G.Marconi Rovereto",
        description: <>Diploma in Informatica e Telecomunicazioni</>,
      },
      {
        name: "Autoformazione e Progetti Personali",
        description: (
          <>
            <ul>
              <li style={{ marginBottom: "0" }}>
                Studio avanzato di <strong>tecnologie moderne</strong> e
                sviluppo di progetti full-stack
              </li>
              <li style={{ marginBottom: "0" }}>
                Esperienza pratica con <strong>UI/UX design</strong> e
                ottimizzazione dell'esperienza utente
              </li>
              <li style={{ marginBottom: "0" }}>
                Approfondimento su <strong>SEO</strong> e strategie di content
                marketing
              </li>
              <li style={{ marginBottom: "0" }}>
                Formazione continua tramite{" "}
                <strong>corsi e risorse online</strong>
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "HTML5, CSS3 e JavaScript",
        description: (
          <>
            Sviluppo interfacce moderne e responsive con HTML5, CSS3 e
            JavaScript, garantendo accessibilità e performance ottimali.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "React e Next.js",
        description: (
          <>
            Creazione di siti web e applicazioni web performanti con React e
            Next.js, sfruttando componenti modulari e rendering ottimizzato.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Bootstrap e Tailwind CSS",
        description: (
          <>
            Sviluppo di interfacce accattivanti e responsive utilizzando
            framework CSS moderni per velocizzare il design e lo sviluppo.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Node.js e Express.js",
        description: (
          <>
            Sviluppo di API veloci e scalabili con Node.js e Express.js, ideali
            per applicazioni web e microservizi.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Django e Flask",
        description: (
          <>
            Sviluppo di applicazioni web robuste e scalabili con Python,
            utilizzando Django e/o Flask per API REST e backend performanti.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "PostgreSQL, MySQL e MongoDB",
        description: (
          <>
            Gestione e progettazione di database relazionali e NoSQL per
            applicazioni scalabili, sicure ed efficienti.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "WordPress, Joomla e Shopify",
        description: (
          <>
            Sviluppo e personalizzazione di siti web, blog ed e-commerce con CMS
            avanzati, garantendo flessibilità e facilità di gestione.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "GIT e versioning",
        description: (
          <>
            Controllo delle versioni e collaborazione efficiente con Git,
            garantendo un workflow organizzato e sicuro per lo sviluppo.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Vari linguaggi di programmazione",
        description: (
          <>
            Conoscenza di vari linguaggi di programmazione: Python, PHP, Java, C.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Figma e Photoshop",
        description: (
          <>
            Progettazione UI/UX con Figma e creazione di grafiche professionali
            con Photoshop per un design moderno ed efficace.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const contacts = {
  label: "Contatti",
  title: "Contattami",
  description: (
    <>
      Aperto a nuove collaborazioni, progetti freelance e occasioni
      professionali. <br /> Contattami compilando il modulo o scrivimi via
      email.
    </>
  ),
  form: {
    display: true,
  },
};

const blog = {
  label: "Blog",
  title: "DevMind – Codice, Creatività e Innovazione",
  description:
    "Benvenuto nel mio spazio digitale dedicato a tutto ciò che riguarda il mondo dello sviluppo web! Qui troverai tips, tricks e news su front-end, back-end, UI/UX e nuove tecnologie.",
  posts: posts,
};

export { person, social, newsletter, home, about, contacts, blog };
