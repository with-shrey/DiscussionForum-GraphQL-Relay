/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AnswerItem_answer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AnswerList_answers$ref: FragmentReference;
export type AnswerList_answers = $ReadOnlyArray<{|
  +$fragmentRefs: AnswerItem_answer$ref,
  +$refType: AnswerList_answers$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AnswerList_answers",
  "type": "Answer",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "AnswerItem_answer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e9fdfba3dbe22a22068cc64be6022922';
module.exports = node;
