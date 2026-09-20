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
  var protoOf = kotlin_kotlin.$_$.m5;
  var initMetadataForInterface = kotlin_kotlin.$_$.z4;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.w4;
  var KProperty1 = kotlin_kotlin.$_$.b6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.l5;
  var captureStack = kotlin_kotlin.$_$.h4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.a1;
  var IllegalArgumentException = kotlin_kotlin.$_$.o7;
  var toString = kotlin_kotlin.$_$.p5;
  var THROW_CCE = kotlin_kotlin.$_$.r7;
  var isInterface = kotlin_kotlin.$_$.e5;
  var emptyList = kotlin_kotlin.$_$.o2;
  var initMetadataForObject = kotlin_kotlin.$_$.b5;
  var ensureNotNull = kotlin_kotlin.$_$.w7;
  var getStringHashCode = kotlin_kotlin.$_$.u4;
  var Long = kotlin_kotlin.$_$.p7;
  var Unit_instance = kotlin_kotlin.$_$.w1;
  var toIntOrNull = kotlin_kotlin.$_$.c7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var equals = kotlin_kotlin.$_$.p4;
  var hashCode = kotlin_kotlin.$_$.v4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var ArrayList = kotlin_kotlin.$_$.x1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var KtList = kotlin_kotlin.$_$.a2;
  var KtMap = kotlin_kotlin.$_$.b2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var LinkedHashMap = kotlin_kotlin.$_$.z1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var Collection = kotlin_kotlin.$_$.y1;
  var until = kotlin_kotlin.$_$.w5;
  var step = kotlin_kotlin.$_$.v5;
  var KtMutableMap = kotlin_kotlin.$_$.c2;
  var getValue = kotlin_kotlin.$_$.t2;
  var longArray = kotlin_kotlin.$_$.f5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.x4;
  var get_lastIndex = kotlin_kotlin.$_$.z2;
  var countTrailingZeroBits = kotlin_kotlin.$_$.u7;
  var contentEquals = kotlin_kotlin.$_$.h2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var copyToArray = kotlin_kotlin.$_$.l2;
  var contentHashCode = kotlin_kotlin.$_$.i2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.g;
  var fillArrayVal = kotlin_kotlin.$_$.q4;
  var booleanArray = kotlin_kotlin.$_$.g4;
  var emptyMap = kotlin_kotlin.$_$.p2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.z7;
  var joinToString = kotlin_kotlin.$_$.x2;
  var charSequenceLength = kotlin_kotlin.$_$.l4;
  var lastOrNull = kotlin_kotlin.$_$.b3;
  var get_lastIndex_0 = kotlin_kotlin.$_$.a3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b8;
  var KClass = kotlin_kotlin.$_$.x5;
  var get_indices = kotlin_kotlin.$_$.v2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var get_indices_0 = kotlin_kotlin.$_$.u2;
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
    return deserializer.ce(this);
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
    return $super === VOID ? this.qf(descriptor, index, deserializer, previousValue) : $super.qf.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.lf(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.be(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.ae().ie();
    if (isNullabilitySupported) {
      return this.jg(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.zf();
    } else {
      this.mg();
      this.jg(serializer, value);
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
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
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
    return this.ol(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.de(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ee());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.fe(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ee());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).ae = function () {
    var tmp0 = this.ge_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.t1();
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ae();
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
    this.he_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.ae().ie()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_0(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.je(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ae();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ne_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.ke_1);
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
    this.ze_1 = $this_elementDescriptors;
    this.ye_1 = $this_elementDescriptors.re();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.ye_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.ze_1.re();
    var _unary__edvuaz = this.ye_1;
    this.ye_1 = _unary__edvuaz - 1 | 0;
    return this.ze_1.we(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.af_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).g = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.af_1);
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
    return ensureNotNull(getKClassFromExpression(this).t8());
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
  protoOf(AbstractDecoder).bf = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).cf = function () {
    return true;
  };
  protoOf(AbstractDecoder).df = function () {
    return null;
  };
  protoOf(AbstractDecoder).ef = function () {
    var tmp = this.bf();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ff = function () {
    var tmp = this.bf();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gf = function () {
    var tmp = this.bf();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).hf = function () {
    var tmp = this.bf();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).if = function () {
    var tmp = this.bf();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).jf = function (deserializer, previousValue) {
    return this.kf(deserializer);
  };
  protoOf(AbstractDecoder).lf = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).mf = function (descriptor) {
  };
  protoOf(AbstractDecoder).nf = function (descriptor, index) {
    return this.ef();
  };
  protoOf(AbstractDecoder).of = function (descriptor, index) {
    return this.ff();
  };
  protoOf(AbstractDecoder).pf = function (descriptor, index) {
    return this.if();
  };
  protoOf(AbstractDecoder).qf = function (descriptor, index, deserializer, previousValue) {
    return this.jf(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).sf = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.ae().ie();
    var tmp;
    if (isNullabilitySupported || this.cf()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.jf(deserializer, previousValue);
    } else {
      tmp = this.df();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).lf = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).mf = function (descriptor) {
  };
  protoOf(AbstractEncoder).xf = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).yf = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).zf = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).ag = function (value) {
    return this.yf(value);
  };
  protoOf(AbstractEncoder).bg = function (value) {
    return this.yf(value);
  };
  protoOf(AbstractEncoder).cg = function (value) {
    return this.yf(value);
  };
  protoOf(AbstractEncoder).dg = function (value) {
    return this.yf(value);
  };
  protoOf(AbstractEncoder).eg = function (value) {
    return this.yf(value);
  };
  protoOf(AbstractEncoder).fg = function (descriptor, index, value) {
    if (this.xf(descriptor, index)) {
      this.ag(value);
    }
  };
  protoOf(AbstractEncoder).gg = function (descriptor, index, value) {
    if (this.xf(descriptor, index)) {
      this.bg(value);
    }
  };
  protoOf(AbstractEncoder).hg = function (descriptor, index, value) {
    if (this.xf(descriptor, index)) {
      this.eg(value);
    }
  };
  protoOf(AbstractEncoder).ig = function (descriptor, index, serializer, value) {
    if (this.xf(descriptor, index)) {
      this.jg(serializer, value);
    }
  };
  protoOf(AbstractEncoder).kg = function (descriptor, index, serializer, value) {
    if (this.xf(descriptor, index)) {
      this.lg(serializer, value);
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
  protoOf(AbstractPolymorphicSerializer).fe = function (decoder, klassName) {
    return decoder.tf().pg(this.ee(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).de = function (encoder, value) {
    return encoder.tf().qg(this.ee(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.t8();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.t8() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.t8() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).oe = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.ug_1 = elementDescriptor;
    this.vg_1 = 1;
  }
  protoOf(ListLikeDescriptor).pe = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).re = function () {
    return this.vg_1;
  };
  protoOf(ListLikeDescriptor).te = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).ue = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).xe = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).ve = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).we = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ug_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ug_1, other.ug_1) && this.oe() === other.oe())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ug_1), 31) + getStringHashCode(this.oe()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.oe() + '(' + toString(this.ug_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.wg_1 = serialName;
    this.xg_1 = keyDescriptor;
    this.yg_1 = valueDescriptor;
    this.zg_1 = 2;
  }
  protoOf(MapLikeDescriptor).oe = function () {
    return this.wg_1;
  };
  protoOf(MapLikeDescriptor).pe = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).re = function () {
    return this.zg_1;
  };
  protoOf(MapLikeDescriptor).te = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).ue = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).xe = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).ve = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).we = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.oe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.xg_1;
        break;
      case 1:
        tmp = this.yg_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.oe() === other.oe()))
      return false;
    if (!equals(this.xg_1, other.xg_1))
      return false;
    if (!equals(this.yg_1, other.yg_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.oe());
    result = imul(31, result) + hashCode(this.xg_1) | 0;
    result = imul(31, result) + hashCode(this.yg_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.oe() + '(' + toString(this.xg_1) + ', ' + toString(this.yg_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.bh_1 = new ArrayListClassDesc(element.ae());
  }
  protoOf(ArrayListSerializer).ae = function () {
    return this.bh_1;
  };
  protoOf(ArrayListSerializer).ch = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).dh = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).eh = function (_this__u8e3s4) {
    return this.dh(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).fh = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).gh = function (_this__u8e3s4) {
    return this.fh(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).hh = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).ih = function (_this__u8e3s4) {
    return this.hh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).jh = function (_this__u8e3s4, size) {
    return _this__u8e3s4.p4(size);
  };
  protoOf(ArrayListSerializer).kh = function (_this__u8e3s4, size) {
    return this.jh(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).lh = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.x3(index, element);
  };
  protoOf(ArrayListSerializer).mh = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.lh(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.yh_1 = new LinkedHashMapClassDesc(kSerializer.ae(), vSerializer.ae());
  }
  protoOf(LinkedHashMapSerializer).ae = function () {
    return this.yh_1;
  };
  protoOf(LinkedHashMapSerializer).zh = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashMapSerializer).ai = function (_this__u8e3s4) {
    return this.zh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).bi = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.y1().g();
  };
  protoOf(LinkedHashMapSerializer).ci = function (_this__u8e3s4) {
    return this.bi((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ch = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).di = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(LinkedHashMapSerializer).eh = function (_this__u8e3s4) {
    return this.di(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ei = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).gh = function (_this__u8e3s4) {
    return this.ei(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).fi = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).ih = function (_this__u8e3s4) {
    return this.fi((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).gi = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).kh = function (_this__u8e3s4, size) {
    return this.gi(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).oh = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).ai = function (_this__u8e3s4) {
    return this.oh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).ph = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).ci = function (_this__u8e3s4) {
    return this.ph((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.hi_1 = keySerializer;
    this.ii_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).ji = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.ki(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).sh = function (decoder, builder, startIndex, size) {
    return this.ji(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).ki = function (decoder, index, builder, checkIndex) {
    var key = decoder.rf(this.ae(), index, this.hi_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.vf(this.ae());
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.u1(key)) {
      var tmp_2 = this.ii_1.ae().pe();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.qf(this.ae(), vIndex, this.ii_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.rf(this.ae(), vIndex, this.ii_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.z1(key, value);
  };
  protoOf(MapLikeSerializer).th = function (decoder, index, builder, checkIndex) {
    return this.ki(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).rh = function (encoder, value) {
    var size = this.ai(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ae();
    var composite = encoder.ng(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.ci(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.t1();
      var tmp = this.ae();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.ig(tmp, _unary__edvuaz, this.hi_1, k);
      var tmp_0 = this.ae();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.ig(tmp_0, _unary__edvuaz_0, this.ii_1, v);
    }
    composite.mf(descriptor);
  };
  protoOf(MapLikeSerializer).be = function (encoder, value) {
    return this.rh(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.qh_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).rh = function (encoder, value) {
    var size = this.ai(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.ae();
    var composite = encoder.ng(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.ci(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ig(this.ae(), index, this.qh_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.mf(descriptor);
  };
  protoOf(CollectionLikeSerializer).be = function (encoder, value) {
    return this.rh(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).sh = function (decoder, builder, startIndex, size) {
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
        this.th(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).th = function (decoder, index, builder, checkIndex) {
    this.mh(builder, index, decoder.rf(this.ae(), index, this.qh_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.wf($this.ae());
    $this.kh(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).vh = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ih(previous);
    var builder = tmp1_elvis_lhs == null ? this.ch() : tmp1_elvis_lhs;
    var startIndex = this.eh(builder);
    var compositeDecoder = decoder.lf(this.ae());
    if (compositeDecoder.uf()) {
      this.sh(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.vf(this.ae());
        if (index === -1)
          break $l$loop;
        this.uh(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.mf(this.ae());
    return this.gh(builder);
  };
  protoOf(AbstractCollectionSerializer).ce = function (decoder) {
    return this.vh(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).uh = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.th(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.th.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.li_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).r2(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.pi_1[slot] = $this.pi_1[slot].t2((new Long(1, 0)).r2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.pi_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.pi_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.q2());
          slotMarks = slotMarks.t2((new Long(1, 0)).r2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.ni_1($this.mi_1, index)) {
            $this.pi_1[slot] = slotMarks;
            return index;
          }
        }
        $this.pi_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.mi_1 = descriptor;
    this.ni_1 = readIfAbsent;
    var elementsCount = this.mi_1.re();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).r2(elementsCount);
      }
      tmp.oi_1 = tmp_0;
      this.pi_1 = Companion_getInstance().li_1;
    } else {
      this.oi_1 = new Long(0, 0);
      this.pi_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).qi = function (index) {
    if (index < 64) {
      this.oi_1 = this.oi_1.t2((new Long(1, 0)).r2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).ri = function () {
    var elementsCount = this.mi_1.re();
    while (!this.oi_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.oi_1.q2());
      this.oi_1 = this.oi_1.t2((new Long(1, 0)).r2(index));
      if (this.ni_1(this.mi_1, index)) {
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
    this.ej_1 = true;
  }
  protoOf(InlineClassDescriptor).qe = function () {
    return this.ej_1;
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
      if (!(this.oe() === other.oe())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.ej_1 && contentEquals(this.rj(), other.rj()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.re() === other.re())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.re();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.we(index).oe() === other.we(index).oe())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.we(index).pe(), other.we(index).pe())) {
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
    this.tj_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).uj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.tj_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).ae = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).be = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ce = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.wj_1 = serializer;
    this.xj_1 = new SerialDescriptorForNullable(this.wj_1.ae());
  }
  protoOf(NullableSerializer).ae = function () {
    return this.xj_1;
  };
  protoOf(NullableSerializer).yj = function (encoder, value) {
    if (!(value == null)) {
      encoder.mg();
      encoder.jg(this.wj_1, value);
    } else {
      encoder.zf();
    }
  };
  protoOf(NullableSerializer).be = function (encoder, value) {
    return this.yj(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).ce = function (decoder) {
    return decoder.cf() ? decoder.kf(this.wj_1) : decoder.df();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.wj_1, other.wj_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.wj_1);
  };
  function SerialDescriptorForNullable(original) {
    this.ke_1 = original;
    this.le_1 = this.ke_1.oe() + '?';
    this.me_1 = cachedSerialNames(this.ke_1);
  }
  protoOf(SerialDescriptorForNullable).oe = function () {
    return this.le_1;
  };
  protoOf(SerialDescriptorForNullable).rg = function () {
    return this.me_1;
  };
  protoOf(SerialDescriptorForNullable).ie = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.ke_1, other.ke_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.ke_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.ke_1), 31);
  };
  protoOf(SerialDescriptorForNullable).pe = function () {
    return this.ke_1.pe();
  };
  protoOf(SerialDescriptorForNullable).qe = function () {
    return this.ke_1.qe();
  };
  protoOf(SerialDescriptorForNullable).re = function () {
    return this.ke_1.re();
  };
  protoOf(SerialDescriptorForNullable).se = function () {
    return this.ke_1.se();
  };
  protoOf(SerialDescriptorForNullable).te = function (index) {
    return this.ke_1.te(index);
  };
  protoOf(SerialDescriptorForNullable).ue = function (name) {
    return this.ke_1.ue(name);
  };
  protoOf(SerialDescriptorForNullable).ve = function (index) {
    return this.ke_1.ve(index);
  };
  protoOf(SerialDescriptorForNullable).we = function (index) {
    return this.ke_1.we(index);
  };
  protoOf(SerialDescriptorForNullable).xe = function (index) {
    return this.ke_1.xe(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.rg();
    var result = HashSet_init_$Create$(_this__u8e3s4.re());
    var inductionVariable = 0;
    var last = _this__u8e3s4.re();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.te(i);
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
          var element = descriptor.te(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.oe());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.oe());
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
      var tmp0_safe_receiver = element.oe();
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
      var tmp0_safe_receiver_0 = element_0.pe();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.oj_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.t1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.qj_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.t1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.jj_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.jj_1[i];
        indices.z1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.gj_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uj();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.gj_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vj();
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
          var tmp$ret$0 = item.ae();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.rj());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.te(i) + ': ' + this$0.we(i).oe();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.fj_1 = serialName;
    this.gj_1 = generatedSerializer;
    this.hj_1 = elementsCount;
    this.ij_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.hj_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.jj_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.hj_1;
    tmp_3.kj_1 = fillArrayVal(Array(size), null);
    this.lj_1 = null;
    this.mj_1 = booleanArray(this.hj_1);
    this.nj_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.oj_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.pj_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.qj_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).oe = function () {
    return this.fj_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).re = function () {
    return this.hj_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).pe = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).se = function () {
    var tmp0_elvis_lhs = this.lj_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).rg = function () {
    return this.nj_1.x1();
  };
  protoOf(PluginGeneratedSerialDescriptor).rj = function () {
    var tmp0 = this.pj_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.t1();
  };
  protoOf(PluginGeneratedSerialDescriptor).sj = function (name, isOptional) {
    this.ij_1 = this.ij_1 + 1 | 0;
    this.jj_1[this.ij_1] = name;
    this.mj_1[this.ij_1] = isOptional;
    this.kj_1[this.ij_1] = null;
    if (this.ij_1 === (this.hj_1 - 1 | 0)) {
      this.nj_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).we = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).ae();
  };
  protoOf(PluginGeneratedSerialDescriptor).xe = function (index) {
    return getChecked_0(this.mj_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ve = function (index) {
    var tmp0_elvis_lhs = getChecked(this.kj_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).te = function (index) {
    return getChecked(this.jj_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ue = function (name) {
    var tmp0_elvis_lhs = this.nj_1.w1(name);
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
      if (!(this.oe() === other.oe())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.rj(), other.rj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.re() === other.re())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.re();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.we(index).oe() === other.we(index).oe())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.we(index).pe(), other.we(index).pe())) {
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
    var tmp = until(0, this.hj_1);
    var tmp_0 = this.oe() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.rj();
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
    this.zj_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).ae = function () {
    return this.zj_1;
  };
  protoOf(StringSerializer).ak = function (encoder, value) {
    return encoder.eg(value);
  };
  protoOf(StringSerializer).be = function (encoder, value) {
    return this.ak(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ce = function (decoder) {
    return decoder.if();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.bk_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).ae = function () {
    return this.bk_1;
  };
  protoOf(DoubleSerializer).ck = function (encoder, value) {
    return encoder.dg(value);
  };
  protoOf(DoubleSerializer).be = function (encoder, value) {
    return this.ck(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ce = function (decoder) {
    return decoder.hf();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.dk_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).ae = function () {
    return this.dk_1;
  };
  protoOf(LongSerializer).ek = function (encoder, value) {
    return encoder.cg(value);
  };
  protoOf(LongSerializer).be = function (encoder, value) {
    return this.ek(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).ce = function (decoder) {
    return decoder.gf();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.fk_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).ae = function () {
    return this.fk_1;
  };
  protoOf(IntSerializer).gk = function (encoder, value) {
    return encoder.bg(value);
  };
  protoOf(IntSerializer).be = function (encoder, value) {
    return this.gk(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ce = function (decoder) {
    return decoder.ff();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.hk_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).ae = function () {
    return this.hk_1;
  };
  protoOf(BooleanSerializer).ik = function (encoder, value) {
    return encoder.ag(value);
  };
  protoOf(BooleanSerializer).be = function (encoder, value) {
    return this.ik(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ce = function (decoder) {
    return decoder.ef();
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
    this.jk_1 = serialName;
    this.kk_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).oe = function () {
    return this.jk_1;
  };
  protoOf(PrimitiveSerialDescriptor).pe = function () {
    return this.kk_1;
  };
  protoOf(PrimitiveSerialDescriptor).re = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).te = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ue = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).xe = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).we = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ve = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.jk_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.jk_1 === other.jk_1 && equals(this.kk_1, other.kk_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.jk_1) + imul(31, this.kk_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).nk = function (_this__u8e3s4, index) {
    return this.pk(this.ok(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).pk = function (nestedName) {
    var tmp0_elvis_lhs = this.sk();
    return this.tk(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).ok = function (descriptor, index) {
    return descriptor.te(index);
  };
  protoOf(NamedValueDecoder).tk = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).uk = function () {
    return this.qk_1.j() ? '$' : joinToString(this.qk_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.cl(tag);
    var r = block();
    if (!$this.rk_1) {
      $this.dl();
    }
    $this.rk_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.jf($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.ae().ie();
      var tmp;
      if (isNullabilitySupported || tmp0.cf()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.jf($deserializer, $previousValue);
      } else {
        tmp = tmp0.df();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.qk_1 = ArrayList_init_$Create$();
    this.rk_1 = false;
  }
  protoOf(TaggedDecoder).tf = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).vk = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).wk = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).xk = function (tag) {
    var tmp = this.vk(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).yk = function (tag) {
    var tmp = this.vk(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).zk = function (tag) {
    var tmp = this.vk(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).al = function (tag) {
    var tmp = this.vk(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).bl = function (tag) {
    var tmp = this.vk(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).jf = function (deserializer, previousValue) {
    return this.kf(deserializer);
  };
  protoOf(TaggedDecoder).cf = function () {
    var tmp0_elvis_lhs = this.sk();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.wk(currentTag);
  };
  protoOf(TaggedDecoder).df = function () {
    return null;
  };
  protoOf(TaggedDecoder).ef = function () {
    return this.xk(this.dl());
  };
  protoOf(TaggedDecoder).ff = function () {
    return this.yk(this.dl());
  };
  protoOf(TaggedDecoder).gf = function () {
    return this.zk(this.dl());
  };
  protoOf(TaggedDecoder).hf = function () {
    return this.al(this.dl());
  };
  protoOf(TaggedDecoder).if = function () {
    return this.bl(this.dl());
  };
  protoOf(TaggedDecoder).lf = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).mf = function (descriptor) {
  };
  protoOf(TaggedDecoder).nf = function (descriptor, index) {
    return this.xk(this.nk(descriptor, index));
  };
  protoOf(TaggedDecoder).of = function (descriptor, index) {
    return this.yk(this.nk(descriptor, index));
  };
  protoOf(TaggedDecoder).pf = function (descriptor, index) {
    return this.bl(this.nk(descriptor, index));
  };
  protoOf(TaggedDecoder).qf = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.nk(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).sf = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.nk(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).sk = function () {
    return lastOrNull(this.qk_1);
  };
  protoOf(TaggedDecoder).cl = function (name) {
    this.qk_1.e(name);
  };
  protoOf(TaggedDecoder).dl = function () {
    var r = this.qk_1.o3(get_lastIndex_0(this.qk_1));
    this.rk_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).je = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.el(kClass, typeArgumentsSerializers) : $super.el.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.gl_1 = class2ContextualFactory;
    this.hl_1 = polyBase2Serializers;
    this.il_1 = polyBase2DefaultSerializerProvider;
    this.jl_1 = polyBase2NamedSerializers;
    this.kl_1 = polyBase2DefaultDeserializerProvider;
    this.ll_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).qg = function (baseClass, value) {
    if (!baseClass.u8(value))
      return null;
    var tmp0_safe_receiver = this.hl_1.w1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.il_1.w1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).pg = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.jl_1.w1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).w1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.kl_1.w1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).el = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.gl_1.w1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ml(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).fl = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.gl_1.y1().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.t1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.pl_1;
        collector.ql(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.ol(kclass, serial.nl_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.hl_1.y1().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.s1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.t1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.y1().g();
      while (_iterator__ex2g4s_1.h()) {
        var element_1 = _iterator__ex2g4s_1.i();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.s1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.t1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.rl(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.il_1.y1().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.s1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.t1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.sl(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.kl_1.y1().g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.s1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.t1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.tl(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  protoOf(AbstractDecoder).rf = decodeSerializableElement$default;
  protoOf(AbstractDecoder).kf = decodeSerializableValue;
  protoOf(AbstractDecoder).uf = decodeSequentially;
  protoOf(AbstractDecoder).wf = decodeCollectionSize;
  protoOf(AbstractEncoder).mg = encodeNotNullMark;
  protoOf(AbstractEncoder).ng = beginCollection;
  protoOf(AbstractEncoder).jg = encodeSerializableValue;
  protoOf(AbstractEncoder).lg = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).og = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ie = get_isNullable;
  protoOf(ListLikeDescriptor).qe = get_isInline;
  protoOf(ListLikeDescriptor).se = get_annotations;
  protoOf(MapLikeDescriptor).ie = get_isNullable;
  protoOf(MapLikeDescriptor).qe = get_isInline;
  protoOf(MapLikeDescriptor).se = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ie = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).qe = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).vj = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).ie = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).qe = get_isInline;
  protoOf(PrimitiveSerialDescriptor).se = get_annotations;
  protoOf(TaggedDecoder).rf = decodeSerializableElement$default;
  protoOf(TaggedDecoder).kf = decodeSerializableValue;
  protoOf(TaggedDecoder).uf = decodeSequentially;
  protoOf(TaggedDecoder).wf = decodeCollectionSize;
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
  _.$_$.o = MapSerializer;
  _.$_$.p = get_nullable;
  _.$_$.q = serializer;
  _.$_$.r = serializer_0;
  _.$_$.s = PolymorphicKind;
  _.$_$.t = PrimitiveKind;
  _.$_$.u = SerialDescriptor;
  _.$_$.v = ENUM;
  _.$_$.w = getContextualDescriptor;
  _.$_$.x = AbstractDecoder;
  _.$_$.y = AbstractEncoder;
  _.$_$.z = CompositeDecoder;
  _.$_$.a1 = CompositeEncoder;
  _.$_$.b1 = Decoder;
  _.$_$.c1 = Encoder;
  _.$_$.d1 = AbstractPolymorphicSerializer;
  _.$_$.e1 = ArrayListSerializer;
  _.$_$.f1 = ElementMarker;
  _.$_$.g1 = typeParametersSerializers;
  _.$_$.h1 = GeneratedSerializer;
  _.$_$.i1 = InlinePrimitiveDescriptor;
  _.$_$.j1 = NamedValueDecoder;
  _.$_$.k1 = PluginGeneratedSerialDescriptor;
  _.$_$.l1 = jsonCachedSerialNames;
  _.$_$.m1 = throwMissingFieldException;
  _.$_$.n1 = EmptySerializersModule_0;
  _.$_$.o1 = contextual;
  _.$_$.p1 = SerializersModuleCollector;
  _.$_$.q1 = DeserializationStrategy;
  _.$_$.r1 = MissingFieldException;
  _.$_$.s1 = SealedClassSerializer;
  _.$_$.t1 = SerializationException;
  _.$_$.u1 = SerializationStrategy;
  _.$_$.v1 = findPolymorphicSerializer_0;
  _.$_$.w1 = findPolymorphicSerializer;
  //endregion
  return _;
}));

