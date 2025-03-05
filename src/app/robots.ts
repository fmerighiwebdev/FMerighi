import { baseURL } from "@/app/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/images/"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}

