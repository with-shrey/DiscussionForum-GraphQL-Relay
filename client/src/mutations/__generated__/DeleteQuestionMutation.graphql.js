/**
 * @flow
 * @relayHash 8a6f0f29d235f008311f854f5ab13e1b
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
export type DeleteQuestionMutationVariables = {|
  input: QuestionInput
|};
export type DeleteQuestionMutationResponse = {|
  +deleteQuestion: ?boolean
|};
export type DeleteQuestionMutation = {|
  variables: DeleteQuestionMutationVariables,
  response: DeleteQuestionMutationResponse,
|};
*/


/*
mutation DeleteQuestionMutation(
  $input: QuestionInput!
) {
  deleteQuestion(input: $input)
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
    "kind": "ScalarField",
    "alias": null,
    "name": "deleteQuestion",
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "QuestionInput!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteQuestionMutation",
  "id": null,
  "text": "mutation DeleteQuestionMutation(\n  $input: QuestionInput!\n) {\n  deleteQuestion(input: $input)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteQuestionMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'acb58de3e9b5eeff4ac139285bea1e4d';
module.exports = node;
