import React,{Component} from 'react'
import {
  createFragmentContainer
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Link } from 'react-router-dom'

class Question extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-8 offset-md-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.question.query}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.question.user.email}</h6>
          <p className="card-text">{this.props.question.description}</p>
          <Link to={`thread/${this.props.question._id}`} className="card-link">Open Thread</Link>
          {
            this.props.user_id === this.props.question.user_id &&
            <Link to={{
              pathname: `/edit/${this.props.question._id}`,
            }} className="card-link btn btn-warning">Edit Question</Link>
          }
        </div>
      </div>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(Question,graphql`
  fragment Question_question on Question{
      _id,
      query,
      description,
      user_id,
      user{
          email
      }
  }
`)