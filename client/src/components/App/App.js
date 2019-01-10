import React, { Component } from 'react';
import asyncComponent from '../common/asyncComponent'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import AuthenticatedRoute from '../routes/AuthenticatedRoute'
import UnauthenticatedRoute from '../routes/UnauthenticatedRoute'
import Nav from '../common/Nav'

const AsyncLogin = asyncComponent(() => import("../Login/Login"));
const AsyncRegister = asyncComponent(() => import("../Register/Register"));
const AsyncQuestionListPage = asyncComponent(() => import("../QuestionList/QuestionListPage"));
const AsyncNewQuestion = asyncComponent(() => import("../AddQuestion/QuestionPage"));
const AsyncQuestionThread = asyncComponent(() => import("../QuestionThread/ThreadPage"));

class App extends Component {
  
 
  render() {
    return (
      <Router>
        <div>
        <Route component={Nav}/>
        <Switch>
          <Route exact path="/" component={AsyncQuestionListPage} />
          <AuthenticatedRoute exact path="/new" component={AsyncNewQuestion} />
          <AuthenticatedRoute exact path="/edit/:id" component={AsyncNewQuestion} />
          <Route exact path="/thread/:id" component={AsyncQuestionThread} />
          <UnauthenticatedRoute exact path="/login" component={AsyncLogin} />
          <UnauthenticatedRoute exact path="/register" component={AsyncRegister} />
          {/*<Route path="/topics" component={Topics} />*/}
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
