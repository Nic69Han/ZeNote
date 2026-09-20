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
  var protoOf = kotlin_kotlin.$_$.m5;
  var initMetadataForObject = kotlin_kotlin.$_$.b5;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.w1;
  var initMetadataForClass = kotlin_kotlin.$_$.w4;
  var toString = kotlin_kotlin.$_$.p5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var charSequenceLength = kotlin_kotlin.$_$.l4;
  var charSequenceGet = kotlin_kotlin.$_$.k4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.l1;
  var equals = kotlin_kotlin.$_$.p4;
  var toString_0 = kotlin_kotlin.$_$.d8;
  var Enum = kotlin_kotlin.$_$.m7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.x4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var hashCode = kotlin_kotlin.$_$.v4;
  var joinToString = kotlin_kotlin.$_$.x2;
  var THROW_CCE = kotlin_kotlin.$_$.r7;
  var KtMap = kotlin_kotlin.$_$.b2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.r4;
  var getStringHashCode = kotlin_kotlin.$_$.u4;
  var KtList = kotlin_kotlin.$_$.a2;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var numberRangeToNumber = kotlin_kotlin.$_$.g5;
  var ClosedRange = kotlin_kotlin.$_$.r5;
  var isInterface = kotlin_kotlin.$_$.e5;
  var contains = kotlin_kotlin.$_$.u5;
  var toDouble = kotlin_kotlin.$_$.b7;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.t1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong = kotlin_kotlin.$_$.o5;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.h4;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.m4;
  var coerceAtLeast = kotlin_kotlin.$_$.s5;
  var coerceAtMost = kotlin_kotlin.$_$.t5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var singleOrNull = kotlin_kotlin.$_$.r3;
  var emptyMap = kotlin_kotlin.$_$.p2;
  var getValue = kotlin_kotlin.$_$.t2;
  var fillArrayVal = kotlin_kotlin.$_$.q4;
  var copyOf = kotlin_kotlin.$_$.j2;
  var copyOf_0 = kotlin_kotlin.$_$.k2;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.k7;
  var invoke = kotlin_kotlin.$_$.x7;
  var CoroutineImpl = kotlin_kotlin.$_$.d4;
  var DeepRecursiveScope = kotlin_kotlin.$_$.l7;
  var Unit = kotlin_kotlin.$_$.t7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c4;
  var initMetadataForLambda = kotlin_kotlin.$_$.a5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.y4;
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
  var ensureNotNull = kotlin_kotlin.$_$.w7;
  var substringBefore = kotlin_kotlin.$_$.z6;
  var removeSuffix = kotlin_kotlin.$_$.r6;
  var substringAfter = kotlin_kotlin.$_$.x6;
  var contains_0 = kotlin_kotlin.$_$.c6;
  var plus = kotlin_kotlin.$_$.c8;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.o7;
  var isFinite = kotlin_kotlin.$_$.y7;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var objectCreate = kotlin_kotlin.$_$.l5;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b8;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n1;
  var numberToChar = kotlin_kotlin.$_$.h5;
  var equals_0 = kotlin_kotlin.$_$.d6;
  var toString_1 = kotlin_kotlin.$_$.o1;
  var toByte = kotlin_kotlin.$_$.n5;
  var startsWith = kotlin_kotlin.$_$.v6;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var emptySet = kotlin_kotlin.$_$.q2;
  var plus_0 = kotlin_kotlin.$_$.k3;
  var toInt = kotlin_kotlin.$_$.d7;
  var toList = kotlin_kotlin.$_$.w3;
  var enumEntries = kotlin_kotlin.$_$.e4;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var last = kotlin_kotlin.$_$.c3;
  var removeLast = kotlin_kotlin.$_$.o3;
  var lastIndexOf = kotlin_kotlin.$_$.n6;
  var Long = kotlin_kotlin.$_$.p7;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.m1;
  var numberToLong = kotlin_kotlin.$_$.k5;
  var charArray = kotlin_kotlin.$_$.j4;
  var indexOf = kotlin_kotlin.$_$.f6;
  var indexOf_0 = kotlin_kotlin.$_$.g6;
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
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [CompositeDecoder, Decoder, AbstractDecoder]);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [Encoder, CompositeEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, CompositeDecoder, Decoder]);
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
    this.f12_1 = configuration;
    this.g12_1 = serializersModule;
    this.h12_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).tf = function () {
    return this.g12_1;
  };
  protoOf(Json).i12 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.l12();
    }
  };
  protoOf(Json).j12 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.ae(), null);
    var result = input.kf(deserializer);
    lexer.y12();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.r13();
    return new JsonImpl(conf, builder.q13_1);
  }
  function JsonBuilder(json) {
    this.z12_1 = json.f12_1.s13_1;
    this.a13_1 = json.f12_1.x13_1;
    this.b13_1 = json.f12_1.t13_1;
    this.c13_1 = json.f12_1.u13_1;
    this.d13_1 = json.f12_1.w13_1;
    this.e13_1 = json.f12_1.y13_1;
    this.f13_1 = json.f12_1.z13_1;
    this.g13_1 = json.f12_1.b14_1;
    this.h13_1 = json.f12_1.i14_1;
    this.i13_1 = json.f12_1.d14_1;
    this.j13_1 = json.f12_1.e14_1;
    this.k13_1 = json.f12_1.f14_1;
    this.l13_1 = json.f12_1.g14_1;
    this.m13_1 = json.f12_1.h14_1;
    this.n13_1 = json.f12_1.c14_1;
    this.o13_1 = json.f12_1.v13_1;
    this.p13_1 = json.f12_1.a14_1;
    this.q13_1 = json.tf();
  }
  protoOf(JsonBuilder).r13 = function () {
    if (this.p13_1) {
      // Inline function 'kotlin.require' call
      if (!(this.g13_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.h13_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.d13_1) {
      // Inline function 'kotlin.require' call
      if (!(this.e13_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.e13_1 === '    ')) {
      var tmp3 = this.e13_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.e13_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.z12_1, this.b13_1, this.c13_1, this.o13_1, this.d13_1, this.a13_1, this.e13_1, this.f13_1, this.p13_1, this.g13_1, this.n13_1, this.i13_1, this.j13_1, this.k13_1, this.l13_1, this.m13_1, this.h13_1);
  };
  function validateConfiguration($this) {
    if (equals($this.tf(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.f12_1.a14_1, $this.f12_1.b14_1);
    $this.tf().fl(collector);
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
    this.s13_1 = encodeDefaults;
    this.t13_1 = ignoreUnknownKeys;
    this.u13_1 = isLenient;
    this.v13_1 = allowStructuredMapKeys;
    this.w13_1 = prettyPrint;
    this.x13_1 = explicitNulls;
    this.y13_1 = prettyPrintIndent;
    this.z13_1 = coerceInputValues;
    this.a14_1 = useArrayPolymorphism;
    this.b14_1 = classDiscriminator;
    this.c14_1 = allowSpecialFloatingPointValues;
    this.d14_1 = useAlternativeNames;
    this.e14_1 = namingStrategy;
    this.f14_1 = decodeEnumsCaseInsensitive;
    this.g14_1 = allowTrailingComma;
    this.h14_1 = allowComments;
    this.i14_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.s13_1 + ', ignoreUnknownKeys=' + this.t13_1 + ', isLenient=' + this.u13_1 + ', ' + ('allowStructuredMapKeys=' + this.v13_1 + ', prettyPrint=' + this.w13_1 + ', explicitNulls=' + this.x13_1 + ', ') + ("prettyPrintIndent='" + this.y13_1 + "', coerceInputValues=" + this.z13_1 + ', useArrayPolymorphism=' + this.a14_1 + ', ') + ("classDiscriminator='" + this.b14_1 + "', allowSpecialFloatingPointValues=" + this.c14_1 + ', ') + ('useAlternativeNames=' + this.d14_1 + ', namingStrategy=' + toString_0(this.e14_1) + ', decodeEnumsCaseInsensitive=' + this.f14_1 + ', ') + ('allowTrailingComma=' + this.g14_1 + ', allowComments=' + this.h14_1 + ', classDiscriminatorMode=' + this.i14_1.toString() + ')');
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
    var k = _destruct__k2r9zo.s1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.t1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.j7(_Char___init__impl__6a9atx(58));
    this_0.h7(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.j14_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.j14_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.j14_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.j14_1.y1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).k14 = function (key) {
    return this.j14_1.u1(key);
  };
  protoOf(JsonObject).u1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.k14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).l14 = function (key) {
    return this.j14_1.w1(key);
  };
  protoOf(JsonObject).w1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.l14((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).j = function () {
    return this.j14_1.j();
  };
  protoOf(JsonObject).y1 = function () {
    return this.j14_1.y1();
  };
  protoOf(JsonObject).x1 = function () {
    return this.j14_1.x1();
  };
  protoOf(JsonObject).l = function () {
    return this.j14_1.l();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.m14_1 = 'null';
  }
  protoOf(JsonNull).n14 = function () {
    return this.m14_1;
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
    return this.n14();
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
    this.o14_1 = isString;
    this.p14_1 = coerceToInlineType;
    this.q14_1 = toString(body);
    if (!(this.p14_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.p14_1.qe()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).n14 = function () {
    return this.q14_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.o14_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.q14_1);
      tmp = this_0.toString();
    } else {
      tmp = this.q14_1;
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
    if (!(this.o14_1 === other.o14_1))
      return false;
    if (!(this.q14_1 === other.q14_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.o14_1);
    result = imul(31, result) + getStringHashCode(this.q14_1) | 0;
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
    this.r14_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.r14_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.r14_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.r14_1, ',', '[', ']');
  };
  protoOf(JsonArray).k = function (index) {
    return this.r14_1.k(index);
  };
  protoOf(JsonArray).s14 = function (element) {
    return this.r14_1.q1(element);
  };
  protoOf(JsonArray).q1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.s14(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).j = function () {
    return this.r14_1.j();
  };
  protoOf(JsonArray).g = function () {
    return this.r14_1.g();
  };
  protoOf(JsonArray).q = function (index) {
    return this.r14_1.q(index);
  };
  protoOf(JsonArray).l = function () {
    return this.r14_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.n14());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.n14())).t14();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.n14() + ' is not an Int');
    return result.b1();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.n14())).t14();
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
    return toDouble(_this__u8e3s4.n14());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.n14();
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
    this.u14_1 = writer;
    this.v14_1 = true;
  }
  protoOf(Composer).w14 = function () {
    this.v14_1 = true;
  };
  protoOf(Composer).x14 = function () {
    return Unit_instance;
  };
  protoOf(Composer).y14 = function () {
    this.v14_1 = false;
  };
  protoOf(Composer).z14 = function () {
    this.v14_1 = false;
  };
  protoOf(Composer).a15 = function () {
    return Unit_instance;
  };
  protoOf(Composer).b15 = function (v) {
    return this.u14_1.c15(v);
  };
  protoOf(Composer).d15 = function (v) {
    return this.u14_1.e15(v);
  };
  protoOf(Composer).f15 = function (v) {
    return this.u14_1.e15(v.toString());
  };
  protoOf(Composer).g15 = function (v) {
    return this.u14_1.h15(toLong(v));
  };
  protoOf(Composer).i15 = function (v) {
    return this.u14_1.h15(v);
  };
  protoOf(Composer).j15 = function (v) {
    return this.u14_1.e15(v.toString());
  };
  protoOf(Composer).k15 = function (value) {
    return this.u14_1.l15(value);
  };
  function Composer_0(sb, json) {
    return json.f12_1.w13_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.o15_1 = json;
    this.p15_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).w14 = function () {
    this.v14_1 = true;
    this.p15_1 = this.p15_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).x14 = function () {
    this.p15_1 = this.p15_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).y14 = function () {
    this.v14_1 = false;
    this.d15('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.p15_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.d15(this.o15_1.f12_1.y13_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).z14 = function () {
    if (this.v14_1)
      this.v14_1 = false;
    else {
      this.y14();
    }
  };
  protoOf(ComposerWithPrettyPrint).a15 = function () {
    this.b15(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.r15_1 = (!descriptor.xe(index) && descriptor.we(index).ie());
    return $this.r15_1;
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
    tmp.q15_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.r15_1 = false;
  }
  protoOf(JsonElementMarker).s15 = function (index) {
    this.q15_1.qi(index);
  };
  protoOf(JsonElementMarker).t15 = function () {
    return this.q15_1.ri();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.u15('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.u12_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.v15('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.oe() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.pe().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.ue(name);
    if (!(index === -3))
      return index;
    if (!json.f12_1.d14_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.te(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.pe(), CLASS_getInstance()) ? json.f12_1.e14_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.x15(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.f12_1.f14_1 && equals(descriptor.pe(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).w1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.x15(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.re();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.ve(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y15_1;
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
          tmp_0 = _this__u8e3s4.te(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.z15(_this__u8e3s4, i, _this__u8e3s4.te(i));
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
    var entity = equals($this_buildDeserializationNamesMap.pe(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).u1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.te(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.te(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.z1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.re();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.te(tmp_2);
        tmp_1[tmp_2] = $strategy.z15($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.c16_1, 2);
    $this.a16_1 = copyOf($this.a16_1, newSize);
    $this.b16_1 = copyOf_0($this.b16_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.a16_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.b16_1 = tmp_2;
    this.c16_1 = -1;
  }
  protoOf(JsonPath).d16 = function (sd) {
    this.c16_1 = this.c16_1 + 1 | 0;
    var depth = this.c16_1;
    if (depth === this.a16_1.length) {
      resize(this);
    }
    this.a16_1[depth] = sd;
  };
  protoOf(JsonPath).e16 = function (index) {
    this.b16_1[this.c16_1] = index;
  };
  protoOf(JsonPath).f16 = function (key) {
    var tmp;
    if (!(this.b16_1[this.c16_1] === -2)) {
      this.c16_1 = this.c16_1 + 1 | 0;
      tmp = this.c16_1 === this.a16_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.a16_1[this.c16_1] = key;
    this.b16_1[this.c16_1] = -2;
  };
  protoOf(JsonPath).g16 = function () {
    if (this.b16_1[this.c16_1] === -2) {
      this.a16_1[this.c16_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).h16 = function () {
    var depth = this.c16_1;
    if (this.b16_1[depth] === -2) {
      this.b16_1[depth] = -1;
      this.c16_1 = this.c16_1 - 1 | 0;
    }
    if (!(this.c16_1 === -1)) {
      this.c16_1 = this.c16_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).i16 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.i7('$');
    // Inline function 'kotlin.repeat' call
    var times = this.c16_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.a16_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.pe(), LIST_getInstance())) {
            if (!(this.b16_1[index] === -1)) {
              this_0.i7('[');
              this_0.aa(this.b16_1[index]);
              this_0.i7(']');
            }
          } else {
            var idx = this.b16_1[index];
            if (idx >= 0) {
              this_0.i7('.');
              this_0.i7(element.te(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.i7('[');
            this_0.i7("'");
            this_0.h7(element);
            this_0.i7("'");
            this_0.i7(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.i16();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.jg(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.s16_1.w16(6);
    if ($this.s16_1.x16() === 4) {
      $this.s16_1.v15('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.s16_1.y16()) {
      var key = $this.t16_1 ? $this.s16_1.a17() : $this.s16_1.z16();
      $this.s16_1.w16(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.b17();
      // Inline function 'kotlin.collections.set' call
      result.z1(key, element);
      lastToken = $this.s16_1.c17();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.s16_1.v15('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.s16_1.w16(7);
    } else if (lastToken === 4) {
      if (!$this.u16_1) {
        invalidTrailingComma($this.s16_1);
      }
      $this.s16_1.w16(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.w7_1 = Unit_instance;
    tmp.x7_1 = null;
    return tmp.c8();
  }
  function readArray($this) {
    var lastToken = $this.s16_1.c17();
    if ($this.s16_1.x16() === 4) {
      $this.s16_1.v15('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.s16_1.y16()) {
      var element = $this.b17();
      result.e(element);
      lastToken = $this.s16_1.c17();
      if (!(lastToken === 4)) {
        var tmp0 = $this.s16_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.u12_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.v15(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.s16_1.w16(9);
    } else if (lastToken === 4) {
      if (!$this.u16_1) {
        invalidTrailingComma($this.s16_1, 'array');
      }
      $this.s16_1.w16(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.t16_1 || !isString) {
      tmp = $this.s16_1.a17();
    } else {
      tmp = $this.s16_1.z16();
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
    this.a18_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).f18 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.g18($this$DeepRecursiveFunction, it, $completion);
    tmp.w7_1 = Unit_instance;
    tmp.x7_1 = null;
    return tmp.c8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i8 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.f18(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).c8 = function () {
    var suspendResult = this.w7_1;
    $sm: do
      try {
        var tmp = this.u7_1;
        switch (tmp) {
          case 0:
            this.v7_1 = 3;
            this.d18_1 = this.a18_1.s16_1.x16();
            if (this.d18_1 === 1) {
              this.e18_1 = readValue(this.a18_1, true);
              this.u7_1 = 2;
              continue $sm;
            } else {
              if (this.d18_1 === 0) {
                this.e18_1 = readValue(this.a18_1, false);
                this.u7_1 = 2;
                continue $sm;
              } else {
                if (this.d18_1 === 6) {
                  this.u7_1 = 1;
                  suspendResult = readObject_0(this.b18_1, this.a18_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.d18_1 === 8) {
                    this.e18_1 = readArray(this.a18_1);
                    this.u7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.a18_1.s16_1.v15("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.e18_1 = suspendResult;
            this.u7_1 = 2;
            continue $sm;
          case 2:
            return this.e18_1;
          case 3:
            throw this.x7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v7_1 === 3) {
          throw e;
        } else {
          this.u7_1 = this.v7_1;
          this.x7_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).g18 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.a18_1, completion);
    i.b18_1 = $this$DeepRecursiveFunction;
    i.c18_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.f18($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l17_1 = _this__u8e3s4;
    this.m17_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).c8 = function () {
    var suspendResult = this.w7_1;
    $sm: do
      try {
        var tmp = this.u7_1;
        switch (tmp) {
          case 0:
            this.v7_1 = 5;
            var tmp_0 = this;
            tmp_0.n17_1 = this.l17_1;
            this.o17_1 = this.n17_1;
            this.p17_1 = this.o17_1.s16_1.w16(6);
            if (this.o17_1.s16_1.x16() === 4) {
              this.o17_1.s16_1.v15('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.q17_1 = LinkedHashMap_init_$Create$();
            this.u7_1 = 1;
            continue $sm;
          case 1:
            if (!this.o17_1.s16_1.y16()) {
              this.u7_1 = 4;
              continue $sm;
            }

            this.r17_1 = this.o17_1.t16_1 ? this.o17_1.s16_1.a17() : this.o17_1.s16_1.z16();
            this.o17_1.s16_1.w16(5);
            this.u7_1 = 2;
            suspendResult = this.m17_1.nd(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.q17_1;
            var key = this.r17_1;
            tmp0.z1(key, element);
            this.p17_1 = this.o17_1.s16_1.c17();
            var tmp0_subject = this.p17_1;
            if (tmp0_subject === 4) {
              this.u7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.u7_1 = 4;
                continue $sm;
              } else {
                this.o17_1.s16_1.v15('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.u7_1 = 1;
            continue $sm;
          case 4:
            if (this.p17_1 === 6) {
              this.o17_1.s16_1.w16(7);
            } else if (this.p17_1 === 4) {
              if (!this.o17_1.u16_1) {
                invalidTrailingComma(this.o17_1.s16_1);
              }
              this.o17_1.s16_1.w16(7);
            }

            return new JsonObject(this.q17_1);
          case 5:
            throw this.x7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v7_1 === 5) {
          throw e;
        } else {
          this.u7_1 = this.v7_1;
          this.x7_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.s16_1 = lexer;
    this.t16_1 = configuration.u13_1;
    this.u16_1 = configuration.g14_1;
    this.v16_1 = 0;
  }
  protoOf(JsonTreeReader).b17 = function () {
    var token = this.s16_1.x16();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.v16_1 = this.v16_1 + 1 | 0;
      if (this.v16_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.v16_1 = this.v16_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.s16_1.v15('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.se().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.h18_1;
    }
    return json.f12_1.b14_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.ae()).p1(classDiscriminator)) {
      var baseName = serializer.ae().oe();
      var actualName = actualSerializer.ae().oe();
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
    var kind = descriptor.pe();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.t8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.i18_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.t8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.re();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.te(i);
        if (name === $this.j18_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.i18_1 = useArrayPolymorphism;
    this.j18_1 = discriminator;
  }
  protoOf(PolymorphismValidator).ol = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).rl = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.ae();
    checkKind_0(this, descriptor, actualClass);
    if (!this.i18_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).sl = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).tl = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.w15_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).k18 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.w15_1;
    var value_0 = this_0.w1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.z1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.z1(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).x15 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.l18(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.k18(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).l18 = function (descriptor, key) {
    var tmp0_safe_receiver = this.w15_1.w1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.w1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.m18_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.m18_1 === unknownKey) {
      _this__u8e3s4.m18_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.vf(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.o12_1.x16() === 4) {
      $this.o12_1.v15('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.q12_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.q12_1 === -1)) {
        hasComma = $this.o12_1.o18();
      }
    } else {
      $this.o12_1.n18(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.o12_1.y16()) {
      if (decodingKey) {
        if ($this.q12_1 === -1) {
          var tmp0 = $this.o12_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.u12_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.v15(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.o12_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.u12_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.v15(tmp$ret$1, position_0);
          }
        }
      }
      $this.q12_1 = $this.q12_1 + 1 | 0;
      tmp = $this.q12_1;
    } else {
      if (hasComma && !$this.m12_1.f12_1.g14_1) {
        invalidTrailingComma($this.o12_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.m12_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.xe(index);
      var elementDescriptor = descriptor.we(index);
      var tmp;
      if (isOptional && !elementDescriptor.ie()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.o12_1.p18(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.pe(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.ie()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.o12_1.p18(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.o12_1.q18($this.s12_1.u13_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.f12_1.x13_1 && elementDescriptor.ie();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.o12_1.z16();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.o12_1.o18();
    while ($this.o12_1.y16()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.o12_1.n18(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.m12_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.s12_1.z13_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.o12_1.o18();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.t12_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.s15(index);
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
    if (hasComma && !$this.m12_1.f12_1.g14_1) {
      invalidTrailingComma($this.o12_1);
    }
    var tmp1_safe_receiver = $this.t12_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t15();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.s12_1.t13_1 || trySkip($this.r12_1, $this, key)) {
      $this.o12_1.s18($this.s12_1.u13_1);
    } else {
      $this.o12_1.r18(key);
    }
    return $this.o12_1.o18();
  }
  function decodeListIndex($this) {
    var hasComma = $this.o12_1.o18();
    var tmp;
    if ($this.o12_1.y16()) {
      if (!($this.q12_1 === -1) && !hasComma) {
        $this.o12_1.v15('Expected end of the array or comma');
      }
      $this.q12_1 = $this.q12_1 + 1 | 0;
      tmp = $this.q12_1;
    } else {
      if (hasComma && !$this.m12_1.f12_1.g14_1) {
        invalidTrailingComma($this.o12_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.s12_1.u13_1) {
      tmp = $this.o12_1.u18();
    } else {
      tmp = $this.o12_1.t18();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.m12_1 = json;
    this.n12_1 = mode;
    this.o12_1 = lexer;
    this.p12_1 = this.m12_1.tf();
    this.q12_1 = -1;
    this.r12_1 = discriminatorHolder;
    this.s12_1 = this.m12_1.f12_1;
    this.t12_1 = this.s12_1.x13_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).v18 = function () {
    return this.m12_1;
  };
  protoOf(StreamingJsonDecoder).tf = function () {
    return this.p12_1;
  };
  protoOf(StreamingJsonDecoder).w18 = function () {
    return (new JsonTreeReader(this.m12_1.f12_1, this.o12_1)).b17();
  };
  protoOf(StreamingJsonDecoder).kf = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.m12_1.f12_1.a14_1;
      }
      if (tmp) {
        return deserializer.ce(this);
      }
      var discriminator = classDiscriminator(deserializer.ae(), this.m12_1);
      var tmp0_elvis_lhs = this.o12_1.x18(discriminator, this.s12_1.u13_1);
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
            tmp_1 = this.v18().f12_1.a14_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.ce(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.ae(), this.v18());
          var tmp0 = this.w18();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.ae().oe();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).t8();
            var tmp_3 = getKClassFromExpression(tmp0).t8();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.o12_1.v12_1.i16();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.l14(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.v18(), discriminator_0, jsonTree, actualSerializer);
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
          this.o12_1.v15(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.r12_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.ce(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.he_1, plus(e.message, ' at path: ') + this.o12_1.v12_1.i16(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).lf = function (descriptor) {
    var newMode = switchMode(this.m12_1, descriptor);
    this.o12_1.v12_1.d16(descriptor);
    this.o12_1.n18(newMode.a19_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.e2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.m12_1, newMode, this.o12_1, descriptor, this.r12_1);
        break;
      default:
        var tmp_0;
        if (this.n12_1.equals(newMode) && this.m12_1.f12_1.x13_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.m12_1, newMode, this.o12_1, descriptor, this.r12_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).mf = function (descriptor) {
    if (this.m12_1.f12_1.t13_1 && descriptor.re() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.o12_1.o18() && !this.m12_1.f12_1.g14_1) {
      invalidTrailingComma(this.o12_1, '');
    }
    this.o12_1.n18(this.n12_1.b19_1);
    this.o12_1.v12_1.h16();
  };
  protoOf(StreamingJsonDecoder).cf = function () {
    var tmp;
    var tmp0_safe_receiver = this.t12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r15_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.o12_1.c19();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).df = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).qf = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.n12_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.o12_1.v12_1.g16();
    }
    var value = protoOf(AbstractDecoder).qf.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.o12_1.v12_1.f16(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).vf = function (descriptor) {
    var index;
    switch (this.n12_1.e2_1) {
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
    if (!this.n12_1.equals(WriteMode_MAP_getInstance())) {
      this.o12_1.v12_1.e16(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).ef = function () {
    return this.o12_1.d19();
  };
  protoOf(StreamingJsonDecoder).ff = function () {
    var value = this.o12_1.t14();
    if (!value.equals(toLong(value.b1()))) {
      this.o12_1.v15("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.b1();
  };
  protoOf(StreamingJsonDecoder).gf = function () {
    return this.o12_1.t14();
  };
  protoOf(StreamingJsonDecoder).hf = function () {
    var tmp0 = this.o12_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.a17();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.v15("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.m12_1.f12_1.c14_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.o12_1, result);
  };
  protoOf(StreamingJsonDecoder).if = function () {
    var tmp;
    if (this.s12_1.u13_1) {
      tmp = this.o12_1.u18();
    } else {
      tmp = this.o12_1.z16();
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
    $this.j16_1.y14();
    $this.eg(discriminator);
    $this.j16_1.b15(_Char___init__impl__6a9atx(58));
    $this.j16_1.a15();
    $this.eg(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.j16_1 = composer;
    this.k16_1 = json;
    this.l16_1 = mode;
    this.m16_1 = modeReuseCache;
    this.n16_1 = this.k16_1.tf();
    this.o16_1 = this.k16_1.f12_1;
    this.p16_1 = false;
    this.q16_1 = null;
    this.r16_1 = null;
    var i = this.l16_1.e2_1;
    if (!(this.m16_1 == null)) {
      if (!(this.m16_1[i] === null) || !(this.m16_1[i] === this)) {
        this.m16_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).v18 = function () {
    return this.k16_1;
  };
  protoOf(StreamingJsonEncoder).tf = function () {
    return this.n16_1;
  };
  protoOf(StreamingJsonEncoder).og = function (descriptor, index) {
    return this.o16_1.s13_1;
  };
  protoOf(StreamingJsonEncoder).jg = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.v18().f12_1.a14_1) {
        serializer.be(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.v18().f12_1.i14_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.v18().f12_1.i14_1.e2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.ae().pe();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.ae(), this.v18()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.ae()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.ae().pe());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.ae().oe();
        this.q16_1 = baseClassDiscriminator;
        this.r16_1 = serialName;
      }
      actualSerializer.be(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).lf = function (descriptor) {
    var newMode = switchMode(this.k16_1, descriptor);
    if (!(newMode.a19_1 === _Char___init__impl__6a9atx(0))) {
      this.j16_1.b15(newMode.a19_1);
      this.j16_1.w14();
    }
    var discriminator = this.q16_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.r16_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.oe() : tmp0_elvis_lhs);
      this.q16_1 = null;
      this.r16_1 = null;
    }
    if (this.l16_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.m16_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.e2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.j16_1, this.k16_1, newMode, this.m16_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).mf = function (descriptor) {
    if (!(this.l16_1.b19_1 === _Char___init__impl__6a9atx(0))) {
      this.j16_1.x14();
      this.j16_1.z14();
      this.j16_1.b15(this.l16_1.b19_1);
    }
  };
  protoOf(StreamingJsonEncoder).xf = function (descriptor, index) {
    switch (this.l16_1.e2_1) {
      case 1:
        if (!this.j16_1.v14_1) {
          this.j16_1.b15(_Char___init__impl__6a9atx(44));
        }

        this.j16_1.y14();
        break;
      case 2:
        if (!this.j16_1.v14_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.j16_1.b15(_Char___init__impl__6a9atx(44));
            this.j16_1.y14();
            tmp_0 = true;
          } else {
            this.j16_1.b15(_Char___init__impl__6a9atx(58));
            this.j16_1.a15();
            tmp_0 = false;
          }
          tmp.p16_1 = tmp_0;
        } else {
          this.p16_1 = true;
          this.j16_1.y14();
        }

        break;
      case 3:
        if (index === 0)
          this.p16_1 = true;
        if (index === 1) {
          this.j16_1.b15(_Char___init__impl__6a9atx(44));
          this.j16_1.a15();
          this.p16_1 = false;
        }

        break;
      default:
        if (!this.j16_1.v14_1) {
          this.j16_1.b15(_Char___init__impl__6a9atx(44));
        }

        this.j16_1.y14();
        this.eg(getJsonElementName(descriptor, this.k16_1, index));
        this.j16_1.b15(_Char___init__impl__6a9atx(58));
        this.j16_1.a15();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).kg = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.o16_1.x13_1) {
      protoOf(AbstractEncoder).kg.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).zf = function () {
    this.j16_1.d15('null');
  };
  protoOf(StreamingJsonEncoder).ag = function (value) {
    if (this.p16_1) {
      this.eg(value.toString());
    } else {
      this.j16_1.j15(value);
    }
  };
  protoOf(StreamingJsonEncoder).bg = function (value) {
    if (this.p16_1) {
      this.eg(value.toString());
    } else {
      this.j16_1.g15(value);
    }
  };
  protoOf(StreamingJsonEncoder).cg = function (value) {
    if (this.p16_1) {
      this.eg(value.toString());
    } else {
      this.j16_1.i15(value);
    }
  };
  protoOf(StreamingJsonEncoder).dg = function (value) {
    if (this.p16_1) {
      this.eg(value.toString());
    } else {
      this.j16_1.f15(value);
    }
    if (!this.o16_1.c14_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.j16_1.u14_1));
    }
  };
  protoOf(StreamingJsonEncoder).eg = function (value) {
    return this.j16_1.k15(value);
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
    _this__u8e3s4.j7(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.y9(value, lastPos, i);
          _this__u8e3s4.i7(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.y9(value, lastPos, value.length);
    else
      _this__u8e3s4.i7(value);
    _this__u8e3s4.j7(_Char___init__impl__6a9atx(34));
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.k19(tag), toString($this.l19()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.g19_1 = json;
    this.h19_1 = value;
    this.i19_1 = polymorphicDiscriminator;
    this.j19_1 = this.v18().f12_1;
  }
  protoOf(AbstractJsonTreeDecoder).v18 = function () {
    return this.g19_1;
  };
  protoOf(AbstractJsonTreeDecoder).t1 = function () {
    return this.h19_1;
  };
  protoOf(AbstractJsonTreeDecoder).tf = function () {
    return this.v18().tf();
  };
  protoOf(AbstractJsonTreeDecoder).l19 = function () {
    var tmp0_safe_receiver = this.sk();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.m19(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.t1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).k19 = function (currentTag) {
    return this.uk() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).w18 = function () {
    return this.l19();
  };
  protoOf(AbstractJsonTreeDecoder).kf = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.v18().f12_1.a14_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.ce(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.ae(), this.v18());
      var tmp0 = this.w18();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.ae().oe();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).t8();
        var tmp_1 = getKClassFromExpression(tmp0).t8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.uk();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.l14(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.v18(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).tk = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).lf = function (descriptor) {
    var currentObject = this.l19();
    var tmp0_subject = descriptor.pe();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.v18();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.oe();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).t8();
        var tmp_3 = getKClassFromExpression(currentObject).t8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.uk();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.v18();
        var keyDescriptor = carrierDescriptor(descriptor.we(0), this_0.tf());
        var keyKind = keyDescriptor.pe();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.v18();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.oe();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).t8();
            var tmp_8 = getKClassFromExpression(currentObject).t8();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.uk();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.f12_1.v13_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.v18();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.oe();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).t8();
              var tmp_11 = getKClassFromExpression(currentObject).t8();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.uk();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.v18();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.oe();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).t8();
          var tmp_14 = getKClassFromExpression(currentObject).t8();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.uk();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.i19_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).mf = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).cf = function () {
    var tmp = this.l19();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).n19 = function (tag) {
    return !(this.m19(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).wk = function (tag) {
    return this.n19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o19 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.m19(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).t8();
        var tmp_0 = getKClassFromExpression(value).t8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.k19(tag);
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
  protoOf(AbstractJsonTreeDecoder).xk = function (tag) {
    return this.o19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p19 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.m19(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).t8();
        var tmp_0 = getKClassFromExpression(value).t8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.k19(tag);
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
  protoOf(AbstractJsonTreeDecoder).yk = function (tag) {
    return this.p19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q19 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.m19(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).t8();
        var tmp_0 = getKClassFromExpression(value).t8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.k19(tag);
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
  protoOf(AbstractJsonTreeDecoder).zk = function (tag) {
    return this.q19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r19 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.m19(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).t8();
        var tmp_0 = getKClassFromExpression(value).t8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.k19(tag);
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
    var specialFp = this.v18().f12_1.c14_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.l19()));
  };
  protoOf(AbstractJsonTreeDecoder).al = function (tag) {
    return this.r19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s19 = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.m19(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).t8();
      var tmp_0 = getKClassFromExpression(value).t8();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.k19(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.k19(tag), toString(this.l19()));
    if (!value_0.o14_1 && !this.v18().f12_1.u13_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.k19(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.l19()));
    }
    return value_0.q14_1;
  };
  protoOf(AbstractJsonTreeDecoder).bl = function (tag) {
    return this.s19((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.v18();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.xe(index);
      var elementDescriptor = descriptor.we(index);
      var tmp;
      if (isOptional && !elementDescriptor.ie()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.m19(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.pe(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.ie()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.m19(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.m19(tag);
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
        var coerceToNull = !tmp0.f12_1.x13_1 && elementDescriptor.ie();
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
    $this.c1a_1 = (!$this.v18().f12_1.x13_1 && !descriptor.xe(index) && descriptor.we(index).ie());
    return $this.c1a_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.z19_1 = value;
    this.a1a_1 = polyDescriptor;
    this.b1a_1 = 0;
    this.c1a_1 = false;
  }
  protoOf(JsonTreeDecoder).t1 = function () {
    return this.z19_1;
  };
  protoOf(JsonTreeDecoder).vf = function (descriptor) {
    while (this.b1a_1 < descriptor.re()) {
      var _unary__edvuaz = this.b1a_1;
      this.b1a_1 = _unary__edvuaz + 1 | 0;
      var name = this.nk(descriptor, _unary__edvuaz);
      var index = this.b1a_1 - 1 | 0;
      this.c1a_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.t1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).u1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.j19_1.z13_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).cf = function () {
    return !this.c1a_1 && protoOf(AbstractJsonTreeDecoder).cf.call(this);
  };
  protoOf(JsonTreeDecoder).ok = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.v18());
    var baseName = descriptor.te(index);
    if (strategy == null) {
      if (!this.j19_1.d14_1)
        return baseName;
      if (this.t1().x1().p1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.v18(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.t1().x1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.w1(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.z15(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).m19 = function (tag) {
    return getValue(this.t1(), tag);
  };
  protoOf(JsonTreeDecoder).lf = function (descriptor) {
    if (descriptor === this.a1a_1) {
      var tmp = this.v18();
      var tmp1 = this.l19();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.a1a_1.oe();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).t8();
        var tmp_1 = getKClassFromExpression(tmp1).t8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.uk();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.i19_1, this.a1a_1);
    }
    return protoOf(AbstractJsonTreeDecoder).lf.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).mf = function (descriptor) {
    var tmp;
    if (this.j19_1.t13_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.pe();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.v18());
    var tmp_1;
    if (strategy == null && !this.j19_1.d14_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.v18(), descriptor).x1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.v18()).l18(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.t1().x1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.p1(key) && !(key === this.i19_1)) {
        throw UnknownKeyException(key, this.t1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.j1a_1 = value;
    this.k1a_1 = this.j1a_1.l();
    this.l1a_1 = -1;
  }
  protoOf(JsonTreeListDecoder).t1 = function () {
    return this.j1a_1;
  };
  protoOf(JsonTreeListDecoder).ok = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).m19 = function (tag) {
    return this.j1a_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).vf = function (descriptor) {
    while (this.l1a_1 < (this.k1a_1 - 1 | 0)) {
      this.l1a_1 = this.l1a_1 + 1 | 0;
      return this.l1a_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.w1a_1 = value;
    this.x1a_1 = toList(this.w1a_1.x1());
    this.y1a_1 = imul(this.x1a_1.l(), 2);
    this.z1a_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).t1 = function () {
    return this.w1a_1;
  };
  protoOf(JsonTreeMapDecoder).ok = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.x1a_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).vf = function (descriptor) {
    while (this.z1a_1 < (this.y1a_1 - 1 | 0)) {
      this.z1a_1 = this.z1a_1 + 1 | 0;
      return this.z1a_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).m19 = function (tag) {
    return (this.z1a_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.w1a_1, tag);
  };
  protoOf(JsonTreeMapDecoder).mf = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.ae())).kf(deserializer);
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
    this.a19_1 = begin;
    this.b19_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.pe();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.we(0), _this__u8e3s4.tf());
          var keyKind = keyDescriptor.pe();
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
            if (_this__u8e3s4.f12_1.v13_1) {
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
    if (equals(_this__u8e3s4.pe(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.qe()) {
      tmp = carrierDescriptor(_this__u8e3s4.we(0), module_0);
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
    $this.a1b(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.a1b(lastPosition, currentPosition);
    var result = $this.x12_1.toString();
    $this.x12_1.ca(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.w12_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.w12_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.b1b(), $this.u12_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.c1b(currentPosition);
    if (currentPosition === -1) {
      $this.v15('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.b1b();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.b1b(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.v15("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.x12_1.j7(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.u12_1 = startPos;
      $this.d1b();
      if (($this.u12_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.v15('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.u12_1);
    }
    $this.x12_1.j7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.v15("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.c1b(start);
    if (current >= charSequenceLength($this.b1b()) || current === -1) {
      $this.v15('EOF');
    }
    var tmp = $this.b1b();
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
        $this.v15("Expected valid boolean literal prefix, but had '" + $this.a17() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.b1b()) - current | 0) < literalSuffix.length) {
      $this.v15('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.b1b(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.v15("Expected valid boolean literal prefix, but had '" + $this.a17() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.u12_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.v2();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.v2();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.u12_1 = 0;
    this.v12_1 = new JsonPath();
    this.w12_1 = null;
    this.x12_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).d1b = function () {
  };
  protoOf(AbstractJsonLexer).o18 = function () {
    var current = this.e1b();
    var source = this.b1b();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.u12_1 = this.u12_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).f1b = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).y12 = function () {
    var nextToken = this.c17();
    if (!(nextToken === 10)) {
      this.v15('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.b1b(), this.u12_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).w16 = function (expected) {
    var token = this.c17();
    if (!(token === expected)) {
      this.g1b(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).h1b = function (expected) {
    if (this.u12_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.u12_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.u12_1 = this.u12_1 - 1 | 0;
          tmp$ret$1 = this.a17();
          break $l$block;
        }finally {
          this.u12_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.u15("Expected string literal but 'null' literal was found", this.u12_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.g1b(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).i1b = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.u12_1 - 1 | 0 : this.u12_1;
    var s = this.u12_1 === charSequenceLength(this.b1b()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1b(), position));
    this.v15('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).g1b = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.i1b(expectedToken, wasConsumed) : $super.i1b.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).x16 = function () {
    var source = this.b1b();
    var cpos = this.u12_1;
    $l$loop_0: while (true) {
      cpos = this.c1b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.u12_1 = cpos;
      return charToTokenClass(ch);
    }
    this.u12_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).p18 = function (doConsume) {
    var current = this.e1b();
    current = this.c1b(current);
    var len = charSequenceLength(this.b1b()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.b1b(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.b1b(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.u12_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).c19 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.p18(doConsume) : $super.p18.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).q18 = function (isLenient) {
    var token = this.x16();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.a17();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.z16();
    }
    var string = tmp;
    this.w12_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).j1b = function () {
    this.w12_1 = null;
  };
  protoOf(AbstractJsonLexer).k1b = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.b1b();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).z16 = function () {
    if (!(this.w12_1 == null)) {
      return takePeeked(this);
    }
    return this.t18();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.c1b(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.v15('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.a1b(lastPosition, currentPosition);
          currentPosition = this.c1b(currentPosition);
          if (currentPosition === -1) {
            this.v15('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.k1b(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.u12_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).u18 = function () {
    var result = this.a17();
    if (result === 'null' && wasUnquotedString(this)) {
      this.v15("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).a17 = function () {
    if (!(this.w12_1 == null)) {
      return takePeeked(this);
    }
    var current = this.e1b();
    if (current >= charSequenceLength(this.b1b()) || current === -1) {
      this.v15('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.b1b(), current));
    if (token === 1) {
      return this.z16();
    }
    if (!(token === 0)) {
      this.v15('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.b1b(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.b1b(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.b1b())) {
        usedAppend = true;
        this.a1b(this.u12_1, current);
        var eof = this.c1b(current);
        if (eof === -1) {
          this.u12_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.k1b(this.u12_1, current);
    } else {
      tmp = decodedString(this, this.u12_1, current);
    }
    var result = tmp;
    this.u12_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).a1b = function (fromIndex, toIndex) {
    this.x12_1.y9(this.b1b(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).s18 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.x16();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.a17();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.x16();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.a17();
        else
          this.t18();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.u12_1, 'found ] instead of } at path: ' + this.v12_1.toString(), this.b1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.u12_1, 'found } instead of ] at path: ' + this.v12_1.toString(), this.b1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.v15('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.c17();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.b1b()) + "', currentPosition=" + this.u12_1 + ')';
  };
  protoOf(AbstractJsonLexer).r18 = function (key) {
    var processed = this.k1b(0, this.u12_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.u15("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).u15 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.v12_1.i16() + hintMessage, this.b1b());
  };
  protoOf(AbstractJsonLexer).v15 = function (message, position, hint, $super) {
    position = position === VOID ? this.u12_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.u15(message, position, hint) : $super.u15.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).t14 = function () {
    var current = this.e1b();
    current = this.c1b(current);
    if (current >= charSequenceLength(this.b1b()) || current === -1) {
      this.v15('EOF');
    }
    var tmp;
    if (charSequenceGet(this.b1b(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.b1b())) {
        this.v15('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.b1b()))) {
      var ch = charSequenceGet(this.b1b(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.v15('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.v15("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.v15("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.v15("Unexpected symbol '-' in numeric literal");
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
        this.v15("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.m2(toLong(10)).k2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.m2(toLong(10)).l2(toLong(digit));
      if (accumulator.z(new Long(0, 0)) > 0) {
        this.v15('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.v15('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.v15('EOF');
      }
      if (!(charSequenceGet(this.b1b(), current) === _Char___init__impl__6a9atx(34))) {
        this.v15('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.u12_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.v2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).v2() || doubleAccumulator < (new Long(0, -2147483648)).v2()) {
        this.v15('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.v15("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.p2();
    } else {
      this.v15('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).d19 = function () {
    var current = this.e1b();
    if (current === charSequenceLength(this.b1b())) {
      this.v15('EOF');
    }
    var tmp;
    if (charSequenceGet(this.b1b(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.u12_1 === charSequenceLength(this.b1b())) {
        this.v15('EOF');
      }
      if (!(charSequenceGet(this.b1b(), this.u12_1) === _Char___init__impl__6a9atx(34))) {
        this.v15('Expected closing quotation mark');
      }
      this.u12_1 = this.u12_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().m1b_1;
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
    return c < 117 ? CharMappings_getInstance().l1b_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.l1b_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.m1b_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.l1b_1 = charArray(117);
    this.m1b_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).c17 = function () {
    var source = this.b1b();
    var cpos = this.e1b();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.u12_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).y16 = function () {
    var current = this.e1b();
    if (current >= this.b1b().length || current === -1)
      return false;
    return this.f1b(charSequenceGet(this.b1b(), current));
  };
  protoOf(StringJsonLexerWithComments).n18 = function (expected) {
    var source = this.b1b();
    var current = this.e1b();
    if (current >= source.length || current === -1) {
      this.u12_1 = -1;
      this.h1b(expected);
    }
    var c = charSequenceGet(source, current);
    this.u12_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.h1b(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).x16 = function () {
    var source = this.b1b();
    var cpos = this.e1b();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.u12_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).e1b = function () {
    var current = this.u12_1;
    if (current === -1)
      return current;
    var source = this.b1b();
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
            this.u12_1 = source.length;
            this.v15('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.u12_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.w1b_1 = source;
  }
  protoOf(StringJsonLexer).b1b = function () {
    return this.w1b_1;
  };
  protoOf(StringJsonLexer).c1b = function (position) {
    return position < this.b1b().length ? position : -1;
  };
  protoOf(StringJsonLexer).c17 = function () {
    var source = this.b1b();
    var cpos = this.u12_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.u12_1 = cpos;
      return charToTokenClass(c);
    }
    this.u12_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).y16 = function () {
    var current = this.u12_1;
    if (current === -1)
      return false;
    var source = this.b1b();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.u12_1 = current;
      return this.f1b(c);
    }
    this.u12_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).e1b = function () {
    var current = this.u12_1;
    if (current === -1)
      return current;
    var source = this.b1b();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.u12_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).n18 = function (expected) {
    if (this.u12_1 === -1) {
      this.h1b(expected);
    }
    var source = this.b1b();
    var cpos = this.u12_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.u12_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.h1b(expected);
    }
    this.u12_1 = -1;
    this.h1b(expected);
  };
  protoOf(StringJsonLexer).t18 = function () {
    this.n18(_Char___init__impl__6a9atx(34));
    var current = this.u12_1;
    var closingQuote = indexOf_0(this.b1b(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.a17();
      this.i1b(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.b1b(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.b1b(), this.u12_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.u12_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.b1b().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).x18 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.u12_1;
    try {
      if (!(this.c17() === 6))
        return null;
      var firstKey = this.q18(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.j1b();
      if (!(this.c17() === 5))
        return null;
      return this.q18(isLenient);
    }finally {
      this.u12_1 = positionSnapshot;
      this.j1b();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.f12_1.h14_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.h12_1;
  }
  function JsonToStringWriter() {
    this.k12_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).h15 = function (value) {
    this.k12_1.ba(value);
  };
  protoOf(JsonToStringWriter).c15 = function (char) {
    this.k12_1.j7(char);
  };
  protoOf(JsonToStringWriter).e15 = function (text) {
    this.k12_1.i7(text);
  };
  protoOf(JsonToStringWriter).l15 = function (text) {
    printQuoted(this.k12_1, text);
  };
  protoOf(JsonToStringWriter).l12 = function () {
    this.k12_1.da();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.k12_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).ql = contextual;
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

