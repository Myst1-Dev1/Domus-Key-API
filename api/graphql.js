import Cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { config } from 'dotenv';
config();

import { connectToDb } from '../src/database/db.js';
import { immobileTypes } from '../src/graphql/schema.js';
import { resolvers } from '../src/graphql/resolvers.js';

const cors = Cors({
  origin: ['http://localhost:4200','https://domus-key.vercel.app'],
  credentials: true,
});

const server = new ApolloServer({
  typeDefs: immobileTypes,
  resolvers,
  introspection: true,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  await connectToDb();
  const apolloHandler = startServerAndCreateNextHandler(server);
  return apolloHandler(req, res);
}
