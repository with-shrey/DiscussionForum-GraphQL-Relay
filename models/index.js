const {MongoClient} = require('mongodb')
const { MONGO_URL,DB_NAME } = require('../constants')
const User = require('./user.model')
const Question = require('./question.model')
const Answer = require('./answer.model')

module.exports = async () => {
  const service = await MongoClient.connect(MONGO_URL,{ useNewUrlParser: true });
  const db = service.db(DB_NAME)
  return {
    User: User.getCollection(db),
    Question: Question.getCollection(db),
    Answer: Answer.getCollection(db),
  };
}