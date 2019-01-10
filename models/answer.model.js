class Answer{
  constructor({_id=null,question_id=null,answer_id=null,solution=null,type = null}){
    this._id = _id
    this.question_id = question_id
    this.answer_id = answer_id
    this.solution = solution
    this.type = type
    
  }
  static getName(){
    return 'answers'
  }
  static getCollection(db){
    return db.collection(Answer.getName())
  }
}

module.exports = Answer