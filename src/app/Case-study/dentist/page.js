import React from "react";
import Dentist from "./dentist";
import Head from "next/head";

export const metadata = {
  title:
    "Comprehensive digital marketing strategy guide for large dentistry chains to enhance patient engagement and online growth",
  description:
    "This long-tail keyword is tailored to target large dentistry chains looking for in-depth digital marketing strategies. It includes key phrases like comprehensive strategy guide, enhance patient engagement, and online growth, which can help in attracting a more specific and relevant audience. To improve your SEO, incorporate this keyword into your content, meta descriptions, headers, and other strategic areas on your website",
};

export default function page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Dentist />;
    </>
  );
}
