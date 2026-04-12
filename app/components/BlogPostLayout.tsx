import { ReactNode } from "react";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  children: ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  children,
}: BlogPostLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 text-white">
      <h1 className="text-4xl font-bold text-[#d4af37]">{title}</h1>
      <p className="mt-2 text-gray-400">{date}</p>
      <div className="prose prose-invert mt-8">{children}</div>
    </article>
  );
}
