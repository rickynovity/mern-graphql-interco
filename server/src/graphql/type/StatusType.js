const gql = require('graphql-tag')

const typeDefs = gql`
  type Status {
    id: ID!
    "The status's title"
    name: String!
  }
`

const resolvers = {
  // Resolvers for Status type
}

module.exports = { typeDefs, resolvers }