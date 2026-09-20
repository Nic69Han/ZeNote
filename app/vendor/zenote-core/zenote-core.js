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
  var protoOf = kotlin_kotlin.$_$.m5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.x4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.w1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.r7;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var initMetadataForObject = kotlin_kotlin.$_$.b5;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.l5;
  var toString = kotlin_kotlin.$_$.d8;
  var getStringHashCode = kotlin_kotlin.$_$.u4;
  var getNumberHashCode = kotlin_kotlin.$_$.s4;
  var getBooleanHashCode = kotlin_kotlin.$_$.r4;
  var equals = kotlin_kotlin.$_$.p4;
  var initMetadataForClass = kotlin_kotlin.$_$.w4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toString_0 = kotlin_kotlin.$_$.p5;
  var hashCode = kotlin_kotlin.$_$.v4;
  var emptyList = kotlin_kotlin.$_$.o2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.o;
  var until = kotlin_kotlin.$_$.w5;
  var Collection = kotlin_kotlin.$_$.y1;
  var isInterface = kotlin_kotlin.$_$.e5;
  var Companion_instance = kotlin_kotlin.$_$.v1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p1;
  var createFailure = kotlin_kotlin.$_$.v7;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q1;
  var isBlank = kotlin_kotlin.$_$.h6;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r1;
  var listOfNotNull = kotlin_kotlin.$_$.e3;
  var FunctionAdapter = kotlin_kotlin.$_$.f4;
  var Comparator = kotlin_kotlin.$_$.j7;
  var compareValues = kotlin_kotlin.$_$.a4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var compareTo = kotlin_kotlin.$_$.n4;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var mapCapacity = kotlin_kotlin.$_$.h3;
  var coerceAtLeast = kotlin_kotlin.$_$.s5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var getValue = kotlin_kotlin.$_$.t2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var sortedWith = kotlin_kotlin.$_$.u3;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.t1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.s1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.p;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.q;
  var toInstant = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.w7;
  var to = kotlin_kotlin.$_$.e8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.n;
  var setOf = kotlin_kotlin.$_$.p3;
  var equals_0 = kotlin_kotlin.$_$.d6;
  var Enum = kotlin_kotlin.$_$.m7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var emptySet = kotlin_kotlin.$_$.q2;
  var toList = kotlin_kotlin.$_$.w3;
  var isCharSequence = kotlin_kotlin.$_$.d5;
  var trim = kotlin_kotlin.$_$.e7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.l1;
  var padStart = kotlin_kotlin.$_$.p6;
  var plus = kotlin_kotlin.$_$.m3;
  var KtMap = kotlin_kotlin.$_$.b2;
  var getOrNull = kotlin_kotlin.$_$.s2;
  var _Duration___get_inWholeDays__impl__7bvpxz = kotlin_kotlin.$_$.j1;
  var charSequenceLength = kotlin_kotlin.$_$.l4;
  var charArrayOf = kotlin_kotlin.$_$.i4;
  var split = kotlin_kotlin.$_$.t6;
  var take = kotlin_kotlin.$_$.a7;
  var joinToString = kotlin_kotlin.$_$.x2;
  var firstOrNull = kotlin_kotlin.$_$.r2;
  var THROW_IAE = kotlin_kotlin.$_$.s7;
  var Long = kotlin_kotlin.$_$.p7;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.r;
  var take_0 = kotlin_kotlin.$_$.v3;
  var LocalTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.l;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.q;
  var LocalDateTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.j;
  var contains = kotlin_kotlin.$_$.c6;
  var Companion_getInstance_3 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.m;
  var plus_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.v;
  var toInt = kotlin_kotlin.$_$.d7;
  var LocalDateTime_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.k;
  var single = kotlin_kotlin.$_$.s3;
  var listOf = kotlin_kotlin.$_$.g3;
  var toSet = kotlin_kotlin.$_$.y3;
  var plus_1 = kotlin_kotlin.$_$.l3;
  var compareBy = kotlin_kotlin.$_$.z3;
  var listOfNotNull_0 = kotlin_kotlin.$_$.d3;
  var charSequenceGet = kotlin_kotlin.$_$.k4;
  var isLetterOrDigit = kotlin_kotlin.$_$.j6;
  var Char = kotlin_kotlin.$_$.h7;
  var get_isoDayNumber = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.s;
  var DatePeriod_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.h;
  var minus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.t;
  var plus_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.u;
  var LocalDate_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.i;
  var substringAfter = kotlin_kotlin.$_$.y6;
  var split_0 = kotlin_kotlin.$_$.u6;
  var toIntOrNull = kotlin_kotlin.$_$.c7;
  var startsWith = kotlin_kotlin.$_$.v6;
  var minOf = kotlin_kotlin.$_$.b4;
  var DayOfWeek_SATURDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var DayOfWeek_MONDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DayOfWeek_TUESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.f;
  var DayOfWeek_WEDNESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.g;
  var DayOfWeek_THURSDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var DayOfWeek_FRIDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DayOfWeek_SUNDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var mapOf = kotlin_kotlin.$_$.i3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var firstOrNull_0 = kotlin_kotlin.$_$.e6;
  var isUpperCase = kotlin_kotlin.$_$.k6;
  var isDigit = kotlin_kotlin.$_$.i6;
  var lastOrNull = kotlin_kotlin.$_$.o6;
  var isWhitespace = kotlin_kotlin.$_$.l6;
  var setOf_0 = kotlin_kotlin.$_$.q3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var indexOf = kotlin_kotlin.$_$.g6;
  var checkCountOverflow = kotlin_kotlin.$_$.f2;
  var defineProp = kotlin_kotlin.$_$.o4;
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
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CandidatJson, 'CandidatJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ResolutionJson, 'ResolutionJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Regles, 'Regles');
  initMetadataForClass(TypeEntite, 'TypeEntite', VOID, Enum);
  initMetadataForClass(EntiteId, 'EntiteId');
  initMetadataForClass(Mention, 'Mention');
  initMetadataForClass(Entite, 'Entite');
  initMetadataForClass(Memoire, 'Memoire', Memoire);
  initMetadataForClass(Candidat, 'Candidat');
  initMetadataForClass(Resolution, 'Resolution');
  initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(ResolutionReferences, 'ResolutionReferences');
  initMetadataForClass(Deduit, 'Deduit');
  initMetadataForClass(TypeElement, 'TypeElement', VOID, Enum);
  initMetadataForClass(Poids, 'Poids', VOID, Enum);
  initMetadataForClass(Sphere, 'Sphere', VOID, Enum);
  initMetadataForClass(Plan, 'Plan');
  initMetadataForClass(ElementId, 'ElementId');
  initMetadataForClass(ElementDerive, 'ElementDerive');
  initMetadataForClass(Verdict, 'Verdict', VOID, Enum);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(ElementResolu, 'ElementResolu');
  initMetadataForClass(CaptureId, 'CaptureId');
  initMetadataForClass(Passage, 'Passage');
  initMetadataForClass(Urgence, 'Urgence', VOID, Enum);
  initMetadataForClass(ContexteMaintenant, 'ContexteMaintenant');
  initMetadataForClass(Proposition, 'Proposition');
  initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
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
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(sam$kotlin_Comparator$0_4, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_5, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(FileOpportunite, 'FileOpportunite', FileOpportunite);
  initMetadataForClass(RappelId, 'RappelId');
  initMetadataForClass(Rappel, 'Rappel');
  initMetadataForClass(TexteSource, 'TexteSource');
  initMetadataForClass(Citation, 'Citation');
  initMetadataForClass(Reponse, 'Reponse');
  initMetadataForClass(sam$kotlin_Comparator$0_6, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(RechercheLocale, 'RechercheLocale');
  initMetadataForClass(Periode, 'Periode');
  initMetadataForClass(Repere, 'Repere');
  initMetadataForObject(RepereTemporel, 'RepereTemporel');
  initMetadataForClass(RevueReduite, 'RevueReduite');
  initMetadataForClass(sam$kotlin_Comparator$0_7, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Arriere, 'Arriere');
  initMetadataForClass(EntreeRevue, 'EntreeRevue');
  initMetadataForClass(sam$kotlin_Comparator$0_8, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
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
  protoOf(Companion).x1b = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ElementJson', this, 23);
    tmp0_serialDesc.sj('id', false);
    tmp0_serialDesc.sj('captureId', false);
    tmp0_serialDesc.sj('type', false);
    tmp0_serialDesc.sj('texte', false);
    tmp0_serialDesc.sj('debutCar', false);
    tmp0_serialDesc.sj('finCar', false);
    tmp0_serialDesc.sj('debutMs', true);
    tmp0_serialDesc.sj('finMs', true);
    tmp0_serialDesc.sj('echeance', true);
    tmp0_serialDesc.sj('echeanceConfiance', true);
    tmp0_serialDesc.sj('echeanceIndice', true);
    tmp0_serialDesc.sj('horizon', true);
    tmp0_serialDesc.sj('poids', true);
    tmp0_serialDesc.sj('poidsConfiance', true);
    tmp0_serialDesc.sj('poidsIndice', true);
    tmp0_serialDesc.sj('interlocuteur', true);
    tmp0_serialDesc.sj('interlocuteurConfiance', true);
    tmp0_serialDesc.sj('sphere', true);
    tmp0_serialDesc.sj('planDeclencheur', true);
    tmp0_serialDesc.sj('planAction', true);
    tmp0_serialDesc.sj('verdict', true);
    tmp0_serialDesc.sj('corrigeParHumain', true);
    tmp0_serialDesc.sj('transcriptionIncertaine', true);
    this.y1b_1 = tmp0_serialDesc;
  }
  protoOf($serializer).z1b = function (encoder, value) {
    var tmp0_desc = this.y1b_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.a1c_1);
    tmp1_output.hg(tmp0_desc, 1, value.b1c_1);
    tmp1_output.hg(tmp0_desc, 2, value.c1c_1);
    tmp1_output.hg(tmp0_desc, 3, value.d1c_1);
    tmp1_output.gg(tmp0_desc, 4, value.e1c_1);
    tmp1_output.gg(tmp0_desc, 5, value.f1c_1);
    if (tmp1_output.og(tmp0_desc, 6) ? true : !(value.g1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 6, LongSerializer_getInstance(), value.g1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 7) ? true : !(value.h1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 7, LongSerializer_getInstance(), value.h1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 8) ? true : !(value.i1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 8, StringSerializer_getInstance(), value.i1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 9) ? true : !(value.j1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 9, DoubleSerializer_getInstance(), value.j1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 10) ? true : !(value.k1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 10, StringSerializer_getInstance(), value.k1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 11) ? true : !(value.l1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 11, StringSerializer_getInstance(), value.l1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 12) ? true : !(value.m1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 12, StringSerializer_getInstance(), value.m1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 13) ? true : !(value.n1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 13, DoubleSerializer_getInstance(), value.n1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 14) ? true : !(value.o1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 14, StringSerializer_getInstance(), value.o1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 15) ? true : !(value.p1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 15, StringSerializer_getInstance(), value.p1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 16) ? true : !(value.q1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 16, DoubleSerializer_getInstance(), value.q1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 17) ? true : !(value.r1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 17, StringSerializer_getInstance(), value.r1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 18) ? true : !(value.s1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 18, StringSerializer_getInstance(), value.s1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 19) ? true : !(value.t1c_1 == null)) {
      tmp1_output.kg(tmp0_desc, 19, StringSerializer_getInstance(), value.t1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 20) ? true : !(value.u1c_1 === 'EN_ATTENTE')) {
      tmp1_output.hg(tmp0_desc, 20, value.u1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 21) ? true : !(value.v1c_1 === false)) {
      tmp1_output.fg(tmp0_desc, 21, value.v1c_1);
    }
    if (tmp1_output.og(tmp0_desc, 22) ? true : !(value.w1c_1 === false)) {
      tmp1_output.fg(tmp0_desc, 22, value.w1c_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer).be = function (encoder, value) {
    return this.z1b(encoder, value instanceof ElementJson ? value : THROW_CCE());
  };
  protoOf($serializer).ce = function (decoder) {
    var tmp0_desc = this.y1b_1;
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
    var tmp24_local20 = null;
    var tmp25_local21 = false;
    var tmp26_local22 = false;
    var tmp27_input = decoder.lf(tmp0_desc);
    if (tmp27_input.uf()) {
      tmp4_local0 = tmp27_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp27_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp27_input.pf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp27_input.pf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp27_input.of(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp27_input.of(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp27_input.sf(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp27_input.sf(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp27_input.sf(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp27_input.sf(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp27_input.sf(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp27_input.sf(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp27_input.sf(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp27_input.sf(tmp0_desc, 13, DoubleSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp27_input.sf(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp27_input.sf(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp27_input.sf(tmp0_desc, 16, DoubleSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp27_input.sf(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp27_input.sf(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp27_input.sf(tmp0_desc, 19, StringSerializer_getInstance(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp27_input.pf(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp27_input.nf(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp26_local22 = tmp27_input.nf(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp27_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp27_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp27_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp27_input.pf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp27_input.pf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp27_input.of(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp27_input.of(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp27_input.sf(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp27_input.sf(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp27_input.sf(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp27_input.sf(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp27_input.sf(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp27_input.sf(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp27_input.sf(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp27_input.sf(tmp0_desc, 13, DoubleSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp27_input.sf(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp27_input.sf(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp27_input.sf(tmp0_desc, 16, DoubleSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp27_input.sf(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp27_input.sf(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp27_input.sf(tmp0_desc, 19, StringSerializer_getInstance(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp27_input.pf(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp27_input.nf(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp26_local22 = tmp27_input.nf(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp27_input.mf(tmp0_desc);
    return ElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, tmp26_local22, null);
  };
  protoOf($serializer).ae = function () {
    return this.y1b_1;
  };
  protoOf($serializer).uj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance().y1b_1);
    }
    $this.a1c_1 = id;
    $this.b1c_1 = captureId;
    $this.c1c_1 = type;
    $this.d1c_1 = texte;
    $this.e1c_1 = debutCar;
    $this.f1c_1 = finCar;
    if (0 === (seen0 & 64))
      $this.g1c_1 = null;
    else
      $this.g1c_1 = debutMs;
    if (0 === (seen0 & 128))
      $this.h1c_1 = null;
    else
      $this.h1c_1 = finMs;
    if (0 === (seen0 & 256))
      $this.i1c_1 = null;
    else
      $this.i1c_1 = echeance;
    if (0 === (seen0 & 512))
      $this.j1c_1 = null;
    else
      $this.j1c_1 = echeanceConfiance;
    if (0 === (seen0 & 1024))
      $this.k1c_1 = null;
    else
      $this.k1c_1 = echeanceIndice;
    if (0 === (seen0 & 2048))
      $this.l1c_1 = null;
    else
      $this.l1c_1 = horizon;
    if (0 === (seen0 & 4096))
      $this.m1c_1 = null;
    else
      $this.m1c_1 = poids;
    if (0 === (seen0 & 8192))
      $this.n1c_1 = null;
    else
      $this.n1c_1 = poidsConfiance;
    if (0 === (seen0 & 16384))
      $this.o1c_1 = null;
    else
      $this.o1c_1 = poidsIndice;
    if (0 === (seen0 & 32768))
      $this.p1c_1 = null;
    else
      $this.p1c_1 = interlocuteur;
    if (0 === (seen0 & 65536))
      $this.q1c_1 = null;
    else
      $this.q1c_1 = interlocuteurConfiance;
    if (0 === (seen0 & 131072))
      $this.r1c_1 = null;
    else
      $this.r1c_1 = sphere;
    if (0 === (seen0 & 262144))
      $this.s1c_1 = null;
    else
      $this.s1c_1 = planDeclencheur;
    if (0 === (seen0 & 524288))
      $this.t1c_1 = null;
    else
      $this.t1c_1 = planAction;
    if (0 === (seen0 & 1048576))
      $this.u1c_1 = 'EN_ATTENTE';
    else
      $this.u1c_1 = verdict;
    if (0 === (seen0 & 2097152))
      $this.v1c_1 = false;
    else
      $this.v1c_1 = corrigeParHumain;
    if (0 === (seen0 & 4194304))
      $this.w1c_1 = false;
    else
      $this.w1c_1 = transcriptionIncertaine;
    return $this;
  }
  function ElementJson_init_$Create$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, serializationConstructorMarker) {
    return ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, serializationConstructorMarker, objectCreate(protoOf(ElementJson)));
  }
  function ElementJson(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    echeance = echeance === VOID ? null : echeance;
    echeanceConfiance = echeanceConfiance === VOID ? null : echeanceConfiance;
    echeanceIndice = echeanceIndice === VOID ? null : echeanceIndice;
    horizon = horizon === VOID ? null : horizon;
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
    this.a1c_1 = id;
    this.b1c_1 = captureId;
    this.c1c_1 = type;
    this.d1c_1 = texte;
    this.e1c_1 = debutCar;
    this.f1c_1 = finCar;
    this.g1c_1 = debutMs;
    this.h1c_1 = finMs;
    this.i1c_1 = echeance;
    this.j1c_1 = echeanceConfiance;
    this.k1c_1 = echeanceIndice;
    this.l1c_1 = horizon;
    this.m1c_1 = poids;
    this.n1c_1 = poidsConfiance;
    this.o1c_1 = poidsIndice;
    this.p1c_1 = interlocuteur;
    this.q1c_1 = interlocuteurConfiance;
    this.r1c_1 = sphere;
    this.s1c_1 = planDeclencheur;
    this.t1c_1 = planAction;
    this.u1c_1 = verdict;
    this.v1c_1 = corrigeParHumain;
    this.w1c_1 = transcriptionIncertaine;
  }
  protoOf(ElementJson).x1c = function (id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine) {
    return new ElementJson(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine);
  };
  protoOf(ElementJson).y1c = function (id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, $super) {
    id = id === VOID ? this.a1c_1 : id;
    captureId = captureId === VOID ? this.b1c_1 : captureId;
    type = type === VOID ? this.c1c_1 : type;
    texte = texte === VOID ? this.d1c_1 : texte;
    debutCar = debutCar === VOID ? this.e1c_1 : debutCar;
    finCar = finCar === VOID ? this.f1c_1 : finCar;
    debutMs = debutMs === VOID ? this.g1c_1 : debutMs;
    finMs = finMs === VOID ? this.h1c_1 : finMs;
    echeance = echeance === VOID ? this.i1c_1 : echeance;
    echeanceConfiance = echeanceConfiance === VOID ? this.j1c_1 : echeanceConfiance;
    echeanceIndice = echeanceIndice === VOID ? this.k1c_1 : echeanceIndice;
    horizon = horizon === VOID ? this.l1c_1 : horizon;
    poids = poids === VOID ? this.m1c_1 : poids;
    poidsConfiance = poidsConfiance === VOID ? this.n1c_1 : poidsConfiance;
    poidsIndice = poidsIndice === VOID ? this.o1c_1 : poidsIndice;
    interlocuteur = interlocuteur === VOID ? this.p1c_1 : interlocuteur;
    interlocuteurConfiance = interlocuteurConfiance === VOID ? this.q1c_1 : interlocuteurConfiance;
    sphere = sphere === VOID ? this.r1c_1 : sphere;
    planDeclencheur = planDeclencheur === VOID ? this.s1c_1 : planDeclencheur;
    planAction = planAction === VOID ? this.t1c_1 : planAction;
    verdict = verdict === VOID ? this.u1c_1 : verdict;
    corrigeParHumain = corrigeParHumain === VOID ? this.v1c_1 : corrigeParHumain;
    transcriptionIncertaine = transcriptionIncertaine === VOID ? this.w1c_1 : transcriptionIncertaine;
    return $super === VOID ? this.x1c(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine) : $super.x1c.call(this, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine);
  };
  protoOf(ElementJson).toString = function () {
    return 'ElementJson(id=' + this.a1c_1 + ', captureId=' + this.b1c_1 + ', type=' + this.c1c_1 + ', texte=' + this.d1c_1 + ', debutCar=' + this.e1c_1 + ', finCar=' + this.f1c_1 + ', debutMs=' + toString(this.g1c_1) + ', finMs=' + toString(this.h1c_1) + ', echeance=' + this.i1c_1 + ', echeanceConfiance=' + this.j1c_1 + ', echeanceIndice=' + this.k1c_1 + ', horizon=' + this.l1c_1 + ', poids=' + this.m1c_1 + ', poidsConfiance=' + this.n1c_1 + ', poidsIndice=' + this.o1c_1 + ', interlocuteur=' + this.p1c_1 + ', interlocuteurConfiance=' + this.q1c_1 + ', sphere=' + this.r1c_1 + ', planDeclencheur=' + this.s1c_1 + ', planAction=' + this.t1c_1 + ', verdict=' + this.u1c_1 + ', corrigeParHumain=' + this.v1c_1 + ', transcriptionIncertaine=' + this.w1c_1 + ')';
  };
  protoOf(ElementJson).hashCode = function () {
    var result = getStringHashCode(this.a1c_1);
    result = imul(result, 31) + getStringHashCode(this.b1c_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c1c_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1c_1) | 0;
    result = imul(result, 31) + this.e1c_1 | 0;
    result = imul(result, 31) + this.f1c_1 | 0;
    result = imul(result, 31) + (this.g1c_1 == null ? 0 : this.g1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h1c_1 == null ? 0 : this.h1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.i1c_1 == null ? 0 : getStringHashCode(this.i1c_1)) | 0;
    result = imul(result, 31) + (this.j1c_1 == null ? 0 : getNumberHashCode(this.j1c_1)) | 0;
    result = imul(result, 31) + (this.k1c_1 == null ? 0 : getStringHashCode(this.k1c_1)) | 0;
    result = imul(result, 31) + (this.l1c_1 == null ? 0 : getStringHashCode(this.l1c_1)) | 0;
    result = imul(result, 31) + (this.m1c_1 == null ? 0 : getStringHashCode(this.m1c_1)) | 0;
    result = imul(result, 31) + (this.n1c_1 == null ? 0 : getNumberHashCode(this.n1c_1)) | 0;
    result = imul(result, 31) + (this.o1c_1 == null ? 0 : getStringHashCode(this.o1c_1)) | 0;
    result = imul(result, 31) + (this.p1c_1 == null ? 0 : getStringHashCode(this.p1c_1)) | 0;
    result = imul(result, 31) + (this.q1c_1 == null ? 0 : getNumberHashCode(this.q1c_1)) | 0;
    result = imul(result, 31) + (this.r1c_1 == null ? 0 : getStringHashCode(this.r1c_1)) | 0;
    result = imul(result, 31) + (this.s1c_1 == null ? 0 : getStringHashCode(this.s1c_1)) | 0;
    result = imul(result, 31) + (this.t1c_1 == null ? 0 : getStringHashCode(this.t1c_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.u1c_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v1c_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.w1c_1) | 0;
    return result;
  };
  protoOf(ElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof ElementJson ? other : THROW_CCE();
    if (!(this.a1c_1 === tmp0_other_with_cast.a1c_1))
      return false;
    if (!(this.b1c_1 === tmp0_other_with_cast.b1c_1))
      return false;
    if (!(this.c1c_1 === tmp0_other_with_cast.c1c_1))
      return false;
    if (!(this.d1c_1 === tmp0_other_with_cast.d1c_1))
      return false;
    if (!(this.e1c_1 === tmp0_other_with_cast.e1c_1))
      return false;
    if (!(this.f1c_1 === tmp0_other_with_cast.f1c_1))
      return false;
    if (!equals(this.g1c_1, tmp0_other_with_cast.g1c_1))
      return false;
    if (!equals(this.h1c_1, tmp0_other_with_cast.h1c_1))
      return false;
    if (!(this.i1c_1 == tmp0_other_with_cast.i1c_1))
      return false;
    if (!equals(this.j1c_1, tmp0_other_with_cast.j1c_1))
      return false;
    if (!(this.k1c_1 == tmp0_other_with_cast.k1c_1))
      return false;
    if (!(this.l1c_1 == tmp0_other_with_cast.l1c_1))
      return false;
    if (!(this.m1c_1 == tmp0_other_with_cast.m1c_1))
      return false;
    if (!equals(this.n1c_1, tmp0_other_with_cast.n1c_1))
      return false;
    if (!(this.o1c_1 == tmp0_other_with_cast.o1c_1))
      return false;
    if (!(this.p1c_1 == tmp0_other_with_cast.p1c_1))
      return false;
    if (!equals(this.q1c_1, tmp0_other_with_cast.q1c_1))
      return false;
    if (!(this.r1c_1 == tmp0_other_with_cast.r1c_1))
      return false;
    if (!(this.s1c_1 == tmp0_other_with_cast.s1c_1))
      return false;
    if (!(this.t1c_1 == tmp0_other_with_cast.t1c_1))
      return false;
    if (!(this.u1c_1 === tmp0_other_with_cast.u1c_1))
      return false;
    if (!(this.v1c_1 === tmp0_other_with_cast.v1c_1))
      return false;
    if (!(this.w1c_1 === tmp0_other_with_cast.w1c_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).x1b = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PassageIncertainJson', this, 2);
    tmp0_serialDesc.sj('debutCar', false);
    tmp0_serialDesc.sj('finCar', false);
    this.z1c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).a1d = function (encoder, value) {
    var tmp0_desc = this.z1c_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.gg(tmp0_desc, 0, value.b1d_1);
    tmp1_output.gg(tmp0_desc, 1, value.c1d_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_0).be = function (encoder, value) {
    return this.a1d(encoder, value instanceof PassageIncertainJson ? value : THROW_CCE());
  };
  protoOf($serializer_0).ce = function (decoder) {
    var tmp0_desc = this.z1c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.lf(tmp0_desc);
    if (tmp6_input.uf()) {
      tmp4_local0 = tmp6_input.of(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.of(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.of(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.of(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.mf(tmp0_desc);
    return PassageIncertainJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).ae = function () {
    return this.z1c_1;
  };
  protoOf($serializer_0).uj = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().z1c_1);
    }
    $this.b1d_1 = debutCar;
    $this.c1d_1 = finCar;
    return $this;
  }
  function PassageIncertainJson_init_$Create$(seen0, debutCar, finCar, serializationConstructorMarker) {
    return PassageIncertainJson_init_$Init$(seen0, debutCar, finCar, serializationConstructorMarker, objectCreate(protoOf(PassageIncertainJson)));
  }
  function PassageIncertainJson() {
  }
  protoOf(PassageIncertainJson).toString = function () {
    return 'PassageIncertainJson(debutCar=' + this.b1d_1 + ', finCar=' + this.c1d_1 + ')';
  };
  protoOf(PassageIncertainJson).hashCode = function () {
    var result = this.b1d_1;
    result = imul(result, 31) + this.c1d_1 | 0;
    return result;
  };
  protoOf(PassageIncertainJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PassageIncertainJson))
      return false;
    var tmp0_other_with_cast = other instanceof PassageIncertainJson ? other : THROW_CCE();
    if (!(this.b1d_1 === tmp0_other_with_cast.b1d_1))
      return false;
    if (!(this.c1d_1 === tmp0_other_with_cast.c1d_1))
      return false;
    return true;
  };
  function Companion_1() {
  }
  protoOf(Companion_1).x1b = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PropositionJson', this, 5);
    tmp0_serialDesc.sj('elementId', false);
    tmp0_serialDesc.sj('texte', false);
    tmp0_serialDesc.sj('raison', false);
    tmp0_serialDesc.sj('poidsEffectif', false);
    tmp0_serialDesc.sj('urgence', false);
    this.d1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).e1d = function (encoder, value) {
    var tmp0_desc = this.d1d_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.f1d_1);
    tmp1_output.hg(tmp0_desc, 1, value.g1d_1);
    tmp1_output.hg(tmp0_desc, 2, value.h1d_1);
    tmp1_output.hg(tmp0_desc, 3, value.i1d_1);
    tmp1_output.hg(tmp0_desc, 4, value.j1d_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_1).be = function (encoder, value) {
    return this.e1d(encoder, value instanceof PropositionJson ? value : THROW_CCE());
  };
  protoOf($serializer_1).ce = function (decoder) {
    var tmp0_desc = this.d1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.lf(tmp0_desc);
    if (tmp9_input.uf()) {
      tmp4_local0 = tmp9_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.pf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.pf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.pf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.pf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.pf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.pf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.mf(tmp0_desc);
    return PropositionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_1).ae = function () {
    return this.d1d_1;
  };
  protoOf($serializer_1).uj = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_1().d1d_1);
    }
    $this.f1d_1 = elementId;
    $this.g1d_1 = texte;
    $this.h1d_1 = raison;
    $this.i1d_1 = poidsEffectif;
    $this.j1d_1 = urgence;
    return $this;
  }
  function PropositionJson_init_$Create$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker) {
    return PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, objectCreate(protoOf(PropositionJson)));
  }
  function PropositionJson(elementId, texte, raison, poidsEffectif, urgence) {
    this.f1d_1 = elementId;
    this.g1d_1 = texte;
    this.h1d_1 = raison;
    this.i1d_1 = poidsEffectif;
    this.j1d_1 = urgence;
  }
  protoOf(PropositionJson).toString = function () {
    return 'PropositionJson(elementId=' + this.f1d_1 + ', texte=' + this.g1d_1 + ', raison=' + this.h1d_1 + ', poidsEffectif=' + this.i1d_1 + ', urgence=' + this.j1d_1 + ')';
  };
  protoOf(PropositionJson).hashCode = function () {
    var result = getStringHashCode(this.f1d_1);
    result = imul(result, 31) + getStringHashCode(this.g1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1d_1) | 0;
    return result;
  };
  protoOf(PropositionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionJson))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionJson ? other : THROW_CCE();
    if (!(this.f1d_1 === tmp0_other_with_cast.f1d_1))
      return false;
    if (!(this.g1d_1 === tmp0_other_with_cast.g1d_1))
      return false;
    if (!(this.h1d_1 === tmp0_other_with_cast.h1d_1))
      return false;
    if (!(this.i1d_1 === tmp0_other_with_cast.i1d_1))
      return false;
    if (!(this.j1d_1 === tmp0_other_with_cast.j1d_1))
      return false;
    return true;
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EntreeRevueJson', this, 4);
    tmp0_serialDesc.sj('element', false);
    tmp0_serialDesc.sj('aConfirmer', false);
    tmp0_serialDesc.sj('planManquant', false);
    tmp0_serialDesc.sj('urgence', false);
    this.k1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).l1d = function (encoder, value) {
    var tmp0_desc = this.k1d_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.ig(tmp0_desc, 0, $serializer_getInstance(), value.m1d_1);
    tmp1_output.fg(tmp0_desc, 1, value.n1d_1);
    tmp1_output.fg(tmp0_desc, 2, value.o1d_1);
    tmp1_output.hg(tmp0_desc, 3, value.p1d_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_2).be = function (encoder, value) {
    return this.l1d(encoder, value instanceof EntreeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_2).ce = function (decoder) {
    var tmp0_desc = this.k1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.lf(tmp0_desc);
    if (tmp8_input.uf()) {
      tmp4_local0 = tmp8_input.qf(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.nf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.nf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.pf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.qf(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.nf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.nf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.pf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.mf(tmp0_desc);
    return EntreeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).ae = function () {
    return this.k1d_1;
  };
  protoOf($serializer_2).uj = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().k1d_1);
    }
    $this.m1d_1 = element;
    $this.n1d_1 = aConfirmer;
    $this.o1d_1 = planManquant;
    $this.p1d_1 = urgence;
    return $this;
  }
  function EntreeRevueJson_init_$Create$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker) {
    return EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, objectCreate(protoOf(EntreeRevueJson)));
  }
  function EntreeRevueJson(element, aConfirmer, planManquant, urgence) {
    this.m1d_1 = element;
    this.n1d_1 = aConfirmer;
    this.o1d_1 = planManquant;
    this.p1d_1 = urgence;
  }
  protoOf(EntreeRevueJson).toString = function () {
    return 'EntreeRevueJson(element=' + this.m1d_1.toString() + ', aConfirmer=' + this.n1d_1 + ', planManquant=' + this.o1d_1 + ', urgence=' + this.p1d_1 + ')';
  };
  protoOf(EntreeRevueJson).hashCode = function () {
    var result = this.m1d_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.n1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.o1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p1d_1) | 0;
    return result;
  };
  protoOf(EntreeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevueJson ? other : THROW_CCE();
    if (!this.m1d_1.equals(tmp0_other_with_cast.m1d_1))
      return false;
    if (!(this.n1d_1 === tmp0_other_with_cast.n1d_1))
      return false;
    if (!(this.o1d_1 === tmp0_other_with_cast.o1d_1))
      return false;
    if (!(this.p1d_1 === tmp0_other_with_cast.p1d_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q1d_1 = [null, new ArrayListSerializer($serializer_getInstance_2())];
  }
  var Companion_instance_4;
  function Companion_getInstance_8() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.GroupeRevueJson', this, 2);
    tmp0_serialDesc.sj('captureId', false);
    tmp0_serialDesc.sj('entrees', false);
    this.r1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).s1d = function (encoder, value) {
    var tmp0_desc = this.r1d_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().q1d_1;
    tmp1_output.hg(tmp0_desc, 0, value.t1d_1);
    tmp1_output.ig(tmp0_desc, 1, tmp2_cached[1], value.u1d_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_3).be = function (encoder, value) {
    return this.s1d(encoder, value instanceof GroupeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_3).ce = function (decoder) {
    var tmp0_desc = this.r1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.lf(tmp0_desc);
    var tmp7_cached = Companion_getInstance_8().q1d_1;
    if (tmp6_input.uf()) {
      tmp4_local0 = tmp6_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.qf(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.qf(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.mf(tmp0_desc);
    return GroupeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).ae = function () {
    return this.r1d_1;
  };
  protoOf($serializer_3).uj = function () {
    var tmp0_cached = Companion_getInstance_8().q1d_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().r1d_1);
    }
    $this.t1d_1 = captureId;
    $this.u1d_1 = entrees;
    return $this;
  }
  function GroupeRevueJson_init_$Create$(seen0, captureId, entrees, serializationConstructorMarker) {
    return GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, objectCreate(protoOf(GroupeRevueJson)));
  }
  function GroupeRevueJson(captureId, entrees) {
    Companion_getInstance_8();
    this.t1d_1 = captureId;
    this.u1d_1 = entrees;
  }
  protoOf(GroupeRevueJson).toString = function () {
    return 'GroupeRevueJson(captureId=' + this.t1d_1 + ', entrees=' + toString_0(this.u1d_1) + ')';
  };
  protoOf(GroupeRevueJson).hashCode = function () {
    var result = getStringHashCode(this.t1d_1);
    result = imul(result, 31) + hashCode(this.u1d_1) | 0;
    return result;
  };
  protoOf(GroupeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof GroupeRevueJson ? other : THROW_CCE();
    if (!(this.t1d_1 === tmp0_other_with_cast.t1d_1))
      return false;
    if (!equals(this.u1d_1, tmp0_other_with_cast.u1d_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1d_1 = [null, null, null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_4).x1b = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_9() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RelanceJson', this, 7);
    tmp0_serialDesc.sj('elementId', false);
    tmp0_serialDesc.sj('texte', false);
    tmp0_serialDesc.sj('type', false);
    tmp0_serialDesc.sj('interlocuteur', true);
    tmp0_serialDesc.sj('echeance', true);
    tmp0_serialDesc.sj('motif', false);
    tmp0_serialDesc.sj('options', false);
    this.w1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).x1d = function (encoder, value) {
    var tmp0_desc = this.w1d_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().v1d_1;
    tmp1_output.hg(tmp0_desc, 0, value.y1d_1);
    tmp1_output.hg(tmp0_desc, 1, value.z1d_1);
    tmp1_output.hg(tmp0_desc, 2, value.a1e_1);
    if (tmp1_output.og(tmp0_desc, 3) ? true : !(value.b1e_1 == null)) {
      tmp1_output.kg(tmp0_desc, 3, StringSerializer_getInstance(), value.b1e_1);
    }
    if (tmp1_output.og(tmp0_desc, 4) ? true : !(value.c1e_1 == null)) {
      tmp1_output.kg(tmp0_desc, 4, StringSerializer_getInstance(), value.c1e_1);
    }
    tmp1_output.hg(tmp0_desc, 5, value.d1e_1);
    tmp1_output.ig(tmp0_desc, 6, tmp2_cached[6], value.e1e_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_4).be = function (encoder, value) {
    return this.x1d(encoder, value instanceof RelanceJson ? value : THROW_CCE());
  };
  protoOf($serializer_4).ce = function (decoder) {
    var tmp0_desc = this.w1d_1;
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
    var tmp11_input = decoder.lf(tmp0_desc);
    var tmp12_cached = Companion_getInstance_9().v1d_1;
    if (tmp11_input.uf()) {
      tmp4_local0 = tmp11_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.pf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.sf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.sf(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.pf(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.qf(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.pf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.sf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.sf(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.pf(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.qf(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.mf(tmp0_desc);
    return RelanceJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_4).ae = function () {
    return this.w1d_1;
  };
  protoOf($serializer_4).uj = function () {
    var tmp0_cached = Companion_getInstance_9().v1d_1;
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
      throwMissingFieldException(seen0, 103, $serializer_getInstance_4().w1d_1);
    }
    $this.y1d_1 = elementId;
    $this.z1d_1 = texte;
    $this.a1e_1 = type;
    if (0 === (seen0 & 8))
      $this.b1e_1 = null;
    else
      $this.b1e_1 = interlocuteur;
    if (0 === (seen0 & 16))
      $this.c1e_1 = null;
    else
      $this.c1e_1 = echeance;
    $this.d1e_1 = motif;
    $this.e1e_1 = options;
    return $this;
  }
  function RelanceJson_init_$Create$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker) {
    return RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, objectCreate(protoOf(RelanceJson)));
  }
  function RelanceJson(elementId, texte, type, interlocuteur, echeance, motif, options) {
    Companion_getInstance_9();
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    echeance = echeance === VOID ? null : echeance;
    this.y1d_1 = elementId;
    this.z1d_1 = texte;
    this.a1e_1 = type;
    this.b1e_1 = interlocuteur;
    this.c1e_1 = echeance;
    this.d1e_1 = motif;
    this.e1e_1 = options;
  }
  protoOf(RelanceJson).toString = function () {
    return 'RelanceJson(elementId=' + this.y1d_1 + ', texte=' + this.z1d_1 + ', type=' + this.a1e_1 + ', interlocuteur=' + this.b1e_1 + ', echeance=' + this.c1e_1 + ', motif=' + this.d1e_1 + ', options=' + toString_0(this.e1e_1) + ')';
  };
  protoOf(RelanceJson).hashCode = function () {
    var result = getStringHashCode(this.y1d_1);
    result = imul(result, 31) + getStringHashCode(this.z1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a1e_1) | 0;
    result = imul(result, 31) + (this.b1e_1 == null ? 0 : getStringHashCode(this.b1e_1)) | 0;
    result = imul(result, 31) + (this.c1e_1 == null ? 0 : getStringHashCode(this.c1e_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1e_1) | 0;
    result = imul(result, 31) + hashCode(this.e1e_1) | 0;
    return result;
  };
  protoOf(RelanceJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelanceJson))
      return false;
    var tmp0_other_with_cast = other instanceof RelanceJson ? other : THROW_CCE();
    if (!(this.y1d_1 === tmp0_other_with_cast.y1d_1))
      return false;
    if (!(this.z1d_1 === tmp0_other_with_cast.z1d_1))
      return false;
    if (!(this.a1e_1 === tmp0_other_with_cast.a1e_1))
      return false;
    if (!(this.b1e_1 == tmp0_other_with_cast.b1e_1))
      return false;
    if (!(this.c1e_1 == tmp0_other_with_cast.c1e_1))
      return false;
    if (!(this.d1e_1 === tmp0_other_with_cast.d1e_1))
      return false;
    if (!equals(this.e1e_1, tmp0_other_with_cast.e1e_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).x1b = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_6;
  function Companion_getInstance_10() {
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviJson', this, 2);
    tmp0_serialDesc.sj('elementId', false);
    tmp0_serialDesc.sj('derniereNouvelle', false);
    this.f1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).g1e = function (encoder, value) {
    var tmp0_desc = this.f1e_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.h1e_1);
    tmp1_output.hg(tmp0_desc, 1, value.i1e_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_5).be = function (encoder, value) {
    return this.g1e(encoder, value instanceof SuiviJson ? value : THROW_CCE());
  };
  protoOf($serializer_5).ce = function (decoder) {
    var tmp0_desc = this.f1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.lf(tmp0_desc);
    if (tmp6_input.uf()) {
      tmp4_local0 = tmp6_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.mf(tmp0_desc);
    return SuiviJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).ae = function () {
    return this.f1e_1;
  };
  protoOf($serializer_5).uj = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().f1e_1);
    }
    $this.h1e_1 = elementId;
    $this.i1e_1 = derniereNouvelle;
    return $this;
  }
  function SuiviJson_init_$Create$(seen0, elementId, derniereNouvelle, serializationConstructorMarker) {
    return SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, objectCreate(protoOf(SuiviJson)));
  }
  function SuiviJson() {
  }
  protoOf(SuiviJson).toString = function () {
    return 'SuiviJson(elementId=' + this.h1e_1 + ', derniereNouvelle=' + this.i1e_1 + ')';
  };
  protoOf(SuiviJson).hashCode = function () {
    var result = getStringHashCode(this.h1e_1);
    result = imul(result, 31) + getStringHashCode(this.i1e_1) | 0;
    return result;
  };
  protoOf(SuiviJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviJson ? other : THROW_CCE();
    if (!(this.h1e_1 === tmp0_other_with_cast.h1e_1))
      return false;
    if (!(this.i1e_1 === tmp0_other_with_cast.i1e_1))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).x1b = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_11() {
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviRappelJson', this, 3);
    tmp0_serialDesc.sj('elementId', false);
    tmp0_serialDesc.sj('planPoseLe', false);
    tmp0_serialDesc.sj('foisIgnore', true);
    this.j1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).k1e = function (encoder, value) {
    var tmp0_desc = this.j1e_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.l1e_1);
    tmp1_output.hg(tmp0_desc, 1, value.m1e_1);
    if (tmp1_output.og(tmp0_desc, 2) ? true : !(value.n1e_1 === 0)) {
      tmp1_output.gg(tmp0_desc, 2, value.n1e_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_6).be = function (encoder, value) {
    return this.k1e(encoder, value instanceof SuiviRappelJson ? value : THROW_CCE());
  };
  protoOf($serializer_6).ce = function (decoder) {
    var tmp0_desc = this.j1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.lf(tmp0_desc);
    if (tmp7_input.uf()) {
      tmp4_local0 = tmp7_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.of(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.of(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.mf(tmp0_desc);
    return SuiviRappelJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).ae = function () {
    return this.j1e_1;
  };
  protoOf($serializer_6).uj = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().j1e_1);
    }
    $this.l1e_1 = elementId;
    $this.m1e_1 = planPoseLe;
    if (0 === (seen0 & 4))
      $this.n1e_1 = 0;
    else
      $this.n1e_1 = foisIgnore;
    return $this;
  }
  function SuiviRappelJson_init_$Create$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker) {
    return SuiviRappelJson_init_$Init$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker, objectCreate(protoOf(SuiviRappelJson)));
  }
  function SuiviRappelJson() {
  }
  protoOf(SuiviRappelJson).toString = function () {
    return 'SuiviRappelJson(elementId=' + this.l1e_1 + ', planPoseLe=' + this.m1e_1 + ', foisIgnore=' + this.n1e_1 + ')';
  };
  protoOf(SuiviRappelJson).hashCode = function () {
    var result = getStringHashCode(this.l1e_1);
    result = imul(result, 31) + getStringHashCode(this.m1e_1) | 0;
    result = imul(result, 31) + this.n1e_1 | 0;
    return result;
  };
  protoOf(SuiviRappelJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviRappelJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviRappelJson ? other : THROW_CCE();
    if (!(this.l1e_1 === tmp0_other_with_cast.l1e_1))
      return false;
    if (!(this.m1e_1 === tmp0_other_with_cast.m1e_1))
      return false;
    if (!(this.n1e_1 === tmp0_other_with_cast.n1e_1))
      return false;
    return true;
  };
  function Companion_7() {
  }
  var Companion_instance_8;
  function Companion_getInstance_12() {
    return Companion_instance_8;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RappelLivreJson', this, 5);
    tmp0_serialDesc.sj('elementId', false);
    tmp0_serialDesc.sj('texte', false);
    tmp0_serialDesc.sj('declencheur', false);
    tmp0_serialDesc.sj('substitution', true);
    tmp0_serialDesc.sj('enRetard', true);
    this.o1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).p1e = function (encoder, value) {
    var tmp0_desc = this.o1e_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.q1e_1);
    tmp1_output.hg(tmp0_desc, 1, value.r1e_1);
    tmp1_output.hg(tmp0_desc, 2, value.s1e_1);
    if (tmp1_output.og(tmp0_desc, 3) ? true : !(value.t1e_1 === '')) {
      tmp1_output.hg(tmp0_desc, 3, value.t1e_1);
    }
    if (tmp1_output.og(tmp0_desc, 4) ? true : !(value.u1e_1 === false)) {
      tmp1_output.fg(tmp0_desc, 4, value.u1e_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_7).be = function (encoder, value) {
    return this.p1e(encoder, value instanceof RappelLivreJson ? value : THROW_CCE());
  };
  protoOf($serializer_7).ce = function (decoder) {
    var tmp0_desc = this.o1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.lf(tmp0_desc);
    if (tmp9_input.uf()) {
      tmp4_local0 = tmp9_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.pf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.pf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.nf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.pf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.pf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.nf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.mf(tmp0_desc);
    return RappelLivreJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_7).ae = function () {
    return this.o1e_1;
  };
  protoOf($serializer_7).uj = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_7().o1e_1);
    }
    $this.q1e_1 = elementId;
    $this.r1e_1 = texte;
    $this.s1e_1 = declencheur;
    if (0 === (seen0 & 8))
      $this.t1e_1 = '';
    else
      $this.t1e_1 = substitution;
    if (0 === (seen0 & 16))
      $this.u1e_1 = false;
    else
      $this.u1e_1 = enRetard;
    return $this;
  }
  function RappelLivreJson_init_$Create$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker) {
    return RappelLivreJson_init_$Init$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker, objectCreate(protoOf(RappelLivreJson)));
  }
  function RappelLivreJson(elementId, texte, declencheur, substitution, enRetard) {
    substitution = substitution === VOID ? '' : substitution;
    enRetard = enRetard === VOID ? false : enRetard;
    this.q1e_1 = elementId;
    this.r1e_1 = texte;
    this.s1e_1 = declencheur;
    this.t1e_1 = substitution;
    this.u1e_1 = enRetard;
  }
  protoOf(RappelLivreJson).toString = function () {
    return 'RappelLivreJson(elementId=' + this.q1e_1 + ', texte=' + this.r1e_1 + ', declencheur=' + this.s1e_1 + ', substitution=' + this.t1e_1 + ', enRetard=' + this.u1e_1 + ')';
  };
  protoOf(RappelLivreJson).hashCode = function () {
    var result = getStringHashCode(this.q1e_1);
    result = imul(result, 31) + getStringHashCode(this.r1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t1e_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u1e_1) | 0;
    return result;
  };
  protoOf(RappelLivreJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelLivreJson))
      return false;
    var tmp0_other_with_cast = other instanceof RappelLivreJson ? other : THROW_CCE();
    if (!(this.q1e_1 === tmp0_other_with_cast.q1e_1))
      return false;
    if (!(this.r1e_1 === tmp0_other_with_cast.r1e_1))
      return false;
    if (!(this.s1e_1 === tmp0_other_with_cast.s1e_1))
      return false;
    if (!(this.t1e_1 === tmp0_other_with_cast.t1e_1))
      return false;
    if (!(this.u1e_1 === tmp0_other_with_cast.u1e_1))
      return false;
    return true;
  };
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1e_1 = [null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  var Companion_instance_9;
  function Companion_getInstance_13() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EscaladeJson', this, 4);
    tmp0_serialDesc.sj('elementId', false);
    tmp0_serialDesc.sj('texte', false);
    tmp0_serialDesc.sj('motif', false);
    tmp0_serialDesc.sj('options', false);
    this.w1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).x1e = function (encoder, value) {
    var tmp0_desc = this.w1e_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().v1e_1;
    tmp1_output.hg(tmp0_desc, 0, value.y1e_1);
    tmp1_output.hg(tmp0_desc, 1, value.z1e_1);
    tmp1_output.hg(tmp0_desc, 2, value.a1f_1);
    tmp1_output.ig(tmp0_desc, 3, tmp2_cached[3], value.b1f_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_8).be = function (encoder, value) {
    return this.x1e(encoder, value instanceof EscaladeJson ? value : THROW_CCE());
  };
  protoOf($serializer_8).ce = function (decoder) {
    var tmp0_desc = this.w1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.lf(tmp0_desc);
    var tmp9_cached = Companion_getInstance_13().v1e_1;
    if (tmp8_input.uf()) {
      tmp4_local0 = tmp8_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.pf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.qf(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.pf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.qf(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.mf(tmp0_desc);
    return EscaladeJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).ae = function () {
    return this.w1e_1;
  };
  protoOf($serializer_8).uj = function () {
    var tmp0_cached = Companion_getInstance_13().v1e_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().w1e_1);
    }
    $this.y1e_1 = elementId;
    $this.z1e_1 = texte;
    $this.a1f_1 = motif;
    $this.b1f_1 = options;
    return $this;
  }
  function EscaladeJson_init_$Create$(seen0, elementId, texte, motif, options, serializationConstructorMarker) {
    return EscaladeJson_init_$Init$(seen0, elementId, texte, motif, options, serializationConstructorMarker, objectCreate(protoOf(EscaladeJson)));
  }
  function EscaladeJson(elementId, texte, motif, options) {
    Companion_getInstance_13();
    this.y1e_1 = elementId;
    this.z1e_1 = texte;
    this.a1f_1 = motif;
    this.b1f_1 = options;
  }
  protoOf(EscaladeJson).toString = function () {
    return 'EscaladeJson(elementId=' + this.y1e_1 + ', texte=' + this.z1e_1 + ', motif=' + this.a1f_1 + ', options=' + toString_0(this.b1f_1) + ')';
  };
  protoOf(EscaladeJson).hashCode = function () {
    var result = getStringHashCode(this.y1e_1);
    result = imul(result, 31) + getStringHashCode(this.z1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a1f_1) | 0;
    result = imul(result, 31) + hashCode(this.b1f_1) | 0;
    return result;
  };
  protoOf(EscaladeJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EscaladeJson))
      return false;
    var tmp0_other_with_cast = other instanceof EscaladeJson ? other : THROW_CCE();
    if (!(this.y1e_1 === tmp0_other_with_cast.y1e_1))
      return false;
    if (!(this.z1e_1 === tmp0_other_with_cast.z1e_1))
      return false;
    if (!(this.a1f_1 === tmp0_other_with_cast.a1f_1))
      return false;
    if (!equals(this.b1f_1, tmp0_other_with_cast.b1f_1))
      return false;
    return true;
  };
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c1f_1 = [null, new ArrayListSerializer($serializer_getInstance_7()), new ArrayListSerializer($serializer_getInstance_8())];
  }
  protoOf(Companion_9).x1b = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_10;
  function Companion_getInstance_14() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RappelsDuMomentJson', this, 3);
    tmp0_serialDesc.sj('titre', true);
    tmp0_serialDesc.sj('rappels', true);
    tmp0_serialDesc.sj('escalades', true);
    this.d1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).e1f = function (encoder, value) {
    var tmp0_desc = this.d1f_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().c1f_1;
    if (tmp1_output.og(tmp0_desc, 0) ? true : !(value.f1f_1 === '')) {
      tmp1_output.hg(tmp0_desc, 0, value.f1f_1);
    }
    if (tmp1_output.og(tmp0_desc, 1) ? true : !equals(value.g1f_1, emptyList())) {
      tmp1_output.ig(tmp0_desc, 1, tmp2_cached[1], value.g1f_1);
    }
    if (tmp1_output.og(tmp0_desc, 2) ? true : !equals(value.h1f_1, emptyList())) {
      tmp1_output.ig(tmp0_desc, 2, tmp2_cached[2], value.h1f_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_9).be = function (encoder, value) {
    return this.e1f(encoder, value instanceof RappelsDuMomentJson ? value : THROW_CCE());
  };
  protoOf($serializer_9).ce = function (decoder) {
    var tmp0_desc = this.d1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.lf(tmp0_desc);
    var tmp8_cached = Companion_getInstance_14().c1f_1;
    if (tmp7_input.uf()) {
      tmp4_local0 = tmp7_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.qf(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.qf(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.qf(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.qf(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.mf(tmp0_desc);
    return RappelsDuMomentJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_9).ae = function () {
    return this.d1f_1;
  };
  protoOf($serializer_9).uj = function () {
    var tmp0_cached = Companion_getInstance_14().c1f_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().d1f_1);
    }
    if (0 === (seen0 & 1))
      $this.f1f_1 = '';
    else
      $this.f1f_1 = titre;
    if (0 === (seen0 & 2))
      $this.g1f_1 = emptyList();
    else
      $this.g1f_1 = rappels;
    if (0 === (seen0 & 4))
      $this.h1f_1 = emptyList();
    else
      $this.h1f_1 = escalades;
    return $this;
  }
  function RappelsDuMomentJson_init_$Create$(seen0, titre, rappels, escalades, serializationConstructorMarker) {
    return RappelsDuMomentJson_init_$Init$(seen0, titre, rappels, escalades, serializationConstructorMarker, objectCreate(protoOf(RappelsDuMomentJson)));
  }
  function RappelsDuMomentJson(titre, rappels, escalades) {
    Companion_getInstance_14();
    titre = titre === VOID ? '' : titre;
    rappels = rappels === VOID ? emptyList() : rappels;
    escalades = escalades === VOID ? emptyList() : escalades;
    this.f1f_1 = titre;
    this.g1f_1 = rappels;
    this.h1f_1 = escalades;
  }
  protoOf(RappelsDuMomentJson).toString = function () {
    return 'RappelsDuMomentJson(titre=' + this.f1f_1 + ', rappels=' + toString_0(this.g1f_1) + ', escalades=' + toString_0(this.h1f_1) + ')';
  };
  protoOf(RappelsDuMomentJson).hashCode = function () {
    var result = getStringHashCode(this.f1f_1);
    result = imul(result, 31) + hashCode(this.g1f_1) | 0;
    result = imul(result, 31) + hashCode(this.h1f_1) | 0;
    return result;
  };
  protoOf(RappelsDuMomentJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelsDuMomentJson))
      return false;
    var tmp0_other_with_cast = other instanceof RappelsDuMomentJson ? other : THROW_CCE();
    if (!(this.f1f_1 === tmp0_other_with_cast.f1f_1))
      return false;
    if (!equals(this.g1f_1, tmp0_other_with_cast.g1f_1))
      return false;
    if (!equals(this.h1f_1, tmp0_other_with_cast.h1f_1))
      return false;
    return true;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i1f_1 = [new ArrayListSerializer($serializer_getInstance_3()), null, null, null, null];
  }
  protoOf(Companion_10).x1b = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_11;
  function Companion_getInstance_15() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RevueJson', this, 5);
    tmp0_serialDesc.sj('groupes', false);
    tmp0_serialDesc.sj('total', false);
    tmp0_serialDesc.sj('reduite', true);
    tmp0_serialDesc.sj('motifReduction', true);
    tmp0_serialDesc.sj('demeurentEnFile', true);
    this.j1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).k1f = function (encoder, value) {
    var tmp0_desc = this.j1f_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().i1f_1;
    tmp1_output.ig(tmp0_desc, 0, tmp2_cached[0], value.l1f_1);
    tmp1_output.gg(tmp0_desc, 1, value.m1f_1);
    if (tmp1_output.og(tmp0_desc, 2) ? true : !(value.n1f_1 === false)) {
      tmp1_output.fg(tmp0_desc, 2, value.n1f_1);
    }
    if (tmp1_output.og(tmp0_desc, 3) ? true : !(value.o1f_1 === '')) {
      tmp1_output.hg(tmp0_desc, 3, value.o1f_1);
    }
    if (tmp1_output.og(tmp0_desc, 4) ? true : !(value.p1f_1 === 0)) {
      tmp1_output.gg(tmp0_desc, 4, value.p1f_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_10).be = function (encoder, value) {
    return this.k1f(encoder, value instanceof RevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_10).ce = function (decoder) {
    var tmp0_desc = this.j1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.lf(tmp0_desc);
    var tmp10_cached = Companion_getInstance_15().i1f_1;
    if (tmp9_input.uf()) {
      tmp4_local0 = tmp9_input.qf(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.of(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.nf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.pf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.of(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.qf(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.of(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.nf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.pf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.of(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.mf(tmp0_desc);
    return RevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_10).ae = function () {
    return this.j1f_1;
  };
  protoOf($serializer_10).uj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_15().i1f_1[0], IntSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().j1f_1);
    }
    $this.l1f_1 = groupes;
    $this.m1f_1 = total;
    if (0 === (seen0 & 4))
      $this.n1f_1 = false;
    else
      $this.n1f_1 = reduite;
    if (0 === (seen0 & 8))
      $this.o1f_1 = '';
    else
      $this.o1f_1 = motifReduction;
    if (0 === (seen0 & 16))
      $this.p1f_1 = 0;
    else
      $this.p1f_1 = demeurentEnFile;
    return $this;
  }
  function RevueJson_init_$Create$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker) {
    return RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, objectCreate(protoOf(RevueJson)));
  }
  function RevueJson(groupes, total, reduite, motifReduction, demeurentEnFile) {
    Companion_getInstance_15();
    reduite = reduite === VOID ? false : reduite;
    motifReduction = motifReduction === VOID ? '' : motifReduction;
    demeurentEnFile = demeurentEnFile === VOID ? 0 : demeurentEnFile;
    this.l1f_1 = groupes;
    this.m1f_1 = total;
    this.n1f_1 = reduite;
    this.o1f_1 = motifReduction;
    this.p1f_1 = demeurentEnFile;
  }
  protoOf(RevueJson).toString = function () {
    return 'RevueJson(groupes=' + toString_0(this.l1f_1) + ', total=' + this.m1f_1 + ', reduite=' + this.n1f_1 + ', motifReduction=' + this.o1f_1 + ', demeurentEnFile=' + this.p1f_1 + ')';
  };
  protoOf(RevueJson).hashCode = function () {
    var result = hashCode(this.l1f_1);
    result = imul(result, 31) + this.m1f_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o1f_1) | 0;
    result = imul(result, 31) + this.p1f_1 | 0;
    return result;
  };
  protoOf(RevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof RevueJson ? other : THROW_CCE();
    if (!equals(this.l1f_1, tmp0_other_with_cast.l1f_1))
      return false;
    if (!(this.m1f_1 === tmp0_other_with_cast.m1f_1))
      return false;
    if (!(this.n1f_1 === tmp0_other_with_cast.n1f_1))
      return false;
    if (!(this.o1f_1 === tmp0_other_with_cast.o1f_1))
      return false;
    if (!(this.p1f_1 === tmp0_other_with_cast.p1f_1))
      return false;
    return true;
  };
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q1f_1 = [new ArrayListSerializer($serializer_getInstance()), new ArrayListSerializer($serializer_getInstance_12())];
  }
  protoOf(Companion_11).x1b = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_12;
  function Companion_getInstance_16() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.AncrageJson', this, 2);
    tmp0_serialDesc.sj('retenus', false);
    tmp0_serialDesc.sj('ecartes', false);
    this.r1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).s1f = function (encoder, value) {
    var tmp0_desc = this.r1f_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().q1f_1;
    tmp1_output.ig(tmp0_desc, 0, tmp2_cached[0], value.t1f_1);
    tmp1_output.ig(tmp0_desc, 1, tmp2_cached[1], value.u1f_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_11).be = function (encoder, value) {
    return this.s1f(encoder, value instanceof AncrageJson ? value : THROW_CCE());
  };
  protoOf($serializer_11).ce = function (decoder) {
    var tmp0_desc = this.r1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.lf(tmp0_desc);
    var tmp7_cached = Companion_getInstance_16().q1f_1;
    if (tmp6_input.uf()) {
      tmp4_local0 = tmp6_input.qf(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.qf(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.qf(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.qf(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.mf(tmp0_desc);
    return AncrageJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).ae = function () {
    return this.r1f_1;
  };
  protoOf($serializer_11).uj = function () {
    var tmp0_cached = Companion_getInstance_16().q1f_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().r1f_1);
    }
    $this.t1f_1 = retenus;
    $this.u1f_1 = ecartes;
    return $this;
  }
  function AncrageJson_init_$Create$(seen0, retenus, ecartes, serializationConstructorMarker) {
    return AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, objectCreate(protoOf(AncrageJson)));
  }
  function AncrageJson(retenus, ecartes) {
    Companion_getInstance_16();
    this.t1f_1 = retenus;
    this.u1f_1 = ecartes;
  }
  protoOf(AncrageJson).toString = function () {
    return 'AncrageJson(retenus=' + toString_0(this.t1f_1) + ', ecartes=' + toString_0(this.u1f_1) + ')';
  };
  protoOf(AncrageJson).hashCode = function () {
    var result = hashCode(this.t1f_1);
    result = imul(result, 31) + hashCode(this.u1f_1) | 0;
    return result;
  };
  protoOf(AncrageJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AncrageJson))
      return false;
    var tmp0_other_with_cast = other instanceof AncrageJson ? other : THROW_CCE();
    if (!equals(this.t1f_1, tmp0_other_with_cast.t1f_1))
      return false;
    if (!equals(this.u1f_1, tmp0_other_with_cast.u1f_1))
      return false;
    return true;
  };
  function Companion_12() {
  }
  var Companion_instance_13;
  function Companion_getInstance_17() {
    return Companion_instance_13;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EcarteJson', this, 2);
    tmp0_serialDesc.sj('texte', false);
    tmp0_serialDesc.sj('raison', false);
    this.v1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).w1f = function (encoder, value) {
    var tmp0_desc = this.v1f_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.x1f_1);
    tmp1_output.hg(tmp0_desc, 1, value.y1f_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_12).be = function (encoder, value) {
    return this.w1f(encoder, value instanceof EcarteJson ? value : THROW_CCE());
  };
  protoOf($serializer_12).ce = function (decoder) {
    var tmp0_desc = this.v1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.lf(tmp0_desc);
    if (tmp6_input.uf()) {
      tmp4_local0 = tmp6_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.mf(tmp0_desc);
    return EcarteJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).ae = function () {
    return this.v1f_1;
  };
  protoOf($serializer_12).uj = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_12().v1f_1);
    }
    $this.x1f_1 = texte;
    $this.y1f_1 = raison;
    return $this;
  }
  function EcarteJson_init_$Create$(seen0, texte, raison, serializationConstructorMarker) {
    return EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, objectCreate(protoOf(EcarteJson)));
  }
  function EcarteJson(texte, raison) {
    this.x1f_1 = texte;
    this.y1f_1 = raison;
  }
  protoOf(EcarteJson).toString = function () {
    return 'EcarteJson(texte=' + this.x1f_1 + ', raison=' + this.y1f_1 + ')';
  };
  protoOf(EcarteJson).hashCode = function () {
    var result = getStringHashCode(this.x1f_1);
    result = imul(result, 31) + getStringHashCode(this.y1f_1) | 0;
    return result;
  };
  protoOf(EcarteJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EcarteJson))
      return false;
    var tmp0_other_with_cast = other instanceof EcarteJson ? other : THROW_CCE();
    if (!(this.x1f_1 === tmp0_other_with_cast.x1f_1))
      return false;
    if (!(this.y1f_1 === tmp0_other_with_cast.y1f_1))
      return false;
    return true;
  };
  function Companion_13() {
  }
  protoOf(Companion_13).x1b = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_14;
  function Companion_getInstance_18() {
    return Companion_instance_14;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CaptureJson', this, 4);
    tmp0_serialDesc.sj('id', false);
    tmp0_serialDesc.sj('texte', false);
    tmp0_serialDesc.sj('creeLe', false);
    tmp0_serialDesc.sj('jour', true);
    this.z1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).a1g = function (encoder, value) {
    var tmp0_desc = this.z1f_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.b1g_1);
    tmp1_output.hg(tmp0_desc, 1, value.c1g_1);
    tmp1_output.hg(tmp0_desc, 2, value.d1g_1);
    if (tmp1_output.og(tmp0_desc, 3) ? true : !(value.e1g_1 == null)) {
      tmp1_output.kg(tmp0_desc, 3, StringSerializer_getInstance(), value.e1g_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_13).be = function (encoder, value) {
    return this.a1g(encoder, value instanceof CaptureJson ? value : THROW_CCE());
  };
  protoOf($serializer_13).ce = function (decoder) {
    var tmp0_desc = this.z1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.lf(tmp0_desc);
    if (tmp8_input.uf()) {
      tmp4_local0 = tmp8_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.pf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.sf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.pf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.sf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.mf(tmp0_desc);
    return CaptureJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_13).ae = function () {
    return this.z1f_1;
  };
  protoOf($serializer_13).uj = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_13().z1f_1);
    }
    $this.b1g_1 = id;
    $this.c1g_1 = texte;
    $this.d1g_1 = creeLe;
    if (0 === (seen0 & 8))
      $this.e1g_1 = null;
    else
      $this.e1g_1 = jour;
    return $this;
  }
  function CaptureJson_init_$Create$(seen0, id, texte, creeLe, jour, serializationConstructorMarker) {
    return CaptureJson_init_$Init$(seen0, id, texte, creeLe, jour, serializationConstructorMarker, objectCreate(protoOf(CaptureJson)));
  }
  function CaptureJson() {
  }
  protoOf(CaptureJson).toString = function () {
    return 'CaptureJson(id=' + this.b1g_1 + ', texte=' + this.c1g_1 + ', creeLe=' + this.d1g_1 + ', jour=' + this.e1g_1 + ')';
  };
  protoOf(CaptureJson).hashCode = function () {
    var result = getStringHashCode(this.b1g_1);
    result = imul(result, 31) + getStringHashCode(this.c1g_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1g_1) | 0;
    result = imul(result, 31) + (this.e1g_1 == null ? 0 : getStringHashCode(this.e1g_1)) | 0;
    return result;
  };
  protoOf(CaptureJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureJson))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureJson ? other : THROW_CCE();
    if (!(this.b1g_1 === tmp0_other_with_cast.b1g_1))
      return false;
    if (!(this.c1g_1 === tmp0_other_with_cast.c1g_1))
      return false;
    if (!(this.d1g_1 === tmp0_other_with_cast.d1g_1))
      return false;
    if (!(this.e1g_1 == tmp0_other_with_cast.e1g_1))
      return false;
    return true;
  };
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_19() {
    return Companion_instance_15;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CitationJson', this, 4);
    tmp0_serialDesc.sj('captureId', false);
    tmp0_serialDesc.sj('extrait', false);
    tmp0_serialDesc.sj('pourquoi', false);
    tmp0_serialDesc.sj('elementId', true);
    this.f1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).g1g = function (encoder, value) {
    var tmp0_desc = this.f1g_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.h1g_1);
    tmp1_output.hg(tmp0_desc, 1, value.i1g_1);
    tmp1_output.hg(tmp0_desc, 2, value.j1g_1);
    if (tmp1_output.og(tmp0_desc, 3) ? true : !(value.k1g_1 == null)) {
      tmp1_output.kg(tmp0_desc, 3, StringSerializer_getInstance(), value.k1g_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_14).be = function (encoder, value) {
    return this.g1g(encoder, value instanceof CitationJson ? value : THROW_CCE());
  };
  protoOf($serializer_14).ce = function (decoder) {
    var tmp0_desc = this.f1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.lf(tmp0_desc);
    if (tmp8_input.uf()) {
      tmp4_local0 = tmp8_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.pf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.sf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.pf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.sf(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.mf(tmp0_desc);
    return CitationJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_14).ae = function () {
    return this.f1g_1;
  };
  protoOf($serializer_14).uj = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_14().f1g_1);
    }
    $this.h1g_1 = captureId;
    $this.i1g_1 = extrait;
    $this.j1g_1 = pourquoi;
    if (0 === (seen0 & 8))
      $this.k1g_1 = null;
    else
      $this.k1g_1 = elementId;
    return $this;
  }
  function CitationJson_init_$Create$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker) {
    return CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, objectCreate(protoOf(CitationJson)));
  }
  function CitationJson(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.h1g_1 = captureId;
    this.i1g_1 = extrait;
    this.j1g_1 = pourquoi;
    this.k1g_1 = elementId;
  }
  protoOf(CitationJson).toString = function () {
    return 'CitationJson(captureId=' + this.h1g_1 + ', extrait=' + this.i1g_1 + ', pourquoi=' + this.j1g_1 + ', elementId=' + this.k1g_1 + ')';
  };
  protoOf(CitationJson).hashCode = function () {
    var result = getStringHashCode(this.h1g_1);
    result = imul(result, 31) + getStringHashCode(this.i1g_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j1g_1) | 0;
    result = imul(result, 31) + (this.k1g_1 == null ? 0 : getStringHashCode(this.k1g_1)) | 0;
    return result;
  };
  protoOf(CitationJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CitationJson))
      return false;
    var tmp0_other_with_cast = other instanceof CitationJson ? other : THROW_CCE();
    if (!(this.h1g_1 === tmp0_other_with_cast.h1g_1))
      return false;
    if (!(this.i1g_1 === tmp0_other_with_cast.i1g_1))
      return false;
    if (!(this.j1g_1 === tmp0_other_with_cast.j1g_1))
      return false;
    if (!(this.k1g_1 == tmp0_other_with_cast.k1g_1))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l1g_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_14()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_15).x1b = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_16;
  function Companion_getInstance_20() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ReponseJson', this, 6);
    tmp0_serialDesc.sj('question', false);
    tmp0_serialDesc.sj('enonce', false);
    tmp0_serialDesc.sj('fondee', false);
    tmp0_serialDesc.sj('citations', false);
    tmp0_serialDesc.sj('indisponibleHorsLigne', true);
    tmp0_serialDesc.sj('nonPrisEnCompte', true);
    this.m1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).n1g = function (encoder, value) {
    var tmp0_desc = this.m1g_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().l1g_1;
    tmp1_output.hg(tmp0_desc, 0, value.o1g_1);
    tmp1_output.hg(tmp0_desc, 1, value.p1g_1);
    tmp1_output.fg(tmp0_desc, 2, value.q1g_1);
    tmp1_output.ig(tmp0_desc, 3, tmp2_cached[3], value.r1g_1);
    if (tmp1_output.og(tmp0_desc, 4) ? true : !equals(value.s1g_1, emptyList())) {
      tmp1_output.ig(tmp0_desc, 4, tmp2_cached[4], value.s1g_1);
    }
    if (tmp1_output.og(tmp0_desc, 5) ? true : !equals(value.t1g_1, emptyList())) {
      tmp1_output.ig(tmp0_desc, 5, tmp2_cached[5], value.t1g_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_15).be = function (encoder, value) {
    return this.n1g(encoder, value instanceof ReponseJson ? value : THROW_CCE());
  };
  protoOf($serializer_15).ce = function (decoder) {
    var tmp0_desc = this.m1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.lf(tmp0_desc);
    var tmp11_cached = Companion_getInstance_20().l1g_1;
    if (tmp10_input.uf()) {
      tmp4_local0 = tmp10_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.nf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.qf(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.qf(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.qf(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.nf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.qf(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.qf(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.qf(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.mf(tmp0_desc);
    return ReponseJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_15).ae = function () {
    return this.m1g_1;
  };
  protoOf($serializer_15).uj = function () {
    var tmp0_cached = Companion_getInstance_20().l1g_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_15().m1g_1);
    }
    $this.o1g_1 = question;
    $this.p1g_1 = enonce;
    $this.q1g_1 = fondee;
    $this.r1g_1 = citations;
    if (0 === (seen0 & 16))
      $this.s1g_1 = emptyList();
    else
      $this.s1g_1 = indisponibleHorsLigne;
    if (0 === (seen0 & 32))
      $this.t1g_1 = emptyList();
    else
      $this.t1g_1 = nonPrisEnCompte;
    return $this;
  }
  function ReponseJson_init_$Create$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker) {
    return ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker, objectCreate(protoOf(ReponseJson)));
  }
  function ReponseJson(question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    Companion_getInstance_20();
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.o1g_1 = question;
    this.p1g_1 = enonce;
    this.q1g_1 = fondee;
    this.r1g_1 = citations;
    this.s1g_1 = indisponibleHorsLigne;
    this.t1g_1 = nonPrisEnCompte;
  }
  protoOf(ReponseJson).toString = function () {
    return 'ReponseJson(question=' + this.o1g_1 + ', enonce=' + this.p1g_1 + ', fondee=' + this.q1g_1 + ', citations=' + toString_0(this.r1g_1) + ', indisponibleHorsLigne=' + toString_0(this.s1g_1) + ', nonPrisEnCompte=' + toString_0(this.t1g_1) + ')';
  };
  protoOf(ReponseJson).hashCode = function () {
    var result = getStringHashCode(this.o1g_1);
    result = imul(result, 31) + getStringHashCode(this.p1g_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1g_1) | 0;
    result = imul(result, 31) + hashCode(this.r1g_1) | 0;
    result = imul(result, 31) + hashCode(this.s1g_1) | 0;
    result = imul(result, 31) + hashCode(this.t1g_1) | 0;
    return result;
  };
  protoOf(ReponseJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReponseJson))
      return false;
    var tmp0_other_with_cast = other instanceof ReponseJson ? other : THROW_CCE();
    if (!(this.o1g_1 === tmp0_other_with_cast.o1g_1))
      return false;
    if (!(this.p1g_1 === tmp0_other_with_cast.p1g_1))
      return false;
    if (!(this.q1g_1 === tmp0_other_with_cast.q1g_1))
      return false;
    if (!equals(this.r1g_1, tmp0_other_with_cast.r1g_1))
      return false;
    if (!equals(this.s1g_1, tmp0_other_with_cast.s1g_1))
      return false;
    if (!equals(this.t1g_1, tmp0_other_with_cast.t1g_1))
      return false;
    return true;
  };
  function Companion_16() {
  }
  var Companion_instance_17;
  function Companion_getInstance_21() {
    return Companion_instance_17;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CandidatJson', this, 3);
    tmp0_serialDesc.sj('entiteId', false);
    tmp0_serialDesc.sj('nom', false);
    tmp0_serialDesc.sj('appui', false);
    this.u1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).v1g = function (encoder, value) {
    var tmp0_desc = this.u1g_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    tmp1_output.hg(tmp0_desc, 0, value.w1g_1);
    tmp1_output.hg(tmp0_desc, 1, value.x1g_1);
    tmp1_output.hg(tmp0_desc, 2, value.y1g_1);
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_16).be = function (encoder, value) {
    return this.v1g(encoder, value instanceof CandidatJson ? value : THROW_CCE());
  };
  protoOf($serializer_16).ce = function (decoder) {
    var tmp0_desc = this.u1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.lf(tmp0_desc);
    if (tmp7_input.uf()) {
      tmp4_local0 = tmp7_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.pf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.pf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.mf(tmp0_desc);
    return CandidatJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_16).ae = function () {
    return this.u1g_1;
  };
  protoOf($serializer_16).uj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function CandidatJson_init_$Init$(seen0, entiteId, nom, appui, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_16().u1g_1);
    }
    $this.w1g_1 = entiteId;
    $this.x1g_1 = nom;
    $this.y1g_1 = appui;
    return $this;
  }
  function CandidatJson_init_$Create$(seen0, entiteId, nom, appui, serializationConstructorMarker) {
    return CandidatJson_init_$Init$(seen0, entiteId, nom, appui, serializationConstructorMarker, objectCreate(protoOf(CandidatJson)));
  }
  function CandidatJson(entiteId, nom, appui) {
    this.w1g_1 = entiteId;
    this.x1g_1 = nom;
    this.y1g_1 = appui;
  }
  protoOf(CandidatJson).toString = function () {
    return 'CandidatJson(entiteId=' + this.w1g_1 + ', nom=' + this.x1g_1 + ', appui=' + this.y1g_1 + ')';
  };
  protoOf(CandidatJson).hashCode = function () {
    var result = getStringHashCode(this.w1g_1);
    result = imul(result, 31) + getStringHashCode(this.x1g_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1g_1) | 0;
    return result;
  };
  protoOf(CandidatJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CandidatJson))
      return false;
    var tmp0_other_with_cast = other instanceof CandidatJson ? other : THROW_CCE();
    if (!(this.w1g_1 === tmp0_other_with_cast.w1g_1))
      return false;
    if (!(this.x1g_1 === tmp0_other_with_cast.x1g_1))
      return false;
    if (!(this.y1g_1 === tmp0_other_with_cast.y1g_1))
      return false;
    return true;
  };
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.z1g_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_16()), null];
  }
  protoOf(Companion_17).x1b = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_18;
  function Companion_getInstance_22() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ResolutionJson', this, 5);
    tmp0_serialDesc.sj('elementId', false);
    tmp0_serialDesc.sj('reference', false);
    tmp0_serialDesc.sj('retenu', true);
    tmp0_serialDesc.sj('candidats', true);
    tmp0_serialDesc.sj('aQuestionner', true);
    this.a1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).b1h = function (encoder, value) {
    var tmp0_desc = this.a1h_1;
    var tmp1_output = encoder.lf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().z1g_1;
    tmp1_output.hg(tmp0_desc, 0, value.c1h_1);
    tmp1_output.hg(tmp0_desc, 1, value.d1h_1);
    if (tmp1_output.og(tmp0_desc, 2) ? true : !(value.e1h_1 == null)) {
      tmp1_output.kg(tmp0_desc, 2, $serializer_getInstance_16(), value.e1h_1);
    }
    if (tmp1_output.og(tmp0_desc, 3) ? true : !equals(value.f1h_1, emptyList())) {
      tmp1_output.ig(tmp0_desc, 3, tmp2_cached[3], value.f1h_1);
    }
    if (tmp1_output.og(tmp0_desc, 4) ? true : !(value.g1h_1 === false)) {
      tmp1_output.fg(tmp0_desc, 4, value.g1h_1);
    }
    tmp1_output.mf(tmp0_desc);
  };
  protoOf($serializer_17).be = function (encoder, value) {
    return this.b1h(encoder, value instanceof ResolutionJson ? value : THROW_CCE());
  };
  protoOf($serializer_17).ce = function (decoder) {
    var tmp0_desc = this.a1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.lf(tmp0_desc);
    var tmp10_cached = Companion_getInstance_22().z1g_1;
    if (tmp9_input.uf()) {
      tmp4_local0 = tmp9_input.pf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.pf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.sf(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.qf(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.nf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.vf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.pf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.pf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.sf(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.qf(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.nf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.mf(tmp0_desc);
    return ResolutionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_17).ae = function () {
    return this.a1h_1;
  };
  protoOf($serializer_17).uj = function () {
    var tmp0_cached = Companion_getInstance_22().z1g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_16()), tmp0_cached[3], BooleanSerializer_getInstance()];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function ResolutionJson_init_$Init$(seen0, elementId, reference, retenu, candidats, aQuestionner, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_17().a1h_1);
    }
    $this.c1h_1 = elementId;
    $this.d1h_1 = reference;
    if (0 === (seen0 & 4))
      $this.e1h_1 = null;
    else
      $this.e1h_1 = retenu;
    if (0 === (seen0 & 8))
      $this.f1h_1 = emptyList();
    else
      $this.f1h_1 = candidats;
    if (0 === (seen0 & 16))
      $this.g1h_1 = false;
    else
      $this.g1h_1 = aQuestionner;
    return $this;
  }
  function ResolutionJson_init_$Create$(seen0, elementId, reference, retenu, candidats, aQuestionner, serializationConstructorMarker) {
    return ResolutionJson_init_$Init$(seen0, elementId, reference, retenu, candidats, aQuestionner, serializationConstructorMarker, objectCreate(protoOf(ResolutionJson)));
  }
  function ResolutionJson(elementId, reference, retenu, candidats, aQuestionner) {
    Companion_getInstance_22();
    retenu = retenu === VOID ? null : retenu;
    candidats = candidats === VOID ? emptyList() : candidats;
    aQuestionner = aQuestionner === VOID ? false : aQuestionner;
    this.c1h_1 = elementId;
    this.d1h_1 = reference;
    this.e1h_1 = retenu;
    this.f1h_1 = candidats;
    this.g1h_1 = aQuestionner;
  }
  protoOf(ResolutionJson).toString = function () {
    return 'ResolutionJson(elementId=' + this.c1h_1 + ', reference=' + this.d1h_1 + ', retenu=' + toString(this.e1h_1) + ', candidats=' + toString_0(this.f1h_1) + ', aQuestionner=' + this.g1h_1 + ')';
  };
  protoOf(ResolutionJson).hashCode = function () {
    var result = getStringHashCode(this.c1h_1);
    result = imul(result, 31) + getStringHashCode(this.d1h_1) | 0;
    result = imul(result, 31) + (this.e1h_1 == null ? 0 : this.e1h_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.f1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1h_1) | 0;
    return result;
  };
  protoOf(ResolutionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResolutionJson))
      return false;
    var tmp0_other_with_cast = other instanceof ResolutionJson ? other : THROW_CCE();
    if (!(this.c1h_1 === tmp0_other_with_cast.c1h_1))
      return false;
    if (!(this.d1h_1 === tmp0_other_with_cast.d1h_1))
      return false;
    if (!equals(this.e1h_1, tmp0_other_with_cast.e1h_1))
      return false;
    if (!equals(this.f1h_1, tmp0_other_with_cast.f1h_1))
      return false;
    if (!(this.g1h_1 === tmp0_other_with_cast.g1h_1))
      return false;
    return true;
  };
  function sources($this, capturesJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.h1h_1.j12(ListSerializer(Companion_instance_14.x1b()), capturesJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.sources.<anonymous>' call
      var tmp = new CaptureId(item.b1g_1);
      var tmp0_safe_receiver = item.e1g_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp1_let_receiver = Companion_getInstance();
        // Inline function 'kotlin.let' call
        tmp_0 = sources$parse(tmp1_let_receiver, tmp0_safe_receiver);
      }
      var tmp$ret$1 = new TexteSource(tmp, item.c1g_1, item.d1g_1, tmp_0);
      destination.e(tmp$ret$1);
    }
    return destination;
  }
  function versCandidat($this, candidat) {
    return new CandidatJson(candidat.p1h_1.j1h_1.i1h_1, candidat.p1h_1.l1h_1, candidat.v1h_1);
  }
  function rendre($this, reponse) {
    var tmp = Companion_getInstance_20().x1b();
    var tmp_0 = reponse.b1i();
    // Inline function 'kotlin.collections.map' call
    var this_0 = reponse.y1h_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rendre.<anonymous>' call
      var tmp0_safe_receiver = item.f1i_1;
      var tmp$ret$0 = new CitationJson(item.c1i_1.g1i_1, item.d1i_1, item.e1i_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1i_1);
      destination.e(tmp$ret$0);
    }
    return $this.h1h_1.i12(tmp, new ReponseJson(reponse.w1h_1, reponse.x1h_1, tmp_0, destination, reponse.z1h_1, reponse.a1i_1));
  }
  function decoder($this, elementsJson) {
    return $this.h1h_1.j12(ListSerializer(Companion_instance_0.x1b()), elementsJson);
  }
  function neVientQueDIncertain($this, dto, incertains) {
    if (incertains.j() || dto.f1c_1 <= dto.e1c_1)
      return false;
    var tmp0 = until(dto.e1c_1, dto.f1c_1);
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
              if (position >= element_0.b1d_1 && position < element_0.c1d_1) {
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
    if (isBlank(dto.d1c_1)) {
      tmp = '\xE9l\xE9ment sans texte';
    } else {
      if (dto.e1c_1 < 0 || dto.f1c_1 <= dto.e1c_1) {
        tmp = 'passage source vide ou incoh\xE9rent';
      } else {
        if (dto.f1c_1 > texteSource.length) {
          tmp = 'passage source absent du texte de la capture';
        } else {
          // Inline function 'kotlin.runCatching' call
          var tmp_0;
          try {
            // Inline function 'app.zenote.core.api.Regles.raisonDeRejet.<anonymous>' call
            // Inline function 'kotlin.Companion.success' call
            var value = valueOf(dto.c1c_1);
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
            tmp = 'type inconnu : ' + dto.c1c_1;
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
      var value = valueOf_3(nom).e2_1;
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
    if (_this__u8e3s4.w1c_1) {
      tmp = true;
    } else {
      var tmp0 = listOfNotNull([_this__u8e3s4.j1c_1, _this__u8e3s4.n1c_1, _this__u8e3s4.q1c_1]);
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
    var tmp = new CaptureId(_this__u8e3s4.b1c_1);
    var tmp_0 = valueOf(_this__u8e3s4.c1c_1);
    var tmp_1 = new Passage(_this__u8e3s4.e1c_1, _this__u8e3s4.f1c_1, _this__u8e3s4.g1c_1, _this__u8e3s4.h1c_1);
    var tmp0_safe_receiver = _this__u8e3s4.i1c_1;
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_3 = Companion_getInstance().n11(tmp0_safe_receiver);
      var tmp0_elvis_lhs = _this__u8e3s4.j1c_1;
      var tmp_4 = tmp0_elvis_lhs == null ? 1.0 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.k1c_1;
      tmp_2 = new Deduit(tmp_3, tmp_4, tmp1_elvis_lhs == null ? 'fourni' : tmp1_elvis_lhs);
    }
    var tmp_5 = tmp_2;
    var tmp1_safe_receiver = _this__u8e3s4.m1c_1;
    var tmp_6;
    if (tmp1_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_7 = valueOf_0(tmp1_safe_receiver);
      var tmp0_elvis_lhs_0 = _this__u8e3s4.n1c_1;
      var tmp_8 = tmp0_elvis_lhs_0 == null ? 1.0 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs_0 = _this__u8e3s4.o1c_1;
      tmp_6 = new Deduit(tmp_7, tmp_8, tmp1_elvis_lhs_0 == null ? 'fourni' : tmp1_elvis_lhs_0);
    }
    var tmp_9 = tmp_6;
    var tmp2_safe_receiver = _this__u8e3s4.p1c_1;
    var tmp_10;
    if (tmp2_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4.q1c_1;
      tmp_10 = new Deduit(tmp2_safe_receiver, tmp0_elvis_lhs_1 == null ? 1.0 : tmp0_elvis_lhs_1, 'nomm\xE9');
    }
    var tmp_11 = tmp_10;
    var tmp3_safe_receiver = _this__u8e3s4.r1c_1;
    var tmp_12;
    if (tmp3_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      tmp_12 = new Deduit(valueOf_1(tmp3_safe_receiver), 1.0, 'd\xE9duit');
    }
    var tmp_13 = tmp_12;
    var tmp4_safe_receiver = _this__u8e3s4.s1c_1;
    var tmp_14;
    if (tmp4_safe_receiver == null) {
      tmp_14 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.t1c_1;
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
    var derive = new ElementDerive(tmp, tmp_0, _this__u8e3s4.d1c_1, tmp_1, tmp_5, tmp_9, tmp_11, tmp_13, tmp_14);
    var tmp_16 = new ElementId(_this__u8e3s4.a1c_1);
    var tmp5_safe_receiver = derive.m1i_1;
    var tmp_17 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.s1i_1;
    var tmp6_safe_receiver = derive.n1i_1;
    var tmp_18 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.s1i_1;
    var tmp7_safe_receiver = derive.o1i_1;
    var tmp_19 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.s1i_1;
    var tmp8_safe_receiver = derive.p1i_1;
    var tmp_20 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.s1i_1;
    var tmp9_safe_receiver = derive.q1i_1;
    return new ElementResolu(tmp_16, derive.i1i_1, derive.j1i_1, derive.k1i_1, derive.l1i_1, tmp_17, tmp_18, tmp_19, tmp_20, tmp9_safe_receiver == null ? null : tmp9_safe_receiver.s1i_1, valueOf_2(_this__u8e3s4.u1c_1), aConfirmer(_this__u8e3s4, $this), _this__u8e3s4.v1c_1, _this__u8e3s4.v1c_1 && !(_this__u8e3s4.m1c_1 == null) ? 'poids fix\xE9 \xE0 la main' : _this__u8e3s4.o1c_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.v1i_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).kc = function (a, b) {
    return this.v1i_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).w2 = function () {
    return this.v1i_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
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
    return hashCode(this.w2());
  };
  function sam$kotlin_Comparator$0_0(function_0) {
    this.w1i_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).kc = function (a, b) {
    return this.w1i_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).w2 = function () {
    return this.w1i_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
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
    return hashCode(this.w2());
  };
  function sam$kotlin_Comparator$0_1(function_0) {
    this.x1i_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).kc = function (a, b) {
    return this.x1i_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).w2 = function () {
    return this.x1i_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
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
    return hashCode(this.w2());
  };
  function sources$parse(receiver, p0) {
    return receiver.n11(p0);
  }
  function Regles$json$lambda($this$Json) {
    $this$Json.b13_1 = true;
    $this$Json.z12_1 = true;
    return Unit_instance;
  }
  function Regles$revue$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp = urgenceOrdinale(Regles_getInstance(), a.p1d_1);
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp$ret$1 = urgenceOrdinale(Regles_getInstance(), b.p1d_1);
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
        var tmp_0 = b.n1d_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = a.n1d_1;
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
        var tmp_0 = a.m1d_1.a1c_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = b.m1d_1.a1c_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = a.u1d_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it = iterator.i();
    var minValue = urgenceOrdinale(Regles_getInstance(), it.p1d_1);
    while (iterator.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_0 = iterator.i();
      var v = urgenceOrdinale(Regles_getInstance(), it_0.p1d_1);
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var tmp = minValue;
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator_0 = b.u1d_1.g();
    if (!iterator_0.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it_1 = iterator_0.i();
    var minValue_0 = urgenceOrdinale(Regles_getInstance(), it_1.p1d_1);
    while (iterator_0.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.i();
      var v_0 = urgenceOrdinale(Regles_getInstance(), it_2.p1d_1);
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
        var tmp_0 = a.t1d_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp$ret$1 = b.t1d_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$rappels$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
    var tmp = a.y1i_1.h1i_1;
    // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
    var tmp$ret$1 = b.y1i_1.h1i_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles$referencesAResoudre$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
    var tmp = a.a1c_1;
    // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
    var tmp$ret$1 = b.a1c_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles() {
    Regles_instance = this;
    var tmp = this;
    tmp.h1h_1 = Json(VOID, Regles$json$lambda);
  }
  protoOf(Regles).m1j = function (elementsJson, aujourdhui) {
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
    var this_0 = tmp.p1j(destination, new ContexteMaintenant(Companion_getInstance().n11(aujourdhui)));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$3 = new PropositionJson(item_0.q1j_1.y1i_1.h1i_1, item_0.q1j_1.b1j_1, item_0.r1j_1, item_0.s1j_1.d2_1, item_0.t1j_1.d2_1);
      destination_0.e(tmp$ret$3);
    }
    var propositions = destination_0;
    return this.h1h_1.i12(ListSerializer(Companion_instance_2.x1b()), propositions);
  };
  protoOf(Regles).u1j = function (elementsJson, aujourdhui) {
    var date = Companion_getInstance().n11(aujourdhui);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      if (element.u1c_1 === 'EN_ATTENTE') {
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
      var tmp$ret$3 = element_0.a1c_1;
      destination_0.z1(tmp$ret$3, element_0);
    }
    var parId = destination_0;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(enAttente, 10));
    var _iterator__ex2g4s_1 = enAttente.g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var tmp$ret$6 = FileRevue_getInstance().w1j(versResolu(item, Regles_getInstance()), date);
      destination_1.e(tmp$ret$6);
    }
    var entrees = destination_1;
    var reduction = Arriere_instance.y1j(entrees);
    // Inline function 'kotlin.collections.map' call
    var this_0 = reduction.z1j_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_2 = this_0.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var dto = getValue(parId, item_0.g1k().h1i_1);
      var tmp$ret$9 = new EntreeRevueJson(dto, item_0.e1k_1, item_0.f1k_1, item_0.d1k_1.d2_1);
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
      var key = element_1.m1d_1.b1c_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_3.w1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_3.z1(key, answer);
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
    var _iterator__ex2g4s_4 = destination_3.y1().g();
    while (_iterator__ex2g4s_4.h()) {
      var item_1 = _iterator__ex2g4s_4.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var captureId = item_1.s1();
      // Inline function 'kotlin.collections.component2' call
      var dansLeGroupe = item_1.t1();
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
    return this.h1h_1.i12(Companion_getInstance_15().x1b(), new RevueJson(groupes, entrees.l(), reduction.h1k(), reduction.h1k() ? reduction.b1k_1 : '', reduction.a1k_1.l()));
  };
  protoOf(Regles).i1k = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.h1h_1.j12(ListSerializer(Companion_instance_6.x1b()), suivisJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp$ret$0 = new Suivi(new ElementId(item.h1e_1), Companion_getInstance().n11(item.i1e_1));
      destination.e(tmp$ret$0);
    }
    var suivis = destination;
    var delais = this.h1h_1.j12(MapSerializer(serializer(StringCompanionObject_instance), serializer_0(IntCompanionObject_instance)), delaisJson);
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
    var this_2 = tmp.l1k(destination_0, Companion_getInstance().n11(aujourdhui), suivis, delais);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_1 = this_2.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp0_safe_receiver = item_1.m1k_1.d1j_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      // Inline function 'kotlin.collections.map' call
      var this_3 = item_1.o1k_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var _iterator__ex2g4s_2 = this_3.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>.<anonymous>' call
        var tmp$ret$6 = item_2.d2_1;
        destination_2.e(tmp$ret$6);
      }
      var tmp$ret$9 = new RelanceJson(item_1.m1k_1.y1i_1.h1i_1, item_1.m1k_1.b1j_1, item_1.m1k_1.a1j_1.d2_1, item_1.m1k_1.f1j_1, tmp_0, item_1.n1k_1, destination_2);
      destination_1.e(tmp$ret$9);
    }
    var propositions = destination_1;
    return this.h1h_1.i12(ListSerializer(Companion_getInstance_9().x1b()), propositions);
  };
  protoOf(Regles).p1k = function (elementsJson, maintenant, suivisJson) {
    var instant = Companion_getInstance_0().t11(maintenant);
    var a = toInstant(instant, Companion_getInstance_1().a12_1);
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.h1h_1.j12(ListSerializer(Companion_instance_7.x1b()), suivisJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$0 = element.l1e_1;
      destination.z1(tmp$ret$0, element);
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
      if (element_0.i1j_1.equals(Verdict_ACCEPTE_getInstance()) && !(element_0.h1j_1 == null)) {
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
      var tmp_0 = new RappelId(item_0.y1i_1.h1i_1);
      // Inline function 'kotlin.text.ifBlank' call
      var this_2 = ensureNotNull(item_0.h1j_1).r1k_1;
      var tmp_1;
      if (isBlank(this_2)) {
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>.<anonymous>' call
        tmp_1 = item_0.b1j_1;
      } else {
        tmp_1 = this_2;
      }
      var tmp$ret$12 = tmp_1;
      var tmp$ret$13 = to(item_0, new Rappel(tmp_0, item_0.y1i_1, tmp$ret$12, new Transition(PointDeRupture_REPRISE_APPAREIL_getInstance())));
      destination_2.e(tmp$ret$13);
    }
    var rappels = destination_2;
    var _iterator__ex2g4s_3 = rappels.g();
    while (_iterator__ex2g4s_3.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s_3.i();
      var element_1 = _destruct__k2r9zo.zb();
      var rappel = _destruct__k2r9zo.ac();
      var tmp0_safe_receiver = suivis.w1(element_1.y1i_1.h1i_1);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1e_1;
      // Inline function 'kotlin.repeat' call
      var times = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
          file.w1k(rappel);
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
      var element_2 = _destruct__k2r9zo_0.zb();
      var rappel_0 = _destruct__k2r9zo_0.ac();
      var tmp2_elvis_lhs = suivis.w1(element_2.y1i_1.h1i_1);
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var suivi = tmp_2;
      var echeance = Echeancier_getInstance().b1l(ensureNotNull(element_2.h1j_1).q1k_1, Companion_getInstance_0().t11(suivi.m1e_1));
      if (!Echeancier_getInstance().c1l(echeance, instant))
        continue $l$loop_0;
      if (echeance instanceof Substituee) {
        var tmp14 = element_2.y1i_1.h1i_1;
        // Inline function 'kotlin.collections.set' call
        var value = echeance.e1l_1;
        substitutions.z1(tmp14, value);
      } else {
        if (echeance instanceof Observable) {
          if (echeance.d1l_1.w11(instant) < 0) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_3 = element_2.y1i_1.h1i_1;
            retards.e(element_3);
          }
        } else {
          noWhenBranchMatchedException();
        }
      }
      file.f1l(rappel_0, a);
    }
    var notification = file.g1l(PointDeRupture_REPRISE_APPAREIL_getInstance(), a);
    // Inline function 'kotlin.collections.associateBy' call
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(candidats, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination_3 = LinkedHashMap_init_$Create$(capacity_0);
    var _iterator__ex2g4s_5 = candidats.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_4 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$18 = element_4.y1i_1.h1i_1;
      destination_3.z1(tmp$ret$18, element_4);
    }
    var parId = destination_3;
    var tmp_3 = Companion_getInstance_14().x1b();
    var tmp5_elvis_lhs = notification == null ? null : notification.l1l();
    var tmp_4 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = notification == null ? null : notification.j1l_1;
    // Inline function 'kotlin.collections.map' call
    var this_3 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var _iterator__ex2g4s_6 = this_3.g();
    while (_iterator__ex2g4s_6.h()) {
      var item_1 = _iterator__ex2g4s_6.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp0_safe_receiver_0 = parId.w1(item_1.n1l_1.h1i_1);
      var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.h1j_1;
      var tmp2_elvis_lhs_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q1k_1;
      var tmp_5 = tmp2_elvis_lhs_0 == null ? '' : tmp2_elvis_lhs_0;
      var tmp3_elvis_lhs = substitutions.w1(item_1.n1l_1.h1i_1);
      var tmp$ret$22 = new RappelLivreJson(item_1.n1l_1.h1i_1, item_1.o1l_1, tmp_5, tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs, retards.p1(item_1.n1l_1.h1i_1));
      destination_4.e(tmp$ret$22);
    }
    var tmp_6 = destination_4;
    // Inline function 'kotlin.collections.map' call
    var this_4 = file.r1l();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
    var _iterator__ex2g4s_7 = this_4.g();
    while (_iterator__ex2g4s_7.h()) {
      var item_2 = _iterator__ex2g4s_7.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_5 = item_2.u1l_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_6 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
      var _iterator__ex2g4s_8 = this_5.g();
      while (_iterator__ex2g4s_8.h()) {
        var item_3 = _iterator__ex2g4s_8.i();
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>.<anonymous>' call
        var tmp$ret$25 = item_3.d2_1;
        destination_6.e(tmp$ret$25);
      }
      var tmp$ret$28 = new EscaladeJson(item_2.s1l_1.n1l_1.h1i_1, item_2.s1l_1.o1l_1, item_2.t1l_1, destination_6);
      destination_5.e(tmp$ret$28);
    }
    return this.h1h_1.i12(tmp_3, new RappelsDuMomentJson(tmp_4, tmp_6, destination_5));
  };
  protoOf(Regles).v1l = function (brut) {
    return Disfluences_getInstance().a1m(brut);
  };
  protoOf(Regles).b1m = function (texteSource, elementsJson, passagesIncertainsJson) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var retenus = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var ecartes = ArrayList_init_$Create$_0();
    var tmp = ListSerializer(Companion_instance_1.x1b());
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_0;
    if (isBlank(passagesIncertainsJson)) {
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      tmp_0 = '[]';
    } else {
      tmp_0 = passagesIncertainsJson;
    }
    var tmp$ret$3 = tmp_0;
    var incertains = this.h1h_1.j12(tmp, tmp$ret$3);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = decoder(this, elementsJson).g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      var raison = raisonDeRejet(Regles_getInstance(), element, texteSource);
      if (!(raison == null)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = new EcarteJson(element.d1c_1, raison);
        ecartes.e(element_0);
      } else if (neVientQueDIncertain(Regles_getInstance(), element, incertains)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = element.y1c(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true);
        retenus.e(element_1);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        retenus.e(element);
      }
    }
    return this.h1h_1.i12(Companion_getInstance_16().x1b(), new AncrageJson(retenus, ecartes));
  };
  protoOf(Regles).c1m = function (requete, elementsJson, capturesJson, reseau) {
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
    return rendre(this, tmp.g1m(requete, destination, sources(this, capturesJson), reseau));
  };
  protoOf(Regles).h1m = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
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
    return rendre(this, tmp.i1m(requete, destination, sources(this, capturesJson), Companion_getInstance().n11(aujourdhui), reseau));
  };
  protoOf(Regles).j1m = function (personne, elementsJson, reseau) {
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
    return rendre(this, tmp.k1m(personne, destination, reseau));
  };
  protoOf(Regles).l1m = function (capturesJson, elementsJson, maintenant) {
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.h1h_1.j12(ListSerializer(Companion_instance_14.x1b()), capturesJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
      var tmp$ret$0 = element.b1g_1;
      destination.z1(tmp$ret$0, element);
    }
    var captures = destination;
    var elements = decoder(this, elementsJson);
    var instant = Companion_getInstance_2().h11(maintenant);
    var memoire = new Memoire();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Regles$referencesAResoudre$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_1(tmp);
    var _iterator__ex2g4s_0 = sortedWith(elements, tmp$ret$3).g();
    $l$loop_0: while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      var tmp0_safe_receiver = element_0.p1c_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_1;
        // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
        // Inline function 'kotlin.text.isNotBlank' call
        if (!isBlank(tmp0_safe_receiver)) {
          tmp_1 = tmp0_safe_receiver;
        } else {
          tmp_1 = null;
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var qui = tmp_2;
      var tmp2_elvis_lhs = captures.w1(element_0.b1c_1);
      var tmp_3;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_3 = tmp2_elvis_lhs;
      }
      var capture = tmp_3;
      var tmp_4 = TypeEntite_PERSONNE_getInstance();
      var tmp_5 = new Mention(new CaptureId(element_0.b1c_1), Companion_getInstance_2().h11(capture.d1g_1), element_0.d1c_1, new ElementId(element_0.a1c_1));
      var tmp3_safe_receiver = element_0.r1c_1;
      var tmp_6;
      if (tmp3_safe_receiver == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
        tmp_6 = valueOf_1(tmp3_safe_receiver);
      }
      memoire.r1m(tmp_4, qui, tmp_5, tmp_6);
    }
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = elements.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_1 = _iterator__ex2g4s_1.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp$ret$13;
      $l$block_0: {
        // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
        var tmp0_safe_receiver_0 = element_1.p1c_1;
        var tmp_7;
        if (tmp0_safe_receiver_0 == null) {
          tmp_7 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_8;
          // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.isNotBlank' call
          if (!isBlank(tmp0_safe_receiver_0)) {
            tmp_8 = tmp0_safe_receiver_0;
          } else {
            tmp_8 = null;
          }
          tmp_7 = tmp_8;
        }
        var tmp1_elvis_lhs_0 = tmp_7;
        var tmp_9;
        if (tmp1_elvis_lhs_0 == null) {
          tmp$ret$13 = null;
          break $l$block_0;
        } else {
          tmp_9 = tmp1_elvis_lhs_0;
        }
        var qui_0 = tmp_9;
        var resolution = ResolutionReferences_instance.z1m(memoire, qui_0, instant, element_1.d1c_1, setOf(TypeEntite_PERSONNE_getInstance()), new ElementId(element_1.a1c_1));
        var retenu = resolution.b1n_1;
        var apprend = resolution.d1n() || (!(retenu == null) && !equals_0(retenu.p1h_1.l1h_1, qui_0, true));
        if (!apprend) {
          tmp$ret$13 = null;
          break $l$block_0;
        }
        var tmp_10;
        if (retenu == null) {
          tmp_10 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>.<anonymous>' call
          tmp_10 = versCandidat(Regles_getInstance(), retenu);
        }
        var tmp_11 = tmp_10;
        // Inline function 'kotlin.collections.map' call
        var this_1 = resolution.c1n_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
        var _iterator__ex2g4s_2 = this_1.g();
        while (_iterator__ex2g4s_2.h()) {
          var item = _iterator__ex2g4s_2.i();
          // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>.<anonymous>' call
          var tmp$ret$16 = versCandidat(Regles_getInstance(), item);
          destination_1.e(tmp$ret$16);
        }
        tmp$ret$13 = new ResolutionJson(element_1.a1c_1, qui_0, tmp_11, destination_1, resolution.d1n());
      }
      var tmp0_safe_receiver_1 = tmp$ret$13;
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination_0.e(tmp0_safe_receiver_1);
      }
    }
    var resolutions = destination_0;
    return this.h1h_1.i12(ListSerializer(Companion_getInstance_22().x1b()), resolutions);
  };
  var Regles_instance;
  function Regles_getInstance() {
    if (Regles_instance == null)
      new Regles();
    return Regles_instance;
  }
  var TypeEntite_PERSONNE_instance;
  var TypeEntite_PROJET_instance;
  var TypeEntite_ORGANISATION_instance;
  var TypeEntite_LIEU_instance;
  var TypeEntite_EVENEMENT_RECURRENT_instance;
  var TypeEntite_SUJET_instance;
  var TypeEntite_entriesInitialized;
  function TypeEntite_initEntries() {
    if (TypeEntite_entriesInitialized)
      return Unit_instance;
    TypeEntite_entriesInitialized = true;
    TypeEntite_PERSONNE_instance = new TypeEntite('PERSONNE', 0);
    TypeEntite_PROJET_instance = new TypeEntite('PROJET', 1);
    TypeEntite_ORGANISATION_instance = new TypeEntite('ORGANISATION', 2);
    TypeEntite_LIEU_instance = new TypeEntite('LIEU', 3);
    TypeEntite_EVENEMENT_RECURRENT_instance = new TypeEntite('EVENEMENT_RECURRENT', 4);
    TypeEntite_SUJET_instance = new TypeEntite('SUJET', 5);
  }
  function TypeEntite(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function EntiteId(value) {
    this.i1h_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.i1h_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.EntiteId.<anonymous>' call
      var message = "Un identifiant d'entit\xE9 ne peut pas \xEAtre vide.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(EntiteId).toString = function () {
    return this.i1h_1;
  };
  protoOf(EntiteId).hashCode = function () {
    return getStringHashCode(this.i1h_1);
  };
  protoOf(EntiteId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntiteId))
      return false;
    var tmp0_other_with_cast = other instanceof EntiteId ? other : THROW_CCE();
    if (!(this.i1h_1 === tmp0_other_with_cast.i1h_1))
      return false;
    return true;
  };
  function Mention(captureId, a, extrait, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.e1n_1 = captureId;
    this.f1n_1 = a;
    this.g1n_1 = extrait;
    this.h1n_1 = elementId;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.g1n_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.Mention.<anonymous>' call
      var message = "Une mention sans extrait n'est pas consultable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Mention).toString = function () {
    return 'Mention(captureId=' + this.e1n_1.toString() + ', a=' + this.f1n_1.toString() + ', extrait=' + this.g1n_1 + ', elementId=' + toString(this.h1n_1) + ')';
  };
  protoOf(Mention).hashCode = function () {
    var result = this.e1n_1.hashCode();
    result = imul(result, 31) + this.f1n_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.g1n_1) | 0;
    result = imul(result, 31) + (this.h1n_1 == null ? 0 : this.h1n_1.hashCode()) | 0;
    return result;
  };
  protoOf(Mention).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Mention))
      return false;
    var tmp0_other_with_cast = other instanceof Mention ? other : THROW_CCE();
    if (!this.e1n_1.equals(tmp0_other_with_cast.e1n_1))
      return false;
    if (!this.f1n_1.equals(tmp0_other_with_cast.f1n_1))
      return false;
    if (!(this.g1n_1 === tmp0_other_with_cast.g1n_1))
      return false;
    if (!equals(this.h1n_1, tmp0_other_with_cast.h1n_1))
      return false;
    return true;
  };
  function Entite(id, type, nom, alias, mentions, sphere) {
    alias = alias === VOID ? emptySet() : alias;
    mentions = mentions === VOID ? emptyList() : mentions;
    sphere = sphere === VOID ? null : sphere;
    this.j1h_1 = id;
    this.k1h_1 = type;
    this.l1h_1 = nom;
    this.m1h_1 = alias;
    this.n1h_1 = mentions;
    this.o1h_1 = sphere;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.l1h_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.Entite.<anonymous>' call
      var message = "Une entit\xE9 sans nom n'est pas d\xE9signable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Entite).i1n = function () {
    return this.n1h_1.l();
  };
  protoOf(Entite).j1n = function (id, type, nom, alias, mentions, sphere) {
    return new Entite(id, type, nom, alias, mentions, sphere);
  };
  protoOf(Entite).k1n = function (id, type, nom, alias, mentions, sphere, $super) {
    id = id === VOID ? this.j1h_1 : id;
    type = type === VOID ? this.k1h_1 : type;
    nom = nom === VOID ? this.l1h_1 : nom;
    alias = alias === VOID ? this.m1h_1 : alias;
    mentions = mentions === VOID ? this.n1h_1 : mentions;
    sphere = sphere === VOID ? this.o1h_1 : sphere;
    return $super === VOID ? this.j1n(id, type, nom, alias, mentions, sphere) : $super.j1n.call(this, id, type, nom, alias, mentions, sphere);
  };
  protoOf(Entite).toString = function () {
    return 'Entite(id=' + this.j1h_1.toString() + ', type=' + this.k1h_1.toString() + ', nom=' + this.l1h_1 + ', alias=' + toString_0(this.m1h_1) + ', mentions=' + toString_0(this.n1h_1) + ', sphere=' + toString(this.o1h_1) + ')';
  };
  protoOf(Entite).hashCode = function () {
    var result = this.j1h_1.hashCode();
    result = imul(result, 31) + this.k1h_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.l1h_1) | 0;
    result = imul(result, 31) + hashCode(this.m1h_1) | 0;
    result = imul(result, 31) + hashCode(this.n1h_1) | 0;
    result = imul(result, 31) + (this.o1h_1 == null ? 0 : this.o1h_1.hashCode()) | 0;
    return result;
  };
  protoOf(Entite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entite))
      return false;
    var tmp0_other_with_cast = other instanceof Entite ? other : THROW_CCE();
    if (!this.j1h_1.equals(tmp0_other_with_cast.j1h_1))
      return false;
    if (!this.k1h_1.equals(tmp0_other_with_cast.k1h_1))
      return false;
    if (!(this.l1h_1 === tmp0_other_with_cast.l1h_1))
      return false;
    if (!equals(this.m1h_1, tmp0_other_with_cast.m1h_1))
      return false;
    if (!equals(this.n1h_1, tmp0_other_with_cast.n1h_1))
      return false;
    if (!equals(this.o1h_1, tmp0_other_with_cast.o1h_1))
      return false;
    return true;
  };
  function TypeEntite_PERSONNE_getInstance() {
    TypeEntite_initEntries();
    return TypeEntite_PERSONNE_instance;
  }
  function Memoire() {
    this.m1m_1 = LinkedHashMap_init_$Create$_0();
    this.n1m_1 = LinkedHashMap_init_$Create$_0();
    this.o1m_1 = LinkedHashMap_init_$Create$_0();
    this.p1m_1 = 0;
    this.q1m_1 = 0;
  }
  protoOf(Memoire).l1n = function () {
    return toList(this.m1m_1.c2());
  };
  protoOf(Memoire).m1n = function (type, nom) {
    var tmp = Texte_getInstance();
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(nom) ? nom : THROW_CCE()));
    var cherche = tmp.q1n(tmp$ret$0);
    var tmp1 = this.m1m_1.c2();
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp1.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.memoire.Memoire.trouver.<anonymous>' call
        var tmp_0;
        if (element.k1h_1.equals(type)) {
          var tmp_1;
          if (Texte_getInstance().q1n(element.l1h_1) === cherche) {
            tmp_1 = true;
          } else {
            var tmp0 = element.m1h_1;
            var tmp$ret$1;
            $l$block_0: {
              // Inline function 'kotlin.collections.any' call
              var tmp_2;
              if (isInterface(tmp0, Collection)) {
                tmp_2 = tmp0.j();
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                tmp$ret$1 = false;
                break $l$block_0;
              }
              var _iterator__ex2g4s_0 = tmp0.g();
              while (_iterator__ex2g4s_0.h()) {
                var element_0 = _iterator__ex2g4s_0.i();
                // Inline function 'app.zenote.core.memoire.Memoire.trouver.<anonymous>.<anonymous>' call
                if (Texte_getInstance().q1n(element_0) === cherche) {
                  tmp$ret$1 = true;
                  break $l$block_0;
                }
              }
              tmp$ret$1 = false;
            }
            tmp_1 = tmp$ret$1;
          }
          tmp_0 = tmp_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$4 = element;
          break $l$block_1;
        }
      }
      tmp$ret$4 = null;
    }
    return tmp$ret$4;
  };
  protoOf(Memoire).r1m = function (type, nom, mention, sphere) {
    var existante = this.m1n(type, nom);
    var tmp;
    if (existante == null) {
      this.p1m_1 = this.p1m_1 + 1 | 0;
      var tmp_0 = new EntiteId('ent-' + padStart(this.p1m_1.toString(), 4, _Char___init__impl__6a9atx(48)));
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$0 = toString_0(trim(isCharSequence(nom) ? nom : THROW_CCE()));
      tmp = new Entite(tmp_0, type, tmp$ret$0, VOID, VOID, sphere);
    } else {
      tmp = existante;
    }
    var entite = tmp;
    var tmp1 = entite.n1h_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(tmp1, Collection)) {
        tmp_1 = tmp1.j();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$1 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp1.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.memoire.Memoire.observer.<anonymous>' call
        if (element.e1n_1.equals(mention.e1n_1) && equals(element.h1n_1, mention.h1n_1) && element.g1n_1 === mention.g1n_1) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
      tmp$ret$1 = false;
    }
    var deja = tmp$ret$1;
    var tmp_2 = deja ? entite.n1h_1 : plus(entite.n1h_1, mention);
    var tmp1_elvis_lhs = entite.o1h_1;
    var enrichie = entite.k1n(VOID, VOID, VOID, VOID, tmp_2, tmp1_elvis_lhs == null ? sphere : tmp1_elvis_lhs);
    var tmp3 = this.m1m_1;
    // Inline function 'kotlin.collections.set' call
    var key = enrichie.j1h_1;
    tmp3.z1(key, enrichie);
    var tmp2_safe_receiver = mention.h1n_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.memoire.Memoire.observer.<anonymous>' call
      this.r1n(tmp2_safe_receiver, enrichie.j1h_1);
    }
    return enrichie;
  };
  protoOf(Memoire).r1n = function (elementId, entiteId) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.m1m_1;
    // Inline function 'kotlin.require' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).u1(entiteId)) {
      // Inline function 'app.zenote.core.memoire.Memoire.rattacher.<anonymous>' call
      var message = 'Rattachement \xE0 une entit\xE9 inconnue : ' + entiteId.toString() + '.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.n1m_1;
    var value = this_1.w1(elementId);
    var tmp;
    if (value == null) {
      // Inline function 'app.zenote.core.memoire.Memoire.rattacher.<anonymous>' call
      // Inline function 'kotlin.collections.linkedSetOf' call
      var answer = LinkedHashSet_init_$Create$();
      this_1.z1(elementId, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp.e(entiteId);
  };
  function Candidat(entite, score, proximite, recence, frequence, nomme, appui) {
    this.p1h_1 = entite;
    this.q1h_1 = score;
    this.r1h_1 = proximite;
    this.s1h_1 = recence;
    this.t1h_1 = frequence;
    this.u1h_1 = nomme;
    this.v1h_1 = appui;
  }
  protoOf(Candidat).toString = function () {
    return 'Candidat(entite=' + this.p1h_1.toString() + ', score=' + this.q1h_1 + ', proximite=' + this.r1h_1 + ', recence=' + this.s1h_1 + ', frequence=' + this.t1h_1 + ', nomme=' + this.u1h_1 + ', appui=' + this.v1h_1 + ')';
  };
  protoOf(Candidat).hashCode = function () {
    var result = this.p1h_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.q1h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r1h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s1h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u1h_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v1h_1) | 0;
    return result;
  };
  protoOf(Candidat).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Candidat))
      return false;
    var tmp0_other_with_cast = other instanceof Candidat ? other : THROW_CCE();
    if (!this.p1h_1.equals(tmp0_other_with_cast.p1h_1))
      return false;
    if (!equals(this.q1h_1, tmp0_other_with_cast.q1h_1))
      return false;
    if (!equals(this.r1h_1, tmp0_other_with_cast.r1h_1))
      return false;
    if (!equals(this.s1h_1, tmp0_other_with_cast.s1h_1))
      return false;
    if (!equals(this.t1h_1, tmp0_other_with_cast.t1h_1))
      return false;
    if (!(this.u1h_1 === tmp0_other_with_cast.u1h_1))
      return false;
    if (!(this.v1h_1 === tmp0_other_with_cast.v1h_1))
      return false;
    return true;
  };
  function Resolution(reference, retenu, candidats) {
    this.a1n_1 = reference;
    this.b1n_1 = retenu;
    this.c1n_1 = candidats;
  }
  protoOf(Resolution).d1n = function () {
    return this.b1n_1 == null && this.c1n_1.l() > 1;
  };
  protoOf(Resolution).toString = function () {
    return 'Resolution(reference=' + this.a1n_1 + ', retenu=' + toString(this.b1n_1) + ', candidats=' + toString_0(this.c1n_1) + ')';
  };
  protoOf(Resolution).hashCode = function () {
    var result = getStringHashCode(this.a1n_1);
    result = imul(result, 31) + (this.b1n_1 == null ? 0 : this.b1n_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.c1n_1) | 0;
    return result;
  };
  protoOf(Resolution).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Resolution))
      return false;
    var tmp0_other_with_cast = other instanceof Resolution ? other : THROW_CCE();
    if (!(this.a1n_1 === tmp0_other_with_cast.a1n_1))
      return false;
    if (!equals(this.b1n_1, tmp0_other_with_cast.b1n_1))
      return false;
    if (!equals(this.c1n_1, tmp0_other_with_cast.c1n_1))
      return false;
    return true;
  };
  function lEmporteNettement($this, premier, tous) {
    var tmp0_elvis_lhs = getOrNull(tous, 1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return premier.u1h_1 || premier.q1h_1 >= 0.75;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var second = tmp;
    if (premier.q1h_1 < 0.75 && !(premier.u1h_1 && !second.u1h_1))
      return false;
    return premier.q1h_1 - second.q1h_1 >= 0.12;
  }
  function noter($this, entite, reference, contexte, maintenant, ignorerElement) {
    var nomme_0 = nomme($this, entite, reference);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = entite.n1h_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
      if (element.h1n_1 == null || !equals(element.h1n_1, ignorerElement)) {
        destination.e(element);
      }
    }
    var connues = destination;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.maxOfOrNull' call
      var iterator = connues.g();
      if (!iterator.h()) {
        tmp$ret$3 = null;
        break $l$block;
      }
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
      var it = iterator.i();
      var maxValue = Texte_getInstance().s1n(contexte, it.g1n_1);
      while (iterator.h()) {
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
        var it_0 = iterator.i();
        var v = Texte_getInstance().s1n(contexte, it_0.g1n_1);
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxValue;
        maxValue = Math.max(a, v);
      }
      tmp$ret$3 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$3;
    var surSesMentions = tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
    var tmp;
    if (nomme_0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      tmp = Math.max(surSesMentions, 0.5);
    } else {
      tmp = surSesMentions;
    }
    var proximite = tmp;
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator_0 = connues.g();
      if (!iterator_0.h()) {
        tmp$ret$8 = null;
        break $l$block_1;
      }
      var maxElem = iterator_0.i();
      if (!iterator_0.h()) {
        tmp$ret$8 = maxElem;
        break $l$block_1;
      }
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
      var maxValue_0 = maxElem.f1n_1;
      do {
        var e = iterator_0.i();
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
        var v_0 = e.f1n_1;
        if (compareTo(maxValue_0, v_0) < 0) {
          maxElem = e;
          maxValue_0 = v_0;
        }
      }
       while (iterator_0.h());
      tmp$ret$8 = maxElem;
    }
    var tmp1_safe_receiver = tmp$ret$8;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f1n_1;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
      tmp_0 = _Duration___get_inWholeDays__impl__7bvpxz(maintenant.i11(tmp2_safe_receiver)).v2();
    }
    var tmp3_elvis_lhs = tmp_0;
    var jours = tmp3_elvis_lhs == null ? 1.7976931348623157E308 : tmp3_elvis_lhs;
    var recence = jours <= 0.0 ? 1.0 : 30.0 / (30.0 + jours);
    // Inline function 'kotlin.math.min' call
    var b = connues.l() / 5.0;
    var frequence = Math.min(1.0, b);
    var tmp_1;
    if (connues.j()) {
      tmp_1 = 0.0;
    } else {
      tmp_1 = 0.5 * proximite + 0.3 * recence + 0.2 * frequence;
    }
    var score = tmp_1;
    return new Candidat(entite, score, proximite, recence, frequence, nomme_0, appui($this, entite, nomme_0, surSesMentions, connues));
  }
  function nomme($this, entite, reference) {
    var tmp = Texte_getInstance();
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(reference) ? reference : THROW_CCE()));
    var cherchee = tmp.q1n(tmp$ret$0);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(cherchee) === 0)
      return false;
    if (Texte_getInstance().q1n(entite.l1h_1) === cherchee)
      return true;
    var tmp2 = entite.m1h_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp2, Collection)) {
        tmp_0 = tmp2.j();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp2.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.nomme.<anonymous>' call
        if (Texte_getInstance().q1n(element) === cherchee) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2)
      return true;
    var tmp4 = split(Texte_getInstance().q1n(entite.l1h_1), charArrayOf([_Char___init__impl__6a9atx(32)]));
    var tmp$ret$4;
    $l$block_2: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(tmp4, Collection)) {
        tmp_1 = tmp4.j();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$4 = false;
        break $l$block_2;
      }
      var _iterator__ex2g4s_0 = tmp4.g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.nomme.<anonymous>' call
        if (element_0 === cherchee) {
          tmp$ret$4 = true;
          break $l$block_2;
        }
      }
      tmp$ret$4 = false;
    }
    return tmp$ret$4;
  }
  function appui($this, entite, nomme, proximite, connues) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var morceaux = ArrayList_init_$Create$_0();
    if (nomme) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element = 'nomm\xE9e dans la capture';
      morceaux.e(element);
    }
    if (proximite > 0.0) {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        var iterator = connues.g();
        if (!iterator.h()) {
          tmp$ret$1 = null;
          break $l$block_0;
        }
        var maxElem = iterator.i();
        if (!iterator.h()) {
          tmp$ret$1 = maxElem;
          break $l$block_0;
        }
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.appui.<anonymous>' call
        var maxValue = maxElem.f1n_1;
        do {
          var e = iterator.i();
          // Inline function 'app.zenote.core.memoire.ResolutionReferences.appui.<anonymous>' call
          var v = e.f1n_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (iterator.h());
        tmp$ret$1 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1n_1;
      var extrait = tmp1_safe_receiver == null ? null : take(tmp1_safe_receiver, 60);
      if (!(extrait == null)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = 'd\xE9j\xE0 cit\xE9e \xE0 propos de \xAB ' + extrait + ' \xBB';
        morceaux.e(element_0);
      }
    }
    var tmp2_subject = connues.l();
    // Inline function 'kotlin.collections.plusAssign' call
    var element_1 = tmp2_subject === 0 ? 'jamais mentionn\xE9e' : tmp2_subject === 1 ? 'mentionn\xE9e une fois' : 'mentionn\xE9e ' + entite.i1n() + ' fois';
    morceaux.e(element_1);
    return joinToString(morceaux, ', ');
  }
  function sam$kotlin_Comparator$0_2(function_0) {
    this.t1n_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).kc = function (a, b) {
    return this.t1n_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).w2 = function () {
    return this.t1n_1;
  };
  protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
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
    return hashCode(this.w2());
  };
  function ResolutionReferences$resoudre$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
    var tmp = b.q1h_1;
    // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
    var tmp$ret$1 = a.q1h_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ResolutionReferences$resoudre$lambda_0($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
        var tmp_0 = a.p1h_1.l1h_1;
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
        var tmp$ret$1 = b.p1h_1.l1h_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function ResolutionReferences$resoudre$lambda_1($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
        var tmp_0 = a.p1h_1.j1h_1.i1h_1;
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
        var tmp$ret$1 = b.p1h_1.j1h_1.i1h_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function ResolutionReferences() {
    this.s1m_1 = 30.0;
    this.t1m_1 = 5.0;
    this.u1m_1 = 0.5;
    this.v1m_1 = 0.3;
    this.w1m_1 = 0.2;
    this.x1m_1 = 0.12;
    this.y1m_1 = 0.05;
  }
  protoOf(ResolutionReferences).z1m = function (memoire, reference, maintenant, contexte, types, ignorerElement) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = memoire.l1n();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
      if (types.j() || types.p1(element.k1h_1)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
      if (nomme(ResolutionReferences_instance, element_0, reference)) {
        destination_0.e(element_0);
      }
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = destination_0.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
      var tmp0_0 = element_1.n1h_1;
      var tmp$ret$6;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0_0, Collection)) {
          tmp = tmp0_0.j();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$6 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_2 = tmp0_0.g();
        while (_iterator__ex2g4s_2.h()) {
          var element_2 = _iterator__ex2g4s_2.i();
          // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>.<anonymous>' call
          if (element_2.h1n_1 == null || !equals(element_2.h1n_1, ignorerElement)) {
            tmp$ret$6 = true;
            break $l$block_0;
          }
        }
        tmp$ret$6 = false;
      }
      if (tmp$ret$6) {
        destination_1.e(element_1);
      }
    }
    var recherchees = destination_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(recherchees, 10));
    var _iterator__ex2g4s_3 = recherchees.g();
    while (_iterator__ex2g4s_3.h()) {
      var item = _iterator__ex2g4s_3.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
      var tmp$ret$11 = noter(ResolutionReferences_instance, item, reference, contexte, maintenant, ignorerElement);
      destination_2.e(tmp$ret$11);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_3 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_4 = destination_2.g();
    while (_iterator__ex2g4s_4.h()) {
      var element_3 = _iterator__ex2g4s_4.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
      if (element_3.q1h_1 > 0.05) {
        destination_3.e(element_3);
      }
    }
    var tmp_0 = destination_3;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_1 = ResolutionReferences$resoudre$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_2(tmp_1);
    var tmp_2 = ResolutionReferences$resoudre$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_2(tmp_2);
    var tmp_3 = ResolutionReferences$resoudre$lambda_1(this_1);
    var tmp$ret$19 = new sam$kotlin_Comparator$0_2(tmp_3);
    var candidats = sortedWith(tmp_0, tmp$ret$19);
    var tmp0_safe_receiver = firstOrNull(candidats);
    var tmp_4;
    if (tmp0_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_5;
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
      if (lEmporteNettement(ResolutionReferences_instance, tmp0_safe_receiver, candidats)) {
        tmp_5 = tmp0_safe_receiver;
      } else {
        tmp_5 = null;
      }
      tmp_4 = tmp_5;
    }
    return new Resolution(reference, tmp_4, candidats);
  };
  var ResolutionReferences_instance;
  function ResolutionReferences_getInstance() {
    return ResolutionReferences_instance;
  }
  function Deduit(valeur, confiance, indice) {
    this.s1i_1 = valeur;
    this.t1i_1 = confiance;
    this.u1i_1 = indice;
    var containsArg = this.t1i_1;
    // Inline function 'kotlin.require' call
    if (!(0.0 <= containsArg ? containsArg <= 1.0 : false)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message = 'La confiance est une probabilit\xE9 entre 0 et 1.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.u1i_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message_0 = "Une d\xE9duction sans indice n'est pas justifiable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Deduit).toString = function () {
    return 'Deduit(valeur=' + toString(this.s1i_1) + ', confiance=' + this.t1i_1 + ', indice=' + this.u1i_1 + ')';
  };
  protoOf(Deduit).hashCode = function () {
    var result = this.s1i_1 == null ? 0 : hashCode(this.s1i_1);
    result = imul(result, 31) + getNumberHashCode(this.t1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u1i_1) | 0;
    return result;
  };
  protoOf(Deduit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deduit))
      return false;
    var tmp0_other_with_cast = other instanceof Deduit ? other : THROW_CCE();
    if (!equals(this.s1i_1, tmp0_other_with_cast.s1i_1))
      return false;
    if (!equals(this.t1i_1, tmp0_other_with_cast.t1i_1))
      return false;
    if (!(this.u1i_1 === tmp0_other_with_cast.u1i_1))
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
  protoOf(TypeElement).w1n = function () {
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
    this.q1k_1 = declencheur;
    this.r1k_1 = action;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.q1k_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message = "Un plan sans d\xE9clencheur n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.r1k_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message_0 = "Un plan sans action n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Plan).toString = function () {
    return 'Quand ' + this.q1k_1 + ', ' + this.r1k_1;
  };
  protoOf(Plan).hashCode = function () {
    var result = getStringHashCode(this.q1k_1);
    result = imul(result, 31) + getStringHashCode(this.r1k_1) | 0;
    return result;
  };
  protoOf(Plan).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plan))
      return false;
    var tmp0_other_with_cast = other instanceof Plan ? other : THROW_CCE();
    if (!(this.q1k_1 === tmp0_other_with_cast.q1k_1))
      return false;
    if (!(this.r1k_1 === tmp0_other_with_cast.r1k_1))
      return false;
    return true;
  };
  function ElementId(value) {
    this.h1i_1 = value;
  }
  protoOf(ElementId).toString = function () {
    return this.h1i_1;
  };
  protoOf(ElementId).hashCode = function () {
    return getStringHashCode(this.h1i_1);
  };
  protoOf(ElementId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementId))
      return false;
    var tmp0_other_with_cast = other instanceof ElementId ? other : THROW_CCE();
    if (!(this.h1i_1 === tmp0_other_with_cast.h1i_1))
      return false;
    return true;
  };
  function ElementDerive(captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan) {
    echeance = echeance === VOID ? null : echeance;
    poids = poids === VOID ? null : poids;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    sphere = sphere === VOID ? null : sphere;
    plan = plan === VOID ? null : plan;
    this.i1i_1 = captureId;
    this.j1i_1 = type;
    this.k1i_1 = texte;
    this.l1i_1 = passage;
    this.m1i_1 = echeance;
    this.n1i_1 = poids;
    this.o1i_1 = interlocuteur;
    this.p1i_1 = sphere;
    this.q1i_1 = plan;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.k1i_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.ElementDerive.<anonymous>' call
      var message = "Un \xE9l\xE9ment sans texte n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.r1i_1 = new ElementId(this.i1i_1.toString() + ':' + this.l1i_1.x1n_1 + '-' + this.l1i_1.y1n_1 + ':' + this.j1i_1.toString());
  }
  protoOf(ElementDerive).toString = function () {
    return 'ElementDerive(captureId=' + this.i1i_1.toString() + ', type=' + this.j1i_1.toString() + ', texte=' + this.k1i_1 + ', passage=' + this.l1i_1.toString() + ', echeance=' + toString(this.m1i_1) + ', poids=' + toString(this.n1i_1) + ', interlocuteur=' + toString(this.o1i_1) + ', sphere=' + toString(this.p1i_1) + ', plan=' + toString(this.q1i_1) + ')';
  };
  protoOf(ElementDerive).hashCode = function () {
    var result = this.i1i_1.hashCode();
    result = imul(result, 31) + this.j1i_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.k1i_1) | 0;
    result = imul(result, 31) + this.l1i_1.hashCode() | 0;
    result = imul(result, 31) + (this.m1i_1 == null ? 0 : this.m1i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.n1i_1 == null ? 0 : this.n1i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.o1i_1 == null ? 0 : this.o1i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.p1i_1 == null ? 0 : this.p1i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.q1i_1 == null ? 0 : this.q1i_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElementDerive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDerive))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDerive ? other : THROW_CCE();
    if (!this.i1i_1.equals(tmp0_other_with_cast.i1i_1))
      return false;
    if (!this.j1i_1.equals(tmp0_other_with_cast.j1i_1))
      return false;
    if (!(this.k1i_1 === tmp0_other_with_cast.k1i_1))
      return false;
    if (!this.l1i_1.equals(tmp0_other_with_cast.l1i_1))
      return false;
    if (!equals(this.m1i_1, tmp0_other_with_cast.m1i_1))
      return false;
    if (!equals(this.n1i_1, tmp0_other_with_cast.n1i_1))
      return false;
    if (!equals(this.o1i_1, tmp0_other_with_cast.o1i_1))
      return false;
    if (!equals(this.p1i_1, tmp0_other_with_cast.p1i_1))
      return false;
    if (!equals(this.q1i_1, tmp0_other_with_cast.q1i_1))
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
  function Companion_18() {
  }
  var Companion_instance_19;
  function Companion_getInstance_23() {
    return Companion_instance_19;
  }
  function ElementResolu(id, captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan, verdict, aConfirmer, corrigeParHumain, indicePoids) {
    this.y1i_1 = id;
    this.z1i_1 = captureId;
    this.a1j_1 = type;
    this.b1j_1 = texte;
    this.c1j_1 = passage;
    this.d1j_1 = echeance;
    this.e1j_1 = poids;
    this.f1j_1 = interlocuteur;
    this.g1j_1 = sphere;
    this.h1j_1 = plan;
    this.i1j_1 = verdict;
    this.j1j_1 = aConfirmer;
    this.k1j_1 = corrigeParHumain;
    this.l1j_1 = indicePoids;
  }
  protoOf(ElementResolu).toString = function () {
    return 'ElementResolu(id=' + this.y1i_1.toString() + ', captureId=' + this.z1i_1.toString() + ', type=' + this.a1j_1.toString() + ', texte=' + this.b1j_1 + ', passage=' + this.c1j_1.toString() + ', echeance=' + toString(this.d1j_1) + ', poids=' + toString(this.e1j_1) + ', interlocuteur=' + this.f1j_1 + ', sphere=' + toString(this.g1j_1) + ', plan=' + toString(this.h1j_1) + ', verdict=' + this.i1j_1.toString() + ', aConfirmer=' + this.j1j_1 + ', corrigeParHumain=' + this.k1j_1 + ', indicePoids=' + this.l1j_1 + ')';
  };
  protoOf(ElementResolu).hashCode = function () {
    var result = this.y1i_1.hashCode();
    result = imul(result, 31) + this.z1i_1.hashCode() | 0;
    result = imul(result, 31) + this.a1j_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.b1j_1) | 0;
    result = imul(result, 31) + this.c1j_1.hashCode() | 0;
    result = imul(result, 31) + (this.d1j_1 == null ? 0 : this.d1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.e1j_1 == null ? 0 : this.e1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.f1j_1 == null ? 0 : getStringHashCode(this.f1j_1)) | 0;
    result = imul(result, 31) + (this.g1j_1 == null ? 0 : this.g1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h1j_1 == null ? 0 : this.h1j_1.hashCode()) | 0;
    result = imul(result, 31) + this.i1j_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j1j_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k1j_1) | 0;
    result = imul(result, 31) + (this.l1j_1 == null ? 0 : getStringHashCode(this.l1j_1)) | 0;
    return result;
  };
  protoOf(ElementResolu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementResolu))
      return false;
    var tmp0_other_with_cast = other instanceof ElementResolu ? other : THROW_CCE();
    if (!this.y1i_1.equals(tmp0_other_with_cast.y1i_1))
      return false;
    if (!this.z1i_1.equals(tmp0_other_with_cast.z1i_1))
      return false;
    if (!this.a1j_1.equals(tmp0_other_with_cast.a1j_1))
      return false;
    if (!(this.b1j_1 === tmp0_other_with_cast.b1j_1))
      return false;
    if (!this.c1j_1.equals(tmp0_other_with_cast.c1j_1))
      return false;
    if (!equals(this.d1j_1, tmp0_other_with_cast.d1j_1))
      return false;
    if (!equals(this.e1j_1, tmp0_other_with_cast.e1j_1))
      return false;
    if (!(this.f1j_1 == tmp0_other_with_cast.f1j_1))
      return false;
    if (!equals(this.g1j_1, tmp0_other_with_cast.g1j_1))
      return false;
    if (!equals(this.h1j_1, tmp0_other_with_cast.h1j_1))
      return false;
    if (!this.i1j_1.equals(tmp0_other_with_cast.i1j_1))
      return false;
    if (!(this.j1j_1 === tmp0_other_with_cast.j1j_1))
      return false;
    if (!(this.k1j_1 === tmp0_other_with_cast.k1j_1))
      return false;
    if (!(this.l1j_1 == tmp0_other_with_cast.l1j_1))
      return false;
    return true;
  };
  function CaptureId(value) {
    this.g1i_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.g1i_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.CaptureId.<anonymous>' call
      var message = 'Un identifiant de capture ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(CaptureId).toString = function () {
    return this.g1i_1;
  };
  protoOf(CaptureId).hashCode = function () {
    return getStringHashCode(this.g1i_1);
  };
  protoOf(CaptureId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureId))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureId ? other : THROW_CCE();
    if (!(this.g1i_1 === tmp0_other_with_cast.g1i_1))
      return false;
    return true;
  };
  function Passage(debutCar, finCar, debutMs, finMs) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    this.x1n_1 = debutCar;
    this.y1n_1 = finCar;
    this.z1n_1 = debutMs;
    this.a1o_1 = finMs;
    // Inline function 'kotlin.require' call
    if (!(this.x1n_1 >= 0)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message = 'Le d\xE9but du passage ne peut pas \xEAtre n\xE9gatif.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.y1n_1 > this.x1n_1)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_0 = 'Le passage doit couvrir au moins un caract\xE8re.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(this.z1n_1 == null === (this.a1o_1 == null))) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_1 = 'Les bornes audio vont par paire, ou pas du tout.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    if (!(this.z1n_1 == null) && !(this.a1o_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.z1n_1.z(new Long(0, 0)) >= 0 && this.a1o_1.z(this.z1n_1) > 0)) {
        // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
        var message_2 = 'Bornes audio incoh\xE9rentes.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }
    }
  }
  protoOf(Passage).toString = function () {
    return 'Passage(debutCar=' + this.x1n_1 + ', finCar=' + this.y1n_1 + ', debutMs=' + toString(this.z1n_1) + ', finMs=' + toString(this.a1o_1) + ')';
  };
  protoOf(Passage).hashCode = function () {
    var result = this.x1n_1;
    result = imul(result, 31) + this.y1n_1 | 0;
    result = imul(result, 31) + (this.z1n_1 == null ? 0 : this.z1n_1.hashCode()) | 0;
    result = imul(result, 31) + (this.a1o_1 == null ? 0 : this.a1o_1.hashCode()) | 0;
    return result;
  };
  protoOf(Passage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Passage))
      return false;
    var tmp0_other_with_cast = other instanceof Passage ? other : THROW_CCE();
    if (!(this.x1n_1 === tmp0_other_with_cast.x1n_1))
      return false;
    if (!(this.y1n_1 === tmp0_other_with_cast.y1n_1))
      return false;
    if (!equals(this.z1n_1, tmp0_other_with_cast.z1n_1))
      return false;
    if (!equals(this.a1o_1, tmp0_other_with_cast.a1o_1))
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
  protoOf(Urgence).d1o = function () {
    return this.equals(Urgence_DEPASSEE_getInstance()) || this.equals(Urgence_AUJOURD_HUI_getInstance());
  };
  protoOf(Urgence).e1o = function () {
    var tmp;
    switch (this.e2_1) {
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
    this.f1o_1 = aujourdhui;
  }
  protoOf(ContexteMaintenant).toString = function () {
    return 'ContexteMaintenant(aujourdhui=' + this.f1o_1.toString() + ')';
  };
  protoOf(ContexteMaintenant).hashCode = function () {
    return this.f1o_1.hashCode();
  };
  protoOf(ContexteMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenant ? other : THROW_CCE();
    if (!this.f1o_1.equals(tmp0_other_with_cast.f1o_1))
      return false;
    return true;
  };
  function Proposition(element, raison, poidsEffectif, urgence) {
    this.q1j_1 = element;
    this.r1j_1 = raison;
    this.s1j_1 = poidsEffectif;
    this.t1j_1 = urgence;
  }
  protoOf(Proposition).toString = function () {
    return 'Proposition(element=' + this.q1j_1.toString() + ', raison=' + this.r1j_1 + ', poidsEffectif=' + this.s1j_1.toString() + ', urgence=' + this.t1j_1.toString() + ')';
  };
  protoOf(Proposition).hashCode = function () {
    var result = this.q1j_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.r1j_1) | 0;
    result = imul(result, 31) + this.s1j_1.hashCode() | 0;
    result = imul(result, 31) + this.t1j_1.hashCode() | 0;
    return result;
  };
  protoOf(Proposition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Proposition))
      return false;
    var tmp0_other_with_cast = other instanceof Proposition ? other : THROW_CCE();
    if (!this.q1j_1.equals(tmp0_other_with_cast.q1j_1))
      return false;
    if (!(this.r1j_1 === tmp0_other_with_cast.r1j_1))
      return false;
    if (!this.s1j_1.equals(tmp0_other_with_cast.s1j_1))
      return false;
    if (!this.t1j_1.equals(tmp0_other_with_cast.t1j_1))
      return false;
    return true;
  };
  function raison($this, element, urgence) {
    var tmp0_elvis_lhs = element.l1j_1;
    var consequence = tmp0_elvis_lhs == null ? 'poids non d\xE9termin\xE9, \xE0 confirmer en Revue' : tmp0_elvis_lhs;
    return consequence + ' \u2014 ' + urgence.e1o();
  }
  function dUnCranPlusHaut(_this__u8e3s4, $this) {
    var tmp;
    switch (_this__u8e3s4.e2_1) {
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
  function sam$kotlin_Comparator$0_3(function_0) {
    this.g1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).kc = function (a, b) {
    return this.g1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).w2 = function () {
    return this.g1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
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
    return hashCode(this.w2());
  };
  function Priorisation$classer$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp = b.s1j_1.e2_1;
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp$ret$1 = a.s1j_1.e2_1;
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
        var tmp_0 = a.t1j_1.e2_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.t1j_1.e2_1;
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
        var tmp_0 = a.q1j_1.y1i_1.h1i_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.q1j_1.y1i_1.h1i_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation() {
    Priorisation_instance = this;
    this.n1j_1 = 3;
    this.o1j_1 = Poids_MOYEN_getInstance();
  }
  protoOf(Priorisation).h1o = function (echeance, aujourdhui) {
    if (echeance == null)
      return Urgence_AUCUNE_getInstance();
    var tmp0_subject = daysUntil(aujourdhui, echeance);
    return (-2147483648 <= tmp0_subject ? tmp0_subject <= -1 : false) ? Urgence_DEPASSEE_getInstance() : tmp0_subject === 0 ? Urgence_AUJOURD_HUI_getInstance() : tmp0_subject === 1 ? Urgence_DEMAIN_getInstance() : (2 <= tmp0_subject ? tmp0_subject <= 7 : false) ? Urgence_CETTE_SEMAINE_getInstance() : Urgence_PLUS_TARD_getInstance();
  };
  protoOf(Priorisation).i1o = function (elements, contexte) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      if (element.i1j_1.equals(Verdict_ACCEPTE_getInstance()) && element.a1j_1.w1n()) {
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
      var urgence = Priorisation_getInstance().h1o(item.d1j_1, contexte.f1o_1);
      var tmp0_elvis_lhs = item.e1j_1;
      var poids = tmp0_elvis_lhs == null ? Priorisation_getInstance().o1j_1 : tmp0_elvis_lhs;
      var effectif = urgence.d1o() ? dUnCranPlusHaut(poids, Priorisation_getInstance()) : poids;
      var tmp$ret$3 = new Proposition(item, raison(Priorisation_getInstance(), item, urgence), effectif, urgence);
      destination_0.e(tmp$ret$3);
    }
    var tmp = destination_0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = Priorisation$classer$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_3(tmp_0);
    var tmp_1 = Priorisation$classer$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_3(tmp_1);
    var tmp_2 = Priorisation$classer$lambda_1(this_1);
    var tmp$ret$8 = new sam$kotlin_Comparator$0_3(tmp_2);
    return sortedWith(tmp, tmp$ret$8);
  };
  protoOf(Priorisation).p1j = function (elements, contexte) {
    return take_0(this.i1o(elements, contexte), 3);
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
    this.j1o_1 = point;
  }
  protoOf(Transition).toString = function () {
    return 'Transition(point=' + this.j1o_1.toString() + ')';
  };
  protoOf(Transition).hashCode = function () {
    return this.j1o_1.hashCode();
  };
  protoOf(Transition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Transition))
      return false;
    var tmp0_other_with_cast = other instanceof Transition ? other : THROW_CCE();
    if (!this.j1o_1.equals(tmp0_other_with_cast.j1o_1))
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
    this.d1l_1 = quand;
  }
  protoOf(Observable).toString = function () {
    return 'Observable(quand=' + this.d1l_1.toString() + ')';
  };
  protoOf(Observable).hashCode = function () {
    return this.d1l_1.hashCode();
  };
  protoOf(Observable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Observable))
      return false;
    var tmp0_other_with_cast = other instanceof Observable ? other : THROW_CCE();
    if (!this.d1l_1.equals(tmp0_other_with_cast.d1l_1))
      return false;
    return true;
  };
  function Substituee(explication) {
    this.e1l_1 = explication;
  }
  protoOf(Substituee).toString = function () {
    return 'Substituee(explication=' + this.e1l_1 + ')';
  };
  protoOf(Substituee).hashCode = function () {
    return getStringHashCode(this.e1l_1);
  };
  protoOf(Substituee).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Substituee))
      return false;
    var tmp0_other_with_cast = other instanceof Substituee ? other : THROW_CCE();
    if (!(this.e1l_1 === tmp0_other_with_cast.e1l_1))
      return false;
    return true;
  };
  function Echeancier() {
    Echeancier_instance = this;
    this.x1k_1 = LocalTime_init_$Create$(18, 0);
    this.y1k_1 = LocalTime_init_$Create$(7, 0);
    this.z1k_1 = "ZeNote ne sait pas encore reconna\xEEtre ce signal : l'agenda n'est pas branch\xE9, et la position n'est pas collect\xE9e.";
    this.a1l_1 = Regex_init_$Create$('(\\d{4})-(\\d{2})-(\\d{2})');
  }
  protoOf(Echeancier).b1l = function (declencheur, poseLe) {
    var plie = Texte_getInstance().q1n(declencheur);
    if (contains(plie, 'ce soir')) {
      return new Observable(LocalDateTime_init_$Create$(poseLe.v11(), this.x1k_1));
    }
    if (contains(plie, 'demain matin')) {
      return new Observable(LocalDateTime_init_$Create$(plus_0(poseLe.v11(), 1, Companion_getInstance_3().tm_1), this.y1k_1));
    }
    var tmp0_safe_receiver = this.a1l_1.oa(plie);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var _destruct__k2r9zo = tmp0_safe_receiver.eb();
      // Inline function 'kotlin.text.Destructured.component1' call
      var annee = _destruct__k2r9zo.jd_1.db().k(1);
      // Inline function 'kotlin.text.Destructured.component2' call
      var mois = _destruct__k2r9zo.jd_1.db().k(2);
      // Inline function 'kotlin.text.Destructured.component3' call
      var jour = _destruct__k2r9zo.jd_1.db().k(3);
      return new Observable(LocalDateTime_init_$Create$_0(toInt(annee), toInt(mois), toInt(jour), 0, 0));
    }
    return new Substituee("ZeNote ne sait pas encore reconna\xEEtre ce signal : l'agenda n'est pas branch\xE9, et la position n'est pas collect\xE9e.");
  };
  protoOf(Echeancier).c1l = function (echeance, maintenant) {
    var tmp;
    if (echeance instanceof Substituee) {
      tmp = true;
    } else {
      if (echeance instanceof Observable) {
        tmp = echeance.d1l_1.w11(maintenant) <= 0;
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
    this.k1o_1 = rappel;
    this.l1o_1 = motif;
  }
  protoOf(Immediate).toString = function () {
    return 'Immediate(rappel=' + this.k1o_1.toString() + ', motif=' + this.l1o_1 + ')';
  };
  protoOf(Immediate).hashCode = function () {
    var result = this.k1o_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.l1o_1) | 0;
    return result;
  };
  protoOf(Immediate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Immediate))
      return false;
    var tmp0_other_with_cast = other instanceof Immediate ? other : THROW_CCE();
    if (!this.k1o_1.equals(tmp0_other_with_cast.k1o_1))
      return false;
    if (!(this.l1o_1 === tmp0_other_with_cast.l1o_1))
      return false;
    return true;
  };
  function MiseEnFile(rappel, motif) {
    this.m1o_1 = rappel;
    this.n1o_1 = motif;
  }
  protoOf(MiseEnFile).toString = function () {
    return 'MiseEnFile(rappel=' + this.m1o_1.toString() + ', motif=' + this.n1o_1 + ')';
  };
  protoOf(MiseEnFile).hashCode = function () {
    var result = this.m1o_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.n1o_1) | 0;
    return result;
  };
  protoOf(MiseEnFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MiseEnFile))
      return false;
    var tmp0_other_with_cast = other instanceof MiseEnFile ? other : THROW_CCE();
    if (!this.m1o_1.equals(tmp0_other_with_cast.m1o_1))
      return false;
    if (!(this.n1o_1 === tmp0_other_with_cast.n1o_1))
      return false;
    return true;
  };
  function Escaladee(escalade) {
    this.o1o_1 = escalade;
  }
  protoOf(Escaladee).toString = function () {
    return 'Escaladee(escalade=' + this.o1o_1.toString() + ')';
  };
  protoOf(Escaladee).hashCode = function () {
    return this.o1o_1.hashCode();
  };
  protoOf(Escaladee).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Escaladee))
      return false;
    var tmp0_other_with_cast = other instanceof Escaladee ? other : THROW_CCE();
    if (!this.o1o_1.equals(tmp0_other_with_cast.o1o_1))
      return false;
    return true;
  };
  function Notification(point, emiseA, rappels, enRetard) {
    this.h1l_1 = point;
    this.i1l_1 = emiseA;
    this.j1l_1 = rappels;
    this.k1l_1 = enRetard;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.j1l_1.j()) {
      // Inline function 'app.zenote.core.rappels.Notification.<anonymous>' call
      var message = "Une notification sans rappel n'a rien \xE0 dire.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Notification).l1l = function () {
    return this.j1l_1.l() === 1 ? single(this.j1l_1).o1l_1 : '' + this.j1l_1.l() + ' choses \xE0 voir maintenant';
  };
  protoOf(Notification).toString = function () {
    return 'Notification(point=' + this.h1l_1.toString() + ', emiseA=' + this.i1l_1.toString() + ', rappels=' + toString_0(this.j1l_1) + ', enRetard=' + toString_0(this.k1l_1) + ')';
  };
  protoOf(Notification).hashCode = function () {
    var result = this.h1l_1.hashCode();
    result = imul(result, 31) + this.i1l_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.j1l_1) | 0;
    result = imul(result, 31) + hashCode(this.k1l_1) | 0;
    return result;
  };
  protoOf(Notification).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Notification))
      return false;
    var tmp0_other_with_cast = other instanceof Notification ? other : THROW_CCE();
    if (!this.h1l_1.equals(tmp0_other_with_cast.h1l_1))
      return false;
    if (!this.i1l_1.equals(tmp0_other_with_cast.i1l_1))
      return false;
    if (!equals(this.j1l_1, tmp0_other_with_cast.j1l_1))
      return false;
    if (!equals(this.k1l_1, tmp0_other_with_cast.k1l_1))
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
    this.s1l_1 = rappel;
    this.t1l_1 = motif;
    this.u1l_1 = options;
  }
  protoOf(Escalade).toString = function () {
    return 'Escalade(rappel=' + this.s1l_1.toString() + ', motif=' + this.t1l_1 + ', options=' + toString_0(this.u1l_1) + ')';
  };
  protoOf(Escalade).hashCode = function () {
    var result = this.s1l_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.t1l_1) | 0;
    result = imul(result, 31) + hashCode(this.u1l_1) | 0;
    return result;
  };
  protoOf(Escalade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Escalade))
      return false;
    var tmp0_other_with_cast = other instanceof Escalade ? other : THROW_CCE();
    if (!this.s1l_1.equals(tmp0_other_with_cast.s1l_1))
      return false;
    if (!(this.t1l_1 === tmp0_other_with_cast.t1l_1))
      return false;
    if (!equals(this.u1l_1, tmp0_other_with_cast.u1l_1))
      return false;
    return true;
  };
  function Companion_19() {
    this.p1o_1 = 3;
  }
  var Companion_instance_20;
  function Companion_getInstance_24() {
    return Companion_instance_20;
  }
  function sam$kotlin_Comparator$0_4(function_0) {
    this.q1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_4).kc = function (a, b) {
    return this.q1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).w2 = function () {
    return this.q1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
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
    return hashCode(this.w2());
  };
  function sam$kotlin_Comparator$0_5(function_0) {
    this.r1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_5).kc = function (a, b) {
    return this.r1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).w2 = function () {
    return this.r1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
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
    return hashCode(this.w2());
  };
  function FileOpportunite$vider$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp = a.m1l_1.s1o_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp$ret$1 = b.m1l_1.s1o_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite$vider$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp = a.s1o_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp$ret$1 = b.s1o_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite$escalades$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.escalades.<anonymous>' call
    var tmp = a.s1l_1.m1l_1.s1o_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.escalades.<anonymous>' call
    var tmp$ret$1 = b.s1l_1.m1l_1.s1o_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite(silences) {
    silences = silences === VOID ? emptyList() : silences;
    this.s1k_1 = silences;
    this.t1k_1 = LinkedHashMap_init_$Create$_0();
    this.u1k_1 = LinkedHashMap_init_$Create$_0();
    this.v1k_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(FileOpportunite).f1l = function (rappel, a) {
    var tmp0_safe_receiver = this.v1k_1.w1(rappel.m1l_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return new Escaladee(tmp0_safe_receiver);
    }
    if (rappel.q1l_1) {
      return new Immediate(rappel, 'rappel critique : pr\xE9sent\xE9 sans attendre un point de rupture');
    }
    var tmp2 = this.t1k_1;
    var tmp3 = rappel.m1l_1;
    // Inline function 'kotlin.collections.set' call
    var value = to(rappel, a);
    tmp2.z1(tmp3, value);
    return new MiseEnFile(rappel, 'en attente du prochain point de rupture');
  };
  protoOf(FileOpportunite).g1l = function (point, a) {
    var tmp0 = this.s1k_1;
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
        if (element.v1o(a)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      return null;
    if (this.t1k_1.j())
      return null;
    var livres = toList(this.t1k_1.c2());
    this.t1k_1.b2();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(livres, 10));
    var _iterator__ex2g4s_0 = livres.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
      var tmp$ret$2 = item.xb_1;
      destination.e(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = FileOpportunite$vider$lambda;
    var tmp$ret$5 = new sam$kotlin_Comparator$0_4(tmp_0);
    var tmp_1 = sortedWith(destination, tmp$ret$5);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = livres.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
      if (element_0.yb_1.j11(a) < 0) {
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
      var tmp$ret$10 = item_0.xb_1.m1l_1;
      destination_1.e(tmp$ret$10);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_2 = FileOpportunite$vider$lambda_0;
    var tmp$ret$13 = new sam$kotlin_Comparator$0_4(tmp_2);
    var tmp$ret$14 = sortedWith(destination_1, tmp$ret$13);
    return new Notification(point, a, tmp_1, tmp$ret$14);
  };
  protoOf(FileOpportunite).w1k = function (rappel) {
    var tmp0_safe_receiver = this.v1k_1.w1(rappel.m1l_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = this.u1k_1.w1(rappel.m1l_1);
    var compte = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) + 1 | 0;
    var tmp2 = this.u1k_1;
    // Inline function 'kotlin.collections.set' call
    var key = rappel.m1l_1;
    tmp2.z1(key, compte);
    if (compte < 3)
      return null;
    this.t1k_1.a2(rappel.m1l_1);
    var escalade = new Escalade(rappel, 'ignor\xE9 ' + compte + " fois : ce rappel ne se repr\xE9sente plus \xE0 l'identique");
    var tmp5 = this.v1k_1;
    // Inline function 'kotlin.collections.set' call
    var key_0 = rappel.m1l_1;
    tmp5.z1(key_0, escalade);
    return escalade;
  };
  protoOf(FileOpportunite).r1l = function () {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = this.v1k_1.c2();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = FileOpportunite$escalades$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_5(tmp);
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
    this.s1o_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.s1o_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.RappelId.<anonymous>' call
      var message = 'Un identifiant de rappel ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(RappelId).toString = function () {
    return this.s1o_1;
  };
  protoOf(RappelId).hashCode = function () {
    return getStringHashCode(this.s1o_1);
  };
  protoOf(RappelId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelId))
      return false;
    var tmp0_other_with_cast = other instanceof RappelId ? other : THROW_CCE();
    if (!(this.s1o_1 === tmp0_other_with_cast.s1o_1))
      return false;
    return true;
  };
  function Rappel(id, elementId, texte, declencheur, critique) {
    critique = critique === VOID ? false : critique;
    this.m1l_1 = id;
    this.n1l_1 = elementId;
    this.o1l_1 = texte;
    this.p1l_1 = declencheur;
    this.q1l_1 = critique;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.o1l_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.Rappel.<anonymous>' call
      var message = "Un rappel sans texte n'a rien \xE0 rappeler.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Rappel).toString = function () {
    return 'Rappel(id=' + this.m1l_1.toString() + ', elementId=' + this.n1l_1.toString() + ', texte=' + this.o1l_1 + ', declencheur=' + toString_0(this.p1l_1) + ', critique=' + this.q1l_1 + ')';
  };
  protoOf(Rappel).hashCode = function () {
    var result = this.m1l_1.hashCode();
    result = imul(result, 31) + this.n1l_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.o1l_1) | 0;
    result = imul(result, 31) + hashCode(this.p1l_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1l_1) | 0;
    return result;
  };
  protoOf(Rappel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rappel))
      return false;
    var tmp0_other_with_cast = other instanceof Rappel ? other : THROW_CCE();
    if (!this.m1l_1.equals(tmp0_other_with_cast.m1l_1))
      return false;
    if (!this.n1l_1.equals(tmp0_other_with_cast.n1l_1))
      return false;
    if (!(this.o1l_1 === tmp0_other_with_cast.o1l_1))
      return false;
    if (!equals(this.p1l_1, tmp0_other_with_cast.p1l_1))
      return false;
    if (!(this.q1l_1 === tmp0_other_with_cast.q1l_1))
      return false;
    return true;
  };
  function TexteSource(captureId, texte, quand, jour) {
    jour = jour === VOID ? null : jour;
    this.w1o_1 = captureId;
    this.x1o_1 = texte;
    this.y1o_1 = quand;
    this.z1o_1 = jour;
  }
  protoOf(TexteSource).toString = function () {
    return 'TexteSource(captureId=' + this.w1o_1.toString() + ', texte=' + this.x1o_1 + ', quand=' + this.y1o_1 + ', jour=' + toString(this.z1o_1) + ')';
  };
  protoOf(TexteSource).hashCode = function () {
    var result = this.w1o_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.x1o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1o_1) | 0;
    result = imul(result, 31) + (this.z1o_1 == null ? 0 : this.z1o_1.hashCode()) | 0;
    return result;
  };
  protoOf(TexteSource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TexteSource))
      return false;
    var tmp0_other_with_cast = other instanceof TexteSource ? other : THROW_CCE();
    if (!this.w1o_1.equals(tmp0_other_with_cast.w1o_1))
      return false;
    if (!(this.x1o_1 === tmp0_other_with_cast.x1o_1))
      return false;
    if (!(this.y1o_1 === tmp0_other_with_cast.y1o_1))
      return false;
    if (!equals(this.z1o_1, tmp0_other_with_cast.z1o_1))
      return false;
    return true;
  };
  function Citation(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.c1i_1 = captureId;
    this.d1i_1 = extrait;
    this.e1i_1 = pourquoi;
    this.f1i_1 = elementId;
  }
  protoOf(Citation).toString = function () {
    return 'Citation(captureId=' + this.c1i_1.toString() + ', extrait=' + this.d1i_1 + ', pourquoi=' + this.e1i_1 + ', elementId=' + toString(this.f1i_1) + ')';
  };
  protoOf(Citation).hashCode = function () {
    var result = this.c1i_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.d1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e1i_1) | 0;
    result = imul(result, 31) + (this.f1i_1 == null ? 0 : this.f1i_1.hashCode()) | 0;
    return result;
  };
  protoOf(Citation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Citation))
      return false;
    var tmp0_other_with_cast = other instanceof Citation ? other : THROW_CCE();
    if (!this.c1i_1.equals(tmp0_other_with_cast.c1i_1))
      return false;
    if (!(this.d1i_1 === tmp0_other_with_cast.d1i_1))
      return false;
    if (!(this.e1i_1 === tmp0_other_with_cast.e1i_1))
      return false;
    if (!equals(this.f1i_1, tmp0_other_with_cast.f1i_1))
      return false;
    return true;
  };
  function Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.w1h_1 = question;
    this.x1h_1 = enonce;
    this.y1h_1 = citations;
    this.z1h_1 = indisponibleHorsLigne;
    this.a1i_1 = nonPrisEnCompte;
  }
  protoOf(Reponse).b1i = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.y1h_1.j();
  };
  protoOf(Reponse).a1p = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    return new Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).b1p = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte, $super) {
    question = question === VOID ? this.w1h_1 : question;
    enonce = enonce === VOID ? this.x1h_1 : enonce;
    citations = citations === VOID ? this.y1h_1 : citations;
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? this.z1h_1 : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? this.a1i_1 : nonPrisEnCompte;
    return $super === VOID ? this.a1p(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) : $super.a1p.call(this, question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).toString = function () {
    return 'Reponse(question=' + this.w1h_1 + ', enonce=' + this.x1h_1 + ', citations=' + toString_0(this.y1h_1) + ', indisponibleHorsLigne=' + toString_0(this.z1h_1) + ', nonPrisEnCompte=' + toString_0(this.a1i_1) + ')';
  };
  protoOf(Reponse).hashCode = function () {
    var result = getStringHashCode(this.w1h_1);
    result = imul(result, 31) + getStringHashCode(this.x1h_1) | 0;
    result = imul(result, 31) + hashCode(this.y1h_1) | 0;
    result = imul(result, 31) + hashCode(this.z1h_1) | 0;
    result = imul(result, 31) + hashCode(this.a1i_1) | 0;
    return result;
  };
  protoOf(Reponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reponse))
      return false;
    var tmp0_other_with_cast = other instanceof Reponse ? other : THROW_CCE();
    if (!(this.w1h_1 === tmp0_other_with_cast.w1h_1))
      return false;
    if (!(this.x1h_1 === tmp0_other_with_cast.x1h_1))
      return false;
    if (!equals(this.y1h_1, tmp0_other_with_cast.y1h_1))
      return false;
    if (!equals(this.z1h_1, tmp0_other_with_cast.z1h_1))
      return false;
    if (!equals(this.a1i_1, tmp0_other_with_cast.a1i_1))
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
      var tmp$ret$0 = new Citation(item.z1i_1, item.b1j_1, libelle(RechercheLocale_getInstance(), item.a1j_1) + ' de ' + periode.e1p_1, item.y1i_1);
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
      var tmp$ret$3 = item_0.c1i_1;
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
      if (!dejaCitees.p1(element.w1o_1)) {
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
      var tmp$ret$9 = new Citation(item_1.w1o_1, item_1.x1o_1, 'capture du ' + item_1.y1o_1);
      destination_2.e(tmp$ret$9);
    }
    var surCaptures = destination_2;
    var tmp = plus_1(surElements, surCaptures);
    var tmp_0 = RechercheLocale$tout$lambda;
    var citations = take_0(sortedWith(tmp, compareBy([tmp_0, RechercheLocale$tout$lambda_0])), max);
    return reponse($this, '', citations, emptyList());
  }
  function avec(_this__u8e3s4, $this, ecarte) {
    return ecarte.j() ? _this__u8e3s4 : _this__u8e3s4.b1p(VOID, VOID, VOID, VOID, ecarte);
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
    switch (type.e2_1) {
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
    switch (verdict.e2_1) {
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
    switch (verdict.e2_1) {
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
  function sam$kotlin_Comparator$0_6(function_0) {
    this.f1p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_6).kc = function (a, b) {
    return this.f1p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).w2 = function () {
    return this.f1p_1;
  };
  protoOf(sam$kotlin_Comparator$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
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
    return hashCode(this.w2());
  };
  function RechercheLocale$parMots$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp = b.xb_1;
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp$ret$1 = a.xb_1;
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
        var tmp_0 = a.yb_1.c1i_1.g1i_1;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp$ret$1 = b.yb_1.c1i_1.g1i_1;
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
        var tmp0_safe_receiver = a.yb_1.f1i_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1i_1;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp0_safe_receiver_0 = b.yb_1.f1i_1;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.h1i_1;
        var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function RechercheLocale$tout$lambda(it) {
    return it.c1i_1.g1i_1;
  }
  function RechercheLocale$tout$lambda_0(it) {
    var tmp0_safe_receiver = it.f1i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1i_1;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function RechercheLocale$parPersonne$lambda(it) {
    return etatOrdinal(RechercheLocale_getInstance(), it.i1j_1);
  }
  function RechercheLocale$parPersonne$lambda_0(it) {
    return it.y1i_1.h1i_1;
  }
  function RechercheLocale() {
    RechercheLocale_instance = this;
    this.d1m_1 = 'Rien \xE0 ce sujet dans ce qui a \xE9t\xE9 captur\xE9.';
    this.e1m_1 = listOf(['analyse des captures pas encore trait\xE9es', 'reformulation de la r\xE9ponse en langage naturel']);
    this.f1m_1 = 10;
  }
  protoOf(RechercheLocale).g1p = function (requete, elements, captures, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.e1m_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$0 = to(item, Texte_getInstance().s1n(requete, item.b1j_1));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element.yb_1 > 0.0) {
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
      var element_0 = item_0.zb();
      var note = item_0.ac();
      var tmp$ret$6 = to(note, new Citation(element_0.z1i_1, element_0.b1j_1, '\xE9l\xE9ment \xAB ' + libelle(RechercheLocale_getInstance(), element_0.a1j_1) + ' \xBB contenant les mots cherch\xE9s', element_0.y1i_1));
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
      var tmp$ret$9 = item_1.yb_1.c1i_1;
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
      if (!dejaCitees.p1(element_1.w1o_1)) {
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
      var tmp$ret$15 = to(item_2, Texte_getInstance().s1n(requete, item_2.x1o_1));
      destination_4.e(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_5 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_5 = destination_4.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element_2.yb_1 > 0.0) {
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
      var source = item_3.zb();
      var note_0 = item_3.ac();
      var tmp$ret$21 = to(note_0, new Citation(source.w1o_1, source.x1o_1, 'capture du ' + source.y1o_1 + ' contenant les mots cherch\xE9s'));
      destination_6.e(tmp$ret$21);
    }
    var surCaptures = destination_6;
    var tmp = plus_1(surElements, surCaptures);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = RechercheLocale$parMots$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_6(tmp_0);
    var tmp_1 = RechercheLocale$parMots$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_6(tmp_1);
    var tmp_2 = RechercheLocale$parMots$lambda_1(this_1);
    var tmp$ret$26 = new sam$kotlin_Comparator$0_6(tmp_2);
    // Inline function 'kotlin.collections.map' call
    var this_2 = take_0(sortedWith(tmp, tmp$ret$26), max);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_7 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_7 = this_2.g();
    while (_iterator__ex2g4s_7.h()) {
      var item_4 = _iterator__ex2g4s_7.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$27 = item_4.yb_1;
      destination_7.e(tmp$ret$27);
    }
    var citations = destination_7;
    return reponse(this, requete, citations, indisponibles);
  };
  protoOf(RechercheLocale).g1m = function (requete, elements, captures, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.g1p(requete, elements, captures, reseau, max) : $super.g1p.call(this, requete, elements, captures, reseau, max);
  };
  protoOf(RechercheLocale).h1p = function (requete, elements, captures, aujourdhui, reseau, max) {
    var tmp;
    if (RepereTemporel_getInstance().m1p(requete) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parQuestion.<anonymous>' call
      tmp = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
    }
    var ecarte = listOfNotNull_0(tmp);
    var tmp1_elvis_lhs = RepereTemporel_getInstance().n1p(requete, aujourdhui);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return avec(this.g1p(requete, elements, captures, reseau, max), this, ecarte);
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
      if (!(element.z1o_1 == null) && repere.o1p_1.q1p(element.z1o_1)) {
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
      var tmp$ret$5 = item.w1o_1;
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
      if (idsPeriode.p1(element_0.z1i_1)) {
        destination_1.e(element_0);
      }
    }
    var elementsPeriode = destination_1;
    var reste = RepereTemporel_getInstance().r1p(requete, repere);
    var parLesMots = isBlank(reste) ? null : this.g1p(reste, elementsPeriode, dansLaPeriode, reseau, max);
    var motsMuets = parLesMots == null || parLesMots.y1h_1.j();
    var brut = motsMuets ? tout(this, dansLaPeriode, elementsPeriode, repere.o1p_1, max) : ensureNotNull(parLesMots);
    var enonce = brut.y1h_1.j() ? 'Rien de captur\xE9 ' + repere.o1p_1.e1p_1 + '.' : motsMuets && !isBlank(reste) ? 'Aucun de ces mots dans les captures de ' + repere.o1p_1.e1p_1 + ' ; ' + ('voici les ' + brut.y1h_1.l() + " qu'elle contient.") : '' + brut.y1h_1.l() + ' \xE9l\xE9ment(s) de ' + repere.o1p_1.e1p_1 + ', ' + 'chacun rattach\xE9 \xE0 sa capture source.';
    return brut.b1p(requete, enonce, VOID, reseau ? emptyList() : this.e1m_1, ecarte);
  };
  protoOf(RechercheLocale).i1m = function (requete, elements, captures, aujourdhui, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.h1p(requete, elements, captures, aujourdhui, reseau, max) : $super.h1p.call(this, requete, elements, captures, aujourdhui, reseau, max);
  };
  protoOf(RechercheLocale).s1p = function (personne, elements, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.e1m_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      if (!(element.f1j_1 == null) && Texte_getInstance().t1p(element.f1j_1, personne)) {
        destination.e(element);
      }
    }
    var tmp = destination;
    var tmp_0 = RechercheLocale$parPersonne$lambda;
    // Inline function 'kotlin.collections.map' call
    var this_0 = take_0(sortedWith(tmp, compareBy([tmp_0, RechercheLocale$parPersonne$lambda_0])), max);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      var tmp$ret$3 = new Citation(item.z1i_1, item.b1j_1, libelle(RechercheLocale_getInstance(), item.a1j_1) + ' ' + etat(RechercheLocale_getInstance(), item.i1j_1) + ' envers ' + personne, item.y1i_1);
      destination_0.e(tmp$ret$3);
    }
    var citations = destination_0;
    return reponse(this, 'ce qui est en cours avec ' + personne, citations, indisponibles);
  };
  protoOf(RechercheLocale).k1m = function (personne, elements, reseau, max, $super) {
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.s1p(personne, elements, reseau, max) : $super.s1p.call(this, personne, elements, reseau, max);
  };
  var RechercheLocale_instance;
  function RechercheLocale_getInstance() {
    if (RechercheLocale_instance == null)
      new RechercheLocale();
    return RechercheLocale_instance;
  }
  function Periode(du, au, libelle) {
    this.c1p_1 = du;
    this.d1p_1 = au;
    this.e1p_1 = libelle;
    // Inline function 'kotlin.require' call
    if (!(this.c1p_1.p11(this.d1p_1) <= 0)) {
      // Inline function 'app.zenote.core.recherche.Periode.<anonymous>' call
      var message = 'Une p\xE9riode dont le d\xE9but suit la fin ne d\xE9signe aucun jour.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Periode).q1p = function (jour) {
    return jour.p11(this.c1p_1) >= 0 && jour.p11(this.d1p_1) <= 0;
  };
  protoOf(Periode).toString = function () {
    return 'Periode(du=' + this.c1p_1.toString() + ', au=' + this.d1p_1.toString() + ', libelle=' + this.e1p_1 + ')';
  };
  protoOf(Periode).hashCode = function () {
    var result = this.c1p_1.hashCode();
    result = imul(result, 31) + this.d1p_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.e1p_1) | 0;
    return result;
  };
  protoOf(Periode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Periode))
      return false;
    var tmp0_other_with_cast = other instanceof Periode ? other : THROW_CCE();
    if (!this.c1p_1.equals(tmp0_other_with_cast.c1p_1))
      return false;
    if (!this.d1p_1.equals(tmp0_other_with_cast.d1p_1))
      return false;
    if (!(this.e1p_1 === tmp0_other_with_cast.e1p_1))
      return false;
    return true;
  };
  function Repere(periode, expression) {
    this.o1p_1 = periode;
    this.p1p_1 = expression;
  }
  protoOf(Repere).toString = function () {
    return 'Repere(periode=' + this.o1p_1.toString() + ', expression=' + this.p1p_1 + ')';
  };
  protoOf(Repere).hashCode = function () {
    var result = this.o1p_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.p1p_1) | 0;
    return result;
  };
  protoOf(Repere).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Repere))
      return false;
    var tmp0_other_with_cast = other instanceof Repere ? other : THROW_CCE();
    if (!this.o1p_1.equals(tmp0_other_with_cast.o1p_1))
      return false;
    if (!(this.p1p_1 === tmp0_other_with_cast.p1p_1))
      return false;
    return true;
  };
  function aplatir($this, requete) {
    // Inline function 'kotlin.text.map' call
    var this_0 = Texte_getInstance().q1n(requete);
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
    var lundi = minus(date, DatePeriod_init_$Create$(VOID, VOID, get_isoDayNumber(date.js()) - 1 | 0));
    return new Periode(lundi, plus_2(lundi, DatePeriod_init_$Create$(VOID, VOID, 6)), libelle);
  }
  function moisDe($this, date, libelle) {
    var premier = LocalDate_init_$Create$(date.rn(), date.o11(), 1);
    return new Periode(premier, minus(plus_2(premier, DatePeriod_init_$Create$(VOID, 1)), DatePeriod_init_$Create$(VOID, VOID, 1)), libelle);
  }
  function dernier($this, date, jourVoulu, libelle) {
    var recul = get_isoDayNumber(date.js()) - get_isoDayNumber(jourVoulu) | 0;
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
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? $this.l1p_1.w1(apres.k(0)) : tmp1_elvis_lhs;
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
    var recul = _destruct__k2r9zo.zb();
    var nom = _destruct__k2r9zo.ac();
    var centre = minus(aujourdhui, recul);
    var marge = nom === 'jour' ? 1 : 3;
    return new Repere(new Periode(minus(centre, DatePeriod_init_$Create$(VOID, VOID, marge)), minOf(plus_2(centre, DatePeriod_init_$Create$(VOID, VOID, marge)), aujourdhui), 'il y a environ ' + combien + ' ' + nom + (combien > 1 && !(nom === 'mois') ? 's' : '')), marqueur + ' ' + apres.k(0) + ' ' + unite);
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
    var samedi = dernier(RepereTemporel_getInstance(), d, DayOfWeek_SATURDAY_getInstance(), '').c1p_1;
    return new Periode(samedi, plus_2(samedi, DatePeriod_init_$Create$(VOID, VOID, 1)), 'le week-end dernier');
  }
  function RepereTemporel$formes$lambda_8(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.rn(), d.o11(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
  }
  function RepereTemporel$formes$lambda_9(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.rn(), d.o11(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
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
    this.i1p_1 = listOf(['en voiture', 'dans le train', 'dans l avion', 'en marchant', 'en reunion', 'au bureau', 'a la maison', 'au telephone', 'en visio', 'dans le metro']);
    this.j1p_1 = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
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
    tmp.k1p_1 = listOf([tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, to('dimanche dernier', RepereTemporel$formes$lambda_17)]);
    this.l1p_1 = mapOf([to('un', 1), to('une', 1), to('deux', 2), to('trois', 3), to('quatre', 4), to('cinq', 5), to('six', 6), to('sept', 7), to('huit', 8), to('neuf', 9), to('dix', 10), to('quinze', 15)]);
  }
  protoOf(RepereTemporel).m1p = function (requete) {
    var plie = aplatir(this, requete);
    var tmp0 = this.i1p_1;
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
  protoOf(RepereTemporel).n1p = function (requete, aujourdhui) {
    var plie = aplatir(this, requete);
    var _iterator__ex2g4s = this.k1p_1.g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      var expression = _destruct__k2r9zo.zb();
      var calcul = _destruct__k2r9zo.ac();
      if (contains(plie, ' ' + expression + ' '))
        return new Repere(calcul(aujourdhui), expression);
    }
    return depuisCompte(this, plie, aujourdhui);
  };
  protoOf(RepereTemporel).r1p = function (requete, repere) {
    var motsDuRepere = toSet(Texte_getInstance().u1p(repere.p1p_1));
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = Texte_getInstance().u1p(requete);
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
    this.z1j_1 = retenues;
    this.a1k_1 = demeurentEnFile;
    this.b1k_1 = motif;
  }
  protoOf(RevueReduite).h1k = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.a1k_1.j();
  };
  protoOf(RevueReduite).toString = function () {
    return 'RevueReduite(retenues=' + toString_0(this.z1j_1) + ', demeurentEnFile=' + toString_0(this.a1k_1) + ', motif=' + this.b1k_1 + ')';
  };
  protoOf(RevueReduite).hashCode = function () {
    var result = hashCode(this.z1j_1);
    result = imul(result, 31) + hashCode(this.a1k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1k_1) | 0;
    return result;
  };
  protoOf(RevueReduite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueReduite))
      return false;
    var tmp0_other_with_cast = other instanceof RevueReduite ? other : THROW_CCE();
    if (!equals(this.z1j_1, tmp0_other_with_cast.z1j_1))
      return false;
    if (!equals(this.a1k_1, tmp0_other_with_cast.a1k_1))
      return false;
    if (!(this.b1k_1 === tmp0_other_with_cast.b1k_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_7(function_0) {
    this.v1p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_7).kc = function (a, b) {
    return this.v1p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).w2 = function () {
    return this.v1p_1;
  };
  protoOf(sam$kotlin_Comparator$0_7).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_7).hashCode = function () {
    return hashCode(this.w2());
  };
  function Arriere$revueReduite$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs = b.c1k_1.e1j_1;
    var tmp = (tmp0_elvis_lhs == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs).e2_1;
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs_0 = a.c1k_1.e1j_1;
    var tmp$ret$1 = (tmp0_elvis_lhs_0 == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs_0).e2_1;
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
        var tmp_0 = a.d1k_1.e2_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.d1k_1.e2_1;
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
        var tmp_0 = a.g1k().h1i_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.g1k().h1i_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Arriere() {
    this.x1j_1 = 12;
  }
  protoOf(Arriere).w1p = function (entrees, charge) {
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
    var this_0 = new sam$kotlin_Comparator$0_7(tmp);
    var tmp_0 = Arriere$revueReduite$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_7(tmp_0);
    var tmp_1 = Arriere$revueReduite$lambda_1(this_1);
    var tmp$ret$3 = new sam$kotlin_Comparator$0_7(tmp_1);
    var parImportance = sortedWith(entrees, tmp$ret$3);
    var retenues = take_0(parImportance, charge);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(retenues, 10));
    var _iterator__ex2g4s = retenues.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
      var tmp$ret$4 = item.g1k();
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
      if (gardees.p1(element.g1k())) {
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
      if (!gardees.p1(element_0.g1k())) {
        destination_1.e(element_0);
      }
    }
    return new RevueReduite(tmp_2, destination_1, 'Beaucoup de choses en attente. Voici les ' + charge + ' plus lourdes ou ' + 'les plus press\xE9es ; le reste demeure en file, intact.');
  };
  protoOf(Arriere).y1j = function (entrees, charge, $super) {
    charge = charge === VOID ? 12 : charge;
    return $super === VOID ? this.w1p(entrees, charge) : $super.w1p.call(this, entrees, charge);
  };
  var Arriere_instance;
  function Arriere_getInstance() {
    return Arriere_instance;
  }
  function EntreeRevue(element, urgence, aConfirmer, planAFournir) {
    this.c1k_1 = element;
    this.d1k_1 = urgence;
    this.e1k_1 = aConfirmer;
    this.f1k_1 = planAFournir;
  }
  protoOf(EntreeRevue).g1k = function () {
    return this.c1k_1.y1i_1;
  };
  protoOf(EntreeRevue).toString = function () {
    return 'EntreeRevue(element=' + this.c1k_1.toString() + ', urgence=' + this.d1k_1.toString() + ', aConfirmer=' + this.e1k_1 + ', planAFournir=' + this.f1k_1 + ')';
  };
  protoOf(EntreeRevue).hashCode = function () {
    var result = this.c1k_1.hashCode();
    result = imul(result, 31) + this.d1k_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e1k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f1k_1) | 0;
    return result;
  };
  protoOf(EntreeRevue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevue))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevue ? other : THROW_CCE();
    if (!this.c1k_1.equals(tmp0_other_with_cast.c1k_1))
      return false;
    if (!this.d1k_1.equals(tmp0_other_with_cast.d1k_1))
      return false;
    if (!(this.e1k_1 === tmp0_other_with_cast.e1k_1))
      return false;
    if (!(this.f1k_1 === tmp0_other_with_cast.f1k_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_8(function_0) {
    this.x1p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_8).kc = function (a, b) {
    return this.x1p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_8).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_8).w2 = function () {
    return this.x1p_1;
  };
  protoOf(sam$kotlin_Comparator$0_8).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w2(), other.w2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_8).hashCode = function () {
    return hashCode(this.w2());
  };
  function FileRevue$ordreInterne$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp = a.d1k_1.e2_1;
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp$ret$1 = b.d1k_1.e2_1;
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
        var tmp_0 = b.e1k_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = a.e1k_1;
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
        var tmp_0 = a.g1k().h1i_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = b.g1k().h1i_1;
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
    var this_0 = new sam$kotlin_Comparator$0_8(tmp_0);
    var tmp_1 = FileRevue$ordreInterne$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_8(tmp_1);
    var tmp_2 = FileRevue$ordreInterne$lambda_1(this_1);
    tmp.v1j_1 = new sam$kotlin_Comparator$0_8(tmp_2);
  }
  protoOf(FileRevue).w1j = function (element, aujourdhui) {
    return new EntreeRevue(element, Priorisation_getInstance().h1o(element.d1j_1, aujourdhui), element.j1j_1, element.a1j_1.w1n() && element.h1j_1 == null);
  };
  var FileRevue_instance;
  function FileRevue_getInstance() {
    if (FileRevue_instance == null)
      new FileRevue();
    return FileRevue_instance;
  }
  function Suivi(elementId, derniereNouvelle) {
    this.y1p_1 = elementId;
    this.z1p_1 = derniereNouvelle;
  }
  protoOf(Suivi).toString = function () {
    return 'Suivi(elementId=' + this.y1p_1.toString() + ', derniereNouvelle=' + this.z1p_1.toString() + ')';
  };
  protoOf(Suivi).hashCode = function () {
    var result = this.y1p_1.hashCode();
    result = imul(result, 31) + this.z1p_1.hashCode() | 0;
    return result;
  };
  protoOf(Suivi).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Suivi))
      return false;
    var tmp0_other_with_cast = other instanceof Suivi ? other : THROW_CCE();
    if (!this.y1p_1.equals(tmp0_other_with_cast.y1p_1))
      return false;
    if (!this.z1p_1.equals(tmp0_other_with_cast.z1p_1))
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
    this.m1k_1 = element;
    this.n1k_1 = motif;
    this.o1k_1 = options;
  }
  protoOf(PropositionRelance).toString = function () {
    return 'PropositionRelance(element=' + this.m1k_1.toString() + ', motif=' + this.n1k_1 + ', options=' + toString_0(this.o1k_1) + ')';
  };
  protoOf(PropositionRelance).hashCode = function () {
    var result = this.m1k_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.n1k_1) | 0;
    result = imul(result, 31) + hashCode(this.o1k_1) | 0;
    return result;
  };
  protoOf(PropositionRelance).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionRelance))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionRelance ? other : THROW_CCE();
    if (!this.m1k_1.equals(tmp0_other_with_cast.m1k_1))
      return false;
    if (!(this.n1k_1 === tmp0_other_with_cast.n1k_1))
      return false;
    if (!equals(this.o1k_1, tmp0_other_with_cast.o1k_1))
      return false;
    return true;
  };
  function engagement($this, element, aujourdhui) {
    var tmp0_elvis_lhs = element.d1j_1;
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
    var tmp1_safe_receiver = element.f1j_1;
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
    var delai = $this.a1q(element.f1j_1, delaisObserves);
    if (silence <= delai)
      return null;
    var tmp0_elvis_lhs = element.f1j_1;
    var qui = tmp0_elvis_lhs == null ? 'cette personne' : tmp0_elvis_lhs;
    var tmp0 = delaisObserves.x1();
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
        var tmp0_elvis_lhs_0 = element.f1j_1;
        if (tmp_0.t1p(element_0, tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0)) {
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
    var tmp0_safe_receiver = it.m1k_1.d1j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return tmp1_elvis_lhs == null ? '9999' : tmp1_elvis_lhs;
  }
  function Relance$aRelancer$lambda_0(it) {
    return it.m1k_1.y1i_1.h1i_1;
  }
  function Relance() {
    this.j1k_1 = 3;
    this.k1k_1 = 7;
  }
  protoOf(Relance).a1q = function (personne, observes) {
    if (personne == null)
      return 7;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = observes.y1();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
      if (Texte_getInstance().t1p(element.s1(), personne)) {
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
      var minValue = minElem.s1();
      do {
        var e = iterator.i();
        // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
        var v = e.s1();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.h());
      tmp$ret$3 = minElem;
    }
    var trouve = tmp$ret$3;
    var tmp1_elvis_lhs = trouve == null ? null : trouve.t1();
    return tmp1_elvis_lhs == null ? 7 : tmp1_elvis_lhs;
  };
  protoOf(Relance).l1k = function (elements, aujourdhui, suivis, delaisObserves) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(suivis, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = suivis.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.y1p_1, element.z1p_1);
      destination.z1(pair.xb_1, pair.yb_1);
    }
    var parElement = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = elements.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      if (element_0.i1j_1.equals(Verdict_ACCEPTE_getInstance())) {
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
      switch (element_1.a1j_1.e2_1) {
        case 1:
          tmp = engagement(Relance_instance, element_1, aujourdhui);
          break;
        case 2:
          var tmp_0 = Relance_instance;
          var tmp1_elvis_lhs = parElement.w1(element_1.y1i_1);
          tmp = attente(tmp_0, element_1, tmp1_elvis_lhs == null ? element_1.d1j_1 : tmp1_elvis_lhs, aujourdhui, delaisObserves);
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
    this.b1q_1 = mot;
    this.c1q_1 = suite;
    var tmp = this;
    // Inline function 'kotlin.text.filter' call
    var tmp0 = Texte_getInstance().q1n(this.b1q_1);
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
          destination.j7(element);
        }
      }
       while (inductionVariable < last);
    tmp.d1q_1 = destination.toString();
    var tmp_0 = this;
    var tmp_1;
    var tmp_2;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.d1q_1;
    if (charSequenceLength(this_0) > 0) {
      var tmp0_safe_receiver = firstOrNull_0(this.b1q_1);
      var tmp_3;
      var tmp_4 = tmp0_safe_receiver;
      if ((tmp_4 == null ? null : new Char(tmp_4)) == null) {
        tmp_3 = null;
      } else {
        tmp_3 = isUpperCase(tmp0_safe_receiver);
      }
      tmp_2 = !(tmp_3 === true);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = estAllongementDeBruit(Disfluences_getInstance(), this.d1q_1);
    } else {
      tmp_1 = false;
    }
    tmp_0.e1q_1 = tmp_1;
    var tmp_5 = this;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp0_safe_receiver_0 = firstOrNull_0(this.b1q_1);
    var tmp_9;
    var tmp_10 = tmp0_safe_receiver_0;
    if ((tmp_10 == null ? null : new Char(tmp_10)) == null) {
      tmp_9 = null;
    } else {
      tmp_9 = isUpperCase(tmp0_safe_receiver_0);
    }
    if (tmp_9 === true) {
      tmp_8 = true;
    } else {
      var tmp0_0 = this.d1q_1;
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
      tmp_8 = tmp$ret$5;
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      tmp_7 = Disfluences_getInstance().x1l_1.p1(this.d1q_1);
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = Disfluences_getInstance().y1l_1.p1(this.d1q_1);
    }
    tmp_5.f1q_1 = tmp_6;
  }
  function estAllongementDeBruit($this, forme) {
    if ($this.w1l_1.p1(forme))
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
        this_0.j7(element);
      }
    }
    var ecrasee = this_0.toString();
    return $this.w1l_1.p1(ecrasee);
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
              if (!(jetons.k(it).d1q_1 === jetons.k(it + taille | 0).d1q_1)) {
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
              var this_0 = jetons.k(it_0).d1q_1;
              if (charSequenceLength(this_0) === 0) {
                tmp_3 = true;
              } else {
                tmp_3 = jetons.k(it_0).f1q_1;
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
    return it.b1q_1 + it.c1q_1;
  }
  function Disfluences() {
    Disfluences_instance = this;
    this.w1l_1 = setOf_0(['euh', 'heu', 'eh', 'hum', 'hmm', 'mmh', 'mm', 'hein', 'ben', 'bah', 'beh']);
    this.x1l_1 = setOf_0(['ne', 'n', 'pas', 'non', 'jamais', 'rien', 'aucun', 'aucune', 'ni', 'sans']);
    this.y1l_1 = setOf_0(['zero', 'un', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'cent', 'cents', 'mille', 'million', 'millions', 'milliard', 'milliards', 'demi', 'quart']);
    this.z1l_1 = 3;
  }
  protoOf(Disfluences).a1m = function (brut) {
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
      if (!element.e1q_1) {
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
    this.n1n_1 = '\xE0\xE1\xE2\xE3\xE4\xE5\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF1\xF2\xF3\xF4\xF5\xF6\xF9\xFA\xFB\xFC\xFD\xFF';
    this.o1n_1 = 'aaaaaaceeeeiiiinooooouuuuyy';
    this.p1n_1 = setOf_0(['le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux', 'et', 'ou', 'a', '\xE0', 'en', 'dans', 'sur', 'pour', 'par', 'avec', 'que', 'qui', 'quoi', 'ce', 'cet', 'cette', 'ces', 'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'est', 'sont', 'ai', 'as', 'ont', 'etait', 'ete', 'pas', 'ne', 'plus']);
  }
  protoOf(Texte).q1n = function (texte) {
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
      this_0.j7(i >= 0 ? charSequenceGet('aaaaaaceeeeiiiinooooouuuuyy', i) : element);
    }
    return this_0.toString();
  };
  protoOf(Texte).u1p = function (texte) {
    // Inline function 'kotlin.text.map' call
    var this_0 = this.q1n(texte);
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
      if (element.length > 1 && !Texte_getInstance().p1n_1.p1(element)) {
        destination_0.e(element);
      }
    }
    return destination_0;
  };
  protoOf(Texte).g1q = function (texte) {
    return toSet(this.u1p(texte));
  };
  protoOf(Texte).s1n = function (requete, texte) {
    var demandes = this.g1q(requete);
    if (demandes.j())
      return 0.0;
    var presents = this.g1q(texte);
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
  protoOf(Texte).t1p = function (a, b) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(a) ? a : THROW_CCE()));
    var tmp = this.q1n(tmp$ret$0);
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1 = toString_0(trim(isCharSequence(b) ? b : THROW_CCE()));
    return tmp === this.q1n(tmp$ret$1);
  };
  var Texte_instance;
  function Texte_getInstance() {
    if (Texte_instance == null)
      new Texte();
    return Texte_instance;
  }
  function ZeNoteRegles() {
    this.version = '9';
  }
  protoOf(ZeNoteRegles).maintenant = function (elementsJson, aujourdhui) {
    return Regles_getInstance().m1j(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).revue = function (elementsJson, aujourdhui) {
    return Regles_getInstance().u1j(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).transcriptionLisible = function (brut) {
    return Regles_getInstance().v1l(brut);
  };
  protoOf(ZeNoteRegles).filtrerAncrage = function (texteSource, elementsJson, passagesIncertainsJson) {
    return Regles_getInstance().b1m(texteSource, elementsJson, passagesIncertainsJson);
  };
  protoOf(ZeNoteRegles).relances = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    return Regles_getInstance().i1k(elementsJson, aujourdhui, suivisJson, delaisJson);
  };
  protoOf(ZeNoteRegles).rechercherParMots = function (requete, elementsJson, capturesJson, reseau) {
    return Regles_getInstance().c1m(requete, elementsJson, capturesJson, reseau);
  };
  protoOf(ZeNoteRegles).rechercherParQuestion = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
    return Regles_getInstance().h1m(requete, elementsJson, capturesJson, aujourdhui, reseau);
  };
  protoOf(ZeNoteRegles).rappels = function (elementsJson, maintenant, suivisJson) {
    return Regles_getInstance().p1k(elementsJson, maintenant, suivisJson);
  };
  protoOf(ZeNoteRegles).referencesAResoudre = function (capturesJson, elementsJson, maintenant) {
    return Regles_getInstance().l1m(capturesJson, elementsJson, maintenant);
  };
  protoOf(ZeNoteRegles).rechercherParPersonne = function (personne, elementsJson, reseau) {
    return Regles_getInstance().j1m(personne, elementsJson, reseau);
  };
  protoOf(ZeNoteRegles).h1q = function () {
    return this.version;
  };
  var ZeNoteRegles_instance;
  function ZeNoteRegles_getInstance() {
    return ZeNoteRegles_instance;
  }
  //region block: post-declaration
  protoOf($serializer).vj = typeParametersSerializers;
  protoOf($serializer_0).vj = typeParametersSerializers;
  protoOf($serializer_1).vj = typeParametersSerializers;
  protoOf($serializer_2).vj = typeParametersSerializers;
  protoOf($serializer_3).vj = typeParametersSerializers;
  protoOf($serializer_4).vj = typeParametersSerializers;
  protoOf($serializer_5).vj = typeParametersSerializers;
  protoOf($serializer_6).vj = typeParametersSerializers;
  protoOf($serializer_7).vj = typeParametersSerializers;
  protoOf($serializer_8).vj = typeParametersSerializers;
  protoOf($serializer_9).vj = typeParametersSerializers;
  protoOf($serializer_10).vj = typeParametersSerializers;
  protoOf($serializer_11).vj = typeParametersSerializers;
  protoOf($serializer_12).vj = typeParametersSerializers;
  protoOf($serializer_13).vj = typeParametersSerializers;
  protoOf($serializer_14).vj = typeParametersSerializers;
  protoOf($serializer_15).vj = typeParametersSerializers;
  protoOf($serializer_16).vj = typeParametersSerializers;
  protoOf($serializer_17).vj = typeParametersSerializers;
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
  ResolutionReferences_instance = new ResolutionReferences();
  Companion_instance_19 = new Companion_18();
  Companion_instance_20 = new Companion_19();
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

