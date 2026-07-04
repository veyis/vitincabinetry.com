import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "@/lib/site";
import { localBusinessSchema, organizationSchema, websiteSchema, toJsonLd } from "@/lib/schema";
import "./globals.css";

/** DM Sans + DM Serif Display — Colophon Foundry / Google Fonts; designed as a harmonious premium pair. */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif-display",
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
    default: `${site.name} | Kitchen, Bathroom & Closet Cabinetry in Quakertown, PA`,
    template: `%s | ${site.name}`,
  },
  description:
    "Custom and semi-custom kitchen, bathroom, and closet cabinetry bench-built in Quakertown, PA — plus quartz, granite, and porcelain countertops, flooring, and complete kitchen and bath remodeling. Homeowners, contractors, and designers across Bucks County and the Lehigh Valley.",
  applicationName: site.name,
  keywords: [
    "custom kitchen cabinets Quakertown",
    "bench built cabinets Bucks County",
    "kitchen remodeling Bucks County",
    "bathroom remodeling Bucks County",
    "custom cabinetry PA",
    "inset kitchen cabinets Pennsylvania",
    "bathroom vanities Quakertown",
    "custom closets Bucks County",
    "quartz countertops Quakertown",
    "granite countertops Bucks County",
    "kitchen designer Bucks County",
    "cabinet shop Lehigh Valley",
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
    title: `${site.name} — Kitchen, Bathroom & Closet Cabinetry in Quakertown, PA`,
    description:
      "Bench-built kitchen, bath, and closet cabinetry in Quakertown, PA — plus countertops, flooring, and full remodeling. Bucks County & Lehigh Valley.",
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
    title: `${site.name} — Kitchen, Bathroom & Closet Cabinetry in Quakertown, PA`,
    description:
      "Bench-built in Quakertown — kitchens, baths, closets, countertops, flooring, remodeling. Bucks County & Lehigh Valley.",
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
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
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
