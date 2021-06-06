const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  future: {
    webpack5: true,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/versum/introduction",
        permanent: false,
      },
    ]
  },
})
