const QuestionRepository = require('../repository/question.repository')

class User{
  constructor({_id,firstName,lastName,email,createdAt,updatedAt}){
    this._id = _id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
  
  
  static getName(){
    return 'users'
  }
  
  static getCollection(db){
    
    const user =  db.collection(User.getName())
    user.createIndex("email",{unique: true})
    return user;
  }
  
  /**
   * Policies
   */
  
  canEditQuestion(question){
    return question != null && this._id != null && (question.user_id.toString() === this._id.toString())
  }
  canEditAnswer(answer){
    return answer.user_id.toString() === this._id.toString()
  }
  
}

module.exports = User
