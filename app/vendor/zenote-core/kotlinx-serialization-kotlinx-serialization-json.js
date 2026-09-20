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
  var protoOf = kotlin_kotlin.$_$.c5;
  var initMetadataForObject = kotlin_kotlin.$_$.r4;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.r1;
  var initMetadataForClass = kotlin_kotlin.$_$.m4;
  var toString = kotlin_kotlin.$_$.f5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.b4;
  var charSequenceGet = kotlin_kotlin.$_$.a4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h1;
  var equals = kotlin_kotlin.$_$.f4;
  var toString_0 = kotlin_kotlin.$_$.o7;
  var Enum = kotlin_kotlin.$_$.x6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q;
  var hashCode = kotlin_kotlin.$_$.l4;
  var joinToString = kotlin_kotlin.$_$.p2;
  var THROW_CCE = kotlin_kotlin.$_$.c7;
  var KtMap = kotlin_kotlin.$_$.w1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getBooleanHashCode = kotlin_kotlin.$_$.h4;
  var getStringHashCode = kotlin_kotlin.$_$.k4;
  var KtList = kotlin_kotlin.$_$.v1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var numberRangeToNumber = kotlin_kotlin.$_$.w4;
  var ClosedRange = kotlin_kotlin.$_$.h5;
  var isInterface = kotlin_kotlin.$_$.u4;
  var contains = kotlin_kotlin.$_$.k5;
  var toDouble = kotlin_kotlin.$_$.o6;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.p1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var toLong = kotlin_kotlin.$_$.e5;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.x3;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.c4;
  var coerceAtLeast = kotlin_kotlin.$_$.i5;
  var coerceAtMost = kotlin_kotlin.$_$.j5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.h3;
  var emptyMap = kotlin_kotlin.$_$.j2;
  var getValue = kotlin_kotlin.$_$.m2;
  var fillArrayVal = kotlin_kotlin.$_$.g4;
  var copyOf = kotlin_kotlin.$_$.d2;
  var copyOf_0 = kotlin_kotlin.$_$.e2;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.v6;
  var invoke = kotlin_kotlin.$_$.i7;
  var CoroutineImpl = kotlin_kotlin.$_$.t3;
  var DeepRecursiveScope = kotlin_kotlin.$_$.w6;
  var Unit = kotlin_kotlin.$_$.e7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.s3;
  var initMetadataForLambda = kotlin_kotlin.$_$.q4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.o4;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
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
  var ensureNotNull = kotlin_kotlin.$_$.h7;
  var substringBefore = kotlin_kotlin.$_$.n6;
  var removeSuffix = kotlin_kotlin.$_$.g6;
  var substringAfter = kotlin_kotlin.$_$.l6;
  var contains_0 = kotlin_kotlin.$_$.r5;
  var plus = kotlin_kotlin.$_$.n7;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.z6;
  var isFinite = kotlin_kotlin.$_$.j7;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var objectCreate = kotlin_kotlin.$_$.b5;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.m7;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j1;
  var numberToChar = kotlin_kotlin.$_$.x4;
  var equals_0 = kotlin_kotlin.$_$.s5;
  var toString_1 = kotlin_kotlin.$_$.k1;
  var toByte = kotlin_kotlin.$_$.d5;
  var startsWith = kotlin_kotlin.$_$.k6;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var emptySet = kotlin_kotlin.$_$.k2;
  var plus_0 = kotlin_kotlin.$_$.c3;
  var toInt = kotlin_kotlin.$_$.q6;
  var toList = kotlin_kotlin.$_$.m3;
  var enumEntries = kotlin_kotlin.$_$.u3;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var last = kotlin_kotlin.$_$.u2;
  var removeLast = kotlin_kotlin.$_$.f3;
  var lastIndexOf = kotlin_kotlin.$_$.c6;
  var Long = kotlin_kotlin.$_$.a7;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i1;
  var numberToLong = kotlin_kotlin.$_$.a5;
  var charArray = kotlin_kotlin.$_$.z3;
  var indexOf = kotlin_kotlin.$_$.u5;
  var indexOf_0 = kotlin_kotlin.$_$.v5;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.p;
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
    this.fx_1 = configuration;
    this.gx_1 = serializersModule;
    this.hx_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).if = function () {
    return this.gx_1;
  };
  protoOf(Json).ix = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.lx();
    }
  };
  protoOf(Json).jx = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.pd(), null);
    var result = input.ze(deserializer);
    lexer.yx();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.ry();
    return new JsonImpl(conf, builder.qy_1);
  }
  function JsonBuilder(json) {
    this.zx_1 = json.fx_1.sy_1;
    this.ay_1 = json.fx_1.xy_1;
    this.by_1 = json.fx_1.ty_1;
    this.cy_1 = json.fx_1.uy_1;
    this.dy_1 = json.fx_1.wy_1;
    this.ey_1 = json.fx_1.yy_1;
    this.fy_1 = json.fx_1.zy_1;
    this.gy_1 = json.fx_1.bz_1;
    this.hy_1 = json.fx_1.iz_1;
    this.iy_1 = json.fx_1.dz_1;
    this.jy_1 = json.fx_1.ez_1;
    this.ky_1 = json.fx_1.fz_1;
    this.ly_1 = json.fx_1.gz_1;
    this.my_1 = json.fx_1.hz_1;
    this.ny_1 = json.fx_1.cz_1;
    this.oy_1 = json.fx_1.vy_1;
    this.py_1 = json.fx_1.az_1;
    this.qy_1 = json.if();
  }
  protoOf(JsonBuilder).ry = function () {
    if (this.py_1) {
      // Inline function 'kotlin.require' call
      if (!(this.gy_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.hy_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.dy_1) {
      // Inline function 'kotlin.require' call
      if (!(this.ey_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.ey_1 === '    ')) {
      var tmp3 = this.ey_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.ey_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.zx_1, this.by_1, this.cy_1, this.oy_1, this.dy_1, this.ay_1, this.ey_1, this.fy_1, this.py_1, this.gy_1, this.ny_1, this.iy_1, this.jy_1, this.ky_1, this.ly_1, this.my_1, this.hy_1);
  };
  function validateConfiguration($this) {
    if (equals($this.if(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.fx_1.az_1, $this.fx_1.bz_1);
    $this.if().uk(collector);
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
    this.sy_1 = encodeDefaults;
    this.ty_1 = ignoreUnknownKeys;
    this.uy_1 = isLenient;
    this.vy_1 = allowStructuredMapKeys;
    this.wy_1 = prettyPrint;
    this.xy_1 = explicitNulls;
    this.yy_1 = prettyPrintIndent;
    this.zy_1 = coerceInputValues;
    this.az_1 = useArrayPolymorphism;
    this.bz_1 = classDiscriminator;
    this.cz_1 = allowSpecialFloatingPointValues;
    this.dz_1 = useAlternativeNames;
    this.ez_1 = namingStrategy;
    this.fz_1 = decodeEnumsCaseInsensitive;
    this.gz_1 = allowTrailingComma;
    this.hz_1 = allowComments;
    this.iz_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.sy_1 + ', ignoreUnknownKeys=' + this.ty_1 + ', isLenient=' + this.uy_1 + ', ' + ('allowStructuredMapKeys=' + this.vy_1 + ', prettyPrint=' + this.wy_1 + ', explicitNulls=' + this.xy_1 + ', ') + ("prettyPrintIndent='" + this.yy_1 + "', coerceInputValues=" + this.zy_1 + ', useArrayPolymorphism=' + this.az_1 + ', ') + ("classDiscriminator='" + this.bz_1 + "', allowSpecialFloatingPointValues=" + this.cz_1 + ', ') + ('useAlternativeNames=' + this.dz_1 + ', namingStrategy=' + toString_0(this.ez_1) + ', decodeEnumsCaseInsensitive=' + this.fz_1 + ', ') + ('allowTrailingComma=' + this.gz_1 + ', allowComments=' + this.hz_1 + ', classDiscriminatorMode=' + this.iz_1.toString() + ')');
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
    var k = _destruct__k2r9zo.r1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.s1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.g7(_Char___init__impl__6a9atx(58));
    this_0.e7(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.jz_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.jz_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.jz_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.jz_1.x1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).kz = function (key) {
    return this.jz_1.t1(key);
  };
  protoOf(JsonObject).t1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.kz((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).lz = function (key) {
    return this.jz_1.v1(key);
  };
  protoOf(JsonObject).v1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.lz((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).j = function () {
    return this.jz_1.j();
  };
  protoOf(JsonObject).x1 = function () {
    return this.jz_1.x1();
  };
  protoOf(JsonObject).w1 = function () {
    return this.jz_1.w1();
  };
  protoOf(JsonObject).l = function () {
    return this.jz_1.l();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.mz_1 = 'null';
  }
  protoOf(JsonNull).nz = function () {
    return this.mz_1;
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
    return this.nz();
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
    this.oz_1 = isString;
    this.pz_1 = coerceToInlineType;
    this.qz_1 = toString(body);
    if (!(this.pz_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.pz_1.fe()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).nz = function () {
    return this.qz_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.oz_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.qz_1);
      tmp = this_0.toString();
    } else {
      tmp = this.qz_1;
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
    if (!(this.oz_1 === other.oz_1))
      return false;
    if (!(this.qz_1 === other.qz_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.oz_1);
    result = imul(31, result) + getStringHashCode(this.qz_1) | 0;
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
    this.rz_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.rz_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.rz_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.rz_1, ',', '[', ']');
  };
  protoOf(JsonArray).k = function (index) {
    return this.rz_1.k(index);
  };
  protoOf(JsonArray).j = function () {
    return this.rz_1.j();
  };
  protoOf(JsonArray).g = function () {
    return this.rz_1.g();
  };
  protoOf(JsonArray).q = function (index) {
    return this.rz_1.q(index);
  };
  protoOf(JsonArray).l = function () {
    return this.rz_1.l();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.nz());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.nz())).sz();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.nz() + ' is not an Int');
    return result.a1();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.nz())).sz();
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
    return toDouble(_this__u8e3s4.nz());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.nz();
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
    this.tz_1 = writer;
    this.uz_1 = true;
  }
  protoOf(Composer).vz = function () {
    this.uz_1 = true;
  };
  protoOf(Composer).wz = function () {
    return Unit_instance;
  };
  protoOf(Composer).xz = function () {
    this.uz_1 = false;
  };
  protoOf(Composer).yz = function () {
    this.uz_1 = false;
  };
  protoOf(Composer).zz = function () {
    return Unit_instance;
  };
  protoOf(Composer).a10 = function (v) {
    return this.tz_1.b10(v);
  };
  protoOf(Composer).c10 = function (v) {
    return this.tz_1.d10(v);
  };
  protoOf(Composer).e10 = function (v) {
    return this.tz_1.d10(v.toString());
  };
  protoOf(Composer).f10 = function (v) {
    return this.tz_1.g10(toLong(v));
  };
  protoOf(Composer).h10 = function (v) {
    return this.tz_1.g10(v);
  };
  protoOf(Composer).i10 = function (v) {
    return this.tz_1.d10(v.toString());
  };
  protoOf(Composer).j10 = function (value) {
    return this.tz_1.k10(value);
  };
  function Composer_0(sb, json) {
    return json.fx_1.wy_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.n10_1 = json;
    this.o10_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).vz = function () {
    this.uz_1 = true;
    this.o10_1 = this.o10_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).wz = function () {
    this.o10_1 = this.o10_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).xz = function () {
    this.uz_1 = false;
    this.c10('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.o10_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.c10(this.n10_1.fx_1.yy_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).yz = function () {
    if (this.uz_1)
      this.uz_1 = false;
    else {
      this.xz();
    }
  };
  protoOf(ComposerWithPrettyPrint).zz = function () {
    this.a10(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.q10_1 = (!descriptor.me(index) && descriptor.le(index).xd());
    return $this.q10_1;
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
    tmp.p10_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.q10_1 = false;
  }
  protoOf(JsonElementMarker).r10 = function (index) {
    this.p10_1.fi(index);
  };
  protoOf(JsonElementMarker).s10 = function () {
    return this.p10_1.gi();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.t10('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.ux_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.u10('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.de() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ee().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    var index = _this__u8e3s4.je(name);
    if (!(index === -3))
      return index;
    if (!json.fx_1.dz_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.ie(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.ee(), CLASS_getInstance()) ? json.fx_1.ez_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.w10(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.fx_1.fz_1 && equals(descriptor.ee(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).v1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.w10(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.ge();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.ke(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x10_1;
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
          tmp_0 = _this__u8e3s4.ie(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.y10(_this__u8e3s4, i, _this__u8e3s4.ie(i));
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
    var entity = equals($this_buildDeserializationNamesMap.ee(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).t1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ie(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ie(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.y1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.ge();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.ie(tmp_2);
        tmp_1[tmp_2] = $strategy.y10($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.b11_1, 2);
    $this.z10_1 = copyOf($this.z10_1, newSize);
    $this.a11_1 = copyOf_0($this.a11_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.z10_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.a11_1 = tmp_2;
    this.b11_1 = -1;
  }
  protoOf(JsonPath).c11 = function (sd) {
    this.b11_1 = this.b11_1 + 1 | 0;
    var depth = this.b11_1;
    if (depth === this.z10_1.length) {
      resize(this);
    }
    this.z10_1[depth] = sd;
  };
  protoOf(JsonPath).d11 = function (index) {
    this.a11_1[this.b11_1] = index;
  };
  protoOf(JsonPath).e11 = function (key) {
    var tmp;
    if (!(this.a11_1[this.b11_1] === -2)) {
      this.b11_1 = this.b11_1 + 1 | 0;
      tmp = this.b11_1 === this.z10_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.z10_1[this.b11_1] = key;
    this.a11_1[this.b11_1] = -2;
  };
  protoOf(JsonPath).f11 = function () {
    if (this.a11_1[this.b11_1] === -2) {
      this.z10_1[this.b11_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).g11 = function () {
    var depth = this.b11_1;
    if (this.a11_1[depth] === -2) {
      this.a11_1[depth] = -1;
      this.b11_1 = this.b11_1 - 1 | 0;
    }
    if (!(this.b11_1 === -1)) {
      this.b11_1 = this.b11_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).h11 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.f7('$');
    // Inline function 'kotlin.repeat' call
    var times = this.b11_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.z10_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ee(), LIST_getInstance())) {
            if (!(this.a11_1[index] === -1)) {
              this_0.f7('[');
              this_0.x9(this.a11_1[index]);
              this_0.f7(']');
            }
          } else {
            var idx = this.a11_1[index];
            if (idx >= 0) {
              this_0.f7('.');
              this_0.f7(element.ie(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.f7('[');
            this_0.f7("'");
            this_0.e7(element);
            this_0.f7("'");
            this_0.f7(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.h11();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().l();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.yf(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.r11_1.v11(6);
    if ($this.r11_1.w11() === 4) {
      $this.r11_1.u10('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.r11_1.x11()) {
      var key = $this.s11_1 ? $this.r11_1.z11() : $this.r11_1.y11();
      $this.r11_1.v11(5);
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.a12();
      // Inline function 'kotlin.collections.set' call
      result.y1(key, element);
      lastToken = $this.r11_1.b12();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.r11_1.u10('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.r11_1.v11(7);
    } else if (lastToken === 4) {
      if (!$this.t11_1) {
        invalidTrailingComma($this.r11_1);
      }
      $this.r11_1.v11(7);
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  }
  function readArray($this) {
    var lastToken = $this.r11_1.b12();
    if ($this.r11_1.w11() === 4) {
      $this.r11_1.u10('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.r11_1.x11()) {
      var element = $this.a12();
      result.e(element);
      lastToken = $this.r11_1.b12();
      if (!(lastToken === 4)) {
        var tmp0 = $this.r11_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.ux_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.u10(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.r11_1.v11(9);
    } else if (lastToken === 4) {
      if (!$this.t11_1) {
        invalidTrailingComma($this.r11_1, 'array');
      }
      $this.r11_1.v11(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.s11_1 || !isString) {
      tmp = $this.r11_1.z11();
    } else {
      tmp = $this.r11_1.y11();
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
    this.z12_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e13 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.f13($this$DeepRecursiveFunction, it, $completion);
    tmp.t7_1 = Unit_instance;
    tmp.u7_1 = null;
    return tmp.z7();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).f8 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.e13(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 3;
            this.c13_1 = this.z12_1.r11_1.w11();
            if (this.c13_1 === 1) {
              this.d13_1 = readValue(this.z12_1, true);
              this.r7_1 = 2;
              continue $sm;
            } else {
              if (this.c13_1 === 0) {
                this.d13_1 = readValue(this.z12_1, false);
                this.r7_1 = 2;
                continue $sm;
              } else {
                if (this.c13_1 === 6) {
                  this.r7_1 = 1;
                  suspendResult = readObject_0(this.a13_1, this.z12_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.c13_1 === 8) {
                    this.d13_1 = readArray(this.z12_1);
                    this.r7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.z12_1.r11_1.u10("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.d13_1 = suspendResult;
            this.r7_1 = 2;
            continue $sm;
          case 2:
            return this.d13_1;
          case 3:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 3) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).f13 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.z12_1, completion);
    i.a13_1 = $this$DeepRecursiveFunction;
    i.b13_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.e13($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k12_1 = _this__u8e3s4;
    this.l12_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).z7 = function () {
    var suspendResult = this.t7_1;
    $sm: do
      try {
        var tmp = this.r7_1;
        switch (tmp) {
          case 0:
            this.s7_1 = 5;
            var tmp_0 = this;
            tmp_0.m12_1 = this.k12_1;
            this.n12_1 = this.m12_1;
            this.o12_1 = this.n12_1.r11_1.v11(6);
            if (this.n12_1.r11_1.w11() === 4) {
              this.n12_1.r11_1.u10('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.p12_1 = LinkedHashMap_init_$Create$();
            this.r7_1 = 1;
            continue $sm;
          case 1:
            if (!this.n12_1.r11_1.x11()) {
              this.r7_1 = 4;
              continue $sm;
            }

            this.q12_1 = this.n12_1.s11_1 ? this.n12_1.r11_1.z11() : this.n12_1.r11_1.y11();
            this.n12_1.r11_1.v11(5);
            this.r7_1 = 2;
            suspendResult = this.l12_1.cd(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.p12_1;
            var key = this.q12_1;
            tmp0.y1(key, element);
            this.o12_1 = this.n12_1.r11_1.b12();
            var tmp0_subject = this.o12_1;
            if (tmp0_subject === 4) {
              this.r7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.r7_1 = 4;
                continue $sm;
              } else {
                this.n12_1.r11_1.u10('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.r7_1 = 1;
            continue $sm;
          case 4:
            if (this.o12_1 === 6) {
              this.n12_1.r11_1.v11(7);
            } else if (this.o12_1 === 4) {
              if (!this.n12_1.t11_1) {
                invalidTrailingComma(this.n12_1.r11_1);
              }
              this.n12_1.r11_1.v11(7);
            }

            return new JsonObject(this.p12_1);
          case 5:
            throw this.u7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.s7_1 === 5) {
          throw e;
        } else {
          this.r7_1 = this.s7_1;
          this.u7_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.r11_1 = lexer;
    this.s11_1 = configuration.uy_1;
    this.t11_1 = configuration.gz_1;
    this.u11_1 = 0;
  }
  protoOf(JsonTreeReader).a12 = function () {
    var token = this.r11_1.w11();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.u11_1 = this.u11_1 + 1 | 0;
      if (this.u11_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.u11_1 = this.u11_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.r11_1.u10('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.he().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.g13_1;
    }
    return json.fx_1.bz_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.pd()).p1(classDiscriminator)) {
      var baseName = serializer.pd().de();
      var actualName = actualSerializer.pd().de();
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
    var kind = descriptor.ee();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.q8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.h13_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.q8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.ge();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.ie(i);
        if (name === $this.i13_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.h13_1 = useArrayPolymorphism;
    this.i13_1 = discriminator;
  }
  protoOf(PolymorphismValidator).dl = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).gl = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.pd();
    checkKind_0(this, descriptor, actualClass);
    if (!this.h13_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).hl = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).il = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.v10_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).j13 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.v10_1;
    var value_0 = this_0.v1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.y1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.y1(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).w10 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.k13(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.j13(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).k13 = function (descriptor, key) {
    var tmp0_safe_receiver = this.v10_1.v1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.v1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.l13_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.l13_1 === unknownKey) {
      _this__u8e3s4.l13_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.kf(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.ox_1.w11() === 4) {
      $this.ox_1.u10('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.qx_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.qx_1 === -1)) {
        hasComma = $this.ox_1.n13();
      }
    } else {
      $this.ox_1.m13(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.ox_1.x11()) {
      if (decodingKey) {
        if ($this.qx_1 === -1) {
          var tmp0 = $this.ox_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.ux_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.u10(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.ox_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.ux_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3.u10(tmp$ret$1, position_0);
          }
        }
      }
      $this.qx_1 = $this.qx_1 + 1 | 0;
      tmp = $this.qx_1;
    } else {
      if (hasComma && !$this.mx_1.fx_1.gz_1) {
        invalidTrailingComma($this.ox_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.mx_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.me(index);
      var elementDescriptor = descriptor.le(index);
      var tmp;
      if (isOptional && !elementDescriptor.xd()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.ox_1.o13(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ee(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.xd()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.ox_1.o13(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.ox_1.p13($this.sx_1.uy_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.fx_1.xy_1 && elementDescriptor.xd();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.ox_1.y11();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.ox_1.n13();
    while ($this.ox_1.x11()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.ox_1.m13(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.mx_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.sx_1.zy_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.ox_1.n13();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.tx_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.r10(index);
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
    if (hasComma && !$this.mx_1.fx_1.gz_1) {
      invalidTrailingComma($this.ox_1);
    }
    var tmp1_safe_receiver = $this.tx_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s10();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, key) {
    if ($this.sx_1.ty_1 || trySkip($this.rx_1, $this, key)) {
      $this.ox_1.r13($this.sx_1.uy_1);
    } else {
      $this.ox_1.q13(key);
    }
    return $this.ox_1.n13();
  }
  function decodeListIndex($this) {
    var hasComma = $this.ox_1.n13();
    var tmp;
    if ($this.ox_1.x11()) {
      if (!($this.qx_1 === -1) && !hasComma) {
        $this.ox_1.u10('Expected end of the array or comma');
      }
      $this.qx_1 = $this.qx_1 + 1 | 0;
      tmp = $this.qx_1;
    } else {
      if (hasComma && !$this.mx_1.fx_1.gz_1) {
        invalidTrailingComma($this.ox_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.sx_1.uy_1) {
      tmp = $this.ox_1.t13();
    } else {
      tmp = $this.ox_1.s13();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.mx_1 = json;
    this.nx_1 = mode;
    this.ox_1 = lexer;
    this.px_1 = this.mx_1.if();
    this.qx_1 = -1;
    this.rx_1 = discriminatorHolder;
    this.sx_1 = this.mx_1.fx_1;
    this.tx_1 = this.sx_1.xy_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).u13 = function () {
    return this.mx_1;
  };
  protoOf(StreamingJsonDecoder).if = function () {
    return this.px_1;
  };
  protoOf(StreamingJsonDecoder).v13 = function () {
    return (new JsonTreeReader(this.mx_1.fx_1, this.ox_1)).a12();
  };
  protoOf(StreamingJsonDecoder).ze = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.mx_1.fx_1.az_1;
      }
      if (tmp) {
        return deserializer.rd(this);
      }
      var discriminator = classDiscriminator(deserializer.pd(), this.mx_1);
      var tmp0_elvis_lhs = this.ox_1.w13(discriminator, this.sx_1.uy_1);
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
            tmp_1 = this.u13().fx_1.az_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.rd(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.pd(), this.u13());
          var tmp0 = this.v13();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.pd().de();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).q8();
            var tmp_3 = getKClassFromExpression(tmp0).q8();
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeSerializableValue.<anonymous>' call
            var tmp$ret$1 = this.ox_1.vx_1.h11();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.lz(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.u13(), discriminator_0, jsonTree, actualSerializer);
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
          this.ox_1.u10(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.rx_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.rd(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.wd_1, plus(e.message, ' at path: ') + this.ox_1.vx_1.h11(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).af = function (descriptor) {
    var newMode = switchMode(this.mx_1, descriptor);
    this.ox_1.vx_1.c11(descriptor);
    this.ox_1.m13(newMode.z13_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.d2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.mx_1, newMode, this.ox_1, descriptor, this.rx_1);
        break;
      default:
        var tmp_0;
        if (this.nx_1.equals(newMode) && this.mx_1.fx_1.xy_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.mx_1, newMode, this.ox_1, descriptor, this.rx_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).bf = function (descriptor) {
    if (this.mx_1.fx_1.ty_1 && descriptor.ge() === 0) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.ox_1.n13() && !this.mx_1.fx_1.gz_1) {
      invalidTrailingComma(this.ox_1, '');
    }
    this.ox_1.m13(this.nx_1.a14_1);
    this.ox_1.vx_1.g11();
  };
  protoOf(StreamingJsonDecoder).re = function () {
    var tmp;
    var tmp0_safe_receiver = this.tx_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q10_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.ox_1.b14();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).se = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).ff = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.nx_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.ox_1.vx_1.f11();
    }
    var value = protoOf(AbstractDecoder).ff.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.ox_1.vx_1.e11(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).kf = function (descriptor) {
    var index;
    switch (this.nx_1.d2_1) {
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
    if (!this.nx_1.equals(WriteMode_MAP_getInstance())) {
      this.ox_1.vx_1.d11(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).te = function () {
    return this.ox_1.c14();
  };
  protoOf(StreamingJsonDecoder).ue = function () {
    var value = this.ox_1.sz();
    if (!value.equals(toLong(value.a1()))) {
      this.ox_1.u10("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.a1();
  };
  protoOf(StreamingJsonDecoder).ve = function () {
    return this.ox_1.sz();
  };
  protoOf(StreamingJsonDecoder).we = function () {
    var tmp0 = this.ox_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.z11();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.u10("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.mx_1.fx_1.cz_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.ox_1, result);
  };
  protoOf(StreamingJsonDecoder).xe = function () {
    var tmp;
    if (this.sx_1.uy_1) {
      tmp = this.ox_1.t13();
    } else {
      tmp = this.ox_1.y11();
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
    $this.i11_1.xz();
    $this.tf(discriminator);
    $this.i11_1.a10(_Char___init__impl__6a9atx(58));
    $this.i11_1.zz();
    $this.tf(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.i11_1 = composer;
    this.j11_1 = json;
    this.k11_1 = mode;
    this.l11_1 = modeReuseCache;
    this.m11_1 = this.j11_1.if();
    this.n11_1 = this.j11_1.fx_1;
    this.o11_1 = false;
    this.p11_1 = null;
    this.q11_1 = null;
    var i = this.k11_1.d2_1;
    if (!(this.l11_1 == null)) {
      if (!(this.l11_1[i] === null) || !(this.l11_1[i] === this)) {
        this.l11_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).u13 = function () {
    return this.j11_1;
  };
  protoOf(StreamingJsonEncoder).if = function () {
    return this.m11_1;
  };
  protoOf(StreamingJsonEncoder).dg = function (descriptor, index) {
    return this.n11_1.sy_1;
  };
  protoOf(StreamingJsonEncoder).yf = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.u13().fx_1.az_1) {
        serializer.qd(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.u13().fx_1.iz_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.u13().fx_1.iz_1.d2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.pd().ee();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.pd(), this.u13()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + toString(serializer.pd()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.pd().ee());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        var serialName = actualSerializer.pd().de();
        this.p11_1 = baseClassDiscriminator;
        this.q11_1 = serialName;
      }
      actualSerializer.qd(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).af = function (descriptor) {
    var newMode = switchMode(this.j11_1, descriptor);
    if (!(newMode.z13_1 === _Char___init__impl__6a9atx(0))) {
      this.i11_1.a10(newMode.z13_1);
      this.i11_1.vz();
    }
    var discriminator = this.p11_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.q11_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.de() : tmp0_elvis_lhs);
      this.p11_1 = null;
      this.q11_1 = null;
    }
    if (this.k11_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.l11_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.d2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.i11_1, this.j11_1, newMode, this.l11_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).bf = function (descriptor) {
    if (!(this.k11_1.a14_1 === _Char___init__impl__6a9atx(0))) {
      this.i11_1.wz();
      this.i11_1.yz();
      this.i11_1.a10(this.k11_1.a14_1);
    }
  };
  protoOf(StreamingJsonEncoder).mf = function (descriptor, index) {
    switch (this.k11_1.d2_1) {
      case 1:
        if (!this.i11_1.uz_1) {
          this.i11_1.a10(_Char___init__impl__6a9atx(44));
        }

        this.i11_1.xz();
        break;
      case 2:
        if (!this.i11_1.uz_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.i11_1.a10(_Char___init__impl__6a9atx(44));
            this.i11_1.xz();
            tmp_0 = true;
          } else {
            this.i11_1.a10(_Char___init__impl__6a9atx(58));
            this.i11_1.zz();
            tmp_0 = false;
          }
          tmp.o11_1 = tmp_0;
        } else {
          this.o11_1 = true;
          this.i11_1.xz();
        }

        break;
      case 3:
        if (index === 0)
          this.o11_1 = true;
        if (index === 1) {
          this.i11_1.a10(_Char___init__impl__6a9atx(44));
          this.i11_1.zz();
          this.o11_1 = false;
        }

        break;
      default:
        if (!this.i11_1.uz_1) {
          this.i11_1.a10(_Char___init__impl__6a9atx(44));
        }

        this.i11_1.xz();
        this.tf(getJsonElementName(descriptor, this.j11_1, index));
        this.i11_1.a10(_Char___init__impl__6a9atx(58));
        this.i11_1.zz();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).zf = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.n11_1.xy_1) {
      protoOf(AbstractEncoder).zf.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).of = function () {
    this.i11_1.c10('null');
  };
  protoOf(StreamingJsonEncoder).pf = function (value) {
    if (this.o11_1) {
      this.tf(value.toString());
    } else {
      this.i11_1.i10(value);
    }
  };
  protoOf(StreamingJsonEncoder).qf = function (value) {
    if (this.o11_1) {
      this.tf(value.toString());
    } else {
      this.i11_1.f10(value);
    }
  };
  protoOf(StreamingJsonEncoder).rf = function (value) {
    if (this.o11_1) {
      this.tf(value.toString());
    } else {
      this.i11_1.h10(value);
    }
  };
  protoOf(StreamingJsonEncoder).sf = function (value) {
    if (this.o11_1) {
      this.tf(value.toString());
    } else {
      this.i11_1.e10(value);
    }
    if (!this.n11_1.cz_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.i11_1.tz_1));
    }
  };
  protoOf(StreamingJsonEncoder).tf = function (value) {
    return this.i11_1.j10(value);
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
    _this__u8e3s4.g7(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.v9(value, lastPos, i);
          _this__u8e3s4.f7(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.v9(value, lastPos, value.length);
    else
      _this__u8e3s4.f7(value);
    _this__u8e3s4.g7(_Char___init__impl__6a9atx(34));
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.j14(tag), toString($this.k14()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.f14_1 = json;
    this.g14_1 = value;
    this.h14_1 = polymorphicDiscriminator;
    this.i14_1 = this.u13().fx_1;
  }
  protoOf(AbstractJsonTreeDecoder).u13 = function () {
    return this.f14_1;
  };
  protoOf(AbstractJsonTreeDecoder).s1 = function () {
    return this.g14_1;
  };
  protoOf(AbstractJsonTreeDecoder).if = function () {
    return this.u13().if();
  };
  protoOf(AbstractJsonTreeDecoder).k14 = function () {
    var tmp0_safe_receiver = this.hk();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.l14(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.s1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).j14 = function (currentTag) {
    return this.jk() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).v13 = function () {
    return this.k14();
  };
  protoOf(AbstractJsonTreeDecoder).ze = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.u13().fx_1.az_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.rd(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.pd(), this.u13());
      var tmp0 = this.v13();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.pd().de();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).q8();
        var tmp_1 = getKClassFromExpression(tmp0).q8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeSerializableValue.stub_for_inlining' call
        var tmp$ret$1 = this.jk();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.lz(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.u13(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).ik = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).af = function (descriptor) {
    var currentObject = this.k14();
    var tmp0_subject = descriptor.ee();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.u13();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.de();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).q8();
        var tmp_3 = getKClassFromExpression(currentObject).q8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.jk();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.u13();
        var keyDescriptor = carrierDescriptor(descriptor.le(0), this_0.if());
        var keyKind = keyDescriptor.ee();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_6 = this.u13();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.de();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).q8();
            var tmp_8 = getKClassFromExpression(currentObject).q8();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
            var tmp$ret$3 = this.jk();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.fx_1.vy_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_9 = this.u13();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.de();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).q8();
              var tmp_11 = getKClassFromExpression(currentObject).q8();
              // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
              var tmp$ret$7 = this.jk();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.u13();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.de();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).q8();
          var tmp_14 = getKClassFromExpression(currentObject).q8();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
          var tmp$ret$12 = this.jk();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.h14_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).bf = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).re = function () {
    var tmp = this.k14();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).m14 = function (tag) {
    return !(this.l14(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).lk = function (tag) {
    return this.m14((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n14 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.l14(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).q8();
        var tmp_0 = getKClassFromExpression(value).q8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.j14(tag);
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
  protoOf(AbstractJsonTreeDecoder).mk = function (tag) {
    return this.n14((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o14 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.l14(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).q8();
        var tmp_0 = getKClassFromExpression(value).q8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.j14(tag);
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
  protoOf(AbstractJsonTreeDecoder).nk = function (tag) {
    return this.o14((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p14 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.l14(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).q8();
        var tmp_0 = getKClassFromExpression(value).q8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.j14(tag);
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
  protoOf(AbstractJsonTreeDecoder).ok = function (tag) {
    return this.p14((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q14 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.l14(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).q8();
        var tmp_0 = getKClassFromExpression(value).q8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.j14(tag);
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
    var specialFp = this.u13().fx_1.cz_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.k14()));
  };
  protoOf(AbstractJsonTreeDecoder).pk = function (tag) {
    return this.q14((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r14 = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.l14(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).q8();
      var tmp_0 = getKClassFromExpression(value).q8();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
      var tmp$ret$0 = this.j14(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.j14(tag), toString(this.k14()));
    if (!value_0.oz_1 && !this.u13().fx_1.uy_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.j14(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.k14()));
    }
    return value_0.qz_1;
  };
  protoOf(AbstractJsonTreeDecoder).qk = function (tag) {
    return this.r14((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.u13();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.me(index);
      var elementDescriptor = descriptor.le(index);
      var tmp;
      if (isOptional && !elementDescriptor.xd()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.l14(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ee(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.xd()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.l14(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.l14(tag);
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
        var coerceToNull = !tmp0.fx_1.xy_1 && elementDescriptor.xd();
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
    $this.b15_1 = (!$this.u13().fx_1.xy_1 && !descriptor.me(index) && descriptor.le(index).xd());
    return $this.b15_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.y14_1 = value;
    this.z14_1 = polyDescriptor;
    this.a15_1 = 0;
    this.b15_1 = false;
  }
  protoOf(JsonTreeDecoder).s1 = function () {
    return this.y14_1;
  };
  protoOf(JsonTreeDecoder).kf = function (descriptor) {
    while (this.a15_1 < descriptor.ge()) {
      var _unary__edvuaz = this.a15_1;
      this.a15_1 = _unary__edvuaz + 1 | 0;
      var name = this.ck(descriptor, _unary__edvuaz);
      var index = this.a15_1 - 1 | 0;
      this.b15_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.s1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).t1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.i14_1.zy_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).re = function () {
    return !this.b15_1 && protoOf(AbstractJsonTreeDecoder).re.call(this);
  };
  protoOf(JsonTreeDecoder).dk = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.u13());
    var baseName = descriptor.ie(index);
    if (strategy == null) {
      if (!this.i14_1.dz_1)
        return baseName;
      if (this.s1().w1().p1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.u13(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.s1().w1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.v1(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.y10(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).l14 = function (tag) {
    return getValue(this.s1(), tag);
  };
  protoOf(JsonTreeDecoder).af = function (descriptor) {
    if (descriptor === this.z14_1) {
      var tmp = this.u13();
      var tmp1 = this.k14();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.z14_1.de();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).q8();
        var tmp_1 = getKClassFromExpression(tmp1).q8();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast.<anonymous>' call
        var tmp$ret$0 = this.jk();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.h14_1, this.z14_1);
    }
    return protoOf(AbstractJsonTreeDecoder).af.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).bf = function (descriptor) {
    var tmp;
    if (this.i14_1.ty_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ee();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.u13());
    var tmp_1;
    if (strategy == null && !this.i14_1.dz_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.u13(), descriptor).w1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.u13()).k13(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.s1().w1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.p1(key) && !(key === this.h14_1)) {
        throw UnknownKeyException(key, this.s1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.i15_1 = value;
    this.j15_1 = this.i15_1.l();
    this.k15_1 = -1;
  }
  protoOf(JsonTreeListDecoder).s1 = function () {
    return this.i15_1;
  };
  protoOf(JsonTreeListDecoder).dk = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).l14 = function (tag) {
    return this.i15_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).kf = function (descriptor) {
    while (this.k15_1 < (this.j15_1 - 1 | 0)) {
      this.k15_1 = this.k15_1 + 1 | 0;
      return this.k15_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.v15_1 = value;
    this.w15_1 = toList(this.v15_1.w1());
    this.x15_1 = imul(this.w15_1.l(), 2);
    this.y15_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).s1 = function () {
    return this.v15_1;
  };
  protoOf(JsonTreeMapDecoder).dk = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.w15_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).kf = function (descriptor) {
    while (this.y15_1 < (this.x15_1 - 1 | 0)) {
      this.y15_1 = this.y15_1 + 1 | 0;
      return this.y15_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).l14 = function (tag) {
    return (this.y15_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.v15_1, tag);
  };
  protoOf(JsonTreeMapDecoder).bf = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.pd())).ze(deserializer);
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
    this.z13_1 = begin;
    this.a14_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ee();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.le(0), _this__u8e3s4.if());
          var keyKind = keyDescriptor.ee();
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
            if (_this__u8e3s4.fx_1.vy_1) {
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
    if (equals(_this__u8e3s4.ee(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.fe()) {
      tmp = carrierDescriptor(_this__u8e3s4.le(0), module_0);
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
    $this.z15(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.z15(lastPosition, currentPosition);
    var result = $this.xx_1.toString();
    $this.xx_1.z9(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.wx_1);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.wx_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.a16(), $this.ux_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.b16(currentPosition);
    if (currentPosition === -1) {
      $this.u10('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.a16();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.a16(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.u10("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.xx_1.g7(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.ux_1 = startPos;
      $this.c16();
      if (($this.ux_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.u10('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.ux_1);
    }
    $this.xx_1.g7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.u10("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.b16(start);
    if (current >= charSequenceLength($this.a16()) || current === -1) {
      $this.u10('EOF');
    }
    var tmp = $this.a16();
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
        $this.u10("Expected valid boolean literal prefix, but had '" + $this.z11() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.a16()) - current | 0) < literalSuffix.length) {
      $this.u10('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.a16(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.u10("Expected valid boolean literal prefix, but had '" + $this.z11() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.ux_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.t2();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.t2();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.ux_1 = 0;
    this.vx_1 = new JsonPath();
    this.wx_1 = null;
    this.xx_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).c16 = function () {
  };
  protoOf(AbstractJsonLexer).n13 = function () {
    var current = this.d16();
    var source = this.a16();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.ux_1 = this.ux_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).e16 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).yx = function () {
    var nextToken = this.b12();
    if (!(nextToken === 10)) {
      this.u10('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.a16(), this.ux_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).v11 = function (expected) {
    var token = this.b12();
    if (!(token === expected)) {
      this.f16(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).g16 = function (expected) {
    if (this.ux_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.ux_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.ux_1 = this.ux_1 - 1 | 0;
          tmp$ret$1 = this.z11();
          break $l$block;
        }finally {
          this.ux_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.t10("Expected string literal but 'null' literal was found", this.ux_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.f16(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).h16 = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.ux_1 - 1 | 0 : this.ux_1;
    var s = this.ux_1 === charSequenceLength(this.a16()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.a16(), position));
    this.u10('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).f16 = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.h16(expectedToken, wasConsumed) : $super.h16.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).w11 = function () {
    var source = this.a16();
    var cpos = this.ux_1;
    $l$loop_0: while (true) {
      cpos = this.b16(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.ux_1 = cpos;
      return charToTokenClass(ch);
    }
    this.ux_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).o13 = function (doConsume) {
    var current = this.d16();
    current = this.b16(current);
    var len = charSequenceLength(this.a16()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.a16(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.a16(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.ux_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).b14 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.o13(doConsume) : $super.o13.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).p13 = function (isLenient) {
    var token = this.w11();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.z11();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.y11();
    }
    var string = tmp;
    this.wx_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).i16 = function () {
    this.wx_1 = null;
  };
  protoOf(AbstractJsonLexer).j16 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.a16();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).y11 = function () {
    if (!(this.wx_1 == null)) {
      return takePeeked(this);
    }
    return this.s13();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.b16(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.u10('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.z15(lastPosition, currentPosition);
          currentPosition = this.b16(currentPosition);
          if (currentPosition === -1) {
            this.u10('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.j16(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.ux_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).t13 = function () {
    var result = this.z11();
    if (result === 'null' && wasUnquotedString(this)) {
      this.u10("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).z11 = function () {
    if (!(this.wx_1 == null)) {
      return takePeeked(this);
    }
    var current = this.d16();
    if (current >= charSequenceLength(this.a16()) || current === -1) {
      this.u10('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.a16(), current));
    if (token === 1) {
      return this.y11();
    }
    if (!(token === 0)) {
      this.u10('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.a16(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.a16(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.a16())) {
        usedAppend = true;
        this.z15(this.ux_1, current);
        var eof = this.b16(current);
        if (eof === -1) {
          this.ux_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.j16(this.ux_1, current);
    } else {
      tmp = decodedString(this, this.ux_1, current);
    }
    var result = tmp;
    this.ux_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).z15 = function (fromIndex, toIndex) {
    this.xx_1.v9(this.a16(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).r13 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.w11();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.z11();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.w11();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.z11();
        else
          this.s13();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.ux_1, 'found ] instead of } at path: ' + this.vx_1.toString(), this.a16());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.ux_1, 'found } instead of ] at path: ' + this.vx_1.toString(), this.a16());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.u10('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.b12();
      if (tokenStack.l() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.a16()) + "', currentPosition=" + this.ux_1 + ')';
  };
  protoOf(AbstractJsonLexer).q13 = function (key) {
    var processed = this.j16(0, this.ux_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.t10("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).t10 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.vx_1.h11() + hintMessage, this.a16());
  };
  protoOf(AbstractJsonLexer).u10 = function (message, position, hint, $super) {
    position = position === VOID ? this.ux_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.t10(message, position, hint) : $super.t10.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).sz = function () {
    var current = this.d16();
    current = this.b16(current);
    if (current >= charSequenceLength(this.a16()) || current === -1) {
      this.u10('EOF');
    }
    var tmp;
    if (charSequenceGet(this.a16(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.a16())) {
        this.u10('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.a16()))) {
      var ch = charSequenceGet(this.a16(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.u10('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.u10("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.u10("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.u10("Unexpected symbol '-' in numeric literal");
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
        this.u10("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.l2(toLong(10)).j2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.l2(toLong(10)).k2(toLong(digit));
      if (accumulator.b1(new Long(0, 0)) > 0) {
        this.u10('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.u10('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.u10('EOF');
      }
      if (!(charSequenceGet(this.a16(), current) === _Char___init__impl__6a9atx(34))) {
        this.u10('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.ux_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.t2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).t2() || doubleAccumulator < (new Long(0, -2147483648)).t2()) {
        this.u10('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.u10("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.o2();
    } else {
      this.u10('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).c14 = function () {
    var current = this.d16();
    if (current === charSequenceLength(this.a16())) {
      this.u10('EOF');
    }
    var tmp;
    if (charSequenceGet(this.a16(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.ux_1 === charSequenceLength(this.a16())) {
        this.u10('EOF');
      }
      if (!(charSequenceGet(this.a16(), this.ux_1) === _Char___init__impl__6a9atx(34))) {
        this.u10('Expected closing quotation mark');
      }
      this.ux_1 = this.ux_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().l16_1;
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
    return c < 117 ? CharMappings_getInstance().k16_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.k16_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.l16_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.k16_1 = charArray(117);
    this.l16_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).b12 = function () {
    var source = this.a16();
    var cpos = this.d16();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.ux_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).x11 = function () {
    var current = this.d16();
    if (current >= this.a16().length || current === -1)
      return false;
    return this.e16(charSequenceGet(this.a16(), current));
  };
  protoOf(StringJsonLexerWithComments).m13 = function (expected) {
    var source = this.a16();
    var current = this.d16();
    if (current >= source.length || current === -1) {
      this.ux_1 = -1;
      this.g16(expected);
    }
    var c = charSequenceGet(source, current);
    this.ux_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.g16(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).w11 = function () {
    var source = this.a16();
    var cpos = this.d16();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.ux_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).d16 = function () {
    var current = this.ux_1;
    if (current === -1)
      return current;
    var source = this.a16();
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
            this.ux_1 = source.length;
            this.u10('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.ux_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.v16_1 = source;
  }
  protoOf(StringJsonLexer).a16 = function () {
    return this.v16_1;
  };
  protoOf(StringJsonLexer).b16 = function (position) {
    return position < this.a16().length ? position : -1;
  };
  protoOf(StringJsonLexer).b12 = function () {
    var source = this.a16();
    var cpos = this.ux_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.ux_1 = cpos;
      return charToTokenClass(c);
    }
    this.ux_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).x11 = function () {
    var current = this.ux_1;
    if (current === -1)
      return false;
    var source = this.a16();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.ux_1 = current;
      return this.e16(c);
    }
    this.ux_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).d16 = function () {
    var current = this.ux_1;
    if (current === -1)
      return current;
    var source = this.a16();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.ux_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).m13 = function (expected) {
    if (this.ux_1 === -1) {
      this.g16(expected);
    }
    var source = this.a16();
    var cpos = this.ux_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.ux_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.g16(expected);
    }
    this.ux_1 = -1;
    this.g16(expected);
  };
  protoOf(StringJsonLexer).s13 = function () {
    this.m13(_Char___init__impl__6a9atx(34));
    var current = this.ux_1;
    var closingQuote = indexOf_0(this.a16(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.z11();
      this.h16(1, false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.a16(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.a16(), this.ux_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.ux_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.a16().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).w13 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.ux_1;
    try {
      if (!(this.b12() === 6))
        return null;
      var firstKey = this.p13(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.i16();
      if (!(this.b12() === 5))
        return null;
      return this.p13(isLenient);
    }finally {
      this.ux_1 = positionSnapshot;
      this.i16();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.fx_1.hz_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.hx_1;
  }
  function JsonToStringWriter() {
    this.kx_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).g10 = function (value) {
    this.kx_1.y9(value);
  };
  protoOf(JsonToStringWriter).b10 = function (char) {
    this.kx_1.g7(char);
  };
  protoOf(JsonToStringWriter).d10 = function (text) {
    this.kx_1.f7(text);
  };
  protoOf(JsonToStringWriter).k10 = function (text) {
    printQuoted(this.kx_1, text);
  };
  protoOf(JsonToStringWriter).lx = function () {
    this.kx_1.aa();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.kx_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(PolymorphismValidator).fl = contextual;
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

