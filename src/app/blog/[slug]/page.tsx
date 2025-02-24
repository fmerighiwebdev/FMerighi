import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import {
  AvatarGroup,
  Button,
  Column,
  Heading,
  Row,
  Text,
} from "@/once-ui/components";
import { formatDate } from "@/app/utils/formatDate";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = getPosts(["src", "app", "blog", "posts"]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

export default async function Blog({ params }: PageProps) {
  const pageParams = await params;
  const slug = pageParams.slug;
  const post = getPosts(["src", "app", "blog", "posts"]).find(
    (post) => post.slug === slug
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="xs" gap="l">
      <Button
        href="/blog"
        weight="default"
        variant="tertiary"
        size="s"
        prefixIcon="chevronLeft"
      >
        Posts
      </Button>
      <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      <Row gap="12" vertical="center">
        {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
        <Text variant="body-default-s" onBackground="neutral-weak">
          {formatDate(post.metadata.publishedAt)}
        </Text>
      </Row>
      <Column as="article" fillWidth>
        <CustomMDX source={post.content} />
      </Column>
    </Column>
  );
}
