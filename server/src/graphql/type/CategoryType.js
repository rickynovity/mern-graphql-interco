const gql = require('graphql-tag')

const typeDefs = gql`
  type Category {
    id: ID!
    "The category's title"
    name: String!
  }
`

const resolvers = {
  // Resolvers for Category type
}

module.exports = { typeDefs, resolvers }