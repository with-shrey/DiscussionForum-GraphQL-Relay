import {
  requestSubscription
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro'
import environment from '../Emviornment'

const QuestionSubscription = graphql`
    subscription QuestionSubscription {
        questionAdded{
           _id
           query
           description
            user{
                email
            }
       }
    }
`

// 3
export default () => {
  
  const subscriptionConfig = {
    subscription: QuestionSubscription,
    variables: {},
    updater: proxyStore => {
      const question = proxyStore.getRootField('questionAdded')
      const _id = question.getValue('_id')
      const query = question.getValue('query')
      const description = question.getValue('description')
      // const clientProxy = proxyStore.get('client:root:questions:0');
      console.log(query)
      // const newVote = createVoteField.getLinkedRecord('node')
      // const updatedLink = newVote.getLinkedRecord('link')
      // const linkId = updatedLink.getValue('id')
      // const newVotes = updatedLink.getLinkedRecord('_votesMeta')
      // const newVoteCount = newVotes.getValue('count')
      //
      // const link = proxyStore.get(linkId)
      // link.getLinkedRecord('votes').setValue(newVoteCount, 'count')
    },
    onError: error => console.log(`An error occured:`, error)
  }
  
  requestSubscription(
    environment,
    subscriptionConfig
  )
  
}