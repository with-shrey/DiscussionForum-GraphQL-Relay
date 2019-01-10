const gql = require('graphql-tag')
const UserRepository = require('../repository/user.repository')
const QuestionRepository = require('../repository/question.repository')

module.exports.typeDef = gql`
  extend type Query {
    me: User!
    profile: User!
  }
  input RegistrationInput {
      id: ID
      firstName: String!
      lastName: String!
      email: String!
      password: String!
  }
  input LoginInput {
      id: ID
      email: String!
      password: String!
  }
  extend type Mutation {
      register(input: RegistrationInput!): Token!
      login(input: LoginInput!): Token!
  }
  type Token{
    token: String!
    user: User!
  }
  type User {
    _id: String!
    firstName: String!
    lastName: String!
    email: String!
    questions: [Question]
    answers: [Answer]
  }
`;
module.exports.resolvers = {
  Query: {
    me: (obj, args, context, info) => {
      const userRepo = new UserRepository(context.db,context.user)
      return userRepo.findUserById()
    },
  },
  Mutation: {
    register: (obj, arguments, context, info) => {
      const args = arguments.input
      const user = new UserRepository(
        context.db
        )
      return user.create(
        args.firstName,
        args.lastName,
        args.email,
        args.password,
      )
    },
    login: (obj, arguments, context, info) => {
      const args = arguments.input
      return UserRepository.login(
        context.db.User,
        args.email,
        args.password
      )
    }
  },
  User: {
    questions: (obj, args, context, info) => {
      return new QuestionRepository(context.db,context.user._id)
        .getQuestionsOfUser()
    },
    answers: (obj, args, context, info) => { },
  }
};