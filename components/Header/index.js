import React, { useState, useContext, useEffect } from "react";

import Link from "next/link";
import siteData from "../../content/siteMenu.json";
import { HeaderWrapper, LogoWrapper } from "./styles";
import { Menu } from "../Menu";
import { Hamburger } from "../Hamburger";
import { MobileMenu } from "../MobileMenu";

export function Header({ page }) {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<HeaderWrapper menuOpen={menuOpen}>
			<div className="Container">
				<Link href="/" id="logo" className={"image-container"} passHref>
					<LogoWrapper>Build Mafia</LogoWrapper>
				</Link>
				<MobileMenu
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					items={siteData}
				/>
				<Menu items={siteData} />
				<Hamburger
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					id="Hamburger"
				/>
			</div>
		</HeaderWrapper>
	);
}
