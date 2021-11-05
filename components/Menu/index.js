import React from "react";
import { Nav } from "./styles";
import Link from "next/link";
import Image from "next/image";

export function Menu({ items }) {
	return (
		<Nav>
			{items.map((item) => (
				<li key={item.id}>
					<Link href={item.link}>
						<h4>{item.name}</h4>
					</Link>
				</li>
			))}
		</Nav>
	);
}
