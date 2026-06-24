import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// When deploying to GitHub Pages (a project site), the app is served from a
// subpath: https://<user>.github.io/<repo>/. The Pages workflow sets
// NEXT_PUBLIC_BASE_PATH=/mabanta-portfolio so assets and links resolve there.
// Locally the variable is unset, so the app runs at the root as usual.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` for GitHub Pages.
  output: "export",
  // Trailing slashes produce `path/index.html`, which Pages serves cleanly.
  trailingSlash: true,
  basePath,
  // Allow .md and .mdx files to be treated as pages/routes/imports.
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    // GitHub Pages has no image optimization server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

const withMDX = createMDX({
  // Compile both .md and .mdx files.
  extension: /\.(md|mdx)$/,
  options: {
    // String form is required for Turbopack compatibility.
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
