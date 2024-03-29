// source: koinos/chain/system_calls.proto
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

var koinos_options_pb = require('../../koinos/options_pb.js');
goog.object.extend(proto, koinos_options_pb);
var koinos_common_pb = require('../../koinos/common_pb.js');
goog.object.extend(proto, koinos_common_pb);
var koinos_protocol_protocol_pb = require('../../koinos/protocol/protocol_pb.js');
goog.object.extend(proto, koinos_protocol_protocol_pb);
var koinos_chain_authority_pb = require('../../koinos/chain/authority_pb.js');
goog.object.extend(proto, koinos_chain_authority_pb);
var koinos_chain_chain_pb = require('../../koinos/chain/chain_pb.js');
goog.object.extend(proto, koinos_chain_chain_pb);
var koinos_chain_value_pb = require('../../koinos/chain/value_pb.js');
goog.object.extend(proto, koinos_chain_value_pb);
goog.exportSymbol('proto.koinos.chain.apply_block_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.apply_block_result', null, global);
goog.exportSymbol('proto.koinos.chain.apply_call_contract_operation_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.apply_call_contract_operation_result', null, global);
goog.exportSymbol('proto.koinos.chain.apply_set_system_call_operation_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.apply_set_system_call_operation_result', null, global);
goog.exportSymbol('proto.koinos.chain.apply_set_system_contract_operation_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.apply_set_system_contract_operation_result', null, global);
goog.exportSymbol('proto.koinos.chain.apply_transaction_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.apply_transaction_result', null, global);
goog.exportSymbol('proto.koinos.chain.apply_upload_contract_operation_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.apply_upload_contract_operation_result', null, global);
goog.exportSymbol('proto.koinos.chain.call_contract_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.call_contract_result', null, global);
goog.exportSymbol('proto.koinos.chain.consume_account_rc_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.consume_account_rc_result', null, global);
goog.exportSymbol('proto.koinos.chain.consume_block_resources_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.consume_block_resources_result', null, global);
goog.exportSymbol('proto.koinos.chain.database_object', null, global);
goog.exportSymbol('proto.koinos.chain.dsa', null, global);
goog.exportSymbol('proto.koinos.chain.event_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.event_result', null, global);
goog.exportSymbol('proto.koinos.chain.exit_contract_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.exit_contract_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_account_nonce_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_account_nonce_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_account_rc_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_account_rc_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_block_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_block_field_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_block_field_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_block_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_caller_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_caller_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_contract_arguments_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_contract_arguments_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_contract_id_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_contract_id_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_entry_point_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_entry_point_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_head_info_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_head_info_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_last_irreversible_block_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_last_irreversible_block_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_next_object_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_next_object_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_object_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_object_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_prev_object_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_prev_object_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_resource_limits_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_resource_limits_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_transaction_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_transaction_field_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.get_transaction_field_result', null, global);
goog.exportSymbol('proto.koinos.chain.get_transaction_result', null, global);
goog.exportSymbol('proto.koinos.chain.hash_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.hash_result', null, global);
goog.exportSymbol('proto.koinos.chain.log_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.log_result', null, global);
goog.exportSymbol('proto.koinos.chain.post_block_callback_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.post_block_callback_result', null, global);
goog.exportSymbol('proto.koinos.chain.post_transaction_callback_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.post_transaction_callback_result', null, global);
goog.exportSymbol('proto.koinos.chain.pre_block_callback_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.pre_block_callback_result', null, global);
goog.exportSymbol('proto.koinos.chain.pre_transaction_callback_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.pre_transaction_callback_result', null, global);
goog.exportSymbol('proto.koinos.chain.process_block_signature_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.process_block_signature_result', null, global);
goog.exportSymbol('proto.koinos.chain.put_object_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.put_object_result', null, global);
goog.exportSymbol('proto.koinos.chain.recover_public_key_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.recover_public_key_result', null, global);
goog.exportSymbol('proto.koinos.chain.remove_object_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.remove_object_result', null, global);
goog.exportSymbol('proto.koinos.chain.require_authority_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.require_authority_result', null, global);
goog.exportSymbol('proto.koinos.chain.require_system_authority_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.require_system_authority_result', null, global);
goog.exportSymbol('proto.koinos.chain.set_account_nonce_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.set_account_nonce_result', null, global);
goog.exportSymbol('proto.koinos.chain.set_contract_result_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.set_contract_result_result', null, global);
goog.exportSymbol('proto.koinos.chain.system_authorization_type', null, global);
goog.exportSymbol('proto.koinos.chain.verify_account_nonce_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.verify_account_nonce_result', null, global);
goog.exportSymbol('proto.koinos.chain.verify_merkle_root_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.verify_merkle_root_result', null, global);
goog.exportSymbol('proto.koinos.chain.verify_signature_arguments', null, global);
goog.exportSymbol('proto.koinos.chain.verify_signature_result', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_head_info_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_head_info_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_head_info_arguments.displayName = 'proto.koinos.chain.get_head_info_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_head_info_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_head_info_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_head_info_result.displayName = 'proto.koinos.chain.get_head_info_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_block_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_block_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_block_arguments.displayName = 'proto.koinos.chain.apply_block_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_block_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_block_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_block_result.displayName = 'proto.koinos.chain.apply_block_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_transaction_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_transaction_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_transaction_arguments.displayName = 'proto.koinos.chain.apply_transaction_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_transaction_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_transaction_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_transaction_result.displayName = 'proto.koinos.chain.apply_transaction_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_upload_contract_operation_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_upload_contract_operation_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_upload_contract_operation_arguments.displayName = 'proto.koinos.chain.apply_upload_contract_operation_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_upload_contract_operation_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_upload_contract_operation_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_upload_contract_operation_result.displayName = 'proto.koinos.chain.apply_upload_contract_operation_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_call_contract_operation_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_call_contract_operation_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_call_contract_operation_arguments.displayName = 'proto.koinos.chain.apply_call_contract_operation_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_call_contract_operation_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_call_contract_operation_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_call_contract_operation_result.displayName = 'proto.koinos.chain.apply_call_contract_operation_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_set_system_call_operation_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_set_system_call_operation_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_set_system_call_operation_arguments.displayName = 'proto.koinos.chain.apply_set_system_call_operation_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_set_system_call_operation_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_set_system_call_operation_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_set_system_call_operation_result.displayName = 'proto.koinos.chain.apply_set_system_call_operation_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_set_system_contract_operation_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_set_system_contract_operation_arguments.displayName = 'proto.koinos.chain.apply_set_system_contract_operation_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.apply_set_system_contract_operation_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.apply_set_system_contract_operation_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.apply_set_system_contract_operation_result.displayName = 'proto.koinos.chain.apply_set_system_contract_operation_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.pre_block_callback_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.pre_block_callback_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.pre_block_callback_arguments.displayName = 'proto.koinos.chain.pre_block_callback_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.pre_block_callback_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.pre_block_callback_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.pre_block_callback_result.displayName = 'proto.koinos.chain.pre_block_callback_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.post_block_callback_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.post_block_callback_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.post_block_callback_arguments.displayName = 'proto.koinos.chain.post_block_callback_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.post_block_callback_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.post_block_callback_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.post_block_callback_result.displayName = 'proto.koinos.chain.post_block_callback_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.pre_transaction_callback_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.pre_transaction_callback_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.pre_transaction_callback_arguments.displayName = 'proto.koinos.chain.pre_transaction_callback_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.pre_transaction_callback_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.pre_transaction_callback_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.pre_transaction_callback_result.displayName = 'proto.koinos.chain.pre_transaction_callback_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.post_transaction_callback_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.post_transaction_callback_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.post_transaction_callback_arguments.displayName = 'proto.koinos.chain.post_transaction_callback_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.post_transaction_callback_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.post_transaction_callback_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.post_transaction_callback_result.displayName = 'proto.koinos.chain.post_transaction_callback_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.process_block_signature_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.process_block_signature_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.process_block_signature_arguments.displayName = 'proto.koinos.chain.process_block_signature_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.process_block_signature_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.process_block_signature_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.process_block_signature_result.displayName = 'proto.koinos.chain.process_block_signature_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_transaction_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_transaction_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_transaction_arguments.displayName = 'proto.koinos.chain.get_transaction_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_transaction_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_transaction_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_transaction_result.displayName = 'proto.koinos.chain.get_transaction_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_transaction_field_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_transaction_field_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_transaction_field_arguments.displayName = 'proto.koinos.chain.get_transaction_field_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_transaction_field_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_transaction_field_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_transaction_field_result.displayName = 'proto.koinos.chain.get_transaction_field_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_block_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_block_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_block_arguments.displayName = 'proto.koinos.chain.get_block_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_block_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_block_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_block_result.displayName = 'proto.koinos.chain.get_block_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_block_field_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_block_field_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_block_field_arguments.displayName = 'proto.koinos.chain.get_block_field_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_block_field_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_block_field_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_block_field_result.displayName = 'proto.koinos.chain.get_block_field_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_last_irreversible_block_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_last_irreversible_block_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_last_irreversible_block_arguments.displayName = 'proto.koinos.chain.get_last_irreversible_block_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_last_irreversible_block_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_last_irreversible_block_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_last_irreversible_block_result.displayName = 'proto.koinos.chain.get_last_irreversible_block_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_account_nonce_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_account_nonce_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_account_nonce_arguments.displayName = 'proto.koinos.chain.get_account_nonce_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_account_nonce_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_account_nonce_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_account_nonce_result.displayName = 'proto.koinos.chain.get_account_nonce_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.verify_account_nonce_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.verify_account_nonce_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.verify_account_nonce_arguments.displayName = 'proto.koinos.chain.verify_account_nonce_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.verify_account_nonce_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.verify_account_nonce_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.verify_account_nonce_result.displayName = 'proto.koinos.chain.verify_account_nonce_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.set_account_nonce_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.set_account_nonce_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.set_account_nonce_arguments.displayName = 'proto.koinos.chain.set_account_nonce_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.set_account_nonce_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.set_account_nonce_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.set_account_nonce_result.displayName = 'proto.koinos.chain.set_account_nonce_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.require_system_authority_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.require_system_authority_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.require_system_authority_arguments.displayName = 'proto.koinos.chain.require_system_authority_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.require_system_authority_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.require_system_authority_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.require_system_authority_result.displayName = 'proto.koinos.chain.require_system_authority_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_account_rc_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_account_rc_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_account_rc_arguments.displayName = 'proto.koinos.chain.get_account_rc_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_account_rc_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_account_rc_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_account_rc_result.displayName = 'proto.koinos.chain.get_account_rc_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.consume_account_rc_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.consume_account_rc_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.consume_account_rc_arguments.displayName = 'proto.koinos.chain.consume_account_rc_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.consume_account_rc_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.consume_account_rc_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.consume_account_rc_result.displayName = 'proto.koinos.chain.consume_account_rc_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_resource_limits_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_resource_limits_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_resource_limits_arguments.displayName = 'proto.koinos.chain.get_resource_limits_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_resource_limits_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_resource_limits_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_resource_limits_result.displayName = 'proto.koinos.chain.get_resource_limits_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.consume_block_resources_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.consume_block_resources_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.consume_block_resources_arguments.displayName = 'proto.koinos.chain.consume_block_resources_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.consume_block_resources_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.consume_block_resources_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.consume_block_resources_result.displayName = 'proto.koinos.chain.consume_block_resources_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.put_object_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.put_object_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.put_object_arguments.displayName = 'proto.koinos.chain.put_object_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.put_object_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.put_object_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.put_object_result.displayName = 'proto.koinos.chain.put_object_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.remove_object_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.remove_object_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.remove_object_arguments.displayName = 'proto.koinos.chain.remove_object_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.remove_object_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.remove_object_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.remove_object_result.displayName = 'proto.koinos.chain.remove_object_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_object_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_object_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_object_arguments.displayName = 'proto.koinos.chain.get_object_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.database_object = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.database_object, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.database_object.displayName = 'proto.koinos.chain.database_object';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_object_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_object_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_object_result.displayName = 'proto.koinos.chain.get_object_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_next_object_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_next_object_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_next_object_arguments.displayName = 'proto.koinos.chain.get_next_object_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_next_object_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_next_object_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_next_object_result.displayName = 'proto.koinos.chain.get_next_object_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_prev_object_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_prev_object_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_prev_object_arguments.displayName = 'proto.koinos.chain.get_prev_object_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_prev_object_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_prev_object_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_prev_object_result.displayName = 'proto.koinos.chain.get_prev_object_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.log_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.log_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.log_arguments.displayName = 'proto.koinos.chain.log_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.log_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.log_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.log_result.displayName = 'proto.koinos.chain.log_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.event_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.koinos.chain.event_arguments.repeatedFields_, null);
};
goog.inherits(proto.koinos.chain.event_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.event_arguments.displayName = 'proto.koinos.chain.event_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.event_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.event_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.event_result.displayName = 'proto.koinos.chain.event_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.hash_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.hash_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.hash_arguments.displayName = 'proto.koinos.chain.hash_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.hash_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.hash_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.hash_result.displayName = 'proto.koinos.chain.hash_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.recover_public_key_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.recover_public_key_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.recover_public_key_arguments.displayName = 'proto.koinos.chain.recover_public_key_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.recover_public_key_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.recover_public_key_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.recover_public_key_result.displayName = 'proto.koinos.chain.recover_public_key_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.verify_merkle_root_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.koinos.chain.verify_merkle_root_arguments.repeatedFields_, null);
};
goog.inherits(proto.koinos.chain.verify_merkle_root_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.verify_merkle_root_arguments.displayName = 'proto.koinos.chain.verify_merkle_root_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.verify_merkle_root_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.verify_merkle_root_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.verify_merkle_root_result.displayName = 'proto.koinos.chain.verify_merkle_root_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.verify_signature_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.verify_signature_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.verify_signature_arguments.displayName = 'proto.koinos.chain.verify_signature_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.verify_signature_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.verify_signature_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.verify_signature_result.displayName = 'proto.koinos.chain.verify_signature_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.call_contract_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.call_contract_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.call_contract_arguments.displayName = 'proto.koinos.chain.call_contract_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.call_contract_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.call_contract_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.call_contract_result.displayName = 'proto.koinos.chain.call_contract_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_entry_point_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_entry_point_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_entry_point_arguments.displayName = 'proto.koinos.chain.get_entry_point_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_entry_point_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_entry_point_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_entry_point_result.displayName = 'proto.koinos.chain.get_entry_point_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_contract_arguments_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_contract_arguments_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_contract_arguments_arguments.displayName = 'proto.koinos.chain.get_contract_arguments_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_contract_arguments_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_contract_arguments_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_contract_arguments_result.displayName = 'proto.koinos.chain.get_contract_arguments_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.set_contract_result_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.set_contract_result_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.set_contract_result_arguments.displayName = 'proto.koinos.chain.set_contract_result_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.set_contract_result_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.set_contract_result_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.set_contract_result_result.displayName = 'proto.koinos.chain.set_contract_result_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.exit_contract_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.exit_contract_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.exit_contract_arguments.displayName = 'proto.koinos.chain.exit_contract_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.exit_contract_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.exit_contract_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.exit_contract_result.displayName = 'proto.koinos.chain.exit_contract_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_contract_id_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_contract_id_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_contract_id_arguments.displayName = 'proto.koinos.chain.get_contract_id_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_contract_id_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_contract_id_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_contract_id_result.displayName = 'proto.koinos.chain.get_contract_id_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_caller_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_caller_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_caller_arguments.displayName = 'proto.koinos.chain.get_caller_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.get_caller_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.get_caller_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.get_caller_result.displayName = 'proto.koinos.chain.get_caller_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.require_authority_arguments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.require_authority_arguments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.require_authority_arguments.displayName = 'proto.koinos.chain.require_authority_arguments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.require_authority_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.require_authority_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.require_authority_result.displayName = 'proto.koinos.chain.require_authority_result';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_head_info_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_head_info_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_head_info_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_head_info_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_head_info_arguments}
 */
proto.koinos.chain.get_head_info_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_head_info_arguments;
  return proto.koinos.chain.get_head_info_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_head_info_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_head_info_arguments}
 */
