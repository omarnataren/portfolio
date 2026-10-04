import { absoluteUrl } from "../utils/seo";

export function GET() {
    return new Response(`User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
