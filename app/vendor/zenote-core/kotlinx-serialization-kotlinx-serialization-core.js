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
  var protoOf = kotlin_kotlin.$_$.a6;
  var initMetadataForInterface = kotlin_kotlin.$_$.n5;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.k5;
  var KProperty1 = kotlin_kotlin.$_$.q6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.h5;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.b1;
  var objectCreate = kotlin_kotlin.$_$.z5;
  var captureStack = kotlin_kotlin.$_$.v4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.c1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.e1;
  var IllegalArgumentException = kotlin_kotlin.$_$.l8;
  var toString = kotlin_kotlin.$_$.d6;
  var THROW_CCE = kotlin_kotlin.$_$.o8;
  var isInterface = kotlin_kotlin.$_$.s5;
  var emptyList = kotlin_kotlin.$_$.a3;
  var initMetadataForObject = kotlin_kotlin.$_$.p5;
  var ensureNotNull = kotlin_kotlin.$_$.t8;
  var getStringHashCode = kotlin_kotlin.$_$.i5;
  var Long = kotlin_kotlin.$_$.m8;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var toIntOrNull = kotlin_kotlin.$_$.x7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var equals = kotlin_kotlin.$_$.d5;
  var hashCode = kotlin_kotlin.$_$.j5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var ArrayList = kotlin_kotlin.$_$.i2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var KtList = kotlin_kotlin.$_$.l2;
  var KtMap = kotlin_kotlin.$_$.m2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashMap = kotlin_kotlin.$_$.k2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var Collection = kotlin_kotlin.$_$.j2;
  var until = kotlin_kotlin.$_$.l6;
  var step = kotlin_kotlin.$_$.k6;
  var KtMutableMap = kotlin_kotlin.$_$.n2;
  var getValue = kotlin_kotlin.$_$.g3;
  var longArray = kotlin_kotlin.$_$.t5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.l5;
  var get_lastIndex = kotlin_kotlin.$_$.m3;
  var countTrailingZeroBits = kotlin_kotlin.$_$.r8;
  var contentEquals = kotlin_kotlin.$_$.t2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var copyToArray = kotlin_kotlin.$_$.x2;
  var contentHashCode = kotlin_kotlin.$_$.u2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var fillArrayVal = kotlin_kotlin.$_$.e5;
  var booleanArray = kotlin_kotlin.$_$.u4;
  var emptyMap = kotlin_kotlin.$_$.b3;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.w8;
  var joinToString = kotlin_kotlin.$_$.k3;
  var charSequenceLength = kotlin_kotlin.$_$.z4;
  var lastOrNull = kotlin_kotlin.$_$.o3;
  var get_lastIndex_0 = kotlin_kotlin.$_$.n3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y8;
  var KClass = kotlin_kotlin.$_$.m6;
  var get_indices = kotlin_kotlin.$_$.i3;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var get_indices_0 = kotlin_kotlin.$_$.h3;
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
    return deserializer.te(this);
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
    return $super === VOID ? this.hg(descriptor, index, deserializer, previousValue) : $super.hg.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.cg(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.se(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.re().ze();
    if (isNullabilitySupported) {
      return this.ah(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.qg();
    } else {
      this.dh();
      this.ah(serializer, value);
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
    return this.fm(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.ue(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ve());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.we(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ve());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).re = function () {
    var tmp0 = this.xe_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.v1();
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.re();
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
    this.ye_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.re().ze()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.af(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.re();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ef_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.bf_1);
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
    this.qf_1 = $this_elementDescriptors;
    this.pf_1 = $this_elementDescriptors.if();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.pf_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.qf_1.if();
    var _unary__edvuaz = this.pf_1;
    this.pf_1 = _unary__edvuaz - 1 | 0;
    return this.qf_1.nf(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.rf_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).g = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.rf_1);
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
    return ensureNotNull(getKClassFromExpression(this).v8());
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
  protoOf(AbstractDecoder).sf = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).tf = function () {
    return true;
  };
  protoOf(AbstractDecoder).uf = function () {
    return null;
  };
  protoOf(AbstractDecoder).vf = function () {
    var tmp = this.sf();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wf = function () {
    var tmp = this.sf();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xf = function () {
    var tmp = this.sf();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yf = function () {
    var tmp = this.sf();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zf = function () {
    var tmp = this.sf();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ag = function (deserializer, previousValue) {
    return this.bg(deserializer);
  };
  protoOf(AbstractDecoder).cg = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).dg = function (descriptor) {
  };
  protoOf(AbstractDecoder).eg = function (descriptor, index) {
    return this.vf();
  };
  protoOf(AbstractDecoder).fg = function (descriptor, index) {
    return this.wf();
  };
  protoOf(AbstractDecoder).gg = function (descriptor, index) {
    return this.zf();
  };
  protoOf(AbstractDecoder).hg = function (descriptor, index, deserializer, previousValue) {
    return this.ag(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).jg = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.re().ze();
    var tmp;
    if (isNullabilitySupported || this.tf()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.ag(deserializer, previousValue);
    } else {
      tmp = this.uf();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).cg = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).dg = function (descriptor) {
  };
  protoOf(AbstractEncoder).og = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).pg = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).qg = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).rg = function (value) {
    return this.pg(value);
  };
  protoOf(AbstractEncoder).sg = function (value) {
    return this.pg(value);
  };
  protoOf(AbstractEncoder).tg = function (value) {
    return this.pg(value);
  };
  protoOf(AbstractEncoder).ug = function (value) {
    return this.pg(value);
  };
  protoOf(AbstractEncoder).vg = function (value) {
    return this.pg(value);
  };
  protoOf(AbstractEncoder).wg = function (descriptor, index, value) {
    if (this.og(descriptor, index)) {
      this.rg(value);
    }
  };
  protoOf(AbstractEncoder).xg = function (descriptor, index, value) {
    if (this.og(descriptor, index)) {
      this.sg(value);
    }
  };
  protoOf(AbstractEncoder).yg = function (descriptor, index, value) {
    if (this.og(descriptor, index)) {
      this.vg(value);
    }
  };
  protoOf(AbstractEncoder).zg = function (descriptor, index, serializer, value) {
    if (this.og(descriptor, index)) {
      this.ah(serializer, value);
    }
  };
  protoOf(AbstractEncoder).bh = function (descriptor, index, serializer, value) {
    if (this.og(descriptor, index)) {
      this.ch(serializer, value);
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
  protoOf(AbstractPolymorphicSerializer).we = function (decoder, klassName) {
    return decoder.kg().gh(this.ve(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ue = function (encoder, value) {
    return encoder.kg().hh(this.ve(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.v8();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.v8() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.v8() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).ff = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.lh_1 = elementDescriptor;
    this.mh_1 = 1;
  }
  protoOf(ListLikeDescriptor).gf = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).if = function () {
    return this.mh_1;
  };
  protoOf(ListLikeDescriptor).kf = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).lf = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).of = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ff() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).mf = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ff() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).nf = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ff() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.lh_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.lh_1, other.lh_1) && this.ff() === other.ff())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.lh_1), 31) + getStringHashCode(this.ff()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.ff() + '(' + toString(this.lh_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.nh_1 = serialName;
    this.oh_1 = keyDescriptor;
    this.ph_1 = valueDescriptor;
    this.qh_1 = 2;
  }
  protoOf(MapLikeDescriptor).ff = function () {
    return this.nh_1;
  };
  protoOf(MapLikeDescriptor).gf = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).if = function () {
    return this.qh_1;
  };
  protoOf(MapLikeDescriptor).kf = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).lf = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).of = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ff() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).mf = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ff() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).nf = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ff() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.oh_1;
        break;
      case 1:
        tmp = this.ph_1;
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
    if (!(this.ff() === other.ff()))
      return false;
    if (!equals(this.oh_1, other.oh_1))
      return false;
    if (!equals(this.ph_1, other.ph_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ff());
    result = imul(31, result) + hashCode(this.oh_1) | 0;
    result = imul(31, result) + hashCode(this.ph_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.ff() + '(' + toString(this.oh_1) + ', ' + toString(this.ph_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.sh_1 = new ArrayListClassDesc(element.re());
  }
  protoOf(ArrayListSerializer).re = function () {
    return this.sh_1;
  };
  protoOf(ArrayListSerializer).th = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).uh = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).vh = function (_this__u8e3s4) {
    return this.uh(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).wh = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).xh = function (_this__u8e3s4) {
    return this.wh(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).yh = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).zh = function (_this__u8e3s4) {
    return this.yh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ai = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r4(size);
  };
  protoOf(ArrayListSerializer).bi = function (_this__u8e3s4, size) {
    return this.ai(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).ci = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.z3(index, element);
  };
  protoOf(ArrayListSerializer).di = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.ci(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.pi_1 = new LinkedHashMapClassDesc(kSerializer.re(), vSerializer.re());
  }
  protoOf(LinkedHashMapSerializer).re = function () {
    return this.pi_1;
  };
  protoOf(LinkedHashMapSerializer).qi = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashMapSerializer).ri = function (_this__u8e3s4) {
    return this.qi((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).si = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.b2().g();
  };
  protoOf(LinkedHashMapSerializer).ti = function (_this__u8e3s4) {
    return this.si((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).th = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).ui = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(LinkedHashMapSerializer).vh = function (_this__u8e3s4) {
    return this.ui(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vi = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).xh = function (_this__u8e3s4) {
    return this.vi(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).wi = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).zh = function (_this__u8e3s4) {
    return this.wi((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).xi = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).bi = function (_this__u8e3s4, size) {
    return this.xi(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).fi = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).ri = function (_this__u8e3s4) {
    return this.fi((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).gi = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).ti = function (_this__u8e3s4) {
    return this.gi((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.yi_1 = keySerializer;
    this.zi_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).aj = function (decoder, builder, startIndex, size) {
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
        this.bj(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).ji = function (decoder, builder, startIndex, size) {
    return this.aj(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).bj = function (decoder, index, builder, checkIndex) {
    var key = decoder.ig(this.re(), index, this.yi_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.mg(this.re());
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
    if (builder.w1(key)) {
      var tmp_2 = this.zi_1.re().gf();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.hg(this.re(), vIndex, this.zi_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.ig(this.re(), vIndex, this.zi_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.c2(key, value);
  };
  protoOf(MapLikeSerializer).ki = function (decoder, index, builder, checkIndex) {
    return this.bj(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).ii = function (encoder, value) {
    var size = this.ri(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.re();
    var composite = encoder.eh(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.ti(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.u1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.v1();
      var tmp = this.re();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.zg(tmp, _unary__edvuaz, this.yi_1, k);
      var tmp_0 = this.re();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.zg(tmp_0, _unary__edvuaz_0, this.zi_1, v);
    }
    composite.dg(descriptor);
  };
  protoOf(MapLikeSerializer).se = function (encoder, value) {
    return this.ii(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.hi_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).ii = function (encoder, value) {
    var size = this.ri(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.re();
    var composite = encoder.eh(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.ti(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.zg(this.re(), index, this.hi_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.dg(descriptor);
  };
  protoOf(CollectionLikeSerializer).se = function (encoder, value) {
    return this.ii(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).ji = function (decoder, builder, startIndex, size) {
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
        this.ki(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ki = function (decoder, index, builder, checkIndex) {
    this.di(builder, index, decoder.ig(this.re(), index, this.hi_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.ng($this.re());
    $this.bi(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).mi = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.zh(previous);
    var builder = tmp1_elvis_lhs == null ? this.th() : tmp1_elvis_lhs;
    var startIndex = this.vh(builder);
    var compositeDecoder = decoder.cg(this.re());
    if (compositeDecoder.lg()) {
      this.ji(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.mg(this.re());
        if (index === -1)
          break $l$loop;
        this.li(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.dg(this.re());
    return this.xh(builder);
  };
  protoOf(AbstractCollectionSerializer).te = function (decoder) {
    return this.mi(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).li = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ki(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ki.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.cj_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).t2(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.gj_1[slot] = $this.gj_1[slot].v2((new Long(1, 0)).t2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.gj_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.gj_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.s2());
          slotMarks = slotMarks.v2((new Long(1, 0)).t2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.ej_1($this.dj_1, index)) {
            $this.gj_1[slot] = slotMarks;
            return index;
          }
        }
        $this.gj_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.dj_1 = descriptor;
    this.ej_1 = readIfAbsent;
    var elementsCount = this.dj_1.if();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).t2(elementsCount);
      }
      tmp.fj_1 = tmp_0;
      this.gj_1 = Companion_getInstance().cj_1;
    } else {
      this.fj_1 = new Long(0, 0);
      this.gj_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).hj = function (index) {
    if (index < 64) {
      this.fj_1 = this.fj_1.v2((new Long(1, 0)).t2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).ij = function () {
    var elementsCount = this.dj_1.if();
    while (!this.fj_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.fj_1.s2());
      this.fj_1 = this.fj_1.v2((new Long(1, 0)).t2(index));
      if (this.ej_1(this.dj_1, index)) {
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
    this.vj_1 = true;
  }
  protoOf(InlineClassDescriptor).hf = function () {
    return this.vj_1;
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
      if (!(this.ff() === other.ff())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.vj_1 && contentEquals(this.ik(), other.ik()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.if() === other.if())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.if();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nf(index).ff() === other.nf(index).ff())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nf(index).gf(), other.nf(index).gf())) {
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
    this.kk_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).lk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.kk_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).re = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).se = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).te = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.nk_1 = serializer;
    this.ok_1 = new SerialDescriptorForNullable(this.nk_1.re());
  }
  protoOf(NullableSerializer).re = function () {
    return this.ok_1;
  };
  protoOf(NullableSerializer).pk = function (encoder, value) {
    if (!(value == null)) {
      encoder.dh();
      encoder.ah(this.nk_1, value);
    } else {
      encoder.qg();
    }
  };
  protoOf(NullableSerializer).se = function (encoder, value) {
    return this.pk(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).te = function (decoder) {
    return decoder.tf() ? decoder.bg(this.nk_1) : decoder.uf();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.nk_1, other.nk_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.nk_1);
  };
  function SerialDescriptorForNullable(original) {
    this.bf_1 = original;
    this.cf_1 = this.bf_1.ff() + '?';
    this.df_1 = cachedSerialNames(this.bf_1);
  }
  protoOf(SerialDescriptorForNullable).ff = function () {
    return this.cf_1;
  };
  protoOf(SerialDescriptorForNullable).ih = function () {
    return this.df_1;
  };
  protoOf(SerialDescriptorForNullable).ze = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.bf_1, other.bf_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.bf_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.bf_1), 31);
  };
  protoOf(SerialDescriptorForNullable).gf = function () {
    return this.bf_1.gf();
  };
  protoOf(SerialDescriptorForNullable).hf = function () {
    return this.bf_1.hf();
  };
  protoOf(SerialDescriptorForNullable).if = function () {
    return this.bf_1.if();
  };
  protoOf(SerialDescriptorForNullable).jf = function () {
    return this.bf_1.jf();
  };
  protoOf(SerialDescriptorForNullable).kf = function (index) {
    return this.bf_1.kf(index);
  };
  protoOf(SerialDescriptorForNullable).lf = function (name) {
    return this.bf_1.lf(name);
  };
  protoOf(SerialDescriptorForNullable).mf = function (index) {
    return this.bf_1.mf(index);
  };
  protoOf(SerialDescriptorForNullable).nf = function (index) {
    return this.bf_1.nf(index);
  };
  protoOf(SerialDescriptorForNullable).of = function (index) {
    return this.bf_1.of(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.ih();
    var result = HashSet_init_$Create$(_this__u8e3s4.if());
    var inductionVariable = 0;
    var last = _this__u8e3s4.if();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.kf(i);
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
          var element = descriptor.kf(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ff());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.ff());
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
      var tmp0_safe_receiver = element.ff();
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
      var tmp0_safe_receiver_0 = element_0.gf();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.fk_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.v1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.hk_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.v1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ak_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.ak_1[i];
        indices.c2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.xj_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lk();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.xj_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mk();
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
          var tmp$ret$0 = item.re();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ik());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.kf(i) + ': ' + this$0.nf(i).ff();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.wj_1 = serialName;
    this.xj_1 = generatedSerializer;
    this.yj_1 = elementsCount;
    this.zj_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.yj_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ak_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.yj_1;
    tmp_3.bk_1 = fillArrayVal(Array(size), null);
    this.ck_1 = null;
    this.dk_1 = booleanArray(this.yj_1);
    this.ek_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.fk_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.gk_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.hk_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).ff = function () {
    return this.wj_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).if = function () {
    return this.yj_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).gf = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).jf = function () {
    var tmp0_elvis_lhs = this.ck_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ih = function () {
    return this.ek_1.z1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ik = function () {
    var tmp0 = this.gk_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.v1();
  };
  protoOf(PluginGeneratedSerialDescriptor).jk = function (name, isOptional) {
    this.zj_1 = this.zj_1 + 1 | 0;
    this.ak_1[this.zj_1] = name;
    this.dk_1[this.zj_1] = isOptional;
    this.bk_1[this.zj_1] = null;
    if (this.zj_1 === (this.yj_1 - 1 | 0)) {
      this.ek_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).nf = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).re();
  };
  protoOf(PluginGeneratedSerialDescriptor).of = function (index) {
    return getChecked_0(this.dk_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).mf = function (index) {
    var tmp0_elvis_lhs = getChecked(this.bk_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).kf = function (index) {
    return getChecked(this.ak_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).lf = function (name) {
    var tmp0_elvis_lhs = this.ek_1.y1(name);
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
      if (!(this.ff() === other.ff())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.ik(), other.ik())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.if() === other.if())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.if();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nf(index).ff() === other.nf(index).ff())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nf(index).gf(), other.nf(index).gf())) {
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
    var tmp = until(0, this.yj_1);
    var tmp_0 = this.ff() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.ik();
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
    this.qk_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).re = function () {
    return this.qk_1;
  };
  protoOf(StringSerializer).rk = function (encoder, value) {
    return encoder.vg(value);
  };
  protoOf(StringSerializer).se = function (encoder, value) {
    return this.rk(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).te = function (decoder) {
    return decoder.zf();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.sk_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).re = function () {
    return this.sk_1;
  };
  protoOf(DoubleSerializer).tk = function (encoder, value) {
    return encoder.ug(value);
  };
  protoOf(DoubleSerializer).se = function (encoder, value) {
    return this.tk(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).te = function (decoder) {
    return decoder.yf();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.uk_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).re = function () {
    return this.uk_1;
  };
  protoOf(LongSerializer).vk = function (encoder, value) {
    return encoder.tg(value);
  };
  protoOf(LongSerializer).se = function (encoder, value) {
    return this.vk(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).te = function (decoder) {
    return decoder.xf();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.wk_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).re = function () {
    return this.wk_1;
  };
  protoOf(IntSerializer).xk = function (encoder, value) {
    return encoder.sg(value);
  };
  protoOf(IntSerializer).se = function (encoder, value) {
    return this.xk(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).te = function (decoder) {
    return decoder.wf();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.yk_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).re = function () {
    return this.yk_1;
  };
  protoOf(BooleanSerializer).zk = function (encoder, value) {
    return encoder.rg(value);
  };
  protoOf(BooleanSerializer).se = function (encoder, value) {
    return this.zk(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).te = function (decoder) {
    return decoder.vf();
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
    this.al_1 = serialName;
    this.bl_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).ff = function () {
    return this.al_1;
  };
  protoOf(PrimitiveSerialDescriptor).gf = function () {
    return this.bl_1;
  };
  protoOf(PrimitiveSerialDescriptor).if = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).kf = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).lf = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).of = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).nf = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).mf = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.al_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.al_1 === other.al_1 && equals(this.bl_1, other.bl_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.al_1) + imul(31, this.bl_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).el = function (_this__u8e3s4, index) {
    return this.gl(this.fl(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).gl = function (nestedName) {
    var tmp0_elvis_lhs = this.jl();
    return this.kl(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).fl = function (descriptor, index) {
    return descriptor.kf(index);
  };
  protoOf(NamedValueDecoder).kl = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).ll = function () {
    return this.hl_1.j() ? '$' : joinToString(this.hl_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.tl(tag);
    var r = block();
    if (!$this.il_1) {
      $this.ul();
    }
    $this.il_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ag($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.re().ze();
      var tmp;
      if (isNullabilitySupported || tmp0.tf()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.ag($deserializer, $previousValue);
      } else {
        tmp = tmp0.uf();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.hl_1 = ArrayList_init_$Create$();
    this.il_1 = false;
  }
  protoOf(TaggedDecoder).kg = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).ml = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).nl = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).ol = function (tag) {
    var tmp = this.ml(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).pl = function (tag) {
    var tmp = this.ml(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ql = function (tag) {
    var tmp = this.ml(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).rl = function (tag) {
    var tmp = this.ml(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).sl = function (tag) {
    var tmp = this.ml(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ag = function (deserializer, previousValue) {
    return this.bg(deserializer);
  };
  protoOf(TaggedDecoder).tf = function () {
    var tmp0_elvis_lhs = this.jl();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.nl(currentTag);
  };
  protoOf(TaggedDecoder).uf = function () {
    return null;
  };
  protoOf(TaggedDecoder).vf = function () {
    return this.ol(this.ul());
  };
  protoOf(TaggedDecoder).wf = function () {
    return this.pl(this.ul());
  };
  protoOf(TaggedDecoder).xf = function () {
    return this.ql(this.ul());
  };
  protoOf(TaggedDecoder).yf = function () {
    return this.rl(this.ul());
  };
  protoOf(TaggedDecoder).zf = function () {
    return this.sl(this.ul());
  };
  protoOf(TaggedDecoder).cg = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).dg = function (descriptor) {
  };
  protoOf(TaggedDecoder).eg = function (descriptor, index) {
    return this.ol(this.el(descriptor, index));
  };
  protoOf(TaggedDecoder).fg = function (descriptor, index) {
    return this.pl(this.el(descriptor, index));
  };
  protoOf(TaggedDecoder).gg = function (descriptor, index) {
    return this.sl(this.el(descriptor, index));
  };
  protoOf(TaggedDecoder).hg = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.el(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).jg = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.el(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).jl = function () {
    return lastOrNull(this.hl_1);
  };
  protoOf(TaggedDecoder).tl = function (name) {
    this.hl_1.e(name);
  };
  protoOf(TaggedDecoder).ul = function () {
    var r = this.hl_1.q3(get_lastIndex_0(this.hl_1));
    this.il_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).af = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.vl(kClass, typeArgumentsSerializers) : $super.vl.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.xl_1 = class2ContextualFactory;
    this.yl_1 = polyBase2Serializers;
    this.zl_1 = polyBase2DefaultSerializerProvider;
    this.am_1 = polyBase2NamedSerializers;
    this.bm_1 = polyBase2DefaultDeserializerProvider;
    this.cm_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).hh = function (baseClass, value) {
    if (!baseClass.w8(value))
      return null;
    var tmp0_safe_receiver = this.yl_1.y1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.zl_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).gh = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.am_1.y1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).y1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.bm_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).vl = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.xl_1.y1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dm(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).wl = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.xl_1.b2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.u1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.v1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.gm_1;
        collector.hm(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.fm(kclass, serial.em_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.yl_1.b2().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.u1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.v1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.b2().g();
      while (_iterator__ex2g4s_1.h()) {
        var element_1 = _iterator__ex2g4s_1.i();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.u1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.v1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.im(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.zl_1.b2().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.u1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.v1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.jm(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.bm_1.b2().g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.u1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.v1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.km(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  protoOf(AbstractDecoder).ig = decodeSerializableElement$default;
  protoOf(AbstractDecoder).bg = decodeSerializableValue;
  protoOf(AbstractDecoder).lg = decodeSequentially;
  protoOf(AbstractDecoder).ng = decodeCollectionSize;
  protoOf(AbstractEncoder).dh = encodeNotNullMark;
  protoOf(AbstractEncoder).eh = beginCollection;
  protoOf(AbstractEncoder).ah = encodeSerializableValue;
  protoOf(AbstractEncoder).ch = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).fh = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ze = get_isNullable;
  protoOf(ListLikeDescriptor).hf = get_isInline;
  protoOf(ListLikeDescriptor).jf = get_annotations;
  protoOf(MapLikeDescriptor).ze = get_isNullable;
  protoOf(MapLikeDescriptor).hf = get_isInline;
  protoOf(MapLikeDescriptor).jf = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ze = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).hf = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).mk = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).ze = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).hf = get_isInline;
  protoOf(PrimitiveSerialDescriptor).jf = get_annotations;
  protoOf(TaggedDecoder).ig = decodeSerializableElement$default;
  protoOf(TaggedDecoder).bg = decodeSerializableValue;
  protoOf(TaggedDecoder).lg = decodeSequentially;
  protoOf(TaggedDecoder).ng = decodeCollectionSize;
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

