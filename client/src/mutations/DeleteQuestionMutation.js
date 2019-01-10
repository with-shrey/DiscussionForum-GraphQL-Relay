import {commitMutation} from 'react-relay';
import environment from '../Emviornment'
import graphql from 'babel-plugin-relay/macro'
const mutation = graphql`
    mutation DeleteQuestionMutation(
    $input: QuestionInput!
    ) {
        deleteQuestion(input:$input)
    }
`;

function DeleteQuestionMutation(_id,callback) {
  const variables = {
    input:{
      _id,
      query:"",
      description:""
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

export default DeleteQuestionMutation