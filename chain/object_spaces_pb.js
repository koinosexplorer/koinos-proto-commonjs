// source: koinos/chain/object_spaces.proto
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

goog.exportSymbol('proto.koinos.chain.system_space_id', null, global);
/**
 * @enum {number}
 */
proto.koinos.chain.system_space_id = {
  RESERVED_ID: 0,
  METADATA: 1,
  SYSTEM_CALL_DISPATCH: 3,
  CONTRACT_BYTECODE: 4,
  CONTRACT_METADATA: 5,
  TRANSACTION_NONCE: 6
};

goog.object.extend(exports, proto.koinos.chain);
