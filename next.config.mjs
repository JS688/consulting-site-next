import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
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
};

export default withMDX(nextConfig);
