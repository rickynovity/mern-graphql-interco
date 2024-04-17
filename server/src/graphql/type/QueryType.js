const gql = require('graphql-tag');
const { CategoryResolver, StatusResolver, LanguageResolver, TrainerResolver, FormationResolver } = require('../resolver');

const typeDefs = gql`
  type Query {
    # CATEGORY
    "Query to get categories array for the homepage grid"
    categories: [Category!]
    "Query to get a single category by ID for the detailed view"
    category(id: ID!): Category!
    

    # STATUS
    allStatus: [Status!]
    status(id: ID!): Status

    # LANGUAGE
    languages: [Language!]
    language(id: ID!): Language

    # TRAINER
    trainers: [Trainer!]
    trainer(id: ID!): Trainer

    # FORMATION
    formations: [Formation!]
    formation(id: ID!): Formation!

  }
`
const resolvers = {
  Query: {
    // CATEGORY
    categories: async (_, __, ___) => await CategoryResolver.getCategories(),
    category: async (_, args, ___) => await CategoryResolver.getCategory(args.id),

    // STATUS
    allStatus: async (_, __, ___) => await StatusResolver.getAllStatus(),
    status: async (_, args, ___) => await StatusResolver.getStatus(args.id),

    // LANGUAGE
    languages: async (_, __, ___) => await LanguageResolver.getLanguages(),
    language: async (_, args, ___) => await LanguageResolver.getLanguage(args.id),

    // TRAINER
    trainers: async (_, __, ___) => await TrainerResolver.getTrainers(),
    trainer: async (_, args, ___) => await TrainerResolver.getTrainer(args.id),

    // FORMATION
    formations: async (_, __, ___) => await FormationResolver.getFormations(),
    formation: async (_, args, ___) => await FormationResolver.getFormation(args.id),

  }
}

module.exports = { typeDefs, resolvers };