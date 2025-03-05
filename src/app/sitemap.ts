import fs from "fs";
import path from "path";
import { baseURL, routes as routesConfig } from "@/app/resources";
import { posts } from "./resources/posts";

export default async function sitemap() {
  const blogs = posts.map((post) => ({
    url: `https://${baseURL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route]
  );

  const routes = activeRoutes.map((route) => ({
    url: `https://${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const imagesDir = path.join(process.cwd(), "public/images");
  let images: { url: string }[] = [];

  if (fs.existsSync(imagesDir)) {
    images = fs
      .readdirSync(imagesDir)
      .filter((file) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))
      .map((file) => ({
        url: `https://${baseURL}/images/${file}`,
      }));
  }

  return [...routes, ...blogs, ...images];
}