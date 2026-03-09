// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "Faith Olusakin | Elite Shopify Expert",
  description:
    "Elite Shopify Expert helping e‑commerce brands grow and scale with conversion-focused, real-world strategies.",
  openGraph: {
    type: "website",
    url: "https://praise-oluwasakin-website.vercel.app/",
    title: "Faith Olusakin | Elite Shopify Expert",
    description:
      "Elite Shopify Expert with 4+ years experience helping businesses launch and scale profitable Shopify stores.",
    images: [
      {
        url: "https://praise-oluwasakin-website.vercel.app/profile.webp",
        width: 1200,
        height: 630,
        alt: "Faith Olusakin Portfolio Preview",
      },
    ],
    site_name: "Faith Olusakin Portfolio",
  },
  twitter: {
    handle: "@mayorcodes",
    site: "@mayorcodes",
    cardType: "summary_large_image",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        {/* Structured data (JSON-LD) — optional: remove birthDate if you want privacy */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faith Olusakin",
              url: "https://praise-oluwasakin-website.vercel.app/",
              sameAs: [
                "https://twitter.com/mayorcodes",
                "https://www.linkedin.com/in/faith-olusakin-1b9654225",
                "https://www.upwork.com/freelancers/~01f04ccc60e6bc595f",
              ],
              jobTitle: "Elite Shopify Expert",
              // "birthDate": "YYYY-10-15" // optional - add a full YYYY if you want it in structured data
            }),
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
