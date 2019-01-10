import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import AnswerItem from './AnswerItem'

class AnswerList extends Component {
  render() {
    return (
      <div className="container">
        {
          this.props.answers.length > 0 &&
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p className="display-4" style={{margin: 32, fontSize: 30}}>Answers</p>
            </div>
          </div>
        }
        {
         
          this.props.answers.map(answer  => {
            return <AnswerItem key={answer._id} answer={answer} />
          })
        }
      </div>
    
    )
  }
}


export default createFragmentContainer(AnswerList,graphql`
    fragment AnswerList_answers on Answer @relay(plural: true){
        ...AnswerItem_answer
    }
`)
