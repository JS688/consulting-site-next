import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

import BlogPostLayout from "@/components/BlogPostLayout";
import { getAllPostsMetaEs } from "@/lib/blogEs";

function getFaqSchema(faqSchema: unknown) {
  if (!Array.isArray(faqSchema) || faqSchema.length === 0) {
    return null;
  }

  const mainEntity = faqSchema
    .filter(
      (item): item is { question: string; answer: string } =>
        Boolean(
          item &&
          typeof item === "object" &&
          "question" in item &&
          "answer" in item &&
          typeof item.question === "string" &&
          typeof item.answer === "string"
        )
    )
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));

  if (mainEntity.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export async function generateStaticParams() {
  const posts = getAllPostsMetaEs();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function EsBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "content/blog/es", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const faqSchema = getFaqSchema(data.faqSchema);

  return (
    <>
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <BlogPostLayout title={data.title} date={data.date}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </BlogPostLayout>
    </>
  );
}