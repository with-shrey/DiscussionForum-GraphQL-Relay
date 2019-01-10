/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Question_question$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuestionList_questions$ref: FragmentReference;
export type QuestionList_questions = $ReadOnlyArray<{|
  +$fragmentRefs: Question_question$ref,
  +$refType: QuestionList_questions$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "QuestionList_questions",
  "type": "Question",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Question_question",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'beb16642693c57395e9e0b241a6eccdb';
module.exports = node;
