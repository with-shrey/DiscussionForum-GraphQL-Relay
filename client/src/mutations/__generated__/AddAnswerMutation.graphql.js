/**
 * @flow
 * @relayHash 1db41797197b7c0a0a41c79da9d5014f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AnswerType = "ANSWER" | "REPLY" | "%future added value";
export type AnswerInput = {
  _id: string,
  type: AnswerType,
  question_id: string,
  answer_id: string,
  solution: string,
};
export type AddAnswerMutationVariables = {|
  input: AnswerInput
|};
export type AddAnswerMutationResponse = {|
  +addAnswer: {|
    +_id: string
  |}
|};
export type AddAnswerMutation = {|
  variables: AddAnswerMutationVariables,
  response: AddAnswerMutationResponse,
|};
*/


/*
mutation AddAnswerMutation(
  $input: AnswerInput!
) {
  addAnswer(input: $input) {
    _id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AnswerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addAnswer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AnswerInput!"
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddAnswerMutation",
  "id": null,
  "text": "mutation AddAnswerMutation(\n  $input: AnswerInput!\n) {\n  addAnswer(input: $input) {\n    _id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddAnswerMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '575252badabed08714307b4245ab1be5';
module.exports = node;
