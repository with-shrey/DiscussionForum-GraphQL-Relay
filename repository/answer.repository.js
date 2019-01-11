const Answer = require('../models/answer.model')
const Repository = require( './Repository' )
const jwt = require( 'jsonwebtoken' )
ObjectId = require('mongodb').ObjectID;
const pubsub = require('../subscription')
const ANSWER_ADDED_TOPIC = require( '../constants' ).ANSWER_ADDED_TOPIC

class AnswerRepository{
  constructor(db,user_id = null){
    this.db = db
    this.AnswerCollection = db.Answer
    this.user_id = user_id
  }
  
  isNotAuthorised(){
    return ( this.user_id === null )
  }
  
  create(type , question_id,answer_id, solution){
    return new Promise((resolve,reject) => {
      this.AnswerCollection.insertOne({
        type,
        question_id,
        answer_id,
        solution,
        user_id : this.user_id,
        createdAt: new Date(),
        updatedAt: null
      },(err,answer) => {
        if ( err ){
          reject(err)
          return
        }
        console.log(answer["ops"][0])
        pubsub.publish(ANSWER_ADDED_TOPIC,{answerAdded:answer["ops"][0]})
        resolve(
          answer["ops"][0]
        )
      })
    })
  }
  
  getAllAnswers(args = {}){
    return new Promise((resolve,reject) => {
      this.AnswerCollection.find(args)
        .toArray((err,answers) => {
          if ( err ){
            reject(err)
            return
          }
          console.log(answers)
          resolve(answers)
        })
      
    })
  }
  
  getAnswer(_id){
    return this.AnswerCollection.findOne({_id: Repository.toObjectId(_id)})
      .then(answer => {return (answer)})
  }
  
  updateAnswer( _id , solution ) {
    return new Promise( ( resolve, reject ) => {
      this.AnswerCollection.findOneAndUpdate(
        {
          _id: Repository.toObjectId( _id )
        },
        {
          $set: {
            solution
          }
        },
        {
          returnOriginal: false
        },
        ( err, answer ) => {
          if ( err ) {
            reject( err )
            return;
          }
          resolve( new Answer(answer.value) )
        } )
    } ).then(answer => {
      return answer
    })
  }
  
  deleteAnswer ( _id ) {
    return new Promise( ( resolve, reject ) => {
      this.AnswerCollection.remove(
        {
          $or:[
            {
              _id: Repository.toObjectId( _id )
            },
            {
              answer_id: Repository.toObjectId( _id )
            },
          ]
          
        },
        {
          justOne: false
        },
        ( err, answer ) => {
          if ( err ) {
            reject( err )
            return;
          }
          resolve(  true )
        } )
    } )
  }
  
  deleteAnswerByQuestionId(question_id){
    this.getAllAnswers({question_id:question_id})
      .then(answers => {
        return new Promise(resolve =>{
          const promises = []
          answers.forEach(answer => {
            promises.push(this.deleteAnswer(answer.id))
          })
          return Promise.all(promises).then(value => {
            return new Promise(resolve => resolve(true))
          })
        })
      })
  }
}

module.exports = AnswerRepository