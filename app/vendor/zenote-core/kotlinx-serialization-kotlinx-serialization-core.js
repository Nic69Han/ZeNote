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
  var protoOf = kotlin_kotlin.$_$.j4;
  var initMetadataForInterface = kotlin_kotlin.$_$.y3;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.v3;
  var KProperty1 = kotlin_kotlin.$_$.v4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.q;
  var objectCreate = kotlin_kotlin.$_$.i4;
  var captureStack = kotlin_kotlin.$_$.g3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.t;
  var IllegalArgumentException = kotlin_kotlin.$_$.v5;
  var toString = kotlin_kotlin.$_$.m4;
  var THROW_CCE = kotlin_kotlin.$_$.x5;
  var isInterface = kotlin_kotlin.$_$.c4;
  var emptyList = kotlin_kotlin.$_$.v1;
  var initMetadataForObject = kotlin_kotlin.$_$.a4;
  var ensureNotNull = kotlin_kotlin.$_$.c6;
  var getStringHashCode = kotlin_kotlin.$_$.t3;
  var Long = kotlin_kotlin.$_$.w5;
  var Unit_instance = kotlin_kotlin.$_$.h1;
  var toIntOrNull = kotlin_kotlin.$_$.l5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var equals = kotlin_kotlin.$_$.o3;
  var hashCode = kotlin_kotlin.$_$.u3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var ArrayList = kotlin_kotlin.$_$.i1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var KtList = kotlin_kotlin.$_$.k1;
  var Collection = kotlin_kotlin.$_$.j1;
  var longArray = kotlin_kotlin.$_$.d4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w3;
  var get_lastIndex = kotlin_kotlin.$_$.e2;
  var countTrailingZeroBits = kotlin_kotlin.$_$.a6;
  var contentEquals = kotlin_kotlin.$_$.p1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  var copyToArray = kotlin_kotlin.$_$.t1;
  var contentHashCode = kotlin_kotlin.$_$.q1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.e;
  var fillArrayVal = kotlin_kotlin.$_$.p3;
  var booleanArray = kotlin_kotlin.$_$.f3;
  var emptyMap = kotlin_kotlin.$_$.w1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.f6;
  var until = kotlin_kotlin.$_$.r4;
  var joinToString = kotlin_kotlin.$_$.c2;
  var charSequenceLength = kotlin_kotlin.$_$.k3;
  var lastOrNull = kotlin_kotlin.$_$.g2;
  var get_lastIndex_0 = kotlin_kotlin.$_$.f2;
  var KtMap = kotlin_kotlin.$_$.l1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.h6;
  var KClass = kotlin_kotlin.$_$.s4;
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
    return deserializer.ob(this);
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
    return $super === VOID ? this.cd(descriptor, index, deserializer, previousValue) : $super.cd.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.xc(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.nb(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.mb().ub();
    if (isNullabilitySupported) {
      return this.vd(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.ld();
    } else {
      this.yd();
      this.vd(serializer, value);
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
    return this.ji(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.pb(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.qb());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.rb(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.qb());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).mb = function () {
    var tmp0 = this.sb_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.o1();
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.mb();
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
    this.tb_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.mb().ub()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.vb(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.mb();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.zb_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.wb_1);
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
    this.lc_1 = $this_elementDescriptors;
    this.kc_1 = $this_elementDescriptors.dc();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.kc_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.lc_1.dc();
    var _unary__edvuaz = this.kc_1;
    this.kc_1 = _unary__edvuaz - 1 | 0;
    return this.lc_1.ic(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.mc_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).g = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.mc_1);
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
    return ensureNotNull(getKClassFromExpression(this).p7());
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
  protoOf(AbstractDecoder).nc = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).oc = function () {
    return true;
  };
  protoOf(AbstractDecoder).pc = function () {
    return null;
  };
  protoOf(AbstractDecoder).qc = function () {
    var tmp = this.nc();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rc = function () {
    var tmp = this.nc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).sc = function () {
    var tmp = this.nc();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tc = function () {
    var tmp = this.nc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).uc = function () {
    var tmp = this.nc();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vc = function (deserializer, previousValue) {
    return this.wc(deserializer);
  };
  protoOf(AbstractDecoder).xc = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).yc = function (descriptor) {
  };
  protoOf(AbstractDecoder).zc = function (descriptor, index) {
    return this.qc();
  };
  protoOf(AbstractDecoder).ad = function (descriptor, index) {
    return this.rc();
  };
  protoOf(AbstractDecoder).bd = function (descriptor, index) {
    return this.uc();
  };
  protoOf(AbstractDecoder).cd = function (descriptor, index, deserializer, previousValue) {
    return this.vc(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ed = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.mb().ub();
    var tmp;
    if (isNullabilitySupported || this.oc()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.vc(deserializer, previousValue);
    } else {
      tmp = this.pc();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).xc = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).yc = function (descriptor) {
  };
  protoOf(AbstractEncoder).jd = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).kd = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).ld = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).md = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).nd = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).od = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).pd = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).qd = function (value) {
    return this.kd(value);
  };
  protoOf(AbstractEncoder).rd = function (descriptor, index, value) {
    if (this.jd(descriptor, index)) {
      this.md(value);
    }
  };
  protoOf(AbstractEncoder).sd = function (descriptor, index, value) {
    if (this.jd(descriptor, index)) {
      this.nd(value);
    }
  };
  protoOf(AbstractEncoder).td = function (descriptor, index, value) {
    if (this.jd(descriptor, index)) {
      this.qd(value);
    }
  };
  protoOf(AbstractEncoder).ud = function (descriptor, index, serializer, value) {
    if (this.jd(descriptor, index)) {
      this.vd(serializer, value);
    }
  };
  protoOf(AbstractEncoder).wd = function (descriptor, index, serializer, value) {
    if (this.jd(descriptor, index)) {
      this.xd(serializer, value);
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
  protoOf(AbstractPolymorphicSerializer).rb = function (decoder, klassName) {
    return decoder.fd().be(this.qb(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).pb = function (encoder, value) {
    return encoder.fd().ce(this.qb(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.p7();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.p7() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.p7() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).ac = function () {
    return 'kotlin.collections.ArrayList';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.ge_1 = elementDescriptor;
    this.he_1 = 1;
  }
  protoOf(ListLikeDescriptor).bc = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).dc = function () {
    return this.he_1;
  };
  protoOf(ListLikeDescriptor).fc = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).gc = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).jc = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ac() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).hc = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ac() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).ic = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ac() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ge_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ge_1, other.ge_1) && this.ac() === other.ac())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ge_1), 31) + getStringHashCode(this.ac()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.ac() + '(' + toString(this.ge_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.je_1 = new ArrayListClassDesc(element.mb());
  }
  protoOf(ArrayListSerializer).mb = function () {
    return this.je_1;
  };
  protoOf(ArrayListSerializer).ke = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).le = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).me = function (_this__u8e3s4) {
    return this.le(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ne = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).oe = function (_this__u8e3s4) {
    return this.ne(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).pe = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).qe = function (_this__u8e3s4) {
    return this.pe((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).re = function (_this__u8e3s4, size) {
    return _this__u8e3s4.x3(size);
  };
  protoOf(ArrayListSerializer).se = function (_this__u8e3s4, size) {
    return this.re(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).te = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e3(index, element);
  };
  protoOf(ArrayListSerializer).ue = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.te(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).we = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).ef = function (_this__u8e3s4) {
    return this.we((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).xe = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).ff = function (_this__u8e3s4) {
    return this.xe((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ye_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).ze = function (encoder, value) {
    var size = this.ef(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.mb();
    var composite = encoder.zd(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.ff(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ud(this.mb(), index, this.ye_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.yc(descriptor);
  };
  protoOf(CollectionLikeSerializer).nb = function (encoder, value) {
    return this.ze(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).af = function (decoder, builder, startIndex, size) {
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
        this.bf(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).bf = function (decoder, index, builder, checkIndex) {
    this.ue(builder, index, decoder.dd(this.mb(), index, this.ye_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.id($this.mb());
    $this.se(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).df = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.qe(previous);
    var builder = tmp1_elvis_lhs == null ? this.ke() : tmp1_elvis_lhs;
    var startIndex = this.me(builder);
    var compositeDecoder = decoder.xc(this.mb());
    if (compositeDecoder.gd()) {
      this.af(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.hd(this.mb());
        if (index === -1)
          break $l$loop;
        this.cf(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.yc(this.mb());
    return this.oe(builder);
  };
  protoOf(AbstractCollectionSerializer).ob = function (decoder) {
    return this.df(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).cf = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.bf(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.bf.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.gf_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).g2(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.kf_1[slot] = $this.kf_1[slot].h2((new Long(1, 0)).g2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.kf_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.kf_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.f2());
          slotMarks = slotMarks.h2((new Long(1, 0)).g2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.if_1($this.hf_1, index)) {
            $this.kf_1[slot] = slotMarks;
            return index;
          }
        }
        $this.kf_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.hf_1 = descriptor;
    this.if_1 = readIfAbsent;
    var elementsCount = this.hf_1.dc();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).g2(elementsCount);
      }
      tmp.jf_1 = tmp_0;
      this.kf_1 = Companion_getInstance().gf_1;
    } else {
      this.jf_1 = new Long(0, 0);
      this.kf_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).lf = function (index) {
    if (index < 64) {
      this.jf_1 = this.jf_1.h2((new Long(1, 0)).g2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).mf = function () {
    var elementsCount = this.hf_1.dc();
    while (!this.jf_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.jf_1.f2());
      this.jf_1 = this.jf_1.h2((new Long(1, 0)).g2(index));
      if (this.if_1(this.hf_1, index)) {
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
    this.zf_1 = true;
  }
  protoOf(InlineClassDescriptor).cc = function () {
    return this.zf_1;
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
      if (!(this.ac() === other.ac())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.zf_1 && contentEquals(this.mg(), other.mg()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.dc() === other.dc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.dc();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ic(index).ac() === other.ic(index).ac())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ic(index).bc(), other.ic(index).bc())) {
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
    this.og_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).pg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.og_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).mb = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).nb = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ob = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.rg_1 = serializer;
    this.sg_1 = new SerialDescriptorForNullable(this.rg_1.mb());
  }
  protoOf(NullableSerializer).mb = function () {
    return this.sg_1;
  };
  protoOf(NullableSerializer).tg = function (encoder, value) {
    if (!(value == null)) {
      encoder.yd();
      encoder.vd(this.rg_1, value);
    } else {
      encoder.ld();
    }
  };
  protoOf(NullableSerializer).nb = function (encoder, value) {
    return this.tg(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).ob = function (decoder) {
    return decoder.oc() ? decoder.wc(this.rg_1) : decoder.pc();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.rg_1, other.rg_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.rg_1);
  };
  function SerialDescriptorForNullable(original) {
    this.wb_1 = original;
    this.xb_1 = this.wb_1.ac() + '?';
    this.yb_1 = cachedSerialNames(this.wb_1);
  }
  protoOf(SerialDescriptorForNullable).ac = function () {
    return this.xb_1;
  };
  protoOf(SerialDescriptorForNullable).de = function () {
    return this.yb_1;
  };
  protoOf(SerialDescriptorForNullable).ub = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.wb_1, other.wb_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.wb_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.wb_1), 31);
  };
  protoOf(SerialDescriptorForNullable).bc = function () {
    return this.wb_1.bc();
  };
  protoOf(SerialDescriptorForNullable).cc = function () {
    return this.wb_1.cc();
  };
  protoOf(SerialDescriptorForNullable).dc = function () {
    return this.wb_1.dc();
  };
  protoOf(SerialDescriptorForNullable).ec = function () {
    return this.wb_1.ec();
  };
  protoOf(SerialDescriptorForNullable).fc = function (index) {
    return this.wb_1.fc(index);
  };
  protoOf(SerialDescriptorForNullable).gc = function (name) {
    return this.wb_1.gc(name);
  };
  protoOf(SerialDescriptorForNullable).hc = function (index) {
    return this.wb_1.hc(index);
  };
  protoOf(SerialDescriptorForNullable).ic = function (index) {
    return this.wb_1.ic(index);
  };
  protoOf(SerialDescriptorForNullable).jc = function (index) {
    return this.wb_1.jc(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.de();
    var result = HashSet_init_$Create$(_this__u8e3s4.dc());
    var inductionVariable = 0;
    var last = _this__u8e3s4.dc();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.fc(i);
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
          var element = descriptor.fc(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ac());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.ac());
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
      var tmp0_safe_receiver = element.ac();
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
      var tmp0_safe_receiver_0 = element_0.bc();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.jg_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.o1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.lg_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.o1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.eg_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.eg_1[i];
        indices.o3(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bg_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pg();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bg_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qg();
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
          var tmp$ret$0 = item.mb();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.mg());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.fc(i) + ': ' + this$0.ic(i).ac();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ag_1 = serialName;
    this.bg_1 = generatedSerializer;
    this.cg_1 = elementsCount;
    this.dg_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.cg_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.eg_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.cg_1;
    tmp_3.fg_1 = fillArrayVal(Array(size), null);
    this.gg_1 = null;
    this.hg_1 = booleanArray(this.cg_1);
    this.ig_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.jg_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.kg_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.lg_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).ac = function () {
    return this.ag_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).dc = function () {
    return this.cg_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).bc = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).ec = function () {
    var tmp0_elvis_lhs = this.gg_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).de = function () {
    return this.ig_1.r1();
  };
  protoOf(PluginGeneratedSerialDescriptor).mg = function () {
    var tmp0 = this.kg_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.o1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ng = function (name, isOptional) {
    this.dg_1 = this.dg_1 + 1 | 0;
    this.eg_1[this.dg_1] = name;
    this.hg_1[this.dg_1] = isOptional;
    this.fg_1[this.dg_1] = null;
    if (this.dg_1 === (this.cg_1 - 1 | 0)) {
      this.ig_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ic = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).mb();
  };
  protoOf(PluginGeneratedSerialDescriptor).jc = function (index) {
    return getChecked_0(this.hg_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).hc = function (index) {
    var tmp0_elvis_lhs = getChecked(this.fg_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).fc = function (index) {
    return getChecked(this.eg_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).gc = function (name) {
    var tmp0_elvis_lhs = this.ig_1.q1(name);
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
      if (!(this.ac() === other.ac())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.mg(), other.mg())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.dc() === other.dc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.dc();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ic(index).ac() === other.ic(index).ac())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ic(index).bc(), other.ic(index).bc())) {
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
    var tmp = until(0, this.cg_1);
    var tmp_0 = this.ac() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.mg();
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
    this.ug_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).mb = function () {
    return this.ug_1;
  };
  protoOf(StringSerializer).vg = function (encoder, value) {
    return encoder.qd(value);
  };
  protoOf(StringSerializer).nb = function (encoder, value) {
    return this.vg(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ob = function (decoder) {
    return decoder.uc();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.wg_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).mb = function () {
    return this.wg_1;
  };
  protoOf(DoubleSerializer).xg = function (encoder, value) {
    return encoder.pd(value);
  };
  protoOf(DoubleSerializer).nb = function (encoder, value) {
    return this.xg(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ob = function (decoder) {
    return decoder.tc();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.yg_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).mb = function () {
    return this.yg_1;
  };
  protoOf(LongSerializer).zg = function (encoder, value) {
    return encoder.od(value);
  };
  protoOf(LongSerializer).nb = function (encoder, value) {
    return this.zg(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).ob = function (decoder) {
    return decoder.sc();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.ah_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).mb = function () {
    return this.ah_1;
  };
  protoOf(IntSerializer).bh = function (encoder, value) {
    return encoder.nd(value);
  };
  protoOf(IntSerializer).nb = function (encoder, value) {
    return this.bh(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ob = function (decoder) {
    return decoder.rc();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.ch_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).mb = function () {
    return this.ch_1;
  };
  protoOf(BooleanSerializer).dh = function (encoder, value) {
    return encoder.md(value);
  };
  protoOf(BooleanSerializer).nb = function (encoder, value) {
    return this.dh(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ob = function (decoder) {
    return decoder.qc();
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
    this.eh_1 = serialName;
    this.fh_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).ac = function () {
    return this.eh_1;
  };
  protoOf(PrimitiveSerialDescriptor).bc = function () {
    return this.fh_1;
  };
  protoOf(PrimitiveSerialDescriptor).dc = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).fc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).gc = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).jc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ic = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).hc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.eh_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.eh_1 === other.eh_1 && equals(this.fh_1, other.fh_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.eh_1) + imul(31, this.fh_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).ih = function (_this__u8e3s4, index) {
    return this.kh(this.jh(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).kh = function (nestedName) {
    var tmp0_elvis_lhs = this.nh();
    return this.oh(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).jh = function (descriptor, index) {
    return descriptor.fc(index);
  };
  protoOf(NamedValueDecoder).oh = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).ph = function () {
    return this.lh_1.j() ? '$' : joinToString(this.lh_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.xh(tag);
    var r = block();
    if (!$this.mh_1) {
      $this.yh();
    }
    $this.mh_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.vc($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.mb().ub();
      var tmp;
      if (isNullabilitySupported || tmp0.oc()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.vc($deserializer, $previousValue);
      } else {
        tmp = tmp0.pc();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.lh_1 = ArrayList_init_$Create$();
    this.mh_1 = false;
  }
  protoOf(TaggedDecoder).fd = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).qh = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).rh = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).sh = function (tag) {
    var tmp = this.qh(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).th = function (tag) {
    var tmp = this.qh(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).uh = function (tag) {
    var tmp = this.qh(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).vh = function (tag) {
    var tmp = this.qh(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).wh = function (tag) {
    var tmp = this.qh(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).vc = function (deserializer, previousValue) {
    return this.wc(deserializer);
  };
  protoOf(TaggedDecoder).oc = function () {
    var tmp0_elvis_lhs = this.nh();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.rh(currentTag);
  };
  protoOf(TaggedDecoder).pc = function () {
    return null;
  };
  protoOf(TaggedDecoder).qc = function () {
    return this.sh(this.yh());
  };
  protoOf(TaggedDecoder).rc = function () {
    return this.th(this.yh());
  };
  protoOf(TaggedDecoder).sc = function () {
    return this.uh(this.yh());
  };
  protoOf(TaggedDecoder).tc = function () {
    return this.vh(this.yh());
  };
  protoOf(TaggedDecoder).uc = function () {
    return this.wh(this.yh());
  };
  protoOf(TaggedDecoder).xc = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).yc = function (descriptor) {
  };
  protoOf(TaggedDecoder).zc = function (descriptor, index) {
    return this.sh(this.ih(descriptor, index));
  };
  protoOf(TaggedDecoder).ad = function (descriptor, index) {
    return this.th(this.ih(descriptor, index));
  };
  protoOf(TaggedDecoder).bd = function (descriptor, index) {
    return this.wh(this.ih(descriptor, index));
  };
  protoOf(TaggedDecoder).cd = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ih(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ed = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ih(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).nh = function () {
    return lastOrNull(this.lh_1);
  };
  protoOf(TaggedDecoder).xh = function (name) {
    this.lh_1.e(name);
  };
  protoOf(TaggedDecoder).yh = function () {
    var r = this.lh_1.f3(get_lastIndex_0(this.lh_1));
    this.mh_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).vb = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.zh(kClass, typeArgumentsSerializers) : $super.zh.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.bi_1 = class2ContextualFactory;
    this.ci_1 = polyBase2Serializers;
    this.di_1 = polyBase2DefaultSerializerProvider;
    this.ei_1 = polyBase2NamedSerializers;
    this.fi_1 = polyBase2DefaultDeserializerProvider;
    this.gi_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).ce = function (baseClass, value) {
    if (!baseClass.q7(value))
      return null;
    var tmp0_safe_receiver = this.ci_1.q1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.di_1.q1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).be = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.ei_1.q1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).q1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.fi_1.q1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).zh = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.bi_1.q1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hi(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).ai = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.bi_1.s1().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.n1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.o1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.ki_1;
        collector.li(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.ji(kclass, serial.ii_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.ci_1.s1().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.n1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.o1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.s1().g();
      while (_iterator__ex2g4s_1.h()) {
        var element_1 = _iterator__ex2g4s_1.i();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.n1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.o1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.mi(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.di_1.s1().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.n1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.o1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.ni(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.fi_1.s1().g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.n1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.o1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.oi(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  protoOf(AbstractDecoder).dd = decodeSerializableElement$default;
  protoOf(AbstractDecoder).wc = decodeSerializableValue;
  protoOf(AbstractDecoder).gd = decodeSequentially;
  protoOf(AbstractDecoder).id = decodeCollectionSize;
  protoOf(AbstractEncoder).yd = encodeNotNullMark;
  protoOf(AbstractEncoder).zd = beginCollection;
  protoOf(AbstractEncoder).vd = encodeSerializableValue;
  protoOf(AbstractEncoder).xd = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ae = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ub = get_isNullable;
  protoOf(ListLikeDescriptor).cc = get_isInline;
  protoOf(ListLikeDescriptor).ec = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ub = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).cc = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).qg = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).ub = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).cc = get_isInline;
  protoOf(PrimitiveSerialDescriptor).ec = get_annotations;
  protoOf(TaggedDecoder).dd = decodeSerializableElement$default;
  protoOf(TaggedDecoder).wc = decodeSerializableValue;
  protoOf(TaggedDecoder).gd = decodeSequentially;
  protoOf(TaggedDecoder).id = decodeCollectionSize;
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

