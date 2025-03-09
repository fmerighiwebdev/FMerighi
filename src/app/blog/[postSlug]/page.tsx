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
        </Flex>
      </Column>
    </main>
  );
}
