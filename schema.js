export const typeDefs = `#graphql

  type Users {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    bornIn: String!
    completedSessions: Int!           # number of completed sessions by the user
    remainingSessions: Int!           # remaining sessions.
    sessions: [Sessions!]              # list of sessions by the user
}

  type Sessions {
    id: ID!
    sessionNumber: Int!
    sessionDate: String
    userId: ID!
}

  type Query {
    users: [Users]
    userByID(id: ID!): Users
    sessions: [Sessions]
}
` 
