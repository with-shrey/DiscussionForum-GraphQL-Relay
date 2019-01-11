const { QUESTION_ADDED_TOPIC } = require('../constants')

const gql = require('graphql-tag')
const UserRepository = require('../repository/user.repository')
const QuestionRepository = require('../repository/question.repository')
const AnswerRepository = require('../repository/answer.repository')
const Repository = require( '../repository/Repository' )
const pubsub = require('../subscription')

module.exports.typeDef = gql`
  extend type Query {
    question(id: String!): Question!
    questions: [Question]!
  }
  input QuestionInput{
      _id: String,
      query: String!
      description: String!
  }
  extend type Mutation{
      addQuestion(input: QuestionInput!):Question!
      editQuestion(input: QuestionInput!):Question
      deleteQuestion(input: QuestionInput!):Boolean
  }
  extend type Subscription{
      questionAdded: Question
  }
  type Question {
    _id: String!
    query: String!
    description: String!
    user_id: String!
    answers: [Answer]!
    replies: [Answer]
    user: User
  }
`;
module.exports.resolvers = {
  Query: {
    questions: ( obj, args, {db}, info) => {
      return new QuestionRepository(db)
        .getAllQuestions()
    },
    question: (obj,args,{db},info) => {
      return new QuestionRepository(db)
        .getQuestion(args.id)
    },
  },
  Mutation:{
    addQuestion: (obj, arguments, {db,user,pubsub}, info) => {
      const args = arguments.input
      const userRepo = new UserRepository(db,user)
      return userRepo.addQuestion(args.query,args.description,pubsub)
    },
    editQuestion: (obj, arguments, {db,user}, info) => {
      const args = arguments.input
      const questionRepo = new QuestionRepository(db,user._id)
        return questionRepo.getQuestion(args._id)
        .then(question => {
          if ( user.canEditQuestion(question) ){
            return questionRepo.updateQuestion(args._id,args.query,args.description)
          }else{
            throw new Error("User Cannot Edit Question")
          }
        })
          .then(question => {
            return question
          })
    },
    deleteQuestion: (obj, arguments, {db,user}, info) => {
      const args = arguments.input
      const questionRepo = new QuestionRepository(db,user._id)
      return questionRepo.getQuestion(args._id)
        .then(question => {
          if ( user.canEditQuestion(question) ){
            
            return questionRepo.deleteQuestion(args._id)
          }else{
            throw new Error("User Cannot Delete Question")
          }
        })
        .then(question => {
          return question
        })
    }
  },
  Subscription:{
    questionAdded: {  // create a channelAdded subscription resolver function.
      subscribe: () => pubsub.asyncIterator(QUESTION_ADDED_TOPIC)  // subscribe to changes in a topic
    }
  },
  Question: {
    answers: (obj, args, context, info) => {
      return new AnswerRepository(context.db).getAllAnswers({
        type:0,
        question_id: obj._id.toString()
      })
    },
    replies: (obj, args, context, info) => {
      return new AnswerRepository(context.db).getAllAnswers({
        type:1,
        question_id: obj._id.toString()
      })
    },
    user: (obj,args,{db},info) => {
      return new UserRepository(db,{_id:obj.user_id}).findUserById()
    }
  }
};