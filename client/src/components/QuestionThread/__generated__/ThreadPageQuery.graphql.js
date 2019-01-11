/**
 * @flow
 * @relayHash 125f96e92b35e91f7874c4263daabccf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type QuestionDescription_question$ref = any;
export type ThreadPageQueryVariables = {|
  pageID: string
|};
export type ThreadPageQueryResponse = {|
  +question: {|
    +$fragmentRefs: QuestionDescription_question$ref
  |}
|};
export type ThreadPageQuery = {|
  variables: ThreadPageQueryVariables,
  response: ThreadPageQueryResponse,
|};
*/


/*
query ThreadPageQuery(
  $pageID: String!
) {
  question(id: $pageID) {
    ...QuestionDescription_question
  }
}

fragment QuestionDescription_question on Question {
  _id
  query
  description
  user {
    _id
    email
  }
  answers {
    ...AnswerList_answers
  }
  replies {
    ...ReplyList_replies
  }
}

fragment AnswerList_answers on Answer {
  ...AnswerItem_answer
}

fragment ReplyList_replies on Answer {
  ...ReplyItem_reply
}

fragment ReplyItem_reply on Answer {
  _id
  solution
}

fragment AnswerItem_answer on Answer {
  _id
  solution
  user {
    email
  }
  replies {
    ...ReplyItem_reply
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
    "kind": "Variable",
    "name": "id",
    "variableName": "pageID",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "solution",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "replies",
  "storageKey": null,
  "args": null,
  "concreteType": "Answer",
  "plural": true,
  "selections": [
    v2,
    v4
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ThreadPageQuery",
  "id": null,
  "text": "query ThreadPageQuery(\n  $pageID: String!\n) {\n  question(id: $pageID) {\n    ...QuestionDescription_question\n  }\n}\n\nfragment QuestionDescription_question on Question {\n  _id\n  query\n  description\n  user {\n    _id\n    email\n  }\n  answers {\n    ...AnswerList_answers\n  }\n  replies {\n    ...ReplyList_replies\n  }\n}\n\nfragment AnswerList_answers on Answer {\n  ...AnswerItem_answer\n}\n\nfragment ReplyList_replies on Answer {\n  ...ReplyItem_reply\n}\n\nfragment ReplyItem_reply on Answer {\n  _id\n  solution\n}\n\nfragment AnswerItem_answer on Answer {\n  _id\n  solution\n  user {\n    email\n  }\n  replies {\n    ...ReplyItem_reply\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ThreadPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": v1,
        "concreteType": "Question",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "QuestionDescription_question",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ThreadPageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": v1,
        "concreteType": "Question",
        "plural": false,
        "selections": [
          v2,
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
              v2,
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "answers",
            "storageKey": null,
            "args": null,
            "concreteType": "Answer",
            "plural": true,
            "selections": [
              v2,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "user",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v3
                ]
              },
              v5
            ]
          },
          v5
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '212ecc4df0b016e34a4745f0fababbd5';
module.exports = node;
