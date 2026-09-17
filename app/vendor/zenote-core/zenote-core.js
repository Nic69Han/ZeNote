(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'zenote:core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'zenote:core'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'zenote:core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'zenote:core'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'zenote:core'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'zenote:core'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'zenote:core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'zenote:core'.");
    }
    globalThis['zenote:core'] = factory(typeof globalThis['zenote:core'] === 'undefined' ? {} : globalThis['zenote:core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.o1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.r6;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.w4;
  var toString = kotlin_kotlin.$_$.d7;
  var getStringHashCode = kotlin_kotlin.$_$.g4;
  var getNumberHashCode = kotlin_kotlin.$_$.e4;
  var getBooleanHashCode = kotlin_kotlin.$_$.d4;
  var equals = kotlin_kotlin.$_$.b4;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toString_0 = kotlin_kotlin.$_$.a5;
  var hashCode = kotlin_kotlin.$_$.h4;
  var emptyList = kotlin_kotlin.$_$.e2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.j;
  var Companion_instance = kotlin_kotlin.$_$.n1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i1;
  var createFailure = kotlin_kotlin.$_$.v6;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.j1;
  var isBlank = kotlin_kotlin.$_$.q5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k1;
  var listOfNotNull = kotlin_kotlin.$_$.s2;
  var Collection = kotlin_kotlin.$_$.q1;
  var isInterface = kotlin_kotlin.$_$.p4;
  var FunctionAdapter = kotlin_kotlin.$_$.r3;
  var Comparator = kotlin_kotlin.$_$.j6;
  var compareValues = kotlin_kotlin.$_$.m3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z;
  var compareTo = kotlin_kotlin.$_$.z3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var mapCapacity = kotlin_kotlin.$_$.v2;
  var coerceAtLeast = kotlin_kotlin.$_$.d5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var getValue = kotlin_kotlin.$_$.i2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var sortedWith = kotlin_kotlin.$_$.g3;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.m1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.l1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var THROW_IAE = kotlin_kotlin.$_$.s6;
  var Enum = kotlin_kotlin.$_$.m6;
  var Long = kotlin_kotlin.$_$.p6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b7;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.k;
  var take = kotlin_kotlin.$_$.h3;
  var toSet = kotlin_kotlin.$_$.k3;
  var plus = kotlin_kotlin.$_$.z2;
  var compareBy = kotlin_kotlin.$_$.l3;
  var listOf = kotlin_kotlin.$_$.u2;
  var to = kotlin_kotlin.$_$.e7;
  var listOfNotNull_0 = kotlin_kotlin.$_$.r2;
  var ensureNotNull = kotlin_kotlin.$_$.w6;
  var charSequenceLength = kotlin_kotlin.$_$.x3;
  var charSequenceGet = kotlin_kotlin.$_$.w3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e1;
  var isLetterOrDigit = kotlin_kotlin.$_$.r5;
  var Char = kotlin_kotlin.$_$.h6;
  var joinToString = kotlin_kotlin.$_$.l2;
  var charArrayOf = kotlin_kotlin.$_$.u3;
  var split = kotlin_kotlin.$_$.x5;
  var get_isoDayNumber = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.l;
  var DatePeriod_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.h;
  var minus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.m;
  var plus_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.n;
  var LocalDate_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.i;
  var contains = kotlin_kotlin.$_$.m5;
  var substringAfter = kotlin_kotlin.$_$.b6;
  var isCharSequence = kotlin_kotlin.$_$.o4;
  var trim = kotlin_kotlin.$_$.g6;
  var split_0 = kotlin_kotlin.$_$.y5;
  var toIntOrNull = kotlin_kotlin.$_$.e6;
  var startsWith = kotlin_kotlin.$_$.z5;
  var minOf = kotlin_kotlin.$_$.n3;
  var DayOfWeek_SATURDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var DayOfWeek_MONDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DayOfWeek_TUESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.f;
  var DayOfWeek_WEDNESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.g;
  var DayOfWeek_THURSDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var DayOfWeek_FRIDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DayOfWeek_SUNDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var mapOf = kotlin_kotlin.$_$.w2;
  var setOf = kotlin_kotlin.$_$.c3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n;
  var indexOf = kotlin_kotlin.$_$.p5;
  var checkCountOverflow = kotlin_kotlin.$_$.w1;
  var defineProp = kotlin_kotlin.$_$.a4;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ElementJson, 'ElementJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PropositionJson, 'PropositionJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EntreeRevueJson, 'EntreeRevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GroupeRevueJson, 'GroupeRevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RelanceJson, 'RelanceJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SuiviJson, 'SuiviJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RevueJson, 'RevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AncrageJson, 'AncrageJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EcarteJson, 'EcarteJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CaptureJson, 'CaptureJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CitationJson, 'CitationJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ReponseJson, 'ReponseJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Regles, 'Regles');
  initMetadataForClass(Deduit, 'Deduit');
  initMetadataForClass(TypeElement, 'TypeElement', VOID, Enum);
  initMetadataForClass(Poids, 'Poids', VOID, Enum);
  initMetadataForClass(Sphere, 'Sphere', VOID, Enum);
  initMetadataForClass(Plan, 'Plan');
  initMetadataForClass(ElementId, 'ElementId');
  initMetadataForClass(ElementDerive, 'ElementDerive');
  initMetadataForClass(Verdict, 'Verdict', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(ElementResolu, 'ElementResolu');
  initMetadataForClass(CaptureId, 'CaptureId');
  initMetadataForClass(Passage, 'Passage');
  initMetadataForClass(Urgence, 'Urgence', VOID, Enum);
  initMetadataForClass(ContexteMaintenant, 'ContexteMaintenant');
  initMetadataForClass(Proposition, 'Proposition');
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Priorisation, 'Priorisation');
  initMetadataForClass(TexteSource, 'TexteSource');
  initMetadataForClass(Citation, 'Citation');
  initMetadataForClass(Reponse, 'Reponse');
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(RechercheLocale, 'RechercheLocale');
  initMetadataForClass(Periode, 'Periode');
  initMetadataForClass(Repere, 'Repere');
  initMetadataForObject(RepereTemporel, 'RepereTemporel');
  initMetadataForClass(RevueReduite, 'RevueReduite');
  initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Arriere, 'Arriere');
  initMetadataForClass(EntreeRevue, 'EntreeRevue');
  initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(FileRevue, 'FileRevue');
  initMetadataForClass(Suivi, 'Suivi');
  initMetadataForClass(OptionRelance, 'OptionRelance', VOID, Enum);
  initMetadataForClass(PropositionRelance, 'PropositionRelance');
  initMetadataForObject(Relance, 'Relance');
  initMetadataForObject(Texte, 'Texte');
  initMetadataForObject(ZeNoteRegles, 'ZeNoteRegles');
  //endregion
  function Companion() {
  }
  protoOf(Companion).xz = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ElementJson', this, 21);
    tmp0_serialDesc.lh('id', false);
    tmp0_serialDesc.lh('captureId', false);
    tmp0_serialDesc.lh('type', false);
    tmp0_serialDesc.lh('texte', false);
    tmp0_serialDesc.lh('debutCar', false);
    tmp0_serialDesc.lh('finCar', false);
    tmp0_serialDesc.lh('debutMs', true);
    tmp0_serialDesc.lh('finMs', true);
    tmp0_serialDesc.lh('echeance', true);
    tmp0_serialDesc.lh('echeanceConfiance', true);
    tmp0_serialDesc.lh('echeanceIndice', true);
    tmp0_serialDesc.lh('poids', true);
    tmp0_serialDesc.lh('poidsConfiance', true);
    tmp0_serialDesc.lh('poidsIndice', true);
    tmp0_serialDesc.lh('interlocuteur', true);
    tmp0_serialDesc.lh('interlocuteurConfiance', true);
    tmp0_serialDesc.lh('sphere', true);
    tmp0_serialDesc.lh('planDeclencheur', true);
    tmp0_serialDesc.lh('planAction', true);
    tmp0_serialDesc.lh('verdict', true);
    tmp0_serialDesc.lh('corrigeParHumain', true);
    this.yz_1 = tmp0_serialDesc;
  }
  protoOf($serializer).zz = function (encoder, value) {
    var tmp0_desc = this.yz_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    tmp1_output.ae(tmp0_desc, 0, value.a10_1);
    tmp1_output.ae(tmp0_desc, 1, value.b10_1);
    tmp1_output.ae(tmp0_desc, 2, value.c10_1);
    tmp1_output.ae(tmp0_desc, 3, value.d10_1);
    tmp1_output.zd(tmp0_desc, 4, value.e10_1);
    tmp1_output.zd(tmp0_desc, 5, value.f10_1);
    if (tmp1_output.he(tmp0_desc, 6) ? true : !(value.g10_1 == null)) {
      tmp1_output.de(tmp0_desc, 6, LongSerializer_getInstance(), value.g10_1);
    }
    if (tmp1_output.he(tmp0_desc, 7) ? true : !(value.h10_1 == null)) {
      tmp1_output.de(tmp0_desc, 7, LongSerializer_getInstance(), value.h10_1);
    }
    if (tmp1_output.he(tmp0_desc, 8) ? true : !(value.i10_1 == null)) {
      tmp1_output.de(tmp0_desc, 8, StringSerializer_getInstance(), value.i10_1);
    }
    if (tmp1_output.he(tmp0_desc, 9) ? true : !(value.j10_1 == null)) {
      tmp1_output.de(tmp0_desc, 9, DoubleSerializer_getInstance(), value.j10_1);
    }
    if (tmp1_output.he(tmp0_desc, 10) ? true : !(value.k10_1 == null)) {
      tmp1_output.de(tmp0_desc, 10, StringSerializer_getInstance(), value.k10_1);
    }
    if (tmp1_output.he(tmp0_desc, 11) ? true : !(value.l10_1 == null)) {
      tmp1_output.de(tmp0_desc, 11, StringSerializer_getInstance(), value.l10_1);
    }
    if (tmp1_output.he(tmp0_desc, 12) ? true : !(value.m10_1 == null)) {
      tmp1_output.de(tmp0_desc, 12, DoubleSerializer_getInstance(), value.m10_1);
    }
    if (tmp1_output.he(tmp0_desc, 13) ? true : !(value.n10_1 == null)) {
      tmp1_output.de(tmp0_desc, 13, StringSerializer_getInstance(), value.n10_1);
    }
    if (tmp1_output.he(tmp0_desc, 14) ? true : !(value.o10_1 == null)) {
      tmp1_output.de(tmp0_desc, 14, StringSerializer_getInstance(), value.o10_1);
    }
    if (tmp1_output.he(tmp0_desc, 15) ? true : !(value.p10_1 == null)) {
      tmp1_output.de(tmp0_desc, 15, DoubleSerializer_getInstance(), value.p10_1);
    }
    if (tmp1_output.he(tmp0_desc, 16) ? true : !(value.q10_1 == null)) {
      tmp1_output.de(tmp0_desc, 16, StringSerializer_getInstance(), value.q10_1);
    }
    if (tmp1_output.he(tmp0_desc, 17) ? true : !(value.r10_1 == null)) {
      tmp1_output.de(tmp0_desc, 17, StringSerializer_getInstance(), value.r10_1);
    }
    if (tmp1_output.he(tmp0_desc, 18) ? true : !(value.s10_1 == null)) {
      tmp1_output.de(tmp0_desc, 18, StringSerializer_getInstance(), value.s10_1);
    }
    if (tmp1_output.he(tmp0_desc, 19) ? true : !(value.t10_1 === 'EN_ATTENTE')) {
      tmp1_output.ae(tmp0_desc, 19, value.t10_1);
    }
    if (tmp1_output.he(tmp0_desc, 20) ? true : !(value.u10_1 === false)) {
      tmp1_output.yd(tmp0_desc, 20, value.u10_1);
    }
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer).ub = function (encoder, value) {
    return this.zz(encoder, value instanceof ElementJson ? value : THROW_CCE());
  };
  protoOf($serializer).vb = function (decoder) {
    var tmp0_desc = this.yz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = null;
    var tmp23_local19 = null;
    var tmp24_local20 = false;
    var tmp25_input = decoder.ed(tmp0_desc);
    if (tmp25_input.nd()) {
      tmp4_local0 = tmp25_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp25_input.id(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp25_input.id(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp25_input.id(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp25_input.hd(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp25_input.hd(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp25_input.ld(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp25_input.ld(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp25_input.ld(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp25_input.ld(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp25_input.ld(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp25_input.ld(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp25_input.ld(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp25_input.ld(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp25_input.ld(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp25_input.ld(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp25_input.ld(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp25_input.ld(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp25_input.ld(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp25_input.id(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp25_input.gd(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp25_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp25_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp25_input.id(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp25_input.id(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp25_input.id(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp25_input.hd(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp25_input.hd(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp25_input.ld(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp25_input.ld(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp25_input.ld(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp25_input.ld(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp25_input.ld(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp25_input.ld(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp25_input.ld(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp25_input.ld(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp25_input.ld(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp25_input.ld(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp25_input.ld(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp25_input.ld(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp25_input.ld(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp25_input.id(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp25_input.gd(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp25_input.fd(tmp0_desc);
    return ElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, null);
  };
  protoOf($serializer).tb = function () {
    return this.yz_1;
  };
  protoOf($serializer).nh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance().yz_1);
    }
    $this.a10_1 = id;
    $this.b10_1 = captureId;
    $this.c10_1 = type;
    $this.d10_1 = texte;
    $this.e10_1 = debutCar;
    $this.f10_1 = finCar;
    if (0 === (seen0 & 64))
      $this.g10_1 = null;
    else
      $this.g10_1 = debutMs;
    if (0 === (seen0 & 128))
      $this.h10_1 = null;
    else
      $this.h10_1 = finMs;
    if (0 === (seen0 & 256))
      $this.i10_1 = null;
    else
      $this.i10_1 = echeance;
    if (0 === (seen0 & 512))
      $this.j10_1 = null;
    else
      $this.j10_1 = echeanceConfiance;
    if (0 === (seen0 & 1024))
      $this.k10_1 = null;
    else
      $this.k10_1 = echeanceIndice;
    if (0 === (seen0 & 2048))
      $this.l10_1 = null;
    else
      $this.l10_1 = poids;
    if (0 === (seen0 & 4096))
      $this.m10_1 = null;
    else
      $this.m10_1 = poidsConfiance;
    if (0 === (seen0 & 8192))
      $this.n10_1 = null;
    else
      $this.n10_1 = poidsIndice;
    if (0 === (seen0 & 16384))
      $this.o10_1 = null;
    else
      $this.o10_1 = interlocuteur;
    if (0 === (seen0 & 32768))
      $this.p10_1 = null;
    else
      $this.p10_1 = interlocuteurConfiance;
    if (0 === (seen0 & 65536))
      $this.q10_1 = null;
    else
      $this.q10_1 = sphere;
    if (0 === (seen0 & 131072))
      $this.r10_1 = null;
    else
      $this.r10_1 = planDeclencheur;
    if (0 === (seen0 & 262144))
      $this.s10_1 = null;
    else
      $this.s10_1 = planAction;
    if (0 === (seen0 & 524288))
      $this.t10_1 = 'EN_ATTENTE';
    else
      $this.t10_1 = verdict;
    if (0 === (seen0 & 1048576))
      $this.u10_1 = false;
    else
      $this.u10_1 = corrigeParHumain;
    return $this;
  }
  function ElementJson_init_$Create$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker) {
    return ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker, objectCreate(protoOf(ElementJson)));
  }
  function ElementJson() {
  }
  protoOf(ElementJson).toString = function () {
    return 'ElementJson(id=' + this.a10_1 + ', captureId=' + this.b10_1 + ', type=' + this.c10_1 + ', texte=' + this.d10_1 + ', debutCar=' + this.e10_1 + ', finCar=' + this.f10_1 + ', debutMs=' + toString(this.g10_1) + ', finMs=' + toString(this.h10_1) + ', echeance=' + this.i10_1 + ', echeanceConfiance=' + this.j10_1 + ', echeanceIndice=' + this.k10_1 + ', poids=' + this.l10_1 + ', poidsConfiance=' + this.m10_1 + ', poidsIndice=' + this.n10_1 + ', interlocuteur=' + this.o10_1 + ', interlocuteurConfiance=' + this.p10_1 + ', sphere=' + this.q10_1 + ', planDeclencheur=' + this.r10_1 + ', planAction=' + this.s10_1 + ', verdict=' + this.t10_1 + ', corrigeParHumain=' + this.u10_1 + ')';
  };
  protoOf(ElementJson).hashCode = function () {
    var result = getStringHashCode(this.a10_1);
    result = imul(result, 31) + getStringHashCode(this.b10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d10_1) | 0;
    result = imul(result, 31) + this.e10_1 | 0;
    result = imul(result, 31) + this.f10_1 | 0;
    result = imul(result, 31) + (this.g10_1 == null ? 0 : this.g10_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h10_1 == null ? 0 : this.h10_1.hashCode()) | 0;
    result = imul(result, 31) + (this.i10_1 == null ? 0 : getStringHashCode(this.i10_1)) | 0;
    result = imul(result, 31) + (this.j10_1 == null ? 0 : getNumberHashCode(this.j10_1)) | 0;
    result = imul(result, 31) + (this.k10_1 == null ? 0 : getStringHashCode(this.k10_1)) | 0;
    result = imul(result, 31) + (this.l10_1 == null ? 0 : getStringHashCode(this.l10_1)) | 0;
    result = imul(result, 31) + (this.m10_1 == null ? 0 : getNumberHashCode(this.m10_1)) | 0;
    result = imul(result, 31) + (this.n10_1 == null ? 0 : getStringHashCode(this.n10_1)) | 0;
    result = imul(result, 31) + (this.o10_1 == null ? 0 : getStringHashCode(this.o10_1)) | 0;
    result = imul(result, 31) + (this.p10_1 == null ? 0 : getNumberHashCode(this.p10_1)) | 0;
    result = imul(result, 31) + (this.q10_1 == null ? 0 : getStringHashCode(this.q10_1)) | 0;
    result = imul(result, 31) + (this.r10_1 == null ? 0 : getStringHashCode(this.r10_1)) | 0;
    result = imul(result, 31) + (this.s10_1 == null ? 0 : getStringHashCode(this.s10_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.t10_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u10_1) | 0;
    return result;
  };
  protoOf(ElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof ElementJson ? other : THROW_CCE();
    if (!(this.a10_1 === tmp0_other_with_cast.a10_1))
      return false;
    if (!(this.b10_1 === tmp0_other_with_cast.b10_1))
      return false;
    if (!(this.c10_1 === tmp0_other_with_cast.c10_1))
      return false;
    if (!(this.d10_1 === tmp0_other_with_cast.d10_1))
      return false;
    if (!(this.e10_1 === tmp0_other_with_cast.e10_1))
      return false;
    if (!(this.f10_1 === tmp0_other_with_cast.f10_1))
      return false;
    if (!equals(this.g10_1, tmp0_other_with_cast.g10_1))
      return false;
    if (!equals(this.h10_1, tmp0_other_with_cast.h10_1))
      return false;
    if (!(this.i10_1 == tmp0_other_with_cast.i10_1))
      return false;
    if (!equals(this.j10_1, tmp0_other_with_cast.j10_1))
      return false;
    if (!(this.k10_1 == tmp0_other_with_cast.k10_1))
      return false;
    if (!(this.l10_1 == tmp0_other_with_cast.l10_1))
      return false;
    if (!equals(this.m10_1, tmp0_other_with_cast.m10_1))
      return false;
    if (!(this.n10_1 == tmp0_other_with_cast.n10_1))
      return false;
    if (!(this.o10_1 == tmp0_other_with_cast.o10_1))
      return false;
    if (!equals(this.p10_1, tmp0_other_with_cast.p10_1))
      return false;
    if (!(this.q10_1 == tmp0_other_with_cast.q10_1))
      return false;
    if (!(this.r10_1 == tmp0_other_with_cast.r10_1))
      return false;
    if (!(this.s10_1 == tmp0_other_with_cast.s10_1))
      return false;
    if (!(this.t10_1 === tmp0_other_with_cast.t10_1))
      return false;
    if (!(this.u10_1 === tmp0_other_with_cast.u10_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).xz = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PropositionJson', this, 5);
    tmp0_serialDesc.lh('elementId', false);
    tmp0_serialDesc.lh('texte', false);
    tmp0_serialDesc.lh('raison', false);
    tmp0_serialDesc.lh('poidsEffectif', false);
    tmp0_serialDesc.lh('urgence', false);
    this.v10_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).w10 = function (encoder, value) {
    var tmp0_desc = this.v10_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    tmp1_output.ae(tmp0_desc, 0, value.x10_1);
    tmp1_output.ae(tmp0_desc, 1, value.y10_1);
    tmp1_output.ae(tmp0_desc, 2, value.z10_1);
    tmp1_output.ae(tmp0_desc, 3, value.a11_1);
    tmp1_output.ae(tmp0_desc, 4, value.b11_1);
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_0).ub = function (encoder, value) {
    return this.w10(encoder, value instanceof PropositionJson ? value : THROW_CCE());
  };
  protoOf($serializer_0).vb = function (decoder) {
    var tmp0_desc = this.v10_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.ed(tmp0_desc);
    if (tmp9_input.nd()) {
      tmp4_local0 = tmp9_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.id(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.id(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.id(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.id(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.id(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.id(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.id(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.id(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.fd(tmp0_desc);
    return PropositionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).tb = function () {
    return this.v10_1;
  };
  protoOf($serializer_0).nh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_0().v10_1);
    }
    $this.x10_1 = elementId;
    $this.y10_1 = texte;
    $this.z10_1 = raison;
    $this.a11_1 = poidsEffectif;
    $this.b11_1 = urgence;
    return $this;
  }
  function PropositionJson_init_$Create$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker) {
    return PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, objectCreate(protoOf(PropositionJson)));
  }
  function PropositionJson(elementId, texte, raison, poidsEffectif, urgence) {
    this.x10_1 = elementId;
    this.y10_1 = texte;
    this.z10_1 = raison;
    this.a11_1 = poidsEffectif;
    this.b11_1 = urgence;
  }
  protoOf(PropositionJson).toString = function () {
    return 'PropositionJson(elementId=' + this.x10_1 + ', texte=' + this.y10_1 + ', raison=' + this.z10_1 + ', poidsEffectif=' + this.a11_1 + ', urgence=' + this.b11_1 + ')';
  };
  protoOf(PropositionJson).hashCode = function () {
    var result = getStringHashCode(this.x10_1);
    result = imul(result, 31) + getStringHashCode(this.y10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a11_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b11_1) | 0;
    return result;
  };
  protoOf(PropositionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionJson))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionJson ? other : THROW_CCE();
    if (!(this.x10_1 === tmp0_other_with_cast.x10_1))
      return false;
    if (!(this.y10_1 === tmp0_other_with_cast.y10_1))
      return false;
    if (!(this.z10_1 === tmp0_other_with_cast.z10_1))
      return false;
    if (!(this.a11_1 === tmp0_other_with_cast.a11_1))
      return false;
    if (!(this.b11_1 === tmp0_other_with_cast.b11_1))
      return false;
    return true;
  };
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EntreeRevueJson', this, 4);
    tmp0_serialDesc.lh('element', false);
    tmp0_serialDesc.lh('aConfirmer', false);
    tmp0_serialDesc.lh('planManquant', false);
    tmp0_serialDesc.lh('urgence', false);
    this.c11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).d11 = function (encoder, value) {
    var tmp0_desc = this.c11_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    tmp1_output.be(tmp0_desc, 0, $serializer_getInstance(), value.e11_1);
    tmp1_output.yd(tmp0_desc, 1, value.f11_1);
    tmp1_output.yd(tmp0_desc, 2, value.g11_1);
    tmp1_output.ae(tmp0_desc, 3, value.h11_1);
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_1).ub = function (encoder, value) {
    return this.d11(encoder, value instanceof EntreeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_1).vb = function (decoder) {
    var tmp0_desc = this.c11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.ed(tmp0_desc);
    if (tmp8_input.nd()) {
      tmp4_local0 = tmp8_input.jd(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.gd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.id(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.jd(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.gd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.gd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.id(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.fd(tmp0_desc);
    return EntreeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).tb = function () {
    return this.c11_1;
  };
  protoOf($serializer_1).nh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_1().c11_1);
    }
    $this.e11_1 = element;
    $this.f11_1 = aConfirmer;
    $this.g11_1 = planManquant;
    $this.h11_1 = urgence;
    return $this;
  }
  function EntreeRevueJson_init_$Create$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker) {
    return EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, objectCreate(protoOf(EntreeRevueJson)));
  }
  function EntreeRevueJson(element, aConfirmer, planManquant, urgence) {
    this.e11_1 = element;
    this.f11_1 = aConfirmer;
    this.g11_1 = planManquant;
    this.h11_1 = urgence;
  }
  protoOf(EntreeRevueJson).toString = function () {
    return 'EntreeRevueJson(element=' + this.e11_1.toString() + ', aConfirmer=' + this.f11_1 + ', planManquant=' + this.g11_1 + ', urgence=' + this.h11_1 + ')';
  };
  protoOf(EntreeRevueJson).hashCode = function () {
    var result = this.e11_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.f11_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g11_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h11_1) | 0;
    return result;
  };
  protoOf(EntreeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevueJson ? other : THROW_CCE();
    if (!this.e11_1.equals(tmp0_other_with_cast.e11_1))
      return false;
    if (!(this.f11_1 === tmp0_other_with_cast.f11_1))
      return false;
    if (!(this.g11_1 === tmp0_other_with_cast.g11_1))
      return false;
    if (!(this.h11_1 === tmp0_other_with_cast.h11_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i11_1 = [null, new ArrayListSerializer($serializer_getInstance_1())];
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.GroupeRevueJson', this, 2);
    tmp0_serialDesc.lh('captureId', false);
    tmp0_serialDesc.lh('entrees', false);
    this.j11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).k11 = function (encoder, value) {
    var tmp0_desc = this.j11_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().i11_1;
    tmp1_output.ae(tmp0_desc, 0, value.l11_1);
    tmp1_output.be(tmp0_desc, 1, tmp2_cached[1], value.m11_1);
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_2).ub = function (encoder, value) {
    return this.k11(encoder, value instanceof GroupeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_2).vb = function (decoder) {
    var tmp0_desc = this.j11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ed(tmp0_desc);
    var tmp7_cached = Companion_getInstance_3().i11_1;
    if (tmp6_input.nd()) {
      tmp4_local0 = tmp6_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.fd(tmp0_desc);
    return GroupeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).tb = function () {
    return this.j11_1;
  };
  protoOf($serializer_2).nh = function () {
    var tmp0_cached = Companion_getInstance_3().i11_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1]];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().j11_1);
    }
    $this.l11_1 = captureId;
    $this.m11_1 = entrees;
    return $this;
  }
  function GroupeRevueJson_init_$Create$(seen0, captureId, entrees, serializationConstructorMarker) {
    return GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, objectCreate(protoOf(GroupeRevueJson)));
  }
  function GroupeRevueJson(captureId, entrees) {
    Companion_getInstance_3();
    this.l11_1 = captureId;
    this.m11_1 = entrees;
  }
  protoOf(GroupeRevueJson).toString = function () {
    return 'GroupeRevueJson(captureId=' + this.l11_1 + ', entrees=' + toString_0(this.m11_1) + ')';
  };
  protoOf(GroupeRevueJson).hashCode = function () {
    var result = getStringHashCode(this.l11_1);
    result = imul(result, 31) + hashCode(this.m11_1) | 0;
    return result;
  };
  protoOf(GroupeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof GroupeRevueJson ? other : THROW_CCE();
    if (!(this.l11_1 === tmp0_other_with_cast.l11_1))
      return false;
    if (!equals(this.m11_1, tmp0_other_with_cast.m11_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n11_1 = [null, null, null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_3).xz = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RelanceJson', this, 7);
    tmp0_serialDesc.lh('elementId', false);
    tmp0_serialDesc.lh('texte', false);
    tmp0_serialDesc.lh('type', false);
    tmp0_serialDesc.lh('interlocuteur', true);
    tmp0_serialDesc.lh('echeance', true);
    tmp0_serialDesc.lh('motif', false);
    tmp0_serialDesc.lh('options', false);
    this.o11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).p11 = function (encoder, value) {
    var tmp0_desc = this.o11_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().n11_1;
    tmp1_output.ae(tmp0_desc, 0, value.q11_1);
    tmp1_output.ae(tmp0_desc, 1, value.r11_1);
    tmp1_output.ae(tmp0_desc, 2, value.s11_1);
    if (tmp1_output.he(tmp0_desc, 3) ? true : !(value.t11_1 == null)) {
      tmp1_output.de(tmp0_desc, 3, StringSerializer_getInstance(), value.t11_1);
    }
    if (tmp1_output.he(tmp0_desc, 4) ? true : !(value.u11_1 == null)) {
      tmp1_output.de(tmp0_desc, 4, StringSerializer_getInstance(), value.u11_1);
    }
    tmp1_output.ae(tmp0_desc, 5, value.v11_1);
    tmp1_output.be(tmp0_desc, 6, tmp2_cached[6], value.w11_1);
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_3).ub = function (encoder, value) {
    return this.p11(encoder, value instanceof RelanceJson ? value : THROW_CCE());
  };
  protoOf($serializer_3).vb = function (decoder) {
    var tmp0_desc = this.o11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.ed(tmp0_desc);
    var tmp12_cached = Companion_getInstance_4().n11_1;
    if (tmp11_input.nd()) {
      tmp4_local0 = tmp11_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.id(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.id(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.ld(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.ld(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.id(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.jd(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.id(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.id(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.ld(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.ld(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.id(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.jd(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.fd(tmp0_desc);
    return RelanceJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_3).tb = function () {
    return this.o11_1;
  };
  protoOf($serializer_3).nh = function () {
    var tmp0_cached = Companion_getInstance_4().n11_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[6]];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, $this) {
    if (!(103 === (103 & seen0))) {
      throwMissingFieldException(seen0, 103, $serializer_getInstance_3().o11_1);
    }
    $this.q11_1 = elementId;
    $this.r11_1 = texte;
    $this.s11_1 = type;
    if (0 === (seen0 & 8))
      $this.t11_1 = null;
    else
      $this.t11_1 = interlocuteur;
    if (0 === (seen0 & 16))
      $this.u11_1 = null;
    else
      $this.u11_1 = echeance;
    $this.v11_1 = motif;
    $this.w11_1 = options;
    return $this;
  }
  function RelanceJson_init_$Create$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker) {
    return RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, objectCreate(protoOf(RelanceJson)));
  }
  function RelanceJson(elementId, texte, type, interlocuteur, echeance, motif, options) {
    Companion_getInstance_4();
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    echeance = echeance === VOID ? null : echeance;
    this.q11_1 = elementId;
    this.r11_1 = texte;
    this.s11_1 = type;
    this.t11_1 = interlocuteur;
    this.u11_1 = echeance;
    this.v11_1 = motif;
    this.w11_1 = options;
  }
  protoOf(RelanceJson).toString = function () {
    return 'RelanceJson(elementId=' + this.q11_1 + ', texte=' + this.r11_1 + ', type=' + this.s11_1 + ', interlocuteur=' + this.t11_1 + ', echeance=' + this.u11_1 + ', motif=' + this.v11_1 + ', options=' + toString_0(this.w11_1) + ')';
  };
  protoOf(RelanceJson).hashCode = function () {
    var result = getStringHashCode(this.q11_1);
    result = imul(result, 31) + getStringHashCode(this.r11_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s11_1) | 0;
    result = imul(result, 31) + (this.t11_1 == null ? 0 : getStringHashCode(this.t11_1)) | 0;
    result = imul(result, 31) + (this.u11_1 == null ? 0 : getStringHashCode(this.u11_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.v11_1) | 0;
    result = imul(result, 31) + hashCode(this.w11_1) | 0;
    return result;
  };
  protoOf(RelanceJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelanceJson))
      return false;
    var tmp0_other_with_cast = other instanceof RelanceJson ? other : THROW_CCE();
    if (!(this.q11_1 === tmp0_other_with_cast.q11_1))
      return false;
    if (!(this.r11_1 === tmp0_other_with_cast.r11_1))
      return false;
    if (!(this.s11_1 === tmp0_other_with_cast.s11_1))
      return false;
    if (!(this.t11_1 == tmp0_other_with_cast.t11_1))
      return false;
    if (!(this.u11_1 == tmp0_other_with_cast.u11_1))
      return false;
    if (!(this.v11_1 === tmp0_other_with_cast.v11_1))
      return false;
    if (!equals(this.w11_1, tmp0_other_with_cast.w11_1))
      return false;
    return true;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).xz = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviJson', this, 2);
    tmp0_serialDesc.lh('elementId', false);
    tmp0_serialDesc.lh('derniereNouvelle', false);
    this.x11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).y11 = function (encoder, value) {
    var tmp0_desc = this.x11_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    tmp1_output.ae(tmp0_desc, 0, value.z11_1);
    tmp1_output.ae(tmp0_desc, 1, value.a12_1);
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_4).ub = function (encoder, value) {
    return this.y11(encoder, value instanceof SuiviJson ? value : THROW_CCE());
  };
  protoOf($serializer_4).vb = function (decoder) {
    var tmp0_desc = this.x11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ed(tmp0_desc);
    if (tmp6_input.nd()) {
      tmp4_local0 = tmp6_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.id(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.id(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.fd(tmp0_desc);
    return SuiviJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).tb = function () {
    return this.x11_1;
  };
  protoOf($serializer_4).nh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_4().x11_1);
    }
    $this.z11_1 = elementId;
    $this.a12_1 = derniereNouvelle;
    return $this;
  }
  function SuiviJson_init_$Create$(seen0, elementId, derniereNouvelle, serializationConstructorMarker) {
    return SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, objectCreate(protoOf(SuiviJson)));
  }
  function SuiviJson() {
  }
  protoOf(SuiviJson).toString = function () {
    return 'SuiviJson(elementId=' + this.z11_1 + ', derniereNouvelle=' + this.a12_1 + ')';
  };
  protoOf(SuiviJson).hashCode = function () {
    var result = getStringHashCode(this.z11_1);
    result = imul(result, 31) + getStringHashCode(this.a12_1) | 0;
    return result;
  };
  protoOf(SuiviJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviJson ? other : THROW_CCE();
    if (!(this.z11_1 === tmp0_other_with_cast.z11_1))
      return false;
    if (!(this.a12_1 === tmp0_other_with_cast.a12_1))
      return false;
    return true;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b12_1 = [new ArrayListSerializer($serializer_getInstance_2()), null, null, null, null];
  }
  protoOf(Companion_5).xz = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RevueJson', this, 5);
    tmp0_serialDesc.lh('groupes', false);
    tmp0_serialDesc.lh('total', false);
    tmp0_serialDesc.lh('reduite', true);
    tmp0_serialDesc.lh('motifReduction', true);
    tmp0_serialDesc.lh('demeurentEnFile', true);
    this.c12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).d12 = function (encoder, value) {
    var tmp0_desc = this.c12_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().b12_1;
    tmp1_output.be(tmp0_desc, 0, tmp2_cached[0], value.e12_1);
    tmp1_output.zd(tmp0_desc, 1, value.f12_1);
    if (tmp1_output.he(tmp0_desc, 2) ? true : !(value.g12_1 === false)) {
      tmp1_output.yd(tmp0_desc, 2, value.g12_1);
    }
    if (tmp1_output.he(tmp0_desc, 3) ? true : !(value.h12_1 === '')) {
      tmp1_output.ae(tmp0_desc, 3, value.h12_1);
    }
    if (tmp1_output.he(tmp0_desc, 4) ? true : !(value.i12_1 === 0)) {
      tmp1_output.zd(tmp0_desc, 4, value.i12_1);
    }
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_5).ub = function (encoder, value) {
    return this.d12(encoder, value instanceof RevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_5).vb = function (decoder) {
    var tmp0_desc = this.c12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.ed(tmp0_desc);
    var tmp10_cached = Companion_getInstance_6().b12_1;
    if (tmp9_input.nd()) {
      tmp4_local0 = tmp9_input.jd(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.hd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.id(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.hd(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jd(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.hd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.id(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.hd(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.fd(tmp0_desc);
    return RevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_5).tb = function () {
    return this.c12_1;
  };
  protoOf($serializer_5).nh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_6().b12_1[0], IntSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().c12_1);
    }
    $this.e12_1 = groupes;
    $this.f12_1 = total;
    if (0 === (seen0 & 4))
      $this.g12_1 = false;
    else
      $this.g12_1 = reduite;
    if (0 === (seen0 & 8))
      $this.h12_1 = '';
    else
      $this.h12_1 = motifReduction;
    if (0 === (seen0 & 16))
      $this.i12_1 = 0;
    else
      $this.i12_1 = demeurentEnFile;
    return $this;
  }
  function RevueJson_init_$Create$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker) {
    return RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, objectCreate(protoOf(RevueJson)));
  }
  function RevueJson(groupes, total, reduite, motifReduction, demeurentEnFile) {
    Companion_getInstance_6();
    reduite = reduite === VOID ? false : reduite;
    motifReduction = motifReduction === VOID ? '' : motifReduction;
    demeurentEnFile = demeurentEnFile === VOID ? 0 : demeurentEnFile;
    this.e12_1 = groupes;
    this.f12_1 = total;
    this.g12_1 = reduite;
    this.h12_1 = motifReduction;
    this.i12_1 = demeurentEnFile;
  }
  protoOf(RevueJson).toString = function () {
    return 'RevueJson(groupes=' + toString_0(this.e12_1) + ', total=' + this.f12_1 + ', reduite=' + this.g12_1 + ', motifReduction=' + this.h12_1 + ', demeurentEnFile=' + this.i12_1 + ')';
  };
  protoOf(RevueJson).hashCode = function () {
    var result = hashCode(this.e12_1);
    result = imul(result, 31) + this.f12_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g12_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h12_1) | 0;
    result = imul(result, 31) + this.i12_1 | 0;
    return result;
  };
  protoOf(RevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof RevueJson ? other : THROW_CCE();
    if (!equals(this.e12_1, tmp0_other_with_cast.e12_1))
      return false;
    if (!(this.f12_1 === tmp0_other_with_cast.f12_1))
      return false;
    if (!(this.g12_1 === tmp0_other_with_cast.g12_1))
      return false;
    if (!(this.h12_1 === tmp0_other_with_cast.h12_1))
      return false;
    if (!(this.i12_1 === tmp0_other_with_cast.i12_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j12_1 = [new ArrayListSerializer($serializer_getInstance()), new ArrayListSerializer($serializer_getInstance_7())];
  }
  protoOf(Companion_6).xz = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.AncrageJson', this, 2);
    tmp0_serialDesc.lh('retenus', false);
    tmp0_serialDesc.lh('ecartes', false);
    this.k12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).l12 = function (encoder, value) {
    var tmp0_desc = this.k12_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().j12_1;
    tmp1_output.be(tmp0_desc, 0, tmp2_cached[0], value.m12_1);
    tmp1_output.be(tmp0_desc, 1, tmp2_cached[1], value.n12_1);
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_6).ub = function (encoder, value) {
    return this.l12(encoder, value instanceof AncrageJson ? value : THROW_CCE());
  };
  protoOf($serializer_6).vb = function (decoder) {
    var tmp0_desc = this.k12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ed(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().j12_1;
    if (tmp6_input.nd()) {
      tmp4_local0 = tmp6_input.jd(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jd(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.fd(tmp0_desc);
    return AncrageJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).tb = function () {
    return this.k12_1;
  };
  protoOf($serializer_6).nh = function () {
    var tmp0_cached = Companion_getInstance_7().j12_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1]];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().k12_1);
    }
    $this.m12_1 = retenus;
    $this.n12_1 = ecartes;
    return $this;
  }
  function AncrageJson_init_$Create$(seen0, retenus, ecartes, serializationConstructorMarker) {
    return AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, objectCreate(protoOf(AncrageJson)));
  }
  function AncrageJson(retenus, ecartes) {
    Companion_getInstance_7();
    this.m12_1 = retenus;
    this.n12_1 = ecartes;
  }
  protoOf(AncrageJson).toString = function () {
    return 'AncrageJson(retenus=' + toString_0(this.m12_1) + ', ecartes=' + toString_0(this.n12_1) + ')';
  };
  protoOf(AncrageJson).hashCode = function () {
    var result = hashCode(this.m12_1);
    result = imul(result, 31) + hashCode(this.n12_1) | 0;
    return result;
  };
  protoOf(AncrageJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AncrageJson))
      return false;
    var tmp0_other_with_cast = other instanceof AncrageJson ? other : THROW_CCE();
    if (!equals(this.m12_1, tmp0_other_with_cast.m12_1))
      return false;
    if (!equals(this.n12_1, tmp0_other_with_cast.n12_1))
      return false;
    return true;
  };
  function Companion_7() {
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EcarteJson', this, 2);
    tmp0_serialDesc.lh('texte', false);
    tmp0_serialDesc.lh('raison', false);
    this.o12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).p12 = function (encoder, value) {
    var tmp0_desc = this.o12_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    tmp1_output.ae(tmp0_desc, 0, value.q12_1);
    tmp1_output.ae(tmp0_desc, 1, value.r12_1);
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_7).ub = function (encoder, value) {
    return this.p12(encoder, value instanceof EcarteJson ? value : THROW_CCE());
  };
  protoOf($serializer_7).vb = function (decoder) {
    var tmp0_desc = this.o12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ed(tmp0_desc);
    if (tmp6_input.nd()) {
      tmp4_local0 = tmp6_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.id(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.id(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.fd(tmp0_desc);
    return EcarteJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).tb = function () {
    return this.o12_1;
  };
  protoOf($serializer_7).nh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_7().o12_1);
    }
    $this.q12_1 = texte;
    $this.r12_1 = raison;
    return $this;
  }
  function EcarteJson_init_$Create$(seen0, texte, raison, serializationConstructorMarker) {
    return EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, objectCreate(protoOf(EcarteJson)));
  }
  function EcarteJson(texte, raison) {
    this.q12_1 = texte;
    this.r12_1 = raison;
  }
  protoOf(EcarteJson).toString = function () {
    return 'EcarteJson(texte=' + this.q12_1 + ', raison=' + this.r12_1 + ')';
  };
  protoOf(EcarteJson).hashCode = function () {
    var result = getStringHashCode(this.q12_1);
    result = imul(result, 31) + getStringHashCode(this.r12_1) | 0;
    return result;
  };
  protoOf(EcarteJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EcarteJson))
      return false;
    var tmp0_other_with_cast = other instanceof EcarteJson ? other : THROW_CCE();
    if (!(this.q12_1 === tmp0_other_with_cast.q12_1))
      return false;
    if (!(this.r12_1 === tmp0_other_with_cast.r12_1))
      return false;
    return true;
  };
  function Companion_8() {
  }
  protoOf(Companion_8).xz = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CaptureJson', this, 4);
    tmp0_serialDesc.lh('id', false);
    tmp0_serialDesc.lh('texte', false);
    tmp0_serialDesc.lh('creeLe', false);
    tmp0_serialDesc.lh('jour', true);
    this.s12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).t12 = function (encoder, value) {
    var tmp0_desc = this.s12_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    tmp1_output.ae(tmp0_desc, 0, value.u12_1);
    tmp1_output.ae(tmp0_desc, 1, value.v12_1);
    tmp1_output.ae(tmp0_desc, 2, value.w12_1);
    if (tmp1_output.he(tmp0_desc, 3) ? true : !(value.x12_1 == null)) {
      tmp1_output.de(tmp0_desc, 3, StringSerializer_getInstance(), value.x12_1);
    }
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_8).ub = function (encoder, value) {
    return this.t12(encoder, value instanceof CaptureJson ? value : THROW_CCE());
  };
  protoOf($serializer_8).vb = function (decoder) {
    var tmp0_desc = this.s12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.ed(tmp0_desc);
    if (tmp8_input.nd()) {
      tmp4_local0 = tmp8_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.id(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.id(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ld(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.id(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.id(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ld(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.fd(tmp0_desc);
    return CaptureJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).tb = function () {
    return this.s12_1;
  };
  protoOf($serializer_8).nh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function CaptureJson_init_$Init$(seen0, id, texte, creeLe, jour, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_8().s12_1);
    }
    $this.u12_1 = id;
    $this.v12_1 = texte;
    $this.w12_1 = creeLe;
    if (0 === (seen0 & 8))
      $this.x12_1 = null;
    else
      $this.x12_1 = jour;
    return $this;
  }
  function CaptureJson_init_$Create$(seen0, id, texte, creeLe, jour, serializationConstructorMarker) {
    return CaptureJson_init_$Init$(seen0, id, texte, creeLe, jour, serializationConstructorMarker, objectCreate(protoOf(CaptureJson)));
  }
  function CaptureJson() {
  }
  protoOf(CaptureJson).toString = function () {
    return 'CaptureJson(id=' + this.u12_1 + ', texte=' + this.v12_1 + ', creeLe=' + this.w12_1 + ', jour=' + this.x12_1 + ')';
  };
  protoOf(CaptureJson).hashCode = function () {
    var result = getStringHashCode(this.u12_1);
    result = imul(result, 31) + getStringHashCode(this.v12_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w12_1) | 0;
    result = imul(result, 31) + (this.x12_1 == null ? 0 : getStringHashCode(this.x12_1)) | 0;
    return result;
  };
  protoOf(CaptureJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureJson))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureJson ? other : THROW_CCE();
    if (!(this.u12_1 === tmp0_other_with_cast.u12_1))
      return false;
    if (!(this.v12_1 === tmp0_other_with_cast.v12_1))
      return false;
    if (!(this.w12_1 === tmp0_other_with_cast.w12_1))
      return false;
    if (!(this.x12_1 == tmp0_other_with_cast.x12_1))
      return false;
    return true;
  };
  function Companion_9() {
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CitationJson', this, 4);
    tmp0_serialDesc.lh('captureId', false);
    tmp0_serialDesc.lh('extrait', false);
    tmp0_serialDesc.lh('pourquoi', false);
    tmp0_serialDesc.lh('elementId', true);
    this.y12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).z12 = function (encoder, value) {
    var tmp0_desc = this.y12_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    tmp1_output.ae(tmp0_desc, 0, value.a13_1);
    tmp1_output.ae(tmp0_desc, 1, value.b13_1);
    tmp1_output.ae(tmp0_desc, 2, value.c13_1);
    if (tmp1_output.he(tmp0_desc, 3) ? true : !(value.d13_1 == null)) {
      tmp1_output.de(tmp0_desc, 3, StringSerializer_getInstance(), value.d13_1);
    }
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_9).ub = function (encoder, value) {
    return this.z12(encoder, value instanceof CitationJson ? value : THROW_CCE());
  };
  protoOf($serializer_9).vb = function (decoder) {
    var tmp0_desc = this.y12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.ed(tmp0_desc);
    if (tmp8_input.nd()) {
      tmp4_local0 = tmp8_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.id(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.id(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ld(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.id(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.id(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ld(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.fd(tmp0_desc);
    return CitationJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).tb = function () {
    return this.y12_1;
  };
  protoOf($serializer_9).nh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_9().y12_1);
    }
    $this.a13_1 = captureId;
    $this.b13_1 = extrait;
    $this.c13_1 = pourquoi;
    if (0 === (seen0 & 8))
      $this.d13_1 = null;
    else
      $this.d13_1 = elementId;
    return $this;
  }
  function CitationJson_init_$Create$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker) {
    return CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, objectCreate(protoOf(CitationJson)));
  }
  function CitationJson(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.a13_1 = captureId;
    this.b13_1 = extrait;
    this.c13_1 = pourquoi;
    this.d13_1 = elementId;
  }
  protoOf(CitationJson).toString = function () {
    return 'CitationJson(captureId=' + this.a13_1 + ', extrait=' + this.b13_1 + ', pourquoi=' + this.c13_1 + ', elementId=' + this.d13_1 + ')';
  };
  protoOf(CitationJson).hashCode = function () {
    var result = getStringHashCode(this.a13_1);
    result = imul(result, 31) + getStringHashCode(this.b13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c13_1) | 0;
    result = imul(result, 31) + (this.d13_1 == null ? 0 : getStringHashCode(this.d13_1)) | 0;
    return result;
  };
  protoOf(CitationJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CitationJson))
      return false;
    var tmp0_other_with_cast = other instanceof CitationJson ? other : THROW_CCE();
    if (!(this.a13_1 === tmp0_other_with_cast.a13_1))
      return false;
    if (!(this.b13_1 === tmp0_other_with_cast.b13_1))
      return false;
    if (!(this.c13_1 === tmp0_other_with_cast.c13_1))
      return false;
    if (!(this.d13_1 == tmp0_other_with_cast.d13_1))
      return false;
    return true;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e13_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_9()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_10).xz = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ReponseJson', this, 6);
    tmp0_serialDesc.lh('question', false);
    tmp0_serialDesc.lh('enonce', false);
    tmp0_serialDesc.lh('fondee', false);
    tmp0_serialDesc.lh('citations', false);
    tmp0_serialDesc.lh('indisponibleHorsLigne', true);
    tmp0_serialDesc.lh('nonPrisEnCompte', true);
    this.f13_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).g13 = function (encoder, value) {
    var tmp0_desc = this.f13_1;
    var tmp1_output = encoder.ed(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().e13_1;
    tmp1_output.ae(tmp0_desc, 0, value.h13_1);
    tmp1_output.ae(tmp0_desc, 1, value.i13_1);
    tmp1_output.yd(tmp0_desc, 2, value.j13_1);
    tmp1_output.be(tmp0_desc, 3, tmp2_cached[3], value.k13_1);
    if (tmp1_output.he(tmp0_desc, 4) ? true : !equals(value.l13_1, emptyList())) {
      tmp1_output.be(tmp0_desc, 4, tmp2_cached[4], value.l13_1);
    }
    if (tmp1_output.he(tmp0_desc, 5) ? true : !equals(value.m13_1, emptyList())) {
      tmp1_output.be(tmp0_desc, 5, tmp2_cached[5], value.m13_1);
    }
    tmp1_output.fd(tmp0_desc);
  };
  protoOf($serializer_10).ub = function (encoder, value) {
    return this.g13(encoder, value instanceof ReponseJson ? value : THROW_CCE());
  };
  protoOf($serializer_10).vb = function (decoder) {
    var tmp0_desc = this.f13_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.ed(tmp0_desc);
    var tmp11_cached = Companion_getInstance_11().e13_1;
    if (tmp10_input.nd()) {
      tmp4_local0 = tmp10_input.id(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.id(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.gd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.jd(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.jd(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.jd(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.od(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.id(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.id(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.gd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.jd(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.jd(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.jd(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.fd(tmp0_desc);
    return ReponseJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_10).tb = function () {
    return this.f13_1;
  };
  protoOf($serializer_10).nh = function () {
    var tmp0_cached = Companion_getInstance_11().e13_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3], tmp0_cached[4], tmp0_cached[5]];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_10().f13_1);
    }
    $this.h13_1 = question;
    $this.i13_1 = enonce;
    $this.j13_1 = fondee;
    $this.k13_1 = citations;
    if (0 === (seen0 & 16))
      $this.l13_1 = emptyList();
    else
      $this.l13_1 = indisponibleHorsLigne;
    if (0 === (seen0 & 32))
      $this.m13_1 = emptyList();
    else
      $this.m13_1 = nonPrisEnCompte;
    return $this;
  }
  function ReponseJson_init_$Create$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker) {
    return ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker, objectCreate(protoOf(ReponseJson)));
  }
  function ReponseJson(question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    Companion_getInstance_11();
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.h13_1 = question;
    this.i13_1 = enonce;
    this.j13_1 = fondee;
    this.k13_1 = citations;
    this.l13_1 = indisponibleHorsLigne;
    this.m13_1 = nonPrisEnCompte;
  }
  protoOf(ReponseJson).toString = function () {
    return 'ReponseJson(question=' + this.h13_1 + ', enonce=' + this.i13_1 + ', fondee=' + this.j13_1 + ', citations=' + toString_0(this.k13_1) + ', indisponibleHorsLigne=' + toString_0(this.l13_1) + ', nonPrisEnCompte=' + toString_0(this.m13_1) + ')';
  };
  protoOf(ReponseJson).hashCode = function () {
    var result = getStringHashCode(this.h13_1);
    result = imul(result, 31) + getStringHashCode(this.i13_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j13_1) | 0;
    result = imul(result, 31) + hashCode(this.k13_1) | 0;
    result = imul(result, 31) + hashCode(this.l13_1) | 0;
    result = imul(result, 31) + hashCode(this.m13_1) | 0;
    return result;
  };
  protoOf(ReponseJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReponseJson))
      return false;
    var tmp0_other_with_cast = other instanceof ReponseJson ? other : THROW_CCE();
    if (!(this.h13_1 === tmp0_other_with_cast.h13_1))
      return false;
    if (!(this.i13_1 === tmp0_other_with_cast.i13_1))
      return false;
    if (!(this.j13_1 === tmp0_other_with_cast.j13_1))
      return false;
    if (!equals(this.k13_1, tmp0_other_with_cast.k13_1))
      return false;
    if (!equals(this.l13_1, tmp0_other_with_cast.l13_1))
      return false;
    if (!equals(this.m13_1, tmp0_other_with_cast.m13_1))
      return false;
    return true;
  };
  function sources($this, capturesJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.n13_1.kq(ListSerializer(Companion_instance_9.xz()), capturesJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.sources.<anonymous>' call
      var tmp = new CaptureId(item.u12_1);
      var tmp0_safe_receiver = item.x12_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp1_let_receiver = Companion_getInstance();
        // Inline function 'kotlin.let' call
        tmp_0 = sources$parse(tmp1_let_receiver, tmp0_safe_receiver);
      }
      var tmp$ret$1 = new TexteSource(tmp, item.v12_1, item.w12_1, tmp_0);
      destination.e(tmp$ret$1);
    }
    return destination;
  }
  function rendre($this, reponse) {
    var tmp = Companion_getInstance_11().xz();
    var tmp_0 = reponse.t13();
    // Inline function 'kotlin.collections.map' call
    var this_0 = reponse.q13_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rendre.<anonymous>' call
      var tmp0_safe_receiver = item.x13_1;
      var tmp$ret$0 = new CitationJson(item.u13_1.y13_1, item.v13_1, item.w13_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z13_1);
      destination.e(tmp$ret$0);
    }
    return $this.n13_1.jq(tmp, new ReponseJson(reponse.o13_1, reponse.p13_1, tmp_0, destination, reponse.r13_1, reponse.s13_1));
  }
  function decoder($this, elementsJson) {
    return $this.n13_1.kq(ListSerializer(Companion_instance_0.xz()), elementsJson);
  }
  function raisonDeRejet($this, dto, texteSource) {
    var tmp;
    if (isBlank(dto.d10_1)) {
      tmp = '\xE9l\xE9ment sans texte';
    } else {
      if (dto.e10_1 < 0 || dto.f10_1 <= dto.e10_1) {
        tmp = 'passage source vide ou incoh\xE9rent';
      } else {
        if (dto.f10_1 > texteSource.length) {
          tmp = 'passage source absent du texte de la capture';
        } else {
          // Inline function 'kotlin.runCatching' call
          var tmp_0;
          try {
            // Inline function 'app.zenote.core.api.Regles.raisonDeRejet.<anonymous>' call
            // Inline function 'kotlin.Companion.success' call
            var value = valueOf(dto.c10_1);
            tmp_0 = _Result___init__impl__xyqfz8(value);
          } catch ($p) {
            var tmp_1;
            if ($p instanceof Error) {
              var e = $p;
              // Inline function 'kotlin.Companion.failure' call
              tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
            } else {
              throw $p;
            }
            tmp_0 = tmp_1;
          }
          var tmp$ret$3 = tmp_0;
          if (_Result___get_isFailure__impl__jpiriv(tmp$ret$3)) {
            tmp = 'type inconnu : ' + dto.c10_1;
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  }
  function urgenceOrdinale($this, nom) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'app.zenote.core.api.Regles.urgenceOrdinale.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = valueOf_3(nom).y1_1;
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp2 = tmp;
    var tmp3 = 2147483647;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.getOrDefault' call
      if (_Result___get_isFailure__impl__jpiriv(tmp2)) {
        tmp$ret$4 = tmp3;
        break $l$block;
      }
      var tmp_1 = _Result___get_value__impl__bjfvqg(tmp2);
      tmp$ret$4 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    }
    return tmp$ret$4;
  }
  function aConfirmer(_this__u8e3s4, $this) {
    var tmp0 = listOfNotNull([_this__u8e3s4.j10_1, _this__u8e3s4.m10_1, _this__u8e3s4.p10_1]);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.api.Regles.aConfirmer.<anonymous>' call
        if (element < 0.75) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function versResolu(_this__u8e3s4, $this) {
    var tmp = new CaptureId(_this__u8e3s4.b10_1);
    var tmp_0 = valueOf(_this__u8e3s4.c10_1);
    var tmp_1 = new Passage(_this__u8e3s4.e10_1, _this__u8e3s4.f10_1, _this__u8e3s4.g10_1, _this__u8e3s4.h10_1);
    var tmp0_safe_receiver = _this__u8e3s4.i10_1;
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_3 = Companion_getInstance().dq(tmp0_safe_receiver);
      var tmp0_elvis_lhs = _this__u8e3s4.j10_1;
      var tmp_4 = tmp0_elvis_lhs == null ? 1.0 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.k10_1;
      tmp_2 = new Deduit(tmp_3, tmp_4, tmp1_elvis_lhs == null ? 'fourni' : tmp1_elvis_lhs);
    }
    var tmp_5 = tmp_2;
    var tmp1_safe_receiver = _this__u8e3s4.l10_1;
    var tmp_6;
    if (tmp1_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_7 = valueOf_0(tmp1_safe_receiver);
      var tmp0_elvis_lhs_0 = _this__u8e3s4.m10_1;
      var tmp_8 = tmp0_elvis_lhs_0 == null ? 1.0 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs_0 = _this__u8e3s4.n10_1;
      tmp_6 = new Deduit(tmp_7, tmp_8, tmp1_elvis_lhs_0 == null ? 'fourni' : tmp1_elvis_lhs_0);
    }
    var tmp_9 = tmp_6;
    var tmp2_safe_receiver = _this__u8e3s4.o10_1;
    var tmp_10;
    if (tmp2_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4.p10_1;
      tmp_10 = new Deduit(tmp2_safe_receiver, tmp0_elvis_lhs_1 == null ? 1.0 : tmp0_elvis_lhs_1, 'nomm\xE9');
    }
    var tmp_11 = tmp_10;
    var tmp3_safe_receiver = _this__u8e3s4.q10_1;
    var tmp_12;
    if (tmp3_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      tmp_12 = new Deduit(valueOf_1(tmp3_safe_receiver), 1.0, 'd\xE9duit');
    }
    var tmp_13 = tmp_12;
    var tmp4_safe_receiver = _this__u8e3s4.r10_1;
    var tmp_14;
    if (tmp4_safe_receiver == null) {
      tmp_14 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.s10_1;
      var tmp_15;
      if (tmp0_safe_receiver_0 == null) {
        tmp_15 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>.<anonymous>' call
        tmp_15 = new Deduit(new Plan(tmp4_safe_receiver, tmp0_safe_receiver_0), 1.0, 'plan pos\xE9 en Revue');
      }
      tmp_14 = tmp_15;
    }
    var derive = new ElementDerive(tmp, tmp_0, _this__u8e3s4.d10_1, tmp_1, tmp_5, tmp_9, tmp_11, tmp_13, tmp_14);
    var tmp_16 = new ElementId(_this__u8e3s4.a10_1);
    var tmp5_safe_receiver = derive.e14_1;
    var tmp_17 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.k14_1;
    var tmp6_safe_receiver = derive.f14_1;
    var tmp_18 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.k14_1;
    var tmp7_safe_receiver = derive.g14_1;
    var tmp_19 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.k14_1;
    var tmp8_safe_receiver = derive.h14_1;
    var tmp_20 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.k14_1;
    var tmp9_safe_receiver = derive.i14_1;
    return new ElementResolu(tmp_16, derive.a14_1, derive.b14_1, derive.c14_1, derive.d14_1, tmp_17, tmp_18, tmp_19, tmp_20, tmp9_safe_receiver == null ? null : tmp9_safe_receiver.k14_1, valueOf_2(_this__u8e3s4.t10_1), aConfirmer(_this__u8e3s4, $this), _this__u8e3s4.u10_1, _this__u8e3s4.u10_1 && !(_this__u8e3s4.l10_1 == null) ? 'poids fix\xE9 \xE0 la main' : _this__u8e3s4.n10_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.n14_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ia = function (a, b) {
    return this.n14_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ia(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).p2 = function () {
    return this.n14_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.p2(), other.p2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.p2());
  };
  function sources$parse(receiver, p0) {
    return receiver.dq(p0);
  }
  function Regles$json$lambda($this$Json) {
    $this$Json.cr_1 = true;
    $this$Json.ar_1 = true;
    return Unit_instance;
  }
  function Regles$revue$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp = urgenceOrdinale(Regles_getInstance(), a.h11_1);
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp$ret$1 = urgenceOrdinale(Regles_getInstance(), b.h11_1);
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles$revue$lambda_0($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp_0 = b.f11_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = a.f11_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_1($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp_0 = a.e11_1.a10_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = b.e11_1.a10_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = a.m11_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it = iterator.i();
    var minValue = urgenceOrdinale(Regles_getInstance(), it.h11_1);
    while (iterator.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_0 = iterator.i();
      var v = urgenceOrdinale(Regles_getInstance(), it_0.h11_1);
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var tmp = minValue;
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator_0 = b.m11_1.g();
    if (!iterator_0.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it_1 = iterator_0.i();
    var minValue_0 = urgenceOrdinale(Regles_getInstance(), it_1.h11_1);
    while (iterator_0.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.i();
      var v_0 = urgenceOrdinale(Regles_getInstance(), it_2.h11_1);
      if (compareTo(minValue_0, v_0) > 0) {
        minValue_0 = v_0;
      }
    }
    var tmp$ret$7 = minValue_0;
    return compareValues(tmp, tmp$ret$7);
  }
  function Regles$revue$lambda_3($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp_0 = a.l11_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp$ret$1 = b.l11_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles() {
    Regles_instance = this;
    var tmp = this;
    tmp.n13_1 = Json(VOID, Regles$json$lambda);
  }
  protoOf(Regles).o14 = function (elementsJson, aujourdhui) {
    var elements = decoder(this, elementsJson);
    var tmp = Priorisation_getInstance();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$0 = versResolu(item, Regles_getInstance());
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = tmp.r14(destination, new ContexteMaintenant(Companion_getInstance().dq(aujourdhui)));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$3 = new PropositionJson(item_0.g15_1.s14_1.z13_1, item_0.g15_1.v14_1, item_0.h15_1, item_0.i15_1.x1_1, item_0.j15_1.x1_1);
      destination_0.e(tmp$ret$3);
    }
    var propositions = destination_0;
    return this.n13_1.jq(ListSerializer(Companion_instance_1.xz()), propositions);
  };
  protoOf(Regles).k15 = function (elementsJson, aujourdhui) {
    var date = Companion_getInstance().dq(aujourdhui);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      if (element.t10_1 === 'EN_ATTENTE') {
        destination.e(element);
      }
    }
    var enAttente = destination;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(enAttente, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_0 = enAttente.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var tmp$ret$3 = element_0.a10_1;
      destination_0.w1(tmp$ret$3, element_0);
    }
    var parId = destination_0;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(enAttente, 10));
    var _iterator__ex2g4s_1 = enAttente.g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var tmp$ret$6 = FileRevue_getInstance().m15(versResolu(item, Regles_getInstance()), date);
      destination_1.e(tmp$ret$6);
    }
    var entrees = destination_1;
    var reduction = Arriere_instance.o15(entrees);
    // Inline function 'kotlin.collections.map' call
    var this_0 = reduction.p15_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_2 = this_0.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var dto = getValue(parId, item_0.w15().z13_1);
      var tmp$ret$9 = new EntreeRevueJson(dto, item_0.u15_1, item_0.v15_1, item_0.t15_1.x1_1);
      destination_2.e(tmp$ret$9);
    }
    var retenues = destination_2;
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0();
    var _iterator__ex2g4s_3 = retenues.g();
    while (_iterator__ex2g4s_3.h()) {
      var element_1 = _iterator__ex2g4s_3.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var key = element_1.e11_1.b10_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_3.t1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_3.w1(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.e(element_1);
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = ArrayList_init_$Create$(destination_3.l());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_4 = destination_3.v1().g();
    while (_iterator__ex2g4s_4.h()) {
      var item_1 = _iterator__ex2g4s_4.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var captureId = item_1.q1();
      // Inline function 'kotlin.collections.component2' call
      var dansLeGroupe = item_1.r1();
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = Regles$revue$lambda;
      // Inline function 'kotlin.comparisons.thenByDescending' call
      var this_1 = new sam$kotlin_Comparator$0(tmp_0);
      var tmp_1 = Regles$revue$lambda_0(this_1);
      // Inline function 'kotlin.comparisons.thenBy' call
      var this_2 = new sam$kotlin_Comparator$0(tmp_1);
      var tmp_2 = Regles$revue$lambda_1(this_2);
      var tmp$ret$22 = new sam$kotlin_Comparator$0(tmp_2);
      var tmp$ret$23 = new GroupeRevueJson(captureId, sortedWith(dansLeGroupe, tmp$ret$22));
      destination_4.e(tmp$ret$23);
    }
    var tmp_3 = destination_4;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_4 = Regles$revue$lambda_2;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_3 = new sam$kotlin_Comparator$0(tmp_4);
    var tmp_5 = Regles$revue$lambda_3(this_3);
    var tmp$ret$27 = new sam$kotlin_Comparator$0(tmp_5);
    var groupes = sortedWith(tmp_3, tmp$ret$27);
    return this.n13_1.jq(Companion_getInstance_6().xz(), new RevueJson(groupes, entrees.l(), reduction.x15(), reduction.x15() ? reduction.r15_1 : '', reduction.q15_1.l()));
  };
  protoOf(Regles).y15 = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.n13_1.kq(ListSerializer(Companion_instance_5.xz()), suivisJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp$ret$0 = new Suivi(new ElementId(item.z11_1), Companion_getInstance().dq(item.a12_1));
      destination.e(tmp$ret$0);
    }
    var suivis = destination;
    var delais = this.n13_1.kq(MapSerializer(serializer(StringCompanionObject_instance), serializer_0(IntCompanionObject_instance)), delaisJson);
    var tmp = Relance_instance;
    // Inline function 'kotlin.collections.map' call
    var this_1 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp$ret$3 = versResolu(item_0, Regles_getInstance());
      destination_0.e(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.map' call
    var this_2 = tmp.b16(destination_0, Companion_getInstance().dq(aujourdhui), suivis, delais);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_1 = this_2.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp0_safe_receiver = item_1.c16_1.x14_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      // Inline function 'kotlin.collections.map' call
      var this_3 = item_1.e16_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var _iterator__ex2g4s_2 = this_3.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>.<anonymous>' call
        var tmp$ret$6 = item_2.x1_1;
        destination_2.e(tmp$ret$6);
      }
      var tmp$ret$9 = new RelanceJson(item_1.c16_1.s14_1.z13_1, item_1.c16_1.v14_1, item_1.c16_1.u14_1.x1_1, item_1.c16_1.z14_1, tmp_0, item_1.d16_1, destination_2);
      destination_1.e(tmp$ret$9);
    }
    var propositions = destination_1;
    return this.n13_1.jq(ListSerializer(Companion_getInstance_4().xz()), propositions);
  };
  protoOf(Regles).f16 = function (texteSource, elementsJson) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var retenus = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var ecartes = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = decoder(this, elementsJson).g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      var raison = raisonDeRejet(Regles_getInstance(), element, texteSource);
      if (raison == null) {
        // Inline function 'kotlin.collections.plusAssign' call
        retenus.e(element);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = new EcarteJson(element.d10_1, raison);
        ecartes.e(element_0);
      }
    }
    return this.n13_1.jq(Companion_getInstance_7().xz(), new AncrageJson(retenus, ecartes));
  };
  protoOf(Regles).g16 = function (requete, elementsJson, capturesJson, reseau) {
    var tmp = RechercheLocale_getInstance();
    // Inline function 'kotlin.collections.map' call
    var this_0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rechercherParMots.<anonymous>' call
      var tmp$ret$0 = versResolu(item, Regles_getInstance());
      destination.e(tmp$ret$0);
    }
    return rendre(this, tmp.k16(requete, destination, sources(this, capturesJson), reseau));
  };
  protoOf(Regles).l16 = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
    var tmp = RechercheLocale_getInstance();
    // Inline function 'kotlin.collections.map' call
    var this_0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rechercherParQuestion.<anonymous>' call
      var tmp$ret$0 = versResolu(item, Regles_getInstance());
      destination.e(tmp$ret$0);
    }
    return rendre(this, tmp.m16(requete, destination, sources(this, capturesJson), Companion_getInstance().dq(aujourdhui), reseau));
  };
  protoOf(Regles).n16 = function (personne, elementsJson, reseau) {
    var tmp = RechercheLocale_getInstance();
    // Inline function 'kotlin.collections.map' call
    var this_0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rechercherParPersonne.<anonymous>' call
      var tmp$ret$0 = versResolu(item, Regles_getInstance());
      destination.e(tmp$ret$0);
    }
    return rendre(this, tmp.o16(personne, destination, reseau));
  };
  var Regles_instance;
  function Regles_getInstance() {
    if (Regles_instance == null)
      new Regles();
    return Regles_instance;
  }
  function Deduit(valeur, confiance, indice) {
    this.k14_1 = valeur;
    this.l14_1 = confiance;
    this.m14_1 = indice;
    var containsArg = this.l14_1;
    // Inline function 'kotlin.require' call
    if (!(0.0 <= containsArg ? containsArg <= 1.0 : false)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message = 'La confiance est une probabilit\xE9 entre 0 et 1.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.m14_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message_0 = "Une d\xE9duction sans indice n'est pas justifiable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Deduit).toString = function () {
    return 'Deduit(valeur=' + toString(this.k14_1) + ', confiance=' + this.l14_1 + ', indice=' + this.m14_1 + ')';
  };
  protoOf(Deduit).hashCode = function () {
    var result = this.k14_1 == null ? 0 : hashCode(this.k14_1);
    result = imul(result, 31) + getNumberHashCode(this.l14_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m14_1) | 0;
    return result;
  };
  protoOf(Deduit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deduit))
      return false;
    var tmp0_other_with_cast = other instanceof Deduit ? other : THROW_CCE();
    if (!equals(this.k14_1, tmp0_other_with_cast.k14_1))
      return false;
    if (!equals(this.l14_1, tmp0_other_with_cast.l14_1))
      return false;
    if (!(this.m14_1 === tmp0_other_with_cast.m14_1))
      return false;
    return true;
  };
  var TypeElement_TACHE_instance;
  var TypeElement_ENGAGEMENT_instance;
  var TypeElement_ATTENTE_instance;
  var TypeElement_INFORMATION_instance;
  var TypeElement_DECISION_instance;
  var TypeElement_IDEE_instance;
  function valueOf(value) {
    switch (value) {
      case 'TACHE':
        return TypeElement_TACHE_getInstance();
      case 'ENGAGEMENT':
        return TypeElement_ENGAGEMENT_getInstance();
      case 'ATTENTE':
        return TypeElement_ATTENTE_getInstance();
      case 'INFORMATION':
        return TypeElement_INFORMATION_getInstance();
      case 'DECISION':
        return TypeElement_DECISION_getInstance();
      case 'IDEE':
        return TypeElement_IDEE_getInstance();
      default:
        TypeElement_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var TypeElement_entriesInitialized;
  function TypeElement_initEntries() {
    if (TypeElement_entriesInitialized)
      return Unit_instance;
    TypeElement_entriesInitialized = true;
    TypeElement_TACHE_instance = new TypeElement('TACHE', 0);
    TypeElement_ENGAGEMENT_instance = new TypeElement('ENGAGEMENT', 1);
    TypeElement_ATTENTE_instance = new TypeElement('ATTENTE', 2);
    TypeElement_INFORMATION_instance = new TypeElement('INFORMATION', 3);
    TypeElement_DECISION_instance = new TypeElement('DECISION', 4);
    TypeElement_IDEE_instance = new TypeElement('IDEE', 5);
  }
  function TypeElement(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(TypeElement).r16 = function () {
    return this.equals(TypeElement_TACHE_getInstance()) || this.equals(TypeElement_ENGAGEMENT_getInstance());
  };
  var Poids_FAIBLE_instance;
  var Poids_MOYEN_instance;
  var Poids_FORT_instance;
  function valueOf_0(value) {
    switch (value) {
      case 'FAIBLE':
        return Poids_FAIBLE_getInstance();
      case 'MOYEN':
        return Poids_MOYEN_getInstance();
      case 'FORT':
        return Poids_FORT_getInstance();
      default:
        Poids_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Poids_entriesInitialized;
  function Poids_initEntries() {
    if (Poids_entriesInitialized)
      return Unit_instance;
    Poids_entriesInitialized = true;
    Poids_FAIBLE_instance = new Poids('FAIBLE', 0);
    Poids_MOYEN_instance = new Poids('MOYEN', 1);
    Poids_FORT_instance = new Poids('FORT', 2);
  }
  function Poids(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var Sphere_PROFESSIONNEL_instance;
  var Sphere_PERSONNEL_instance;
  function valueOf_1(value) {
    switch (value) {
      case 'PROFESSIONNEL':
        return Sphere_PROFESSIONNEL_getInstance();
      case 'PERSONNEL':
        return Sphere_PERSONNEL_getInstance();
      default:
        Sphere_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Sphere_entriesInitialized;
  function Sphere_initEntries() {
    if (Sphere_entriesInitialized)
      return Unit_instance;
    Sphere_entriesInitialized = true;
    Sphere_PROFESSIONNEL_instance = new Sphere('PROFESSIONNEL', 0);
    Sphere_PERSONNEL_instance = new Sphere('PERSONNEL', 1);
  }
  function Sphere(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Plan(declencheur, action) {
    this.s16_1 = declencheur;
    this.t16_1 = action;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.s16_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message = "Un plan sans d\xE9clencheur n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.t16_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message_0 = "Un plan sans action n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Plan).toString = function () {
    return 'Quand ' + this.s16_1 + ', ' + this.t16_1;
  };
  protoOf(Plan).hashCode = function () {
    var result = getStringHashCode(this.s16_1);
    result = imul(result, 31) + getStringHashCode(this.t16_1) | 0;
    return result;
  };
  protoOf(Plan).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plan))
      return false;
    var tmp0_other_with_cast = other instanceof Plan ? other : THROW_CCE();
    if (!(this.s16_1 === tmp0_other_with_cast.s16_1))
      return false;
    if (!(this.t16_1 === tmp0_other_with_cast.t16_1))
      return false;
    return true;
  };
  function ElementId(value) {
    this.z13_1 = value;
  }
  protoOf(ElementId).toString = function () {
    return this.z13_1;
  };
  protoOf(ElementId).hashCode = function () {
    return getStringHashCode(this.z13_1);
  };
  protoOf(ElementId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementId))
      return false;
    var tmp0_other_with_cast = other instanceof ElementId ? other : THROW_CCE();
    if (!(this.z13_1 === tmp0_other_with_cast.z13_1))
      return false;
    return true;
  };
  function ElementDerive(captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan) {
    echeance = echeance === VOID ? null : echeance;
    poids = poids === VOID ? null : poids;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    sphere = sphere === VOID ? null : sphere;
    plan = plan === VOID ? null : plan;
    this.a14_1 = captureId;
    this.b14_1 = type;
    this.c14_1 = texte;
    this.d14_1 = passage;
    this.e14_1 = echeance;
    this.f14_1 = poids;
    this.g14_1 = interlocuteur;
    this.h14_1 = sphere;
    this.i14_1 = plan;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.c14_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.ElementDerive.<anonymous>' call
      var message = "Un \xE9l\xE9ment sans texte n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.j14_1 = new ElementId(this.a14_1.toString() + ':' + this.d14_1.u16_1 + '-' + this.d14_1.v16_1 + ':' + this.b14_1.toString());
  }
  protoOf(ElementDerive).toString = function () {
    return 'ElementDerive(captureId=' + this.a14_1.toString() + ', type=' + this.b14_1.toString() + ', texte=' + this.c14_1 + ', passage=' + this.d14_1.toString() + ', echeance=' + toString(this.e14_1) + ', poids=' + toString(this.f14_1) + ', interlocuteur=' + toString(this.g14_1) + ', sphere=' + toString(this.h14_1) + ', plan=' + toString(this.i14_1) + ')';
  };
  protoOf(ElementDerive).hashCode = function () {
    var result = this.a14_1.hashCode();
    result = imul(result, 31) + this.b14_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.c14_1) | 0;
    result = imul(result, 31) + this.d14_1.hashCode() | 0;
    result = imul(result, 31) + (this.e14_1 == null ? 0 : this.e14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.f14_1 == null ? 0 : this.f14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.g14_1 == null ? 0 : this.g14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h14_1 == null ? 0 : this.h14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.i14_1 == null ? 0 : this.i14_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElementDerive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDerive))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDerive ? other : THROW_CCE();
    if (!this.a14_1.equals(tmp0_other_with_cast.a14_1))
      return false;
    if (!this.b14_1.equals(tmp0_other_with_cast.b14_1))
      return false;
    if (!(this.c14_1 === tmp0_other_with_cast.c14_1))
      return false;
    if (!this.d14_1.equals(tmp0_other_with_cast.d14_1))
      return false;
    if (!equals(this.e14_1, tmp0_other_with_cast.e14_1))
      return false;
    if (!equals(this.f14_1, tmp0_other_with_cast.f14_1))
      return false;
    if (!equals(this.g14_1, tmp0_other_with_cast.g14_1))
      return false;
    if (!equals(this.h14_1, tmp0_other_with_cast.h14_1))
      return false;
    if (!equals(this.i14_1, tmp0_other_with_cast.i14_1))
      return false;
    return true;
  };
  function TypeElement_TACHE_getInstance() {
    TypeElement_initEntries();
    return TypeElement_TACHE_instance;
  }
  function TypeElement_ENGAGEMENT_getInstance() {
    TypeElement_initEntries();
    return TypeElement_ENGAGEMENT_instance;
  }
  function TypeElement_ATTENTE_getInstance() {
    TypeElement_initEntries();
    return TypeElement_ATTENTE_instance;
  }
  function TypeElement_INFORMATION_getInstance() {
    TypeElement_initEntries();
    return TypeElement_INFORMATION_instance;
  }
  function TypeElement_DECISION_getInstance() {
    TypeElement_initEntries();
    return TypeElement_DECISION_instance;
  }
  function TypeElement_IDEE_getInstance() {
    TypeElement_initEntries();
    return TypeElement_IDEE_instance;
  }
  function Poids_FAIBLE_getInstance() {
    Poids_initEntries();
    return Poids_FAIBLE_instance;
  }
  function Poids_MOYEN_getInstance() {
    Poids_initEntries();
    return Poids_MOYEN_instance;
  }
  function Poids_FORT_getInstance() {
    Poids_initEntries();
    return Poids_FORT_instance;
  }
  function Sphere_PROFESSIONNEL_getInstance() {
    Sphere_initEntries();
    return Sphere_PROFESSIONNEL_instance;
  }
  function Sphere_PERSONNEL_getInstance() {
    Sphere_initEntries();
    return Sphere_PERSONNEL_instance;
  }
  var Verdict_EN_ATTENTE_instance;
  var Verdict_ACCEPTE_instance;
  var Verdict_UN_JOUR_instance;
  var Verdict_REJETE_instance;
  function valueOf_2(value) {
    switch (value) {
      case 'EN_ATTENTE':
        return Verdict_EN_ATTENTE_getInstance();
      case 'ACCEPTE':
        return Verdict_ACCEPTE_getInstance();
      case 'UN_JOUR':
        return Verdict_UN_JOUR_getInstance();
      case 'REJETE':
        return Verdict_REJETE_getInstance();
      default:
        Verdict_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Verdict_entriesInitialized;
  function Verdict_initEntries() {
    if (Verdict_entriesInitialized)
      return Unit_instance;
    Verdict_entriesInitialized = true;
    Verdict_EN_ATTENTE_instance = new Verdict('EN_ATTENTE', 0);
    Verdict_ACCEPTE_instance = new Verdict('ACCEPTE', 1);
    Verdict_UN_JOUR_instance = new Verdict('UN_JOUR', 2);
    Verdict_REJETE_instance = new Verdict('REJETE', 3);
  }
  function Verdict(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Verdict_EN_ATTENTE_getInstance() {
    Verdict_initEntries();
    return Verdict_EN_ATTENTE_instance;
  }
  function Verdict_ACCEPTE_getInstance() {
    Verdict_initEntries();
    return Verdict_ACCEPTE_instance;
  }
  function Verdict_UN_JOUR_getInstance() {
    Verdict_initEntries();
    return Verdict_UN_JOUR_instance;
  }
  function Verdict_REJETE_getInstance() {
    Verdict_initEntries();
    return Verdict_REJETE_instance;
  }
  function Companion_11() {
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function ElementResolu(id, captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan, verdict, aConfirmer, corrigeParHumain, indicePoids) {
    this.s14_1 = id;
    this.t14_1 = captureId;
    this.u14_1 = type;
    this.v14_1 = texte;
    this.w14_1 = passage;
    this.x14_1 = echeance;
    this.y14_1 = poids;
    this.z14_1 = interlocuteur;
    this.a15_1 = sphere;
    this.b15_1 = plan;
    this.c15_1 = verdict;
    this.d15_1 = aConfirmer;
    this.e15_1 = corrigeParHumain;
    this.f15_1 = indicePoids;
  }
  protoOf(ElementResolu).toString = function () {
    return 'ElementResolu(id=' + this.s14_1.toString() + ', captureId=' + this.t14_1.toString() + ', type=' + this.u14_1.toString() + ', texte=' + this.v14_1 + ', passage=' + this.w14_1.toString() + ', echeance=' + toString(this.x14_1) + ', poids=' + toString(this.y14_1) + ', interlocuteur=' + this.z14_1 + ', sphere=' + toString(this.a15_1) + ', plan=' + toString(this.b15_1) + ', verdict=' + this.c15_1.toString() + ', aConfirmer=' + this.d15_1 + ', corrigeParHumain=' + this.e15_1 + ', indicePoids=' + this.f15_1 + ')';
  };
  protoOf(ElementResolu).hashCode = function () {
    var result = this.s14_1.hashCode();
    result = imul(result, 31) + this.t14_1.hashCode() | 0;
    result = imul(result, 31) + this.u14_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.v14_1) | 0;
    result = imul(result, 31) + this.w14_1.hashCode() | 0;
    result = imul(result, 31) + (this.x14_1 == null ? 0 : this.x14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.y14_1 == null ? 0 : this.y14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z14_1 == null ? 0 : getStringHashCode(this.z14_1)) | 0;
    result = imul(result, 31) + (this.a15_1 == null ? 0 : this.a15_1.hashCode()) | 0;
    result = imul(result, 31) + (this.b15_1 == null ? 0 : this.b15_1.hashCode()) | 0;
    result = imul(result, 31) + this.c15_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.d15_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e15_1) | 0;
    result = imul(result, 31) + (this.f15_1 == null ? 0 : getStringHashCode(this.f15_1)) | 0;
    return result;
  };
  protoOf(ElementResolu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementResolu))
      return false;
    var tmp0_other_with_cast = other instanceof ElementResolu ? other : THROW_CCE();
    if (!this.s14_1.equals(tmp0_other_with_cast.s14_1))
      return false;
    if (!this.t14_1.equals(tmp0_other_with_cast.t14_1))
      return false;
    if (!this.u14_1.equals(tmp0_other_with_cast.u14_1))
      return false;
    if (!(this.v14_1 === tmp0_other_with_cast.v14_1))
      return false;
    if (!this.w14_1.equals(tmp0_other_with_cast.w14_1))
      return false;
    if (!equals(this.x14_1, tmp0_other_with_cast.x14_1))
      return false;
    if (!equals(this.y14_1, tmp0_other_with_cast.y14_1))
      return false;
    if (!(this.z14_1 == tmp0_other_with_cast.z14_1))
      return false;
    if (!equals(this.a15_1, tmp0_other_with_cast.a15_1))
      return false;
    if (!equals(this.b15_1, tmp0_other_with_cast.b15_1))
      return false;
    if (!this.c15_1.equals(tmp0_other_with_cast.c15_1))
      return false;
    if (!(this.d15_1 === tmp0_other_with_cast.d15_1))
      return false;
    if (!(this.e15_1 === tmp0_other_with_cast.e15_1))
      return false;
    if (!(this.f15_1 == tmp0_other_with_cast.f15_1))
      return false;
    return true;
  };
  function CaptureId(value) {
    this.y13_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.y13_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.CaptureId.<anonymous>' call
      var message = 'Un identifiant de capture ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(CaptureId).toString = function () {
    return this.y13_1;
  };
  protoOf(CaptureId).hashCode = function () {
    return getStringHashCode(this.y13_1);
  };
  protoOf(CaptureId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureId))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureId ? other : THROW_CCE();
    if (!(this.y13_1 === tmp0_other_with_cast.y13_1))
      return false;
    return true;
  };
  function Passage(debutCar, finCar, debutMs, finMs) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    this.u16_1 = debutCar;
    this.v16_1 = finCar;
    this.w16_1 = debutMs;
    this.x16_1 = finMs;
    // Inline function 'kotlin.require' call
    if (!(this.u16_1 >= 0)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message = 'Le d\xE9but du passage ne peut pas \xEAtre n\xE9gatif.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.v16_1 > this.u16_1)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_0 = 'Le passage doit couvrir au moins un caract\xE8re.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(this.w16_1 == null === (this.x16_1 == null))) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_1 = 'Les bornes audio vont par paire, ou pas du tout.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    if (!(this.w16_1 == null) && !(this.x16_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.w16_1.a1(new Long(0, 0)) >= 0 && this.x16_1.a1(this.w16_1) > 0)) {
        // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
        var message_2 = 'Bornes audio incoh\xE9rentes.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }
    }
  }
  protoOf(Passage).toString = function () {
    return 'Passage(debutCar=' + this.u16_1 + ', finCar=' + this.v16_1 + ', debutMs=' + toString(this.w16_1) + ', finMs=' + toString(this.x16_1) + ')';
  };
  protoOf(Passage).hashCode = function () {
    var result = this.u16_1;
    result = imul(result, 31) + this.v16_1 | 0;
    result = imul(result, 31) + (this.w16_1 == null ? 0 : this.w16_1.hashCode()) | 0;
    result = imul(result, 31) + (this.x16_1 == null ? 0 : this.x16_1.hashCode()) | 0;
    return result;
  };
  protoOf(Passage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Passage))
      return false;
    var tmp0_other_with_cast = other instanceof Passage ? other : THROW_CCE();
    if (!(this.u16_1 === tmp0_other_with_cast.u16_1))
      return false;
    if (!(this.v16_1 === tmp0_other_with_cast.v16_1))
      return false;
    if (!equals(this.w16_1, tmp0_other_with_cast.w16_1))
      return false;
    if (!equals(this.x16_1, tmp0_other_with_cast.x16_1))
      return false;
    return true;
  };
  var Urgence_DEPASSEE_instance;
  var Urgence_AUJOURD_HUI_instance;
  var Urgence_DEMAIN_instance;
  var Urgence_CETTE_SEMAINE_instance;
  var Urgence_PLUS_TARD_instance;
  var Urgence_AUCUNE_instance;
  function valueOf_3(value) {
    switch (value) {
      case 'DEPASSEE':
        return Urgence_DEPASSEE_getInstance();
      case 'AUJOURD_HUI':
        return Urgence_AUJOURD_HUI_getInstance();
      case 'DEMAIN':
        return Urgence_DEMAIN_getInstance();
      case 'CETTE_SEMAINE':
        return Urgence_CETTE_SEMAINE_getInstance();
      case 'PLUS_TARD':
        return Urgence_PLUS_TARD_getInstance();
      case 'AUCUNE':
        return Urgence_AUCUNE_getInstance();
      default:
        Urgence_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Urgence_entriesInitialized;
  function Urgence_initEntries() {
    if (Urgence_entriesInitialized)
      return Unit_instance;
    Urgence_entriesInitialized = true;
    Urgence_DEPASSEE_instance = new Urgence('DEPASSEE', 0);
    Urgence_AUJOURD_HUI_instance = new Urgence('AUJOURD_HUI', 1);
    Urgence_DEMAIN_instance = new Urgence('DEMAIN', 2);
    Urgence_CETTE_SEMAINE_instance = new Urgence('CETTE_SEMAINE', 3);
    Urgence_PLUS_TARD_instance = new Urgence('PLUS_TARD', 4);
    Urgence_AUCUNE_instance = new Urgence('AUCUNE', 5);
  }
  function Urgence(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Urgence).a17 = function () {
    return this.equals(Urgence_DEPASSEE_getInstance()) || this.equals(Urgence_AUJOURD_HUI_getInstance());
  };
  protoOf(Urgence).b17 = function () {
    var tmp;
    switch (this.y1_1) {
      case 0:
        tmp = '\xE9ch\xE9ance d\xE9pass\xE9e';
        break;
      case 1:
        tmp = "\xE9ch\xE9ance aujourd'hui";
        break;
      case 2:
        tmp = '\xE9ch\xE9ance demain';
        break;
      case 3:
        tmp = '\xE9ch\xE9ance cette semaine';
        break;
      case 4:
        tmp = '\xE9ch\xE9ance plus tard';
        break;
      case 5:
        tmp = 'sans \xE9ch\xE9ance';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function ContexteMaintenant(aujourdhui) {
    this.c17_1 = aujourdhui;
  }
  protoOf(ContexteMaintenant).toString = function () {
    return 'ContexteMaintenant(aujourdhui=' + this.c17_1.toString() + ')';
  };
  protoOf(ContexteMaintenant).hashCode = function () {
    return this.c17_1.hashCode();
  };
  protoOf(ContexteMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenant ? other : THROW_CCE();
    if (!this.c17_1.equals(tmp0_other_with_cast.c17_1))
      return false;
    return true;
  };
  function Proposition(element, raison, poidsEffectif, urgence) {
    this.g15_1 = element;
    this.h15_1 = raison;
    this.i15_1 = poidsEffectif;
    this.j15_1 = urgence;
  }
  protoOf(Proposition).toString = function () {
    return 'Proposition(element=' + this.g15_1.toString() + ', raison=' + this.h15_1 + ', poidsEffectif=' + this.i15_1.toString() + ', urgence=' + this.j15_1.toString() + ')';
  };
  protoOf(Proposition).hashCode = function () {
    var result = this.g15_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.h15_1) | 0;
    result = imul(result, 31) + this.i15_1.hashCode() | 0;
    result = imul(result, 31) + this.j15_1.hashCode() | 0;
    return result;
  };
  protoOf(Proposition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Proposition))
      return false;
    var tmp0_other_with_cast = other instanceof Proposition ? other : THROW_CCE();
    if (!this.g15_1.equals(tmp0_other_with_cast.g15_1))
      return false;
    if (!(this.h15_1 === tmp0_other_with_cast.h15_1))
      return false;
    if (!this.i15_1.equals(tmp0_other_with_cast.i15_1))
      return false;
    if (!this.j15_1.equals(tmp0_other_with_cast.j15_1))
      return false;
    return true;
  };
  function raison($this, element, urgence) {
    var tmp0_elvis_lhs = element.f15_1;
    var consequence = tmp0_elvis_lhs == null ? 'poids non d\xE9termin\xE9, \xE0 confirmer en Revue' : tmp0_elvis_lhs;
    return consequence + ' \u2014 ' + urgence.b17();
  }
  function dUnCranPlusHaut(_this__u8e3s4, $this) {
    var tmp;
    switch (_this__u8e3s4.y1_1) {
      case 0:
        tmp = Poids_MOYEN_getInstance();
        break;
      case 1:
        tmp = Poids_FORT_getInstance();
        break;
      case 2:
        tmp = Poids_FORT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.d17_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).ia = function (a, b) {
    return this.d17_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.ia(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).p2 = function () {
    return this.d17_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.p2(), other.p2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.p2());
  };
  function Priorisation$classer$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp = b.i15_1.y1_1;
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp$ret$1 = a.i15_1.y1_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Priorisation$classer$lambda_0($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp_0 = a.j15_1.y1_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.j15_1.y1_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation$classer$lambda_1($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp_0 = a.g15_1.s14_1.z13_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.g15_1.s14_1.z13_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation() {
    Priorisation_instance = this;
    this.p14_1 = 3;
    this.q14_1 = Poids_MOYEN_getInstance();
  }
  protoOf(Priorisation).e17 = function (echeance, aujourdhui) {
    if (echeance == null)
      return Urgence_AUCUNE_getInstance();
    var tmp0_subject = daysUntil(aujourdhui, echeance);
    return (-2147483648 <= tmp0_subject ? tmp0_subject <= -1 : false) ? Urgence_DEPASSEE_getInstance() : tmp0_subject === 0 ? Urgence_AUJOURD_HUI_getInstance() : tmp0_subject === 1 ? Urgence_DEMAIN_getInstance() : (2 <= tmp0_subject ? tmp0_subject <= 7 : false) ? Urgence_CETTE_SEMAINE_getInstance() : Urgence_PLUS_TARD_getInstance();
  };
  protoOf(Priorisation).f17 = function (elements, contexte) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      if (element.c15_1.equals(Verdict_ACCEPTE_getInstance()) && element.u14_1.r16()) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      var urgence = Priorisation_getInstance().e17(item.x14_1, contexte.c17_1);
      var tmp0_elvis_lhs = item.y14_1;
      var poids = tmp0_elvis_lhs == null ? Priorisation_getInstance().q14_1 : tmp0_elvis_lhs;
      var effectif = urgence.a17() ? dUnCranPlusHaut(poids, Priorisation_getInstance()) : poids;
      var tmp$ret$3 = new Proposition(item, raison(Priorisation_getInstance(), item, urgence), effectif, urgence);
      destination_0.e(tmp$ret$3);
    }
    var tmp = destination_0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = Priorisation$classer$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_0(tmp_0);
    var tmp_1 = Priorisation$classer$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_0(tmp_1);
    var tmp_2 = Priorisation$classer$lambda_1(this_1);
    var tmp$ret$8 = new sam$kotlin_Comparator$0_0(tmp_2);
    return sortedWith(tmp, tmp$ret$8);
  };
  protoOf(Priorisation).r14 = function (elements, contexte) {
    return take(this.f17(elements, contexte), 3);
  };
  var Priorisation_instance;
  function Priorisation_getInstance() {
    if (Priorisation_instance == null)
      new Priorisation();
    return Priorisation_instance;
  }
  function Urgence_DEPASSEE_getInstance() {
    Urgence_initEntries();
    return Urgence_DEPASSEE_instance;
  }
  function Urgence_AUJOURD_HUI_getInstance() {
    Urgence_initEntries();
    return Urgence_AUJOURD_HUI_instance;
  }
  function Urgence_DEMAIN_getInstance() {
    Urgence_initEntries();
    return Urgence_DEMAIN_instance;
  }
  function Urgence_CETTE_SEMAINE_getInstance() {
    Urgence_initEntries();
    return Urgence_CETTE_SEMAINE_instance;
  }
  function Urgence_PLUS_TARD_getInstance() {
    Urgence_initEntries();
    return Urgence_PLUS_TARD_instance;
  }
  function Urgence_AUCUNE_getInstance() {
    Urgence_initEntries();
    return Urgence_AUCUNE_instance;
  }
  function TexteSource(captureId, texte, quand, jour) {
    jour = jour === VOID ? null : jour;
    this.g17_1 = captureId;
    this.h17_1 = texte;
    this.i17_1 = quand;
    this.j17_1 = jour;
  }
  protoOf(TexteSource).toString = function () {
    return 'TexteSource(captureId=' + this.g17_1.toString() + ', texte=' + this.h17_1 + ', quand=' + this.i17_1 + ', jour=' + toString(this.j17_1) + ')';
  };
  protoOf(TexteSource).hashCode = function () {
    var result = this.g17_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.h17_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i17_1) | 0;
    result = imul(result, 31) + (this.j17_1 == null ? 0 : this.j17_1.hashCode()) | 0;
    return result;
  };
  protoOf(TexteSource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TexteSource))
      return false;
    var tmp0_other_with_cast = other instanceof TexteSource ? other : THROW_CCE();
    if (!this.g17_1.equals(tmp0_other_with_cast.g17_1))
      return false;
    if (!(this.h17_1 === tmp0_other_with_cast.h17_1))
      return false;
    if (!(this.i17_1 === tmp0_other_with_cast.i17_1))
      return false;
    if (!equals(this.j17_1, tmp0_other_with_cast.j17_1))
      return false;
    return true;
  };
  function Citation(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.u13_1 = captureId;
    this.v13_1 = extrait;
    this.w13_1 = pourquoi;
    this.x13_1 = elementId;
  }
  protoOf(Citation).toString = function () {
    return 'Citation(captureId=' + this.u13_1.toString() + ', extrait=' + this.v13_1 + ', pourquoi=' + this.w13_1 + ', elementId=' + toString(this.x13_1) + ')';
  };
  protoOf(Citation).hashCode = function () {
    var result = this.u13_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.v13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w13_1) | 0;
    result = imul(result, 31) + (this.x13_1 == null ? 0 : this.x13_1.hashCode()) | 0;
    return result;
  };
  protoOf(Citation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Citation))
      return false;
    var tmp0_other_with_cast = other instanceof Citation ? other : THROW_CCE();
    if (!this.u13_1.equals(tmp0_other_with_cast.u13_1))
      return false;
    if (!(this.v13_1 === tmp0_other_with_cast.v13_1))
      return false;
    if (!(this.w13_1 === tmp0_other_with_cast.w13_1))
      return false;
    if (!equals(this.x13_1, tmp0_other_with_cast.x13_1))
      return false;
    return true;
  };
  function Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.o13_1 = question;
    this.p13_1 = enonce;
    this.q13_1 = citations;
    this.r13_1 = indisponibleHorsLigne;
    this.s13_1 = nonPrisEnCompte;
  }
  protoOf(Reponse).t13 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.q13_1.j();
  };
  protoOf(Reponse).k17 = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    return new Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).l17 = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte, $super) {
    question = question === VOID ? this.o13_1 : question;
    enonce = enonce === VOID ? this.p13_1 : enonce;
    citations = citations === VOID ? this.q13_1 : citations;
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? this.r13_1 : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? this.s13_1 : nonPrisEnCompte;
    return $super === VOID ? this.k17(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) : $super.k17.call(this, question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).toString = function () {
    return 'Reponse(question=' + this.o13_1 + ', enonce=' + this.p13_1 + ', citations=' + toString_0(this.q13_1) + ', indisponibleHorsLigne=' + toString_0(this.r13_1) + ', nonPrisEnCompte=' + toString_0(this.s13_1) + ')';
  };
  protoOf(Reponse).hashCode = function () {
    var result = getStringHashCode(this.o13_1);
    result = imul(result, 31) + getStringHashCode(this.p13_1) | 0;
    result = imul(result, 31) + hashCode(this.q13_1) | 0;
    result = imul(result, 31) + hashCode(this.r13_1) | 0;
    result = imul(result, 31) + hashCode(this.s13_1) | 0;
    return result;
  };
  protoOf(Reponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reponse))
      return false;
    var tmp0_other_with_cast = other instanceof Reponse ? other : THROW_CCE();
    if (!(this.o13_1 === tmp0_other_with_cast.o13_1))
      return false;
    if (!(this.p13_1 === tmp0_other_with_cast.p13_1))
      return false;
    if (!equals(this.q13_1, tmp0_other_with_cast.q13_1))
      return false;
    if (!equals(this.r13_1, tmp0_other_with_cast.r13_1))
      return false;
    if (!equals(this.s13_1, tmp0_other_with_cast.s13_1))
      return false;
    return true;
  };
  function tout($this, captures, elements, periode, max) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.tout.<anonymous>' call
      var tmp$ret$0 = new Citation(item.t14_1, item.v14_1, libelle(RechercheLocale_getInstance(), item.u14_1) + ' de ' + periode.o17_1, item.s14_1);
      destination.e(tmp$ret$0);
    }
    var surElements = destination;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(surElements, 10));
    var _iterator__ex2g4s_0 = surElements.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.tout.<anonymous>' call
      var tmp$ret$3 = item_0.u13_1;
      destination_0.e(tmp$ret$3);
    }
    var dejaCitees = toSet(destination_0);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = captures.g();
    while (_iterator__ex2g4s_1.h()) {
      var element = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.tout.<anonymous>' call
      if (!dejaCitees.o1(element.g17_1)) {
        destination_1.e(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_1, 10));
    var _iterator__ex2g4s_2 = destination_1.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_1 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.tout.<anonymous>' call
      var tmp$ret$9 = new Citation(item_1.g17_1, item_1.h17_1, 'capture du ' + item_1.i17_1);
      destination_2.e(tmp$ret$9);
    }
    var surCaptures = destination_2;
    var tmp = plus(surElements, surCaptures);
    var tmp_0 = RechercheLocale$tout$lambda;
    var citations = take(sortedWith(tmp, compareBy([tmp_0, RechercheLocale$tout$lambda_0])), max);
    return reponse($this, '', citations, emptyList());
  }
  function avec(_this__u8e3s4, $this, ecarte) {
    return ecarte.j() ? _this__u8e3s4 : _this__u8e3s4.l17(VOID, VOID, VOID, VOID, ecarte);
  }
  function reponse($this, question, citations, indisponibles) {
    var tmp;
    if (citations.j()) {
      tmp = 'Rien \xE0 ce sujet dans ce qui a \xE9t\xE9 captur\xE9.';
    } else {
      tmp = '' + citations.l() + ' \xE9l\xE9ment(s) trouv\xE9(s), chacun rattach\xE9 \xE0 sa capture source.';
    }
    return new Reponse(question, tmp, citations, indisponibles);
  }
  function libelle($this, type) {
    var tmp;
    switch (type.y1_1) {
      case 0:
        tmp = 't\xE2che';
        break;
      case 1:
        tmp = 'engagement';
        break;
      case 2:
        tmp = 'attente';
        break;
      case 3:
        tmp = 'information';
        break;
      case 4:
        tmp = 'd\xE9cision';
        break;
      case 5:
        tmp = 'id\xE9e';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function etat($this, verdict) {
    var tmp;
    switch (verdict.y1_1) {
      case 1:
        tmp = 'ouvert';
        break;
      case 0:
        tmp = 'pas encore pass\xE9 en Revue';
        break;
      case 2:
        tmp = 'clos, class\xE9 \xAB un jour \xBB';
        break;
      case 3:
        tmp = 'clos';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function etatOrdinal($this, verdict) {
    var tmp;
    switch (verdict.y1_1) {
      case 1:
        tmp = 0;
        break;
      case 0:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 3;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.p17_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).ia = function (a, b) {
    return this.p17_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.ia(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).p2 = function () {
    return this.p17_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.p2(), other.p2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
    return hashCode(this.p2());
  };
  function RechercheLocale$parMots$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp = b.z9_1;
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp$ret$1 = a.z9_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function RechercheLocale$parMots$lambda_0($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp_0 = a.aa_1.u13_1.y13_1;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp$ret$1 = b.aa_1.u13_1.y13_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function RechercheLocale$parMots$lambda_1($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp0_safe_receiver = a.aa_1.x13_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z13_1;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp0_safe_receiver_0 = b.aa_1.x13_1;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.z13_1;
        var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function RechercheLocale$tout$lambda(it) {
    return it.u13_1.y13_1;
  }
  function RechercheLocale$tout$lambda_0(it) {
    var tmp0_safe_receiver = it.x13_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z13_1;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function RechercheLocale$parPersonne$lambda(it) {
    return etatOrdinal(RechercheLocale_getInstance(), it.c15_1);
  }
  function RechercheLocale$parPersonne$lambda_0(it) {
    return it.s14_1.z13_1;
  }
  function RechercheLocale() {
    RechercheLocale_instance = this;
    this.h16_1 = 'Rien \xE0 ce sujet dans ce qui a \xE9t\xE9 captur\xE9.';
    this.i16_1 = listOf(['analyse des captures pas encore trait\xE9es', 'reformulation de la r\xE9ponse en langage naturel']);
    this.j16_1 = 10;
  }
  protoOf(RechercheLocale).q17 = function (requete, elements, captures, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.i16_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$0 = to(item, Texte_getInstance().u17(requete, item.v14_1));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element.aa_1 > 0.0) {
        destination_0.e(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_0, 10));
    var _iterator__ex2g4s_1 = destination_0.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var element_0 = item_0.ba();
      var note = item_0.ca();
      var tmp$ret$6 = to(note, new Citation(element_0.t14_1, element_0.v14_1, '\xE9l\xE9ment \xAB ' + libelle(RechercheLocale_getInstance(), element_0.u14_1) + ' \xBB contenant les mots cherch\xE9s', element_0.s14_1));
      destination_1.e(tmp$ret$6);
    }
    var surElements = destination_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(surElements, 10));
    var _iterator__ex2g4s_2 = surElements.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_1 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$9 = item_1.aa_1.u13_1;
      destination_2.e(tmp$ret$9);
    }
    var dejaCitees = toSet(destination_2);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_3 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_3 = captures.g();
    while (_iterator__ex2g4s_3.h()) {
      var element_1 = _iterator__ex2g4s_3.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (!dejaCitees.o1(element_1.g17_1)) {
        destination_3.e(element_1);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_3, 10));
    var _iterator__ex2g4s_4 = destination_3.g();
    while (_iterator__ex2g4s_4.h()) {
      var item_2 = _iterator__ex2g4s_4.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$15 = to(item_2, Texte_getInstance().u17(requete, item_2.h17_1));
      destination_4.e(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_5 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_5 = destination_4.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element_2.aa_1 > 0.0) {
        destination_5.e(element_2);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_6 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_5, 10));
    var _iterator__ex2g4s_6 = destination_5.g();
    while (_iterator__ex2g4s_6.h()) {
      var item_3 = _iterator__ex2g4s_6.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var source = item_3.ba();
      var note_0 = item_3.ca();
      var tmp$ret$21 = to(note_0, new Citation(source.g17_1, source.h17_1, 'capture du ' + source.i17_1 + ' contenant les mots cherch\xE9s'));
      destination_6.e(tmp$ret$21);
    }
    var surCaptures = destination_6;
    var tmp = plus(surElements, surCaptures);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = RechercheLocale$parMots$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_1(tmp_0);
    var tmp_1 = RechercheLocale$parMots$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_1(tmp_1);
    var tmp_2 = RechercheLocale$parMots$lambda_1(this_1);
    var tmp$ret$26 = new sam$kotlin_Comparator$0_1(tmp_2);
    // Inline function 'kotlin.collections.map' call
    var this_2 = take(sortedWith(tmp, tmp$ret$26), max);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_7 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_7 = this_2.g();
    while (_iterator__ex2g4s_7.h()) {
      var item_4 = _iterator__ex2g4s_7.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$27 = item_4.aa_1;
      destination_7.e(tmp$ret$27);
    }
    var citations = destination_7;
    return reponse(this, requete, citations, indisponibles);
  };
  protoOf(RechercheLocale).k16 = function (requete, elements, captures, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.q17(requete, elements, captures, reseau, max) : $super.q17.call(this, requete, elements, captures, reseau, max);
  };
  protoOf(RechercheLocale).v17 = function (requete, elements, captures, aujourdhui, reseau, max) {
    var tmp;
    if (RepereTemporel_getInstance().a18(requete) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parQuestion.<anonymous>' call
      tmp = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
    }
    var ecarte = listOfNotNull_0(tmp);
    var tmp1_elvis_lhs = RepereTemporel_getInstance().b18(requete, aujourdhui);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return avec(this.q17(requete, elements, captures, reseau, max), this, ecarte);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var repere = tmp_0;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = captures.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parQuestion.<anonymous>' call
      if (!(element.j17_1 == null) && repere.c18_1.e18(element.j17_1)) {
        destination.e(element);
      }
    }
    var dansLaPeriode = destination;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(dansLaPeriode, 10));
    var _iterator__ex2g4s_0 = dansLaPeriode.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parQuestion.<anonymous>' call
      var tmp$ret$5 = item.g17_1;
      destination_0.e(tmp$ret$5);
    }
    var idsPeriode = toSet(destination_0);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = elements.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parQuestion.<anonymous>' call
      if (idsPeriode.o1(element_0.t14_1)) {
        destination_1.e(element_0);
      }
    }
    var elementsPeriode = destination_1;
    var reste = RepereTemporel_getInstance().f18(requete, repere);
    var parLesMots = isBlank(reste) ? null : this.q17(reste, elementsPeriode, dansLaPeriode, reseau, max);
    var motsMuets = parLesMots == null || parLesMots.q13_1.j();
    var brut = motsMuets ? tout(this, dansLaPeriode, elementsPeriode, repere.c18_1, max) : ensureNotNull(parLesMots);
    var enonce = brut.q13_1.j() ? 'Rien de captur\xE9 ' + repere.c18_1.o17_1 + '.' : motsMuets && !isBlank(reste) ? 'Aucun de ces mots dans les captures de ' + repere.c18_1.o17_1 + ' ; ' + ('voici les ' + brut.q13_1.l() + " qu'elle contient.") : '' + brut.q13_1.l() + ' \xE9l\xE9ment(s) de ' + repere.c18_1.o17_1 + ', ' + 'chacun rattach\xE9 \xE0 sa capture source.';
    return brut.l17(requete, enonce, VOID, reseau ? emptyList() : this.i16_1, ecarte);
  };
  protoOf(RechercheLocale).m16 = function (requete, elements, captures, aujourdhui, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.v17(requete, elements, captures, aujourdhui, reseau, max) : $super.v17.call(this, requete, elements, captures, aujourdhui, reseau, max);
  };
  protoOf(RechercheLocale).g18 = function (personne, elements, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.i16_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      if (!(element.z14_1 == null) && Texte_getInstance().h18(element.z14_1, personne)) {
        destination.e(element);
      }
    }
    var tmp = destination;
    var tmp_0 = RechercheLocale$parPersonne$lambda;
    // Inline function 'kotlin.collections.map' call
    var this_0 = take(sortedWith(tmp, compareBy([tmp_0, RechercheLocale$parPersonne$lambda_0])), max);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      var tmp$ret$3 = new Citation(item.t14_1, item.v14_1, libelle(RechercheLocale_getInstance(), item.u14_1) + ' ' + etat(RechercheLocale_getInstance(), item.c15_1) + ' envers ' + personne, item.s14_1);
      destination_0.e(tmp$ret$3);
    }
    var citations = destination_0;
    return reponse(this, 'ce qui est en cours avec ' + personne, citations, indisponibles);
  };
  protoOf(RechercheLocale).o16 = function (personne, elements, reseau, max, $super) {
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.g18(personne, elements, reseau, max) : $super.g18.call(this, personne, elements, reseau, max);
  };
  var RechercheLocale_instance;
  function RechercheLocale_getInstance() {
    if (RechercheLocale_instance == null)
      new RechercheLocale();
    return RechercheLocale_instance;
  }
  function Periode(du, au, libelle) {
    this.m17_1 = du;
    this.n17_1 = au;
    this.o17_1 = libelle;
    // Inline function 'kotlin.require' call
    if (!(this.m17_1.fq(this.n17_1) <= 0)) {
      // Inline function 'app.zenote.core.recherche.Periode.<anonymous>' call
      var message = 'Une p\xE9riode dont le d\xE9but suit la fin ne d\xE9signe aucun jour.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Periode).e18 = function (jour) {
    return jour.fq(this.m17_1) >= 0 && jour.fq(this.n17_1) <= 0;
  };
  protoOf(Periode).toString = function () {
    return 'Periode(du=' + this.m17_1.toString() + ', au=' + this.n17_1.toString() + ', libelle=' + this.o17_1 + ')';
  };
  protoOf(Periode).hashCode = function () {
    var result = this.m17_1.hashCode();
    result = imul(result, 31) + this.n17_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.o17_1) | 0;
    return result;
  };
  protoOf(Periode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Periode))
      return false;
    var tmp0_other_with_cast = other instanceof Periode ? other : THROW_CCE();
    if (!this.m17_1.equals(tmp0_other_with_cast.m17_1))
      return false;
    if (!this.n17_1.equals(tmp0_other_with_cast.n17_1))
      return false;
    if (!(this.o17_1 === tmp0_other_with_cast.o17_1))
      return false;
    return true;
  };
  function Repere(periode, expression) {
    this.c18_1 = periode;
    this.d18_1 = expression;
  }
  protoOf(Repere).toString = function () {
    return 'Repere(periode=' + this.c18_1.toString() + ', expression=' + this.d18_1 + ')';
  };
  protoOf(Repere).hashCode = function () {
    var result = this.c18_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.d18_1) | 0;
    return result;
  };
  protoOf(Repere).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Repere))
      return false;
    var tmp0_other_with_cast = other instanceof Repere ? other : THROW_CCE();
    if (!this.c18_1.equals(tmp0_other_with_cast.c18_1))
      return false;
    if (!(this.d18_1 === tmp0_other_with_cast.d18_1))
      return false;
    return true;
  };
  function aplatir($this, requete) {
    // Inline function 'kotlin.text.map' call
    var this_0 = Texte_getInstance().i18(requete);
    // Inline function 'kotlin.text.mapTo' call
    var destination = ArrayList_init_$Create$(charSequenceLength(this_0));
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(this_0)) {
      var item = charSequenceGet(this_0, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'app.zenote.core.recherche.RepereTemporel.aplatir.<anonymous>' call
      var tmp$ret$0 = new Char(isLetterOrDigit(item) ? item : _Char___init__impl__6a9atx(32));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = split(joinToString(destination, ''), charArrayOf([_Char___init__impl__6a9atx(32)]));
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RepereTemporel.aplatir.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(element) > 0) {
        destination_0.e(element);
      }
    }
    return ' ' + joinToString(destination_0, ' ') + ' ';
  }
  function jour($this, date, libelle) {
    return new Periode(date, date, libelle);
  }
  function semaineDe($this, date, libelle) {
    var lundi = minus(date, DatePeriod_init_$Create$(VOID, VOID, get_isoDayNumber(date.cm()) - 1 | 0));
    return new Periode(lundi, plus_0(lundi, DatePeriod_init_$Create$(VOID, VOID, 6)), libelle);
  }
  function moisDe($this, date, libelle) {
    var premier = LocalDate_init_$Create$(date.tl(), date.eq(), 1);
    return new Periode(premier, minus(plus_0(premier, DatePeriod_init_$Create$(VOID, 1)), DatePeriod_init_$Create$(VOID, VOID, 1)), libelle);
  }
  function dernier($this, date, jourVoulu, libelle) {
    var recul = get_isoDayNumber(date.cm()) - get_isoDayNumber(jourVoulu) | 0;
    if (recul <= 0)
      recul = recul + 7 | 0;
    return jour($this, minus(date, DatePeriod_init_$Create$(VOID, VOID, recul)), libelle);
  }
  function depuisCompte($this, plie, aujourdhui) {
    var marqueurs = listOf(['il y a', 'ca fait', 'il y avait']);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = marqueurs.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.recherche.RepereTemporel.depuisCompte.<anonymous>' call
        if (contains(plie, ' ' + element + ' ')) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var marqueur = tmp;
    // Inline function 'kotlin.text.trim' call
    var this_0 = substringAfter(plie, ' ' + marqueur + ' ');
    var tmp$ret$2 = toString_0(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    var apres = split_0(tmp$ret$2, [' ']);
    if (apres.l() < 2)
      return null;
    var tmp1_elvis_lhs = toIntOrNull(apres.k(0));
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? $this.z17_1.t1(apres.k(0)) : tmp1_elvis_lhs;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var combien = tmp_0;
    if (combien <= 0)
      return null;
    var unite = apres.k(1);
    var tmp_1;
    if (startsWith(unite, 'jour')) {
      tmp_1 = to(DatePeriod_init_$Create$(VOID, VOID, combien), 'jour');
    } else if (startsWith(unite, 'semaine')) {
      tmp_1 = to(DatePeriod_init_$Create$(VOID, VOID, imul(combien, 7)), 'semaine');
    } else if (startsWith(unite, 'mois')) {
      tmp_1 = to(DatePeriod_init_$Create$(VOID, combien), 'mois');
    } else {
      return null;
    }
    var _destruct__k2r9zo = tmp_1;
    var recul = _destruct__k2r9zo.ba();
    var nom = _destruct__k2r9zo.ca();
    var centre = minus(aujourdhui, recul);
    var marge = nom === 'jour' ? 1 : 3;
    return new Repere(new Periode(minus(centre, DatePeriod_init_$Create$(VOID, VOID, marge)), minOf(plus_0(centre, DatePeriod_init_$Create$(VOID, VOID, marge)), aujourdhui), 'il y a environ ' + combien + ' ' + nom + (combien > 1 && !(nom === 'mois') ? 's' : '')), marqueur + ' ' + apres.k(0) + ' ' + unite);
  }
  function RepereTemporel$formes$lambda(d) {
    return jour(RepereTemporel_getInstance(), minus(d, DatePeriod_init_$Create$(VOID, VOID, 2)), 'avant-hier');
  }
  function RepereTemporel$formes$lambda_0(d) {
    return jour(RepereTemporel_getInstance(), minus(d, DatePeriod_init_$Create$(VOID, VOID, 1)), 'hier');
  }
  function RepereTemporel$formes$lambda_1(d) {
    return jour(RepereTemporel_getInstance(), d, "aujourd'hui");
  }
  function RepereTemporel$formes$lambda_2(d) {
    return jour(RepereTemporel_getInstance(), d, "aujourd'hui");
  }
  function RepereTemporel$formes$lambda_3(d) {
    return jour(RepereTemporel_getInstance(), d, "aujourd'hui");
  }
  function RepereTemporel$formes$lambda_4(d) {
    return semaineDe(RepereTemporel_getInstance(), minus(d, DatePeriod_init_$Create$(VOID, VOID, 7)), 'la semaine derni\xE8re');
  }
  function RepereTemporel$formes$lambda_5(d) {
    return semaineDe(RepereTemporel_getInstance(), minus(d, DatePeriod_init_$Create$(VOID, VOID, 7)), 'la semaine derni\xE8re');
  }
  function RepereTemporel$formes$lambda_6(d) {
    return semaineDe(RepereTemporel_getInstance(), d, 'cette semaine');
  }
  function RepereTemporel$formes$lambda_7(d) {
    var samedi = dernier(RepereTemporel_getInstance(), d, DayOfWeek_SATURDAY_getInstance(), '').m17_1;
    return new Periode(samedi, plus_0(samedi, DatePeriod_init_$Create$(VOID, VOID, 1)), 'le week-end dernier');
  }
  function RepereTemporel$formes$lambda_8(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.tl(), d.eq(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
  }
  function RepereTemporel$formes$lambda_9(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.tl(), d.eq(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
  }
  function RepereTemporel$formes$lambda_10(d) {
    return moisDe(RepereTemporel_getInstance(), d, 'ce mois-ci');
  }
  function RepereTemporel$formes$lambda_11(d) {
    return dernier(RepereTemporel_getInstance(), d, DayOfWeek_MONDAY_getInstance(), 'lundi dernier');
  }
  function RepereTemporel$formes$lambda_12(d) {
    return dernier(RepereTemporel_getInstance(), d, DayOfWeek_TUESDAY_getInstance(), 'mardi dernier');
  }
  function RepereTemporel$formes$lambda_13(d) {
    return dernier(RepereTemporel_getInstance(), d, DayOfWeek_WEDNESDAY_getInstance(), 'mercredi dernier');
  }
  function RepereTemporel$formes$lambda_14(d) {
    return dernier(RepereTemporel_getInstance(), d, DayOfWeek_THURSDAY_getInstance(), 'jeudi dernier');
  }
  function RepereTemporel$formes$lambda_15(d) {
    return dernier(RepereTemporel_getInstance(), d, DayOfWeek_FRIDAY_getInstance(), 'vendredi dernier');
  }
  function RepereTemporel$formes$lambda_16(d) {
    return dernier(RepereTemporel_getInstance(), d, DayOfWeek_SATURDAY_getInstance(), 'samedi dernier');
  }
  function RepereTemporel$formes$lambda_17(d) {
    return dernier(RepereTemporel_getInstance(), d, DayOfWeek_SUNDAY_getInstance(), 'dimanche dernier');
  }
  function RepereTemporel() {
    RepereTemporel_instance = this;
    this.w17_1 = listOf(['en voiture', 'dans le train', 'dans l avion', 'en marchant', 'en reunion', 'au bureau', 'a la maison', 'au telephone', 'en visio', 'dans le metro']);
    this.x17_1 = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
    var tmp = this;
    var tmp_0 = to('avant hier', RepereTemporel$formes$lambda);
    var tmp_1 = to('hier', RepereTemporel$formes$lambda_0);
    var tmp_2 = to('aujourd hui', RepereTemporel$formes$lambda_1);
    var tmp_3 = to('ce matin', RepereTemporel$formes$lambda_2);
    var tmp_4 = to('cet apres midi', RepereTemporel$formes$lambda_3);
    var tmp_5 = to('semaine derniere', RepereTemporel$formes$lambda_4);
    var tmp_6 = to('semaine passee', RepereTemporel$formes$lambda_5);
    var tmp_7 = to('cette semaine', RepereTemporel$formes$lambda_6);
    var tmp_8 = to('week end dernier', RepereTemporel$formes$lambda_7);
    var tmp_9 = to('mois dernier', RepereTemporel$formes$lambda_8);
    var tmp_10 = to('mois passe', RepereTemporel$formes$lambda_9);
    var tmp_11 = to('ce mois ci', RepereTemporel$formes$lambda_10);
    var tmp_12 = to('lundi dernier', RepereTemporel$formes$lambda_11);
    var tmp_13 = to('mardi dernier', RepereTemporel$formes$lambda_12);
    var tmp_14 = to('mercredi dernier', RepereTemporel$formes$lambda_13);
    var tmp_15 = to('jeudi dernier', RepereTemporel$formes$lambda_14);
    var tmp_16 = to('vendredi dernier', RepereTemporel$formes$lambda_15);
    var tmp_17 = to('samedi dernier', RepereTemporel$formes$lambda_16);
    tmp.y17_1 = listOf([tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, to('dimanche dernier', RepereTemporel$formes$lambda_17)]);
    this.z17_1 = mapOf([to('un', 1), to('une', 1), to('deux', 2), to('trois', 3), to('quatre', 4), to('cinq', 5), to('six', 6), to('sept', 7), to('huit', 8), to('neuf', 9), to('dix', 10), to('quinze', 15)]);
  }
  protoOf(RepereTemporel).a18 = function (requete) {
    var plie = aplatir(this, requete);
    var tmp0 = this.w17_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.recherche.RepereTemporel.contexteEvoque.<anonymous>' call
        if (contains(plie, ' ' + element + ' ')) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(RepereTemporel).b18 = function (requete, aujourdhui) {
    var plie = aplatir(this, requete);
    var _iterator__ex2g4s = this.y17_1.g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      var expression = _destruct__k2r9zo.ba();
      var calcul = _destruct__k2r9zo.ca();
      if (contains(plie, ' ' + expression + ' '))
        return new Repere(calcul(aujourdhui), expression);
    }
    return depuisCompte(this, plie, aujourdhui);
  };
  protoOf(RepereTemporel).f18 = function (requete, repere) {
    var motsDuRepere = toSet(Texte_getInstance().j18(repere.d18_1));
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = Texte_getInstance().j18(requete);
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RepereTemporel.sansRepere.<anonymous>' call
      if (!motsDuRepere.o1(element)) {
        destination.e(element);
      }
    }
    return joinToString(destination, ' ');
  };
  var RepereTemporel_instance;
  function RepereTemporel_getInstance() {
    if (RepereTemporel_instance == null)
      new RepereTemporel();
    return RepereTemporel_instance;
  }
  function RevueReduite(retenues, demeurentEnFile, motif) {
    this.p15_1 = retenues;
    this.q15_1 = demeurentEnFile;
    this.r15_1 = motif;
  }
  protoOf(RevueReduite).x15 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.q15_1.j();
  };
  protoOf(RevueReduite).toString = function () {
    return 'RevueReduite(retenues=' + toString_0(this.p15_1) + ', demeurentEnFile=' + toString_0(this.q15_1) + ', motif=' + this.r15_1 + ')';
  };
  protoOf(RevueReduite).hashCode = function () {
    var result = hashCode(this.p15_1);
    result = imul(result, 31) + hashCode(this.q15_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r15_1) | 0;
    return result;
  };
  protoOf(RevueReduite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueReduite))
      return false;
    var tmp0_other_with_cast = other instanceof RevueReduite ? other : THROW_CCE();
    if (!equals(this.p15_1, tmp0_other_with_cast.p15_1))
      return false;
    if (!equals(this.q15_1, tmp0_other_with_cast.q15_1))
      return false;
    if (!(this.r15_1 === tmp0_other_with_cast.r15_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.k18_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).ia = function (a, b) {
    return this.k18_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.ia(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).p2 = function () {
    return this.k18_1;
  };
  protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.p2(), other.p2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_2).hashCode = function () {
    return hashCode(this.p2());
  };
  function Arriere$revueReduite$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs = b.s15_1.y14_1;
    var tmp = (tmp0_elvis_lhs == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs).y1_1;
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs_0 = a.s15_1.y14_1;
    var tmp$ret$1 = (tmp0_elvis_lhs_0 == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs_0).y1_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Arriere$revueReduite$lambda_0($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp_0 = a.t15_1.y1_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.t15_1.y1_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Arriere$revueReduite$lambda_1($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp_0 = a.w15().z13_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.w15().z13_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Arriere() {
    this.n15_1 = 12;
  }
  protoOf(Arriere).l18 = function (entrees, charge) {
    // Inline function 'kotlin.require' call
    if (!(charge > 0)) {
      // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
      var message = "Une Revue r\xE9duite \xE0 z\xE9ro \xE9l\xE9ment n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (entrees.l() <= charge) {
      return new RevueReduite(entrees, emptyList(), 'La file tient en une Revue.');
    }
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = Arriere$revueReduite$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_2(tmp);
    var tmp_0 = Arriere$revueReduite$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_2(tmp_0);
    var tmp_1 = Arriere$revueReduite$lambda_1(this_1);
    var tmp$ret$3 = new sam$kotlin_Comparator$0_2(tmp_1);
    var parImportance = sortedWith(entrees, tmp$ret$3);
    var retenues = take(parImportance, charge);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(retenues, 10));
    var _iterator__ex2g4s = retenues.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
      var tmp$ret$4 = item.w15();
      destination.e(tmp$ret$4);
    }
    var gardees = toSet(destination);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = entrees.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
      if (gardees.o1(element.w15())) {
        destination_0.e(element);
      }
    }
    var tmp_2 = destination_0;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = entrees.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
      if (!gardees.o1(element_0.w15())) {
        destination_1.e(element_0);
      }
    }
    return new RevueReduite(tmp_2, destination_1, 'Beaucoup de choses en attente. Voici les ' + charge + ' plus lourdes ou ' + 'les plus press\xE9es ; le reste demeure en file, intact.');
  };
  protoOf(Arriere).o15 = function (entrees, charge, $super) {
    charge = charge === VOID ? 12 : charge;
    return $super === VOID ? this.l18(entrees, charge) : $super.l18.call(this, entrees, charge);
  };
  var Arriere_instance;
  function Arriere_getInstance() {
    return Arriere_instance;
  }
  function EntreeRevue(element, urgence, aConfirmer, planAFournir) {
    this.s15_1 = element;
    this.t15_1 = urgence;
    this.u15_1 = aConfirmer;
    this.v15_1 = planAFournir;
  }
  protoOf(EntreeRevue).w15 = function () {
    return this.s15_1.s14_1;
  };
  protoOf(EntreeRevue).toString = function () {
    return 'EntreeRevue(element=' + this.s15_1.toString() + ', urgence=' + this.t15_1.toString() + ', aConfirmer=' + this.u15_1 + ', planAFournir=' + this.v15_1 + ')';
  };
  protoOf(EntreeRevue).hashCode = function () {
    var result = this.s15_1.hashCode();
    result = imul(result, 31) + this.t15_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u15_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v15_1) | 0;
    return result;
  };
  protoOf(EntreeRevue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevue))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevue ? other : THROW_CCE();
    if (!this.s15_1.equals(tmp0_other_with_cast.s15_1))
      return false;
    if (!this.t15_1.equals(tmp0_other_with_cast.t15_1))
      return false;
    if (!(this.u15_1 === tmp0_other_with_cast.u15_1))
      return false;
    if (!(this.v15_1 === tmp0_other_with_cast.v15_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_3(function_0) {
    this.m18_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).ia = function (a, b) {
    return this.m18_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.ia(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).p2 = function () {
    return this.m18_1;
  };
  protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.p2(), other.p2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_3).hashCode = function () {
    return hashCode(this.p2());
  };
  function FileRevue$ordreInterne$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp = a.t15_1.y1_1;
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp$ret$1 = b.t15_1.y1_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileRevue$ordreInterne$lambda_0($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp_0 = b.u15_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = a.u15_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function FileRevue$ordreInterne$lambda_1($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp_0 = a.w15().z13_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = b.w15().z13_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function FileRevue() {
    FileRevue_instance = this;
    var tmp = this;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = FileRevue$ordreInterne$lambda;
    // Inline function 'kotlin.comparisons.thenByDescending' call
    var this_0 = new sam$kotlin_Comparator$0_3(tmp_0);
    var tmp_1 = FileRevue$ordreInterne$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_3(tmp_1);
    var tmp_2 = FileRevue$ordreInterne$lambda_1(this_1);
    tmp.l15_1 = new sam$kotlin_Comparator$0_3(tmp_2);
  }
  protoOf(FileRevue).m15 = function (element, aujourdhui) {
    return new EntreeRevue(element, Priorisation_getInstance().e17(element.x14_1, aujourdhui), element.d15_1, element.u14_1.r16() && element.b15_1 == null);
  };
  var FileRevue_instance;
  function FileRevue_getInstance() {
    if (FileRevue_instance == null)
      new FileRevue();
    return FileRevue_instance;
  }
  function Suivi(elementId, derniereNouvelle) {
    this.n18_1 = elementId;
    this.o18_1 = derniereNouvelle;
  }
  protoOf(Suivi).toString = function () {
    return 'Suivi(elementId=' + this.n18_1.toString() + ', derniereNouvelle=' + this.o18_1.toString() + ')';
  };
  protoOf(Suivi).hashCode = function () {
    var result = this.n18_1.hashCode();
    result = imul(result, 31) + this.o18_1.hashCode() | 0;
    return result;
  };
  protoOf(Suivi).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Suivi))
      return false;
    var tmp0_other_with_cast = other instanceof Suivi ? other : THROW_CCE();
    if (!this.n18_1.equals(tmp0_other_with_cast.n18_1))
      return false;
    if (!this.o18_1.equals(tmp0_other_with_cast.o18_1))
      return false;
    return true;
  };
  var OptionRelance_RELANCER_instance;
  var OptionRelance_PROLONGER_instance;
  var OptionRelance_CLORE_instance;
  var OptionRelance_entriesInitialized;
  function OptionRelance_initEntries() {
    if (OptionRelance_entriesInitialized)
      return Unit_instance;
    OptionRelance_entriesInitialized = true;
    OptionRelance_RELANCER_instance = new OptionRelance('RELANCER', 0);
    OptionRelance_PROLONGER_instance = new OptionRelance('PROLONGER', 1);
    OptionRelance_CLORE_instance = new OptionRelance('CLORE', 2);
  }
  function OptionRelance(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PropositionRelance(element, motif, options) {
    options = options === VOID ? listOf([OptionRelance_RELANCER_getInstance(), OptionRelance_PROLONGER_getInstance(), OptionRelance_CLORE_getInstance()]) : options;
    this.c16_1 = element;
    this.d16_1 = motif;
    this.e16_1 = options;
  }
  protoOf(PropositionRelance).toString = function () {
    return 'PropositionRelance(element=' + this.c16_1.toString() + ', motif=' + this.d16_1 + ', options=' + toString_0(this.e16_1) + ')';
  };
  protoOf(PropositionRelance).hashCode = function () {
    var result = this.c16_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.d16_1) | 0;
    result = imul(result, 31) + hashCode(this.e16_1) | 0;
    return result;
  };
  protoOf(PropositionRelance).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionRelance))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionRelance ? other : THROW_CCE();
    if (!this.c16_1.equals(tmp0_other_with_cast.c16_1))
      return false;
    if (!(this.d16_1 === tmp0_other_with_cast.d16_1))
      return false;
    if (!equals(this.e16_1, tmp0_other_with_cast.e16_1))
      return false;
    return true;
  };
  function engagement($this, element, aujourdhui) {
    var tmp0_elvis_lhs = element.x14_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var echeance = tmp;
    var jours = daysUntil(aujourdhui, echeance);
    if (jours > 3)
      return null;
    var motif = jours < 0 ? "engagement dont l'\xE9ch\xE9ance est pass\xE9e de " + (-jours | 0) + ' jour(s)' : jours === 0 ? "engagement \xE0 tenir aujourd'hui" : 'engagement \xE0 tenir dans ' + jours + ' jour(s)';
    var tmp1_safe_receiver = element.z14_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.revue.Relance.engagement.<anonymous>' call
      tmp_0 = ' envers ' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp_0;
    var envers = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    return new PropositionRelance(element, motif + envers);
  }
  function attente($this, element, depuis, aujourdhui, delaisObserves) {
    if (depuis == null)
      return null;
    var silence = daysUntil(depuis, aujourdhui);
    var delai = $this.p18(element.z14_1, delaisObserves);
    if (silence <= delai)
      return null;
    var tmp0_elvis_lhs = element.z14_1;
    var qui = tmp0_elvis_lhs == null ? 'cette personne' : tmp0_elvis_lhs;
    var tmp0 = delaisObserves.u1();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element_0 = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.revue.Relance.attente.<anonymous>' call
        var tmp_0 = Texte_getInstance();
        var tmp0_elvis_lhs_0 = element.z14_1;
        if (tmp_0.h18(element_0, tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    var observe = tmp$ret$0;
    var qualifie = observe ? 'au-del\xE0 du d\xE9lai habituel pour ' + qui : 'au-del\xE0 du d\xE9lai de relance par d\xE9faut';
    return new PropositionRelance(element, 'sans nouvelle de ' + qui + ' depuis ' + silence + ' jours, ' + qualifie + ' (' + delai + ' jours)');
  }
  function Relance$aRelancer$lambda(it) {
    var tmp0_safe_receiver = it.c16_1.x14_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return tmp1_elvis_lhs == null ? '9999' : tmp1_elvis_lhs;
  }
  function Relance$aRelancer$lambda_0(it) {
    return it.c16_1.s14_1.z13_1;
  }
  function Relance() {
    this.z15_1 = 3;
    this.a16_1 = 7;
  }
  protoOf(Relance).p18 = function (personne, observes) {
    if (personne == null)
      return 7;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = observes.v1();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
      if (Texte_getInstance().h18(element.q1(), personne)) {
        destination.e(element);
      }
    }
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator = destination.g();
      if (!iterator.h()) {
        tmp$ret$3 = null;
        break $l$block_0;
      }
      var minElem = iterator.i();
      if (!iterator.h()) {
        tmp$ret$3 = minElem;
        break $l$block_0;
      }
      // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
      var minValue = minElem.q1();
      do {
        var e = iterator.i();
        // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
        var v = e.q1();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.h());
      tmp$ret$3 = minElem;
    }
    var trouve = tmp$ret$3;
    var tmp1_elvis_lhs = trouve == null ? null : trouve.r1();
    return tmp1_elvis_lhs == null ? 7 : tmp1_elvis_lhs;
  };
  protoOf(Relance).b16 = function (elements, aujourdhui, suivis, delaisObserves) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(suivis, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = suivis.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.n18_1, element.o18_1);
      destination.w1(pair.z9_1, pair.aa_1);
    }
    var parElement = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = elements.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      if (element_0.c15_1.equals(Verdict_ACCEPTE_getInstance())) {
        destination_0.e(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = destination_0.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_1 = _iterator__ex2g4s_1.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      var tmp;
      switch (element_1.u14_1.y1_1) {
        case 1:
          tmp = engagement(Relance_instance, element_1, aujourdhui);
          break;
        case 2:
          var tmp_0 = Relance_instance;
          var tmp1_elvis_lhs = parElement.t1(element_1.s14_1);
          tmp = attente(tmp_0, element_1, tmp1_elvis_lhs == null ? element_1.x14_1 : tmp1_elvis_lhs, aujourdhui, delaisObserves);
          break;
        default:
          tmp = null;
          break;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination_1.e(tmp0_safe_receiver);
      }
    }
    var tmp_1 = destination_1;
    var tmp_2 = Relance$aRelancer$lambda;
    return sortedWith(tmp_1, compareBy([tmp_2, Relance$aRelancer$lambda_0]));
  };
  var Relance_instance;
  function Relance_getInstance() {
    return Relance_instance;
  }
  function OptionRelance_RELANCER_getInstance() {
    OptionRelance_initEntries();
    return OptionRelance_RELANCER_instance;
  }
  function OptionRelance_PROLONGER_getInstance() {
    OptionRelance_initEntries();
    return OptionRelance_PROLONGER_instance;
  }
  function OptionRelance_CLORE_getInstance() {
    OptionRelance_initEntries();
    return OptionRelance_CLORE_instance;
  }
  function Texte() {
    Texte_instance = this;
    this.r17_1 = '\xE0\xE1\xE2\xE3\xE4\xE5\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF1\xF2\xF3\xF4\xF5\xF6\xF9\xFA\xFB\xFC\xFD\xFF';
    this.s17_1 = 'aaaaaaceeeeiiiinooooouuuuyy';
    this.t17_1 = setOf(['le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux', 'et', 'ou', 'a', '\xE0', 'en', 'dans', 'sur', 'pour', 'par', 'avec', 'que', 'qui', 'quoi', 'ce', 'cet', 'cette', 'ces', 'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'est', 'sont', 'ai', 'as', 'ont', 'etait', 'ete', 'pas', 'ne', 'plus']);
  }
  protoOf(Texte).i18 = function (texte) {
    // Inline function 'kotlin.text.buildString' call
    var capacity = texte.length;
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'app.zenote.core.texte.Texte.plier.<anonymous>' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.text.forEach' call
    var indexedObject = texte.toLowerCase();
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(indexedObject)) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'app.zenote.core.texte.Texte.plier.<anonymous>.<anonymous>' call
      var i = indexOf('\xE0\xE1\xE2\xE3\xE4\xE5\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF1\xF2\xF3\xF4\xF5\xF6\xF9\xFA\xFB\xFC\xFD\xFF', element);
      this_0.p6(i >= 0 ? charSequenceGet('aaaaaaceeeeiiiinooooouuuuyy', i) : element);
    }
    return this_0.toString();
  };
  protoOf(Texte).j18 = function (texte) {
    // Inline function 'kotlin.text.map' call
    var this_0 = this.i18(texte);
    // Inline function 'kotlin.text.mapTo' call
    var destination = ArrayList_init_$Create$(charSequenceLength(this_0));
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(this_0)) {
      var item = charSequenceGet(this_0, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'app.zenote.core.texte.Texte.mots.<anonymous>' call
      var tmp$ret$0 = new Char(isLetterOrDigit(item) ? item : _Char___init__impl__6a9atx(32));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = split(joinToString(destination, ''), charArrayOf([_Char___init__impl__6a9atx(32)]));
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.texte.Texte.mots.<anonymous>' call
      if (element.length > 1 && !Texte_getInstance().t17_1.o1(element)) {
        destination_0.e(element);
      }
    }
    return destination_0;
  };
  protoOf(Texte).q18 = function (texte) {
    return toSet(this.j18(texte));
  };
  protoOf(Texte).u17 = function (requete, texte) {
    var demandes = this.q18(requete);
    if (demandes.j())
      return 0.0;
    var presents = this.q18(texte);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp;
      if (isInterface(demandes, Collection)) {
        tmp = demandes.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var _iterator__ex2g4s = demandes.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.texte.Texte.recouvrement.<anonymous>' call
        if (presents.o1(element)) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    return tmp$ret$0 / demandes.l();
  };
  protoOf(Texte).h18 = function (a, b) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(a) ? a : THROW_CCE()));
    var tmp = this.i18(tmp$ret$0);
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1 = toString_0(trim(isCharSequence(b) ? b : THROW_CCE()));
    return tmp === this.i18(tmp$ret$1);
  };
  var Texte_instance;
  function Texte_getInstance() {
    if (Texte_instance == null)
      new Texte();
    return Texte_instance;
  }
  function ZeNoteRegles() {
    this.version = '4';
  }
  protoOf(ZeNoteRegles).maintenant = function (elementsJson, aujourdhui) {
    return Regles_getInstance().o14(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).revue = function (elementsJson, aujourdhui) {
    return Regles_getInstance().k15(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).filtrerAncrage = function (texteSource, elementsJson) {
    return Regles_getInstance().f16(texteSource, elementsJson);
  };
  protoOf(ZeNoteRegles).relances = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    return Regles_getInstance().y15(elementsJson, aujourdhui, suivisJson, delaisJson);
  };
  protoOf(ZeNoteRegles).rechercherParMots = function (requete, elementsJson, capturesJson, reseau) {
    return Regles_getInstance().g16(requete, elementsJson, capturesJson, reseau);
  };
  protoOf(ZeNoteRegles).rechercherParQuestion = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
    return Regles_getInstance().l16(requete, elementsJson, capturesJson, aujourdhui, reseau);
  };
  protoOf(ZeNoteRegles).rechercherParPersonne = function (personne, elementsJson, reseau) {
    return Regles_getInstance().n16(personne, elementsJson, reseau);
  };
  protoOf(ZeNoteRegles).r18 = function () {
    return this.version;
  };
  var ZeNoteRegles_instance;
  function ZeNoteRegles_getInstance() {
    return ZeNoteRegles_instance;
  }
  //region block: post-declaration
  protoOf($serializer).oh = typeParametersSerializers;
  protoOf($serializer_0).oh = typeParametersSerializers;
  protoOf($serializer_1).oh = typeParametersSerializers;
  protoOf($serializer_2).oh = typeParametersSerializers;
  protoOf($serializer_3).oh = typeParametersSerializers;
  protoOf($serializer_4).oh = typeParametersSerializers;
  protoOf($serializer_5).oh = typeParametersSerializers;
  protoOf($serializer_6).oh = typeParametersSerializers;
  protoOf($serializer_7).oh = typeParametersSerializers;
  protoOf($serializer_8).oh = typeParametersSerializers;
  protoOf($serializer_9).oh = typeParametersSerializers;
  protoOf($serializer_10).oh = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_5 = new Companion_4();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  Companion_instance_12 = new Companion_11();
  Arriere_instance = new Arriere();
  Relance_instance = new Relance();
  ZeNoteRegles_instance = new ZeNoteRegles();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $app = _.app || (_.app = {});
    var $app$zenote = $app.zenote || ($app.zenote = {});
    var $app$zenote$core = $app$zenote.core || ($app$zenote.core = {});
    var $app$zenote$core$js = $app$zenote$core.js || ($app$zenote$core.js = {});
    defineProp($app$zenote$core$js, 'ZeNoteRegles', ZeNoteRegles_getInstance);
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

