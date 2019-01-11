const cors = require('cors')
const express = require('express');
const graphqlHTTP = require('express-graphql');
const UserRepository  = require('./repository/user.repository');
const schema = require('./graphql')
const loaders = require('./loaders')
var app = express();
const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const { SubscriptionServer   } = require('subscriptions-transport-ws');
const PORT = 4000
const pubsub = require('./subscription')

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
      subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
      schema: schema,
    graphiql: true,
    context:{
      db: instance,
      user: req.user,
      loaders: req.loaders,
      pubsub
    }
  })));
  // Create listener server by wrapping express app
  const webServer = createServer(app);
  
  webServer.listen(PORT, () => {
    console.log(`GraphQL is now running on http://localhost:${PORT}`);
    
    // Set up the WebSocket for handling GraphQL subscriptions.
    new SubscriptionServer({
      execute,
      subscribe,
      schema,
    }, {
      server: webServer,
      path: '/subscriptions',
    });
    
  });
})
