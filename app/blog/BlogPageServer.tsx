import { getAllPostsMeta } from "@/lib/blog";
import BlogPageClient from "./BlogPageClient";

export default function BlogPageServer() {
  const allPosts = getAllPostsMeta();
  return <BlogPageClient allPosts={allPosts} />;
}
