/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ReplyItem_reply$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ReplyList_replies$ref: FragmentReference;
export type ReplyList_replies = $ReadOnlyArray<{|
  +$fragmentRefs: ReplyItem_reply$ref,
  +$refType: ReplyList_replies$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ReplyList_replies",
  "type": "Answer",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ReplyItem_reply",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8a13a0cd8da11fd96395043212cec6f2';
module.exports = node;
