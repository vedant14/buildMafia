import Head from "next/head";
import React from "react";

export function SEO({ title, description }) {
  if (title === undefined) {
    title = "Build Mafia";
  } else {
    title = title + " | Build Mafia";
  }
  if (description === undefined) {
    description =
      "Build is a community of some crazy people who like shipping side projects. And we’ve been shipping and storming Product Hunt for a while now.";
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
