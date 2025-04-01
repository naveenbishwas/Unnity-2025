import Head from "next/head";
import WhiteLabel from "./white-label";

export const metadata = {
  title:
    "Outsource expert digital marketing to Unnity and transform your clients' brands with top-notch strategies",
  description:
    "This keyword focuses on outsourcing digital marketing to Unnity and highlights the transformative impact on client brands. It includes specific terms like expert digital marketing, outsource, and transform, which can help improve your ranking by targeting more specific search queries. Make sure to use this keyword naturally in your website content, meta descriptions, and headers to enhance SEO.",
};

const Page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <WhiteLabel />
    </>
  );
};

export default Page;