proto.koinos.chain.get_head_info_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_head_info_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_head_info_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_head_info_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_head_info_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_head_info_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_head_info_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_head_info_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_head_info_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && koinos_chain_chain_pb.head_info.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_head_info_result}
 */
proto.koinos.chain.get_head_info_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_head_info_result;
  return proto.koinos.chain.get_head_info_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_head_info_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_head_info_result}
 */
proto.koinos.chain.get_head_info_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_chain_pb.head_info;
      reader.readMessage(value,koinos_chain_chain_pb.head_info.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_head_info_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_head_info_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_head_info_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_head_info_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_chain_pb.head_info.serializeBinaryToWriter
    );
  }
};


/**
 * optional head_info value = 1;
 * @return {?proto.koinos.chain.head_info}
 */
proto.koinos.chain.get_head_info_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.chain.head_info} */ (
    jspb.Message.getWrapperField(this, koinos_chain_chain_pb.head_info, 1));
};


/**
 * @param {?proto.koinos.chain.head_info|undefined} value
 * @return {!proto.koinos.chain.get_head_info_result} returns this
*/
proto.koinos.chain.get_head_info_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_head_info_result} returns this
 */
proto.koinos.chain.get_head_info_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_head_info_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_block_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_block_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_block_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_block_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && koinos_protocol_protocol_pb.block.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_block_arguments}
 */
proto.koinos.chain.apply_block_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_block_arguments;
  return proto.koinos.chain.apply_block_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_block_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_block_arguments}
 */
proto.koinos.chain.apply_block_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.block;
      reader.readMessage(value,koinos_protocol_protocol_pb.block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_block_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_block_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_block_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_block_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.block.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.block block = 1;
 * @return {?proto.koinos.protocol.block}
 */
proto.koinos.chain.apply_block_arguments.prototype.getBlock = function() {
  return /** @type{?proto.koinos.protocol.block} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.block, 1));
};


/**
 * @param {?proto.koinos.protocol.block|undefined} value
 * @return {!proto.koinos.chain.apply_block_arguments} returns this
*/
proto.koinos.chain.apply_block_arguments.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.apply_block_arguments} returns this
 */
proto.koinos.chain.apply_block_arguments.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.apply_block_arguments.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_block_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_block_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_block_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_block_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_block_result}
 */
proto.koinos.chain.apply_block_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_block_result;
  return proto.koinos.chain.apply_block_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_block_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_block_result}
 */
proto.koinos.chain.apply_block_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_block_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_block_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_block_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_block_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_transaction_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_transaction_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_transaction_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_transaction_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && koinos_protocol_protocol_pb.transaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_transaction_arguments}
 */
proto.koinos.chain.apply_transaction_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_transaction_arguments;
  return proto.koinos.chain.apply_transaction_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_transaction_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_transaction_arguments}
 */
proto.koinos.chain.apply_transaction_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.transaction;
      reader.readMessage(value,koinos_protocol_protocol_pb.transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_transaction_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_transaction_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_transaction_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_transaction_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.transaction transaction = 1;
 * @return {?proto.koinos.protocol.transaction}
 */
proto.koinos.chain.apply_transaction_arguments.prototype.getTransaction = function() {
  return /** @type{?proto.koinos.protocol.transaction} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.transaction, 1));
};


/**
 * @param {?proto.koinos.protocol.transaction|undefined} value
 * @return {!proto.koinos.chain.apply_transaction_arguments} returns this
*/
proto.koinos.chain.apply_transaction_arguments.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.apply_transaction_arguments} returns this
 */
proto.koinos.chain.apply_transaction_arguments.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.apply_transaction_arguments.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_transaction_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_transaction_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_transaction_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_transaction_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_transaction_result}
 */
proto.koinos.chain.apply_transaction_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_transaction_result;
  return proto.koinos.chain.apply_transaction_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_transaction_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_transaction_result}
 */
proto.koinos.chain.apply_transaction_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_transaction_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_transaction_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_transaction_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_transaction_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_upload_contract_operation_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_upload_contract_operation_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: (f = msg.getOp()) && koinos_protocol_protocol_pb.upload_contract_operation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_upload_contract_operation_arguments}
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_upload_contract_operation_arguments;
  return proto.koinos.chain.apply_upload_contract_operation_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_upload_contract_operation_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_upload_contract_operation_arguments}
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.upload_contract_operation;
      reader.readMessage(value,koinos_protocol_protocol_pb.upload_contract_operation.deserializeBinaryFromReader);
      msg.setOp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_upload_contract_operation_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_upload_contract_operation_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.upload_contract_operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.upload_contract_operation op = 1;
 * @return {?proto.koinos.protocol.upload_contract_operation}
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.prototype.getOp = function() {
  return /** @type{?proto.koinos.protocol.upload_contract_operation} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.upload_contract_operation, 1));
};


/**
 * @param {?proto.koinos.protocol.upload_contract_operation|undefined} value
 * @return {!proto.koinos.chain.apply_upload_contract_operation_arguments} returns this
*/
proto.koinos.chain.apply_upload_contract_operation_arguments.prototype.setOp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.apply_upload_contract_operation_arguments} returns this
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.prototype.clearOp = function() {
  return this.setOp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.apply_upload_contract_operation_arguments.prototype.hasOp = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_upload_contract_operation_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_upload_contract_operation_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_upload_contract_operation_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_upload_contract_operation_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_upload_contract_operation_result}
 */
proto.koinos.chain.apply_upload_contract_operation_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_upload_contract_operation_result;
  return proto.koinos.chain.apply_upload_contract_operation_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_upload_contract_operation_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_upload_contract_operation_result}
 */
proto.koinos.chain.apply_upload_contract_operation_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_upload_contract_operation_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_upload_contract_operation_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_upload_contract_operation_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_upload_contract_operation_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_call_contract_operation_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_call_contract_operation_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_call_contract_operation_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_call_contract_operation_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: (f = msg.getOp()) && koinos_protocol_protocol_pb.call_contract_operation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_call_contract_operation_arguments}
 */
proto.koinos.chain.apply_call_contract_operation_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_call_contract_operation_arguments;
  return proto.koinos.chain.apply_call_contract_operation_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_call_contract_operation_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_call_contract_operation_arguments}
 */
