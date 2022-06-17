const { gql } = require('apollo-server-express'); 


const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
}
  type Query {
    helloWorld: String
  }

#   type Mutation {

#   }
`;

module.exports = typeDefs;