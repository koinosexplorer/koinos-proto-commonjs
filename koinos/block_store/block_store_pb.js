// source: koinos/block_store/block_store.proto
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
var koinos_protocol_protocol_pb = require('../../koinos/protocol/protocol_pb.js');
goog.object.extend(proto, koinos_protocol_protocol_pb);
goog.exportSymbol('proto.koinos.block_store.block_item', null, global);
goog.exportSymbol('proto.koinos.block_store.block_record', null, global);
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
proto.koinos.block_store.block_item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.block_store.block_item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.block_store.block_item.displayName = 'proto.koinos.block_store.block_item';
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
proto.koinos.block_store.block_record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.koinos.block_store.block_record.repeatedFields_, null);
};
goog.inherits(proto.koinos.block_store.block_record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.block_store.block_record.displayName = 'proto.koinos.block_store.block_record';
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
proto.koinos.block_store.block_item.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.block_store.block_item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.block_store.block_item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.block_store.block_item.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockId: msg.getBlockId_asB64(),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    block: (f = msg.getBlock()) && koinos_protocol_protocol_pb.block.toObject(includeInstance, f),
    receipt: (f = msg.getReceipt()) && koinos_protocol_protocol_pb.block_receipt.toObject(includeInstance, f)
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
 * @return {!proto.koinos.block_store.block_item}
 */
proto.koinos.block_store.block_item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.block_store.block_item;
  return proto.koinos.block_store.block_item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.block_store.block_item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.block_store.block_item}
 */
proto.koinos.block_store.block_item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBlockHeight(value);
      break;
    case 3:
      var value = new koinos_protocol_protocol_pb.block;
      reader.readMessage(value,koinos_protocol_protocol_pb.block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 4:
      var value = new koinos_protocol_protocol_pb.block_receipt;
      reader.readMessage(value,koinos_protocol_protocol_pb.block_receipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
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
proto.koinos.block_store.block_item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.block_store.block_item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.block_store.block_item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.block_store.block_item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBlockHeight();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      koinos_protocol_protocol_pb.block.serializeBinaryToWriter
    );
  }
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      koinos_protocol_protocol_pb.block_receipt.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes block_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.block_store.block_item.prototype.getBlockId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes block_id = 1;
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {string}
 */
proto.koinos.block_store.block_item.prototype.getBlockId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockId()));
};


/**
 * optional bytes block_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {!Uint8Array}
 */
proto.koinos.block_store.block_item.prototype.getBlockId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.block_store.block_item} returns this
 */
proto.koinos.block_store.block_item.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 block_height = 2;
 * @return {string}
 */
proto.koinos.block_store.block_item.prototype.getBlockHeight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.block_store.block_item} returns this
 */
proto.koinos.block_store.block_item.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional koinos.protocol.block block = 3;
 * @return {?proto.koinos.protocol.block}
 */
proto.koinos.block_store.block_item.prototype.getBlock = function() {
  return /** @type{?proto.koinos.protocol.block} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.block, 3));
};


/**
 * @param {?proto.koinos.protocol.block|undefined} value
 * @return {!proto.koinos.block_store.block_item} returns this
*/
proto.koinos.block_store.block_item.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.block_store.block_item} returns this
 */
proto.koinos.block_store.block_item.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.block_store.block_item.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional koinos.protocol.block_receipt receipt = 4;
 * @return {?proto.koinos.protocol.block_receipt}
 */
proto.koinos.block_store.block_item.prototype.getReceipt = function() {
  return /** @type{?proto.koinos.protocol.block_receipt} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.block_receipt, 4));
};


/**
 * @param {?proto.koinos.protocol.block_receipt|undefined} value
 * @return {!proto.koinos.block_store.block_item} returns this
*/
proto.koinos.block_store.block_item.prototype.setReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.block_store.block_item} returns this
 */
