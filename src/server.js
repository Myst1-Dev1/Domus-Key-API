import { config } from 'dotenv';
config();

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectToDb } from './database/db.js'
import { immobileTypes } from './graphql/schema.js'
import { resolvers } from './graphql/resolvers.js';

async function startServer() {
    await connectToDb();

    const server = new ApolloServer({
        typeDefs: immobileTypes,
        resolvers
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port:process.env.PORT },
        cors: {
            origin: "*", // ou "*"
            credentials: true,
        }
    });

    console.log('Servidor rodando na porta', url);
};

startServer();