proto.koinos.chain.apply_call_contract_operation_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.call_contract_operation;
      reader.readMessage(value,koinos_protocol_protocol_pb.call_contract_operation.deserializeBinaryFromReader);
      msg.setOp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_call_contract_operation_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_call_contract_operation_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_call_contract_operation_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_call_contract_operation_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.call_contract_operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.call_contract_operation op = 1;
 * @return {?proto.koinos.protocol.call_contract_operation}
 */
proto.koinos.chain.apply_call_contract_operation_arguments.prototype.getOp = function() {
  return /** @type{?proto.koinos.protocol.call_contract_operation} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.call_contract_operation, 1));
};


/**
 * @param {?proto.koinos.protocol.call_contract_operation|undefined} value
 * @return {!proto.koinos.chain.apply_call_contract_operation_arguments} returns this
*/
proto.koinos.chain.apply_call_contract_operation_arguments.prototype.setOp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.apply_call_contract_operation_arguments} returns this
 */
proto.koinos.chain.apply_call_contract_operation_arguments.prototype.clearOp = function() {
  return this.setOp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.apply_call_contract_operation_arguments.prototype.hasOp = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_call_contract_operation_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_call_contract_operation_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_call_contract_operation_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_call_contract_operation_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_call_contract_operation_result}
 */
proto.koinos.chain.apply_call_contract_operation_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_call_contract_operation_result;
  return proto.koinos.chain.apply_call_contract_operation_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_call_contract_operation_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_call_contract_operation_result}
 */
proto.koinos.chain.apply_call_contract_operation_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_call_contract_operation_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_call_contract_operation_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_call_contract_operation_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_call_contract_operation_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_set_system_call_operation_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_set_system_call_operation_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: (f = msg.getOp()) && koinos_protocol_protocol_pb.set_system_call_operation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_set_system_call_operation_arguments}
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_set_system_call_operation_arguments;
  return proto.koinos.chain.apply_set_system_call_operation_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_set_system_call_operation_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_set_system_call_operation_arguments}
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.set_system_call_operation;
      reader.readMessage(value,koinos_protocol_protocol_pb.set_system_call_operation.deserializeBinaryFromReader);
      msg.setOp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_set_system_call_operation_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_set_system_call_operation_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.set_system_call_operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.set_system_call_operation op = 1;
 * @return {?proto.koinos.protocol.set_system_call_operation}
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.prototype.getOp = function() {
  return /** @type{?proto.koinos.protocol.set_system_call_operation} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.set_system_call_operation, 1));
};


/**
 * @param {?proto.koinos.protocol.set_system_call_operation|undefined} value
 * @return {!proto.koinos.chain.apply_set_system_call_operation_arguments} returns this
*/
proto.koinos.chain.apply_set_system_call_operation_arguments.prototype.setOp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.apply_set_system_call_operation_arguments} returns this
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.prototype.clearOp = function() {
  return this.setOp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.apply_set_system_call_operation_arguments.prototype.hasOp = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_set_system_call_operation_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_set_system_call_operation_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_set_system_call_operation_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_set_system_call_operation_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_set_system_call_operation_result}
 */
proto.koinos.chain.apply_set_system_call_operation_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_set_system_call_operation_result;
  return proto.koinos.chain.apply_set_system_call_operation_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_set_system_call_operation_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_set_system_call_operation_result}
 */
proto.koinos.chain.apply_set_system_call_operation_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_set_system_call_operation_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_set_system_call_operation_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_set_system_call_operation_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_set_system_call_operation_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_set_system_contract_operation_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_set_system_contract_operation_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: (f = msg.getOp()) && koinos_protocol_protocol_pb.set_system_contract_operation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_set_system_contract_operation_arguments}
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_set_system_contract_operation_arguments;
  return proto.koinos.chain.apply_set_system_contract_operation_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_set_system_contract_operation_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_set_system_contract_operation_arguments}
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.set_system_contract_operation;
      reader.readMessage(value,koinos_protocol_protocol_pb.set_system_contract_operation.deserializeBinaryFromReader);
      msg.setOp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_set_system_contract_operation_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_set_system_contract_operation_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.set_system_contract_operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.set_system_contract_operation op = 1;
 * @return {?proto.koinos.protocol.set_system_contract_operation}
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.prototype.getOp = function() {
  return /** @type{?proto.koinos.protocol.set_system_contract_operation} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.set_system_contract_operation, 1));
};


/**
 * @param {?proto.koinos.protocol.set_system_contract_operation|undefined} value
 * @return {!proto.koinos.chain.apply_set_system_contract_operation_arguments} returns this
*/
proto.koinos.chain.apply_set_system_contract_operation_arguments.prototype.setOp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.apply_set_system_contract_operation_arguments} returns this
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.prototype.clearOp = function() {
  return this.setOp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.apply_set_system_contract_operation_arguments.prototype.hasOp = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.apply_set_system_contract_operation_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.apply_set_system_contract_operation_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.apply_set_system_contract_operation_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_set_system_contract_operation_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.apply_set_system_contract_operation_result}
 */
proto.koinos.chain.apply_set_system_contract_operation_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.apply_set_system_contract_operation_result;
  return proto.koinos.chain.apply_set_system_contract_operation_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.apply_set_system_contract_operation_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.apply_set_system_contract_operation_result}
 */
proto.koinos.chain.apply_set_system_contract_operation_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.apply_set_system_contract_operation_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.apply_set_system_contract_operation_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.apply_set_system_contract_operation_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.apply_set_system_contract_operation_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.pre_block_callback_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.pre_block_callback_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.pre_block_callback_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.pre_block_callback_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.pre_block_callback_arguments}
 */
proto.koinos.chain.pre_block_callback_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.pre_block_callback_arguments;
  return proto.koinos.chain.pre_block_callback_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.pre_block_callback_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.pre_block_callback_arguments}
 */
proto.koinos.chain.pre_block_callback_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.pre_block_callback_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.pre_block_callback_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.pre_block_callback_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.pre_block_callback_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.pre_block_callback_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.pre_block_callback_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.pre_block_callback_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.pre_block_callback_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.pre_block_callback_result}
 */
proto.koinos.chain.pre_block_callback_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.pre_block_callback_result;
  return proto.koinos.chain.pre_block_callback_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.pre_block_callback_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.pre_block_callback_result}
 */
proto.koinos.chain.pre_block_callback_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.pre_block_callback_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.pre_block_callback_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.pre_block_callback_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.pre_block_callback_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.post_block_callback_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.post_block_callback_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.post_block_callback_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.post_block_callback_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.post_block_callback_arguments}
 */
proto.koinos.chain.post_block_callback_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.post_block_callback_arguments;
  return proto.koinos.chain.post_block_callback_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.post_block_callback_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.post_block_callback_arguments}
 */
proto.koinos.chain.post_block_callback_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.post_block_callback_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.post_block_callback_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.post_block_callback_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.post_block_callback_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.post_block_callback_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.post_block_callback_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.post_block_callback_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.post_block_callback_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.post_block_callback_result}
 */
proto.koinos.chain.post_block_callback_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.post_block_callback_result;
  return proto.koinos.chain.post_block_callback_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.post_block_callback_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.post_block_callback_result}
 */
proto.koinos.chain.post_block_callback_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.post_block_callback_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.post_block_callback_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.post_block_callback_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.post_block_callback_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.pre_transaction_callback_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.pre_transaction_callback_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.pre_transaction_callback_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.pre_transaction_callback_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.pre_transaction_callback_arguments}
 */
proto.koinos.chain.pre_transaction_callback_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.pre_transaction_callback_arguments;
  return proto.koinos.chain.pre_transaction_callback_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.pre_transaction_callback_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.pre_transaction_callback_arguments}
 */
proto.koinos.chain.pre_transaction_callback_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.pre_transaction_callback_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.pre_transaction_callback_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.pre_transaction_callback_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.pre_transaction_callback_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.pre_transaction_callback_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.pre_transaction_callback_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.pre_transaction_callback_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.pre_transaction_callback_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.pre_transaction_callback_result}
 */
proto.koinos.chain.pre_transaction_callback_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.pre_transaction_callback_result;
  return proto.koinos.chain.pre_transaction_callback_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.pre_transaction_callback_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.pre_transaction_callback_result}
 */
proto.koinos.chain.pre_transaction_callback_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.pre_transaction_callback_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.pre_transaction_callback_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.pre_transaction_callback_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.pre_transaction_callback_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.post_transaction_callback_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.post_transaction_callback_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.post_transaction_callback_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.post_transaction_callback_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.post_transaction_callback_arguments}
 */
proto.koinos.chain.post_transaction_callback_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.post_transaction_callback_arguments;
  return proto.koinos.chain.post_transaction_callback_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.post_transaction_callback_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.post_transaction_callback_arguments}
 */
proto.koinos.chain.post_transaction_callback_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.post_transaction_callback_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.post_transaction_callback_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.post_transaction_callback_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.post_transaction_callback_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.post_transaction_callback_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.post_transaction_callback_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.post_transaction_callback_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.post_transaction_callback_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.post_transaction_callback_result}
 */
proto.koinos.chain.post_transaction_callback_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.post_transaction_callback_result;
  return proto.koinos.chain.post_transaction_callback_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.post_transaction_callback_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.post_transaction_callback_result}
 */
proto.koinos.chain.post_transaction_callback_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.post_transaction_callback_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.post_transaction_callback_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.post_transaction_callback_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.post_transaction_callback_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.process_block_signature_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.process_block_signature_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.process_block_signature_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    digest: msg.getDigest_asB64(),
    header: (f = msg.getHeader()) && koinos_protocol_protocol_pb.block_header.toObject(includeInstance, f),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.process_block_signature_arguments}
 */
proto.koinos.chain.process_block_signature_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.process_block_signature_arguments;
  return proto.koinos.chain.process_block_signature_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.process_block_signature_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.process_block_signature_arguments}
 */
proto.koinos.chain.process_block_signature_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDigest(value);
      break;
    case 2:
      var value = new koinos_protocol_protocol_pb.block_header;
      reader.readMessage(value,koinos_protocol_protocol_pb.block_header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.process_block_signature_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.process_block_signature_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.process_block_signature_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDigest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      koinos_protocol_protocol_pb.block_header.serializeBinaryToWriter
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes digest = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.getDigest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes digest = 1;
 * This is a type-conversion wrapper around `getDigest()`
 * @return {string}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.getDigest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDigest()));
};


/**
 * optional bytes digest = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDigest()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.getDigest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDigest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.process_block_signature_arguments} returns this
 */
proto.koinos.chain.process_block_signature_arguments.prototype.setDigest = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional koinos.protocol.block_header header = 2;
 * @return {?proto.koinos.protocol.block_header}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.getHeader = function() {
  return /** @type{?proto.koinos.protocol.block_header} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.block_header, 2));
};


/**
 * @param {?proto.koinos.protocol.block_header|undefined} value
 * @return {!proto.koinos.chain.process_block_signature_arguments} returns this
*/
proto.koinos.chain.process_block_signature_arguments.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.process_block_signature_arguments} returns this
 */
proto.koinos.chain.process_block_signature_arguments.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.process_block_signature_arguments.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.process_block_signature_arguments} returns this
 */
