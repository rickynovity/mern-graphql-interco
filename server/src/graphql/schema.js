const { makeExecutableSchema } = require('@graphql-tools/schema')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
const QueryType = require('./type/QueryType')
const CategoryType = require('./type/CategoryType')
const MutationType = require('./type/MutationType')
const StatusType = require('./type/StatusType')
const LanguageType = require('./type/LanguageType')
const TrainerType = require('./type/TrainerType')
const FormationType = require('./type/FormationType')


const typeDefs = mergeTypeDefs([
  QueryType.typeDefs,
  CategoryType.typeDefs,
  MutationType.typeDefs,
  StatusType.typeDefs,
  LanguageType.typeDefs,
  TrainerType.typeDefs,
  FormationType.typeDefs,
])

const resolvers = mergeResolvers([
  QueryType.resolvers,
  CategoryType.resolvers,
  MutationType.resolvers,
  StatusType.resolvers,
  LanguageType.resolvers,
  TrainerType.resolvers,
  FormationType.resolvers,
])

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = { typeDefs, resolvers, schema }

