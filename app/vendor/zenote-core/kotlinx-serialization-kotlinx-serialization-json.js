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
  var protoOf = kotlin_kotlin.$_$.e4;
  var initMetadataForObject = kotlin_kotlin.$_$.w3;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.h1;
  var initMetadataForClass = kotlin_kotlin.$_$.r3;
  var toString = kotlin_kotlin.$_$.h4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var charSequenceLength = kotlin_kotlin.$_$.g3;
  var charSequenceGet = kotlin_kotlin.$_$.f3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y;
  var equals = kotlin_kotlin.$_$.k3;
  var toString_0 = kotlin_kotlin.$_$.a6;
  var Enum = kotlin_kotlin.$_$.k5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m;
  var hashCode = kotlin_kotlin.$_$.q3;
  var joinToString = kotlin_kotlin.$_$.c2;
  var THROW_CCE = kotlin_kotlin.$_$.o5;
  var KtMap = kotlin_kotlin.$_$.l1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.m3;
  var getStringHashCode = kotlin_kotlin.$_$.p3;
  var KtList = kotlin_kotlin.$_$.k1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.x;
  var numberRangeToNumber = kotlin_kotlin.$_$.z3;
  var ClosedRange = kotlin_kotlin.$_$.i4;
  var isInterface = kotlin_kotlin.$_$.x3;
  var contains = kotlin_kotlin.$_$.l4;
  var toDouble = kotlin_kotlin.$_$.d5;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.f1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var toLong = kotlin_kotlin.$_$.g4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.d3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.h3;
  var coerceAtLeast = kotlin_kotlin.$_$.j4;
  var coerceAtMost = kotlin_kotlin.$_$.k4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.q2;
  var emptyMap = kotlin_kotlin.$_$.w1;
  var getValue = kotlin_kotlin.$_$.z1;
  var fillArrayVal = kotlin_kotlin.$_$.l3;
  var copyOf = kotlin_kotlin.$_$.r1;
  var copyOf_0 = kotlin_kotlin.$_$.s1;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.i5;
  var invoke = kotlin_kotlin.$_$.u5;
  var CoroutineImpl = kotlin_kotlin.$_$.z2;
  var DeepRecursiveScope = kotlin_kotlin.$_$.j5;
  var Unit = kotlin_kotlin.$_$.q5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y2;
  var initMetadataForLambda = kotlin_kotlin.$_$.v3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.t3;
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
  var ensureNotNull = kotlin_kotlin.$_$.t5;
  var substringBefore = kotlin_kotlin.$_$.c5;
  var removeSuffix = kotlin_kotlin.$_$.y4;
  var substringAfter = kotlin_kotlin.$_$.b5;
  var contains_0 = kotlin_kotlin.$_$.r4;
  var plus = kotlin_kotlin.$_$.z5;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var IllegalArgumentException = kotlin_kotlin.$_$.m5;
  var isFinite = kotlin_kotlin.$_$.v5;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.d4;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y5;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.a1;
  var numberToChar = kotlin_kotlin.$_$.a4;
  var equals_0 = kotlin_kotlin.$_$.s4;
  var toString_1 = kotlin_kotlin.$_$.b1;
  var toByte = kotlin_kotlin.$_$.f4;
  var startsWith = kotlin_kotlin.$_$.a5;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var emptySet = kotlin_kotlin.$_$.x1;
  var plus_0 = kotlin_kotlin.$_$.m2;
  var toInt = kotlin_kotlin.$_$.f5;
  var toList = kotlin_kotlin.$_$.v2;
  var enumEntries = kotlin_kotlin.$_$.a3;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var last = kotlin_kotlin.$_$.h2;
  var removeLast = kotlin_kotlin.$_$.p2;
  var lastIndexOf = kotlin_kotlin.$_$.x4;
  var Long = kotlin_kotlin.$_$.n5;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z;
  var numberToLong = kotlin_kotlin.$_$.c4;
  var charArray = kotlin_kotlin.$_$.e3;
  var indexOf = kotlin_kotlin.$_$.t4;
  var indexOf_0 = kotlin_kotlin.$_$.u4;
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
    this.ym_1 = configuration;
    this.zm_1 = serializersModule;
    this.an_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).ac = function () {
    return this.zm_1;
  };
  protoOf(Json).bn = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.en();
    }
  };
  protoOf(Json).cn = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.ha(), null);
    var result = input.rb(deserializer);
    lexer.rn();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.ko();
    return new JsonImpl(conf, builder.jo_1);
  }
  function JsonBuilder(json) {
    this.sn_1 = json.ym_1.lo_1;
    this.tn_1 = json.ym_1.qo_1;
    this.un_1 = json.ym_1.mo_1;
    this.vn_1 = json.ym_1.no_1;
    this.wn_1 = json.ym_1.po_1;
    this.xn_1 = json.ym_1.ro_1;
    this.yn_1 = json.ym_1.so_1;
    this.zn_1 = json.ym_1.uo_1;
    this.ao_1 = json.ym_1.bp_1;
    this.bo_1 = json.ym_1.wo_1;
    this.co_1 = json.ym_1.xo_1;
    this.do_1 = json.ym_1.yo_1;
    this.eo_1 = json.ym_1.zo_1;
    this.fo_1 = json.ym_1.ap_1;
    this.go_1 = json.ym_1.vo_1;
    this.ho_1 = json.ym_1.oo_1;
    this.io_1 = json.ym_1.to_1;
    this.jo_1 = json.ac();
  }
  protoOf(JsonBuilder).ko = function () {
    if (this.io_1) {
      // Inline function 'kotlin.require' call
      if (!(this.zn_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.ao_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.wn_1) {
      // Inline function 'kotlin.require' call
      if (!(this.xn_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.xn_1 === '    ')) {
      var tmp3 = this.xn_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.xn_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.sn_1, this.un_1, this.vn_1, this.ho_1, this.wn_1, this.tn_1, this.xn_1, this.yn_1, this.io_1, this.zn_1, this.go_1, this.bo_1, this.co_1, this.do_1, this.eo_1, this.fo_1, this.ao_1);
  };
  function validateConfiguration($this) {
    if (equals($this.ac(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.ym_1.to_1, $this.ym_1.uo_1);
    $this.ac().vg(collector);
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
    this.lo_1 = encodeDefaults;
    this.mo_1 = ignoreUnknownKeys;
    this.no_1 = isLenient;
    this.oo_1 = allowStructuredMapKeys;
    this.po_1 = prettyPrint;
    this.qo_1 = explicitNulls;
    this.ro_1 = prettyPrintIndent;
    this.so_1 = coerceInputValues;
    this.to_1 = useArrayPolymorphism;
    this.uo_1 = classDiscriminator;
    this.vo_1 = allowSpecialFloatingPointValues;
    this.wo_1 = useAlternativeNames;
    this.xo_1 = namingStrategy;
    this.yo_1 = decodeEnumsCaseInsensitive;
    this.zo_1 = allowTrailingComma;
    this.ap_1 = allowComments;
    this.bp_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.lo_1 + ', ignoreUnknownKeys=' + this.mo_1 + ', isLenient=' + this.no_1 + ', ' + ('allowStructuredMapKeys=' + this.oo_1 + ', prettyPrint=' + this.po_1 + ', explicitNulls=' + this.qo_1 + ', ') + ("prettyPrintIndent='" + this.ro_1 + "', coerceInputValues=" + this.so_1 + ', useArrayPolymorphism=' + this.to_1 + ', ') + ("classDiscriminator='" + this.uo_1 + "', allowSpecialFloatingPointValues=" + this.vo_1 + ', ') + ('useAlternativeNames=' + this.wo_1 + ', namingStrategy=' + toString_0(this.xo_1) + ', decodeEnumsCaseInsensitive=' + this.yo_1 + ', ') + ('allowTrailingComma=' + this.zo_1 + ', allowComments=' + this.ap_1 + ', classDiscriminatorMode=' + this.bp_1.toString() + ')');
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
    var k = _destruct__k2r9zo.a1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.b1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.p5(_Char___init__impl__6a9atx(58));
    this_0.n5(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.cp_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.cp_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.cp_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.cp_1.f1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).dp = function (key) {
    return this.cp_1.c1(key);
  };
  protoOf(JsonObject).c1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.dp((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).ep = function (key) {
    return this.cp_1.d1(key);
  };
  protoOf(JsonObject).d1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ep((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).j = function () {
    return this.cp_1.j();
  };
  protoOf(JsonObject).f1 = function () {
    return this.cp_1.f1();
  };
  protoOf(JsonObject).e1 = function () {
    return this.cp_1.e1();
  };
  protoOf(JsonObject).l = function () {
    return this.cp_1.l();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.fp_1 = 'null';
  }
  protoOf(JsonNull).gp = function () {
    return this.fp_1;
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
    return this.gp();
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
    this.hp_1 = isString;
    this.ip_1 = coerceToInlineType;
    this.jp_1 = toString(body);
    if (!(this.ip_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.ip_1.xa()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).gp = function () {
    return this.jp_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.hp_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.jp_1);
      tmp = this_0.toString();
    } else {
      tmp = this.jp_1;
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
    if (!(this.hp_1 === other.hp_1))
      return false;
    if (!(this.jp_1 === other.jp_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.hp_1);
    result = imul(31, result) + getStringHashCode(this.jp_1) | 0;
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
    this.kp_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.kp_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.kp_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.kp_1, ',', '[', ']');
  };
  protoOf(JsonArray).k = function (index) {
    return this.kp_1.k(index);
  };
  protoOf(JsonArray).j = function () {
    return this.kp_1.j();
  };
  protoOf(JsonArray).g = function () {
    return this.kp_1.g();
  };
  protoOf(JsonArray).q = function (index) {
    return this.kp_1.q(index);
  };
  protoOf(JsonArray).l = function () {
    return this.kp_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.gp());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.gp())).lp();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.gp() + ' is not an Int');
    return result.w();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.gp())).lp();
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
    return toDouble(_this__u8e3s4.gp());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.gp();
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
    this.mp_1 = writer;
    this.np_1 = true;
  }
  protoOf(Composer).op = function () {
    this.np_1 = true;
  };
  protoOf(Composer).pp = function () {
    return Unit_instance;
  };
  protoOf(Composer).qp = function () {
    this.np_1 = false;
  };
  protoOf(Composer).rp = function () {
    this.np_1 = false;
  };
  protoOf(Composer).sp = function () {
    return Unit_instance;
  };
  protoOf(Composer).tp = function (v) {
    return this.mp_1.up(v);
  };
  protoOf(Composer).vp = function (v) {
    return this.mp_1.wp(v);
  };
  protoOf(Composer).xp = function (v) {
    return this.mp_1.wp(v.toString());
  };
  protoOf(Composer).yp = function (v) {
    return this.mp_1.zp(toLong(v));
  };
  protoOf(Composer).aq = function (v) {
    return this.mp_1.zp(v);
  };
  protoOf(Composer).bq = function (v) {
    return this.mp_1.wp(v.toString());
  };
  protoOf(Composer).cq = function (value) {
    return this.mp_1.dq(value);
  };
  function Composer_0(sb, json) {
    return json.ym_1.po_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.gq_1 = json;
    this.hq_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).op = function () {
    this.np_1 = true;
    this.hq_1 = this.hq_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).pp = function () {
    this.hq_1 = this.hq_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).qp = function () {
    this.np_1 = false;
    this.vp('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.hq_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.vp(this.gq_1.ym_1.ro_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).rp = function () {
    if (this.np_1)
      this.np_1 = false;
    else {
      this.qp();
    }
  };
  protoOf(ComposerWithPrettyPrint).sp = function () {
    this.tp(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.jq_1 = (!descriptor.eb(index) && descriptor.db(index).pa());
    return $this.jq_1;
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
    tmp.iq_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.jq_1 = false;
  }
  protoOf(JsonElementMarker).kq = function (index) {
    this.iq_1.ge(index);
  };
  protoOf(JsonElementMarker).lq = function () {
    return this.iq_1.he();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.mq('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.nn_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.nq('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.va() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.wa().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.bb(name);
    if (!(index === -3))
      return index;
    if (!json.ym_1.wo_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.ab(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.wa(), CLASS_getInstance()) ? json.ym_1.xo_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.pq(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.ym_1.yo_1 && equals(descriptor.wa(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).d1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.pq(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.ya();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.cb(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qq_1;
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
          tmp_0 = _this__u8e3s4.ab(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.rq(_this__u8e3s4, i, _this__u8e3s4.ab(i));
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
    var entity = equals($this_buildDeserializationNamesMap.wa(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).c1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ab(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ab(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.y2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.ya();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.ab(tmp_2);
        tmp_1[tmp_2] = $strategy.rq($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.uq_1, 2);
    $this.sq_1 = copyOf($this.sq_1, newSize);
    $this.tq_1 = copyOf_0($this.tq_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.sq_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.tq_1 = tmp_2;
    this.uq_1 = -1;
  }
  protoOf(JsonPath).vq = function (sd) {
    this.uq_1 = this.uq_1 + 1 | 0;
    var depth = this.uq_1;
    if (depth === this.sq_1.length) {
      resize(this);
    }
    this.sq_1[depth] = sd;
  };
  protoOf(JsonPath).wq = function (index) {
    this.tq_1[this.uq_1] = index;
  };
  protoOf(JsonPath).xq = function (key) {
    var tmp;
    if (!(this.tq_1[this.uq_1] === -2)) {
      this.uq_1 = this.uq_1 + 1 | 0;
      tmp = this.uq_1 === this.sq_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.sq_1[this.uq_1] = key;
    this.tq_1[this.uq_1] = -2;
  };
  protoOf(JsonPath).yq = function () {
    if (this.tq_1[this.uq_1] === -2) {
      this.sq_1[this.uq_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).zq = function () {
    var depth = this.uq_1;
    if (this.tq_1[depth] === -2) {
      this.tq_1[depth] = -1;
      this.uq_1 = this.uq_1 - 1 | 0;
    }
    if (!(this.uq_1 === -1)) {
      this.uq_1 = this.uq_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).ar = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.o5('$');
    // Inline function 'kotlin.repeat' call
    var times = this.uq_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.sq_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.wa(), LIST_getInstance())) {
            if (!(this.tq_1[index] === -1)) {
              this_0.o5('[');
              this_0.g8(this.tq_1[index]);
              this_0.o5(']');
            }
          } else {
            var idx = this.tq_1[index];
            if (idx >= 0) {
              this_0.o5('.');
              this_0.o5(element.ab(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.o5('[');
            this_0.o5("'");
            this_0.n5(element);
            this_0.o5("'");
            this_0.o5(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.ar();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.qc(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.kr_1.or(6);
    if ($this.kr_1.pr() === 4) {
      $this.kr_1.nq('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.kr_1.qr()) {
      var key = $this.lr_1 ? $this.kr_1.sr() : $this.kr_1.rr();
      $this.kr_1.or(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.tr();
      // Inline function 'kotlin.collections.set' call
      result.y2(key, element);
      lastToken = $this.kr_1.ur();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.kr_1.nq('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.kr_1.or(7);
    } else if (lastToken === 4) {
      if (!$this.mr_1) {
        invalidTrailingComma($this.kr_1);
      }
      $this.kr_1.or(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.c6_1 = Unit_instance;
    tmp.d6_1 = null;
    return tmp.i6();
  }
  function readArray($this) {
    var lastToken = $this.kr_1.ur();
    if ($this.kr_1.pr() === 4) {
      $this.kr_1.nq('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.kr_1.qr()) {
      var element = $this.tr();
      result.e(element);
      lastToken = $this.kr_1.ur();
      if (!(lastToken === 4)) {
        var tmp0 = $this.kr_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.nn_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.nq(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.kr_1.or(9);
    } else if (lastToken === 4) {
      if (!$this.mr_1) {
        invalidTrailingComma($this.kr_1, 'array');
      }
      $this.kr_1.or(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.lr_1 || !isString) {
      tmp = $this.kr_1.sr();
    } else {
      tmp = $this.kr_1.rr();
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
    this.ss_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).xs = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.ys($this$DeepRecursiveFunction, it, $completion);
    tmp.c6_1 = Unit_instance;
    tmp.d6_1 = null;
    return tmp.i6();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).o6 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.xs(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i6 = function () {
    var suspendResult = this.c6_1;
    $sm: do
      try {
        var tmp = this.a6_1;
        switch (tmp) {
          case 0:
            this.b6_1 = 3;
            this.vs_1 = this.ss_1.kr_1.pr();
            if (this.vs_1 === 1) {
              this.ws_1 = readValue(this.ss_1, true);
              this.a6_1 = 2;
              continue $sm;
            } else {
              if (this.vs_1 === 0) {
                this.ws_1 = readValue(this.ss_1, false);
                this.a6_1 = 2;
                continue $sm;
              } else {
                if (this.vs_1 === 6) {
                  this.a6_1 = 1;
                  suspendResult = readObject_0(this.ts_1, this.ss_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.vs_1 === 8) {
                    this.ws_1 = readArray(this.ss_1);
                    this.a6_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.ss_1.kr_1.nq("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.ws_1 = suspendResult;
            this.a6_1 = 2;
            continue $sm;
          case 2:
            return this.ws_1;
          case 3:
            throw this.d6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b6_1 === 3) {
          throw e;
        } else {
          this.a6_1 = this.b6_1;
          this.d6_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ys = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.ss_1, completion);
    i.ts_1 = $this$DeepRecursiveFunction;
    i.us_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.xs($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ds_1 = _this__u8e3s4;
    this.es_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).i6 = function () {
    var suspendResult = this.c6_1;
    $sm: do
      try {
        var tmp = this.a6_1;
        switch (tmp) {
          case 0:
            this.b6_1 = 5;
            var tmp_0 = this;
            tmp_0.fs_1 = this.ds_1;
            this.gs_1 = this.fs_1;
            this.hs_1 = this.gs_1.kr_1.or(6);
            if (this.gs_1.kr_1.pr() === 4) {
              this.gs_1.kr_1.nq('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.is_1 = LinkedHashMap_init_$Create$();
            this.a6_1 = 1;
            continue $sm;
          case 1:
            if (!this.gs_1.kr_1.qr()) {
              this.a6_1 = 4;
              continue $sm;
            }

            this.js_1 = this.gs_1.lr_1 ? this.gs_1.kr_1.sr() : this.gs_1.kr_1.rr();
            this.gs_1.kr_1.or(5);
            this.a6_1 = 2;
            suspendResult = this.es_1.u9(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.is_1;
            var key = this.js_1;
            tmp0.y2(key, element);
            this.hs_1 = this.gs_1.kr_1.ur();
            var tmp0_subject = this.hs_1;
            if (tmp0_subject === 4) {
              this.a6_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.a6_1 = 4;
                continue $sm;
              } else {
                this.gs_1.kr_1.nq('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.a6_1 = 1;
            continue $sm;
          case 4:
            if (this.hs_1 === 6) {
              this.gs_1.kr_1.or(7);
            } else if (this.hs_1 === 4) {
              if (!this.gs_1.mr_1) {
                invalidTrailingComma(this.gs_1.kr_1);
              }
              this.gs_1.kr_1.or(7);
            }

            return new JsonObject(this.is_1);
          case 5:
            throw this.d6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.b6_1 === 5) {
          throw e;
        } else {
          this.a6_1 = this.b6_1;
          this.d6_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.kr_1 = lexer;
    this.lr_1 = configuration.no_1;
    this.mr_1 = configuration.zo_1;
    this.nr_1 = 0;
  }
  protoOf(JsonTreeReader).tr = function () {
    var token = this.kr_1.pr();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.nr_1 = this.nr_1 + 1 | 0;
      if (this.nr_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.nr_1 = this.nr_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.kr_1.nq('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.za().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.zs_1;
    }
    return json.ym_1.uo_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.ha()).y(classDiscriminator)) {
      var baseName = serializer.ha().va();
      var actualName = actualSerializer.ha().va();
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
    var kind = descriptor.wa();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.z6() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.at_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.z6() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.ya();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.ab(i);
        if (name === $this.bt_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.at_1 = useArrayPolymorphism;
    this.bt_1 = discriminator;
  }
  protoOf(PolymorphismValidator).eh = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).hh = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.ha();
    checkKind_0(this, descriptor, actualClass);
    if (!this.at_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).ih = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).jh = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.oq_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).ct = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.oq_1;
    var value_0 = this_0.d1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.y2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.y2(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).pq = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.dt(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.ct(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).dt = function (descriptor, key) {
    var tmp0_safe_receiver = this.oq_1.d1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.d1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.et_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.et_1 === unknownKey) {
      _this__u8e3s4.et_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.cc(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.hn_1.pr() === 4) {
      $this.hn_1.nq('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.jn_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.jn_1 === -1)) {
        hasComma = $this.hn_1.gt();
      }
    } else {
      $this.hn_1.ft(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.hn_1.qr()) {
      if (decodingKey) {
        if ($this.jn_1 === -1) {
          var tmp0 = $this.hn_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.nn_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.nq(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.hn_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.nn_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.nq(tmp$ret$1, position_0);
          }
        }
      }
      $this.jn_1 = $this.jn_1 + 1 | 0;
      tmp = $this.jn_1;
    } else {
      if (hasComma && !$this.fn_1.ym_1.zo_1) {
        invalidTrailingComma($this.hn_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.fn_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.eb(index);
      var elementDescriptor = descriptor.db(index);
      var tmp;
      if (isOptional && !elementDescriptor.pa()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.hn_1.ht(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.wa(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.pa()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.hn_1.ht(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.hn_1.it($this.ln_1.no_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.ym_1.qo_1 && elementDescriptor.pa();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.hn_1.rr();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.hn_1.gt();
    while ($this.hn_1.qr()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.hn_1.ft(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.fn_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.ln_1.so_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.hn_1.gt();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.mn_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.kq(index);
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
    if (hasComma && !$this.fn_1.ym_1.zo_1) {
      invalidTrailingComma($this.hn_1);
    }
    var tmp1_safe_receiver = $this.mn_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lq();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.ln_1.mo_1 || trySkip($this.kn_1, $this, key)) {
      $this.hn_1.kt($this.ln_1.no_1);
    } else {
      $this.hn_1.jt(key);
    }
    return $this.hn_1.gt();
  }
  function decodeListIndex($this) {
    var hasComma = $this.hn_1.gt();
    var tmp;
    if ($this.hn_1.qr()) {
      if (!($this.jn_1 === -1) && !hasComma) {
        $this.hn_1.nq('Expected end of the array or comma');
      }
      $this.jn_1 = $this.jn_1 + 1 | 0;
      tmp = $this.jn_1;
    } else {
      if (hasComma && !$this.fn_1.ym_1.zo_1) {
        invalidTrailingComma($this.hn_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.ln_1.no_1) {
      tmp = $this.hn_1.mt();
    } else {
      tmp = $this.hn_1.lt();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.fn_1 = json;
    this.gn_1 = mode;
    this.hn_1 = lexer;
    this.in_1 = this.fn_1.ac();
    this.jn_1 = -1;
    this.kn_1 = discriminatorHolder;
    this.ln_1 = this.fn_1.ym_1;
    this.mn_1 = this.ln_1.qo_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).nt = function () {
    return this.fn_1;
  };
  protoOf(StreamingJsonDecoder).ac = function () {
    return this.in_1;
  };
  protoOf(StreamingJsonDecoder).ot = function () {
    return (new JsonTreeReader(this.fn_1.ym_1, this.hn_1)).tr();
  };
  protoOf(StreamingJsonDecoder).rb = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.fn_1.ym_1.to_1;
      }
      if (tmp) {
        return deserializer.ja(this);
      }
      var discriminator = classDiscriminator(deserializer.ha(), this.fn_1);
      var tmp0_elvis_lhs = this.hn_1.pt(discriminator, this.ln_1.no_1);
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
            tmp_1 = this.nt().ym_1.to_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.ja(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.ha(), this.nt());
          var tmp0 = this.ot();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.ha().va();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).z6();
            var tmp_3 = getKClassFromExpression(tmp0).z6();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.hn_1.on_1.ar();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.ep(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.nt(), discriminator_0, jsonTree, actualSerializer);
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
          this.hn_1.nq(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.kn_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.ja(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.oa_1, plus(e.message, ' at path: ') + this.hn_1.on_1.ar(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).sb = function (descriptor) {
    var newMode = switchMode(this.fn_1, descriptor);
    this.hn_1.on_1.vq(descriptor);
    this.hn_1.ft(newMode.st_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.h1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.fn_1, newMode, this.hn_1, descriptor, this.kn_1);
        break;
      default:
        var tmp_0;
        if (this.gn_1.equals(newMode) && this.fn_1.ym_1.qo_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.fn_1, newMode, this.hn_1, descriptor, this.kn_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).tb = function (descriptor) {
    if (this.fn_1.ym_1.mo_1 && descriptor.ya() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.hn_1.gt() && !this.fn_1.ym_1.zo_1) {
      invalidTrailingComma(this.hn_1, '');
    }
    this.hn_1.ft(this.gn_1.tt_1);
    this.hn_1.on_1.zq();
  };
  protoOf(StreamingJsonDecoder).jb = function () {
    var tmp;
    var tmp0_safe_receiver = this.mn_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jq_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.hn_1.ut();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).kb = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).xb = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.gn_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.hn_1.on_1.yq();
    }
    var value = protoOf(AbstractDecoder).xb.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.hn_1.on_1.xq(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).cc = function (descriptor) {
    var index;
    switch (this.gn_1.h1_1) {
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
    if (!this.gn_1.equals(WriteMode_MAP_getInstance())) {
      this.hn_1.on_1.wq(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).lb = function () {
    return this.hn_1.vt();
  };
  protoOf(StreamingJsonDecoder).mb = function () {
    var value = this.hn_1.lp();
    if (!value.equals(toLong(value.w()))) {
      this.hn_1.nq("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.w();
  };
  protoOf(StreamingJsonDecoder).nb = function () {
    return this.hn_1.lp();
  };
  protoOf(StreamingJsonDecoder).ob = function () {
    var tmp0 = this.hn_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.sr();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.nq("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.fn_1.ym_1.vo_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.hn_1, result);
  };
  protoOf(StreamingJsonDecoder).pb = function () {
    var tmp;
    if (this.ln_1.no_1) {
      tmp = this.hn_1.mt();
    } else {
      tmp = this.hn_1.rr();
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
    $this.br_1.qp();
    $this.lc(discriminator);
    $this.br_1.tp(_Char___init__impl__6a9atx(58));
    $this.br_1.sp();
    $this.lc(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.br_1 = composer;
    this.cr_1 = json;
    this.dr_1 = mode;
    this.er_1 = modeReuseCache;
    this.fr_1 = this.cr_1.ac();
    this.gr_1 = this.cr_1.ym_1;
    this.hr_1 = false;
    this.ir_1 = null;
    this.jr_1 = null;
    var i = this.dr_1.h1_1;
    if (!(this.er_1 == null)) {
      if (!(this.er_1[i] === null) || !(this.er_1[i] === this)) {
        this.er_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).nt = function () {
    return this.cr_1;
  };
  protoOf(StreamingJsonEncoder).ac = function () {
    return this.fr_1;
  };
  protoOf(StreamingJsonEncoder).vc = function (descriptor, index) {
    return this.gr_1.lo_1;
  };
  protoOf(StreamingJsonEncoder).qc = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.nt().ym_1.to_1) {
        serializer.ia(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.nt().ym_1.bp_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.nt().ym_1.bp_1.h1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.ha().wa();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.ha(), this.nt()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.ha()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.ha().wa());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.ha().va();
        this.ir_1 = baseClassDiscriminator;
        this.jr_1 = serialName;
      }
      actualSerializer.ia(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).sb = function (descriptor) {
    var newMode = switchMode(this.cr_1, descriptor);
    if (!(newMode.st_1 === _Char___init__impl__6a9atx(0))) {
      this.br_1.tp(newMode.st_1);
      this.br_1.op();
    }
    var discriminator = this.ir_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.jr_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.va() : tmp0_elvis_lhs);
      this.ir_1 = null;
      this.jr_1 = null;
    }
    if (this.dr_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.er_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.h1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.br_1, this.cr_1, newMode, this.er_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).tb = function (descriptor) {
    if (!(this.dr_1.tt_1 === _Char___init__impl__6a9atx(0))) {
      this.br_1.pp();
      this.br_1.rp();
      this.br_1.tp(this.dr_1.tt_1);
    }
  };
  protoOf(StreamingJsonEncoder).ec = function (descriptor, index) {
    switch (this.dr_1.h1_1) {
      case 1:
        if (!this.br_1.np_1) {
          this.br_1.tp(_Char___init__impl__6a9atx(44));
        }

        this.br_1.qp();
        break;
      case 2:
        if (!this.br_1.np_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.br_1.tp(_Char___init__impl__6a9atx(44));
            this.br_1.qp();
            tmp_0 = true;
          } else {
            this.br_1.tp(_Char___init__impl__6a9atx(58));
            this.br_1.sp();
            tmp_0 = false;
          }
          tmp.hr_1 = tmp_0;
        } else {
          this.hr_1 = true;
          this.br_1.qp();
        }

        break;
      case 3:
        if (index === 0)
          this.hr_1 = true;
        if (index === 1) {
          this.br_1.tp(_Char___init__impl__6a9atx(44));
          this.br_1.sp();
          this.hr_1 = false;
        }

        break;
      default:
        if (!this.br_1.np_1) {
          this.br_1.tp(_Char___init__impl__6a9atx(44));
        }

        this.br_1.qp();
        this.lc(getJsonElementName(descriptor, this.cr_1, index));
        this.br_1.tp(_Char___init__impl__6a9atx(58));
        this.br_1.sp();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).rc = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.gr_1.qo_1) {
      protoOf(AbstractEncoder).rc.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).gc = function () {
    this.br_1.vp('null');
  };
  protoOf(StreamingJsonEncoder).hc = function (value) {
    if (this.hr_1) {
      this.lc(value.toString());
    } else {
      this.br_1.bq(value);
    }
  };
  protoOf(StreamingJsonEncoder).ic = function (value) {
    if (this.hr_1) {
      this.lc(value.toString());
    } else {
      this.br_1.yp(value);
    }
  };
  protoOf(StreamingJsonEncoder).jc = function (value) {
    if (this.hr_1) {
      this.lc(value.toString());
    } else {
      this.br_1.aq(value);
    }
  };
  protoOf(StreamingJsonEncoder).kc = function (value) {
    if (this.hr_1) {
      this.lc(value.toString());
    } else {
      this.br_1.xp(value);
    }
    if (!this.gr_1.vo_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.br_1.mp_1));
    }
  };
  protoOf(StreamingJsonEncoder).lc = function (value) {
    return this.br_1.cq(value);
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
    _this__u8e3s4.p5(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.e8(value, lastPos, i);
          _this__u8e3s4.o5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.e8(value, lastPos, value.length);
    else
      _this__u8e3s4.o5(value);
    _this__u8e3s4.p5(_Char___init__impl__6a9atx(34));
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.cu(tag), toString($this.du()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.yt_1 = json;
    this.zt_1 = value;
    this.au_1 = polymorphicDiscriminator;
    this.bu_1 = this.nt().ym_1;
  }
  protoOf(AbstractJsonTreeDecoder).nt = function () {
    return this.yt_1;
  };
  protoOf(AbstractJsonTreeDecoder).b1 = function () {
    return this.zt_1;
  };
  protoOf(AbstractJsonTreeDecoder).ac = function () {
    return this.nt().ac();
  };
  protoOf(AbstractJsonTreeDecoder).du = function () {
    var tmp0_safe_receiver = this.ig();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.eu(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.b1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).cu = function (currentTag) {
    return this.kg() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).ot = function () {
    return this.du();
  };
  protoOf(AbstractJsonTreeDecoder).rb = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.nt().ym_1.to_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.ja(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.ha(), this.nt());
      var tmp0 = this.ot();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.ha().va();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).z6();
        var tmp_1 = getKClassFromExpression(tmp0).z6();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.kg();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.ep(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.nt(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).jg = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).sb = function (descriptor) {
    var currentObject = this.du();
    var tmp0_subject = descriptor.wa();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.nt();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.va();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).z6();
        var tmp_3 = getKClassFromExpression(currentObject).z6();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.kg();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.nt();
        var keyDescriptor = carrierDescriptor(descriptor.db(0), this_0.ac());
        var keyKind = keyDescriptor.wa();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.nt();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.va();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).z6();
            var tmp_8 = getKClassFromExpression(currentObject).z6();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.kg();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.ym_1.oo_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.nt();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.va();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).z6();
              var tmp_11 = getKClassFromExpression(currentObject).z6();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.kg();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.nt();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.va();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).z6();
          var tmp_14 = getKClassFromExpression(currentObject).z6();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.kg();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.au_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).tb = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).jb = function () {
    var tmp = this.du();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).fu = function (tag) {
    return !(this.eu(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).mg = function (tag) {
    return this.fu((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).gu = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.eu(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z6();
        var tmp_0 = getKClassFromExpression(value).z6();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.cu(tag);
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
  protoOf(AbstractJsonTreeDecoder).ng = function (tag) {
    return this.gu((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).hu = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.eu(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z6();
        var tmp_0 = getKClassFromExpression(value).z6();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.cu(tag);
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
  protoOf(AbstractJsonTreeDecoder).og = function (tag) {
    return this.hu((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).iu = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.eu(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z6();
        var tmp_0 = getKClassFromExpression(value).z6();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.cu(tag);
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
  protoOf(AbstractJsonTreeDecoder).pg = function (tag) {
    return this.iu((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).ju = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.eu(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).z6();
        var tmp_0 = getKClassFromExpression(value).z6();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.cu(tag);
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
    var specialFp = this.nt().ym_1.vo_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.du()));
  };
  protoOf(AbstractJsonTreeDecoder).qg = function (tag) {
    return this.ju((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).ku = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.eu(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).z6();
      var tmp_0 = getKClassFromExpression(value).z6();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.cu(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.cu(tag), toString(this.du()));
    if (!value_0.hp_1 && !this.nt().ym_1.no_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.cu(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.du()));
    }
    return value_0.jp_1;
  };
  protoOf(AbstractJsonTreeDecoder).rg = function (tag) {
    return this.ku((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.nt();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.eb(index);
      var elementDescriptor = descriptor.db(index);
      var tmp;
      if (isOptional && !elementDescriptor.pa()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.eu(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.wa(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.pa()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.eu(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.eu(tag);
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
        var coerceToNull = !tmp0.ym_1.qo_1 && elementDescriptor.pa();
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
    $this.uu_1 = (!$this.nt().ym_1.qo_1 && !descriptor.eb(index) && descriptor.db(index).pa());
    return $this.uu_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.ru_1 = value;
    this.su_1 = polyDescriptor;
    this.tu_1 = 0;
    this.uu_1 = false;
  }
  protoOf(JsonTreeDecoder).b1 = function () {
    return this.ru_1;
  };
  protoOf(JsonTreeDecoder).cc = function (descriptor) {
    while (this.tu_1 < descriptor.ya()) {
      var _unary__edvuaz = this.tu_1;
      this.tu_1 = _unary__edvuaz + 1 | 0;
      var name = this.dg(descriptor, _unary__edvuaz);
      var index = this.tu_1 - 1 | 0;
      this.uu_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.b1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).c1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.bu_1.so_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).jb = function () {
    return !this.uu_1 && protoOf(AbstractJsonTreeDecoder).jb.call(this);
  };
  protoOf(JsonTreeDecoder).eg = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.nt());
    var baseName = descriptor.ab(index);
    if (strategy == null) {
      if (!this.bu_1.wo_1)
        return baseName;
      if (this.b1().e1().y(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.nt(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.b1().e1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.d1(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.rq(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).eu = function (tag) {
    return getValue(this.b1(), tag);
  };
  protoOf(JsonTreeDecoder).sb = function (descriptor) {
    if (descriptor === this.su_1) {
      var tmp = this.nt();
      var tmp1 = this.du();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.su_1.va();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).z6();
        var tmp_1 = getKClassFromExpression(tmp1).z6();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.kg();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.au_1, this.su_1);
    }
    return protoOf(AbstractJsonTreeDecoder).sb.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).tb = function (descriptor) {
    var tmp;
    if (this.bu_1.mo_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.wa();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.nt());
    var tmp_1;
    if (strategy == null && !this.bu_1.wo_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.nt(), descriptor).e1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.nt()).dt(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.b1().e1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.y(key) && !(key === this.au_1)) {
        throw UnknownKeyException(key, this.b1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.bv_1 = value;
    this.cv_1 = this.bv_1.l();
    this.dv_1 = -1;
  }
  protoOf(JsonTreeListDecoder).b1 = function () {
    return this.bv_1;
  };
  protoOf(JsonTreeListDecoder).eg = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).eu = function (tag) {
    return this.bv_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).cc = function (descriptor) {
    while (this.dv_1 < (this.cv_1 - 1 | 0)) {
      this.dv_1 = this.dv_1 + 1 | 0;
      return this.dv_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.ov_1 = value;
    this.pv_1 = toList(this.ov_1.e1());
    this.qv_1 = imul(this.pv_1.l(), 2);
    this.rv_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).b1 = function () {
    return this.ov_1;
  };
  protoOf(JsonTreeMapDecoder).eg = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.pv_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).cc = function (descriptor) {
    while (this.rv_1 < (this.qv_1 - 1 | 0)) {
      this.rv_1 = this.rv_1 + 1 | 0;
      return this.rv_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).eu = function (tag) {
    return (this.rv_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.ov_1, tag);
  };
  protoOf(JsonTreeMapDecoder).tb = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.ha())).rb(deserializer);
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
    this.st_1 = begin;
    this.tt_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.wa();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.db(0), _this__u8e3s4.ac());
          var keyKind = keyDescriptor.wa();
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
            if (_this__u8e3s4.ym_1.oo_1) {
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
    if (equals(_this__u8e3s4.wa(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.xa()) {
      tmp = carrierDescriptor(_this__u8e3s4.db(0), module_0);
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
    $this.sv(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.sv(lastPosition, currentPosition);
    var result = $this.qn_1.toString();
    $this.qn_1.i8(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.pn_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.pn_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.tv(), $this.nn_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.uv(currentPosition);
    if (currentPosition === -1) {
      $this.nq('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.tv();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.tv(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.nq("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.qn_1.p5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.nn_1 = startPos;
      $this.vv();
      if (($this.nn_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.nq('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.nn_1);
    }
    $this.qn_1.p5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.nq("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.uv(start);
    if (current >= charSequenceLength($this.tv()) || current === -1) {
      $this.nq('EOF');
    }
    var tmp = $this.tv();
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
        $this.nq("Expected valid boolean literal prefix, but had '" + $this.sr() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.tv()) - current | 0) < literalSuffix.length) {
      $this.nq('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.tv(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.nq("Expected valid boolean literal prefix, but had '" + $this.sr() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.nn_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.v1();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.v1();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.nn_1 = 0;
    this.on_1 = new JsonPath();
    this.pn_1 = null;
    this.qn_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).vv = function () {
  };
  protoOf(AbstractJsonLexer).gt = function () {
    var current = this.wv();
    var source = this.tv();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.nn_1 = this.nn_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).xv = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).rn = function () {
    var nextToken = this.ur();
    if (!(nextToken === 10)) {
      this.nq('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.tv(), this.nn_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).or = function (expected) {
    var token = this.ur();
    if (!(token === expected)) {
      this.yv(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).zv = function (expected) {
    if (this.nn_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.nn_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.nn_1 = this.nn_1 - 1 | 0;
          tmp$ret$1 = this.sr();
          break $l$block;
        }finally {
          this.nn_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.mq("Expected string literal but 'null' literal was found", this.nn_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.yv(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).aw = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.nn_1 - 1 | 0 : this.nn_1;
    var s = this.nn_1 === charSequenceLength(this.tv()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.tv(), position));
    this.nq('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).yv = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.aw(expectedToken, wasConsumed) : $super.aw.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).pr = function () {
    var source = this.tv();
    var cpos = this.nn_1;
    $l$loop_0: while (true) {
      cpos = this.uv(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.nn_1 = cpos;
      return charToTokenClass(ch);
    }
    this.nn_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).ht = function (doConsume) {
    var current = this.wv();
    current = this.uv(current);
    var len = charSequenceLength(this.tv()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.tv(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.tv(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.nn_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).ut = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.ht(doConsume) : $super.ht.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).it = function (isLenient) {
    var token = this.pr();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.sr();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.rr();
    }
    var string = tmp;
    this.pn_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).bw = function () {
    this.pn_1 = null;
  };
  protoOf(AbstractJsonLexer).cw = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.tv();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).rr = function () {
    if (!(this.pn_1 == null)) {
      return takePeeked(this);
    }
    return this.lt();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.uv(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.nq('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.sv(lastPosition, currentPosition);
          currentPosition = this.uv(currentPosition);
          if (currentPosition === -1) {
            this.nq('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.cw(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.nn_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).mt = function () {
    var result = this.sr();
    if (result === 'null' && wasUnquotedString(this)) {
      this.nq("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).sr = function () {
    if (!(this.pn_1 == null)) {
      return takePeeked(this);
    }
    var current = this.wv();
    if (current >= charSequenceLength(this.tv()) || current === -1) {
      this.nq('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.tv(), current));
    if (token === 1) {
      return this.rr();
    }
    if (!(token === 0)) {
      this.nq('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.tv(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.tv(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.tv())) {
        usedAppend = true;
        this.sv(this.nn_1, current);
        var eof = this.uv(current);
        if (eof === -1) {
          this.nn_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.cw(this.nn_1, current);
    } else {
      tmp = decodedString(this, this.nn_1, current);
    }
    var result = tmp;
    this.nn_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).sv = function (fromIndex, toIndex) {
    this.qn_1.e8(this.tv(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).kt = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.pr();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.sr();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.pr();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.sr();
        else
          this.lt();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.nn_1, 'found ] instead of } at path: ' + this.on_1.toString(), this.tv());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.nn_1, 'found } instead of ] at path: ' + this.on_1.toString(), this.tv());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.nq('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.ur();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.tv()) + "', currentPosition=" + this.nn_1 + ')';
  };
  protoOf(AbstractJsonLexer).jt = function (key) {
    var processed = this.cw(0, this.nn_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.mq("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).mq = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.on_1.ar() + hintMessage, this.tv());
  };
  protoOf(AbstractJsonLexer).nq = function (message, position, hint, $super) {
    position = position === VOID ? this.nn_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.mq(message, position, hint) : $super.mq.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).lp = function () {
    var current = this.wv();
    current = this.uv(current);
    if (current >= charSequenceLength(this.tv()) || current === -1) {
      this.nq('EOF');
    }
    var tmp;
    if (charSequenceGet(this.tv(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.tv())) {
        this.nq('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.tv()))) {
      var ch = charSequenceGet(this.tv(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.nq('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.nq("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.nq("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.nq("Unexpected symbol '-' in numeric literal");
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
        this.nq("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.p1(toLong(10)).n1(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.p1(toLong(10)).o1(toLong(digit));
      if (accumulator.x(new Long(0, 0)) > 0) {
        this.nq('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.nq('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.nq('EOF');
      }
      if (!(charSequenceGet(this.tv(), current) === _Char___init__impl__6a9atx(34))) {
        this.nq('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.nn_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.v1() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).v1() || doubleAccumulator < (new Long(0, -2147483648)).v1()) {
        this.nq('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.nq("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.r1();
    } else {
      this.nq('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).vt = function () {
    var current = this.wv();
    if (current === charSequenceLength(this.tv())) {
      this.nq('EOF');
    }
    var tmp;
    if (charSequenceGet(this.tv(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.nn_1 === charSequenceLength(this.tv())) {
        this.nq('EOF');
      }
      if (!(charSequenceGet(this.tv(), this.nn_1) === _Char___init__impl__6a9atx(34))) {
        this.nq('Expected closing quotation mark');
      }
      this.nn_1 = this.nn_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().ew_1;
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
    return c < 117 ? CharMappings_getInstance().dw_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.dw_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.ew_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.dw_1 = charArray(117);
    this.ew_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).ur = function () {
    var source = this.tv();
    var cpos = this.wv();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.nn_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).qr = function () {
    var current = this.wv();
    if (current >= this.tv().length || current === -1)
      return false;
    return this.xv(charSequenceGet(this.tv(), current));
  };
  protoOf(StringJsonLexerWithComments).ft = function (expected) {
    var source = this.tv();
    var current = this.wv();
    if (current >= source.length || current === -1) {
      this.nn_1 = -1;
      this.zv(expected);
    }
    var c = charSequenceGet(source, current);
    this.nn_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.zv(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).pr = function () {
    var source = this.tv();
    var cpos = this.wv();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.nn_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).wv = function () {
    var current = this.nn_1;
    if (current === -1)
      return current;
    var source = this.tv();
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
            this.nn_1 = source.length;
            this.nq('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.nn_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.ow_1 = source;
  }
  protoOf(StringJsonLexer).tv = function () {
    return this.ow_1;
  };
  protoOf(StringJsonLexer).uv = function (position) {
    return position < this.tv().length ? position : -1;
  };
  protoOf(StringJsonLexer).ur = function () {
    var source = this.tv();
    var cpos = this.nn_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.nn_1 = cpos;
      return charToTokenClass(c);
    }
    this.nn_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).qr = function () {
    var current = this.nn_1;
    if (current === -1)
      return false;
    var source = this.tv();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.nn_1 = current;
      return this.xv(c);
    }
    this.nn_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).wv = function () {
    var current = this.nn_1;
    if (current === -1)
      return current;
    var source = this.tv();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.nn_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).ft = function (expected) {
    if (this.nn_1 === -1) {
      this.zv(expected);
    }
    var source = this.tv();
    var cpos = this.nn_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.nn_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.zv(expected);
    }
    this.nn_1 = -1;
    this.zv(expected);
  };
  protoOf(StringJsonLexer).lt = function () {
    this.ft(_Char___init__impl__6a9atx(34));
    var current = this.nn_1;
    var closingQuote = indexOf_0(this.tv(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.sr();
      this.aw(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.tv(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.tv(), this.nn_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.nn_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.tv().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).pt = function (keyToMatch, isLenient) {
    var positionSnapshot = this.nn_1;
    try {
      if (!(this.ur() === 6))
        return null;
      var firstKey = this.it(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.bw();
      if (!(this.ur() === 5))
        return null;
      return this.it(isLenient);
    }finally {
      this.nn_1 = positionSnapshot;
      this.bw();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.ym_1.ap_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.an_1;
  }
  function JsonToStringWriter() {
    this.dn_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).zp = function (value) {
    this.dn_1.h8(value);
  };
  protoOf(JsonToStringWriter).up = function (char) {
    this.dn_1.p5(char);
  };
  protoOf(JsonToStringWriter).wp = function (text) {
    this.dn_1.o5(text);
  };
  protoOf(JsonToStringWriter).dq = function (text) {
    printQuoted(this.dn_1, text);
  };
  protoOf(JsonToStringWriter).en = function () {
    this.dn_1.j8();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.dn_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).gh = contextual;
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

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
