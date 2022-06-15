import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_BACKEND_URL,
  cache: new InMemoryCache()
})

export { apolloClient }
