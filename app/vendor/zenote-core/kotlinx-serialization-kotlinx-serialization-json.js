(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var protoOf = kotlin_kotlin.$_$.a6;
  var initMetadataForObject = kotlin_kotlin.$_$.p5;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var initMetadataForClass = kotlin_kotlin.$_$.k5;
  var toString = kotlin_kotlin.$_$.d6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var charSequenceLength = kotlin_kotlin.$_$.z4;
  var charSequenceGet = kotlin_kotlin.$_$.y4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var equals = kotlin_kotlin.$_$.d5;
  var toString_0 = kotlin_kotlin.$_$.a9;
  var Enum = kotlin_kotlin.$_$.j8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.l5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var hashCode = kotlin_kotlin.$_$.j5;
  var joinToString = kotlin_kotlin.$_$.k3;
  var THROW_CCE = kotlin_kotlin.$_$.o8;
  var KtMap = kotlin_kotlin.$_$.m2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.f5;
  var getStringHashCode = kotlin_kotlin.$_$.i5;
  var KtList = kotlin_kotlin.$_$.l2;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var numberRangeToNumber = kotlin_kotlin.$_$.u5;
  var ClosedRange = kotlin_kotlin.$_$.f6;
  var isInterface = kotlin_kotlin.$_$.s5;
  var contains = kotlin_kotlin.$_$.j6;
  var toDouble = kotlin_kotlin.$_$.w7;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.e2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong = kotlin_kotlin.$_$.c6;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.v4;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.a5;
  var coerceAtLeast = kotlin_kotlin.$_$.g6;
  var coerceAtMost = kotlin_kotlin.$_$.h6;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.e4;
  var emptyMap = kotlin_kotlin.$_$.b3;
  var getValue = kotlin_kotlin.$_$.g3;
  var fillArrayVal = kotlin_kotlin.$_$.e5;
  var copyOf = kotlin_kotlin.$_$.v2;
  var copyOf_0 = kotlin_kotlin.$_$.w2;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.h8;
  var invoke = kotlin_kotlin.$_$.u8;
  var CoroutineImpl = kotlin_kotlin.$_$.r4;
  var DeepRecursiveScope = kotlin_kotlin.$_$.i8;
  var Unit = kotlin_kotlin.$_$.q8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q4;
  var initMetadataForLambda = kotlin_kotlin.$_$.o5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.m5;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var getKClass = kotlin_kotlin.$_$.b;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var ensureNotNull = kotlin_kotlin.$_$.t8;
  var substringBefore = kotlin_kotlin.$_$.u7;
  var removeSuffix = kotlin_kotlin.$_$.l7;
  var substringAfter = kotlin_kotlin.$_$.s7;
  var contains_0 = kotlin_kotlin.$_$.v6;
  var plus = kotlin_kotlin.$_$.z8;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.l8;
  var isFinite = kotlin_kotlin.$_$.v8;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var objectCreate = kotlin_kotlin.$_$.z5;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y8;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.y1;
  var numberToChar = kotlin_kotlin.$_$.v5;
  var equals_0 = kotlin_kotlin.$_$.x6;
  var toString_1 = kotlin_kotlin.$_$.z1;
  var toByte = kotlin_kotlin.$_$.b6;
  var startsWith = kotlin_kotlin.$_$.q7;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var emptySet = kotlin_kotlin.$_$.c3;
  var plus_0 = kotlin_kotlin.$_$.x3;
  var toInt = kotlin_kotlin.$_$.y7;
  var toList = kotlin_kotlin.$_$.k4;
  var enumEntries = kotlin_kotlin.$_$.s4;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var last = kotlin_kotlin.$_$.p3;
  var removeLast = kotlin_kotlin.$_$.b4;
  var lastIndexOf = kotlin_kotlin.$_$.h7;
  var Long = kotlin_kotlin.$_$.m8;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.x1;
  var numberToLong = kotlin_kotlin.$_$.y5;
  var charArray = kotlin_kotlin.$_$.x4;
  var indexOf = kotlin_kotlin.$_$.z6;
  var indexOf_0 = kotlin_kotlin.$_$.a7;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap]);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement);
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList]);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [0]);
  initMetadataForClass(PolymorphismValidator, 'PolymorphismValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [Decoder, CompositeDecoder, AbstractDecoder]);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [CompositeEncoder, Encoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, Decoder, CompositeDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.x12_1 = configuration;
    this.y12_1 = serializersModule;
    this.z12_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).ig = function () {
    return this.y12_1;
  };
  protoOf(Json).a13 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.d13();
    }
  };
  protoOf(Json).b13 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.pe(), null);
    var result = input.zf(deserializer);
    lexer.q13();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.j14();
    return new JsonImpl(conf, builder.i14_1);
  }
  function JsonBuilder(json) {
    this.r13_1 = json.x12_1.k14_1;
    this.s13_1 = json.x12_1.p14_1;
    this.t13_1 = json.x12_1.l14_1;
    this.u13_1 = json.x12_1.m14_1;
    this.v13_1 = json.x12_1.o14_1;
    this.w13_1 = json.x12_1.q14_1;
    this.x13_1 = json.x12_1.r14_1;
    this.y13_1 = json.x12_1.t14_1;
    this.z13_1 = json.x12_1.a15_1;
    this.a14_1 = json.x12_1.v14_1;
    this.b14_1 = json.x12_1.w14_1;
    this.c14_1 = json.x12_1.x14_1;
    this.d14_1 = json.x12_1.y14_1;
    this.e14_1 = json.x12_1.z14_1;
    this.f14_1 = json.x12_1.u14_1;
    this.g14_1 = json.x12_1.n14_1;
    this.h14_1 = json.x12_1.s14_1;
    this.i14_1 = json.ig();
  }
  protoOf(JsonBuilder).j14 = function () {
    if (this.h14_1) {
      // Inline function 'kotlin.require' call
      if (!(this.y13_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.z13_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.v13_1) {
      // Inline function 'kotlin.require' call
      if (!(this.w13_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.w13_1 === '    ')) {
      var tmp3 = this.w13_1;
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp3)) {
          var element = charSequenceGet(tmp3, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$4 = false;
            break $l$block;
          }
        }
        tmp$ret$4 = true;
      }
      var allWhitespaces = tmp$ret$4;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.w13_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.r13_1, this.t13_1, this.u13_1, this.g14_1, this.v13_1, this.s13_1, this.w13_1, this.x13_1, this.h14_1, this.y13_1, this.f14_1, this.a14_1, this.b14_1, this.c14_1, this.d14_1, this.e14_1, this.z13_1);
  };
  function validateConfiguration($this) {
    if (equals($this.ig(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.x12_1.s14_1, $this.x12_1.t14_1);
    $this.ig().ul(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.k14_1 = encodeDefaults;
    this.l14_1 = ignoreUnknownKeys;
    this.m14_1 = isLenient;
    this.n14_1 = allowStructuredMapKeys;
    this.o14_1 = prettyPrint;
    this.p14_1 = explicitNulls;
    this.q14_1 = prettyPrintIndent;
    this.r14_1 = coerceInputValues;
    this.s14_1 = useArrayPolymorphism;
    this.t14_1 = classDiscriminator;
    this.u14_1 = allowSpecialFloatingPointValues;
    this.v14_1 = useAlternativeNames;
    this.w14_1 = namingStrategy;
    this.x14_1 = decodeEnumsCaseInsensitive;
    this.y14_1 = allowTrailingComma;
    this.z14_1 = allowComments;
    this.a15_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.k14_1 + ', ignoreUnknownKeys=' + this.l14_1 + ', isLenient=' + this.m14_1 + ', ' + ('allowStructuredMapKeys=' + this.n14_1 + ', prettyPrint=' + this.o14_1 + ', explicitNulls=' + this.p14_1 + ', ') + ("prettyPrintIndent='" + this.q14_1 + "', coerceInputValues=" + this.r14_1 + ', useArrayPolymorphism=' + this.s14_1 + ', ') + ("classDiscriminator='" + this.t14_1 + "', allowSpecialFloatingPointValues=" + this.u14_1 + ', ') + ('useAlternativeNames=' + this.v14_1 + ', namingStrategy=' + toString_0(this.w14_1) + ', decodeEnumsCaseInsensitive=' + this.x14_1 + ', ') + ('allowTrailingComma=' + this.y14_1 + ', allowComments=' + this.z14_1 + ', classDiscriminatorMode=' + this.a15_1.toString() + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.u1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.v1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.l7(_Char___init__impl__6a9atx(58));
    this_0.j7(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.b15_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.b15_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.b15_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.b15_1.a2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).c15 = function (key) {
    return this.b15_1.w1(key);
  };
  protoOf(JsonObject).w1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.c15((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).za = function (key) {
    return this.b15_1.y1(key);
  };
  protoOf(JsonObject).y1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.za((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).j = function () {
    return this.b15_1.j();
  };
  protoOf(JsonObject).a2 = function () {
    return this.b15_1.a2();
  };
  protoOf(JsonObject).z1 = function () {
    return this.b15_1.z1();
  };
  protoOf(JsonObject).l = function () {
    return this.b15_1.l();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.d15_1 = 'null';
  }
  protoOf(JsonNull).e15 = function () {
    return this.d15_1;
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.e15();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.f15_1 = isString;
    this.g15_1 = coerceToInlineType;
    this.h15_1 = toString(body);
    if (!(this.g15_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.g15_1.ff()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).e15 = function () {
    return this.h15_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.f15_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.h15_1);
      tmp = this_0.toString();
    } else {
      tmp = this.h15_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.f15_1 === other.f15_1))
      return false;
    if (!(this.h15_1 === other.h15_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.f15_1);
    result = imul(31, result) + getStringHashCode(this.h15_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.i15_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.i15_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.i15_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.i15_1, ',', '[', ']');
  };
  protoOf(JsonArray).j15 = function (elements) {
    return this.i15_1.s1(elements);
  };
  protoOf(JsonArray).s1 = function (elements) {
    return this.j15(elements);
  };
  protoOf(JsonArray).k = function (index) {
    return this.i15_1.k(index);
  };
  protoOf(JsonArray).k15 = function (element) {
    return this.i15_1.t1(element);
  };
  protoOf(JsonArray).t1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.k15(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).j = function () {
    return this.i15_1.j();
  };
  protoOf(JsonArray).g = function () {
    return this.i15_1.g();
  };
  protoOf(JsonArray).q = function (index) {
    return this.i15_1.q(index);
  };
  protoOf(JsonArray).l = function () {
    return this.i15_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.e15());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.e15())).l15();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.e15() + ' is not an Int');
    return result.b1();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.e15())).l15();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.e15());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.e15();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function Composer(writer) {
    this.m15_1 = writer;
    this.n15_1 = true;
  }
  protoOf(Composer).o15 = function () {
    this.n15_1 = true;
  };
  protoOf(Composer).p15 = function () {
    return Unit_instance;
  };
  protoOf(Composer).q15 = function () {
    this.n15_1 = false;
  };
  protoOf(Composer).r15 = function () {
    this.n15_1 = false;
  };
  protoOf(Composer).s15 = function () {
    return Unit_instance;
  };
  protoOf(Composer).t15 = function (v) {
    return this.m15_1.u15(v);
  };
  protoOf(Composer).v15 = function (v) {
    return this.m15_1.w15(v);
  };
  protoOf(Composer).x15 = function (v) {
    return this.m15_1.w15(v.toString());
  };
  protoOf(Composer).y15 = function (v) {
    return this.m15_1.z15(toLong(v));
  };
  protoOf(Composer).a16 = function (v) {
    return this.m15_1.z15(v);
  };
  protoOf(Composer).b16 = function (v) {
    return this.m15_1.w15(v.toString());
  };
  protoOf(Composer).c16 = function (value) {
    return this.m15_1.d16(value);
  };
  function Composer_0(sb, json) {
    return json.x12_1.o14_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.g16_1 = json;
    this.h16_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).o15 = function () {
    this.n15_1 = true;
    this.h16_1 = this.h16_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).p15 = function () {
    this.h16_1 = this.h16_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).q15 = function () {
    this.n15_1 = false;
    this.v15('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.h16_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.v15(this.g16_1.x12_1.q14_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).r15 = function () {
    if (this.n15_1)
      this.n15_1 = false;
    else {
      this.q15();
    }
  };
  protoOf(ComposerWithPrettyPrint).s15 = function () {
    this.t15(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.j16_1 = (!descriptor.mf(index) && descriptor.lf(index).xe());
    return $this.j16_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.i16_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.j16_1 = false;
  }
  protoOf(JsonElementMarker).k16 = function (index) {
    this.i16_1.fj(index);
  };
  protoOf(JsonElementMarker).l16 = function () {
    return this.i16_1.gj();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.m16('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.m13_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.n16('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.df() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ef().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.\n" + ('Current input: ' + toString(minify(input))));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp4 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp4, endIndex_0)) + suffix;
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.jf(name);
    if (!(index === -3))
      return index;
    if (!json.x12_1.v14_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.if(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.ef(), CLASS_getInstance()) ? json.x12_1.w14_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.p16(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.x12_1.x14_1 && equals(descriptor.ef(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).y1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.p16(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.gf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.kf(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          if (element instanceof JsonNames) {
            destination.e(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q16_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.if(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.r16(_this__u8e3s4, i, _this__u8e3s4.if(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.j()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.ef(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).w1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.if(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.if(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.b2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.gf();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.if(tmp_2);
        tmp_1[tmp_2] = $strategy.r16($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.u16_1, 2);
    $this.s16_1 = copyOf($this.s16_1, newSize);
    $this.t16_1 = copyOf_0($this.t16_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.s16_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.t16_1 = tmp_2;
    this.u16_1 = -1;
  }
  protoOf(JsonPath).v16 = function (sd) {
    this.u16_1 = this.u16_1 + 1 | 0;
    var depth = this.u16_1;
    if (depth === this.s16_1.length) {
      resize(this);
    }
    this.s16_1[depth] = sd;
  };
  protoOf(JsonPath).w16 = function (index) {
    this.t16_1[this.u16_1] = index;
  };
  protoOf(JsonPath).x16 = function (key) {
    var tmp;
    if (!(this.t16_1[this.u16_1] === -2)) {
      this.u16_1 = this.u16_1 + 1 | 0;
      tmp = this.u16_1 === this.s16_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.s16_1[this.u16_1] = key;
    this.t16_1[this.u16_1] = -2;
  };
  protoOf(JsonPath).y16 = function () {
    if (this.t16_1[this.u16_1] === -2) {
      this.s16_1[this.u16_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).z16 = function () {
    var depth = this.u16_1;
    if (this.t16_1[depth] === -2) {
      this.t16_1[depth] = -1;
      this.u16_1 = this.u16_1 - 1 | 0;
    }
    if (!(this.u16_1 === -1)) {
      this.u16_1 = this.u16_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).a17 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.k7('$');
    // Inline function 'kotlin.repeat' call
    var times = this.u16_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.s16_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ef(), LIST_getInstance())) {
            if (!(this.t16_1[index] === -1)) {
              this_0.k7('[');
              this_0.ca(this.t16_1[index]);
              this_0.k7(']');
            }
          } else {
            var idx = this.t16_1[index];
            if (idx >= 0) {
              this_0.k7('.');
              this_0.k7(element.if(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.k7('[');
            this_0.k7("'");
            this_0.j7(element);
            this_0.k7("'");
            this_0.k7(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.a17();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.yg(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.k17_1.o17(6);
    if ($this.k17_1.p17() === 4) {
      $this.k17_1.n16('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.k17_1.q17()) {
      var key = $this.l17_1 ? $this.k17_1.s17() : $this.k17_1.r17();
      $this.k17_1.o17(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.t17();
      // Inline function 'kotlin.collections.set' call
      result.b2(key, element);
      lastToken = $this.k17_1.u17();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.k17_1.n16('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.k17_1.o17(7);
    } else if (lastToken === 4) {
      if (!$this.m17_1) {
        invalidTrailingComma($this.k17_1);
      }
      $this.k17_1.o17(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  }
  function readArray($this) {
    var lastToken = $this.k17_1.u17();
    if ($this.k17_1.p17() === 4) {
      $this.k17_1.n16('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.k17_1.q17()) {
      var element = $this.t17();
      result.e(element);
      lastToken = $this.k17_1.u17();
      if (!(lastToken === 4)) {
        var tmp0 = $this.k17_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.m13_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.n16(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.k17_1.o17(9);
    } else if (lastToken === 4) {
      if (!$this.m17_1) {
        invalidTrailingComma($this.k17_1, 'array');
      }
      $this.k17_1.o17(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.l17_1 || !isString) {
      tmp = $this.k17_1.s17();
    } else {
      tmp = $this.k17_1.r17();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.s18_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).x18 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.y18($this$DeepRecursiveFunction, it, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).k8 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.x18(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 3;
            this.v18_1 = this.s18_1.k17_1.p17();
            if (this.v18_1 === 1) {
              this.w18_1 = readValue(this.s18_1, true);
              this.w7_1 = 2;
              continue $sm;
            } else {
              if (this.v18_1 === 0) {
                this.w18_1 = readValue(this.s18_1, false);
                this.w7_1 = 2;
                continue $sm;
              } else {
                if (this.v18_1 === 6) {
                  this.w7_1 = 1;
                  suspendResult = readObject_0(this.t18_1, this.s18_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.v18_1 === 8) {
                    this.w18_1 = readArray(this.s18_1);
                    this.w7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.s18_1.k17_1.n16("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.w18_1 = suspendResult;
            this.w7_1 = 2;
            continue $sm;
          case 2:
            return this.w18_1;
          case 3:
            throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x7_1 === 3) {
          throw e;
        } else {
          this.w7_1 = this.x7_1;
          this.z7_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).y18 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.s18_1, completion);
    i.t18_1 = $this$DeepRecursiveFunction;
    i.u18_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.x18($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d18_1 = _this__u8e3s4;
    this.e18_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 5;
            var tmp_0 = this;
            tmp_0.f18_1 = this.d18_1;
            this.g18_1 = this.f18_1;
            this.h18_1 = this.g18_1.k17_1.o17(6);
            if (this.g18_1.k17_1.p17() === 4) {
              this.g18_1.k17_1.n16('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.i18_1 = LinkedHashMap_init_$Create$();
            this.w7_1 = 1;
            continue $sm;
          case 1:
            if (!this.g18_1.k17_1.q17()) {
              this.w7_1 = 4;
              continue $sm;
            }

            this.j18_1 = this.g18_1.l17_1 ? this.g18_1.k17_1.s17() : this.g18_1.k17_1.r17();
            this.g18_1.k17_1.o17(5);
            this.w7_1 = 2;
            suspendResult = this.e18_1.ce(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.i18_1;
            var key = this.j18_1;
            tmp0.b2(key, element);
            this.h18_1 = this.g18_1.k17_1.u17();
            var tmp0_subject = this.h18_1;
            if (tmp0_subject === 4) {
              this.w7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.w7_1 = 4;
                continue $sm;
              } else {
                this.g18_1.k17_1.n16('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.w7_1 = 1;
            continue $sm;
          case 4:
            if (this.h18_1 === 6) {
              this.g18_1.k17_1.o17(7);
            } else if (this.h18_1 === 4) {
              if (!this.g18_1.m17_1) {
                invalidTrailingComma(this.g18_1.k17_1);
              }
              this.g18_1.k17_1.o17(7);
            }

            return new JsonObject(this.i18_1);
          case 5:
            throw this.z7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x7_1 === 5) {
          throw e;
        } else {
          this.w7_1 = this.x7_1;
          this.z7_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.k17_1 = lexer;
    this.l17_1 = configuration.m14_1;
    this.m17_1 = configuration.y14_1;
    this.n17_1 = 0;
  }
  protoOf(JsonTreeReader).t17 = function () {
    var token = this.k17_1.p17();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.n17_1 = this.n17_1 + 1 | 0;
      if (this.n17_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.n17_1 = this.n17_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.k17_1.n16('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.hf().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.z18_1;
    }
    return json.x12_1.t14_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.pe()).r1(classDiscriminator)) {
      var baseName = serializer.pe().df();
      var actualName = actualSerializer.pe().df();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.ef();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.v8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.a19_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.v8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.gf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.if(i);
        if (name === $this.b19_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.a19_1 = useArrayPolymorphism;
    this.b19_1 = discriminator;
  }
  protoOf(PolymorphismValidator).dm = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).gm = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.pe();
    checkKind_0(this, descriptor, actualClass);
    if (!this.a19_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).hm = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).im = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.o16_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).c19 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.o16_1;
    var value_0 = this_0.y1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.b2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.b2(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).p16 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.d19(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.c19(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).d19 = function (descriptor, key) {
    var tmp0_safe_receiver = this.o16_1.y1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.y1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.e19_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.e19_1 === unknownKey) {
      _this__u8e3s4.e19_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.kg(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.g13_1.p17() === 4) {
      $this.g13_1.n16('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.i13_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.i13_1 === -1)) {
        hasComma = $this.g13_1.g19();
      }
    } else {
      $this.g13_1.f19(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.g13_1.q17()) {
      if (decodingKey) {
        if ($this.i13_1 === -1) {
          var tmp0 = $this.g13_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.m13_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.n16(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.g13_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.m13_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.n16(tmp$ret$1, position_0);
          }
        }
      }
      $this.i13_1 = $this.i13_1 + 1 | 0;
      tmp = $this.i13_1;
    } else {
      if (hasComma && !$this.e13_1.x12_1.y14_1) {
        invalidTrailingComma($this.g13_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.e13_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.mf(index);
      var elementDescriptor = descriptor.lf(index);
      var tmp;
      if (isOptional && !elementDescriptor.xe()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.g13_1.h19(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ef(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.xe()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.g13_1.h19(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.g13_1.i19($this.k13_1.m14_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.x12_1.p14_1 && elementDescriptor.xe();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.g13_1.r17();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.g13_1.g19();
    while ($this.g13_1.q17()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.g13_1.f19(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.e13_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.k13_1.r14_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.g13_1.g19();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.l13_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.k16(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma && !$this.e13_1.x12_1.y14_1) {
      invalidTrailingComma($this.g13_1);
    }
    var tmp1_safe_receiver = $this.l13_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l16();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.k13_1.l14_1 || trySkip($this.j13_1, $this, key)) {
      $this.g13_1.k19($this.k13_1.m14_1);
    } else {
      $this.g13_1.j19(key);
    }
    return $this.g13_1.g19();
  }
  function decodeListIndex($this) {
    var hasComma = $this.g13_1.g19();
    var tmp;
    if ($this.g13_1.q17()) {
      if (!($this.i13_1 === -1) && !hasComma) {
        $this.g13_1.n16('Expected end of the array or comma');
      }
      $this.i13_1 = $this.i13_1 + 1 | 0;
      tmp = $this.i13_1;
    } else {
      if (hasComma && !$this.e13_1.x12_1.y14_1) {
        invalidTrailingComma($this.g13_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.k13_1.m14_1) {
      tmp = $this.g13_1.m19();
    } else {
      tmp = $this.g13_1.l19();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.e13_1 = json;
    this.f13_1 = mode;
    this.g13_1 = lexer;
    this.h13_1 = this.e13_1.ig();
    this.i13_1 = -1;
    this.j13_1 = discriminatorHolder;
    this.k13_1 = this.e13_1.x12_1;
    this.l13_1 = this.k13_1.p14_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).n19 = function () {
    return this.e13_1;
  };
  protoOf(StreamingJsonDecoder).ig = function () {
    return this.h13_1;
  };
  protoOf(StreamingJsonDecoder).o19 = function () {
    return (new JsonTreeReader(this.e13_1.x12_1, this.g13_1)).t17();
  };
  protoOf(StreamingJsonDecoder).zf = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e13_1.x12_1.s14_1;
      }
      if (tmp) {
        return deserializer.re(this);
      }
      var discriminator = classDiscriminator(deserializer.pe(), this.e13_1);
      var tmp0_elvis_lhs = this.g13_1.p19(discriminator, this.k13_1.m14_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp1 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp1 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.n19().x12_1.s14_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.re(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.pe(), this.n19());
          var tmp0 = this.o19();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.pe().df();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).v8();
            var tmp_3 = getKClassFromExpression(tmp0).v8();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.g13_1.n13_1.a17();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.za(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp1, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.n19(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.g13_1.n16(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.j13_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.re(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.we_1, plus(e.message, ' at path: ') + this.g13_1.n13_1.a17(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).ag = function (descriptor) {
    var newMode = switchMode(this.e13_1, descriptor);
    this.g13_1.n13_1.v16(descriptor);
    this.g13_1.f19(newMode.s19_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.g2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.e13_1, newMode, this.g13_1, descriptor, this.j13_1);
        break;
      default:
        var tmp_0;
        if (this.f13_1.equals(newMode) && this.e13_1.x12_1.p14_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.e13_1, newMode, this.g13_1, descriptor, this.j13_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).bg = function (descriptor) {
    if (this.e13_1.x12_1.l14_1 && descriptor.gf() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.g13_1.g19() && !this.e13_1.x12_1.y14_1) {
      invalidTrailingComma(this.g13_1, '');
    }
    this.g13_1.f19(this.f13_1.t19_1);
    this.g13_1.n13_1.z16();
  };
  protoOf(StreamingJsonDecoder).rf = function () {
    var tmp;
    var tmp0_safe_receiver = this.l13_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j16_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.g13_1.u19();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).sf = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).fg = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.f13_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.g13_1.n13_1.y16();
    }
    var value = protoOf(AbstractDecoder).fg.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.g13_1.n13_1.x16(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).kg = function (descriptor) {
    var index;
    switch (this.f13_1.g2_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.f13_1.equals(WriteMode_MAP_getInstance())) {
      this.g13_1.n13_1.w16(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).tf = function () {
    return this.g13_1.v19();
  };
  protoOf(StreamingJsonDecoder).uf = function () {
    var value = this.g13_1.l15();
    if (!value.equals(toLong(value.b1()))) {
      this.g13_1.n16("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.b1();
  };
  protoOf(StreamingJsonDecoder).vf = function () {
    return this.g13_1.l15();
  };
  protoOf(StreamingJsonDecoder).wf = function () {
    var tmp0 = this.g13_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.s17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.n16("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.e13_1.x12_1.u14_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g13_1, result);
  };
  protoOf(StreamingJsonDecoder).xf = function () {
    var tmp;
    if (this.k13_1.m14_1) {
      tmp = this.g13_1.m19();
    } else {
      tmp = this.g13_1.r17();
    }
    return tmp;
  };
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.b17_1.q15();
    $this.tg(discriminator);
    $this.b17_1.t15(_Char___init__impl__6a9atx(58));
    $this.b17_1.s15();
    $this.tg(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.b17_1 = composer;
    this.c17_1 = json;
    this.d17_1 = mode;
    this.e17_1 = modeReuseCache;
    this.f17_1 = this.c17_1.ig();
    this.g17_1 = this.c17_1.x12_1;
    this.h17_1 = false;
    this.i17_1 = null;
    this.j17_1 = null;
    var i = this.d17_1.g2_1;
    if (!(this.e17_1 == null)) {
      if (!(this.e17_1[i] === null) || !(this.e17_1[i] === this)) {
        this.e17_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).n19 = function () {
    return this.c17_1;
  };
  protoOf(StreamingJsonEncoder).ig = function () {
    return this.f17_1;
  };
  protoOf(StreamingJsonEncoder).dh = function (descriptor, index) {
    return this.g17_1.k14_1;
  };
  protoOf(StreamingJsonEncoder).yg = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.n19().x12_1.s14_1) {
        serializer.qe(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.n19().x12_1.a15_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.n19().x12_1.a15_1.g2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.pe().ef();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.pe(), this.n19()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.pe()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.pe().ef());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.pe().df();
        this.i17_1 = baseClassDiscriminator;
        this.j17_1 = serialName;
      }
      actualSerializer.qe(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).ag = function (descriptor) {
    var newMode = switchMode(this.c17_1, descriptor);
    if (!(newMode.s19_1 === _Char___init__impl__6a9atx(0))) {
      this.b17_1.t15(newMode.s19_1);
      this.b17_1.o15();
    }
    var discriminator = this.i17_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.j17_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.df() : tmp0_elvis_lhs);
      this.i17_1 = null;
      this.j17_1 = null;
    }
    if (this.d17_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.e17_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.g2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.b17_1, this.c17_1, newMode, this.e17_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).bg = function (descriptor) {
    if (!(this.d17_1.t19_1 === _Char___init__impl__6a9atx(0))) {
      this.b17_1.p15();
      this.b17_1.r15();
      this.b17_1.t15(this.d17_1.t19_1);
    }
  };
  protoOf(StreamingJsonEncoder).mg = function (descriptor, index) {
    switch (this.d17_1.g2_1) {
      case 1:
        if (!this.b17_1.n15_1) {
          this.b17_1.t15(_Char___init__impl__6a9atx(44));
        }

        this.b17_1.q15();
        break;
      case 2:
        if (!this.b17_1.n15_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.b17_1.t15(_Char___init__impl__6a9atx(44));
            this.b17_1.q15();
            tmp_0 = true;
          } else {
            this.b17_1.t15(_Char___init__impl__6a9atx(58));
            this.b17_1.s15();
            tmp_0 = false;
          }
          tmp.h17_1 = tmp_0;
        } else {
          this.h17_1 = true;
          this.b17_1.q15();
        }

        break;
      case 3:
        if (index === 0)
          this.h17_1 = true;
        if (index === 1) {
          this.b17_1.t15(_Char___init__impl__6a9atx(44));
          this.b17_1.s15();
          this.h17_1 = false;
        }

        break;
      default:
        if (!this.b17_1.n15_1) {
          this.b17_1.t15(_Char___init__impl__6a9atx(44));
        }

        this.b17_1.q15();
        this.tg(getJsonElementName(descriptor, this.c17_1, index));
        this.b17_1.t15(_Char___init__impl__6a9atx(58));
        this.b17_1.s15();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).zg = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.g17_1.p14_1) {
      protoOf(AbstractEncoder).zg.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).og = function () {
    this.b17_1.v15('null');
  };
  protoOf(StreamingJsonEncoder).pg = function (value) {
    if (this.h17_1) {
      this.tg(value.toString());
    } else {
      this.b17_1.b16(value);
    }
  };
  protoOf(StreamingJsonEncoder).qg = function (value) {
    if (this.h17_1) {
      this.tg(value.toString());
    } else {
      this.b17_1.y15(value);
    }
  };
  protoOf(StreamingJsonEncoder).rg = function (value) {
    if (this.h17_1) {
      this.tg(value.toString());
    } else {
      this.b17_1.a16(value);
    }
  };
  protoOf(StreamingJsonEncoder).sg = function (value) {
    if (this.h17_1) {
      this.tg(value.toString());
    } else {
      this.b17_1.x15(value);
    }
    if (!this.g17_1.u14_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.b17_1.m15_1));
    }
  };
  protoOf(StreamingJsonEncoder).tg = function (value) {
    return this.b17_1.c16(value);
  };
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.l7(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.aa(value, lastPos, i);
          _this__u8e3s4.k7(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.aa(value, lastPos, value.length);
    else
      _this__u8e3s4.k7(value);
    _this__u8e3s4.l7(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.c1a(tag), toString($this.d1a()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.y19_1 = json;
    this.z19_1 = value;
    this.a1a_1 = polymorphicDiscriminator;
    this.b1a_1 = this.n19().x12_1;
  }
  protoOf(AbstractJsonTreeDecoder).n19 = function () {
    return this.y19_1;
  };
  protoOf(AbstractJsonTreeDecoder).v1 = function () {
    return this.z19_1;
  };
  protoOf(AbstractJsonTreeDecoder).ig = function () {
    return this.n19().ig();
  };
  protoOf(AbstractJsonTreeDecoder).d1a = function () {
    var tmp0_safe_receiver = this.hl();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.e1a(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.v1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).c1a = function (currentTag) {
    return this.jl() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).o19 = function () {
    return this.d1a();
  };
  protoOf(AbstractJsonTreeDecoder).zf = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.n19().x12_1.s14_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.re(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.pe(), this.n19());
      var tmp0 = this.o19();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.pe().df();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).v8();
        var tmp_1 = getKClassFromExpression(tmp0).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.jl();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.za(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.n19(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).il = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).ag = function (descriptor) {
    var currentObject = this.d1a();
    var tmp0_subject = descriptor.ef();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.n19();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.df();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).v8();
        var tmp_3 = getKClassFromExpression(currentObject).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.jl();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.n19();
        var keyDescriptor = carrierDescriptor(descriptor.lf(0), this_0.ig());
        var keyKind = keyDescriptor.ef();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.n19();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.df();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).v8();
            var tmp_8 = getKClassFromExpression(currentObject).v8();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.jl();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.x12_1.n14_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.n19();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.df();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).v8();
              var tmp_11 = getKClassFromExpression(currentObject).v8();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.jl();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.n19();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.df();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).v8();
          var tmp_14 = getKClassFromExpression(currentObject).v8();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.jl();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.a1a_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).bg = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).rf = function () {
    var tmp = this.d1a();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).f1a = function (tag) {
    return !(this.e1a(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).ll = function (tag) {
    return this.f1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v8();
        var tmp_0 = getKClassFromExpression(value).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.c1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.stub_for_inlining' call
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).ml = function (tag) {
    return this.g1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v8();
        var tmp_0 = getKClassFromExpression(value).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.c1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).nl = function (tag) {
    return this.h1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v8();
        var tmp_0 = getKClassFromExpression(value).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.c1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).ol = function (tag) {
    return this.i1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e1a(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v8();
        var tmp_0 = getKClassFromExpression(value).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.c1a(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.n19().x12_1.u14_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.d1a()));
  };
  protoOf(AbstractJsonTreeDecoder).pl = function (tag) {
    return this.j1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k1a = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.e1a(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).v8();
      var tmp_0 = getKClassFromExpression(value).v8();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.c1a(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.c1a(tag), toString(this.d1a()));
    if (!value_0.f15_1 && !this.n19().x12_1.m14_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.c1a(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.d1a()));
    }
    return value_0.h15_1;
  };
  protoOf(AbstractJsonTreeDecoder).ql = function (tag) {
    return this.k1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.n19();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.mf(index);
      var elementDescriptor = descriptor.lf(index);
      var tmp;
      if (isOptional && !elementDescriptor.xe()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.e1a(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ef(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.xe()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.e1a(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.e1a(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.x12_1.p14_1 && elementDescriptor.xe();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.u1a_1 = (!$this.n19().x12_1.p14_1 && !descriptor.mf(index) && descriptor.lf(index).xe());
    return $this.u1a_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.r1a_1 = value;
    this.s1a_1 = polyDescriptor;
    this.t1a_1 = 0;
    this.u1a_1 = false;
  }
  protoOf(JsonTreeDecoder).v1 = function () {
    return this.r1a_1;
  };
  protoOf(JsonTreeDecoder).kg = function (descriptor) {
    while (this.t1a_1 < descriptor.gf()) {
      var _unary__edvuaz = this.t1a_1;
      this.t1a_1 = _unary__edvuaz + 1 | 0;
      var name = this.cl(descriptor, _unary__edvuaz);
      var index = this.t1a_1 - 1 | 0;
      this.u1a_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.v1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).w1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.b1a_1.r14_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).rf = function () {
    return !this.u1a_1 && protoOf(AbstractJsonTreeDecoder).rf.call(this);
  };
  protoOf(JsonTreeDecoder).dl = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.n19());
    var baseName = descriptor.if(index);
    if (strategy == null) {
      if (!this.b1a_1.v14_1)
        return baseName;
      if (this.v1().z1().r1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.n19(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.v1().z1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.y1(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.r16(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).e1a = function (tag) {
    return getValue(this.v1(), tag);
  };
  protoOf(JsonTreeDecoder).ag = function (descriptor) {
    if (descriptor === this.s1a_1) {
      var tmp = this.n19();
      var tmp1 = this.d1a();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.s1a_1.df();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).v8();
        var tmp_1 = getKClassFromExpression(tmp1).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.jl();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.a1a_1, this.s1a_1);
    }
    return protoOf(AbstractJsonTreeDecoder).ag.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).bg = function (descriptor) {
    var tmp;
    if (this.b1a_1.l14_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ef();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.n19());
    var tmp_1;
    if (strategy == null && !this.b1a_1.v14_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.n19(), descriptor).z1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.n19()).d19(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.v1().z1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.r1(key) && !(key === this.a1a_1)) {
        throw UnknownKeyException(key, this.v1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.b1b_1 = value;
    this.c1b_1 = this.b1b_1.l();
    this.d1b_1 = -1;
  }
  protoOf(JsonTreeListDecoder).v1 = function () {
    return this.b1b_1;
  };
  protoOf(JsonTreeListDecoder).dl = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).e1a = function (tag) {
    return this.b1b_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).kg = function (descriptor) {
    while (this.d1b_1 < (this.c1b_1 - 1 | 0)) {
      this.d1b_1 = this.d1b_1 + 1 | 0;
      return this.d1b_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.o1b_1 = value;
    this.p1b_1 = toList(this.o1b_1.z1());
    this.q1b_1 = imul(this.p1b_1.l(), 2);
    this.r1b_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).v1 = function () {
    return this.o1b_1;
  };
  protoOf(JsonTreeMapDecoder).dl = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.p1b_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).kg = function (descriptor) {
    while (this.r1b_1 < (this.q1b_1 - 1 | 0)) {
      this.r1b_1 = this.r1b_1 + 1 | 0;
      return this.r1b_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).e1a = function (tag) {
    return (this.r1b_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.o1b_1, tag);
  };
  protoOf(JsonTreeMapDecoder).bg = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.pe())).zf(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.s19_1 = begin;
    this.t19_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ef();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.lf(0), _this__u8e3s4.ig());
          var keyKind = keyDescriptor.ef();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.x12_1.n14_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.ef(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.ff()) {
      tmp = carrierDescriptor(_this__u8e3s4.lf(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.s1b(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.s1b(lastPosition, currentPosition);
    var result = $this.p13_1.toString();
    $this.p13_1.ea(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.o13_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.o13_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.t1b(), $this.m13_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.u1b(currentPosition);
    if (currentPosition === -1) {
      $this.n16('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.t1b();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.t1b(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.n16("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.p13_1.l7(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.m13_1 = startPos;
      $this.v1b();
      if (($this.m13_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.n16('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.m13_1);
    }
    $this.p13_1.l7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.n16("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.u1b(start);
    if (current >= charSequenceLength($this.t1b()) || current === -1) {
      $this.n16('EOF');
    }
    var tmp = $this.t1b();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.n16("Expected valid boolean literal prefix, but had '" + $this.s17() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.t1b()) - current | 0) < literalSuffix.length) {
      $this.n16('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.t1b(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.n16("Expected valid boolean literal prefix, but had '" + $this.s17() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.m13_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.x2();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.x2();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.m13_1 = 0;
    this.n13_1 = new JsonPath();
    this.o13_1 = null;
    this.p13_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).v1b = function () {
  };
  protoOf(AbstractJsonLexer).g19 = function () {
    var current = this.w1b();
    var source = this.t1b();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.m13_1 = this.m13_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).x1b = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).q13 = function () {
    var nextToken = this.u17();
    if (!(nextToken === 10)) {
      this.n16('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.t1b(), this.m13_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).o17 = function (expected) {
    var token = this.u17();
    if (!(token === expected)) {
      this.y1b(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).z1b = function (expected) {
    if (this.m13_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.m13_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.m13_1 = this.m13_1 - 1 | 0;
          tmp$ret$1 = this.s17();
          break $l$block;
        }finally {
          this.m13_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.m16("Expected string literal but 'null' literal was found", this.m13_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.y1b(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).a1c = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.m13_1 - 1 | 0 : this.m13_1;
    var s = this.m13_1 === charSequenceLength(this.t1b()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.t1b(), position));
    this.n16('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).y1b = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.a1c(expectedToken, wasConsumed) : $super.a1c.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).p17 = function () {
    var source = this.t1b();
    var cpos = this.m13_1;
    $l$loop_0: while (true) {
      cpos = this.u1b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.m13_1 = cpos;
      return charToTokenClass(ch);
    }
    this.m13_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).h19 = function (doConsume) {
    var current = this.w1b();
    current = this.u1b(current);
    var len = charSequenceLength(this.t1b()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.t1b(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.t1b(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.m13_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).u19 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.h19(doConsume) : $super.h19.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).i19 = function (isLenient) {
    var token = this.p17();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.s17();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.r17();
    }
    var string = tmp;
    this.o13_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).b1c = function () {
    this.o13_1 = null;
  };
  protoOf(AbstractJsonLexer).c1c = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.t1b();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).r17 = function () {
    if (!(this.o13_1 == null)) {
      return takePeeked(this);
    }
    return this.l19();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.u1b(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.n16('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.s1b(lastPosition, currentPosition);
          currentPosition = this.u1b(currentPosition);
          if (currentPosition === -1) {
            this.n16('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.c1c(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.m13_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).m19 = function () {
    var result = this.s17();
    if (result === 'null' && wasUnquotedString(this)) {
      this.n16("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).s17 = function () {
    if (!(this.o13_1 == null)) {
      return takePeeked(this);
    }
    var current = this.w1b();
    if (current >= charSequenceLength(this.t1b()) || current === -1) {
      this.n16('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.t1b(), current));
    if (token === 1) {
      return this.r17();
    }
    if (!(token === 0)) {
      this.n16('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.t1b(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.t1b(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.t1b())) {
        usedAppend = true;
        this.s1b(this.m13_1, current);
        var eof = this.u1b(current);
        if (eof === -1) {
          this.m13_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.c1c(this.m13_1, current);
    } else {
      tmp = decodedString(this, this.m13_1, current);
    }
    var result = tmp;
    this.m13_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).s1b = function (fromIndex, toIndex) {
    this.p13_1.aa(this.t1b(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).k19 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.p17();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.s17();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.p17();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.s17();
        else
          this.l19();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.m13_1, 'found ] instead of } at path: ' + this.n13_1.toString(), this.t1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.m13_1, 'found } instead of ] at path: ' + this.n13_1.toString(), this.t1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.n16('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.u17();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.t1b()) + "', currentPosition=" + this.m13_1 + ')';
  };
  protoOf(AbstractJsonLexer).j19 = function (key) {
    var processed = this.c1c(0, this.m13_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.m16("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).m16 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.n13_1.a17() + hintMessage, this.t1b());
  };
  protoOf(AbstractJsonLexer).n16 = function (message, position, hint, $super) {
    position = position === VOID ? this.m13_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.m16(message, position, hint) : $super.m16.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).l15 = function () {
    var current = this.w1b();
    current = this.u1b(current);
    if (current >= charSequenceLength(this.t1b()) || current === -1) {
      this.n16('EOF');
    }
    var tmp;
    if (charSequenceGet(this.t1b(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.t1b())) {
        this.n16('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.t1b()))) {
      var ch = charSequenceGet(this.t1b(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.n16('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.n16("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.n16("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.n16("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.n16("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.o2(toLong(10)).m2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.o2(toLong(10)).n2(toLong(digit));
      if (accumulator.z(new Long(0, 0)) > 0) {
        this.n16('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.n16('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.n16('EOF');
      }
      if (!(charSequenceGet(this.t1b(), current) === _Char___init__impl__6a9atx(34))) {
        this.n16('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.m13_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.x2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).x2() || doubleAccumulator < (new Long(0, -2147483648)).x2()) {
        this.n16('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.n16("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.r2();
    } else {
      this.n16('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).v19 = function () {
    var current = this.w1b();
    if (current === charSequenceLength(this.t1b())) {
      this.n16('EOF');
    }
    var tmp;
    if (charSequenceGet(this.t1b(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.m13_1 === charSequenceLength(this.t1b())) {
        this.n16('EOF');
      }
      if (!(charSequenceGet(this.t1b(), this.m13_1) === _Char___init__impl__6a9atx(34))) {
        this.n16('Expected closing quotation mark');
      }
      this.m13_1 = this.m13_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().e1c_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().d1c_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.d1c_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.e1c_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.d1c_1 = charArray(117);
    this.e1c_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source) {
    StringJsonLexer.call(this, source);
  }
  protoOf(StringJsonLexerWithComments).u17 = function () {
    var source = this.t1b();
    var cpos = this.w1b();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.m13_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).q17 = function () {
    var current = this.w1b();
    if (current >= this.t1b().length || current === -1)
      return false;
    return this.x1b(charSequenceGet(this.t1b(), current));
  };
  protoOf(StringJsonLexerWithComments).f19 = function (expected) {
    var source = this.t1b();
    var current = this.w1b();
    if (current >= source.length || current === -1) {
      this.m13_1 = -1;
      this.z1b(expected);
    }
    var c = charSequenceGet(source, current);
    this.m13_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.z1b(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).p17 = function () {
    var source = this.t1b();
    var cpos = this.w1b();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.m13_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).w1b = function () {
    var current = this.m13_1;
    if (current === -1)
      return current;
    var source = this.t1b();
    $l$loop_1: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charSequenceGet(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.m13_1 = source.length;
            this.n16('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.m13_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.o1c_1 = source;
  }
  protoOf(StringJsonLexer).t1b = function () {
    return this.o1c_1;
  };
  protoOf(StringJsonLexer).u1b = function (position) {
    return position < this.t1b().length ? position : -1;
  };
  protoOf(StringJsonLexer).u17 = function () {
    var source = this.t1b();
    var cpos = this.m13_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.m13_1 = cpos;
      return charToTokenClass(c);
    }
    this.m13_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).q17 = function () {
    var current = this.m13_1;
    if (current === -1)
      return false;
    var source = this.t1b();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.m13_1 = current;
      return this.x1b(c);
    }
    this.m13_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).w1b = function () {
    var current = this.m13_1;
    if (current === -1)
      return current;
    var source = this.t1b();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.m13_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).f19 = function (expected) {
    if (this.m13_1 === -1) {
      this.z1b(expected);
    }
    var source = this.t1b();
    var cpos = this.m13_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.m13_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.z1b(expected);
    }
    this.m13_1 = -1;
    this.z1b(expected);
  };
  protoOf(StringJsonLexer).l19 = function () {
    this.f19(_Char___init__impl__6a9atx(34));
    var current = this.m13_1;
    var closingQuote = indexOf_0(this.t1b(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.s17();
      this.a1c(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.t1b(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.t1b(), this.m13_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.m13_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.t1b().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).p19 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.m13_1;
    try {
      if (!(this.u17() === 6))
        return null;
      var firstKey = this.i19(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.b1c();
      if (!(this.u17() === 5))
        return null;
      return this.i19(isLenient);
    }finally {
      this.m13_1 = positionSnapshot;
      this.b1c();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.x12_1.z14_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.z12_1;
  }
  function JsonToStringWriter() {
    this.c13_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).z15 = function (value) {
    this.c13_1.da(value);
  };
  protoOf(JsonToStringWriter).u15 = function (char) {
    this.c13_1.l7(char);
  };
  protoOf(JsonToStringWriter).w15 = function (text) {
    this.c13_1.k7(text);
  };
  protoOf(JsonToStringWriter).d16 = function (text) {
    printQuoted(this.c13_1, text);
  };
  protoOf(JsonToStringWriter).d13 = function () {
    this.c13_1.fa();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.c13_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).fm = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

