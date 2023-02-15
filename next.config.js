/** @type {import('next').NextConfig} */
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const NextFederationPlugin = require("@module-federation/nextjs-mf").default;

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack: (config, { webpack, dev }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "federation",
        filename: "static/testFederation.js",
        exposes: {
          "./Button": "./components/Button.tsx",
        },
      })
    );
    return config;
  },
});

module.exports = nextConfig;
