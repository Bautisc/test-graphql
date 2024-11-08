// GraphQL test

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { db } from "./_db.js"

// types/schemas
import { typeDefs } from "./schema.js";

// resolvers
const resolvers = {
  Query: {
    users() {
      return db.users
    },
    sessions() {
      return db.sessions
    },
    userByID(_, args) {
      return db.users.find((user) => user.id === args.id)
    }
  }
}

// Setting th server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log('Server running at port', 4000)
