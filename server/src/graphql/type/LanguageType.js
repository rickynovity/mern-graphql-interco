const gql = require('graphql-tag')

const typeDefs = gql`
  type Language {
    id: ID!
    "The language's title"
    name: String!
  }
`

const resolvers = {
  // Resolvers for Language type
}

module.exports = { typeDefs, resolvers }