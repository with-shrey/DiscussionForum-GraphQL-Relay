/**
 * @flow
 * @relayHash 7ff9fcc186960af26bd641ffa9b6888e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type QuestionList_questions$ref = any;
export type QuestionListPageQueryVariables = {||};
export type QuestionListPageQueryResponse = {|
  +questions: $ReadOnlyArray<?{|
    +$fragmentRefs: QuestionList_questions$ref
  |}>
|};
export type QuestionListPageQuery = {|
  variables: QuestionListPageQueryVariables,
  response: QuestionListPageQueryResponse,
|};
*/


/*
query QuestionListPageQuery {
  questions {
    ...QuestionList_questions
  }
}

fragment QuestionList_questions on Question {
  ...Question_question
}

fragment Question_question on Question {
  _id
  query
  description
  user_id
  user {
    email
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "QuestionListPageQuery",
  "id": null,
  "text": "query QuestionListPageQuery {\n  questions {\n    ...QuestionList_questions\n  }\n}\n\nfragment QuestionList_questions on Question {\n  ...Question_question\n}\n\nfragment Question_question on Question {\n  _id\n  query\n  description\n  user_id\n  user {\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QuestionListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "questions",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "QuestionList_questions",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QuestionListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "questions",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
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
            "kind": "ScalarField",
            "alias": null,
            "name": "user_id",
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
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'fafa41e7b25d8e358c1bfccd6bfa12b0';
module.exports = node;
