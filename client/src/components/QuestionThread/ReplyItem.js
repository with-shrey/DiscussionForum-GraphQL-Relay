import React,{Component} from 'react'
import {
  createFragmentContainer
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

class ReplyItem extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <p className="card-text">{this.props.reply.solution}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(ReplyItem,graphql`
    fragment ReplyItem_reply on Answer{
        _id,
        solution
    }
`)