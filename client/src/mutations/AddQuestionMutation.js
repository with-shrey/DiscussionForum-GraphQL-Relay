import {commitMutation} from 'react-relay';
import environment from '../Emviornment'
import graphql from 'babel-plugin-relay/macro'
const mutation = graphql`
    mutation AddQuestionMutation(
    $input: QuestionInput!
    ) {
        addQuestion(input:$input){
            _id
            query
            description
        }
    }
`;

function addQuestionMutation(query,description,callback) {
  const variables = {
    input:{
     query,
      description
    }
  };
  
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        callback(errors,response)
      },
      onError: err => callback(err),
    },
  );
}

export default addQuestionMutation