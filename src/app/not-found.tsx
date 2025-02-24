import { Column, Heading, Text } from "@/once-ui/components";

export const metadata = {
  title: "Francesco Merighi - Pagina Non Trovata",
  description: "La pagina che stai cercando non esiste.",
};

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Pagina non trovata
      </Heading>
      <Text onBackground="neutral-weak">La pagina che stai cercando non esiste.</Text>
    </Column>
  );
}
