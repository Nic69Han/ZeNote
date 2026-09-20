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
  var protoOf = kotlin_kotlin.$_$.c5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.r1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.c7;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var initMetadataForObject = kotlin_kotlin.$_$.r4;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.b5;
  var toString = kotlin_kotlin.$_$.o7;
  var getStringHashCode = kotlin_kotlin.$_$.k4;
  var getNumberHashCode = kotlin_kotlin.$_$.i4;
  var getBooleanHashCode = kotlin_kotlin.$_$.h4;
  var equals = kotlin_kotlin.$_$.f4;
  var initMetadataForClass = kotlin_kotlin.$_$.m4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toString_0 = kotlin_kotlin.$_$.f5;
  var hashCode = kotlin_kotlin.$_$.l4;
  var emptyList = kotlin_kotlin.$_$.i2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.n;
  var until = kotlin_kotlin.$_$.m5;
  var Collection = kotlin_kotlin.$_$.t1;
  var isInterface = kotlin_kotlin.$_$.u4;
  var Companion_instance = kotlin_kotlin.$_$.q1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l1;
  var createFailure = kotlin_kotlin.$_$.g7;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.m1;
  var isBlank = kotlin_kotlin.$_$.w5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.n1;
  var listOfNotNull = kotlin_kotlin.$_$.w2;
  var FunctionAdapter = kotlin_kotlin.$_$.v3;
  var Comparator = kotlin_kotlin.$_$.u6;
  var compareValues = kotlin_kotlin.$_$.q3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var compareTo = kotlin_kotlin.$_$.d4;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var mapCapacity = kotlin_kotlin.$_$.z2;
  var coerceAtLeast = kotlin_kotlin.$_$.i5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var getValue = kotlin_kotlin.$_$.m2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var sortedWith = kotlin_kotlin.$_$.k3;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.p1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.o1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.o;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.p;
  var toInstant = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.v;
  var ensureNotNull = kotlin_kotlin.$_$.h7;
  var to = kotlin_kotlin.$_$.p7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.m7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x;
  var THROW_IAE = kotlin_kotlin.$_$.d7;
  var Enum = kotlin_kotlin.$_$.x6;
  var Long = kotlin_kotlin.$_$.a7;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.q;
  var take = kotlin_kotlin.$_$.l3;
  var LocalTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.l;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o;
  var LocalDateTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.j;
  var contains = kotlin_kotlin.$_$.r5;
  var Companion_getInstance_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.m;
  var plus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.u;
  var toInt = kotlin_kotlin.$_$.q6;
  var LocalDateTime_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.k;
  var single = kotlin_kotlin.$_$.i3;
  var listOf = kotlin_kotlin.$_$.y2;
  var toList = kotlin_kotlin.$_$.m3;
  var toSet = kotlin_kotlin.$_$.o3;
  var plus_0 = kotlin_kotlin.$_$.d3;
  var compareBy = kotlin_kotlin.$_$.p3;
  var listOfNotNull_0 = kotlin_kotlin.$_$.v2;
  var charSequenceLength = kotlin_kotlin.$_$.b4;
  var charSequenceGet = kotlin_kotlin.$_$.a4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h1;
  var isLetterOrDigit = kotlin_kotlin.$_$.y5;
  var Char = kotlin_kotlin.$_$.s6;
  var joinToString = kotlin_kotlin.$_$.p2;
  var charArrayOf = kotlin_kotlin.$_$.y3;
  var split = kotlin_kotlin.$_$.i6;
  var get_isoDayNumber = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.r;
  var DatePeriod_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.h;
  var minus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.s;
  var plus_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.t;
  var LocalDate_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.i;
  var substringAfter = kotlin_kotlin.$_$.m6;
  var isCharSequence = kotlin_kotlin.$_$.t4;
  var trim = kotlin_kotlin.$_$.r6;
  var split_0 = kotlin_kotlin.$_$.j6;
  var toIntOrNull = kotlin_kotlin.$_$.p6;
  var startsWith = kotlin_kotlin.$_$.k6;
  var minOf = kotlin_kotlin.$_$.r3;
  var DayOfWeek_SATURDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var DayOfWeek_MONDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DayOfWeek_TUESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.f;
  var DayOfWeek_WEDNESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.g;
  var DayOfWeek_THURSDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var DayOfWeek_FRIDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DayOfWeek_SUNDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var mapOf = kotlin_kotlin.$_$.a3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.t5;
  var isUpperCase = kotlin_kotlin.$_$.z5;
  var isDigit = kotlin_kotlin.$_$.x5;
  var lastOrNull = kotlin_kotlin.$_$.d6;
  var isWhitespace = kotlin_kotlin.$_$.a6;
  var setOf = kotlin_kotlin.$_$.g3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var indexOf = kotlin_kotlin.$_$.v5;
  var checkCountOverflow = kotlin_kotlin.$_$.z1;
  var defineProp = kotlin_kotlin.$_$.e4;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ElementJson, 'ElementJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PassageIncertainJson, 'PassageIncertainJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PropositionJson, 'PropositionJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EntreeRevueJson, 'EntreeRevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GroupeRevueJson, 'GroupeRevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RelanceJson, 'RelanceJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SuiviJson, 'SuiviJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SuiviRappelJson, 'SuiviRappelJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RappelLivreJson, 'RappelLivreJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EscaladeJson, 'EscaladeJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RappelsDuMomentJson, 'RappelsDuMomentJson', RappelsDuMomentJson, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RevueJson, 'RevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AncrageJson, 'AncrageJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EcarteJson, 'EcarteJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CaptureJson, 'CaptureJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CitationJson, 'CitationJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ReponseJson, 'ReponseJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Regles, 'Regles');
  initMetadataForClass(Deduit, 'Deduit');
  initMetadataForClass(TypeElement, 'TypeElement', VOID, Enum);
  initMetadataForClass(Poids, 'Poids', VOID, Enum);
  initMetadataForClass(Sphere, 'Sphere', VOID, Enum);
  initMetadataForClass(Plan, 'Plan');
  initMetadataForClass(ElementId, 'ElementId');
  initMetadataForClass(ElementDerive, 'ElementDerive');
  initMetadataForClass(Verdict, 'Verdict', VOID, Enum);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(ElementResolu, 'ElementResolu');
  initMetadataForClass(CaptureId, 'CaptureId');
  initMetadataForClass(Passage, 'Passage');
  initMetadataForClass(Urgence, 'Urgence', VOID, Enum);
  initMetadataForClass(ContexteMaintenant, 'ContexteMaintenant');
  initMetadataForClass(Proposition, 'Proposition');
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Priorisation, 'Priorisation');
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(PointDeRupture, 'PointDeRupture', VOID, Enum);
  initMetadataForClass(Observable, 'Observable');
  initMetadataForClass(Substituee, 'Substituee');
  initMetadataForObject(Echeancier, 'Echeancier');
  initMetadataForClass(Immediate, 'Immediate');
  initMetadataForClass(MiseEnFile, 'MiseEnFile');
  initMetadataForClass(Escaladee, 'Escaladee');
  initMetadataForClass(Notification, 'Notification');
  initMetadataForClass(OptionEscalade, 'OptionEscalade', VOID, Enum);
  initMetadataForClass(Escalade, 'Escalade');
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(FileOpportunite, 'FileOpportunite', FileOpportunite);
  initMetadataForClass(RappelId, 'RappelId');
  initMetadataForClass(Rappel, 'Rappel');
  initMetadataForClass(TexteSource, 'TexteSource');
  initMetadataForClass(Citation, 'Citation');
  initMetadataForClass(Reponse, 'Reponse');
  initMetadataForClass(sam$kotlin_Comparator$0_4, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(RechercheLocale, 'RechercheLocale');
  initMetadataForClass(Periode, 'Periode');
  initMetadataForClass(Repere, 'Repere');
  initMetadataForObject(RepereTemporel, 'RepereTemporel');
  initMetadataForClass(RevueReduite, 'RevueReduite');
  initMetadataForClass(sam$kotlin_Comparator$0_5, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Arriere, 'Arriere');
  initMetadataForClass(EntreeRevue, 'EntreeRevue');
  initMetadataForClass(sam$kotlin_Comparator$0_6, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(FileRevue, 'FileRevue');
  initMetadataForClass(Suivi, 'Suivi');
  initMetadataForClass(OptionRelance, 'OptionRelance', VOID, Enum);
  initMetadataForClass(PropositionRelance, 'PropositionRelance');
  initMetadataForObject(Relance, 'Relance');
  initMetadataForClass(Jeton, 'Jeton');
  initMetadataForObject(Disfluences, 'Disfluences');
  initMetadataForObject(Texte, 'Texte');
  initMetadataForObject(ZeNoteRegles, 'ZeNoteRegles');
  //endregion
  function Companion() {
  }
  protoOf(Companion).w16 = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ElementJson', this, 22);
    tmp0_serialDesc.hj('id', false);
    tmp0_serialDesc.hj('captureId', false);
    tmp0_serialDesc.hj('type', false);
    tmp0_serialDesc.hj('texte', false);
    tmp0_serialDesc.hj('debutCar', false);
    tmp0_serialDesc.hj('finCar', false);
    tmp0_serialDesc.hj('debutMs', true);
    tmp0_serialDesc.hj('finMs', true);
    tmp0_serialDesc.hj('echeance', true);
    tmp0_serialDesc.hj('echeanceConfiance', true);
    tmp0_serialDesc.hj('echeanceIndice', true);
    tmp0_serialDesc.hj('poids', true);
    tmp0_serialDesc.hj('poidsConfiance', true);
    tmp0_serialDesc.hj('poidsIndice', true);
    tmp0_serialDesc.hj('interlocuteur', true);
    tmp0_serialDesc.hj('interlocuteurConfiance', true);
    tmp0_serialDesc.hj('sphere', true);
    tmp0_serialDesc.hj('planDeclencheur', true);
    tmp0_serialDesc.hj('planAction', true);
    tmp0_serialDesc.hj('verdict', true);
    tmp0_serialDesc.hj('corrigeParHumain', true);
    tmp0_serialDesc.hj('transcriptionIncertaine', true);
    this.x16_1 = tmp0_serialDesc;
  }
  protoOf($serializer).y16 = function (encoder, value) {
    var tmp0_desc = this.x16_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.wf(tmp0_desc, 0, value.z16_1);
    tmp1_output.wf(tmp0_desc, 1, value.a17_1);
    tmp1_output.wf(tmp0_desc, 2, value.b17_1);
    tmp1_output.wf(tmp0_desc, 3, value.c17_1);
    tmp1_output.vf(tmp0_desc, 4, value.d17_1);
    tmp1_output.vf(tmp0_desc, 5, value.e17_1);
    if (tmp1_output.dg(tmp0_desc, 6) ? true : !(value.f17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 6, LongSerializer_getInstance(), value.f17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 7) ? true : !(value.g17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 7, LongSerializer_getInstance(), value.g17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 8) ? true : !(value.h17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 8, StringSerializer_getInstance(), value.h17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 9) ? true : !(value.i17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 9, DoubleSerializer_getInstance(), value.i17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 10) ? true : !(value.j17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 10, StringSerializer_getInstance(), value.j17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 11) ? true : !(value.k17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 11, StringSerializer_getInstance(), value.k17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 12) ? true : !(value.l17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 12, DoubleSerializer_getInstance(), value.l17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 13) ? true : !(value.m17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 13, StringSerializer_getInstance(), value.m17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 14) ? true : !(value.n17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 14, StringSerializer_getInstance(), value.n17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 15) ? true : !(value.o17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 15, DoubleSerializer_getInstance(), value.o17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 16) ? true : !(value.p17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 16, StringSerializer_getInstance(), value.p17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 17) ? true : !(value.q17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 17, StringSerializer_getInstance(), value.q17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 18) ? true : !(value.r17_1 == null)) {
      tmp1_output.zf(tmp0_desc, 18, StringSerializer_getInstance(), value.r17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 19) ? true : !(value.s17_1 === 'EN_ATTENTE')) {
      tmp1_output.wf(tmp0_desc, 19, value.s17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 20) ? true : !(value.t17_1 === false)) {
      tmp1_output.uf(tmp0_desc, 20, value.t17_1);
    }
    if (tmp1_output.dg(tmp0_desc, 21) ? true : !(value.u17_1 === false)) {
      tmp1_output.uf(tmp0_desc, 21, value.u17_1);
    }
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer).qd = function (encoder, value) {
    return this.y16(encoder, value instanceof ElementJson ? value : THROW_CCE());
  };
  protoOf($serializer).rd = function (decoder) {
    var tmp0_desc = this.x16_1;
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
    var tmp25_local21 = false;
    var tmp26_input = decoder.af(tmp0_desc);
    if (tmp26_input.jf()) {
      tmp4_local0 = tmp26_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp26_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp26_input.ef(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp26_input.ef(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp26_input.df(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp26_input.df(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp26_input.hf(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp26_input.hf(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp26_input.hf(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp26_input.hf(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp26_input.hf(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp26_input.hf(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp26_input.hf(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp26_input.hf(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp26_input.hf(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp26_input.hf(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp26_input.hf(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp26_input.hf(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp26_input.hf(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp26_input.ef(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp26_input.cf(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp26_input.cf(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp26_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp26_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp26_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp26_input.ef(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp26_input.ef(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp26_input.df(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp26_input.df(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp26_input.hf(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp26_input.hf(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp26_input.hf(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp26_input.hf(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp26_input.hf(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp26_input.hf(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp26_input.hf(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp26_input.hf(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp26_input.hf(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp26_input.hf(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp26_input.hf(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp26_input.hf(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp26_input.hf(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp26_input.ef(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp26_input.cf(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp26_input.cf(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp26_input.bf(tmp0_desc);
    return ElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, null);
  };
  protoOf($serializer).pd = function () {
    return this.x16_1;
  };
  protoOf($serializer).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance().x16_1);
    }
    $this.z16_1 = id;
    $this.a17_1 = captureId;
    $this.b17_1 = type;
    $this.c17_1 = texte;
    $this.d17_1 = debutCar;
    $this.e17_1 = finCar;
    if (0 === (seen0 & 64))
      $this.f17_1 = null;
    else
      $this.f17_1 = debutMs;
    if (0 === (seen0 & 128))
      $this.g17_1 = null;
    else
      $this.g17_1 = finMs;
    if (0 === (seen0 & 256))
      $this.h17_1 = null;
    else
      $this.h17_1 = echeance;
    if (0 === (seen0 & 512))
      $this.i17_1 = null;
    else
      $this.i17_1 = echeanceConfiance;
    if (0 === (seen0 & 1024))
      $this.j17_1 = null;
    else
      $this.j17_1 = echeanceIndice;
    if (0 === (seen0 & 2048))
      $this.k17_1 = null;
    else
      $this.k17_1 = poids;
    if (0 === (seen0 & 4096))
      $this.l17_1 = null;
    else
      $this.l17_1 = poidsConfiance;
    if (0 === (seen0 & 8192))
      $this.m17_1 = null;
    else
      $this.m17_1 = poidsIndice;
    if (0 === (seen0 & 16384))
      $this.n17_1 = null;
    else
      $this.n17_1 = interlocuteur;
    if (0 === (seen0 & 32768))
      $this.o17_1 = null;
    else
      $this.o17_1 = interlocuteurConfiance;
    if (0 === (seen0 & 65536))
      $this.p17_1 = null;
    else
      $this.p17_1 = sphere;
    if (0 === (seen0 & 131072))
      $this.q17_1 = null;
    else
      $this.q17_1 = planDeclencheur;
    if (0 === (seen0 & 262144))
      $this.r17_1 = null;
    else
      $this.r17_1 = planAction;
    if (0 === (seen0 & 524288))
      $this.s17_1 = 'EN_ATTENTE';
    else
      $this.s17_1 = verdict;
    if (0 === (seen0 & 1048576))
      $this.t17_1 = false;
    else
      $this.t17_1 = corrigeParHumain;
    if (0 === (seen0 & 2097152))
      $this.u17_1 = false;
    else
      $this.u17_1 = transcriptionIncertaine;
    return $this;
  }
  function ElementJson_init_$Create$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, serializationConstructorMarker) {
    return ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, serializationConstructorMarker, objectCreate(protoOf(ElementJson)));
  }
  function ElementJson(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    echeance = echeance === VOID ? null : echeance;
    echeanceConfiance = echeanceConfiance === VOID ? null : echeanceConfiance;
    echeanceIndice = echeanceIndice === VOID ? null : echeanceIndice;
    poids = poids === VOID ? null : poids;
    poidsConfiance = poidsConfiance === VOID ? null : poidsConfiance;
    poidsIndice = poidsIndice === VOID ? null : poidsIndice;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    interlocuteurConfiance = interlocuteurConfiance === VOID ? null : interlocuteurConfiance;
    sphere = sphere === VOID ? null : sphere;
    planDeclencheur = planDeclencheur === VOID ? null : planDeclencheur;
    planAction = planAction === VOID ? null : planAction;
    verdict = verdict === VOID ? 'EN_ATTENTE' : verdict;
    corrigeParHumain = corrigeParHumain === VOID ? false : corrigeParHumain;
    transcriptionIncertaine = transcriptionIncertaine === VOID ? false : transcriptionIncertaine;
    this.z16_1 = id;
    this.a17_1 = captureId;
    this.b17_1 = type;
    this.c17_1 = texte;
    this.d17_1 = debutCar;
    this.e17_1 = finCar;
    this.f17_1 = debutMs;
    this.g17_1 = finMs;
    this.h17_1 = echeance;
    this.i17_1 = echeanceConfiance;
    this.j17_1 = echeanceIndice;
    this.k17_1 = poids;
    this.l17_1 = poidsConfiance;
    this.m17_1 = poidsIndice;
    this.n17_1 = interlocuteur;
    this.o17_1 = interlocuteurConfiance;
    this.p17_1 = sphere;
    this.q17_1 = planDeclencheur;
    this.r17_1 = planAction;
    this.s17_1 = verdict;
    this.t17_1 = corrigeParHumain;
    this.u17_1 = transcriptionIncertaine;
  }
  protoOf(ElementJson).v17 = function (id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine) {
    return new ElementJson(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine);
  };
  protoOf(ElementJson).w17 = function (id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, $super) {
    id = id === VOID ? this.z16_1 : id;
    captureId = captureId === VOID ? this.a17_1 : captureId;
    type = type === VOID ? this.b17_1 : type;
    texte = texte === VOID ? this.c17_1 : texte;
    debutCar = debutCar === VOID ? this.d17_1 : debutCar;
    finCar = finCar === VOID ? this.e17_1 : finCar;
    debutMs = debutMs === VOID ? this.f17_1 : debutMs;
    finMs = finMs === VOID ? this.g17_1 : finMs;
    echeance = echeance === VOID ? this.h17_1 : echeance;
    echeanceConfiance = echeanceConfiance === VOID ? this.i17_1 : echeanceConfiance;
    echeanceIndice = echeanceIndice === VOID ? this.j17_1 : echeanceIndice;
    poids = poids === VOID ? this.k17_1 : poids;
    poidsConfiance = poidsConfiance === VOID ? this.l17_1 : poidsConfiance;
    poidsIndice = poidsIndice === VOID ? this.m17_1 : poidsIndice;
    interlocuteur = interlocuteur === VOID ? this.n17_1 : interlocuteur;
    interlocuteurConfiance = interlocuteurConfiance === VOID ? this.o17_1 : interlocuteurConfiance;
    sphere = sphere === VOID ? this.p17_1 : sphere;
    planDeclencheur = planDeclencheur === VOID ? this.q17_1 : planDeclencheur;
    planAction = planAction === VOID ? this.r17_1 : planAction;
    verdict = verdict === VOID ? this.s17_1 : verdict;
    corrigeParHumain = corrigeParHumain === VOID ? this.t17_1 : corrigeParHumain;
    transcriptionIncertaine = transcriptionIncertaine === VOID ? this.u17_1 : transcriptionIncertaine;
    return $super === VOID ? this.v17(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine) : $super.v17.call(this, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine);
  };
  protoOf(ElementJson).toString = function () {
    return 'ElementJson(id=' + this.z16_1 + ', captureId=' + this.a17_1 + ', type=' + this.b17_1 + ', texte=' + this.c17_1 + ', debutCar=' + this.d17_1 + ', finCar=' + this.e17_1 + ', debutMs=' + toString(this.f17_1) + ', finMs=' + toString(this.g17_1) + ', echeance=' + this.h17_1 + ', echeanceConfiance=' + this.i17_1 + ', echeanceIndice=' + this.j17_1 + ', poids=' + this.k17_1 + ', poidsConfiance=' + this.l17_1 + ', poidsIndice=' + this.m17_1 + ', interlocuteur=' + this.n17_1 + ', interlocuteurConfiance=' + this.o17_1 + ', sphere=' + this.p17_1 + ', planDeclencheur=' + this.q17_1 + ', planAction=' + this.r17_1 + ', verdict=' + this.s17_1 + ', corrigeParHumain=' + this.t17_1 + ', transcriptionIncertaine=' + this.u17_1 + ')';
  };
  protoOf(ElementJson).hashCode = function () {
    var result = getStringHashCode(this.z16_1);
    result = imul(result, 31) + getStringHashCode(this.a17_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b17_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c17_1) | 0;
    result = imul(result, 31) + this.d17_1 | 0;
    result = imul(result, 31) + this.e17_1 | 0;
    result = imul(result, 31) + (this.f17_1 == null ? 0 : this.f17_1.hashCode()) | 0;
    result = imul(result, 31) + (this.g17_1 == null ? 0 : this.g17_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h17_1 == null ? 0 : getStringHashCode(this.h17_1)) | 0;
    result = imul(result, 31) + (this.i17_1 == null ? 0 : getNumberHashCode(this.i17_1)) | 0;
    result = imul(result, 31) + (this.j17_1 == null ? 0 : getStringHashCode(this.j17_1)) | 0;
    result = imul(result, 31) + (this.k17_1 == null ? 0 : getStringHashCode(this.k17_1)) | 0;
    result = imul(result, 31) + (this.l17_1 == null ? 0 : getNumberHashCode(this.l17_1)) | 0;
    result = imul(result, 31) + (this.m17_1 == null ? 0 : getStringHashCode(this.m17_1)) | 0;
    result = imul(result, 31) + (this.n17_1 == null ? 0 : getStringHashCode(this.n17_1)) | 0;
    result = imul(result, 31) + (this.o17_1 == null ? 0 : getNumberHashCode(this.o17_1)) | 0;
    result = imul(result, 31) + (this.p17_1 == null ? 0 : getStringHashCode(this.p17_1)) | 0;
    result = imul(result, 31) + (this.q17_1 == null ? 0 : getStringHashCode(this.q17_1)) | 0;
    result = imul(result, 31) + (this.r17_1 == null ? 0 : getStringHashCode(this.r17_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.s17_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t17_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u17_1) | 0;
    return result;
  };
  protoOf(ElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof ElementJson ? other : THROW_CCE();
    if (!(this.z16_1 === tmp0_other_with_cast.z16_1))
      return false;
    if (!(this.a17_1 === tmp0_other_with_cast.a17_1))
      return false;
    if (!(this.b17_1 === tmp0_other_with_cast.b17_1))
      return false;
    if (!(this.c17_1 === tmp0_other_with_cast.c17_1))
      return false;
    if (!(this.d17_1 === tmp0_other_with_cast.d17_1))
      return false;
    if (!(this.e17_1 === tmp0_other_with_cast.e17_1))
      return false;
    if (!equals(this.f17_1, tmp0_other_with_cast.f17_1))
      return false;
    if (!equals(this.g17_1, tmp0_other_with_cast.g17_1))
      return false;
    if (!(this.h17_1 == tmp0_other_with_cast.h17_1))
      return false;
    if (!equals(this.i17_1, tmp0_other_with_cast.i17_1))
      return false;
    if (!(this.j17_1 == tmp0_other_with_cast.j17_1))
      return false;
    if (!(this.k17_1 == tmp0_other_with_cast.k17_1))
      return false;
    if (!equals(this.l17_1, tmp0_other_with_cast.l17_1))
      return false;
    if (!(this.m17_1 == tmp0_other_with_cast.m17_1))
      return false;
    if (!(this.n17_1 == tmp0_other_with_cast.n17_1))
      return false;
    if (!equals(this.o17_1, tmp0_other_with_cast.o17_1))
      return false;
    if (!(this.p17_1 == tmp0_other_with_cast.p17_1))
      return false;
    if (!(this.q17_1 == tmp0_other_with_cast.q17_1))
      return false;
    if (!(this.r17_1 == tmp0_other_with_cast.r17_1))
      return false;
    if (!(this.s17_1 === tmp0_other_with_cast.s17_1))
      return false;
    if (!(this.t17_1 === tmp0_other_with_cast.t17_1))
      return false;
    if (!(this.u17_1 === tmp0_other_with_cast.u17_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).w16 = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PassageIncertainJson', this, 2);
    tmp0_serialDesc.hj('debutCar', false);
    tmp0_serialDesc.hj('finCar', false);
    this.x17_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).y17 = function (encoder, value) {
    var tmp0_desc = this.x17_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.vf(tmp0_desc, 0, value.z17_1);
    tmp1_output.vf(tmp0_desc, 1, value.a18_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_0).qd = function (encoder, value) {
    return this.y17(encoder, value instanceof PassageIncertainJson ? value : THROW_CCE());
  };
  protoOf($serializer_0).rd = function (decoder) {
    var tmp0_desc = this.x17_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.af(tmp0_desc);
    if (tmp6_input.jf()) {
      tmp4_local0 = tmp6_input.df(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.df(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.df(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.df(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bf(tmp0_desc);
    return PassageIncertainJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).pd = function () {
    return this.x17_1;
  };
  protoOf($serializer_0).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function PassageIncertainJson_init_$Init$(seen0, debutCar, finCar, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().x17_1);
    }
    $this.z17_1 = debutCar;
    $this.a18_1 = finCar;
    return $this;
  }
  function PassageIncertainJson_init_$Create$(seen0, debutCar, finCar, serializationConstructorMarker) {
    return PassageIncertainJson_init_$Init$(seen0, debutCar, finCar, serializationConstructorMarker, objectCreate(protoOf(PassageIncertainJson)));
  }
  function PassageIncertainJson() {
  }
  protoOf(PassageIncertainJson).toString = function () {
    return 'PassageIncertainJson(debutCar=' + this.z17_1 + ', finCar=' + this.a18_1 + ')';
  };
  protoOf(PassageIncertainJson).hashCode = function () {
    var result = this.z17_1;
    result = imul(result, 31) + this.a18_1 | 0;
    return result;
  };
  protoOf(PassageIncertainJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PassageIncertainJson))
      return false;
    var tmp0_other_with_cast = other instanceof PassageIncertainJson ? other : THROW_CCE();
    if (!(this.z17_1 === tmp0_other_with_cast.z17_1))
      return false;
    if (!(this.a18_1 === tmp0_other_with_cast.a18_1))
      return false;
    return true;
  };
  function Companion_1() {
  }
  protoOf(Companion_1).w16 = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PropositionJson', this, 5);
    tmp0_serialDesc.hj('elementId', false);
    tmp0_serialDesc.hj('texte', false);
    tmp0_serialDesc.hj('raison', false);
    tmp0_serialDesc.hj('poidsEffectif', false);
    tmp0_serialDesc.hj('urgence', false);
    this.b18_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).c18 = function (encoder, value) {
    var tmp0_desc = this.b18_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.wf(tmp0_desc, 0, value.d18_1);
    tmp1_output.wf(tmp0_desc, 1, value.e18_1);
    tmp1_output.wf(tmp0_desc, 2, value.f18_1);
    tmp1_output.wf(tmp0_desc, 3, value.g18_1);
    tmp1_output.wf(tmp0_desc, 4, value.h18_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_1).qd = function (encoder, value) {
    return this.c18(encoder, value instanceof PropositionJson ? value : THROW_CCE());
  };
  protoOf($serializer_1).rd = function (decoder) {
    var tmp0_desc = this.b18_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.af(tmp0_desc);
    if (tmp9_input.jf()) {
      tmp4_local0 = tmp9_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ef(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ef(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ef(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ef(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ef(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ef(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bf(tmp0_desc);
    return PropositionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_1).pd = function () {
    return this.b18_1;
  };
  protoOf($serializer_1).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_1().b18_1);
    }
    $this.d18_1 = elementId;
    $this.e18_1 = texte;
    $this.f18_1 = raison;
    $this.g18_1 = poidsEffectif;
    $this.h18_1 = urgence;
    return $this;
  }
  function PropositionJson_init_$Create$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker) {
    return PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, objectCreate(protoOf(PropositionJson)));
  }
  function PropositionJson(elementId, texte, raison, poidsEffectif, urgence) {
    this.d18_1 = elementId;
    this.e18_1 = texte;
    this.f18_1 = raison;
    this.g18_1 = poidsEffectif;
    this.h18_1 = urgence;
  }
  protoOf(PropositionJson).toString = function () {
    return 'PropositionJson(elementId=' + this.d18_1 + ', texte=' + this.e18_1 + ', raison=' + this.f18_1 + ', poidsEffectif=' + this.g18_1 + ', urgence=' + this.h18_1 + ')';
  };
  protoOf(PropositionJson).hashCode = function () {
    var result = getStringHashCode(this.d18_1);
    result = imul(result, 31) + getStringHashCode(this.e18_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f18_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g18_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h18_1) | 0;
    return result;
  };
  protoOf(PropositionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionJson))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionJson ? other : THROW_CCE();
    if (!(this.d18_1 === tmp0_other_with_cast.d18_1))
      return false;
    if (!(this.e18_1 === tmp0_other_with_cast.e18_1))
      return false;
    if (!(this.f18_1 === tmp0_other_with_cast.f18_1))
      return false;
    if (!(this.g18_1 === tmp0_other_with_cast.g18_1))
      return false;
    if (!(this.h18_1 === tmp0_other_with_cast.h18_1))
      return false;
    return true;
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_6() {
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EntreeRevueJson', this, 4);
    tmp0_serialDesc.hj('element', false);
    tmp0_serialDesc.hj('aConfirmer', false);
    tmp0_serialDesc.hj('planManquant', false);
    tmp0_serialDesc.hj('urgence', false);
    this.i18_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).j18 = function (encoder, value) {
    var tmp0_desc = this.i18_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.xf(tmp0_desc, 0, $serializer_getInstance(), value.k18_1);
    tmp1_output.uf(tmp0_desc, 1, value.l18_1);
    tmp1_output.uf(tmp0_desc, 2, value.m18_1);
    tmp1_output.wf(tmp0_desc, 3, value.n18_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_2).qd = function (encoder, value) {
    return this.j18(encoder, value instanceof EntreeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_2).rd = function (decoder) {
    var tmp0_desc = this.i18_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.af(tmp0_desc);
    if (tmp8_input.jf()) {
      tmp4_local0 = tmp8_input.ff(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.cf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.cf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ef(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ff(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.cf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.cf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ef(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.bf(tmp0_desc);
    return EntreeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).pd = function () {
    return this.i18_1;
  };
  protoOf($serializer_2).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().i18_1);
    }
    $this.k18_1 = element;
    $this.l18_1 = aConfirmer;
    $this.m18_1 = planManquant;
    $this.n18_1 = urgence;
    return $this;
  }
  function EntreeRevueJson_init_$Create$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker) {
    return EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, objectCreate(protoOf(EntreeRevueJson)));
  }
  function EntreeRevueJson(element, aConfirmer, planManquant, urgence) {
    this.k18_1 = element;
    this.l18_1 = aConfirmer;
    this.m18_1 = planManquant;
    this.n18_1 = urgence;
  }
  protoOf(EntreeRevueJson).toString = function () {
    return 'EntreeRevueJson(element=' + this.k18_1.toString() + ', aConfirmer=' + this.l18_1 + ', planManquant=' + this.m18_1 + ', urgence=' + this.n18_1 + ')';
  };
  protoOf(EntreeRevueJson).hashCode = function () {
    var result = this.k18_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.l18_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.m18_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n18_1) | 0;
    return result;
  };
  protoOf(EntreeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevueJson ? other : THROW_CCE();
    if (!this.k18_1.equals(tmp0_other_with_cast.k18_1))
      return false;
    if (!(this.l18_1 === tmp0_other_with_cast.l18_1))
      return false;
    if (!(this.m18_1 === tmp0_other_with_cast.m18_1))
      return false;
    if (!(this.n18_1 === tmp0_other_with_cast.n18_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o18_1 = [null, new ArrayListSerializer($serializer_getInstance_2())];
  }
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.GroupeRevueJson', this, 2);
    tmp0_serialDesc.hj('captureId', false);
    tmp0_serialDesc.hj('entrees', false);
    this.p18_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).q18 = function (encoder, value) {
    var tmp0_desc = this.p18_1;
    var tmp1_output = encoder.af(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().o18_1;
    tmp1_output.wf(tmp0_desc, 0, value.r18_1);
    tmp1_output.xf(tmp0_desc, 1, tmp2_cached[1], value.s18_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_3).qd = function (encoder, value) {
    return this.q18(encoder, value instanceof GroupeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_3).rd = function (decoder) {
    var tmp0_desc = this.p18_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.af(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().o18_1;
    if (tmp6_input.jf()) {
      tmp4_local0 = tmp6_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ff(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ff(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bf(tmp0_desc);
    return GroupeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).pd = function () {
    return this.p18_1;
  };
  protoOf($serializer_3).jj = function () {
    var tmp0_cached = Companion_getInstance_7().o18_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1]];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().p18_1);
    }
    $this.r18_1 = captureId;
    $this.s18_1 = entrees;
    return $this;
  }
  function GroupeRevueJson_init_$Create$(seen0, captureId, entrees, serializationConstructorMarker) {
    return GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, objectCreate(protoOf(GroupeRevueJson)));
  }
  function GroupeRevueJson(captureId, entrees) {
    Companion_getInstance_7();
    this.r18_1 = captureId;
    this.s18_1 = entrees;
  }
  protoOf(GroupeRevueJson).toString = function () {
    return 'GroupeRevueJson(captureId=' + this.r18_1 + ', entrees=' + toString_0(this.s18_1) + ')';
  };
  protoOf(GroupeRevueJson).hashCode = function () {
    var result = getStringHashCode(this.r18_1);
    result = imul(result, 31) + hashCode(this.s18_1) | 0;
    return result;
  };
  protoOf(GroupeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof GroupeRevueJson ? other : THROW_CCE();
    if (!(this.r18_1 === tmp0_other_with_cast.r18_1))
      return false;
    if (!equals(this.s18_1, tmp0_other_with_cast.s18_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t18_1 = [null, null, null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_4).w16 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RelanceJson', this, 7);
    tmp0_serialDesc.hj('elementId', false);
    tmp0_serialDesc.hj('texte', false);
    tmp0_serialDesc.hj('type', false);
    tmp0_serialDesc.hj('interlocuteur', true);
    tmp0_serialDesc.hj('echeance', true);
    tmp0_serialDesc.hj('motif', false);
    tmp0_serialDesc.hj('options', false);
    this.u18_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).v18 = function (encoder, value) {
    var tmp0_desc = this.u18_1;
    var tmp1_output = encoder.af(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().t18_1;
    tmp1_output.wf(tmp0_desc, 0, value.w18_1);
    tmp1_output.wf(tmp0_desc, 1, value.x18_1);
    tmp1_output.wf(tmp0_desc, 2, value.y18_1);
    if (tmp1_output.dg(tmp0_desc, 3) ? true : !(value.z18_1 == null)) {
      tmp1_output.zf(tmp0_desc, 3, StringSerializer_getInstance(), value.z18_1);
    }
    if (tmp1_output.dg(tmp0_desc, 4) ? true : !(value.a19_1 == null)) {
      tmp1_output.zf(tmp0_desc, 4, StringSerializer_getInstance(), value.a19_1);
    }
    tmp1_output.wf(tmp0_desc, 5, value.b19_1);
    tmp1_output.xf(tmp0_desc, 6, tmp2_cached[6], value.c19_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_4).qd = function (encoder, value) {
    return this.v18(encoder, value instanceof RelanceJson ? value : THROW_CCE());
  };
  protoOf($serializer_4).rd = function (decoder) {
    var tmp0_desc = this.u18_1;
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
    var tmp11_input = decoder.af(tmp0_desc);
    var tmp12_cached = Companion_getInstance_8().t18_1;
    if (tmp11_input.jf()) {
      tmp4_local0 = tmp11_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.ef(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.hf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.hf(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.ef(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.ff(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.ef(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.hf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.hf(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.ef(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.ff(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.bf(tmp0_desc);
    return RelanceJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_4).pd = function () {
    return this.u18_1;
  };
  protoOf($serializer_4).jj = function () {
    var tmp0_cached = Companion_getInstance_8().t18_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[6]];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, $this) {
    if (!(103 === (103 & seen0))) {
      throwMissingFieldException(seen0, 103, $serializer_getInstance_4().u18_1);
    }
    $this.w18_1 = elementId;
    $this.x18_1 = texte;
    $this.y18_1 = type;
    if (0 === (seen0 & 8))
      $this.z18_1 = null;
    else
      $this.z18_1 = interlocuteur;
    if (0 === (seen0 & 16))
      $this.a19_1 = null;
    else
      $this.a19_1 = echeance;
    $this.b19_1 = motif;
    $this.c19_1 = options;
    return $this;
  }
  function RelanceJson_init_$Create$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker) {
    return RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, objectCreate(protoOf(RelanceJson)));
  }
  function RelanceJson(elementId, texte, type, interlocuteur, echeance, motif, options) {
    Companion_getInstance_8();
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    echeance = echeance === VOID ? null : echeance;
    this.w18_1 = elementId;
    this.x18_1 = texte;
    this.y18_1 = type;
    this.z18_1 = interlocuteur;
    this.a19_1 = echeance;
    this.b19_1 = motif;
    this.c19_1 = options;
  }
  protoOf(RelanceJson).toString = function () {
    return 'RelanceJson(elementId=' + this.w18_1 + ', texte=' + this.x18_1 + ', type=' + this.y18_1 + ', interlocuteur=' + this.z18_1 + ', echeance=' + this.a19_1 + ', motif=' + this.b19_1 + ', options=' + toString_0(this.c19_1) + ')';
  };
  protoOf(RelanceJson).hashCode = function () {
    var result = getStringHashCode(this.w18_1);
    result = imul(result, 31) + getStringHashCode(this.x18_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y18_1) | 0;
    result = imul(result, 31) + (this.z18_1 == null ? 0 : getStringHashCode(this.z18_1)) | 0;
    result = imul(result, 31) + (this.a19_1 == null ? 0 : getStringHashCode(this.a19_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.b19_1) | 0;
    result = imul(result, 31) + hashCode(this.c19_1) | 0;
    return result;
  };
  protoOf(RelanceJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelanceJson))
      return false;
    var tmp0_other_with_cast = other instanceof RelanceJson ? other : THROW_CCE();
    if (!(this.w18_1 === tmp0_other_with_cast.w18_1))
      return false;
    if (!(this.x18_1 === tmp0_other_with_cast.x18_1))
      return false;
    if (!(this.y18_1 === tmp0_other_with_cast.y18_1))
      return false;
    if (!(this.z18_1 == tmp0_other_with_cast.z18_1))
      return false;
    if (!(this.a19_1 == tmp0_other_with_cast.a19_1))
      return false;
    if (!(this.b19_1 === tmp0_other_with_cast.b19_1))
      return false;
    if (!equals(this.c19_1, tmp0_other_with_cast.c19_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).w16 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviJson', this, 2);
    tmp0_serialDesc.hj('elementId', false);
    tmp0_serialDesc.hj('derniereNouvelle', false);
    this.d19_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).e19 = function (encoder, value) {
    var tmp0_desc = this.d19_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.wf(tmp0_desc, 0, value.f19_1);
    tmp1_output.wf(tmp0_desc, 1, value.g19_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_5).qd = function (encoder, value) {
    return this.e19(encoder, value instanceof SuiviJson ? value : THROW_CCE());
  };
  protoOf($serializer_5).rd = function (decoder) {
    var tmp0_desc = this.d19_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.af(tmp0_desc);
    if (tmp6_input.jf()) {
      tmp4_local0 = tmp6_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bf(tmp0_desc);
    return SuiviJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).pd = function () {
    return this.d19_1;
  };
  protoOf($serializer_5).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().d19_1);
    }
    $this.f19_1 = elementId;
    $this.g19_1 = derniereNouvelle;
    return $this;
  }
  function SuiviJson_init_$Create$(seen0, elementId, derniereNouvelle, serializationConstructorMarker) {
    return SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, objectCreate(protoOf(SuiviJson)));
  }
  function SuiviJson() {
  }
  protoOf(SuiviJson).toString = function () {
    return 'SuiviJson(elementId=' + this.f19_1 + ', derniereNouvelle=' + this.g19_1 + ')';
  };
  protoOf(SuiviJson).hashCode = function () {
    var result = getStringHashCode(this.f19_1);
    result = imul(result, 31) + getStringHashCode(this.g19_1) | 0;
    return result;
  };
  protoOf(SuiviJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviJson ? other : THROW_CCE();
    if (!(this.f19_1 === tmp0_other_with_cast.f19_1))
      return false;
    if (!(this.g19_1 === tmp0_other_with_cast.g19_1))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).w16 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviRappelJson', this, 3);
    tmp0_serialDesc.hj('elementId', false);
    tmp0_serialDesc.hj('planPoseLe', false);
    tmp0_serialDesc.hj('foisIgnore', true);
    this.h19_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).i19 = function (encoder, value) {
    var tmp0_desc = this.h19_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.wf(tmp0_desc, 0, value.j19_1);
    tmp1_output.wf(tmp0_desc, 1, value.k19_1);
    if (tmp1_output.dg(tmp0_desc, 2) ? true : !(value.l19_1 === 0)) {
      tmp1_output.vf(tmp0_desc, 2, value.l19_1);
    }
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_6).qd = function (encoder, value) {
    return this.i19(encoder, value instanceof SuiviRappelJson ? value : THROW_CCE());
  };
  protoOf($serializer_6).rd = function (decoder) {
    var tmp0_desc = this.h19_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.af(tmp0_desc);
    if (tmp7_input.jf()) {
      tmp4_local0 = tmp7_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.df(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.df(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.bf(tmp0_desc);
    return SuiviRappelJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).pd = function () {
    return this.h19_1;
  };
  protoOf($serializer_6).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function SuiviRappelJson_init_$Init$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().h19_1);
    }
    $this.j19_1 = elementId;
    $this.k19_1 = planPoseLe;
    if (0 === (seen0 & 4))
      $this.l19_1 = 0;
    else
      $this.l19_1 = foisIgnore;
    return $this;
  }
  function SuiviRappelJson_init_$Create$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker) {
    return SuiviRappelJson_init_$Init$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker, objectCreate(protoOf(SuiviRappelJson)));
  }
  function SuiviRappelJson() {
  }
  protoOf(SuiviRappelJson).toString = function () {
    return 'SuiviRappelJson(elementId=' + this.j19_1 + ', planPoseLe=' + this.k19_1 + ', foisIgnore=' + this.l19_1 + ')';
  };
  protoOf(SuiviRappelJson).hashCode = function () {
    var result = getStringHashCode(this.j19_1);
    result = imul(result, 31) + getStringHashCode(this.k19_1) | 0;
    result = imul(result, 31) + this.l19_1 | 0;
    return result;
  };
  protoOf(SuiviRappelJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviRappelJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviRappelJson ? other : THROW_CCE();
    if (!(this.j19_1 === tmp0_other_with_cast.j19_1))
      return false;
    if (!(this.k19_1 === tmp0_other_with_cast.k19_1))
      return false;
    if (!(this.l19_1 === tmp0_other_with_cast.l19_1))
      return false;
    return true;
  };
  function Companion_7() {
  }
  var Companion_instance_8;
  function Companion_getInstance_11() {
    return Companion_instance_8;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RappelLivreJson', this, 5);
    tmp0_serialDesc.hj('elementId', false);
    tmp0_serialDesc.hj('texte', false);
    tmp0_serialDesc.hj('declencheur', false);
    tmp0_serialDesc.hj('substitution', true);
    tmp0_serialDesc.hj('enRetard', true);
    this.m19_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).n19 = function (encoder, value) {
    var tmp0_desc = this.m19_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.wf(tmp0_desc, 0, value.o19_1);
    tmp1_output.wf(tmp0_desc, 1, value.p19_1);
    tmp1_output.wf(tmp0_desc, 2, value.q19_1);
    if (tmp1_output.dg(tmp0_desc, 3) ? true : !(value.r19_1 === '')) {
      tmp1_output.wf(tmp0_desc, 3, value.r19_1);
    }
    if (tmp1_output.dg(tmp0_desc, 4) ? true : !(value.s19_1 === false)) {
      tmp1_output.uf(tmp0_desc, 4, value.s19_1);
    }
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_7).qd = function (encoder, value) {
    return this.n19(encoder, value instanceof RappelLivreJson ? value : THROW_CCE());
  };
  protoOf($serializer_7).rd = function (decoder) {
    var tmp0_desc = this.m19_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.af(tmp0_desc);
    if (tmp9_input.jf()) {
      tmp4_local0 = tmp9_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ef(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ef(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.cf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ef(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ef(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.cf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bf(tmp0_desc);
    return RappelLivreJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_7).pd = function () {
    return this.m19_1;
  };
  protoOf($serializer_7).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function RappelLivreJson_init_$Init$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_7().m19_1);
    }
    $this.o19_1 = elementId;
    $this.p19_1 = texte;
    $this.q19_1 = declencheur;
    if (0 === (seen0 & 8))
      $this.r19_1 = '';
    else
      $this.r19_1 = substitution;
    if (0 === (seen0 & 16))
      $this.s19_1 = false;
    else
      $this.s19_1 = enRetard;
    return $this;
  }
  function RappelLivreJson_init_$Create$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker) {
    return RappelLivreJson_init_$Init$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker, objectCreate(protoOf(RappelLivreJson)));
  }
  function RappelLivreJson(elementId, texte, declencheur, substitution, enRetard) {
    substitution = substitution === VOID ? '' : substitution;
    enRetard = enRetard === VOID ? false : enRetard;
    this.o19_1 = elementId;
    this.p19_1 = texte;
    this.q19_1 = declencheur;
    this.r19_1 = substitution;
    this.s19_1 = enRetard;
  }
  protoOf(RappelLivreJson).toString = function () {
    return 'RappelLivreJson(elementId=' + this.o19_1 + ', texte=' + this.p19_1 + ', declencheur=' + this.q19_1 + ', substitution=' + this.r19_1 + ', enRetard=' + this.s19_1 + ')';
  };
  protoOf(RappelLivreJson).hashCode = function () {
    var result = getStringHashCode(this.o19_1);
    result = imul(result, 31) + getStringHashCode(this.p19_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q19_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r19_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s19_1) | 0;
    return result;
  };
  protoOf(RappelLivreJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelLivreJson))
      return false;
    var tmp0_other_with_cast = other instanceof RappelLivreJson ? other : THROW_CCE();
    if (!(this.o19_1 === tmp0_other_with_cast.o19_1))
      return false;
    if (!(this.p19_1 === tmp0_other_with_cast.p19_1))
      return false;
    if (!(this.q19_1 === tmp0_other_with_cast.q19_1))
      return false;
    if (!(this.r19_1 === tmp0_other_with_cast.r19_1))
      return false;
    if (!(this.s19_1 === tmp0_other_with_cast.s19_1))
      return false;
    return true;
  };
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t19_1 = [null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EscaladeJson', this, 4);
    tmp0_serialDesc.hj('elementId', false);
    tmp0_serialDesc.hj('texte', false);
    tmp0_serialDesc.hj('motif', false);
    tmp0_serialDesc.hj('options', false);
    this.u19_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).v19 = function (encoder, value) {
    var tmp0_desc = this.u19_1;
    var tmp1_output = encoder.af(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().t19_1;
    tmp1_output.wf(tmp0_desc, 0, value.w19_1);
    tmp1_output.wf(tmp0_desc, 1, value.x19_1);
    tmp1_output.wf(tmp0_desc, 2, value.y19_1);
    tmp1_output.xf(tmp0_desc, 3, tmp2_cached[3], value.z19_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_8).qd = function (encoder, value) {
    return this.v19(encoder, value instanceof EscaladeJson ? value : THROW_CCE());
  };
  protoOf($serializer_8).rd = function (decoder) {
    var tmp0_desc = this.u19_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.af(tmp0_desc);
    var tmp9_cached = Companion_getInstance_12().t19_1;
    if (tmp8_input.jf()) {
      tmp4_local0 = tmp8_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ef(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ff(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ef(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ff(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.bf(tmp0_desc);
    return EscaladeJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).pd = function () {
    return this.u19_1;
  };
  protoOf($serializer_8).jj = function () {
    var tmp0_cached = Companion_getInstance_12().t19_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3]];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function EscaladeJson_init_$Init$(seen0, elementId, texte, motif, options, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().u19_1);
    }
    $this.w19_1 = elementId;
    $this.x19_1 = texte;
    $this.y19_1 = motif;
    $this.z19_1 = options;
    return $this;
  }
  function EscaladeJson_init_$Create$(seen0, elementId, texte, motif, options, serializationConstructorMarker) {
    return EscaladeJson_init_$Init$(seen0, elementId, texte, motif, options, serializationConstructorMarker, objectCreate(protoOf(EscaladeJson)));
  }
  function EscaladeJson(elementId, texte, motif, options) {
    Companion_getInstance_12();
    this.w19_1 = elementId;
    this.x19_1 = texte;
    this.y19_1 = motif;
    this.z19_1 = options;
  }
  protoOf(EscaladeJson).toString = function () {
    return 'EscaladeJson(elementId=' + this.w19_1 + ', texte=' + this.x19_1 + ', motif=' + this.y19_1 + ', options=' + toString_0(this.z19_1) + ')';
  };
  protoOf(EscaladeJson).hashCode = function () {
    var result = getStringHashCode(this.w19_1);
    result = imul(result, 31) + getStringHashCode(this.x19_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y19_1) | 0;
    result = imul(result, 31) + hashCode(this.z19_1) | 0;
    return result;
  };
  protoOf(EscaladeJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EscaladeJson))
      return false;
    var tmp0_other_with_cast = other instanceof EscaladeJson ? other : THROW_CCE();
    if (!(this.w19_1 === tmp0_other_with_cast.w19_1))
      return false;
    if (!(this.x19_1 === tmp0_other_with_cast.x19_1))
      return false;
    if (!(this.y19_1 === tmp0_other_with_cast.y19_1))
      return false;
    if (!equals(this.z19_1, tmp0_other_with_cast.z19_1))
      return false;
    return true;
  };
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a1a_1 = [null, new ArrayListSerializer($serializer_getInstance_7()), new ArrayListSerializer($serializer_getInstance_8())];
  }
  protoOf(Companion_9).w16 = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RappelsDuMomentJson', this, 3);
    tmp0_serialDesc.hj('titre', true);
    tmp0_serialDesc.hj('rappels', true);
    tmp0_serialDesc.hj('escalades', true);
    this.b1a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).c1a = function (encoder, value) {
    var tmp0_desc = this.b1a_1;
    var tmp1_output = encoder.af(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().a1a_1;
    if (tmp1_output.dg(tmp0_desc, 0) ? true : !(value.d1a_1 === '')) {
      tmp1_output.wf(tmp0_desc, 0, value.d1a_1);
    }
    if (tmp1_output.dg(tmp0_desc, 1) ? true : !equals(value.e1a_1, emptyList())) {
      tmp1_output.xf(tmp0_desc, 1, tmp2_cached[1], value.e1a_1);
    }
    if (tmp1_output.dg(tmp0_desc, 2) ? true : !equals(value.f1a_1, emptyList())) {
      tmp1_output.xf(tmp0_desc, 2, tmp2_cached[2], value.f1a_1);
    }
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_9).qd = function (encoder, value) {
    return this.c1a(encoder, value instanceof RappelsDuMomentJson ? value : THROW_CCE());
  };
  protoOf($serializer_9).rd = function (decoder) {
    var tmp0_desc = this.b1a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.af(tmp0_desc);
    var tmp8_cached = Companion_getInstance_13().a1a_1;
    if (tmp7_input.jf()) {
      tmp4_local0 = tmp7_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ff(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ff(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ff(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ff(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.bf(tmp0_desc);
    return RappelsDuMomentJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_9).pd = function () {
    return this.b1a_1;
  };
  protoOf($serializer_9).jj = function () {
    var tmp0_cached = Companion_getInstance_13().a1a_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1], tmp0_cached[2]];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function RappelsDuMomentJson_init_$Init$(seen0, titre, rappels, escalades, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().b1a_1);
    }
    if (0 === (seen0 & 1))
      $this.d1a_1 = '';
    else
      $this.d1a_1 = titre;
    if (0 === (seen0 & 2))
      $this.e1a_1 = emptyList();
    else
      $this.e1a_1 = rappels;
    if (0 === (seen0 & 4))
      $this.f1a_1 = emptyList();
    else
      $this.f1a_1 = escalades;
    return $this;
  }
  function RappelsDuMomentJson_init_$Create$(seen0, titre, rappels, escalades, serializationConstructorMarker) {
    return RappelsDuMomentJson_init_$Init$(seen0, titre, rappels, escalades, serializationConstructorMarker, objectCreate(protoOf(RappelsDuMomentJson)));
  }
  function RappelsDuMomentJson(titre, rappels, escalades) {
    Companion_getInstance_13();
    titre = titre === VOID ? '' : titre;
    rappels = rappels === VOID ? emptyList() : rappels;
    escalades = escalades === VOID ? emptyList() : escalades;
    this.d1a_1 = titre;
    this.e1a_1 = rappels;
    this.f1a_1 = escalades;
  }
  protoOf(RappelsDuMomentJson).toString = function () {
    return 'RappelsDuMomentJson(titre=' + this.d1a_1 + ', rappels=' + toString_0(this.e1a_1) + ', escalades=' + toString_0(this.f1a_1) + ')';
  };
  protoOf(RappelsDuMomentJson).hashCode = function () {
    var result = getStringHashCode(this.d1a_1);
    result = imul(result, 31) + hashCode(this.e1a_1) | 0;
    result = imul(result, 31) + hashCode(this.f1a_1) | 0;
    return result;
  };
  protoOf(RappelsDuMomentJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelsDuMomentJson))
      return false;
    var tmp0_other_with_cast = other instanceof RappelsDuMomentJson ? other : THROW_CCE();
    if (!(this.d1a_1 === tmp0_other_with_cast.d1a_1))
      return false;
    if (!equals(this.e1a_1, tmp0_other_with_cast.e1a_1))
      return false;
    if (!equals(this.f1a_1, tmp0_other_with_cast.f1a_1))
      return false;
    return true;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g1a_1 = [new ArrayListSerializer($serializer_getInstance_3()), null, null, null, null];
  }
  protoOf(Companion_10).w16 = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RevueJson', this, 5);
    tmp0_serialDesc.hj('groupes', false);
    tmp0_serialDesc.hj('total', false);
    tmp0_serialDesc.hj('reduite', true);
    tmp0_serialDesc.hj('motifReduction', true);
    tmp0_serialDesc.hj('demeurentEnFile', true);
    this.h1a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).i1a = function (encoder, value) {
    var tmp0_desc = this.h1a_1;
    var tmp1_output = encoder.af(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().g1a_1;
    tmp1_output.xf(tmp0_desc, 0, tmp2_cached[0], value.j1a_1);
    tmp1_output.vf(tmp0_desc, 1, value.k1a_1);
    if (tmp1_output.dg(tmp0_desc, 2) ? true : !(value.l1a_1 === false)) {
      tmp1_output.uf(tmp0_desc, 2, value.l1a_1);
    }
    if (tmp1_output.dg(tmp0_desc, 3) ? true : !(value.m1a_1 === '')) {
      tmp1_output.wf(tmp0_desc, 3, value.m1a_1);
    }
    if (tmp1_output.dg(tmp0_desc, 4) ? true : !(value.n1a_1 === 0)) {
      tmp1_output.vf(tmp0_desc, 4, value.n1a_1);
    }
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_10).qd = function (encoder, value) {
    return this.i1a(encoder, value instanceof RevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_10).rd = function (decoder) {
    var tmp0_desc = this.h1a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.af(tmp0_desc);
    var tmp10_cached = Companion_getInstance_14().g1a_1;
    if (tmp9_input.jf()) {
      tmp4_local0 = tmp9_input.ff(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.df(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.cf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ef(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.df(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ff(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.df(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.cf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ef(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.df(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bf(tmp0_desc);
    return RevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_10).pd = function () {
    return this.h1a_1;
  };
  protoOf($serializer_10).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_14().g1a_1[0], IntSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().h1a_1);
    }
    $this.j1a_1 = groupes;
    $this.k1a_1 = total;
    if (0 === (seen0 & 4))
      $this.l1a_1 = false;
    else
      $this.l1a_1 = reduite;
    if (0 === (seen0 & 8))
      $this.m1a_1 = '';
    else
      $this.m1a_1 = motifReduction;
    if (0 === (seen0 & 16))
      $this.n1a_1 = 0;
    else
      $this.n1a_1 = demeurentEnFile;
    return $this;
  }
  function RevueJson_init_$Create$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker) {
    return RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, objectCreate(protoOf(RevueJson)));
  }
  function RevueJson(groupes, total, reduite, motifReduction, demeurentEnFile) {
    Companion_getInstance_14();
    reduite = reduite === VOID ? false : reduite;
    motifReduction = motifReduction === VOID ? '' : motifReduction;
    demeurentEnFile = demeurentEnFile === VOID ? 0 : demeurentEnFile;
    this.j1a_1 = groupes;
    this.k1a_1 = total;
    this.l1a_1 = reduite;
    this.m1a_1 = motifReduction;
    this.n1a_1 = demeurentEnFile;
  }
  protoOf(RevueJson).toString = function () {
    return 'RevueJson(groupes=' + toString_0(this.j1a_1) + ', total=' + this.k1a_1 + ', reduite=' + this.l1a_1 + ', motifReduction=' + this.m1a_1 + ', demeurentEnFile=' + this.n1a_1 + ')';
  };
  protoOf(RevueJson).hashCode = function () {
    var result = hashCode(this.j1a_1);
    result = imul(result, 31) + this.k1a_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l1a_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1a_1) | 0;
    result = imul(result, 31) + this.n1a_1 | 0;
    return result;
  };
  protoOf(RevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof RevueJson ? other : THROW_CCE();
    if (!equals(this.j1a_1, tmp0_other_with_cast.j1a_1))
      return false;
    if (!(this.k1a_1 === tmp0_other_with_cast.k1a_1))
      return false;
    if (!(this.l1a_1 === tmp0_other_with_cast.l1a_1))
      return false;
    if (!(this.m1a_1 === tmp0_other_with_cast.m1a_1))
      return false;
    if (!(this.n1a_1 === tmp0_other_with_cast.n1a_1))
      return false;
    return true;
  };
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o1a_1 = [new ArrayListSerializer($serializer_getInstance()), new ArrayListSerializer($serializer_getInstance_12())];
  }
  protoOf(Companion_11).w16 = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.AncrageJson', this, 2);
    tmp0_serialDesc.hj('retenus', false);
    tmp0_serialDesc.hj('ecartes', false);
    this.p1a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).q1a = function (encoder, value) {
    var tmp0_desc = this.p1a_1;
    var tmp1_output = encoder.af(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().o1a_1;
    tmp1_output.xf(tmp0_desc, 0, tmp2_cached[0], value.r1a_1);
    tmp1_output.xf(tmp0_desc, 1, tmp2_cached[1], value.s1a_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_11).qd = function (encoder, value) {
    return this.q1a(encoder, value instanceof AncrageJson ? value : THROW_CCE());
  };
  protoOf($serializer_11).rd = function (decoder) {
    var tmp0_desc = this.p1a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.af(tmp0_desc);
    var tmp7_cached = Companion_getInstance_15().o1a_1;
    if (tmp6_input.jf()) {
      tmp4_local0 = tmp6_input.ff(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ff(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ff(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ff(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bf(tmp0_desc);
    return AncrageJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).pd = function () {
    return this.p1a_1;
  };
  protoOf($serializer_11).jj = function () {
    var tmp0_cached = Companion_getInstance_15().o1a_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1]];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().p1a_1);
    }
    $this.r1a_1 = retenus;
    $this.s1a_1 = ecartes;
    return $this;
  }
  function AncrageJson_init_$Create$(seen0, retenus, ecartes, serializationConstructorMarker) {
    return AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, objectCreate(protoOf(AncrageJson)));
  }
  function AncrageJson(retenus, ecartes) {
    Companion_getInstance_15();
    this.r1a_1 = retenus;
    this.s1a_1 = ecartes;
  }
  protoOf(AncrageJson).toString = function () {
    return 'AncrageJson(retenus=' + toString_0(this.r1a_1) + ', ecartes=' + toString_0(this.s1a_1) + ')';
  };
  protoOf(AncrageJson).hashCode = function () {
    var result = hashCode(this.r1a_1);
    result = imul(result, 31) + hashCode(this.s1a_1) | 0;
    return result;
  };
  protoOf(AncrageJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AncrageJson))
      return false;
    var tmp0_other_with_cast = other instanceof AncrageJson ? other : THROW_CCE();
    if (!equals(this.r1a_1, tmp0_other_with_cast.r1a_1))
      return false;
    if (!equals(this.s1a_1, tmp0_other_with_cast.s1a_1))
      return false;
    return true;
  };
  function Companion_12() {
  }
  var Companion_instance_13;
  function Companion_getInstance_16() {
    return Companion_instance_13;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EcarteJson', this, 2);
    tmp0_serialDesc.hj('texte', false);
    tmp0_serialDesc.hj('raison', false);
    this.t1a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).u1a = function (encoder, value) {
    var tmp0_desc = this.t1a_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.wf(tmp0_desc, 0, value.v1a_1);
    tmp1_output.wf(tmp0_desc, 1, value.w1a_1);
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_12).qd = function (encoder, value) {
    return this.u1a(encoder, value instanceof EcarteJson ? value : THROW_CCE());
  };
  protoOf($serializer_12).rd = function (decoder) {
    var tmp0_desc = this.t1a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.af(tmp0_desc);
    if (tmp6_input.jf()) {
      tmp4_local0 = tmp6_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bf(tmp0_desc);
    return EcarteJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).pd = function () {
    return this.t1a_1;
  };
  protoOf($serializer_12).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_12().t1a_1);
    }
    $this.v1a_1 = texte;
    $this.w1a_1 = raison;
    return $this;
  }
  function EcarteJson_init_$Create$(seen0, texte, raison, serializationConstructorMarker) {
    return EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, objectCreate(protoOf(EcarteJson)));
  }
  function EcarteJson(texte, raison) {
    this.v1a_1 = texte;
    this.w1a_1 = raison;
  }
  protoOf(EcarteJson).toString = function () {
    return 'EcarteJson(texte=' + this.v1a_1 + ', raison=' + this.w1a_1 + ')';
  };
  protoOf(EcarteJson).hashCode = function () {
    var result = getStringHashCode(this.v1a_1);
    result = imul(result, 31) + getStringHashCode(this.w1a_1) | 0;
    return result;
  };
  protoOf(EcarteJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EcarteJson))
      return false;
    var tmp0_other_with_cast = other instanceof EcarteJson ? other : THROW_CCE();
    if (!(this.v1a_1 === tmp0_other_with_cast.v1a_1))
      return false;
    if (!(this.w1a_1 === tmp0_other_with_cast.w1a_1))
      return false;
    return true;
  };
  function Companion_13() {
  }
  protoOf(Companion_13).w16 = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_14;
  function Companion_getInstance_17() {
    return Companion_instance_14;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CaptureJson', this, 4);
    tmp0_serialDesc.hj('id', false);
    tmp0_serialDesc.hj('texte', false);
    tmp0_serialDesc.hj('creeLe', false);
    tmp0_serialDesc.hj('jour', true);
    this.x1a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).y1a = function (encoder, value) {
    var tmp0_desc = this.x1a_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.wf(tmp0_desc, 0, value.z1a_1);
    tmp1_output.wf(tmp0_desc, 1, value.a1b_1);
    tmp1_output.wf(tmp0_desc, 2, value.b1b_1);
    if (tmp1_output.dg(tmp0_desc, 3) ? true : !(value.c1b_1 == null)) {
      tmp1_output.zf(tmp0_desc, 3, StringSerializer_getInstance(), value.c1b_1);
    }
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_13).qd = function (encoder, value) {
    return this.y1a(encoder, value instanceof CaptureJson ? value : THROW_CCE());
  };
  protoOf($serializer_13).rd = function (decoder) {
    var tmp0_desc = this.x1a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.af(tmp0_desc);
    if (tmp8_input.jf()) {
      tmp4_local0 = tmp8_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ef(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.hf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ef(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.hf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.bf(tmp0_desc);
    return CaptureJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_13).pd = function () {
    return this.x1a_1;
  };
  protoOf($serializer_13).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function CaptureJson_init_$Init$(seen0, id, texte, creeLe, jour, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_13().x1a_1);
    }
    $this.z1a_1 = id;
    $this.a1b_1 = texte;
    $this.b1b_1 = creeLe;
    if (0 === (seen0 & 8))
      $this.c1b_1 = null;
    else
      $this.c1b_1 = jour;
    return $this;
  }
  function CaptureJson_init_$Create$(seen0, id, texte, creeLe, jour, serializationConstructorMarker) {
    return CaptureJson_init_$Init$(seen0, id, texte, creeLe, jour, serializationConstructorMarker, objectCreate(protoOf(CaptureJson)));
  }
  function CaptureJson() {
  }
  protoOf(CaptureJson).toString = function () {
    return 'CaptureJson(id=' + this.z1a_1 + ', texte=' + this.a1b_1 + ', creeLe=' + this.b1b_1 + ', jour=' + this.c1b_1 + ')';
  };
  protoOf(CaptureJson).hashCode = function () {
    var result = getStringHashCode(this.z1a_1);
    result = imul(result, 31) + getStringHashCode(this.a1b_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1b_1) | 0;
    result = imul(result, 31) + (this.c1b_1 == null ? 0 : getStringHashCode(this.c1b_1)) | 0;
    return result;
  };
  protoOf(CaptureJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureJson))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureJson ? other : THROW_CCE();
    if (!(this.z1a_1 === tmp0_other_with_cast.z1a_1))
      return false;
    if (!(this.a1b_1 === tmp0_other_with_cast.a1b_1))
      return false;
    if (!(this.b1b_1 === tmp0_other_with_cast.b1b_1))
      return false;
    if (!(this.c1b_1 == tmp0_other_with_cast.c1b_1))
      return false;
    return true;
  };
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_18() {
    return Companion_instance_15;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CitationJson', this, 4);
    tmp0_serialDesc.hj('captureId', false);
    tmp0_serialDesc.hj('extrait', false);
    tmp0_serialDesc.hj('pourquoi', false);
    tmp0_serialDesc.hj('elementId', true);
    this.d1b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).e1b = function (encoder, value) {
    var tmp0_desc = this.d1b_1;
    var tmp1_output = encoder.af(tmp0_desc);
    tmp1_output.wf(tmp0_desc, 0, value.f1b_1);
    tmp1_output.wf(tmp0_desc, 1, value.g1b_1);
    tmp1_output.wf(tmp0_desc, 2, value.h1b_1);
    if (tmp1_output.dg(tmp0_desc, 3) ? true : !(value.i1b_1 == null)) {
      tmp1_output.zf(tmp0_desc, 3, StringSerializer_getInstance(), value.i1b_1);
    }
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_14).qd = function (encoder, value) {
    return this.e1b(encoder, value instanceof CitationJson ? value : THROW_CCE());
  };
  protoOf($serializer_14).rd = function (decoder) {
    var tmp0_desc = this.d1b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.af(tmp0_desc);
    if (tmp8_input.jf()) {
      tmp4_local0 = tmp8_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ef(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.hf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ef(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.hf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.bf(tmp0_desc);
    return CitationJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_14).pd = function () {
    return this.d1b_1;
  };
  protoOf($serializer_14).jj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_14().d1b_1);
    }
    $this.f1b_1 = captureId;
    $this.g1b_1 = extrait;
    $this.h1b_1 = pourquoi;
    if (0 === (seen0 & 8))
      $this.i1b_1 = null;
    else
      $this.i1b_1 = elementId;
    return $this;
  }
  function CitationJson_init_$Create$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker) {
    return CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, objectCreate(protoOf(CitationJson)));
  }
  function CitationJson(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.f1b_1 = captureId;
    this.g1b_1 = extrait;
    this.h1b_1 = pourquoi;
    this.i1b_1 = elementId;
  }
  protoOf(CitationJson).toString = function () {
    return 'CitationJson(captureId=' + this.f1b_1 + ', extrait=' + this.g1b_1 + ', pourquoi=' + this.h1b_1 + ', elementId=' + this.i1b_1 + ')';
  };
  protoOf(CitationJson).hashCode = function () {
    var result = getStringHashCode(this.f1b_1);
    result = imul(result, 31) + getStringHashCode(this.g1b_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h1b_1) | 0;
    result = imul(result, 31) + (this.i1b_1 == null ? 0 : getStringHashCode(this.i1b_1)) | 0;
    return result;
  };
  protoOf(CitationJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CitationJson))
      return false;
    var tmp0_other_with_cast = other instanceof CitationJson ? other : THROW_CCE();
    if (!(this.f1b_1 === tmp0_other_with_cast.f1b_1))
      return false;
    if (!(this.g1b_1 === tmp0_other_with_cast.g1b_1))
      return false;
    if (!(this.h1b_1 === tmp0_other_with_cast.h1b_1))
      return false;
    if (!(this.i1b_1 == tmp0_other_with_cast.i1b_1))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j1b_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_14()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_15).w16 = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_16;
  function Companion_getInstance_19() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ReponseJson', this, 6);
    tmp0_serialDesc.hj('question', false);
    tmp0_serialDesc.hj('enonce', false);
    tmp0_serialDesc.hj('fondee', false);
    tmp0_serialDesc.hj('citations', false);
    tmp0_serialDesc.hj('indisponibleHorsLigne', true);
    tmp0_serialDesc.hj('nonPrisEnCompte', true);
    this.k1b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).l1b = function (encoder, value) {
    var tmp0_desc = this.k1b_1;
    var tmp1_output = encoder.af(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().j1b_1;
    tmp1_output.wf(tmp0_desc, 0, value.m1b_1);
    tmp1_output.wf(tmp0_desc, 1, value.n1b_1);
    tmp1_output.uf(tmp0_desc, 2, value.o1b_1);
    tmp1_output.xf(tmp0_desc, 3, tmp2_cached[3], value.p1b_1);
    if (tmp1_output.dg(tmp0_desc, 4) ? true : !equals(value.q1b_1, emptyList())) {
      tmp1_output.xf(tmp0_desc, 4, tmp2_cached[4], value.q1b_1);
    }
    if (tmp1_output.dg(tmp0_desc, 5) ? true : !equals(value.r1b_1, emptyList())) {
      tmp1_output.xf(tmp0_desc, 5, tmp2_cached[5], value.r1b_1);
    }
    tmp1_output.bf(tmp0_desc);
  };
  protoOf($serializer_15).qd = function (encoder, value) {
    return this.l1b(encoder, value instanceof ReponseJson ? value : THROW_CCE());
  };
  protoOf($serializer_15).rd = function (decoder) {
    var tmp0_desc = this.k1b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.af(tmp0_desc);
    var tmp11_cached = Companion_getInstance_19().j1b_1;
    if (tmp10_input.jf()) {
      tmp4_local0 = tmp10_input.ef(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ef(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.cf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.ff(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.ff(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.ff(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.kf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ef(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ef(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.cf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.ff(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.ff(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.ff(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.bf(tmp0_desc);
    return ReponseJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_15).pd = function () {
    return this.k1b_1;
  };
  protoOf($serializer_15).jj = function () {
    var tmp0_cached = Companion_getInstance_19().j1b_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3], tmp0_cached[4], tmp0_cached[5]];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_15().k1b_1);
    }
    $this.m1b_1 = question;
    $this.n1b_1 = enonce;
    $this.o1b_1 = fondee;
    $this.p1b_1 = citations;
    if (0 === (seen0 & 16))
      $this.q1b_1 = emptyList();
    else
      $this.q1b_1 = indisponibleHorsLigne;
    if (0 === (seen0 & 32))
      $this.r1b_1 = emptyList();
    else
      $this.r1b_1 = nonPrisEnCompte;
    return $this;
  }
  function ReponseJson_init_$Create$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker) {
    return ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker, objectCreate(protoOf(ReponseJson)));
  }
  function ReponseJson(question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    Companion_getInstance_19();
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.m1b_1 = question;
    this.n1b_1 = enonce;
    this.o1b_1 = fondee;
    this.p1b_1 = citations;
    this.q1b_1 = indisponibleHorsLigne;
    this.r1b_1 = nonPrisEnCompte;
  }
  protoOf(ReponseJson).toString = function () {
    return 'ReponseJson(question=' + this.m1b_1 + ', enonce=' + this.n1b_1 + ', fondee=' + this.o1b_1 + ', citations=' + toString_0(this.p1b_1) + ', indisponibleHorsLigne=' + toString_0(this.q1b_1) + ', nonPrisEnCompte=' + toString_0(this.r1b_1) + ')';
  };
  protoOf(ReponseJson).hashCode = function () {
    var result = getStringHashCode(this.m1b_1);
    result = imul(result, 31) + getStringHashCode(this.n1b_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.o1b_1) | 0;
    result = imul(result, 31) + hashCode(this.p1b_1) | 0;
    result = imul(result, 31) + hashCode(this.q1b_1) | 0;
    result = imul(result, 31) + hashCode(this.r1b_1) | 0;
    return result;
  };
  protoOf(ReponseJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReponseJson))
      return false;
    var tmp0_other_with_cast = other instanceof ReponseJson ? other : THROW_CCE();
    if (!(this.m1b_1 === tmp0_other_with_cast.m1b_1))
      return false;
    if (!(this.n1b_1 === tmp0_other_with_cast.n1b_1))
      return false;
    if (!(this.o1b_1 === tmp0_other_with_cast.o1b_1))
      return false;
    if (!equals(this.p1b_1, tmp0_other_with_cast.p1b_1))
      return false;
    if (!equals(this.q1b_1, tmp0_other_with_cast.q1b_1))
      return false;
    if (!equals(this.r1b_1, tmp0_other_with_cast.r1b_1))
      return false;
    return true;
  };
  function sources($this, capturesJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.s1b_1.jx(ListSerializer(Companion_instance_14.w16()), capturesJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.sources.<anonymous>' call
      var tmp = new CaptureId(item.z1a_1);
      var tmp0_safe_receiver = item.c1b_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp1_let_receiver = Companion_getInstance();
        // Inline function 'kotlin.let' call
        tmp_0 = sources$parse(tmp1_let_receiver, tmp0_safe_receiver);
      }
      var tmp$ret$1 = new TexteSource(tmp, item.a1b_1, item.b1b_1, tmp_0);
      destination.e(tmp$ret$1);
    }
    return destination;
  }
  function rendre($this, reponse) {
    var tmp = Companion_getInstance_19().w16();
    var tmp_0 = reponse.y1b();
    // Inline function 'kotlin.collections.map' call
    var this_0 = reponse.v1b_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rendre.<anonymous>' call
      var tmp0_safe_receiver = item.c1c_1;
      var tmp$ret$0 = new CitationJson(item.z1b_1.d1c_1, item.a1c_1, item.b1c_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1c_1);
      destination.e(tmp$ret$0);
    }
    return $this.s1b_1.ix(tmp, new ReponseJson(reponse.t1b_1, reponse.u1b_1, tmp_0, destination, reponse.w1b_1, reponse.x1b_1));
  }
  function decoder($this, elementsJson) {
    return $this.s1b_1.jx(ListSerializer(Companion_instance_0.w16()), elementsJson);
  }
  function neVientQueDIncertain($this, dto, incertains) {
    if (incertains.j() || dto.e17_1 <= dto.d17_1)
      return false;
    var tmp0 = until(dto.d17_1, dto.e17_1);
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      var inductionVariable = tmp0.t_1;
      var last = tmp0.u_1;
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'app.zenote.core.api.Regles.neVientQueDIncertain.<anonymous>' call
          var position = element;
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlin.collections.any' call
            var tmp_0;
            if (isInterface(incertains, Collection)) {
              tmp_0 = incertains.j();
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$1 = false;
              break $l$block_1;
            }
            var _iterator__ex2g4s = incertains.g();
            while (_iterator__ex2g4s.h()) {
              var element_0 = _iterator__ex2g4s.i();
              // Inline function 'app.zenote.core.api.Regles.neVientQueDIncertain.<anonymous>.<anonymous>' call
              if (position >= element_0.z17_1 && position < element_0.a18_1) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
            }
            tmp$ret$1 = false;
          }
          if (!tmp$ret$1) {
            tmp$ret$0 = false;
            break $l$block_2;
          }
        }
         while (!(element === last));
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function raisonDeRejet($this, dto, texteSource) {
    var tmp;
    if (isBlank(dto.c17_1)) {
      tmp = '\xE9l\xE9ment sans texte';
    } else {
      if (dto.d17_1 < 0 || dto.e17_1 <= dto.d17_1) {
        tmp = 'passage source vide ou incoh\xE9rent';
      } else {
        if (dto.e17_1 > texteSource.length) {
          tmp = 'passage source absent du texte de la capture';
        } else {
          // Inline function 'kotlin.runCatching' call
          var tmp_0;
          try {
            // Inline function 'app.zenote.core.api.Regles.raisonDeRejet.<anonymous>' call
            // Inline function 'kotlin.Companion.success' call
            var value = valueOf(dto.b17_1);
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
            tmp = 'type inconnu : ' + dto.b17_1;
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
      var value = valueOf_3(nom).d2_1;
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
    var tmp;
    if (_this__u8e3s4.u17_1) {
      tmp = true;
    } else {
      var tmp0 = listOfNotNull([_this__u8e3s4.i17_1, _this__u8e3s4.l17_1, _this__u8e3s4.o17_1]);
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.j();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
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
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function versResolu(_this__u8e3s4, $this) {
    var tmp = new CaptureId(_this__u8e3s4.a17_1);
    var tmp_0 = valueOf(_this__u8e3s4.b17_1);
    var tmp_1 = new Passage(_this__u8e3s4.d17_1, _this__u8e3s4.e17_1, _this__u8e3s4.f17_1, _this__u8e3s4.g17_1);
    var tmp0_safe_receiver = _this__u8e3s4.h17_1;
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_3 = Companion_getInstance().lw(tmp0_safe_receiver);
      var tmp0_elvis_lhs = _this__u8e3s4.i17_1;
      var tmp_4 = tmp0_elvis_lhs == null ? 1.0 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.j17_1;
      tmp_2 = new Deduit(tmp_3, tmp_4, tmp1_elvis_lhs == null ? 'fourni' : tmp1_elvis_lhs);
    }
    var tmp_5 = tmp_2;
    var tmp1_safe_receiver = _this__u8e3s4.k17_1;
    var tmp_6;
    if (tmp1_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_7 = valueOf_0(tmp1_safe_receiver);
      var tmp0_elvis_lhs_0 = _this__u8e3s4.l17_1;
      var tmp_8 = tmp0_elvis_lhs_0 == null ? 1.0 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs_0 = _this__u8e3s4.m17_1;
      tmp_6 = new Deduit(tmp_7, tmp_8, tmp1_elvis_lhs_0 == null ? 'fourni' : tmp1_elvis_lhs_0);
    }
    var tmp_9 = tmp_6;
    var tmp2_safe_receiver = _this__u8e3s4.n17_1;
    var tmp_10;
    if (tmp2_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4.o17_1;
      tmp_10 = new Deduit(tmp2_safe_receiver, tmp0_elvis_lhs_1 == null ? 1.0 : tmp0_elvis_lhs_1, 'nomm\xE9');
    }
    var tmp_11 = tmp_10;
    var tmp3_safe_receiver = _this__u8e3s4.p17_1;
    var tmp_12;
    if (tmp3_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      tmp_12 = new Deduit(valueOf_1(tmp3_safe_receiver), 1.0, 'd\xE9duit');
    }
    var tmp_13 = tmp_12;
    var tmp4_safe_receiver = _this__u8e3s4.q17_1;
    var tmp_14;
    if (tmp4_safe_receiver == null) {
      tmp_14 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.r17_1;
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
    var derive = new ElementDerive(tmp, tmp_0, _this__u8e3s4.c17_1, tmp_1, tmp_5, tmp_9, tmp_11, tmp_13, tmp_14);
    var tmp_16 = new ElementId(_this__u8e3s4.z16_1);
    var tmp5_safe_receiver = derive.j1c_1;
    var tmp_17 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.p1c_1;
    var tmp6_safe_receiver = derive.k1c_1;
    var tmp_18 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.p1c_1;
    var tmp7_safe_receiver = derive.l1c_1;
    var tmp_19 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.p1c_1;
    var tmp8_safe_receiver = derive.m1c_1;
    var tmp_20 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.p1c_1;
    var tmp9_safe_receiver = derive.n1c_1;
    return new ElementResolu(tmp_16, derive.f1c_1, derive.g1c_1, derive.h1c_1, derive.i1c_1, tmp_17, tmp_18, tmp_19, tmp_20, tmp9_safe_receiver == null ? null : tmp9_safe_receiver.p1c_1, valueOf_2(_this__u8e3s4.s17_1), aConfirmer(_this__u8e3s4, $this), _this__u8e3s4.t17_1, _this__u8e3s4.t17_1 && !(_this__u8e3s4.k17_1 == null) ? 'poids fix\xE9 \xE0 la main' : _this__u8e3s4.m17_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.s1c_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).dc = function (a, b) {
    return this.s1c_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).u2 = function () {
    return this.s1c_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function sam$kotlin_Comparator$0_0(function_0) {
    this.t1c_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).dc = function (a, b) {
    return this.t1c_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).u2 = function () {
    return this.t1c_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function sources$parse(receiver, p0) {
    return receiver.lw(p0);
  }
  function Regles$json$lambda($this$Json) {
    $this$Json.by_1 = true;
    $this$Json.zx_1 = true;
    return Unit_instance;
  }
  function Regles$revue$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp = urgenceOrdinale(Regles_getInstance(), a.n18_1);
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp$ret$1 = urgenceOrdinale(Regles_getInstance(), b.n18_1);
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
        var tmp_0 = b.l18_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = a.l18_1;
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
        var tmp_0 = a.k18_1.z16_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = b.k18_1.z16_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = a.s18_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it = iterator.i();
    var minValue = urgenceOrdinale(Regles_getInstance(), it.n18_1);
    while (iterator.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_0 = iterator.i();
      var v = urgenceOrdinale(Regles_getInstance(), it_0.n18_1);
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var tmp = minValue;
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator_0 = b.s18_1.g();
    if (!iterator_0.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it_1 = iterator_0.i();
    var minValue_0 = urgenceOrdinale(Regles_getInstance(), it_1.n18_1);
    while (iterator_0.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.i();
      var v_0 = urgenceOrdinale(Regles_getInstance(), it_2.n18_1);
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
        var tmp_0 = a.r18_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp$ret$1 = b.r18_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$rappels$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
    var tmp = a.u1c_1.e1c_1;
    // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
    var tmp$ret$1 = b.u1c_1.e1c_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles() {
    Regles_instance = this;
    var tmp = this;
    tmp.s1b_1 = Json(VOID, Regles$json$lambda);
  }
  protoOf(Regles).i1d = function (elementsJson, aujourdhui) {
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
    var this_0 = tmp.l1d(destination, new ContexteMaintenant(Companion_getInstance().lw(aujourdhui)));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$3 = new PropositionJson(item_0.m1d_1.u1c_1.e1c_1, item_0.m1d_1.x1c_1, item_0.n1d_1, item_0.o1d_1.c2_1, item_0.p1d_1.c2_1);
      destination_0.e(tmp$ret$3);
    }
    var propositions = destination_0;
    return this.s1b_1.ix(ListSerializer(Companion_instance_2.w16()), propositions);
  };
  protoOf(Regles).q1d = function (elementsJson, aujourdhui) {
    var date = Companion_getInstance().lw(aujourdhui);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      if (element.s17_1 === 'EN_ATTENTE') {
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
      var tmp$ret$3 = element_0.z16_1;
      destination_0.y1(tmp$ret$3, element_0);
    }
    var parId = destination_0;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(enAttente, 10));
    var _iterator__ex2g4s_1 = enAttente.g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var tmp$ret$6 = FileRevue_getInstance().s1d(versResolu(item, Regles_getInstance()), date);
      destination_1.e(tmp$ret$6);
    }
    var entrees = destination_1;
    var reduction = Arriere_instance.u1d(entrees);
    // Inline function 'kotlin.collections.map' call
    var this_0 = reduction.v1d_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_2 = this_0.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var dto = getValue(parId, item_0.c1e().e1c_1);
      var tmp$ret$9 = new EntreeRevueJson(dto, item_0.a1e_1, item_0.b1e_1, item_0.z1d_1.c2_1);
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
      var key = element_1.k18_1.a17_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_3.v1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_3.y1(key, answer);
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
    var _iterator__ex2g4s_4 = destination_3.x1().g();
    while (_iterator__ex2g4s_4.h()) {
      var item_1 = _iterator__ex2g4s_4.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var captureId = item_1.r1();
      // Inline function 'kotlin.collections.component2' call
      var dansLeGroupe = item_1.s1();
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
    return this.s1b_1.ix(Companion_getInstance_14().w16(), new RevueJson(groupes, entrees.l(), reduction.d1e(), reduction.d1e() ? reduction.x1d_1 : '', reduction.w1d_1.l()));
  };
  protoOf(Regles).e1e = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.s1b_1.jx(ListSerializer(Companion_instance_6.w16()), suivisJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp$ret$0 = new Suivi(new ElementId(item.f19_1), Companion_getInstance().lw(item.g19_1));
      destination.e(tmp$ret$0);
    }
    var suivis = destination;
    var delais = this.s1b_1.jx(MapSerializer(serializer(StringCompanionObject_instance), serializer_0(IntCompanionObject_instance)), delaisJson);
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
    var this_2 = tmp.h1e(destination_0, Companion_getInstance().lw(aujourdhui), suivis, delais);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_1 = this_2.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp0_safe_receiver = item_1.i1e_1.z1c_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      // Inline function 'kotlin.collections.map' call
      var this_3 = item_1.k1e_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var _iterator__ex2g4s_2 = this_3.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>.<anonymous>' call
        var tmp$ret$6 = item_2.c2_1;
        destination_2.e(tmp$ret$6);
      }
      var tmp$ret$9 = new RelanceJson(item_1.i1e_1.u1c_1.e1c_1, item_1.i1e_1.x1c_1, item_1.i1e_1.w1c_1.c2_1, item_1.i1e_1.b1d_1, tmp_0, item_1.j1e_1, destination_2);
      destination_1.e(tmp$ret$9);
    }
    var propositions = destination_1;
    return this.s1b_1.ix(ListSerializer(Companion_getInstance_8().w16()), propositions);
  };
  protoOf(Regles).l1e = function (elementsJson, maintenant, suivisJson) {
    var instant = Companion_getInstance_0().sw(maintenant);
    var a = toInstant(instant, Companion_getInstance_1().zw_1);
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.s1b_1.jx(ListSerializer(Companion_instance_7.w16()), suivisJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$0 = element.j19_1;
      destination.y1(tmp$ret$0, element);
    }
    var suivis = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$3 = versResolu(item, Regles_getInstance());
      destination_0.e(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = destination_0.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      if (element_0.e1d_1.equals(Verdict_ACCEPTE_getInstance()) && !(element_0.d1d_1 == null)) {
        destination_1.e(element_0);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Regles$rappels$lambda;
    var tmp$ret$9 = new sam$kotlin_Comparator$0_0(tmp);
    var candidats = sortedWith(destination_1, tmp$ret$9);
    var file = new FileOpportunite();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(candidats, 10));
    var _iterator__ex2g4s_2 = candidats.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp_0 = new RappelId(item_0.u1c_1.e1c_1);
      // Inline function 'kotlin.text.ifBlank' call
      var this_2 = ensureNotNull(item_0.d1d_1).n1e_1;
      var tmp_1;
      if (isBlank(this_2)) {
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>.<anonymous>' call
        tmp_1 = item_0.x1c_1;
      } else {
        tmp_1 = this_2;
      }
      var tmp$ret$12 = tmp_1;
      var tmp$ret$13 = to(item_0, new Rappel(tmp_0, item_0.u1c_1, tmp$ret$12, new Transition(PointDeRupture_REPRISE_APPAREIL_getInstance())));
      destination_2.e(tmp$ret$13);
    }
    var rappels = destination_2;
    var _iterator__ex2g4s_3 = rappels.g();
    while (_iterator__ex2g4s_3.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s_3.i();
      var element_1 = _destruct__k2r9zo.sb();
      var rappel = _destruct__k2r9zo.tb();
      var tmp0_safe_receiver = suivis.v1(element_1.u1c_1.e1c_1);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l19_1;
      // Inline function 'kotlin.repeat' call
      var times = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
          file.s1e(rappel);
        }
         while (inductionVariable < times);
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var substitutions = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var retards = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s_4 = rappels.g();
    $l$loop_0: while (_iterator__ex2g4s_4.h()) {
      var _destruct__k2r9zo_0 = _iterator__ex2g4s_4.i();
      var element_2 = _destruct__k2r9zo_0.sb();
      var rappel_0 = _destruct__k2r9zo_0.tb();
      var tmp2_elvis_lhs = suivis.v1(element_2.u1c_1.e1c_1);
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var suivi = tmp_2;
      var echeance = Echeancier_getInstance().x1e(ensureNotNull(element_2.d1d_1).m1e_1, Companion_getInstance_0().sw(suivi.k19_1));
      if (!Echeancier_getInstance().y1e(echeance, instant))
        continue $l$loop_0;
      if (echeance instanceof Substituee) {
        var tmp14 = element_2.u1c_1.e1c_1;
        // Inline function 'kotlin.collections.set' call
        var value = echeance.a1f_1;
        substitutions.y1(tmp14, value);
      } else {
        if (echeance instanceof Observable) {
          if (echeance.z1e_1.vw(instant) < 0) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_3 = element_2.u1c_1.e1c_1;
            retards.e(element_3);
          }
        } else {
          noWhenBranchMatchedException();
        }
      }
      file.b1f(rappel_0, a);
    }
    var notification = file.c1f(PointDeRupture_REPRISE_APPAREIL_getInstance(), a);
    // Inline function 'kotlin.collections.associateBy' call
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(candidats, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination_3 = LinkedHashMap_init_$Create$(capacity_0);
    var _iterator__ex2g4s_5 = candidats.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_4 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$18 = element_4.u1c_1.e1c_1;
      destination_3.y1(tmp$ret$18, element_4);
    }
    var parId = destination_3;
    var tmp_3 = Companion_getInstance_13().w16();
    var tmp5_elvis_lhs = notification == null ? null : notification.h1f();
    var tmp_4 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = notification == null ? null : notification.f1f_1;
    // Inline function 'kotlin.collections.map' call
    var this_3 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var _iterator__ex2g4s_6 = this_3.g();
    while (_iterator__ex2g4s_6.h()) {
      var item_1 = _iterator__ex2g4s_6.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp0_safe_receiver_0 = parId.v1(item_1.j1f_1.e1c_1);
      var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.d1d_1;
      var tmp2_elvis_lhs_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m1e_1;
      var tmp_5 = tmp2_elvis_lhs_0 == null ? '' : tmp2_elvis_lhs_0;
      var tmp3_elvis_lhs = substitutions.v1(item_1.j1f_1.e1c_1);
      var tmp$ret$22 = new RappelLivreJson(item_1.j1f_1.e1c_1, item_1.k1f_1, tmp_5, tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs, retards.p1(item_1.j1f_1.e1c_1));
      destination_4.e(tmp$ret$22);
    }
    var tmp_6 = destination_4;
    // Inline function 'kotlin.collections.map' call
    var this_4 = file.n1f();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
    var _iterator__ex2g4s_7 = this_4.g();
    while (_iterator__ex2g4s_7.h()) {
      var item_2 = _iterator__ex2g4s_7.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_5 = item_2.q1f_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_6 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
      var _iterator__ex2g4s_8 = this_5.g();
      while (_iterator__ex2g4s_8.h()) {
        var item_3 = _iterator__ex2g4s_8.i();
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>.<anonymous>' call
        var tmp$ret$25 = item_3.c2_1;
        destination_6.e(tmp$ret$25);
      }
      var tmp$ret$28 = new EscaladeJson(item_2.o1f_1.j1f_1.e1c_1, item_2.o1f_1.k1f_1, item_2.p1f_1, destination_6);
      destination_5.e(tmp$ret$28);
    }
    return this.s1b_1.ix(tmp_3, new RappelsDuMomentJson(tmp_4, tmp_6, destination_5));
  };
  protoOf(Regles).r1f = function (brut) {
    return Disfluences_getInstance().w1f(brut);
  };
  protoOf(Regles).x1f = function (texteSource, elementsJson, passagesIncertainsJson) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var retenus = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var ecartes = ArrayList_init_$Create$_0();
    var tmp = ListSerializer(Companion_instance_1.w16());
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_0;
    if (isBlank(passagesIncertainsJson)) {
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      tmp_0 = '[]';
    } else {
      tmp_0 = passagesIncertainsJson;
    }
    var tmp$ret$3 = tmp_0;
    var incertains = this.s1b_1.jx(tmp, tmp$ret$3);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = decoder(this, elementsJson).g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      var raison = raisonDeRejet(Regles_getInstance(), element, texteSource);
      if (!(raison == null)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = new EcarteJson(element.c17_1, raison);
        ecartes.e(element_0);
      } else if (neVientQueDIncertain(Regles_getInstance(), element, incertains)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = element.w17(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true);
        retenus.e(element_1);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        retenus.e(element);
      }
    }
    return this.s1b_1.ix(Companion_getInstance_15().w16(), new AncrageJson(retenus, ecartes));
  };
  protoOf(Regles).y1f = function (requete, elementsJson, capturesJson, reseau) {
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
    return rendre(this, tmp.c1g(requete, destination, sources(this, capturesJson), reseau));
  };
  protoOf(Regles).d1g = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
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
    return rendre(this, tmp.e1g(requete, destination, sources(this, capturesJson), Companion_getInstance().lw(aujourdhui), reseau));
  };
  protoOf(Regles).f1g = function (personne, elementsJson, reseau) {
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
    return rendre(this, tmp.g1g(personne, destination, reseau));
  };
  var Regles_instance;
  function Regles_getInstance() {
    if (Regles_instance == null)
      new Regles();
    return Regles_instance;
  }
  function Deduit(valeur, confiance, indice) {
    this.p1c_1 = valeur;
    this.q1c_1 = confiance;
    this.r1c_1 = indice;
    var containsArg = this.q1c_1;
    // Inline function 'kotlin.require' call
    if (!(0.0 <= containsArg ? containsArg <= 1.0 : false)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message = 'La confiance est une probabilit\xE9 entre 0 et 1.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.r1c_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message_0 = "Une d\xE9duction sans indice n'est pas justifiable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Deduit).toString = function () {
    return 'Deduit(valeur=' + toString(this.p1c_1) + ', confiance=' + this.q1c_1 + ', indice=' + this.r1c_1 + ')';
  };
  protoOf(Deduit).hashCode = function () {
    var result = this.p1c_1 == null ? 0 : hashCode(this.p1c_1);
    result = imul(result, 31) + getNumberHashCode(this.q1c_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r1c_1) | 0;
    return result;
  };
  protoOf(Deduit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deduit))
      return false;
    var tmp0_other_with_cast = other instanceof Deduit ? other : THROW_CCE();
    if (!equals(this.p1c_1, tmp0_other_with_cast.p1c_1))
      return false;
    if (!equals(this.q1c_1, tmp0_other_with_cast.q1c_1))
      return false;
    if (!(this.r1c_1 === tmp0_other_with_cast.r1c_1))
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
  protoOf(TypeElement).j1g = function () {
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
    this.m1e_1 = declencheur;
    this.n1e_1 = action;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.m1e_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message = "Un plan sans d\xE9clencheur n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.n1e_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message_0 = "Un plan sans action n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Plan).toString = function () {
    return 'Quand ' + this.m1e_1 + ', ' + this.n1e_1;
  };
  protoOf(Plan).hashCode = function () {
    var result = getStringHashCode(this.m1e_1);
    result = imul(result, 31) + getStringHashCode(this.n1e_1) | 0;
    return result;
  };
  protoOf(Plan).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plan))
      return false;
    var tmp0_other_with_cast = other instanceof Plan ? other : THROW_CCE();
    if (!(this.m1e_1 === tmp0_other_with_cast.m1e_1))
      return false;
    if (!(this.n1e_1 === tmp0_other_with_cast.n1e_1))
      return false;
    return true;
  };
  function ElementId(value) {
    this.e1c_1 = value;
  }
  protoOf(ElementId).toString = function () {
    return this.e1c_1;
  };
  protoOf(ElementId).hashCode = function () {
    return getStringHashCode(this.e1c_1);
  };
  protoOf(ElementId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementId))
      return false;
    var tmp0_other_with_cast = other instanceof ElementId ? other : THROW_CCE();
    if (!(this.e1c_1 === tmp0_other_with_cast.e1c_1))
      return false;
    return true;
  };
  function ElementDerive(captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan) {
    echeance = echeance === VOID ? null : echeance;
    poids = poids === VOID ? null : poids;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    sphere = sphere === VOID ? null : sphere;
    plan = plan === VOID ? null : plan;
    this.f1c_1 = captureId;
    this.g1c_1 = type;
    this.h1c_1 = texte;
    this.i1c_1 = passage;
    this.j1c_1 = echeance;
    this.k1c_1 = poids;
    this.l1c_1 = interlocuteur;
    this.m1c_1 = sphere;
    this.n1c_1 = plan;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.h1c_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.ElementDerive.<anonymous>' call
      var message = "Un \xE9l\xE9ment sans texte n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.o1c_1 = new ElementId(this.f1c_1.toString() + ':' + this.i1c_1.k1g_1 + '-' + this.i1c_1.l1g_1 + ':' + this.g1c_1.toString());
  }
  protoOf(ElementDerive).toString = function () {
    return 'ElementDerive(captureId=' + this.f1c_1.toString() + ', type=' + this.g1c_1.toString() + ', texte=' + this.h1c_1 + ', passage=' + this.i1c_1.toString() + ', echeance=' + toString(this.j1c_1) + ', poids=' + toString(this.k1c_1) + ', interlocuteur=' + toString(this.l1c_1) + ', sphere=' + toString(this.m1c_1) + ', plan=' + toString(this.n1c_1) + ')';
  };
  protoOf(ElementDerive).hashCode = function () {
    var result = this.f1c_1.hashCode();
    result = imul(result, 31) + this.g1c_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.h1c_1) | 0;
    result = imul(result, 31) + this.i1c_1.hashCode() | 0;
    result = imul(result, 31) + (this.j1c_1 == null ? 0 : this.j1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.k1c_1 == null ? 0 : this.k1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.l1c_1 == null ? 0 : this.l1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.m1c_1 == null ? 0 : this.m1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.n1c_1 == null ? 0 : this.n1c_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElementDerive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDerive))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDerive ? other : THROW_CCE();
    if (!this.f1c_1.equals(tmp0_other_with_cast.f1c_1))
      return false;
    if (!this.g1c_1.equals(tmp0_other_with_cast.g1c_1))
      return false;
    if (!(this.h1c_1 === tmp0_other_with_cast.h1c_1))
      return false;
    if (!this.i1c_1.equals(tmp0_other_with_cast.i1c_1))
      return false;
    if (!equals(this.j1c_1, tmp0_other_with_cast.j1c_1))
      return false;
    if (!equals(this.k1c_1, tmp0_other_with_cast.k1c_1))
      return false;
    if (!equals(this.l1c_1, tmp0_other_with_cast.l1c_1))
      return false;
    if (!equals(this.m1c_1, tmp0_other_with_cast.m1c_1))
      return false;
    if (!equals(this.n1c_1, tmp0_other_with_cast.n1c_1))
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
  function Companion_16() {
  }
  var Companion_instance_17;
  function Companion_getInstance_20() {
    return Companion_instance_17;
  }
  function ElementResolu(id, captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan, verdict, aConfirmer, corrigeParHumain, indicePoids) {
    this.u1c_1 = id;
    this.v1c_1 = captureId;
    this.w1c_1 = type;
    this.x1c_1 = texte;
    this.y1c_1 = passage;
    this.z1c_1 = echeance;
    this.a1d_1 = poids;
    this.b1d_1 = interlocuteur;
    this.c1d_1 = sphere;
    this.d1d_1 = plan;
    this.e1d_1 = verdict;
    this.f1d_1 = aConfirmer;
    this.g1d_1 = corrigeParHumain;
    this.h1d_1 = indicePoids;
  }
  protoOf(ElementResolu).toString = function () {
    return 'ElementResolu(id=' + this.u1c_1.toString() + ', captureId=' + this.v1c_1.toString() + ', type=' + this.w1c_1.toString() + ', texte=' + this.x1c_1 + ', passage=' + this.y1c_1.toString() + ', echeance=' + toString(this.z1c_1) + ', poids=' + toString(this.a1d_1) + ', interlocuteur=' + this.b1d_1 + ', sphere=' + toString(this.c1d_1) + ', plan=' + toString(this.d1d_1) + ', verdict=' + this.e1d_1.toString() + ', aConfirmer=' + this.f1d_1 + ', corrigeParHumain=' + this.g1d_1 + ', indicePoids=' + this.h1d_1 + ')';
  };
  protoOf(ElementResolu).hashCode = function () {
    var result = this.u1c_1.hashCode();
    result = imul(result, 31) + this.v1c_1.hashCode() | 0;
    result = imul(result, 31) + this.w1c_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.x1c_1) | 0;
    result = imul(result, 31) + this.y1c_1.hashCode() | 0;
    result = imul(result, 31) + (this.z1c_1 == null ? 0 : this.z1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.a1d_1 == null ? 0 : this.a1d_1.hashCode()) | 0;
    result = imul(result, 31) + (this.b1d_1 == null ? 0 : getStringHashCode(this.b1d_1)) | 0;
    result = imul(result, 31) + (this.c1d_1 == null ? 0 : this.c1d_1.hashCode()) | 0;
    result = imul(result, 31) + (this.d1d_1 == null ? 0 : this.d1d_1.hashCode()) | 0;
    result = imul(result, 31) + this.e1d_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1d_1) | 0;
    result = imul(result, 31) + (this.h1d_1 == null ? 0 : getStringHashCode(this.h1d_1)) | 0;
    return result;
  };
  protoOf(ElementResolu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementResolu))
      return false;
    var tmp0_other_with_cast = other instanceof ElementResolu ? other : THROW_CCE();
    if (!this.u1c_1.equals(tmp0_other_with_cast.u1c_1))
      return false;
    if (!this.v1c_1.equals(tmp0_other_with_cast.v1c_1))
      return false;
    if (!this.w1c_1.equals(tmp0_other_with_cast.w1c_1))
      return false;
    if (!(this.x1c_1 === tmp0_other_with_cast.x1c_1))
      return false;
    if (!this.y1c_1.equals(tmp0_other_with_cast.y1c_1))
      return false;
    if (!equals(this.z1c_1, tmp0_other_with_cast.z1c_1))
      return false;
    if (!equals(this.a1d_1, tmp0_other_with_cast.a1d_1))
      return false;
    if (!(this.b1d_1 == tmp0_other_with_cast.b1d_1))
      return false;
    if (!equals(this.c1d_1, tmp0_other_with_cast.c1d_1))
      return false;
    if (!equals(this.d1d_1, tmp0_other_with_cast.d1d_1))
      return false;
    if (!this.e1d_1.equals(tmp0_other_with_cast.e1d_1))
      return false;
    if (!(this.f1d_1 === tmp0_other_with_cast.f1d_1))
      return false;
    if (!(this.g1d_1 === tmp0_other_with_cast.g1d_1))
      return false;
    if (!(this.h1d_1 == tmp0_other_with_cast.h1d_1))
      return false;
    return true;
  };
  function CaptureId(value) {
    this.d1c_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.d1c_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.CaptureId.<anonymous>' call
      var message = 'Un identifiant de capture ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(CaptureId).toString = function () {
    return this.d1c_1;
  };
  protoOf(CaptureId).hashCode = function () {
    return getStringHashCode(this.d1c_1);
  };
  protoOf(CaptureId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureId))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureId ? other : THROW_CCE();
    if (!(this.d1c_1 === tmp0_other_with_cast.d1c_1))
      return false;
    return true;
  };
  function Passage(debutCar, finCar, debutMs, finMs) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    this.k1g_1 = debutCar;
    this.l1g_1 = finCar;
    this.m1g_1 = debutMs;
    this.n1g_1 = finMs;
    // Inline function 'kotlin.require' call
    if (!(this.k1g_1 >= 0)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message = 'Le d\xE9but du passage ne peut pas \xEAtre n\xE9gatif.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.l1g_1 > this.k1g_1)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_0 = 'Le passage doit couvrir au moins un caract\xE8re.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(this.m1g_1 == null === (this.n1g_1 == null))) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_1 = 'Les bornes audio vont par paire, ou pas du tout.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    if (!(this.m1g_1 == null) && !(this.n1g_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.m1g_1.b1(new Long(0, 0)) >= 0 && this.n1g_1.b1(this.m1g_1) > 0)) {
        // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
        var message_2 = 'Bornes audio incoh\xE9rentes.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }
    }
  }
  protoOf(Passage).toString = function () {
    return 'Passage(debutCar=' + this.k1g_1 + ', finCar=' + this.l1g_1 + ', debutMs=' + toString(this.m1g_1) + ', finMs=' + toString(this.n1g_1) + ')';
  };
  protoOf(Passage).hashCode = function () {
    var result = this.k1g_1;
    result = imul(result, 31) + this.l1g_1 | 0;
    result = imul(result, 31) + (this.m1g_1 == null ? 0 : this.m1g_1.hashCode()) | 0;
    result = imul(result, 31) + (this.n1g_1 == null ? 0 : this.n1g_1.hashCode()) | 0;
    return result;
  };
  protoOf(Passage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Passage))
      return false;
    var tmp0_other_with_cast = other instanceof Passage ? other : THROW_CCE();
    if (!(this.k1g_1 === tmp0_other_with_cast.k1g_1))
      return false;
    if (!(this.l1g_1 === tmp0_other_with_cast.l1g_1))
      return false;
    if (!equals(this.m1g_1, tmp0_other_with_cast.m1g_1))
      return false;
    if (!equals(this.n1g_1, tmp0_other_with_cast.n1g_1))
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
  protoOf(Urgence).q1g = function () {
    return this.equals(Urgence_DEPASSEE_getInstance()) || this.equals(Urgence_AUJOURD_HUI_getInstance());
  };
  protoOf(Urgence).r1g = function () {
    var tmp;
    switch (this.d2_1) {
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
    this.s1g_1 = aujourdhui;
  }
  protoOf(ContexteMaintenant).toString = function () {
    return 'ContexteMaintenant(aujourdhui=' + this.s1g_1.toString() + ')';
  };
  protoOf(ContexteMaintenant).hashCode = function () {
    return this.s1g_1.hashCode();
  };
  protoOf(ContexteMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenant ? other : THROW_CCE();
    if (!this.s1g_1.equals(tmp0_other_with_cast.s1g_1))
      return false;
    return true;
  };
  function Proposition(element, raison, poidsEffectif, urgence) {
    this.m1d_1 = element;
    this.n1d_1 = raison;
    this.o1d_1 = poidsEffectif;
    this.p1d_1 = urgence;
  }
  protoOf(Proposition).toString = function () {
    return 'Proposition(element=' + this.m1d_1.toString() + ', raison=' + this.n1d_1 + ', poidsEffectif=' + this.o1d_1.toString() + ', urgence=' + this.p1d_1.toString() + ')';
  };
  protoOf(Proposition).hashCode = function () {
    var result = this.m1d_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.n1d_1) | 0;
    result = imul(result, 31) + this.o1d_1.hashCode() | 0;
    result = imul(result, 31) + this.p1d_1.hashCode() | 0;
    return result;
  };
  protoOf(Proposition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Proposition))
      return false;
    var tmp0_other_with_cast = other instanceof Proposition ? other : THROW_CCE();
    if (!this.m1d_1.equals(tmp0_other_with_cast.m1d_1))
      return false;
    if (!(this.n1d_1 === tmp0_other_with_cast.n1d_1))
      return false;
    if (!this.o1d_1.equals(tmp0_other_with_cast.o1d_1))
      return false;
    if (!this.p1d_1.equals(tmp0_other_with_cast.p1d_1))
      return false;
    return true;
  };
  function raison($this, element, urgence) {
    var tmp0_elvis_lhs = element.h1d_1;
    var consequence = tmp0_elvis_lhs == null ? 'poids non d\xE9termin\xE9, \xE0 confirmer en Revue' : tmp0_elvis_lhs;
    return consequence + ' \u2014 ' + urgence.r1g();
  }
  function dUnCranPlusHaut(_this__u8e3s4, $this) {
    var tmp;
    switch (_this__u8e3s4.d2_1) {
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
  function sam$kotlin_Comparator$0_1(function_0) {
    this.t1g_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).dc = function (a, b) {
    return this.t1g_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).u2 = function () {
    return this.t1g_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function Priorisation$classer$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp = b.o1d_1.d2_1;
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp$ret$1 = a.o1d_1.d2_1;
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
        var tmp_0 = a.p1d_1.d2_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.p1d_1.d2_1;
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
        var tmp_0 = a.m1d_1.u1c_1.e1c_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.m1d_1.u1c_1.e1c_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation() {
    Priorisation_instance = this;
    this.j1d_1 = 3;
    this.k1d_1 = Poids_MOYEN_getInstance();
  }
  protoOf(Priorisation).u1g = function (echeance, aujourdhui) {
    if (echeance == null)
      return Urgence_AUCUNE_getInstance();
    var tmp0_subject = daysUntil(aujourdhui, echeance);
    return (-2147483648 <= tmp0_subject ? tmp0_subject <= -1 : false) ? Urgence_DEPASSEE_getInstance() : tmp0_subject === 0 ? Urgence_AUJOURD_HUI_getInstance() : tmp0_subject === 1 ? Urgence_DEMAIN_getInstance() : (2 <= tmp0_subject ? tmp0_subject <= 7 : false) ? Urgence_CETTE_SEMAINE_getInstance() : Urgence_PLUS_TARD_getInstance();
  };
  protoOf(Priorisation).v1g = function (elements, contexte) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      if (element.e1d_1.equals(Verdict_ACCEPTE_getInstance()) && element.w1c_1.j1g()) {
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
      var urgence = Priorisation_getInstance().u1g(item.z1c_1, contexte.s1g_1);
      var tmp0_elvis_lhs = item.a1d_1;
      var poids = tmp0_elvis_lhs == null ? Priorisation_getInstance().k1d_1 : tmp0_elvis_lhs;
      var effectif = urgence.q1g() ? dUnCranPlusHaut(poids, Priorisation_getInstance()) : poids;
      var tmp$ret$3 = new Proposition(item, raison(Priorisation_getInstance(), item, urgence), effectif, urgence);
      destination_0.e(tmp$ret$3);
    }
    var tmp = destination_0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = Priorisation$classer$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_1(tmp_0);
    var tmp_1 = Priorisation$classer$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_1(tmp_1);
    var tmp_2 = Priorisation$classer$lambda_1(this_1);
    var tmp$ret$8 = new sam$kotlin_Comparator$0_1(tmp_2);
    return sortedWith(tmp, tmp$ret$8);
  };
  protoOf(Priorisation).l1d = function (elements, contexte) {
    return take(this.v1g(elements, contexte), 3);
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
  function Transition(point) {
    this.w1g_1 = point;
  }
  protoOf(Transition).toString = function () {
    return 'Transition(point=' + this.w1g_1.toString() + ')';
  };
  protoOf(Transition).hashCode = function () {
    return this.w1g_1.hashCode();
  };
  protoOf(Transition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Transition))
      return false;
    var tmp0_other_with_cast = other instanceof Transition ? other : THROW_CCE();
    if (!this.w1g_1.equals(tmp0_other_with_cast.w1g_1))
      return false;
    return true;
  };
  var PointDeRupture_FIN_DE_REUNION_instance;
  var PointDeRupture_FIN_DE_CRENEAU_instance;
  var PointDeRupture_REPRISE_APPAREIL_instance;
  var PointDeRupture_entriesInitialized;
  function PointDeRupture_initEntries() {
    if (PointDeRupture_entriesInitialized)
      return Unit_instance;
    PointDeRupture_entriesInitialized = true;
    PointDeRupture_FIN_DE_REUNION_instance = new PointDeRupture('FIN_DE_REUNION', 0);
    PointDeRupture_FIN_DE_CRENEAU_instance = new PointDeRupture('FIN_DE_CRENEAU', 1);
    PointDeRupture_REPRISE_APPAREIL_instance = new PointDeRupture('REPRISE_APPAREIL', 2);
  }
  function PointDeRupture(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PointDeRupture_REPRISE_APPAREIL_getInstance() {
    PointDeRupture_initEntries();
    return PointDeRupture_REPRISE_APPAREIL_instance;
  }
  function Observable(quand) {
    this.z1e_1 = quand;
  }
  protoOf(Observable).toString = function () {
    return 'Observable(quand=' + this.z1e_1.toString() + ')';
  };
  protoOf(Observable).hashCode = function () {
    return this.z1e_1.hashCode();
  };
  protoOf(Observable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Observable))
      return false;
    var tmp0_other_with_cast = other instanceof Observable ? other : THROW_CCE();
    if (!this.z1e_1.equals(tmp0_other_with_cast.z1e_1))
      return false;
    return true;
  };
  function Substituee(explication) {
    this.a1f_1 = explication;
  }
  protoOf(Substituee).toString = function () {
    return 'Substituee(explication=' + this.a1f_1 + ')';
  };
  protoOf(Substituee).hashCode = function () {
    return getStringHashCode(this.a1f_1);
  };
  protoOf(Substituee).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Substituee))
      return false;
    var tmp0_other_with_cast = other instanceof Substituee ? other : THROW_CCE();
    if (!(this.a1f_1 === tmp0_other_with_cast.a1f_1))
      return false;
    return true;
  };
  function Echeancier() {
    Echeancier_instance = this;
    this.t1e_1 = LocalTime_init_$Create$(18, 0);
    this.u1e_1 = LocalTime_init_$Create$(7, 0);
    this.v1e_1 = "ZeNote ne sait pas encore reconna\xEEtre ce signal : l'agenda n'est pas branch\xE9, et la position n'est pas collect\xE9e.";
    this.w1e_1 = Regex_init_$Create$('(\\d{4})-(\\d{2})-(\\d{2})');
  }
  protoOf(Echeancier).x1e = function (declencheur, poseLe) {
    var plie = Texte_getInstance().a1h(declencheur);
    if (contains(plie, 'ce soir')) {
      return new Observable(LocalDateTime_init_$Create$(poseLe.uw(), this.t1e_1));
    }
    if (contains(plie, 'demain matin')) {
      return new Observable(LocalDateTime_init_$Create$(plus(poseLe.uw(), 1, Companion_getInstance_2().im_1), this.u1e_1));
    }
    var tmp0_safe_receiver = this.w1e_1.la(plie);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var _destruct__k2r9zo = tmp0_safe_receiver.bb();
      // Inline function 'kotlin.text.Destructured.component1' call
      var annee = _destruct__k2r9zo.bd_1.ab().k(1);
      // Inline function 'kotlin.text.Destructured.component2' call
      var mois = _destruct__k2r9zo.bd_1.ab().k(2);
      // Inline function 'kotlin.text.Destructured.component3' call
      var jour = _destruct__k2r9zo.bd_1.ab().k(3);
      return new Observable(LocalDateTime_init_$Create$_0(toInt(annee), toInt(mois), toInt(jour), 0, 0));
    }
    return new Substituee("ZeNote ne sait pas encore reconna\xEEtre ce signal : l'agenda n'est pas branch\xE9, et la position n'est pas collect\xE9e.");
  };
  protoOf(Echeancier).y1e = function (echeance, maintenant) {
    var tmp;
    if (echeance instanceof Substituee) {
      tmp = true;
    } else {
      if (echeance instanceof Observable) {
        tmp = echeance.z1e_1.vw(maintenant) <= 0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  var Echeancier_instance;
  function Echeancier_getInstance() {
    if (Echeancier_instance == null)
      new Echeancier();
    return Echeancier_instance;
  }
  function Immediate(rappel, motif) {
    this.b1h_1 = rappel;
    this.c1h_1 = motif;
  }
  protoOf(Immediate).toString = function () {
    return 'Immediate(rappel=' + this.b1h_1.toString() + ', motif=' + this.c1h_1 + ')';
  };
  protoOf(Immediate).hashCode = function () {
    var result = this.b1h_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.c1h_1) | 0;
    return result;
  };
  protoOf(Immediate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Immediate))
      return false;
    var tmp0_other_with_cast = other instanceof Immediate ? other : THROW_CCE();
    if (!this.b1h_1.equals(tmp0_other_with_cast.b1h_1))
      return false;
    if (!(this.c1h_1 === tmp0_other_with_cast.c1h_1))
      return false;
    return true;
  };
  function MiseEnFile(rappel, motif) {
    this.d1h_1 = rappel;
    this.e1h_1 = motif;
  }
  protoOf(MiseEnFile).toString = function () {
    return 'MiseEnFile(rappel=' + this.d1h_1.toString() + ', motif=' + this.e1h_1 + ')';
  };
  protoOf(MiseEnFile).hashCode = function () {
    var result = this.d1h_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.e1h_1) | 0;
    return result;
  };
  protoOf(MiseEnFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MiseEnFile))
      return false;
    var tmp0_other_with_cast = other instanceof MiseEnFile ? other : THROW_CCE();
    if (!this.d1h_1.equals(tmp0_other_with_cast.d1h_1))
      return false;
    if (!(this.e1h_1 === tmp0_other_with_cast.e1h_1))
      return false;
    return true;
  };
  function Escaladee(escalade) {
    this.f1h_1 = escalade;
  }
  protoOf(Escaladee).toString = function () {
    return 'Escaladee(escalade=' + this.f1h_1.toString() + ')';
  };
  protoOf(Escaladee).hashCode = function () {
    return this.f1h_1.hashCode();
  };
  protoOf(Escaladee).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Escaladee))
      return false;
    var tmp0_other_with_cast = other instanceof Escaladee ? other : THROW_CCE();
    if (!this.f1h_1.equals(tmp0_other_with_cast.f1h_1))
      return false;
    return true;
  };
  function Notification(point, emiseA, rappels, enRetard) {
    this.d1f_1 = point;
    this.e1f_1 = emiseA;
    this.f1f_1 = rappels;
    this.g1f_1 = enRetard;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.f1f_1.j()) {
      // Inline function 'app.zenote.core.rappels.Notification.<anonymous>' call
      var message = "Une notification sans rappel n'a rien \xE0 dire.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Notification).h1f = function () {
    return this.f1f_1.l() === 1 ? single(this.f1f_1).k1f_1 : '' + this.f1f_1.l() + ' choses \xE0 voir maintenant';
  };
  protoOf(Notification).toString = function () {
    return 'Notification(point=' + this.d1f_1.toString() + ', emiseA=' + this.e1f_1.toString() + ', rappels=' + toString_0(this.f1f_1) + ', enRetard=' + toString_0(this.g1f_1) + ')';
  };
  protoOf(Notification).hashCode = function () {
    var result = this.d1f_1.hashCode();
    result = imul(result, 31) + this.e1f_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.f1f_1) | 0;
    result = imul(result, 31) + hashCode(this.g1f_1) | 0;
    return result;
  };
  protoOf(Notification).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Notification))
      return false;
    var tmp0_other_with_cast = other instanceof Notification ? other : THROW_CCE();
    if (!this.d1f_1.equals(tmp0_other_with_cast.d1f_1))
      return false;
    if (!this.e1f_1.equals(tmp0_other_with_cast.e1f_1))
      return false;
    if (!equals(this.f1f_1, tmp0_other_with_cast.f1f_1))
      return false;
    if (!equals(this.g1f_1, tmp0_other_with_cast.g1f_1))
      return false;
    return true;
  };
  var OptionEscalade_REPLANIFIER_instance;
  var OptionEscalade_DELEGUER_instance;
  var OptionEscalade_ABANDONNER_instance;
  var OptionEscalade_entriesInitialized;
  function OptionEscalade_initEntries() {
    if (OptionEscalade_entriesInitialized)
      return Unit_instance;
    OptionEscalade_entriesInitialized = true;
    OptionEscalade_REPLANIFIER_instance = new OptionEscalade('REPLANIFIER', 0);
    OptionEscalade_DELEGUER_instance = new OptionEscalade('DELEGUER', 1);
    OptionEscalade_ABANDONNER_instance = new OptionEscalade('ABANDONNER', 2);
  }
  function OptionEscalade(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Escalade(rappel, motif, options) {
    options = options === VOID ? listOf([OptionEscalade_REPLANIFIER_getInstance(), OptionEscalade_DELEGUER_getInstance(), OptionEscalade_ABANDONNER_getInstance()]) : options;
    this.o1f_1 = rappel;
    this.p1f_1 = motif;
    this.q1f_1 = options;
  }
  protoOf(Escalade).toString = function () {
    return 'Escalade(rappel=' + this.o1f_1.toString() + ', motif=' + this.p1f_1 + ', options=' + toString_0(this.q1f_1) + ')';
  };
  protoOf(Escalade).hashCode = function () {
    var result = this.o1f_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.p1f_1) | 0;
    result = imul(result, 31) + hashCode(this.q1f_1) | 0;
    return result;
  };
  protoOf(Escalade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Escalade))
      return false;
    var tmp0_other_with_cast = other instanceof Escalade ? other : THROW_CCE();
    if (!this.o1f_1.equals(tmp0_other_with_cast.o1f_1))
      return false;
    if (!(this.p1f_1 === tmp0_other_with_cast.p1f_1))
      return false;
    if (!equals(this.q1f_1, tmp0_other_with_cast.q1f_1))
      return false;
    return true;
  };
  function Companion_17() {
    this.g1h_1 = 3;
  }
  var Companion_instance_18;
  function Companion_getInstance_21() {
    return Companion_instance_18;
  }
  function sam$kotlin_Comparator$0_2(function_0) {
    this.h1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).dc = function (a, b) {
    return this.h1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).u2 = function () {
    return this.h1h_1;
  };
  protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function sam$kotlin_Comparator$0_3(function_0) {
    this.i1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).dc = function (a, b) {
    return this.i1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).u2 = function () {
    return this.i1h_1;
  };
  protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
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
    return hashCode(this.u2());
  };
  function FileOpportunite$vider$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp = a.i1f_1.j1h_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp$ret$1 = b.i1f_1.j1h_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite$vider$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp = a.j1h_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp$ret$1 = b.j1h_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite$escalades$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.escalades.<anonymous>' call
    var tmp = a.o1f_1.i1f_1.j1h_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.escalades.<anonymous>' call
    var tmp$ret$1 = b.o1f_1.i1f_1.j1h_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite(silences) {
    silences = silences === VOID ? emptyList() : silences;
    this.o1e_1 = silences;
    this.p1e_1 = LinkedHashMap_init_$Create$_0();
    this.q1e_1 = LinkedHashMap_init_$Create$_0();
    this.r1e_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(FileOpportunite).b1f = function (rappel, a) {
    var tmp0_safe_receiver = this.r1e_1.v1(rappel.i1f_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return new Escaladee(tmp0_safe_receiver);
    }
    if (rappel.m1f_1) {
      return new Immediate(rappel, 'rappel critique : pr\xE9sent\xE9 sans attendre un point de rupture');
    }
    var tmp2 = this.p1e_1;
    var tmp3 = rappel.i1f_1;
    // Inline function 'kotlin.collections.set' call
    var value = to(rappel, a);
    tmp2.y1(tmp3, value);
    return new MiseEnFile(rappel, 'en attente du prochain point de rupture');
  };
  protoOf(FileOpportunite).c1f = function (point, a) {
    var tmp0 = this.o1e_1;
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
        // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
        if (element.m1h(a)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      return null;
    if (this.p1e_1.j())
      return null;
    var livres = toList(this.p1e_1.b2());
    this.p1e_1.a2();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(livres, 10));
    var _iterator__ex2g4s_0 = livres.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
      var tmp$ret$2 = item.qb_1;
      destination.e(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = FileOpportunite$vider$lambda;
    var tmp$ret$5 = new sam$kotlin_Comparator$0_2(tmp_0);
    var tmp_1 = sortedWith(destination, tmp$ret$5);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = livres.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
      if (element_0.rb_1.hw(a) < 0) {
        destination_0.e(element_0);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_0, 10));
    var _iterator__ex2g4s_2 = destination_0.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
      var tmp$ret$10 = item_0.qb_1.i1f_1;
      destination_1.e(tmp$ret$10);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_2 = FileOpportunite$vider$lambda_0;
    var tmp$ret$13 = new sam$kotlin_Comparator$0_2(tmp_2);
    var tmp$ret$14 = sortedWith(destination_1, tmp$ret$13);
    return new Notification(point, a, tmp_1, tmp$ret$14);
  };
  protoOf(FileOpportunite).s1e = function (rappel) {
    var tmp0_safe_receiver = this.r1e_1.v1(rappel.i1f_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = this.q1e_1.v1(rappel.i1f_1);
    var compte = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) + 1 | 0;
    var tmp2 = this.q1e_1;
    // Inline function 'kotlin.collections.set' call
    var key = rappel.i1f_1;
    tmp2.y1(key, compte);
    if (compte < 3)
      return null;
    this.p1e_1.z1(rappel.i1f_1);
    var escalade = new Escalade(rappel, 'ignor\xE9 ' + compte + " fois : ce rappel ne se repr\xE9sente plus \xE0 l'identique");
    var tmp5 = this.r1e_1;
    // Inline function 'kotlin.collections.set' call
    var key_0 = rappel.i1f_1;
    tmp5.y1(key_0, escalade);
    return escalade;
  };
  protoOf(FileOpportunite).n1f = function () {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = this.r1e_1.b2();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = FileOpportunite$escalades$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_3(tmp);
    return sortedWith(this_0, tmp$ret$0);
  };
  function OptionEscalade_REPLANIFIER_getInstance() {
    OptionEscalade_initEntries();
    return OptionEscalade_REPLANIFIER_instance;
  }
  function OptionEscalade_DELEGUER_getInstance() {
    OptionEscalade_initEntries();
    return OptionEscalade_DELEGUER_instance;
  }
  function OptionEscalade_ABANDONNER_getInstance() {
    OptionEscalade_initEntries();
    return OptionEscalade_ABANDONNER_instance;
  }
  function RappelId(value) {
    this.j1h_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.j1h_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.RappelId.<anonymous>' call
      var message = 'Un identifiant de rappel ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(RappelId).toString = function () {
    return this.j1h_1;
  };
  protoOf(RappelId).hashCode = function () {
    return getStringHashCode(this.j1h_1);
  };
  protoOf(RappelId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelId))
      return false;
    var tmp0_other_with_cast = other instanceof RappelId ? other : THROW_CCE();
    if (!(this.j1h_1 === tmp0_other_with_cast.j1h_1))
      return false;
    return true;
  };
  function Rappel(id, elementId, texte, declencheur, critique) {
    critique = critique === VOID ? false : critique;
    this.i1f_1 = id;
    this.j1f_1 = elementId;
    this.k1f_1 = texte;
    this.l1f_1 = declencheur;
    this.m1f_1 = critique;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.k1f_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.Rappel.<anonymous>' call
      var message = "Un rappel sans texte n'a rien \xE0 rappeler.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Rappel).toString = function () {
    return 'Rappel(id=' + this.i1f_1.toString() + ', elementId=' + this.j1f_1.toString() + ', texte=' + this.k1f_1 + ', declencheur=' + toString_0(this.l1f_1) + ', critique=' + this.m1f_1 + ')';
  };
  protoOf(Rappel).hashCode = function () {
    var result = this.i1f_1.hashCode();
    result = imul(result, 31) + this.j1f_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.k1f_1) | 0;
    result = imul(result, 31) + hashCode(this.l1f_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.m1f_1) | 0;
    return result;
  };
  protoOf(Rappel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rappel))
      return false;
    var tmp0_other_with_cast = other instanceof Rappel ? other : THROW_CCE();
    if (!this.i1f_1.equals(tmp0_other_with_cast.i1f_1))
      return false;
    if (!this.j1f_1.equals(tmp0_other_with_cast.j1f_1))
      return false;
    if (!(this.k1f_1 === tmp0_other_with_cast.k1f_1))
      return false;
    if (!equals(this.l1f_1, tmp0_other_with_cast.l1f_1))
      return false;
    if (!(this.m1f_1 === tmp0_other_with_cast.m1f_1))
      return false;
    return true;
  };
  function TexteSource(captureId, texte, quand, jour) {
    jour = jour === VOID ? null : jour;
    this.n1h_1 = captureId;
    this.o1h_1 = texte;
    this.p1h_1 = quand;
    this.q1h_1 = jour;
  }
  protoOf(TexteSource).toString = function () {
    return 'TexteSource(captureId=' + this.n1h_1.toString() + ', texte=' + this.o1h_1 + ', quand=' + this.p1h_1 + ', jour=' + toString(this.q1h_1) + ')';
  };
  protoOf(TexteSource).hashCode = function () {
    var result = this.n1h_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.o1h_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p1h_1) | 0;
    result = imul(result, 31) + (this.q1h_1 == null ? 0 : this.q1h_1.hashCode()) | 0;
    return result;
  };
  protoOf(TexteSource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TexteSource))
      return false;
    var tmp0_other_with_cast = other instanceof TexteSource ? other : THROW_CCE();
    if (!this.n1h_1.equals(tmp0_other_with_cast.n1h_1))
      return false;
    if (!(this.o1h_1 === tmp0_other_with_cast.o1h_1))
      return false;
    if (!(this.p1h_1 === tmp0_other_with_cast.p1h_1))
      return false;
    if (!equals(this.q1h_1, tmp0_other_with_cast.q1h_1))
      return false;
    return true;
  };
  function Citation(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.z1b_1 = captureId;
    this.a1c_1 = extrait;
    this.b1c_1 = pourquoi;
    this.c1c_1 = elementId;
  }
  protoOf(Citation).toString = function () {
    return 'Citation(captureId=' + this.z1b_1.toString() + ', extrait=' + this.a1c_1 + ', pourquoi=' + this.b1c_1 + ', elementId=' + toString(this.c1c_1) + ')';
  };
  protoOf(Citation).hashCode = function () {
    var result = this.z1b_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.a1c_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1c_1) | 0;
    result = imul(result, 31) + (this.c1c_1 == null ? 0 : this.c1c_1.hashCode()) | 0;
    return result;
  };
  protoOf(Citation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Citation))
      return false;
    var tmp0_other_with_cast = other instanceof Citation ? other : THROW_CCE();
    if (!this.z1b_1.equals(tmp0_other_with_cast.z1b_1))
      return false;
    if (!(this.a1c_1 === tmp0_other_with_cast.a1c_1))
      return false;
    if (!(this.b1c_1 === tmp0_other_with_cast.b1c_1))
      return false;
    if (!equals(this.c1c_1, tmp0_other_with_cast.c1c_1))
      return false;
    return true;
  };
  function Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.t1b_1 = question;
    this.u1b_1 = enonce;
    this.v1b_1 = citations;
    this.w1b_1 = indisponibleHorsLigne;
    this.x1b_1 = nonPrisEnCompte;
  }
  protoOf(Reponse).y1b = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.v1b_1.j();
  };
  protoOf(Reponse).r1h = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    return new Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).s1h = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte, $super) {
    question = question === VOID ? this.t1b_1 : question;
    enonce = enonce === VOID ? this.u1b_1 : enonce;
    citations = citations === VOID ? this.v1b_1 : citations;
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? this.w1b_1 : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? this.x1b_1 : nonPrisEnCompte;
    return $super === VOID ? this.r1h(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) : $super.r1h.call(this, question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).toString = function () {
    return 'Reponse(question=' + this.t1b_1 + ', enonce=' + this.u1b_1 + ', citations=' + toString_0(this.v1b_1) + ', indisponibleHorsLigne=' + toString_0(this.w1b_1) + ', nonPrisEnCompte=' + toString_0(this.x1b_1) + ')';
  };
  protoOf(Reponse).hashCode = function () {
    var result = getStringHashCode(this.t1b_1);
    result = imul(result, 31) + getStringHashCode(this.u1b_1) | 0;
    result = imul(result, 31) + hashCode(this.v1b_1) | 0;
    result = imul(result, 31) + hashCode(this.w1b_1) | 0;
    result = imul(result, 31) + hashCode(this.x1b_1) | 0;
    return result;
  };
  protoOf(Reponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reponse))
      return false;
    var tmp0_other_with_cast = other instanceof Reponse ? other : THROW_CCE();
    if (!(this.t1b_1 === tmp0_other_with_cast.t1b_1))
      return false;
    if (!(this.u1b_1 === tmp0_other_with_cast.u1b_1))
      return false;
    if (!equals(this.v1b_1, tmp0_other_with_cast.v1b_1))
      return false;
    if (!equals(this.w1b_1, tmp0_other_with_cast.w1b_1))
      return false;
    if (!equals(this.x1b_1, tmp0_other_with_cast.x1b_1))
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
      var tmp$ret$0 = new Citation(item.v1c_1, item.x1c_1, libelle(RechercheLocale_getInstance(), item.w1c_1) + ' de ' + periode.v1h_1, item.u1c_1);
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
      var tmp$ret$3 = item_0.z1b_1;
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
      if (!dejaCitees.p1(element.n1h_1)) {
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
      var tmp$ret$9 = new Citation(item_1.n1h_1, item_1.o1h_1, 'capture du ' + item_1.p1h_1);
      destination_2.e(tmp$ret$9);
    }
    var surCaptures = destination_2;
    var tmp = plus_0(surElements, surCaptures);
    var tmp_0 = RechercheLocale$tout$lambda;
    var citations = take(sortedWith(tmp, compareBy([tmp_0, RechercheLocale$tout$lambda_0])), max);
    return reponse($this, '', citations, emptyList());
  }
  function avec(_this__u8e3s4, $this, ecarte) {
    return ecarte.j() ? _this__u8e3s4 : _this__u8e3s4.s1h(VOID, VOID, VOID, VOID, ecarte);
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
    switch (type.d2_1) {
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
    switch (verdict.d2_1) {
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
    switch (verdict.d2_1) {
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
  function sam$kotlin_Comparator$0_4(function_0) {
    this.w1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_4).dc = function (a, b) {
    return this.w1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).u2 = function () {
    return this.w1h_1;
  };
  protoOf(sam$kotlin_Comparator$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_4).hashCode = function () {
    return hashCode(this.u2());
  };
  function RechercheLocale$parMots$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp = b.qb_1;
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp$ret$1 = a.qb_1;
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
        var tmp_0 = a.rb_1.z1b_1.d1c_1;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp$ret$1 = b.rb_1.z1b_1.d1c_1;
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
        var tmp0_safe_receiver = a.rb_1.c1c_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1c_1;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp0_safe_receiver_0 = b.rb_1.c1c_1;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.e1c_1;
        var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function RechercheLocale$tout$lambda(it) {
    return it.z1b_1.d1c_1;
  }
  function RechercheLocale$tout$lambda_0(it) {
    var tmp0_safe_receiver = it.c1c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1c_1;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function RechercheLocale$parPersonne$lambda(it) {
    return etatOrdinal(RechercheLocale_getInstance(), it.e1d_1);
  }
  function RechercheLocale$parPersonne$lambda_0(it) {
    return it.u1c_1.e1c_1;
  }
  function RechercheLocale() {
    RechercheLocale_instance = this;
    this.z1f_1 = 'Rien \xE0 ce sujet dans ce qui a \xE9t\xE9 captur\xE9.';
    this.a1g_1 = listOf(['analyse des captures pas encore trait\xE9es', 'reformulation de la r\xE9ponse en langage naturel']);
    this.b1g_1 = 10;
  }
  protoOf(RechercheLocale).x1h = function (requete, elements, captures, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.a1g_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$0 = to(item, Texte_getInstance().y1h(requete, item.x1c_1));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element.rb_1 > 0.0) {
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
      var element_0 = item_0.sb();
      var note = item_0.tb();
      var tmp$ret$6 = to(note, new Citation(element_0.v1c_1, element_0.x1c_1, '\xE9l\xE9ment \xAB ' + libelle(RechercheLocale_getInstance(), element_0.w1c_1) + ' \xBB contenant les mots cherch\xE9s', element_0.u1c_1));
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
      var tmp$ret$9 = item_1.rb_1.z1b_1;
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
      if (!dejaCitees.p1(element_1.n1h_1)) {
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
      var tmp$ret$15 = to(item_2, Texte_getInstance().y1h(requete, item_2.o1h_1));
      destination_4.e(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_5 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_5 = destination_4.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element_2.rb_1 > 0.0) {
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
      var source = item_3.sb();
      var note_0 = item_3.tb();
      var tmp$ret$21 = to(note_0, new Citation(source.n1h_1, source.o1h_1, 'capture du ' + source.p1h_1 + ' contenant les mots cherch\xE9s'));
      destination_6.e(tmp$ret$21);
    }
    var surCaptures = destination_6;
    var tmp = plus_0(surElements, surCaptures);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = RechercheLocale$parMots$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_4(tmp_0);
    var tmp_1 = RechercheLocale$parMots$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_4(tmp_1);
    var tmp_2 = RechercheLocale$parMots$lambda_1(this_1);
    var tmp$ret$26 = new sam$kotlin_Comparator$0_4(tmp_2);
    // Inline function 'kotlin.collections.map' call
    var this_2 = take(sortedWith(tmp, tmp$ret$26), max);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_7 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_7 = this_2.g();
    while (_iterator__ex2g4s_7.h()) {
      var item_4 = _iterator__ex2g4s_7.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$27 = item_4.rb_1;
      destination_7.e(tmp$ret$27);
    }
    var citations = destination_7;
    return reponse(this, requete, citations, indisponibles);
  };
  protoOf(RechercheLocale).c1g = function (requete, elements, captures, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.x1h(requete, elements, captures, reseau, max) : $super.x1h.call(this, requete, elements, captures, reseau, max);
  };
  protoOf(RechercheLocale).z1h = function (requete, elements, captures, aujourdhui, reseau, max) {
    var tmp;
    if (RepereTemporel_getInstance().e1i(requete) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parQuestion.<anonymous>' call
      tmp = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
    }
    var ecarte = listOfNotNull_0(tmp);
    var tmp1_elvis_lhs = RepereTemporel_getInstance().f1i(requete, aujourdhui);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return avec(this.x1h(requete, elements, captures, reseau, max), this, ecarte);
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
      if (!(element.q1h_1 == null) && repere.g1i_1.i1i(element.q1h_1)) {
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
      var tmp$ret$5 = item.n1h_1;
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
      if (idsPeriode.p1(element_0.v1c_1)) {
        destination_1.e(element_0);
      }
    }
    var elementsPeriode = destination_1;
    var reste = RepereTemporel_getInstance().j1i(requete, repere);
    var parLesMots = isBlank(reste) ? null : this.x1h(reste, elementsPeriode, dansLaPeriode, reseau, max);
    var motsMuets = parLesMots == null || parLesMots.v1b_1.j();
    var brut = motsMuets ? tout(this, dansLaPeriode, elementsPeriode, repere.g1i_1, max) : ensureNotNull(parLesMots);
    var enonce = brut.v1b_1.j() ? 'Rien de captur\xE9 ' + repere.g1i_1.v1h_1 + '.' : motsMuets && !isBlank(reste) ? 'Aucun de ces mots dans les captures de ' + repere.g1i_1.v1h_1 + ' ; ' + ('voici les ' + brut.v1b_1.l() + " qu'elle contient.") : '' + brut.v1b_1.l() + ' \xE9l\xE9ment(s) de ' + repere.g1i_1.v1h_1 + ', ' + 'chacun rattach\xE9 \xE0 sa capture source.';
    return brut.s1h(requete, enonce, VOID, reseau ? emptyList() : this.a1g_1, ecarte);
  };
  protoOf(RechercheLocale).e1g = function (requete, elements, captures, aujourdhui, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.z1h(requete, elements, captures, aujourdhui, reseau, max) : $super.z1h.call(this, requete, elements, captures, aujourdhui, reseau, max);
  };
  protoOf(RechercheLocale).k1i = function (personne, elements, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.a1g_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      if (!(element.b1d_1 == null) && Texte_getInstance().l1i(element.b1d_1, personne)) {
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
      var tmp$ret$3 = new Citation(item.v1c_1, item.x1c_1, libelle(RechercheLocale_getInstance(), item.w1c_1) + ' ' + etat(RechercheLocale_getInstance(), item.e1d_1) + ' envers ' + personne, item.u1c_1);
      destination_0.e(tmp$ret$3);
    }
    var citations = destination_0;
    return reponse(this, 'ce qui est en cours avec ' + personne, citations, indisponibles);
  };
  protoOf(RechercheLocale).g1g = function (personne, elements, reseau, max, $super) {
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.k1i(personne, elements, reseau, max) : $super.k1i.call(this, personne, elements, reseau, max);
  };
  var RechercheLocale_instance;
  function RechercheLocale_getInstance() {
    if (RechercheLocale_instance == null)
      new RechercheLocale();
    return RechercheLocale_instance;
  }
  function Periode(du, au, libelle) {
    this.t1h_1 = du;
    this.u1h_1 = au;
    this.v1h_1 = libelle;
    // Inline function 'kotlin.require' call
    if (!(this.t1h_1.nw(this.u1h_1) <= 0)) {
      // Inline function 'app.zenote.core.recherche.Periode.<anonymous>' call
      var message = 'Une p\xE9riode dont le d\xE9but suit la fin ne d\xE9signe aucun jour.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Periode).i1i = function (jour) {
    return jour.nw(this.t1h_1) >= 0 && jour.nw(this.u1h_1) <= 0;
  };
  protoOf(Periode).toString = function () {
    return 'Periode(du=' + this.t1h_1.toString() + ', au=' + this.u1h_1.toString() + ', libelle=' + this.v1h_1 + ')';
  };
  protoOf(Periode).hashCode = function () {
    var result = this.t1h_1.hashCode();
    result = imul(result, 31) + this.u1h_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.v1h_1) | 0;
    return result;
  };
  protoOf(Periode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Periode))
      return false;
    var tmp0_other_with_cast = other instanceof Periode ? other : THROW_CCE();
    if (!this.t1h_1.equals(tmp0_other_with_cast.t1h_1))
      return false;
    if (!this.u1h_1.equals(tmp0_other_with_cast.u1h_1))
      return false;
    if (!(this.v1h_1 === tmp0_other_with_cast.v1h_1))
      return false;
    return true;
  };
  function Repere(periode, expression) {
    this.g1i_1 = periode;
    this.h1i_1 = expression;
  }
  protoOf(Repere).toString = function () {
    return 'Repere(periode=' + this.g1i_1.toString() + ', expression=' + this.h1i_1 + ')';
  };
  protoOf(Repere).hashCode = function () {
    var result = this.g1i_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.h1i_1) | 0;
    return result;
  };
  protoOf(Repere).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Repere))
      return false;
    var tmp0_other_with_cast = other instanceof Repere ? other : THROW_CCE();
    if (!this.g1i_1.equals(tmp0_other_with_cast.g1i_1))
      return false;
    if (!(this.h1i_1 === tmp0_other_with_cast.h1i_1))
      return false;
    return true;
  };
  function aplatir($this, requete) {
    // Inline function 'kotlin.text.map' call
    var this_0 = Texte_getInstance().a1h(requete);
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
    var lundi = minus(date, DatePeriod_init_$Create$(VOID, VOID, get_isoDayNumber(date.lo()) - 1 | 0));
    return new Periode(lundi, plus_1(lundi, DatePeriod_init_$Create$(VOID, VOID, 6)), libelle);
  }
  function moisDe($this, date, libelle) {
    var premier = LocalDate_init_$Create$(date.co(), date.mw(), 1);
    return new Periode(premier, minus(plus_1(premier, DatePeriod_init_$Create$(VOID, 1)), DatePeriod_init_$Create$(VOID, VOID, 1)), libelle);
  }
  function dernier($this, date, jourVoulu, libelle) {
    var recul = get_isoDayNumber(date.lo()) - get_isoDayNumber(jourVoulu) | 0;
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
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? $this.d1i_1.v1(apres.k(0)) : tmp1_elvis_lhs;
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
    var recul = _destruct__k2r9zo.sb();
    var nom = _destruct__k2r9zo.tb();
    var centre = minus(aujourdhui, recul);
    var marge = nom === 'jour' ? 1 : 3;
    return new Repere(new Periode(minus(centre, DatePeriod_init_$Create$(VOID, VOID, marge)), minOf(plus_1(centre, DatePeriod_init_$Create$(VOID, VOID, marge)), aujourdhui), 'il y a environ ' + combien + ' ' + nom + (combien > 1 && !(nom === 'mois') ? 's' : '')), marqueur + ' ' + apres.k(0) + ' ' + unite);
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
    var samedi = dernier(RepereTemporel_getInstance(), d, DayOfWeek_SATURDAY_getInstance(), '').t1h_1;
    return new Periode(samedi, plus_1(samedi, DatePeriod_init_$Create$(VOID, VOID, 1)), 'le week-end dernier');
  }
  function RepereTemporel$formes$lambda_8(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.co(), d.mw(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
  }
  function RepereTemporel$formes$lambda_9(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.co(), d.mw(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
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
    this.a1i_1 = listOf(['en voiture', 'dans le train', 'dans l avion', 'en marchant', 'en reunion', 'au bureau', 'a la maison', 'au telephone', 'en visio', 'dans le metro']);
    this.b1i_1 = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
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
    tmp.c1i_1 = listOf([tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, to('dimanche dernier', RepereTemporel$formes$lambda_17)]);
    this.d1i_1 = mapOf([to('un', 1), to('une', 1), to('deux', 2), to('trois', 3), to('quatre', 4), to('cinq', 5), to('six', 6), to('sept', 7), to('huit', 8), to('neuf', 9), to('dix', 10), to('quinze', 15)]);
  }
  protoOf(RepereTemporel).e1i = function (requete) {
    var plie = aplatir(this, requete);
    var tmp0 = this.a1i_1;
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
  protoOf(RepereTemporel).f1i = function (requete, aujourdhui) {
    var plie = aplatir(this, requete);
    var _iterator__ex2g4s = this.c1i_1.g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      var expression = _destruct__k2r9zo.sb();
      var calcul = _destruct__k2r9zo.tb();
      if (contains(plie, ' ' + expression + ' '))
        return new Repere(calcul(aujourdhui), expression);
    }
    return depuisCompte(this, plie, aujourdhui);
  };
  protoOf(RepereTemporel).j1i = function (requete, repere) {
    var motsDuRepere = toSet(Texte_getInstance().m1i(repere.h1i_1));
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = Texte_getInstance().m1i(requete);
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RepereTemporel.sansRepere.<anonymous>' call
      if (!motsDuRepere.p1(element)) {
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
    this.v1d_1 = retenues;
    this.w1d_1 = demeurentEnFile;
    this.x1d_1 = motif;
  }
  protoOf(RevueReduite).d1e = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.w1d_1.j();
  };
  protoOf(RevueReduite).toString = function () {
    return 'RevueReduite(retenues=' + toString_0(this.v1d_1) + ', demeurentEnFile=' + toString_0(this.w1d_1) + ', motif=' + this.x1d_1 + ')';
  };
  protoOf(RevueReduite).hashCode = function () {
    var result = hashCode(this.v1d_1);
    result = imul(result, 31) + hashCode(this.w1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x1d_1) | 0;
    return result;
  };
  protoOf(RevueReduite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueReduite))
      return false;
    var tmp0_other_with_cast = other instanceof RevueReduite ? other : THROW_CCE();
    if (!equals(this.v1d_1, tmp0_other_with_cast.v1d_1))
      return false;
    if (!equals(this.w1d_1, tmp0_other_with_cast.w1d_1))
      return false;
    if (!(this.x1d_1 === tmp0_other_with_cast.x1d_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_5(function_0) {
    this.n1i_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_5).dc = function (a, b) {
    return this.n1i_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).u2 = function () {
    return this.n1i_1;
  };
  protoOf(sam$kotlin_Comparator$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_5).hashCode = function () {
    return hashCode(this.u2());
  };
  function Arriere$revueReduite$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs = b.y1d_1.a1d_1;
    var tmp = (tmp0_elvis_lhs == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs).d2_1;
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs_0 = a.y1d_1.a1d_1;
    var tmp$ret$1 = (tmp0_elvis_lhs_0 == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs_0).d2_1;
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
        var tmp_0 = a.z1d_1.d2_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.z1d_1.d2_1;
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
        var tmp_0 = a.c1e().e1c_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.c1e().e1c_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Arriere() {
    this.t1d_1 = 12;
  }
  protoOf(Arriere).o1i = function (entrees, charge) {
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
    var this_0 = new sam$kotlin_Comparator$0_5(tmp);
    var tmp_0 = Arriere$revueReduite$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_5(tmp_0);
    var tmp_1 = Arriere$revueReduite$lambda_1(this_1);
    var tmp$ret$3 = new sam$kotlin_Comparator$0_5(tmp_1);
    var parImportance = sortedWith(entrees, tmp$ret$3);
    var retenues = take(parImportance, charge);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(retenues, 10));
    var _iterator__ex2g4s = retenues.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
      var tmp$ret$4 = item.c1e();
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
      if (gardees.p1(element.c1e())) {
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
      if (!gardees.p1(element_0.c1e())) {
        destination_1.e(element_0);
      }
    }
    return new RevueReduite(tmp_2, destination_1, 'Beaucoup de choses en attente. Voici les ' + charge + ' plus lourdes ou ' + 'les plus press\xE9es ; le reste demeure en file, intact.');
  };
  protoOf(Arriere).u1d = function (entrees, charge, $super) {
    charge = charge === VOID ? 12 : charge;
    return $super === VOID ? this.o1i(entrees, charge) : $super.o1i.call(this, entrees, charge);
  };
  var Arriere_instance;
  function Arriere_getInstance() {
    return Arriere_instance;
  }
  function EntreeRevue(element, urgence, aConfirmer, planAFournir) {
    this.y1d_1 = element;
    this.z1d_1 = urgence;
    this.a1e_1 = aConfirmer;
    this.b1e_1 = planAFournir;
  }
  protoOf(EntreeRevue).c1e = function () {
    return this.y1d_1.u1c_1;
  };
  protoOf(EntreeRevue).toString = function () {
    return 'EntreeRevue(element=' + this.y1d_1.toString() + ', urgence=' + this.z1d_1.toString() + ', aConfirmer=' + this.a1e_1 + ', planAFournir=' + this.b1e_1 + ')';
  };
  protoOf(EntreeRevue).hashCode = function () {
    var result = this.y1d_1.hashCode();
    result = imul(result, 31) + this.z1d_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.a1e_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.b1e_1) | 0;
    return result;
  };
  protoOf(EntreeRevue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevue))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevue ? other : THROW_CCE();
    if (!this.y1d_1.equals(tmp0_other_with_cast.y1d_1))
      return false;
    if (!this.z1d_1.equals(tmp0_other_with_cast.z1d_1))
      return false;
    if (!(this.a1e_1 === tmp0_other_with_cast.a1e_1))
      return false;
    if (!(this.b1e_1 === tmp0_other_with_cast.b1e_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_6(function_0) {
    this.p1i_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_6).dc = function (a, b) {
    return this.p1i_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).u2 = function () {
    return this.p1i_1;
  };
  protoOf(sam$kotlin_Comparator$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u2(), other.u2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_6).hashCode = function () {
    return hashCode(this.u2());
  };
  function FileRevue$ordreInterne$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp = a.z1d_1.d2_1;
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp$ret$1 = b.z1d_1.d2_1;
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
        var tmp_0 = b.a1e_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = a.a1e_1;
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
        var tmp_0 = a.c1e().e1c_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = b.c1e().e1c_1;
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
    var this_0 = new sam$kotlin_Comparator$0_6(tmp_0);
    var tmp_1 = FileRevue$ordreInterne$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_6(tmp_1);
    var tmp_2 = FileRevue$ordreInterne$lambda_1(this_1);
    tmp.r1d_1 = new sam$kotlin_Comparator$0_6(tmp_2);
  }
  protoOf(FileRevue).s1d = function (element, aujourdhui) {
    return new EntreeRevue(element, Priorisation_getInstance().u1g(element.z1c_1, aujourdhui), element.f1d_1, element.w1c_1.j1g() && element.d1d_1 == null);
  };
  var FileRevue_instance;
  function FileRevue_getInstance() {
    if (FileRevue_instance == null)
      new FileRevue();
    return FileRevue_instance;
  }
  function Suivi(elementId, derniereNouvelle) {
    this.q1i_1 = elementId;
    this.r1i_1 = derniereNouvelle;
  }
  protoOf(Suivi).toString = function () {
    return 'Suivi(elementId=' + this.q1i_1.toString() + ', derniereNouvelle=' + this.r1i_1.toString() + ')';
  };
  protoOf(Suivi).hashCode = function () {
    var result = this.q1i_1.hashCode();
    result = imul(result, 31) + this.r1i_1.hashCode() | 0;
    return result;
  };
  protoOf(Suivi).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Suivi))
      return false;
    var tmp0_other_with_cast = other instanceof Suivi ? other : THROW_CCE();
    if (!this.q1i_1.equals(tmp0_other_with_cast.q1i_1))
      return false;
    if (!this.r1i_1.equals(tmp0_other_with_cast.r1i_1))
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
    this.i1e_1 = element;
    this.j1e_1 = motif;
    this.k1e_1 = options;
  }
  protoOf(PropositionRelance).toString = function () {
    return 'PropositionRelance(element=' + this.i1e_1.toString() + ', motif=' + this.j1e_1 + ', options=' + toString_0(this.k1e_1) + ')';
  };
  protoOf(PropositionRelance).hashCode = function () {
    var result = this.i1e_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.j1e_1) | 0;
    result = imul(result, 31) + hashCode(this.k1e_1) | 0;
    return result;
  };
  protoOf(PropositionRelance).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionRelance))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionRelance ? other : THROW_CCE();
    if (!this.i1e_1.equals(tmp0_other_with_cast.i1e_1))
      return false;
    if (!(this.j1e_1 === tmp0_other_with_cast.j1e_1))
      return false;
    if (!equals(this.k1e_1, tmp0_other_with_cast.k1e_1))
      return false;
    return true;
  };
  function engagement($this, element, aujourdhui) {
    var tmp0_elvis_lhs = element.z1c_1;
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
    var tmp1_safe_receiver = element.b1d_1;
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
    var delai = $this.s1i(element.b1d_1, delaisObserves);
    if (silence <= delai)
      return null;
    var tmp0_elvis_lhs = element.b1d_1;
    var qui = tmp0_elvis_lhs == null ? 'cette personne' : tmp0_elvis_lhs;
    var tmp0 = delaisObserves.w1();
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
        var tmp0_elvis_lhs_0 = element.b1d_1;
        if (tmp_0.l1i(element_0, tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0)) {
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
    var tmp0_safe_receiver = it.i1e_1.z1c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return tmp1_elvis_lhs == null ? '9999' : tmp1_elvis_lhs;
  }
  function Relance$aRelancer$lambda_0(it) {
    return it.i1e_1.u1c_1.e1c_1;
  }
  function Relance() {
    this.f1e_1 = 3;
    this.g1e_1 = 7;
  }
  protoOf(Relance).s1i = function (personne, observes) {
    if (personne == null)
      return 7;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = observes.x1();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
      if (Texte_getInstance().l1i(element.r1(), personne)) {
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
      var minValue = minElem.r1();
      do {
        var e = iterator.i();
        // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
        var v = e.r1();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.h());
      tmp$ret$3 = minElem;
    }
    var trouve = tmp$ret$3;
    var tmp1_elvis_lhs = trouve == null ? null : trouve.s1();
    return tmp1_elvis_lhs == null ? 7 : tmp1_elvis_lhs;
  };
  protoOf(Relance).h1e = function (elements, aujourdhui, suivis, delaisObserves) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(suivis, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = suivis.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.q1i_1, element.r1i_1);
      destination.y1(pair.qb_1, pair.rb_1);
    }
    var parElement = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = elements.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      if (element_0.e1d_1.equals(Verdict_ACCEPTE_getInstance())) {
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
      switch (element_1.w1c_1.d2_1) {
        case 1:
          tmp = engagement(Relance_instance, element_1, aujourdhui);
          break;
        case 2:
          var tmp_0 = Relance_instance;
          var tmp1_elvis_lhs = parElement.v1(element_1.u1c_1);
          tmp = attente(tmp_0, element_1, tmp1_elvis_lhs == null ? element_1.z1c_1 : tmp1_elvis_lhs, aujourdhui, delaisObserves);
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
  function Jeton(mot, suite) {
    this.t1i_1 = mot;
    this.u1i_1 = suite;
    var tmp = this;
    // Inline function 'kotlin.text.filter' call
    var tmp0 = Texte_getInstance().a1h(this.t1i_1);
    // Inline function 'kotlin.text.filterTo' call
    var destination = StringBuilder_init_$Create$();
    var inductionVariable = 0;
    var last = charSequenceLength(tmp0);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = charSequenceGet(tmp0, index);
        // Inline function 'app.zenote.core.texte.Jeton.forme.<anonymous>' call
        if (isLetterOrDigit(element)) {
          destination.g7(element);
        }
      }
       while (inductionVariable < last);
    tmp.v1i_1 = destination.toString();
    var tmp_0 = this;
    var tmp_1;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.v1i_1;
    if (charSequenceLength(this_0) > 0) {
      tmp_1 = estAllongementDeBruit(Disfluences_getInstance(), this.v1i_1);
    } else {
      tmp_1 = false;
    }
    tmp_0.w1i_1 = tmp_1;
    var tmp_2 = this;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp0_safe_receiver = firstOrNull(this.t1i_1);
    var tmp_6;
    var tmp_7 = tmp0_safe_receiver;
    if ((tmp_7 == null ? null : new Char(tmp_7)) == null) {
      tmp_6 = null;
    } else {
      tmp_6 = isUpperCase(tmp0_safe_receiver);
    }
    if (tmp_6 === true) {
      tmp_5 = true;
    } else {
      var tmp0_0 = this.v1i_1;
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.text.any' call
        var inductionVariable_0 = 0;
        while (inductionVariable_0 < charSequenceLength(tmp0_0)) {
          var element_0 = charSequenceGet(tmp0_0, inductionVariable_0);
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'app.zenote.core.texte.Jeton.intouchable.<anonymous>' call
          if (isDigit(element_0)) {
            tmp$ret$5 = true;
            break $l$block;
          }
        }
        tmp$ret$5 = false;
      }
      tmp_5 = tmp$ret$5;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = Disfluences_getInstance().t1f_1.p1(this.v1i_1);
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = Disfluences_getInstance().u1f_1.p1(this.v1i_1);
    }
    tmp_2.x1i_1 = tmp_3;
  }
  function estAllongementDeBruit($this, forme) {
    if ($this.s1f_1.p1(forme))
      return true;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'app.zenote.core.texte.Disfluences.estAllongementDeBruit.<anonymous>' call
    // Inline function 'kotlin.text.forEach' call
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(forme)) {
      var element = charSequenceGet(forme, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'app.zenote.core.texte.Disfluences.estAllongementDeBruit.<anonymous>.<anonymous>' call
      var tmp = lastOrNull(this_0);
      if (!equals(tmp == null ? null : new Char(tmp), new Char(element))) {
        this_0.g7(element);
      }
    }
    var ecrasee = this_0.toString();
    return $this.s1f_1.p1(ecrasee);
  }
  function decouper($this, texte) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var jetons = ArrayList_init_$Create$_0();
    var i = 0;
    $l$loop: while (i < texte.length) {
      if (isWhitespace(charSequenceGet(texte, i))) {
        i = i + 1 | 0;
        continue $l$loop;
      }
      var debut = i;
      while (i < texte.length && !isWhitespace(charSequenceGet(texte, i))) {
        i = i + 1 | 0;
      }
      // Inline function 'kotlin.text.substring' call
      var endIndex = i;
      // Inline function 'kotlin.js.asDynamic' call
      var brut = texte.substring(debut, endIndex);
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.indexOfLast' call
        var inductionVariable = charSequenceLength(brut) - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            // Inline function 'app.zenote.core.texte.Disfluences.decouper.<anonymous>' call
            var it = charSequenceGet(brut, index);
            if (isLetterOrDigit(it)) {
              tmp$ret$4 = index;
              break $l$block;
            }
          }
           while (0 <= inductionVariable);
        tmp$ret$4 = -1;
      }
      var fin = tmp$ret$4 + 1 | 0;
      var tmp;
      if (fin > 0) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = brut.substring(0, fin);
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$8 = brut.substring(fin);
        tmp = new Jeton(tmp_0, tmp$ret$8);
      } else {
        tmp = new Jeton(brut, '');
      }
      // Inline function 'kotlin.collections.plusAssign' call
      var element = tmp;
      jetons.e(element);
    }
    return jetons;
  }
  function reduireRepetitions($this, jetons) {
    var courant = jetons;
    var inductionVariable = 3;
    if (1 <= inductionVariable)
      do {
        var taille = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        courant = reduireGroupesDe($this, courant, taille);
      }
       while (1 <= inductionVariable);
    return courant;
  }
  function reduireGroupesDe($this, jetons, taille) {
    if (jetons.l() < imul(taille, 2))
      return jetons;
    // Inline function 'kotlin.collections.mutableListOf' call
    var garde = ArrayList_init_$Create$_0();
    var i = 0;
    while (i < jetons.l()) {
      var finGroupe = i + taille | 0;
      var finSuivant = finGroupe + taille | 0;
      var tmp;
      var tmp_0;
      if (finSuivant <= jetons.l()) {
        var tmp0 = until(i, finGroupe);
        var tmp$ret$1;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp_1;
          if (isInterface(tmp0, Collection)) {
            tmp_1 = tmp0.j();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$1 = true;
            break $l$block_0;
          }
          var inductionVariable = tmp0.t_1;
          var last = tmp0.u_1;
          if (inductionVariable <= last)
            do {
              var element = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'app.zenote.core.texte.Disfluences.reduireGroupesDe.<anonymous>' call
              var it = element;
              if (!(jetons.k(it).v1i_1 === jetons.k(it + taille | 0).v1i_1)) {
                tmp$ret$1 = false;
                break $l$block_0;
              }
            }
             while (!(element === last));
          tmp$ret$1 = true;
        }
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp2 = until(i, finGroupe);
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlin.collections.none' call
          var tmp_2;
          if (isInterface(tmp2, Collection)) {
            tmp_2 = tmp2.j();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          var inductionVariable_0 = tmp2.t_1;
          var last_0 = tmp2.u_1;
          if (inductionVariable_0 <= last_0)
            do {
              var element_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'app.zenote.core.texte.Disfluences.reduireGroupesDe.<anonymous>' call
              var it_0 = element_0;
              var tmp_3;
              // Inline function 'kotlin.text.isEmpty' call
              var this_0 = jetons.k(it_0).v1i_1;
              if (charSequenceLength(this_0) === 0) {
                tmp_3 = true;
              } else {
                tmp_3 = jetons.k(it_0).x1i_1;
              }
              if (tmp_3) {
                tmp$ret$3 = false;
                break $l$block_2;
              }
            }
             while (!(element_0 === last_0));
          tmp$ret$3 = true;
        }
        tmp = tmp$ret$3;
      } else {
        tmp = false;
      }
      var repetition = tmp;
      if (repetition) {
        i = i + taille | 0;
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = jetons.k(i);
        garde.e(element_1);
        i = i + 1 | 0;
      }
    }
    return garde;
  }
  function recomposer($this, jetons) {
    // Inline function 'kotlin.text.trim' call
    var this_0 = joinToString(jetons, ' ', VOID, VOID, VOID, VOID, Disfluences$recomposer$lambda);
    return toString_0(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  }
  function Disfluences$recomposer$lambda(it) {
    return it.t1i_1 + it.u1i_1;
  }
  function Disfluences() {
    Disfluences_instance = this;
    this.s1f_1 = setOf(['euh', 'heu', 'eh', 'hum', 'hmm', 'mmh', 'mm', 'hein', 'ben', 'bah', 'beh']);
    this.t1f_1 = setOf(['ne', 'n', 'pas', 'non', 'jamais', 'rien', 'aucun', 'aucune', 'ni', 'sans']);
    this.u1f_1 = setOf(['zero', 'un', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'cent', 'cents', 'mille', 'million', 'millions', 'milliard', 'milliards', 'demi', 'quart']);
    this.v1f_1 = 3;
  }
  protoOf(Disfluences).w1f = function (brut) {
    var jetons = decouper(this, brut);
    if (jetons.j())
      return brut;
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = jetons.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.texte.Disfluences.lisible.<anonymous>' call
      if (!element.w1i_1) {
        destination.e(element);
      }
    }
    var sansBruits = destination;
    var sansRepetitions = reduireRepetitions(this, sansBruits);
    if (sansRepetitions.l() === jetons.l())
      return brut;
    return recomposer(this, sansRepetitions);
  };
  var Disfluences_instance;
  function Disfluences_getInstance() {
    if (Disfluences_instance == null)
      new Disfluences();
    return Disfluences_instance;
  }
  function Texte() {
    Texte_instance = this;
    this.x1g_1 = '\xE0\xE1\xE2\xE3\xE4\xE5\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF1\xF2\xF3\xF4\xF5\xF6\xF9\xFA\xFB\xFC\xFD\xFF';
    this.y1g_1 = 'aaaaaaceeeeiiiinooooouuuuyy';
    this.z1g_1 = setOf(['le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux', 'et', 'ou', 'a', '\xE0', 'en', 'dans', 'sur', 'pour', 'par', 'avec', 'que', 'qui', 'quoi', 'ce', 'cet', 'cette', 'ces', 'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'est', 'sont', 'ai', 'as', 'ont', 'etait', 'ete', 'pas', 'ne', 'plus']);
  }
  protoOf(Texte).a1h = function (texte) {
    // Inline function 'kotlin.text.buildString' call
    var capacity = texte.length;
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0(capacity);
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
      this_0.g7(i >= 0 ? charSequenceGet('aaaaaaceeeeiiiinooooouuuuyy', i) : element);
    }
    return this_0.toString();
  };
  protoOf(Texte).m1i = function (texte) {
    // Inline function 'kotlin.text.map' call
    var this_0 = this.a1h(texte);
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
      if (element.length > 1 && !Texte_getInstance().z1g_1.p1(element)) {
        destination_0.e(element);
      }
    }
    return destination_0;
  };
  protoOf(Texte).y1i = function (texte) {
    return toSet(this.m1i(texte));
  };
  protoOf(Texte).y1h = function (requete, texte) {
    var demandes = this.y1i(requete);
    if (demandes.j())
      return 0.0;
    var presents = this.y1i(texte);
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
        if (presents.p1(element)) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    return tmp$ret$0 / demandes.l();
  };
  protoOf(Texte).l1i = function (a, b) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(a) ? a : THROW_CCE()));
    var tmp = this.a1h(tmp$ret$0);
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1 = toString_0(trim(isCharSequence(b) ? b : THROW_CCE()));
    return tmp === this.a1h(tmp$ret$1);
  };
  var Texte_instance;
  function Texte_getInstance() {
    if (Texte_instance == null)
      new Texte();
    return Texte_instance;
  }
  function ZeNoteRegles() {
    this.version = '7';
  }
  protoOf(ZeNoteRegles).maintenant = function (elementsJson, aujourdhui) {
    return Regles_getInstance().i1d(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).revue = function (elementsJson, aujourdhui) {
    return Regles_getInstance().q1d(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).transcriptionLisible = function (brut) {
    return Regles_getInstance().r1f(brut);
  };
  protoOf(ZeNoteRegles).filtrerAncrage = function (texteSource, elementsJson, passagesIncertainsJson) {
    return Regles_getInstance().x1f(texteSource, elementsJson, passagesIncertainsJson);
  };
  protoOf(ZeNoteRegles).relances = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    return Regles_getInstance().e1e(elementsJson, aujourdhui, suivisJson, delaisJson);
  };
  protoOf(ZeNoteRegles).rechercherParMots = function (requete, elementsJson, capturesJson, reseau) {
    return Regles_getInstance().y1f(requete, elementsJson, capturesJson, reseau);
  };
  protoOf(ZeNoteRegles).rechercherParQuestion = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
    return Regles_getInstance().d1g(requete, elementsJson, capturesJson, aujourdhui, reseau);
  };
  protoOf(ZeNoteRegles).rappels = function (elementsJson, maintenant, suivisJson) {
    return Regles_getInstance().l1e(elementsJson, maintenant, suivisJson);
  };
  protoOf(ZeNoteRegles).rechercherParPersonne = function (personne, elementsJson, reseau) {
    return Regles_getInstance().f1g(personne, elementsJson, reseau);
  };
  protoOf(ZeNoteRegles).z1i = function () {
    return this.version;
  };
  var ZeNoteRegles_instance;
  function ZeNoteRegles_getInstance() {
    return ZeNoteRegles_instance;
  }
  //region block: post-declaration
  protoOf($serializer).kj = typeParametersSerializers;
  protoOf($serializer_0).kj = typeParametersSerializers;
  protoOf($serializer_1).kj = typeParametersSerializers;
  protoOf($serializer_2).kj = typeParametersSerializers;
  protoOf($serializer_3).kj = typeParametersSerializers;
  protoOf($serializer_4).kj = typeParametersSerializers;
  protoOf($serializer_5).kj = typeParametersSerializers;
  protoOf($serializer_6).kj = typeParametersSerializers;
  protoOf($serializer_7).kj = typeParametersSerializers;
  protoOf($serializer_8).kj = typeParametersSerializers;
  protoOf($serializer_9).kj = typeParametersSerializers;
  protoOf($serializer_10).kj = typeParametersSerializers;
  protoOf($serializer_11).kj = typeParametersSerializers;
  protoOf($serializer_12).kj = typeParametersSerializers;
  protoOf($serializer_13).kj = typeParametersSerializers;
  protoOf($serializer_14).kj = typeParametersSerializers;
  protoOf($serializer_15).kj = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
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

