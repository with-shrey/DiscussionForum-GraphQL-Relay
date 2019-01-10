import {commitMutation} from 'react-relay';
import environment from '../Emviornment'
import graphql from 'babel-plugin-relay/macro'
const mutation = graphql`
    mutation RegistrationMutation(
    $input: RegistrationInput!
    ) {
        register(input:$input){
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

function registrationMutation(firstName,lastName,email, password,callback) {
  const variables = {
    input:{
      firstName,
      lastName,
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

export default registrationMutation