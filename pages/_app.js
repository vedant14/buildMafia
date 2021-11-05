import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { GlobalStyles } from "../styles/GlobalStyles";
function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
