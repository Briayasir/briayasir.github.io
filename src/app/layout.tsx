import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne } from "next/font/google";
import { personalInfo } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  title: "Bria Yasir | Enterprise Data Solutions Architect & Cloud Platform Expert",
  description:
    "10+ years of expertise scaling distributed data architectures, real-time streaming pipelines, and multi-cloud lakehouses for Healthcare, Finance, and Enterprise Platforms.",
  keywords: [
    "Data Solutions Architect",
    "Enterprise Data Engineering",
    "Real-Time Analytics",
    "Cloud Data Lakehouse",
    "Databricks",
    "Snowflake",
    "Apache Spark",
    "Kafka",
    "Healthcare Data Architect",
    "Bria Yasir",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bria Yasir | Enterprise Data Solutions Architect & Cloud Platform Expert",
    description:
      "10+ years of expertise scaling distributed data architectures, real-time streaming pipelines, and multi-cloud lakehouses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bria Yasir | Enterprise Data Solutions Architect",
    description:
      "10+ years scaling distributed data architectures, real-time streaming pipelines, and multi-cloud lakehouses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: "Enterprise Data Solutions Architect",
  email: personalInfo.email,
  telephone: personalInfo.phone,
  url: personalInfo.portfolio,
  sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.githubRepo],
  knowsAbout: [
    "Databricks",
    "Snowflake",
    "Apache Spark",
    "Apache Kafka",
    "Cloud Data Lakehouse",
    "Healthcare Data Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
