import React from "react";
import Link from "next/link";
import { Line } from "@/once-ui/components/Line";
import { Flex, Heading, Icon, Text } from "@/once-ui/components";

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
              le pagine possono essere indicizzate meglio rispetto a
              un&apos;app React tradizionale.
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
              <strong>Maggiore complessità iniziale</strong>: Richiede una curva di apprendimento leggermente più ripida rispetto a React puro.
            </ListItem>
            <ListItem>
              <strong>Hosting</strong>: Non tutti gli hosting supportano SSR nativamente, anche se servizi come Vercel rendono la distribuzione più semplice.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Quando scegliere React?
          </Heading>
          <List>
            <ListItem>
              Se stai costruendo una{" "} <strong>Single Page Application (SPA)</strong> con molte interazioni utente.
            </ListItem>
            <ListItem>
              Se la SEO non è una priorità, come in un&apos;app interna o un pannello di amministrazione.
            </ListItem>
            <ListItem>
              Se vuoi avere il massimo controllo sulla configurazione del progetto.
            </ListItem>
          </List>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Quando scegliere Next.js?
          </Heading>
          <List>
            <ListItem>
              Se il tuo sito ha bisogno di un&apos;ottima SEO, come un blog o un e-commerce.
            </ListItem>
            <ListItem>
              Se vuoi ottimizzare le performance con il pre-rendering.
            </ListItem>
            <ListItem>
              Se hai bisogno di API integrate e di un&apos;app scalabile sin dall&apos;inizio.
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
