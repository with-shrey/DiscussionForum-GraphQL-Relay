import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import AnswerItem from './AnswerItem'
import ReplyItem from './ReplyItem'

class ReplyList extends Component {
  render() {
    return (
      <div className="container">
        {
          this.props.replies.length > 0 &&
          <div className="row">
            <div className="col-md-8">
              <p className="display-4" style={{marginTop: 10, fontSize: 20}}>Replies</p>
            </div>
          </div>
        }
        {
          this.props.replies.map(reply  => {
            return <ReplyItem key={reply._id} reply={reply} />
          })
        }
      </div>
    
    )
  }
}


export default createFragmentContainer(ReplyList,graphql`
    fragment ReplyList_replies on Answer @relay(plural: true){
        ...ReplyItem_reply
    }
`)
