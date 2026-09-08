import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import AsciiBackground from "./components/AsciiBackground";
import { getPageMetaDescriptors, siteContent } from "./content/site";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/favicon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap",
  },
];

export function meta() {
  return getPageMetaDescriptors(siteContent.pageMeta.home);
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const canonicalUrl = location.pathname || "/";
  const shareImageUrl = siteContent.seo.ogImagePath;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteContent.brand.name,
      sameAs: siteContent.footer.socialLinks.map((link) => link.href),
      description: siteContent.brand.intro,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteContent.brand.name,
      description: siteContent.brand.intro,
    },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <meta property="og:site_name" content={siteContent.brand.name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={shareImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteContent.seo.twitterHandle} />
        <meta name="twitter:image" content={shareImageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <div id="app-shell">
          <AsciiBackground />
          <div className="site-content">{children}</div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="site-container page-main">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
