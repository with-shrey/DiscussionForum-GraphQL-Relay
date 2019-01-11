/**
 * @flow
 * @relayHash a1ef39cf33ab809c00e1e0a77a327864
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AnswerType = "ANSWER" | "REPLY" | "%future added value";
export type ReplySubscriptionVariables = {|
  answerId: string
|};
export type ReplySubscriptionResponse = {|
  +replyAdded: ?{|
    +_id: string,
    +solution: string,
    +type: AnswerType,
  |}
|};
export type ReplySubscription = {|
  variables: ReplySubscriptionVariables,
  response: ReplySubscriptionResponse,
|};
*/


/*
subscription ReplySubscription(
  $answerId: String!
) {
  replyAdded(answerId: $answerId) {
    _id
    solution
    type
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "answerId",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "replyAdded",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "answerId",
        "variableName": "answerId",
        "type": "String!"
      }
    ],
    "concreteType": "Answer",
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
        "name": "solution",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "ReplySubscription",
  "id": null,
  "text": "subscription ReplySubscription(\n  $answerId: String!\n) {\n  replyAdded(answerId: $answerId) {\n    _id\n    solution\n    type\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReplySubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ReplySubscription",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1419d4a7fc2ca57b42587e5fd498821f';
module.exports = node;