proto.koinos.chain.process_block_signature_arguments.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.process_block_signature_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.process_block_signature_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.process_block_signature_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.process_block_signature_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.process_block_signature_result}
 */
proto.koinos.chain.process_block_signature_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.process_block_signature_result;
  return proto.koinos.chain.process_block_signature_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.process_block_signature_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.process_block_signature_result}
 */
proto.koinos.chain.process_block_signature_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.process_block_signature_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.process_block_signature_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.process_block_signature_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.process_block_signature_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.koinos.chain.process_block_signature_result.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.koinos.chain.process_block_signature_result} returns this
 */
proto.koinos.chain.process_block_signature_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_transaction_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_transaction_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_transaction_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_transaction_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_transaction_arguments}
 */
proto.koinos.chain.get_transaction_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_transaction_arguments;
  return proto.koinos.chain.get_transaction_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_transaction_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_transaction_arguments}
 */
proto.koinos.chain.get_transaction_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_transaction_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_transaction_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_transaction_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_transaction_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_transaction_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_transaction_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_transaction_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_transaction_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && koinos_protocol_protocol_pb.transaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_transaction_result}
 */
proto.koinos.chain.get_transaction_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_transaction_result;
  return proto.koinos.chain.get_transaction_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_transaction_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_transaction_result}
 */
proto.koinos.chain.get_transaction_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.transaction;
      reader.readMessage(value,koinos_protocol_protocol_pb.transaction.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_transaction_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_transaction_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_transaction_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_transaction_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.transaction value = 1;
 * @return {?proto.koinos.protocol.transaction}
 */
proto.koinos.chain.get_transaction_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.protocol.transaction} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.transaction, 1));
};


/**
 * @param {?proto.koinos.protocol.transaction|undefined} value
 * @return {!proto.koinos.chain.get_transaction_result} returns this
*/
proto.koinos.chain.get_transaction_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_transaction_result} returns this
 */
proto.koinos.chain.get_transaction_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_transaction_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_transaction_field_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_transaction_field_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_transaction_field_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_transaction_field_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_transaction_field_arguments}
 */
proto.koinos.chain.get_transaction_field_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_transaction_field_arguments;
  return proto.koinos.chain.get_transaction_field_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_transaction_field_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_transaction_field_arguments}
 */
proto.koinos.chain.get_transaction_field_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_transaction_field_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_transaction_field_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_transaction_field_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_transaction_field_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.koinos.chain.get_transaction_field_arguments.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.get_transaction_field_arguments} returns this
 */
proto.koinos.chain.get_transaction_field_arguments.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_transaction_field_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_transaction_field_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_transaction_field_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_transaction_field_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && koinos_chain_value_pb.value_type.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_transaction_field_result}
 */
proto.koinos.chain.get_transaction_field_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_transaction_field_result;
  return proto.koinos.chain.get_transaction_field_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_transaction_field_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_transaction_field_result}
 */
proto.koinos.chain.get_transaction_field_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_value_pb.value_type;
      reader.readMessage(value,koinos_chain_value_pb.value_type.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_transaction_field_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_transaction_field_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_transaction_field_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_transaction_field_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_value_pb.value_type.serializeBinaryToWriter
    );
  }
};


/**
 * optional value_type value = 1;
 * @return {?proto.koinos.chain.value_type}
 */
proto.koinos.chain.get_transaction_field_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.chain.value_type} */ (
    jspb.Message.getWrapperField(this, koinos_chain_value_pb.value_type, 1));
};


/**
 * @param {?proto.koinos.chain.value_type|undefined} value
 * @return {!proto.koinos.chain.get_transaction_field_result} returns this
*/
proto.koinos.chain.get_transaction_field_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_transaction_field_result} returns this
 */
proto.koinos.chain.get_transaction_field_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_transaction_field_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_block_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_block_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_block_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_block_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_block_arguments}
 */
proto.koinos.chain.get_block_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_block_arguments;
  return proto.koinos.chain.get_block_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_block_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_block_arguments}
 */
proto.koinos.chain.get_block_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_block_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_block_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_block_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_block_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_block_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_block_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_block_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_block_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && koinos_protocol_protocol_pb.block.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_block_result}
 */
proto.koinos.chain.get_block_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_block_result;
  return proto.koinos.chain.get_block_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_block_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_block_result}
 */
proto.koinos.chain.get_block_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_protocol_protocol_pb.block;
      reader.readMessage(value,koinos_protocol_protocol_pb.block.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_block_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_block_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_block_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_block_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_protocol_protocol_pb.block.serializeBinaryToWriter
    );
  }
};


/**
 * optional koinos.protocol.block value = 1;
 * @return {?proto.koinos.protocol.block}
 */
proto.koinos.chain.get_block_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.protocol.block} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.block, 1));
};


/**
 * @param {?proto.koinos.protocol.block|undefined} value
 * @return {!proto.koinos.chain.get_block_result} returns this
*/
proto.koinos.chain.get_block_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_block_result} returns this
 */
proto.koinos.chain.get_block_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_block_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_block_field_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_block_field_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_block_field_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_block_field_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_block_field_arguments}
 */
proto.koinos.chain.get_block_field_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_block_field_arguments;
  return proto.koinos.chain.get_block_field_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_block_field_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_block_field_arguments}
 */
proto.koinos.chain.get_block_field_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_block_field_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_block_field_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_block_field_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_block_field_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.koinos.chain.get_block_field_arguments.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.get_block_field_arguments} returns this
 */
proto.koinos.chain.get_block_field_arguments.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_block_field_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_block_field_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_block_field_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_block_field_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && koinos_chain_value_pb.value_type.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_block_field_result}
 */
proto.koinos.chain.get_block_field_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_block_field_result;
  return proto.koinos.chain.get_block_field_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_block_field_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_block_field_result}
 */
proto.koinos.chain.get_block_field_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_value_pb.value_type;
      reader.readMessage(value,koinos_chain_value_pb.value_type.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_block_field_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_block_field_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_block_field_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_block_field_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_value_pb.value_type.serializeBinaryToWriter
    );
  }
};


/**
 * optional value_type value = 1;
 * @return {?proto.koinos.chain.value_type}
 */
proto.koinos.chain.get_block_field_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.chain.value_type} */ (
    jspb.Message.getWrapperField(this, koinos_chain_value_pb.value_type, 1));
};


/**
 * @param {?proto.koinos.chain.value_type|undefined} value
 * @return {!proto.koinos.chain.get_block_field_result} returns this
*/
proto.koinos.chain.get_block_field_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_block_field_result} returns this
 */
proto.koinos.chain.get_block_field_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_block_field_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_last_irreversible_block_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_last_irreversible_block_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_last_irreversible_block_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_last_irreversible_block_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_last_irreversible_block_arguments}
 */
proto.koinos.chain.get_last_irreversible_block_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_last_irreversible_block_arguments;
  return proto.koinos.chain.get_last_irreversible_block_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_last_irreversible_block_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_last_irreversible_block_arguments}
 */
proto.koinos.chain.get_last_irreversible_block_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_last_irreversible_block_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_last_irreversible_block_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_last_irreversible_block_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_last_irreversible_block_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_last_irreversible_block_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_last_irreversible_block_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_last_irreversible_block_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_last_irreversible_block_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_last_irreversible_block_result}
 */
proto.koinos.chain.get_last_irreversible_block_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_last_irreversible_block_result;
  return proto.koinos.chain.get_last_irreversible_block_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_last_irreversible_block_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_last_irreversible_block_result}
 */
proto.koinos.chain.get_last_irreversible_block_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_last_irreversible_block_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_last_irreversible_block_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_last_irreversible_block_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_last_irreversible_block_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 value = 1;
 * @return {string}
 */
proto.koinos.chain.get_last_irreversible_block_result.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.get_last_irreversible_block_result} returns this
 */
proto.koinos.chain.get_last_irreversible_block_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_account_nonce_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_account_nonce_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_account_nonce_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_account_nonce_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: msg.getAccount_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_account_nonce_arguments}
 */
proto.koinos.chain.get_account_nonce_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_account_nonce_arguments;
  return proto.koinos.chain.get_account_nonce_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_account_nonce_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_account_nonce_arguments}
 */
proto.koinos.chain.get_account_nonce_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_account_nonce_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_account_nonce_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_account_nonce_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_account_nonce_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes account = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.get_account_nonce_arguments.prototype.getAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account = 1;
 * This is a type-conversion wrapper around `getAccount()`
 * @return {string}
 */
proto.koinos.chain.get_account_nonce_arguments.prototype.getAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccount()));
};


/**
 * optional bytes account = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccount()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_account_nonce_arguments.prototype.getAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.get_account_nonce_arguments} returns this
 */
proto.koinos.chain.get_account_nonce_arguments.prototype.setAccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_account_nonce_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_account_nonce_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_account_nonce_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_account_nonce_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_account_nonce_result}
 */
proto.koinos.chain.get_account_nonce_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_account_nonce_result;
  return proto.koinos.chain.get_account_nonce_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_account_nonce_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_account_nonce_result}
 */
proto.koinos.chain.get_account_nonce_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_account_nonce_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_account_nonce_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_account_nonce_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_account_nonce_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.get_account_nonce_result.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.koinos.chain.get_account_nonce_result.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_account_nonce_result.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.get_account_nonce_result} returns this
 */
proto.koinos.chain.get_account_nonce_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.verify_account_nonce_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.verify_account_nonce_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_account_nonce_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: msg.getAccount_asB64(),
    nonce: msg.getNonce_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.verify_account_nonce_arguments}
 */
proto.koinos.chain.verify_account_nonce_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.verify_account_nonce_arguments;
  return proto.koinos.chain.verify_account_nonce_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.verify_account_nonce_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.verify_account_nonce_arguments}
 */
proto.koinos.chain.verify_account_nonce_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.verify_account_nonce_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.verify_account_nonce_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_account_nonce_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNonce_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes account = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.getAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account = 1;
 * This is a type-conversion wrapper around `getAccount()`
 * @return {string}
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.getAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccount()));
};


/**
 * optional bytes account = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccount()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.getAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.verify_account_nonce_arguments} returns this
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.setAccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes nonce = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.getNonce = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes nonce = 2;
 * This is a type-conversion wrapper around `getNonce()`
 * @return {string}
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.getNonce_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNonce()));
};


/**
 * optional bytes nonce = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNonce()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.getNonce_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNonce()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.verify_account_nonce_arguments} returns this
 */
proto.koinos.chain.verify_account_nonce_arguments.prototype.setNonce = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.verify_account_nonce_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.verify_account_nonce_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.verify_account_nonce_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_account_nonce_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.verify_account_nonce_result}
 */
proto.koinos.chain.verify_account_nonce_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.verify_account_nonce_result;
  return proto.koinos.chain.verify_account_nonce_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.verify_account_nonce_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.verify_account_nonce_result}
 */
proto.koinos.chain.verify_account_nonce_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_account_nonce_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.verify_account_nonce_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.verify_account_nonce_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_account_nonce_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.koinos.chain.verify_account_nonce_result.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.koinos.chain.verify_account_nonce_result} returns this
 */
