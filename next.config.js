module.exports = {
  reactStrictMode: true,
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: {
        loader: "frontmatter-markdown-loader",
      },
    });
    return configuration;
  },
  images: {
    deviceSizes: [360, 420, 768],
    domains: ["firebase-kanvas.imgix.net"],
  },
};
