import React, { Component } from 'react'
import {QueryRenderer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Emviornment'
import QuestionList from './QuestionList'
import LoadingIndicator from '../common/LoadingIndicator'
const QuestionListPageQuery = graphql`
  query QuestionListPageQuery{
      questions{
          ...QuestionList_questions
      }
  }
`;
class QuestionListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={QuestionListPageQuery}
        render={({error, props}) => {
          if (error) {
            return <LoadingIndicator error={error}/>;
          } else if (props) {
            return <QuestionList
              questions={props.questions}
            />
          }
          return <LoadingIndicator loading={true}/>;
        }}
      />
    );
  }
}

export default QuestionListPage

