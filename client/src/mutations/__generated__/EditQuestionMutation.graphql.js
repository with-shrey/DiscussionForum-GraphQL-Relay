/**
 * @flow
 * @relayHash 6a885ba332f697913f1ed2d765ad811b
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
export type EditQuestionMutationVariables = {|
  input: QuestionInput
|};
export type EditQuestionMutationResponse = {|
  +editQuestion: ?{|
    +_id: string,
    +query: string,
    +description: string,
  |}
|};
export type EditQuestionMutation = {|
  variables: EditQuestionMutationVariables,
  response: EditQuestionMutationResponse,
|};
*/


/*
mutation EditQuestionMutation(
  $input: QuestionInput!
) {
  editQuestion(input: $input) {
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
    "name": "editQuestion",
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
  "name": "EditQuestionMutation",
  "id": null,
  "text": "mutation EditQuestionMutation(\n  $input: QuestionInput!\n) {\n  editQuestion(input: $input) {\n    _id\n    query\n    description\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EditQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "EditQuestionMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9618cc2e69fbc4ca4f613a0530545bd';
module.exports = node;
