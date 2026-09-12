(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.e4;
  var initMetadataForInterface = kotlin_kotlin.$_$.u3;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.r3;
  var KProperty1 = kotlin_kotlin.$_$.q4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.q;
  var objectCreate = kotlin_kotlin.$_$.d4;
  var captureStack = kotlin_kotlin.$_$.d3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.t;
  var IllegalArgumentException = kotlin_kotlin.$_$.m5;
  var toString = kotlin_kotlin.$_$.h4;
  var THROW_CCE = kotlin_kotlin.$_$.o5;
  var isInterface = kotlin_kotlin.$_$.x3;
  var emptyList = kotlin_kotlin.$_$.v1;
  var initMetadataForObject = kotlin_kotlin.$_$.w3;
  var ensureNotNull = kotlin_kotlin.$_$.t5;
  var getStringHashCode = kotlin_kotlin.$_$.p3;
  var Long = kotlin_kotlin.$_$.n5;
  var Unit_instance = kotlin_kotlin.$_$.h1;
  var toIntOrNull = kotlin_kotlin.$_$.e5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var equals = kotlin_kotlin.$_$.k3;
  var hashCode = kotlin_kotlin.$_$.q3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var ArrayList = kotlin_kotlin.$_$.i1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var KtList = kotlin_kotlin.$_$.k1;
  var Collection = kotlin_kotlin.$_$.j1;
  var longArray = kotlin_kotlin.$_$.y3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s3;
  var get_lastIndex = kotlin_kotlin.$_$.e2;
  var countTrailingZeroBits = kotlin_kotlin.$_$.r5;
  var contentEquals = kotlin_kotlin.$_$.p1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  var copyToArray = kotlin_kotlin.$_$.t1;
  var contentHashCode = kotlin_kotlin.$_$.q1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.e;
  var fillArrayVal = kotlin_kotlin.$_$.l3;
  var booleanArray = kotlin_kotlin.$_$.c3;
  var emptyMap = kotlin_kotlin.$_$.w1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.w5;
  var until = kotlin_kotlin.$_$.m4;
  var joinToString = kotlin_kotlin.$_$.c2;
  var charSequenceLength = kotlin_kotlin.$_$.g3;
  var lastOrNull = kotlin_kotlin.$_$.g2;
  var get_lastIndex_0 = kotlin_kotlin.$_$.f2;
  var KtMap = kotlin_kotlin.$_$.l1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y5;
  var KClass = kotlin_kotlin.$_$.n4;
  var get_indices = kotlin_kotlin.$_$.b2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.v;
  var get_indices_0 = kotlin_kotlin.$_$.a2;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.ja(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.xb(descriptor, index, deserializer, previousValue) : $super.xb.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.sb(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ia(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.ha().pa();
    if (isNullabilitySupported) {
      return this.qc(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.gc();
    } else {
      this.tc();
      this.qc(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.eh(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ka(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.la());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.ma(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.la());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).ha = function () {
    var tmp0 = this.na_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.b1();
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ha();
    }, null);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.l() === 1 ? "Field '" + missingFields.k(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.oa_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.ha().pa()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function ContextDescriptor() {
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.qa(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ha();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ua_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.ra_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.gb_1 = $this_elementDescriptors;
    this.fb_1 = $this_elementDescriptors.ya();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.fb_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.gb_1.ya();
    var _unary__edvuaz = this.fb_1;
    this.fb_1 = _unary__edvuaz - 1 | 0;
    return this.gb_1.db(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.hb_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).g = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.hb_1);
  };
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).z6());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function PolymorphicKind() {
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).ib = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).jb = function () {
    return true;
  };
  protoOf(AbstractDecoder).kb = function () {
    return null;
  };
  protoOf(AbstractDecoder).lb = function () {
    var tmp = this.ib();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).mb = function () {
    var tmp = this.ib();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).nb = function () {
    var tmp = this.ib();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ob = function () {
    var tmp = this.ib();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).pb = function () {
    var tmp = this.ib();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).qb = function (deserializer, previousValue) {
    return this.rb(deserializer);
  };
  protoOf(AbstractDecoder).sb = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).tb = function (descriptor) {
  };
  protoOf(AbstractDecoder).ub = function (descriptor, index) {
    return this.lb();
  };
  protoOf(AbstractDecoder).vb = function (descriptor, index) {
    return this.mb();
  };
  protoOf(AbstractDecoder).wb = function (descriptor, index) {
    return this.pb();
  };
  protoOf(AbstractDecoder).xb = function (descriptor, index, deserializer, previousValue) {
    return this.qb(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).zb = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.ha().pa();
    var tmp;
    if (isNullabilitySupported || this.jb()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.qb(deserializer, previousValue);
    } else {
      tmp = this.kb();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).sb = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).tb = function (descriptor) {
  };
  protoOf(AbstractEncoder).ec = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).fc = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).gc = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).hc = function (value) {
    return this.fc(value);
  };
  protoOf(AbstractEncoder).ic = function (value) {
    return this.fc(value);
  };
  protoOf(AbstractEncoder).jc = function (value) {
    return this.fc(value);
  };
  protoOf(AbstractEncoder).kc = function (value) {
    return this.fc(value);
  };
  protoOf(AbstractEncoder).lc = function (value) {
    return this.fc(value);
  };
  protoOf(AbstractEncoder).mc = function (descriptor, index, value) {
    if (this.ec(descriptor, index)) {
      this.hc(value);
    }
  };
  protoOf(AbstractEncoder).nc = function (descriptor, index, value) {
    if (this.ec(descriptor, index)) {
      this.ic(value);
    }
  };
  protoOf(AbstractEncoder).oc = function (descriptor, index, value) {
    if (this.ec(descriptor, index)) {
      this.lc(value);
    }
  };
  protoOf(AbstractEncoder).pc = function (descriptor, index, serializer, value) {
    if (this.ec(descriptor, index)) {
      this.qc(serializer, value);
    }
  };
  protoOf(AbstractEncoder).rc = function (descriptor, index, serializer, value) {
    if (this.ec(descriptor, index)) {
      this.sc(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).ma = function (decoder, klassName) {
    return decoder.ac().wc(this.la(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ka = function (encoder, value) {
    return encoder.ac().xc(this.la(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.z6();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.z6() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.z6() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).va = function () {
    return 'kotlin.collections.ArrayList';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.bd_1 = elementDescriptor;
    this.cd_1 = 1;
  }
  protoOf(ListLikeDescriptor).wa = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ya = function () {
    return this.cd_1;
  };
  protoOf(ListLikeDescriptor).ab = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).bb = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).eb = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.va() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).cb = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.va() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).db = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.va() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.bd_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.bd_1, other.bd_1) && this.va() === other.va())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.bd_1), 31) + getStringHashCode(this.va()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.va() + '(' + toString(this.bd_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ed_1 = new ArrayListClassDesc(element.ha());
  }
  protoOf(ArrayListSerializer).ha = function () {
    return this.ed_1;
  };
  protoOf(ArrayListSerializer).fd = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).gd = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).hd = function (_this__u8e3s4) {
    return this.gd(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).id = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).jd = function (_this__u8e3s4) {
    return this.id(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).kd = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).ld = function (_this__u8e3s4) {
    return this.kd((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).md = function (_this__u8e3s4, size) {
    return _this__u8e3s4.h3(size);
  };
  protoOf(ArrayListSerializer).nd = function (_this__u8e3s4, size) {
    return this.md(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).od = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.o2(index, element);
  };
  protoOf(ArrayListSerializer).pd = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.od(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).rd = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).zd = function (_this__u8e3s4) {
    return this.rd((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).sd = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).ae = function (_this__u8e3s4) {
    return this.sd((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.td_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).ud = function (encoder, value) {
    var size = this.zd(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ha();
    var composite = encoder.uc(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.ae(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.pc(this.ha(), index, this.td_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.tb(descriptor);
  };
  protoOf(CollectionLikeSerializer).ia = function (encoder, value) {
    return this.ud(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).vd = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.wd(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).wd = function (decoder, index, builder, checkIndex) {
    this.pd(builder, index, decoder.yb(this.ha(), index, this.td_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.dc($this.ha());
    $this.nd(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).yd = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ld(previous);
    var builder = tmp1_elvis_lhs == null ? this.fd() : tmp1_elvis_lhs;
    var startIndex = this.hd(builder);
    var compositeDecoder = decoder.sb(this.ha());
    if (compositeDecoder.bc()) {
      this.vd(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.cc(this.ha());
        if (index === -1)
          break $l$loop;
        this.xd(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.tb(this.ha());
    return this.jd(builder);
  };
  protoOf(AbstractCollectionSerializer).ja = function (decoder) {
    return this.yd(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).xd = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.wd(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.wd.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.be_1 = longArray(0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).t1(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.fe_1[slot] = $this.fe_1[slot].u1((new Long(1, 0)).t1(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.fe_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.fe_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.s1());
          slotMarks = slotMarks.u1((new Long(1, 0)).t1(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.de_1($this.ce_1, index)) {
            $this.fe_1[slot] = slotMarks;
            return index;
          }
        }
        $this.fe_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.ce_1 = descriptor;
    this.de_1 = readIfAbsent;
    var elementsCount = this.ce_1.ya();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).t1(elementsCount);
      }
      tmp.ee_1 = tmp_0;
      this.fe_1 = Companion_getInstance().be_1;
    } else {
      this.ee_1 = new Long(0, 0);
      this.fe_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ge = function (index) {
    if (index < 64) {
      this.ee_1 = this.ee_1.u1((new Long(1, 0)).t1(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).he = function () {
    var elementsCount = this.ce_1.ya();
    while (!this.ee_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.ee_1.s1());
      this.ee_1 = this.ee_1.u1((new Long(1, 0)).t1(index));
      if (this.de_1(this.ce_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.ue_1 = true;
  }
  protoOf(InlineClassDescriptor).xa = function () {
    return this.ue_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.va() === other.va())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.ue_1 && contentEquals(this.hf(), other.hf()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ya() === other.ya())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ya();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.db(index).va() === other.db(index).va())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.db(index).wa(), other.db(index).wa())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.jf_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).kf = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.jf_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).ha = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ia = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ja = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.mf_1 = serializer;
    this.nf_1 = new SerialDescriptorForNullable(this.mf_1.ha());
  }
  protoOf(NullableSerializer).ha = function () {
    return this.nf_1;
  };
  protoOf(NullableSerializer).of = function (encoder, value) {
    if (!(value == null)) {
      encoder.tc();
      encoder.qc(this.mf_1, value);
    } else {
      encoder.gc();
    }
  };
  protoOf(NullableSerializer).ia = function (encoder, value) {
    return this.of(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).ja = function (decoder) {
    return decoder.jb() ? decoder.rb(this.mf_1) : decoder.kb();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.mf_1, other.mf_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.mf_1);
  };
  function SerialDescriptorForNullable(original) {
    this.ra_1 = original;
    this.sa_1 = this.ra_1.va() + '?';
    this.ta_1 = cachedSerialNames(this.ra_1);
  }
  protoOf(SerialDescriptorForNullable).va = function () {
    return this.sa_1;
  };
  protoOf(SerialDescriptorForNullable).yc = function () {
    return this.ta_1;
  };
  protoOf(SerialDescriptorForNullable).pa = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.ra_1, other.ra_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.ra_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.ra_1), 31);
  };
  protoOf(SerialDescriptorForNullable).wa = function () {
    return this.ra_1.wa();
  };
  protoOf(SerialDescriptorForNullable).xa = function () {
    return this.ra_1.xa();
  };
  protoOf(SerialDescriptorForNullable).ya = function () {
    return this.ra_1.ya();
  };
  protoOf(SerialDescriptorForNullable).za = function () {
    return this.ra_1.za();
  };
  protoOf(SerialDescriptorForNullable).ab = function (index) {
    return this.ra_1.ab(index);
  };
  protoOf(SerialDescriptorForNullable).bb = function (name) {
    return this.ra_1.bb(name);
  };
  protoOf(SerialDescriptorForNullable).cb = function (index) {
    return this.ra_1.cb(index);
  };
  protoOf(SerialDescriptorForNullable).db = function (index) {
    return this.ra_1.db(index);
  };
  protoOf(SerialDescriptorForNullable).eb = function (index) {
    return this.ra_1.eb(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.yc();
    var result = HashSet_init_$Create$(_this__u8e3s4.ya());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ya();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.ab(i);
        result.e(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.j())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.ab(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.va());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.va());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.va();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.wa();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.ef_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.b1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.gf_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.b1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ze_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.ze_1[i];
        indices.y2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.we_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kf();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.we_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lf();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_1(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.ha();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.hf());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.ab(i) + ': ' + this$0.db(i).va();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ve_1 = serialName;
    this.we_1 = generatedSerializer;
    this.xe_1 = elementsCount;
    this.ye_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.xe_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ze_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.xe_1;
    tmp_3.af_1 = fillArrayVal(Array(size), null);
    this.bf_1 = null;
    this.cf_1 = booleanArray(this.xe_1);
    this.df_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.ef_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.ff_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.gf_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).va = function () {
    return this.ve_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ya = function () {
    return this.xe_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).wa = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).za = function () {
    var tmp0_elvis_lhs = this.bf_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).yc = function () {
    return this.df_1.e1();
  };
  protoOf(PluginGeneratedSerialDescriptor).hf = function () {
    var tmp0 = this.ff_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.b1();
  };
  protoOf(PluginGeneratedSerialDescriptor).if = function (name, isOptional) {
    this.ye_1 = this.ye_1 + 1 | 0;
    this.ze_1[this.ye_1] = name;
    this.cf_1[this.ye_1] = isOptional;
    this.af_1[this.ye_1] = null;
    if (this.ye_1 === (this.xe_1 - 1 | 0)) {
      this.df_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).db = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).ha();
  };
  protoOf(PluginGeneratedSerialDescriptor).eb = function (index) {
    return getChecked_0(this.cf_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).cb = function (index) {
    var tmp0_elvis_lhs = getChecked(this.af_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ab = function (index) {
    return getChecked(this.ze_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).bb = function (name) {
    var tmp0_elvis_lhs = this.df_1.d1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.va() === other.va())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.hf(), other.hf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ya() === other.ya())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ya();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.db(index).va() === other.db(index).va())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.db(index).wa(), other.db(index).wa())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.xe_1);
    var tmp_0 = this.va() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.hf();
    }, null);
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.pf_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).ha = function () {
    return this.pf_1;
  };
  protoOf(StringSerializer).qf = function (encoder, value) {
    return encoder.lc(value);
  };
  protoOf(StringSerializer).ia = function (encoder, value) {
    return this.qf(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ja = function (decoder) {
    return decoder.pb();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.rf_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).ha = function () {
    return this.rf_1;
  };
  protoOf(DoubleSerializer).sf = function (encoder, value) {
    return encoder.kc(value);
  };
  protoOf(DoubleSerializer).ia = function (encoder, value) {
    return this.sf(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ja = function (decoder) {
    return decoder.ob();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.tf_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).ha = function () {
    return this.tf_1;
  };
  protoOf(LongSerializer).uf = function (encoder, value) {
    return encoder.jc(value);
  };
  protoOf(LongSerializer).ia = function (encoder, value) {
    return this.uf(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).ja = function (decoder) {
    return decoder.nb();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.vf_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).ha = function () {
    return this.vf_1;
  };
  protoOf(IntSerializer).wf = function (encoder, value) {
    return encoder.ic(value);
  };
  protoOf(IntSerializer).ia = function (encoder, value) {
    return this.wf(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ja = function (decoder) {
    return decoder.mb();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.xf_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).ha = function () {
    return this.xf_1;
  };
  protoOf(BooleanSerializer).yf = function (encoder, value) {
    return encoder.hc(value);
  };
  protoOf(BooleanSerializer).ia = function (encoder, value) {
    return this.yf(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ja = function (decoder) {
    return decoder.lb();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.zf_1 = serialName;
    this.ag_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).va = function () {
    return this.zf_1;
  };
  protoOf(PrimitiveSerialDescriptor).wa = function () {
    return this.ag_1;
  };
  protoOf(PrimitiveSerialDescriptor).ya = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).ab = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).bb = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).eb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).db = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).cb = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.zf_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.zf_1 === other.zf_1 && equals(this.ag_1, other.ag_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.zf_1) + imul(31, this.ag_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).dg = function (_this__u8e3s4, index) {
    return this.fg(this.eg(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).fg = function (nestedName) {
    var tmp0_elvis_lhs = this.ig();
    return this.jg(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).eg = function (descriptor, index) {
    return descriptor.ab(index);
  };
  protoOf(NamedValueDecoder).jg = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).kg = function () {
    return this.gg_1.j() ? '$' : joinToString(this.gg_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.sg(tag);
    var r = block();
    if (!$this.hg_1) {
      $this.tg();
    }
    $this.hg_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.qb($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.ha().pa();
      var tmp;
      if (isNullabilitySupported || tmp0.jb()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.qb($deserializer, $previousValue);
      } else {
        tmp = tmp0.kb();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.gg_1 = ArrayList_init_$Create$();
    this.hg_1 = false;
  }
  protoOf(TaggedDecoder).ac = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).lg = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).mg = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).ng = function (tag) {
    var tmp = this.lg(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).og = function (tag) {
    var tmp = this.lg(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).pg = function (tag) {
    var tmp = this.lg(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).qg = function (tag) {
    var tmp = this.lg(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).rg = function (tag) {
    var tmp = this.lg(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).qb = function (deserializer, previousValue) {
    return this.rb(deserializer);
  };
  protoOf(TaggedDecoder).jb = function () {
    var tmp0_elvis_lhs = this.ig();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.mg(currentTag);
  };
  protoOf(TaggedDecoder).kb = function () {
    return null;
  };
  protoOf(TaggedDecoder).lb = function () {
    return this.ng(this.tg());
  };
  protoOf(TaggedDecoder).mb = function () {
    return this.og(this.tg());
  };
  protoOf(TaggedDecoder).nb = function () {
    return this.pg(this.tg());
  };
  protoOf(TaggedDecoder).ob = function () {
    return this.qg(this.tg());
  };
  protoOf(TaggedDecoder).pb = function () {
    return this.rg(this.tg());
  };
  protoOf(TaggedDecoder).sb = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).tb = function (descriptor) {
  };
  protoOf(TaggedDecoder).ub = function (descriptor, index) {
    return this.ng(this.dg(descriptor, index));
  };
  protoOf(TaggedDecoder).vb = function (descriptor, index) {
    return this.og(this.dg(descriptor, index));
  };
  protoOf(TaggedDecoder).wb = function (descriptor, index) {
    return this.rg(this.dg(descriptor, index));
  };
  protoOf(TaggedDecoder).xb = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.dg(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).zb = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.dg(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ig = function () {
    return lastOrNull(this.gg_1);
  };
  protoOf(TaggedDecoder).sg = function (name) {
    this.gg_1.e(name);
  };
  protoOf(TaggedDecoder).tg = function () {
    var r = this.gg_1.p2(get_lastIndex_0(this.gg_1));
    this.hg_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).qa = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ug(kClass, typeArgumentsSerializers) : $super.ug.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.wg_1 = class2ContextualFactory;
    this.xg_1 = polyBase2Serializers;
    this.yg_1 = polyBase2DefaultSerializerProvider;
    this.zg_1 = polyBase2NamedSerializers;
    this.ah_1 = polyBase2DefaultDeserializerProvider;
    this.bh_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).xc = function (baseClass, value) {
    if (!baseClass.a7(value))
      return null;
    var tmp0_safe_receiver = this.xg_1.d1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.yg_1.d1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).wc = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.zg_1.d1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).d1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.ah_1.d1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ug = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.wg_1.d1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ch(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).vg = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.wg_1.f1().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.b1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.fh_1;
        collector.gh(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.eh(kclass, serial.dh_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.xg_1.f1().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.b1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.f1().g();
      while (_iterator__ex2g4s_1.h()) {
        var element_1 = _iterator__ex2g4s_1.i();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.a1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.b1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.hh(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.yg_1.f1().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.a1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.b1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.ih(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.ah_1.f1().g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.a1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.b1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.jh(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(AbstractDecoder).yb = decodeSerializableElement$default;
  protoOf(AbstractDecoder).rb = decodeSerializableValue;
  protoOf(AbstractDecoder).bc = decodeSequentially;
  protoOf(AbstractDecoder).dc = decodeCollectionSize;
  protoOf(AbstractEncoder).tc = encodeNotNullMark;
  protoOf(AbstractEncoder).uc = beginCollection;
  protoOf(AbstractEncoder).qc = encodeSerializableValue;
  protoOf(AbstractEncoder).sc = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).vc = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).pa = get_isNullable;
  protoOf(ListLikeDescriptor).xa = get_isInline;
  protoOf(ListLikeDescriptor).za = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).pa = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).xa = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).lf = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).pa = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).xa = get_isInline;
  protoOf(PrimitiveSerialDescriptor).za = get_annotations;
  protoOf(TaggedDecoder).yb = decodeSerializableElement$default;
  protoOf(TaggedDecoder).rb = decodeSerializableValue;
  protoOf(TaggedDecoder).bc = decodeSequentially;
  protoOf(TaggedDecoder).dc = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = UnknownFieldException_init_$Create$;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = OBJECT_getInstance;
  _.$_$.i = BooleanSerializer_getInstance;
  _.$_$.j = DoubleSerializer_getInstance;
  _.$_$.k = IntSerializer_getInstance;
  _.$_$.l = LongSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = ListSerializer;
  _.$_$.o = get_nullable;
  _.$_$.p = serializer;
  _.$_$.q = PolymorphicKind;
  _.$_$.r = PrimitiveKind;
  _.$_$.s = SerialDescriptor;
  _.$_$.t = ENUM;
  _.$_$.u = getContextualDescriptor;
  _.$_$.v = AbstractDecoder;
  _.$_$.w = AbstractEncoder;
  _.$_$.x = CompositeDecoder;
  _.$_$.y = CompositeEncoder;
  _.$_$.z = Decoder;
  _.$_$.a1 = Encoder;
  _.$_$.b1 = AbstractPolymorphicSerializer;
  _.$_$.c1 = ArrayListSerializer;
  _.$_$.d1 = ElementMarker;
  _.$_$.e1 = typeParametersSerializers;
  _.$_$.f1 = GeneratedSerializer;
  _.$_$.g1 = InlinePrimitiveDescriptor;
  _.$_$.h1 = NamedValueDecoder;
  _.$_$.i1 = PluginGeneratedSerialDescriptor;
  _.$_$.j1 = jsonCachedSerialNames;
  _.$_$.k1 = throwMissingFieldException;
  _.$_$.l1 = EmptySerializersModule_0;
  _.$_$.m1 = contextual;
  _.$_$.n1 = SerializersModuleCollector;
  _.$_$.o1 = DeserializationStrategy;
  _.$_$.p1 = MissingFieldException;
  _.$_$.q1 = SealedClassSerializer;
  _.$_$.r1 = SerializationException;
  _.$_$.s1 = SerializationStrategy;
  _.$_$.t1 = findPolymorphicSerializer_0;
  _.$_$.u1 = findPolymorphicSerializer;
  //endregion
  return _;
}));

