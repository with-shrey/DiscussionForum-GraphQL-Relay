import {commitMutation} from 'react-relay';
import environment from '../Emviornment'
import graphql from 'babel-plugin-relay/macro'
const mutation = graphql`
    mutation LoginMutation(
    $input: LoginInput!
    ) {
        login(input:$input){
            token
            user{
                _id
                firstName
                lastName
                email
            }
        }
    }
`;

function loginMutation(email, password,callback) {
  const variables = {
     input:{
       email,
       password
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

export default loginMutation