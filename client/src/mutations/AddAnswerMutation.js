import {commitMutation} from 'react-relay';
import environment from '../Emviornment'
import graphql from 'babel-plugin-relay/macro'
const mutation = graphql`
    mutation AddAnswerMutation(
    $input: AnswerInput!
    ) {
        addAnswer(input:$input){
            _id
        }
    }
`;

function AddAnswerMutation(type,solution,question_id ,answer_id,callback) {
  const variables = {
    input:{
      _id:"",
      type,
      question_id,
      answer_id,
      solution
    }
  };
  
  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: proxyStore =>{
      
      },
      onCompleted: (response, errors) => {
        callback(errors,response)
        window.location.reload()
      },
      onError: err => callback(err),
    },
  );
}

export default AddAnswerMutation