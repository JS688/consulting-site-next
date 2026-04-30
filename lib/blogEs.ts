import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogMetaEs {
  title: string;
  date: string;
  slug: string;
  category?: string;
  excerpt?: string;
  mostRead?: boolean;
  readingTimeMinutes: number;
}

const postsDir = path.join(process.cwd(), "content/blog/es");

export function getAllPostsMetaEs(): BlogMetaEs[] {
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { content, data } = matter(source);
      const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

      return {
        title: data.title,
        date: data.date,
        slug: data.slug ?? file.replace(/\.mdx$/, ""),
        category: data.category,
        excerpt: data.excerpt,
        mostRead: data.mostRead ?? false,
        readingTimeMinutes: Math.max(1, Math.ceil(wordCount / 220)),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}