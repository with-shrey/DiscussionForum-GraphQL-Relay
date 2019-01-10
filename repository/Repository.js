class Repository{
  constructor(){
  
  }
  
  static toObjectId(string){
    const ObjectId = require('mongodb').ObjectId;
    return ObjectId(string)
  };
}

module.exports = Repository