import { getAllPostsMeta } from "@/lib/blog";
import { getAllPostsMetaEs } from "@/lib/blogEs";
import { getAbsoluteUrl } from "@/lib/site";

import BlogPageClient from "./BlogPageClient";

type Locale = "en" | "es";

export default function BlogPageServer({ locale = "en" }: { locale?: Locale }) {
  const allPosts = locale === "en" ? getAllPostsMeta() : getAllPostsMetaEs();
  const blogBasePath = locale === "en" ? "/blog" : "/es/blog";
  const siteBasePath = locale === "en" ? "/" : "/es";
  const copy =
    locale === "en"
      ? {
          collectionName: "JulTech Blog",
          collectionDescription:
            "Articles about SEO, AEO, AI visibility, multilingual optimization, and modern search strategy.",
          faq: [
            {
              question: "What topics does the JulTech blog cover?",
              answer:
                "The JulTech blog covers SEO, AEO, AI visibility, multilingual optimization, Google search, and the website systems businesses need to be found and trusted online.",
            },
            {
              question: "Who is this blog for?",
              answer:
                "It is written for business owners and teams who want practical guidance on how websites perform in Google, AI search tools, and multilingual markets.",
            },
            {
              question: "Why does this matter for AEO?",
              answer:
                "Answer engine optimization depends on clarity. A page that clearly explains topics, questions, and outcomes is easier for AI systems to understand and surface in answers.",
            },
          ],
        }
      : {
          collectionName: "Blog de JulTech",
          collectionDescription:
            "Articulos sobre SEO, AEO, visibilidad en IA, optimizacion multilingue y estrategia de busqueda moderna.",
          faq: [
            {
              question: "Que temas cubre el blog de JulTech?",
              answer:
                "El blog de JulTech cubre SEO, AEO, visibilidad en IA, optimizacion multilingue, Google y los sistemas web que ayudan a que un negocio sea encontrado y genere confianza online.",
            },
            {
              question: "Para quien esta escrito este blog?",
              answer:
                "Esta escrito para duenos de negocios y equipos que quieren una guia practica sobre como funcionan los sitios web en Google, herramientas de IA y mercados multilingues.",
            },
            {
              question: "Por que esto importa para AEO?",
              answer:
                "La optimizacion para motores de respuesta depende de la claridad. Una pagina que explica temas, preguntas y resultados con claridad es mas facil de entender y mostrar para los sistemas de IA.",
            },
          ],
        };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: copy.collectionName,
    url: getAbsoluteUrl(blogBasePath),
    description: copy.collectionDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "JulTech",
      url: getAbsoluteUrl(siteBasePath),
    },
    about: ["SEO", "AEO", "AI visibility", "Google search", "Multilingual optimization"],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: getAbsoluteUrl(`${blogBasePath}/${post.slug}`),
      name: post.title,
      description: post.excerpt,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
      <BlogPageClient allPosts={allPosts} locale={locale} />
    </>
  );
}
