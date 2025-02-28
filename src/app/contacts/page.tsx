import { Column, Heading, Line, Text } from "@/once-ui/components";
import { contacts } from "@/app/resources/content";
import ContactForm from "@/components/contact-form/contact-form";

export const metadata = {
  title: "Contatti - Francesco Merighi",
  description:
    "Aperto a nuove collaborazioni, progetti freelance e occasioni professionali. Contattami compilando il modulo o scrivimi via email.",
};

export default function ContactsPage() {
  return (
    <main style={{ width: "100%" }}> 
      <Column maxWidth="s" style={{ margin: "0 auto" }}>
        <Heading marginBottom="l" variant="display-strong-s">
          {contacts.title}
        </Heading>
        <Text variant="body-default-m">{contacts.description}</Text>
        <Line background="neutral-alpha-medium" className="my-40" />
        <ContactForm />
      </Column>
    </main>
  );
}