proto.koinos.block_store.block_item.prototype.clearReceipt = function() {
  return this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.block_store.block_item.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.koinos.block_store.block_record.repeatedFields_ = [5];



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
proto.koinos.block_store.block_record.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.block_store.block_record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.block_store.block_record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.block_store.block_record.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockId: msg.getBlockId_asB64(),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    block: (f = msg.getBlock()) && koinos_protocol_protocol_pb.block.toObject(includeInstance, f),
    receipt: (f = msg.getReceipt()) && koinos_protocol_protocol_pb.block_receipt.toObject(includeInstance, f),
    previousBlockIdsList: msg.getPreviousBlockIdsList_asB64()
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
 * @return {!proto.koinos.block_store.block_record}
 */
proto.koinos.block_store.block_record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.block_store.block_record;
  return proto.koinos.block_store.block_record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.block_store.block_record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.block_store.block_record}
 */
proto.koinos.block_store.block_record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBlockHeight(value);
      break;
    case 3:
      var value = new koinos_protocol_protocol_pb.block;
      reader.readMessage(value,koinos_protocol_protocol_pb.block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 4:
      var value = new koinos_protocol_protocol_pb.block_receipt;
      reader.readMessage(value,koinos_protocol_protocol_pb.block_receipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addPreviousBlockIds(value);
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
proto.koinos.block_store.block_record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.block_store.block_record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.block_store.block_record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.block_store.block_record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBlockHeight();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      koinos_protocol_protocol_pb.block.serializeBinaryToWriter
    );
  }
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      koinos_protocol_protocol_pb.block_receipt.serializeBinaryToWriter
    );
  }
  f = message.getPreviousBlockIdsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      5,
      f
    );
  }
};


/**
 * optional bytes block_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.block_store.block_record.prototype.getBlockId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes block_id = 1;
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {string}
 */
proto.koinos.block_store.block_record.prototype.getBlockId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockId()));
};


/**
 * optional bytes block_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {!Uint8Array}
 */
proto.koinos.block_store.block_record.prototype.getBlockId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.block_store.block_record} returns this
 */
proto.koinos.block_store.block_record.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 block_height = 2;
 * @return {string}
 */
proto.koinos.block_store.block_record.prototype.getBlockHeight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.koinos.block_store.block_record} returns this
 */
proto.koinos.block_store.block_record.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional koinos.protocol.block block = 3;
 * @return {?proto.koinos.protocol.block}
 */
proto.koinos.block_store.block_record.prototype.getBlock = function() {
  return /** @type{?proto.koinos.protocol.block} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.block, 3));
};


/**
 * @param {?proto.koinos.protocol.block|undefined} value
 * @return {!proto.koinos.block_store.block_record} returns this
*/
proto.koinos.block_store.block_record.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.block_store.block_record} returns this
 */
proto.koinos.block_store.block_record.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.block_store.block_record.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional koinos.protocol.block_receipt receipt = 4;
 * @return {?proto.koinos.protocol.block_receipt}
 */
proto.koinos.block_store.block_record.prototype.getReceipt = function() {
  return /** @type{?proto.koinos.protocol.block_receipt} */ (
    jspb.Message.getWrapperField(this, koinos_protocol_protocol_pb.block_receipt, 4));
};


/**
 * @param {?proto.koinos.protocol.block_receipt|undefined} value
 * @return {!proto.koinos.block_store.block_record} returns this
*/
proto.koinos.block_store.block_record.prototype.setReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.block_store.block_record} returns this
 */
proto.koinos.block_store.block_record.prototype.clearReceipt = function() {
  return this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.block_store.block_record.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated bytes previous_block_ids = 5;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.koinos.block_store.block_record.prototype.getPreviousBlockIdsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * repeated bytes previous_block_ids = 5;
 * This is a type-conversion wrapper around `getPreviousBlockIdsList()`
 * @return {!Array<string>}
 */
proto.koinos.block_store.block_record.prototype.getPreviousBlockIdsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getPreviousBlockIdsList()));
};


/**
 * repeated bytes previous_block_ids = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreviousBlockIdsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.koinos.block_store.block_record.prototype.getPreviousBlockIdsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getPreviousBlockIdsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.koinos.block_store.block_record} returns this
 */
proto.koinos.block_store.block_record.prototype.setPreviousBlockIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.koinos.block_store.block_record} returns this
 */
proto.koinos.block_store.block_record.prototype.addPreviousBlockIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.koinos.block_store.block_record} returns this
 */
proto.koinos.block_store.block_record.prototype.clearPreviousBlockIdsList = function() {
  return this.setPreviousBlockIdsList([]);
};


goog.object.extend(exports, proto.koinos.block_store);
