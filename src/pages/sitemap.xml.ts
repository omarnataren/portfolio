import { projects } from "../data/projects";
import { absoluteUrl } from "../utils/seo";

const pages = [
    { path: "/", priority: "1.0", changefreq: "monthly" },
    ...projects.map((project) => ({
        path: `/proyectos/${project.id}/`,
        priority: "0.8",
        changefreq: "monthly",
    })),
];

export function GET() {
    const urls = pages
        .map(
            ({ path, priority, changefreq }) => `
    <url>
        <loc>${absoluteUrl(path)}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`
        )
        .join("");

    return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
