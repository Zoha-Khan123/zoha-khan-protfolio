// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    if (!fileLoaderRule) {
      throw new Error("No file loader rule found for SVG files.");
    }

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer ? fileLoaderRule.issuer : undefined,
        resourceQuery: {
          not: [
            ...(fileLoaderRule.resourceQuery?.not || []), // Handle undefined `not`
            /url/,
          ],
        },
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = [
      ...(fileLoaderRule.exclude || []), // Ensure `exclude` is an array
      /\.svg$/i,
    ];

    return config;
  },
};

export default nextConfig;
