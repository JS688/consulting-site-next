import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getAllPostsMeta } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <BlogPostLayout title={data.title} date={data.date}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </BlogPostLayout>
  );
}
