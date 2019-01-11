import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws'

const fetchQuery = (operation, variables) => {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `${localStorage.getItem('TOKEN')}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

// 2
const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text
  
  const subscriptionClient = new SubscriptionClient('ws://localhost:4000/subscriptions', {reconnect: true})
  subscriptionClient.subscribe({query, variables}, (error, result) => {
    observer.onNext({data: result})
  })
}

// 3
const network = Network.create(fetchQuery, setupSubscription)

const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});

export default environment;