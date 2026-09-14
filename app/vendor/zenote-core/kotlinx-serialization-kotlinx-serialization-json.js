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
  var protoOf = kotlin_kotlin.$_$.p4;
  var initMetadataForObject = kotlin_kotlin.$_$.g4;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.k1;
  var initMetadataForClass = kotlin_kotlin.$_$.b4;
  var toString = kotlin_kotlin.$_$.s4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u;
  var charSequenceLength = kotlin_kotlin.$_$.q3;
  var charSequenceGet = kotlin_kotlin.$_$.p3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a1;
  var equals = kotlin_kotlin.$_$.u3;
  var toString_0 = kotlin_kotlin.$_$.q6;
  var Enum = kotlin_kotlin.$_$.a6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o;
  var hashCode = kotlin_kotlin.$_$.a4;
  var joinToString = kotlin_kotlin.$_$.h2;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var KtMap = kotlin_kotlin.$_$.p1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.w3;
  var getStringHashCode = kotlin_kotlin.$_$.z3;
  var KtList = kotlin_kotlin.$_$.o1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.z;
  var numberRangeToNumber = kotlin_kotlin.$_$.k4;
  var ClosedRange = kotlin_kotlin.$_$.t4;
  var isInterface = kotlin_kotlin.$_$.i4;
  var contains = kotlin_kotlin.$_$.w4;
  var toDouble = kotlin_kotlin.$_$.r5;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong = kotlin_kotlin.$_$.r4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.m3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.r3;
  var coerceAtLeast = kotlin_kotlin.$_$.u4;
  var coerceAtMost = kotlin_kotlin.$_$.v4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.x2;
  var emptyMap = kotlin_kotlin.$_$.b2;
  var getValue = kotlin_kotlin.$_$.e2;
  var fillArrayVal = kotlin_kotlin.$_$.v3;
  var copyOf = kotlin_kotlin.$_$.w1;
  var copyOf_0 = kotlin_kotlin.$_$.x1;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.y5;
  var invoke = kotlin_kotlin.$_$.k6;
  var CoroutineImpl = kotlin_kotlin.$_$.i3;
  var DeepRecursiveScope = kotlin_kotlin.$_$.z5;
  var Unit = kotlin_kotlin.$_$.g6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h3;
  var initMetadataForLambda = kotlin_kotlin.$_$.f4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.d4;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w;
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
  var ensureNotNull = kotlin_kotlin.$_$.j6;
  var substringBefore = kotlin_kotlin.$_$.q5;
  var removeSuffix = kotlin_kotlin.$_$.l5;
  var substringAfter = kotlin_kotlin.$_$.p5;
  var contains_0 = kotlin_kotlin.$_$.d5;
  var plus = kotlin_kotlin.$_$.p6;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.c6;
  var isFinite = kotlin_kotlin.$_$.l6;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var objectCreate = kotlin_kotlin.$_$.o4;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o6;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c1;
  var numberToChar = kotlin_kotlin.$_$.l4;
  var equals_0 = kotlin_kotlin.$_$.e5;
  var toString_1 = kotlin_kotlin.$_$.d1;
  var toByte = kotlin_kotlin.$_$.q4;
  var startsWith = kotlin_kotlin.$_$.o5;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var emptySet = kotlin_kotlin.$_$.c2;
  var plus_0 = kotlin_kotlin.$_$.s2;
  var toInt = kotlin_kotlin.$_$.t5;
  var toList = kotlin_kotlin.$_$.c3;
  var enumEntries = kotlin_kotlin.$_$.j3;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var last = kotlin_kotlin.$_$.m2;
  var removeLast = kotlin_kotlin.$_$.v2;
  var lastIndexOf = kotlin_kotlin.$_$.k5;
  var Long = kotlin_kotlin.$_$.d6;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.b1;
  var numberToLong = kotlin_kotlin.$_$.n4;
  var charArray = kotlin_kotlin.$_$.o3;
  var indexOf = kotlin_kotlin.$_$.f5;
  var indexOf_0 = kotlin_kotlin.$_$.g5;
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
    this.yo_1 = configuration;
    this.zo_1 = serializersModule;
    this.ap_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).kd = function () {
    return this.zo_1;
  };
  protoOf(Json).bp = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.ep();
    }
  };
  protoOf(Json).cp = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.rb(), null);
    var result = input.bd(deserializer);
    lexer.rp();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.kq();
    return new JsonImpl(conf, builder.jq_1);
  }
  function JsonBuilder(json) {
    this.sp_1 = json.yo_1.lq_1;
    this.tp_1 = json.yo_1.qq_1;
    this.up_1 = json.yo_1.mq_1;
    this.vp_1 = json.yo_1.nq_1;
    this.wp_1 = json.yo_1.pq_1;
    this.xp_1 = json.yo_1.rq_1;
    this.yp_1 = json.yo_1.sq_1;
    this.zp_1 = json.yo_1.uq_1;
    this.aq_1 = json.yo_1.br_1;
    this.bq_1 = json.yo_1.wq_1;
    this.cq_1 = json.yo_1.xq_1;
    this.dq_1 = json.yo_1.yq_1;
    this.eq_1 = json.yo_1.zq_1;
    this.fq_1 = json.yo_1.ar_1;
    this.gq_1 = json.yo_1.vq_1;
    this.hq_1 = json.yo_1.oq_1;
    this.iq_1 = json.yo_1.tq_1;
    this.jq_1 = json.kd();
  }
  protoOf(JsonBuilder).kq = function () {
    if (this.iq_1) {
      // Inline function 'kotlin.require' call
      if (!(this.zp_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.aq_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.wp_1) {
      // Inline function 'kotlin.require' call
      if (!(this.xp_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.xp_1 === '    ')) {
      var tmp3 = this.xp_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.xp_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.sp_1, this.up_1, this.vp_1, this.hq_1, this.wp_1, this.tp_1, this.xp_1, this.yp_1, this.iq_1, this.zp_1, this.gq_1, this.bq_1, this.cq_1, this.dq_1, this.eq_1, this.fq_1, this.aq_1);
  };
  function validateConfiguration($this) {
    if (equals($this.kd(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.yo_1.tq_1, $this.yo_1.uq_1);
    $this.kd().wi(collector);
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
    this.lq_1 = encodeDefaults;
    this.mq_1 = ignoreUnknownKeys;
    this.nq_1 = isLenient;
    this.oq_1 = allowStructuredMapKeys;
    this.pq_1 = prettyPrint;
    this.qq_1 = explicitNulls;
    this.rq_1 = prettyPrintIndent;
    this.sq_1 = coerceInputValues;
    this.tq_1 = useArrayPolymorphism;
    this.uq_1 = classDiscriminator;
    this.vq_1 = allowSpecialFloatingPointValues;
    this.wq_1 = useAlternativeNames;
    this.xq_1 = namingStrategy;
    this.yq_1 = decodeEnumsCaseInsensitive;
    this.zq_1 = allowTrailingComma;
    this.ar_1 = allowComments;
    this.br_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.lq_1 + ', ignoreUnknownKeys=' + this.mq_1 + ', isLenient=' + this.nq_1 + ', ' + ('allowStructuredMapKeys=' + this.oq_1 + ', prettyPrint=' + this.pq_1 + ', explicitNulls=' + this.qq_1 + ', ') + ("prettyPrintIndent='" + this.rq_1 + "', coerceInputValues=" + this.sq_1 + ', useArrayPolymorphism=' + this.tq_1 + ', ') + ("classDiscriminator='" + this.uq_1 + "', allowSpecialFloatingPointValues=" + this.vq_1 + ', ') + ('useAlternativeNames=' + this.wq_1 + ', namingStrategy=' + toString_0(this.xq_1) + ', decodeEnumsCaseInsensitive=' + this.yq_1 + ', ') + ('allowTrailingComma=' + this.zq_1 + ', allowComments=' + this.ar_1 + ', classDiscriminatorMode=' + this.br_1.toString() + ')');
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
    this_0.n6(_Char___init__impl__6a9atx(58));
    this_0.l6(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.cr_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.cr_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.cr_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.cr_1.v1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).dr = function (key) {
    return this.cr_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.dr((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).er = function (key) {
    return this.cr_1.t1(key);
  };
  protoOf(JsonObject).t1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.er((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).j = function () {
    return this.cr_1.j();
  };
  protoOf(JsonObject).v1 = function () {
    return this.cr_1.v1();
  };
  protoOf(JsonObject).u1 = function () {
    return this.cr_1.u1();
  };
  protoOf(JsonObject).l = function () {
    return this.cr_1.l();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.fr_1 = 'null';
  }
  protoOf(JsonNull).gr = function () {
    return this.fr_1;
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
    return this.gr();
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
    this.hr_1 = isString;
    this.ir_1 = coerceToInlineType;
    this.jr_1 = toString(body);
    if (!(this.ir_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.ir_1.hc()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).gr = function () {
    return this.jr_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.hr_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.jr_1);
      tmp = this_0.toString();
    } else {
      tmp = this.jr_1;
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
    if (!(this.hr_1 === other.hr_1))
      return false;
    if (!(this.jr_1 === other.jr_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.hr_1);
    result = imul(31, result) + getStringHashCode(this.jr_1) | 0;
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
    this.kr_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.kr_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.kr_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.kr_1, ',', '[', ']');
  };
  protoOf(JsonArray).k = function (index) {
    return this.kr_1.k(index);
  };
  protoOf(JsonArray).j = function () {
    return this.kr_1.j();
  };
  protoOf(JsonArray).g = function () {
    return this.kr_1.g();
  };
  protoOf(JsonArray).q = function (index) {
    return this.kr_1.q(index);
  };
  protoOf(JsonArray).l = function () {
    return this.kr_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.gr());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.gr())).lr();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.gr() + ' is not an Int');
    return result.z();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.gr())).lr();
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
    return toDouble(_this__u8e3s4.gr());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.gr();
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
    this.mr_1 = writer;
    this.nr_1 = true;
  }
  protoOf(Composer).or = function () {
    this.nr_1 = true;
  };
  protoOf(Composer).pr = function () {
    return Unit_instance;
  };
  protoOf(Composer).qr = function () {
    this.nr_1 = false;
  };
  protoOf(Composer).rr = function () {
    this.nr_1 = false;
  };
  protoOf(Composer).sr = function () {
    return Unit_instance;
  };
  protoOf(Composer).tr = function (v) {
    return this.mr_1.ur(v);
  };
  protoOf(Composer).vr = function (v) {
    return this.mr_1.wr(v);
  };
  protoOf(Composer).xr = function (v) {
    return this.mr_1.wr(v.toString());
  };
  protoOf(Composer).yr = function (v) {
    return this.mr_1.zr(toLong(v));
  };
  protoOf(Composer).as = function (v) {
    return this.mr_1.zr(v);
  };
  protoOf(Composer).bs = function (v) {
    return this.mr_1.wr(v.toString());
  };
  protoOf(Composer).cs = function (value) {
    return this.mr_1.ds(value);
  };
  function Composer_0(sb, json) {
    return json.yo_1.pq_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.gs_1 = json;
    this.hs_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).or = function () {
    this.nr_1 = true;
    this.hs_1 = this.hs_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).pr = function () {
    this.hs_1 = this.hs_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).qr = function () {
    this.nr_1 = false;
    this.vr('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.hs_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.vr(this.gs_1.yo_1.rq_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).rr = function () {
    if (this.nr_1)
      this.nr_1 = false;
    else {
      this.qr();
    }
  };
  protoOf(ComposerWithPrettyPrint).sr = function () {
    this.tr(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.js_1 = (!descriptor.oc(index) && descriptor.nc(index).zb());
    return $this.js_1;
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
    tmp.is_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.js_1 = false;
  }
  protoOf(JsonElementMarker).ks = function (index) {
    this.is_1.hg(index);
  };
  protoOf(JsonElementMarker).ls = function () {
    return this.is_1.ig();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.ms('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.np_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.ns('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.fc() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.gc().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.lc(name);
    if (!(index === -3))
      return index;
    if (!json.yo_1.wq_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.kc(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.gc(), CLASS_getInstance()) ? json.yo_1.xq_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.ps(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.yo_1.yq_1 && equals(descriptor.gc(), ENUM_getInstance());
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
    return tmp.ps(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.ic();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.mc(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qs_1;
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
          tmp_0 = _this__u8e3s4.kc(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.rs(_this__u8e3s4, i, _this__u8e3s4.kc(i));
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
    var entity = equals($this_buildDeserializationNamesMap.gc(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).s1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.kc(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.kc(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
      var tmp_0 = $this_serializationNamesIndices.ic();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.kc(tmp_2);
        tmp_1[tmp_2] = $strategy.rs($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.us_1, 2);
    $this.ss_1 = copyOf($this.ss_1, newSize);
    $this.ts_1 = copyOf_0($this.ts_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.ss_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.ts_1 = tmp_2;
    this.us_1 = -1;
  }
  protoOf(JsonPath).vs = function (sd) {
    this.us_1 = this.us_1 + 1 | 0;
    var depth = this.us_1;
    if (depth === this.ss_1.length) {
      resize(this);
    }
    this.ss_1[depth] = sd;
  };
  protoOf(JsonPath).ws = function (index) {
    this.ts_1[this.us_1] = index;
  };
  protoOf(JsonPath).xs = function (key) {
    var tmp;
    if (!(this.ts_1[this.us_1] === -2)) {
      this.us_1 = this.us_1 + 1 | 0;
      tmp = this.us_1 === this.ss_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.ss_1[this.us_1] = key;
    this.ts_1[this.us_1] = -2;
  };
  protoOf(JsonPath).ys = function () {
    if (this.ts_1[this.us_1] === -2) {
      this.ss_1[this.us_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).zs = function () {
    var depth = this.us_1;
    if (this.ts_1[depth] === -2) {
      this.ts_1[depth] = -1;
      this.us_1 = this.us_1 - 1 | 0;
    }
    if (!(this.us_1 === -1)) {
      this.us_1 = this.us_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).at = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.m6('$');
    // Inline function 'kotlin.repeat' call
    var times = this.us_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.ss_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.gc(), LIST_getInstance())) {
            if (!(this.ts_1[index] === -1)) {
              this_0.m6('[');
              this_0.e9(this.ts_1[index]);
              this_0.m6(']');
            }
          } else {
            var idx = this.ts_1[index];
            if (idx >= 0) {
              this_0.m6('.');
              this_0.m6(element.kc(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.m6('[');
            this_0.m6("'");
            this_0.l6(element);
            this_0.m6("'");
            this_0.m6(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.at();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.ae(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.kt_1.ot(6);
    if ($this.kt_1.pt() === 4) {
      $this.kt_1.ns('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.kt_1.qt()) {
      var key = $this.lt_1 ? $this.kt_1.st() : $this.kt_1.rt();
      $this.kt_1.ot(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.tt();
      // Inline function 'kotlin.collections.set' call
      result.w1(key, element);
      lastToken = $this.kt_1.ut();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.kt_1.ns('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.kt_1.ot(7);
    } else if (lastToken === 4) {
      if (!$this.mt_1) {
        invalidTrailingComma($this.kt_1);
      }
      $this.kt_1.ot(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.a7_1 = Unit_instance;
    tmp.b7_1 = null;
    return tmp.g7();
  }
  function readArray($this) {
    var lastToken = $this.kt_1.ut();
    if ($this.kt_1.pt() === 4) {
      $this.kt_1.ns('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.kt_1.qt()) {
      var element = $this.tt();
      result.e(element);
      lastToken = $this.kt_1.ut();
      if (!(lastToken === 4)) {
        var tmp0 = $this.kt_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.np_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.ns(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.kt_1.ot(9);
    } else if (lastToken === 4) {
      if (!$this.mt_1) {
        invalidTrailingComma($this.kt_1, 'array');
      }
      $this.kt_1.ot(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.lt_1 || !isString) {
      tmp = $this.kt_1.st();
    } else {
      tmp = $this.kt_1.rt();
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
    this.su_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).xu = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.yu($this$DeepRecursiveFunction, it, $completion);
    tmp.a7_1 = Unit_instance;
    tmp.b7_1 = null;
    return tmp.g7();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).m7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.xu(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).g7 = function () {
    var suspendResult = this.a7_1;
    $sm: do
      try {
        var tmp = this.y6_1;
        switch (tmp) {
          case 0:
            this.z6_1 = 3;
            this.vu_1 = this.su_1.kt_1.pt();
            if (this.vu_1 === 1) {
              this.wu_1 = readValue(this.su_1, true);
              this.y6_1 = 2;
              continue $sm;
            } else {
              if (this.vu_1 === 0) {
                this.wu_1 = readValue(this.su_1, false);
                this.y6_1 = 2;
                continue $sm;
              } else {
                if (this.vu_1 === 6) {
                  this.y6_1 = 1;
                  suspendResult = readObject_0(this.tu_1, this.su_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.vu_1 === 8) {
                    this.wu_1 = readArray(this.su_1);
                    this.y6_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.su_1.kt_1.ns("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.wu_1 = suspendResult;
            this.y6_1 = 2;
            continue $sm;
          case 2:
            return this.wu_1;
          case 3:
            throw this.b7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z6_1 === 3) {
          throw e;
        } else {
          this.y6_1 = this.z6_1;
          this.b7_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).yu = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.su_1, completion);
    i.tu_1 = $this$DeepRecursiveFunction;
    i.uu_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.xu($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.du_1 = _this__u8e3s4;
    this.eu_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).g7 = function () {
    var suspendResult = this.a7_1;
    $sm: do
      try {
        var tmp = this.y6_1;
        switch (tmp) {
          case 0:
            this.z6_1 = 5;
            var tmp_0 = this;
            tmp_0.fu_1 = this.du_1;
            this.gu_1 = this.fu_1;
            this.hu_1 = this.gu_1.kt_1.ot(6);
            if (this.gu_1.kt_1.pt() === 4) {
              this.gu_1.kt_1.ns('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.iu_1 = LinkedHashMap_init_$Create$();
            this.y6_1 = 1;
            continue $sm;
          case 1:
            if (!this.gu_1.kt_1.qt()) {
              this.y6_1 = 4;
              continue $sm;
            }

            this.ju_1 = this.gu_1.lt_1 ? this.gu_1.kt_1.st() : this.gu_1.kt_1.rt();
            this.gu_1.kt_1.ot(5);
            this.y6_1 = 2;
            suspendResult = this.eu_1.eb(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.iu_1;
            var key = this.ju_1;
            tmp0.w1(key, element);
            this.hu_1 = this.gu_1.kt_1.ut();
            var tmp0_subject = this.hu_1;
            if (tmp0_subject === 4) {
              this.y6_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.y6_1 = 4;
                continue $sm;
              } else {
                this.gu_1.kt_1.ns('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.y6_1 = 1;
            continue $sm;
          case 4:
            if (this.hu_1 === 6) {
              this.gu_1.kt_1.ot(7);
            } else if (this.hu_1 === 4) {
              if (!this.gu_1.mt_1) {
                invalidTrailingComma(this.gu_1.kt_1);
              }
              this.gu_1.kt_1.ot(7);
            }

            return new JsonObject(this.iu_1);
          case 5:
            throw this.b7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z6_1 === 5) {
          throw e;
        } else {
          this.y6_1 = this.z6_1;
          this.b7_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.kt_1 = lexer;
    this.lt_1 = configuration.nq_1;
    this.mt_1 = configuration.zq_1;
    this.nt_1 = 0;
  }
  protoOf(JsonTreeReader).tt = function () {
    var token = this.kt_1.pt();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.nt_1 = this.nt_1 + 1 | 0;
      if (this.nt_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.nt_1 = this.nt_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.kt_1.ns('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.jc().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.zu_1;
    }
    return json.yo_1.uq_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.rb()).o1(classDiscriminator)) {
      var baseName = serializer.rb().fc();
      var actualName = actualSerializer.rb().fc();
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
    var kind = descriptor.gc();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.x7() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.av_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.x7() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.ic();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.kc(i);
        if (name === $this.bv_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.av_1 = useArrayPolymorphism;
    this.bv_1 = discriminator;
  }
  protoOf(PolymorphismValidator).fj = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).ij = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.rb();
    checkKind_0(this, descriptor, actualClass);
    if (!this.av_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).jj = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).kj = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.os_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).cv = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.os_1;
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
  protoOf(DescriptorSchemaCache).ps = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.dv(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.cv(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).dv = function (descriptor, key) {
    var tmp0_safe_receiver = this.os_1.t1(descriptor);
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
    this.ev_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.ev_1 === unknownKey) {
      _this__u8e3s4.ev_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.md(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.hp_1.pt() === 4) {
      $this.hp_1.ns('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.jp_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.jp_1 === -1)) {
        hasComma = $this.hp_1.gv();
      }
    } else {
      $this.hp_1.fv(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.hp_1.qt()) {
      if (decodingKey) {
        if ($this.jp_1 === -1) {
          var tmp0 = $this.hp_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.np_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.ns(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.hp_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.np_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.ns(tmp$ret$1, position_0);
          }
        }
      }
      $this.jp_1 = $this.jp_1 + 1 | 0;
      tmp = $this.jp_1;
    } else {
      if (hasComma && !$this.fp_1.yo_1.zq_1) {
        invalidTrailingComma($this.hp_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.fp_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.oc(index);
      var elementDescriptor = descriptor.nc(index);
      var tmp;
      if (isOptional && !elementDescriptor.zb()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.hp_1.hv(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.gc(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.zb()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.hp_1.hv(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.hp_1.iv($this.lp_1.nq_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.yo_1.qq_1 && elementDescriptor.zb();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.hp_1.rt();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.hp_1.gv();
    while ($this.hp_1.qt()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.hp_1.fv(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.fp_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.lp_1.sq_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.hp_1.gv();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.mp_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.ks(index);
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
    if (hasComma && !$this.fp_1.yo_1.zq_1) {
      invalidTrailingComma($this.hp_1);
    }
    var tmp1_safe_receiver = $this.mp_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ls();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.lp_1.mq_1 || trySkip($this.kp_1, $this, key)) {
      $this.hp_1.kv($this.lp_1.nq_1);
    } else {
      $this.hp_1.jv(key);
    }
    return $this.hp_1.gv();
  }
  function decodeListIndex($this) {
    var hasComma = $this.hp_1.gv();
    var tmp;
    if ($this.hp_1.qt()) {
      if (!($this.jp_1 === -1) && !hasComma) {
        $this.hp_1.ns('Expected end of the array or comma');
      }
      $this.jp_1 = $this.jp_1 + 1 | 0;
      tmp = $this.jp_1;
    } else {
      if (hasComma && !$this.fp_1.yo_1.zq_1) {
        invalidTrailingComma($this.hp_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.lp_1.nq_1) {
      tmp = $this.hp_1.mv();
    } else {
      tmp = $this.hp_1.lv();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.fp_1 = json;
    this.gp_1 = mode;
    this.hp_1 = lexer;
    this.ip_1 = this.fp_1.kd();
    this.jp_1 = -1;
    this.kp_1 = discriminatorHolder;
    this.lp_1 = this.fp_1.yo_1;
    this.mp_1 = this.lp_1.qq_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).nv = function () {
    return this.fp_1;
  };
  protoOf(StreamingJsonDecoder).kd = function () {
    return this.ip_1;
  };
  protoOf(StreamingJsonDecoder).ov = function () {
    return (new JsonTreeReader(this.fp_1.yo_1, this.hp_1)).tt();
  };
  protoOf(StreamingJsonDecoder).bd = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.fp_1.yo_1.tq_1;
      }
      if (tmp) {
        return deserializer.tb(this);
      }
      var discriminator = classDiscriminator(deserializer.rb(), this.fp_1);
      var tmp0_elvis_lhs = this.hp_1.pv(discriminator, this.lp_1.nq_1);
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
            tmp_1 = this.nv().yo_1.tq_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.tb(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.rb(), this.nv());
          var tmp0 = this.ov();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.rb().fc();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).x7();
            var tmp_3 = getKClassFromExpression(tmp0).x7();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.hp_1.op_1.at();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.er(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.nv(), discriminator_0, jsonTree, actualSerializer);
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
          this.hp_1.ns(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.kp_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.tb(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.yb_1, plus(e.message, ' at path: ') + this.hp_1.op_1.at(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).cd = function (descriptor) {
    var newMode = switchMode(this.fp_1, descriptor);
    this.hp_1.op_1.vs(descriptor);
    this.hp_1.fv(newMode.sv_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.y1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.fp_1, newMode, this.hp_1, descriptor, this.kp_1);
        break;
      default:
        var tmp_0;
        if (this.gp_1.equals(newMode) && this.fp_1.yo_1.qq_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.fp_1, newMode, this.hp_1, descriptor, this.kp_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).dd = function (descriptor) {
    if (this.fp_1.yo_1.mq_1 && descriptor.ic() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.hp_1.gv() && !this.fp_1.yo_1.zq_1) {
      invalidTrailingComma(this.hp_1, '');
    }
    this.hp_1.fv(this.gp_1.tv_1);
    this.hp_1.op_1.zs();
  };
  protoOf(StreamingJsonDecoder).tc = function () {
    var tmp;
    var tmp0_safe_receiver = this.mp_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.js_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.hp_1.uv();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).uc = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).hd = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.gp_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.hp_1.op_1.ys();
    }
    var value = protoOf(AbstractDecoder).hd.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.hp_1.op_1.xs(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).md = function (descriptor) {
    var index;
    switch (this.gp_1.y1_1) {
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
    if (!this.gp_1.equals(WriteMode_MAP_getInstance())) {
      this.hp_1.op_1.ws(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).vc = function () {
    return this.hp_1.vv();
  };
  protoOf(StreamingJsonDecoder).wc = function () {
    var value = this.hp_1.lr();
    if (!value.equals(toLong(value.z()))) {
      this.hp_1.ns("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.z();
  };
  protoOf(StreamingJsonDecoder).xc = function () {
    return this.hp_1.lr();
  };
  protoOf(StreamingJsonDecoder).yc = function () {
    var tmp0 = this.hp_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.st();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.ns("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.fp_1.yo_1.vq_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.hp_1, result);
  };
  protoOf(StreamingJsonDecoder).zc = function () {
    var tmp;
    if (this.lp_1.nq_1) {
      tmp = this.hp_1.mv();
    } else {
      tmp = this.hp_1.rt();
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
    $this.bt_1.qr();
    $this.vd(discriminator);
    $this.bt_1.tr(_Char___init__impl__6a9atx(58));
    $this.bt_1.sr();
    $this.vd(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.bt_1 = composer;
    this.ct_1 = json;
    this.dt_1 = mode;
    this.et_1 = modeReuseCache;
    this.ft_1 = this.ct_1.kd();
    this.gt_1 = this.ct_1.yo_1;
    this.ht_1 = false;
    this.it_1 = null;
    this.jt_1 = null;
    var i = this.dt_1.y1_1;
    if (!(this.et_1 == null)) {
      if (!(this.et_1[i] === null) || !(this.et_1[i] === this)) {
        this.et_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).nv = function () {
    return this.ct_1;
  };
  protoOf(StreamingJsonEncoder).kd = function () {
    return this.ft_1;
  };
  protoOf(StreamingJsonEncoder).fe = function (descriptor, index) {
    return this.gt_1.lq_1;
  };
  protoOf(StreamingJsonEncoder).ae = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.nv().yo_1.tq_1) {
        serializer.sb(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.nv().yo_1.br_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.nv().yo_1.br_1.y1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.rb().gc();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.rb(), this.nv()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.rb()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.rb().gc());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.rb().fc();
        this.it_1 = baseClassDiscriminator;
        this.jt_1 = serialName;
      }
      actualSerializer.sb(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).cd = function (descriptor) {
    var newMode = switchMode(this.ct_1, descriptor);
    if (!(newMode.sv_1 === _Char___init__impl__6a9atx(0))) {
      this.bt_1.tr(newMode.sv_1);
      this.bt_1.or();
    }
    var discriminator = this.it_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.jt_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.fc() : tmp0_elvis_lhs);
      this.it_1 = null;
      this.jt_1 = null;
    }
    if (this.dt_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.et_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.y1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.bt_1, this.ct_1, newMode, this.et_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).dd = function (descriptor) {
    if (!(this.dt_1.tv_1 === _Char___init__impl__6a9atx(0))) {
      this.bt_1.pr();
      this.bt_1.rr();
      this.bt_1.tr(this.dt_1.tv_1);
    }
  };
  protoOf(StreamingJsonEncoder).od = function (descriptor, index) {
    switch (this.dt_1.y1_1) {
      case 1:
        if (!this.bt_1.nr_1) {
          this.bt_1.tr(_Char___init__impl__6a9atx(44));
        }

        this.bt_1.qr();
        break;
      case 2:
        if (!this.bt_1.nr_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.bt_1.tr(_Char___init__impl__6a9atx(44));
            this.bt_1.qr();
            tmp_0 = true;
          } else {
            this.bt_1.tr(_Char___init__impl__6a9atx(58));
            this.bt_1.sr();
            tmp_0 = false;
          }
          tmp.ht_1 = tmp_0;
        } else {
          this.ht_1 = true;
          this.bt_1.qr();
        }

        break;
      case 3:
        if (index === 0)
          this.ht_1 = true;
        if (index === 1) {
          this.bt_1.tr(_Char___init__impl__6a9atx(44));
          this.bt_1.sr();
          this.ht_1 = false;
        }

        break;
      default:
        if (!this.bt_1.nr_1) {
          this.bt_1.tr(_Char___init__impl__6a9atx(44));
        }

        this.bt_1.qr();
        this.vd(getJsonElementName(descriptor, this.ct_1, index));
        this.bt_1.tr(_Char___init__impl__6a9atx(58));
        this.bt_1.sr();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).be = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.gt_1.qq_1) {
      protoOf(AbstractEncoder).be.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).qd = function () {
    this.bt_1.vr('null');
  };
  protoOf(StreamingJsonEncoder).rd = function (value) {
    if (this.ht_1) {
      this.vd(value.toString());
    } else {
      this.bt_1.bs(value);
    }
  };
  protoOf(StreamingJsonEncoder).sd = function (value) {
    if (this.ht_1) {
      this.vd(value.toString());
    } else {
      this.bt_1.yr(value);
    }
  };
  protoOf(StreamingJsonEncoder).td = function (value) {
    if (this.ht_1) {
      this.vd(value.toString());
    } else {
      this.bt_1.as(value);
    }
  };
  protoOf(StreamingJsonEncoder).ud = function (value) {
    if (this.ht_1) {
      this.vd(value.toString());
    } else {
      this.bt_1.xr(value);
    }
    if (!this.gt_1.vq_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.bt_1.mr_1));
    }
  };
  protoOf(StreamingJsonEncoder).vd = function (value) {
    return this.bt_1.cs(value);
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
    _this__u8e3s4.n6(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.c9(value, lastPos, i);
          _this__u8e3s4.m6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.c9(value, lastPos, value.length);
    else
      _this__u8e3s4.m6(value);
    _this__u8e3s4.n6(_Char___init__impl__6a9atx(34));
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.cw(tag), toString($this.dw()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.yv_1 = json;
    this.zv_1 = value;
    this.aw_1 = polymorphicDiscriminator;
    this.bw_1 = this.nv().yo_1;
  }
  protoOf(AbstractJsonTreeDecoder).nv = function () {
    return this.yv_1;
  };
  protoOf(AbstractJsonTreeDecoder).r1 = function () {
    return this.zv_1;
  };
  protoOf(AbstractJsonTreeDecoder).kd = function () {
    return this.nv().kd();
  };
  protoOf(AbstractJsonTreeDecoder).dw = function () {
    var tmp0_safe_receiver = this.ji();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.ew(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.r1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).cw = function (currentTag) {
    return this.li() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).ov = function () {
    return this.dw();
  };
  protoOf(AbstractJsonTreeDecoder).bd = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.nv().yo_1.tq_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.tb(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.rb(), this.nv());
      var tmp0 = this.ov();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.rb().fc();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).x7();
        var tmp_1 = getKClassFromExpression(tmp0).x7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.li();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.er(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.nv(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).ki = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).cd = function (descriptor) {
    var currentObject = this.dw();
    var tmp0_subject = descriptor.gc();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.nv();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.fc();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).x7();
        var tmp_3 = getKClassFromExpression(currentObject).x7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.li();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.nv();
        var keyDescriptor = carrierDescriptor(descriptor.nc(0), this_0.kd());
        var keyKind = keyDescriptor.gc();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.nv();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.fc();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).x7();
            var tmp_8 = getKClassFromExpression(currentObject).x7();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.li();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.yo_1.oq_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.nv();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.fc();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).x7();
              var tmp_11 = getKClassFromExpression(currentObject).x7();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.li();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.nv();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.fc();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).x7();
          var tmp_14 = getKClassFromExpression(currentObject).x7();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.li();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.aw_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).dd = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).tc = function () {
    var tmp = this.dw();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).fw = function (tag) {
    return !(this.ew(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).ni = function (tag) {
    return this.fw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).gw = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.ew(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).x7();
        var tmp_0 = getKClassFromExpression(value).x7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.cw(tag);
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
  protoOf(AbstractJsonTreeDecoder).oi = function (tag) {
    return this.gw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).hw = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.ew(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).x7();
        var tmp_0 = getKClassFromExpression(value).x7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.cw(tag);
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
  protoOf(AbstractJsonTreeDecoder).pi = function (tag) {
    return this.hw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).iw = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.ew(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).x7();
        var tmp_0 = getKClassFromExpression(value).x7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.cw(tag);
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
  protoOf(AbstractJsonTreeDecoder).qi = function (tag) {
    return this.iw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).jw = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.ew(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).x7();
        var tmp_0 = getKClassFromExpression(value).x7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.cw(tag);
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
    var specialFp = this.nv().yo_1.vq_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.dw()));
  };
  protoOf(AbstractJsonTreeDecoder).ri = function (tag) {
    return this.jw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).kw = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.ew(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).x7();
      var tmp_0 = getKClassFromExpression(value).x7();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.cw(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.cw(tag), toString(this.dw()));
    if (!value_0.hr_1 && !this.nv().yo_1.nq_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.cw(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.dw()));
    }
    return value_0.jr_1;
  };
  protoOf(AbstractJsonTreeDecoder).si = function (tag) {
    return this.kw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.nv();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.oc(index);
      var elementDescriptor = descriptor.nc(index);
      var tmp;
      if (isOptional && !elementDescriptor.zb()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.ew(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.gc(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.zb()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.ew(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.ew(tag);
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
        var coerceToNull = !tmp0.yo_1.qq_1 && elementDescriptor.zb();
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
    $this.uw_1 = (!$this.nv().yo_1.qq_1 && !descriptor.oc(index) && descriptor.nc(index).zb());
    return $this.uw_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.rw_1 = value;
    this.sw_1 = polyDescriptor;
    this.tw_1 = 0;
    this.uw_1 = false;
  }
  protoOf(JsonTreeDecoder).r1 = function () {
    return this.rw_1;
  };
  protoOf(JsonTreeDecoder).md = function (descriptor) {
    while (this.tw_1 < descriptor.ic()) {
      var _unary__edvuaz = this.tw_1;
      this.tw_1 = _unary__edvuaz + 1 | 0;
      var name = this.ei(descriptor, _unary__edvuaz);
      var index = this.tw_1 - 1 | 0;
      this.uw_1 = false;
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
        tmp = !this.bw_1.sq_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).tc = function () {
    return !this.uw_1 && protoOf(AbstractJsonTreeDecoder).tc.call(this);
  };
  protoOf(JsonTreeDecoder).fi = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.nv());
    var baseName = descriptor.kc(index);
    if (strategy == null) {
      if (!this.bw_1.wq_1)
        return baseName;
      if (this.r1().u1().o1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.nv(), descriptor);
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
    var fallbackName = strategy == null ? null : strategy.rs(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).ew = function (tag) {
    return getValue(this.r1(), tag);
  };
  protoOf(JsonTreeDecoder).cd = function (descriptor) {
    if (descriptor === this.sw_1) {
      var tmp = this.nv();
      var tmp1 = this.dw();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.sw_1.fc();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).x7();
        var tmp_1 = getKClassFromExpression(tmp1).x7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.li();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.aw_1, this.sw_1);
    }
    return protoOf(AbstractJsonTreeDecoder).cd.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).dd = function (descriptor) {
    var tmp;
    if (this.bw_1.mq_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.gc();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.nv());
    var tmp_1;
    if (strategy == null && !this.bw_1.wq_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.nv(), descriptor).u1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.nv()).dv(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.r1().u1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.o1(key) && !(key === this.aw_1)) {
        throw UnknownKeyException(key, this.r1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.bx_1 = value;
    this.cx_1 = this.bx_1.l();
    this.dx_1 = -1;
  }
  protoOf(JsonTreeListDecoder).r1 = function () {
    return this.bx_1;
  };
  protoOf(JsonTreeListDecoder).fi = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).ew = function (tag) {
    return this.bx_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).md = function (descriptor) {
    while (this.dx_1 < (this.cx_1 - 1 | 0)) {
      this.dx_1 = this.dx_1 + 1 | 0;
      return this.dx_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.ox_1 = value;
    this.px_1 = toList(this.ox_1.u1());
    this.qx_1 = imul(this.px_1.l(), 2);
    this.rx_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).r1 = function () {
    return this.ox_1;
  };
  protoOf(JsonTreeMapDecoder).fi = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.px_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).md = function (descriptor) {
    while (this.rx_1 < (this.qx_1 - 1 | 0)) {
      this.rx_1 = this.rx_1 + 1 | 0;
      return this.rx_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).ew = function (tag) {
    return (this.rx_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.ox_1, tag);
  };
  protoOf(JsonTreeMapDecoder).dd = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.rb())).bd(deserializer);
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
    this.sv_1 = begin;
    this.tv_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.gc();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.nc(0), _this__u8e3s4.kd());
          var keyKind = keyDescriptor.gc();
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
            if (_this__u8e3s4.yo_1.oq_1) {
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
    if (equals(_this__u8e3s4.gc(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.hc()) {
      tmp = carrierDescriptor(_this__u8e3s4.nc(0), module_0);
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
    $this.sx(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.sx(lastPosition, currentPosition);
    var result = $this.qp_1.toString();
    $this.qp_1.g9(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.pp_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.pp_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.tx(), $this.np_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.ux(currentPosition);
    if (currentPosition === -1) {
      $this.ns('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.tx();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.tx(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.ns("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.qp_1.n6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.np_1 = startPos;
      $this.vx();
      if (($this.np_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.ns('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.np_1);
    }
    $this.qp_1.n6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.ns("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.ux(start);
    if (current >= charSequenceLength($this.tx()) || current === -1) {
      $this.ns('EOF');
    }
    var tmp = $this.tx();
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
        $this.ns("Expected valid boolean literal prefix, but had '" + $this.st() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.tx()) - current | 0) < literalSuffix.length) {
      $this.ns('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.tx(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.ns("Expected valid boolean literal prefix, but had '" + $this.st() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.np_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.m2();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.m2();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.np_1 = 0;
    this.op_1 = new JsonPath();
    this.pp_1 = null;
    this.qp_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).vx = function () {
  };
  protoOf(AbstractJsonLexer).gv = function () {
    var current = this.wx();
    var source = this.tx();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.np_1 = this.np_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).xx = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).rp = function () {
    var nextToken = this.ut();
    if (!(nextToken === 10)) {
      this.ns('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.tx(), this.np_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).ot = function (expected) {
    var token = this.ut();
    if (!(token === expected)) {
      this.yx(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).zx = function (expected) {
    if (this.np_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.np_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.np_1 = this.np_1 - 1 | 0;
          tmp$ret$1 = this.st();
          break $l$block;
        }finally {
          this.np_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.ms("Expected string literal but 'null' literal was found", this.np_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.yx(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).ay = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.np_1 - 1 | 0 : this.np_1;
    var s = this.np_1 === charSequenceLength(this.tx()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.tx(), position));
    this.ns('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).yx = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.ay(expectedToken, wasConsumed) : $super.ay.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).pt = function () {
    var source = this.tx();
    var cpos = this.np_1;
    $l$loop_0: while (true) {
      cpos = this.ux(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.np_1 = cpos;
      return charToTokenClass(ch);
    }
    this.np_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).hv = function (doConsume) {
    var current = this.wx();
    current = this.ux(current);
    var len = charSequenceLength(this.tx()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.tx(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.tx(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.np_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).uv = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.hv(doConsume) : $super.hv.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).iv = function (isLenient) {
    var token = this.pt();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.st();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.rt();
    }
    var string = tmp;
    this.pp_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).by = function () {
    this.pp_1 = null;
  };
  protoOf(AbstractJsonLexer).cy = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.tx();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).rt = function () {
    if (!(this.pp_1 == null)) {
      return takePeeked(this);
    }
    return this.lv();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.ux(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.ns('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.sx(lastPosition, currentPosition);
          currentPosition = this.ux(currentPosition);
          if (currentPosition === -1) {
            this.ns('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.cy(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.np_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).mv = function () {
    var result = this.st();
    if (result === 'null' && wasUnquotedString(this)) {
      this.ns("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).st = function () {
    if (!(this.pp_1 == null)) {
      return takePeeked(this);
    }
    var current = this.wx();
    if (current >= charSequenceLength(this.tx()) || current === -1) {
      this.ns('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.tx(), current));
    if (token === 1) {
      return this.rt();
    }
    if (!(token === 0)) {
      this.ns('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.tx(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.tx(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.tx())) {
        usedAppend = true;
        this.sx(this.np_1, current);
        var eof = this.ux(current);
        if (eof === -1) {
          this.np_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.cy(this.np_1, current);
    } else {
      tmp = decodedString(this, this.np_1, current);
    }
    var result = tmp;
    this.np_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).sx = function (fromIndex, toIndex) {
    this.qp_1.c9(this.tx(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).kv = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.pt();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.st();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.pt();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.st();
        else
          this.lv();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.np_1, 'found ] instead of } at path: ' + this.op_1.toString(), this.tx());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.np_1, 'found } instead of ] at path: ' + this.op_1.toString(), this.tx());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.ns('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.ut();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.tx()) + "', currentPosition=" + this.np_1 + ')';
  };
  protoOf(AbstractJsonLexer).jv = function (key) {
    var processed = this.cy(0, this.np_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.ms("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).ms = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.op_1.at() + hintMessage, this.tx());
  };
  protoOf(AbstractJsonLexer).ns = function (message, position, hint, $super) {
    position = position === VOID ? this.np_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.ms(message, position, hint) : $super.ms.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).lr = function () {
    var current = this.wx();
    current = this.ux(current);
    if (current >= charSequenceLength(this.tx()) || current === -1) {
      this.ns('EOF');
    }
    var tmp;
    if (charSequenceGet(this.tx(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.tx())) {
        this.ns('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.tx()))) {
      var ch = charSequenceGet(this.tx(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.ns('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.ns("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.ns("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.ns("Unexpected symbol '-' in numeric literal");
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
        this.ns("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.ns('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.ns('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.ns('EOF');
      }
      if (!(charSequenceGet(this.tx(), current) === _Char___init__impl__6a9atx(34))) {
        this.ns('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.np_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.m2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).m2() || doubleAccumulator < (new Long(0, -2147483648)).m2()) {
        this.ns('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.ns("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.i2();
    } else {
      this.ns('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).vv = function () {
    var current = this.wx();
    if (current === charSequenceLength(this.tx())) {
      this.ns('EOF');
    }
    var tmp;
    if (charSequenceGet(this.tx(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.np_1 === charSequenceLength(this.tx())) {
        this.ns('EOF');
      }
      if (!(charSequenceGet(this.tx(), this.np_1) === _Char___init__impl__6a9atx(34))) {
        this.ns('Expected closing quotation mark');
      }
      this.np_1 = this.np_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().ey_1;
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
    return c < 117 ? CharMappings_getInstance().dy_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.dy_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.ey_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.dy_1 = charArray(117);
    this.ey_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).ut = function () {
    var source = this.tx();
    var cpos = this.wx();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.np_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).qt = function () {
    var current = this.wx();
    if (current >= this.tx().length || current === -1)
      return false;
    return this.xx(charSequenceGet(this.tx(), current));
  };
  protoOf(StringJsonLexerWithComments).fv = function (expected) {
    var source = this.tx();
    var current = this.wx();
    if (current >= source.length || current === -1) {
      this.np_1 = -1;
      this.zx(expected);
    }
    var c = charSequenceGet(source, current);
    this.np_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.zx(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).pt = function () {
    var source = this.tx();
    var cpos = this.wx();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.np_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).wx = function () {
    var current = this.np_1;
    if (current === -1)
      return current;
    var source = this.tx();
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
            this.np_1 = source.length;
            this.ns('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.np_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.oy_1 = source;
  }
  protoOf(StringJsonLexer).tx = function () {
    return this.oy_1;
  };
  protoOf(StringJsonLexer).ux = function (position) {
    return position < this.tx().length ? position : -1;
  };
  protoOf(StringJsonLexer).ut = function () {
    var source = this.tx();
    var cpos = this.np_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.np_1 = cpos;
      return charToTokenClass(c);
    }
    this.np_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).qt = function () {
    var current = this.np_1;
    if (current === -1)
      return false;
    var source = this.tx();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.np_1 = current;
      return this.xx(c);
    }
    this.np_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).wx = function () {
    var current = this.np_1;
    if (current === -1)
      return current;
    var source = this.tx();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.np_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).fv = function (expected) {
    if (this.np_1 === -1) {
      this.zx(expected);
    }
    var source = this.tx();
    var cpos = this.np_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.np_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.zx(expected);
    }
    this.np_1 = -1;
    this.zx(expected);
  };
  protoOf(StringJsonLexer).lv = function () {
    this.fv(_Char___init__impl__6a9atx(34));
    var current = this.np_1;
    var closingQuote = indexOf_0(this.tx(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.st();
      this.ay(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.tx(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.tx(), this.np_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.np_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.tx().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).pv = function (keyToMatch, isLenient) {
    var positionSnapshot = this.np_1;
    try {
      if (!(this.ut() === 6))
        return null;
      var firstKey = this.iv(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.by();
      if (!(this.ut() === 5))
        return null;
      return this.iv(isLenient);
    }finally {
      this.np_1 = positionSnapshot;
      this.by();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.yo_1.ar_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.ap_1;
  }
  function JsonToStringWriter() {
    this.dp_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).zr = function (value) {
    this.dp_1.f9(value);
  };
  protoOf(JsonToStringWriter).ur = function (char) {
    this.dp_1.n6(char);
  };
  protoOf(JsonToStringWriter).wr = function (text) {
    this.dp_1.m6(text);
  };
  protoOf(JsonToStringWriter).ds = function (text) {
    printQuoted(this.dp_1, text);
  };
  protoOf(JsonToStringWriter).ep = function () {
    this.dp_1.h9();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.dp_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).hj = contextual;
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

