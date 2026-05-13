import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "@/lib/site";
import { localBusinessSchema, organizationSchema, websiteSchema, toJsonLd } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b8924a",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Stock & Custom Cabinets in Quakertown, PA`,
    template: `%s | ${site.name}`,
  },
  description:
    "Stock and custom cabinets, built and sold in Quakertown, PA. For homeowners and trade across Bucks County and the Lehigh Valley.",
  applicationName: site.name,
  keywords: [
    "custom kitchen cabinets Quakertown",
    "kitchen remodeling Bucks County",
    "custom cabinetry PA",
    "bathroom vanities Quakertown",
    "kitchen designer Bucks County",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Stock & Custom Cabinets in Quakertown, PA`,
    description:
      "Cabinets, built and sold in Quakertown. Stock from the showroom; custom from our bench. Serving Bucks County and the Lehigh Valley.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — Custom cabinetry in Quakertown, PA`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Stock & Custom Cabinets in Quakertown, PA`,
    description:
      "Cabinets, built and sold in Quakertown — for homeowners and trade.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Home Improvement",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const isProd = process.env.NODE_ENV === "production";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}

        {/* JSON-LD: LocalBusiness + Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(websiteSchema) }}
        />

        {/* Analytics — production only, gated on env vars */}
        {isProd && <Analytics />}
        {isProd && <SpeedInsights />}
        {isProd && GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        {isProd && CLARITY_ID && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
