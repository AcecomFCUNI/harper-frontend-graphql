import { ApolloClient, InMemoryCache } from '@apollo/client'

console.log('import.meta.env.BACKEND_URL', import.meta.env.VITE_BACKEND_URL)

const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKEND_URL,
  cache: new InMemoryCache()
})

export { client }