proto.koinos.chain.verify_account_nonce_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.set_account_nonce_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.set_account_nonce_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.set_account_nonce_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: msg.getAccount_asB64(),
    nonce: msg.getNonce_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.set_account_nonce_arguments}
 */
proto.koinos.chain.set_account_nonce_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.set_account_nonce_arguments;
  return proto.koinos.chain.set_account_nonce_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.set_account_nonce_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.set_account_nonce_arguments}
 */
proto.koinos.chain.set_account_nonce_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.set_account_nonce_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.set_account_nonce_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.set_account_nonce_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNonce_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes account = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.getAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account = 1;
 * This is a type-conversion wrapper around `getAccount()`
 * @return {string}
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.getAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccount()));
};


/**
 * optional bytes account = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccount()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.getAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.set_account_nonce_arguments} returns this
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.setAccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes nonce = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.getNonce = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes nonce = 2;
 * This is a type-conversion wrapper around `getNonce()`
 * @return {string}
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.getNonce_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNonce()));
};


/**
 * optional bytes nonce = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNonce()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.getNonce_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNonce()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.set_account_nonce_arguments} returns this
 */
proto.koinos.chain.set_account_nonce_arguments.prototype.setNonce = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.set_account_nonce_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.set_account_nonce_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.set_account_nonce_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.set_account_nonce_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.set_account_nonce_result}
 */
proto.koinos.chain.set_account_nonce_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.set_account_nonce_result;
  return proto.koinos.chain.set_account_nonce_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.set_account_nonce_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.set_account_nonce_result}
 */
proto.koinos.chain.set_account_nonce_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.set_account_nonce_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.set_account_nonce_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.set_account_nonce_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.set_account_nonce_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.require_system_authority_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.require_system_authority_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.require_system_authority_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.require_system_authority_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.require_system_authority_arguments}
 */
proto.koinos.chain.require_system_authority_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.require_system_authority_arguments;
  return proto.koinos.chain.require_system_authority_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.require_system_authority_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.require_system_authority_arguments}
 */
proto.koinos.chain.require_system_authority_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.koinos.chain.system_authorization_type} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.require_system_authority_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.require_system_authority_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.require_system_authority_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.require_system_authority_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional system_authorization_type type = 1;
 * @return {!proto.koinos.chain.system_authorization_type}
 */
proto.koinos.chain.require_system_authority_arguments.prototype.getType = function() {
  return /** @type {!proto.koinos.chain.system_authorization_type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.koinos.chain.system_authorization_type} value
 * @return {!proto.koinos.chain.require_system_authority_arguments} returns this
 */
proto.koinos.chain.require_system_authority_arguments.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.require_system_authority_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.require_system_authority_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.require_system_authority_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.require_system_authority_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.require_system_authority_result}
 */
proto.koinos.chain.require_system_authority_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.require_system_authority_result;
  return proto.koinos.chain.require_system_authority_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.require_system_authority_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.require_system_authority_result}
 */
proto.koinos.chain.require_system_authority_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.require_system_authority_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.require_system_authority_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.require_system_authority_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.require_system_authority_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_account_rc_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_account_rc_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_account_rc_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_account_rc_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: msg.getAccount_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_account_rc_arguments}
 */
proto.koinos.chain.get_account_rc_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_account_rc_arguments;
  return proto.koinos.chain.get_account_rc_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_account_rc_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_account_rc_arguments}
 */
proto.koinos.chain.get_account_rc_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_account_rc_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_account_rc_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_account_rc_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_account_rc_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes account = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.get_account_rc_arguments.prototype.getAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account = 1;
 * This is a type-conversion wrapper around `getAccount()`
 * @return {string}
 */
proto.koinos.chain.get_account_rc_arguments.prototype.getAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccount()));
};


/**
 * optional bytes account = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccount()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_account_rc_arguments.prototype.getAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.get_account_rc_arguments} returns this
 */
proto.koinos.chain.get_account_rc_arguments.prototype.setAccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_account_rc_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_account_rc_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_account_rc_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_account_rc_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_account_rc_result}
 */
proto.koinos.chain.get_account_rc_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_account_rc_result;
  return proto.koinos.chain.get_account_rc_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_account_rc_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_account_rc_result}
 */
proto.koinos.chain.get_account_rc_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_account_rc_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_account_rc_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_account_rc_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_account_rc_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 value = 1;
 * @return {string}
 */
proto.koinos.chain.get_account_rc_result.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.get_account_rc_result} returns this
 */
proto.koinos.chain.get_account_rc_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.consume_account_rc_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.consume_account_rc_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.consume_account_rc_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.consume_account_rc_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: msg.getAccount_asB64(),
    value: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.consume_account_rc_arguments}
 */
proto.koinos.chain.consume_account_rc_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.consume_account_rc_arguments;
  return proto.koinos.chain.consume_account_rc_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.consume_account_rc_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.consume_account_rc_arguments}
 */
proto.koinos.chain.consume_account_rc_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.consume_account_rc_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.consume_account_rc_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.consume_account_rc_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.consume_account_rc_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getValue();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional bytes account = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.consume_account_rc_arguments.prototype.getAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account = 1;
 * This is a type-conversion wrapper around `getAccount()`
 * @return {string}
 */
proto.koinos.chain.consume_account_rc_arguments.prototype.getAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccount()));
};


/**
 * optional bytes account = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccount()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.consume_account_rc_arguments.prototype.getAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.consume_account_rc_arguments} returns this
 */
proto.koinos.chain.consume_account_rc_arguments.prototype.setAccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 value = 2;
 * @return {string}
 */
proto.koinos.chain.consume_account_rc_arguments.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.consume_account_rc_arguments} returns this
 */
proto.koinos.chain.consume_account_rc_arguments.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.consume_account_rc_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.consume_account_rc_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.consume_account_rc_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.consume_account_rc_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.consume_account_rc_result}
 */
proto.koinos.chain.consume_account_rc_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.consume_account_rc_result;
  return proto.koinos.chain.consume_account_rc_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.consume_account_rc_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.consume_account_rc_result}
 */
proto.koinos.chain.consume_account_rc_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.consume_account_rc_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.consume_account_rc_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.consume_account_rc_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.consume_account_rc_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.koinos.chain.consume_account_rc_result.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.koinos.chain.consume_account_rc_result} returns this
 */
proto.koinos.chain.consume_account_rc_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_resource_limits_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_resource_limits_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_resource_limits_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_resource_limits_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_resource_limits_arguments}
 */
proto.koinos.chain.get_resource_limits_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_resource_limits_arguments;
  return proto.koinos.chain.get_resource_limits_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_resource_limits_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_resource_limits_arguments}
 */
proto.koinos.chain.get_resource_limits_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_resource_limits_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_resource_limits_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_resource_limits_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_resource_limits_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_resource_limits_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_resource_limits_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_resource_limits_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_resource_limits_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && koinos_chain_chain_pb.resource_limit_data.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_resource_limits_result}
 */
proto.koinos.chain.get_resource_limits_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_resource_limits_result;
  return proto.koinos.chain.get_resource_limits_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_resource_limits_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_resource_limits_result}
 */
proto.koinos.chain.get_resource_limits_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_chain_pb.resource_limit_data;
      reader.readMessage(value,koinos_chain_chain_pb.resource_limit_data.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_resource_limits_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_resource_limits_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_resource_limits_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_resource_limits_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_chain_pb.resource_limit_data.serializeBinaryToWriter
    );
  }
};


/**
 * optional resource_limit_data value = 1;
 * @return {?proto.koinos.chain.resource_limit_data}
 */
proto.koinos.chain.get_resource_limits_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.chain.resource_limit_data} */ (
    jspb.Message.getWrapperField(this, koinos_chain_chain_pb.resource_limit_data, 1));
};


/**
 * @param {?proto.koinos.chain.resource_limit_data|undefined} value
 * @return {!proto.koinos.chain.get_resource_limits_result} returns this
*/
proto.koinos.chain.get_resource_limits_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_resource_limits_result} returns this
 */
proto.koinos.chain.get_resource_limits_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_resource_limits_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.consume_block_resources_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.consume_block_resources_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.consume_block_resources_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.consume_block_resources_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    diskStorageConsumed: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    networkBandwidthConsumed: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    computeBandwidthConsumed: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.consume_block_resources_arguments}
 */
proto.koinos.chain.consume_block_resources_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.consume_block_resources_arguments;
  return proto.koinos.chain.consume_block_resources_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.consume_block_resources_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.consume_block_resources_arguments}
 */
proto.koinos.chain.consume_block_resources_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setDiskStorageConsumed(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNetworkBandwidthConsumed(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setComputeBandwidthConsumed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.consume_block_resources_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.consume_block_resources_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.consume_block_resources_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.consume_block_resources_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiskStorageConsumed();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getNetworkBandwidthConsumed();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getComputeBandwidthConsumed();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
};


/**
 * optional uint64 disk_storage_consumed = 1;
 * @return {string}
 */
proto.koinos.chain.consume_block_resources_arguments.prototype.getDiskStorageConsumed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.consume_block_resources_arguments} returns this
 */
proto.koinos.chain.consume_block_resources_arguments.prototype.setDiskStorageConsumed = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 network_bandwidth_consumed = 2;
 * @return {string}
 */
proto.koinos.chain.consume_block_resources_arguments.prototype.getNetworkBandwidthConsumed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.consume_block_resources_arguments} returns this
 */
proto.koinos.chain.consume_block_resources_arguments.prototype.setNetworkBandwidthConsumed = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 compute_bandwidth_consumed = 3;
 * @return {string}
 */
proto.koinos.chain.consume_block_resources_arguments.prototype.getComputeBandwidthConsumed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.consume_block_resources_arguments} returns this
 */
proto.koinos.chain.consume_block_resources_arguments.prototype.setComputeBandwidthConsumed = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.consume_block_resources_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.consume_block_resources_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.consume_block_resources_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.consume_block_resources_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.consume_block_resources_result}
 */
proto.koinos.chain.consume_block_resources_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.consume_block_resources_result;
  return proto.koinos.chain.consume_block_resources_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.consume_block_resources_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.consume_block_resources_result}
 */
proto.koinos.chain.consume_block_resources_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.consume_block_resources_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.consume_block_resources_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.consume_block_resources_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.consume_block_resources_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.koinos.chain.consume_block_resources_result.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.koinos.chain.consume_block_resources_result} returns this
 */
proto.koinos.chain.consume_block_resources_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.put_object_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.put_object_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.put_object_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.put_object_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    space: (f = msg.getSpace()) && koinos_chain_chain_pb.object_space.toObject(includeInstance, f),
    key: msg.getKey_asB64(),
    obj: msg.getObj_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.put_object_arguments}
 */
proto.koinos.chain.put_object_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.put_object_arguments;
  return proto.koinos.chain.put_object_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.put_object_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.put_object_arguments}
 */
