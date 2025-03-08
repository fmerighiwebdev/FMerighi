import { posts } from "@/app/resources/posts";
import { Background, Button, Column, Flex, Heading, Text } from "@/once-ui/components";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const currentPost = posts.find((post) => post.slug === postSlug);

  if (!currentPost) {
    return notFound();
  }

  return {
    title: `${currentPost.title} - Francesco Merighi`,
    description: currentPost.short_description || "Read this blog post to learn more.",
  };
}

export default async function BlogPage({ params }) {
  const { postSlug } = await params;
  const currentPost = posts.find((post) => post.slug === postSlug);

  if (!currentPost) {
    return notFound();
  }

  return (
    <main style={{ width: "100%" }}>
      <Column maxWidth="s" style={{ margin: "0 auto" }}>
        <Flex gap="32" vertical="center" direction="column">
          <Button
            href="/blog"
            variant="tertiary"
            size="m"
            label="Altri post"
            prefixIcon="chevronLeft"
          />
          <Heading variant="display-strong-s">{currentPost.title}</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {currentPost.date}
          </Text>
          {currentPost.content}
          <Column
            overflow="hidden"
            position="relative"
            fillWidth
            padding="xl"
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
            <Heading
              style={{ position: "relative" }}
              marginBottom="s"
              variant="display-strong-xs"
            >
              Pronto a portare il tuo progetto al livello successivo?
            </Heading>
            <Text
              style={{
                position: "relative",
                maxWidth: "var(--responsive-width-xs)",
              }}
              wrap="balance"
              marginBottom="l"
              onBackground="neutral-medium"
            >
              Hai un&apos;idea da sviluppare o vuoi migliorare la tua presenza
              online? Sono qui per aiutarti! Scopri i miei servizi su misura e
              contattami per una consulenza senza impegno.
            </Text>
            <Button
              href="/contacts"
              variant="primary"
              size="l"
              label="CONTATTAMI ORA"
              style={{ width: "min(200px, 100%)" }}
            />
            <Button
              href="/work"
              variant="secondary"
              size="l"
              label="SCOPRI I SERVIZI"
              className="mt-12"
              style={{ width: "min(200px, 100%)" }}
            />
          </Column>
        </Flex>
      </Column>
    </main>
  );
}
