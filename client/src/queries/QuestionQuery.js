import {fetchQuery} from 'relay-runtime';
import environment from '../Emviornment'
import graphql from 'babel-plugin-relay/macro'
const query = graphql`
    query QuestionQuery($pageID: String!) {
        question(id: $pageID) {
            _id
            query
            description
        }
    }
`;



function QuestionQuery(id) {
  const variables = {
    pageID: id,
  };
  
  return fetchQuery(environment, query, variables)
  
}

export default QuestionQuery

