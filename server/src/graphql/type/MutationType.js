const { gql } = require('graphql-tag');
const { CategoryResolver, StatusResolver, LanguageResolver, TrainerResolver, FormationResolver } = require('../resolver');

const typeDefs = gql`
  type CategoryActionMutationResponse {
    ok: Boolean
    error: String
    category: Category
    categories: [Category]
  }

  type StatusActionMutationResponse {
    ok: Boolean
    error: String
    status: Status
    allStatus: [Status]
  }

  type LanguageActionMutationResponse {
    ok: Boolean
    error: String
    language: Language
    languages: [Language]
  }

  type TrainerActionMutationResponse {
    ok: Boolean
    error: String
    trainer: Trainer
    trainers: [Trainer]
  }

  type FormationActionMutationResponse {
    ok: Boolean
    error: String
    formation: Formation
    formations: [Formation]
  }

  input CategoryInput {
    name: String!
  }

  input StatusInput {
    name: String!
  }

  input LanguageInput {
    name: String!
  }

  input TrainerInput {
    name: String!
    biography: String
    contact: TrainerContactInput
  }

  input TrainerContactInput {
    email: String
    phone: String
  }

  input FormationInput {
    objectives: String!
    title: String!
    source: String
    progress: Int
    startDate: String
    endDate: String
    categoryId: ID!
    statusId: ID!
    languageId: ID!
    trainerId: ID!
  }

  type Mutation {
    # CATEGORY
    createCategory(input: CategoryInput!): Category!
    deleteCategory(id: ID!): CategoryActionMutationResponse
    deleteCategories: CategoryActionMutationResponse
    updateCategory(id: ID!, input: CategoryInput!): Category

    # STATUS
    createStatus(input: StatusInput!): Status!
    deleteStatus(id: ID!): StatusActionMutationResponse
    deleteAllStatus: StatusActionMutationResponse
    updateStatus(id: ID!, input: StatusInput!): Status

    # LANGUAGE
    createLanguage(input: LanguageInput!): Language!
    deleteLanguage(id: ID!): LanguageActionMutationResponse
    deleteLanguages: LanguageActionMutationResponse
    updateLanguage(id: ID!, input: LanguageInput!): Language   
  
    # TRAINER
    createTrainer(input: TrainerInput!): Trainer!
    deleteTrainer(id: ID!): TrainerActionMutationResponse
    deleteTrainers: TrainerActionMutationResponse
    updateTrainer(id: ID!, input: TrainerInput!): Trainer

    # FORMATION
    createFormation(input: FormationInput!): Formation!
    deleteFormation(id: ID!): FormationActionMutationResponse
    deleteFormations: FormationActionMutationResponse
    updateFormation(id: ID!, input: FormationInput!): Formation
    
  }



`;

const resolvers = {
  Mutation: {
    // CATEGORY
    createCategory: async (_, { input }, ___) => await CategoryResolver.createCategory(input),
    deleteCategory: async (_, { id }, ___) => await CategoryResolver.deleteCategory(id),
    deleteCategories: async (_, __, ___) => await CategoryResolver.deleteCategories(),
    updateCategory: async (_, { id, input }, ___) => await CategoryResolver.updateCategory(id, input),

    // STATUS
    createStatus: async (_, { input }, ___) => await StatusResolver.createStatus(input),
    deleteStatus: async (_, { id }, ___) => await StatusResolver.deleteStatus(id),
    deleteAllStatus: async (_, __, ___) => await StatusResolver.deleteAllStatus(),
    updateStatus: async (_, { id, input }, ___) => await StatusResolver.updateStatus(id, input),

    // LANGUAGE
    createLanguage: async (_, { input }, ___) => await LanguageResolver.createLanguage(input),
    deleteLanguage: async (_, { id }, ___) => await LanguageResolver.deleteLanguage(id),
    deleteLanguages: async (_, __, ___) => await LanguageResolver.deleteLanguages(),
    updateLanguage: async (_, { id, input }, ___) => await LanguageResolver.updateLanguage(id, input),

    // TRAINER
    createTrainer: async (_, { input }, ___) => await TrainerResolver.createTrainer(input),
    deleteTrainer: async (_, { id }, ___) => await TrainerResolver.deleteTrainer(id),
    deleteTrainers: async (_, __, ___) => await TrainerResolver.deleteTrainers(),
    updateTrainer: async (_, { id, input }, ___) => await TrainerResolver.updateTrainer(id, input),

    // FORMATION
    createFormation: async (_, { input }, ___) => await FormationResolver.createFormation(input),
    deleteFormation: async (_, { id }, ___) => await FormationResolver.deleteFormation(id),
    deleteFormations: async (_, __, ___) => await FormationResolver.deleteFormations(),
    updateFormation: async (_, { id, input }, ___) => await FormationResolver.updateFormation(id, input),

  },
};

module.exports = { typeDefs, resolvers };
