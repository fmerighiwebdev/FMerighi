import { Column, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { blog, newsletter } from "@/app/resources/content";

export const metadata = {
  title: "Francesco Merighi - Blog",
  description: "Articoli, guide e tutorial su sviluppo web, programmazione e tecnologia.",
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1}>
        <Posts range={[1, 3]} thumbnail />
        <Posts range={[4]} columns="2" />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
