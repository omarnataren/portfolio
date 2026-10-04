const vercelUrl =
    import.meta.env.VERCEL_PROJECT_PRODUCTION_URL ?? import.meta.env.VERCEL_URL;
const fallbackSiteUrl = vercelUrl ? `https://${vercelUrl}` : "https://example.com";

export const siteUrl = (import.meta.env.PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(/\/$/, "");

export const siteName = "Omar Nataren";

export const defaultDescription =
    "Portafolio de Omar Nataren, Software Engineer y desarrollador Full Stack con enfoque en UI/UX, arquitectura de software y productos digitales.";

export function absoluteUrl(path = "/") {
    return new URL(path, `${siteUrl}/`).toString();
}

export function stripHtml(value: string) {
    return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}
