import React from "react";
import Homepage from "./homepage";
import Head from "next/head";

export const metadata = {
  title: "Unnity| Performance Markeing agency| Best marketing agency in India",
  description:
    "Unnity, a leading digital marketing agency,a team of specialists in performance marketing(Facebook & Google ads), Shopify ecommerce development, and lead generation. We also offer Shopify website development, UI/UX design, SEO, and creative designing. Contact us for personalized strategies and measurable result!",
};

export default function page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="google-site-verification"
          content="vn1NyNfjfHshQLVwVfvgNQXQUCVzrHmKmNFja9489XE"
        />
      </Head>
      <Homepage />;
    </>
  );
}
