const DataLoader = require('dataloader')
const UserRepository = require('../repository/user.repository')
const QuestionRepository = require('../repository/question.repository')

module.exports = () => {
  fullUserLoader= new DataLoader((db,_id, limit = 0) => UserRepository.loadFullUser)
  questionLoader= new DataLoader((db, _id,limit = 0) => QuestionRepository.loadFullQuestion)
  
  return {
    fullUserLoader,
    questionLoader
  }
}