import { posts } from "@/lib/vars";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";

type Props = {
  params: { slug: string[] };
};

function getContent(slug: string[]) {
  const file = `${posts}/${slug.join("-")}.md`;
  const content = fs.readFileSync(file, "utf8");
  const postMatter = matter(content);
  return postMatter;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const post = getContent(slug);

  return {
    title: post.data.title,
    description: post.data.excerpt,
    robots: { index: true, follow: true, nocache: true },
  };
}

export default function detail({ params }: Props) {
  const { slug } = params;
  const post = getContent(slug);
  return (
    <>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </>
  );
}