/**
 * @flow
 * @relayHash dc41f3bd3c9257ccaca3bb18a599ef8f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AnswerType = "ANSWER" | "REPLY" | "%future added value";
export type AnswerSubscriptionVariables = {|
  questionId: string
|};
export type AnswerSubscriptionResponse = {|
  +answerAdded: ?{|
    +_id: string,
    +solution: string,
    +type: AnswerType,
  |}
|};
export type AnswerSubscription = {|
  variables: AnswerSubscriptionVariables,
  response: AnswerSubscriptionResponse,
|};
*/


/*
subscription AnswerSubscription(
  $questionId: String!
) {
  answerAdded(questionId: $questionId) {
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
    "name": "questionId",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "answerAdded",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "questionId",
        "variableName": "questionId",
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
  "name": "AnswerSubscription",
  "id": null,
  "text": "subscription AnswerSubscription(\n  $questionId: String!\n) {\n  answerAdded(questionId: $questionId) {\n    _id\n    solution\n    type\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AnswerSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AnswerSubscription",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '07732fb6015d85b02b9cf49a648bbba0';
module.exports = node;
