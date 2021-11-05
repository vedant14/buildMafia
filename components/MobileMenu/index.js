import React from "react";
// Styles
import { OverrideGlobalStyle, NavScroll, Wrapper } from "./styles";
import Link from "next/link";
export function MobileMenu({ menuOpen, items, setMenuOpen, profile }) {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <NavScroll>
          {items.map((item) => (
            <Link key={item.id} href={item.link} passHref>
              <li onClick={() => setMenuOpen(false)}>{item.name}</li>
            </Link>
          ))}
        </NavScroll>
      </Wrapper>
    </>
  );
}
