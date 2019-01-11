import React, { Component } from 'react'
import {QueryRenderer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Emviornment'
import LoadingIndicator from '../common/LoadingIndicator'
import QuestionDescription from './QuestionDescription'
import QuestionSubscription from '../../subscriptions/QuestionSubscription'
import AnswerSubscription from '../../subscriptions/AnswerSubscription'
const ThreadPageQuery = graphql`
    query ThreadPageQuery($pageID: String!){
            question(id: $pageID) {
                ...QuestionDescription_question
            }
    }
`;
class ThreadPage extends Component {
  constructor(props){
    super(props)
    this.state={
      id:'',
      user_id: -1
    }
  }
 
  componentWillMount(){
    this.setState({id:this.props.match.params.id})
    let user=localStorage.getItem('USER')
    if ( user ){
      this.setState({user_id: JSON.parse(user)._id})
    }
  }
  componentDidMount() {
    AnswerSubscription(this.state.id)
  }
  render() {
    return (
      <div>
        {
          this.state.id !== ''&&
          <QueryRenderer
            environment={environment}
            query={ThreadPageQuery}
            variables={{
              pageID: this.state.id,
            }}
            render={({error, props}) => {
              if (error) {
                return <LoadingIndicator loading={false} error={error}/>;
              } else if (props) {
                return <QuestionDescription
                  user_id={this.state.user_id}
                  question={props.question}
                />
              }
              return <LoadingIndicator error={null} loading={true}/>;
            }}
          />
        }
      </div>
    );
  }
}

export default ThreadPage

