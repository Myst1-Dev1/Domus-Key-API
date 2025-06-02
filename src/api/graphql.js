import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { config } from 'dotenv';
config();

import { connectToDb } from '../database/db.js';
import { immobileTypes } from '../graphql/schema.js';
import { resolvers } from '../graphql/resolvers.js';

const server = new ApolloServer({
  typeDefs: immobileTypes,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async () => {
    await connectToDb();
    return {};
  },
  cors: {
    origin: 'http://localhost:4200',
  },
});

export default handler;