const gql = require('graphql-tag')
const AnswerRepository = require('../repository/answer.repository')
const UserRepository = require( '../repository/user.repository' )
const Repository = require( '../repository/Repository' )

module.exports.typeDef = gql`
  input AnswerInput{
      _id:String!
      type: AnswerType!
      question_id: String!
      answer_id: String!
      solution: String!
  }
  extend type Mutation {
    addAnswer(input: AnswerInput!): Answer!
    editAnswer(input: AnswerInput!): Answer!
    deleteAnswer(input: AnswerInput!): Boolean!
  }
  enum AnswerType {
      ANSWER
      REPLY
  }
  type Answer {
    _id: String!
    question_id: String
    answer_id: String
    solution: String!
    user_id: String!
    type: AnswerType!
    replies: [Answer]
    user: User
  }
`;
module.exports.resolvers = {
  AnswerType: {
    ANSWER: 0,
    REPLY: 1
  },
  Mutation: {
    addAnswer: (obj,arguments,{db,user},info) => {
      if ( user === null ){
        return new Error("User Not LoggedIn")
      }
      const args = arguments.input
      return new AnswerRepository(db,user._id)
        .create(args.type,args.question_id,args.answer_id,args.solution)
    },
    editAnswer: (obj,arguments,{db,user},info) => {
      const args = arguments.input
      const answerRepo = new AnswerRepository(db,user._id)
      return answerRepo.getAnswer(args._id)
        .then(answer => {
          if ( user.canEditAnswer(answer) ){
            return answerRepo.updateAnswer(args._id,args.solution)
          }else{
            throw new Error("User Cannot Edit Answer")
          }
        })
        .then(answer => {
          return answer
        }) 
    },
    deleteAnswer: (obj,arguments,{db,user},info) => {
      const args = arguments.input
      const answerRepo = new AnswerRepository(db,user._id)
      return answerRepo.getAnswer(args._id)
        .then(answer => {
          if ( user.canEditAnswer(answer) ){
        
            return answerRepo.deleteAnswer(args._id)
          }else{
            throw new Error("User Cannot Delete Answer")
          }
        })
        .then(answer => {
          return answer
        })
    }
  },
  Answer: {
    replies: ( obj, args, context, info ) => {
      return new AnswerRepository( context.db ).getAllAnswers( {
        type: 1,
        answer_id: obj._id.toString()
      } )
    },
    user: (obj,args,{db},info) => {
      return new UserRepository(db,{_id:obj.user_id}).findUserById()
    }
  }
};