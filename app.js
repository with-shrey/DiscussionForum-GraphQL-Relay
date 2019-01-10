const cors = require('cors')
const express = require('express');
const graphqlHTTP = require('express-graphql');
const UserRepository  = require('./repository/user.repository');
const schema = require('./graphql')
const loaders = require('./loaders')
var app = express();
const mongo = require('./models')
const ObjectId = require('mongodb').ObjectId;
ObjectId.prototype.valueOf = function () {
  return this.toString();
};

mongo().then(instance => {
  app.use('/graphql',
    cors(),
    (req,res,next) => {
    req.loaders = loaders()
      if ( req.headers['authorization'] ) {
        const ur = new UserRepository(instance)
        ur.getUserFromToken(req.headers['authorization'])
          .then(user =>{
              req.user = user
              next()
          })
          .catch(err => {
            req.user = null
            next()
          })
    }else{
      req.user = null
        next()
      }
  },
    graphqlHTTP((req) => ({
    schema: schema,
    graphiql: true,
    context:{
      db: instance,
      user: req.user,
      loaders: req.loaders
    }
  })));
  app.listen(4000);
  console.log('Running a GraphQL API server at localhost:4000/graphql');
})
