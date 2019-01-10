/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AnswerList_answers$ref = any;
type ReplyList_replies$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuestionDescription_question$ref: FragmentReference;
export type QuestionDescription_question = {|
  +_id: string,
  +query: string,
  +description: string,
  +user: ?{|
    +_id: string,
    +email: string,
  |},
  +answers: $ReadOnlyArray<?{|
    +$fragmentRefs: AnswerList_answers$ref
  |}>,
  +replies: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ReplyList_replies$ref
  |}>,
  +$refType: QuestionDescription_question$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "QuestionDescription_question",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
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
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "email",
          "args": null,
          "storageKey": null
        }
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
        {
          "kind": "FragmentSpread",
          "name": "AnswerList_answers",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "replies",
      "storageKey": null,
      "args": null,
      "concreteType": "Answer",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ReplyList_replies",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e71f399b55639da4c8504e8518ae536';
module.exports = node;
