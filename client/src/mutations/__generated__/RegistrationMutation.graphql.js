/**
 * @flow
 * @relayHash 20ecc04013ffa595cde412c86e7b7504
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegistrationInput = {
  id?: ?string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};
export type RegistrationMutationVariables = {|
  input: RegistrationInput
|};
export type RegistrationMutationResponse = {|
  +register: {|
    +token: string,
    +user: {|
      +_id: string,
      +firstName: string,
      +lastName: string,
      +email: string,
    |},
  |}
|};
export type RegistrationMutation = {|
  variables: RegistrationMutationVariables,
  response: RegistrationMutationResponse,
|};
*/


/*
mutation RegistrationMutation(
  $input: RegistrationInput!
) {
  register(input: $input) {
    token
    user {
      _id
      firstName
      lastName
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RegistrationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "register",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RegistrationInput!"
      }
    ],
    "concreteType": "Token",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
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
            "name": "_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          },
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RegistrationMutation",
  "id": null,
  "text": "mutation RegistrationMutation(\n  $input: RegistrationInput!\n) {\n  register(input: $input) {\n    token\n    user {\n      _id\n      firstName\n      lastName\n      email\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RegistrationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RegistrationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c5f25df9b0154352a488ece3acae4ec5';
module.exports = node;
