import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro'
import Question from './Question'
import { createFragmentContainer } from 'react-relay'

class QuestionList extends Component {
  constructor(props){
    super(props)
    this.state={
      user_id: -1
    }
  }
  componentWillMount(){
    let user=localStorage.getItem('USER')
    if ( user ){
      this.setState({user_id: JSON.parse(user)._id})
    }
    
  }
  render() {
    return (
      <div className="container">
        {
          this.props.questions.map(question  => {
            return <Question key={question._id} question={question} user_id={this.state.user_id} />
          })
        }
      </div>
    
  )
  }
}


export default createFragmentContainer(QuestionList,graphql`
    fragment QuestionList_questions on Question @relay(plural: true){
         ...Question_question
    }
`)