proto.koinos.chain.put_object_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_chain_pb.object_space;
      reader.readMessage(value,koinos_chain_chain_pb.object_space.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setObj(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.put_object_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.put_object_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.put_object_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.put_object_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_chain_pb.object_space.serializeBinaryToWriter
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getObj_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional object_space space = 1;
 * @return {?proto.koinos.chain.object_space}
 */
proto.koinos.chain.put_object_arguments.prototype.getSpace = function() {
  return /** @type{?proto.koinos.chain.object_space} */ (
    jspb.Message.getWrapperField(this, koinos_chain_chain_pb.object_space, 1));
};


/**
 * @param {?proto.koinos.chain.object_space|undefined} value
 * @return {!proto.koinos.chain.put_object_arguments} returns this
*/
proto.koinos.chain.put_object_arguments.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.put_object_arguments} returns this
 */
proto.koinos.chain.put_object_arguments.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.put_object_arguments.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.put_object_arguments.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.koinos.chain.put_object_arguments.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.put_object_arguments.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.put_object_arguments} returns this
 */
proto.koinos.chain.put_object_arguments.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes obj = 3;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.put_object_arguments.prototype.getObj = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes obj = 3;
 * This is a type-conversion wrapper around `getObj()`
 * @return {string}
 */
proto.koinos.chain.put_object_arguments.prototype.getObj_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getObj()));
};


/**
 * optional bytes obj = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getObj()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.put_object_arguments.prototype.getObj_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getObj()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.put_object_arguments} returns this
 */
proto.koinos.chain.put_object_arguments.prototype.setObj = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.put_object_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.put_object_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.put_object_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.put_object_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.put_object_result}
 */
proto.koinos.chain.put_object_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.put_object_result;
  return proto.koinos.chain.put_object_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.put_object_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.put_object_result}
 */
proto.koinos.chain.put_object_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.put_object_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.put_object_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.put_object_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.put_object_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 value = 1;
 * @return {number}
 */
proto.koinos.chain.put_object_result.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.put_object_result} returns this
 */
proto.koinos.chain.put_object_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.remove_object_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.remove_object_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.remove_object_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.remove_object_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    space: (f = msg.getSpace()) && koinos_chain_chain_pb.object_space.toObject(includeInstance, f),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.remove_object_arguments}
 */
proto.koinos.chain.remove_object_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.remove_object_arguments;
  return proto.koinos.chain.remove_object_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.remove_object_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.remove_object_arguments}
 */
proto.koinos.chain.remove_object_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_chain_pb.object_space;
      reader.readMessage(value,koinos_chain_chain_pb.object_space.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.remove_object_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.remove_object_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.remove_object_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.remove_object_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_chain_pb.object_space.serializeBinaryToWriter
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional object_space space = 1;
 * @return {?proto.koinos.chain.object_space}
 */
proto.koinos.chain.remove_object_arguments.prototype.getSpace = function() {
  return /** @type{?proto.koinos.chain.object_space} */ (
    jspb.Message.getWrapperField(this, koinos_chain_chain_pb.object_space, 1));
};


/**
 * @param {?proto.koinos.chain.object_space|undefined} value
 * @return {!proto.koinos.chain.remove_object_arguments} returns this
*/
proto.koinos.chain.remove_object_arguments.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.remove_object_arguments} returns this
 */
proto.koinos.chain.remove_object_arguments.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.remove_object_arguments.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.remove_object_arguments.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.koinos.chain.remove_object_arguments.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.remove_object_arguments.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.remove_object_arguments} returns this
 */
proto.koinos.chain.remove_object_arguments.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.remove_object_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.remove_object_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.remove_object_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.remove_object_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.remove_object_result}
 */
proto.koinos.chain.remove_object_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.remove_object_result;
  return proto.koinos.chain.remove_object_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.remove_object_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.remove_object_result}
 */
proto.koinos.chain.remove_object_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.remove_object_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.remove_object_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.remove_object_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.remove_object_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_object_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_object_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_object_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_object_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    space: (f = msg.getSpace()) && koinos_chain_chain_pb.object_space.toObject(includeInstance, f),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_object_arguments}
 */
proto.koinos.chain.get_object_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_object_arguments;
  return proto.koinos.chain.get_object_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_object_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_object_arguments}
 */
proto.koinos.chain.get_object_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_chain_pb.object_space;
      reader.readMessage(value,koinos_chain_chain_pb.object_space.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_object_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_object_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_object_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_object_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_chain_pb.object_space.serializeBinaryToWriter
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional object_space space = 1;
 * @return {?proto.koinos.chain.object_space}
 */
proto.koinos.chain.get_object_arguments.prototype.getSpace = function() {
  return /** @type{?proto.koinos.chain.object_space} */ (
    jspb.Message.getWrapperField(this, koinos_chain_chain_pb.object_space, 1));
};


/**
 * @param {?proto.koinos.chain.object_space|undefined} value
 * @return {!proto.koinos.chain.get_object_arguments} returns this
*/
proto.koinos.chain.get_object_arguments.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_object_arguments} returns this
 */
proto.koinos.chain.get_object_arguments.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_object_arguments.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.get_object_arguments.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.koinos.chain.get_object_arguments.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_object_arguments.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.get_object_arguments} returns this
 */
proto.koinos.chain.get_object_arguments.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.database_object.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.database_object.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.database_object} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.database_object.toObject = function(includeInstance, msg) {
  var f, obj = {
    exists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    value: msg.getValue_asB64(),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.database_object}
 */
proto.koinos.chain.database_object.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.database_object;
  return proto.koinos.chain.database_object.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.database_object} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.database_object}
 */
proto.koinos.chain.database_object.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.database_object.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.database_object.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.database_object} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.database_object.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bool exists = 1;
 * @return {boolean}
 */
proto.koinos.chain.database_object.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.koinos.chain.database_object} returns this
 */
proto.koinos.chain.database_object.prototype.setExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.database_object.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.koinos.chain.database_object.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.database_object.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.database_object} returns this
 */
proto.koinos.chain.database_object.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes key = 3;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.database_object.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes key = 3;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.koinos.chain.database_object.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.database_object.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.database_object} returns this
 */
proto.koinos.chain.database_object.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_object_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_object_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_object_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_object_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && proto.koinos.chain.database_object.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_object_result}
 */
proto.koinos.chain.get_object_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_object_result;
  return proto.koinos.chain.get_object_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_object_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_object_result}
 */
proto.koinos.chain.get_object_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.koinos.chain.database_object;
      reader.readMessage(value,proto.koinos.chain.database_object.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_object_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_object_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_object_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_object_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.koinos.chain.database_object.serializeBinaryToWriter
    );
  }
};


/**
 * optional database_object value = 1;
 * @return {?proto.koinos.chain.database_object}
 */
proto.koinos.chain.get_object_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.chain.database_object} */ (
    jspb.Message.getWrapperField(this, proto.koinos.chain.database_object, 1));
};


/**
 * @param {?proto.koinos.chain.database_object|undefined} value
 * @return {!proto.koinos.chain.get_object_result} returns this
*/
proto.koinos.chain.get_object_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_object_result} returns this
 */
proto.koinos.chain.get_object_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_object_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_next_object_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_next_object_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_next_object_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_next_object_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    space: (f = msg.getSpace()) && koinos_chain_chain_pb.object_space.toObject(includeInstance, f),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_next_object_arguments}
 */
proto.koinos.chain.get_next_object_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_next_object_arguments;
  return proto.koinos.chain.get_next_object_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_next_object_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_next_object_arguments}
 */
proto.koinos.chain.get_next_object_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_chain_pb.object_space;
      reader.readMessage(value,koinos_chain_chain_pb.object_space.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_next_object_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_next_object_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_next_object_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_next_object_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_chain_pb.object_space.serializeBinaryToWriter
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional object_space space = 1;
 * @return {?proto.koinos.chain.object_space}
 */
proto.koinos.chain.get_next_object_arguments.prototype.getSpace = function() {
  return /** @type{?proto.koinos.chain.object_space} */ (
    jspb.Message.getWrapperField(this, koinos_chain_chain_pb.object_space, 1));
};


/**
 * @param {?proto.koinos.chain.object_space|undefined} value
 * @return {!proto.koinos.chain.get_next_object_arguments} returns this
*/
proto.koinos.chain.get_next_object_arguments.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_next_object_arguments} returns this
 */
proto.koinos.chain.get_next_object_arguments.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_next_object_arguments.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.get_next_object_arguments.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.koinos.chain.get_next_object_arguments.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_next_object_arguments.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.get_next_object_arguments} returns this
 */
proto.koinos.chain.get_next_object_arguments.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_next_object_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_next_object_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_next_object_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_next_object_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && proto.koinos.chain.database_object.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_next_object_result}
 */
proto.koinos.chain.get_next_object_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_next_object_result;
  return proto.koinos.chain.get_next_object_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_next_object_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_next_object_result}
 */
proto.koinos.chain.get_next_object_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.koinos.chain.database_object;
      reader.readMessage(value,proto.koinos.chain.database_object.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_next_object_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_next_object_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_next_object_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_next_object_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.koinos.chain.database_object.serializeBinaryToWriter
    );
  }
};


/**
 * optional database_object value = 1;
 * @return {?proto.koinos.chain.database_object}
 */
proto.koinos.chain.get_next_object_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.chain.database_object} */ (
    jspb.Message.getWrapperField(this, proto.koinos.chain.database_object, 1));
};


/**
 * @param {?proto.koinos.chain.database_object|undefined} value
 * @return {!proto.koinos.chain.get_next_object_result} returns this
*/
proto.koinos.chain.get_next_object_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_next_object_result} returns this
 */
proto.koinos.chain.get_next_object_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_next_object_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_prev_object_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_prev_object_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_prev_object_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_prev_object_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    space: (f = msg.getSpace()) && koinos_chain_chain_pb.object_space.toObject(includeInstance, f),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_prev_object_arguments}
 */
proto.koinos.chain.get_prev_object_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_prev_object_arguments;
  return proto.koinos.chain.get_prev_object_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_prev_object_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_prev_object_arguments}
 */
proto.koinos.chain.get_prev_object_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_chain_pb.object_space;
      reader.readMessage(value,koinos_chain_chain_pb.object_space.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_prev_object_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_prev_object_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_prev_object_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_prev_object_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_chain_pb.object_space.serializeBinaryToWriter
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional object_space space = 1;
 * @return {?proto.koinos.chain.object_space}
 */
proto.koinos.chain.get_prev_object_arguments.prototype.getSpace = function() {
  return /** @type{?proto.koinos.chain.object_space} */ (
    jspb.Message.getWrapperField(this, koinos_chain_chain_pb.object_space, 1));
};


/**
 * @param {?proto.koinos.chain.object_space|undefined} value
 * @return {!proto.koinos.chain.get_prev_object_arguments} returns this
*/
proto.koinos.chain.get_prev_object_arguments.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_prev_object_arguments} returns this
 */
proto.koinos.chain.get_prev_object_arguments.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_prev_object_arguments.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.get_prev_object_arguments.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.koinos.chain.get_prev_object_arguments.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_prev_object_arguments.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.get_prev_object_arguments} returns this
 */
proto.koinos.chain.get_prev_object_arguments.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_prev_object_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_prev_object_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_prev_object_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_prev_object_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && proto.koinos.chain.database_object.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_prev_object_result}
 */
proto.koinos.chain.get_prev_object_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_prev_object_result;
  return proto.koinos.chain.get_prev_object_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_prev_object_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_prev_object_result}
 */
