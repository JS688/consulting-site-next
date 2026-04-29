import { getAllPostsMeta } from "@/lib/blog";
import { getAbsoluteUrl } from "@/lib/site";

import BlogPageClient from "./BlogPageClient";

export default function BlogPageServer() {
  const allPosts = getAllPostsMeta();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "JulTech Blog",
    url: getAbsoluteUrl("/blog"),
    description:
      "Articles about SEO, AEO, AI visibility, multilingual optimization, and modern search strategy.",
    isPartOf: {
      "@type": "WebSite",
      name: "JulTech",
      url: getAbsoluteUrl("/"),
    },
    about: ["SEO", "AEO", "AI visibility", "Google search", "Multilingual optimization"],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: getAbsoluteUrl(`/blog/${post.slug}`),
      name: post.title,
      description: post.excerpt,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What topics does the JulTech blog cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The JulTech blog covers SEO, AEO, AI visibility, multilingual optimization, Google search, and the website systems businesses need to be found and trusted online.",
        },
      },
      {
        "@type": "Question",
        name: "Who is this blog for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is written for business owners and teams who want practical guidance on how websites perform in Google, AI search tools, and multilingual markets.",
        },
      },
      {
        "@type": "Question",
        name: "Why does this matter for AEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Answer engine optimization depends on clarity. A page that clearly explains topics, questions, and outcomes is easier for AI systems to understand and surface in answers.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogPageClient allPosts={allPosts} />
    </>
  );
}
