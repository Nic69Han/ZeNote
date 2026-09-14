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
  var protoOf = kotlin_kotlin.$_$.p4;
  var initMetadataForInterface = kotlin_kotlin.$_$.e4;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.b4;
  var KProperty1 = kotlin_kotlin.$_$.c5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.s;
  var objectCreate = kotlin_kotlin.$_$.o4;
  var captureStack = kotlin_kotlin.$_$.m3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.t;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.v;
  var IllegalArgumentException = kotlin_kotlin.$_$.c6;
  var toString = kotlin_kotlin.$_$.s4;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isInterface = kotlin_kotlin.$_$.i4;
  var emptyList = kotlin_kotlin.$_$.a2;
  var initMetadataForObject = kotlin_kotlin.$_$.g4;
  var ensureNotNull = kotlin_kotlin.$_$.j6;
  var getStringHashCode = kotlin_kotlin.$_$.z3;
  var Long = kotlin_kotlin.$_$.d6;
  var Unit_instance = kotlin_kotlin.$_$.k1;
  var toIntOrNull = kotlin_kotlin.$_$.s5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u;
  var equals = kotlin_kotlin.$_$.u3;
  var hashCode = kotlin_kotlin.$_$.a4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var ArrayList = kotlin_kotlin.$_$.l1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var KtList = kotlin_kotlin.$_$.o1;
  var KtMap = kotlin_kotlin.$_$.p1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var LinkedHashMap = kotlin_kotlin.$_$.n1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var Collection = kotlin_kotlin.$_$.m1;
  var until = kotlin_kotlin.$_$.y4;
  var step = kotlin_kotlin.$_$.x4;
  var KtMutableMap = kotlin_kotlin.$_$.q1;
  var getValue = kotlin_kotlin.$_$.e2;
  var longArray = kotlin_kotlin.$_$.j4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c4;
  var get_lastIndex = kotlin_kotlin.$_$.j2;
  var countTrailingZeroBits = kotlin_kotlin.$_$.h6;
  var contentEquals = kotlin_kotlin.$_$.u1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  var copyToArray = kotlin_kotlin.$_$.y1;
  var contentHashCode = kotlin_kotlin.$_$.v1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.e;
  var fillArrayVal = kotlin_kotlin.$_$.v3;
  var booleanArray = kotlin_kotlin.$_$.l3;
  var emptyMap = kotlin_kotlin.$_$.b2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.m6;
  var joinToString = kotlin_kotlin.$_$.h2;
  var charSequenceLength = kotlin_kotlin.$_$.q3;
  var lastOrNull = kotlin_kotlin.$_$.l2;
  var get_lastIndex_0 = kotlin_kotlin.$_$.k2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o6;
  var KClass = kotlin_kotlin.$_$.z4;
  var get_indices = kotlin_kotlin.$_$.g2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.x;
  var get_indices_0 = kotlin_kotlin.$_$.f2;
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
    return deserializer.tb(this);
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
    return $super === VOID ? this.hd(descriptor, index, deserializer, previousValue) : $super.hd.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.cd(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.sb(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.rb().zb();
    if (isNullabilitySupported) {
      return this.ae(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.qd();
    } else {
      this.de();
      this.ae(serializer, value);
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
    return this.fj(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.ub(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.vb());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.wb(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.vb());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).rb = function () {
    var tmp0 = this.xb_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.r1();
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.rb();
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
    this.yb_1 = missingFields;
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.rb().zb()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.ac(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.rb();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ec_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.bc_1);
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
    this.qc_1 = $this_elementDescriptors;
    this.pc_1 = $this_elementDescriptors.ic();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.pc_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.qc_1.ic();
    var _unary__edvuaz = this.pc_1;
    this.pc_1 = _unary__edvuaz - 1 | 0;
    return this.qc_1.nc(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.rc_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).g = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.rc_1);
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
    return ensureNotNull(getKClassFromExpression(this).x7());
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
  protoOf(AbstractDecoder).sc = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).tc = function () {
    return true;
  };
  protoOf(AbstractDecoder).uc = function () {
    return null;
  };
  protoOf(AbstractDecoder).vc = function () {
    var tmp = this.sc();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wc = function () {
    var tmp = this.sc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xc = function () {
    var tmp = this.sc();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yc = function () {
    var tmp = this.sc();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zc = function () {
    var tmp = this.sc();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ad = function (deserializer, previousValue) {
    return this.bd(deserializer);
  };
  protoOf(AbstractDecoder).cd = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).dd = function (descriptor) {
  };
  protoOf(AbstractDecoder).ed = function (descriptor, index) {
    return this.vc();
  };
  protoOf(AbstractDecoder).fd = function (descriptor, index) {
    return this.wc();
  };
  protoOf(AbstractDecoder).gd = function (descriptor, index) {
    return this.zc();
  };
  protoOf(AbstractDecoder).hd = function (descriptor, index, deserializer, previousValue) {
    return this.ad(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).jd = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.rb().zb();
    var tmp;
    if (isNullabilitySupported || this.tc()) {
      // Inline function 'kotlinx.serialization.encoding.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      tmp = this.ad(deserializer, previousValue);
    } else {
      tmp = this.uc();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).cd = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).dd = function (descriptor) {
  };
  protoOf(AbstractEncoder).od = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).pd = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).qd = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).rd = function (value) {
    return this.pd(value);
  };
  protoOf(AbstractEncoder).sd = function (value) {
    return this.pd(value);
  };
  protoOf(AbstractEncoder).td = function (value) {
    return this.pd(value);
  };
  protoOf(AbstractEncoder).ud = function (value) {
    return this.pd(value);
  };
  protoOf(AbstractEncoder).vd = function (value) {
    return this.pd(value);
  };
  protoOf(AbstractEncoder).wd = function (descriptor, index, value) {
    if (this.od(descriptor, index)) {
      this.rd(value);
    }
  };
  protoOf(AbstractEncoder).xd = function (descriptor, index, value) {
    if (this.od(descriptor, index)) {
      this.sd(value);
    }
  };
  protoOf(AbstractEncoder).yd = function (descriptor, index, value) {
    if (this.od(descriptor, index)) {
      this.vd(value);
    }
  };
  protoOf(AbstractEncoder).zd = function (descriptor, index, serializer, value) {
    if (this.od(descriptor, index)) {
      this.ae(serializer, value);
    }
  };
  protoOf(AbstractEncoder).be = function (descriptor, index, serializer, value) {
    if (this.od(descriptor, index)) {
      this.ce(serializer, value);
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
  protoOf(AbstractPolymorphicSerializer).wb = function (decoder, klassName) {
    return decoder.kd().ge(this.vb(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ub = function (encoder, value) {
    return encoder.kd().he(this.vb(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.x7();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.x7() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.x7() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).fc = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.le_1 = elementDescriptor;
    this.me_1 = 1;
  }
  protoOf(ListLikeDescriptor).gc = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ic = function () {
    return this.me_1;
  };
  protoOf(ListLikeDescriptor).kc = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).lc = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).oc = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).mc = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).nc = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.le_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.le_1, other.le_1) && this.fc() === other.fc())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.le_1), 31) + getStringHashCode(this.fc()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.fc() + '(' + toString(this.le_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.ne_1 = serialName;
    this.oe_1 = keyDescriptor;
    this.pe_1 = valueDescriptor;
    this.qe_1 = 2;
  }
  protoOf(MapLikeDescriptor).fc = function () {
    return this.ne_1;
  };
  protoOf(MapLikeDescriptor).gc = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).ic = function () {
    return this.qe_1;
  };
  protoOf(MapLikeDescriptor).kc = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).lc = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).oc = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).mc = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).nc = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.fc() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.oe_1;
        break;
      case 1:
        tmp = this.pe_1;
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
    if (!(this.fc() === other.fc()))
      return false;
    if (!equals(this.oe_1, other.oe_1))
      return false;
    if (!equals(this.pe_1, other.pe_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.fc());
    result = imul(31, result) + hashCode(this.oe_1) | 0;
    result = imul(31, result) + hashCode(this.pe_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.fc() + '(' + toString(this.oe_1) + ', ' + toString(this.pe_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.se_1 = new ArrayListClassDesc(element.rb());
  }
  protoOf(ArrayListSerializer).rb = function () {
    return this.se_1;
  };
  protoOf(ArrayListSerializer).te = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).ue = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(ArrayListSerializer).ve = function (_this__u8e3s4) {
    return this.ue(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).we = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).xe = function (_this__u8e3s4) {
    return this.we(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ye = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).ze = function (_this__u8e3s4) {
    return this.ye((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).af = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e4(size);
  };
  protoOf(ArrayListSerializer).bf = function (_this__u8e3s4, size) {
    return this.af(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).cf = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.m3(index, element);
  };
  protoOf(ArrayListSerializer).df = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.cf(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.pf_1 = new LinkedHashMapClassDesc(kSerializer.rb(), vSerializer.rb());
  }
  protoOf(LinkedHashMapSerializer).rb = function () {
    return this.pf_1;
  };
  protoOf(LinkedHashMapSerializer).qf = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(LinkedHashMapSerializer).rf = function (_this__u8e3s4) {
    return this.qf((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).sf = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.v1().g();
  };
  protoOf(LinkedHashMapSerializer).tf = function (_this__u8e3s4) {
    return this.sf((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).te = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).uf = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.l(), 2);
  };
  protoOf(LinkedHashMapSerializer).ve = function (_this__u8e3s4) {
    return this.uf(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).vf = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).xe = function (_this__u8e3s4) {
    return this.vf(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).wf = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).ze = function (_this__u8e3s4) {
    return this.wf((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).xf = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).bf = function (_this__u8e3s4, size) {
    return this.xf(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).ff = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  protoOf(CollectionSerializer).rf = function (_this__u8e3s4) {
    return this.ff((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).gf = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).tf = function (_this__u8e3s4) {
    return this.gf((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.yf_1 = keySerializer;
    this.zf_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).ag = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.s_1;
    var last = progression.t_1;
    var step_0 = progression.u_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.bg(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).jf = function (decoder, builder, startIndex, size) {
    return this.ag(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).bg = function (decoder, index, builder, checkIndex) {
    var key = decoder.id(this.rb(), index, this.yf_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.md(this.rb());
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
    if (builder.s1(key)) {
      var tmp_2 = this.zf_1.rb().gc();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.hd(this.rb(), vIndex, this.zf_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.id(this.rb(), vIndex, this.zf_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.w1(key, value);
  };
  protoOf(MapLikeSerializer).kf = function (decoder, index, builder, checkIndex) {
    return this.bg(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).if = function (encoder, value) {
    var size = this.rf(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.rb();
    var composite = encoder.ee(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.tf(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.q1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.r1();
      var tmp = this.rb();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.zd(tmp, _unary__edvuaz, this.yf_1, k);
      var tmp_0 = this.rb();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.zd(tmp_0, _unary__edvuaz_0, this.zf_1, v);
    }
    composite.dd(descriptor);
  };
  protoOf(MapLikeSerializer).sb = function (encoder, value) {
    return this.if(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.hf_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).if = function (encoder, value) {
    var size = this.rf(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.rb();
    var composite = encoder.ee(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.tf(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.zd(this.rb(), index, this.hf_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.dd(descriptor);
  };
  protoOf(CollectionLikeSerializer).sb = function (encoder, value) {
    return this.if(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).jf = function (decoder, builder, startIndex, size) {
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
        this.kf(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).kf = function (decoder, index, builder, checkIndex) {
    this.df(builder, index, decoder.id(this.rb(), index, this.hf_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.nd($this.rb());
    $this.bf(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).mf = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ze(previous);
    var builder = tmp1_elvis_lhs == null ? this.te() : tmp1_elvis_lhs;
    var startIndex = this.ve(builder);
    var compositeDecoder = decoder.cd(this.rb());
    if (compositeDecoder.ld()) {
      this.jf(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.md(this.rb());
        if (index === -1)
          break $l$loop;
        this.lf(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.dd(this.rb());
    return this.xe(builder);
  };
  protoOf(AbstractCollectionSerializer).tb = function (decoder) {
    return this.mf(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).lf = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.kf(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.kf.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.cg_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).k2(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.gg_1[slot] = $this.gg_1[slot].l2((new Long(1, 0)).k2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.gg_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.gg_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.j2());
          slotMarks = slotMarks.l2((new Long(1, 0)).k2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.eg_1($this.dg_1, index)) {
            $this.gg_1[slot] = slotMarks;
            return index;
          }
        }
        $this.gg_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.dg_1 = descriptor;
    this.eg_1 = readIfAbsent;
    var elementsCount = this.dg_1.ic();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).k2(elementsCount);
      }
      tmp.fg_1 = tmp_0;
      this.gg_1 = Companion_getInstance().cg_1;
    } else {
      this.fg_1 = new Long(0, 0);
      this.gg_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).hg = function (index) {
    if (index < 64) {
      this.fg_1 = this.fg_1.l2((new Long(1, 0)).k2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).ig = function () {
    var elementsCount = this.dg_1.ic();
    while (!this.fg_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.fg_1.j2());
      this.fg_1 = this.fg_1.l2((new Long(1, 0)).k2(index));
      if (this.eg_1(this.dg_1, index)) {
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
    this.vg_1 = true;
  }
  protoOf(InlineClassDescriptor).hc = function () {
    return this.vg_1;
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
      if (!(this.fc() === other.fc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.vg_1 && contentEquals(this.ih(), other.ih()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ic() === other.ic())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ic();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nc(index).fc() === other.nc(index).fc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nc(index).gc(), other.nc(index).gc())) {
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
    this.kh_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).lh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.kh_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).rb = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).sb = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).tb = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.nh_1 = serializer;
    this.oh_1 = new SerialDescriptorForNullable(this.nh_1.rb());
  }
  protoOf(NullableSerializer).rb = function () {
    return this.oh_1;
  };
  protoOf(NullableSerializer).ph = function (encoder, value) {
    if (!(value == null)) {
      encoder.de();
      encoder.ae(this.nh_1, value);
    } else {
      encoder.qd();
    }
  };
  protoOf(NullableSerializer).sb = function (encoder, value) {
    return this.ph(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).tb = function (decoder) {
    return decoder.tc() ? decoder.bd(this.nh_1) : decoder.uc();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.nh_1, other.nh_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.nh_1);
  };
  function SerialDescriptorForNullable(original) {
    this.bc_1 = original;
    this.cc_1 = this.bc_1.fc() + '?';
    this.dc_1 = cachedSerialNames(this.bc_1);
  }
  protoOf(SerialDescriptorForNullable).fc = function () {
    return this.cc_1;
  };
  protoOf(SerialDescriptorForNullable).ie = function () {
    return this.dc_1;
  };
  protoOf(SerialDescriptorForNullable).zb = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.bc_1, other.bc_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.bc_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.bc_1), 31);
  };
  protoOf(SerialDescriptorForNullable).gc = function () {
    return this.bc_1.gc();
  };
  protoOf(SerialDescriptorForNullable).hc = function () {
    return this.bc_1.hc();
  };
  protoOf(SerialDescriptorForNullable).ic = function () {
    return this.bc_1.ic();
  };
  protoOf(SerialDescriptorForNullable).jc = function () {
    return this.bc_1.jc();
  };
  protoOf(SerialDescriptorForNullable).kc = function (index) {
    return this.bc_1.kc(index);
  };
  protoOf(SerialDescriptorForNullable).lc = function (name) {
    return this.bc_1.lc(name);
  };
  protoOf(SerialDescriptorForNullable).mc = function (index) {
    return this.bc_1.mc(index);
  };
  protoOf(SerialDescriptorForNullable).nc = function (index) {
    return this.bc_1.nc(index);
  };
  protoOf(SerialDescriptorForNullable).oc = function (index) {
    return this.bc_1.oc(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.ie();
    var result = HashSet_init_$Create$(_this__u8e3s4.ic());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ic();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.kc(i);
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
          var element = descriptor.kc(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.fc());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.fc());
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
      var tmp0_safe_receiver = element.fc();
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
      var tmp0_safe_receiver_0 = element_0.gc();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.fh_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.r1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.hh_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.r1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ah_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.ah_1[i];
        indices.w1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.xg_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lh();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.xg_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mh();
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
          var tmp$ret$0 = item.rb();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ih());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.kc(i) + ': ' + this$0.nc(i).fc();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.wg_1 = serialName;
    this.xg_1 = generatedSerializer;
    this.yg_1 = elementsCount;
    this.zg_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.yg_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ah_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.yg_1;
    tmp_3.bh_1 = fillArrayVal(Array(size), null);
    this.ch_1 = null;
    this.dh_1 = booleanArray(this.yg_1);
    this.eh_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.fh_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.gh_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.hh_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).fc = function () {
    return this.wg_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ic = function () {
    return this.yg_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).gc = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).jc = function () {
    var tmp0_elvis_lhs = this.ch_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ie = function () {
    return this.eh_1.u1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ih = function () {
    var tmp0 = this.gh_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.r1();
  };
  protoOf(PluginGeneratedSerialDescriptor).jh = function (name, isOptional) {
    this.zg_1 = this.zg_1 + 1 | 0;
    this.ah_1[this.zg_1] = name;
    this.dh_1[this.zg_1] = isOptional;
    this.bh_1[this.zg_1] = null;
    if (this.zg_1 === (this.yg_1 - 1 | 0)) {
      this.eh_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).nc = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).rb();
  };
  protoOf(PluginGeneratedSerialDescriptor).oc = function (index) {
    return getChecked_0(this.dh_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).mc = function (index) {
    var tmp0_elvis_lhs = getChecked(this.bh_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).kc = function (index) {
    return getChecked(this.ah_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).lc = function (name) {
    var tmp0_elvis_lhs = this.eh_1.t1(name);
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
      if (!(this.fc() === other.fc())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.ih(), other.ih())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ic() === other.ic())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ic();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nc(index).fc() === other.nc(index).fc())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nc(index).gc(), other.nc(index).gc())) {
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
    var tmp = until(0, this.yg_1);
    var tmp_0 = this.fc() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.ih();
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
    this.qh_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).rb = function () {
    return this.qh_1;
  };
  protoOf(StringSerializer).rh = function (encoder, value) {
    return encoder.vd(value);
  };
  protoOf(StringSerializer).sb = function (encoder, value) {
    return this.rh(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).tb = function (decoder) {
    return decoder.zc();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.sh_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).rb = function () {
    return this.sh_1;
  };
  protoOf(DoubleSerializer).th = function (encoder, value) {
    return encoder.ud(value);
  };
  protoOf(DoubleSerializer).sb = function (encoder, value) {
    return this.th(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).tb = function (decoder) {
    return decoder.yc();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.uh_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).rb = function () {
    return this.uh_1;
  };
  protoOf(LongSerializer).vh = function (encoder, value) {
    return encoder.td(value);
  };
  protoOf(LongSerializer).sb = function (encoder, value) {
    return this.vh(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).tb = function (decoder) {
    return decoder.xc();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.wh_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).rb = function () {
    return this.wh_1;
  };
  protoOf(IntSerializer).xh = function (encoder, value) {
    return encoder.sd(value);
  };
  protoOf(IntSerializer).sb = function (encoder, value) {
    return this.xh(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).tb = function (decoder) {
    return decoder.wc();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.yh_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).rb = function () {
    return this.yh_1;
  };
  protoOf(BooleanSerializer).zh = function (encoder, value) {
    return encoder.rd(value);
  };
  protoOf(BooleanSerializer).sb = function (encoder, value) {
    return this.zh(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).tb = function (decoder) {
    return decoder.vc();
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
    this.ai_1 = serialName;
    this.bi_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).fc = function () {
    return this.ai_1;
  };
  protoOf(PrimitiveSerialDescriptor).gc = function () {
    return this.bi_1;
  };
  protoOf(PrimitiveSerialDescriptor).ic = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).kc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).lc = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).oc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).nc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).mc = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.ai_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.ai_1 === other.ai_1 && equals(this.bi_1, other.bi_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.ai_1) + imul(31, this.bi_1.hashCode()) | 0;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).ei = function (_this__u8e3s4, index) {
    return this.gi(this.fi(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).gi = function (nestedName) {
    var tmp0_elvis_lhs = this.ji();
    return this.ki(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).fi = function (descriptor, index) {
    return descriptor.kc(index);
  };
  protoOf(NamedValueDecoder).ki = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).li = function () {
    return this.hi_1.j() ? '$' : joinToString(this.hi_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.ti(tag);
    var r = block();
    if (!$this.ii_1) {
      $this.ui();
    }
    $this.ii_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ad($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.rb().zb();
      var tmp;
      if (isNullabilitySupported || tmp0.tc()) {
        // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeNullableSerializableElement.<anonymous>.<anonymous>' call
        tmp = this$0.ad($deserializer, $previousValue);
      } else {
        tmp = tmp0.uc();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.hi_1 = ArrayList_init_$Create$();
    this.ii_1 = false;
  }
  protoOf(TaggedDecoder).kd = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).mi = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).ni = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).oi = function (tag) {
    var tmp = this.mi(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).pi = function (tag) {
    var tmp = this.mi(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).qi = function (tag) {
    var tmp = this.mi(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ri = function (tag) {
    var tmp = this.mi(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).si = function (tag) {
    var tmp = this.mi(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ad = function (deserializer, previousValue) {
    return this.bd(deserializer);
  };
  protoOf(TaggedDecoder).tc = function () {
    var tmp0_elvis_lhs = this.ji();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.ni(currentTag);
  };
  protoOf(TaggedDecoder).uc = function () {
    return null;
  };
  protoOf(TaggedDecoder).vc = function () {
    return this.oi(this.ui());
  };
  protoOf(TaggedDecoder).wc = function () {
    return this.pi(this.ui());
  };
  protoOf(TaggedDecoder).xc = function () {
    return this.qi(this.ui());
  };
  protoOf(TaggedDecoder).yc = function () {
    return this.ri(this.ui());
  };
  protoOf(TaggedDecoder).zc = function () {
    return this.si(this.ui());
  };
  protoOf(TaggedDecoder).cd = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).dd = function (descriptor) {
  };
  protoOf(TaggedDecoder).ed = function (descriptor, index) {
    return this.oi(this.ei(descriptor, index));
  };
  protoOf(TaggedDecoder).fd = function (descriptor, index) {
    return this.pi(this.ei(descriptor, index));
  };
  protoOf(TaggedDecoder).gd = function (descriptor, index) {
    return this.si(this.ei(descriptor, index));
  };
  protoOf(TaggedDecoder).hd = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ei(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).jd = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ei(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ji = function () {
    return lastOrNull(this.hi_1);
  };
  protoOf(TaggedDecoder).ti = function (name) {
    this.hi_1.e(name);
  };
  protoOf(TaggedDecoder).ui = function () {
    var r = this.hi_1.n3(get_lastIndex_0(this.hi_1));
    this.ii_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).ac = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.vi(kClass, typeArgumentsSerializers) : $super.vi.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.xi_1 = class2ContextualFactory;
    this.yi_1 = polyBase2Serializers;
    this.zi_1 = polyBase2DefaultSerializerProvider;
    this.aj_1 = polyBase2NamedSerializers;
    this.bj_1 = polyBase2DefaultDeserializerProvider;
    this.cj_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).he = function (baseClass, value) {
    if (!baseClass.y7(value))
      return null;
    var tmp0_safe_receiver = this.yi_1.t1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.zi_1.t1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).ge = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.aj_1.t1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).t1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.bj_1.t1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).vi = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.xi_1.t1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dj(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).wi = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.xi_1.v1().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.q1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.r1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.gj_1;
        collector.hj(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.fj(kclass, serial.ej_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.yi_1.v1().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.q1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.r1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.v1().g();
      while (_iterator__ex2g4s_1.h()) {
        var element_1 = _iterator__ex2g4s_1.i();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.q1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.r1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.ij(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.zi_1.v1().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.q1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.r1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.jj(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.bj_1.v1().g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.q1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.r1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.kj(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  protoOf(AbstractDecoder).id = decodeSerializableElement$default;
  protoOf(AbstractDecoder).bd = decodeSerializableValue;
  protoOf(AbstractDecoder).ld = decodeSequentially;
  protoOf(AbstractDecoder).nd = decodeCollectionSize;
  protoOf(AbstractEncoder).de = encodeNotNullMark;
  protoOf(AbstractEncoder).ee = beginCollection;
  protoOf(AbstractEncoder).ae = encodeSerializableValue;
  protoOf(AbstractEncoder).ce = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).fe = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).zb = get_isNullable;
  protoOf(ListLikeDescriptor).hc = get_isInline;
  protoOf(ListLikeDescriptor).jc = get_annotations;
  protoOf(MapLikeDescriptor).zb = get_isNullable;
  protoOf(MapLikeDescriptor).hc = get_isInline;
  protoOf(MapLikeDescriptor).jc = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).zb = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).hc = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).mh = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).zb = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).hc = get_isInline;
  protoOf(PrimitiveSerialDescriptor).jc = get_annotations;
  protoOf(TaggedDecoder).id = decodeSerializableElement$default;
  protoOf(TaggedDecoder).bd = decodeSerializableValue;
  protoOf(TaggedDecoder).ld = decodeSequentially;
  protoOf(TaggedDecoder).nd = decodeCollectionSize;
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

