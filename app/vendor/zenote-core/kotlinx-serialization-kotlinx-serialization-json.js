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
  var protoOf = kotlin_kotlin.$_$.n5;
  var initMetadataForObject = kotlin_kotlin.$_$.c5;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.w1;
  var initMetadataForClass = kotlin_kotlin.$_$.x4;
  var toString = kotlin_kotlin.$_$.q5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var charSequenceLength = kotlin_kotlin.$_$.m4;
  var charSequenceGet = kotlin_kotlin.$_$.l4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.l1;
  var equals = kotlin_kotlin.$_$.q4;
  var toString_0 = kotlin_kotlin.$_$.i8;
  var Enum = kotlin_kotlin.$_$.r7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.y4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var hashCode = kotlin_kotlin.$_$.w4;
  var joinToString = kotlin_kotlin.$_$.y2;
  var THROW_CCE = kotlin_kotlin.$_$.w7;
  var KtMap = kotlin_kotlin.$_$.b2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.s4;
  var getStringHashCode = kotlin_kotlin.$_$.v4;
  var KtList = kotlin_kotlin.$_$.a2;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var numberRangeToNumber = kotlin_kotlin.$_$.h5;
  var ClosedRange = kotlin_kotlin.$_$.s5;
  var isInterface = kotlin_kotlin.$_$.f5;
  var contains = kotlin_kotlin.$_$.v5;
  var toDouble = kotlin_kotlin.$_$.g7;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.t1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong = kotlin_kotlin.$_$.p5;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.i4;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.n4;
  var coerceAtLeast = kotlin_kotlin.$_$.t5;
  var coerceAtMost = kotlin_kotlin.$_$.u5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var singleOrNull = kotlin_kotlin.$_$.s3;
  var emptyMap = kotlin_kotlin.$_$.q2;
  var getValue = kotlin_kotlin.$_$.u2;
  var fillArrayVal = kotlin_kotlin.$_$.r4;
  var copyOf = kotlin_kotlin.$_$.k2;
  var copyOf_0 = kotlin_kotlin.$_$.l2;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.p7;
  var invoke = kotlin_kotlin.$_$.c8;
  var CoroutineImpl = kotlin_kotlin.$_$.e4;
  var DeepRecursiveScope = kotlin_kotlin.$_$.q7;
  var Unit = kotlin_kotlin.$_$.y7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d4;
  var initMetadataForLambda = kotlin_kotlin.$_$.b5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.z4;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b1;
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
  var ensureNotNull = kotlin_kotlin.$_$.b8;
  var substringBefore = kotlin_kotlin.$_$.e7;
  var removeSuffix = kotlin_kotlin.$_$.w6;
  var substringAfter = kotlin_kotlin.$_$.c7;
  var contains_0 = kotlin_kotlin.$_$.h6;
  var plus = kotlin_kotlin.$_$.h8;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.t7;
  var isFinite = kotlin_kotlin.$_$.d8;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var objectCreate = kotlin_kotlin.$_$.m5;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.g8;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n1;
  var numberToChar = kotlin_kotlin.$_$.i5;
  var equals_0 = kotlin_kotlin.$_$.i6;
  var toString_1 = kotlin_kotlin.$_$.o1;
  var toByte = kotlin_kotlin.$_$.o5;
  var startsWith = kotlin_kotlin.$_$.a7;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var emptySet = kotlin_kotlin.$_$.r2;
  var plus_0 = kotlin_kotlin.$_$.l3;
  var toInt = kotlin_kotlin.$_$.i7;
  var toList = kotlin_kotlin.$_$.x3;
  var enumEntries = kotlin_kotlin.$_$.f4;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var last = kotlin_kotlin.$_$.d3;
  var removeLast = kotlin_kotlin.$_$.p3;
  var lastIndexOf = kotlin_kotlin.$_$.s6;
  var Long = kotlin_kotlin.$_$.u7;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.m1;
  var numberToLong = kotlin_kotlin.$_$.l5;
  var charArray = kotlin_kotlin.$_$.k4;
  var indexOf = kotlin_kotlin.$_$.k6;
  var indexOf_0 = kotlin_kotlin.$_$.l6;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
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
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [Encoder, CompositeEncoder, AbstractEncoder]);
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
    this.o12_1 = configuration;
    this.p12_1 = serializersModule;
    this.q12_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).cg = function () {
    return this.p12_1;
  };
  protoOf(Json).r12 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.u12();
    }
  };
  protoOf(Json).s12 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.je(), null);
    var result = input.tf(deserializer);
    lexer.h13();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.a14();
    return new JsonImpl(conf, builder.z13_1);
  }
  function JsonBuilder(json) {
    this.i13_1 = json.o12_1.b14_1;
    this.j13_1 = json.o12_1.g14_1;
    this.k13_1 = json.o12_1.c14_1;
    this.l13_1 = json.o12_1.d14_1;
    this.m13_1 = json.o12_1.f14_1;
    this.n13_1 = json.o12_1.h14_1;
    this.o13_1 = json.o12_1.i14_1;
    this.p13_1 = json.o12_1.k14_1;
    this.q13_1 = json.o12_1.r14_1;
    this.r13_1 = json.o12_1.m14_1;
    this.s13_1 = json.o12_1.n14_1;
    this.t13_1 = json.o12_1.o14_1;
    this.u13_1 = json.o12_1.p14_1;
    this.v13_1 = json.o12_1.q14_1;
    this.w13_1 = json.o12_1.l14_1;
    this.x13_1 = json.o12_1.e14_1;
    this.y13_1 = json.o12_1.j14_1;
    this.z13_1 = json.cg();
  }
  protoOf(JsonBuilder).a14 = function () {
    if (this.y13_1) {
      // Inline function 'kotlin.require' call
      if (!(this.p13_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.q13_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.m13_1) {
      // Inline function 'kotlin.require' call
      if (!(this.n13_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.n13_1 === '    ')) {
      var tmp3 = this.n13_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.n13_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.i13_1, this.k13_1, this.l13_1, this.x13_1, this.m13_1, this.j13_1, this.n13_1, this.o13_1, this.y13_1, this.p13_1, this.w13_1, this.r13_1, this.s13_1, this.t13_1, this.u13_1, this.v13_1, this.q13_1);
  };
  function validateConfiguration($this) {
    if (equals($this.cg(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.o12_1.j14_1, $this.o12_1.k14_1);
    $this.cg().ol(collector);
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
    this.b14_1 = encodeDefaults;
    this.c14_1 = ignoreUnknownKeys;
    this.d14_1 = isLenient;
    this.e14_1 = allowStructuredMapKeys;
    this.f14_1 = prettyPrint;
    this.g14_1 = explicitNulls;
    this.h14_1 = prettyPrintIndent;
    this.i14_1 = coerceInputValues;
    this.j14_1 = useArrayPolymorphism;
    this.k14_1 = classDiscriminator;
    this.l14_1 = allowSpecialFloatingPointValues;
    this.m14_1 = useAlternativeNames;
    this.n14_1 = namingStrategy;
    this.o14_1 = decodeEnumsCaseInsensitive;
    this.p14_1 = allowTrailingComma;
    this.q14_1 = allowComments;
    this.r14_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.b14_1 + ', ignoreUnknownKeys=' + this.c14_1 + ', isLenient=' + this.d14_1 + ', ' + ('allowStructuredMapKeys=' + this.e14_1 + ', prettyPrint=' + this.f14_1 + ', explicitNulls=' + this.g14_1 + ', ') + ("prettyPrintIndent='" + this.h14_1 + "', coerceInputValues=" + this.i14_1 + ', useArrayPolymorphism=' + this.j14_1 + ', ') + ("classDiscriminator='" + this.k14_1 + "', allowSpecialFloatingPointValues=" + this.l14_1 + ', ') + ('useAlternativeNames=' + this.m14_1 + ', namingStrategy=' + toString_0(this.n14_1) + ', decodeEnumsCaseInsensitive=' + this.o14_1 + ', ') + ('allowTrailingComma=' + this.p14_1 + ', allowComments=' + this.q14_1 + ', classDiscriminatorMode=' + this.r14_1.toString() + ')');
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
    this.s14_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.s14_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.s14_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.s14_1.a2();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).t14 = function (key) {
    return this.s14_1.w1(key);
  };
  protoOf(JsonObject).w1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.t14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).u14 = function (key) {
    return this.s14_1.y1(key);
  };
  protoOf(JsonObject).y1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.u14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).j = function () {
    return this.s14_1.j();
  };
  protoOf(JsonObject).a2 = function () {
    return this.s14_1.a2();
  };
  protoOf(JsonObject).z1 = function () {
    return this.s14_1.z1();
  };
  protoOf(JsonObject).l = function () {
    return this.s14_1.l();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.v14_1 = 'null';
  }
  protoOf(JsonNull).w14 = function () {
    return this.v14_1;
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
    return this.w14();
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
    this.x14_1 = isString;
    this.y14_1 = coerceToInlineType;
    this.z14_1 = toString(body);
    if (!(this.y14_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.y14_1.ze()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).w14 = function () {
    return this.z14_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.x14_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.z14_1);
      tmp = this_0.toString();
    } else {
      tmp = this.z14_1;
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
    if (!(this.x14_1 === other.x14_1))
      return false;
    if (!(this.z14_1 === other.z14_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.x14_1);
    result = imul(31, result) + getStringHashCode(this.z14_1) | 0;
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
    this.a15_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.a15_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.a15_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.a15_1, ',', '[', ']');
  };
  protoOf(JsonArray).k = function (index) {
    return this.a15_1.k(index);
  };
  protoOf(JsonArray).b15 = function (element) {
    return this.a15_1.s1(element);
  };
  protoOf(JsonArray).s1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.b15(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).j = function () {
    return this.a15_1.j();
  };
  protoOf(JsonArray).g = function () {
    return this.a15_1.g();
  };
  protoOf(JsonArray).q = function (index) {
    return this.a15_1.q(index);
  };
  protoOf(JsonArray).l = function () {
    return this.a15_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.w14());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.w14())).c15();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.w14() + ' is not an Int');
    return result.b1();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.w14())).c15();
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
    return toDouble(_this__u8e3s4.w14());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.w14();
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
    this.d15_1 = writer;
    this.e15_1 = true;
  }
  protoOf(Composer).f15 = function () {
    this.e15_1 = true;
  };
  protoOf(Composer).g15 = function () {
    return Unit_instance;
  };
  protoOf(Composer).h15 = function () {
    this.e15_1 = false;
  };
  protoOf(Composer).i15 = function () {
    this.e15_1 = false;
  };
  protoOf(Composer).j15 = function () {
    return Unit_instance;
  };
  protoOf(Composer).k15 = function (v) {
    return this.d15_1.l15(v);
  };
  protoOf(Composer).m15 = function (v) {
    return this.d15_1.n15(v);
  };
  protoOf(Composer).o15 = function (v) {
    return this.d15_1.n15(v.toString());
  };
  protoOf(Composer).p15 = function (v) {
    return this.d15_1.q15(toLong(v));
  };
  protoOf(Composer).r15 = function (v) {
    return this.d15_1.q15(v);
  };
  protoOf(Composer).s15 = function (v) {
    return this.d15_1.n15(v.toString());
  };
  protoOf(Composer).t15 = function (value) {
    return this.d15_1.u15(value);
  };
  function Composer_0(sb, json) {
    return json.o12_1.f14_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.x15_1 = json;
    this.y15_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).f15 = function () {
    this.e15_1 = true;
    this.y15_1 = this.y15_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).g15 = function () {
    this.y15_1 = this.y15_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).h15 = function () {
    this.e15_1 = false;
    this.m15('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.y15_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.m15(this.x15_1.o12_1.h14_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).i15 = function () {
    if (this.e15_1)
      this.e15_1 = false;
    else {
      this.h15();
    }
  };
  protoOf(ComposerWithPrettyPrint).j15 = function () {
    this.k15(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.a16_1 = (!descriptor.gf(index) && descriptor.ff(index).re());
    return $this.a16_1;
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
    tmp.z15_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.a16_1 = false;
  }
  protoOf(JsonElementMarker).b16 = function (index) {
    this.z15_1.zi(index);
  };
  protoOf(JsonElementMarker).c16 = function () {
    return this.z15_1.aj();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.d16('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.d13_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.e16('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.xe() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ye().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.df(name);
    if (!(index === -3))
      return index;
    if (!json.o12_1.m14_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.cf(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.ye(), CLASS_getInstance()) ? json.o12_1.n14_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.g16(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.o12_1.o14_1 && equals(descriptor.ye(), ENUM_getInstance());
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
    return tmp.g16(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.af();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.ef(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h16_1;
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
          tmp_0 = _this__u8e3s4.cf(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.i16(_this__u8e3s4, i, _this__u8e3s4.cf(i));
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
    var entity = equals($this_buildDeserializationNamesMap.ye(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).w1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.cf(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.cf(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
      var tmp_0 = $this_serializationNamesIndices.af();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.cf(tmp_2);
        tmp_1[tmp_2] = $strategy.i16($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.l16_1, 2);
    $this.j16_1 = copyOf($this.j16_1, newSize);
    $this.k16_1 = copyOf_0($this.k16_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.j16_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.k16_1 = tmp_2;
    this.l16_1 = -1;
  }
  protoOf(JsonPath).m16 = function (sd) {
    this.l16_1 = this.l16_1 + 1 | 0;
    var depth = this.l16_1;
    if (depth === this.j16_1.length) {
      resize(this);
    }
    this.j16_1[depth] = sd;
  };
  protoOf(JsonPath).n16 = function (index) {
    this.k16_1[this.l16_1] = index;
  };
  protoOf(JsonPath).o16 = function (key) {
    var tmp;
    if (!(this.k16_1[this.l16_1] === -2)) {
      this.l16_1 = this.l16_1 + 1 | 0;
      tmp = this.l16_1 === this.j16_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.j16_1[this.l16_1] = key;
    this.k16_1[this.l16_1] = -2;
  };
  protoOf(JsonPath).p16 = function () {
    if (this.k16_1[this.l16_1] === -2) {
      this.j16_1[this.l16_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).q16 = function () {
    var depth = this.l16_1;
    if (this.k16_1[depth] === -2) {
      this.k16_1[depth] = -1;
      this.l16_1 = this.l16_1 - 1 | 0;
    }
    if (!(this.l16_1 === -1)) {
      this.l16_1 = this.l16_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).r16 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.k7('$');
    // Inline function 'kotlin.repeat' call
    var times = this.l16_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.j16_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ye(), LIST_getInstance())) {
            if (!(this.k16_1[index] === -1)) {
              this_0.k7('[');
              this_0.ca(this.k16_1[index]);
              this_0.k7(']');
            }
          } else {
            var idx = this.k16_1[index];
            if (idx >= 0) {
              this_0.k7('.');
              this_0.k7(element.cf(idx));
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
    return this.r16();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.sg(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.b17_1.f17(6);
    if ($this.b17_1.g17() === 4) {
      $this.b17_1.e16('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.b17_1.h17()) {
      var key = $this.c17_1 ? $this.b17_1.j17() : $this.b17_1.i17();
      $this.b17_1.f17(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.k17();
      // Inline function 'kotlin.collections.set' call
      result.b2(key, element);
      lastToken = $this.b17_1.l17();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.b17_1.e16('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.b17_1.f17(7);
    } else if (lastToken === 4) {
      if (!$this.d17_1) {
        invalidTrailingComma($this.b17_1);
      }
      $this.b17_1.f17(7);
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
    var lastToken = $this.b17_1.l17();
    if ($this.b17_1.g17() === 4) {
      $this.b17_1.e16('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.b17_1.h17()) {
      var element = $this.k17();
      result.e(element);
      lastToken = $this.b17_1.l17();
      if (!(lastToken === 4)) {
        var tmp0 = $this.b17_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.d13_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.e16(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.b17_1.f17(9);
    } else if (lastToken === 4) {
      if (!$this.d17_1) {
        invalidTrailingComma($this.b17_1, 'array');
      }
      $this.b17_1.f17(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.c17_1 || !isString) {
      tmp = $this.b17_1.j17();
    } else {
      tmp = $this.b17_1.i17();
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
    this.j18_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).o18 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.p18($this$DeepRecursiveFunction, it, $completion);
    tmp.y7_1 = Unit_instance;
    tmp.z7_1 = null;
    return tmp.e8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).k8 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.o18(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e8 = function () {
    var suspendResult = this.y7_1;
    $sm: do
      try {
        var tmp = this.w7_1;
        switch (tmp) {
          case 0:
            this.x7_1 = 3;
            this.m18_1 = this.j18_1.b17_1.g17();
            if (this.m18_1 === 1) {
              this.n18_1 = readValue(this.j18_1, true);
              this.w7_1 = 2;
              continue $sm;
            } else {
              if (this.m18_1 === 0) {
                this.n18_1 = readValue(this.j18_1, false);
                this.w7_1 = 2;
                continue $sm;
              } else {
                if (this.m18_1 === 6) {
                  this.w7_1 = 1;
                  suspendResult = readObject_0(this.k18_1, this.j18_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.m18_1 === 8) {
                    this.n18_1 = readArray(this.j18_1);
                    this.w7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.j18_1.b17_1.e16("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.n18_1 = suspendResult;
            this.w7_1 = 2;
            continue $sm;
          case 2:
            return this.n18_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).p18 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.j18_1, completion);
    i.k18_1 = $this$DeepRecursiveFunction;
    i.l18_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.o18($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u17_1 = _this__u8e3s4;
    this.v17_1 = _this__u8e3s4_0;
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
            tmp_0.w17_1 = this.u17_1;
            this.x17_1 = this.w17_1;
            this.y17_1 = this.x17_1.b17_1.f17(6);
            if (this.x17_1.b17_1.g17() === 4) {
              this.x17_1.b17_1.e16('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.z17_1 = LinkedHashMap_init_$Create$();
            this.w7_1 = 1;
            continue $sm;
          case 1:
            if (!this.x17_1.b17_1.h17()) {
              this.w7_1 = 4;
              continue $sm;
            }

            this.a18_1 = this.x17_1.c17_1 ? this.x17_1.b17_1.j17() : this.x17_1.b17_1.i17();
            this.x17_1.b17_1.f17(5);
            this.w7_1 = 2;
            suspendResult = this.v17_1.wd(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.z17_1;
            var key = this.a18_1;
            tmp0.b2(key, element);
            this.y17_1 = this.x17_1.b17_1.l17();
            var tmp0_subject = this.y17_1;
            if (tmp0_subject === 4) {
              this.w7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.w7_1 = 4;
                continue $sm;
              } else {
                this.x17_1.b17_1.e16('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.w7_1 = 1;
            continue $sm;
          case 4:
            if (this.y17_1 === 6) {
              this.x17_1.b17_1.f17(7);
            } else if (this.y17_1 === 4) {
              if (!this.x17_1.d17_1) {
                invalidTrailingComma(this.x17_1.b17_1);
              }
              this.x17_1.b17_1.f17(7);
            }

            return new JsonObject(this.z17_1);
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
    this.b17_1 = lexer;
    this.c17_1 = configuration.d14_1;
    this.d17_1 = configuration.p14_1;
    this.e17_1 = 0;
  }
  protoOf(JsonTreeReader).k17 = function () {
    var token = this.b17_1.g17();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.e17_1 = this.e17_1 + 1 | 0;
      if (this.e17_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.e17_1 = this.e17_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.b17_1.e16('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.bf().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.q18_1;
    }
    return json.o12_1.k14_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.je()).r1(classDiscriminator)) {
      var baseName = serializer.je().xe();
      var actualName = actualSerializer.je().xe();
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
    var kind = descriptor.ye();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.v8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.r18_1)
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
    var last = descriptor.af();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.cf(i);
        if (name === $this.s18_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.r18_1 = useArrayPolymorphism;
    this.s18_1 = discriminator;
  }
  protoOf(PolymorphismValidator).xl = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).am = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.je();
    checkKind_0(this, descriptor, actualClass);
    if (!this.r18_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).bm = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).cm = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.f16_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).t18 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.f16_1;
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
  protoOf(DescriptorSchemaCache).g16 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.u18(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.t18(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).u18 = function (descriptor, key) {
    var tmp0_safe_receiver = this.f16_1.y1(descriptor);
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
    this.v18_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.v18_1 === unknownKey) {
      _this__u8e3s4.v18_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.eg(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.x12_1.g17() === 4) {
      $this.x12_1.e16('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.z12_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.z12_1 === -1)) {
        hasComma = $this.x12_1.x18();
      }
    } else {
      $this.x12_1.w18(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.x12_1.h17()) {
      if (decodingKey) {
        if ($this.z12_1 === -1) {
          var tmp0 = $this.x12_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.d13_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.e16(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.x12_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.d13_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.e16(tmp$ret$1, position_0);
          }
        }
      }
      $this.z12_1 = $this.z12_1 + 1 | 0;
      tmp = $this.z12_1;
    } else {
      if (hasComma && !$this.v12_1.o12_1.p14_1) {
        invalidTrailingComma($this.x12_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.v12_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.gf(index);
      var elementDescriptor = descriptor.ff(index);
      var tmp;
      if (isOptional && !elementDescriptor.re()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.x12_1.y18(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ye(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.re()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.x12_1.y18(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.x12_1.z18($this.b13_1.d14_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.o12_1.g14_1 && elementDescriptor.re();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.x12_1.i17();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.x12_1.x18();
    while ($this.x12_1.h17()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.x12_1.w18(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.v12_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.b13_1.i14_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.x12_1.x18();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.c13_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.b16(index);
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
    if (hasComma && !$this.v12_1.o12_1.p14_1) {
      invalidTrailingComma($this.x12_1);
    }
    var tmp1_safe_receiver = $this.c13_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c16();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.b13_1.c14_1 || trySkip($this.a13_1, $this, key)) {
      $this.x12_1.b19($this.b13_1.d14_1);
    } else {
      $this.x12_1.a19(key);
    }
    return $this.x12_1.x18();
  }
  function decodeListIndex($this) {
    var hasComma = $this.x12_1.x18();
    var tmp;
    if ($this.x12_1.h17()) {
      if (!($this.z12_1 === -1) && !hasComma) {
        $this.x12_1.e16('Expected end of the array or comma');
      }
      $this.z12_1 = $this.z12_1 + 1 | 0;
      tmp = $this.z12_1;
    } else {
      if (hasComma && !$this.v12_1.o12_1.p14_1) {
        invalidTrailingComma($this.x12_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.b13_1.d14_1) {
      tmp = $this.x12_1.d19();
    } else {
      tmp = $this.x12_1.c19();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.v12_1 = json;
    this.w12_1 = mode;
    this.x12_1 = lexer;
    this.y12_1 = this.v12_1.cg();
    this.z12_1 = -1;
    this.a13_1 = discriminatorHolder;
    this.b13_1 = this.v12_1.o12_1;
    this.c13_1 = this.b13_1.g14_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).e19 = function () {
    return this.v12_1;
  };
  protoOf(StreamingJsonDecoder).cg = function () {
    return this.y12_1;
  };
  protoOf(StreamingJsonDecoder).f19 = function () {
    return (new JsonTreeReader(this.v12_1.o12_1, this.x12_1)).k17();
  };
  protoOf(StreamingJsonDecoder).tf = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.v12_1.o12_1.j14_1;
      }
      if (tmp) {
        return deserializer.le(this);
      }
      var discriminator = classDiscriminator(deserializer.je(), this.v12_1);
      var tmp0_elvis_lhs = this.x12_1.g19(discriminator, this.b13_1.d14_1);
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
            tmp_1 = this.e19().o12_1.j14_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.le(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.je(), this.e19());
          var tmp0 = this.f19();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.je().xe();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).v8();
            var tmp_3 = getKClassFromExpression(tmp0).v8();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.x12_1.e13_1.r16();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.u14(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.e19(), discriminator_0, jsonTree, actualSerializer);
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
          this.x12_1.e16(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.a13_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.le(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.qe_1, plus(e.message, ' at path: ') + this.x12_1.e13_1.r16(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).uf = function (descriptor) {
    var newMode = switchMode(this.v12_1, descriptor);
    this.x12_1.e13_1.m16(descriptor);
    this.x12_1.w18(newMode.j19_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.g2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.v12_1, newMode, this.x12_1, descriptor, this.a13_1);
        break;
      default:
        var tmp_0;
        if (this.w12_1.equals(newMode) && this.v12_1.o12_1.g14_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.v12_1, newMode, this.x12_1, descriptor, this.a13_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).vf = function (descriptor) {
    if (this.v12_1.o12_1.c14_1 && descriptor.af() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.x12_1.x18() && !this.v12_1.o12_1.p14_1) {
      invalidTrailingComma(this.x12_1, '');
    }
    this.x12_1.w18(this.w12_1.k19_1);
    this.x12_1.e13_1.q16();
  };
  protoOf(StreamingJsonDecoder).lf = function () {
    var tmp;
    var tmp0_safe_receiver = this.c13_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a16_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.x12_1.l19();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).mf = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).zf = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.w12_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.x12_1.e13_1.p16();
    }
    var value = protoOf(AbstractDecoder).zf.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.x12_1.e13_1.o16(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).eg = function (descriptor) {
    var index;
    switch (this.w12_1.g2_1) {
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
    if (!this.w12_1.equals(WriteMode_MAP_getInstance())) {
      this.x12_1.e13_1.n16(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).nf = function () {
    return this.x12_1.m19();
  };
  protoOf(StreamingJsonDecoder).of = function () {
    var value = this.x12_1.c15();
    if (!value.equals(toLong(value.b1()))) {
      this.x12_1.e16("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.b1();
  };
  protoOf(StreamingJsonDecoder).pf = function () {
    return this.x12_1.c15();
  };
  protoOf(StreamingJsonDecoder).qf = function () {
    var tmp0 = this.x12_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.j17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.e16("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.v12_1.o12_1.l14_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.x12_1, result);
  };
  protoOf(StreamingJsonDecoder).rf = function () {
    var tmp;
    if (this.b13_1.d14_1) {
      tmp = this.x12_1.d19();
    } else {
      tmp = this.x12_1.i17();
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
    $this.s16_1.h15();
    $this.ng(discriminator);
    $this.s16_1.k15(_Char___init__impl__6a9atx(58));
    $this.s16_1.j15();
    $this.ng(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.s16_1 = composer;
    this.t16_1 = json;
    this.u16_1 = mode;
    this.v16_1 = modeReuseCache;
    this.w16_1 = this.t16_1.cg();
    this.x16_1 = this.t16_1.o12_1;
    this.y16_1 = false;
    this.z16_1 = null;
    this.a17_1 = null;
    var i = this.u16_1.g2_1;
    if (!(this.v16_1 == null)) {
      if (!(this.v16_1[i] === null) || !(this.v16_1[i] === this)) {
        this.v16_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).e19 = function () {
    return this.t16_1;
  };
  protoOf(StreamingJsonEncoder).cg = function () {
    return this.w16_1;
  };
  protoOf(StreamingJsonEncoder).xg = function (descriptor, index) {
    return this.x16_1.b14_1;
  };
  protoOf(StreamingJsonEncoder).sg = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.e19().o12_1.j14_1) {
        serializer.ke(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.e19().o12_1.r14_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.e19().o12_1.r14_1.g2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.je().ye();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.je(), this.e19()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.je()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.je().ye());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.je().xe();
        this.z16_1 = baseClassDiscriminator;
        this.a17_1 = serialName;
      }
      actualSerializer.ke(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).uf = function (descriptor) {
    var newMode = switchMode(this.t16_1, descriptor);
    if (!(newMode.j19_1 === _Char___init__impl__6a9atx(0))) {
      this.s16_1.k15(newMode.j19_1);
      this.s16_1.f15();
    }
    var discriminator = this.z16_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.a17_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.xe() : tmp0_elvis_lhs);
      this.z16_1 = null;
      this.a17_1 = null;
    }
    if (this.u16_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.v16_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.g2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.s16_1, this.t16_1, newMode, this.v16_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).vf = function (descriptor) {
    if (!(this.u16_1.k19_1 === _Char___init__impl__6a9atx(0))) {
      this.s16_1.g15();
      this.s16_1.i15();
      this.s16_1.k15(this.u16_1.k19_1);
    }
  };
  protoOf(StreamingJsonEncoder).gg = function (descriptor, index) {
    switch (this.u16_1.g2_1) {
      case 1:
        if (!this.s16_1.e15_1) {
          this.s16_1.k15(_Char___init__impl__6a9atx(44));
        }

        this.s16_1.h15();
        break;
      case 2:
        if (!this.s16_1.e15_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.s16_1.k15(_Char___init__impl__6a9atx(44));
            this.s16_1.h15();
            tmp_0 = true;
          } else {
            this.s16_1.k15(_Char___init__impl__6a9atx(58));
            this.s16_1.j15();
            tmp_0 = false;
          }
          tmp.y16_1 = tmp_0;
        } else {
          this.y16_1 = true;
          this.s16_1.h15();
        }

        break;
      case 3:
        if (index === 0)
          this.y16_1 = true;
        if (index === 1) {
          this.s16_1.k15(_Char___init__impl__6a9atx(44));
          this.s16_1.j15();
          this.y16_1 = false;
        }

        break;
      default:
        if (!this.s16_1.e15_1) {
          this.s16_1.k15(_Char___init__impl__6a9atx(44));
        }

        this.s16_1.h15();
        this.ng(getJsonElementName(descriptor, this.t16_1, index));
        this.s16_1.k15(_Char___init__impl__6a9atx(58));
        this.s16_1.j15();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).tg = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.x16_1.g14_1) {
      protoOf(AbstractEncoder).tg.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).ig = function () {
    this.s16_1.m15('null');
  };
  protoOf(StreamingJsonEncoder).jg = function (value) {
    if (this.y16_1) {
      this.ng(value.toString());
    } else {
      this.s16_1.s15(value);
    }
  };
  protoOf(StreamingJsonEncoder).kg = function (value) {
    if (this.y16_1) {
      this.ng(value.toString());
    } else {
      this.s16_1.p15(value);
    }
  };
  protoOf(StreamingJsonEncoder).lg = function (value) {
    if (this.y16_1) {
      this.ng(value.toString());
    } else {
      this.s16_1.r15(value);
    }
  };
  protoOf(StreamingJsonEncoder).mg = function (value) {
    if (this.y16_1) {
      this.ng(value.toString());
    } else {
      this.s16_1.o15(value);
    }
    if (!this.x16_1.l14_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.s16_1.d15_1));
    }
  };
  protoOf(StreamingJsonEncoder).ng = function (value) {
    return this.s16_1.t15(value);
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.t19(tag), toString($this.u19()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.p19_1 = json;
    this.q19_1 = value;
    this.r19_1 = polymorphicDiscriminator;
    this.s19_1 = this.e19().o12_1;
  }
  protoOf(AbstractJsonTreeDecoder).e19 = function () {
    return this.p19_1;
  };
  protoOf(AbstractJsonTreeDecoder).v1 = function () {
    return this.q19_1;
  };
  protoOf(AbstractJsonTreeDecoder).cg = function () {
    return this.e19().cg();
  };
  protoOf(AbstractJsonTreeDecoder).u19 = function () {
    var tmp0_safe_receiver = this.bl();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.v19(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.v1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).t19 = function (currentTag) {
    return this.dl() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).f19 = function () {
    return this.u19();
  };
  protoOf(AbstractJsonTreeDecoder).tf = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.e19().o12_1.j14_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.le(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.je(), this.e19());
      var tmp0 = this.f19();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.je().xe();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).v8();
        var tmp_1 = getKClassFromExpression(tmp0).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.dl();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.u14(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.e19(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).cl = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).uf = function (descriptor) {
    var currentObject = this.u19();
    var tmp0_subject = descriptor.ye();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.e19();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.xe();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).v8();
        var tmp_3 = getKClassFromExpression(currentObject).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.dl();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.e19();
        var keyDescriptor = carrierDescriptor(descriptor.ff(0), this_0.cg());
        var keyKind = keyDescriptor.ye();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.e19();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.xe();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).v8();
            var tmp_8 = getKClassFromExpression(currentObject).v8();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.dl();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.o12_1.e14_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.e19();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.xe();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).v8();
              var tmp_11 = getKClassFromExpression(currentObject).v8();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.dl();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.e19();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.xe();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).v8();
          var tmp_14 = getKClassFromExpression(currentObject).v8();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.dl();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.r19_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).vf = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).lf = function () {
    var tmp = this.u19();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).w19 = function (tag) {
    return !(this.v19(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).fl = function (tag) {
    return this.w19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x19 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.v19(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v8();
        var tmp_0 = getKClassFromExpression(value).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.t19(tag);
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
  protoOf(AbstractJsonTreeDecoder).gl = function (tag) {
    return this.x19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y19 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.v19(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v8();
        var tmp_0 = getKClassFromExpression(value).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.t19(tag);
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
  protoOf(AbstractJsonTreeDecoder).hl = function (tag) {
    return this.y19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z19 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.v19(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v8();
        var tmp_0 = getKClassFromExpression(value).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.t19(tag);
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
  protoOf(AbstractJsonTreeDecoder).il = function (tag) {
    return this.z19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a1a = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.v19(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).v8();
        var tmp_0 = getKClassFromExpression(value).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.t19(tag);
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
    var specialFp = this.e19().o12_1.l14_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.u19()));
  };
  protoOf(AbstractJsonTreeDecoder).jl = function (tag) {
    return this.a1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b1a = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.v19(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).v8();
      var tmp_0 = getKClassFromExpression(value).v8();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.t19(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.t19(tag), toString(this.u19()));
    if (!value_0.x14_1 && !this.e19().o12_1.d14_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.t19(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.u19()));
    }
    return value_0.z14_1;
  };
  protoOf(AbstractJsonTreeDecoder).kl = function (tag) {
    return this.b1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.e19();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.gf(index);
      var elementDescriptor = descriptor.ff(index);
      var tmp;
      if (isOptional && !elementDescriptor.re()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.v19(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ye(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.re()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.v19(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.v19(tag);
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
        var coerceToNull = !tmp0.o12_1.g14_1 && elementDescriptor.re();
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
    $this.l1a_1 = (!$this.e19().o12_1.g14_1 && !descriptor.gf(index) && descriptor.ff(index).re());
    return $this.l1a_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.i1a_1 = value;
    this.j1a_1 = polyDescriptor;
    this.k1a_1 = 0;
    this.l1a_1 = false;
  }
  protoOf(JsonTreeDecoder).v1 = function () {
    return this.i1a_1;
  };
  protoOf(JsonTreeDecoder).eg = function (descriptor) {
    while (this.k1a_1 < descriptor.af()) {
      var _unary__edvuaz = this.k1a_1;
      this.k1a_1 = _unary__edvuaz + 1 | 0;
      var name = this.wk(descriptor, _unary__edvuaz);
      var index = this.k1a_1 - 1 | 0;
      this.l1a_1 = false;
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
        tmp = !this.s19_1.i14_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).lf = function () {
    return !this.l1a_1 && protoOf(AbstractJsonTreeDecoder).lf.call(this);
  };
  protoOf(JsonTreeDecoder).xk = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.e19());
    var baseName = descriptor.cf(index);
    if (strategy == null) {
      if (!this.s19_1.m14_1)
        return baseName;
      if (this.v1().z1().r1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.e19(), descriptor);
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
    var fallbackName = strategy == null ? null : strategy.i16(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).v19 = function (tag) {
    return getValue(this.v1(), tag);
  };
  protoOf(JsonTreeDecoder).uf = function (descriptor) {
    if (descriptor === this.j1a_1) {
      var tmp = this.e19();
      var tmp1 = this.u19();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.j1a_1.xe();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).v8();
        var tmp_1 = getKClassFromExpression(tmp1).v8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.dl();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.r19_1, this.j1a_1);
    }
    return protoOf(AbstractJsonTreeDecoder).uf.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).vf = function (descriptor) {
    var tmp;
    if (this.s19_1.c14_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ye();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.e19());
    var tmp_1;
    if (strategy == null && !this.s19_1.m14_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.e19(), descriptor).z1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.e19()).u18(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.v1().z1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.r1(key) && !(key === this.r19_1)) {
        throw UnknownKeyException(key, this.v1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.s1a_1 = value;
    this.t1a_1 = this.s1a_1.l();
    this.u1a_1 = -1;
  }
  protoOf(JsonTreeListDecoder).v1 = function () {
    return this.s1a_1;
  };
  protoOf(JsonTreeListDecoder).xk = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).v19 = function (tag) {
    return this.s1a_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).eg = function (descriptor) {
    while (this.u1a_1 < (this.t1a_1 - 1 | 0)) {
      this.u1a_1 = this.u1a_1 + 1 | 0;
      return this.u1a_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.f1b_1 = value;
    this.g1b_1 = toList(this.f1b_1.z1());
    this.h1b_1 = imul(this.g1b_1.l(), 2);
    this.i1b_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).v1 = function () {
    return this.f1b_1;
  };
  protoOf(JsonTreeMapDecoder).xk = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.g1b_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).eg = function (descriptor) {
    while (this.i1b_1 < (this.h1b_1 - 1 | 0)) {
      this.i1b_1 = this.i1b_1 + 1 | 0;
      return this.i1b_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).v19 = function (tag) {
    return (this.i1b_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.f1b_1, tag);
  };
  protoOf(JsonTreeMapDecoder).vf = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.je())).tf(deserializer);
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
    this.j19_1 = begin;
    this.k19_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ye();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.ff(0), _this__u8e3s4.cg());
          var keyKind = keyDescriptor.ye();
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
            if (_this__u8e3s4.o12_1.e14_1) {
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
    if (equals(_this__u8e3s4.ye(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.ze()) {
      tmp = carrierDescriptor(_this__u8e3s4.ff(0), module_0);
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
    $this.j1b(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.j1b(lastPosition, currentPosition);
    var result = $this.g13_1.toString();
    $this.g13_1.ea(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.f13_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.f13_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.k1b(), $this.d13_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.l1b(currentPosition);
    if (currentPosition === -1) {
      $this.e16('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.k1b();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.k1b(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.e16("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.g13_1.l7(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.d13_1 = startPos;
      $this.m1b();
      if (($this.d13_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.e16('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.d13_1);
    }
    $this.g13_1.l7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.e16("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.l1b(start);
    if (current >= charSequenceLength($this.k1b()) || current === -1) {
      $this.e16('EOF');
    }
    var tmp = $this.k1b();
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
        $this.e16("Expected valid boolean literal prefix, but had '" + $this.j17() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.k1b()) - current | 0) < literalSuffix.length) {
      $this.e16('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.k1b(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.e16("Expected valid boolean literal prefix, but had '" + $this.j17() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.d13_1 = current + literalSuffix.length | 0;
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
    this.d13_1 = 0;
    this.e13_1 = new JsonPath();
    this.f13_1 = null;
    this.g13_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).m1b = function () {
  };
  protoOf(AbstractJsonLexer).x18 = function () {
    var current = this.n1b();
    var source = this.k1b();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.d13_1 = this.d13_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).o1b = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).h13 = function () {
    var nextToken = this.l17();
    if (!(nextToken === 10)) {
      this.e16('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.k1b(), this.d13_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).f17 = function (expected) {
    var token = this.l17();
    if (!(token === expected)) {
      this.p1b(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).q1b = function (expected) {
    if (this.d13_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.d13_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.d13_1 = this.d13_1 - 1 | 0;
          tmp$ret$1 = this.j17();
          break $l$block;
        }finally {
          this.d13_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.d16("Expected string literal but 'null' literal was found", this.d13_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.p1b(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).r1b = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.d13_1 - 1 | 0 : this.d13_1;
    var s = this.d13_1 === charSequenceLength(this.k1b()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.k1b(), position));
    this.e16('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).p1b = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.r1b(expectedToken, wasConsumed) : $super.r1b.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).g17 = function () {
    var source = this.k1b();
    var cpos = this.d13_1;
    $l$loop_0: while (true) {
      cpos = this.l1b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.d13_1 = cpos;
      return charToTokenClass(ch);
    }
    this.d13_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).y18 = function (doConsume) {
    var current = this.n1b();
    current = this.l1b(current);
    var len = charSequenceLength(this.k1b()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.k1b(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.k1b(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.d13_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).l19 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.y18(doConsume) : $super.y18.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).z18 = function (isLenient) {
    var token = this.g17();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.j17();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.i17();
    }
    var string = tmp;
    this.f13_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).s1b = function () {
    this.f13_1 = null;
  };
  protoOf(AbstractJsonLexer).t1b = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.k1b();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).i17 = function () {
    if (!(this.f13_1 == null)) {
      return takePeeked(this);
    }
    return this.c19();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.l1b(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.e16('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.j1b(lastPosition, currentPosition);
          currentPosition = this.l1b(currentPosition);
          if (currentPosition === -1) {
            this.e16('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.t1b(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.d13_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).d19 = function () {
    var result = this.j17();
    if (result === 'null' && wasUnquotedString(this)) {
      this.e16("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).j17 = function () {
    if (!(this.f13_1 == null)) {
      return takePeeked(this);
    }
    var current = this.n1b();
    if (current >= charSequenceLength(this.k1b()) || current === -1) {
      this.e16('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.k1b(), current));
    if (token === 1) {
      return this.i17();
    }
    if (!(token === 0)) {
      this.e16('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.k1b(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.k1b(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.k1b())) {
        usedAppend = true;
        this.j1b(this.d13_1, current);
        var eof = this.l1b(current);
        if (eof === -1) {
          this.d13_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.t1b(this.d13_1, current);
    } else {
      tmp = decodedString(this, this.d13_1, current);
    }
    var result = tmp;
    this.d13_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).j1b = function (fromIndex, toIndex) {
    this.g13_1.aa(this.k1b(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).b19 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.g17();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.j17();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.g17();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.j17();
        else
          this.c19();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.d13_1, 'found ] instead of } at path: ' + this.e13_1.toString(), this.k1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.d13_1, 'found } instead of ] at path: ' + this.e13_1.toString(), this.k1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.e16('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.l17();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.k1b()) + "', currentPosition=" + this.d13_1 + ')';
  };
  protoOf(AbstractJsonLexer).a19 = function (key) {
    var processed = this.t1b(0, this.d13_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.d16("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).d16 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.e13_1.r16() + hintMessage, this.k1b());
  };
  protoOf(AbstractJsonLexer).e16 = function (message, position, hint, $super) {
    position = position === VOID ? this.d13_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.d16(message, position, hint) : $super.d16.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).c15 = function () {
    var current = this.n1b();
    current = this.l1b(current);
    if (current >= charSequenceLength(this.k1b()) || current === -1) {
      this.e16('EOF');
    }
    var tmp;
    if (charSequenceGet(this.k1b(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.k1b())) {
        this.e16('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.k1b()))) {
      var ch = charSequenceGet(this.k1b(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.e16('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.e16("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.e16("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.e16("Unexpected symbol '-' in numeric literal");
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
        this.e16("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.e16('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.e16('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.e16('EOF');
      }
      if (!(charSequenceGet(this.k1b(), current) === _Char___init__impl__6a9atx(34))) {
        this.e16('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.d13_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.x2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).x2() || doubleAccumulator < (new Long(0, -2147483648)).x2()) {
        this.e16('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.e16("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.r2();
    } else {
      this.e16('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).m19 = function () {
    var current = this.n1b();
    if (current === charSequenceLength(this.k1b())) {
      this.e16('EOF');
    }
    var tmp;
    if (charSequenceGet(this.k1b(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.d13_1 === charSequenceLength(this.k1b())) {
        this.e16('EOF');
      }
      if (!(charSequenceGet(this.k1b(), this.d13_1) === _Char___init__impl__6a9atx(34))) {
        this.e16('Expected closing quotation mark');
      }
      this.d13_1 = this.d13_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().v1b_1;
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
    return c < 117 ? CharMappings_getInstance().u1b_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.u1b_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.v1b_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.u1b_1 = charArray(117);
    this.v1b_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).l17 = function () {
    var source = this.k1b();
    var cpos = this.n1b();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d13_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).h17 = function () {
    var current = this.n1b();
    if (current >= this.k1b().length || current === -1)
      return false;
    return this.o1b(charSequenceGet(this.k1b(), current));
  };
  protoOf(StringJsonLexerWithComments).w18 = function (expected) {
    var source = this.k1b();
    var current = this.n1b();
    if (current >= source.length || current === -1) {
      this.d13_1 = -1;
      this.q1b(expected);
    }
    var c = charSequenceGet(source, current);
    this.d13_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.q1b(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).g17 = function () {
    var source = this.k1b();
    var cpos = this.n1b();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d13_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).n1b = function () {
    var current = this.d13_1;
    if (current === -1)
      return current;
    var source = this.k1b();
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
            this.d13_1 = source.length;
            this.e16('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.d13_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.f1c_1 = source;
  }
  protoOf(StringJsonLexer).k1b = function () {
    return this.f1c_1;
  };
  protoOf(StringJsonLexer).l1b = function (position) {
    return position < this.k1b().length ? position : -1;
  };
  protoOf(StringJsonLexer).l17 = function () {
    var source = this.k1b();
    var cpos = this.d13_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d13_1 = cpos;
      return charToTokenClass(c);
    }
    this.d13_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).h17 = function () {
    var current = this.d13_1;
    if (current === -1)
      return false;
    var source = this.k1b();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.d13_1 = current;
      return this.o1b(c);
    }
    this.d13_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).n1b = function () {
    var current = this.d13_1;
    if (current === -1)
      return current;
    var source = this.k1b();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.d13_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).w18 = function (expected) {
    if (this.d13_1 === -1) {
      this.q1b(expected);
    }
    var source = this.k1b();
    var cpos = this.d13_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d13_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.q1b(expected);
    }
    this.d13_1 = -1;
    this.q1b(expected);
  };
  protoOf(StringJsonLexer).c19 = function () {
    this.w18(_Char___init__impl__6a9atx(34));
    var current = this.d13_1;
    var closingQuote = indexOf_0(this.k1b(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.j17();
      this.r1b(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.k1b(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.k1b(), this.d13_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.d13_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.k1b().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).g19 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.d13_1;
    try {
      if (!(this.l17() === 6))
        return null;
      var firstKey = this.z18(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.s1b();
      if (!(this.l17() === 5))
        return null;
      return this.z18(isLenient);
    }finally {
      this.d13_1 = positionSnapshot;
      this.s1b();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.o12_1.q14_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.q12_1;
  }
  function JsonToStringWriter() {
    this.t12_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).q15 = function (value) {
    this.t12_1.da(value);
  };
  protoOf(JsonToStringWriter).l15 = function (char) {
    this.t12_1.l7(char);
  };
  protoOf(JsonToStringWriter).n15 = function (text) {
    this.t12_1.k7(text);
  };
  protoOf(JsonToStringWriter).u15 = function (text) {
    printQuoted(this.t12_1, text);
  };
  protoOf(JsonToStringWriter).u12 = function () {
    this.t12_1.fa();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.t12_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).zl = contextual;
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

