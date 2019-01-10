/**
 * @flow
 * @relayHash 42131a64e5d541c23017db98daa79c71
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionQueryVariables = {|
  pageID: string
|};
export type QuestionQueryResponse = {|
  +question: ?{|
    +_id: string,
    +query: string,
    +description: string,
  |}
|};
export type QuestionQuery = {|
  variables: QuestionQueryVariables,
  response: QuestionQueryResponse,
|};
*/


/*
query QuestionQuery(
  $pageID: String!
) {
  question(id: $pageID) {
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
    "name": "pageID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "question",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "pageID",
        "type": "String!"
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
  "operationKind": "query",
  "name": "QuestionQuery",
  "id": null,
  "text": "query QuestionQuery(\n  $pageID: String!\n) {\n  question(id: $pageID) {\n    _id\n    query\n    description\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QuestionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "QuestionQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '89781ce46c68f890fba7b97b3ce31bfa';
module.exports = node;