proto.koinos.chain.get_prev_object_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.koinos.chain.database_object;
      reader.readMessage(value,proto.koinos.chain.database_object.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_prev_object_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_prev_object_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_prev_object_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_prev_object_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.koinos.chain.database_object.serializeBinaryToWriter
    );
  }
};


/**
 * optional database_object value = 1;
 * @return {?proto.koinos.chain.database_object}
 */
proto.koinos.chain.get_prev_object_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.chain.database_object} */ (
    jspb.Message.getWrapperField(this, proto.koinos.chain.database_object, 1));
};


/**
 * @param {?proto.koinos.chain.database_object|undefined} value
 * @return {!proto.koinos.chain.get_prev_object_result} returns this
*/
proto.koinos.chain.get_prev_object_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_prev_object_result} returns this
 */
proto.koinos.chain.get_prev_object_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_prev_object_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.log_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.log_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.log_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.log_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.log_arguments}
 */
proto.koinos.chain.log_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.log_arguments;
  return proto.koinos.chain.log_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.log_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.log_arguments}
 */
proto.koinos.chain.log_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.log_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.log_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.log_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.log_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.koinos.chain.log_arguments.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.log_arguments} returns this
 */
proto.koinos.chain.log_arguments.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.log_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.log_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.log_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.log_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.log_result}
 */
proto.koinos.chain.log_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.log_result;
  return proto.koinos.chain.log_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.log_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.log_result}
 */
proto.koinos.chain.log_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.log_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.log_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.log_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.log_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.koinos.chain.event_arguments.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.event_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.event_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.event_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.event_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: msg.getData_asB64(),
    impactedList: msg.getImpactedList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.event_arguments}
 */
proto.koinos.chain.event_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.event_arguments;
  return proto.koinos.chain.event_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.event_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.event_arguments}
 */
proto.koinos.chain.event_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addImpacted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.event_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.event_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.event_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.event_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getImpactedList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.koinos.chain.event_arguments.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.event_arguments} returns this
 */
proto.koinos.chain.event_arguments.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.event_arguments.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.koinos.chain.event_arguments.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.event_arguments.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.event_arguments} returns this
 */
proto.koinos.chain.event_arguments.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated bytes impacted = 3;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.koinos.chain.event_arguments.prototype.getImpactedList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes impacted = 3;
 * This is a type-conversion wrapper around `getImpactedList()`
 * @return {!Array<string>}
 */
proto.koinos.chain.event_arguments.prototype.getImpactedList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getImpactedList()));
};


/**
 * repeated bytes impacted = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImpactedList()`
 * @return {!Array<!Uint8Array>}
 */
proto.koinos.chain.event_arguments.prototype.getImpactedList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getImpactedList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.koinos.chain.event_arguments} returns this
 */
proto.koinos.chain.event_arguments.prototype.setImpactedList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.koinos.chain.event_arguments} returns this
 */
proto.koinos.chain.event_arguments.prototype.addImpacted = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.koinos.chain.event_arguments} returns this
 */
proto.koinos.chain.event_arguments.prototype.clearImpactedList = function() {
  return this.setImpactedList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.event_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.event_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.event_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.event_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.event_result}
 */
proto.koinos.chain.event_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.event_result;
  return proto.koinos.chain.event_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.event_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.event_result}
 */
proto.koinos.chain.event_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.event_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.event_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.event_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.event_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.hash_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.hash_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.hash_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.hash_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    obj: msg.getObj_asB64(),
    size: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.hash_arguments}
 */
proto.koinos.chain.hash_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.hash_arguments;
  return proto.koinos.chain.hash_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.hash_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.hash_arguments}
 */
proto.koinos.chain.hash_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setObj(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.hash_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.hash_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.hash_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.hash_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getObj_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSize();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
};


/**
 * optional uint64 code = 1;
 * @return {string}
 */
proto.koinos.chain.hash_arguments.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.hash_arguments} returns this
 */
proto.koinos.chain.hash_arguments.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional bytes obj = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.hash_arguments.prototype.getObj = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes obj = 2;
 * This is a type-conversion wrapper around `getObj()`
 * @return {string}
 */
proto.koinos.chain.hash_arguments.prototype.getObj_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getObj()));
};


/**
 * optional bytes obj = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getObj()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.hash_arguments.prototype.getObj_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getObj()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.hash_arguments} returns this
 */
proto.koinos.chain.hash_arguments.prototype.setObj = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 size = 3;
 * @return {string}
 */
proto.koinos.chain.hash_arguments.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.hash_arguments} returns this
 */
proto.koinos.chain.hash_arguments.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.hash_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.hash_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.hash_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.hash_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.hash_result}
 */
proto.koinos.chain.hash_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.hash_result;
  return proto.koinos.chain.hash_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.hash_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.hash_result}
 */
proto.koinos.chain.hash_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.hash_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.hash_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.hash_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.hash_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.hash_result.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.koinos.chain.hash_result.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.hash_result.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.hash_result} returns this
 */
proto.koinos.chain.hash_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.recover_public_key_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.recover_public_key_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.recover_public_key_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    signature: msg.getSignature_asB64(),
    digest: msg.getDigest_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.recover_public_key_arguments}
 */
proto.koinos.chain.recover_public_key_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.recover_public_key_arguments;
  return proto.koinos.chain.recover_public_key_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.recover_public_key_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.recover_public_key_arguments}
 */
proto.koinos.chain.recover_public_key_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.koinos.chain.dsa} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDigest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.recover_public_key_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.recover_public_key_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.recover_public_key_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDigest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional dsa type = 1;
 * @return {!proto.koinos.chain.dsa}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.getType = function() {
  return /** @type {!proto.koinos.chain.dsa} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.koinos.chain.dsa} value
 * @return {!proto.koinos.chain.recover_public_key_arguments} returns this
 */
proto.koinos.chain.recover_public_key_arguments.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.recover_public_key_arguments} returns this
 */
proto.koinos.chain.recover_public_key_arguments.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes digest = 3;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.getDigest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes digest = 3;
 * This is a type-conversion wrapper around `getDigest()`
 * @return {string}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.getDigest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDigest()));
};


/**
 * optional bytes digest = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDigest()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.recover_public_key_arguments.prototype.getDigest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDigest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.recover_public_key_arguments} returns this
 */
proto.koinos.chain.recover_public_key_arguments.prototype.setDigest = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.recover_public_key_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.recover_public_key_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.recover_public_key_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.recover_public_key_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.recover_public_key_result}
 */
proto.koinos.chain.recover_public_key_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.recover_public_key_result;
  return proto.koinos.chain.recover_public_key_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.recover_public_key_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.recover_public_key_result}
 */
proto.koinos.chain.recover_public_key_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.recover_public_key_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.recover_public_key_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.recover_public_key_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.recover_public_key_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.recover_public_key_result.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.koinos.chain.recover_public_key_result.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.recover_public_key_result.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.recover_public_key_result} returns this
 */
proto.koinos.chain.recover_public_key_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.koinos.chain.verify_merkle_root_arguments.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.verify_merkle_root_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.verify_merkle_root_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_merkle_root_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    root: msg.getRoot_asB64(),
    hashesList: msg.getHashesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.verify_merkle_root_arguments}
 */
proto.koinos.chain.verify_merkle_root_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.verify_merkle_root_arguments;
  return proto.koinos.chain.verify_merkle_root_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.verify_merkle_root_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.verify_merkle_root_arguments}
 */
proto.koinos.chain.verify_merkle_root_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRoot(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addHashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.verify_merkle_root_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.verify_merkle_root_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_merkle_root_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getHashesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes root = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.getRoot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes root = 1;
 * This is a type-conversion wrapper around `getRoot()`
 * @return {string}
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.getRoot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRoot()));
};


/**
 * optional bytes root = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRoot()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.getRoot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRoot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.verify_merkle_root_arguments} returns this
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.setRoot = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated bytes hashes = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.getHashesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes hashes = 2;
 * This is a type-conversion wrapper around `getHashesList()`
 * @return {!Array<string>}
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.getHashesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getHashesList()));
};


/**
 * repeated bytes hashes = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHashesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.getHashesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getHashesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.koinos.chain.verify_merkle_root_arguments} returns this
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.setHashesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.koinos.chain.verify_merkle_root_arguments} returns this
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.addHashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.koinos.chain.verify_merkle_root_arguments} returns this
 */
proto.koinos.chain.verify_merkle_root_arguments.prototype.clearHashesList = function() {
  return this.setHashesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.verify_merkle_root_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.verify_merkle_root_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.verify_merkle_root_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_merkle_root_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.verify_merkle_root_result}
 */
proto.koinos.chain.verify_merkle_root_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.verify_merkle_root_result;
  return proto.koinos.chain.verify_merkle_root_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.verify_merkle_root_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.verify_merkle_root_result}
 */
proto.koinos.chain.verify_merkle_root_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_merkle_root_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.verify_merkle_root_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.verify_merkle_root_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_merkle_root_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.koinos.chain.verify_merkle_root_result.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.koinos.chain.verify_merkle_root_result} returns this
 */
proto.koinos.chain.verify_merkle_root_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.verify_signature_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.verify_signature_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.verify_signature_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_signature_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publicKey: msg.getPublicKey_asB64(),
    signature: msg.getSignature_asB64(),
    digest: msg.getDigest_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.verify_signature_arguments}
 */
proto.koinos.chain.verify_signature_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.verify_signature_arguments;
  return proto.koinos.chain.verify_signature_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.verify_signature_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.verify_signature_arguments}
 */
proto.koinos.chain.verify_signature_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.koinos.chain.dsa} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDigest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_signature_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.verify_signature_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.verify_signature_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_signature_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getDigest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional dsa type = 1;
 * @return {!proto.koinos.chain.dsa}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getType = function() {
  return /** @type {!proto.koinos.chain.dsa} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.koinos.chain.dsa} value
 * @return {!proto.koinos.chain.verify_signature_arguments} returns this
 */
proto.koinos.chain.verify_signature_arguments.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes public_key = 2;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.verify_signature_arguments} returns this
 */
proto.koinos.chain.verify_signature_arguments.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.verify_signature_arguments} returns this
 */
proto.koinos.chain.verify_signature_arguments.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes digest = 4;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getDigest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes digest = 4;
 * This is a type-conversion wrapper around `getDigest()`
 * @return {string}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getDigest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDigest()));
};


/**
 * optional bytes digest = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDigest()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_signature_arguments.prototype.getDigest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDigest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.verify_signature_arguments} returns this
 */
proto.koinos.chain.verify_signature_arguments.prototype.setDigest = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.verify_signature_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.verify_signature_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.verify_signature_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_signature_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.verify_signature_result}
 */
proto.koinos.chain.verify_signature_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.verify_signature_result;
  return proto.koinos.chain.verify_signature_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.verify_signature_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.verify_signature_result}
 */
proto.koinos.chain.verify_signature_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.verify_signature_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.verify_signature_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.verify_signature_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.verify_signature_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.koinos.chain.verify_signature_result.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.koinos.chain.verify_signature_result} returns this
 */
