import {
  requestSubscription
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro'
import environment from '../Emviornment'

const ReplySubscription = graphql`
    subscription ReplySubscription($answerId: String!) {
        replyAdded(answerId: $answerId){
            _id
            solution
            type
        }
    }
`

// 3
export default (answerId) => {
  
  const subscriptionConfig = {
    subscription: ReplySubscription,
    variables: {answerId},
    updater: proxyStore => {
      const question = proxyStore.getRootField('replyAdded')
      const _id = question.getValue('_id')
      const solution = question.getValue('solution')
      const type = question.getValue('type')
      console.log(solution)
      // const clientProxy = proxyStore.get('client:root:questions:0');
      // console.log(clientProxy)
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