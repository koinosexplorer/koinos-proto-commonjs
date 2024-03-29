// source: koinos/chain/system_call_ids.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.koinos.chain.system_call_id', null, global);
/**
 * @enum {number}
 */
proto.koinos.chain.system_call_id = {
  RESERVED_ID: 0,
  GET_HEAD_INFO: 1,
  APPLY_BLOCK: 2,
  APPLY_TRANSACTION: 3,
  APPLY_UPLOAD_CONTRACT_OPERATION: 4,
  APPLY_CALL_CONTRACT_OPERATION: 5,
  APPLY_SET_SYSTEM_CALL_OPERATION: 6,
  APPLY_SET_SYSTEM_CONTRACT_OPERATION: 7,
  PRE_BLOCK_CALLBACK: 8,
  POST_BLOCK_CALLBACK: 9,
  PRE_TRANSACTION_CALLBACK: 10,
  POST_TRANSACTION_CALLBACK: 11,
  PROCESS_BLOCK_SIGNATURE: 101,
  GET_TRANSACTION: 102,
  GET_TRANSACTION_FIELD: 103,
  GET_BLOCK: 104,
  GET_BLOCK_FIELD: 105,
  GET_LAST_IRREVERSIBLE_BLOCK: 106,
  GET_ACCOUNT_NONCE: 107,
  VERIFY_ACCOUNT_NONCE: 108,
  SET_ACCOUNT_NONCE: 109,
  REQUIRE_SYSTEM_AUTHORITY: 110,
  GET_ACCOUNT_RC: 201,
  CONSUME_ACCOUNT_RC: 202,
  GET_RESOURCE_LIMITS: 203,
  CONSUME_BLOCK_RESOURCES: 204,
  PUT_OBJECT: 301,
  REMOVE_OBJECT: 302,
  GET_OBJECT: 303,
  GET_NEXT_OBJECT: 304,
  GET_PREV_OBJECT: 305,
  LOG: 401,
  EVENT: 402,
  HASH: 501,
  RECOVER_PUBLIC_KEY: 502,
  VERIFY_MERKLE_ROOT: 503,
  VERIFY_SIGNATURE: 504,
  CALL_CONTRACT: 601,
  GET_ENTRY_POINT: 602,
  GET_CONTRACT_ARGUMENTS: 603,
  SET_CONTRACT_RESULT: 604,
  EXIT_CONTRACT: 605,
  GET_CONTRACT_ID: 606,
  GET_CALLER: 607,
  REQUIRE_AUTHORITY: 608
};

goog.object.extend(exports, proto.koinos.chain);
