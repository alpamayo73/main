import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://saitcbr.nl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Global rule (all bots)
      {
        userAgent: "*",
        disallow: [
          "/admin/", 
          "/api/",
          "/auth/",
          "/_next/",
          "/private/"
        ],
        crawlDelay: 5 
      },
      
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot"],
        disallow: "/"
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`
  };
}
