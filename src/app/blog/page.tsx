import {
  Column,
  Heading,
  Line,
  Text,
  Flex,
  SmartImage,
} from "@/once-ui/components";
import { blog } from "../resources";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main style={{ width: "100%" }}>
      <Column maxWidth="s" style={{ margin: "0 auto" }}>
        <Heading marginBottom="l" variant="display-strong-s">
          {blog.title}
        </Heading>
        <Text variant="body-default-m">{blog.description}</Text>
        <Line background="neutral-alpha-medium" className="my-40" />
        <Flex
          gap="48"
          vertical="center"
          textVariant="body-default-s"
          direction="column"
        >
          {blog.posts.map((post) => (
            <Link
              href={post.link}
              key={post.slug}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Flex gap="24" vertical="center" mobileDirection="column">
                <SmartImage
                  src={post.images[0]}
                  alt={post.title}
                  objectFit="cover"
                  aspectRatio="16/9"
                  radius="l"
                />
                <Flex gap="4" direction="column">
                  <Text variant="body-strong-xl">{post.title}</Text>
                  <Text variant="body-default-s">{post.short_description}</Text>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                    marginTop="16"
                  >
                    {post.date}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Column>
    </main>
  );
}
