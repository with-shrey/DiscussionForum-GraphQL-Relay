const {SECRET} = require('../constants')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
ObjectId = require('mongodb').ObjectID;
const Repository = require('./Repository')
const QuestionRepository = require('../repository/question.repository')
// const AnswerRepository = require('../repository/answer.repository')
class UserRepository extends Repository{
  constructor(db,user = null){
    super()
    this.db = db
    this.UserCollection = db.User
    this.user = user
  }
  
  isNotAuthorised() {
    return ( this.user === null )
  }
  
  
   getUserFromToken(token){
     try {
      this.user = jwt.verify(token, SECRET);
      return this.findUserById()
    } catch(err) {
      return Promise.reject("Invalid Access Token")
    }
  }
  create(firstName,lastName,email,password){
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return new Promise((resolve,reject) => {
      this.UserCollection.insertOne({
        firstName : firstName,
        lastName : lastName,
        email : email,
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date()
      },(err,user) => {
        if ( err ){
          reject(err)
          return
        }
        this.user = user["ops"][0]
        resolve({
          token: jwt.sign( { _id: user.message.insertedId }, SECRET ),
          user: user["ops"][0]
        })
      })
    })
  }
  
  static login(userDb,email,password){
    return userDb.findOne({
      email
    }).then(user => {
      if (user && bcrypt.compareSync(password,user.password)){
        this.user = user
        return {
          token: jwt.sign( { _id: user._id }, SECRET ),
          user
        }
      }else{
        return new Error("Invalid Credentials")
      }
    })
    
  }
  
  findUserById(){
    if ( this.isNotAuthorised() ){
      return new Error("Not Authenticated")
  
    }
    return this.UserCollection.findOne({
      _id: UserRepository.toObjectId(this.user._id)
    }).then(user => {
      if ( user === null ){
        Promise.reject("No Such User")
        return
      }
      return new User( user )
    })
  }
  
  findUserForQuestion(){
    if ( this.isNotAuthorised() ){
      return new Error("Not Authenticated")
      
    }
    return this.UserCollection.findOne({
      _id: UserRepository.toObjectId(this.user._id)
    }).then(user => {
      if ( user === null ){
        Promise.reject("No Such User")
        return
      }
      return new User( user )
    })
  }
  
  static loadFullUser(db,_id){
  
  }
  
  
  /**
   * Questions
   */
  addQuestion(query,description,pubsub){
    if ( this.isNotAuthorised() ){
      return new Error("Not Authorised to add question")
    }
      return new QuestionRepository(this.db,this.user._id)
        .create(query,description,pubsub)
  }
}

module.exports = UserRepository