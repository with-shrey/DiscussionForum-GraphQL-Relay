/**
 * @flow
 * @relayHash 6092d47d285bf5113de22532e48405bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionInput = {
  _id?: ?string,
  query: string,
  description: string,
};
export type AddQuestionMutationVariables = {|
  input: QuestionInput
|};
export type AddQuestionMutationResponse = {|
  +addQuestion: {|
    +_id: string,
    +query: string,
    +description: string,
  |}
|};
export type AddQuestionMutation = {|
  variables: AddQuestionMutationVariables,
  response: AddQuestionMutationResponse,
|};
*/


/*
mutation AddQuestionMutation(
  $input: QuestionInput!
) {
  addQuestion(input: $input) {
    _id
    query
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "QuestionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "QuestionInput!"
      }
    ],
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddQuestionMutation",
  "id": null,
  "text": "mutation AddQuestionMutation(\n  $input: QuestionInput!\n) {\n  addQuestion(input: $input) {\n    _id\n    query\n    description\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddQuestionMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f0aeb26c8c5311814557638a0adf738';
module.exports = node;
