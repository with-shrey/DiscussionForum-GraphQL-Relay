class Question{
  constructor({_id=null,query=null,user_id=null,description=null}){
    this._id = _id
    this.query = query
    this.description = description
    this.user_id = user_id
    
  }
  static getName(){
    return 'questions'
  }
  static getCollection(db){
    return db.collection(Question.getName())
  }
}

module.exports = Question