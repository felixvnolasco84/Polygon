import { WithContext, Article, BreadcrumbList, WebSite } from "schema-dts";
import Script from "next/script";
import { blogs } from "@/lib/utils";

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const post = blogs.find((blog) => blog.slug == params.slug);

  const ArticlejsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post?.title,
    description: post?.description,
    author: {
      "@type": "Person",
      name: post?.autor,
    },
    publisher: {
      "@type": "Organization",
      name: post?.publisher,
      logo: {
        "@type": "ImageObject",
        url: post?.publisherImageUrl,
      },
    },
    datePublished: post?.publishDate,
    image: post?.imageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.polygonag.com/blog/${post?.slug}`,
    },
  };

  const breadCrumbListjsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.polygonag.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.polygonag.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Guía completa de SEO para principiantes",
        item: "https://www.polygonag.com/blog/guia-completa-de-seo-para-principiantes",
      },
    ],
  };

  const searchjsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Polygon Agency",
    url: "https://www.polygonag.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.polygonag.com/search?q={search_term_string}",
      //   "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {children}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ArticlejsonLd),
        }}
      />
    </>
  );
}
