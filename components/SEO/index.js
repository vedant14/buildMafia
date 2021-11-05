import Head from "next/head";
import React from "react";

export function SEO({ title, description }) {
  if (title === undefined) {
    title = "Better Product Manager";
  } else {
    title = title + " | Better Product Manager";
  }
  if (description === undefined) {
    description =
      "Tests and quizes, designed to give you a little taste of what the PM role is like.";
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content="www.betterproductmanager.com" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Vedant Lohbare" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://betterproductmanager.s3.ap-south-1.amazonaws.com/Screen1.png"
      />
    </Head>
  );
}
