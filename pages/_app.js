import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import { GlobalStyles } from "../styles/GlobalStyles";
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		hotjar.initialize(2695839, 6);
	}, []);

	return (
		<ApolloProvider client={client}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
