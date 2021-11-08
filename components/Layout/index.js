import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { SEO } from "../SEO";
import { Footer } from "../Footer";
export function Layout({ title, description, children }) {
	return (
		<LayoutWrapper>
			<SEO title={title} description={description} />
			<Header />
			<main>{children}</main>
			<Footer />
		</LayoutWrapper>
	);
}
