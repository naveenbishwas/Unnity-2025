import React from "react";
import Travel from "./travel";
import Head from "next/head";

export const metadata = {
  title:
    "E-sim's record-breaking sales success through strategic Google Ads campaigns and targeted advertising optimization",
  description:
    "This long-tail keyword is designed to attract users interested in case studies and strategies for achieving significant growth through Google Ads. It includes key phrases like record-breaking sales,strategic Google Ads campaigns, and targeted advertising optimization, which can help in improving your website's SEO by focusing on specific, high-intent search queries",
};

export default function page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Travel />;
    </>
  );
}
