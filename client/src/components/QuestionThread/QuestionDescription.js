import React,{Component} from 'react'
import {
  createFragmentContainer
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Link } from 'react-router-dom'
import ReplyList from './ReplyList'
import AnswerList from './AnswerList'
import AddAnswerReplyForm from './AddAnswerReplyForm'

class QuestionDescription extends Component {
  render(){
    return(
      <div className="container" style={{paddingTop: 20}}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.question.query}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{`By ${this.props.question.user.email}`}</h6>
              <p className="card-text">{this.props.question.description}</p>
              {
                this.props.user_id === this.props.question.user._id &&
                <Link to={{
                  pathname: `/edit/${this.props.question._id}`,
                }} className="btn btn-warning">Edit Question</Link>
              }
              <ReplyList replies={this.props.question.replies} />
              <AddAnswerReplyForm type={"REPLY"} questionId={this.props.question._id} />
            </div>
          </div>
        </div>
      </div>
        <AnswerList answers={this.props.question.answers}/>
        <div className="row" style={{marginTop: 30}}>
          <div className="col-md-8 offset-md-2">
            <p className="display-4" style={{margin: 30, fontSize: 30}}>New Answer</p>
            <AddAnswerReplyForm retry={this.props.retry} className={'col-md-8 offset-md-2'}  type={"ANSWER"} questionId={this.props.question._id} />
          </div>
        </div>
      </div>
    )
  }
}


export default createFragmentContainer(QuestionDescription,graphql`
    fragment QuestionDescription_question on Question{
        _id,
        query,
        description,
        user{
            _id
            email
        },
        answers{
        ...AnswerList_answers
        },
        replies{
            ...ReplyList_replies
        }
    }
`)