import React from "react";
import Link from "next/link";
import { Line } from "@/once-ui/components/Line";
import { Flex, Heading, Icon, Text } from "@/once-ui/components";
import { CodeBlock } from "@/once-ui/modules";

const Description = ({ children }) => (
  <Text variant="body-default-m">{children}</Text>
);

const List = ({ title, description, children }) => (
  <>
    {title && <Heading as="h3">{title}</Heading>}
    {description && <Description>{description}</Description>}
    <ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>{children}</ul>
  </>
);

const ListItem = ({ children }) => (
  <li style={{ margin: 0, padding: 0 }}>
    <Flex gap="8" horizontal="start">
      <Icon name="chevronRight" size="s" />
      <Text variant="body-default-m">{children}</Text>
    </Flex>
  </li>
);

export const posts = [
  {
    title: "Ottimizzazione delle performance con Lazy Loading e Code Splitting",
    short_description:
      "Le prestazioni di un sito web o di un’applicazione sono cruciali per garantire un'esperienza utente fluida e reattiva. Scopri come utilizzare Lazy Loading e Code Splitting per ottimizzare le performance del tuo progetto.",
    date: "Mar 02, 2025",
    content: (
      <>
        {/* OGNI SEZIONE è SEPARATA DA 32 PX di GAP */}
        <Description>
          Le prestazioni di un sito web o di un&apos;applicazione sono cruciali
          per garantire un'esperienza utente fluida e reattiva. Due tecniche
          fondamentali per migliorare il caricamento delle pagine e ridurre il
          consumo di risorse sono <strong>Lazy Loading</strong> e{" "}
          <strong>Code Splitting</strong>. In questo articolo, esploreremo come
          funzionano e come implementarli efficacemente nei tuoi progetti.
        </Description>
        <Line background="neutral-alpha-strong" />
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Lazy Loading: Caricare solo quando necessario
          </Heading>
          <Description>
            Il <strong>Lazy Loading</strong> (caricamento pigro) è una tecnica
            che permette di caricare elementi di una pagina solo quando sono
            necessari. Questo è particolarmente utile per immagini, video e
            componenti JavaScript pesanti.
          </Description>
          <List title="Vantaggi del Lazy Loading">
            <ListItem>
              <strong>Migliora il tempo di caricamento iniziale</strong>{" "}
              riducendo il numero di risorse caricate.
            </ListItem>
            <ListItem>
              <strong>Ottimizza l&apos;uso della banda</strong> evitando di
              scaricare contenuti non visualizzati.
            </ListItem>
            <ListItem>
              <strong>Aumenta le performance e la SEO</strong> riducendo il
              tempo di rendering della pagina.
            </ListItem>
          </List>
          <Heading as="h3">Implementare il Lazy Loading</Heading>
          <Heading as="h4">📷 Lazy Loading delle immagini</Heading>
          <Description>
            L&apos;HTML moderno supporta nativamente il Lazy Loading con
            l&apos;attributo loading:
          </Description>
          <CodeBlock
            codeInstances={[
              {
                code: "<img src='immagine.jpg' alt='Esempio' loading='lazy' />",
                label: "HTML",
                language: "html",
              },
            ]}
          />
          <Heading as="h4">
            🏗️ Lazy Loading dei componenti in React/Next.js
          </Heading>
          <Description>
            Se utilizzi <strong>React</strong>, puoi sfruttare la funzione
            React.lazy() per il caricamento dinamico dei componenti:
          </Description>
          <CodeBlock
            codeInstances={[
              {
                code: "import React, { Suspense, lazy } from 'react';\n\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Caricamento...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}",
                label: "React",
                language: "jsx",
              },
            ]}
          />
          <Description>
            In <strong>Next.js</strong> supporto al Lazy Loading è nativo grazie
            alla funzione next/dynamic:
          </Description>
          <CodeBlock
            codeInstances={[
              {
                code: "import dynamic from 'next/dynamic';\n\nconst DynamicComponent = dynamic(() => import('../components/DynamicComponent'));\n\nexport default function Page() {\n  return <DynamicComponent />;\n}",
                label: "Next.js",
                language: "jsx",
              },
            ]}
          />
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Code Splitting: Dividere per ottimizzare
          </Heading>
          <Description>
            Il <strong>Code Splitting</strong> (divisione del codice) è una
            tecnica che permette di suddividere il codice JavaScript in più
            parti, caricando solo ciò che è necessario per una determinata
            pagina o funzionalità.
          </Description>
          <List title="Vantaggi del code splitting:">
            <ListItem>
              <strong>Riduce il tempo di caricamento iniziale</strong> caricando
              solo il codice strettamente necessario.
            </ListItem>
            <ListItem>
              <strong>Migliora la gestione della cache</strong> evitando di
              dover ricaricare l&apos;intero bundle ad ogni aggiornamento.
            </ListItem>
            <ListItem>
              <strong>
                Evita il problema dei file JavaScript troppo pesanti
              </strong>{" "}
              migliorando l&apos;esperienza utente.
            </ListItem>
          </List>
          <Heading as="h3">Implementare il Code Splitting</Heading>
          <Heading as="h4">📌 Code Splitting con Webpack</Heading>
          <Description>
            Webpack supporta il Code Splitting utilizzando import() per il
            caricamento dinamico:
          </Description>
          <CodeBlock
            codeInstances={[
              {
                code: "function loadModule() {\n  import('./module').then((module) => {\n    module.default();\n  });\n}",
                label: "JS",
                language: "jsx",
              },
            ]}
          />
          <Heading as="h4">⚡ Code Splitting in Next.js</Heading>
          <Description>
            In <strong>Next.js</strong>, ogni pagina viene caricata solo quando
            necessaria. Tuttavia, è possibile ottimizzare ulteriormente
            dividendo il codice dei componenti:
          </Description>
          <CodeBlock
            codeInstances={[
              {
                code: "import dynamic from 'next/dynamic';\n\nconst HeavyComponent = dynamic(() => import('../components/HeavyComponent'), { ssr: false });",
                label: "JS",
                language: "jsx",
              },
            ]}
          />
          <Description>
            Inoltre, Next.js permette di dividere il codice anche a livello di
            routing, caricando le pagine solo quando l&apos;utente le visita.
          </Description>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Conclusione
          </Heading>
          <Description>
            L&apos;uso combinato di <strong>Lazy Loading</strong> e{" "}
            <strong>Code Splitting</strong> può migliorare significativamente le
            prestazioni del tuo sito o applicazione web. Implementare queste
            tecniche riduce il tempo di caricamento, ottimizza l&apos;uso delle
            risorse e migliora l&apos;esperienza utente. Se stai sviluppando con{" "}
            <strong>Next.js</strong>, queste funzionalità sono già integrate e
            semplici da adottare!
          </Description>
        </Flex>
      </>
    ),
    link: "/blog/lazy-loading-e-code-splitting",
    slug: "lazy-loading-e-code-splitting",
    images: ["/images/blog/lazy-loading-e-code-splitting.webp"],
  },
  {
    title: "UI/UX nel 2025: Le nuove tendenze che devi conoscere",
    short_description:
      "L’evoluzione del design UI/UX è inarrestabile e nel 2025 vedremo nuove tendenze che ridefiniranno l’esperienza utente sul web e nelle app.",
    date: "Mar 01, 2025",
    content: (
      <>
        {/* OGNI SEZIONE è SEPARATA DA 32 PX di GAP */}
        <Description>
          L&apos;evoluzione del design UI/UX è inarrestabile e nel 2025 vedremo
          nuove tendenze che ridefiniranno l&apos;esperienza utente sul web e
          nelle app. Con l&apos;avanzamento dell&apos;intelligenza artificiale,
          il minimalismo funzionale e la crescente importanza
          dell&apos;accessibilità, è essenziale per i designer e sviluppatori
          rimanere aggiornati. Vediamo insieme le principali novità!
        </Description>
        <Line background="neutral-alpha-strong" />
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            AI-Driven UX: Personalizzazione Intelligente
          </Heading>
          <Description>
            L&apos;<strong>intelligenza artificiale</strong> avrà un ruolo
            sempre più centrale nella progettazione UX. Gli algoritmi saranno in
            grado di adattare le interfacce in tempo reale in base alle
            abitudini e preferenze degli utenti, offrendo un&apos;esperienza
            sempre più personalizzata.
          </Description>
          <List title="Alcuni esempi:">
            <ListItem>
              Suggerimenti automatici basati sul comportamento dell&apos;utente.
            </ListItem>
            <ListItem>
              UI che si adatta dinamicamente alle esigenze di accessibilità.
            </ListItem>
            <ListItem>
              Interfacce conversazionali con chatbot avanzati.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Modalità Scura e Temi Dinamici
          </Heading>
          <Description>
            La dark mode è ormai uno standard, ma nel 2025 vedremo temi ancora
            più personalizzabili. I siti e le app permetteranno agli utenti di
            scegliere tra più schemi di colori adattivi, migliorando il comfort
            visivo e il coinvolgimento.
          </Description>
          <List title="Alcuni esempi:">
            <ListItem>
              Modalità notturna con toni caldi per ridurre l&apos;affaticamento
              degli occhi.
            </ListItem>
            <ListItem>
              Palette cromatiche personalizzabili dall&apos;utente.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Mobile-First e Design Fluidi
          </Heading>
          <Description>
            Con l&apos;aumento dell&apos;uso mobile, le interfacce saranno
            sempre più
            <strong>mobile-first</strong>, con <strong>design fluidi</strong>{" "}
            che si adattano in modo perfetto a qualsiasi dispositivo. Il
            concetto di <strong>adaptive design</strong> supererà il
            tradizionale responsive design, rendendo l&apos;esperienza utente
            ancora più fluida.
          </Description>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Microinterazioni e Animazioni Avanzate
          </Heading>
          <Description>
            Le <strong>microinterazioni</strong> rendono l&apos;esperienza
            utente più intuitiva e coinvolgente. Nel 2025, queste diventeranno
            più sofisticate, utilizzando animazioni avanzate per migliorare la
            navigazione e il feedback visivo.
          </Description>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Design senza Interfaccia (UI-less Design)
          </Heading>
          <Description>
            L&apos;interazione vocale, la realtà aumentata e i dispositivi
            indossabili stanno portando a un futuro in cui la UI visibile sarà
            sempre meno centrale. Gli utenti potranno interagire con le
            piattaforme senza bisogno di schermi tradizionali.
          </Description>
          <List title="Alcuni esempi:">
            <ListItem>
              Assistenti vocali avanzati per la navigazione web.
            </ListItem>
            <ListItem>Interfacce basate su gesti (gesture-based UI).</ListItem>
            <ListItem>
              Esperienze AR/VR per l&apos;interazione senza touch.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Accessibilità e Inclusività Prioritarie
          </Heading>
          <Description>
            Nel 2025, l&apos;accessibilità non sarà più un'opzione, ma un must.
            Le normative si faranno più stringenti e le interfacce dovranno
            garantire un&apos;esperienza ottimale per tutti, incluse persone con
            disabilità.
          </Description>
          <List title="Alcuni esempi:">
            <ListItem>Migliore contrasto e leggibilità.</ListItem>
            <ListItem>Controlli vocali e navigazione alternativa.</ListItem>
            <ListItem>Compatibilità con screen reader avanzati.</ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Conclusione
          </Heading>
          <Description>
            Le interfacce utente del 2025 saranno più intelligenti, fluide e
            accessibili. L&apos;AI, la personalizzazione e le microinterazioni
            miglioreranno il modo in cui gli utenti navigano il web, mentre il
            design mobile-first e la riduzione delle interfacce visibili
            ridefiniranno l&apos;interazione digitale.
          </Description>
        </Flex>
      </>
    ),
    link: "/blog/tendenze-uiux-2025",
    slug: "tendenze-uiux-2025",
    images: ["/images/blog/tendenze-uiux-2025.webp"],
  },
  {
    title: "React vs. Next.js: Quale scegliere per il tuo prossimo progetto?",
    short_description:
      "Entrambe le tecnologie sono potenti e offrono vantaggi significativi, ma quale è la scelta giusta per il tuo progetto?",
    date: "Feb 28, 2025",
    content: (
      <>
        {/* OGNI SEZIONE è SEPARATA DA 32 PX di GAP */}
        <Description>
          Nel mondo dello sviluppo web, la scelta tra <strong>Next.js</strong> e{" "}
          <strong>React</strong> è una delle decisioni più importanti per un
          Full-Stack Developer. Entrambe le tecnologie sono potenti e offrono
          vantaggi significativi, ma quale è la scelta giusta per il tuo
          progetto? In questo articolo, analizzeremo i punti di forza e di
          debolezza di entrambi per aiutarti a decidere.
        </Description>
        <Line background="neutral-alpha-strong" />
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Cos&apos;è React?
          </Heading>
          <Description>
            React è una <strong>libreria JavaScript</strong> sviluppata da
            Facebook per la creazione di interfacce utente dinamiche e
            component-based. È una delle tecnologie più popolari per il
            frontend, grazie alla sua flessibilità, alla vasta community e
            all&apos;ecosistema di strumenti e librerie che lo supportano.
          </Description>
          <List title="Vantaggi di React:">
            <ListItem>
              <strong>Flessibilità</strong>: Puoi usarlo per qualsiasi tipo di
              progetto, dai piccoli siti web alle grandi applicazioni.
            </ListItem>
            <ListItem>
              <strong>Component-based</strong>: La struttura modulare di React
              rende il codice più riutilizzabile e manutenibile.
            </ListItem>
            <ListItem>
              <strong>Ampio ecosistema</strong>: Grazie a librerie come Redux,
              React Query e Styled Components, puoi estendere facilmente le
              funzionalità del tuo preogetto.
            </ListItem>
            <ListItem>
              <strong>Grande community</strong>: Documentazione dettagliata e
              tantissimi tutorial disponibili.
            </ListItem>
            <ListItem>
              <strong>React Native</strong>: Se hai in mente un&apos;app mobile,
              puoi riutilizzare parte del codice con React Native.
            </ListItem>
          </List>
          <List title="Svantaggi di React:">
            <ListItem>
              <strong>Rendering lato client</strong>: React gestisce il
              rendering principalmente sul client, il che può influire sulle
              performance SEO.
            </ListItem>
            <ListItem>
              <strong>Configurazione</strong>: Per progetti più complessi,
              potrebbe essere necessario impostare Webpack, Babel e SSR
              manualmente.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Cos&apos;è Next.js?
          </Heading>
          <Description>
            Next.js è un <strong>framework basato su React</strong>, sviluppato
            da Vercel, che aggiunge funzionalità avanzate come il Server-Side
            Rendering (SSR), lo Static Site Generation (SSG) e il supporto API
            out-of-the-box. È la scelta ideale per chi vuole migliorare SEO,
            performance e scalabilità senza dover configurare tutto manualmente.
          </Description>
          <List title="Vantaggi di Next.js:">
            <ListItem>
              <strong>SEO-Friendly</strong>: Grazie al supporto per SSR e SSG,
              le pagine possono essere indicizzate meglio rispetto a un&apos;app
              React tradizionale.
            </ListItem>
            <ListItem>
              <strong>Performance migliorate</strong>: Next.js ottimizza le
              risorse automaticamente con il code-splitting e il pre-rendering.
            </ListItem>
            <ListItem>
              <strong>Routing integrato</strong>: Non serve usare React Router,
              il routing basato su file rende lo sviluppo più rapido.
            </ListItem>
            <ListItem>
              <strong>API Routes</strong>: Puoi creare API direttamente
              all&apos;interno della tua app, senza bisogno di un backend
              separato.
            </ListItem>
          </List>
          <List title="Svantaggi di Next.js:">
            <ListItem>
              <strong>Maggiore complessità iniziale</strong>: Richiede una curva
              di apprendimento leggermente più ripida rispetto a React puro.
            </ListItem>
            <ListItem>
              <strong>Hosting</strong>: Non tutti gli hosting supportano SSR
              nativamente, anche se servizi come Vercel rendono la distribuzione
              più semplice.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Quando scegliere React?
          </Heading>
          <List>
            <ListItem>
              Se stai costruendo una{" "}
              <strong>Single Page Application (SPA)</strong> con molte
              interazioni utente.
            </ListItem>
            <ListItem>
              Se la SEO non è una priorità, come in un&apos;app interna o un
              pannello di amministrazione.
            </ListItem>
            <ListItem>
              Se vuoi avere il massimo controllo sulla configurazione del
              progetto.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Quando scegliere Next.js?
          </Heading>
          <List>
            <ListItem>
              Se il tuo sito ha bisogno di un&apos;ottima SEO, come un blog o un
              e-commerce.
            </ListItem>
            <ListItem>
              Se vuoi ottimizzare le performance con il pre-rendering.
            </ListItem>
            <ListItem>
              Se hai bisogno di API integrate e di un&apos;app scalabile sin
              dall&apos;inizio.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Conclusione
          </Heading>
          <Description>
            Se hai bisogno di una soluzione rapida, performante e SEO-friendly,{" "}
            <strong>Next.js è la scelta vincente</strong>. Se invece preferisci
            massima flessibilità e hai già un'infrastruttura che supporta il
            client-side rendering,{" "}
            <strong>React puro potrebbe essere sufficiente</strong>.
          </Description>
        </Flex>
      </>
    ),
    link: "/blog/nextjs-vs-react",
    slug: "nextjs-vs-react",
    images: ["/images/blog/react-vs-nextjs.webp"],
  },
];
