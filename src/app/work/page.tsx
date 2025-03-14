import { Button, Card, Column, Grid, Heading, Line, Text } from "@/once-ui/components";
import { work } from "../resources/content";

const services = [
  {
    title: "Siti web",
    description:
      "Realizzazione di siti web personalizzati, studiati per valorizzare l'immagine della tua azienda e offrirti una presenza online moderna ed efficace.",
  },
  {
    title: "Applicazioni web",
    description:
      "Sviluppo di applicazioni web su misura, progettate per garantire prestazioni elevate, interfacce intuitive e un'esperienza utente impeccabile.",
  },
  {
    title: "eCommerce",
    description:
      "Creazione di soluzioni eCommerce performanti, ottimizzate per aumentare le vendite e offrire un’esperienza di acquisto fluida e sicura.",
  },
  {
    title: "Performance & SEO",
    description:
      "Ottimizzazione tecnica e strategica per migliorare le prestazioni del tuo sito e scalare le posizioni sui motori di ricerca, aumentando visibilità e conversioni.",
  },
];

export const metadata = {
  title: "Work - Francesco Merighi",
  description:
    "Realizzo soluzioni digitali su misura per coinvolgere e convertire. Che tu abbia bisogno di un sito web performante, un’app web avanzata o un eCommerce che genera vendite.",
};

const ServiceCard = ({ title, description }) => (
  <Card maxWidth={24} radius="l-4" direction="column" cursor="none">
    <Column fillWidth paddingX="20" paddingY="24" gap="8">
      <Text variant="body-default-xl">{title}</Text>
      <Text onBackground="neutral-weak" variant="body-default-s">
        {description}
      </Text>
    </Column>
  </Card>
);

export default function WorkPage() {
  return (
    <main style={{ width: "100%" }}>
      <Column maxWidth="s" style={{ margin: "0 auto" }}>
        <Heading marginBottom="l" variant="display-strong-s">
          {work.title}
        </Heading>
        <Text variant="body-default-m">{work.description}</Text>
        <Line background="neutral-alpha-medium" className="my-40" />
        <Grid
          border="brand-medium"
          columns={2}
          gap="24"
          padding="24"
          fillWidth
          radius="l"
          background="brand-medium"
          mobileColumns={1}
          tabletColumns={2}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
        <Line background="neutral-alpha-medium" className="my-40" />
        <Text variant="body-default-l">{work.cta}</Text>
        <Button
          href="https://www.fmwebagency.it"
          variant="primary"
          size="l"
          label="Visita il sito web"
          className="mt-32"
        />
      </Column>
    </main>
  );
}
