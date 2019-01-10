const { merge } = require('lodash');
const gql = require('graphql-tag');
const {
  typeDef : User,
  resolvers : userResolvers,
} =  require('./user.type');
const {
  typeDef : Question,
  resolvers : questionResolvers,
} =  require('./question.type');
const {
  typeDef : Answer,
  resolvers : answerResolvers,
} =  require('./answer.type');
const { makeExecutableSchema } = require('graphql-tools')

// If you had Query fields not associated with a
// specific type you could put them here
const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
     _empty: String
  }
`;
const resolvers = {};
module.exports = makeExecutableSchema({
  typeDefs: [
    Query,
    User ,
    Question,
    Answer
  ],
  resolvers: merge(
    resolvers,
    userResolvers,
    questionResolvers,
    answerResolvers
  ),
});