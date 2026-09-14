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
  var protoOf = kotlin_kotlin.$_$.x4;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.o1;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var toString = kotlin_kotlin.$_$.a5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var charSequenceLength = kotlin_kotlin.$_$.x3;
  var charSequenceGet = kotlin_kotlin.$_$.w3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e1;
  var equals = kotlin_kotlin.$_$.b4;
  var toString_0 = kotlin_kotlin.$_$.d7;
  var Enum = kotlin_kotlin.$_$.m6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o;
  var hashCode = kotlin_kotlin.$_$.h4;
  var joinToString = kotlin_kotlin.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.r6;
  var KtMap = kotlin_kotlin.$_$.t1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.d4;
  var getStringHashCode = kotlin_kotlin.$_$.g4;
  var KtList = kotlin_kotlin.$_$.s1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var numberRangeToNumber = kotlin_kotlin.$_$.r4;
  var ClosedRange = kotlin_kotlin.$_$.c5;
  var isInterface = kotlin_kotlin.$_$.p4;
  var contains = kotlin_kotlin.$_$.f5;
  var toDouble = kotlin_kotlin.$_$.d6;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.m1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong = kotlin_kotlin.$_$.z4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.t3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.y3;
  var coerceAtLeast = kotlin_kotlin.$_$.d5;
  var coerceAtMost = kotlin_kotlin.$_$.e5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.d3;
  var emptyMap = kotlin_kotlin.$_$.f2;
  var getValue = kotlin_kotlin.$_$.i2;
  var fillArrayVal = kotlin_kotlin.$_$.c4;
  var copyOf = kotlin_kotlin.$_$.a2;
  var copyOf_0 = kotlin_kotlin.$_$.b2;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.k6;
  var invoke = kotlin_kotlin.$_$.x6;
  var CoroutineImpl = kotlin_kotlin.$_$.p3;
  var DeepRecursiveScope = kotlin_kotlin.$_$.l6;
  var Unit = kotlin_kotlin.$_$.t6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o3;
  var initMetadataForLambda = kotlin_kotlin.$_$.m4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.k4;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x;
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
  var ensureNotNull = kotlin_kotlin.$_$.w6;
  var substringBefore = kotlin_kotlin.$_$.c6;
  var removeSuffix = kotlin_kotlin.$_$.v5;
  var substringAfter = kotlin_kotlin.$_$.a6;
  var contains_0 = kotlin_kotlin.$_$.m5;
  var plus = kotlin_kotlin.$_$.c7;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.o6;
  var isFinite = kotlin_kotlin.$_$.y6;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var objectCreate = kotlin_kotlin.$_$.w4;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b7;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g1;
  var numberToChar = kotlin_kotlin.$_$.s4;
  var equals_0 = kotlin_kotlin.$_$.n5;
  var toString_1 = kotlin_kotlin.$_$.h1;
  var toByte = kotlin_kotlin.$_$.y4;
  var startsWith = kotlin_kotlin.$_$.z5;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var emptySet = kotlin_kotlin.$_$.g2;
  var plus_0 = kotlin_kotlin.$_$.y2;
  var toInt = kotlin_kotlin.$_$.f6;
  var toList = kotlin_kotlin.$_$.i3;
  var enumEntries = kotlin_kotlin.$_$.q3;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var last = kotlin_kotlin.$_$.q2;
  var removeLast = kotlin_kotlin.$_$.b3;
  var lastIndexOf = kotlin_kotlin.$_$.t5;
  var Long = kotlin_kotlin.$_$.p6;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.f1;
  var numberToLong = kotlin_kotlin.$_$.v4;
  var charArray = kotlin_kotlin.$_$.v3;
  var indexOf = kotlin_kotlin.$_$.o5;
  var indexOf_0 = kotlin_kotlin.$_$.p5;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
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
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [CompositeEncoder, Encoder, AbstractEncoder]);
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
    this.gq_1 = configuration;
    this.hq_1 = serializersModule;
    this.iq_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).md = function () {
    return this.hq_1;
  };
  protoOf(Json).jq = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.mq();
    }
  };
  protoOf(Json).kq = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.tb(), null);
    var result = input.dd(deserializer);
    lexer.zq();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.sr();
    return new JsonImpl(conf, builder.rr_1);
  }
  function JsonBuilder(json) {
    this.ar_1 = json.gq_1.tr_1;
    this.br_1 = json.gq_1.yr_1;
    this.cr_1 = json.gq_1.ur_1;
    this.dr_1 = json.gq_1.vr_1;
    this.er_1 = json.gq_1.xr_1;
    this.fr_1 = json.gq_1.zr_1;
    this.gr_1 = json.gq_1.as_1;
    this.hr_1 = json.gq_1.cs_1;
    this.ir_1 = json.gq_1.js_1;
    this.jr_1 = json.gq_1.es_1;
    this.kr_1 = json.gq_1.fs_1;
    this.lr_1 = json.gq_1.gs_1;
    this.mr_1 = json.gq_1.hs_1;
    this.nr_1 = json.gq_1.is_1;
    this.or_1 = json.gq_1.ds_1;
    this.pr_1 = json.gq_1.wr_1;
    this.qr_1 = json.gq_1.bs_1;
    this.rr_1 = json.md();
  }
  protoOf(JsonBuilder).sr = function () {
    if (this.qr_1) {
      // Inline function 'kotlin.require' call
      if (!(this.hr_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.ir_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.er_1) {
      // Inline function 'kotlin.require' call
      if (!(this.fr_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.fr_1 === '    ')) {
      var tmp3 = this.fr_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.fr_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.ar_1, this.cr_1, this.dr_1, this.pr_1, this.er_1, this.br_1, this.fr_1, this.gr_1, this.qr_1, this.hr_1, this.or_1, this.jr_1, this.kr_1, this.lr_1, this.mr_1, this.nr_1, this.ir_1);
  };
  function validateConfiguration($this) {
    if (equals($this.md(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.gq_1.bs_1, $this.gq_1.cs_1);
    $this.md().yi(collector);
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
    this.tr_1 = encodeDefaults;
    this.ur_1 = ignoreUnknownKeys;
    this.vr_1 = isLenient;
    this.wr_1 = allowStructuredMapKeys;
    this.xr_1 = prettyPrint;
    this.yr_1 = explicitNulls;
    this.zr_1 = prettyPrintIndent;
    this.as_1 = coerceInputValues;
    this.bs_1 = useArrayPolymorphism;
    this.cs_1 = classDiscriminator;
    this.ds_1 = allowSpecialFloatingPointValues;
    this.es_1 = useAlternativeNames;
    this.fs_1 = namingStrategy;
    this.gs_1 = decodeEnumsCaseInsensitive;
    this.hs_1 = allowTrailingComma;
    this.is_1 = allowComments;
    this.js_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.tr_1 + ', ignoreUnknownKeys=' + this.ur_1 + ', isLenient=' + this.vr_1 + ', ' + ('allowStructuredMapKeys=' + this.wr_1 + ', prettyPrint=' + this.xr_1 + ', explicitNulls=' + this.yr_1 + ', ') + ("prettyPrintIndent='" + this.zr_1 + "', coerceInputValues=" + this.as_1 + ', useArrayPolymorphism=' + this.bs_1 + ', ') + ("classDiscriminator='" + this.cs_1 + "', allowSpecialFloatingPointValues=" + this.ds_1 + ', ') + ('useAlternativeNames=' + this.es_1 + ', namingStrategy=' + toString_0(this.fs_1) + ', decodeEnumsCaseInsensitive=' + this.gs_1 + ', ') + ('allowTrailingComma=' + this.hs_1 + ', allowComments=' + this.is_1 + ', classDiscriminatorMode=' + this.js_1.toString() + ')');
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
    var k = _destruct__k2r9zo.q1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.r1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.p6(_Char___init__impl__6a9atx(58));
    this_0.n6(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.ks_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.ks_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.ks_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.ks_1.v1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).ls = function (key) {
    return this.ks_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.ls((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).ms = function (key) {
    return this.ks_1.t1(key);
  };
  protoOf(JsonObject).t1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ms((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).j = function () {
    return this.ks_1.j();
  };
  protoOf(JsonObject).v1 = function () {
    return this.ks_1.v1();
  };
  protoOf(JsonObject).u1 = function () {
    return this.ks_1.u1();
  };
  protoOf(JsonObject).l = function () {
    return this.ks_1.l();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.ns_1 = 'null';
  }
  protoOf(JsonNull).os = function () {
    return this.ns_1;
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
    return this.os();
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
    this.ps_1 = isString;
    this.qs_1 = coerceToInlineType;
    this.rs_1 = toString(body);
    if (!(this.qs_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.qs_1.jc()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).os = function () {
    return this.rs_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.ps_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.rs_1);
      tmp = this_0.toString();
    } else {
      tmp = this.rs_1;
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
    if (!(this.ps_1 === other.ps_1))
      return false;
    if (!(this.rs_1 === other.rs_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.ps_1);
    result = imul(31, result) + getStringHashCode(this.rs_1) | 0;
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
    this.ss_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.ss_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.ss_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.ss_1, ',', '[', ']');
  };
  protoOf(JsonArray).k = function (index) {
    return this.ss_1.k(index);
  };
  protoOf(JsonArray).j = function () {
    return this.ss_1.j();
  };
  protoOf(JsonArray).g = function () {
    return this.ss_1.g();
  };
  protoOf(JsonArray).q = function (index) {
    return this.ss_1.q(index);
  };
  protoOf(JsonArray).l = function () {
    return this.ss_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.os());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.os())).ts();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.os() + ' is not an Int');
    return result.z();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.os())).ts();
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
    return toDouble(_this__u8e3s4.os());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.os();
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
    this.us_1 = writer;
    this.vs_1 = true;
  }
  protoOf(Composer).ws = function () {
    this.vs_1 = true;
  };
  protoOf(Composer).xs = function () {
    return Unit_instance;
  };
  protoOf(Composer).ys = function () {
    this.vs_1 = false;
  };
  protoOf(Composer).zs = function () {
    this.vs_1 = false;
  };
  protoOf(Composer).at = function () {
    return Unit_instance;
  };
  protoOf(Composer).bt = function (v) {
    return this.us_1.ct(v);
  };
  protoOf(Composer).dt = function (v) {
    return this.us_1.et(v);
  };
  protoOf(Composer).ft = function (v) {
    return this.us_1.et(v.toString());
  };
  protoOf(Composer).gt = function (v) {
    return this.us_1.ht(toLong(v));
  };
  protoOf(Composer).it = function (v) {
    return this.us_1.ht(v);
  };
  protoOf(Composer).jt = function (v) {
    return this.us_1.et(v.toString());
  };
  protoOf(Composer).kt = function (value) {
    return this.us_1.lt(value);
  };
  function Composer_0(sb, json) {
    return json.gq_1.xr_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.ot_1 = json;
    this.pt_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).ws = function () {
    this.vs_1 = true;
    this.pt_1 = this.pt_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).xs = function () {
    this.pt_1 = this.pt_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).ys = function () {
    this.vs_1 = false;
    this.dt('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.pt_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.dt(this.ot_1.gq_1.zr_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).zs = function () {
    if (this.vs_1)
      this.vs_1 = false;
    else {
      this.ys();
    }
  };
  protoOf(ComposerWithPrettyPrint).at = function () {
    this.bt(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.rt_1 = (!descriptor.qc(index) && descriptor.pc(index).bc());
    return $this.rt_1;
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
    tmp.qt_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.rt_1 = false;
  }
  protoOf(JsonElementMarker).st = function (index) {
    this.qt_1.jg(index);
  };
  protoOf(JsonElementMarker).tt = function () {
    return this.qt_1.kg();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.ut('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.vq_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.vt('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.hc() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ic().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.nc(name);
    if (!(index === -3))
      return index;
    if (!json.gq_1.es_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.mc(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.ic(), CLASS_getInstance()) ? json.gq_1.fs_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.xt(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.gq_1.gs_1 && equals(descriptor.ic(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).t1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.xt(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.kc();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.oc(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yt_1;
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
          tmp_0 = _this__u8e3s4.mc(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.zt(_this__u8e3s4, i, _this__u8e3s4.mc(i));
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
    var entity = equals($this_buildDeserializationNamesMap.ic(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).s1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.mc(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.mc(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.w1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.kc();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.mc(tmp_2);
        tmp_1[tmp_2] = $strategy.zt($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.cu_1, 2);
    $this.au_1 = copyOf($this.au_1, newSize);
    $this.bu_1 = copyOf_0($this.bu_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.au_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.bu_1 = tmp_2;
    this.cu_1 = -1;
  }
  protoOf(JsonPath).du = function (sd) {
    this.cu_1 = this.cu_1 + 1 | 0;
    var depth = this.cu_1;
    if (depth === this.au_1.length) {
      resize(this);
    }
    this.au_1[depth] = sd;
  };
  protoOf(JsonPath).eu = function (index) {
    this.bu_1[this.cu_1] = index;
  };
  protoOf(JsonPath).fu = function (key) {
    var tmp;
    if (!(this.bu_1[this.cu_1] === -2)) {
      this.cu_1 = this.cu_1 + 1 | 0;
      tmp = this.cu_1 === this.au_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.au_1[this.cu_1] = key;
    this.bu_1[this.cu_1] = -2;
  };
  protoOf(JsonPath).gu = function () {
    if (this.bu_1[this.cu_1] === -2) {
      this.au_1[this.cu_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).hu = function () {
    var depth = this.cu_1;
    if (this.bu_1[depth] === -2) {
      this.bu_1[depth] = -1;
      this.cu_1 = this.cu_1 - 1 | 0;
    }
    if (!(this.cu_1 === -1)) {
      this.cu_1 = this.cu_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).iu = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.o6('$');
    // Inline function 'kotlin.repeat' call
    var times = this.cu_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.au_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ic(), LIST_getInstance())) {
            if (!(this.bu_1[index] === -1)) {
              this_0.o6('[');
              this_0.g9(this.bu_1[index]);
              this_0.o6(']');
            }
          } else {
            var idx = this.bu_1[index];
            if (idx >= 0) {
              this_0.o6('.');
              this_0.o6(element.mc(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.o6('[');
            this_0.o6("'");
            this_0.n6(element);
            this_0.o6("'");
            this_0.o6(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.iu();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.ce(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.su_1.wu(6);
    if ($this.su_1.xu() === 4) {
      $this.su_1.vt('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.su_1.yu()) {
      var key = $this.tu_1 ? $this.su_1.av() : $this.su_1.zu();
      $this.su_1.wu(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.bv();
      // Inline function 'kotlin.collections.set' call
      result.w1(key, element);
      lastToken = $this.su_1.cv();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.su_1.vt('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.su_1.wu(7);
    } else if (lastToken === 4) {
      if (!$this.uu_1) {
        invalidTrailingComma($this.su_1);
      }
      $this.su_1.wu(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.c7_1 = Unit_instance;
    tmp.d7_1 = null;
    return tmp.i7();
  }
  function readArray($this) {
    var lastToken = $this.su_1.cv();
    if ($this.su_1.xu() === 4) {
      $this.su_1.vt('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.su_1.yu()) {
      var element = $this.bv();
      result.e(element);
      lastToken = $this.su_1.cv();
      if (!(lastToken === 4)) {
        var tmp0 = $this.su_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.vq_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.vt(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.su_1.wu(9);
    } else if (lastToken === 4) {
      if (!$this.uu_1) {
        invalidTrailingComma($this.su_1, 'array');
      }
      $this.su_1.wu(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.tu_1 || !isString) {
      tmp = $this.su_1.av();
    } else {
      tmp = $this.su_1.zu();
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
    this.aw_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).fw = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.gw($this$DeepRecursiveFunction, it, $completion);
    tmp.c7_1 = Unit_instance;
    tmp.d7_1 = null;
    return tmp.i7();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).o7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.fw(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i7 = function () {
    var suspendResult = this.c7_1;
    $sm: do
      try {
        var tmp = this.a7_1;
        switch (tmp) {
          case 0:
            this.b7_1 = 3;
            this.dw_1 = this.aw_1.su_1.xu();
            if (this.dw_1 === 1) {
              this.ew_1 = readValue(this.aw_1, true);
              this.a7_1 = 2;
              continue $sm;
            } else {
              if (this.dw_1 === 0) {
                this.ew_1 = readValue(this.aw_1, false);
                this.a7_1 = 2;
                continue $sm;
              } else {
                if (this.dw_1 === 6) {
                  this.a7_1 = 1;
                  suspendResult = readObject_0(this.bw_1, this.aw_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.dw_1 === 8) {
                    this.ew_1 = readArray(this.aw_1);
                    this.a7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.aw_1.su_1.vt("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.ew_1 = suspendResult;
            this.a7_1 = 2;
            continue $sm;
          case 2:
            return this.ew_1;
          case 3:
            throw this.d7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b7_1 === 3) {
          throw e;
        } else {
          this.a7_1 = this.b7_1;
          this.d7_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).gw = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.aw_1, completion);
    i.bw_1 = $this$DeepRecursiveFunction;
    i.cw_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.fw($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lv_1 = _this__u8e3s4;
    this.mv_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).i7 = function () {
    var suspendResult = this.c7_1;
    $sm: do
      try {
        var tmp = this.a7_1;
        switch (tmp) {
          case 0:
            this.b7_1 = 5;
            var tmp_0 = this;
            tmp_0.nv_1 = this.lv_1;
            this.ov_1 = this.nv_1;
            this.pv_1 = this.ov_1.su_1.wu(6);
            if (this.ov_1.su_1.xu() === 4) {
              this.ov_1.su_1.vt('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.qv_1 = LinkedHashMap_init_$Create$();
            this.a7_1 = 1;
            continue $sm;
          case 1:
            if (!this.ov_1.su_1.yu()) {
              this.a7_1 = 4;
              continue $sm;
            }

            this.rv_1 = this.ov_1.tu_1 ? this.ov_1.su_1.av() : this.ov_1.su_1.zu();
            this.ov_1.su_1.wu(5);
            this.a7_1 = 2;
            suspendResult = this.mv_1.gb(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.qv_1;
            var key = this.rv_1;
            tmp0.w1(key, element);
            this.pv_1 = this.ov_1.su_1.cv();
            var tmp0_subject = this.pv_1;
            if (tmp0_subject === 4) {
              this.a7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.a7_1 = 4;
                continue $sm;
              } else {
                this.ov_1.su_1.vt('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.a7_1 = 1;
            continue $sm;
          case 4:
            if (this.pv_1 === 6) {
              this.ov_1.su_1.wu(7);
            } else if (this.pv_1 === 4) {
              if (!this.ov_1.uu_1) {
                invalidTrailingComma(this.ov_1.su_1);
              }
              this.ov_1.su_1.wu(7);
            }

            return new JsonObject(this.qv_1);
          case 5:
            throw this.d7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b7_1 === 5) {
          throw e;
        } else {
          this.a7_1 = this.b7_1;
          this.d7_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.su_1 = lexer;
    this.tu_1 = configuration.vr_1;
    this.uu_1 = configuration.hs_1;
    this.vu_1 = 0;
  }
  protoOf(JsonTreeReader).bv = function () {
    var token = this.su_1.xu();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.vu_1 = this.vu_1 + 1 | 0;
      if (this.vu_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.vu_1 = this.vu_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.su_1.vt('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.lc().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.hw_1;
    }
    return json.gq_1.cs_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.tb()).o1(classDiscriminator)) {
      var baseName = serializer.tb().hc();
      var actualName = actualSerializer.tb().hc();
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
    var kind = descriptor.ic();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.z7() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.iw_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.z7() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.kc();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.mc(i);
        if (name === $this.jw_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.iw_1 = useArrayPolymorphism;
    this.jw_1 = discriminator;
  }
  protoOf(PolymorphismValidator).hj = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).kj = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.tb();
    checkKind_0(this, descriptor, actualClass);
    if (!this.iw_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).lj = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).mj = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.wt_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).kw = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.wt_1;
    var value_0 = this_0.t1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.w1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.w1(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).xt = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.lw(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.kw(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).lw = function (descriptor, key) {
    var tmp0_safe_receiver = this.wt_1.t1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.t1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.mw_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.mw_1 === unknownKey) {
      _this__u8e3s4.mw_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.od(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.pq_1.xu() === 4) {
      $this.pq_1.vt('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.rq_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.rq_1 === -1)) {
        hasComma = $this.pq_1.ow();
      }
    } else {
      $this.pq_1.nw(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.pq_1.yu()) {
      if (decodingKey) {
        if ($this.rq_1 === -1) {
          var tmp0 = $this.pq_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.vq_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.vt(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.pq_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.vq_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.vt(tmp$ret$1, position_0);
          }
        }
      }
      $this.rq_1 = $this.rq_1 + 1 | 0;
      tmp = $this.rq_1;
    } else {
      if (hasComma && !$this.nq_1.gq_1.hs_1) {
        invalidTrailingComma($this.pq_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.nq_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.qc(index);
      var elementDescriptor = descriptor.pc(index);
      var tmp;
      if (isOptional && !elementDescriptor.bc()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.pq_1.pw(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ic(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.bc()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.pq_1.pw(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.pq_1.qw($this.tq_1.vr_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.gq_1.yr_1 && elementDescriptor.bc();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.pq_1.zu();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.pq_1.ow();
    while ($this.pq_1.yu()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.pq_1.nw(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.nq_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.tq_1.as_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.pq_1.ow();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.uq_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.st(index);
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
    if (hasComma && !$this.nq_1.gq_1.hs_1) {
      invalidTrailingComma($this.pq_1);
    }
    var tmp1_safe_receiver = $this.uq_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.tt();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.tq_1.ur_1 || trySkip($this.sq_1, $this, key)) {
      $this.pq_1.sw($this.tq_1.vr_1);
    } else {
      $this.pq_1.rw(key);
    }
    return $this.pq_1.ow();
  }
  function decodeListIndex($this) {
    var hasComma = $this.pq_1.ow();
    var tmp;
    if ($this.pq_1.yu()) {
      if (!($this.rq_1 === -1) && !hasComma) {
        $this.pq_1.vt('Expected end of the array or comma');
      }
      $this.rq_1 = $this.rq_1 + 1 | 0;
      tmp = $this.rq_1;
    } else {
      if (hasComma && !$this.nq_1.gq_1.hs_1) {
        invalidTrailingComma($this.pq_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.tq_1.vr_1) {
      tmp = $this.pq_1.uw();
    } else {
      tmp = $this.pq_1.tw();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.nq_1 = json;
    this.oq_1 = mode;
    this.pq_1 = lexer;
    this.qq_1 = this.nq_1.md();
    this.rq_1 = -1;
    this.sq_1 = discriminatorHolder;
    this.tq_1 = this.nq_1.gq_1;
    this.uq_1 = this.tq_1.yr_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).vw = function () {
    return this.nq_1;
  };
  protoOf(StreamingJsonDecoder).md = function () {
    return this.qq_1;
  };
  protoOf(StreamingJsonDecoder).ww = function () {
    return (new JsonTreeReader(this.nq_1.gq_1, this.pq_1)).bv();
  };
  protoOf(StreamingJsonDecoder).dd = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.nq_1.gq_1.bs_1;
      }
      if (tmp) {
        return deserializer.vb(this);
      }
      var discriminator = classDiscriminator(deserializer.tb(), this.nq_1);
      var tmp0_elvis_lhs = this.pq_1.xw(discriminator, this.tq_1.vr_1);
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
            tmp_1 = this.vw().gq_1.bs_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.vb(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.tb(), this.vw());
          var tmp0 = this.ww();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.tb().hc();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).z7();
            var tmp_3 = getKClassFromExpression(tmp0).z7();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.pq_1.wq_1.iu();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.ms(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.vw(), discriminator_0, jsonTree, actualSerializer);
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
          this.pq_1.vt(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.sq_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.vb(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.ac_1, plus(e.message, ' at path: ') + this.pq_1.wq_1.iu(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).ed = function (descriptor) {
    var newMode = switchMode(this.nq_1, descriptor);
    this.pq_1.wq_1.du(descriptor);
    this.pq_1.nw(newMode.ax_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.y1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.nq_1, newMode, this.pq_1, descriptor, this.sq_1);
        break;
      default:
        var tmp_0;
        if (this.oq_1.equals(newMode) && this.nq_1.gq_1.yr_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.nq_1, newMode, this.pq_1, descriptor, this.sq_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).fd = function (descriptor) {
    if (this.nq_1.gq_1.ur_1 && descriptor.kc() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.pq_1.ow() && !this.nq_1.gq_1.hs_1) {
      invalidTrailingComma(this.pq_1, '');
    }
    this.pq_1.nw(this.oq_1.bx_1);
    this.pq_1.wq_1.hu();
  };
  protoOf(StreamingJsonDecoder).vc = function () {
    var tmp;
    var tmp0_safe_receiver = this.uq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rt_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.pq_1.cx();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).wc = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).jd = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.oq_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.pq_1.wq_1.gu();
    }
    var value = protoOf(AbstractDecoder).jd.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.pq_1.wq_1.fu(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).od = function (descriptor) {
    var index;
    switch (this.oq_1.y1_1) {
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
    if (!this.oq_1.equals(WriteMode_MAP_getInstance())) {
      this.pq_1.wq_1.eu(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).xc = function () {
    return this.pq_1.dx();
  };
  protoOf(StreamingJsonDecoder).yc = function () {
    var value = this.pq_1.ts();
    if (!value.equals(toLong(value.z()))) {
      this.pq_1.vt("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.z();
  };
  protoOf(StreamingJsonDecoder).zc = function () {
    return this.pq_1.ts();
  };
  protoOf(StreamingJsonDecoder).ad = function () {
    var tmp0 = this.pq_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.av();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.vt("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.nq_1.gq_1.ds_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.pq_1, result);
  };
  protoOf(StreamingJsonDecoder).bd = function () {
    var tmp;
    if (this.tq_1.vr_1) {
      tmp = this.pq_1.uw();
    } else {
      tmp = this.pq_1.zu();
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
    $this.ju_1.ys();
    $this.xd(discriminator);
    $this.ju_1.bt(_Char___init__impl__6a9atx(58));
    $this.ju_1.at();
    $this.xd(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.ju_1 = composer;
    this.ku_1 = json;
    this.lu_1 = mode;
    this.mu_1 = modeReuseCache;
    this.nu_1 = this.ku_1.md();
    this.ou_1 = this.ku_1.gq_1;
    this.pu_1 = false;
    this.qu_1 = null;
    this.ru_1 = null;
    var i = this.lu_1.y1_1;
    if (!(this.mu_1 == null)) {
      if (!(this.mu_1[i] === null) || !(this.mu_1[i] === this)) {
        this.mu_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).vw = function () {
    return this.ku_1;
  };
  protoOf(StreamingJsonEncoder).md = function () {
    return this.nu_1;
  };
  protoOf(StreamingJsonEncoder).he = function (descriptor, index) {
    return this.ou_1.tr_1;
  };
  protoOf(StreamingJsonEncoder).ce = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.vw().gq_1.bs_1) {
        serializer.ub(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.vw().gq_1.js_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.vw().gq_1.js_1.y1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.tb().ic();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.tb(), this.vw()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.tb()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.tb().ic());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.tb().hc();
        this.qu_1 = baseClassDiscriminator;
        this.ru_1 = serialName;
      }
      actualSerializer.ub(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).ed = function (descriptor) {
    var newMode = switchMode(this.ku_1, descriptor);
    if (!(newMode.ax_1 === _Char___init__impl__6a9atx(0))) {
      this.ju_1.bt(newMode.ax_1);
      this.ju_1.ws();
    }
    var discriminator = this.qu_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.ru_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.hc() : tmp0_elvis_lhs);
      this.qu_1 = null;
      this.ru_1 = null;
    }
    if (this.lu_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.mu_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.y1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.ju_1, this.ku_1, newMode, this.mu_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).fd = function (descriptor) {
    if (!(this.lu_1.bx_1 === _Char___init__impl__6a9atx(0))) {
      this.ju_1.xs();
      this.ju_1.zs();
      this.ju_1.bt(this.lu_1.bx_1);
    }
  };
  protoOf(StreamingJsonEncoder).qd = function (descriptor, index) {
    switch (this.lu_1.y1_1) {
      case 1:
        if (!this.ju_1.vs_1) {
          this.ju_1.bt(_Char___init__impl__6a9atx(44));
        }

        this.ju_1.ys();
        break;
      case 2:
        if (!this.ju_1.vs_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.ju_1.bt(_Char___init__impl__6a9atx(44));
            this.ju_1.ys();
            tmp_0 = true;
          } else {
            this.ju_1.bt(_Char___init__impl__6a9atx(58));
            this.ju_1.at();
            tmp_0 = false;
          }
          tmp.pu_1 = tmp_0;
        } else {
          this.pu_1 = true;
          this.ju_1.ys();
        }

        break;
      case 3:
        if (index === 0)
          this.pu_1 = true;
        if (index === 1) {
          this.ju_1.bt(_Char___init__impl__6a9atx(44));
          this.ju_1.at();
          this.pu_1 = false;
        }

        break;
      default:
        if (!this.ju_1.vs_1) {
          this.ju_1.bt(_Char___init__impl__6a9atx(44));
        }

        this.ju_1.ys();
        this.xd(getJsonElementName(descriptor, this.ku_1, index));
        this.ju_1.bt(_Char___init__impl__6a9atx(58));
        this.ju_1.at();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).de = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.ou_1.yr_1) {
      protoOf(AbstractEncoder).de.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).sd = function () {
    this.ju_1.dt('null');
  };
  protoOf(StreamingJsonEncoder).td = function (value) {
    if (this.pu_1) {
      this.xd(value.toString());
    } else {
      this.ju_1.jt(value);
    }
  };
  protoOf(StreamingJsonEncoder).ud = function (value) {
    if (this.pu_1) {
      this.xd(value.toString());
    } else {
      this.ju_1.gt(value);
    }
  };
  protoOf(StreamingJsonEncoder).vd = function (value) {
    if (this.pu_1) {
      this.xd(value.toString());
    } else {
      this.ju_1.it(value);
    }
  };
  protoOf(StreamingJsonEncoder).wd = function (value) {
    if (this.pu_1) {
      this.xd(value.toString());
    } else {
      this.ju_1.ft(value);
    }
    if (!this.ou_1.ds_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.ju_1.us_1));
    }
  };
  protoOf(StreamingJsonEncoder).xd = function (value) {
    return this.ju_1.kt(value);
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
    _this__u8e3s4.p6(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.e9(value, lastPos, i);
          _this__u8e3s4.o6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.e9(value, lastPos, value.length);
    else
      _this__u8e3s4.o6(value);
    _this__u8e3s4.p6(_Char___init__impl__6a9atx(34));
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.kx(tag), toString($this.lx()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.gx_1 = json;
    this.hx_1 = value;
    this.ix_1 = polymorphicDiscriminator;
    this.jx_1 = this.vw().gq_1;
  }
  protoOf(AbstractJsonTreeDecoder).vw = function () {
    return this.gx_1;
  };
  protoOf(AbstractJsonTreeDecoder).r1 = function () {
    return this.hx_1;
  };
  protoOf(AbstractJsonTreeDecoder).md = function () {
    return this.vw().md();
  };
  protoOf(AbstractJsonTreeDecoder).lx = function () {
    var tmp0_safe_receiver = this.li();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.mx(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.r1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).kx = function (currentTag) {
    return this.ni() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).ww = function () {
    return this.lx();
  };
  protoOf(AbstractJsonTreeDecoder).dd = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.vw().gq_1.bs_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.vb(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.tb(), this.vw());
      var tmp0 = this.ww();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.tb().hc();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).z7();
        var tmp_1 = getKClassFromExpression(tmp0).z7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.ni();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.ms(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.vw(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).mi = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).ed = function (descriptor) {
    var currentObject = this.lx();
    var tmp0_subject = descriptor.ic();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.vw();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.hc();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).z7();
        var tmp_3 = getKClassFromExpression(currentObject).z7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.ni();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.vw();
        var keyDescriptor = carrierDescriptor(descriptor.pc(0), this_0.md());
        var keyKind = keyDescriptor.ic();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.vw();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.hc();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).z7();
            var tmp_8 = getKClassFromExpression(currentObject).z7();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.ni();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.gq_1.wr_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.vw();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.hc();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).z7();
              var tmp_11 = getKClassFromExpression(currentObject).z7();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.ni();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.vw();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.hc();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).z7();
          var tmp_14 = getKClassFromExpression(currentObject).z7();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.ni();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.ix_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).fd = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).vc = function () {
    var tmp = this.lx();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).nx = function (tag) {
    return !(this.mx(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).pi = function (tag) {
    return this.nx((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).ox = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.mx(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z7();
        var tmp_0 = getKClassFromExpression(value).z7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.kx(tag);
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
  protoOf(AbstractJsonTreeDecoder).qi = function (tag) {
    return this.ox((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).px = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.mx(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z7();
        var tmp_0 = getKClassFromExpression(value).z7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.kx(tag);
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
  protoOf(AbstractJsonTreeDecoder).ri = function (tag) {
    return this.px((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).qx = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.mx(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z7();
        var tmp_0 = getKClassFromExpression(value).z7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.kx(tag);
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
  protoOf(AbstractJsonTreeDecoder).si = function (tag) {
    return this.qx((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).rx = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.mx(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z7();
        var tmp_0 = getKClassFromExpression(value).z7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.kx(tag);
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
    var specialFp = this.vw().gq_1.ds_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.lx()));
  };
  protoOf(AbstractJsonTreeDecoder).ti = function (tag) {
    return this.rx((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).sx = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.mx(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).z7();
      var tmp_0 = getKClassFromExpression(value).z7();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.kx(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.kx(tag), toString(this.lx()));
    if (!value_0.ps_1 && !this.vw().gq_1.vr_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.kx(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.lx()));
    }
    return value_0.rs_1;
  };
  protoOf(AbstractJsonTreeDecoder).ui = function (tag) {
    return this.sx((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.vw();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.qc(index);
      var elementDescriptor = descriptor.pc(index);
      var tmp;
      if (isOptional && !elementDescriptor.bc()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.mx(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ic(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.bc()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.mx(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.mx(tag);
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
        var coerceToNull = !tmp0.gq_1.yr_1 && elementDescriptor.bc();
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
    $this.cy_1 = (!$this.vw().gq_1.yr_1 && !descriptor.qc(index) && descriptor.pc(index).bc());
    return $this.cy_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.zx_1 = value;
    this.ay_1 = polyDescriptor;
    this.by_1 = 0;
    this.cy_1 = false;
  }
  protoOf(JsonTreeDecoder).r1 = function () {
    return this.zx_1;
  };
  protoOf(JsonTreeDecoder).od = function (descriptor) {
    while (this.by_1 < descriptor.kc()) {
      var _unary__edvuaz = this.by_1;
      this.by_1 = _unary__edvuaz + 1 | 0;
      var name = this.gi(descriptor, _unary__edvuaz);
      var index = this.by_1 - 1 | 0;
      this.cy_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.r1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).s1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.jx_1.as_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).vc = function () {
    return !this.cy_1 && protoOf(AbstractJsonTreeDecoder).vc.call(this);
  };
  protoOf(JsonTreeDecoder).hi = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.vw());
    var baseName = descriptor.mc(index);
    if (strategy == null) {
      if (!this.jx_1.es_1)
        return baseName;
      if (this.r1().u1().o1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.vw(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.r1().u1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.t1(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.zt(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).mx = function (tag) {
    return getValue(this.r1(), tag);
  };
  protoOf(JsonTreeDecoder).ed = function (descriptor) {
    if (descriptor === this.ay_1) {
      var tmp = this.vw();
      var tmp1 = this.lx();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.ay_1.hc();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).z7();
        var tmp_1 = getKClassFromExpression(tmp1).z7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.ni();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.ix_1, this.ay_1);
    }
    return protoOf(AbstractJsonTreeDecoder).ed.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).fd = function (descriptor) {
    var tmp;
    if (this.jx_1.ur_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ic();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.vw());
    var tmp_1;
    if (strategy == null && !this.jx_1.es_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.vw(), descriptor).u1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.vw()).lw(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.r1().u1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.o1(key) && !(key === this.ix_1)) {
        throw UnknownKeyException(key, this.r1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.jy_1 = value;
    this.ky_1 = this.jy_1.l();
    this.ly_1 = -1;
  }
  protoOf(JsonTreeListDecoder).r1 = function () {
    return this.jy_1;
  };
  protoOf(JsonTreeListDecoder).hi = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).mx = function (tag) {
    return this.jy_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).od = function (descriptor) {
    while (this.ly_1 < (this.ky_1 - 1 | 0)) {
      this.ly_1 = this.ly_1 + 1 | 0;
      return this.ly_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.wy_1 = value;
    this.xy_1 = toList(this.wy_1.u1());
    this.yy_1 = imul(this.xy_1.l(), 2);
    this.zy_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).r1 = function () {
    return this.wy_1;
  };
  protoOf(JsonTreeMapDecoder).hi = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.xy_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).od = function (descriptor) {
    while (this.zy_1 < (this.yy_1 - 1 | 0)) {
      this.zy_1 = this.zy_1 + 1 | 0;
      return this.zy_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).mx = function (tag) {
    return (this.zy_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.wy_1, tag);
  };
  protoOf(JsonTreeMapDecoder).fd = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.tb())).dd(deserializer);
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
    this.ax_1 = begin;
    this.bx_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ic();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.pc(0), _this__u8e3s4.md());
          var keyKind = keyDescriptor.ic();
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
            if (_this__u8e3s4.gq_1.wr_1) {
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
    if (equals(_this__u8e3s4.ic(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.jc()) {
      tmp = carrierDescriptor(_this__u8e3s4.pc(0), module_0);
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
    $this.az(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.az(lastPosition, currentPosition);
    var result = $this.yq_1.toString();
    $this.yq_1.i9(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.xq_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.xq_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.bz(), $this.vq_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.cz(currentPosition);
    if (currentPosition === -1) {
      $this.vt('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.bz();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.bz(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.vt("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.yq_1.p6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.vq_1 = startPos;
      $this.dz();
      if (($this.vq_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.vt('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.vq_1);
    }
    $this.yq_1.p6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.vt("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.cz(start);
    if (current >= charSequenceLength($this.bz()) || current === -1) {
      $this.vt('EOF');
    }
    var tmp = $this.bz();
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
        $this.vt("Expected valid boolean literal prefix, but had '" + $this.av() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.bz()) - current | 0) < literalSuffix.length) {
      $this.vt('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.bz(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.vt("Expected valid boolean literal prefix, but had '" + $this.av() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.vq_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.o2();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.o2();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.vq_1 = 0;
    this.wq_1 = new JsonPath();
    this.xq_1 = null;
    this.yq_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).dz = function () {
  };
  protoOf(AbstractJsonLexer).ow = function () {
    var current = this.ez();
    var source = this.bz();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.vq_1 = this.vq_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).fz = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).zq = function () {
    var nextToken = this.cv();
    if (!(nextToken === 10)) {
      this.vt('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.bz(), this.vq_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).wu = function (expected) {
    var token = this.cv();
    if (!(token === expected)) {
      this.gz(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).hz = function (expected) {
    if (this.vq_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.vq_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.vq_1 = this.vq_1 - 1 | 0;
          tmp$ret$1 = this.av();
          break $l$block;
        }finally {
          this.vq_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.ut("Expected string literal but 'null' literal was found", this.vq_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.gz(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).iz = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.vq_1 - 1 | 0 : this.vq_1;
    var s = this.vq_1 === charSequenceLength(this.bz()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.bz(), position));
    this.vt('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).gz = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.iz(expectedToken, wasConsumed) : $super.iz.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).xu = function () {
    var source = this.bz();
    var cpos = this.vq_1;
    $l$loop_0: while (true) {
      cpos = this.cz(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.vq_1 = cpos;
      return charToTokenClass(ch);
    }
    this.vq_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).pw = function (doConsume) {
    var current = this.ez();
    current = this.cz(current);
    var len = charSequenceLength(this.bz()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.bz(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.bz(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.vq_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).cx = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.pw(doConsume) : $super.pw.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).qw = function (isLenient) {
    var token = this.xu();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.av();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.zu();
    }
    var string = tmp;
    this.xq_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).jz = function () {
    this.xq_1 = null;
  };
  protoOf(AbstractJsonLexer).kz = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.bz();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).zu = function () {
    if (!(this.xq_1 == null)) {
      return takePeeked(this);
    }
    return this.tw();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.cz(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.vt('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.az(lastPosition, currentPosition);
          currentPosition = this.cz(currentPosition);
          if (currentPosition === -1) {
            this.vt('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.kz(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.vq_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).uw = function () {
    var result = this.av();
    if (result === 'null' && wasUnquotedString(this)) {
      this.vt("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).av = function () {
    if (!(this.xq_1 == null)) {
      return takePeeked(this);
    }
    var current = this.ez();
    if (current >= charSequenceLength(this.bz()) || current === -1) {
      this.vt('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.bz(), current));
    if (token === 1) {
      return this.zu();
    }
    if (!(token === 0)) {
      this.vt('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.bz(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.bz(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.bz())) {
        usedAppend = true;
        this.az(this.vq_1, current);
        var eof = this.cz(current);
        if (eof === -1) {
          this.vq_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.kz(this.vq_1, current);
    } else {
      tmp = decodedString(this, this.vq_1, current);
    }
    var result = tmp;
    this.vq_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).az = function (fromIndex, toIndex) {
    this.yq_1.e9(this.bz(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).sw = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.xu();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.av();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.xu();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.av();
        else
          this.tw();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.vq_1, 'found ] instead of } at path: ' + this.wq_1.toString(), this.bz());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.vq_1, 'found } instead of ] at path: ' + this.wq_1.toString(), this.bz());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.vt('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.cv();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.bz()) + "', currentPosition=" + this.vq_1 + ')';
  };
  protoOf(AbstractJsonLexer).rw = function (key) {
    var processed = this.kz(0, this.vq_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.ut("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).ut = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.wq_1.iu() + hintMessage, this.bz());
  };
  protoOf(AbstractJsonLexer).vt = function (message, position, hint, $super) {
    position = position === VOID ? this.vq_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.ut(message, position, hint) : $super.ut.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).ts = function () {
    var current = this.ez();
    current = this.cz(current);
    if (current >= charSequenceLength(this.bz()) || current === -1) {
      this.vt('EOF');
    }
    var tmp;
    if (charSequenceGet(this.bz(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.bz())) {
        this.vt('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.bz()))) {
      var ch = charSequenceGet(this.bz(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.vt('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.vt("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.vt("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.vt("Unexpected symbol '-' in numeric literal");
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
        this.vt("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.g2(toLong(10)).e2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.g2(toLong(10)).f2(toLong(digit));
      if (accumulator.a1(new Long(0, 0)) > 0) {
        this.vt('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.vt('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.vt('EOF');
      }
      if (!(charSequenceGet(this.bz(), current) === _Char___init__impl__6a9atx(34))) {
        this.vt('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.vq_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.o2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).o2() || doubleAccumulator < (new Long(0, -2147483648)).o2()) {
        this.vt('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.vt("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.j2();
    } else {
      this.vt('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).dx = function () {
    var current = this.ez();
    if (current === charSequenceLength(this.bz())) {
      this.vt('EOF');
    }
    var tmp;
    if (charSequenceGet(this.bz(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.vq_1 === charSequenceLength(this.bz())) {
        this.vt('EOF');
      }
      if (!(charSequenceGet(this.bz(), this.vq_1) === _Char___init__impl__6a9atx(34))) {
        this.vt('Expected closing quotation mark');
      }
      this.vq_1 = this.vq_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().mz_1;
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
    return c < 117 ? CharMappings_getInstance().lz_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.lz_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.mz_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.lz_1 = charArray(117);
    this.mz_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).cv = function () {
    var source = this.bz();
    var cpos = this.ez();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.vq_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).yu = function () {
    var current = this.ez();
    if (current >= this.bz().length || current === -1)
      return false;
    return this.fz(charSequenceGet(this.bz(), current));
  };
  protoOf(StringJsonLexerWithComments).nw = function (expected) {
    var source = this.bz();
    var current = this.ez();
    if (current >= source.length || current === -1) {
      this.vq_1 = -1;
      this.hz(expected);
    }
    var c = charSequenceGet(source, current);
    this.vq_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.hz(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).xu = function () {
    var source = this.bz();
    var cpos = this.ez();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.vq_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).ez = function () {
    var current = this.vq_1;
    if (current === -1)
      return current;
    var source = this.bz();
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
            this.vq_1 = source.length;
            this.vt('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.vq_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.wz_1 = source;
  }
  protoOf(StringJsonLexer).bz = function () {
    return this.wz_1;
  };
  protoOf(StringJsonLexer).cz = function (position) {
    return position < this.bz().length ? position : -1;
  };
  protoOf(StringJsonLexer).cv = function () {
    var source = this.bz();
    var cpos = this.vq_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.vq_1 = cpos;
      return charToTokenClass(c);
    }
    this.vq_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).yu = function () {
    var current = this.vq_1;
    if (current === -1)
      return false;
    var source = this.bz();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.vq_1 = current;
      return this.fz(c);
    }
    this.vq_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).ez = function () {
    var current = this.vq_1;
    if (current === -1)
      return current;
    var source = this.bz();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.vq_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).nw = function (expected) {
    if (this.vq_1 === -1) {
      this.hz(expected);
    }
    var source = this.bz();
    var cpos = this.vq_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.vq_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.hz(expected);
    }
    this.vq_1 = -1;
    this.hz(expected);
  };
  protoOf(StringJsonLexer).tw = function () {
    this.nw(_Char___init__impl__6a9atx(34));
    var current = this.vq_1;
    var closingQuote = indexOf_0(this.bz(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.av();
      this.iz(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.bz(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.bz(), this.vq_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.vq_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.bz().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).xw = function (keyToMatch, isLenient) {
    var positionSnapshot = this.vq_1;
    try {
      if (!(this.cv() === 6))
        return null;
      var firstKey = this.qw(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.jz();
      if (!(this.cv() === 5))
        return null;
      return this.qw(isLenient);
    }finally {
      this.vq_1 = positionSnapshot;
      this.jz();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.gq_1.is_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.iq_1;
  }
  function JsonToStringWriter() {
    this.lq_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).ht = function (value) {
    this.lq_1.h9(value);
  };
  protoOf(JsonToStringWriter).ct = function (char) {
    this.lq_1.p6(char);
  };
  protoOf(JsonToStringWriter).et = function (text) {
    this.lq_1.o6(text);
  };
  protoOf(JsonToStringWriter).lt = function (text) {
    printQuoted(this.lq_1, text);
  };
  protoOf(JsonToStringWriter).mq = function () {
    this.lq_1.j9();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.lq_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).jj = contextual;
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

