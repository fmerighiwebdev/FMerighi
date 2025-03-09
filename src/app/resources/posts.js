import React from "react";
import Link from "next/link";
import { Line } from "@/once-ui/components/Line";
import {
  Background,
  Button,
  Column,
  Feedback,
  Flex,
  Heading,
  Icon,
  Text,
} from "@/once-ui/components";
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

const CTABlock = ({ title, text }) => (
  <Column
    overflow="hidden"
    position="relative"
    fillWidth
    padding="l"
    radius="l"
    marginBottom="m"
    horizontal="center"
    align="center"
    background="surface"
    border="neutral-medium"
  >
    <Background
      position="absolute"
      mask={{
        cursor: true,
      }}
      gradient={{
        colorEnd: "static-transparent",
        colorStart: "accent-solid-strong",
        display: true,
        height: 100,
        opacity: 100,
        tilt: 0,
        width: 150,
        x: 0,
        y: 0,
      }}
      dots={{
        color: "accent-on-background-medium",
        display: true,
        opacity: 100,
        size: "64",
      }}
      grid={{
        color: "neutral-alpha-medium",
        display: true,
        height: "var(--static-space-32)",
        opacity: 100,
        width: "var(--static-space-32)",
      }}
      lines={{
        display: false,
        opacity: 100,
        size: "24",
      }}
    />
    {title && (
      <Heading
        style={{ position: "relative" }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        {title}
      </Heading>
    )}
    {text && (
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {text}
      </Text>
    )}
    <Button
      href="/contacts"
      variant="primary"
      size="l"
      label="CONTATTAMI ORA"
      style={{ width: "min(200px, 100%)" }}
    />
  </Column>
);

export const posts = [
  {
    title:
      "Perché il tuo Sito Web è lento? Le cause nascoste e come risolverle",
    short_description:
      "Un sito lento non è solo fastidioso per gli utenti, ma è una vera e propria bomba a orologeria per il tuo business.",
    date: "Mar 09, 2025",
    content: (
      <>
        {/* OGNI SEZIONE è SEPARATA DA 32 PX di GAP */}
        <Description>
          Un sito lento non è solo fastidioso per gli utenti, ma è una vera e
          propria <strong>bomba a orologeria</strong> per il tuo business.{" "}
          <strong>
            Ogni secondo di ritardo nel caricamento può costarti clienti,
            vendite e visibilità su Google
          </strong>
          .
        </Description>
        <Description>
          Lo sapevi che il{" "}
          <strong>
            70% degli utenti abbandona un sito se impiega più di 3 secondi a
            caricarsi
          </strong>
          ? Oppure che un eCommerce con un tempo di caricamento superiore a 5
          secondi può perdere fino al <strong>30% di fatturato</strong>?
        </Description>
        <Description>
          👉{" "}
          <strong>
            Se il tuo sito è lento, i tuoi potenziali clienti stanno già andando
            dalla concorrenza
          </strong>
          . Continua a leggere per scoprire perché succede e come risolverlo
          subito!
        </Description>
        <Line background="neutral-alpha-strong" />
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Perché la velocità del sito è cruciale per il successo online
          </Heading>
          <Heading as="h3">
            🚀 Google penalizza i siti lenti (e premia quelli veloci!)
          </Heading>
          <Description>
            Google considera la velocità del sito un{" "}
            <strong>fattore di ranking</strong>. Se il tuo sito è lento, finirai
            sempre più in basso nei risultati di ricerca. Inoltre, un sito lento
            aumenta il{" "}
            <strong>numero di utenti che abbandonano la pagina</strong> prima di
            completare un'azione, come un acquisto o una registrazione.
          </Description>
          <List title="I Core Web Vitals valutano 3 aspetti chiave:">
            <ListItem>
              <strong>Largest Contentful Paint (LCP)</strong>: se supera i 2,5
              secondi, Google lo considera "lento".
            </ListItem>
            <ListItem>
              <strong>First Input Delay (FID)</strong>: indica se il sito
              risponde rapidamente ai comandi dell&apos;utente.
            </ListItem>
            <ListItem>
              <strong>Cumulative Layout Shift (CLS)</strong>: misura quanto il
              layout si sposta durante il caricamento (fastidioso per gli
              utenti).
            </ListItem>
          </List>
          <Description>
            Un sito ottimizzato <strong>scala posizioni su Google</strong>,
            portandoti più traffico organico e clienti.
          </Description>
          <Heading as="h3">
            😱 Un sito lento allontana gli utenti e fa crollare le conversioni
          </Heading>
          <List>
            <ListItem>
              Il <strong>53% degli utenti abbandona</strong> una pagina se non
              si carica entro 3 secondi.
            </ListItem>
            <ListItem>
              <strong>
                Ogni secondo in più di attesa riduce le conversioni del 7%
              </strong>
              .
            </ListItem>
            <ListItem>
              Un sito lento crea <strong>sfiducia</strong>, specialmente negli
              eCommerce: se un cliente deve aspettare, preferisce acquistare
              altrove.
            </ListItem>
          </List>
          <Feedback
            variant="info"
            icon
            title="E se il tuo sito fosse tra quelli lenti?"
            description="Testalo subito con Google PageSpeed Insights!"
            actionButtonProps={{
              label: "Google PageSpeed Insights",
              size: "s",
              variant: "secondary",
              href: "https://developers.google.com/speed/pagespeed/insights/",
            }}
          />
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            I numeri parlano chiaro: quanto costa un sito lento?
          </Heading>
          <Description>
            Ecco alcuni dati concreti per farti capire quanto potresti perdere:
          </Description>
          <List title="💰 E-commerce:">
            <ListItem>
              Se il tuo negozio online fattura <strong>10.000€ al mese</strong>{" "}
              e ha un tempo di caricamento superiore ai{" "}
              <strong>4 secondi</strong>, potresti perdere{" "}
              <strong>fino a 3.000€</strong>.
            </ListItem>
          </List>
          <List title="📉 Blog e siti di contenuti:">
            <ListItem>
              Un sito lento riduce il tempo di permanenza, abbassando le
              visualizzazioni e il valore pubblicitario.
            </ListItem>
            <ListItem>
              Il 70% degli utenti <strong>non tornerà mai più</strong> su un
              sito che carica lentamente.
            </ListItem>
          </List>
          <Feedback
            variant="warning"
            icon
            title="Ora che sai cosa rischi, vuoi davvero continuare a ignorare il problema?"
          />
          <CTABlock title="Hai bisogno di un sito web veloce e performante?" />
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Le principali cause di un sito web lento (e come risolverle subito!)
          </Heading>
          <Heading as="h3">
            1. Hosting inadeguato = Rallentamenti inevitabili
          </Heading>
          <Description>
            La maggior parte dei siti lenti utilizza hosting economici
            condivisi, dove le risorse sono divise tra più utenti. Risultato? Il
            sito è lento anche con poche visite.
          </Description>
          <List title="✅ Soluzione:">
            <ListItem>
              Scegli un <strong>hosting VPS o dedicato</strong> per prestazioni
              migliori.
            </ListItem>
            <ListItem>
              Usa una <strong>CDN (Content Delivery Network)</strong> per
              distribuire i contenuti su più server e ridurre i tempi di
              caricamento.
            </ListItem>
          </List>
          <Heading as="h3">2. Immagini pesanti che rallentano tutto</Heading>
          <Description>
            Le immagini non ottimizzate sono tra le principali cause di un sito
            lento.
          </Description>
          <List title="✅ Soluzione:">
            <ListItem>
              Converti le immagini in <strong>WebP</strong>, un formato più
              leggero.
            </ListItem>
            <ListItem>
              Usa strumenti di compressione come <strong>TinyPNG</strong> o{" "}
              <strong>ShortPixel</strong>.
            </ListItem>
            <ListItem>
              Attiva il <strong>lazy loading</strong> per caricare le immagini
              solo quando necessario.
            </ListItem>
          </List>
          <Heading as="h3">3. Codice pesante e richieste inutili</Heading>
          <Description>
            Molti siti hanno un codice poco ottimizzato, con file CSS e
            JavaScript troppo grandi o troppe richieste al server.
          </Description>
          <List title="✅ Soluzione:">
            <ListItem>
              <strong>Minimizza CSS e JavaScript</strong> per ridurre il peso e
              i tempi di caricamento.
            </ListItem>
            <ListItem>
              <strong>Evita troppi plugin inutili</strong> se usi WordPress.
            </ListItem>
            <ListItem>
              <strong>Unisci file statici</strong> per ridurre il numero di
              richieste HTTP.
            </ListItem>
          </List>
          <Feedback
            variant="danger"
            icon
            title="Errore comune"
            description="Molti pensano che cambiare hosting sia sufficiente. Se il sito non è ottimizzato, sarà lento ovunque!"
          />
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Conclusione: Il tempo è denaro. Il tuo sito è un investimento, non
            un costo!
          </Heading>
          <Description>
            Un sito lento significa{" "}
            <strong>
              meno clienti, meno vendite e meno visibilità. Perché perdere tempo
              e soldi quando puoi risolverlo subito
            </strong>
            ?
          </Description>
        </Flex>
        <CTABlock
          title="Non aspettare che la concorrenza ti superi :("
          text="Assieme possiamo migliorare la presenza online del tuo business! Scrivimi subito per una consulenza gratuita."
        />
      </>
    ),
    link: "/blog/cause-sito-web-lento",
    slug: "cause-sito-web-lento",
    images: ["/images/blog/cause-sito-web-lento.webp"],
  },
];
