/**
 * @flow
 * @relayHash 698e0f432b83e146c0f696653ad7e42f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionSubscriptionVariables = {||};
export type QuestionSubscriptionResponse = {|
  +questionAdded: ?{|
    +_id: string,
    +query: string,
    +description: string,
    +user: ?{|
      +email: string
    |},
  |}
|};
export type QuestionSubscription = {|
  variables: QuestionSubscriptionVariables,
  response: QuestionSubscriptionResponse,
|};
*/


/*
subscription QuestionSubscription {
  questionAdded {
    _id
    query
    description
    user {
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "questionAdded",
    "storageKey": null,
    "args": null,
    "concreteType": "Question",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "query",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "QuestionSubscription",
  "id": null,
  "text": "subscription QuestionSubscription {\n  questionAdded {\n    _id\n    query\n    description\n    user {\n      email\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QuestionSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "QuestionSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b49ebd1185ed89c2779d1d73111a1abe';
module.exports = node;
