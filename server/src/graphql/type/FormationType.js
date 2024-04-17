const gql = require('graphql-tag');
const { CategoryResolver, StatusResolver, LanguageResolver, TrainerResolver } = require('../resolver');

const typeDefs = gql`
  type Formation {
    id: ID!
    objectives: String!
    title: String!
    source: String
    progress: Int
    startDate: String
    endDate: String
    category: Category
    status: Status
    language: Language
    trainer: Trainer
  }
`

const resolvers = {
  Formation: {
    category: async (parent, __, ___) => await CategoryResolver.getCategory(parent.categoryId),
    status: async (parent, __, ___) => await StatusResolver.getStatus(parent.statusId),
    language: async (parent, __, ___) => await LanguageResolver.getLanguage(parent.languageId),
    trainer: async (parent, __, ___) => await TrainerResolver.getTrainer(parent.trainerId),
  },
}

module.exports = { typeDefs, resolvers }