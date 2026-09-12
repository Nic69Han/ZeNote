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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var protoOf = kotlin_kotlin.$_$.j4;
  var initMetadataForObject = kotlin_kotlin.$_$.a4;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.h1;
  var initMetadataForClass = kotlin_kotlin.$_$.v3;
  var toString = kotlin_kotlin.$_$.m4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var charSequenceLength = kotlin_kotlin.$_$.k3;
  var charSequenceGet = kotlin_kotlin.$_$.j3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y;
  var equals = kotlin_kotlin.$_$.o3;
  var toString_0 = kotlin_kotlin.$_$.j6;
  var Enum = kotlin_kotlin.$_$.t5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m;
  var hashCode = kotlin_kotlin.$_$.u3;
  var joinToString = kotlin_kotlin.$_$.c2;
  var THROW_CCE = kotlin_kotlin.$_$.x5;
  var KtMap = kotlin_kotlin.$_$.l1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.q3;
  var getStringHashCode = kotlin_kotlin.$_$.t3;
  var KtList = kotlin_kotlin.$_$.k1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.x;
  var numberRangeToNumber = kotlin_kotlin.$_$.e4;
  var ClosedRange = kotlin_kotlin.$_$.n4;
  var isInterface = kotlin_kotlin.$_$.c4;
  var contains = kotlin_kotlin.$_$.q4;
  var toDouble = kotlin_kotlin.$_$.k5;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.f1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var toLong = kotlin_kotlin.$_$.l4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.g3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.l3;
  var coerceAtLeast = kotlin_kotlin.$_$.o4;
  var coerceAtMost = kotlin_kotlin.$_$.p4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.r2;
  var emptyMap = kotlin_kotlin.$_$.w1;
  var getValue = kotlin_kotlin.$_$.z1;
  var fillArrayVal = kotlin_kotlin.$_$.p3;
  var copyOf = kotlin_kotlin.$_$.r1;
  var copyOf_0 = kotlin_kotlin.$_$.s1;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.r5;
  var invoke = kotlin_kotlin.$_$.d6;
  var CoroutineImpl = kotlin_kotlin.$_$.c3;
  var DeepRecursiveScope = kotlin_kotlin.$_$.s5;
  var Unit = kotlin_kotlin.$_$.z5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.b3;
  var initMetadataForLambda = kotlin_kotlin.$_$.z3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.x3;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var getKClass = kotlin_kotlin.$_$.b;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var ensureNotNull = kotlin_kotlin.$_$.c6;
  var substringBefore = kotlin_kotlin.$_$.j5;
  var removeSuffix = kotlin_kotlin.$_$.e5;
  var substringAfter = kotlin_kotlin.$_$.i5;
  var contains_0 = kotlin_kotlin.$_$.w4;
  var plus = kotlin_kotlin.$_$.i6;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var IllegalArgumentException = kotlin_kotlin.$_$.v5;
  var isFinite = kotlin_kotlin.$_$.e6;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var objectCreate = kotlin_kotlin.$_$.i4;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.h6;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.a1;
  var numberToChar = kotlin_kotlin.$_$.f4;
  var equals_0 = kotlin_kotlin.$_$.x4;
  var toString_1 = kotlin_kotlin.$_$.b1;
  var toByte = kotlin_kotlin.$_$.k4;
  var startsWith = kotlin_kotlin.$_$.h5;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var emptySet = kotlin_kotlin.$_$.x1;
  var plus_0 = kotlin_kotlin.$_$.m2;
  var toInt = kotlin_kotlin.$_$.m5;
  var toList = kotlin_kotlin.$_$.w2;
  var enumEntries = kotlin_kotlin.$_$.d3;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var last = kotlin_kotlin.$_$.h2;
  var removeLast = kotlin_kotlin.$_$.p2;
  var lastIndexOf = kotlin_kotlin.$_$.d5;
  var Long = kotlin_kotlin.$_$.w5;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z;
  var numberToLong = kotlin_kotlin.$_$.h4;
  var charArray = kotlin_kotlin.$_$.i3;
  var indexOf = kotlin_kotlin.$_$.y4;
  var indexOf_0 = kotlin_kotlin.$_$.z4;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.l;
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
    this.co_1 = configuration;
    this.do_1 = serializersModule;
    this.eo_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).fd = function () {
    return this.do_1;
  };
  protoOf(Json).fo = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.io();
    }
  };
  protoOf(Json).go = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.mb(), null);
    var result = input.wc(deserializer);
    lexer.vo();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.op();
    return new JsonImpl(conf, builder.np_1);
  }
  function JsonBuilder(json) {
    this.wo_1 = json.co_1.pp_1;
    this.xo_1 = json.co_1.up_1;
    this.yo_1 = json.co_1.qp_1;
    this.zo_1 = json.co_1.rp_1;
    this.ap_1 = json.co_1.tp_1;
    this.bp_1 = json.co_1.vp_1;
    this.cp_1 = json.co_1.wp_1;
    this.dp_1 = json.co_1.yp_1;
    this.ep_1 = json.co_1.fq_1;
    this.fp_1 = json.co_1.aq_1;
    this.gp_1 = json.co_1.bq_1;
    this.hp_1 = json.co_1.cq_1;
    this.ip_1 = json.co_1.dq_1;
    this.jp_1 = json.co_1.eq_1;
    this.kp_1 = json.co_1.zp_1;
    this.lp_1 = json.co_1.sp_1;
    this.mp_1 = json.co_1.xp_1;
    this.np_1 = json.fd();
  }
  protoOf(JsonBuilder).op = function () {
    if (this.mp_1) {
      // Inline function 'kotlin.require' call
      if (!(this.dp_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.ep_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.ap_1) {
      // Inline function 'kotlin.require' call
      if (!(this.bp_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.bp_1 === '    ')) {
      var tmp3 = this.bp_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.bp_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.wo_1, this.yo_1, this.zo_1, this.lp_1, this.ap_1, this.xo_1, this.bp_1, this.cp_1, this.mp_1, this.dp_1, this.kp_1, this.fp_1, this.gp_1, this.hp_1, this.ip_1, this.jp_1, this.ep_1);
  };
  function validateConfiguration($this) {
    if (equals($this.fd(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.co_1.xp_1, $this.co_1.yp_1);
    $this.fd().ai(collector);
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
    this.pp_1 = encodeDefaults;
    this.qp_1 = ignoreUnknownKeys;
    this.rp_1 = isLenient;
    this.sp_1 = allowStructuredMapKeys;
    this.tp_1 = prettyPrint;
    this.up_1 = explicitNulls;
    this.vp_1 = prettyPrintIndent;
    this.wp_1 = coerceInputValues;
    this.xp_1 = useArrayPolymorphism;
    this.yp_1 = classDiscriminator;
    this.zp_1 = allowSpecialFloatingPointValues;
    this.aq_1 = useAlternativeNames;
    this.bq_1 = namingStrategy;
    this.cq_1 = decodeEnumsCaseInsensitive;
    this.dq_1 = allowTrailingComma;
    this.eq_1 = allowComments;
    this.fq_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.pp_1 + ', ignoreUnknownKeys=' + this.qp_1 + ', isLenient=' + this.rp_1 + ', ' + ('allowStructuredMapKeys=' + this.sp_1 + ', prettyPrint=' + this.tp_1 + ', explicitNulls=' + this.up_1 + ', ') + ("prettyPrintIndent='" + this.vp_1 + "', coerceInputValues=" + this.wp_1 + ', useArrayPolymorphism=' + this.xp_1 + ', ') + ("classDiscriminator='" + this.yp_1 + "', allowSpecialFloatingPointValues=" + this.zp_1 + ', ') + ('useAlternativeNames=' + this.aq_1 + ', namingStrategy=' + toString_0(this.bq_1) + ', decodeEnumsCaseInsensitive=' + this.cq_1 + ', ') + ('allowTrailingComma=' + this.dq_1 + ', allowComments=' + this.eq_1 + ', classDiscriminatorMode=' + this.fq_1.toString() + ')');
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
    var k = _destruct__k2r9zo.n1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.o1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.f6(_Char___init__impl__6a9atx(58));
    this_0.d6(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.gq_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.gq_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.gq_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.gq_1.s1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).hq = function (key) {
    return this.gq_1.p1(key);
  };
  protoOf(JsonObject).p1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.hq((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).iq = function (key) {
    return this.gq_1.q1(key);
  };
  protoOf(JsonObject).q1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.iq((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).j = function () {
    return this.gq_1.j();
  };
  protoOf(JsonObject).s1 = function () {
    return this.gq_1.s1();
  };
  protoOf(JsonObject).r1 = function () {
    return this.gq_1.r1();
  };
  protoOf(JsonObject).l = function () {
    return this.gq_1.l();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.jq_1 = 'null';
  }
  protoOf(JsonNull).kq = function () {
    return this.jq_1;
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
    return this.kq();
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
    this.lq_1 = isString;
    this.mq_1 = coerceToInlineType;
    this.nq_1 = toString(body);
    if (!(this.mq_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.mq_1.cc()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).kq = function () {
    return this.nq_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.lq_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.nq_1);
      tmp = this_0.toString();
    } else {
      tmp = this.nq_1;
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
    if (!(this.lq_1 === other.lq_1))
      return false;
    if (!(this.nq_1 === other.nq_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.lq_1);
    result = imul(31, result) + getStringHashCode(this.nq_1) | 0;
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
    this.oq_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.oq_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.oq_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.oq_1, ',', '[', ']');
  };
  protoOf(JsonArray).k = function (index) {
    return this.oq_1.k(index);
  };
  protoOf(JsonArray).j = function () {
    return this.oq_1.j();
  };
  protoOf(JsonArray).g = function () {
    return this.oq_1.g();
  };
  protoOf(JsonArray).q = function (index) {
    return this.oq_1.q(index);
  };
  protoOf(JsonArray).l = function () {
    return this.oq_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.kq());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.kq())).pq();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.kq() + ' is not an Int');
    return result.w();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.kq())).pq();
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
    return toDouble(_this__u8e3s4.kq());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.kq();
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
    this.qq_1 = writer;
    this.rq_1 = true;
  }
  protoOf(Composer).sq = function () {
    this.rq_1 = true;
  };
  protoOf(Composer).tq = function () {
    return Unit_instance;
  };
  protoOf(Composer).uq = function () {
    this.rq_1 = false;
  };
  protoOf(Composer).vq = function () {
    this.rq_1 = false;
  };
  protoOf(Composer).wq = function () {
    return Unit_instance;
  };
  protoOf(Composer).xq = function (v) {
    return this.qq_1.yq(v);
  };
  protoOf(Composer).zq = function (v) {
    return this.qq_1.ar(v);
  };
  protoOf(Composer).br = function (v) {
    return this.qq_1.ar(v.toString());
  };
  protoOf(Composer).cr = function (v) {
    return this.qq_1.dr(toLong(v));
  };
  protoOf(Composer).er = function (v) {
    return this.qq_1.dr(v);
  };
  protoOf(Composer).fr = function (v) {
    return this.qq_1.ar(v.toString());
  };
  protoOf(Composer).gr = function (value) {
    return this.qq_1.hr(value);
  };
  function Composer_0(sb, json) {
    return json.co_1.tp_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.kr_1 = json;
    this.lr_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).sq = function () {
    this.rq_1 = true;
    this.lr_1 = this.lr_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).tq = function () {
    this.lr_1 = this.lr_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).uq = function () {
    this.rq_1 = false;
    this.zq('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.lr_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.zq(this.kr_1.co_1.vp_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).vq = function () {
    if (this.rq_1)
      this.rq_1 = false;
    else {
      this.uq();
    }
  };
  protoOf(ComposerWithPrettyPrint).wq = function () {
    this.xq(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.nr_1 = (!descriptor.jc(index) && descriptor.ic(index).ub());
    return $this.nr_1;
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
    tmp.mr_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.nr_1 = false;
  }
  protoOf(JsonElementMarker).or = function (index) {
    this.mr_1.lf(index);
  };
  protoOf(JsonElementMarker).pr = function () {
    return this.mr_1.mf();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.qr('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.ro_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.rr('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.ac() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.bc().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.gc(name);
    if (!(index === -3))
      return index;
    if (!json.co_1.aq_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.fc(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.bc(), CLASS_getInstance()) ? json.co_1.bq_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.tr(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.co_1.cq_1 && equals(descriptor.bc(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).q1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.tr(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.dc();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.hc(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ur_1;
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
          tmp_0 = _this__u8e3s4.fc(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.vr(_this__u8e3s4, i, _this__u8e3s4.fc(i));
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
    var entity = equals($this_buildDeserializationNamesMap.bc(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).p1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.fc(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.fc(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.o3(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.dc();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.fc(tmp_2);
        tmp_1[tmp_2] = $strategy.vr($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.yr_1, 2);
    $this.wr_1 = copyOf($this.wr_1, newSize);
    $this.xr_1 = copyOf_0($this.xr_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.wr_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.xr_1 = tmp_2;
    this.yr_1 = -1;
  }
  protoOf(JsonPath).zr = function (sd) {
    this.yr_1 = this.yr_1 + 1 | 0;
    var depth = this.yr_1;
    if (depth === this.wr_1.length) {
      resize(this);
    }
    this.wr_1[depth] = sd;
  };
  protoOf(JsonPath).as = function (index) {
    this.xr_1[this.yr_1] = index;
  };
  protoOf(JsonPath).bs = function (key) {
    var tmp;
    if (!(this.xr_1[this.yr_1] === -2)) {
      this.yr_1 = this.yr_1 + 1 | 0;
      tmp = this.yr_1 === this.wr_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.wr_1[this.yr_1] = key;
    this.xr_1[this.yr_1] = -2;
  };
  protoOf(JsonPath).cs = function () {
    if (this.xr_1[this.yr_1] === -2) {
      this.wr_1[this.yr_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).ds = function () {
    var depth = this.yr_1;
    if (this.xr_1[depth] === -2) {
      this.xr_1[depth] = -1;
      this.yr_1 = this.yr_1 - 1 | 0;
    }
    if (!(this.yr_1 === -1)) {
      this.yr_1 = this.yr_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).es = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.e6('$');
    // Inline function 'kotlin.repeat' call
    var times = this.yr_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.wr_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.bc(), LIST_getInstance())) {
            if (!(this.xr_1[index] === -1)) {
              this_0.e6('[');
              this_0.w8(this.xr_1[index]);
              this_0.e6(']');
            }
          } else {
            var idx = this.xr_1[index];
            if (idx >= 0) {
              this_0.e6('.');
              this_0.e6(element.fc(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.e6('[');
            this_0.e6("'");
            this_0.d6(element);
            this_0.e6("'");
            this_0.e6(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.es();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.vd(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.os_1.ss(6);
    if ($this.os_1.ts() === 4) {
      $this.os_1.rr('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.os_1.us()) {
      var key = $this.ps_1 ? $this.os_1.ws() : $this.os_1.vs();
      $this.os_1.ss(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.xs();
      // Inline function 'kotlin.collections.set' call
      result.o3(key, element);
      lastToken = $this.os_1.ys();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.os_1.rr('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.os_1.ss(7);
    } else if (lastToken === 4) {
      if (!$this.qs_1) {
        invalidTrailingComma($this.os_1);
      }
      $this.os_1.ss(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.s6_1 = Unit_instance;
    tmp.t6_1 = null;
    return tmp.y6();
  }
  function readArray($this) {
    var lastToken = $this.os_1.ys();
    if ($this.os_1.ts() === 4) {
      $this.os_1.rr('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.os_1.us()) {
      var element = $this.xs();
      result.e(element);
      lastToken = $this.os_1.ys();
      if (!(lastToken === 4)) {
        var tmp0 = $this.os_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.ro_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.rr(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.os_1.ss(9);
    } else if (lastToken === 4) {
      if (!$this.qs_1) {
        invalidTrailingComma($this.os_1, 'array');
      }
      $this.os_1.ss(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.ps_1 || !isString) {
      tmp = $this.os_1.ws();
    } else {
      tmp = $this.os_1.vs();
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
    this.wt_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).bu = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.cu($this$DeepRecursiveFunction, it, $completion);
    tmp.s6_1 = Unit_instance;
    tmp.t6_1 = null;
    return tmp.y6();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.bu(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).y6 = function () {
    var suspendResult = this.s6_1;
    $sm: do
      try {
        var tmp = this.q6_1;
        switch (tmp) {
          case 0:
            this.r6_1 = 3;
            this.zt_1 = this.wt_1.os_1.ts();
            if (this.zt_1 === 1) {
              this.au_1 = readValue(this.wt_1, true);
              this.q6_1 = 2;
              continue $sm;
            } else {
              if (this.zt_1 === 0) {
                this.au_1 = readValue(this.wt_1, false);
                this.q6_1 = 2;
                continue $sm;
              } else {
                if (this.zt_1 === 6) {
                  this.q6_1 = 1;
                  suspendResult = readObject_0(this.xt_1, this.wt_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.zt_1 === 8) {
                    this.au_1 = readArray(this.wt_1);
                    this.q6_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.wt_1.os_1.rr("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.au_1 = suspendResult;
            this.q6_1 = 2;
            continue $sm;
          case 2:
            return this.au_1;
          case 3:
            throw this.t6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r6_1 === 3) {
          throw e;
        } else {
          this.q6_1 = this.r6_1;
          this.t6_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).cu = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.wt_1, completion);
    i.xt_1 = $this$DeepRecursiveFunction;
    i.yt_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.bu($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ht_1 = _this__u8e3s4;
    this.it_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).y6 = function () {
    var suspendResult = this.s6_1;
    $sm: do
      try {
        var tmp = this.q6_1;
        switch (tmp) {
          case 0:
            this.r6_1 = 5;
            var tmp_0 = this;
            tmp_0.jt_1 = this.ht_1;
            this.kt_1 = this.jt_1;
            this.lt_1 = this.kt_1.os_1.ss(6);
            if (this.kt_1.os_1.ts() === 4) {
              this.kt_1.os_1.rr('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.mt_1 = LinkedHashMap_init_$Create$();
            this.q6_1 = 1;
            continue $sm;
          case 1:
            if (!this.kt_1.os_1.us()) {
              this.q6_1 = 4;
              continue $sm;
            }

            this.nt_1 = this.kt_1.ps_1 ? this.kt_1.os_1.ws() : this.kt_1.os_1.vs();
            this.kt_1.os_1.ss(5);
            this.q6_1 = 2;
            suspendResult = this.it_1.za(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.mt_1;
            var key = this.nt_1;
            tmp0.o3(key, element);
            this.lt_1 = this.kt_1.os_1.ys();
            var tmp0_subject = this.lt_1;
            if (tmp0_subject === 4) {
              this.q6_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.q6_1 = 4;
                continue $sm;
              } else {
                this.kt_1.os_1.rr('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.q6_1 = 1;
            continue $sm;
          case 4:
            if (this.lt_1 === 6) {
              this.kt_1.os_1.ss(7);
            } else if (this.lt_1 === 4) {
              if (!this.kt_1.qs_1) {
                invalidTrailingComma(this.kt_1.os_1);
              }
              this.kt_1.os_1.ss(7);
            }

            return new JsonObject(this.mt_1);
          case 5:
            throw this.t6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r6_1 === 5) {
          throw e;
        } else {
          this.q6_1 = this.r6_1;
          this.t6_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.os_1 = lexer;
    this.ps_1 = configuration.rp_1;
    this.qs_1 = configuration.dq_1;
    this.rs_1 = 0;
  }
  protoOf(JsonTreeReader).xs = function () {
    var token = this.os_1.ts();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.rs_1 = this.rs_1 + 1 | 0;
      if (this.rs_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.rs_1 = this.rs_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.os_1.rr('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.ec().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.du_1;
    }
    return json.co_1.yp_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.mb()).l1(classDiscriminator)) {
      var baseName = serializer.mb().ac();
      var actualName = actualSerializer.mb().ac();
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
    var kind = descriptor.bc();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.p7() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.eu_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.p7() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.dc();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.fc(i);
        if (name === $this.fu_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.eu_1 = useArrayPolymorphism;
    this.fu_1 = discriminator;
  }
  protoOf(PolymorphismValidator).ji = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).mi = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.mb();
    checkKind_0(this, descriptor, actualClass);
    if (!this.eu_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).ni = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).oi = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.sr_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).gu = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.sr_1;
    var value_0 = this_0.q1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.o3(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.o3(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).tr = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.hu(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.gu(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).hu = function (descriptor, key) {
    var tmp0_safe_receiver = this.sr_1.q1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.q1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.iu_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.iu_1 === unknownKey) {
      _this__u8e3s4.iu_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.hd(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.lo_1.ts() === 4) {
      $this.lo_1.rr('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.no_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.no_1 === -1)) {
        hasComma = $this.lo_1.ku();
      }
    } else {
      $this.lo_1.ju(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.lo_1.us()) {
      if (decodingKey) {
        if ($this.no_1 === -1) {
          var tmp0 = $this.lo_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.ro_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.rr(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.lo_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.ro_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.rr(tmp$ret$1, position_0);
          }
        }
      }
      $this.no_1 = $this.no_1 + 1 | 0;
      tmp = $this.no_1;
    } else {
      if (hasComma && !$this.jo_1.co_1.dq_1) {
        invalidTrailingComma($this.lo_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.jo_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.jc(index);
      var elementDescriptor = descriptor.ic(index);
      var tmp;
      if (isOptional && !elementDescriptor.ub()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.lo_1.lu(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.bc(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.ub()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.lo_1.lu(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.lo_1.mu($this.po_1.rp_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.co_1.up_1 && elementDescriptor.ub();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.lo_1.vs();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.lo_1.ku();
    while ($this.lo_1.us()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.lo_1.ju(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.jo_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.po_1.wp_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.lo_1.ku();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.qo_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.or(index);
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
    if (hasComma && !$this.jo_1.co_1.dq_1) {
      invalidTrailingComma($this.lo_1);
    }
    var tmp1_safe_receiver = $this.qo_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pr();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.po_1.qp_1 || trySkip($this.oo_1, $this, key)) {
      $this.lo_1.ou($this.po_1.rp_1);
    } else {
      $this.lo_1.nu(key);
    }
    return $this.lo_1.ku();
  }
  function decodeListIndex($this) {
    var hasComma = $this.lo_1.ku();
    var tmp;
    if ($this.lo_1.us()) {
      if (!($this.no_1 === -1) && !hasComma) {
        $this.lo_1.rr('Expected end of the array or comma');
      }
      $this.no_1 = $this.no_1 + 1 | 0;
      tmp = $this.no_1;
    } else {
      if (hasComma && !$this.jo_1.co_1.dq_1) {
        invalidTrailingComma($this.lo_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.po_1.rp_1) {
      tmp = $this.lo_1.qu();
    } else {
      tmp = $this.lo_1.pu();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.jo_1 = json;
    this.ko_1 = mode;
    this.lo_1 = lexer;
    this.mo_1 = this.jo_1.fd();
    this.no_1 = -1;
    this.oo_1 = discriminatorHolder;
    this.po_1 = this.jo_1.co_1;
    this.qo_1 = this.po_1.up_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).ru = function () {
    return this.jo_1;
  };
  protoOf(StreamingJsonDecoder).fd = function () {
    return this.mo_1;
  };
  protoOf(StreamingJsonDecoder).su = function () {
    return (new JsonTreeReader(this.jo_1.co_1, this.lo_1)).xs();
  };
  protoOf(StreamingJsonDecoder).wc = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.jo_1.co_1.xp_1;
      }
      if (tmp) {
        return deserializer.ob(this);
      }
      var discriminator = classDiscriminator(deserializer.mb(), this.jo_1);
      var tmp0_elvis_lhs = this.lo_1.tu(discriminator, this.po_1.rp_1);
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
            tmp_1 = this.ru().co_1.xp_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.ob(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.mb(), this.ru());
          var tmp0 = this.su();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.mb().ac();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).p7();
            var tmp_3 = getKClassFromExpression(tmp0).p7();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.lo_1.so_1.es();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.iq(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.ru(), discriminator_0, jsonTree, actualSerializer);
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
          this.lo_1.rr(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.oo_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.ob(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.tb_1, plus(e.message, ' at path: ') + this.lo_1.so_1.es(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).xc = function (descriptor) {
    var newMode = switchMode(this.jo_1, descriptor);
    this.lo_1.so_1.zr(descriptor);
    this.lo_1.ju(newMode.wu_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.u1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.jo_1, newMode, this.lo_1, descriptor, this.oo_1);
        break;
      default:
        var tmp_0;
        if (this.ko_1.equals(newMode) && this.jo_1.co_1.up_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.jo_1, newMode, this.lo_1, descriptor, this.oo_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).yc = function (descriptor) {
    if (this.jo_1.co_1.qp_1 && descriptor.dc() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.lo_1.ku() && !this.jo_1.co_1.dq_1) {
      invalidTrailingComma(this.lo_1, '');
    }
    this.lo_1.ju(this.ko_1.xu_1);
    this.lo_1.so_1.ds();
  };
  protoOf(StreamingJsonDecoder).oc = function () {
    var tmp;
    var tmp0_safe_receiver = this.qo_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nr_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.lo_1.yu();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).pc = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).cd = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.ko_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.lo_1.so_1.cs();
    }
    var value = protoOf(AbstractDecoder).cd.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.lo_1.so_1.bs(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).hd = function (descriptor) {
    var index;
    switch (this.ko_1.u1_1) {
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
    if (!this.ko_1.equals(WriteMode_MAP_getInstance())) {
      this.lo_1.so_1.as(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).qc = function () {
    return this.lo_1.zu();
  };
  protoOf(StreamingJsonDecoder).rc = function () {
    var value = this.lo_1.pq();
    if (!value.equals(toLong(value.w()))) {
      this.lo_1.rr("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.w();
  };
  protoOf(StreamingJsonDecoder).sc = function () {
    return this.lo_1.pq();
  };
  protoOf(StreamingJsonDecoder).tc = function () {
    var tmp0 = this.lo_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.ws();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.rr("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.jo_1.co_1.zp_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.lo_1, result);
  };
  protoOf(StreamingJsonDecoder).uc = function () {
    var tmp;
    if (this.po_1.rp_1) {
      tmp = this.lo_1.qu();
    } else {
      tmp = this.lo_1.vs();
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
    $this.fs_1.uq();
    $this.qd(discriminator);
    $this.fs_1.xq(_Char___init__impl__6a9atx(58));
    $this.fs_1.wq();
    $this.qd(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.fs_1 = composer;
    this.gs_1 = json;
    this.hs_1 = mode;
    this.is_1 = modeReuseCache;
    this.js_1 = this.gs_1.fd();
    this.ks_1 = this.gs_1.co_1;
    this.ls_1 = false;
    this.ms_1 = null;
    this.ns_1 = null;
    var i = this.hs_1.u1_1;
    if (!(this.is_1 == null)) {
      if (!(this.is_1[i] === null) || !(this.is_1[i] === this)) {
        this.is_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).ru = function () {
    return this.gs_1;
  };
  protoOf(StreamingJsonEncoder).fd = function () {
    return this.js_1;
  };
  protoOf(StreamingJsonEncoder).ae = function (descriptor, index) {
    return this.ks_1.pp_1;
  };
  protoOf(StreamingJsonEncoder).vd = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.ru().co_1.xp_1) {
        serializer.nb(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.ru().co_1.fq_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.ru().co_1.fq_1.u1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.mb().bc();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.mb(), this.ru()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.mb()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.mb().bc());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.mb().ac();
        this.ms_1 = baseClassDiscriminator;
        this.ns_1 = serialName;
      }
      actualSerializer.nb(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).xc = function (descriptor) {
    var newMode = switchMode(this.gs_1, descriptor);
    if (!(newMode.wu_1 === _Char___init__impl__6a9atx(0))) {
      this.fs_1.xq(newMode.wu_1);
      this.fs_1.sq();
    }
    var discriminator = this.ms_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.ns_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.ac() : tmp0_elvis_lhs);
      this.ms_1 = null;
      this.ns_1 = null;
    }
    if (this.hs_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.is_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.u1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.fs_1, this.gs_1, newMode, this.is_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).yc = function (descriptor) {
    if (!(this.hs_1.xu_1 === _Char___init__impl__6a9atx(0))) {
      this.fs_1.tq();
      this.fs_1.vq();
      this.fs_1.xq(this.hs_1.xu_1);
    }
  };
  protoOf(StreamingJsonEncoder).jd = function (descriptor, index) {
    switch (this.hs_1.u1_1) {
      case 1:
        if (!this.fs_1.rq_1) {
          this.fs_1.xq(_Char___init__impl__6a9atx(44));
        }

        this.fs_1.uq();
        break;
      case 2:
        if (!this.fs_1.rq_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.fs_1.xq(_Char___init__impl__6a9atx(44));
            this.fs_1.uq();
            tmp_0 = true;
          } else {
            this.fs_1.xq(_Char___init__impl__6a9atx(58));
            this.fs_1.wq();
            tmp_0 = false;
          }
          tmp.ls_1 = tmp_0;
        } else {
          this.ls_1 = true;
          this.fs_1.uq();
        }

        break;
      case 3:
        if (index === 0)
          this.ls_1 = true;
        if (index === 1) {
          this.fs_1.xq(_Char___init__impl__6a9atx(44));
          this.fs_1.wq();
          this.ls_1 = false;
        }

        break;
      default:
        if (!this.fs_1.rq_1) {
          this.fs_1.xq(_Char___init__impl__6a9atx(44));
        }

        this.fs_1.uq();
        this.qd(getJsonElementName(descriptor, this.gs_1, index));
        this.fs_1.xq(_Char___init__impl__6a9atx(58));
        this.fs_1.wq();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).wd = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.ks_1.up_1) {
      protoOf(AbstractEncoder).wd.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).ld = function () {
    this.fs_1.zq('null');
  };
  protoOf(StreamingJsonEncoder).md = function (value) {
    if (this.ls_1) {
      this.qd(value.toString());
    } else {
      this.fs_1.fr(value);
    }
  };
  protoOf(StreamingJsonEncoder).nd = function (value) {
    if (this.ls_1) {
      this.qd(value.toString());
    } else {
      this.fs_1.cr(value);
    }
  };
  protoOf(StreamingJsonEncoder).od = function (value) {
    if (this.ls_1) {
      this.qd(value.toString());
    } else {
      this.fs_1.er(value);
    }
  };
  protoOf(StreamingJsonEncoder).pd = function (value) {
    if (this.ls_1) {
      this.qd(value.toString());
    } else {
      this.fs_1.br(value);
    }
    if (!this.ks_1.zp_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.fs_1.qq_1));
    }
  };
  protoOf(StreamingJsonEncoder).qd = function (value) {
    return this.fs_1.gr(value);
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
    _this__u8e3s4.f6(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.u8(value, lastPos, i);
          _this__u8e3s4.e6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.u8(value, lastPos, value.length);
    else
      _this__u8e3s4.e6(value);
    _this__u8e3s4.f6(_Char___init__impl__6a9atx(34));
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.gv(tag), toString($this.hv()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.cv_1 = json;
    this.dv_1 = value;
    this.ev_1 = polymorphicDiscriminator;
    this.fv_1 = this.ru().co_1;
  }
  protoOf(AbstractJsonTreeDecoder).ru = function () {
    return this.cv_1;
  };
  protoOf(AbstractJsonTreeDecoder).o1 = function () {
    return this.dv_1;
  };
  protoOf(AbstractJsonTreeDecoder).fd = function () {
    return this.ru().fd();
  };
  protoOf(AbstractJsonTreeDecoder).hv = function () {
    var tmp0_safe_receiver = this.nh();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.iv(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.o1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).gv = function (currentTag) {
    return this.ph() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).su = function () {
    return this.hv();
  };
  protoOf(AbstractJsonTreeDecoder).wc = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.ru().co_1.xp_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.ob(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.mb(), this.ru());
      var tmp0 = this.su();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.mb().ac();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).p7();
        var tmp_1 = getKClassFromExpression(tmp0).p7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.ph();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.iq(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.ru(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).oh = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).xc = function (descriptor) {
    var currentObject = this.hv();
    var tmp0_subject = descriptor.bc();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.ru();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.ac();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).p7();
        var tmp_3 = getKClassFromExpression(currentObject).p7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.ph();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.ru();
        var keyDescriptor = carrierDescriptor(descriptor.ic(0), this_0.fd());
        var keyKind = keyDescriptor.bc();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.ru();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.ac();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).p7();
            var tmp_8 = getKClassFromExpression(currentObject).p7();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.ph();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.co_1.sp_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.ru();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.ac();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).p7();
              var tmp_11 = getKClassFromExpression(currentObject).p7();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.ph();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.ru();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.ac();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).p7();
          var tmp_14 = getKClassFromExpression(currentObject).p7();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.ph();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.ev_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).yc = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).oc = function () {
    var tmp = this.hv();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).jv = function (tag) {
    return !(this.iv(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).rh = function (tag) {
    return this.jv((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).kv = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.iv(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).p7();
        var tmp_0 = getKClassFromExpression(value).p7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.gv(tag);
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
  protoOf(AbstractJsonTreeDecoder).sh = function (tag) {
    return this.kv((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).lv = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.iv(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).p7();
        var tmp_0 = getKClassFromExpression(value).p7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.gv(tag);
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
  protoOf(AbstractJsonTreeDecoder).th = function (tag) {
    return this.lv((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).mv = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.iv(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).p7();
        var tmp_0 = getKClassFromExpression(value).p7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.gv(tag);
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
  protoOf(AbstractJsonTreeDecoder).uh = function (tag) {
    return this.mv((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).nv = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.iv(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).p7();
        var tmp_0 = getKClassFromExpression(value).p7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.gv(tag);
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
    var specialFp = this.ru().co_1.zp_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.hv()));
  };
  protoOf(AbstractJsonTreeDecoder).vh = function (tag) {
    return this.nv((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).ov = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.iv(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).p7();
      var tmp_0 = getKClassFromExpression(value).p7();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.gv(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.gv(tag), toString(this.hv()));
    if (!value_0.lq_1 && !this.ru().co_1.rp_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.gv(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.hv()));
    }
    return value_0.nq_1;
  };
  protoOf(AbstractJsonTreeDecoder).wh = function (tag) {
    return this.ov((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.ru();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.jc(index);
      var elementDescriptor = descriptor.ic(index);
      var tmp;
      if (isOptional && !elementDescriptor.ub()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.iv(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.bc(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.ub()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.iv(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.iv(tag);
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
        var coerceToNull = !tmp0.co_1.up_1 && elementDescriptor.ub();
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
    $this.yv_1 = (!$this.ru().co_1.up_1 && !descriptor.jc(index) && descriptor.ic(index).ub());
    return $this.yv_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.vv_1 = value;
    this.wv_1 = polyDescriptor;
    this.xv_1 = 0;
    this.yv_1 = false;
  }
  protoOf(JsonTreeDecoder).o1 = function () {
    return this.vv_1;
  };
  protoOf(JsonTreeDecoder).hd = function (descriptor) {
    while (this.xv_1 < descriptor.dc()) {
      var _unary__edvuaz = this.xv_1;
      this.xv_1 = _unary__edvuaz + 1 | 0;
      var name = this.ih(descriptor, _unary__edvuaz);
      var index = this.xv_1 - 1 | 0;
      this.yv_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.o1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).p1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.fv_1.wp_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).oc = function () {
    return !this.yv_1 && protoOf(AbstractJsonTreeDecoder).oc.call(this);
  };
  protoOf(JsonTreeDecoder).jh = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.ru());
    var baseName = descriptor.fc(index);
    if (strategy == null) {
      if (!this.fv_1.aq_1)
        return baseName;
      if (this.o1().r1().l1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.ru(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.o1().r1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.q1(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.vr(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).iv = function (tag) {
    return getValue(this.o1(), tag);
  };
  protoOf(JsonTreeDecoder).xc = function (descriptor) {
    if (descriptor === this.wv_1) {
      var tmp = this.ru();
      var tmp1 = this.hv();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.wv_1.ac();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).p7();
        var tmp_1 = getKClassFromExpression(tmp1).p7();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.ph();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.ev_1, this.wv_1);
    }
    return protoOf(AbstractJsonTreeDecoder).xc.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).yc = function (descriptor) {
    var tmp;
    if (this.fv_1.qp_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.bc();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.ru());
    var tmp_1;
    if (strategy == null && !this.fv_1.aq_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.ru(), descriptor).r1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.ru()).hu(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.o1().r1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.l1(key) && !(key === this.ev_1)) {
        throw UnknownKeyException(key, this.o1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.fw_1 = value;
    this.gw_1 = this.fw_1.l();
    this.hw_1 = -1;
  }
  protoOf(JsonTreeListDecoder).o1 = function () {
    return this.fw_1;
  };
  protoOf(JsonTreeListDecoder).jh = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).iv = function (tag) {
    return this.fw_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).hd = function (descriptor) {
    while (this.hw_1 < (this.gw_1 - 1 | 0)) {
      this.hw_1 = this.hw_1 + 1 | 0;
      return this.hw_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.sw_1 = value;
    this.tw_1 = toList(this.sw_1.r1());
    this.uw_1 = imul(this.tw_1.l(), 2);
    this.vw_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).o1 = function () {
    return this.sw_1;
  };
  protoOf(JsonTreeMapDecoder).jh = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.tw_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).hd = function (descriptor) {
    while (this.vw_1 < (this.uw_1 - 1 | 0)) {
      this.vw_1 = this.vw_1 + 1 | 0;
      return this.vw_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).iv = function (tag) {
    return (this.vw_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.sw_1, tag);
  };
  protoOf(JsonTreeMapDecoder).yc = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.mb())).wc(deserializer);
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
    this.wu_1 = begin;
    this.xu_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.bc();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.ic(0), _this__u8e3s4.fd());
          var keyKind = keyDescriptor.bc();
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
            if (_this__u8e3s4.co_1.sp_1) {
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
    if (equals(_this__u8e3s4.bc(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.cc()) {
      tmp = carrierDescriptor(_this__u8e3s4.ic(0), module_0);
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
    $this.ww(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.ww(lastPosition, currentPosition);
    var result = $this.uo_1.toString();
    $this.uo_1.y8(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.to_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.to_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.xw(), $this.ro_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.yw(currentPosition);
    if (currentPosition === -1) {
      $this.rr('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.xw();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.xw(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.rr("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.uo_1.f6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.ro_1 = startPos;
      $this.zw();
      if (($this.ro_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.rr('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.ro_1);
    }
    $this.uo_1.f6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.rr("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.yw(start);
    if (current >= charSequenceLength($this.xw()) || current === -1) {
      $this.rr('EOF');
    }
    var tmp = $this.xw();
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
        $this.rr("Expected valid boolean literal prefix, but had '" + $this.ws() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.xw()) - current | 0) < literalSuffix.length) {
      $this.rr('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.xw(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.rr("Expected valid boolean literal prefix, but had '" + $this.ws() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.ro_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.i2();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.i2();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.ro_1 = 0;
    this.so_1 = new JsonPath();
    this.to_1 = null;
    this.uo_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).zw = function () {
  };
  protoOf(AbstractJsonLexer).ku = function () {
    var current = this.ax();
    var source = this.xw();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.ro_1 = this.ro_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).bx = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).vo = function () {
    var nextToken = this.ys();
    if (!(nextToken === 10)) {
      this.rr('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.xw(), this.ro_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).ss = function (expected) {
    var token = this.ys();
    if (!(token === expected)) {
      this.cx(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).dx = function (expected) {
    if (this.ro_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.ro_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.ro_1 = this.ro_1 - 1 | 0;
          tmp$ret$1 = this.ws();
          break $l$block;
        }finally {
          this.ro_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.qr("Expected string literal but 'null' literal was found", this.ro_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.cx(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).ex = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.ro_1 - 1 | 0 : this.ro_1;
    var s = this.ro_1 === charSequenceLength(this.xw()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.xw(), position));
    this.rr('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).cx = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.ex(expectedToken, wasConsumed) : $super.ex.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).ts = function () {
    var source = this.xw();
    var cpos = this.ro_1;
    $l$loop_0: while (true) {
      cpos = this.yw(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.ro_1 = cpos;
      return charToTokenClass(ch);
    }
    this.ro_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).lu = function (doConsume) {
    var current = this.ax();
    current = this.yw(current);
    var len = charSequenceLength(this.xw()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.xw(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.xw(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.ro_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).yu = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.lu(doConsume) : $super.lu.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).mu = function (isLenient) {
    var token = this.ts();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.ws();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.vs();
    }
    var string = tmp;
    this.to_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).fx = function () {
    this.to_1 = null;
  };
  protoOf(AbstractJsonLexer).gx = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.xw();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).vs = function () {
    if (!(this.to_1 == null)) {
      return takePeeked(this);
    }
    return this.pu();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.yw(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.rr('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.ww(lastPosition, currentPosition);
          currentPosition = this.yw(currentPosition);
          if (currentPosition === -1) {
            this.rr('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.gx(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.ro_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).qu = function () {
    var result = this.ws();
    if (result === 'null' && wasUnquotedString(this)) {
      this.rr("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).ws = function () {
    if (!(this.to_1 == null)) {
      return takePeeked(this);
    }
    var current = this.ax();
    if (current >= charSequenceLength(this.xw()) || current === -1) {
      this.rr('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.xw(), current));
    if (token === 1) {
      return this.vs();
    }
    if (!(token === 0)) {
      this.rr('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.xw(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.xw(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.xw())) {
        usedAppend = true;
        this.ww(this.ro_1, current);
        var eof = this.yw(current);
        if (eof === -1) {
          this.ro_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.gx(this.ro_1, current);
    } else {
      tmp = decodedString(this, this.ro_1, current);
    }
    var result = tmp;
    this.ro_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).ww = function (fromIndex, toIndex) {
    this.uo_1.u8(this.xw(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).ou = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.ts();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.ws();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.ts();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.ws();
        else
          this.pu();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.ro_1, 'found ] instead of } at path: ' + this.so_1.toString(), this.xw());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.ro_1, 'found } instead of ] at path: ' + this.so_1.toString(), this.xw());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.rr('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.ys();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.xw()) + "', currentPosition=" + this.ro_1 + ')';
  };
  protoOf(AbstractJsonLexer).nu = function (key) {
    var processed = this.gx(0, this.ro_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.qr("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).qr = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.so_1.es() + hintMessage, this.xw());
  };
  protoOf(AbstractJsonLexer).rr = function (message, position, hint, $super) {
    position = position === VOID ? this.ro_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.qr(message, position, hint) : $super.qr.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).pq = function () {
    var current = this.ax();
    current = this.yw(current);
    if (current >= charSequenceLength(this.xw()) || current === -1) {
      this.rr('EOF');
    }
    var tmp;
    if (charSequenceGet(this.xw(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.xw())) {
        this.rr('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.xw()))) {
      var ch = charSequenceGet(this.xw(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.rr('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.rr("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.rr("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.rr("Unexpected symbol '-' in numeric literal");
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
        this.rr("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.c2(toLong(10)).a2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.c2(toLong(10)).b2(toLong(digit));
      if (accumulator.x(new Long(0, 0)) > 0) {
        this.rr('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.rr('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.rr('EOF');
      }
      if (!(charSequenceGet(this.xw(), current) === _Char___init__impl__6a9atx(34))) {
        this.rr('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.ro_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.i2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).i2() || doubleAccumulator < (new Long(0, -2147483648)).i2()) {
        this.rr('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.rr("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.e2();
    } else {
      this.rr('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).zu = function () {
    var current = this.ax();
    if (current === charSequenceLength(this.xw())) {
      this.rr('EOF');
    }
    var tmp;
    if (charSequenceGet(this.xw(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.ro_1 === charSequenceLength(this.xw())) {
        this.rr('EOF');
      }
      if (!(charSequenceGet(this.xw(), this.ro_1) === _Char___init__impl__6a9atx(34))) {
        this.rr('Expected closing quotation mark');
      }
      this.ro_1 = this.ro_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().ix_1;
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
    return c < 117 ? CharMappings_getInstance().hx_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.hx_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.ix_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.hx_1 = charArray(117);
    this.ix_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).ys = function () {
    var source = this.xw();
    var cpos = this.ax();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.ro_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).us = function () {
    var current = this.ax();
    if (current >= this.xw().length || current === -1)
      return false;
    return this.bx(charSequenceGet(this.xw(), current));
  };
  protoOf(StringJsonLexerWithComments).ju = function (expected) {
    var source = this.xw();
    var current = this.ax();
    if (current >= source.length || current === -1) {
      this.ro_1 = -1;
      this.dx(expected);
    }
    var c = charSequenceGet(source, current);
    this.ro_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.dx(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).ts = function () {
    var source = this.xw();
    var cpos = this.ax();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.ro_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).ax = function () {
    var current = this.ro_1;
    if (current === -1)
      return current;
    var source = this.xw();
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
            this.ro_1 = source.length;
            this.rr('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.ro_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.sx_1 = source;
  }
  protoOf(StringJsonLexer).xw = function () {
    return this.sx_1;
  };
  protoOf(StringJsonLexer).yw = function (position) {
    return position < this.xw().length ? position : -1;
  };
  protoOf(StringJsonLexer).ys = function () {
    var source = this.xw();
    var cpos = this.ro_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.ro_1 = cpos;
      return charToTokenClass(c);
    }
    this.ro_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).us = function () {
    var current = this.ro_1;
    if (current === -1)
      return false;
    var source = this.xw();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.ro_1 = current;
      return this.bx(c);
    }
    this.ro_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).ax = function () {
    var current = this.ro_1;
    if (current === -1)
      return current;
    var source = this.xw();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.ro_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).ju = function (expected) {
    if (this.ro_1 === -1) {
      this.dx(expected);
    }
    var source = this.xw();
    var cpos = this.ro_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.ro_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.dx(expected);
    }
    this.ro_1 = -1;
    this.dx(expected);
  };
  protoOf(StringJsonLexer).pu = function () {
    this.ju(_Char___init__impl__6a9atx(34));
    var current = this.ro_1;
    var closingQuote = indexOf_0(this.xw(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.ws();
      this.ex(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.xw(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.xw(), this.ro_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.ro_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.xw().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).tu = function (keyToMatch, isLenient) {
    var positionSnapshot = this.ro_1;
    try {
      if (!(this.ys() === 6))
        return null;
      var firstKey = this.mu(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.fx();
      if (!(this.ys() === 5))
        return null;
      return this.mu(isLenient);
    }finally {
      this.ro_1 = positionSnapshot;
      this.fx();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.co_1.eq_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.eo_1;
  }
  function JsonToStringWriter() {
    this.ho_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).dr = function (value) {
    this.ho_1.x8(value);
  };
  protoOf(JsonToStringWriter).yq = function (char) {
    this.ho_1.f6(char);
  };
  protoOf(JsonToStringWriter).ar = function (text) {
    this.ho_1.e6(text);
  };
  protoOf(JsonToStringWriter).hr = function (text) {
    printQuoted(this.ho_1, text);
  };
  protoOf(JsonToStringWriter).io = function () {
    this.ho_1.z8();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.ho_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).li = contextual;
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

