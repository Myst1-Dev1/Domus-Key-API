import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { config } from 'dotenv';
config();

import { connectToDb } from '../src/database/db.js';
import { immobileTypes } from '../src/graphql/schema.js';
import { resolvers } from '../src/graphql/resolvers.js';

const server = new ApolloServer({
  typeDefs: immobileTypes,
  resolvers,
  introspection: true // permite schema explorer em produção
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