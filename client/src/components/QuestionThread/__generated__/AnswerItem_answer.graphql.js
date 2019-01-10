/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ReplyItem_reply$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AnswerItem_answer$ref: FragmentReference;
export type AnswerItem_answer = {|
  +_id: string,
  +solution: string,
  +user: ?{|
    +email: string
  |},
  +replies: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ReplyItem_reply$ref
  |}>,
  +$refType: AnswerItem_answer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AnswerItem_answer",
  "type": "Answer",
  "metadata": null,
  "argumentDefinitions": [],
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
          "name": "ReplyItem_reply",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd20d06b78b6656296f8bafb85eaca64f';
module.exports = node;
