import React from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { SEO } from "../SEO";
export function Layout({ title, description, children }) {
	return (
		<LayoutWrapper>
			<SEO title={title} description={description} />
			<Header />
			<main>{children}</main>
		</LayoutWrapper>
	);
}