proto.koinos.chain.verify_signature_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.call_contract_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.call_contract_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.call_contract_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.call_contract_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractId: msg.getContractId_asB64(),
    entryPoint: jspb.Message.getFieldWithDefault(msg, 2, 0),
    args: msg.getArgs_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.call_contract_arguments}
 */
proto.koinos.chain.call_contract_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.call_contract_arguments;
  return proto.koinos.chain.call_contract_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.call_contract_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.call_contract_arguments}
 */
proto.koinos.chain.call_contract_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContractId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEntryPoint(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.call_contract_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.call_contract_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.call_contract_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.call_contract_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getEntryPoint();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getArgs_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes contract_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.call_contract_arguments.prototype.getContractId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes contract_id = 1;
 * This is a type-conversion wrapper around `getContractId()`
 * @return {string}
 */
proto.koinos.chain.call_contract_arguments.prototype.getContractId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContractId()));
};


/**
 * optional bytes contract_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContractId()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.call_contract_arguments.prototype.getContractId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContractId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.call_contract_arguments} returns this
 */
proto.koinos.chain.call_contract_arguments.prototype.setContractId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 entry_point = 2;
 * @return {number}
 */
proto.koinos.chain.call_contract_arguments.prototype.getEntryPoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.call_contract_arguments} returns this
 */
proto.koinos.chain.call_contract_arguments.prototype.setEntryPoint = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes args = 3;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.call_contract_arguments.prototype.getArgs = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes args = 3;
 * This is a type-conversion wrapper around `getArgs()`
 * @return {string}
 */
proto.koinos.chain.call_contract_arguments.prototype.getArgs_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getArgs()));
};


/**
 * optional bytes args = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getArgs()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.call_contract_arguments.prototype.getArgs_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getArgs()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.call_contract_arguments} returns this
 */
proto.koinos.chain.call_contract_arguments.prototype.setArgs = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.call_contract_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.call_contract_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.call_contract_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.call_contract_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.call_contract_result}
 */
proto.koinos.chain.call_contract_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.call_contract_result;
  return proto.koinos.chain.call_contract_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.call_contract_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.call_contract_result}
 */
proto.koinos.chain.call_contract_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.call_contract_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.call_contract_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.call_contract_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.call_contract_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.call_contract_result.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.koinos.chain.call_contract_result.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.call_contract_result.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.call_contract_result} returns this
 */
proto.koinos.chain.call_contract_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_entry_point_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_entry_point_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_entry_point_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_entry_point_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_entry_point_arguments}
 */
proto.koinos.chain.get_entry_point_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_entry_point_arguments;
  return proto.koinos.chain.get_entry_point_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_entry_point_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_entry_point_arguments}
 */
proto.koinos.chain.get_entry_point_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_entry_point_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_entry_point_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_entry_point_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_entry_point_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_entry_point_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_entry_point_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_entry_point_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_entry_point_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_entry_point_result}
 */
proto.koinos.chain.get_entry_point_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_entry_point_result;
  return proto.koinos.chain.get_entry_point_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_entry_point_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_entry_point_result}
 */
proto.koinos.chain.get_entry_point_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_entry_point_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_entry_point_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_entry_point_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_entry_point_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 value = 1;
 * @return {number}
 */
proto.koinos.chain.get_entry_point_result.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.get_entry_point_result} returns this
 */
proto.koinos.chain.get_entry_point_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_contract_arguments_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_contract_arguments_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_contract_arguments_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_contract_arguments_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_contract_arguments_arguments}
 */
proto.koinos.chain.get_contract_arguments_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_contract_arguments_arguments;
  return proto.koinos.chain.get_contract_arguments_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_contract_arguments_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_contract_arguments_arguments}
 */
proto.koinos.chain.get_contract_arguments_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_contract_arguments_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_contract_arguments_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_contract_arguments_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_contract_arguments_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_contract_arguments_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_contract_arguments_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_contract_arguments_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_contract_arguments_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_contract_arguments_result}
 */
proto.koinos.chain.get_contract_arguments_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_contract_arguments_result;
  return proto.koinos.chain.get_contract_arguments_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_contract_arguments_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_contract_arguments_result}
 */
proto.koinos.chain.get_contract_arguments_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_contract_arguments_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_contract_arguments_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_contract_arguments_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_contract_arguments_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.get_contract_arguments_result.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.koinos.chain.get_contract_arguments_result.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_contract_arguments_result.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.get_contract_arguments_result} returns this
 */
proto.koinos.chain.get_contract_arguments_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.set_contract_result_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.set_contract_result_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.set_contract_result_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.set_contract_result_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.set_contract_result_arguments}
 */
proto.koinos.chain.set_contract_result_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.set_contract_result_arguments;
  return proto.koinos.chain.set_contract_result_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.set_contract_result_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.set_contract_result_arguments}
 */
proto.koinos.chain.set_contract_result_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.set_contract_result_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.set_contract_result_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.set_contract_result_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.set_contract_result_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.set_contract_result_arguments.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.koinos.chain.set_contract_result_arguments.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.set_contract_result_arguments.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.set_contract_result_arguments} returns this
 */
proto.koinos.chain.set_contract_result_arguments.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.set_contract_result_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.set_contract_result_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.set_contract_result_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.set_contract_result_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.set_contract_result_result}
 */
proto.koinos.chain.set_contract_result_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.set_contract_result_result;
  return proto.koinos.chain.set_contract_result_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.set_contract_result_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.set_contract_result_result}
 */
proto.koinos.chain.set_contract_result_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.set_contract_result_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.set_contract_result_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.set_contract_result_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.set_contract_result_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.exit_contract_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.exit_contract_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.exit_contract_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.exit_contract_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    exitCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.exit_contract_arguments}
 */
proto.koinos.chain.exit_contract_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.exit_contract_arguments;
  return proto.koinos.chain.exit_contract_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.exit_contract_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.exit_contract_arguments}
 */
proto.koinos.chain.exit_contract_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExitCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.exit_contract_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.exit_contract_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.exit_contract_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.exit_contract_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExitCode();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 exit_code = 1;
 * @return {number}
 */
proto.koinos.chain.exit_contract_arguments.prototype.getExitCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.exit_contract_arguments} returns this
 */
proto.koinos.chain.exit_contract_arguments.prototype.setExitCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.exit_contract_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.exit_contract_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.exit_contract_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.exit_contract_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.exit_contract_result}
 */
proto.koinos.chain.exit_contract_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.exit_contract_result;
  return proto.koinos.chain.exit_contract_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.exit_contract_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.exit_contract_result}
 */
proto.koinos.chain.exit_contract_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.exit_contract_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.exit_contract_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.exit_contract_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.exit_contract_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_contract_id_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_contract_id_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_contract_id_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_contract_id_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_contract_id_arguments}
 */
proto.koinos.chain.get_contract_id_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_contract_id_arguments;
  return proto.koinos.chain.get_contract_id_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_contract_id_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_contract_id_arguments}
 */
proto.koinos.chain.get_contract_id_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_contract_id_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_contract_id_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_contract_id_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_contract_id_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_contract_id_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_contract_id_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_contract_id_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_contract_id_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_contract_id_result}
 */
proto.koinos.chain.get_contract_id_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_contract_id_result;
  return proto.koinos.chain.get_contract_id_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_contract_id_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_contract_id_result}
 */
proto.koinos.chain.get_contract_id_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_contract_id_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_contract_id_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_contract_id_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_contract_id_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes value = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.get_contract_id_result.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes value = 1;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.koinos.chain.get_contract_id_result.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_contract_id_result.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.get_contract_id_result} returns this
 */
proto.koinos.chain.get_contract_id_result.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_caller_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_caller_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_caller_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_caller_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_caller_arguments}
 */
proto.koinos.chain.get_caller_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_caller_arguments;
  return proto.koinos.chain.get_caller_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_caller_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_caller_arguments}
 */
proto.koinos.chain.get_caller_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_caller_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_caller_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_caller_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_caller_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.get_caller_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.get_caller_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.get_caller_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_caller_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && koinos_chain_chain_pb.caller_data.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.get_caller_result}
 */
proto.koinos.chain.get_caller_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.get_caller_result;
  return proto.koinos.chain.get_caller_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.get_caller_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.get_caller_result}
 */
proto.koinos.chain.get_caller_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new koinos_chain_chain_pb.caller_data;
      reader.readMessage(value,koinos_chain_chain_pb.caller_data.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.get_caller_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.get_caller_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.get_caller_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.get_caller_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      koinos_chain_chain_pb.caller_data.serializeBinaryToWriter
    );
  }
};


/**
 * optional caller_data value = 1;
 * @return {?proto.koinos.chain.caller_data}
 */
proto.koinos.chain.get_caller_result.prototype.getValue = function() {
  return /** @type{?proto.koinos.chain.caller_data} */ (
    jspb.Message.getWrapperField(this, koinos_chain_chain_pb.caller_data, 1));
};


/**
 * @param {?proto.koinos.chain.caller_data|undefined} value
 * @return {!proto.koinos.chain.get_caller_result} returns this
*/
proto.koinos.chain.get_caller_result.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.get_caller_result} returns this
 */
proto.koinos.chain.get_caller_result.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.get_caller_result.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.require_authority_arguments.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.require_authority_arguments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.require_authority_arguments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.require_authority_arguments.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    account: msg.getAccount_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.require_authority_arguments}
 */
proto.koinos.chain.require_authority_arguments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.require_authority_arguments;
  return proto.koinos.chain.require_authority_arguments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.require_authority_arguments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.require_authority_arguments}
 */
proto.koinos.chain.require_authority_arguments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.koinos.chain.authorization_type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.require_authority_arguments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.require_authority_arguments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.require_authority_arguments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.require_authority_arguments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional authorization_type type = 1;
 * @return {!proto.koinos.chain.authorization_type}
 */
proto.koinos.chain.require_authority_arguments.prototype.getType = function() {
  return /** @type {!proto.koinos.chain.authorization_type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.koinos.chain.authorization_type} value
 * @return {!proto.koinos.chain.require_authority_arguments} returns this
 */
proto.koinos.chain.require_authority_arguments.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes account = 2;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.require_authority_arguments.prototype.getAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes account = 2;
 * This is a type-conversion wrapper around `getAccount()`
 * @return {string}
 */
proto.koinos.chain.require_authority_arguments.prototype.getAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccount()));
};


/**
 * optional bytes account = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccount()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.require_authority_arguments.prototype.getAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.require_authority_arguments} returns this
 */
proto.koinos.chain.require_authority_arguments.prototype.setAccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.require_authority_result.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.require_authority_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.require_authority_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.require_authority_result.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.require_authority_result}
 */
proto.koinos.chain.require_authority_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.require_authority_result;
  return proto.koinos.chain.require_authority_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.require_authority_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.require_authority_result}
 */
proto.koinos.chain.require_authority_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.require_authority_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.require_authority_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.require_authority_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.require_authority_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.koinos.chain.dsa = {
  ECDSA_SECP256K1: 0
};

/**
 * @enum {number}
 */
proto.koinos.chain.system_authorization_type = {
  SET_SYSTEM_CONTRACT: 0,
  SET_SYSTEM_CALL: 1
};

goog.object.extend(exports, proto.koinos.chain);
