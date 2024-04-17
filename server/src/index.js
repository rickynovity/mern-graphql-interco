const colors = require('colors');
require('dotenv').config()

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const mongoose = require('mongoose')

const { schema, resolvers } = require('../src/graphql/schema')

// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');

const port = process.env.PORT || 4000;


const initDb = async (mongoUrl) => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.log(`❌ Error connecting to MongoDB: ${error.message}`.red.underline.bold);
  }
};

const startApolloServer = async () => {
  await initDb(process.env.MONGO_DB_URL);

  const server = new ApolloServer({ typeDefs: schema, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
  `);
}

startApolloServer();
