import React,{Component} from 'react'
import {
  createFragmentContainer
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Link } from 'react-router-dom'
import AddAnswerReplyForm from './AddAnswerReplyForm'
import ReplyList from './ReplyList'

class AnswerItem extends Component {
  
  render(){
    return(
      <div className="row" style={{marginBottom: 20}}>
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <p className="card-text">{this.props.answer.solution}</p>
              <h6 className="card-subtitle mb-2 text-muted">{`By ${this.props.answer.user.email}`}</h6>
            </div>
            <ReplyList replies={this.props.answer.replies} />
            <AddAnswerReplyForm type={"REPLY"} answerId={this.props.answer._id} />
          </div>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(AnswerItem,graphql`
    fragment AnswerItem_answer on Answer{
        _id,
       solution,
        user{
            email
        }
       replies{
           ...ReplyItem_reply
       }
    }
`)