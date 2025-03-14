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
    {title && <Heading as="h4">{title}</Heading>}
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
      "Il tuo Sito Web non genera conversioni? Ecco perché e come risolvere",
    short_description:
      "Se il tuo sito web non genera conversioni, potrebbe esserci un problema di usabilità, SEO o contenuti.",
    date: "Mar 15, 2025",
    content: (
      <>
        <Description>
          Sei un imprenditore, una startup o una piccola impresa e hai investito
          in un sito web, ma non stai ottenendo i risultati sperati? Avere un
          sito web senza conversioni è come avere un negozio senza clienti:
          frustrante e poco produttivo.
        </Description>
        <Description>
          La realtà è che il solo fatto di avere un sito online non basta.
          Affinché diventi uno strumento efficace di acquisizione clienti, deve
          essere ben progettato, ottimizzato e persuasivo. In questo articolo
          analizziamo le cause più comuni che impediscono al tuo sito di
          generare contatti e ti forniamo soluzioni pratiche per migliorarlo
          subito.
        </Description>
        <Line background="neutral-alpha-strong" />
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Le principali cause di un sito web che non genera conversioni
          </Heading>
          <Heading as="h3">1. Design obsoleto e poco professionale</Heading>
          <Description>
            Il <strong>design</strong> di un sito web è il primo elemento che un
            visitatore nota e influenza la percezione del tuo brand. Un sito
            datato, con colori poco armoniosi o un layout caotico, trasmette
            un'immagine poco professionale e genera sfiducia.
          </Description>
          <List title="❌ Errori comuni">
            <ListItem>Uso di template datati o non responsive</ListItem>
            <ListItem>Scelta di colori e font poco leggibili</ListItem>
            <ListItem>
              Mancanza di coerenza visiva e branding poco chiaro
            </ListItem>
          </List>
          <List title="✅ Soluzioni">
            <ListItem>
              Investi in un <strong>design moderno e responsive</strong>, che si
              adatti a tutti i dispositivi e offra una buona esperienza utente.
            </ListItem>
            <ListItem>
              Scegli colori e font che <strong>rispecchino il tuo brand</strong>{" "}
              e siano facili da leggere.
            </ListItem>
            <ListItem>
              Rendi la grafica <strong>pulita e accattivante</strong>, senza
              elementi superflui
            </ListItem>
          </List>
          <Heading as="h3">2. Esperienza utente (UX) inefficace</Heading>
          <Description>
            L&apos;<strong>esperienza utente (UX)</strong> è determinante per il
            successo di un sito web. Se i visitatori non riescono a navigare
            facilmente o il sito è troppo lento, abbandoneranno la pagina prima
            di contattarti.
          </Description>
          <List title="❌ Errori comuni">
            <ListItem>Menu di navigazione confuso o poco intuitivo</ListItem>
            <ListItem>Form di contatto troppo lunghi o complicati</ListItem>
            <ListItem>
              Tempi di caricamento lunghi o sito web non responsive
            </ListItem>
          </List>
          <List title="✅ Soluzioni">
            <ListItem>
              Semplifica la navigazione e rendi i contenuti{" "}
              <strong>facilmente accessibili</strong>.
            </ListItem>
            <ListItem>
              Ottimizza il sito web per{" "}
              <strong>ridurre i tempi di caricamento</strong> e assicurati che
              esso sia <strong>mobile-friendly e responsive</strong>.
            </ListItem>
            <ListItem>
              Utilizza <strong>call-to-action</strong> chiari e ben posizionati
              per guidare l&apos;utente all&apos;azione desiderata.
            </ListItem>
          </List>
          <Heading as="h3">3. Contenuti poco chiari o poco persuasivi</Heading>
          <Description>
            Un sito web deve comunicare in modo immediato il{" "}
            <strong>valore del tuo servizio o prodotto</strong>. Se i tuoi testi
            sono generici, confusi o poco coinvolgenti, i visitatori non saranno
            incentivati a contattarti.
          </Description>
          <List title="❌ Errori comuni">
            <ListItem>Testi troppo tecnici o poco chiari</ListItem>
            <ListItem>
              Mancanza di testimonianze e/o casi di studio e/o storytelling
            </ListItem>
            <ListItem>Mancanza di una chiara proposta di valore</ListItem>
          </List>
          <List title="✅ Soluzioni">
            <ListItem>
              Utilizza un <strong>linguaggio chiaro e coinvolgente</strong>,
              mettendoti nei panni del cliente.
            </ListItem>
            <ListItem>
              Evidenzia i <strong>benefici del tuo prodotto o servizio</strong>,
              non solo le caratteristiche.
            </ListItem>
            <ListItem>
              Usa tecniche di copywriting per creare{" "}
              <strong>testi persuasivi e storytelling</strong>.
            </ListItem>
          </List>
          <Heading as="h3">
            4. Call to Action (CTA) inefficaci o assenti
          </Heading>
          <Description>
            Le <strong>Call to Action (CTA)</strong> guidano i visitatori verso
            l&apos;azione desiderata. Se non sono visibili, chiare o
            convincenti, perderai molte opportunità di conversione.
          </Description>
          <List title="❌ Errori comuni">
            <ListItem>
              CTA poco visibili o nascoste in fondo alla pagina
            </ListItem>
            <ListItem>
              Testi delle CTA poco chiari o poco persuasivi, come ad esempio
              "Invia" o "Clicca qui"
            </ListItem>
            <ListItem>
              Mancanza di urgenza o di incentivi per spingere all&apos;azione
            </ListItem>
          </List>
          <List title="✅ Soluzioni">
            <ListItem>
              Posiziona le CTA in punti strategici e rendile{" "}
              <strong>visibili e chiare</strong>.
            </ListItem>
            <ListItem>
              Utilizza testi persuasivi e <strong>crea urgenza</strong> per
              spingere all&apos;azione.
            </ListItem>
            <ListItem>
              Offri <strong>incentivi o vantaggi</strong> per chi compie
              l&apos;azione, come uno sconto o una consulenza gratuita.
            </ListItem>
          </List>
          <Heading as="h3">5. Problemi tecnici e SEO on-site</Heading>
          <Description>
            Un sito con <strong>errori tecnici o problemi SEO</strong> potrebbe
            non essere trovato dai clienti giusti o risultare poco affidabile.
          </Description>
          <List title="❌ Errori comuni">
            <ListItem>
              URL poco chiari non ottimizzati per i motori di ricerca oppure
              assenza di certificato SSL
            </ListItem>
            <ListItem>
              Pagine non ottimizzate per i motori di ricerca (SEO)
            </ListItem>
            <ListItem>
              Problemi tecnici come ad esempio form che non funzionano, errori
              404 o link non funzionanti
            </ListItem>
          </List>
          <List title="✅ Soluzioni">
            <ListItem>
              Ottimizza i <strong>meta tag e le descrizioni</strong> per i
              motori di ricerca, utilizzando parole chiave rilevanti per il tuo
              business.
            </ListItem>
            <ListItem>
              <strong>Assicurati che il sito sia veloce e sicuro</strong>, con
              un certificato SSL e un hosting affidabile.
            </ListItem>
            <ListItem>
              <strong>Correggi gli errori tecnici</strong> e verifica che tutto
              funzioni come dovrebbe.
            </ListItem>
          </List>
        </Flex>
        <CTABlock
          title="🚀 Vuoi migliorare il tuo sito web e ottenere più conversioni?"
          text="Non lasciare che il tuo sito sia un'opportunità sprecata. Contattami per un'analisi gratuita e scopri come trasformarlo in uno strumento di vendita efficace!"
        />
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Come trasformare il tuo sito web in una macchina da conversione
          </Heading>
          <Heading as="h3">
            1. Ottimizzare il design per la fiducia e la credibilità
          </Heading>
          <Description>
            Un design professionale non è solo estetica, ma anche funzionalità.
            Un sito visivamente accattivante aumenta la fiducia del visitatore e
            lo invoglia a rimanere più a lungo. Scegli un layout pulito, colori
            armoniosi e immagini di alta qualità per trasmettere professionalità
            e coerenza con il tuo brand.
          </Description>
          <Heading as="h3">2. Migliorare l&apos;esperienza utente (UX)</Heading>
          <Description>
            L&apos;utente deve navigare il sito senza difficoltà. Assicurati che
            il menu sia intuitivo, le informazioni facilmente accessibili e i
            tempi di caricamento ridotti al minimo. Un sito veloce e ottimizzato
            per dispositivi mobili migliora l&apos;esperienza e riduce il tasso
            di abbandono.
          </Description>
          <Heading as="h3">3. Creare contenuti chiari e persuasivi</Heading>
          <Description>
            Il contenuto del sito deve rispondere alle esigenze del cliente.
            Scrivi in modo diretto e chiaro, mettendo in evidenza i vantaggi del
            tuo servizio. Usa un linguaggio semplice e coinvolgente, e integra
            tecniche di copywriting persuasivo come lo storytelling per creare
            connessioni emotive con il lettore.
          </Description>
          <Heading as="h3">
            5. Eliminare problemi tecnici e migliorare la SEO
          </Heading>
          <Description>
            Un sito veloce, sicuro e ben indicizzato ha maggiori possibilità di
            generare traffico qualificato. Controlla che tutti i link e form di
            contatto funzionino correttamente, utilizza certificati SSL e
            ottimizza i contenuti con parole chiave strategiche per migliorare
            il posizionamento su Google.
          </Description>
        </Flex>
        <Flex direction="column" gap="16">
          <Heading as="h2" variant="display-strong-xs">
            Conclusione
          </Heading>
          <Description>
            Se il tuo sito non sta generando conversioni, è il momento di
            intervenire. Un design accattivante, un'esperienza utente
            ottimizzata, contenuti persuasivi e CTA efficaci possono fare la
            differenza tra un sito statico e uno che genera vendite. Investi nel
            tuo sito web come strumento di marketing e vedrai i risultati
            arrivare.
          </Description>
        </Flex>
        <CTABlock title="🚀 Vuoi migliorare le performance del tuo sito? Contattami ora per una consulenza gratuita e scopri come aumentare le tue conversioni!" />
      </>
    ),
    link: "/blog/sito-web-non-genera-conversioni",
    slug: "sito-web-non-genera-conversioni",
    images: ["/images/blog/sito-web-non-genera-conversioni.webp"],
  },
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
