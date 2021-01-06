"use strict";
// backend/src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const user_resolver_1 = require("./resolvers/user_resolver");
async function runServer() {
    const connection = await typeorm_1.createConnection();
    const schema = await type_graphql_1.buildSchema({
        resolvers: [user_resolver_1.UserResolver]
    });
    const server = new apollo_server_1.ApolloServer({ schema });
    await server.listen(8050);
    console.log('Servidor iniciado na porta ::8050');
}
runServer();
