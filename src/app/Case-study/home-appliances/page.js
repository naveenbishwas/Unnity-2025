import React from "react";
import Appliances from "./home-appliance";
import Head from "next/head";

export const metadata = {
  title:
    "Home Appliances India's journey to transforming Google Ads performance with strategic restructuring and budget management",
  description:
    "This keyword is designed to target those interested in case studies and strategic insights related to Google Ads performance for the home appliances sector. It includes key phrases like Google Ads performance, strategic restructuring, and budget management, which can help attract a specific audience searching for solutions to similar challenges. Use this keyword in your content, meta descriptions, and headers to improve SEO and visibility",
};

export default function page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Appliances />;
    </>
  );
}
