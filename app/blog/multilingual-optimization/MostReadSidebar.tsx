import Link from "next/link";
import { BlogMeta } from "@/lib/blog";

interface Props {
  posts: BlogMeta[];
}

export default function MostReadSidebar({ posts }: Props) {
  const mostRead = posts.filter((p) => p.mostRead).slice(0, 5);

  if (!mostRead.length) return null;

  return (
    <aside className="border-l border-[#d4af37]/20 pl-6">
      <h3 className="text-lg font-semibold text-[#d4af37]">
        Most Read
      </h3>
      <ul className="mt-4 space-y-3">
        {mostRead.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm text-gray-300 hover:text-[#d4af37] transition"
            >
              {post.title}
            </Link>
            <p className="text-xs text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
