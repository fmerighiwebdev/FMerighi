import { Badge, Button, Flex, Text } from "@/once-ui/components";
import { posts } from "./posts";
import Image from "next/image";

const person = {
  firstName: "Francesco",
  lastName: "Merighi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Web Developer",
  avatar: "/images/avatar.webp",
  location: "",
  languages: ["Italiano", "English"],
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
    display: true,
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
        name: "Università degli Studi di Verona",
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
                Approccio proattivo all'apprendimento e allo sviluppo di{" "}
                <strong>progetti web full-stack</strong>, utilizzando tecnologie
                moderne e best practice per migliorare efficienza, scalabilità e
                performance.
              </li>
              <li style={{ marginBottom: "0" }}>
                Creazione di <strong>interfacce intuitive e ottimizzate</strong>{" "}
                per l&apos;utente, con particolare attenzione
                all&apos;accessibilità, al design responsive e
                all&apos;esperienza d&apos;uso, basata su analisi
                comportamentali e dati reali.
              </li>
              <li style={{ marginBottom: "0" }}>
                Approfondimento su strategie avanzate di SEO tecnica,
                copywriting persuasivo e content marketing per{" "}
                <strong>
                  migliorare il posizionamento sui motori di ricerca e
                  massimizzare il traffico organico
                </strong>
                .
              </li>
              <li style={{ marginBottom: "0" }}>
                Applicazione di tecniche di <strong>prompt engineering</strong>{" "}
                avanzate per ottimizzare l&apos;interazione con modelli di
                intelligenza artificiale, migliorando la generazione di
                contenuti, la produttività e l&apos;automazione di processi
                complessi.
              </li>
              <li style={{ marginBottom: "0" }}>
                Sviluppo di <strong>strategie digitali</strong> basate su dati e
                analytics, con focus su funnel di conversione, email marketing e
                ottimizzazione delle performance per il raggiungimento degli
                obiettivi di business.
              </li>
              <li style={{ marginBottom: "0" }}>
                <strong>Studio costante</strong> attraverso corsi,
                documentazione tecnica, community di settore e sperimentazione
                pratica, con focus su innovazione e trend emergenti.
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
        title: "HTML5, CSS3, JavaScript",
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/html5.svg"
                alt="HTML icon"
                width={50}
                height={60}
              />
              <Image
                src="/icons/css3.svg"
                alt="CSS icon"
                width={50}
                height={60}
              />
              <Image src="/icons/js.svg" alt="JS icon" width={60} height={60} />
            </Flex>
        ),
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
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/react.svg"
                alt="React icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/nextjs.svg"
                alt="Next.js icon"
                width={60}
                height={60}
              />
            </Flex>
        ),
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
        title: "Bootstrap e Tailwind",
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/bootstrap.svg"
                alt="Bootstrap icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/tailwind.svg"
                alt="CSS icon"
                width={60}
                height={60}
              />
            </Flex>
        ),
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
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/node.svg"
                alt="Node.js icon"
                width={60}
                height={60}
              />
            </Flex>
        ),
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
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/django.svg"
                alt="Django icon"
                width={60}
                height={60}
              />
            </Flex>
        ),
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
        title: "Database SQL e NoSQL",
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/postgresql.svg"
                alt="PostgreSQL icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/mysql.svg"
                alt="MySQL icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/mongo.svg"
                alt="MongoDB icon"
                width={30}
                height={60}
              />
            </Flex>
        ),
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
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/wp.svg"
                alt="WordPress icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/joomla.svg"
                alt="Joomla icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/shopify.svg"
                alt="JS icon"
                width={60}
                height={60}
              />
            </Flex>
        ),
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
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/git.svg"
                alt="GIT icon"
                width={60}
                height={60}
              />
            </Flex>
        ),
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
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/python.svg"
                alt="Python icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/java.svg"
                alt="Java icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/php.svg"
                alt="PHP icon"
                width={60}
                height={60}
              />
            </Flex>
        ),
        description: (
          <>
            Conoscenza di vari linguaggi di programmazione: Python, PHP, Java,
            C.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Figma e Photoshop",
        header: (
            <Flex gap="16" marginTop="12" marginBottom="12">
              <Image
                src="/icons/figma.svg"
                alt="Figma icon"
                width={60}
                height={60}
              />
              <Image
                src="/icons/photoshop.svg"
                alt="Photoshop icon"
                width={60}
                height={60}
              />
            </Flex>
        ),
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

const work = {
  label: "Lavoro",
  title: "Trasformiamo le Idee in Esperienze Digitali Straordinarie",
  description:
    "Che tu abbia bisogno di un sito web performante, un’app web avanzata o un eCommerce che genera vendite, realizzo soluzioni digitali su misura per coinvolgere e convertire. Design innovativo, funzionalità impeccabile e strategie di digital marketing orientate ai risultati per far crescere il tuo brand.",
  cta: "Vuoi saperne di più? Scopri tutti i nostri servizi nel dettaglio su FM Web Agency e porta il tuo progetto al livello successivo!",
};

export { person, social, newsletter, about, contacts, blog, work };
