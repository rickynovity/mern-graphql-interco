const gql = require('graphql-tag')

const typeDefs = gql`
  type Trainer {
    id: ID!
    name: String!
    biography: String
    contact: TrainerContact
  }

  type TrainerContact {
    email: String
    phone: String
  }
`

const resolvers = {
  // Resolvers for Trainer type
}

module.exports = { typeDefs, resolvers }