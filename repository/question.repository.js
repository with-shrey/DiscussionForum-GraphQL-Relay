const Question = require('../models/question.model')
const Repository = require( './Repository' )
const AnswerRepository = require( './answer.repository' )
const jwt = require( 'jsonwebtoken' )
ObjectId = require('mongodb').ObjectID;

class QuestionRepository{
  constructor(db,user_id = null){
    this.db = db
    this.QuestionCollection = db.Question
    this.user_id = user_id
  }
  
  isNotAuthorised(){
    return ( this.user_id === null )
  }
  
  create(query,description){
    return new Promise((resolve,reject) => {
      this.QuestionCollection.insertOne({
        query: query,
        description: description,
        user_id : this.user_id,
        createdAt: new Date(),
        updatedAt: null
      },(err,question) => {
        if ( err ){
          console.log(err)
          reject(err)
          return
        }
        console.log(question["ops"][0])
        resolve(
          question["ops"][0]
        )
      })
    })
  }
  
  getAllQuestions(args = {}){
   return new Promise((resolve,reject) => {
      this.QuestionCollection.find(args)
        .toArray((err,questions) => {
          if ( err ){
            reject(err)
            return
          }
          resolve(questions)
        })
    
    })
  }
  
  getQuestion(_id){
    return this.QuestionCollection.findOne({_id: Repository.toObjectId(_id)})
      .then(question => {
        return (question)
      })
  }
  getQuestionsOfUser(){
    if(this.isNotAuthorised()){
        return new Error("UnAuthorised Request")
    }
   return this.getAllQuestions({user_id: ObjectId(this.user_id)})
  }
  static loadFullQuestion(db,_id){
  
  }
  
  updateQuestion( _id , query, description ) {
    return new Promise( ( resolve, reject ) => {
      this.QuestionCollection.findOneAndUpdate(
        {
          _id: Repository.toObjectId( _id )
        },
        {
          $set: {
            query,
            description
          }
        },
        {
          returnOriginal: false
        },
        ( err, question ) => {
          if ( err ) {
            reject( err )
            return;
          }
          resolve( new Question(question.value) )
        } )
    } ).then(question => {
      return question
    })
  }
  
  deleteQuestion ( _id ) {
    return new Promise( ( resolve, reject ) => {
      this.QuestionCollection.remove(
        {
          _id: Repository.toObjectId( _id )
        },
        ( err, question ) => {
          if ( err ) {
            reject( err )
            return;
          }
          resolve(true)
        } )
    } ).then(question => {
      return new AnswerRepository(this.db,this.user_id)
        .deleteAnswerByQuestionId(_id)
    })
  }
}

module.exports = QuestionRepository