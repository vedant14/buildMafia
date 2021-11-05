import {
    ApolloClient,
    HttpLink,
    ApolloLink,
    InMemoryCache,
    concat,
} from "@apollo/client";

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_PH_URL,
});
const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
    }));

    return forward(operation);
});

const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
});

export default client;
