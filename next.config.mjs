import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
      {
        source: "/seo-services-columbia-sc.html",
        destination: "/seo-services-columbia-sc",
        permanent: true,
      },
      {
        source: "/website-design-columbia-sc.html",
        destination: "/website-design-columbia-sc",
        permanent: true,
      },
      {
        source: "/local-seo-columbia-sc.html",
        destination: "/local-seo-columbia-sc",
        permanent: true,
      },
      {
        source: "/seo-for-realtors-columbia-sc.html",
        destination: "/seo-for-realtors-columbia-sc",
        permanent: true,
      },
      {
        source: "/web-design",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/seo-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/aeo-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/geo-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/multilingual-web-design",
        destination: "/services",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/seo-services-columbia-sc",
        destination: "/seo-services-columbia-sc.html",
      },
      {
        source: "/website-design-columbia-sc",
        destination: "/website-design-columbia-sc.html",
      },
      {
        source: "/local-seo-columbia-sc",
        destination: "/local-seo-columbia-sc.html",
      },
      {
        source: "/seo-for-realtors-columbia-sc",
        destination: "/seo-for-realtors-columbia-sc.html",
      },
    ];
  },
};

export default withMDX(nextConfig);
