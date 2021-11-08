import React from "react";
import { FooterWrapper, LogoWrapper } from "./styles";
import Link from "next/link";

export function Footer() {
	return (
		<FooterWrapper id="Footer">
			<div className="Container">
				<div>
					<Link
						href="/"
						id="logo"
						className={"image-container"}
						passHref
					>
						<LogoWrapper>Build Mafia</LogoWrapper>
					</Link>
					<p>Thanks for visiting:) </p>
				</div>
				<ul className="footer-link">
					<li className="head">Pages</li>
					<li>
						<Link href="/#">Home</Link>
					</li>
					<li>
						<Link href="/builders">Builders</Link>
					</li>
					<li>
						<Link href="/submit-product">Add Your Product</Link>
					</li>
				</ul>
				{/* <ul className="footer-link"> */}
				{/* 	<li className="head">Others</li> */}
				{/* 	<li>Templates (coming soon)</li> */}
				{/* </ul> */}
			</div>
		</FooterWrapper>
	);
}
