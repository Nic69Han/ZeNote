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
  var protoOf = kotlin_kotlin.$_$.n5;
  var initMetadataForInterface = kotlin_kotlin.$_$.a5;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.x4;
  var KProperty1 = kotlin_kotlin.$_$.c6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.m5;
  var captureStack = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.a1;
  var IllegalArgumentException = kotlin_kotlin.$_$.t7;
  var toString = kotlin_kotlin.$_$.q5;
  var THROW_CCE = kotlin_kotlin.$_$.w7;
  var isInterface = kotlin_kotlin.$_$.f5;
  var emptyList = kotlin_kotlin.$_$.p2;
  var initMetadataForObject = kotlin_kotlin.$_$.c5;
  var ensureNotNull = kotlin_kotlin.$_$.b8;
  var getStringHashCode = kotlin_kotlin.$_$.v4;
  var Long = kotlin_kotlin.$_$.u7;
  var Unit_instance = kotlin_kotlin.$_$.w1;
  var toIntOrNull = kotlin_kotlin.$_$.h7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var equals = kotlin_kotlin.$_$.q4;
  var hashCode = kotlin_kotlin.$_$.w4;
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
  var until = kotlin_kotlin.$_$.x5;
  var step = kotlin_kotlin.$_$.w5;
  var KtMutableMap = kotlin_kotlin.$_$.c2;
  var getValue = kotlin_kotlin.$_$.u2;
  var longArray = kotlin_kotlin.$_$.g5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.y4;
  var get_lastIndex = kotlin_kotlin.$_$.a3;
  var countTrailingZeroBits = kotlin_kotlin.$_$.z7;
  var contentEquals = kotlin_kotlin.$_$.i2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var copyToArray = kotlin_kotlin.$_$.m2;
  var contentHashCode = kotlin_kotlin.$_$.j2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.g;
  var fillArrayVal = kotlin_kotlin.$_$.r4;
  var booleanArray = kotlin_kotlin.$_$.h4;
  var emptyMap = kotlin_kotlin.$_$.q2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.e8;
  var joinToString = kotlin_kotlin.$_$.y2;
  var charSequenceLength = kotlin_kotlin.$_$.m4;
  var lastOrNull = kotlin_kotlin.$_$.c3;
  var get_lastIndex_0 = kotlin_kotlin.$_$.b3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.g8;
  var KClass = kotlin_kotlin.$_$.y5;
  var get_indices = kotlin_kotlin.$_$.w2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var get_indices_0 = kotlin_kotlin.$_$.v2;
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
    return deserializer.le(this);
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
    return $super === VOID ? this.zf(descriptor, index, deserializer, previousValue) : $super.zf.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.uf(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ke(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.je().re();
    if (isNullabilitySupported) {
      return this.sg(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.ig();
    } else {
      this.vg();
      this.sg(serializer, value);
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
    return this.xl(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.me(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ne());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.oe(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ne());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).je = function () {
    var tmp0 = this.pe_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.v1();
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.je();
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
    this.qe_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.je().re()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.se(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.je();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.we_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.te_1);
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
    this.if_1 = $this_elementDescriptors;
    this.hf_1 = $this_elementDescriptors.af();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.hf_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.if_1.af();
    var _unary__edvuaz = this.hf_1;
    this.hf_1 = _unary__edvuaz - 1 | 0;
    return this.if_1.ff(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.jf_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).g = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.jf_1);
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
  protoOf(AbstractDecoder).kf = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).lf = function () {
    return true;
  };
  protoOf(AbstractDecoder).mf = function () {
    return null;
  };
  protoOf(AbstractDecoder).nf = function () {
    var tmp = this.kf();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).of = function () {
    var tmp = this.kf();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).pf = function () {
    var tmp = this.kf();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).qf = function () {
    var tmp = this.kf();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rf = function () {
    var tmp = this.kf();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).sf = function (deserializer, previousValue) {
    return this.tf(deserializer);
  };
  protoOf(AbstractDecoder).uf = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).vf = function (descriptor) {
  };
  protoOf(AbstractDecoder).wf = function (descriptor, index) {
    return this.nf();
  };
  protoOf(AbstractDecoder).xf = function (descriptor, index) {
    return this.of();
  };
  protoOf(AbstractDecoder).yf = function (descriptor, index) {
    return this.rf();
  };
  protoOf(AbstractDecoder).zf = function (descriptor, index, deserializer, previousValue) {
    return this.sf(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).bg = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.je().re();
    var tmp;
    if (isNullabilitySupported || this.lf()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.sf(deserializer, previousValue);
    } else {
      tmp = this.mf();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).uf = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).vf = function (descriptor) {
  };
  protoOf(AbstractEncoder).gg = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).hg = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).ig = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).jg = function (value) {
    return this.hg(value);
  };
  protoOf(AbstractEncoder).kg = function (value) {
    return this.hg(value);
  };
  protoOf(AbstractEncoder).lg = function (value) {
    return this.hg(value);
  };
  protoOf(AbstractEncoder).mg = function (value) {
    return this.hg(value);
  };
  protoOf(AbstractEncoder).ng = function (value) {
    return this.hg(value);
  };
  protoOf(AbstractEncoder).og = function (descriptor, index, value) {
    if (this.gg(descriptor, index)) {
      this.jg(value);
    }
  };
  protoOf(AbstractEncoder).pg = function (descriptor, index, value) {
    if (this.gg(descriptor, index)) {
      this.kg(value);
    }
  };
  protoOf(AbstractEncoder).qg = function (descriptor, index, value) {
    if (this.gg(descriptor, index)) {
      this.ng(value);
    }
  };
  protoOf(AbstractEncoder).rg = function (descriptor, index, serializer, value) {
    if (this.gg(descriptor, index)) {
      this.sg(serializer, value);
    }
  };
  protoOf(AbstractEncoder).tg = function (descriptor, index, serializer, value) {
    if (this.gg(descriptor, index)) {
      this.ug(serializer, value);
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
  protoOf(AbstractPolymorphicSerializer).oe = function (decoder, klassName) {
    return decoder.cg().yg(this.ne(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).me = function (encoder, value) {
    return encoder.cg().zg(this.ne(), value);
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
  protoOf(ArrayListClassDesc).xe = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.dh_1 = elementDescriptor;
    this.eh_1 = 1;
  }
  protoOf(ListLikeDescriptor).ye = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).af = function () {
    return this.eh_1;
  };
  protoOf(ListLikeDescriptor).cf = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).df = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).gf = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.xe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).ef = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.xe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).ff = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.xe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.dh_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.dh_1, other.dh_1) && this.xe() === other.xe())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.dh_1), 31) + getStringHashCode(this.xe()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.xe() + '(' + toString(this.dh_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.fh_1 = serialName;
    this.gh_1 = keyDescriptor;
    this.hh_1 = valueDescriptor;
    this.ih_1 = 2;
  }
  protoOf(MapLikeDescriptor).xe = function () {
    return this.fh_1;
  };
  protoOf(MapLikeDescriptor).ye = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).af = function () {
    return this.ih_1;
  };
  protoOf(MapLikeDescriptor).cf = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).df = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).gf = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.xe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).ef = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.xe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).ff = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.xe() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.gh_1;
        break;
      case 1:
        tmp = this.hh_1;
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
    if (!(this.xe() === other.xe()))
      return false;
    if (!equals(this.gh_1, other.gh_1))
      return false;
    if (!equals(this.hh_1, other.hh_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.xe());
    result = imul(31, result) + hashCode(this.gh_1) | 0;
    result = imul(31, result) + hashCode(this.hh_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.xe() + '(' + toString(this.gh_1) + ', ' + toString(this.hh_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.kh_1 = new ArrayListClassDesc(element.je());
  }
  protoOf(ArrayListSerializer).je = function () {
    return this.kh_1;
  };
  protoOf(ArrayListSerializer).lh = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).mh = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).nh = function (_this__u8e3s4) {
    return this.mh(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).oh = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).ph = function (_this__u8e3s4) {
    return this.oh(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).qh = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).rh = function (_this__u8e3s4) {
    return this.qh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).sh = function (_this__u8e3s4, size) {
    return _this__u8e3s4.r4(size);
  };
  protoOf(ArrayListSerializer).th = function (_this__u8e3s4, size) {
    return this.sh(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).uh = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.z3(index, element);
  };
  protoOf(ArrayListSerializer).vh = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.uh(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.hi_1 = new LinkedHashMapClassDesc(kSerializer.je(), vSerializer.je());
  }
  protoOf(LinkedHashMapSerializer).je = function () {
    return this.hi_1;
  };
  protoOf(LinkedHashMapSerializer).ii = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashMapSerializer).ji = function (_this__u8e3s4) {
    return this.ii((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ki = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.a2().g();
  };
  protoOf(LinkedHashMapSerializer).li = function (_this__u8e3s4) {
    return this.ki((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).lh = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).mi = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(LinkedHashMapSerializer).nh = function (_this__u8e3s4) {
    return this.mi(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ni = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).ph = function (_this__u8e3s4) {
    return this.ni(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).oi = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).rh = function (_this__u8e3s4) {
    return this.oi((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).pi = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).th = function (_this__u8e3s4, size) {
    return this.pi(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).xh = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).ji = function (_this__u8e3s4) {
    return this.xh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).yh = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).li = function (_this__u8e3s4) {
    return this.yh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.qi_1 = keySerializer;
    this.ri_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).si = function (decoder, builder, startIndex, size) {
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
        this.ti(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).bi = function (decoder, builder, startIndex, size) {
    return this.si(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).ti = function (decoder, index, builder, checkIndex) {
    var key = decoder.ag(this.je(), index, this.qi_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.eg(this.je());
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
      var tmp_2 = this.ri_1.je().ye();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.zf(this.je(), vIndex, this.ri_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.ag(this.je(), vIndex, this.ri_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.b2(key, value);
  };
  protoOf(MapLikeSerializer).ci = function (decoder, index, builder, checkIndex) {
    return this.ti(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).ai = function (encoder, value) {
    var size = this.ji(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.je();
    var composite = encoder.wg(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.li(value);
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
      var tmp = this.je();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.rg(tmp, _unary__edvuaz, this.qi_1, k);
      var tmp_0 = this.je();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.rg(tmp_0, _unary__edvuaz_0, this.ri_1, v);
    }
    composite.vf(descriptor);
  };
  protoOf(MapLikeSerializer).ke = function (encoder, value) {
    return this.ai(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.zh_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).ai = function (encoder, value) {
    var size = this.ji(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.je();
    var composite = encoder.wg(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.li(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.rg(this.je(), index, this.zh_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.vf(descriptor);
  };
  protoOf(CollectionLikeSerializer).ke = function (encoder, value) {
    return this.ai(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).bi = function (decoder, builder, startIndex, size) {
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
        this.ci(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ci = function (decoder, index, builder, checkIndex) {
    this.vh(builder, index, decoder.ag(this.je(), index, this.zh_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.fg($this.je());
    $this.th(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).ei = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.rh(previous);
    var builder = tmp1_elvis_lhs == null ? this.lh() : tmp1_elvis_lhs;
    var startIndex = this.nh(builder);
    var compositeDecoder = decoder.uf(this.je());
    if (compositeDecoder.dg()) {
      this.bi(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.eg(this.je());
        if (index === -1)
          break $l$loop;
        this.di(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.vf(this.je());
    return this.ph(builder);
  };
  protoOf(AbstractCollectionSerializer).le = function (decoder) {
    return this.ei(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).di = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ci(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ci.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.ui_1 = longArray(0);
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
    $this.yi_1[slot] = $this.yi_1[slot].v2((new Long(1, 0)).t2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.yi_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.yi_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.s2());
          slotMarks = slotMarks.v2((new Long(1, 0)).t2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.wi_1($this.vi_1, index)) {
            $this.yi_1[slot] = slotMarks;
            return index;
          }
        }
        $this.yi_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.vi_1 = descriptor;
    this.wi_1 = readIfAbsent;
    var elementsCount = this.vi_1.af();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).t2(elementsCount);
      }
      tmp.xi_1 = tmp_0;
      this.yi_1 = Companion_getInstance().ui_1;
    } else {
      this.xi_1 = new Long(0, 0);
      this.yi_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).zi = function (index) {
    if (index < 64) {
      this.xi_1 = this.xi_1.v2((new Long(1, 0)).t2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).aj = function () {
    var elementsCount = this.vi_1.af();
    while (!this.xi_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.xi_1.s2());
      this.xi_1 = this.xi_1.v2((new Long(1, 0)).t2(index));
      if (this.wi_1(this.vi_1, index)) {
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
    this.nj_1 = true;
  }
  protoOf(InlineClassDescriptor).ze = function () {
    return this.nj_1;
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
      if (!(this.xe() === other.xe())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.nj_1 && contentEquals(this.ak(), other.ak()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.af() === other.af())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.af();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ff(index).xe() === other.ff(index).xe())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ff(index).ye(), other.ff(index).ye())) {
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
    this.ck_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).dk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ck_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).je = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ke = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).le = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.fk_1 = serializer;
    this.gk_1 = new SerialDescriptorForNullable(this.fk_1.je());
  }
  protoOf(NullableSerializer).je = function () {
    return this.gk_1;
  };
  protoOf(NullableSerializer).hk = function (encoder, value) {
    if (!(value == null)) {
      encoder.vg();
      encoder.sg(this.fk_1, value);
    } else {
      encoder.ig();
    }
  };
  protoOf(NullableSerializer).ke = function (encoder, value) {
    return this.hk(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).le = function (decoder) {
    return decoder.lf() ? decoder.tf(this.fk_1) : decoder.mf();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.fk_1, other.fk_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.fk_1);
  };
  function SerialDescriptorForNullable(original) {
    this.te_1 = original;
    this.ue_1 = this.te_1.xe() + '?';
    this.ve_1 = cachedSerialNames(this.te_1);
  }
  protoOf(SerialDescriptorForNullable).xe = function () {
    return this.ue_1;
  };
  protoOf(SerialDescriptorForNullable).ah = function () {
    return this.ve_1;
  };
  protoOf(SerialDescriptorForNullable).re = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.te_1, other.te_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.te_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.te_1), 31);
  };
  protoOf(SerialDescriptorForNullable).ye = function () {
    return this.te_1.ye();
  };
  protoOf(SerialDescriptorForNullable).ze = function () {
    return this.te_1.ze();
  };
  protoOf(SerialDescriptorForNullable).af = function () {
    return this.te_1.af();
  };
  protoOf(SerialDescriptorForNullable).bf = function () {
    return this.te_1.bf();
  };
  protoOf(SerialDescriptorForNullable).cf = function (index) {
    return this.te_1.cf(index);
  };
  protoOf(SerialDescriptorForNullable).df = function (name) {
    return this.te_1.df(name);
  };
  protoOf(SerialDescriptorForNullable).ef = function (index) {
    return this.te_1.ef(index);
  };
  protoOf(SerialDescriptorForNullable).ff = function (index) {
    return this.te_1.ff(index);
  };
  protoOf(SerialDescriptorForNullable).gf = function (index) {
    return this.te_1.gf(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.ah();
    var result = HashSet_init_$Create$(_this__u8e3s4.af());
    var inductionVariable = 0;
    var last = _this__u8e3s4.af();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.cf(i);
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
          var element = descriptor.cf(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.xe());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.xe());
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
      var tmp0_safe_receiver = element.xe();
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
      var tmp0_safe_receiver_0 = element_0.ye();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.xj_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.v1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.zj_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.v1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.sj_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.sj_1[i];
        indices.b2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.pj_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dk();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.pj_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ek();
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
          var tmp$ret$0 = item.je();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ak());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.cf(i) + ': ' + this$0.ff(i).xe();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.oj_1 = serialName;
    this.pj_1 = generatedSerializer;
    this.qj_1 = elementsCount;
    this.rj_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.qj_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.sj_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.qj_1;
    tmp_3.tj_1 = fillArrayVal(Array(size), null);
    this.uj_1 = null;
    this.vj_1 = booleanArray(this.qj_1);
    this.wj_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.xj_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.yj_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.zj_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).xe = function () {
    return this.oj_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).af = function () {
    return this.qj_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ye = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).bf = function () {
    var tmp0_elvis_lhs = this.uj_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ah = function () {
    return this.wj_1.z1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ak = function () {
    var tmp0 = this.yj_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.v1();
  };
  protoOf(PluginGeneratedSerialDescriptor).bk = function (name, isOptional) {
    this.rj_1 = this.rj_1 + 1 | 0;
    this.sj_1[this.rj_1] = name;
    this.vj_1[this.rj_1] = isOptional;
    this.tj_1[this.rj_1] = null;
    if (this.rj_1 === (this.qj_1 - 1 | 0)) {
      this.wj_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ff = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).je();
  };
  protoOf(PluginGeneratedSerialDescriptor).gf = function (index) {
    return getChecked_0(this.vj_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ef = function (index) {
    var tmp0_elvis_lhs = getChecked(this.tj_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).cf = function (index) {
    return getChecked(this.sj_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).df = function (name) {
    var tmp0_elvis_lhs = this.wj_1.y1(name);
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
      if (!(this.xe() === other.xe())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.ak(), other.ak())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.af() === other.af())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.af();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ff(index).xe() === other.ff(index).xe())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ff(index).ye(), other.ff(index).ye())) {
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
    var tmp = until(0, this.qj_1);
    var tmp_0 = this.xe() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.ak();
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
    this.ik_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).je = function () {
    return this.ik_1;
  };
  protoOf(StringSerializer).jk = function (encoder, value) {
    return encoder.ng(value);
  };
  protoOf(StringSerializer).ke = function (encoder, value) {
    return this.jk(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).le = function (decoder) {
    return decoder.rf();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.kk_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).je = function () {
    return this.kk_1;
  };
  protoOf(DoubleSerializer).lk = function (encoder, value) {
    return encoder.mg(value);
  };
  protoOf(DoubleSerializer).ke = function (encoder, value) {
    return this.lk(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).le = function (decoder) {
    return decoder.qf();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.mk_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).je = function () {
    return this.mk_1;
  };
  protoOf(LongSerializer).nk = function (encoder, value) {
    return encoder.lg(value);
  };
  protoOf(LongSerializer).ke = function (encoder, value) {
    return this.nk(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).le = function (decoder) {
    return decoder.pf();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.ok_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).je = function () {
    return this.ok_1;
  };
  protoOf(IntSerializer).pk = function (encoder, value) {
    return encoder.kg(value);
  };
  protoOf(IntSerializer).ke = function (encoder, value) {
    return this.pk(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).le = function (decoder) {
    return decoder.of();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.qk_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).je = function () {
    return this.qk_1;
  };
  protoOf(BooleanSerializer).rk = function (encoder, value) {
    return encoder.jg(value);
  };
  protoOf(BooleanSerializer).ke = function (encoder, value) {
    return this.rk(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).le = function (decoder) {
    return decoder.nf();
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
    this.sk_1 = serialName;
    this.tk_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).xe = function () {
    return this.sk_1;
  };
  protoOf(PrimitiveSerialDescriptor).ye = function () {
    return this.tk_1;
  };
  protoOf(PrimitiveSerialDescriptor).af = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).cf = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).df = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).gf = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ff = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ef = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.sk_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.sk_1 === other.sk_1 && equals(this.tk_1, other.tk_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.sk_1) + imul(31, this.tk_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).wk = function (_this__u8e3s4, index) {
    return this.yk(this.xk(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).yk = function (nestedName) {
    var tmp0_elvis_lhs = this.bl();
    return this.cl(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).xk = function (descriptor, index) {
    return descriptor.cf(index);
  };
  protoOf(NamedValueDecoder).cl = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).dl = function () {
    return this.zk_1.j() ? '$' : joinToString(this.zk_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.ll(tag);
    var r = block();
    if (!$this.al_1) {
      $this.ml();
    }
    $this.al_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.sf($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.je().re();
      var tmp;
      if (isNullabilitySupported || tmp0.lf()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.sf($deserializer, $previousValue);
      } else {
        tmp = tmp0.mf();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.zk_1 = ArrayList_init_$Create$();
    this.al_1 = false;
  }
  protoOf(TaggedDecoder).cg = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).el = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).fl = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).gl = function (tag) {
    var tmp = this.el(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).hl = function (tag) {
    var tmp = this.el(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).il = function (tag) {
    var tmp = this.el(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).jl = function (tag) {
    var tmp = this.el(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).kl = function (tag) {
    var tmp = this.el(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).sf = function (deserializer, previousValue) {
    return this.tf(deserializer);
  };
  protoOf(TaggedDecoder).lf = function () {
    var tmp0_elvis_lhs = this.bl();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.fl(currentTag);
  };
  protoOf(TaggedDecoder).mf = function () {
    return null;
  };
  protoOf(TaggedDecoder).nf = function () {
    return this.gl(this.ml());
  };
  protoOf(TaggedDecoder).of = function () {
    return this.hl(this.ml());
  };
  protoOf(TaggedDecoder).pf = function () {
    return this.il(this.ml());
  };
  protoOf(TaggedDecoder).qf = function () {
    return this.jl(this.ml());
  };
  protoOf(TaggedDecoder).rf = function () {
    return this.kl(this.ml());
  };
  protoOf(TaggedDecoder).uf = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).vf = function (descriptor) {
  };
  protoOf(TaggedDecoder).wf = function (descriptor, index) {
    return this.gl(this.wk(descriptor, index));
  };
  protoOf(TaggedDecoder).xf = function (descriptor, index) {
    return this.hl(this.wk(descriptor, index));
  };
  protoOf(TaggedDecoder).yf = function (descriptor, index) {
    return this.kl(this.wk(descriptor, index));
  };
  protoOf(TaggedDecoder).zf = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.wk(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).bg = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.wk(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).bl = function () {
    return lastOrNull(this.zk_1);
  };
  protoOf(TaggedDecoder).ll = function (name) {
    this.zk_1.e(name);
  };
  protoOf(TaggedDecoder).ml = function () {
    var r = this.zk_1.q3(get_lastIndex_0(this.zk_1));
    this.al_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).se = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.nl(kClass, typeArgumentsSerializers) : $super.nl.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.pl_1 = class2ContextualFactory;
    this.ql_1 = polyBase2Serializers;
    this.rl_1 = polyBase2DefaultSerializerProvider;
    this.sl_1 = polyBase2NamedSerializers;
    this.tl_1 = polyBase2DefaultDeserializerProvider;
    this.ul_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).zg = function (baseClass, value) {
    if (!baseClass.w8(value))
      return null;
    var tmp0_safe_receiver = this.ql_1.y1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.rl_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).yg = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.sl_1.y1(baseClass);
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
    var tmp_1 = this.tl_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).nl = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.pl_1.y1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vl(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).ol = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.pl_1.a2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.u1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.v1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.yl_1;
        collector.zl(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.xl(kclass, serial.wl_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.ql_1.a2().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.u1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.v1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.a2().g();
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
        collector.am(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.rl_1.a2().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.u1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.v1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.bm(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.tl_1.a2().g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.u1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.v1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.cm(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  protoOf(AbstractDecoder).ag = decodeSerializableElement$default;
  protoOf(AbstractDecoder).tf = decodeSerializableValue;
  protoOf(AbstractDecoder).dg = decodeSequentially;
  protoOf(AbstractDecoder).fg = decodeCollectionSize;
  protoOf(AbstractEncoder).vg = encodeNotNullMark;
  protoOf(AbstractEncoder).wg = beginCollection;
  protoOf(AbstractEncoder).sg = encodeSerializableValue;
  protoOf(AbstractEncoder).ug = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).xg = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).re = get_isNullable;
  protoOf(ListLikeDescriptor).ze = get_isInline;
  protoOf(ListLikeDescriptor).bf = get_annotations;
  protoOf(MapLikeDescriptor).re = get_isNullable;
  protoOf(MapLikeDescriptor).ze = get_isInline;
  protoOf(MapLikeDescriptor).bf = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).re = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).ze = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).ek = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).re = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).ze = get_isInline;
  protoOf(PrimitiveSerialDescriptor).bf = get_annotations;
  protoOf(TaggedDecoder).ag = decodeSerializableElement$default;
  protoOf(TaggedDecoder).tf = decodeSerializableValue;
  protoOf(TaggedDecoder).dg = decodeSequentially;
  protoOf(TaggedDecoder).fg = decodeCollectionSize;
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

