import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" entfernt — Stripe Webhook API-Routes brauchen Serverless
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
