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
  var protoOf = kotlin_kotlin.$_$.a6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.l5;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.h2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.o8;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var initMetadataForObject = kotlin_kotlin.$_$.p5;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.z5;
  var toString = kotlin_kotlin.$_$.a9;
  var getStringHashCode = kotlin_kotlin.$_$.i5;
  var getNumberHashCode = kotlin_kotlin.$_$.g5;
  var getBooleanHashCode = kotlin_kotlin.$_$.f5;
  var equals = kotlin_kotlin.$_$.d5;
  var initMetadataForClass = kotlin_kotlin.$_$.k5;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var emptyList = kotlin_kotlin.$_$.a3;
  var toString_0 = kotlin_kotlin.$_$.d6;
  var hashCode = kotlin_kotlin.$_$.j5;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.o;
  var sortedWith = kotlin_kotlin.$_$.h4;
  var isBlank = kotlin_kotlin.$_$.b7;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.n;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var Companion_instance = kotlin_kotlin.$_$.g2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.p;
  var Companion_getInstance_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.q;
  var toInstant = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.w;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.a2;
  var createFailure = kotlin_kotlin.$_$.s8;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.c2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.b2;
  var until = kotlin_kotlin.$_$.l6;
  var Collection = kotlin_kotlin.$_$.j2;
  var isInterface = kotlin_kotlin.$_$.s5;
  var listOfNotNull = kotlin_kotlin.$_$.r3;
  var coerceIn = kotlin_kotlin.$_$.i6;
  var FunctionAdapter = kotlin_kotlin.$_$.t4;
  var Comparator = kotlin_kotlin.$_$.g8;
  var compareValues = kotlin_kotlin.$_$.o4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var compareTo = kotlin_kotlin.$_$.b5;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.f2;
  var DurationUnit_MINUTES_getInstance = kotlin_kotlin.$_$.e;
  var toDuration = kotlin_kotlin.$_$.c8;
  var mapCapacity = kotlin_kotlin.$_$.u3;
  var coerceAtLeast = kotlin_kotlin.$_$.g6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var getValue = kotlin_kotlin.$_$.g3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.e2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Duration__compareTo_impl_pchp0f = kotlin_kotlin.$_$.o1;
  var ensureNotNull = kotlin_kotlin.$_$.t8;
  var to = kotlin_kotlin.$_$.b9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y8;
  var setOf = kotlin_kotlin.$_$.c4;
  var equals_0 = kotlin_kotlin.$_$.x6;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.x;
  var Enum = kotlin_kotlin.$_$.j8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var emptySet = kotlin_kotlin.$_$.c3;
  var toSet = kotlin_kotlin.$_$.m4;
  var take = kotlin_kotlin.$_$.j4;
  var toList = kotlin_kotlin.$_$.k4;
  var isCharSequence = kotlin_kotlin.$_$.r5;
  var trim = kotlin_kotlin.$_$.a8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var padStart = kotlin_kotlin.$_$.j7;
  var plus = kotlin_kotlin.$_$.z3;
  var KtMap = kotlin_kotlin.$_$.m2;
  var getOrNull = kotlin_kotlin.$_$.f3;
  var _Duration___get_inWholeDays__impl__7bvpxz = kotlin_kotlin.$_$.p1;
  var charSequenceLength = kotlin_kotlin.$_$.z4;
  var charArrayOf = kotlin_kotlin.$_$.w4;
  var split = kotlin_kotlin.$_$.o7;
  var take_0 = kotlin_kotlin.$_$.v7;
  var joinToString = kotlin_kotlin.$_$.k3;
  var firstOrNull = kotlin_kotlin.$_$.d3;
  var THROW_IAE = kotlin_kotlin.$_$.p8;
  var enumEntries = kotlin_kotlin.$_$.s4;
  var Long = kotlin_kotlin.$_$.m8;
  var toLong = kotlin_kotlin.$_$.c6;
  var compareBy = kotlin_kotlin.$_$.n4;
  var _Duration___get_inWholeMinutes__impl__dognoh = kotlin_kotlin.$_$.q1;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.r;
  var sorted = kotlin_kotlin.$_$.i4;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var addAll = kotlin_kotlin.$_$.o2;
  var substringBefore = kotlin_kotlin.$_$.u7;
  var replace = kotlin_kotlin.$_$.n7;
  var contains = kotlin_kotlin.$_$.w6;
  var singleOrNull = kotlin_kotlin.$_$.e4;
  var LocalTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.l;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.t;
  var LocalDateTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.j;
  var contains_0 = kotlin_kotlin.$_$.v6;
  var Companion_getInstance_4 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.m;
  var plus_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.v;
  var toInt = kotlin_kotlin.$_$.y7;
  var LocalDateTime_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.k;
  var single = kotlin_kotlin.$_$.f4;
  var listOf = kotlin_kotlin.$_$.t3;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var lastOrNull = kotlin_kotlin.$_$.o3;
  var mutableListOf = kotlin_kotlin.$_$.w3;
  var first = kotlin_kotlin.$_$.e3;
  var trimEnd = kotlin_kotlin.$_$.z7;
  var setOf_0 = kotlin_kotlin.$_$.d4;
  var DayOfWeek_MONDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DayOfWeek_TUESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.f;
  var DayOfWeek_WEDNESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.g;
  var DayOfWeek_THURSDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var DayOfWeek_FRIDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DayOfWeek_SATURDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var DayOfWeek_SUNDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var mapOf = kotlin_kotlin.$_$.v3;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.d;
  var Regex_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var plus_1 = kotlin_kotlin.$_$.y3;
  var listOfNotNull_0 = kotlin_kotlin.$_$.q3;
  var charSequenceGet = kotlin_kotlin.$_$.y4;
  var isLetterOrDigit = kotlin_kotlin.$_$.d7;
  var Char = kotlin_kotlin.$_$.e8;
  var get_isoDayNumber = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.s;
  var DatePeriod_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.h;
  var minus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.t;
  var plus_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.u;
  var LocalDate_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.i;
  var substringAfter = kotlin_kotlin.$_$.t7;
  var split_0 = kotlin_kotlin.$_$.p7;
  var toIntOrNull = kotlin_kotlin.$_$.x7;
  var startsWith = kotlin_kotlin.$_$.q7;
  var minOf = kotlin_kotlin.$_$.p4;
  var asSequence = kotlin_kotlin.$_$.p2;
  var filter = kotlin_kotlin.$_$.r6;
  var mapNotNull = kotlin_kotlin.$_$.s6;
  var sortedWith_0 = kotlin_kotlin.$_$.t6;
  var toList_0 = kotlin_kotlin.$_$.u6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var firstOrNull_0 = kotlin_kotlin.$_$.y6;
  var isUpperCase = kotlin_kotlin.$_$.e7;
  var isDigit = kotlin_kotlin.$_$.c7;
  var lastOrNull_0 = kotlin_kotlin.$_$.i7;
  var isWhitespace = kotlin_kotlin.$_$.f7;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var indexOf = kotlin_kotlin.$_$.a7;
  var checkCountOverflow = kotlin_kotlin.$_$.r2;
  var defineProp = kotlin_kotlin.$_$.c5;
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
  initMetadataForClass(EvenementJson, 'EvenementJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ContexteMaintenantJson, 'ContexteMaintenantJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MaintenantJson, 'MaintenantJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RattacheJson, 'RattacheJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BriefingJson, 'BriefingJson', BriefingJson, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MomentReunionJson, 'MomentReunionJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MomentsJson, 'MomentsJson', MomentsJson, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EntreeRevueJson, 'EntreeRevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GroupeRevueJson, 'GroupeRevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RelanceJson, 'RelanceJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SuiviJson, 'SuiviJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SuiviRappelJson, 'SuiviRappelJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RappelLivreJson, 'RappelLivreJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EscaladeJson, 'EscaladeJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RappelsDuMomentJson, 'RappelsDuMomentJson', RappelsDuMomentJson, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RevueJson, 'RevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AncrageJson, 'AncrageJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_19);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EcarteJson, 'EcarteJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CaptureJson, 'CaptureJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForCompanion(Companion_21);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CitationJson, 'CitationJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ReponseJson, 'ReponseJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  initMetadataForCompanion(Companion_23);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CandidatJson, 'CandidatJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ResolutionJson, 'ResolutionJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SuiviElementJson, 'SuiviElementJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ARevoirJson, 'ARevoirJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  initMetadataForCompanion(Companion_27);
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LigneFicheJson, 'LigneFicheJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
  initMetadataForCompanion(Companion_28);
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EchangeJson, 'EchangeJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
  initMetadataForCompanion(Companion_29);
  initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FicheJson, 'FicheJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Regles, 'Regles');
  initMetadataForClass(TypeEntite, 'TypeEntite', VOID, Enum);
  initMetadataForClass(EntiteId, 'EntiteId');
  initMetadataForClass(Mention, 'Mention');
  initMetadataForClass(Entite, 'Entite');
  initMetadataForClass(LigneFiche, 'LigneFiche');
  initMetadataForClass(FicheEntite, 'FicheEntite');
  initMetadataForClass(sam$kotlin_Comparator$0_4, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Fiches, 'Fiches');
  initMetadataForClass(sam$kotlin_Comparator$0_5, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Memoire, 'Memoire', Memoire);
  initMetadataForClass(Candidat, 'Candidat');
  initMetadataForClass(Resolution, 'Resolution');
  initMetadataForClass(sam$kotlin_Comparator$0_6, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(ResolutionReferences, 'ResolutionReferences');
  initMetadataForClass(Deduit, 'Deduit');
  initMetadataForClass(TypeElement, 'TypeElement', VOID, Enum);
  initMetadataForClass(Poids, 'Poids', VOID, Enum);
  initMetadataForClass(Sphere, 'Sphere', VOID, Enum);
  initMetadataForClass(Duree, 'Duree', VOID, Enum);
  initMetadataForClass(Plan, 'Plan');
  initMetadataForClass(ElementId, 'ElementId');
  initMetadataForClass(ElementDerive, 'ElementDerive');
  initMetadataForClass(Verdict, 'Verdict', VOID, Enum);
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(ElementResolu, 'ElementResolu');
  initMetadataForClass(CaptureId, 'CaptureId');
  initMetadataForClass(Passage, 'Passage');
  initMetadataForObject(CreneauProtege, 'CreneauProtege');
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(Disponibilite, 'Disponibilite', Disponibilite);
  initMetadataForClass(sam$kotlin_Comparator$0_7, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Disponibilites, 'Disponibilites');
  initMetadataForClass(Urgence, 'Urgence', VOID, Enum);
  initMetadataForClass(ContexteMaintenant, 'ContexteMaintenant');
  initMetadataForClass(Proposition, 'Proposition');
  initMetadataForClass(ResultatMaintenant, 'ResultatMaintenant');
  initMetadataForClass(sam$kotlin_Comparator$0_8, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Priorisation, 'Priorisation');
  initMetadataForClass(Briefing, 'Briefing');
  initMetadataForClass(sam$kotlin_Comparator$0_9, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Briefings, 'Briefings');
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(PointDeRupture, 'PointDeRupture', VOID, Enum);
  initMetadataForClass(EvenementConnu, 'EvenementConnu');
  initMetadataForClass(Observable, 'Observable');
  initMetadataForClass(Substituee, 'Substituee');
  initMetadataForObject(Echeancier, 'Echeancier');
  initMetadataForClass(Immediate, 'Immediate');
  initMetadataForClass(MiseEnFile, 'MiseEnFile');
  initMetadataForClass(Escaladee, 'Escaladee');
  initMetadataForClass(Notification, 'Notification');
  initMetadataForClass(OptionEscalade, 'OptionEscalade', VOID, Enum);
  initMetadataForClass(Escalade, 'Escalade');
  initMetadataForCompanion(Companion_32);
  initMetadataForClass(sam$kotlin_Comparator$0_10, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_11, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(FileOpportunite, 'FileOpportunite', FileOpportunite);
  initMetadataForClass(TypeMoment, 'TypeMoment', VOID, Enum);
  initMetadataForClass(Rattache, 'Rattache');
  initMetadataForClass(MomentReunion, 'MomentReunion');
  initMetadataForObject(MomentsReunion, 'MomentsReunion');
  initMetadataForClass(RappelId, 'RappelId');
  initMetadataForClass(Rappel, 'Rappel');
  initMetadataForObject(SignauxAgenda, 'SignauxAgenda');
  initMetadataForClass(TexteSource, 'TexteSource');
  initMetadataForClass(Citation, 'Citation');
  initMetadataForClass(Reponse, 'Reponse');
  initMetadataForClass(sam$kotlin_Comparator$0_12, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(RechercheLocale, 'RechercheLocale');
  initMetadataForClass(Periode, 'Periode');
  initMetadataForClass(Repere, 'Repere');
  initMetadataForObject(RepereTemporel, 'RepereTemporel');
  initMetadataForClass(MotifRevoir, 'MotifRevoir', VOID, Enum);
  initMetadataForClass(IssueRevoir, 'IssueRevoir', VOID, Enum);
  initMetadataForClass(ElementARevoir, 'ElementARevoir');
  initMetadataForClass(SuiviElement, 'SuiviElement');
  initMetadataForClass(sam$kotlin_Comparator$0_13, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(ARevoir, 'ARevoir');
  initMetadataForClass(RevueReduite, 'RevueReduite');
  initMetadataForClass(sam$kotlin_Comparator$0_14, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Arriere, 'Arriere');
  initMetadataForClass(EntreeRevue, 'EntreeRevue');
  initMetadataForClass(sam$kotlin_Comparator$0_15, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
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
  protoOf(Companion).p1c = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ElementJson', this, 27);
    tmp0_serialDesc.hk('id', false);
    tmp0_serialDesc.hk('captureId', false);
    tmp0_serialDesc.hk('type', false);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('debutCar', false);
    tmp0_serialDesc.hk('finCar', false);
    tmp0_serialDesc.hk('debutMs', true);
    tmp0_serialDesc.hk('finMs', true);
    tmp0_serialDesc.hk('echeance', true);
    tmp0_serialDesc.hk('echeanceConfiance', true);
    tmp0_serialDesc.hk('echeanceIndice', true);
    tmp0_serialDesc.hk('horizon', true);
    tmp0_serialDesc.hk('poids', true);
    tmp0_serialDesc.hk('poidsConfiance', true);
    tmp0_serialDesc.hk('poidsIndice', true);
    tmp0_serialDesc.hk('interlocuteur', true);
    tmp0_serialDesc.hk('interlocuteurConfiance', true);
    tmp0_serialDesc.hk('sphere', true);
    tmp0_serialDesc.hk('duree', true);
    tmp0_serialDesc.hk('dureeConfiance', true);
    tmp0_serialDesc.hk('dureeIndice', true);
    tmp0_serialDesc.hk('planDeclencheur', true);
    tmp0_serialDesc.hk('planAction', true);
    tmp0_serialDesc.hk('verdict', true);
    tmp0_serialDesc.hk('corrigeParHumain', true);
    tmp0_serialDesc.hk('transcriptionIncertaine', true);
    tmp0_serialDesc.hk('issuDeReunion', true);
    this.q1c_1 = tmp0_serialDesc;
  }
  protoOf($serializer).r1c = function (encoder, value) {
    var tmp0_desc = this.q1c_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.s1c_1);
    tmp1_output.wg(tmp0_desc, 1, value.t1c_1);
    tmp1_output.wg(tmp0_desc, 2, value.u1c_1);
    tmp1_output.wg(tmp0_desc, 3, value.v1c_1);
    tmp1_output.vg(tmp0_desc, 4, value.w1c_1);
    tmp1_output.vg(tmp0_desc, 5, value.x1c_1);
    if (tmp1_output.dh(tmp0_desc, 6) ? true : !(value.y1c_1 == null)) {
      tmp1_output.zg(tmp0_desc, 6, LongSerializer_getInstance(), value.y1c_1);
    }
    if (tmp1_output.dh(tmp0_desc, 7) ? true : !(value.z1c_1 == null)) {
      tmp1_output.zg(tmp0_desc, 7, LongSerializer_getInstance(), value.z1c_1);
    }
    if (tmp1_output.dh(tmp0_desc, 8) ? true : !(value.a1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 8, StringSerializer_getInstance(), value.a1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 9) ? true : !(value.b1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 9, DoubleSerializer_getInstance(), value.b1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 10) ? true : !(value.c1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 10, StringSerializer_getInstance(), value.c1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 11) ? true : !(value.d1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 11, StringSerializer_getInstance(), value.d1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 12) ? true : !(value.e1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 12, StringSerializer_getInstance(), value.e1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 13) ? true : !(value.f1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 13, DoubleSerializer_getInstance(), value.f1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 14) ? true : !(value.g1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 14, StringSerializer_getInstance(), value.g1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 15) ? true : !(value.h1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 15, StringSerializer_getInstance(), value.h1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 16) ? true : !(value.i1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 16, DoubleSerializer_getInstance(), value.i1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 17) ? true : !(value.j1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 17, StringSerializer_getInstance(), value.j1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 18) ? true : !(value.k1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 18, StringSerializer_getInstance(), value.k1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 19) ? true : !(value.l1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 19, DoubleSerializer_getInstance(), value.l1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 20) ? true : !(value.m1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 20, StringSerializer_getInstance(), value.m1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 21) ? true : !(value.n1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 21, StringSerializer_getInstance(), value.n1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 22) ? true : !(value.o1d_1 == null)) {
      tmp1_output.zg(tmp0_desc, 22, StringSerializer_getInstance(), value.o1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 23) ? true : !(value.p1d_1 === 'EN_ATTENTE')) {
      tmp1_output.wg(tmp0_desc, 23, value.p1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 24) ? true : !(value.q1d_1 === false)) {
      tmp1_output.ug(tmp0_desc, 24, value.q1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 25) ? true : !(value.r1d_1 === false)) {
      tmp1_output.ug(tmp0_desc, 25, value.r1d_1);
    }
    if (tmp1_output.dh(tmp0_desc, 26) ? true : !(value.s1d_1 === false)) {
      tmp1_output.ug(tmp0_desc, 26, value.s1d_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer).qe = function (encoder, value) {
    return this.r1c(encoder, value instanceof ElementJson ? value : THROW_CCE());
  };
  protoOf($serializer).re = function (decoder) {
    var tmp0_desc = this.q1c_1;
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
    var tmp25_local21 = null;
    var tmp26_local22 = null;
    var tmp27_local23 = null;
    var tmp28_local24 = false;
    var tmp29_local25 = false;
    var tmp30_local26 = false;
    var tmp31_input = decoder.ag(tmp0_desc);
    if (tmp31_input.jg()) {
      tmp4_local0 = tmp31_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp31_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp31_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp31_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp31_input.dg(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp31_input.dg(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp31_input.hg(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp31_input.hg(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp31_input.hg(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp31_input.hg(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp31_input.hg(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp31_input.hg(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp31_input.hg(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp31_input.hg(tmp0_desc, 13, DoubleSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp31_input.hg(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp31_input.hg(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp31_input.hg(tmp0_desc, 16, DoubleSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp31_input.hg(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp31_input.hg(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp31_input.hg(tmp0_desc, 19, DoubleSerializer_getInstance(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp31_input.hg(tmp0_desc, 20, StringSerializer_getInstance(), tmp24_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp31_input.hg(tmp0_desc, 21, StringSerializer_getInstance(), tmp25_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp26_local22 = tmp31_input.hg(tmp0_desc, 22, StringSerializer_getInstance(), tmp26_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp27_local23 = tmp31_input.eg(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
      tmp28_local24 = tmp31_input.cg(tmp0_desc, 24);
      tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
      tmp29_local25 = tmp31_input.cg(tmp0_desc, 25);
      tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
      tmp30_local26 = tmp31_input.cg(tmp0_desc, 26);
      tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp31_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp31_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp31_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp31_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp31_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp31_input.dg(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp31_input.dg(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp31_input.hg(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp31_input.hg(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp31_input.hg(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp31_input.hg(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp31_input.hg(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp31_input.hg(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp31_input.hg(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp31_input.hg(tmp0_desc, 13, DoubleSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp31_input.hg(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp31_input.hg(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp31_input.hg(tmp0_desc, 16, DoubleSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp31_input.hg(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp31_input.hg(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp31_input.hg(tmp0_desc, 19, DoubleSerializer_getInstance(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp31_input.hg(tmp0_desc, 20, StringSerializer_getInstance(), tmp24_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp31_input.hg(tmp0_desc, 21, StringSerializer_getInstance(), tmp25_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp26_local22 = tmp31_input.hg(tmp0_desc, 22, StringSerializer_getInstance(), tmp26_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp27_local23 = tmp31_input.eg(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          case 24:
            tmp28_local24 = tmp31_input.cg(tmp0_desc, 24);
            tmp3_bitMask0 = tmp3_bitMask0 | 16777216;
            break;
          case 25:
            tmp29_local25 = tmp31_input.cg(tmp0_desc, 25);
            tmp3_bitMask0 = tmp3_bitMask0 | 33554432;
            break;
          case 26:
            tmp30_local26 = tmp31_input.cg(tmp0_desc, 26);
            tmp3_bitMask0 = tmp3_bitMask0 | 67108864;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp31_input.bg(tmp0_desc);
    return ElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, tmp26_local22, tmp27_local23, tmp28_local24, tmp29_local25, tmp30_local26, null);
  };
  protoOf($serializer).pe = function () {
    return this.q1c_1;
  };
  protoOf($serializer).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance().q1c_1);
    }
    $this.s1c_1 = id;
    $this.t1c_1 = captureId;
    $this.u1c_1 = type;
    $this.v1c_1 = texte;
    $this.w1c_1 = debutCar;
    $this.x1c_1 = finCar;
    if (0 === (seen0 & 64))
      $this.y1c_1 = null;
    else
      $this.y1c_1 = debutMs;
    if (0 === (seen0 & 128))
      $this.z1c_1 = null;
    else
      $this.z1c_1 = finMs;
    if (0 === (seen0 & 256))
      $this.a1d_1 = null;
    else
      $this.a1d_1 = echeance;
    if (0 === (seen0 & 512))
      $this.b1d_1 = null;
    else
      $this.b1d_1 = echeanceConfiance;
    if (0 === (seen0 & 1024))
      $this.c1d_1 = null;
    else
      $this.c1d_1 = echeanceIndice;
    if (0 === (seen0 & 2048))
      $this.d1d_1 = null;
    else
      $this.d1d_1 = horizon;
    if (0 === (seen0 & 4096))
      $this.e1d_1 = null;
    else
      $this.e1d_1 = poids;
    if (0 === (seen0 & 8192))
      $this.f1d_1 = null;
    else
      $this.f1d_1 = poidsConfiance;
    if (0 === (seen0 & 16384))
      $this.g1d_1 = null;
    else
      $this.g1d_1 = poidsIndice;
    if (0 === (seen0 & 32768))
      $this.h1d_1 = null;
    else
      $this.h1d_1 = interlocuteur;
    if (0 === (seen0 & 65536))
      $this.i1d_1 = null;
    else
      $this.i1d_1 = interlocuteurConfiance;
    if (0 === (seen0 & 131072))
      $this.j1d_1 = null;
    else
      $this.j1d_1 = sphere;
    if (0 === (seen0 & 262144))
      $this.k1d_1 = null;
    else
      $this.k1d_1 = duree;
    if (0 === (seen0 & 524288))
      $this.l1d_1 = null;
    else
      $this.l1d_1 = dureeConfiance;
    if (0 === (seen0 & 1048576))
      $this.m1d_1 = null;
    else
      $this.m1d_1 = dureeIndice;
    if (0 === (seen0 & 2097152))
      $this.n1d_1 = null;
    else
      $this.n1d_1 = planDeclencheur;
    if (0 === (seen0 & 4194304))
      $this.o1d_1 = null;
    else
      $this.o1d_1 = planAction;
    if (0 === (seen0 & 8388608))
      $this.p1d_1 = 'EN_ATTENTE';
    else
      $this.p1d_1 = verdict;
    if (0 === (seen0 & 16777216))
      $this.q1d_1 = false;
    else
      $this.q1d_1 = corrigeParHumain;
    if (0 === (seen0 & 33554432))
      $this.r1d_1 = false;
    else
      $this.r1d_1 = transcriptionIncertaine;
    if (0 === (seen0 & 67108864))
      $this.s1d_1 = false;
    else
      $this.s1d_1 = issuDeReunion;
    return $this;
  }
  function ElementJson_init_$Create$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion, serializationConstructorMarker) {
    return ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion, serializationConstructorMarker, objectCreate(protoOf(ElementJson)));
  }
  function ElementJson(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion) {
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
    duree = duree === VOID ? null : duree;
    dureeConfiance = dureeConfiance === VOID ? null : dureeConfiance;
    dureeIndice = dureeIndice === VOID ? null : dureeIndice;
    planDeclencheur = planDeclencheur === VOID ? null : planDeclencheur;
    planAction = planAction === VOID ? null : planAction;
    verdict = verdict === VOID ? 'EN_ATTENTE' : verdict;
    corrigeParHumain = corrigeParHumain === VOID ? false : corrigeParHumain;
    transcriptionIncertaine = transcriptionIncertaine === VOID ? false : transcriptionIncertaine;
    issuDeReunion = issuDeReunion === VOID ? false : issuDeReunion;
    this.s1c_1 = id;
    this.t1c_1 = captureId;
    this.u1c_1 = type;
    this.v1c_1 = texte;
    this.w1c_1 = debutCar;
    this.x1c_1 = finCar;
    this.y1c_1 = debutMs;
    this.z1c_1 = finMs;
    this.a1d_1 = echeance;
    this.b1d_1 = echeanceConfiance;
    this.c1d_1 = echeanceIndice;
    this.d1d_1 = horizon;
    this.e1d_1 = poids;
    this.f1d_1 = poidsConfiance;
    this.g1d_1 = poidsIndice;
    this.h1d_1 = interlocuteur;
    this.i1d_1 = interlocuteurConfiance;
    this.j1d_1 = sphere;
    this.k1d_1 = duree;
    this.l1d_1 = dureeConfiance;
    this.m1d_1 = dureeIndice;
    this.n1d_1 = planDeclencheur;
    this.o1d_1 = planAction;
    this.p1d_1 = verdict;
    this.q1d_1 = corrigeParHumain;
    this.r1d_1 = transcriptionIncertaine;
    this.s1d_1 = issuDeReunion;
  }
  protoOf(ElementJson).t1d = function (id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion) {
    return new ElementJson(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion);
  };
  protoOf(ElementJson).u1d = function (id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion, $super) {
    id = id === VOID ? this.s1c_1 : id;
    captureId = captureId === VOID ? this.t1c_1 : captureId;
    type = type === VOID ? this.u1c_1 : type;
    texte = texte === VOID ? this.v1c_1 : texte;
    debutCar = debutCar === VOID ? this.w1c_1 : debutCar;
    finCar = finCar === VOID ? this.x1c_1 : finCar;
    debutMs = debutMs === VOID ? this.y1c_1 : debutMs;
    finMs = finMs === VOID ? this.z1c_1 : finMs;
    echeance = echeance === VOID ? this.a1d_1 : echeance;
    echeanceConfiance = echeanceConfiance === VOID ? this.b1d_1 : echeanceConfiance;
    echeanceIndice = echeanceIndice === VOID ? this.c1d_1 : echeanceIndice;
    horizon = horizon === VOID ? this.d1d_1 : horizon;
    poids = poids === VOID ? this.e1d_1 : poids;
    poidsConfiance = poidsConfiance === VOID ? this.f1d_1 : poidsConfiance;
    poidsIndice = poidsIndice === VOID ? this.g1d_1 : poidsIndice;
    interlocuteur = interlocuteur === VOID ? this.h1d_1 : interlocuteur;
    interlocuteurConfiance = interlocuteurConfiance === VOID ? this.i1d_1 : interlocuteurConfiance;
    sphere = sphere === VOID ? this.j1d_1 : sphere;
    duree = duree === VOID ? this.k1d_1 : duree;
    dureeConfiance = dureeConfiance === VOID ? this.l1d_1 : dureeConfiance;
    dureeIndice = dureeIndice === VOID ? this.m1d_1 : dureeIndice;
    planDeclencheur = planDeclencheur === VOID ? this.n1d_1 : planDeclencheur;
    planAction = planAction === VOID ? this.o1d_1 : planAction;
    verdict = verdict === VOID ? this.p1d_1 : verdict;
    corrigeParHumain = corrigeParHumain === VOID ? this.q1d_1 : corrigeParHumain;
    transcriptionIncertaine = transcriptionIncertaine === VOID ? this.r1d_1 : transcriptionIncertaine;
    issuDeReunion = issuDeReunion === VOID ? this.s1d_1 : issuDeReunion;
    return $super === VOID ? this.t1d(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion) : $super.t1d.call(this, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, duree, dureeConfiance, dureeIndice, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion);
  };
  protoOf(ElementJson).toString = function () {
    return 'ElementJson(id=' + this.s1c_1 + ', captureId=' + this.t1c_1 + ', type=' + this.u1c_1 + ', texte=' + this.v1c_1 + ', debutCar=' + this.w1c_1 + ', finCar=' + this.x1c_1 + ', debutMs=' + toString(this.y1c_1) + ', finMs=' + toString(this.z1c_1) + ', echeance=' + this.a1d_1 + ', echeanceConfiance=' + this.b1d_1 + ', echeanceIndice=' + this.c1d_1 + ', horizon=' + this.d1d_1 + ', poids=' + this.e1d_1 + ', poidsConfiance=' + this.f1d_1 + ', poidsIndice=' + this.g1d_1 + ', interlocuteur=' + this.h1d_1 + ', interlocuteurConfiance=' + this.i1d_1 + ', sphere=' + this.j1d_1 + ', duree=' + this.k1d_1 + ', dureeConfiance=' + this.l1d_1 + ', dureeIndice=' + this.m1d_1 + ', planDeclencheur=' + this.n1d_1 + ', planAction=' + this.o1d_1 + ', verdict=' + this.p1d_1 + ', corrigeParHumain=' + this.q1d_1 + ', transcriptionIncertaine=' + this.r1d_1 + ', issuDeReunion=' + this.s1d_1 + ')';
  };
  protoOf(ElementJson).hashCode = function () {
    var result = getStringHashCode(this.s1c_1);
    result = imul(result, 31) + getStringHashCode(this.t1c_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u1c_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v1c_1) | 0;
    result = imul(result, 31) + this.w1c_1 | 0;
    result = imul(result, 31) + this.x1c_1 | 0;
    result = imul(result, 31) + (this.y1c_1 == null ? 0 : this.y1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z1c_1 == null ? 0 : this.z1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.a1d_1 == null ? 0 : getStringHashCode(this.a1d_1)) | 0;
    result = imul(result, 31) + (this.b1d_1 == null ? 0 : getNumberHashCode(this.b1d_1)) | 0;
    result = imul(result, 31) + (this.c1d_1 == null ? 0 : getStringHashCode(this.c1d_1)) | 0;
    result = imul(result, 31) + (this.d1d_1 == null ? 0 : getStringHashCode(this.d1d_1)) | 0;
    result = imul(result, 31) + (this.e1d_1 == null ? 0 : getStringHashCode(this.e1d_1)) | 0;
    result = imul(result, 31) + (this.f1d_1 == null ? 0 : getNumberHashCode(this.f1d_1)) | 0;
    result = imul(result, 31) + (this.g1d_1 == null ? 0 : getStringHashCode(this.g1d_1)) | 0;
    result = imul(result, 31) + (this.h1d_1 == null ? 0 : getStringHashCode(this.h1d_1)) | 0;
    result = imul(result, 31) + (this.i1d_1 == null ? 0 : getNumberHashCode(this.i1d_1)) | 0;
    result = imul(result, 31) + (this.j1d_1 == null ? 0 : getStringHashCode(this.j1d_1)) | 0;
    result = imul(result, 31) + (this.k1d_1 == null ? 0 : getStringHashCode(this.k1d_1)) | 0;
    result = imul(result, 31) + (this.l1d_1 == null ? 0 : getNumberHashCode(this.l1d_1)) | 0;
    result = imul(result, 31) + (this.m1d_1 == null ? 0 : getStringHashCode(this.m1d_1)) | 0;
    result = imul(result, 31) + (this.n1d_1 == null ? 0 : getStringHashCode(this.n1d_1)) | 0;
    result = imul(result, 31) + (this.o1d_1 == null ? 0 : getStringHashCode(this.o1d_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.p1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s1d_1) | 0;
    return result;
  };
  protoOf(ElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof ElementJson ? other : THROW_CCE();
    if (!(this.s1c_1 === tmp0_other_with_cast.s1c_1))
      return false;
    if (!(this.t1c_1 === tmp0_other_with_cast.t1c_1))
      return false;
    if (!(this.u1c_1 === tmp0_other_with_cast.u1c_1))
      return false;
    if (!(this.v1c_1 === tmp0_other_with_cast.v1c_1))
      return false;
    if (!(this.w1c_1 === tmp0_other_with_cast.w1c_1))
      return false;
    if (!(this.x1c_1 === tmp0_other_with_cast.x1c_1))
      return false;
    if (!equals(this.y1c_1, tmp0_other_with_cast.y1c_1))
      return false;
    if (!equals(this.z1c_1, tmp0_other_with_cast.z1c_1))
      return false;
    if (!(this.a1d_1 == tmp0_other_with_cast.a1d_1))
      return false;
    if (!equals(this.b1d_1, tmp0_other_with_cast.b1d_1))
      return false;
    if (!(this.c1d_1 == tmp0_other_with_cast.c1d_1))
      return false;
    if (!(this.d1d_1 == tmp0_other_with_cast.d1d_1))
      return false;
    if (!(this.e1d_1 == tmp0_other_with_cast.e1d_1))
      return false;
    if (!equals(this.f1d_1, tmp0_other_with_cast.f1d_1))
      return false;
    if (!(this.g1d_1 == tmp0_other_with_cast.g1d_1))
      return false;
    if (!(this.h1d_1 == tmp0_other_with_cast.h1d_1))
      return false;
    if (!equals(this.i1d_1, tmp0_other_with_cast.i1d_1))
      return false;
    if (!(this.j1d_1 == tmp0_other_with_cast.j1d_1))
      return false;
    if (!(this.k1d_1 == tmp0_other_with_cast.k1d_1))
      return false;
    if (!equals(this.l1d_1, tmp0_other_with_cast.l1d_1))
      return false;
    if (!(this.m1d_1 == tmp0_other_with_cast.m1d_1))
      return false;
    if (!(this.n1d_1 == tmp0_other_with_cast.n1d_1))
      return false;
    if (!(this.o1d_1 == tmp0_other_with_cast.o1d_1))
      return false;
    if (!(this.p1d_1 === tmp0_other_with_cast.p1d_1))
      return false;
    if (!(this.q1d_1 === tmp0_other_with_cast.q1d_1))
      return false;
    if (!(this.r1d_1 === tmp0_other_with_cast.r1d_1))
      return false;
    if (!(this.s1d_1 === tmp0_other_with_cast.s1d_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).p1c = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_6() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PassageIncertainJson', this, 2);
    tmp0_serialDesc.hk('debutCar', false);
    tmp0_serialDesc.hk('finCar', false);
    this.v1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).w1d = function (encoder, value) {
    var tmp0_desc = this.v1d_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.vg(tmp0_desc, 0, value.x1d_1);
    tmp1_output.vg(tmp0_desc, 1, value.y1d_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_0).qe = function (encoder, value) {
    return this.w1d(encoder, value instanceof PassageIncertainJson ? value : THROW_CCE());
  };
  protoOf($serializer_0).re = function (decoder) {
    var tmp0_desc = this.v1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.ag(tmp0_desc);
    if (tmp6_input.jg()) {
      tmp4_local0 = tmp6_input.dg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.dg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.dg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.dg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bg(tmp0_desc);
    return PassageIncertainJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).pe = function () {
    return this.v1d_1;
  };
  protoOf($serializer_0).jk = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().v1d_1);
    }
    $this.x1d_1 = debutCar;
    $this.y1d_1 = finCar;
    return $this;
  }
  function PassageIncertainJson_init_$Create$(seen0, debutCar, finCar, serializationConstructorMarker) {
    return PassageIncertainJson_init_$Init$(seen0, debutCar, finCar, serializationConstructorMarker, objectCreate(protoOf(PassageIncertainJson)));
  }
  function PassageIncertainJson() {
  }
  protoOf(PassageIncertainJson).toString = function () {
    return 'PassageIncertainJson(debutCar=' + this.x1d_1 + ', finCar=' + this.y1d_1 + ')';
  };
  protoOf(PassageIncertainJson).hashCode = function () {
    var result = this.x1d_1;
    result = imul(result, 31) + this.y1d_1 | 0;
    return result;
  };
  protoOf(PassageIncertainJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PassageIncertainJson))
      return false;
    var tmp0_other_with_cast = other instanceof PassageIncertainJson ? other : THROW_CCE();
    if (!(this.x1d_1 === tmp0_other_with_cast.x1d_1))
      return false;
    if (!(this.y1d_1 === tmp0_other_with_cast.y1d_1))
      return false;
    return true;
  };
  function Companion_1() {
  }
  protoOf(Companion_1).p1c = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_7() {
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PropositionJson', this, 5);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('raison', false);
    tmp0_serialDesc.hk('poidsEffectif', false);
    tmp0_serialDesc.hk('urgence', false);
    this.z1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).a1e = function (encoder, value) {
    var tmp0_desc = this.z1d_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.b1e_1);
    tmp1_output.wg(tmp0_desc, 1, value.c1e_1);
    tmp1_output.wg(tmp0_desc, 2, value.d1e_1);
    tmp1_output.wg(tmp0_desc, 3, value.e1e_1);
    tmp1_output.wg(tmp0_desc, 4, value.f1e_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_1).qe = function (encoder, value) {
    return this.a1e(encoder, value instanceof PropositionJson ? value : THROW_CCE());
  };
  protoOf($serializer_1).re = function (decoder) {
    var tmp0_desc = this.z1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.ag(tmp0_desc);
    if (tmp9_input.jg()) {
      tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.eg(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.eg(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bg(tmp0_desc);
    return PropositionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_1).pe = function () {
    return this.z1d_1;
  };
  protoOf($serializer_1).jk = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_1().z1d_1);
    }
    $this.b1e_1 = elementId;
    $this.c1e_1 = texte;
    $this.d1e_1 = raison;
    $this.e1e_1 = poidsEffectif;
    $this.f1e_1 = urgence;
    return $this;
  }
  function PropositionJson_init_$Create$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker) {
    return PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, objectCreate(protoOf(PropositionJson)));
  }
  function PropositionJson(elementId, texte, raison, poidsEffectif, urgence) {
    this.b1e_1 = elementId;
    this.c1e_1 = texte;
    this.d1e_1 = raison;
    this.e1e_1 = poidsEffectif;
    this.f1e_1 = urgence;
  }
  protoOf(PropositionJson).toString = function () {
    return 'PropositionJson(elementId=' + this.b1e_1 + ', texte=' + this.c1e_1 + ', raison=' + this.d1e_1 + ', poidsEffectif=' + this.e1e_1 + ', urgence=' + this.f1e_1 + ')';
  };
  protoOf(PropositionJson).hashCode = function () {
    var result = getStringHashCode(this.b1e_1);
    result = imul(result, 31) + getStringHashCode(this.c1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f1e_1) | 0;
    return result;
  };
  protoOf(PropositionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionJson))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionJson ? other : THROW_CCE();
    if (!(this.b1e_1 === tmp0_other_with_cast.b1e_1))
      return false;
    if (!(this.c1e_1 === tmp0_other_with_cast.c1e_1))
      return false;
    if (!(this.d1e_1 === tmp0_other_with_cast.d1e_1))
      return false;
    if (!(this.e1e_1 === tmp0_other_with_cast.e1e_1))
      return false;
    if (!(this.f1e_1 === tmp0_other_with_cast.f1e_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g1e_1 = [null, null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance()), null, null];
  }
  protoOf(Companion_2).p1c = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_3;
  function Companion_getInstance_8() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EvenementJson', this, 8);
    tmp0_serialDesc.hk('id', false);
    tmp0_serialDesc.hk('titre', false);
    tmp0_serialDesc.hk('debut', false);
    tmp0_serialDesc.hk('fin', false);
    tmp0_serialDesc.hk('lieu', true);
    tmp0_serialDesc.hk('participants', true);
    tmp0_serialDesc.hk('recurrent', true);
    tmp0_serialDesc.hk('journeeEntiere', true);
    this.h1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).i1e = function (encoder, value) {
    var tmp0_desc = this.h1e_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().g1e_1;
    tmp1_output.wg(tmp0_desc, 0, value.j1e_1);
    tmp1_output.wg(tmp0_desc, 1, value.k1e_1);
    tmp1_output.wg(tmp0_desc, 2, value.l1e_1);
    tmp1_output.wg(tmp0_desc, 3, value.m1e_1);
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !(value.n1e_1 == null)) {
      tmp1_output.zg(tmp0_desc, 4, StringSerializer_getInstance(), value.n1e_1);
    }
    if (tmp1_output.dh(tmp0_desc, 5) ? true : !equals(value.o1e_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 5, tmp2_cached[5], value.o1e_1);
    }
    if (tmp1_output.dh(tmp0_desc, 6) ? true : !(value.p1e_1 === false)) {
      tmp1_output.ug(tmp0_desc, 6, value.p1e_1);
    }
    if (tmp1_output.dh(tmp0_desc, 7) ? true : !(value.q1e_1 === false)) {
      tmp1_output.ug(tmp0_desc, 7, value.q1e_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_2).qe = function (encoder, value) {
    return this.i1e(encoder, value instanceof EvenementJson ? value : THROW_CCE());
  };
  protoOf($serializer_2).re = function (decoder) {
    var tmp0_desc = this.h1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_local7 = false;
    var tmp12_input = decoder.ag(tmp0_desc);
    var tmp13_cached = Companion_getInstance_8().g1e_1;
    if (tmp12_input.jg()) {
      tmp4_local0 = tmp12_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.hg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.fg(tmp0_desc, 5, tmp13_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.cg(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.cg(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.hg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.fg(tmp0_desc, 5, tmp13_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.cg(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.cg(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.bg(tmp0_desc);
    return EvenementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_2).pe = function () {
    return this.h1e_1;
  };
  protoOf($serializer_2).jk = function () {
    var tmp0_cached = Companion_getInstance_8().g1e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[5], BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function EvenementJson_init_$Init$(seen0, id, titre, debut, fin, lieu, participants, recurrent, journeeEntiere, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().h1e_1);
    }
    $this.j1e_1 = id;
    $this.k1e_1 = titre;
    $this.l1e_1 = debut;
    $this.m1e_1 = fin;
    if (0 === (seen0 & 16))
      $this.n1e_1 = null;
    else
      $this.n1e_1 = lieu;
    if (0 === (seen0 & 32))
      $this.o1e_1 = emptyList();
    else
      $this.o1e_1 = participants;
    if (0 === (seen0 & 64))
      $this.p1e_1 = false;
    else
      $this.p1e_1 = recurrent;
    if (0 === (seen0 & 128))
      $this.q1e_1 = false;
    else
      $this.q1e_1 = journeeEntiere;
    return $this;
  }
  function EvenementJson_init_$Create$(seen0, id, titre, debut, fin, lieu, participants, recurrent, journeeEntiere, serializationConstructorMarker) {
    return EvenementJson_init_$Init$(seen0, id, titre, debut, fin, lieu, participants, recurrent, journeeEntiere, serializationConstructorMarker, objectCreate(protoOf(EvenementJson)));
  }
  function EvenementJson() {
  }
  protoOf(EvenementJson).toString = function () {
    return 'EvenementJson(id=' + this.j1e_1 + ', titre=' + this.k1e_1 + ', debut=' + this.l1e_1 + ', fin=' + this.m1e_1 + ', lieu=' + this.n1e_1 + ', participants=' + toString_0(this.o1e_1) + ', recurrent=' + this.p1e_1 + ', journeeEntiere=' + this.q1e_1 + ')';
  };
  protoOf(EvenementJson).hashCode = function () {
    var result = getStringHashCode(this.j1e_1);
    result = imul(result, 31) + getStringHashCode(this.k1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1e_1) | 0;
    result = imul(result, 31) + (this.n1e_1 == null ? 0 : getStringHashCode(this.n1e_1)) | 0;
    result = imul(result, 31) + hashCode(this.o1e_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.p1e_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1e_1) | 0;
    return result;
  };
  protoOf(EvenementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EvenementJson))
      return false;
    var tmp0_other_with_cast = other instanceof EvenementJson ? other : THROW_CCE();
    if (!(this.j1e_1 === tmp0_other_with_cast.j1e_1))
      return false;
    if (!(this.k1e_1 === tmp0_other_with_cast.k1e_1))
      return false;
    if (!(this.l1e_1 === tmp0_other_with_cast.l1e_1))
      return false;
    if (!(this.m1e_1 === tmp0_other_with_cast.m1e_1))
      return false;
    if (!(this.n1e_1 == tmp0_other_with_cast.n1e_1))
      return false;
    if (!equals(this.o1e_1, tmp0_other_with_cast.o1e_1))
      return false;
    if (!(this.p1e_1 === tmp0_other_with_cast.p1e_1))
      return false;
    if (!(this.q1e_1 === tmp0_other_with_cast.q1e_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r1e_1 = [null, new ArrayListSerializer($serializer_getInstance_2())];
  }
  protoOf(Companion_3).p1c = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_4;
  function Companion_getInstance_9() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ContexteMaintenantJson', this, 2);
    tmp0_serialDesc.hk('maintenant', false);
    tmp0_serialDesc.hk('evenements', true);
    this.s1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).t1e = function (encoder, value) {
    var tmp0_desc = this.s1e_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().r1e_1;
    tmp1_output.wg(tmp0_desc, 0, value.u1e_1);
    if (tmp1_output.dh(tmp0_desc, 1) ? true : !equals(value.v1e_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 1, tmp2_cached[1], value.v1e_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_3).qe = function (encoder, value) {
    return this.t1e(encoder, value instanceof ContexteMaintenantJson ? value : THROW_CCE());
  };
  protoOf($serializer_3).re = function (decoder) {
    var tmp0_desc = this.s1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ag(tmp0_desc);
    var tmp7_cached = Companion_getInstance_9().r1e_1;
    if (tmp6_input.jg()) {
      tmp4_local0 = tmp6_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.fg(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.fg(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bg(tmp0_desc);
    return ContexteMaintenantJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).pe = function () {
    return this.s1e_1;
  };
  protoOf($serializer_3).jk = function () {
    var tmp0_cached = Companion_getInstance_9().r1e_1;
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
  function ContexteMaintenantJson_init_$Init$(seen0, maintenant, evenements, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_3().s1e_1);
    }
    $this.u1e_1 = maintenant;
    if (0 === (seen0 & 2))
      $this.v1e_1 = emptyList();
    else
      $this.v1e_1 = evenements;
    return $this;
  }
  function ContexteMaintenantJson_init_$Create$(seen0, maintenant, evenements, serializationConstructorMarker) {
    return ContexteMaintenantJson_init_$Init$(seen0, maintenant, evenements, serializationConstructorMarker, objectCreate(protoOf(ContexteMaintenantJson)));
  }
  function ContexteMaintenantJson() {
  }
  protoOf(ContexteMaintenantJson).toString = function () {
    return 'ContexteMaintenantJson(maintenant=' + this.u1e_1 + ', evenements=' + toString_0(this.v1e_1) + ')';
  };
  protoOf(ContexteMaintenantJson).hashCode = function () {
    var result = getStringHashCode(this.u1e_1);
    result = imul(result, 31) + hashCode(this.v1e_1) | 0;
    return result;
  };
  protoOf(ContexteMaintenantJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenantJson))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenantJson ? other : THROW_CCE();
    if (!(this.u1e_1 === tmp0_other_with_cast.u1e_1))
      return false;
    if (!equals(this.v1e_1, tmp0_other_with_cast.v1e_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w1e_1 = [new ArrayListSerializer($serializer_getInstance_1()), null, null, null, null, null];
  }
  protoOf(Companion_4).p1c = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_10() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.MaintenantJson', this, 6);
    tmp0_serialDesc.hk('propositions', false);
    tmp0_serialDesc.hk('raison', true);
    tmp0_serialDesc.hk('ecartes', true);
    tmp0_serialDesc.hk('minutesAvantReunion', true);
    tmp0_serialDesc.hk('prochaineReunion', true);
    tmp0_serialDesc.hk('creneauProtegeSuspendu', true);
    this.x1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).y1e = function (encoder, value) {
    var tmp0_desc = this.x1e_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().w1e_1;
    tmp1_output.xg(tmp0_desc, 0, tmp2_cached[0], value.z1e_1);
    if (tmp1_output.dh(tmp0_desc, 1) ? true : !(value.a1f_1 === '')) {
      tmp1_output.wg(tmp0_desc, 1, value.a1f_1);
    }
    if (tmp1_output.dh(tmp0_desc, 2) ? true : !(value.b1f_1 === 0)) {
      tmp1_output.vg(tmp0_desc, 2, value.b1f_1);
    }
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !(value.c1f_1 == null)) {
      tmp1_output.zg(tmp0_desc, 3, IntSerializer_getInstance(), value.c1f_1);
    }
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !(value.d1f_1 == null)) {
      tmp1_output.zg(tmp0_desc, 4, StringSerializer_getInstance(), value.d1f_1);
    }
    if (tmp1_output.dh(tmp0_desc, 5) ? true : !(value.e1f_1 === false)) {
      tmp1_output.ug(tmp0_desc, 5, value.e1f_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_4).qe = function (encoder, value) {
    return this.y1e(encoder, value instanceof MaintenantJson ? value : THROW_CCE());
  };
  protoOf($serializer_4).re = function (decoder) {
    var tmp0_desc = this.x1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = false;
    var tmp10_input = decoder.ag(tmp0_desc);
    var tmp11_cached = Companion_getInstance_10().w1e_1;
    if (tmp10_input.jg()) {
      tmp4_local0 = tmp10_input.fg(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.dg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.hg(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.hg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.cg(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.fg(tmp0_desc, 0, tmp11_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.dg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.hg(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.hg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.cg(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.bg(tmp0_desc);
    return MaintenantJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_4).pe = function () {
    return this.x1e_1;
  };
  protoOf($serializer_4).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_10().w1e_1[0], StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function MaintenantJson_init_$Init$(seen0, propositions, raison, ecartes, minutesAvantReunion, prochaineReunion, creneauProtegeSuspendu, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_4().x1e_1);
    }
    $this.z1e_1 = propositions;
    if (0 === (seen0 & 2))
      $this.a1f_1 = '';
    else
      $this.a1f_1 = raison;
    if (0 === (seen0 & 4))
      $this.b1f_1 = 0;
    else
      $this.b1f_1 = ecartes;
    if (0 === (seen0 & 8))
      $this.c1f_1 = null;
    else
      $this.c1f_1 = minutesAvantReunion;
    if (0 === (seen0 & 16))
      $this.d1f_1 = null;
    else
      $this.d1f_1 = prochaineReunion;
    if (0 === (seen0 & 32))
      $this.e1f_1 = false;
    else
      $this.e1f_1 = creneauProtegeSuspendu;
    return $this;
  }
  function MaintenantJson_init_$Create$(seen0, propositions, raison, ecartes, minutesAvantReunion, prochaineReunion, creneauProtegeSuspendu, serializationConstructorMarker) {
    return MaintenantJson_init_$Init$(seen0, propositions, raison, ecartes, minutesAvantReunion, prochaineReunion, creneauProtegeSuspendu, serializationConstructorMarker, objectCreate(protoOf(MaintenantJson)));
  }
  function MaintenantJson(propositions, raison, ecartes, minutesAvantReunion, prochaineReunion, creneauProtegeSuspendu) {
    Companion_getInstance_10();
    raison = raison === VOID ? '' : raison;
    ecartes = ecartes === VOID ? 0 : ecartes;
    minutesAvantReunion = minutesAvantReunion === VOID ? null : minutesAvantReunion;
    prochaineReunion = prochaineReunion === VOID ? null : prochaineReunion;
    creneauProtegeSuspendu = creneauProtegeSuspendu === VOID ? false : creneauProtegeSuspendu;
    this.z1e_1 = propositions;
    this.a1f_1 = raison;
    this.b1f_1 = ecartes;
    this.c1f_1 = minutesAvantReunion;
    this.d1f_1 = prochaineReunion;
    this.e1f_1 = creneauProtegeSuspendu;
  }
  protoOf(MaintenantJson).toString = function () {
    return 'MaintenantJson(propositions=' + toString_0(this.z1e_1) + ', raison=' + this.a1f_1 + ', ecartes=' + this.b1f_1 + ', minutesAvantReunion=' + this.c1f_1 + ', prochaineReunion=' + this.d1f_1 + ', creneauProtegeSuspendu=' + this.e1f_1 + ')';
  };
  protoOf(MaintenantJson).hashCode = function () {
    var result = hashCode(this.z1e_1);
    result = imul(result, 31) + getStringHashCode(this.a1f_1) | 0;
    result = imul(result, 31) + this.b1f_1 | 0;
    result = imul(result, 31) + (this.c1f_1 == null ? 0 : this.c1f_1) | 0;
    result = imul(result, 31) + (this.d1f_1 == null ? 0 : getStringHashCode(this.d1f_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e1f_1) | 0;
    return result;
  };
  protoOf(MaintenantJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MaintenantJson))
      return false;
    var tmp0_other_with_cast = other instanceof MaintenantJson ? other : THROW_CCE();
    if (!equals(this.z1e_1, tmp0_other_with_cast.z1e_1))
      return false;
    if (!(this.a1f_1 === tmp0_other_with_cast.a1f_1))
      return false;
    if (!(this.b1f_1 === tmp0_other_with_cast.b1f_1))
      return false;
    if (!(this.c1f_1 == tmp0_other_with_cast.c1f_1))
      return false;
    if (!(this.d1f_1 == tmp0_other_with_cast.d1f_1))
      return false;
    if (!(this.e1f_1 === tmp0_other_with_cast.e1f_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).p1c = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_6;
  function Companion_getInstance_11() {
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RattacheJson', this, 5);
    tmp0_serialDesc.hk('captureId', false);
    tmp0_serialDesc.hk('evenementId', false);
    tmp0_serialDesc.hk('depose', true);
    tmp0_serialDesc.hk('texte', true);
    tmp0_serialDesc.hk('creeLe', false);
    this.f1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).g1f = function (encoder, value) {
    var tmp0_desc = this.f1f_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.h1f_1);
    tmp1_output.wg(tmp0_desc, 1, value.i1f_1);
    if (tmp1_output.dh(tmp0_desc, 2) ? true : !(value.j1f_1 === false)) {
      tmp1_output.ug(tmp0_desc, 2, value.j1f_1);
    }
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !(value.k1f_1 === '')) {
      tmp1_output.wg(tmp0_desc, 3, value.k1f_1);
    }
    tmp1_output.wg(tmp0_desc, 4, value.l1f_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_5).qe = function (encoder, value) {
    return this.g1f(encoder, value instanceof RattacheJson ? value : THROW_CCE());
  };
  protoOf($serializer_5).re = function (decoder) {
    var tmp0_desc = this.f1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.ag(tmp0_desc);
    if (tmp9_input.jg()) {
      tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.cg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.eg(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.cg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.eg(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bg(tmp0_desc);
    return RattacheJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_5).pe = function () {
    return this.f1f_1;
  };
  protoOf($serializer_5).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function RattacheJson_init_$Init$(seen0, captureId, evenementId, depose, texte, creeLe, serializationConstructorMarker, $this) {
    if (!(19 === (19 & seen0))) {
      throwMissingFieldException(seen0, 19, $serializer_getInstance_5().f1f_1);
    }
    $this.h1f_1 = captureId;
    $this.i1f_1 = evenementId;
    if (0 === (seen0 & 4))
      $this.j1f_1 = false;
    else
      $this.j1f_1 = depose;
    if (0 === (seen0 & 8))
      $this.k1f_1 = '';
    else
      $this.k1f_1 = texte;
    $this.l1f_1 = creeLe;
    return $this;
  }
  function RattacheJson_init_$Create$(seen0, captureId, evenementId, depose, texte, creeLe, serializationConstructorMarker) {
    return RattacheJson_init_$Init$(seen0, captureId, evenementId, depose, texte, creeLe, serializationConstructorMarker, objectCreate(protoOf(RattacheJson)));
  }
  function RattacheJson(captureId, evenementId, depose, texte, creeLe) {
    depose = depose === VOID ? false : depose;
    texte = texte === VOID ? '' : texte;
    this.h1f_1 = captureId;
    this.i1f_1 = evenementId;
    this.j1f_1 = depose;
    this.k1f_1 = texte;
    this.l1f_1 = creeLe;
  }
  protoOf(RattacheJson).toString = function () {
    return 'RattacheJson(captureId=' + this.h1f_1 + ', evenementId=' + this.i1f_1 + ', depose=' + this.j1f_1 + ', texte=' + this.k1f_1 + ', creeLe=' + this.l1f_1 + ')';
  };
  protoOf(RattacheJson).hashCode = function () {
    var result = getStringHashCode(this.h1f_1);
    result = imul(result, 31) + getStringHashCode(this.i1f_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1f_1) | 0;
    return result;
  };
  protoOf(RattacheJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RattacheJson))
      return false;
    var tmp0_other_with_cast = other instanceof RattacheJson ? other : THROW_CCE();
    if (!(this.h1f_1 === tmp0_other_with_cast.h1f_1))
      return false;
    if (!(this.i1f_1 === tmp0_other_with_cast.i1f_1))
      return false;
    if (!(this.j1f_1 === tmp0_other_with_cast.j1f_1))
      return false;
    if (!(this.k1f_1 === tmp0_other_with_cast.k1f_1))
      return false;
    if (!(this.l1f_1 === tmp0_other_with_cast.l1f_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m1f_1 = [new ArrayListSerializer($serializer_getInstance_27()), new ArrayListSerializer($serializer_getInstance_27())];
  }
  var Companion_instance_7;
  function Companion_getInstance_12() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.BriefingJson', this, 2);
    tmp0_serialDesc.hk('ouverts', true);
    tmp0_serialDesc.hk('decide', true);
    this.n1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).o1f = function (encoder, value) {
    var tmp0_desc = this.n1f_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().m1f_1;
    if (tmp1_output.dh(tmp0_desc, 0) ? true : !equals(value.p1f_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 0, tmp2_cached[0], value.p1f_1);
    }
    if (tmp1_output.dh(tmp0_desc, 1) ? true : !equals(value.q1f_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 1, tmp2_cached[1], value.q1f_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_6).qe = function (encoder, value) {
    return this.o1f(encoder, value instanceof BriefingJson ? value : THROW_CCE());
  };
  protoOf($serializer_6).re = function (decoder) {
    var tmp0_desc = this.n1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ag(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().m1f_1;
    if (tmp6_input.jg()) {
      tmp4_local0 = tmp6_input.fg(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.fg(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.fg(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.fg(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bg(tmp0_desc);
    return BriefingJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).pe = function () {
    return this.n1f_1;
  };
  protoOf($serializer_6).jk = function () {
    var tmp0_cached = Companion_getInstance_12().m1f_1;
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
  function BriefingJson_init_$Init$(seen0, ouverts, decide, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().n1f_1);
    }
    if (0 === (seen0 & 1))
      $this.p1f_1 = emptyList();
    else
      $this.p1f_1 = ouverts;
    if (0 === (seen0 & 2))
      $this.q1f_1 = emptyList();
    else
      $this.q1f_1 = decide;
    return $this;
  }
  function BriefingJson_init_$Create$(seen0, ouverts, decide, serializationConstructorMarker) {
    return BriefingJson_init_$Init$(seen0, ouverts, decide, serializationConstructorMarker, objectCreate(protoOf(BriefingJson)));
  }
  function BriefingJson(ouverts, decide) {
    Companion_getInstance_12();
    ouverts = ouverts === VOID ? emptyList() : ouverts;
    decide = decide === VOID ? emptyList() : decide;
    this.p1f_1 = ouverts;
    this.q1f_1 = decide;
  }
  protoOf(BriefingJson).toString = function () {
    return 'BriefingJson(ouverts=' + toString_0(this.p1f_1) + ', decide=' + toString_0(this.q1f_1) + ')';
  };
  protoOf(BriefingJson).hashCode = function () {
    var result = hashCode(this.p1f_1);
    result = imul(result, 31) + hashCode(this.q1f_1) | 0;
    return result;
  };
  protoOf(BriefingJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BriefingJson))
      return false;
    var tmp0_other_with_cast = other instanceof BriefingJson ? other : THROW_CCE();
    if (!equals(this.p1f_1, tmp0_other_with_cast.p1f_1))
      return false;
    if (!equals(this.q1f_1, tmp0_other_with_cast.q1f_1))
      return false;
    return true;
  };
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r1f_1 = [null, null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), null, null, null, null, null];
  }
  var Companion_instance_8;
  function Companion_getInstance_13() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.MomentReunionJson', this, 12);
    tmp0_serialDesc.hk('type', false);
    tmp0_serialDesc.hk('evenementId', false);
    tmp0_serialDesc.hk('titre', false);
    tmp0_serialDesc.hk('debut', false);
    tmp0_serialDesc.hk('fin', false);
    tmp0_serialDesc.hk('participants', true);
    tmp0_serialDesc.hk('precedentes', true);
    tmp0_serialDesc.hk('minutes', false);
    tmp0_serialDesc.hk('proposerDepose', true);
    tmp0_serialDesc.hk('briefing', true);
    tmp0_serialDesc.hk('depose', true);
    tmp0_serialDesc.hk('proposerVidage', true);
    this.s1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).t1f = function (encoder, value) {
    var tmp0_desc = this.s1f_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().r1f_1;
    tmp1_output.wg(tmp0_desc, 0, value.u1f_1);
    tmp1_output.wg(tmp0_desc, 1, value.v1f_1);
    tmp1_output.wg(tmp0_desc, 2, value.w1f_1);
    tmp1_output.wg(tmp0_desc, 3, value.x1f_1);
    tmp1_output.wg(tmp0_desc, 4, value.y1f_1);
    if (tmp1_output.dh(tmp0_desc, 5) ? true : !equals(value.z1f_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 5, tmp2_cached[5], value.z1f_1);
    }
    if (tmp1_output.dh(tmp0_desc, 6) ? true : !equals(value.a1g_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 6, tmp2_cached[6], value.a1g_1);
    }
    tmp1_output.vg(tmp0_desc, 7, value.b1g_1);
    if (tmp1_output.dh(tmp0_desc, 8) ? true : !(value.c1g_1 === false)) {
      tmp1_output.ug(tmp0_desc, 8, value.c1g_1);
    }
    if (tmp1_output.dh(tmp0_desc, 9) ? true : !(value.d1g_1 == null)) {
      tmp1_output.zg(tmp0_desc, 9, $serializer_getInstance_6(), value.d1g_1);
    }
    if (tmp1_output.dh(tmp0_desc, 10) ? true : !(value.e1g_1 == null)) {
      tmp1_output.zg(tmp0_desc, 10, $serializer_getInstance_5(), value.e1g_1);
    }
    if (tmp1_output.dh(tmp0_desc, 11) ? true : !(value.f1g_1 === false)) {
      tmp1_output.ug(tmp0_desc, 11, value.f1g_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_7).qe = function (encoder, value) {
    return this.t1f(encoder, value instanceof MomentReunionJson ? value : THROW_CCE());
  };
  protoOf($serializer_7).re = function (decoder) {
    var tmp0_desc = this.s1f_1;
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
    var tmp11_local7 = 0;
    var tmp12_local8 = false;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = false;
    var tmp16_input = decoder.ag(tmp0_desc);
    var tmp17_cached = Companion_getInstance_13().r1f_1;
    if (tmp16_input.jg()) {
      tmp4_local0 = tmp16_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.eg(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.fg(tmp0_desc, 5, tmp17_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.fg(tmp0_desc, 6, tmp17_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.dg(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.cg(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.hg(tmp0_desc, 9, $serializer_getInstance_6(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.hg(tmp0_desc, 10, $serializer_getInstance_5(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.cg(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.eg(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.fg(tmp0_desc, 5, tmp17_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.fg(tmp0_desc, 6, tmp17_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.dg(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.cg(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.hg(tmp0_desc, 9, $serializer_getInstance_6(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.hg(tmp0_desc, 10, $serializer_getInstance_5(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.cg(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp16_input.bg(tmp0_desc);
    return MomentReunionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  };
  protoOf($serializer_7).pe = function () {
    return this.s1f_1;
  };
  protoOf($serializer_7).jk = function () {
    var tmp0_cached = Companion_getInstance_13().r1f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[5], tmp0_cached[6], IntSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable($serializer_getInstance_6()), get_nullable($serializer_getInstance_5()), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function MomentReunionJson_init_$Init$(seen0, type, evenementId, titre, debut, fin, participants, precedentes, minutes, proposerDepose, briefing, depose, proposerVidage, serializationConstructorMarker, $this) {
    if (!(159 === (159 & seen0))) {
      throwMissingFieldException(seen0, 159, $serializer_getInstance_7().s1f_1);
    }
    $this.u1f_1 = type;
    $this.v1f_1 = evenementId;
    $this.w1f_1 = titre;
    $this.x1f_1 = debut;
    $this.y1f_1 = fin;
    if (0 === (seen0 & 32))
      $this.z1f_1 = emptyList();
    else
      $this.z1f_1 = participants;
    if (0 === (seen0 & 64))
      $this.a1g_1 = emptyList();
    else
      $this.a1g_1 = precedentes;
    $this.b1g_1 = minutes;
    if (0 === (seen0 & 256))
      $this.c1g_1 = false;
    else
      $this.c1g_1 = proposerDepose;
    if (0 === (seen0 & 512))
      $this.d1g_1 = null;
    else
      $this.d1g_1 = briefing;
    if (0 === (seen0 & 1024))
      $this.e1g_1 = null;
    else
      $this.e1g_1 = depose;
    if (0 === (seen0 & 2048))
      $this.f1g_1 = false;
    else
      $this.f1g_1 = proposerVidage;
    return $this;
  }
  function MomentReunionJson_init_$Create$(seen0, type, evenementId, titre, debut, fin, participants, precedentes, minutes, proposerDepose, briefing, depose, proposerVidage, serializationConstructorMarker) {
    return MomentReunionJson_init_$Init$(seen0, type, evenementId, titre, debut, fin, participants, precedentes, minutes, proposerDepose, briefing, depose, proposerVidage, serializationConstructorMarker, objectCreate(protoOf(MomentReunionJson)));
  }
  function MomentReunionJson(type, evenementId, titre, debut, fin, participants, precedentes, minutes, proposerDepose, briefing, depose, proposerVidage) {
    Companion_getInstance_13();
    participants = participants === VOID ? emptyList() : participants;
    precedentes = precedentes === VOID ? emptyList() : precedentes;
    proposerDepose = proposerDepose === VOID ? false : proposerDepose;
    briefing = briefing === VOID ? null : briefing;
    depose = depose === VOID ? null : depose;
    proposerVidage = proposerVidage === VOID ? false : proposerVidage;
    this.u1f_1 = type;
    this.v1f_1 = evenementId;
    this.w1f_1 = titre;
    this.x1f_1 = debut;
    this.y1f_1 = fin;
    this.z1f_1 = participants;
    this.a1g_1 = precedentes;
    this.b1g_1 = minutes;
    this.c1g_1 = proposerDepose;
    this.d1g_1 = briefing;
    this.e1g_1 = depose;
    this.f1g_1 = proposerVidage;
  }
  protoOf(MomentReunionJson).toString = function () {
    return 'MomentReunionJson(type=' + this.u1f_1 + ', evenementId=' + this.v1f_1 + ', titre=' + this.w1f_1 + ', debut=' + this.x1f_1 + ', fin=' + this.y1f_1 + ', participants=' + toString_0(this.z1f_1) + ', precedentes=' + toString_0(this.a1g_1) + ', minutes=' + this.b1g_1 + ', proposerDepose=' + this.c1g_1 + ', briefing=' + toString(this.d1g_1) + ', depose=' + toString(this.e1g_1) + ', proposerVidage=' + this.f1g_1 + ')';
  };
  protoOf(MomentReunionJson).hashCode = function () {
    var result = getStringHashCode(this.u1f_1);
    result = imul(result, 31) + getStringHashCode(this.v1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1f_1) | 0;
    result = imul(result, 31) + hashCode(this.z1f_1) | 0;
    result = imul(result, 31) + hashCode(this.a1g_1) | 0;
    result = imul(result, 31) + this.b1g_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.c1g_1) | 0;
    result = imul(result, 31) + (this.d1g_1 == null ? 0 : this.d1g_1.hashCode()) | 0;
    result = imul(result, 31) + (this.e1g_1 == null ? 0 : this.e1g_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f1g_1) | 0;
    return result;
  };
  protoOf(MomentReunionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MomentReunionJson))
      return false;
    var tmp0_other_with_cast = other instanceof MomentReunionJson ? other : THROW_CCE();
    if (!(this.u1f_1 === tmp0_other_with_cast.u1f_1))
      return false;
    if (!(this.v1f_1 === tmp0_other_with_cast.v1f_1))
      return false;
    if (!(this.w1f_1 === tmp0_other_with_cast.w1f_1))
      return false;
    if (!(this.x1f_1 === tmp0_other_with_cast.x1f_1))
      return false;
    if (!(this.y1f_1 === tmp0_other_with_cast.y1f_1))
      return false;
    if (!equals(this.z1f_1, tmp0_other_with_cast.z1f_1))
      return false;
    if (!equals(this.a1g_1, tmp0_other_with_cast.a1g_1))
      return false;
    if (!(this.b1g_1 === tmp0_other_with_cast.b1g_1))
      return false;
    if (!(this.c1g_1 === tmp0_other_with_cast.c1g_1))
      return false;
    if (!equals(this.d1g_1, tmp0_other_with_cast.d1g_1))
      return false;
    if (!equals(this.e1g_1, tmp0_other_with_cast.e1g_1))
      return false;
    if (!(this.f1g_1 === tmp0_other_with_cast.f1g_1))
      return false;
    return true;
  };
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g1g_1 = [new ArrayListSerializer($serializer_getInstance_7())];
  }
  protoOf(Companion_8).p1c = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_9;
  function Companion_getInstance_14() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.MomentsJson', this, 1);
    tmp0_serialDesc.hk('moments', true);
    this.h1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).i1g = function (encoder, value) {
    var tmp0_desc = this.h1g_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().g1g_1;
    if (tmp1_output.dh(tmp0_desc, 0) ? true : !equals(value.j1g_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 0, tmp2_cached[0], value.j1g_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_8).qe = function (encoder, value) {
    return this.i1g(encoder, value instanceof MomentsJson ? value : THROW_CCE());
  };
  protoOf($serializer_8).re = function (decoder) {
    var tmp0_desc = this.h1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.ag(tmp0_desc);
    var tmp6_cached = Companion_getInstance_14().g1g_1;
    if (tmp5_input.jg()) {
      tmp4_local0 = tmp5_input.fg(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.fg(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.bg(tmp0_desc);
    return MomentsJson_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_8).pe = function () {
    return this.h1g_1;
  };
  protoOf($serializer_8).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_14().g1g_1[0]];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function MomentsJson_init_$Init$(seen0, moments, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().h1g_1);
    }
    if (0 === (seen0 & 1))
      $this.j1g_1 = emptyList();
    else
      $this.j1g_1 = moments;
    return $this;
  }
  function MomentsJson_init_$Create$(seen0, moments, serializationConstructorMarker) {
    return MomentsJson_init_$Init$(seen0, moments, serializationConstructorMarker, objectCreate(protoOf(MomentsJson)));
  }
  function MomentsJson(moments) {
    Companion_getInstance_14();
    moments = moments === VOID ? emptyList() : moments;
    this.j1g_1 = moments;
  }
  protoOf(MomentsJson).toString = function () {
    return 'MomentsJson(moments=' + toString_0(this.j1g_1) + ')';
  };
  protoOf(MomentsJson).hashCode = function () {
    return hashCode(this.j1g_1);
  };
  protoOf(MomentsJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MomentsJson))
      return false;
    var tmp0_other_with_cast = other instanceof MomentsJson ? other : THROW_CCE();
    if (!equals(this.j1g_1, tmp0_other_with_cast.j1g_1))
      return false;
    return true;
  };
  function Companion_9() {
  }
  var Companion_instance_10;
  function Companion_getInstance_15() {
    return Companion_instance_10;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EntreeRevueJson', this, 4);
    tmp0_serialDesc.hk('element', false);
    tmp0_serialDesc.hk('aConfirmer', false);
    tmp0_serialDesc.hk('planManquant', false);
    tmp0_serialDesc.hk('urgence', false);
    this.k1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).l1g = function (encoder, value) {
    var tmp0_desc = this.k1g_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.xg(tmp0_desc, 0, $serializer_getInstance(), value.m1g_1);
    tmp1_output.ug(tmp0_desc, 1, value.n1g_1);
    tmp1_output.ug(tmp0_desc, 2, value.o1g_1);
    tmp1_output.wg(tmp0_desc, 3, value.p1g_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_9).qe = function (encoder, value) {
    return this.l1g(encoder, value instanceof EntreeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_9).re = function (decoder) {
    var tmp0_desc = this.k1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.ag(tmp0_desc);
    if (tmp8_input.jg()) {
      tmp4_local0 = tmp8_input.fg(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.cg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.cg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.fg(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.cg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.cg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.bg(tmp0_desc);
    return EntreeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).pe = function () {
    return this.k1g_1;
  };
  protoOf($serializer_9).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_9().k1g_1);
    }
    $this.m1g_1 = element;
    $this.n1g_1 = aConfirmer;
    $this.o1g_1 = planManquant;
    $this.p1g_1 = urgence;
    return $this;
  }
  function EntreeRevueJson_init_$Create$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker) {
    return EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, objectCreate(protoOf(EntreeRevueJson)));
  }
  function EntreeRevueJson(element, aConfirmer, planManquant, urgence) {
    this.m1g_1 = element;
    this.n1g_1 = aConfirmer;
    this.o1g_1 = planManquant;
    this.p1g_1 = urgence;
  }
  protoOf(EntreeRevueJson).toString = function () {
    return 'EntreeRevueJson(element=' + this.m1g_1.toString() + ', aConfirmer=' + this.n1g_1 + ', planManquant=' + this.o1g_1 + ', urgence=' + this.p1g_1 + ')';
  };
  protoOf(EntreeRevueJson).hashCode = function () {
    var result = this.m1g_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.n1g_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.o1g_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p1g_1) | 0;
    return result;
  };
  protoOf(EntreeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevueJson ? other : THROW_CCE();
    if (!this.m1g_1.equals(tmp0_other_with_cast.m1g_1))
      return false;
    if (!(this.n1g_1 === tmp0_other_with_cast.n1g_1))
      return false;
    if (!(this.o1g_1 === tmp0_other_with_cast.o1g_1))
      return false;
    if (!(this.p1g_1 === tmp0_other_with_cast.p1g_1))
      return false;
    return true;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q1g_1 = [null, new ArrayListSerializer($serializer_getInstance_9())];
  }
  var Companion_instance_11;
  function Companion_getInstance_16() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.GroupeRevueJson', this, 2);
    tmp0_serialDesc.hk('captureId', false);
    tmp0_serialDesc.hk('entrees', false);
    this.r1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).s1g = function (encoder, value) {
    var tmp0_desc = this.r1g_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().q1g_1;
    tmp1_output.wg(tmp0_desc, 0, value.t1g_1);
    tmp1_output.xg(tmp0_desc, 1, tmp2_cached[1], value.u1g_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_10).qe = function (encoder, value) {
    return this.s1g(encoder, value instanceof GroupeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_10).re = function (decoder) {
    var tmp0_desc = this.r1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ag(tmp0_desc);
    var tmp7_cached = Companion_getInstance_16().q1g_1;
    if (tmp6_input.jg()) {
      tmp4_local0 = tmp6_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.fg(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.fg(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bg(tmp0_desc);
    return GroupeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).pe = function () {
    return this.r1g_1;
  };
  protoOf($serializer_10).jk = function () {
    var tmp0_cached = Companion_getInstance_16().q1g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1]];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().r1g_1);
    }
    $this.t1g_1 = captureId;
    $this.u1g_1 = entrees;
    return $this;
  }
  function GroupeRevueJson_init_$Create$(seen0, captureId, entrees, serializationConstructorMarker) {
    return GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, objectCreate(protoOf(GroupeRevueJson)));
  }
  function GroupeRevueJson(captureId, entrees) {
    Companion_getInstance_16();
    this.t1g_1 = captureId;
    this.u1g_1 = entrees;
  }
  protoOf(GroupeRevueJson).toString = function () {
    return 'GroupeRevueJson(captureId=' + this.t1g_1 + ', entrees=' + toString_0(this.u1g_1) + ')';
  };
  protoOf(GroupeRevueJson).hashCode = function () {
    var result = getStringHashCode(this.t1g_1);
    result = imul(result, 31) + hashCode(this.u1g_1) | 0;
    return result;
  };
  protoOf(GroupeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof GroupeRevueJson ? other : THROW_CCE();
    if (!(this.t1g_1 === tmp0_other_with_cast.t1g_1))
      return false;
    if (!equals(this.u1g_1, tmp0_other_with_cast.u1g_1))
      return false;
    return true;
  };
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1g_1 = [null, null, null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_11).p1c = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_12;
  function Companion_getInstance_17() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RelanceJson', this, 7);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('type', false);
    tmp0_serialDesc.hk('interlocuteur', true);
    tmp0_serialDesc.hk('echeance', true);
    tmp0_serialDesc.hk('motif', false);
    tmp0_serialDesc.hk('options', false);
    this.w1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).x1g = function (encoder, value) {
    var tmp0_desc = this.w1g_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().v1g_1;
    tmp1_output.wg(tmp0_desc, 0, value.y1g_1);
    tmp1_output.wg(tmp0_desc, 1, value.z1g_1);
    tmp1_output.wg(tmp0_desc, 2, value.a1h_1);
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !(value.b1h_1 == null)) {
      tmp1_output.zg(tmp0_desc, 3, StringSerializer_getInstance(), value.b1h_1);
    }
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !(value.c1h_1 == null)) {
      tmp1_output.zg(tmp0_desc, 4, StringSerializer_getInstance(), value.c1h_1);
    }
    tmp1_output.wg(tmp0_desc, 5, value.d1h_1);
    tmp1_output.xg(tmp0_desc, 6, tmp2_cached[6], value.e1h_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_11).qe = function (encoder, value) {
    return this.x1g(encoder, value instanceof RelanceJson ? value : THROW_CCE());
  };
  protoOf($serializer_11).re = function (decoder) {
    var tmp0_desc = this.w1g_1;
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
    var tmp11_input = decoder.ag(tmp0_desc);
    var tmp12_cached = Companion_getInstance_17().v1g_1;
    if (tmp11_input.jg()) {
      tmp4_local0 = tmp11_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.hg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.hg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.eg(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.fg(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.hg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.hg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.eg(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.fg(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.bg(tmp0_desc);
    return RelanceJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_11).pe = function () {
    return this.w1g_1;
  };
  protoOf($serializer_11).jk = function () {
    var tmp0_cached = Companion_getInstance_17().v1g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[6]];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, $this) {
    if (!(103 === (103 & seen0))) {
      throwMissingFieldException(seen0, 103, $serializer_getInstance_11().w1g_1);
    }
    $this.y1g_1 = elementId;
    $this.z1g_1 = texte;
    $this.a1h_1 = type;
    if (0 === (seen0 & 8))
      $this.b1h_1 = null;
    else
      $this.b1h_1 = interlocuteur;
    if (0 === (seen0 & 16))
      $this.c1h_1 = null;
    else
      $this.c1h_1 = echeance;
    $this.d1h_1 = motif;
    $this.e1h_1 = options;
    return $this;
  }
  function RelanceJson_init_$Create$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker) {
    return RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, objectCreate(protoOf(RelanceJson)));
  }
  function RelanceJson(elementId, texte, type, interlocuteur, echeance, motif, options) {
    Companion_getInstance_17();
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    echeance = echeance === VOID ? null : echeance;
    this.y1g_1 = elementId;
    this.z1g_1 = texte;
    this.a1h_1 = type;
    this.b1h_1 = interlocuteur;
    this.c1h_1 = echeance;
    this.d1h_1 = motif;
    this.e1h_1 = options;
  }
  protoOf(RelanceJson).toString = function () {
    return 'RelanceJson(elementId=' + this.y1g_1 + ', texte=' + this.z1g_1 + ', type=' + this.a1h_1 + ', interlocuteur=' + this.b1h_1 + ', echeance=' + this.c1h_1 + ', motif=' + this.d1h_1 + ', options=' + toString_0(this.e1h_1) + ')';
  };
  protoOf(RelanceJson).hashCode = function () {
    var result = getStringHashCode(this.y1g_1);
    result = imul(result, 31) + getStringHashCode(this.z1g_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a1h_1) | 0;
    result = imul(result, 31) + (this.b1h_1 == null ? 0 : getStringHashCode(this.b1h_1)) | 0;
    result = imul(result, 31) + (this.c1h_1 == null ? 0 : getStringHashCode(this.c1h_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1h_1) | 0;
    result = imul(result, 31) + hashCode(this.e1h_1) | 0;
    return result;
  };
  protoOf(RelanceJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelanceJson))
      return false;
    var tmp0_other_with_cast = other instanceof RelanceJson ? other : THROW_CCE();
    if (!(this.y1g_1 === tmp0_other_with_cast.y1g_1))
      return false;
    if (!(this.z1g_1 === tmp0_other_with_cast.z1g_1))
      return false;
    if (!(this.a1h_1 === tmp0_other_with_cast.a1h_1))
      return false;
    if (!(this.b1h_1 == tmp0_other_with_cast.b1h_1))
      return false;
    if (!(this.c1h_1 == tmp0_other_with_cast.c1h_1))
      return false;
    if (!(this.d1h_1 === tmp0_other_with_cast.d1h_1))
      return false;
    if (!equals(this.e1h_1, tmp0_other_with_cast.e1h_1))
      return false;
    return true;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).p1c = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_13;
  function Companion_getInstance_18() {
    return Companion_instance_13;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviJson', this, 2);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('derniereNouvelle', false);
    this.f1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).g1h = function (encoder, value) {
    var tmp0_desc = this.f1h_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.h1h_1);
    tmp1_output.wg(tmp0_desc, 1, value.i1h_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_12).qe = function (encoder, value) {
    return this.g1h(encoder, value instanceof SuiviJson ? value : THROW_CCE());
  };
  protoOf($serializer_12).re = function (decoder) {
    var tmp0_desc = this.f1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ag(tmp0_desc);
    if (tmp6_input.jg()) {
      tmp4_local0 = tmp6_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bg(tmp0_desc);
    return SuiviJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).pe = function () {
    return this.f1h_1;
  };
  protoOf($serializer_12).jk = function () {
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
  function SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_12().f1h_1);
    }
    $this.h1h_1 = elementId;
    $this.i1h_1 = derniereNouvelle;
    return $this;
  }
  function SuiviJson_init_$Create$(seen0, elementId, derniereNouvelle, serializationConstructorMarker) {
    return SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, objectCreate(protoOf(SuiviJson)));
  }
  function SuiviJson() {
  }
  protoOf(SuiviJson).toString = function () {
    return 'SuiviJson(elementId=' + this.h1h_1 + ', derniereNouvelle=' + this.i1h_1 + ')';
  };
  protoOf(SuiviJson).hashCode = function () {
    var result = getStringHashCode(this.h1h_1);
    result = imul(result, 31) + getStringHashCode(this.i1h_1) | 0;
    return result;
  };
  protoOf(SuiviJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviJson ? other : THROW_CCE();
    if (!(this.h1h_1 === tmp0_other_with_cast.h1h_1))
      return false;
    if (!(this.i1h_1 === tmp0_other_with_cast.i1h_1))
      return false;
    return true;
  };
  function Companion_13() {
  }
  protoOf(Companion_13).p1c = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_14;
  function Companion_getInstance_19() {
    return Companion_instance_14;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviRappelJson', this, 3);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('planPoseLe', false);
    tmp0_serialDesc.hk('foisIgnore', true);
    this.j1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).k1h = function (encoder, value) {
    var tmp0_desc = this.j1h_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.l1h_1);
    tmp1_output.wg(tmp0_desc, 1, value.m1h_1);
    if (tmp1_output.dh(tmp0_desc, 2) ? true : !(value.n1h_1 === 0)) {
      tmp1_output.vg(tmp0_desc, 2, value.n1h_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_13).qe = function (encoder, value) {
    return this.k1h(encoder, value instanceof SuiviRappelJson ? value : THROW_CCE());
  };
  protoOf($serializer_13).re = function (decoder) {
    var tmp0_desc = this.j1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.ag(tmp0_desc);
    if (tmp7_input.jg()) {
      tmp4_local0 = tmp7_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.dg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.dg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.bg(tmp0_desc);
    return SuiviRappelJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_13).pe = function () {
    return this.j1h_1;
  };
  protoOf($serializer_13).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function SuiviRappelJson_init_$Init$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_13().j1h_1);
    }
    $this.l1h_1 = elementId;
    $this.m1h_1 = planPoseLe;
    if (0 === (seen0 & 4))
      $this.n1h_1 = 0;
    else
      $this.n1h_1 = foisIgnore;
    return $this;
  }
  function SuiviRappelJson_init_$Create$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker) {
    return SuiviRappelJson_init_$Init$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker, objectCreate(protoOf(SuiviRappelJson)));
  }
  function SuiviRappelJson() {
  }
  protoOf(SuiviRappelJson).toString = function () {
    return 'SuiviRappelJson(elementId=' + this.l1h_1 + ', planPoseLe=' + this.m1h_1 + ', foisIgnore=' + this.n1h_1 + ')';
  };
  protoOf(SuiviRappelJson).hashCode = function () {
    var result = getStringHashCode(this.l1h_1);
    result = imul(result, 31) + getStringHashCode(this.m1h_1) | 0;
    result = imul(result, 31) + this.n1h_1 | 0;
    return result;
  };
  protoOf(SuiviRappelJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviRappelJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviRappelJson ? other : THROW_CCE();
    if (!(this.l1h_1 === tmp0_other_with_cast.l1h_1))
      return false;
    if (!(this.m1h_1 === tmp0_other_with_cast.m1h_1))
      return false;
    if (!(this.n1h_1 === tmp0_other_with_cast.n1h_1))
      return false;
    return true;
  };
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_20() {
    return Companion_instance_15;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RappelLivreJson', this, 5);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('declencheur', false);
    tmp0_serialDesc.hk('substitution', true);
    tmp0_serialDesc.hk('enRetard', true);
    this.o1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).p1h = function (encoder, value) {
    var tmp0_desc = this.o1h_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.q1h_1);
    tmp1_output.wg(tmp0_desc, 1, value.r1h_1);
    tmp1_output.wg(tmp0_desc, 2, value.s1h_1);
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !(value.t1h_1 === '')) {
      tmp1_output.wg(tmp0_desc, 3, value.t1h_1);
    }
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !(value.u1h_1 === false)) {
      tmp1_output.ug(tmp0_desc, 4, value.u1h_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_14).qe = function (encoder, value) {
    return this.p1h(encoder, value instanceof RappelLivreJson ? value : THROW_CCE());
  };
  protoOf($serializer_14).re = function (decoder) {
    var tmp0_desc = this.o1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.ag(tmp0_desc);
    if (tmp9_input.jg()) {
      tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.cg(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.cg(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bg(tmp0_desc);
    return RappelLivreJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_14).pe = function () {
    return this.o1h_1;
  };
  protoOf($serializer_14).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function RappelLivreJson_init_$Init$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_14().o1h_1);
    }
    $this.q1h_1 = elementId;
    $this.r1h_1 = texte;
    $this.s1h_1 = declencheur;
    if (0 === (seen0 & 8))
      $this.t1h_1 = '';
    else
      $this.t1h_1 = substitution;
    if (0 === (seen0 & 16))
      $this.u1h_1 = false;
    else
      $this.u1h_1 = enRetard;
    return $this;
  }
  function RappelLivreJson_init_$Create$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker) {
    return RappelLivreJson_init_$Init$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker, objectCreate(protoOf(RappelLivreJson)));
  }
  function RappelLivreJson(elementId, texte, declencheur, substitution, enRetard) {
    substitution = substitution === VOID ? '' : substitution;
    enRetard = enRetard === VOID ? false : enRetard;
    this.q1h_1 = elementId;
    this.r1h_1 = texte;
    this.s1h_1 = declencheur;
    this.t1h_1 = substitution;
    this.u1h_1 = enRetard;
  }
  protoOf(RappelLivreJson).toString = function () {
    return 'RappelLivreJson(elementId=' + this.q1h_1 + ', texte=' + this.r1h_1 + ', declencheur=' + this.s1h_1 + ', substitution=' + this.t1h_1 + ', enRetard=' + this.u1h_1 + ')';
  };
  protoOf(RappelLivreJson).hashCode = function () {
    var result = getStringHashCode(this.q1h_1);
    result = imul(result, 31) + getStringHashCode(this.r1h_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1h_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u1h_1) | 0;
    return result;
  };
  protoOf(RappelLivreJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelLivreJson))
      return false;
    var tmp0_other_with_cast = other instanceof RappelLivreJson ? other : THROW_CCE();
    if (!(this.q1h_1 === tmp0_other_with_cast.q1h_1))
      return false;
    if (!(this.r1h_1 === tmp0_other_with_cast.r1h_1))
      return false;
    if (!(this.s1h_1 === tmp0_other_with_cast.s1h_1))
      return false;
    if (!(this.t1h_1 === tmp0_other_with_cast.t1h_1))
      return false;
    if (!(this.u1h_1 === tmp0_other_with_cast.u1h_1))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1h_1 = [null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  var Companion_instance_16;
  function Companion_getInstance_21() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EscaladeJson', this, 4);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('motif', false);
    tmp0_serialDesc.hk('options', false);
    this.w1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).x1h = function (encoder, value) {
    var tmp0_desc = this.w1h_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().v1h_1;
    tmp1_output.wg(tmp0_desc, 0, value.y1h_1);
    tmp1_output.wg(tmp0_desc, 1, value.z1h_1);
    tmp1_output.wg(tmp0_desc, 2, value.a1i_1);
    tmp1_output.xg(tmp0_desc, 3, tmp2_cached[3], value.b1i_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_15).qe = function (encoder, value) {
    return this.x1h(encoder, value instanceof EscaladeJson ? value : THROW_CCE());
  };
  protoOf($serializer_15).re = function (decoder) {
    var tmp0_desc = this.w1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.ag(tmp0_desc);
    var tmp9_cached = Companion_getInstance_21().v1h_1;
    if (tmp8_input.jg()) {
      tmp4_local0 = tmp8_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.fg(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.fg(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.bg(tmp0_desc);
    return EscaladeJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_15).pe = function () {
    return this.w1h_1;
  };
  protoOf($serializer_15).jk = function () {
    var tmp0_cached = Companion_getInstance_21().v1h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3]];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function EscaladeJson_init_$Init$(seen0, elementId, texte, motif, options, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_15().w1h_1);
    }
    $this.y1h_1 = elementId;
    $this.z1h_1 = texte;
    $this.a1i_1 = motif;
    $this.b1i_1 = options;
    return $this;
  }
  function EscaladeJson_init_$Create$(seen0, elementId, texte, motif, options, serializationConstructorMarker) {
    return EscaladeJson_init_$Init$(seen0, elementId, texte, motif, options, serializationConstructorMarker, objectCreate(protoOf(EscaladeJson)));
  }
  function EscaladeJson(elementId, texte, motif, options) {
    Companion_getInstance_21();
    this.y1h_1 = elementId;
    this.z1h_1 = texte;
    this.a1i_1 = motif;
    this.b1i_1 = options;
  }
  protoOf(EscaladeJson).toString = function () {
    return 'EscaladeJson(elementId=' + this.y1h_1 + ', texte=' + this.z1h_1 + ', motif=' + this.a1i_1 + ', options=' + toString_0(this.b1i_1) + ')';
  };
  protoOf(EscaladeJson).hashCode = function () {
    var result = getStringHashCode(this.y1h_1);
    result = imul(result, 31) + getStringHashCode(this.z1h_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a1i_1) | 0;
    result = imul(result, 31) + hashCode(this.b1i_1) | 0;
    return result;
  };
  protoOf(EscaladeJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EscaladeJson))
      return false;
    var tmp0_other_with_cast = other instanceof EscaladeJson ? other : THROW_CCE();
    if (!(this.y1h_1 === tmp0_other_with_cast.y1h_1))
      return false;
    if (!(this.z1h_1 === tmp0_other_with_cast.z1h_1))
      return false;
    if (!(this.a1i_1 === tmp0_other_with_cast.a1i_1))
      return false;
    if (!equals(this.b1i_1, tmp0_other_with_cast.b1i_1))
      return false;
    return true;
  };
  function Companion_16() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c1i_1 = [null, new ArrayListSerializer($serializer_getInstance_14()), new ArrayListSerializer($serializer_getInstance_15()), null, null, null];
  }
  protoOf(Companion_16).p1c = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_17;
  function Companion_getInstance_22() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RappelsDuMomentJson', this, 6);
    tmp0_serialDesc.hk('titre', true);
    tmp0_serialDesc.hk('rappels', true);
    tmp0_serialDesc.hk('escalades', true);
    tmp0_serialDesc.hk('point', true);
    tmp0_serialDesc.hk('reunionEnCours', true);
    tmp0_serialDesc.hk('retenus', true);
    this.d1i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).e1i = function (encoder, value) {
    var tmp0_desc = this.d1i_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().c1i_1;
    if (tmp1_output.dh(tmp0_desc, 0) ? true : !(value.f1i_1 === '')) {
      tmp1_output.wg(tmp0_desc, 0, value.f1i_1);
    }
    if (tmp1_output.dh(tmp0_desc, 1) ? true : !equals(value.g1i_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 1, tmp2_cached[1], value.g1i_1);
    }
    if (tmp1_output.dh(tmp0_desc, 2) ? true : !equals(value.h1i_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 2, tmp2_cached[2], value.h1i_1);
    }
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !(value.i1i_1 === '')) {
      tmp1_output.wg(tmp0_desc, 3, value.i1i_1);
    }
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !(value.j1i_1 == null)) {
      tmp1_output.zg(tmp0_desc, 4, StringSerializer_getInstance(), value.j1i_1);
    }
    if (tmp1_output.dh(tmp0_desc, 5) ? true : !(value.k1i_1 === 0)) {
      tmp1_output.vg(tmp0_desc, 5, value.k1i_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_16).qe = function (encoder, value) {
    return this.e1i(encoder, value instanceof RappelsDuMomentJson ? value : THROW_CCE());
  };
  protoOf($serializer_16).re = function (decoder) {
    var tmp0_desc = this.d1i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.ag(tmp0_desc);
    var tmp11_cached = Companion_getInstance_22().c1i_1;
    if (tmp10_input.jg()) {
      tmp4_local0 = tmp10_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.fg(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.fg(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.hg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.dg(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.fg(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.fg(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.hg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.dg(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.bg(tmp0_desc);
    return RappelsDuMomentJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_16).pe = function () {
    return this.d1i_1;
  };
  protoOf($serializer_16).jk = function () {
    var tmp0_cached = Companion_getInstance_22().c1i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1], tmp0_cached[2], StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance()];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function RappelsDuMomentJson_init_$Init$(seen0, titre, rappels, escalades, point, reunionEnCours, retenus, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().d1i_1);
    }
    if (0 === (seen0 & 1))
      $this.f1i_1 = '';
    else
      $this.f1i_1 = titre;
    if (0 === (seen0 & 2))
      $this.g1i_1 = emptyList();
    else
      $this.g1i_1 = rappels;
    if (0 === (seen0 & 4))
      $this.h1i_1 = emptyList();
    else
      $this.h1i_1 = escalades;
    if (0 === (seen0 & 8))
      $this.i1i_1 = '';
    else
      $this.i1i_1 = point;
    if (0 === (seen0 & 16))
      $this.j1i_1 = null;
    else
      $this.j1i_1 = reunionEnCours;
    if (0 === (seen0 & 32))
      $this.k1i_1 = 0;
    else
      $this.k1i_1 = retenus;
    return $this;
  }
  function RappelsDuMomentJson_init_$Create$(seen0, titre, rappels, escalades, point, reunionEnCours, retenus, serializationConstructorMarker) {
    return RappelsDuMomentJson_init_$Init$(seen0, titre, rappels, escalades, point, reunionEnCours, retenus, serializationConstructorMarker, objectCreate(protoOf(RappelsDuMomentJson)));
  }
  function RappelsDuMomentJson(titre, rappels, escalades, point, reunionEnCours, retenus) {
    Companion_getInstance_22();
    titre = titre === VOID ? '' : titre;
    rappels = rappels === VOID ? emptyList() : rappels;
    escalades = escalades === VOID ? emptyList() : escalades;
    point = point === VOID ? '' : point;
    reunionEnCours = reunionEnCours === VOID ? null : reunionEnCours;
    retenus = retenus === VOID ? 0 : retenus;
    this.f1i_1 = titre;
    this.g1i_1 = rappels;
    this.h1i_1 = escalades;
    this.i1i_1 = point;
    this.j1i_1 = reunionEnCours;
    this.k1i_1 = retenus;
  }
  protoOf(RappelsDuMomentJson).toString = function () {
    return 'RappelsDuMomentJson(titre=' + this.f1i_1 + ', rappels=' + toString_0(this.g1i_1) + ', escalades=' + toString_0(this.h1i_1) + ', point=' + this.i1i_1 + ', reunionEnCours=' + this.j1i_1 + ', retenus=' + this.k1i_1 + ')';
  };
  protoOf(RappelsDuMomentJson).hashCode = function () {
    var result = getStringHashCode(this.f1i_1);
    result = imul(result, 31) + hashCode(this.g1i_1) | 0;
    result = imul(result, 31) + hashCode(this.h1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i1i_1) | 0;
    result = imul(result, 31) + (this.j1i_1 == null ? 0 : getStringHashCode(this.j1i_1)) | 0;
    result = imul(result, 31) + this.k1i_1 | 0;
    return result;
  };
  protoOf(RappelsDuMomentJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelsDuMomentJson))
      return false;
    var tmp0_other_with_cast = other instanceof RappelsDuMomentJson ? other : THROW_CCE();
    if (!(this.f1i_1 === tmp0_other_with_cast.f1i_1))
      return false;
    if (!equals(this.g1i_1, tmp0_other_with_cast.g1i_1))
      return false;
    if (!equals(this.h1i_1, tmp0_other_with_cast.h1i_1))
      return false;
    if (!(this.i1i_1 === tmp0_other_with_cast.i1i_1))
      return false;
    if (!(this.j1i_1 == tmp0_other_with_cast.j1i_1))
      return false;
    if (!(this.k1i_1 === tmp0_other_with_cast.k1i_1))
      return false;
    return true;
  };
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l1i_1 = [new ArrayListSerializer($serializer_getInstance_10()), null, null, null, null];
  }
  protoOf(Companion_17).p1c = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_18;
  function Companion_getInstance_23() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RevueJson', this, 5);
    tmp0_serialDesc.hk('groupes', false);
    tmp0_serialDesc.hk('total', false);
    tmp0_serialDesc.hk('reduite', true);
    tmp0_serialDesc.hk('motifReduction', true);
    tmp0_serialDesc.hk('demeurentEnFile', true);
    this.m1i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).n1i = function (encoder, value) {
    var tmp0_desc = this.m1i_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().l1i_1;
    tmp1_output.xg(tmp0_desc, 0, tmp2_cached[0], value.o1i_1);
    tmp1_output.vg(tmp0_desc, 1, value.p1i_1);
    if (tmp1_output.dh(tmp0_desc, 2) ? true : !(value.q1i_1 === false)) {
      tmp1_output.ug(tmp0_desc, 2, value.q1i_1);
    }
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !(value.r1i_1 === '')) {
      tmp1_output.wg(tmp0_desc, 3, value.r1i_1);
    }
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !(value.s1i_1 === 0)) {
      tmp1_output.vg(tmp0_desc, 4, value.s1i_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_17).qe = function (encoder, value) {
    return this.n1i(encoder, value instanceof RevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_17).re = function (decoder) {
    var tmp0_desc = this.m1i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.ag(tmp0_desc);
    var tmp10_cached = Companion_getInstance_23().l1i_1;
    if (tmp9_input.jg()) {
      tmp4_local0 = tmp9_input.fg(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.dg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.cg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.dg(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.fg(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.dg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.cg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.dg(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bg(tmp0_desc);
    return RevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_17).pe = function () {
    return this.m1i_1;
  };
  protoOf($serializer_17).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_23().l1i_1[0], IntSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_17().m1i_1);
    }
    $this.o1i_1 = groupes;
    $this.p1i_1 = total;
    if (0 === (seen0 & 4))
      $this.q1i_1 = false;
    else
      $this.q1i_1 = reduite;
    if (0 === (seen0 & 8))
      $this.r1i_1 = '';
    else
      $this.r1i_1 = motifReduction;
    if (0 === (seen0 & 16))
      $this.s1i_1 = 0;
    else
      $this.s1i_1 = demeurentEnFile;
    return $this;
  }
  function RevueJson_init_$Create$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker) {
    return RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, objectCreate(protoOf(RevueJson)));
  }
  function RevueJson(groupes, total, reduite, motifReduction, demeurentEnFile) {
    Companion_getInstance_23();
    reduite = reduite === VOID ? false : reduite;
    motifReduction = motifReduction === VOID ? '' : motifReduction;
    demeurentEnFile = demeurentEnFile === VOID ? 0 : demeurentEnFile;
    this.o1i_1 = groupes;
    this.p1i_1 = total;
    this.q1i_1 = reduite;
    this.r1i_1 = motifReduction;
    this.s1i_1 = demeurentEnFile;
  }
  protoOf(RevueJson).toString = function () {
    return 'RevueJson(groupes=' + toString_0(this.o1i_1) + ', total=' + this.p1i_1 + ', reduite=' + this.q1i_1 + ', motifReduction=' + this.r1i_1 + ', demeurentEnFile=' + this.s1i_1 + ')';
  };
  protoOf(RevueJson).hashCode = function () {
    var result = hashCode(this.o1i_1);
    result = imul(result, 31) + this.p1i_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r1i_1) | 0;
    result = imul(result, 31) + this.s1i_1 | 0;
    return result;
  };
  protoOf(RevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof RevueJson ? other : THROW_CCE();
    if (!equals(this.o1i_1, tmp0_other_with_cast.o1i_1))
      return false;
    if (!(this.p1i_1 === tmp0_other_with_cast.p1i_1))
      return false;
    if (!(this.q1i_1 === tmp0_other_with_cast.q1i_1))
      return false;
    if (!(this.r1i_1 === tmp0_other_with_cast.r1i_1))
      return false;
    if (!(this.s1i_1 === tmp0_other_with_cast.s1i_1))
      return false;
    return true;
  };
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t1i_1 = [new ArrayListSerializer($serializer_getInstance()), new ArrayListSerializer($serializer_getInstance_19())];
  }
  protoOf(Companion_18).p1c = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_19;
  function Companion_getInstance_24() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.AncrageJson', this, 2);
    tmp0_serialDesc.hk('retenus', false);
    tmp0_serialDesc.hk('ecartes', false);
    this.u1i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).v1i = function (encoder, value) {
    var tmp0_desc = this.u1i_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().t1i_1;
    tmp1_output.xg(tmp0_desc, 0, tmp2_cached[0], value.w1i_1);
    tmp1_output.xg(tmp0_desc, 1, tmp2_cached[1], value.x1i_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_18).qe = function (encoder, value) {
    return this.v1i(encoder, value instanceof AncrageJson ? value : THROW_CCE());
  };
  protoOf($serializer_18).re = function (decoder) {
    var tmp0_desc = this.u1i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ag(tmp0_desc);
    var tmp7_cached = Companion_getInstance_24().t1i_1;
    if (tmp6_input.jg()) {
      tmp4_local0 = tmp6_input.fg(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.fg(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.fg(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.fg(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bg(tmp0_desc);
    return AncrageJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_18).pe = function () {
    return this.u1i_1;
  };
  protoOf($serializer_18).jk = function () {
    var tmp0_cached = Companion_getInstance_24().t1i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1]];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_18().u1i_1);
    }
    $this.w1i_1 = retenus;
    $this.x1i_1 = ecartes;
    return $this;
  }
  function AncrageJson_init_$Create$(seen0, retenus, ecartes, serializationConstructorMarker) {
    return AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, objectCreate(protoOf(AncrageJson)));
  }
  function AncrageJson(retenus, ecartes) {
    Companion_getInstance_24();
    this.w1i_1 = retenus;
    this.x1i_1 = ecartes;
  }
  protoOf(AncrageJson).toString = function () {
    return 'AncrageJson(retenus=' + toString_0(this.w1i_1) + ', ecartes=' + toString_0(this.x1i_1) + ')';
  };
  protoOf(AncrageJson).hashCode = function () {
    var result = hashCode(this.w1i_1);
    result = imul(result, 31) + hashCode(this.x1i_1) | 0;
    return result;
  };
  protoOf(AncrageJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AncrageJson))
      return false;
    var tmp0_other_with_cast = other instanceof AncrageJson ? other : THROW_CCE();
    if (!equals(this.w1i_1, tmp0_other_with_cast.w1i_1))
      return false;
    if (!equals(this.x1i_1, tmp0_other_with_cast.x1i_1))
      return false;
    return true;
  };
  function Companion_19() {
  }
  var Companion_instance_20;
  function Companion_getInstance_25() {
    return Companion_instance_20;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EcarteJson', this, 2);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('raison', false);
    this.y1i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).z1i = function (encoder, value) {
    var tmp0_desc = this.y1i_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.a1j_1);
    tmp1_output.wg(tmp0_desc, 1, value.b1j_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_19).qe = function (encoder, value) {
    return this.z1i(encoder, value instanceof EcarteJson ? value : THROW_CCE());
  };
  protoOf($serializer_19).re = function (decoder) {
    var tmp0_desc = this.y1i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ag(tmp0_desc);
    if (tmp6_input.jg()) {
      tmp4_local0 = tmp6_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.bg(tmp0_desc);
    return EcarteJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_19).pe = function () {
    return this.y1i_1;
  };
  protoOf($serializer_19).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_19().y1i_1);
    }
    $this.a1j_1 = texte;
    $this.b1j_1 = raison;
    return $this;
  }
  function EcarteJson_init_$Create$(seen0, texte, raison, serializationConstructorMarker) {
    return EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, objectCreate(protoOf(EcarteJson)));
  }
  function EcarteJson(texte, raison) {
    this.a1j_1 = texte;
    this.b1j_1 = raison;
  }
  protoOf(EcarteJson).toString = function () {
    return 'EcarteJson(texte=' + this.a1j_1 + ', raison=' + this.b1j_1 + ')';
  };
  protoOf(EcarteJson).hashCode = function () {
    var result = getStringHashCode(this.a1j_1);
    result = imul(result, 31) + getStringHashCode(this.b1j_1) | 0;
    return result;
  };
  protoOf(EcarteJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EcarteJson))
      return false;
    var tmp0_other_with_cast = other instanceof EcarteJson ? other : THROW_CCE();
    if (!(this.a1j_1 === tmp0_other_with_cast.a1j_1))
      return false;
    if (!(this.b1j_1 === tmp0_other_with_cast.b1j_1))
      return false;
    return true;
  };
  function Companion_20() {
  }
  protoOf(Companion_20).p1c = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_21;
  function Companion_getInstance_26() {
    return Companion_instance_21;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CaptureJson', this, 4);
    tmp0_serialDesc.hk('id', false);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('creeLe', false);
    tmp0_serialDesc.hk('jour', true);
    this.c1j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).d1j = function (encoder, value) {
    var tmp0_desc = this.c1j_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.e1j_1);
    tmp1_output.wg(tmp0_desc, 1, value.f1j_1);
    tmp1_output.wg(tmp0_desc, 2, value.g1j_1);
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !(value.h1j_1 == null)) {
      tmp1_output.zg(tmp0_desc, 3, StringSerializer_getInstance(), value.h1j_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_20).qe = function (encoder, value) {
    return this.d1j(encoder, value instanceof CaptureJson ? value : THROW_CCE());
  };
  protoOf($serializer_20).re = function (decoder) {
    var tmp0_desc = this.c1j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.ag(tmp0_desc);
    if (tmp8_input.jg()) {
      tmp4_local0 = tmp8_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.hg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.hg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.bg(tmp0_desc);
    return CaptureJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_20).pe = function () {
    return this.c1j_1;
  };
  protoOf($serializer_20).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function CaptureJson_init_$Init$(seen0, id, texte, creeLe, jour, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_20().c1j_1);
    }
    $this.e1j_1 = id;
    $this.f1j_1 = texte;
    $this.g1j_1 = creeLe;
    if (0 === (seen0 & 8))
      $this.h1j_1 = null;
    else
      $this.h1j_1 = jour;
    return $this;
  }
  function CaptureJson_init_$Create$(seen0, id, texte, creeLe, jour, serializationConstructorMarker) {
    return CaptureJson_init_$Init$(seen0, id, texte, creeLe, jour, serializationConstructorMarker, objectCreate(protoOf(CaptureJson)));
  }
  function CaptureJson() {
  }
  protoOf(CaptureJson).toString = function () {
    return 'CaptureJson(id=' + this.e1j_1 + ', texte=' + this.f1j_1 + ', creeLe=' + this.g1j_1 + ', jour=' + this.h1j_1 + ')';
  };
  protoOf(CaptureJson).hashCode = function () {
    var result = getStringHashCode(this.e1j_1);
    result = imul(result, 31) + getStringHashCode(this.f1j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g1j_1) | 0;
    result = imul(result, 31) + (this.h1j_1 == null ? 0 : getStringHashCode(this.h1j_1)) | 0;
    return result;
  };
  protoOf(CaptureJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureJson))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureJson ? other : THROW_CCE();
    if (!(this.e1j_1 === tmp0_other_with_cast.e1j_1))
      return false;
    if (!(this.f1j_1 === tmp0_other_with_cast.f1j_1))
      return false;
    if (!(this.g1j_1 === tmp0_other_with_cast.g1j_1))
      return false;
    if (!(this.h1j_1 == tmp0_other_with_cast.h1j_1))
      return false;
    return true;
  };
  function Companion_21() {
  }
  var Companion_instance_22;
  function Companion_getInstance_27() {
    return Companion_instance_22;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CitationJson', this, 4);
    tmp0_serialDesc.hk('captureId', false);
    tmp0_serialDesc.hk('extrait', false);
    tmp0_serialDesc.hk('pourquoi', false);
    tmp0_serialDesc.hk('elementId', true);
    this.i1j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).j1j = function (encoder, value) {
    var tmp0_desc = this.i1j_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.k1j_1);
    tmp1_output.wg(tmp0_desc, 1, value.l1j_1);
    tmp1_output.wg(tmp0_desc, 2, value.m1j_1);
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !(value.n1j_1 == null)) {
      tmp1_output.zg(tmp0_desc, 3, StringSerializer_getInstance(), value.n1j_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_21).qe = function (encoder, value) {
    return this.j1j(encoder, value instanceof CitationJson ? value : THROW_CCE());
  };
  protoOf($serializer_21).re = function (decoder) {
    var tmp0_desc = this.i1j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.ag(tmp0_desc);
    if (tmp8_input.jg()) {
      tmp4_local0 = tmp8_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.hg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.hg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.bg(tmp0_desc);
    return CitationJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_21).pe = function () {
    return this.i1j_1;
  };
  protoOf($serializer_21).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_21().i1j_1);
    }
    $this.k1j_1 = captureId;
    $this.l1j_1 = extrait;
    $this.m1j_1 = pourquoi;
    if (0 === (seen0 & 8))
      $this.n1j_1 = null;
    else
      $this.n1j_1 = elementId;
    return $this;
  }
  function CitationJson_init_$Create$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker) {
    return CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, objectCreate(protoOf(CitationJson)));
  }
  function CitationJson(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.k1j_1 = captureId;
    this.l1j_1 = extrait;
    this.m1j_1 = pourquoi;
    this.n1j_1 = elementId;
  }
  protoOf(CitationJson).toString = function () {
    return 'CitationJson(captureId=' + this.k1j_1 + ', extrait=' + this.l1j_1 + ', pourquoi=' + this.m1j_1 + ', elementId=' + this.n1j_1 + ')';
  };
  protoOf(CitationJson).hashCode = function () {
    var result = getStringHashCode(this.k1j_1);
    result = imul(result, 31) + getStringHashCode(this.l1j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1j_1) | 0;
    result = imul(result, 31) + (this.n1j_1 == null ? 0 : getStringHashCode(this.n1j_1)) | 0;
    return result;
  };
  protoOf(CitationJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CitationJson))
      return false;
    var tmp0_other_with_cast = other instanceof CitationJson ? other : THROW_CCE();
    if (!(this.k1j_1 === tmp0_other_with_cast.k1j_1))
      return false;
    if (!(this.l1j_1 === tmp0_other_with_cast.l1j_1))
      return false;
    if (!(this.m1j_1 === tmp0_other_with_cast.m1j_1))
      return false;
    if (!(this.n1j_1 == tmp0_other_with_cast.n1j_1))
      return false;
    return true;
  };
  function Companion_22() {
    Companion_instance_23 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o1j_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_21()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_22).p1c = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_23;
  function Companion_getInstance_28() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ReponseJson', this, 6);
    tmp0_serialDesc.hk('question', false);
    tmp0_serialDesc.hk('enonce', false);
    tmp0_serialDesc.hk('fondee', false);
    tmp0_serialDesc.hk('citations', false);
    tmp0_serialDesc.hk('indisponibleHorsLigne', true);
    tmp0_serialDesc.hk('nonPrisEnCompte', true);
    this.p1j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).q1j = function (encoder, value) {
    var tmp0_desc = this.p1j_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().o1j_1;
    tmp1_output.wg(tmp0_desc, 0, value.r1j_1);
    tmp1_output.wg(tmp0_desc, 1, value.s1j_1);
    tmp1_output.ug(tmp0_desc, 2, value.t1j_1);
    tmp1_output.xg(tmp0_desc, 3, tmp2_cached[3], value.u1j_1);
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !equals(value.v1j_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 4, tmp2_cached[4], value.v1j_1);
    }
    if (tmp1_output.dh(tmp0_desc, 5) ? true : !equals(value.w1j_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 5, tmp2_cached[5], value.w1j_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_22).qe = function (encoder, value) {
    return this.q1j(encoder, value instanceof ReponseJson ? value : THROW_CCE());
  };
  protoOf($serializer_22).re = function (decoder) {
    var tmp0_desc = this.p1j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.ag(tmp0_desc);
    var tmp11_cached = Companion_getInstance_28().o1j_1;
    if (tmp10_input.jg()) {
      tmp4_local0 = tmp10_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.cg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.fg(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.fg(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.fg(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.cg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.fg(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.fg(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.fg(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.bg(tmp0_desc);
    return ReponseJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_22).pe = function () {
    return this.p1j_1;
  };
  protoOf($serializer_22).jk = function () {
    var tmp0_cached = Companion_getInstance_28().o1j_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3], tmp0_cached[4], tmp0_cached[5]];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_22().p1j_1);
    }
    $this.r1j_1 = question;
    $this.s1j_1 = enonce;
    $this.t1j_1 = fondee;
    $this.u1j_1 = citations;
    if (0 === (seen0 & 16))
      $this.v1j_1 = emptyList();
    else
      $this.v1j_1 = indisponibleHorsLigne;
    if (0 === (seen0 & 32))
      $this.w1j_1 = emptyList();
    else
      $this.w1j_1 = nonPrisEnCompte;
    return $this;
  }
  function ReponseJson_init_$Create$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker) {
    return ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker, objectCreate(protoOf(ReponseJson)));
  }
  function ReponseJson(question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    Companion_getInstance_28();
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.r1j_1 = question;
    this.s1j_1 = enonce;
    this.t1j_1 = fondee;
    this.u1j_1 = citations;
    this.v1j_1 = indisponibleHorsLigne;
    this.w1j_1 = nonPrisEnCompte;
  }
  protoOf(ReponseJson).toString = function () {
    return 'ReponseJson(question=' + this.r1j_1 + ', enonce=' + this.s1j_1 + ', fondee=' + this.t1j_1 + ', citations=' + toString_0(this.u1j_1) + ', indisponibleHorsLigne=' + toString_0(this.v1j_1) + ', nonPrisEnCompte=' + toString_0(this.w1j_1) + ')';
  };
  protoOf(ReponseJson).hashCode = function () {
    var result = getStringHashCode(this.r1j_1);
    result = imul(result, 31) + getStringHashCode(this.s1j_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t1j_1) | 0;
    result = imul(result, 31) + hashCode(this.u1j_1) | 0;
    result = imul(result, 31) + hashCode(this.v1j_1) | 0;
    result = imul(result, 31) + hashCode(this.w1j_1) | 0;
    return result;
  };
  protoOf(ReponseJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReponseJson))
      return false;
    var tmp0_other_with_cast = other instanceof ReponseJson ? other : THROW_CCE();
    if (!(this.r1j_1 === tmp0_other_with_cast.r1j_1))
      return false;
    if (!(this.s1j_1 === tmp0_other_with_cast.s1j_1))
      return false;
    if (!(this.t1j_1 === tmp0_other_with_cast.t1j_1))
      return false;
    if (!equals(this.u1j_1, tmp0_other_with_cast.u1j_1))
      return false;
    if (!equals(this.v1j_1, tmp0_other_with_cast.v1j_1))
      return false;
    if (!equals(this.w1j_1, tmp0_other_with_cast.w1j_1))
      return false;
    return true;
  };
  function Companion_23() {
  }
  var Companion_instance_24;
  function Companion_getInstance_29() {
    return Companion_instance_24;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CandidatJson', this, 3);
    tmp0_serialDesc.hk('entiteId', false);
    tmp0_serialDesc.hk('nom', false);
    tmp0_serialDesc.hk('appui', false);
    this.x1j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).y1j = function (encoder, value) {
    var tmp0_desc = this.x1j_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.z1j_1);
    tmp1_output.wg(tmp0_desc, 1, value.a1k_1);
    tmp1_output.wg(tmp0_desc, 2, value.b1k_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_23).qe = function (encoder, value) {
    return this.y1j(encoder, value instanceof CandidatJson ? value : THROW_CCE());
  };
  protoOf($serializer_23).re = function (decoder) {
    var tmp0_desc = this.x1j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.ag(tmp0_desc);
    if (tmp7_input.jg()) {
      tmp4_local0 = tmp7_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.bg(tmp0_desc);
    return CandidatJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_23).pe = function () {
    return this.x1j_1;
  };
  protoOf($serializer_23).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function CandidatJson_init_$Init$(seen0, entiteId, nom, appui, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_23().x1j_1);
    }
    $this.z1j_1 = entiteId;
    $this.a1k_1 = nom;
    $this.b1k_1 = appui;
    return $this;
  }
  function CandidatJson_init_$Create$(seen0, entiteId, nom, appui, serializationConstructorMarker) {
    return CandidatJson_init_$Init$(seen0, entiteId, nom, appui, serializationConstructorMarker, objectCreate(protoOf(CandidatJson)));
  }
  function CandidatJson(entiteId, nom, appui) {
    this.z1j_1 = entiteId;
    this.a1k_1 = nom;
    this.b1k_1 = appui;
  }
  protoOf(CandidatJson).toString = function () {
    return 'CandidatJson(entiteId=' + this.z1j_1 + ', nom=' + this.a1k_1 + ', appui=' + this.b1k_1 + ')';
  };
  protoOf(CandidatJson).hashCode = function () {
    var result = getStringHashCode(this.z1j_1);
    result = imul(result, 31) + getStringHashCode(this.a1k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1k_1) | 0;
    return result;
  };
  protoOf(CandidatJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CandidatJson))
      return false;
    var tmp0_other_with_cast = other instanceof CandidatJson ? other : THROW_CCE();
    if (!(this.z1j_1 === tmp0_other_with_cast.z1j_1))
      return false;
    if (!(this.a1k_1 === tmp0_other_with_cast.a1k_1))
      return false;
    if (!(this.b1k_1 === tmp0_other_with_cast.b1k_1))
      return false;
    return true;
  };
  function Companion_24() {
    Companion_instance_25 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c1k_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_23()), null];
  }
  protoOf(Companion_24).p1c = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_25;
  function Companion_getInstance_30() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ResolutionJson', this, 5);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('reference', false);
    tmp0_serialDesc.hk('retenu', true);
    tmp0_serialDesc.hk('candidats', true);
    tmp0_serialDesc.hk('aQuestionner', true);
    this.d1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).e1k = function (encoder, value) {
    var tmp0_desc = this.d1k_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().c1k_1;
    tmp1_output.wg(tmp0_desc, 0, value.f1k_1);
    tmp1_output.wg(tmp0_desc, 1, value.g1k_1);
    if (tmp1_output.dh(tmp0_desc, 2) ? true : !(value.h1k_1 == null)) {
      tmp1_output.zg(tmp0_desc, 2, $serializer_getInstance_23(), value.h1k_1);
    }
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !equals(value.i1k_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 3, tmp2_cached[3], value.i1k_1);
    }
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !(value.j1k_1 === false)) {
      tmp1_output.ug(tmp0_desc, 4, value.j1k_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_24).qe = function (encoder, value) {
    return this.e1k(encoder, value instanceof ResolutionJson ? value : THROW_CCE());
  };
  protoOf($serializer_24).re = function (decoder) {
    var tmp0_desc = this.d1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.ag(tmp0_desc);
    var tmp10_cached = Companion_getInstance_30().c1k_1;
    if (tmp9_input.jg()) {
      tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.hg(tmp0_desc, 2, $serializer_getInstance_23(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.fg(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.cg(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.hg(tmp0_desc, 2, $serializer_getInstance_23(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.fg(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.cg(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bg(tmp0_desc);
    return ResolutionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_24).pe = function () {
    return this.d1k_1;
  };
  protoOf($serializer_24).jk = function () {
    var tmp0_cached = Companion_getInstance_30().c1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_23()), tmp0_cached[3], BooleanSerializer_getInstance()];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function ResolutionJson_init_$Init$(seen0, elementId, reference, retenu, candidats, aQuestionner, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_24().d1k_1);
    }
    $this.f1k_1 = elementId;
    $this.g1k_1 = reference;
    if (0 === (seen0 & 4))
      $this.h1k_1 = null;
    else
      $this.h1k_1 = retenu;
    if (0 === (seen0 & 8))
      $this.i1k_1 = emptyList();
    else
      $this.i1k_1 = candidats;
    if (0 === (seen0 & 16))
      $this.j1k_1 = false;
    else
      $this.j1k_1 = aQuestionner;
    return $this;
  }
  function ResolutionJson_init_$Create$(seen0, elementId, reference, retenu, candidats, aQuestionner, serializationConstructorMarker) {
    return ResolutionJson_init_$Init$(seen0, elementId, reference, retenu, candidats, aQuestionner, serializationConstructorMarker, objectCreate(protoOf(ResolutionJson)));
  }
  function ResolutionJson(elementId, reference, retenu, candidats, aQuestionner) {
    Companion_getInstance_30();
    retenu = retenu === VOID ? null : retenu;
    candidats = candidats === VOID ? emptyList() : candidats;
    aQuestionner = aQuestionner === VOID ? false : aQuestionner;
    this.f1k_1 = elementId;
    this.g1k_1 = reference;
    this.h1k_1 = retenu;
    this.i1k_1 = candidats;
    this.j1k_1 = aQuestionner;
  }
  protoOf(ResolutionJson).toString = function () {
    return 'ResolutionJson(elementId=' + this.f1k_1 + ', reference=' + this.g1k_1 + ', retenu=' + toString(this.h1k_1) + ', candidats=' + toString_0(this.i1k_1) + ', aQuestionner=' + this.j1k_1 + ')';
  };
  protoOf(ResolutionJson).hashCode = function () {
    var result = getStringHashCode(this.f1k_1);
    result = imul(result, 31) + getStringHashCode(this.g1k_1) | 0;
    result = imul(result, 31) + (this.h1k_1 == null ? 0 : this.h1k_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.i1k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j1k_1) | 0;
    return result;
  };
  protoOf(ResolutionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResolutionJson))
      return false;
    var tmp0_other_with_cast = other instanceof ResolutionJson ? other : THROW_CCE();
    if (!(this.f1k_1 === tmp0_other_with_cast.f1k_1))
      return false;
    if (!(this.g1k_1 === tmp0_other_with_cast.g1k_1))
      return false;
    if (!equals(this.h1k_1, tmp0_other_with_cast.h1k_1))
      return false;
    if (!equals(this.i1k_1, tmp0_other_with_cast.i1k_1))
      return false;
    if (!(this.j1k_1 === tmp0_other_with_cast.j1k_1))
      return false;
    return true;
  };
  function Companion_25() {
  }
  protoOf(Companion_25).p1c = function () {
    return $serializer_getInstance_25();
  };
  var Companion_instance_26;
  function Companion_getInstance_31() {
    return Companion_instance_26;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviElementJson', this, 3);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('ecarteFois', true);
    tmp0_serialDesc.hk('vuLe', true);
    this.k1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).l1k = function (encoder, value) {
    var tmp0_desc = this.k1k_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.m1k_1);
    if (tmp1_output.dh(tmp0_desc, 1) ? true : !(value.n1k_1 === 0)) {
      tmp1_output.vg(tmp0_desc, 1, value.n1k_1);
    }
    if (tmp1_output.dh(tmp0_desc, 2) ? true : !(value.o1k_1 == null)) {
      tmp1_output.zg(tmp0_desc, 2, StringSerializer_getInstance(), value.o1k_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_25).qe = function (encoder, value) {
    return this.l1k(encoder, value instanceof SuiviElementJson ? value : THROW_CCE());
  };
  protoOf($serializer_25).re = function (decoder) {
    var tmp0_desc = this.k1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.ag(tmp0_desc);
    if (tmp7_input.jg()) {
      tmp4_local0 = tmp7_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.dg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.hg(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.dg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.hg(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.bg(tmp0_desc);
    return SuiviElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_25).pe = function () {
    return this.k1k_1;
  };
  protoOf($serializer_25).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function SuiviElementJson_init_$Init$(seen0, elementId, ecarteFois, vuLe, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_25().k1k_1);
    }
    $this.m1k_1 = elementId;
    if (0 === (seen0 & 2))
      $this.n1k_1 = 0;
    else
      $this.n1k_1 = ecarteFois;
    if (0 === (seen0 & 4))
      $this.o1k_1 = null;
    else
      $this.o1k_1 = vuLe;
    return $this;
  }
  function SuiviElementJson_init_$Create$(seen0, elementId, ecarteFois, vuLe, serializationConstructorMarker) {
    return SuiviElementJson_init_$Init$(seen0, elementId, ecarteFois, vuLe, serializationConstructorMarker, objectCreate(protoOf(SuiviElementJson)));
  }
  function SuiviElementJson() {
  }
  protoOf(SuiviElementJson).toString = function () {
    return 'SuiviElementJson(elementId=' + this.m1k_1 + ', ecarteFois=' + this.n1k_1 + ', vuLe=' + this.o1k_1 + ')';
  };
  protoOf(SuiviElementJson).hashCode = function () {
    var result = getStringHashCode(this.m1k_1);
    result = imul(result, 31) + this.n1k_1 | 0;
    result = imul(result, 31) + (this.o1k_1 == null ? 0 : getStringHashCode(this.o1k_1)) | 0;
    return result;
  };
  protoOf(SuiviElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviElementJson ? other : THROW_CCE();
    if (!(this.m1k_1 === tmp0_other_with_cast.m1k_1))
      return false;
    if (!(this.n1k_1 === tmp0_other_with_cast.n1k_1))
      return false;
    if (!(this.o1k_1 == tmp0_other_with_cast.o1k_1))
      return false;
    return true;
  };
  function Companion_26() {
    Companion_instance_27 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p1k_1 = [null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_26).p1c = function () {
    return $serializer_getInstance_26();
  };
  var Companion_instance_27;
  function Companion_getInstance_32() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ARevoirJson', this, 5);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('motif', false);
    tmp0_serialDesc.hk('explication', false);
    tmp0_serialDesc.hk('issues', false);
    this.q1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).r1k = function (encoder, value) {
    var tmp0_desc = this.q1k_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_32().p1k_1;
    tmp1_output.wg(tmp0_desc, 0, value.s1k_1);
    tmp1_output.wg(tmp0_desc, 1, value.t1k_1);
    tmp1_output.wg(tmp0_desc, 2, value.u1k_1);
    tmp1_output.wg(tmp0_desc, 3, value.v1k_1);
    tmp1_output.xg(tmp0_desc, 4, tmp2_cached[4], value.w1k_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_26).qe = function (encoder, value) {
    return this.r1k(encoder, value instanceof ARevoirJson ? value : THROW_CCE());
  };
  protoOf($serializer_26).re = function (decoder) {
    var tmp0_desc = this.q1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.ag(tmp0_desc);
    var tmp10_cached = Companion_getInstance_32().p1k_1;
    if (tmp9_input.jg()) {
      tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.fg(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.fg(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bg(tmp0_desc);
    return ARevoirJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_26).pe = function () {
    return this.q1k_1;
  };
  protoOf($serializer_26).jk = function () {
    var tmp0_cached = Companion_getInstance_32().p1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[4]];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function ARevoirJson_init_$Init$(seen0, elementId, texte, motif, explication, issues, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_26().q1k_1);
    }
    $this.s1k_1 = elementId;
    $this.t1k_1 = texte;
    $this.u1k_1 = motif;
    $this.v1k_1 = explication;
    $this.w1k_1 = issues;
    return $this;
  }
  function ARevoirJson_init_$Create$(seen0, elementId, texte, motif, explication, issues, serializationConstructorMarker) {
    return ARevoirJson_init_$Init$(seen0, elementId, texte, motif, explication, issues, serializationConstructorMarker, objectCreate(protoOf(ARevoirJson)));
  }
  function ARevoirJson(elementId, texte, motif, explication, issues) {
    Companion_getInstance_32();
    this.s1k_1 = elementId;
    this.t1k_1 = texte;
    this.u1k_1 = motif;
    this.v1k_1 = explication;
    this.w1k_1 = issues;
  }
  protoOf(ARevoirJson).toString = function () {
    return 'ARevoirJson(elementId=' + this.s1k_1 + ', texte=' + this.t1k_1 + ', motif=' + this.u1k_1 + ', explication=' + this.v1k_1 + ', issues=' + toString_0(this.w1k_1) + ')';
  };
  protoOf(ARevoirJson).hashCode = function () {
    var result = getStringHashCode(this.s1k_1);
    result = imul(result, 31) + getStringHashCode(this.t1k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u1k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v1k_1) | 0;
    result = imul(result, 31) + hashCode(this.w1k_1) | 0;
    return result;
  };
  protoOf(ARevoirJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ARevoirJson))
      return false;
    var tmp0_other_with_cast = other instanceof ARevoirJson ? other : THROW_CCE();
    if (!(this.s1k_1 === tmp0_other_with_cast.s1k_1))
      return false;
    if (!(this.t1k_1 === tmp0_other_with_cast.t1k_1))
      return false;
    if (!(this.u1k_1 === tmp0_other_with_cast.u1k_1))
      return false;
    if (!(this.v1k_1 === tmp0_other_with_cast.v1k_1))
      return false;
    if (!equals(this.w1k_1, tmp0_other_with_cast.w1k_1))
      return false;
    return true;
  };
  function Companion_27() {
  }
  var Companion_instance_28;
  function Companion_getInstance_33() {
    return Companion_instance_28;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.LigneFicheJson', this, 5);
    tmp0_serialDesc.hk('elementId', false);
    tmp0_serialDesc.hk('captureId', false);
    tmp0_serialDesc.hk('type', false);
    tmp0_serialDesc.hk('texte', false);
    tmp0_serialDesc.hk('verdict', false);
    this.x1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).y1k = function (encoder, value) {
    var tmp0_desc = this.x1k_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.z1k_1);
    tmp1_output.wg(tmp0_desc, 1, value.a1l_1);
    tmp1_output.wg(tmp0_desc, 2, value.b1l_1);
    tmp1_output.wg(tmp0_desc, 3, value.c1l_1);
    tmp1_output.wg(tmp0_desc, 4, value.d1l_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_27).qe = function (encoder, value) {
    return this.y1k(encoder, value instanceof LigneFicheJson ? value : THROW_CCE());
  };
  protoOf($serializer_27).re = function (decoder) {
    var tmp0_desc = this.x1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.ag(tmp0_desc);
    if (tmp9_input.jg()) {
      tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.eg(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.eg(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.eg(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.bg(tmp0_desc);
    return LigneFicheJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_27).pe = function () {
    return this.x1k_1;
  };
  protoOf($serializer_27).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function LigneFicheJson_init_$Init$(seen0, elementId, captureId, type, texte, verdict, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_27().x1k_1);
    }
    $this.z1k_1 = elementId;
    $this.a1l_1 = captureId;
    $this.b1l_1 = type;
    $this.c1l_1 = texte;
    $this.d1l_1 = verdict;
    return $this;
  }
  function LigneFicheJson_init_$Create$(seen0, elementId, captureId, type, texte, verdict, serializationConstructorMarker) {
    return LigneFicheJson_init_$Init$(seen0, elementId, captureId, type, texte, verdict, serializationConstructorMarker, objectCreate(protoOf(LigneFicheJson)));
  }
  function LigneFicheJson(elementId, captureId, type, texte, verdict) {
    this.z1k_1 = elementId;
    this.a1l_1 = captureId;
    this.b1l_1 = type;
    this.c1l_1 = texte;
    this.d1l_1 = verdict;
  }
  protoOf(LigneFicheJson).toString = function () {
    return 'LigneFicheJson(elementId=' + this.z1k_1 + ', captureId=' + this.a1l_1 + ', type=' + this.b1l_1 + ', texte=' + this.c1l_1 + ', verdict=' + this.d1l_1 + ')';
  };
  protoOf(LigneFicheJson).hashCode = function () {
    var result = getStringHashCode(this.z1k_1);
    result = imul(result, 31) + getStringHashCode(this.a1l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c1l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1l_1) | 0;
    return result;
  };
  protoOf(LigneFicheJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LigneFicheJson))
      return false;
    var tmp0_other_with_cast = other instanceof LigneFicheJson ? other : THROW_CCE();
    if (!(this.z1k_1 === tmp0_other_with_cast.z1k_1))
      return false;
    if (!(this.a1l_1 === tmp0_other_with_cast.a1l_1))
      return false;
    if (!(this.b1l_1 === tmp0_other_with_cast.b1l_1))
      return false;
    if (!(this.c1l_1 === tmp0_other_with_cast.c1l_1))
      return false;
    if (!(this.d1l_1 === tmp0_other_with_cast.d1l_1))
      return false;
    return true;
  };
  function Companion_28() {
  }
  var Companion_instance_29;
  function Companion_getInstance_34() {
    return Companion_instance_29;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EchangeJson', this, 3);
    tmp0_serialDesc.hk('captureId', false);
    tmp0_serialDesc.hk('quand', false);
    tmp0_serialDesc.hk('extrait', false);
    this.e1l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).f1l = function (encoder, value) {
    var tmp0_desc = this.e1l_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    tmp1_output.wg(tmp0_desc, 0, value.g1l_1);
    tmp1_output.wg(tmp0_desc, 1, value.h1l_1);
    tmp1_output.wg(tmp0_desc, 2, value.i1l_1);
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_28).qe = function (encoder, value) {
    return this.f1l(encoder, value instanceof EchangeJson ? value : THROW_CCE());
  };
  protoOf($serializer_28).re = function (decoder) {
    var tmp0_desc = this.e1l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.ag(tmp0_desc);
    if (tmp7_input.jg()) {
      tmp4_local0 = tmp7_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.eg(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.eg(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.bg(tmp0_desc);
    return EchangeJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_28).pe = function () {
    return this.e1l_1;
  };
  protoOf($serializer_28).jk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function EchangeJson_init_$Init$(seen0, captureId, quand, extrait, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_28().e1l_1);
    }
    $this.g1l_1 = captureId;
    $this.h1l_1 = quand;
    $this.i1l_1 = extrait;
    return $this;
  }
  function EchangeJson_init_$Create$(seen0, captureId, quand, extrait, serializationConstructorMarker) {
    return EchangeJson_init_$Init$(seen0, captureId, quand, extrait, serializationConstructorMarker, objectCreate(protoOf(EchangeJson)));
  }
  function EchangeJson(captureId, quand, extrait) {
    this.g1l_1 = captureId;
    this.h1l_1 = quand;
    this.i1l_1 = extrait;
  }
  protoOf(EchangeJson).toString = function () {
    return 'EchangeJson(captureId=' + this.g1l_1 + ', quand=' + this.h1l_1 + ', extrait=' + this.i1l_1 + ')';
  };
  protoOf(EchangeJson).hashCode = function () {
    var result = getStringHashCode(this.g1l_1);
    result = imul(result, 31) + getStringHashCode(this.h1l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i1l_1) | 0;
    return result;
  };
  protoOf(EchangeJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EchangeJson))
      return false;
    var tmp0_other_with_cast = other instanceof EchangeJson ? other : THROW_CCE();
    if (!(this.g1l_1 === tmp0_other_with_cast.g1l_1))
      return false;
    if (!(this.h1l_1 === tmp0_other_with_cast.h1l_1))
      return false;
    if (!(this.i1l_1 === tmp0_other_with_cast.i1l_1))
      return false;
    return true;
  };
  function Companion_29() {
    Companion_instance_30 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j1l_1 = [null, null, new ArrayListSerializer($serializer_getInstance_27()), new ArrayListSerializer($serializer_getInstance_27()), new ArrayListSerializer($serializer_getInstance_28()), null];
  }
  protoOf(Companion_29).p1c = function () {
    return $serializer_getInstance_29();
  };
  var Companion_instance_30;
  function Companion_getInstance_35() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function $serializer_29() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.FicheJson', this, 6);
    tmp0_serialDesc.hk('nom', false);
    tmp0_serialDesc.hk('type', false);
    tmp0_serialDesc.hk('ouverts', true);
    tmp0_serialDesc.hk('decide', true);
    tmp0_serialDesc.hk('derniersEchanges', true);
    tmp0_serialDesc.hk('mentions', true);
    this.k1l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).l1l = function (encoder, value) {
    var tmp0_desc = this.k1l_1;
    var tmp1_output = encoder.ag(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().j1l_1;
    tmp1_output.wg(tmp0_desc, 0, value.m1l_1);
    tmp1_output.wg(tmp0_desc, 1, value.n1l_1);
    if (tmp1_output.dh(tmp0_desc, 2) ? true : !equals(value.o1l_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 2, tmp2_cached[2], value.o1l_1);
    }
    if (tmp1_output.dh(tmp0_desc, 3) ? true : !equals(value.p1l_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 3, tmp2_cached[3], value.p1l_1);
    }
    if (tmp1_output.dh(tmp0_desc, 4) ? true : !equals(value.q1l_1, emptyList())) {
      tmp1_output.xg(tmp0_desc, 4, tmp2_cached[4], value.q1l_1);
    }
    if (tmp1_output.dh(tmp0_desc, 5) ? true : !(value.r1l_1 === 0)) {
      tmp1_output.vg(tmp0_desc, 5, value.r1l_1);
    }
    tmp1_output.bg(tmp0_desc);
  };
  protoOf($serializer_29).qe = function (encoder, value) {
    return this.l1l(encoder, value instanceof FicheJson ? value : THROW_CCE());
  };
  protoOf($serializer_29).re = function (decoder) {
    var tmp0_desc = this.k1l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = 0;
    var tmp10_input = decoder.ag(tmp0_desc);
    var tmp11_cached = Companion_getInstance_35().j1l_1;
    if (tmp10_input.jg()) {
      tmp4_local0 = tmp10_input.eg(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.eg(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.fg(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.fg(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.fg(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.dg(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.kg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.eg(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.eg(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.fg(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.fg(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.fg(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.dg(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.bg(tmp0_desc);
    return FicheJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_29).pe = function () {
    return this.k1l_1;
  };
  protoOf($serializer_29).jk = function () {
    var tmp0_cached = Companion_getInstance_35().j1l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2], tmp0_cached[3], tmp0_cached[4], IntSerializer_getInstance()];
  };
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_29();
    return $serializer_instance_29;
  }
  function FicheJson_init_$Init$(seen0, nom, type, ouverts, decide, derniersEchanges, mentions, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_29().k1l_1);
    }
    $this.m1l_1 = nom;
    $this.n1l_1 = type;
    if (0 === (seen0 & 4))
      $this.o1l_1 = emptyList();
    else
      $this.o1l_1 = ouverts;
    if (0 === (seen0 & 8))
      $this.p1l_1 = emptyList();
    else
      $this.p1l_1 = decide;
    if (0 === (seen0 & 16))
      $this.q1l_1 = emptyList();
    else
      $this.q1l_1 = derniersEchanges;
    if (0 === (seen0 & 32))
      $this.r1l_1 = 0;
    else
      $this.r1l_1 = mentions;
    return $this;
  }
  function FicheJson_init_$Create$(seen0, nom, type, ouverts, decide, derniersEchanges, mentions, serializationConstructorMarker) {
    return FicheJson_init_$Init$(seen0, nom, type, ouverts, decide, derniersEchanges, mentions, serializationConstructorMarker, objectCreate(protoOf(FicheJson)));
  }
  function FicheJson(nom, type, ouverts, decide, derniersEchanges, mentions) {
    Companion_getInstance_35();
    ouverts = ouverts === VOID ? emptyList() : ouverts;
    decide = decide === VOID ? emptyList() : decide;
    derniersEchanges = derniersEchanges === VOID ? emptyList() : derniersEchanges;
    mentions = mentions === VOID ? 0 : mentions;
    this.m1l_1 = nom;
    this.n1l_1 = type;
    this.o1l_1 = ouverts;
    this.p1l_1 = decide;
    this.q1l_1 = derniersEchanges;
    this.r1l_1 = mentions;
  }
  protoOf(FicheJson).toString = function () {
    return 'FicheJson(nom=' + this.m1l_1 + ', type=' + this.n1l_1 + ', ouverts=' + toString_0(this.o1l_1) + ', decide=' + toString_0(this.p1l_1) + ', derniersEchanges=' + toString_0(this.q1l_1) + ', mentions=' + this.r1l_1 + ')';
  };
  protoOf(FicheJson).hashCode = function () {
    var result = getStringHashCode(this.m1l_1);
    result = imul(result, 31) + getStringHashCode(this.n1l_1) | 0;
    result = imul(result, 31) + hashCode(this.o1l_1) | 0;
    result = imul(result, 31) + hashCode(this.p1l_1) | 0;
    result = imul(result, 31) + hashCode(this.q1l_1) | 0;
    result = imul(result, 31) + this.r1l_1 | 0;
    return result;
  };
  protoOf(FicheJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FicheJson))
      return false;
    var tmp0_other_with_cast = other instanceof FicheJson ? other : THROW_CCE();
    if (!(this.m1l_1 === tmp0_other_with_cast.m1l_1))
      return false;
    if (!(this.n1l_1 === tmp0_other_with_cast.n1l_1))
      return false;
    if (!equals(this.o1l_1, tmp0_other_with_cast.o1l_1))
      return false;
    if (!equals(this.p1l_1, tmp0_other_with_cast.p1l_1))
      return false;
    if (!equals(this.q1l_1, tmp0_other_with_cast.q1l_1))
      return false;
    if (!(this.r1l_1 === tmp0_other_with_cast.r1l_1))
      return false;
    return true;
  };
  function sources($this, capturesJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.s1l_1.b13(ListSerializer(Companion_instance_21.p1c()), capturesJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.sources.<anonymous>' call
      var tmp = new CaptureId(item.e1j_1);
      var tmp0_safe_receiver = item.h1j_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp1_let_receiver = Companion_getInstance();
        // Inline function 'kotlin.let' call
        tmp_0 = sources$parse(tmp1_let_receiver, tmp0_safe_receiver);
      }
      var tmp$ret$1 = new TexteSource(tmp, item.f1j_1, item.g1j_1, tmp_0);
      destination.e(tmp$ret$1);
    }
    return destination;
  }
  function versCandidat($this, candidat) {
    return new CandidatJson(candidat.b1m_1.v1l_1.u1l_1, candidat.b1m_1.x1l_1, candidat.h1m_1);
  }
  function memoireDe($this, captures, dtos) {
    var memoire = new Memoire();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Regles$memoireDe$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_3(tmp);
    var _iterator__ex2g4s = sortedWith(dtos, tmp$ret$0).g();
    $l$loop_0: while (_iterator__ex2g4s.h()) {
      var dto = _iterator__ex2g4s.i();
      var tmp0_safe_receiver = dto.h1d_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_1;
        // Inline function 'app.zenote.core.api.Regles.memoireDe.<anonymous>' call
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
      var tmp2_elvis_lhs = captures.y1(dto.t1c_1);
      var tmp_3;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_3 = tmp2_elvis_lhs;
      }
      var capture = tmp_3;
      var tmp_4 = TypeEntite_PERSONNE_getInstance();
      var tmp_5 = new Mention(new CaptureId(dto.t1c_1), Companion_getInstance_0().w11(capture.g1j_1), dto.v1c_1, new ElementId(dto.s1c_1));
      var tmp3_safe_receiver = dto.j1d_1;
      var tmp_6;
      if (tmp3_safe_receiver == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'app.zenote.core.api.Regles.memoireDe.<anonymous>' call
        tmp_6 = valueOf_1(tmp3_safe_receiver);
      }
      var entite = memoire.n1m(tmp_4, qui, tmp_5, tmp_6);
      memoire.o1m(new ElementId(dto.s1c_1), entite.v1l_1);
    }
    return memoire;
  }
  function versLigne($this, ligne) {
    return new LigneFicheJson(ligne.q1m_1.p1m_1, ligne.r1m_1.v1m_1, ligne.s1m_1.f2_1, ligne.t1m_1, ligne.u1m_1.f2_1);
  }
  function rendre($this, reponse) {
    var tmp = Companion_getInstance_28().p1c();
    var tmp_0 = reponse.b1n();
    // Inline function 'kotlin.collections.map' call
    var this_0 = reponse.y1m_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rendre.<anonymous>' call
      var tmp0_safe_receiver = item.f1n_1;
      var tmp$ret$0 = new CitationJson(item.c1n_1.v1m_1, item.d1n_1, item.e1n_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1m_1);
      destination.e(tmp$ret$0);
    }
    return $this.s1l_1.a13(tmp, new ReponseJson(reponse.w1m_1, reponse.x1m_1, tmp_0, destination, reponse.z1m_1, reponse.a1n_1));
  }
  function decoder($this, elementsJson) {
    return $this.s1l_1.b13(ListSerializer(Companion_instance_0.p1c()), elementsJson);
  }
  function versPropositionJson($this, p) {
    return new PropositionJson(p.w1n_1.g1n_1.p1m_1, p.w1n_1.j1n_1, p.x1n_1, p.y1n_1.f2_1, p.z1n_1.f2_1);
  }
  function evenementsConnus($this, evenements) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = evenements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'app.zenote.core.api.Regles.evenementsConnus.<anonymous>' call
      // Inline function 'kotlin.runCatching' call
      Regles_getInstance();
      var tmp;
      try {
        // Inline function 'app.zenote.core.api.Regles.evenementsConnus.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.Companion.success' call
        var value = new EvenementConnu(element.j1e_1, element.k1e_1, toInstant(Companion_getInstance_1().l12(element.l1e_1), Companion_getInstance_2().s12_1), toInstant(Companion_getInstance_1().l12(element.m1e_1), Companion_getInstance_2().s12_1), element.n1e_1, element.o1e_1, element.p1e_1, element.q1e_1);
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
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = tmp;
      var tmp_1;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_1 = null;
      } else {
        var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      }
      var tmp0_safe_receiver = tmp_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.e(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function neVientQueDIncertain($this, dto, incertains) {
    if (incertains.j() || dto.x1c_1 <= dto.w1c_1)
      return false;
    var tmp0 = until(dto.w1c_1, dto.x1c_1);
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
              if (position >= element_0.x1d_1 && position < element_0.y1d_1) {
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
    if (isBlank(dto.v1c_1)) {
      tmp = '\xE9l\xE9ment sans texte';
    } else {
      if (dto.w1c_1 < 0 || dto.x1c_1 <= dto.w1c_1) {
        tmp = 'passage source vide ou incoh\xE9rent';
      } else {
        if (dto.x1c_1 > texteSource.length) {
          tmp = 'passage source absent du texte de la capture';
        } else {
          // Inline function 'kotlin.runCatching' call
          var tmp_0;
          try {
            // Inline function 'app.zenote.core.api.Regles.raisonDeRejet.<anonymous>' call
            // Inline function 'kotlin.Companion.success' call
            var value = valueOf(dto.u1c_1);
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
            tmp = 'type inconnu : ' + dto.u1c_1;
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
      var value = valueOf_3(nom).g2_1;
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
    if (_this__u8e3s4.r1d_1 || _this__u8e3s4.s1d_1) {
      tmp = true;
    } else {
      var tmp0 = listOfNotNull([_this__u8e3s4.b1d_1, _this__u8e3s4.f1d_1, _this__u8e3s4.i1d_1]);
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
    var tmp = new CaptureId(_this__u8e3s4.t1c_1);
    var tmp_0 = valueOf(_this__u8e3s4.u1c_1);
    var tmp_1 = new Passage(_this__u8e3s4.w1c_1, _this__u8e3s4.x1c_1, _this__u8e3s4.y1c_1, _this__u8e3s4.z1c_1);
    var tmp0_safe_receiver = _this__u8e3s4.a1d_1;
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_3 = Companion_getInstance().f12(tmp0_safe_receiver);
      var tmp0_elvis_lhs = _this__u8e3s4.b1d_1;
      var tmp_4 = tmp0_elvis_lhs == null ? 1.0 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.c1d_1;
      tmp_2 = new Deduit(tmp_3, tmp_4, tmp1_elvis_lhs == null ? 'fourni' : tmp1_elvis_lhs);
    }
    var tmp_5 = tmp_2;
    var tmp1_safe_receiver = _this__u8e3s4.e1d_1;
    var tmp_6;
    if (tmp1_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_7 = valueOf_0(tmp1_safe_receiver);
      var tmp0_elvis_lhs_0 = _this__u8e3s4.f1d_1;
      var tmp_8 = tmp0_elvis_lhs_0 == null ? 1.0 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs_0 = _this__u8e3s4.g1d_1;
      tmp_6 = new Deduit(tmp_7, tmp_8, tmp1_elvis_lhs_0 == null ? 'fourni' : tmp1_elvis_lhs_0);
    }
    var tmp_9 = tmp_6;
    var tmp2_safe_receiver = _this__u8e3s4.h1d_1;
    var tmp_10;
    if (tmp2_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4.i1d_1;
      tmp_10 = new Deduit(tmp2_safe_receiver, tmp0_elvis_lhs_1 == null ? 1.0 : tmp0_elvis_lhs_1, 'nomm\xE9');
    }
    var tmp_11 = tmp_10;
    var tmp3_safe_receiver = _this__u8e3s4.j1d_1;
    var tmp_12;
    if (tmp3_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      tmp_12 = new Deduit(valueOf_1(tmp3_safe_receiver), 1.0, 'd\xE9duit');
    }
    var tmp_13 = tmp_12;
    var tmp4_safe_receiver = _this__u8e3s4.n1d_1;
    var tmp_14;
    if (tmp4_safe_receiver == null) {
      tmp_14 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.o1d_1;
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
    var tmp_16 = tmp_14;
    var tmp5_safe_receiver = _this__u8e3s4.k1d_1;
    var tmp_17;
    if (tmp5_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0 = get_entries();
      var tmp$ret$13;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>.<anonymous>' call
          if (element.f2_1 === tmp5_safe_receiver) {
            tmp$ret$13 = element;
            break $l$block;
          }
        }
        tmp$ret$13 = null;
      }
      tmp_17 = tmp$ret$13;
    }
    var tmp6_safe_receiver = tmp_17;
    var tmp_18;
    if (tmp6_safe_receiver == null) {
      tmp_18 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_2 = _this__u8e3s4.l1d_1;
      var tmp_19 = coerceIn(tmp0_elvis_lhs_2 == null ? 1.0 : tmp0_elvis_lhs_2, 0.0, 1.0);
      var tmp1_safe_receiver_0 = _this__u8e3s4.m1d_1;
      var tmp_20;
      if (tmp1_safe_receiver_0 == null) {
        tmp_20 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_21;
        // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.isNotBlank' call
        if (!isBlank(tmp1_safe_receiver_0)) {
          tmp_21 = tmp1_safe_receiver_0;
        } else {
          tmp_21 = null;
        }
        tmp_20 = tmp_21;
      }
      var tmp2_elvis_lhs = tmp_20;
      tmp_18 = new Deduit(tmp6_safe_receiver, tmp_19, tmp2_elvis_lhs == null ? 'fourni' : tmp2_elvis_lhs);
    }
    var derive = new ElementDerive(tmp, tmp_0, _this__u8e3s4.v1c_1, tmp_1, tmp_5, tmp_9, tmp_11, tmp_13, tmp_16, tmp_18);
    var tmp_22 = new ElementId(_this__u8e3s4.s1c_1);
    var tmp7_safe_receiver = derive.e1o_1;
    var tmp_23 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.l1o_1;
    var tmp8_safe_receiver = derive.f1o_1;
    var tmp_24 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.l1o_1;
    var tmp9_safe_receiver = derive.g1o_1;
    var tmp_25 = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.l1o_1;
    var tmp10_safe_receiver = derive.h1o_1;
    var tmp_26 = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.l1o_1;
    var tmp11_safe_receiver = derive.i1o_1;
    var tmp_27 = tmp11_safe_receiver == null ? null : tmp11_safe_receiver.l1o_1;
    var tmp_28 = valueOf_2(_this__u8e3s4.p1d_1);
    var tmp_29 = aConfirmer(_this__u8e3s4, $this);
    var tmp_30 = _this__u8e3s4.q1d_1 && !(_this__u8e3s4.e1d_1 == null) ? 'poids fix\xE9 \xE0 la main' : _this__u8e3s4.g1d_1;
    var tmp12_safe_receiver = derive.j1o_1;
    var tmp_31 = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.l1o_1;
    var tmp13_safe_receiver = derive.j1o_1;
    var tmp14_elvis_lhs = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.o1o();
    return new ElementResolu(tmp_22, derive.a1o_1, derive.b1o_1, derive.c1o_1, derive.d1o_1, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, _this__u8e3s4.q1d_1, tmp_30, tmp_31, tmp14_elvis_lhs == null ? false : tmp14_elvis_lhs);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.p1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).zc = function (a, b) {
    return this.p1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).y2 = function () {
    return this.p1o_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function sam$kotlin_Comparator$0_0(function_0) {
    this.q1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).zc = function (a, b) {
    return this.q1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).y2 = function () {
    return this.q1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function sam$kotlin_Comparator$0_1(function_0) {
    this.r1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).zc = function (a, b) {
    return this.r1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).y2 = function () {
    return this.r1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.s1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).zc = function (a, b) {
    return this.s1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).y2 = function () {
    return this.s1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function sam$kotlin_Comparator$0_3(function_0) {
    this.t1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).zc = function (a, b) {
    return this.t1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).y2 = function () {
    return this.t1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function sources$parse(receiver, p0) {
    return receiver.f12(p0);
  }
  function aRevoir$parse(receiver, p0) {
    return receiver.f12(p0);
  }
  function Regles$json$lambda($this$Json) {
    $this$Json.t13_1 = true;
    $this$Json.r13_1 = true;
    return Unit_instance;
  }
  function Regles$revue$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp = urgenceOrdinale(Regles_getInstance(), a.p1g_1);
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp$ret$1 = urgenceOrdinale(Regles_getInstance(), b.p1g_1);
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
        var tmp_0 = b.n1g_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = a.n1g_1;
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
        var tmp_0 = a.m1g_1.s1c_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = b.m1g_1.s1c_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = a.u1g_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it = iterator.i();
    var minValue = urgenceOrdinale(Regles_getInstance(), it.p1g_1);
    while (iterator.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_0 = iterator.i();
      var v = urgenceOrdinale(Regles_getInstance(), it_0.p1g_1);
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var tmp = minValue;
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator_0 = b.u1g_1.g();
    if (!iterator_0.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it_1 = iterator_0.i();
    var minValue_0 = urgenceOrdinale(Regles_getInstance(), it_1.p1g_1);
    while (iterator_0.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.i();
      var v_0 = urgenceOrdinale(Regles_getInstance(), it_2.p1g_1);
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
        var tmp_0 = a.t1g_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp$ret$1 = b.t1g_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$rappels$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
    var tmp = a.g1n_1.p1m_1;
    // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
    var tmp$ret$1 = b.g1n_1.p1m_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles$referencesAResoudre$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
    var tmp = a.s1c_1;
    // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
    var tmp$ret$1 = b.s1c_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles$fiches$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>' call
    var tmp = b.u1o();
    // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>' call
    var tmp$ret$1 = a.u1o();
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles$fiches$lambda_0($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>' call
        var tmp_0 = a.x1l_1;
        // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>' call
        var tmp$ret$1 = b.x1l_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$memoireDe$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.memoireDe.<anonymous>' call
    var tmp = a.s1c_1;
    // Inline function 'app.zenote.core.api.Regles.memoireDe.<anonymous>' call
    var tmp$ret$1 = b.s1c_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles() {
    Regles_instance = this;
    var tmp = this;
    tmp.s1l_1 = Json(VOID, Regles$json$lambda);
    var tmp_0 = this;
    // Inline function 'kotlin.time.Companion.minutes' call
    Companion_getInstance_3();
    tmp_0.t1l_1 = toDuration(30, DurationUnit_MINUTES_getInstance());
  }
  protoOf(Regles).v1o = function (elementsJson, aujourdhui) {
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
    var this_0 = tmp.y1o(destination, new ContexteMaintenant(Companion_getInstance().f12(aujourdhui)));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$3 = versPropositionJson(Regles_getInstance(), item_0);
      destination_0.e(tmp$ret$3);
    }
    var propositions = destination_0;
    return this.s1l_1.a13(ListSerializer(Companion_instance_2.p1c()), propositions);
  };
  protoOf(Regles).z1o = function (elementsJson, contexteJson) {
    var contexte = this.s1l_1.b13(Companion_getInstance_9().p1c(), contexteJson);
    var maintenant = Companion_getInstance_1().l12(contexte.u1e_1);
    var disponibilite = Disponibilites_instance.f1p(toInstant(maintenant, Companion_getInstance_2().s12_1), evenementsConnus(this, contexte.v1e_1));
    var tmp = Priorisation_getInstance();
    // Inline function 'kotlin.collections.map' call
    var this_0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.maintenantAvecContexte.<anonymous>' call
      var tmp$ret$0 = versResolu(item, Regles_getInstance());
      destination.e(tmp$ret$0);
    }
    var resultat = tmp.g1p(destination, new ContexteMaintenant(maintenant.n12()), disponibilite);
    var tmp_0 = Companion_getInstance_10().p1c();
    // Inline function 'kotlin.collections.map' call
    var this_1 = resultat.h1p_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenantAvecContexte.<anonymous>' call
      var tmp$ret$3 = versPropositionJson(Regles_getInstance(), item_0);
      destination_0.e(tmp$ret$3);
    }
    return this.s1l_1.a13(tmp_0, new MaintenantJson(destination_0, resultat.j1p_1, resultat.i1p_1, disponibilite.l1p_1, disponibilite.m1p_1, resultat.k1p_1));
  };
  protoOf(Regles).o1p = function (elementsJson, aujourdhui) {
    var date = Companion_getInstance().f12(aujourdhui);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      if (element.p1d_1 === 'EN_ATTENTE') {
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
      var tmp$ret$3 = element_0.s1c_1;
      destination_0.b2(tmp$ret$3, element_0);
    }
    var parId = destination_0;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(enAttente, 10));
    var _iterator__ex2g4s_1 = enAttente.g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var tmp$ret$6 = FileRevue_getInstance().q1p(versResolu(item, Regles_getInstance()), date);
      destination_1.e(tmp$ret$6);
    }
    var entrees = destination_1;
    var reduction = Arriere_instance.s1p(entrees);
    // Inline function 'kotlin.collections.map' call
    var this_0 = reduction.t1p_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_2 = this_0.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var dto = getValue(parId, item_0.a1q().p1m_1);
      var tmp$ret$9 = new EntreeRevueJson(dto, item_0.y1p_1, item_0.z1p_1, item_0.x1p_1.f2_1);
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
      var key = element_1.m1g_1.t1c_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_3.y1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_3.b2(key, answer);
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
    var _iterator__ex2g4s_4 = destination_3.a2().g();
    while (_iterator__ex2g4s_4.h()) {
      var item_1 = _iterator__ex2g4s_4.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var captureId = item_1.u1();
      // Inline function 'kotlin.collections.component2' call
      var dansLeGroupe = item_1.v1();
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
    return this.s1l_1.a13(Companion_getInstance_23().p1c(), new RevueJson(groupes, entrees.l(), reduction.b1q(), reduction.b1q() ? reduction.v1p_1 : '', reduction.u1p_1.l()));
  };
  protoOf(Regles).c1q = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.s1l_1.b13(ListSerializer(Companion_instance_13.p1c()), suivisJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp$ret$0 = new Suivi(new ElementId(item.h1h_1), Companion_getInstance().f12(item.i1h_1));
      destination.e(tmp$ret$0);
    }
    var suivis = destination;
    var delais = this.s1l_1.b13(MapSerializer(serializer(StringCompanionObject_instance), serializer_0(IntCompanionObject_instance)), delaisJson);
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
    var this_2 = tmp.f1q(destination_0, Companion_getInstance().f12(aujourdhui), suivis, delais);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_1 = this_2.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp0_safe_receiver = item_1.g1q_1.l1n_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      // Inline function 'kotlin.collections.map' call
      var this_3 = item_1.i1q_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var _iterator__ex2g4s_2 = this_3.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>.<anonymous>' call
        var tmp$ret$6 = item_2.f2_1;
        destination_2.e(tmp$ret$6);
      }
      var tmp$ret$9 = new RelanceJson(item_1.g1q_1.g1n_1.p1m_1, item_1.g1q_1.j1n_1, item_1.g1q_1.i1n_1.f2_1, item_1.g1q_1.n1n_1, tmp_0, item_1.h1q_1, destination_2);
      destination_1.e(tmp$ret$9);
    }
    var propositions = destination_1;
    return this.s1l_1.a13(ListSerializer(Companion_getInstance_17().p1c()), propositions);
  };
  protoOf(Regles).j1q = function (elementsJson, maintenant, suivisJson, evenementsJson) {
    var instant = Companion_getInstance_1().l12(maintenant);
    var a = toInstant(instant, Companion_getInstance_2().s12_1);
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.s1l_1.b13(ListSerializer(Companion_instance_14.p1c()), suivisJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$0 = element.l1h_1;
      destination.b2(tmp$ret$0, element);
    }
    var suivis = destination;
    var evenements = evenementsConnus(this, this.s1l_1.b13(ListSerializer(Companion_getInstance_8().p1c()), evenementsJson));
    var reunions = Disponibilites_instance.k1q(evenements);
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = reunions.g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
        if (element_0.n1q_1.b12(a) <= 0 && a.b12(element_0.o1q_1) < 0) {
          tmp$ret$4 = element_0;
          break $l$block;
        }
      }
      tmp$ret$4 = null;
    }
    var reunionEnCours = tmp$ret$4;
    var tmp$ret$6;
    $l$block_0: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = reunions.q(reunions.l());
      while (iterator.x3()) {
        var element_1 = iterator.y3();
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
        if (element_1.o1q_1.b12(a) <= 0 && Duration__compareTo_impl_pchp0f(a.a12(element_1.o1q_1), Regles_getInstance().t1l_1) < 0) {
          tmp$ret$6 = element_1;
          break $l$block_0;
        }
      }
      tmp$ret$6 = null;
    }
    var finRecente = tmp$ret$6;
    // Inline function 'kotlin.collections.map' call
    var this_1 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_1 = this_1.g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$7 = versResolu(item, Regles_getInstance());
      destination_0.e(tmp$ret$7);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_2 = destination_0.g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      if (element_2.q1n_1.equals(Verdict_ACCEPTE_getInstance()) && !(element_2.p1n_1 == null)) {
        destination_1.e(element_2);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Regles$rappels$lambda;
    var tmp$ret$13 = new sam$kotlin_Comparator$0_0(tmp);
    var candidats = sortedWith(destination_1, tmp$ret$13);
    var file = new FileOpportunite();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(candidats, 10));
    var _iterator__ex2g4s_3 = candidats.g();
    while (_iterator__ex2g4s_3.h()) {
      var item_0 = _iterator__ex2g4s_3.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp_0 = new RappelId(item_0.g1n_1.p1m_1);
      // Inline function 'kotlin.text.ifBlank' call
      var this_2 = ensureNotNull(item_0.p1n_1).u1q_1;
      var tmp_1;
      if (isBlank(this_2)) {
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>.<anonymous>' call
        tmp_1 = item_0.j1n_1;
      } else {
        tmp_1 = this_2;
      }
      var tmp$ret$16 = tmp_1;
      var tmp$ret$17 = to(item_0, new Rappel(tmp_0, item_0.g1n_1, tmp$ret$16, new Transition(PointDeRupture_REPRISE_APPAREIL_getInstance())));
      destination_2.e(tmp$ret$17);
    }
    var rappels = destination_2;
    var _iterator__ex2g4s_4 = rappels.g();
    while (_iterator__ex2g4s_4.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s_4.i();
      var element_3 = _destruct__k2r9zo.hc();
      var rappel = _destruct__k2r9zo.ic();
      var tmp0_safe_receiver = suivis.y1(element_3.g1n_1.p1m_1);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1h_1;
      // Inline function 'kotlin.repeat' call
      var times = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
          file.z1q(rappel);
        }
         while (inductionVariable < times);
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var substitutions = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var retards = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s_5 = rappels.g();
    $l$loop_0: while (_iterator__ex2g4s_5.h()) {
      var _destruct__k2r9zo_0 = _iterator__ex2g4s_5.i();
      var element_4 = _destruct__k2r9zo_0.hc();
      var rappel_0 = _destruct__k2r9zo_0.ic();
      var tmp2_elvis_lhs = suivis.y1(element_4.g1n_1.p1m_1);
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var suivi = tmp_2;
      var echeance = Echeancier_getInstance().e1r(ensureNotNull(element_4.p1n_1).t1q_1, Companion_getInstance_1().l12(suivi.m1h_1), evenements);
      if (!Echeancier_getInstance().f1r(echeance, instant))
        continue $l$loop_0;
      if (echeance instanceof Substituee) {
        var tmp18 = element_4.g1n_1.p1m_1;
        // Inline function 'kotlin.collections.set' call
        var value = echeance.i1r_1;
        substitutions.b2(tmp18, value);
      } else {
        if (echeance instanceof Observable) {
          if (echeance.h1r_1.o12(instant) < 0) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_5 = element_4.g1n_1.p1m_1;
            retards.e(element_5);
          }
        } else {
          noWhenBranchMatchedException();
        }
      }
      file.j1r(rappel_0, a);
    }
    var point = !(finRecente == null) ? PointDeRupture_FIN_DE_REUNION_getInstance() : PointDeRupture_REPRISE_APPAREIL_getInstance();
    var retenus = !(reunionEnCours == null) ? file.k1r().l() : 0;
    var notification = !(reunionEnCours == null) ? null : file.l1r(point, a);
    // Inline function 'kotlin.collections.associateBy' call
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(candidats, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination_3 = LinkedHashMap_init_$Create$(capacity_0);
    var _iterator__ex2g4s_6 = candidats.g();
    while (_iterator__ex2g4s_6.h()) {
      var element_6 = _iterator__ex2g4s_6.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$22 = element_6.g1n_1.p1m_1;
      destination_3.b2(tmp$ret$22, element_6);
    }
    var parId = destination_3;
    var tmp_3 = Companion_getInstance_22().p1c();
    var tmp5_elvis_lhs = notification == null ? null : notification.q1r();
    var tmp_4 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = notification == null ? null : notification.o1r_1;
    // Inline function 'kotlin.collections.map' call
    var this_3 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var _iterator__ex2g4s_7 = this_3.g();
    while (_iterator__ex2g4s_7.h()) {
      var item_1 = _iterator__ex2g4s_7.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp0_safe_receiver_0 = parId.y1(item_1.s1r_1.p1m_1);
      var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.p1n_1;
      var tmp2_elvis_lhs_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t1q_1;
      var tmp_5 = tmp2_elvis_lhs_0 == null ? '' : tmp2_elvis_lhs_0;
      var tmp3_elvis_lhs = substitutions.y1(item_1.s1r_1.p1m_1);
      var tmp$ret$26 = new RappelLivreJson(item_1.s1r_1.p1m_1, item_1.t1r_1, tmp_5, tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs, retards.r1(item_1.s1r_1.p1m_1));
      destination_4.e(tmp$ret$26);
    }
    var tmp_6 = destination_4;
    // Inline function 'kotlin.collections.map' call
    var this_4 = file.w1r();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
    var _iterator__ex2g4s_8 = this_4.g();
    while (_iterator__ex2g4s_8.h()) {
      var item_2 = _iterator__ex2g4s_8.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_5 = item_2.z1r_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_6 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
      var _iterator__ex2g4s_9 = this_5.g();
      while (_iterator__ex2g4s_9.h()) {
        var item_3 = _iterator__ex2g4s_9.i();
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>.<anonymous>' call
        var tmp$ret$29 = item_3.f2_1;
        destination_6.e(tmp$ret$29);
      }
      var tmp$ret$32 = new EscaladeJson(item_2.x1r_1.s1r_1.p1m_1, item_2.x1r_1.t1r_1, item_2.y1r_1, destination_6);
      destination_5.e(tmp$ret$32);
    }
    var tmp_7 = destination_5;
    var tmp8_safe_receiver = notification == null ? null : notification.m1r_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.f2_1;
    var tmp_8 = tmp9_elvis_lhs == null ? '' : tmp9_elvis_lhs;
    return this.s1l_1.a13(tmp_3, new RappelsDuMomentJson(tmp_4, tmp_6, tmp_7, tmp_8, reunionEnCours == null ? null : reunionEnCours.m1q_1, retenus));
  };
  protoOf(Regles).a1s = function (elementsJson, maintenant, suivisJson, evenementsJson, $super) {
    evenementsJson = evenementsJson === VOID ? '[]' : evenementsJson;
    return $super === VOID ? this.j1q(elementsJson, maintenant, suivisJson, evenementsJson) : $super.j1q.call(this, elementsJson, maintenant, suivisJson, evenementsJson);
  };
  protoOf(Regles).b1s = function (brut) {
    return Disfluences_getInstance().g1s(brut);
  };
  protoOf(Regles).h1s = function (texteSource, elementsJson, passagesIncertainsJson) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var retenus = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var ecartes = ArrayList_init_$Create$_0();
    var tmp = ListSerializer(Companion_instance_1.p1c());
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_0;
    if (isBlank(passagesIncertainsJson)) {
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      tmp_0 = '[]';
    } else {
      tmp_0 = passagesIncertainsJson;
    }
    var tmp$ret$3 = tmp_0;
    var incertains = this.s1l_1.b13(tmp, tmp$ret$3);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = decoder(this, elementsJson).g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      var raison = raisonDeRejet(Regles_getInstance(), element, texteSource);
      if (!(raison == null)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = new EcarteJson(element.v1c_1, raison);
        ecartes.e(element_0);
      } else if (neVientQueDIncertain(Regles_getInstance(), element, incertains)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = element.u1d(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true);
        retenus.e(element_1);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        retenus.e(element);
      }
    }
    return this.s1l_1.a13(Companion_getInstance_24().p1c(), new AncrageJson(retenus, ecartes));
  };
  protoOf(Regles).i1s = function (requete, elementsJson, capturesJson, reseau) {
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
    return rendre(this, tmp.m1s(requete, destination, sources(this, capturesJson), reseau));
  };
  protoOf(Regles).n1s = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
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
    return rendre(this, tmp.o1s(requete, destination, sources(this, capturesJson), Companion_getInstance().f12(aujourdhui), reseau));
  };
  protoOf(Regles).p1s = function (personne, elementsJson, reseau) {
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
    return rendre(this, tmp.q1s(personne, destination, reseau));
  };
  protoOf(Regles).r1s = function (capturesJson, elementsJson, maintenant) {
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.s1l_1.b13(ListSerializer(Companion_instance_21.p1c()), capturesJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
      var tmp$ret$0 = element.e1j_1;
      destination.b2(tmp$ret$0, element);
    }
    var captures = destination;
    var elements = decoder(this, elementsJson);
    var instant = Companion_getInstance_0().w11(maintenant);
    var memoire = new Memoire();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Regles$referencesAResoudre$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_1(tmp);
    var _iterator__ex2g4s_0 = sortedWith(elements, tmp$ret$3).g();
    $l$loop_0: while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      var tmp0_safe_receiver = element_0.h1d_1;
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
      var tmp2_elvis_lhs = captures.y1(element_0.t1c_1);
      var tmp_3;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_3 = tmp2_elvis_lhs;
      }
      var capture = tmp_3;
      var tmp_4 = TypeEntite_PERSONNE_getInstance();
      var tmp_5 = new Mention(new CaptureId(element_0.t1c_1), Companion_getInstance_0().w11(capture.g1j_1), element_0.v1c_1, new ElementId(element_0.s1c_1));
      var tmp3_safe_receiver = element_0.j1d_1;
      var tmp_6;
      if (tmp3_safe_receiver == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
        tmp_6 = valueOf_1(tmp3_safe_receiver);
      }
      memoire.n1m(tmp_4, qui, tmp_5, tmp_6);
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
        var tmp0_safe_receiver_0 = element_1.h1d_1;
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
        var resolution = ResolutionReferences_instance.z1s(memoire, qui_0, instant, element_1.v1c_1, setOf(TypeEntite_PERSONNE_getInstance()), new ElementId(element_1.s1c_1));
        var retenu = resolution.b1t_1;
        var apprend = resolution.d1t() || (!(retenu == null) && !equals_0(retenu.b1m_1.x1l_1, qui_0, true));
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
        var this_1 = resolution.c1t_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
        var _iterator__ex2g4s_2 = this_1.g();
        while (_iterator__ex2g4s_2.h()) {
          var item = _iterator__ex2g4s_2.i();
          // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>.<anonymous>' call
          var tmp$ret$16 = versCandidat(Regles_getInstance(), item);
          destination_1.e(tmp$ret$16);
        }
        tmp$ret$13 = new ResolutionJson(element_1.s1c_1, qui_0, tmp_11, destination_1, resolution.d1t());
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
    return this.s1l_1.a13(ListSerializer(Companion_getInstance_30().p1c()), resolutions);
  };
  protoOf(Regles).e1t = function (elementsJson, suivisJson, aujourdhui) {
    var tmp = ListSerializer(Companion_instance_26.p1c());
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_0;
    if (isBlank(suivisJson)) {
      // Inline function 'app.zenote.core.api.Regles.aRevoir.<anonymous>' call
      tmp_0 = '[]';
    } else {
      tmp_0 = suivisJson;
    }
    var tmp$ret$1 = tmp_0;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.s1l_1.b13(tmp, tmp$ret$1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.aRevoir.<anonymous>' call
      var tmp0_safe_receiver = item.o1k_1;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp1_let_receiver = Companion_getInstance();
        // Inline function 'kotlin.let' call
        tmp_1 = aRevoir$parse(tmp1_let_receiver, tmp0_safe_receiver);
      }
      var tmp$ret$3 = new SuiviElement(item.m1k_1, item.n1k_1, tmp_1);
      destination.e(tmp$ret$3);
    }
    var suivis = destination;
    var tmp_2 = ARevoir_instance;
    // Inline function 'kotlin.collections.map' call
    var this_1 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.aRevoir.<anonymous>' call
      var tmp$ret$6 = versResolu(item_0, Regles_getInstance());
      destination_0.e(tmp$ret$6);
    }
    var remontees = tmp_2.g1t(destination_0, suivis, Companion_getInstance().f12(aujourdhui));
    var tmp_3 = ListSerializer(Companion_getInstance_32().p1c());
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(remontees, 10));
    var _iterator__ex2g4s_1 = remontees.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.aRevoir.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_2 = item_1.k1t_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_2 = this_2.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.api.Regles.aRevoir.<anonymous>.<anonymous>' call
        var tmp$ret$9 = item_2.f2_1;
        destination_2.e(tmp$ret$9);
      }
      var tmp$ret$12 = new ARevoirJson(item_1.h1t_1.g1n_1.p1m_1, item_1.h1t_1.j1n_1, item_1.i1t_1.f2_1, item_1.j1t_1, destination_2);
      destination_1.e(tmp$ret$12);
    }
    return this.s1l_1.a13(tmp_3, destination_1);
  };
  protoOf(Regles).l1t = function (elementsJson, aujourdhui) {
    var tmp = CreneauProtege_instance;
    // Inline function 'kotlin.collections.map' call
    var this_0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.creneauProtege.<anonymous>' call
      var tmp$ret$0 = versResolu(item, Regles_getInstance());
      destination.e(tmp$ret$0);
    }
    var tmp0_safe_receiver = tmp.o1t(destination, Companion_getInstance().f12(aujourdhui));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1n_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p1m_1;
    return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  };
  protoOf(Regles).p1t = function (renoncementsDAffilee) {
    var tmp;
    if (CreneauProtege_instance.r1t(renoncementsDAffilee)) {
      tmp = CreneauProtege_instance.q1t(renoncementsDAffilee);
    } else {
      tmp = '';
    }
    return tmp;
  };
  protoOf(Regles).s1t = function (capturesJson, elementsJson) {
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.s1l_1.b13(ListSerializer(Companion_instance_21.p1c()), capturesJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>' call
      var tmp$ret$0 = element.e1j_1;
      destination.b2(tmp$ret$0, element);
    }
    var captures = destination;
    var dtos = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(dtos, 10));
    var _iterator__ex2g4s_0 = dtos.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>' call
      var tmp$ret$3 = versResolu(item, Regles_getInstance());
      destination_0.e(tmp$ret$3);
    }
    var resolus = destination_0;
    var memoire = memoireDe(this, captures, dtos);
    var tmp = memoire.t1t();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = Regles$fiches$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_2(tmp_0);
    var tmp_1 = Regles$fiches$lambda_0(this_1);
    var tmp$ret$7 = new sam$kotlin_Comparator$0_2(tmp_1);
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = sortedWith(tmp, tmp$ret$7);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = tmp0.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>' call
      var tmp0_safe_receiver = Fiches_instance.v1t(memoire, element_0.v1l_1, resolus);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination_1.e(tmp0_safe_receiver);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_1, 10));
    var _iterator__ex2g4s_2 = destination_1.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_2 = item_0.x1t_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_3 = this_2.g();
      while (_iterator__ex2g4s_3.h()) {
        var item_1 = _iterator__ex2g4s_3.i();
        // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>.<anonymous>' call
        var tmp$ret$12 = versLigne(Regles_getInstance(), item_1);
        destination_3.e(tmp$ret$12);
      }
      var tmp_2 = destination_3;
      // Inline function 'kotlin.collections.map' call
      var this_3 = item_0.y1t_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var _iterator__ex2g4s_4 = this_3.g();
      while (_iterator__ex2g4s_4.h()) {
        var item_2 = _iterator__ex2g4s_4.i();
        // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>.<anonymous>' call
        var tmp$ret$15 = versLigne(Regles_getInstance(), item_2);
        destination_4.e(tmp$ret$15);
      }
      var tmp_3 = destination_4;
      // Inline function 'kotlin.collections.map' call
      var this_4 = item_0.z1t_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
      var _iterator__ex2g4s_5 = this_4.g();
      while (_iterator__ex2g4s_5.h()) {
        var item_3 = _iterator__ex2g4s_5.i();
        // Inline function 'app.zenote.core.api.Regles.fiches.<anonymous>.<anonymous>' call
        var tmp$ret$18 = new EchangeJson(item_3.a1u_1.v1m_1, item_3.b1u_1.toString(), item_3.c1u_1);
        destination_5.e(tmp$ret$18);
      }
      var tmp$ret$21 = new FicheJson(item_0.w1t_1.x1l_1, item_0.w1t_1.w1l_1.f2_1, tmp_2, tmp_3, destination_5, item_0.w1t_1.e1u());
      destination_2.e(tmp$ret$21);
    }
    var fiches = destination_2;
    return this.s1l_1.a13(ListSerializer(Companion_getInstance_35().p1c()), fiches);
  };
  protoOf(Regles).f1u = function (evenementsJson, maintenant, capturesJson, elementsJson, rattachesJson) {
    var a = toInstant(Companion_getInstance_1().l12(maintenant), Companion_getInstance_2().s12_1);
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.s1l_1.b13(ListSerializer(Companion_instance_21.p1c()), capturesJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>' call
      var tmp$ret$0 = element.e1j_1;
      destination.b2(tmp$ret$0, element);
    }
    var captures = destination;
    var dtos = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = this.s1l_1.b13(ListSerializer(Companion_instance_6.p1c()), rattachesJson);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = tmp0.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>' call
      // Inline function 'kotlin.runCatching' call
      Regles_getInstance();
      var tmp;
      try {
        // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.Companion.success' call
        var value = new Rattache(element_0.h1f_1, element_0.i1f_1, element_0.j1f_1, element_0.k1f_1, toInstant(Companion_getInstance_1().l12(element_0.l1f_1), Companion_getInstance_2().s12_1));
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
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = tmp;
      var tmp_1;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_1 = null;
      } else {
        var tmp_2 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      }
      var tmp0_safe_receiver = tmp_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination_0.e(tmp0_safe_receiver);
      }
    }
    var rattaches = destination_0;
    var tmp_3 = MomentsReunion_instance;
    var tmp_4 = evenementsConnus(this, this.s1l_1.b13(ListSerializer(Companion_getInstance_8().p1c()), evenementsJson));
    var tmp_5 = memoireDe(this, captures, dtos);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(dtos, 10));
    var _iterator__ex2g4s_1 = dtos.g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>' call
      var tmp$ret$12 = versResolu(item, Regles_getInstance());
      destination_1.e(tmp$ret$12);
    }
    // Inline function 'kotlin.collections.map' call
    var this_2 = tmp_3.k1u(a, tmp_4, tmp_5, destination_1, rattaches);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_2 = this_2.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>' call
      var tmp_6 = toLocalDateTime(item_0.m1u_1.n1q_1, Companion_getInstance_2().s12_1).toString();
      var tmp_7 = toLocalDateTime(item_0.m1u_1.o1q_1, Companion_getInstance_2().s12_1).toString();
      // Inline function 'kotlin.collections.map' call
      var this_3 = item_0.n1u_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var _iterator__ex2g4s_3 = this_3.g();
      while (_iterator__ex2g4s_3.h()) {
        var item_1 = _iterator__ex2g4s_3.i();
        // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>.<anonymous>' call
        var tmp$ret$15 = item_1.m1q_1;
        destination_3.e(tmp$ret$15);
      }
      var tmp_8 = destination_3;
      var tmp0_safe_receiver_0 = item_0.q1u_1;
      var tmp_9;
      if (tmp0_safe_receiver_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_4 = tmp0_safe_receiver_0.u1u_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
        var _iterator__ex2g4s_4 = this_4.g();
        while (_iterator__ex2g4s_4.h()) {
          var item_2 = _iterator__ex2g4s_4.i();
          // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$18 = versLigne(Regles_getInstance(), item_2);
          destination_4.e(tmp$ret$18);
        }
        var tmp_10 = destination_4;
        // Inline function 'kotlin.collections.map' call
        var this_5 = tmp0_safe_receiver_0.v1u_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
        var _iterator__ex2g4s_5 = this_5.g();
        while (_iterator__ex2g4s_5.h()) {
          var item_3 = _iterator__ex2g4s_5.i();
          // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$21 = versLigne(Regles_getInstance(), item_3);
          destination_5.e(tmp$ret$21);
        }
        tmp_9 = new BriefingJson(tmp_10, destination_5);
      }
      var tmp_11 = tmp_9;
      var tmp1_safe_receiver = item_0.r1u_1;
      var tmp_12;
      if (tmp1_safe_receiver == null) {
        tmp_12 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'app.zenote.core.api.Regles.momentsDeReunion.<anonymous>.<anonymous>' call
        tmp_12 = new RattacheJson(tmp1_safe_receiver.w1u_1, tmp1_safe_receiver.x1u_1, true, tmp1_safe_receiver.z1u_1, toLocalDateTime(tmp1_safe_receiver.a1v_1, Companion_getInstance_2().s12_1).toString());
      }
      var tmp$ret$28 = new MomentReunionJson(item_0.l1u_1.f2_1, item_0.m1u_1.l1q_1, item_0.m1u_1.m1q_1, tmp_6, tmp_7, item_0.m1u_1.q1q_1, tmp_8, item_0.o1u_1, item_0.p1u_1, tmp_11, tmp_12, item_0.s1u_1);
      destination_2.e(tmp$ret$28);
    }
    var moments = destination_2;
    return this.s1l_1.a13(Companion_getInstance_14().p1c(), new MomentsJson(moments));
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
    this.u1l_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.u1l_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.EntiteId.<anonymous>' call
      var message = "Un identifiant d'entit\xE9 ne peut pas \xEAtre vide.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(EntiteId).toString = function () {
    return this.u1l_1;
  };
  protoOf(EntiteId).hashCode = function () {
    return getStringHashCode(this.u1l_1);
  };
  protoOf(EntiteId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntiteId))
      return false;
    var tmp0_other_with_cast = other instanceof EntiteId ? other : THROW_CCE();
    if (!(this.u1l_1 === tmp0_other_with_cast.u1l_1))
      return false;
    return true;
  };
  function Mention(captureId, a, extrait, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.a1u_1 = captureId;
    this.b1u_1 = a;
    this.c1u_1 = extrait;
    this.d1u_1 = elementId;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.c1u_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.Mention.<anonymous>' call
      var message = "Une mention sans extrait n'est pas consultable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Mention).toString = function () {
    return 'Mention(captureId=' + this.a1u_1.toString() + ', a=' + this.b1u_1.toString() + ', extrait=' + this.c1u_1 + ', elementId=' + toString(this.d1u_1) + ')';
  };
  protoOf(Mention).hashCode = function () {
    var result = this.a1u_1.hashCode();
    result = imul(result, 31) + this.b1u_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.c1u_1) | 0;
    result = imul(result, 31) + (this.d1u_1 == null ? 0 : this.d1u_1.hashCode()) | 0;
    return result;
  };
  protoOf(Mention).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Mention))
      return false;
    var tmp0_other_with_cast = other instanceof Mention ? other : THROW_CCE();
    if (!this.a1u_1.equals(tmp0_other_with_cast.a1u_1))
      return false;
    if (!this.b1u_1.equals(tmp0_other_with_cast.b1u_1))
      return false;
    if (!(this.c1u_1 === tmp0_other_with_cast.c1u_1))
      return false;
    if (!equals(this.d1u_1, tmp0_other_with_cast.d1u_1))
      return false;
    return true;
  };
  function Entite(id, type, nom, alias, mentions, sphere) {
    alias = alias === VOID ? emptySet() : alias;
    mentions = mentions === VOID ? emptyList() : mentions;
    sphere = sphere === VOID ? null : sphere;
    this.v1l_1 = id;
    this.w1l_1 = type;
    this.x1l_1 = nom;
    this.y1l_1 = alias;
    this.z1l_1 = mentions;
    this.a1m_1 = sphere;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.x1l_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.Entite.<anonymous>' call
      var message = "Une entit\xE9 sans nom n'est pas d\xE9signable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Entite).u1o = function () {
    var tmp0 = this.z1l_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.g();
      if (!iterator.h()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.i();
      if (!iterator.h()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      // Inline function 'app.zenote.core.memoire.Entite.<get-derniereMention>.<anonymous>' call
      var maxValue = maxElem.b1u_1;
      do {
        var e = iterator.i();
        // Inline function 'app.zenote.core.memoire.Entite.<get-derniereMention>.<anonymous>' call
        var v = e.b1u_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.h());
      tmp$ret$0 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1u_1;
  };
  protoOf(Entite).e1u = function () {
    return this.z1l_1.l();
  };
  protoOf(Entite).b1v = function (id, type, nom, alias, mentions, sphere) {
    return new Entite(id, type, nom, alias, mentions, sphere);
  };
  protoOf(Entite).c1v = function (id, type, nom, alias, mentions, sphere, $super) {
    id = id === VOID ? this.v1l_1 : id;
    type = type === VOID ? this.w1l_1 : type;
    nom = nom === VOID ? this.x1l_1 : nom;
    alias = alias === VOID ? this.y1l_1 : alias;
    mentions = mentions === VOID ? this.z1l_1 : mentions;
    sphere = sphere === VOID ? this.a1m_1 : sphere;
    return $super === VOID ? this.b1v(id, type, nom, alias, mentions, sphere) : $super.b1v.call(this, id, type, nom, alias, mentions, sphere);
  };
  protoOf(Entite).toString = function () {
    return 'Entite(id=' + this.v1l_1.toString() + ', type=' + this.w1l_1.toString() + ', nom=' + this.x1l_1 + ', alias=' + toString_0(this.y1l_1) + ', mentions=' + toString_0(this.z1l_1) + ', sphere=' + toString(this.a1m_1) + ')';
  };
  protoOf(Entite).hashCode = function () {
    var result = this.v1l_1.hashCode();
    result = imul(result, 31) + this.w1l_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.x1l_1) | 0;
    result = imul(result, 31) + hashCode(this.y1l_1) | 0;
    result = imul(result, 31) + hashCode(this.z1l_1) | 0;
    result = imul(result, 31) + (this.a1m_1 == null ? 0 : this.a1m_1.hashCode()) | 0;
    return result;
  };
  protoOf(Entite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entite))
      return false;
    var tmp0_other_with_cast = other instanceof Entite ? other : THROW_CCE();
    if (!this.v1l_1.equals(tmp0_other_with_cast.v1l_1))
      return false;
    if (!this.w1l_1.equals(tmp0_other_with_cast.w1l_1))
      return false;
    if (!(this.x1l_1 === tmp0_other_with_cast.x1l_1))
      return false;
    if (!equals(this.y1l_1, tmp0_other_with_cast.y1l_1))
      return false;
    if (!equals(this.z1l_1, tmp0_other_with_cast.z1l_1))
      return false;
    if (!equals(this.a1m_1, tmp0_other_with_cast.a1m_1))
      return false;
    return true;
  };
  function TypeEntite_PERSONNE_getInstance() {
    TypeEntite_initEntries();
    return TypeEntite_PERSONNE_instance;
  }
  function LigneFiche(elementId, captureId, type, texte, verdict) {
    this.q1m_1 = elementId;
    this.r1m_1 = captureId;
    this.s1m_1 = type;
    this.t1m_1 = texte;
    this.u1m_1 = verdict;
  }
  protoOf(LigneFiche).toString = function () {
    return 'LigneFiche(elementId=' + this.q1m_1.toString() + ', captureId=' + this.r1m_1.toString() + ', type=' + this.s1m_1.toString() + ', texte=' + this.t1m_1 + ', verdict=' + this.u1m_1.toString() + ')';
  };
  protoOf(LigneFiche).hashCode = function () {
    var result = this.q1m_1.hashCode();
    result = imul(result, 31) + this.r1m_1.hashCode() | 0;
    result = imul(result, 31) + this.s1m_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.t1m_1) | 0;
    result = imul(result, 31) + this.u1m_1.hashCode() | 0;
    return result;
  };
  protoOf(LigneFiche).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LigneFiche))
      return false;
    var tmp0_other_with_cast = other instanceof LigneFiche ? other : THROW_CCE();
    if (!this.q1m_1.equals(tmp0_other_with_cast.q1m_1))
      return false;
    if (!this.r1m_1.equals(tmp0_other_with_cast.r1m_1))
      return false;
    if (!this.s1m_1.equals(tmp0_other_with_cast.s1m_1))
      return false;
    if (!(this.t1m_1 === tmp0_other_with_cast.t1m_1))
      return false;
    if (!this.u1m_1.equals(tmp0_other_with_cast.u1m_1))
      return false;
    return true;
  };
  function FicheEntite(entite, ouverts, decide, derniersEchanges) {
    this.w1t_1 = entite;
    this.x1t_1 = ouverts;
    this.y1t_1 = decide;
    this.z1t_1 = derniersEchanges;
  }
  protoOf(FicheEntite).toString = function () {
    return 'FicheEntite(entite=' + this.w1t_1.toString() + ', ouverts=' + toString_0(this.x1t_1) + ', decide=' + toString_0(this.y1t_1) + ', derniersEchanges=' + toString_0(this.z1t_1) + ')';
  };
  protoOf(FicheEntite).hashCode = function () {
    var result = this.w1t_1.hashCode();
    result = imul(result, 31) + hashCode(this.x1t_1) | 0;
    result = imul(result, 31) + hashCode(this.y1t_1) | 0;
    result = imul(result, 31) + hashCode(this.z1t_1) | 0;
    return result;
  };
  protoOf(FicheEntite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FicheEntite))
      return false;
    var tmp0_other_with_cast = other instanceof FicheEntite ? other : THROW_CCE();
    if (!this.w1t_1.equals(tmp0_other_with_cast.w1t_1))
      return false;
    if (!equals(this.x1t_1, tmp0_other_with_cast.x1t_1))
      return false;
    if (!equals(this.y1t_1, tmp0_other_with_cast.y1t_1))
      return false;
    if (!equals(this.z1t_1, tmp0_other_with_cast.z1t_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_4(function_0) {
    this.d1v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_4).zc = function (a, b) {
    return this.d1v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).y2 = function () {
    return this.d1v_1;
  };
  protoOf(sam$kotlin_Comparator$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function Fiches$de$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
    var tmp = a.g1n_1.p1m_1;
    // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
    var tmp$ret$1 = b.g1n_1.p1m_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Fiches$de$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
    var tmp = b.b1u_1;
    // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
    var tmp$ret$1 = a.b1u_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Fiches$de$lambda_1($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
        var tmp_0 = a.a1u_1.v1m_1;
        // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
        var tmp$ret$1 = b.a1u_1.v1m_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Fiches() {
    this.u1t_1 = 5;
  }
  protoOf(Fiches).v1t = function (memoire, entiteId, elements) {
    var tmp0_elvis_lhs = memoire.e1v(entiteId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var entite = tmp;
    var rattaches = toSet(memoire.f1v(entiteId));
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
      if (rattaches.r1(element.g1n_1)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = Fiches$de$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_4(tmp_0);
    // Inline function 'kotlin.collections.map' call
    var this_0 = sortedWith(destination, tmp$ret$3);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
      var tmp$ret$5 = new LigneFiche(item.g1n_1, item.h1n_1, item.i1n_1, item.j1n_1, item.q1n_1);
      destination_0.e(tmp$ret$5);
    }
    var lignes = destination_0;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = lignes.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
      if (!element_0.s1m_1.equals(TypeElement_DECISION_getInstance()) && !element_0.u1m_1.equals(Verdict_REJETE_getInstance()) && !element_0.u1m_1.equals(Verdict_UN_JOUR_getInstance())) {
        destination_1.e(element_0);
      }
    }
    var tmp_1 = destination_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_2 = lignes.g();
    while (_iterator__ex2g4s_2.h()) {
      var element_1 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.memoire.Fiches.de.<anonymous>' call
      if (element_1.s1m_1.equals(TypeElement_DECISION_getInstance())) {
        destination_2.e(element_1);
      }
    }
    var tmp_2 = destination_2;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_3 = Fiches$de$lambda_0;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_4(tmp_3);
    var tmp_4 = Fiches$de$lambda_1(this_1);
    var tmp$ret$15 = new sam$kotlin_Comparator$0_4(tmp_4);
    return new FicheEntite(entite, tmp_1, tmp_2, take(sortedWith(entite.z1l_1, tmp$ret$15), 5));
  };
  var Fiches_instance;
  function Fiches_getInstance() {
    return Fiches_instance;
  }
  function sam$kotlin_Comparator$0_5(function_0) {
    this.g1v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_5).zc = function (a, b) {
    return this.g1v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).y2 = function () {
    return this.g1v_1;
  };
  protoOf(sam$kotlin_Comparator$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function Memoire$elementsDe$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.memoire.Memoire.elementsDe.<anonymous>' call
    var tmp = a.p1m_1;
    // Inline function 'app.zenote.core.memoire.Memoire.elementsDe.<anonymous>' call
    var tmp$ret$1 = b.p1m_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Memoire() {
    this.i1m_1 = LinkedHashMap_init_$Create$_0();
    this.j1m_1 = LinkedHashMap_init_$Create$_0();
    this.k1m_1 = LinkedHashMap_init_$Create$_0();
    this.l1m_1 = 0;
    this.m1m_1 = 0;
  }
  protoOf(Memoire).e1v = function (id) {
    return this.i1m_1.y1(id);
  };
  protoOf(Memoire).t1t = function () {
    return toList(this.i1m_1.e2());
  };
  protoOf(Memoire).h1v = function (type, nom) {
    var tmp = Texte_getInstance();
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(nom) ? nom : THROW_CCE()));
    var cherche = tmp.l1v(tmp$ret$0);
    var tmp1 = this.i1m_1.e2();
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp1.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.memoire.Memoire.trouver.<anonymous>' call
        var tmp_0;
        if (element.w1l_1.equals(type)) {
          var tmp_1;
          if (Texte_getInstance().l1v(element.x1l_1) === cherche) {
            tmp_1 = true;
          } else {
            var tmp0 = element.y1l_1;
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
                if (Texte_getInstance().l1v(element_0) === cherche) {
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
  protoOf(Memoire).f1v = function (entiteId) {
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.j1m_1;
    var result = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.a2().g();
    while (_iterator__ex2g4s.h()) {
      var entry = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.memoire.Memoire.elementsDe.<anonymous>' call
      if (entry.v1().r1(entiteId)) {
        result.b2(entry.u1(), entry.v1());
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    var this_1 = result.z1();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Memoire$elementsDe$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_5(tmp);
    return sortedWith(this_1, tmp$ret$3);
  };
  protoOf(Memoire).n1m = function (type, nom, mention, sphere) {
    var existante = this.h1v(type, nom);
    var tmp;
    if (existante == null) {
      this.l1m_1 = this.l1m_1 + 1 | 0;
      var tmp_0 = new EntiteId('ent-' + padStart(this.l1m_1.toString(), 4, _Char___init__impl__6a9atx(48)));
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$0 = toString_0(trim(isCharSequence(nom) ? nom : THROW_CCE()));
      tmp = new Entite(tmp_0, type, tmp$ret$0, VOID, VOID, sphere);
    } else {
      tmp = existante;
    }
    var entite = tmp;
    var tmp1 = entite.z1l_1;
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
        if (element.a1u_1.equals(mention.a1u_1) && equals(element.d1u_1, mention.d1u_1) && element.c1u_1 === mention.c1u_1) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
      tmp$ret$1 = false;
    }
    var deja = tmp$ret$1;
    var tmp_2 = deja ? entite.z1l_1 : plus(entite.z1l_1, mention);
    var tmp1_elvis_lhs = entite.a1m_1;
    var enrichie = entite.c1v(VOID, VOID, VOID, VOID, tmp_2, tmp1_elvis_lhs == null ? sphere : tmp1_elvis_lhs);
    var tmp3 = this.i1m_1;
    // Inline function 'kotlin.collections.set' call
    var key = enrichie.v1l_1;
    tmp3.b2(key, enrichie);
    var tmp2_safe_receiver = mention.d1u_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.memoire.Memoire.observer.<anonymous>' call
      this.o1m(tmp2_safe_receiver, enrichie.v1l_1);
    }
    return enrichie;
  };
  protoOf(Memoire).o1m = function (elementId, entiteId) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.i1m_1;
    // Inline function 'kotlin.require' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).w1(entiteId)) {
      // Inline function 'app.zenote.core.memoire.Memoire.rattacher.<anonymous>' call
      var message = 'Rattachement \xE0 une entit\xE9 inconnue : ' + entiteId.toString() + '.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.j1m_1;
    var value = this_1.y1(elementId);
    var tmp;
    if (value == null) {
      // Inline function 'app.zenote.core.memoire.Memoire.rattacher.<anonymous>' call
      // Inline function 'kotlin.collections.linkedSetOf' call
      var answer = LinkedHashSet_init_$Create$();
      this_1.b2(elementId, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp.e(entiteId);
  };
  function Candidat(entite, score, proximite, recence, frequence, nomme, appui) {
    this.b1m_1 = entite;
    this.c1m_1 = score;
    this.d1m_1 = proximite;
    this.e1m_1 = recence;
    this.f1m_1 = frequence;
    this.g1m_1 = nomme;
    this.h1m_1 = appui;
  }
  protoOf(Candidat).toString = function () {
    return 'Candidat(entite=' + this.b1m_1.toString() + ', score=' + this.c1m_1 + ', proximite=' + this.d1m_1 + ', recence=' + this.e1m_1 + ', frequence=' + this.f1m_1 + ', nomme=' + this.g1m_1 + ', appui=' + this.h1m_1 + ')';
  };
  protoOf(Candidat).hashCode = function () {
    var result = this.b1m_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.c1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.e1m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f1m_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1m_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h1m_1) | 0;
    return result;
  };
  protoOf(Candidat).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Candidat))
      return false;
    var tmp0_other_with_cast = other instanceof Candidat ? other : THROW_CCE();
    if (!this.b1m_1.equals(tmp0_other_with_cast.b1m_1))
      return false;
    if (!equals(this.c1m_1, tmp0_other_with_cast.c1m_1))
      return false;
    if (!equals(this.d1m_1, tmp0_other_with_cast.d1m_1))
      return false;
    if (!equals(this.e1m_1, tmp0_other_with_cast.e1m_1))
      return false;
    if (!equals(this.f1m_1, tmp0_other_with_cast.f1m_1))
      return false;
    if (!(this.g1m_1 === tmp0_other_with_cast.g1m_1))
      return false;
    if (!(this.h1m_1 === tmp0_other_with_cast.h1m_1))
      return false;
    return true;
  };
  function Resolution(reference, retenu, candidats) {
    this.a1t_1 = reference;
    this.b1t_1 = retenu;
    this.c1t_1 = candidats;
  }
  protoOf(Resolution).d1t = function () {
    return this.b1t_1 == null && this.c1t_1.l() > 1;
  };
  protoOf(Resolution).toString = function () {
    return 'Resolution(reference=' + this.a1t_1 + ', retenu=' + toString(this.b1t_1) + ', candidats=' + toString_0(this.c1t_1) + ')';
  };
  protoOf(Resolution).hashCode = function () {
    var result = getStringHashCode(this.a1t_1);
    result = imul(result, 31) + (this.b1t_1 == null ? 0 : this.b1t_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.c1t_1) | 0;
    return result;
  };
  protoOf(Resolution).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Resolution))
      return false;
    var tmp0_other_with_cast = other instanceof Resolution ? other : THROW_CCE();
    if (!(this.a1t_1 === tmp0_other_with_cast.a1t_1))
      return false;
    if (!equals(this.b1t_1, tmp0_other_with_cast.b1t_1))
      return false;
    if (!equals(this.c1t_1, tmp0_other_with_cast.c1t_1))
      return false;
    return true;
  };
  function lEmporteNettement($this, premier, tous) {
    var tmp0_elvis_lhs = getOrNull(tous, 1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return premier.g1m_1 || premier.c1m_1 >= 0.75;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var second = tmp;
    if (premier.c1m_1 < 0.75 && !(premier.g1m_1 && !second.g1m_1))
      return false;
    return premier.c1m_1 - second.c1m_1 >= 0.12;
  }
  function noter($this, entite, reference, contexte, maintenant, ignorerElement) {
    var nomme_0 = nomme($this, entite, reference);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = entite.z1l_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
      if (element.d1u_1 == null || !equals(element.d1u_1, ignorerElement)) {
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
      var maxValue = Texte_getInstance().m1v(contexte, it.c1u_1);
      while (iterator.h()) {
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
        var it_0 = iterator.i();
        var v = Texte_getInstance().m1v(contexte, it_0.c1u_1);
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
      var maxValue_0 = maxElem.b1u_1;
      do {
        var e = iterator_0.i();
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
        var v_0 = e.b1u_1;
        if (compareTo(maxValue_0, v_0) < 0) {
          maxElem = e;
          maxValue_0 = v_0;
        }
      }
       while (iterator_0.h());
      tmp$ret$8 = maxElem;
    }
    var tmp1_safe_receiver = tmp$ret$8;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b1u_1;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
      tmp_0 = _Duration___get_inWholeDays__impl__7bvpxz(maintenant.a12(tmp2_safe_receiver)).x2();
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
    var cherchee = tmp.l1v(tmp$ret$0);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(cherchee) === 0)
      return false;
    if (Texte_getInstance().l1v(entite.x1l_1) === cherchee)
      return true;
    var tmp2 = entite.y1l_1;
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
        if (Texte_getInstance().l1v(element) === cherchee) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2)
      return true;
    var tmp4 = split(Texte_getInstance().l1v(entite.x1l_1), charArrayOf([_Char___init__impl__6a9atx(32)]));
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
        var maxValue = maxElem.b1u_1;
        do {
          var e = iterator.i();
          // Inline function 'app.zenote.core.memoire.ResolutionReferences.appui.<anonymous>' call
          var v = e.b1u_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (iterator.h());
        tmp$ret$1 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1u_1;
      var extrait = tmp1_safe_receiver == null ? null : take_0(tmp1_safe_receiver, 60);
      if (!(extrait == null)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = 'd\xE9j\xE0 cit\xE9e \xE0 propos de \xAB ' + extrait + ' \xBB';
        morceaux.e(element_0);
      }
    }
    var tmp2_subject = connues.l();
    // Inline function 'kotlin.collections.plusAssign' call
    var element_1 = tmp2_subject === 0 ? 'jamais mentionn\xE9e' : tmp2_subject === 1 ? 'mentionn\xE9e une fois' : 'mentionn\xE9e ' + entite.e1u() + ' fois';
    morceaux.e(element_1);
    return joinToString(morceaux, ', ');
  }
  function sam$kotlin_Comparator$0_6(function_0) {
    this.n1v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_6).zc = function (a, b) {
    return this.n1v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).y2 = function () {
    return this.n1v_1;
  };
  protoOf(sam$kotlin_Comparator$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function ResolutionReferences$resoudre$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
    var tmp = b.c1m_1;
    // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
    var tmp$ret$1 = a.c1m_1;
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
        var tmp_0 = a.b1m_1.x1l_1;
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
        var tmp$ret$1 = b.b1m_1.x1l_1;
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
        var tmp_0 = a.b1m_1.v1l_1.u1l_1;
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
        var tmp$ret$1 = b.b1m_1.v1l_1.u1l_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function ResolutionReferences() {
    this.s1s_1 = 30.0;
    this.t1s_1 = 5.0;
    this.u1s_1 = 0.5;
    this.v1s_1 = 0.3;
    this.w1s_1 = 0.2;
    this.x1s_1 = 0.12;
    this.y1s_1 = 0.05;
  }
  protoOf(ResolutionReferences).z1s = function (memoire, reference, maintenant, contexte, types, ignorerElement) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = memoire.t1t();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
      if (types.j() || types.r1(element.w1l_1)) {
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
      var tmp0_0 = element_1.z1l_1;
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
          if (element_2.d1u_1 == null || !equals(element_2.d1u_1, ignorerElement)) {
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
      if (element_3.c1m_1 > 0.05) {
        destination_3.e(element_3);
      }
    }
    var tmp_0 = destination_3;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_1 = ResolutionReferences$resoudre$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_6(tmp_1);
    var tmp_2 = ResolutionReferences$resoudre$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_6(tmp_2);
    var tmp_3 = ResolutionReferences$resoudre$lambda_1(this_1);
    var tmp$ret$19 = new sam$kotlin_Comparator$0_6(tmp_3);
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
    this.l1o_1 = valeur;
    this.m1o_1 = confiance;
    this.n1o_1 = indice;
    var containsArg = this.m1o_1;
    // Inline function 'kotlin.require' call
    if (!(0.0 <= containsArg ? containsArg <= 1.0 : false)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message = 'La confiance est une probabilit\xE9 entre 0 et 1.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.n1o_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message_0 = "Une d\xE9duction sans indice n'est pas justifiable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Deduit).o1o = function () {
    return this.m1o_1 >= 0.75;
  };
  protoOf(Deduit).toString = function () {
    return 'Deduit(valeur=' + toString(this.l1o_1) + ', confiance=' + this.m1o_1 + ', indice=' + this.n1o_1 + ')';
  };
  protoOf(Deduit).hashCode = function () {
    var result = this.l1o_1 == null ? 0 : hashCode(this.l1o_1);
    result = imul(result, 31) + getNumberHashCode(this.m1o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n1o_1) | 0;
    return result;
  };
  protoOf(Deduit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deduit))
      return false;
    var tmp0_other_with_cast = other instanceof Deduit ? other : THROW_CCE();
    if (!equals(this.l1o_1, tmp0_other_with_cast.l1o_1))
      return false;
    if (!equals(this.m1o_1, tmp0_other_with_cast.m1o_1))
      return false;
    if (!(this.n1o_1 === tmp0_other_with_cast.n1o_1))
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
  protoOf(TypeElement).q1v = function () {
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
  var Duree_COURTE_instance;
  var Duree_MOYENNE_instance;
  var Duree_LONGUE_instance;
  function values() {
    return [Duree_COURTE_getInstance(), Duree_MOYENNE_getInstance(), Duree_LONGUE_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Duree_entriesInitialized;
  function Duree_initEntries() {
    if (Duree_entriesInitialized)
      return Unit_instance;
    Duree_entriesInitialized = true;
    Duree_COURTE_instance = new Duree('COURTE', 0, 5);
    Duree_MOYENNE_instance = new Duree('MOYENNE', 1, 20);
    Duree_LONGUE_instance = new Duree('LONGUE', 2, 60);
  }
  var $ENTRIES;
  function Duree(name, ordinal, minutes) {
    Enum.call(this, name, ordinal);
    this.t1v_1 = minutes;
  }
  function Plan(declencheur, action) {
    this.t1q_1 = declencheur;
    this.u1q_1 = action;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.t1q_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message = "Un plan sans d\xE9clencheur n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.u1q_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message_0 = "Un plan sans action n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Plan).toString = function () {
    return 'Quand ' + this.t1q_1 + ', ' + this.u1q_1;
  };
  protoOf(Plan).hashCode = function () {
    var result = getStringHashCode(this.t1q_1);
    result = imul(result, 31) + getStringHashCode(this.u1q_1) | 0;
    return result;
  };
  protoOf(Plan).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plan))
      return false;
    var tmp0_other_with_cast = other instanceof Plan ? other : THROW_CCE();
    if (!(this.t1q_1 === tmp0_other_with_cast.t1q_1))
      return false;
    if (!(this.u1q_1 === tmp0_other_with_cast.u1q_1))
      return false;
    return true;
  };
  function ElementId(value) {
    this.p1m_1 = value;
  }
  protoOf(ElementId).toString = function () {
    return this.p1m_1;
  };
  protoOf(ElementId).hashCode = function () {
    return getStringHashCode(this.p1m_1);
  };
  protoOf(ElementId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementId))
      return false;
    var tmp0_other_with_cast = other instanceof ElementId ? other : THROW_CCE();
    if (!(this.p1m_1 === tmp0_other_with_cast.p1m_1))
      return false;
    return true;
  };
  function ElementDerive(captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan, duree) {
    echeance = echeance === VOID ? null : echeance;
    poids = poids === VOID ? null : poids;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    sphere = sphere === VOID ? null : sphere;
    plan = plan === VOID ? null : plan;
    duree = duree === VOID ? null : duree;
    this.a1o_1 = captureId;
    this.b1o_1 = type;
    this.c1o_1 = texte;
    this.d1o_1 = passage;
    this.e1o_1 = echeance;
    this.f1o_1 = poids;
    this.g1o_1 = interlocuteur;
    this.h1o_1 = sphere;
    this.i1o_1 = plan;
    this.j1o_1 = duree;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.c1o_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.ElementDerive.<anonymous>' call
      var message = "Un \xE9l\xE9ment sans texte n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.k1o_1 = new ElementId(this.a1o_1.toString() + ':' + this.d1o_1.u1v_1 + '-' + this.d1o_1.v1v_1 + ':' + this.b1o_1.toString());
  }
  protoOf(ElementDerive).toString = function () {
    return 'ElementDerive(captureId=' + this.a1o_1.toString() + ', type=' + this.b1o_1.toString() + ', texte=' + this.c1o_1 + ', passage=' + this.d1o_1.toString() + ', echeance=' + toString(this.e1o_1) + ', poids=' + toString(this.f1o_1) + ', interlocuteur=' + toString(this.g1o_1) + ', sphere=' + toString(this.h1o_1) + ', plan=' + toString(this.i1o_1) + ', duree=' + toString(this.j1o_1) + ')';
  };
  protoOf(ElementDerive).hashCode = function () {
    var result = this.a1o_1.hashCode();
    result = imul(result, 31) + this.b1o_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.c1o_1) | 0;
    result = imul(result, 31) + this.d1o_1.hashCode() | 0;
    result = imul(result, 31) + (this.e1o_1 == null ? 0 : this.e1o_1.hashCode()) | 0;
    result = imul(result, 31) + (this.f1o_1 == null ? 0 : this.f1o_1.hashCode()) | 0;
    result = imul(result, 31) + (this.g1o_1 == null ? 0 : this.g1o_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h1o_1 == null ? 0 : this.h1o_1.hashCode()) | 0;
    result = imul(result, 31) + (this.i1o_1 == null ? 0 : this.i1o_1.hashCode()) | 0;
    result = imul(result, 31) + (this.j1o_1 == null ? 0 : this.j1o_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElementDerive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDerive))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDerive ? other : THROW_CCE();
    if (!this.a1o_1.equals(tmp0_other_with_cast.a1o_1))
      return false;
    if (!this.b1o_1.equals(tmp0_other_with_cast.b1o_1))
      return false;
    if (!(this.c1o_1 === tmp0_other_with_cast.c1o_1))
      return false;
    if (!this.d1o_1.equals(tmp0_other_with_cast.d1o_1))
      return false;
    if (!equals(this.e1o_1, tmp0_other_with_cast.e1o_1))
      return false;
    if (!equals(this.f1o_1, tmp0_other_with_cast.f1o_1))
      return false;
    if (!equals(this.g1o_1, tmp0_other_with_cast.g1o_1))
      return false;
    if (!equals(this.h1o_1, tmp0_other_with_cast.h1o_1))
      return false;
    if (!equals(this.i1o_1, tmp0_other_with_cast.i1o_1))
      return false;
    if (!equals(this.j1o_1, tmp0_other_with_cast.j1o_1))
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
  function Duree_COURTE_getInstance() {
    Duree_initEntries();
    return Duree_COURTE_instance;
  }
  function Duree_MOYENNE_getInstance() {
    Duree_initEntries();
    return Duree_MOYENNE_instance;
  }
  function Duree_LONGUE_getInstance() {
    Duree_initEntries();
    return Duree_LONGUE_instance;
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
  function Companion_30() {
  }
  var Companion_instance_31;
  function Companion_getInstance_36() {
    return Companion_instance_31;
  }
  function ElementResolu(id, captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan, verdict, aConfirmer, corrigeParHumain, indicePoids, duree, dureeSure) {
    duree = duree === VOID ? null : duree;
    dureeSure = dureeSure === VOID ? false : dureeSure;
    this.g1n_1 = id;
    this.h1n_1 = captureId;
    this.i1n_1 = type;
    this.j1n_1 = texte;
    this.k1n_1 = passage;
    this.l1n_1 = echeance;
    this.m1n_1 = poids;
    this.n1n_1 = interlocuteur;
    this.o1n_1 = sphere;
    this.p1n_1 = plan;
    this.q1n_1 = verdict;
    this.r1n_1 = aConfirmer;
    this.s1n_1 = corrigeParHumain;
    this.t1n_1 = indicePoids;
    this.u1n_1 = duree;
    this.v1n_1 = dureeSure;
  }
  protoOf(ElementResolu).toString = function () {
    return 'ElementResolu(id=' + this.g1n_1.toString() + ', captureId=' + this.h1n_1.toString() + ', type=' + this.i1n_1.toString() + ', texte=' + this.j1n_1 + ', passage=' + this.k1n_1.toString() + ', echeance=' + toString(this.l1n_1) + ', poids=' + toString(this.m1n_1) + ', interlocuteur=' + this.n1n_1 + ', sphere=' + toString(this.o1n_1) + ', plan=' + toString(this.p1n_1) + ', verdict=' + this.q1n_1.toString() + ', aConfirmer=' + this.r1n_1 + ', corrigeParHumain=' + this.s1n_1 + ', indicePoids=' + this.t1n_1 + ', duree=' + toString(this.u1n_1) + ', dureeSure=' + this.v1n_1 + ')';
  };
  protoOf(ElementResolu).hashCode = function () {
    var result = this.g1n_1.hashCode();
    result = imul(result, 31) + this.h1n_1.hashCode() | 0;
    result = imul(result, 31) + this.i1n_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.j1n_1) | 0;
    result = imul(result, 31) + this.k1n_1.hashCode() | 0;
    result = imul(result, 31) + (this.l1n_1 == null ? 0 : this.l1n_1.hashCode()) | 0;
    result = imul(result, 31) + (this.m1n_1 == null ? 0 : this.m1n_1.hashCode()) | 0;
    result = imul(result, 31) + (this.n1n_1 == null ? 0 : getStringHashCode(this.n1n_1)) | 0;
    result = imul(result, 31) + (this.o1n_1 == null ? 0 : this.o1n_1.hashCode()) | 0;
    result = imul(result, 31) + (this.p1n_1 == null ? 0 : this.p1n_1.hashCode()) | 0;
    result = imul(result, 31) + this.q1n_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r1n_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s1n_1) | 0;
    result = imul(result, 31) + (this.t1n_1 == null ? 0 : getStringHashCode(this.t1n_1)) | 0;
    result = imul(result, 31) + (this.u1n_1 == null ? 0 : this.u1n_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v1n_1) | 0;
    return result;
  };
  protoOf(ElementResolu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementResolu))
      return false;
    var tmp0_other_with_cast = other instanceof ElementResolu ? other : THROW_CCE();
    if (!this.g1n_1.equals(tmp0_other_with_cast.g1n_1))
      return false;
    if (!this.h1n_1.equals(tmp0_other_with_cast.h1n_1))
      return false;
    if (!this.i1n_1.equals(tmp0_other_with_cast.i1n_1))
      return false;
    if (!(this.j1n_1 === tmp0_other_with_cast.j1n_1))
      return false;
    if (!this.k1n_1.equals(tmp0_other_with_cast.k1n_1))
      return false;
    if (!equals(this.l1n_1, tmp0_other_with_cast.l1n_1))
      return false;
    if (!equals(this.m1n_1, tmp0_other_with_cast.m1n_1))
      return false;
    if (!(this.n1n_1 == tmp0_other_with_cast.n1n_1))
      return false;
    if (!equals(this.o1n_1, tmp0_other_with_cast.o1n_1))
      return false;
    if (!equals(this.p1n_1, tmp0_other_with_cast.p1n_1))
      return false;
    if (!this.q1n_1.equals(tmp0_other_with_cast.q1n_1))
      return false;
    if (!(this.r1n_1 === tmp0_other_with_cast.r1n_1))
      return false;
    if (!(this.s1n_1 === tmp0_other_with_cast.s1n_1))
      return false;
    if (!(this.t1n_1 == tmp0_other_with_cast.t1n_1))
      return false;
    if (!equals(this.u1n_1, tmp0_other_with_cast.u1n_1))
      return false;
    if (!(this.v1n_1 === tmp0_other_with_cast.v1n_1))
      return false;
    return true;
  };
  function CaptureId(value) {
    this.v1m_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.v1m_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.CaptureId.<anonymous>' call
      var message = 'Un identifiant de capture ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(CaptureId).toString = function () {
    return this.v1m_1;
  };
  protoOf(CaptureId).hashCode = function () {
    return getStringHashCode(this.v1m_1);
  };
  protoOf(CaptureId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureId))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureId ? other : THROW_CCE();
    if (!(this.v1m_1 === tmp0_other_with_cast.v1m_1))
      return false;
    return true;
  };
  function Passage(debutCar, finCar, debutMs, finMs) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    this.u1v_1 = debutCar;
    this.v1v_1 = finCar;
    this.w1v_1 = debutMs;
    this.x1v_1 = finMs;
    // Inline function 'kotlin.require' call
    if (!(this.u1v_1 >= 0)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message = 'Le d\xE9but du passage ne peut pas \xEAtre n\xE9gatif.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.v1v_1 > this.u1v_1)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_0 = 'Le passage doit couvrir au moins un caract\xE8re.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(this.w1v_1 == null === (this.x1v_1 == null))) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_1 = 'Les bornes audio vont par paire, ou pas du tout.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    if (!(this.w1v_1 == null) && !(this.x1v_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.w1v_1.z(new Long(0, 0)) >= 0 && this.x1v_1.z(this.w1v_1) > 0)) {
        // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
        var message_2 = 'Bornes audio incoh\xE9rentes.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }
    }
  }
  protoOf(Passage).toString = function () {
    return 'Passage(debutCar=' + this.u1v_1 + ', finCar=' + this.v1v_1 + ', debutMs=' + toString(this.w1v_1) + ', finMs=' + toString(this.x1v_1) + ')';
  };
  protoOf(Passage).hashCode = function () {
    var result = this.u1v_1;
    result = imul(result, 31) + this.v1v_1 | 0;
    result = imul(result, 31) + (this.w1v_1 == null ? 0 : this.w1v_1.hashCode()) | 0;
    result = imul(result, 31) + (this.x1v_1 == null ? 0 : this.x1v_1.hashCode()) | 0;
    return result;
  };
  protoOf(Passage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Passage))
      return false;
    var tmp0_other_with_cast = other instanceof Passage ? other : THROW_CCE();
    if (!(this.u1v_1 === tmp0_other_with_cast.u1v_1))
      return false;
    if (!(this.v1v_1 === tmp0_other_with_cast.v1v_1))
      return false;
    if (!equals(this.w1v_1, tmp0_other_with_cast.w1v_1))
      return false;
    if (!equals(this.x1v_1, tmp0_other_with_cast.x1v_1))
      return false;
    return true;
  };
  function ordreEcheance($this, element) {
    var tmp0_safe_receiver = element.l1n_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cr();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? new Long(0, -2147483648) : tmp2_elvis_lhs;
  }
  function CreneauProtege$proposition$lambda(it) {
    return ordreEcheance(CreneauProtege_instance, it);
  }
  function CreneauProtege$proposition$lambda_0(it) {
    return it.g1n_1.p1m_1;
  }
  function CreneauProtege() {
    this.m1t_1 = 7;
    this.n1t_1 = 3;
  }
  protoOf(CreneauProtege).o1t = function (elements, aujourdhui) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.CreneauProtege.proposition.<anonymous>' call
      if (CreneauProtege_instance.y1v(element, aujourdhui)) {
        destination.e(element);
      }
    }
    var tmp = destination;
    var tmp_0 = CreneauProtege$proposition$lambda;
    return firstOrNull(sortedWith(tmp, compareBy([tmp_0, CreneauProtege$proposition$lambda_0])));
  };
  protoOf(CreneauProtege).y1v = function (element, aujourdhui) {
    if (!element.q1n_1.equals(Verdict_ACCEPTE_getInstance()))
      return false;
    if (!element.i1n_1.q1v())
      return false;
    if (!equals(element.m1n_1, Poids_FORT_getInstance()))
      return false;
    var tmp0_elvis_lhs = element.l1n_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var echeance = tmp;
    return (echeance.cr() - aujourdhui.cr() | 0) > 7;
  };
  protoOf(CreneauProtege).r1t = function (renoncementsDAffilee) {
    return renoncementsDAffilee >= 3;
  };
  protoOf(CreneauProtege).q1t = function (renoncementsDAffilee) {
    return 'Le cr\xE9neau prot\xE9g\xE9 est pass\xE9 ' + renoncementsDAffilee + ' fois sans \xEAtre pris. ' + "Il n'est peut-\xEAtre pas au bon moment.";
  };
  var CreneauProtege_instance;
  function CreneauProtege_getInstance() {
    return CreneauProtege_instance;
  }
  function Companion_31() {
    Companion_instance_32 = this;
    this.z1v_1 = new Disponibilite();
  }
  var Companion_instance_32;
  function Companion_getInstance_37() {
    if (Companion_instance_32 == null)
      new Companion_31();
    return Companion_instance_32;
  }
  function Disponibilite(minutesAvantReunion, prochaineReunion, sequenceTermineeMinutes) {
    Companion_getInstance_37();
    minutesAvantReunion = minutesAvantReunion === VOID ? null : minutesAvantReunion;
    prochaineReunion = prochaineReunion === VOID ? null : prochaineReunion;
    sequenceTermineeMinutes = sequenceTermineeMinutes === VOID ? null : sequenceTermineeMinutes;
    this.l1p_1 = minutesAvantReunion;
    this.m1p_1 = prochaineReunion;
    this.n1p_1 = sequenceTermineeMinutes;
  }
  protoOf(Disponibilite).a1w = function () {
    return !(this.l1p_1 == null) && this.l1p_1 < 60;
  };
  protoOf(Disponibilite).b1w = function () {
    return !(this.n1p_1 == null);
  };
  protoOf(Disponibilite).c1w = function () {
    return !this.a1w() && !this.b1w();
  };
  protoOf(Disponibilite).toString = function () {
    return 'Disponibilite(minutesAvantReunion=' + this.l1p_1 + ', prochaineReunion=' + this.m1p_1 + ', sequenceTermineeMinutes=' + this.n1p_1 + ')';
  };
  protoOf(Disponibilite).hashCode = function () {
    var result = this.l1p_1 == null ? 0 : this.l1p_1;
    result = imul(result, 31) + (this.m1p_1 == null ? 0 : getStringHashCode(this.m1p_1)) | 0;
    result = imul(result, 31) + (this.n1p_1 == null ? 0 : this.n1p_1) | 0;
    return result;
  };
  protoOf(Disponibilite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Disponibilite))
      return false;
    var tmp0_other_with_cast = other instanceof Disponibilite ? other : THROW_CCE();
    if (!(this.l1p_1 == tmp0_other_with_cast.l1p_1))
      return false;
    if (!(this.m1p_1 == tmp0_other_with_cast.m1p_1))
      return false;
    if (!(this.n1p_1 == tmp0_other_with_cast.n1p_1))
      return false;
    return true;
  };
  function enMinutes($this, minutes) {
    return minutes <= 1 ? '1 minute' : '' + minutes + ' minutes';
  }
  function enHeures($this, minutes) {
    var heures = minutes / 60 | 0;
    var reste = minutes % 60 | 0;
    return reste === 0 ? '' + heures + ' h' : '' + heures + ' h ' + padStart(reste.toString(), 2, _Char___init__impl__6a9atx(48));
  }
  function sam$kotlin_Comparator$0_7(function_0) {
    this.d1w_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_7).zc = function (a, b) {
    return this.d1w_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).y2 = function () {
    return this.d1w_1;
  };
  protoOf(sam$kotlin_Comparator$0_7).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function Disponibilites$reunions$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Disponibilites.reunions.<anonymous>' call
    var tmp = a.n1q_1;
    // Inline function 'app.zenote.core.priorisation.Disponibilites.reunions.<anonymous>' call
    var tmp$ret$1 = b.n1q_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Disponibilites$reunions$lambda_0($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.priorisation.Disponibilites.reunions.<anonymous>' call
        var tmp_0 = a.l1q_1;
        // Inline function 'app.zenote.core.priorisation.Disponibilites.reunions.<anonymous>' call
        var tmp$ret$1 = b.l1q_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Disponibilites() {
    this.a1p_1 = 60;
    this.b1p_1 = 15;
    this.c1p_1 = 180;
    this.d1p_1 = 45;
    this.e1p_1 = 30;
  }
  protoOf(Disponibilites).f1p = function (maintenant, evenements) {
    var reunions = this.k1q(evenements);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = reunions.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.priorisation.Disponibilites.a.<anonymous>' call
        if (element.n1q_1.b12(maintenant) >= 0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var prochaine = tmp$ret$1;
    var tmp2 = this.e1w(reunions);
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp2.q(tmp2.l());
      while (iterator.x3()) {
        var element_0 = iterator.y3();
        // Inline function 'app.zenote.core.priorisation.Disponibilites.a.<anonymous>' call
        var debut = element_0.hc();
        var fin = element_0.ic();
        var tmp;
        var tmp_0;
        if (fin.b12(maintenant) <= 0) {
          var tmp_1 = maintenant.a12(fin);
          // Inline function 'kotlin.time.Companion.minutes' call
          Companion_getInstance_3();
          var tmp$ret$2 = toDuration(45, DurationUnit_MINUTES_getInstance());
          tmp_0 = Duration__compareTo_impl_pchp0f(tmp_1, tmp$ret$2) < 0;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          var tmp_2 = fin.a12(debut);
          // Inline function 'kotlin.time.Companion.minutes' call
          Companion_getInstance_3();
          var tmp$ret$3 = toDuration(180, DurationUnit_MINUTES_getInstance());
          tmp = Duration__compareTo_impl_pchp0f(tmp_2, tmp$ret$3) >= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$5 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$5 = null;
    }
    var sequence = tmp$ret$5;
    var tmp_3;
    if (prochaine == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.priorisation.Disponibilites.a.<anonymous>' call
      tmp_3 = _Duration___get_inWholeMinutes__impl__dognoh(prochaine.n1q_1.a12(maintenant)).b1();
    }
    var tmp_4 = tmp_3;
    var tmp_5 = prochaine == null ? null : prochaine.m1q_1;
    var tmp_6;
    if (sequence == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.priorisation.Disponibilites.a.<anonymous>' call
      var debut_0 = sequence.hc();
      var fin_0 = sequence.ic();
      tmp_6 = _Duration___get_inWholeMinutes__impl__dognoh(fin_0.a12(debut_0)).b1();
    }
    return new Disponibilite(tmp_4, tmp_5, tmp_6);
  };
  protoOf(Disponibilites).f1w = function (element, disponibilite) {
    var tmp0_safe_receiver = element.u1n_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      // Inline function 'app.zenote.core.priorisation.Disponibilites.tient.<anonymous>' call
      if (element.v1n_1) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var duree = tmp;
    if (disponibilite.b1w() && !equals(duree, Duree_COURTE_getInstance()))
      return false;
    var tmp1_elvis_lhs = disponibilite.l1p_1;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return true;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var minutes = tmp_1;
    return !(duree == null) ? duree.t1v_1 <= minutes : minutes >= 30;
  };
  protoOf(Disponibilites).g1w = function (disponibilite) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var phrases = ArrayList_init_$Create$_0();
    var tmp0_safe_receiver = disponibilite.n1p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.priorisation.Disponibilites.raison.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var element = 'Vous sortez de ' + enHeures(Disponibilites_instance, tmp0_safe_receiver) + " de r\xE9unions encha\xEEn\xE9es : des \xE9l\xE9ments courts d'abord.";
      phrases.e(element);
    }
    if (disponibilite.a1w()) {
      var tmp1_elvis_lhs = disponibilite.l1p_1;
      var minutes = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var tmp2_safe_receiver = disponibilite.m1p_1;
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'app.zenote.core.priorisation.Disponibilites.raison.<anonymous>' call
        tmp = ' avant \xAB ' + tmp2_safe_receiver + ' \xBB';
      }
      var tmp3_elvis_lhs = tmp;
      var avant = tmp3_elvis_lhs == null ? ' avant la prochaine r\xE9union' : tmp3_elvis_lhs;
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = enMinutes(this, minutes) + avant + ' : seuls les \xE9l\xE9ments qui tiennent dans ce temps.';
      phrases.e(element_0);
    }
    return joinToString(phrases, ' ');
  };
  protoOf(Disponibilites).k1q = function (evenements) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = evenements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Disponibilites.reunions.<anonymous>' call
      if (element.h1w()) {
        destination.e(element);
      }
    }
    var tmp = destination;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = Disponibilites$reunions$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_7(tmp_0);
    var tmp_1 = Disponibilites$reunions$lambda_0(this_0);
    var tmp$ret$4 = new sam$kotlin_Comparator$0_7(tmp_1);
    return sortedWith(tmp, tmp$ret$4);
  };
  protoOf(Disponibilites).e1w = function (reunions) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var resultat = ArrayList_init_$Create$_0();
    var debut = null;
    var fin = null;
    var _iterator__ex2g4s = reunions.g();
    while (_iterator__ex2g4s.h()) {
      var reunion = _iterator__ex2g4s.i();
      var finCourante = fin;
      var tmp;
      if (debut == null || finCourante == null) {
        tmp = true;
      } else {
        var tmp_0 = reunion.n1q_1.a12(finCourante);
        // Inline function 'kotlin.time.Companion.minutes' call
        Companion_getInstance_3();
        var tmp$ret$1 = toDuration(15, DurationUnit_MINUTES_getInstance());
        tmp = Duration__compareTo_impl_pchp0f(tmp_0, tmp$ret$1) >= 0;
      }
      if (tmp) {
        if (!(debut == null) && !(finCourante == null)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = to(debut, finCourante);
          resultat.e(element);
        }
        debut = reunion.n1q_1;
        fin = reunion.o1q_1;
      } else {
        if (reunion.o1q_1.b12(finCourante) > 0) {
          fin = reunion.o1q_1;
        }
      }
    }
    var dernierDebut = debut;
    var derniereFin = fin;
    if (!(dernierDebut == null) && !(derniereFin == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = to(dernierDebut, derniereFin);
      resultat.e(element_0);
    }
    return resultat;
  };
  var Disponibilites_instance;
  function Disponibilites_getInstance() {
    return Disponibilites_instance;
  }
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
  protoOf(Urgence).k1w = function () {
    return this.equals(Urgence_DEPASSEE_getInstance()) || this.equals(Urgence_AUJOURD_HUI_getInstance());
  };
  protoOf(Urgence).l1w = function () {
    var tmp;
    switch (this.g2_1) {
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
    this.m1w_1 = aujourdhui;
  }
  protoOf(ContexteMaintenant).toString = function () {
    return 'ContexteMaintenant(aujourdhui=' + this.m1w_1.toString() + ')';
  };
  protoOf(ContexteMaintenant).hashCode = function () {
    return this.m1w_1.hashCode();
  };
  protoOf(ContexteMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenant ? other : THROW_CCE();
    if (!this.m1w_1.equals(tmp0_other_with_cast.m1w_1))
      return false;
    return true;
  };
  function Proposition(element, raison, poidsEffectif, urgence) {
    this.w1n_1 = element;
    this.x1n_1 = raison;
    this.y1n_1 = poidsEffectif;
    this.z1n_1 = urgence;
  }
  protoOf(Proposition).toString = function () {
    return 'Proposition(element=' + this.w1n_1.toString() + ', raison=' + this.x1n_1 + ', poidsEffectif=' + this.y1n_1.toString() + ', urgence=' + this.z1n_1.toString() + ')';
  };
  protoOf(Proposition).hashCode = function () {
    var result = this.w1n_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.x1n_1) | 0;
    result = imul(result, 31) + this.y1n_1.hashCode() | 0;
    result = imul(result, 31) + this.z1n_1.hashCode() | 0;
    return result;
  };
  protoOf(Proposition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Proposition))
      return false;
    var tmp0_other_with_cast = other instanceof Proposition ? other : THROW_CCE();
    if (!this.w1n_1.equals(tmp0_other_with_cast.w1n_1))
      return false;
    if (!(this.x1n_1 === tmp0_other_with_cast.x1n_1))
      return false;
    if (!this.y1n_1.equals(tmp0_other_with_cast.y1n_1))
      return false;
    if (!this.z1n_1.equals(tmp0_other_with_cast.z1n_1))
      return false;
    return true;
  };
  function ResultatMaintenant(propositions, ecartes, raison, creneauProtegeSuspendu) {
    this.h1p_1 = propositions;
    this.i1p_1 = ecartes;
    this.j1p_1 = raison;
    this.k1p_1 = creneauProtegeSuspendu;
  }
  protoOf(ResultatMaintenant).toString = function () {
    return 'ResultatMaintenant(propositions=' + toString_0(this.h1p_1) + ', ecartes=' + this.i1p_1 + ', raison=' + this.j1p_1 + ', creneauProtegeSuspendu=' + this.k1p_1 + ')';
  };
  protoOf(ResultatMaintenant).hashCode = function () {
    var result = hashCode(this.h1p_1);
    result = imul(result, 31) + this.i1p_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.j1p_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k1p_1) | 0;
    return result;
  };
  protoOf(ResultatMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResultatMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ResultatMaintenant ? other : THROW_CCE();
    if (!equals(this.h1p_1, tmp0_other_with_cast.h1p_1))
      return false;
    if (!(this.i1p_1 === tmp0_other_with_cast.i1p_1))
      return false;
    if (!(this.j1p_1 === tmp0_other_with_cast.j1p_1))
      return false;
    if (!(this.k1p_1 === tmp0_other_with_cast.k1p_1))
      return false;
    return true;
  };
  function raison($this, element, urgence) {
    var tmp0_elvis_lhs = element.t1n_1;
    var consequence = tmp0_elvis_lhs == null ? 'poids non d\xE9termin\xE9, \xE0 confirmer en Revue' : tmp0_elvis_lhs;
    return consequence + ' \u2014 ' + urgence.l1w();
  }
  function dUnCranPlusHaut(_this__u8e3s4, $this) {
    var tmp;
    switch (_this__u8e3s4.g2_1) {
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
  function sam$kotlin_Comparator$0_8(function_0) {
    this.n1w_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_8).zc = function (a, b) {
    return this.n1w_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_8).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_8).y2 = function () {
    return this.n1w_1;
  };
  protoOf(sam$kotlin_Comparator$0_8).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
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
    return hashCode(this.y2());
  };
  function Priorisation$classer$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp = b.y1n_1.g2_1;
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp$ret$1 = a.y1n_1.g2_1;
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
        var tmp_0 = a.z1n_1.g2_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.z1n_1.g2_1;
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
        var tmp_0 = a.w1n_1.g1n_1.p1m_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.w1n_1.g1n_1.p1m_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation() {
    Priorisation_instance = this;
    this.w1o_1 = 3;
    this.x1o_1 = Poids_MOYEN_getInstance();
  }
  protoOf(Priorisation).o1w = function (echeance, aujourdhui) {
    if (echeance == null)
      return Urgence_AUCUNE_getInstance();
    var tmp0_subject = daysUntil(aujourdhui, echeance);
    return (-2147483648 <= tmp0_subject ? tmp0_subject <= -1 : false) ? Urgence_DEPASSEE_getInstance() : tmp0_subject === 0 ? Urgence_AUJOURD_HUI_getInstance() : tmp0_subject === 1 ? Urgence_DEMAIN_getInstance() : (2 <= tmp0_subject ? tmp0_subject <= 7 : false) ? Urgence_CETTE_SEMAINE_getInstance() : Urgence_PLUS_TARD_getInstance();
  };
  protoOf(Priorisation).p1w = function (elements, contexte) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      if (element.q1n_1.equals(Verdict_ACCEPTE_getInstance()) && element.i1n_1.q1v()) {
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
      var urgence = Priorisation_getInstance().o1w(item.l1n_1, contexte.m1w_1);
      var tmp0_elvis_lhs = item.m1n_1;
      var poids = tmp0_elvis_lhs == null ? Priorisation_getInstance().x1o_1 : tmp0_elvis_lhs;
      var effectif = urgence.k1w() ? dUnCranPlusHaut(poids, Priorisation_getInstance()) : poids;
      var tmp$ret$3 = new Proposition(item, raison(Priorisation_getInstance(), item, urgence), effectif, urgence);
      destination_0.e(tmp$ret$3);
    }
    var tmp = destination_0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = Priorisation$classer$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_8(tmp_0);
    var tmp_1 = Priorisation$classer$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_8(tmp_1);
    var tmp_2 = Priorisation$classer$lambda_1(this_1);
    var tmp$ret$8 = new sam$kotlin_Comparator$0_8(tmp_2);
    return sortedWith(tmp, tmp$ret$8);
  };
  protoOf(Priorisation).y1o = function (elements, contexte) {
    return take(this.p1w(elements, contexte), 3);
  };
  protoOf(Priorisation).g1p = function (elements, contexte, disponibilite) {
    var classement = this.p1w(elements, contexte);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = classement.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.maintenantSelon.<anonymous>' call
      if (Disponibilites_instance.f1w(element.w1n_1, disponibilite)) {
        destination.e(element);
      }
    }
    var retenus = destination;
    return new ResultatMaintenant(take(retenus, 3), classement.l() - retenus.l() | 0, Disponibilites_instance.g1w(disponibilite), !disponibilite.c1w());
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
  function Briefing(evenement, ouverts, decide) {
    this.t1u_1 = evenement;
    this.u1u_1 = ouverts;
    this.v1u_1 = decide;
  }
  protoOf(Briefing).toString = function () {
    return 'Briefing(evenement=' + this.t1u_1.toString() + ', ouverts=' + toString_0(this.u1u_1) + ', decide=' + toString_0(this.v1u_1) + ')';
  };
  protoOf(Briefing).hashCode = function () {
    var result = this.t1u_1.hashCode();
    result = imul(result, 31) + hashCode(this.u1u_1) | 0;
    result = imul(result, 31) + hashCode(this.v1u_1) | 0;
    return result;
  };
  protoOf(Briefing).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Briefing))
      return false;
    var tmp0_other_with_cast = other instanceof Briefing ? other : THROW_CCE();
    if (!this.t1u_1.equals(tmp0_other_with_cast.t1u_1))
      return false;
    if (!equals(this.u1u_1, tmp0_other_with_cast.u1u_1))
      return false;
    if (!equals(this.v1u_1, tmp0_other_with_cast.v1u_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_9(function_0) {
    this.q1w_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_9).zc = function (a, b) {
    return this.q1w_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_9).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_9).y2 = function () {
    return this.q1w_1;
  };
  protoOf(sam$kotlin_Comparator$0_9).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_9).hashCode = function () {
    return hashCode(this.y2());
  };
  function Briefings$avant$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
    var tmp = a.q1m_1.p1m_1;
    // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
    var tmp$ret$1 = b.q1m_1.p1m_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Briefings$avant$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
    var tmp = a.q1m_1.p1m_1;
    // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
    var tmp$ret$1 = b.q1m_1.p1m_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Briefings() {
  }
  protoOf(Briefings).r1w = function (evenement, memoire, elements) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = sorted(evenement.q1q_1);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
      var tmp0_safe_receiver = Briefings_instance.s1w(memoire, element);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.e(tmp0_safe_receiver);
      }
    }
    // Inline function 'kotlin.collections.distinctBy' call
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var e = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
      var key = e.v1l_1;
      if (set.e(key)) {
        list.e(e);
      }
    }
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = list.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
      var tmp0_safe_receiver_0 = Fiches_instance.v1t(memoire, element_0.v1l_1, elements);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination_0.e(tmp0_safe_receiver_0);
      }
    }
    var fiches = destination_0;
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_2 = fiches.g();
    while (_iterator__ex2g4s_2.h()) {
      var element_1 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
      var list_0 = element_1.x1t_1;
      addAll(destination_1, list_0);
    }
    // Inline function 'kotlin.collections.distinctBy' call
    var set_0 = HashSet_init_$Create$();
    var list_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_3 = destination_1.g();
    while (_iterator__ex2g4s_3.h()) {
      var e_0 = _iterator__ex2g4s_3.i();
      // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
      var key_0 = e_0.q1m_1;
      if (set_0.e(key_0)) {
        list_1.e(e_0);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Briefings$avant$lambda;
    var tmp$ret$15 = new sam$kotlin_Comparator$0_9(tmp);
    var ouverts = sortedWith(list_1, tmp$ret$15);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_2 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_4 = fiches.g();
    while (_iterator__ex2g4s_4.h()) {
      var element_2 = _iterator__ex2g4s_4.i();
      // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
      var list_2 = element_2.y1t_1;
      addAll(destination_2, list_2);
    }
    // Inline function 'kotlin.collections.distinctBy' call
    var set_1 = HashSet_init_$Create$();
    var list_3 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_5 = destination_2.g();
    while (_iterator__ex2g4s_5.h()) {
      var e_1 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.rappels.Briefings.avant.<anonymous>' call
      var key_1 = e_1.q1m_1;
      if (set_1.e(key_1)) {
        list_3.e(e_1);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = Briefings$avant$lambda_0;
    var tmp$ret$22 = new sam$kotlin_Comparator$0_9(tmp_0);
    var decide = sortedWith(list_3, tmp$ret$22);
    if (ouverts.j() && decide.j())
      return null;
    return new Briefing(evenement, ouverts, decide);
  };
  protoOf(Briefings).s1w = function (memoire, participant) {
    var tmp;
    if (contains(participant, _Char___init__impl__6a9atx(64))) {
      tmp = replace(replace(replace(substringBefore(participant, _Char___init__impl__6a9atx(64)), _Char___init__impl__6a9atx(46), _Char___init__impl__6a9atx(32)), _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(32)), _Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(32));
    } else {
      tmp = participant;
    }
    var lisible = tmp;
    var tmp0_safe_receiver = memoire.h1v(TypeEntite_PERSONNE_getInstance(), lisible);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = firstOrNull(Texte_getInstance().t1w(lisible));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var prenom = tmp_0;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = memoire.t1t();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.rappels.Briefings.participant.<anonymous>' call
      if (element.w1l_1.equals(TypeEntite_PERSONNE_getInstance()) && firstOrNull(Texte_getInstance().t1w(element.x1l_1)) === prenom) {
        destination.e(element);
      }
    }
    return singleOrNull(destination);
  };
  var Briefings_instance;
  function Briefings_getInstance() {
    return Briefings_instance;
  }
  function Transition(point) {
    this.u1w_1 = point;
  }
  protoOf(Transition).toString = function () {
    return 'Transition(point=' + this.u1w_1.toString() + ')';
  };
  protoOf(Transition).hashCode = function () {
    return this.u1w_1.hashCode();
  };
  protoOf(Transition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Transition))
      return false;
    var tmp0_other_with_cast = other instanceof Transition ? other : THROW_CCE();
    if (!this.u1w_1.equals(tmp0_other_with_cast.u1w_1))
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
  function EvenementConnu(id, titre, debut, fin, lieu, participants, recurrent, journeeEntiere) {
    lieu = lieu === VOID ? null : lieu;
    participants = participants === VOID ? emptyList() : participants;
    recurrent = recurrent === VOID ? false : recurrent;
    journeeEntiere = journeeEntiere === VOID ? false : journeeEntiere;
    this.l1q_1 = id;
    this.m1q_1 = titre;
    this.n1q_1 = debut;
    this.o1q_1 = fin;
    this.p1q_1 = lieu;
    this.q1q_1 = participants;
    this.r1q_1 = recurrent;
    this.s1q_1 = journeeEntiere;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.l1q_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.EvenementConnu.<anonymous>' call
      var message = "Un \xE9v\xE9nement d'agenda sans identifiant n'est pas rattachable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.o1q_1.b12(this.n1q_1) > 0)) {
      // Inline function 'app.zenote.core.rappels.EvenementConnu.<anonymous>' call
      var message_0 = "Un \xE9v\xE9nement d'agenda finit apr\xE8s avoir commenc\xE9.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(EvenementConnu).h1w = function () {
    return !this.s1q_1;
  };
  protoOf(EvenementConnu).toString = function () {
    return 'EvenementConnu(id=' + this.l1q_1 + ', titre=' + this.m1q_1 + ', debut=' + this.n1q_1.toString() + ', fin=' + this.o1q_1.toString() + ', lieu=' + this.p1q_1 + ', participants=' + toString_0(this.q1q_1) + ', recurrent=' + this.r1q_1 + ', journeeEntiere=' + this.s1q_1 + ')';
  };
  protoOf(EvenementConnu).hashCode = function () {
    var result = getStringHashCode(this.l1q_1);
    result = imul(result, 31) + getStringHashCode(this.m1q_1) | 0;
    result = imul(result, 31) + this.n1q_1.hashCode() | 0;
    result = imul(result, 31) + this.o1q_1.hashCode() | 0;
    result = imul(result, 31) + (this.p1q_1 == null ? 0 : getStringHashCode(this.p1q_1)) | 0;
    result = imul(result, 31) + hashCode(this.q1q_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r1q_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s1q_1) | 0;
    return result;
  };
  protoOf(EvenementConnu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EvenementConnu))
      return false;
    var tmp0_other_with_cast = other instanceof EvenementConnu ? other : THROW_CCE();
    if (!(this.l1q_1 === tmp0_other_with_cast.l1q_1))
      return false;
    if (!(this.m1q_1 === tmp0_other_with_cast.m1q_1))
      return false;
    if (!this.n1q_1.equals(tmp0_other_with_cast.n1q_1))
      return false;
    if (!this.o1q_1.equals(tmp0_other_with_cast.o1q_1))
      return false;
    if (!(this.p1q_1 == tmp0_other_with_cast.p1q_1))
      return false;
    if (!equals(this.q1q_1, tmp0_other_with_cast.q1q_1))
      return false;
    if (!(this.r1q_1 === tmp0_other_with_cast.r1q_1))
      return false;
    if (!(this.s1q_1 === tmp0_other_with_cast.s1q_1))
      return false;
    return true;
  };
  function PointDeRupture_FIN_DE_REUNION_getInstance() {
    PointDeRupture_initEntries();
    return PointDeRupture_FIN_DE_REUNION_instance;
  }
  function PointDeRupture_REPRISE_APPAREIL_getInstance() {
    PointDeRupture_initEntries();
    return PointDeRupture_REPRISE_APPAREIL_instance;
  }
  function Observable(quand, enRetardApres) {
    enRetardApres = enRetardApres === VOID ? quand : enRetardApres;
    this.g1r_1 = quand;
    this.h1r_1 = enRetardApres;
  }
  protoOf(Observable).toString = function () {
    return 'Observable(quand=' + this.g1r_1.toString() + ', enRetardApres=' + this.h1r_1.toString() + ')';
  };
  protoOf(Observable).hashCode = function () {
    var result = this.g1r_1.hashCode();
    result = imul(result, 31) + this.h1r_1.hashCode() | 0;
    return result;
  };
  protoOf(Observable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Observable))
      return false;
    var tmp0_other_with_cast = other instanceof Observable ? other : THROW_CCE();
    if (!this.g1r_1.equals(tmp0_other_with_cast.g1r_1))
      return false;
    if (!this.h1r_1.equals(tmp0_other_with_cast.h1r_1))
      return false;
    return true;
  };
  function Substituee(explication) {
    this.i1r_1 = explication;
  }
  protoOf(Substituee).toString = function () {
    return 'Substituee(explication=' + this.i1r_1 + ')';
  };
  protoOf(Substituee).hashCode = function () {
    return getStringHashCode(this.i1r_1);
  };
  protoOf(Substituee).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Substituee))
      return false;
    var tmp0_other_with_cast = other instanceof Substituee ? other : THROW_CCE();
    if (!(this.i1r_1 === tmp0_other_with_cast.i1r_1))
      return false;
    return true;
  };
  function Echeancier() {
    Echeancier_instance = this;
    this.a1r_1 = LocalTime_init_$Create$(18, 0);
    this.b1r_1 = LocalTime_init_$Create$(7, 0);
    this.c1r_1 = "ZeNote ne sait pas encore reconna\xEEtre ce signal : aucun agenda n'est import\xE9, et la position n'est pas collect\xE9e.";
    this.d1r_1 = Regex_init_$Create$('(\\d{4})-(\\d{2})-(\\d{2})');
  }
  protoOf(Echeancier).e1r = function (declencheur, poseLe, evenements) {
    var plie = Texte_getInstance().l1v(declencheur);
    if (contains_0(plie, 'ce soir')) {
      return new Observable(LocalDateTime_init_$Create$(poseLe.n12(), this.a1r_1));
    }
    if (contains_0(plie, 'demain matin')) {
      return new Observable(LocalDateTime_init_$Create$(plus_0(poseLe.n12(), 1, Companion_getInstance_4().in_1), this.b1r_1));
    }
    var tmp0_safe_receiver = this.d1r_1.ra(plie);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var _destruct__k2r9zo = tmp0_safe_receiver.lb();
      // Inline function 'kotlin.text.Destructured.component1' call
      var annee = _destruct__k2r9zo.yd_1.kb().k(1);
      // Inline function 'kotlin.text.Destructured.component2' call
      var mois = _destruct__k2r9zo.yd_1.kb().k(2);
      // Inline function 'kotlin.text.Destructured.component3' call
      var jour = _destruct__k2r9zo.yd_1.kb().k(3);
      return new Observable(LocalDateTime_init_$Create$_0(toInt(annee), toInt(mois), toInt(jour), 0, 0));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!evenements.j()) {
      var tmp1_elvis_lhs = SignauxAgenda_getInstance().c1x(declencheur, poseLe, evenements);
      return tmp1_elvis_lhs == null ? new Substituee("ZeNote ne sait pas reconna\xEEtre ce signal dans l'agenda, et la position n'est pas collect\xE9e.") : tmp1_elvis_lhs;
    }
    return new Substituee("ZeNote ne sait pas encore reconna\xEEtre ce signal : aucun agenda n'est import\xE9, et la position n'est pas collect\xE9e.");
  };
  protoOf(Echeancier).f1r = function (echeance, maintenant) {
    var tmp;
    if (echeance instanceof Substituee) {
      tmp = true;
    } else {
      if (echeance instanceof Observable) {
        tmp = echeance.g1r_1.o12(maintenant) <= 0;
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
    this.d1x_1 = rappel;
    this.e1x_1 = motif;
  }
  protoOf(Immediate).toString = function () {
    return 'Immediate(rappel=' + this.d1x_1.toString() + ', motif=' + this.e1x_1 + ')';
  };
  protoOf(Immediate).hashCode = function () {
    var result = this.d1x_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.e1x_1) | 0;
    return result;
  };
  protoOf(Immediate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Immediate))
      return false;
    var tmp0_other_with_cast = other instanceof Immediate ? other : THROW_CCE();
    if (!this.d1x_1.equals(tmp0_other_with_cast.d1x_1))
      return false;
    if (!(this.e1x_1 === tmp0_other_with_cast.e1x_1))
      return false;
    return true;
  };
  function MiseEnFile(rappel, motif) {
    this.f1x_1 = rappel;
    this.g1x_1 = motif;
  }
  protoOf(MiseEnFile).toString = function () {
    return 'MiseEnFile(rappel=' + this.f1x_1.toString() + ', motif=' + this.g1x_1 + ')';
  };
  protoOf(MiseEnFile).hashCode = function () {
    var result = this.f1x_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.g1x_1) | 0;
    return result;
  };
  protoOf(MiseEnFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MiseEnFile))
      return false;
    var tmp0_other_with_cast = other instanceof MiseEnFile ? other : THROW_CCE();
    if (!this.f1x_1.equals(tmp0_other_with_cast.f1x_1))
      return false;
    if (!(this.g1x_1 === tmp0_other_with_cast.g1x_1))
      return false;
    return true;
  };
  function Escaladee(escalade) {
    this.h1x_1 = escalade;
  }
  protoOf(Escaladee).toString = function () {
    return 'Escaladee(escalade=' + this.h1x_1.toString() + ')';
  };
  protoOf(Escaladee).hashCode = function () {
    return this.h1x_1.hashCode();
  };
  protoOf(Escaladee).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Escaladee))
      return false;
    var tmp0_other_with_cast = other instanceof Escaladee ? other : THROW_CCE();
    if (!this.h1x_1.equals(tmp0_other_with_cast.h1x_1))
      return false;
    return true;
  };
  function Notification(point, emiseA, rappels, enRetard) {
    this.m1r_1 = point;
    this.n1r_1 = emiseA;
    this.o1r_1 = rappels;
    this.p1r_1 = enRetard;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.o1r_1.j()) {
      // Inline function 'app.zenote.core.rappels.Notification.<anonymous>' call
      var message = "Une notification sans rappel n'a rien \xE0 dire.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Notification).q1r = function () {
    return this.o1r_1.l() === 1 ? single(this.o1r_1).t1r_1 : '' + this.o1r_1.l() + ' choses \xE0 voir maintenant';
  };
  protoOf(Notification).toString = function () {
    return 'Notification(point=' + this.m1r_1.toString() + ', emiseA=' + this.n1r_1.toString() + ', rappels=' + toString_0(this.o1r_1) + ', enRetard=' + toString_0(this.p1r_1) + ')';
  };
  protoOf(Notification).hashCode = function () {
    var result = this.m1r_1.hashCode();
    result = imul(result, 31) + this.n1r_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.o1r_1) | 0;
    result = imul(result, 31) + hashCode(this.p1r_1) | 0;
    return result;
  };
  protoOf(Notification).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Notification))
      return false;
    var tmp0_other_with_cast = other instanceof Notification ? other : THROW_CCE();
    if (!this.m1r_1.equals(tmp0_other_with_cast.m1r_1))
      return false;
    if (!this.n1r_1.equals(tmp0_other_with_cast.n1r_1))
      return false;
    if (!equals(this.o1r_1, tmp0_other_with_cast.o1r_1))
      return false;
    if (!equals(this.p1r_1, tmp0_other_with_cast.p1r_1))
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
    this.x1r_1 = rappel;
    this.y1r_1 = motif;
    this.z1r_1 = options;
  }
  protoOf(Escalade).toString = function () {
    return 'Escalade(rappel=' + this.x1r_1.toString() + ', motif=' + this.y1r_1 + ', options=' + toString_0(this.z1r_1) + ')';
  };
  protoOf(Escalade).hashCode = function () {
    var result = this.x1r_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.y1r_1) | 0;
    result = imul(result, 31) + hashCode(this.z1r_1) | 0;
    return result;
  };
  protoOf(Escalade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Escalade))
      return false;
    var tmp0_other_with_cast = other instanceof Escalade ? other : THROW_CCE();
    if (!this.x1r_1.equals(tmp0_other_with_cast.x1r_1))
      return false;
    if (!(this.y1r_1 === tmp0_other_with_cast.y1r_1))
      return false;
    if (!equals(this.z1r_1, tmp0_other_with_cast.z1r_1))
      return false;
    return true;
  };
  function Companion_32() {
    this.i1x_1 = 3;
  }
  var Companion_instance_33;
  function Companion_getInstance_38() {
    return Companion_instance_33;
  }
  function sam$kotlin_Comparator$0_10(function_0) {
    this.j1x_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_10).zc = function (a, b) {
    return this.j1x_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_10).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_10).y2 = function () {
    return this.j1x_1;
  };
  protoOf(sam$kotlin_Comparator$0_10).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_10).hashCode = function () {
    return hashCode(this.y2());
  };
  function sam$kotlin_Comparator$0_11(function_0) {
    this.k1x_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_11).zc = function (a, b) {
    return this.k1x_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_11).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_11).y2 = function () {
    return this.k1x_1;
  };
  protoOf(sam$kotlin_Comparator$0_11).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_11).hashCode = function () {
    return hashCode(this.y2());
  };
  function FileOpportunite$vider$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp = a.r1r_1.l1x_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp$ret$1 = b.r1r_1.l1x_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite$vider$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp = a.l1x_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp$ret$1 = b.l1x_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite$escalades$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.escalades.<anonymous>' call
    var tmp = a.x1r_1.r1r_1.l1x_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.escalades.<anonymous>' call
    var tmp$ret$1 = b.x1r_1.r1r_1.l1x_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite(silences) {
    silences = silences === VOID ? emptyList() : silences;
    this.v1q_1 = silences;
    this.w1q_1 = LinkedHashMap_init_$Create$_0();
    this.x1q_1 = LinkedHashMap_init_$Create$_0();
    this.y1q_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(FileOpportunite).j1r = function (rappel, a) {
    var tmp0_safe_receiver = this.y1q_1.y1(rappel.r1r_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return new Escaladee(tmp0_safe_receiver);
    }
    if (rappel.v1r_1) {
      return new Immediate(rappel, 'rappel critique : pr\xE9sent\xE9 sans attendre un point de rupture');
    }
    var tmp2 = this.w1q_1;
    var tmp3 = rappel.r1r_1;
    // Inline function 'kotlin.collections.set' call
    var value = to(rappel, a);
    tmp2.b2(tmp3, value);
    return new MiseEnFile(rappel, 'en attente du prochain point de rupture');
  };
  protoOf(FileOpportunite).l1r = function (point, a) {
    var tmp0 = this.v1q_1;
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
        if (element.o1x(a)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      return null;
    if (this.w1q_1.j())
      return null;
    var livres = toList(this.w1q_1.e2());
    this.w1q_1.d2();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(livres, 10));
    var _iterator__ex2g4s_0 = livres.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
      var tmp$ret$2 = item.fc_1;
      destination.e(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = FileOpportunite$vider$lambda;
    var tmp$ret$5 = new sam$kotlin_Comparator$0_10(tmp_0);
    var tmp_1 = sortedWith(destination, tmp$ret$5);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = livres.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
      if (element_0.gc_1.b12(a) < 0) {
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
      var tmp$ret$10 = item_0.fc_1.r1r_1;
      destination_1.e(tmp$ret$10);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_2 = FileOpportunite$vider$lambda_0;
    var tmp$ret$13 = new sam$kotlin_Comparator$0_10(tmp_2);
    var tmp$ret$14 = sortedWith(destination_1, tmp$ret$13);
    return new Notification(point, a, tmp_1, tmp$ret$14);
  };
  protoOf(FileOpportunite).z1q = function (rappel) {
    var tmp0_safe_receiver = this.y1q_1.y1(rappel.r1r_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = this.x1q_1.y1(rappel.r1r_1);
    var compte = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) + 1 | 0;
    var tmp2 = this.x1q_1;
    // Inline function 'kotlin.collections.set' call
    var key = rappel.r1r_1;
    tmp2.b2(key, compte);
    if (compte < 3)
      return null;
    this.w1q_1.c2(rappel.r1r_1);
    var escalade = new Escalade(rappel, 'ignor\xE9 ' + compte + " fois : ce rappel ne se repr\xE9sente plus \xE0 l'identique");
    var tmp5 = this.y1q_1;
    // Inline function 'kotlin.collections.set' call
    var key_0 = rappel.r1r_1;
    tmp5.b2(key_0, escalade);
    return escalade;
  };
  protoOf(FileOpportunite).k1r = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.w1q_1.e2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.enAttente.<anonymous>' call
      var tmp$ret$0 = item.fc_1;
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(FileOpportunite).w1r = function () {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = this.y1q_1.e2();
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = FileOpportunite$escalades$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_11(tmp);
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
  var TypeMoment_AVANT_instance;
  var TypeMoment_APRES_instance;
  var TypeMoment_entriesInitialized;
  function TypeMoment_initEntries() {
    if (TypeMoment_entriesInitialized)
      return Unit_instance;
    TypeMoment_entriesInitialized = true;
    TypeMoment_AVANT_instance = new TypeMoment('AVANT', 0);
    TypeMoment_APRES_instance = new TypeMoment('APRES', 1);
  }
  function TypeMoment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Rattache(captureId, evenementId, depose, texte, creeLe) {
    this.w1u_1 = captureId;
    this.x1u_1 = evenementId;
    this.y1u_1 = depose;
    this.z1u_1 = texte;
    this.a1v_1 = creeLe;
  }
  protoOf(Rattache).toString = function () {
    return 'Rattache(captureId=' + this.w1u_1 + ', evenementId=' + this.x1u_1 + ', depose=' + this.y1u_1 + ', texte=' + this.z1u_1 + ', creeLe=' + this.a1v_1.toString() + ')';
  };
  protoOf(Rattache).hashCode = function () {
    var result = getStringHashCode(this.w1u_1);
    result = imul(result, 31) + getStringHashCode(this.x1u_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y1u_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z1u_1) | 0;
    result = imul(result, 31) + this.a1v_1.hashCode() | 0;
    return result;
  };
  protoOf(Rattache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rattache))
      return false;
    var tmp0_other_with_cast = other instanceof Rattache ? other : THROW_CCE();
    if (!(this.w1u_1 === tmp0_other_with_cast.w1u_1))
      return false;
    if (!(this.x1u_1 === tmp0_other_with_cast.x1u_1))
      return false;
    if (!(this.y1u_1 === tmp0_other_with_cast.y1u_1))
      return false;
    if (!(this.z1u_1 === tmp0_other_with_cast.z1u_1))
      return false;
    if (!this.a1v_1.equals(tmp0_other_with_cast.a1v_1))
      return false;
    return true;
  };
  function MomentReunion(type, evenement, precedentes, minutes, proposerDepose, briefing, depose, proposerVidage) {
    precedentes = precedentes === VOID ? emptyList() : precedentes;
    proposerDepose = proposerDepose === VOID ? false : proposerDepose;
    briefing = briefing === VOID ? null : briefing;
    depose = depose === VOID ? null : depose;
    proposerVidage = proposerVidage === VOID ? false : proposerVidage;
    this.l1u_1 = type;
    this.m1u_1 = evenement;
    this.n1u_1 = precedentes;
    this.o1u_1 = minutes;
    this.p1u_1 = proposerDepose;
    this.q1u_1 = briefing;
    this.r1u_1 = depose;
    this.s1u_1 = proposerVidage;
  }
  protoOf(MomentReunion).toString = function () {
    return 'MomentReunion(type=' + this.l1u_1.toString() + ', evenement=' + this.m1u_1.toString() + ', precedentes=' + toString_0(this.n1u_1) + ', minutes=' + this.o1u_1 + ', proposerDepose=' + this.p1u_1 + ', briefing=' + toString(this.q1u_1) + ', depose=' + toString(this.r1u_1) + ', proposerVidage=' + this.s1u_1 + ')';
  };
  protoOf(MomentReunion).hashCode = function () {
    var result = this.l1u_1.hashCode();
    result = imul(result, 31) + this.m1u_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.n1u_1) | 0;
    result = imul(result, 31) + this.o1u_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.p1u_1) | 0;
    result = imul(result, 31) + (this.q1u_1 == null ? 0 : this.q1u_1.hashCode()) | 0;
    result = imul(result, 31) + (this.r1u_1 == null ? 0 : this.r1u_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s1u_1) | 0;
    return result;
  };
  protoOf(MomentReunion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MomentReunion))
      return false;
    var tmp0_other_with_cast = other instanceof MomentReunion ? other : THROW_CCE();
    if (!this.l1u_1.equals(tmp0_other_with_cast.l1u_1))
      return false;
    if (!this.m1u_1.equals(tmp0_other_with_cast.m1u_1))
      return false;
    if (!equals(this.n1u_1, tmp0_other_with_cast.n1u_1))
      return false;
    if (!(this.o1u_1 === tmp0_other_with_cast.o1u_1))
      return false;
    if (!(this.p1u_1 === tmp0_other_with_cast.p1u_1))
      return false;
    if (!equals(this.q1u_1, tmp0_other_with_cast.q1u_1))
      return false;
    if (!equals(this.r1u_1, tmp0_other_with_cast.r1u_1))
      return false;
    if (!(this.s1u_1 === tmp0_other_with_cast.s1u_1))
      return false;
    return true;
  };
  function avant($this, maintenant, reunions, memoire, elements, rattaches) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = reunions.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.rappels.MomentsReunion.avant.<anonymous>' call
        var tmp;
        if (element.n1q_1.b12(maintenant) > 0) {
          var tmp_0 = element.n1q_1.a12(maintenant);
          // Inline function 'kotlin.time.Companion.minutes' call
          Companion_getInstance_3();
          var tmp$ret$0 = toDuration(10, DurationUnit_MINUTES_getInstance());
          tmp = Duration__compareTo_impl_pchp0f(tmp_0, tmp$ret$0) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$2;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var prochaine = tmp_1;
    var minutes = _Duration___get_inWholeMinutes__impl__dognoh(prochaine.n1q_1.a12(maintenant)).b1();
    var tmp$ret$3;
    $l$block_1: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(rattaches, Collection)) {
        tmp_2 = rattaches.j();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$3 = false;
        break $l$block_1;
      }
      var _iterator__ex2g4s_0 = rattaches.g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'app.zenote.core.rappels.MomentsReunion.avant.<anonymous>' call
        if (element_0.y1u_1 && element_0.x1u_1 === prochaine.l1q_1) {
          tmp$ret$3 = true;
          break $l$block_1;
        }
      }
      tmp$ret$3 = false;
    }
    var dejaDeposee = tmp$ret$3;
    var briefing = Briefings_instance.r1w(prochaine, memoire, elements);
    var proposerDepose = minutes <= 2 && !dejaDeposee;
    if (briefing == null && !proposerDepose)
      return null;
    return new MomentReunion(TypeMoment_AVANT_getInstance(), prochaine, VOID, minutes, proposerDepose, briefing);
  }
  function apres($this, maintenant, reunions, rattaches) {
    var tmp0 = $this.p1x(reunions);
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.q(tmp0.l());
      while (iterator.x3()) {
        var element = iterator.y3();
        // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
        // Inline function 'kotlin.collections.maxOf' call
        var iterator_0 = element.g();
        if (!iterator_0.h())
          throw NoSuchElementException_init_$Create$();
        // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>.<anonymous>' call
        var maxValue = iterator_0.i().o1q_1;
        while (iterator_0.h()) {
          // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>.<anonymous>' call
          var v = iterator_0.i().o1q_1;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        var fin = maxValue;
        var tmp;
        if (fin.b12(maintenant) <= 0) {
          var tmp_0 = maintenant.a12(fin);
          // Inline function 'kotlin.time.Companion.minutes' call
          Companion_getInstance_3();
          var tmp$ret$3 = toDuration(60, DurationUnit_MINUTES_getInstance());
          tmp = Duration__compareTo_impl_pchp0f(tmp_0, tmp$ret$3) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$5 = element;
          break $l$block;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$5;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var enchainement = tmp_1;
    // Inline function 'kotlin.collections.maxOf' call
    var iterator_1 = enchainement.g();
    if (!iterator_1.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
    var maxValue_0 = iterator_1.i().o1q_1;
    while (iterator_1.h()) {
      // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
      var v_0 = iterator_1.i().o1q_1;
      if (compareTo(maxValue_0, v_0) < 0) {
        maxValue_0 = v_0;
      }
    }
    var fin_0 = maxValue_0;
    var tmp$ret$10;
    $l$block_0: {
      // Inline function 'kotlin.collections.last' call
      var iterator_2 = enchainement.q(enchainement.l());
      while (iterator_2.x3()) {
        var element_0 = iterator_2.y3();
        // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
        if (element_0.o1q_1.equals(fin_0)) {
          tmp$ret$10 = element_0;
          break $l$block_0;
        }
      }
      throw NoSuchElementException_init_$Create$_0('List contains no element matching the predicate.');
    }
    var derniere = tmp$ret$10;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(enchainement, 10));
    var _iterator__ex2g4s = enchainement.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
      var tmp$ret$11 = item.l1q_1;
      destination.e(tmp$ret$11);
    }
    var ids = toSet(destination);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = rattaches.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_1 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
      if (element_1.y1u_1 && ids.r1(element_1.x1u_1)) {
        destination_0.e(element_1);
      }
    }
    var tmp$ret$17;
    $l$block_2: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator_3 = destination_0.g();
      if (!iterator_3.h()) {
        tmp$ret$17 = null;
        break $l$block_2;
      }
      var minElem = iterator_3.i();
      if (!iterator_3.h()) {
        tmp$ret$17 = minElem;
        break $l$block_2;
      }
      // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
      var minValue = minElem.a1v_1;
      do {
        var e = iterator_3.i();
        // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
        var v_1 = e.a1v_1;
        if (compareTo(minValue, v_1) > 0) {
          minElem = e;
          minValue = v_1;
        }
      }
       while (iterator_3.h());
      tmp$ret$17 = minElem;
    }
    var depose = tmp$ret$17;
    var tmp$ret$20;
    $l$block_4: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(rattaches, Collection)) {
        tmp_2 = rattaches.j();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$20 = false;
        break $l$block_4;
      }
      var _iterator__ex2g4s_1 = rattaches.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_2 = _iterator__ex2g4s_1.i();
        // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
        if (!element_2.y1u_1 && ids.r1(element_2.x1u_1) && element_2.a1v_1.b12(fin_0) >= 0) {
          tmp$ret$20 = true;
          break $l$block_4;
        }
      }
      tmp$ret$20 = false;
    }
    var vidageFait = tmp$ret$20;
    var tmp_3 = TypeMoment_APRES_getInstance();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_2 = enchainement.g();
    while (_iterator__ex2g4s_2.h()) {
      var element_3 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.rappels.MomentsReunion.apres.<anonymous>' call
      if (!(element_3 === derniere)) {
        destination_1.e(element_3);
      }
    }
    return new MomentReunion(tmp_3, derniere, destination_1, _Duration___get_inWholeMinutes__impl__dognoh(maintenant.a12(fin_0)).b1(), VOID, VOID, depose, !vidageFait);
  }
  function MomentsReunion$a$lambda(it) {
    return it.n1q_1;
  }
  function MomentsReunion$a$lambda_0(it) {
    return it.l1q_1;
  }
  function MomentsReunion() {
    this.g1u_1 = 10;
    this.h1u_1 = 2;
    this.i1u_1 = 60;
    this.j1u_1 = 5;
  }
  protoOf(MomentsReunion).k1u = function (maintenant, evenements, memoire, elements, rattaches) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = evenements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.rappels.MomentsReunion.a.<anonymous>' call
      if (element.h1w()) {
        destination.e(element);
      }
    }
    var tmp = destination;
    var tmp_0 = MomentsReunion$a$lambda;
    var reunions = sortedWith(tmp, compareBy([tmp_0, MomentsReunion$a$lambda_0]));
    return listOfNotNull([apres(this, maintenant, reunions, rattaches), avant(this, maintenant, reunions, memoire, elements, rattaches)]);
  };
  protoOf(MomentsReunion).p1x = function (reunions) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var resultat = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = reunions.g();
    while (_iterator__ex2g4s.h()) {
      var reunion = _iterator__ex2g4s.i();
      var courante = lastOrNull(resultat);
      var tmp;
      if (courante == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.maxOf' call
        var iterator = courante.g();
        if (!iterator.h())
          throw NoSuchElementException_init_$Create$();
        // Inline function 'app.zenote.core.rappels.MomentsReunion.enchainements.<anonymous>' call
        var maxValue = iterator.i().o1q_1;
        while (iterator.h()) {
          // Inline function 'app.zenote.core.rappels.MomentsReunion.enchainements.<anonymous>' call
          var v = iterator.i().o1q_1;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp = maxValue;
      }
      var finCourante = tmp;
      var tmp_0;
      if (!(courante == null) && !(finCourante == null)) {
        var tmp_1 = reunion.n1q_1.a12(finCourante);
        // Inline function 'kotlin.time.Companion.minutes' call
        Companion_getInstance_3();
        var tmp$ret$4 = toDuration(5, DurationUnit_MINUTES_getInstance());
        tmp_0 = Duration__compareTo_impl_pchp0f(tmp_1, tmp$ret$4) < 0;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'kotlin.collections.plusAssign' call
        courante.e(reunion);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        var element = mutableListOf([reunion]);
        resultat.e(element);
      }
    }
    return resultat;
  };
  var MomentsReunion_instance;
  function MomentsReunion_getInstance() {
    return MomentsReunion_instance;
  }
  function TypeMoment_AVANT_getInstance() {
    TypeMoment_initEntries();
    return TypeMoment_AVANT_instance;
  }
  function TypeMoment_APRES_getInstance() {
    TypeMoment_initEntries();
    return TypeMoment_APRES_instance;
  }
  function RappelId(value) {
    this.l1x_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.l1x_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.RappelId.<anonymous>' call
      var message = 'Un identifiant de rappel ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(RappelId).toString = function () {
    return this.l1x_1;
  };
  protoOf(RappelId).hashCode = function () {
    return getStringHashCode(this.l1x_1);
  };
  protoOf(RappelId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelId))
      return false;
    var tmp0_other_with_cast = other instanceof RappelId ? other : THROW_CCE();
    if (!(this.l1x_1 === tmp0_other_with_cast.l1x_1))
      return false;
    return true;
  };
  function Rappel(id, elementId, texte, declencheur, critique) {
    critique = critique === VOID ? false : critique;
    this.r1r_1 = id;
    this.s1r_1 = elementId;
    this.t1r_1 = texte;
    this.u1r_1 = declencheur;
    this.v1r_1 = critique;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.t1r_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.Rappel.<anonymous>' call
      var message = "Un rappel sans texte n'a rien \xE0 rappeler.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Rappel).toString = function () {
    return 'Rappel(id=' + this.r1r_1.toString() + ', elementId=' + this.s1r_1.toString() + ', texte=' + this.t1r_1 + ', declencheur=' + toString_0(this.u1r_1) + ', critique=' + this.v1r_1 + ')';
  };
  protoOf(Rappel).hashCode = function () {
    var result = this.r1r_1.hashCode();
    result = imul(result, 31) + this.s1r_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.t1r_1) | 0;
    result = imul(result, 31) + hashCode(this.u1r_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.v1r_1) | 0;
    return result;
  };
  protoOf(Rappel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rappel))
      return false;
    var tmp0_other_with_cast = other instanceof Rappel ? other : THROW_CCE();
    if (!this.r1r_1.equals(tmp0_other_with_cast.r1r_1))
      return false;
    if (!this.s1r_1.equals(tmp0_other_with_cast.s1r_1))
      return false;
    if (!(this.t1r_1 === tmp0_other_with_cast.t1r_1))
      return false;
    if (!equals(this.u1r_1, tmp0_other_with_cast.u1r_1))
      return false;
    if (!(this.v1r_1 === tmp0_other_with_cast.v1r_1))
      return false;
    return true;
  };
  function personne($this, nom, candidats, tous) {
    var cherche = Texte_getInstance().t1w(nom);
    if (cherche.j())
      return new Substituee("ZeNote ne sait pas reconna\xEEtre ce signal dans l'agenda, et la position n'est pas collect\xE9e.");
    if (cherche.l() === 1) {
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = tous.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.rappels.SignauxAgenda.personne.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = element.q1q_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var _iterator__ex2g4s_0 = this_0.g();
        while (_iterator__ex2g4s_0.h()) {
          var item = _iterator__ex2g4s_0.i();
          // Inline function 'app.zenote.core.rappels.SignauxAgenda.personne.<anonymous>.<anonymous>' call
          var tmp$ret$0 = nomLisible(SignauxAgenda_getInstance(), item);
          destination_0.e(tmp$ret$0);
        }
        var list = destination_0;
        addAll(destination, list);
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_1 = destination.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_0 = _iterator__ex2g4s_1.i();
        // Inline function 'app.zenote.core.rappels.SignauxAgenda.personne.<anonymous>' call
        if (Texte_getInstance().t1w(element_0).l() >= 2 && first(Texte_getInstance().t1w(element_0)) === first(cherche)) {
          destination_1.e(element_0);
        }
      }
      // Inline function 'kotlin.collections.distinctBy' call
      var set = HashSet_init_$Create$();
      var list_0 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_2 = destination_1.g();
      while (_iterator__ex2g4s_2.h()) {
        var e = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.rappels.SignauxAgenda.personne.<anonymous>' call
        var key = Texte_getInstance().l1v(e);
        if (set.e(key)) {
          list_0.e(e);
        }
      }
      var homonymes = list_0;
      if (homonymes.l() >= 2) {
        return new Substituee("Deux personnes s'appellent " + nom + " dans l'agenda (" + joinToString(sorted(homonymes), ', ') + ') : ' + "pr\xE9cisez le nom dans le plan. En attendant, ramen\xE9 \xE0 la reprise de l'appareil.");
      }
    }
    var tmp$ret$14;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_3 = candidats.g();
      while (_iterator__ex2g4s_3.h()) {
        var element_1 = _iterator__ex2g4s_3.i();
        // Inline function 'app.zenote.core.rappels.SignauxAgenda.personne.<anonymous>' call
        var tmp;
        var tmp0 = element_1.q1q_1;
        var tmp$ret$11;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0, Collection)) {
            tmp_0 = tmp0.j();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$11 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s_4 = tmp0.g();
          while (_iterator__ex2g4s_4.h()) {
            var element_2 = _iterator__ex2g4s_4.i();
            // Inline function 'app.zenote.core.rappels.SignauxAgenda.personne.<anonymous>.<anonymous>' call
            if (concerne(SignauxAgenda_getInstance(), Texte_getInstance().t1w(nomLisible(SignauxAgenda_getInstance(), element_2)), cherche)) {
              tmp$ret$11 = true;
              break $l$block_0;
            }
          }
          tmp$ret$11 = false;
        }
        if (tmp$ret$11) {
          tmp = true;
        } else {
          tmp = Texte_getInstance().t1w(element_1.m1q_1).s1(cherche);
        }
        if (tmp) {
          tmp$ret$14 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$14 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$14;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return new Substituee("Aucun \xE9v\xE9nement de l'agenda ne concerne " + nom + " : ramen\xE9 \xE0 la reprise de l'appareil.");
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var trouve = tmp_1;
    return avant_0($this, trouve);
  }
  function evenement($this, titre, candidats) {
    var mots = Texte_getInstance().t1w(titre);
    var tmp;
    if (mots.j()) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(mots, Collection)) {
          tmp_0 = mots.j();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = mots.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'app.zenote.core.rappels.SignauxAgenda.evenement.<anonymous>' call
          if (SignauxAgenda_getInstance().z1w_1.r1(element)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    if (tmp)
      return null;
    var tmp$ret$3;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s_0 = mots.g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'app.zenote.core.rappels.SignauxAgenda.evenement.<anonymous>' call
        var result = SignauxAgenda_getInstance().a1x_1.y1(element_0);
        if (!(result == null)) {
          tmp$ret$3 = result;
          break $l$block_1;
        }
      }
      tmp$ret$3 = null;
    }
    var jour = tmp$ret$3;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = mots.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.rappels.SignauxAgenda.evenement.<anonymous>' call
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = SignauxAgenda_getInstance().a1x_1;
      if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).w1(element_1)) {
        destination.e(element_1);
      }
    }
    var cherche = destination;
    var tmp$ret$10;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_2 = candidats.g();
      while (_iterator__ex2g4s_2.h()) {
        var element_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.rappels.SignauxAgenda.evenement.<anonymous>' call
        if ((cherche.j() || Texte_getInstance().t1w(element_2.m1q_1).s1(cherche)) && (jour == null || toLocalDateTime(element_2.n1q_1, Companion_getInstance_2().s12_1).ys().equals(jour))) {
          tmp$ret$10 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$10 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$10;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return new Substituee('Aucun \xE9v\xE9nement \xAB ' + sansArticle($this, titre) + " \xBB dans l'agenda connu : ramen\xE9 \xE0 la reprise de l'appareil.");
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var trouve = tmp_1;
    return avant_0($this, trouve);
  }
  function avant_0($this, e) {
    // Inline function 'kotlin.time.Companion.minutes' call
    Companion_getInstance_3();
    var tmp$ret$0 = toDuration(5, DurationUnit_MINUTES_getInstance());
    return new Observable(toLocalDateTime(e.n1q_1.z11(tmp$ret$0), Companion_getInstance_2().s12_1), toLocalDateTime(e.n1q_1, Companion_getInstance_2().s12_1));
  }
  function concerne($this, participant, cherche) {
    return participant.j() ? false : cherche.l() >= 2 ? participant.s1(cherche) : first(participant) === first(cherche);
  }
  function nomLisible($this, participant) {
    var tmp;
    if (contains(participant, _Char___init__impl__6a9atx(64))) {
      tmp = replace(replace(replace(substringBefore(participant, _Char___init__impl__6a9atx(64)), _Char___init__impl__6a9atx(46), _Char___init__impl__6a9atx(32)), _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(32)), _Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(32));
    } else {
      tmp = participant;
    }
    return tmp;
  }
  function sansArticle($this, titre) {
    // Inline function 'kotlin.text.replaceFirst' call
    // Inline function 'kotlin.text.ifBlank' call
    var this_0 = $this.b1x_1.sa(titre, '');
    var tmp;
    if (isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.SignauxAgenda.sansArticle.<anonymous>' call
      tmp = titre;
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  function finDe($this, texte, plie) {
    // Inline function 'kotlin.text.substring' call
    var startIndex = texte.length - plie.length | 0;
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.text.trim' call
    var this_0 = texte.substring(startIndex);
    var tmp$ret$2 = toString_0(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    // Inline function 'kotlin.text.trim' call
    var this_1 = trimEnd(tmp$ret$2, charArrayOf([_Char___init__impl__6a9atx(46), _Char___init__impl__6a9atx(44), _Char___init__impl__6a9atx(59), _Char___init__impl__6a9atx(33), _Char___init__impl__6a9atx(63)]));
    return toString_0(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
  }
  function SignauxAgenda$reconnaitre$lambda(it) {
    return it.n1q_1;
  }
  function SignauxAgenda$reconnaitre$lambda_0(it) {
    return it.l1q_1;
  }
  function SignauxAgenda() {
    SignauxAgenda_instance = this;
    this.v1w_1 = 5;
    this.w1w_1 = "ZeNote ne sait pas reconna\xEEtre ce signal dans l'agenda, et la position n'est pas collect\xE9e.";
    this.x1w_1 = Regex_init_$Create$('\\bje (?:vois|verrai|croise|retrouve) (.+)$');
    this.y1w_1 = Regex_init_$Create$('\\b(?:avant|au debut d[eu]|au prochain|a la prochaine)\\s+(.+)$');
    this.z1w_1 = setOf_0(['creneau', 'premier']);
    this.a1x_1 = mapOf([to('lundi', DayOfWeek_MONDAY_getInstance()), to('mardi', DayOfWeek_TUESDAY_getInstance()), to('mercredi', DayOfWeek_WEDNESDAY_getInstance()), to('jeudi', DayOfWeek_THURSDAY_getInstance()), to('vendredi', DayOfWeek_FRIDAY_getInstance()), to('samedi', DayOfWeek_SATURDAY_getInstance()), to('dimanche', DayOfWeek_SUNDAY_getInstance())]);
    this.b1x_1 = Regex_init_$Create$_0("^(?:le|la|les|l['\u2019]|du|des|de la)\\s*", RegexOption_IGNORE_CASE_getInstance());
  }
  protoOf(SignauxAgenda).c1x = function (declencheur, poseLe, evenements) {
    var plie = Texte_getInstance().l1v(declencheur);
    var apres = toInstant(poseLe, Companion_getInstance_2().s12_1);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = evenements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.rappels.SignauxAgenda.reconnaitre.<anonymous>' call
      if (element.n1q_1.b12(apres) > 0) {
        destination.e(element);
      }
    }
    var tmp = destination;
    var tmp_0 = SignauxAgenda$reconnaitre$lambda;
    var candidats = sortedWith(tmp, compareBy([tmp_0, SignauxAgenda$reconnaitre$lambda_0]));
    var tmp0_safe_receiver = this.x1w_1.ra(plie);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var nom = finDe(SignauxAgenda_getInstance(), declencheur, tmp0_safe_receiver.kb().k(1));
      return personne(SignauxAgenda_getInstance(), nom, candidats, evenements);
    }
    var tmp1_safe_receiver = this.y1w_1.ra(plie);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var titre = finDe(SignauxAgenda_getInstance(), declencheur, tmp1_safe_receiver.kb().k(1));
      return evenement(SignauxAgenda_getInstance(), titre, candidats);
    }
    return null;
  };
  var SignauxAgenda_instance;
  function SignauxAgenda_getInstance() {
    if (SignauxAgenda_instance == null)
      new SignauxAgenda();
    return SignauxAgenda_instance;
  }
  function TexteSource(captureId, texte, quand, jour) {
    jour = jour === VOID ? null : jour;
    this.q1x_1 = captureId;
    this.r1x_1 = texte;
    this.s1x_1 = quand;
    this.t1x_1 = jour;
  }
  protoOf(TexteSource).toString = function () {
    return 'TexteSource(captureId=' + this.q1x_1.toString() + ', texte=' + this.r1x_1 + ', quand=' + this.s1x_1 + ', jour=' + toString(this.t1x_1) + ')';
  };
  protoOf(TexteSource).hashCode = function () {
    var result = this.q1x_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.r1x_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1x_1) | 0;
    result = imul(result, 31) + (this.t1x_1 == null ? 0 : this.t1x_1.hashCode()) | 0;
    return result;
  };
  protoOf(TexteSource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TexteSource))
      return false;
    var tmp0_other_with_cast = other instanceof TexteSource ? other : THROW_CCE();
    if (!this.q1x_1.equals(tmp0_other_with_cast.q1x_1))
      return false;
    if (!(this.r1x_1 === tmp0_other_with_cast.r1x_1))
      return false;
    if (!(this.s1x_1 === tmp0_other_with_cast.s1x_1))
      return false;
    if (!equals(this.t1x_1, tmp0_other_with_cast.t1x_1))
      return false;
    return true;
  };
  function Citation(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.c1n_1 = captureId;
    this.d1n_1 = extrait;
    this.e1n_1 = pourquoi;
    this.f1n_1 = elementId;
  }
  protoOf(Citation).toString = function () {
    return 'Citation(captureId=' + this.c1n_1.toString() + ', extrait=' + this.d1n_1 + ', pourquoi=' + this.e1n_1 + ', elementId=' + toString(this.f1n_1) + ')';
  };
  protoOf(Citation).hashCode = function () {
    var result = this.c1n_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.d1n_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e1n_1) | 0;
    result = imul(result, 31) + (this.f1n_1 == null ? 0 : this.f1n_1.hashCode()) | 0;
    return result;
  };
  protoOf(Citation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Citation))
      return false;
    var tmp0_other_with_cast = other instanceof Citation ? other : THROW_CCE();
    if (!this.c1n_1.equals(tmp0_other_with_cast.c1n_1))
      return false;
    if (!(this.d1n_1 === tmp0_other_with_cast.d1n_1))
      return false;
    if (!(this.e1n_1 === tmp0_other_with_cast.e1n_1))
      return false;
    if (!equals(this.f1n_1, tmp0_other_with_cast.f1n_1))
      return false;
    return true;
  };
  function Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.w1m_1 = question;
    this.x1m_1 = enonce;
    this.y1m_1 = citations;
    this.z1m_1 = indisponibleHorsLigne;
    this.a1n_1 = nonPrisEnCompte;
  }
  protoOf(Reponse).b1n = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.y1m_1.j();
  };
  protoOf(Reponse).u1x = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    return new Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).v1x = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte, $super) {
    question = question === VOID ? this.w1m_1 : question;
    enonce = enonce === VOID ? this.x1m_1 : enonce;
    citations = citations === VOID ? this.y1m_1 : citations;
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? this.z1m_1 : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? this.a1n_1 : nonPrisEnCompte;
    return $super === VOID ? this.u1x(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) : $super.u1x.call(this, question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).toString = function () {
    return 'Reponse(question=' + this.w1m_1 + ', enonce=' + this.x1m_1 + ', citations=' + toString_0(this.y1m_1) + ', indisponibleHorsLigne=' + toString_0(this.z1m_1) + ', nonPrisEnCompte=' + toString_0(this.a1n_1) + ')';
  };
  protoOf(Reponse).hashCode = function () {
    var result = getStringHashCode(this.w1m_1);
    result = imul(result, 31) + getStringHashCode(this.x1m_1) | 0;
    result = imul(result, 31) + hashCode(this.y1m_1) | 0;
    result = imul(result, 31) + hashCode(this.z1m_1) | 0;
    result = imul(result, 31) + hashCode(this.a1n_1) | 0;
    return result;
  };
  protoOf(Reponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reponse))
      return false;
    var tmp0_other_with_cast = other instanceof Reponse ? other : THROW_CCE();
    if (!(this.w1m_1 === tmp0_other_with_cast.w1m_1))
      return false;
    if (!(this.x1m_1 === tmp0_other_with_cast.x1m_1))
      return false;
    if (!equals(this.y1m_1, tmp0_other_with_cast.y1m_1))
      return false;
    if (!equals(this.z1m_1, tmp0_other_with_cast.z1m_1))
      return false;
    if (!equals(this.a1n_1, tmp0_other_with_cast.a1n_1))
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
      var tmp$ret$0 = new Citation(item.h1n_1, item.j1n_1, libelle(RechercheLocale_getInstance(), item.i1n_1) + ' de ' + periode.y1x_1, item.g1n_1);
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
      var tmp$ret$3 = item_0.c1n_1;
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
      if (!dejaCitees.r1(element.q1x_1)) {
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
      var tmp$ret$9 = new Citation(item_1.q1x_1, item_1.r1x_1, 'capture du ' + item_1.s1x_1);
      destination_2.e(tmp$ret$9);
    }
    var surCaptures = destination_2;
    var tmp = plus_1(surElements, surCaptures);
    var tmp_0 = RechercheLocale$tout$lambda;
    var citations = take(sortedWith(tmp, compareBy([tmp_0, RechercheLocale$tout$lambda_0])), max);
    return reponse($this, '', citations, emptyList());
  }
  function avec(_this__u8e3s4, $this, ecarte) {
    return ecarte.j() ? _this__u8e3s4 : _this__u8e3s4.v1x(VOID, VOID, VOID, VOID, ecarte);
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
    switch (type.g2_1) {
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
    switch (verdict.g2_1) {
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
    switch (verdict.g2_1) {
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
  function sam$kotlin_Comparator$0_12(function_0) {
    this.z1x_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_12).zc = function (a, b) {
    return this.z1x_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_12).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_12).y2 = function () {
    return this.z1x_1;
  };
  protoOf(sam$kotlin_Comparator$0_12).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_12).hashCode = function () {
    return hashCode(this.y2());
  };
  function RechercheLocale$parMots$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp = b.fc_1;
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp$ret$1 = a.fc_1;
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
        var tmp_0 = a.gc_1.c1n_1.v1m_1;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp$ret$1 = b.gc_1.c1n_1.v1m_1;
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
        var tmp0_safe_receiver = a.gc_1.f1n_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1m_1;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp0_safe_receiver_0 = b.gc_1.f1n_1;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.p1m_1;
        var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function RechercheLocale$tout$lambda(it) {
    return it.c1n_1.v1m_1;
  }
  function RechercheLocale$tout$lambda_0(it) {
    var tmp0_safe_receiver = it.f1n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1m_1;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function RechercheLocale$parPersonne$lambda(it) {
    return etatOrdinal(RechercheLocale_getInstance(), it.q1n_1);
  }
  function RechercheLocale$parPersonne$lambda_0(it) {
    return it.g1n_1.p1m_1;
  }
  function RechercheLocale() {
    RechercheLocale_instance = this;
    this.j1s_1 = 'Rien \xE0 ce sujet dans ce qui a \xE9t\xE9 captur\xE9.';
    this.k1s_1 = listOf(['analyse des captures pas encore trait\xE9es', 'reformulation de la r\xE9ponse en langage naturel']);
    this.l1s_1 = 10;
  }
  protoOf(RechercheLocale).a1y = function (requete, elements, captures, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.k1s_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$0 = to(item, Texte_getInstance().m1v(requete, item.j1n_1));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element.gc_1 > 0.0) {
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
      var element_0 = item_0.hc();
      var note = item_0.ic();
      var tmp$ret$6 = to(note, new Citation(element_0.h1n_1, element_0.j1n_1, '\xE9l\xE9ment \xAB ' + libelle(RechercheLocale_getInstance(), element_0.i1n_1) + ' \xBB contenant les mots cherch\xE9s', element_0.g1n_1));
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
      var tmp$ret$9 = item_1.gc_1.c1n_1;
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
      if (!dejaCitees.r1(element_1.q1x_1)) {
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
      var tmp$ret$15 = to(item_2, Texte_getInstance().m1v(requete, item_2.r1x_1));
      destination_4.e(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_5 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_5 = destination_4.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element_2.gc_1 > 0.0) {
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
      var source = item_3.hc();
      var note_0 = item_3.ic();
      var tmp$ret$21 = to(note_0, new Citation(source.q1x_1, source.r1x_1, 'capture du ' + source.s1x_1 + ' contenant les mots cherch\xE9s'));
      destination_6.e(tmp$ret$21);
    }
    var surCaptures = destination_6;
    var tmp = plus_1(surElements, surCaptures);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_0 = RechercheLocale$parMots$lambda;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_12(tmp_0);
    var tmp_1 = RechercheLocale$parMots$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_12(tmp_1);
    var tmp_2 = RechercheLocale$parMots$lambda_1(this_1);
    var tmp$ret$26 = new sam$kotlin_Comparator$0_12(tmp_2);
    // Inline function 'kotlin.collections.map' call
    var this_2 = take(sortedWith(tmp, tmp$ret$26), max);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_7 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_7 = this_2.g();
    while (_iterator__ex2g4s_7.h()) {
      var item_4 = _iterator__ex2g4s_7.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$27 = item_4.gc_1;
      destination_7.e(tmp$ret$27);
    }
    var citations = destination_7;
    return reponse(this, requete, citations, indisponibles);
  };
  protoOf(RechercheLocale).m1s = function (requete, elements, captures, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.a1y(requete, elements, captures, reseau, max) : $super.a1y.call(this, requete, elements, captures, reseau, max);
  };
  protoOf(RechercheLocale).b1y = function (requete, elements, captures, aujourdhui, reseau, max) {
    var tmp;
    if (RepereTemporel_getInstance().g1y(requete) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parQuestion.<anonymous>' call
      tmp = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
    }
    var ecarte = listOfNotNull_0(tmp);
    var tmp1_elvis_lhs = RepereTemporel_getInstance().h1y(requete, aujourdhui);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return avec(this.a1y(requete, elements, captures, reseau, max), this, ecarte);
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
      if (!(element.t1x_1 == null) && repere.i1y_1.k1y(element.t1x_1)) {
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
      var tmp$ret$5 = item.q1x_1;
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
      if (idsPeriode.r1(element_0.h1n_1)) {
        destination_1.e(element_0);
      }
    }
    var elementsPeriode = destination_1;
    var reste = RepereTemporel_getInstance().l1y(requete, repere);
    var parLesMots = isBlank(reste) ? null : this.a1y(reste, elementsPeriode, dansLaPeriode, reseau, max);
    var motsMuets = parLesMots == null || parLesMots.y1m_1.j();
    var brut = motsMuets ? tout(this, dansLaPeriode, elementsPeriode, repere.i1y_1, max) : ensureNotNull(parLesMots);
    var enonce = brut.y1m_1.j() ? 'Rien de captur\xE9 ' + repere.i1y_1.y1x_1 + '.' : motsMuets && !isBlank(reste) ? 'Aucun de ces mots dans les captures de ' + repere.i1y_1.y1x_1 + ' ; ' + ('voici les ' + brut.y1m_1.l() + " qu'elle contient.") : '' + brut.y1m_1.l() + ' \xE9l\xE9ment(s) de ' + repere.i1y_1.y1x_1 + ', ' + 'chacun rattach\xE9 \xE0 sa capture source.';
    return brut.v1x(requete, enonce, VOID, reseau ? emptyList() : this.k1s_1, ecarte);
  };
  protoOf(RechercheLocale).o1s = function (requete, elements, captures, aujourdhui, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.b1y(requete, elements, captures, aujourdhui, reseau, max) : $super.b1y.call(this, requete, elements, captures, aujourdhui, reseau, max);
  };
  protoOf(RechercheLocale).m1y = function (personne, elements, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.k1s_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      if (!(element.n1n_1 == null) && Texte_getInstance().n1y(element.n1n_1, personne)) {
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
      var tmp$ret$3 = new Citation(item.h1n_1, item.j1n_1, libelle(RechercheLocale_getInstance(), item.i1n_1) + ' ' + etat(RechercheLocale_getInstance(), item.q1n_1) + ' envers ' + personne, item.g1n_1);
      destination_0.e(tmp$ret$3);
    }
    var citations = destination_0;
    return reponse(this, 'ce qui est en cours avec ' + personne, citations, indisponibles);
  };
  protoOf(RechercheLocale).q1s = function (personne, elements, reseau, max, $super) {
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.m1y(personne, elements, reseau, max) : $super.m1y.call(this, personne, elements, reseau, max);
  };
  var RechercheLocale_instance;
  function RechercheLocale_getInstance() {
    if (RechercheLocale_instance == null)
      new RechercheLocale();
    return RechercheLocale_instance;
  }
  function Periode(du, au, libelle) {
    this.w1x_1 = du;
    this.x1x_1 = au;
    this.y1x_1 = libelle;
    // Inline function 'kotlin.require' call
    if (!(this.w1x_1.h12(this.x1x_1) <= 0)) {
      // Inline function 'app.zenote.core.recherche.Periode.<anonymous>' call
      var message = 'Une p\xE9riode dont le d\xE9but suit la fin ne d\xE9signe aucun jour.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Periode).k1y = function (jour) {
    return jour.h12(this.w1x_1) >= 0 && jour.h12(this.x1x_1) <= 0;
  };
  protoOf(Periode).toString = function () {
    return 'Periode(du=' + this.w1x_1.toString() + ', au=' + this.x1x_1.toString() + ', libelle=' + this.y1x_1 + ')';
  };
  protoOf(Periode).hashCode = function () {
    var result = this.w1x_1.hashCode();
    result = imul(result, 31) + this.x1x_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.y1x_1) | 0;
    return result;
  };
  protoOf(Periode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Periode))
      return false;
    var tmp0_other_with_cast = other instanceof Periode ? other : THROW_CCE();
    if (!this.w1x_1.equals(tmp0_other_with_cast.w1x_1))
      return false;
    if (!this.x1x_1.equals(tmp0_other_with_cast.x1x_1))
      return false;
    if (!(this.y1x_1 === tmp0_other_with_cast.y1x_1))
      return false;
    return true;
  };
  function Repere(periode, expression) {
    this.i1y_1 = periode;
    this.j1y_1 = expression;
  }
  protoOf(Repere).toString = function () {
    return 'Repere(periode=' + this.i1y_1.toString() + ', expression=' + this.j1y_1 + ')';
  };
  protoOf(Repere).hashCode = function () {
    var result = this.i1y_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.j1y_1) | 0;
    return result;
  };
  protoOf(Repere).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Repere))
      return false;
    var tmp0_other_with_cast = other instanceof Repere ? other : THROW_CCE();
    if (!this.i1y_1.equals(tmp0_other_with_cast.i1y_1))
      return false;
    if (!(this.j1y_1 === tmp0_other_with_cast.j1y_1))
      return false;
    return true;
  };
  function aplatir($this, requete) {
    // Inline function 'kotlin.text.map' call
    var this_0 = Texte_getInstance().l1v(requete);
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
    var lundi = minus(date, DatePeriod_init_$Create$(VOID, VOID, get_isoDayNumber(date.ys()) - 1 | 0));
    return new Periode(lundi, plus_2(lundi, DatePeriod_init_$Create$(VOID, VOID, 6)), libelle);
  }
  function moisDe($this, date, libelle) {
    var premier = LocalDate_init_$Create$(date.go(), date.g12(), 1);
    return new Periode(premier, minus(plus_2(premier, DatePeriod_init_$Create$(VOID, 1)), DatePeriod_init_$Create$(VOID, VOID, 1)), libelle);
  }
  function dernier($this, date, jourVoulu, libelle) {
    var recul = get_isoDayNumber(date.ys()) - get_isoDayNumber(jourVoulu) | 0;
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
        if (contains_0(plie, ' ' + element + ' ')) {
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
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? $this.f1y_1.y1(apres.k(0)) : tmp1_elvis_lhs;
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
    var recul = _destruct__k2r9zo.hc();
    var nom = _destruct__k2r9zo.ic();
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
    var samedi = dernier(RepereTemporel_getInstance(), d, DayOfWeek_SATURDAY_getInstance(), '').w1x_1;
    return new Periode(samedi, plus_2(samedi, DatePeriod_init_$Create$(VOID, VOID, 1)), 'le week-end dernier');
  }
  function RepereTemporel$formes$lambda_8(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.go(), d.g12(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
  }
  function RepereTemporel$formes$lambda_9(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.go(), d.g12(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
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
    this.c1y_1 = listOf(['en voiture', 'dans le train', 'dans l avion', 'en marchant', 'en reunion', 'au bureau', 'a la maison', 'au telephone', 'en visio', 'dans le metro']);
    this.d1y_1 = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
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
    tmp.e1y_1 = listOf([tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, to('dimanche dernier', RepereTemporel$formes$lambda_17)]);
    this.f1y_1 = mapOf([to('un', 1), to('une', 1), to('deux', 2), to('trois', 3), to('quatre', 4), to('cinq', 5), to('six', 6), to('sept', 7), to('huit', 8), to('neuf', 9), to('dix', 10), to('quinze', 15)]);
  }
  protoOf(RepereTemporel).g1y = function (requete) {
    var plie = aplatir(this, requete);
    var tmp0 = this.c1y_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.recherche.RepereTemporel.contexteEvoque.<anonymous>' call
        if (contains_0(plie, ' ' + element + ' ')) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(RepereTemporel).h1y = function (requete, aujourdhui) {
    var plie = aplatir(this, requete);
    var _iterator__ex2g4s = this.e1y_1.g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      var expression = _destruct__k2r9zo.hc();
      var calcul = _destruct__k2r9zo.ic();
      if (contains_0(plie, ' ' + expression + ' '))
        return new Repere(calcul(aujourdhui), expression);
    }
    return depuisCompte(this, plie, aujourdhui);
  };
  protoOf(RepereTemporel).l1y = function (requete, repere) {
    var motsDuRepere = toSet(Texte_getInstance().t1w(repere.j1y_1));
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = Texte_getInstance().t1w(requete);
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RepereTemporel.sansRepere.<anonymous>' call
      if (!motsDuRepere.r1(element)) {
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
  var MotifRevoir_ECARTE_PLUSIEURS_FOIS_instance;
  var MotifRevoir_DORMANT_instance;
  var MotifRevoir_entriesInitialized;
  function MotifRevoir_initEntries() {
    if (MotifRevoir_entriesInitialized)
      return Unit_instance;
    MotifRevoir_entriesInitialized = true;
    MotifRevoir_ECARTE_PLUSIEURS_FOIS_instance = new MotifRevoir('ECARTE_PLUSIEURS_FOIS', 0);
    MotifRevoir_DORMANT_instance = new MotifRevoir('DORMANT', 1);
  }
  function MotifRevoir(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var IssueRevoir_REFORMULER_instance;
  var IssueRevoir_DECOUPER_instance;
  var IssueRevoir_PLANIFIER_instance;
  var IssueRevoir_DELEGUER_instance;
  var IssueRevoir_ABANDONNER_instance;
  var IssueRevoir_entriesInitialized;
  function IssueRevoir_initEntries() {
    if (IssueRevoir_entriesInitialized)
      return Unit_instance;
    IssueRevoir_entriesInitialized = true;
    IssueRevoir_REFORMULER_instance = new IssueRevoir('REFORMULER', 0);
    IssueRevoir_DECOUPER_instance = new IssueRevoir('DECOUPER', 1);
    IssueRevoir_PLANIFIER_instance = new IssueRevoir('PLANIFIER', 2);
    IssueRevoir_DELEGUER_instance = new IssueRevoir('DELEGUER', 3);
    IssueRevoir_ABANDONNER_instance = new IssueRevoir('ABANDONNER', 4);
  }
  function IssueRevoir(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ElementARevoir(element, motif, explication, issues) {
    this.h1t_1 = element;
    this.i1t_1 = motif;
    this.j1t_1 = explication;
    this.k1t_1 = issues;
  }
  protoOf(ElementARevoir).toString = function () {
    return 'ElementARevoir(element=' + this.h1t_1.toString() + ', motif=' + this.i1t_1.toString() + ', explication=' + this.j1t_1 + ', issues=' + toString_0(this.k1t_1) + ')';
  };
  protoOf(ElementARevoir).hashCode = function () {
    var result = this.h1t_1.hashCode();
    result = imul(result, 31) + this.i1t_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.j1t_1) | 0;
    result = imul(result, 31) + hashCode(this.k1t_1) | 0;
    return result;
  };
  protoOf(ElementARevoir).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementARevoir))
      return false;
    var tmp0_other_with_cast = other instanceof ElementARevoir ? other : THROW_CCE();
    if (!this.h1t_1.equals(tmp0_other_with_cast.h1t_1))
      return false;
    if (!this.i1t_1.equals(tmp0_other_with_cast.i1t_1))
      return false;
    if (!(this.j1t_1 === tmp0_other_with_cast.j1t_1))
      return false;
    if (!equals(this.k1t_1, tmp0_other_with_cast.k1t_1))
      return false;
    return true;
  };
  function SuiviElement(elementId, ecarteFois, vuLe) {
    ecarteFois = ecarteFois === VOID ? 0 : ecarteFois;
    vuLe = vuLe === VOID ? null : vuLe;
    this.o1y_1 = elementId;
    this.p1y_1 = ecarteFois;
    this.q1y_1 = vuLe;
  }
  protoOf(SuiviElement).toString = function () {
    return 'SuiviElement(elementId=' + this.o1y_1 + ', ecarteFois=' + this.p1y_1 + ', vuLe=' + toString(this.q1y_1) + ')';
  };
  protoOf(SuiviElement).hashCode = function () {
    var result = getStringHashCode(this.o1y_1);
    result = imul(result, 31) + this.p1y_1 | 0;
    result = imul(result, 31) + (this.q1y_1 == null ? 0 : this.q1y_1.hashCode()) | 0;
    return result;
  };
  protoOf(SuiviElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviElement))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviElement ? other : THROW_CCE();
    if (!(this.o1y_1 === tmp0_other_with_cast.o1y_1))
      return false;
    if (!(this.p1y_1 === tmp0_other_with_cast.p1y_1))
      return false;
    if (!equals(this.q1y_1, tmp0_other_with_cast.q1y_1))
      return false;
    return true;
  };
  function ecarteTropSouvent($this, element, suivi) {
    if (suivi.p1y_1 < 3)
      return null;
    return new ElementARevoir(element, MotifRevoir_ECARTE_PLUSIEURS_FOIS_getInstance(), '\xE9cart\xE9 ' + suivi.p1y_1 + " fois : ce n'est sans doute pas le bon d\xE9coupage", listOf([IssueRevoir_REFORMULER_getInstance(), IssueRevoir_DECOUPER_getInstance(), IssueRevoir_ABANDONNER_getInstance()]));
  }
  function dormant($this, element, suivi, aujourdhui) {
    if (!element.q1n_1.equals(Verdict_ACCEPTE_getInstance()))
      return null;
    var tmp0_elvis_lhs = suivi.q1y_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var depuis = tmp;
    var jours = aujourdhui.cr() - depuis.cr() | 0;
    var seuil = $this.r1y(element.m1n_1);
    if (jours < seuil)
      return null;
    return new ElementARevoir(element, MotifRevoir_DORMANT_getInstance(), 'sans avanc\xE9e depuis ' + jours + ' jours', listOf([IssueRevoir_DECOUPER_getInstance(), IssueRevoir_PLANIFIER_getInstance(), IssueRevoir_DELEGUER_getInstance(), IssueRevoir_ABANDONNER_getInstance()]));
  }
  function ordinalPoids($this, poids) {
    var tmp;
    switch (poids == null ? -1 : poids.g2_1) {
      case 2:
        tmp = 3;
        break;
      case 1:
        tmp = 2;
        break;
      case 0:
        tmp = 1;
        break;
      case -1:
        tmp = 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function sam$kotlin_Comparator$0_13(function_0) {
    this.s1y_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_13).zc = function (a, b) {
    return this.s1y_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_13).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_13).y2 = function () {
    return this.s1y_1;
  };
  protoOf(sam$kotlin_Comparator$0_13).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_13).hashCode = function () {
    return hashCode(this.y2());
  };
  function ARevoir$aRevoir$lambda(it) {
    return !it.q1n_1.equals(Verdict_REJETE_getInstance()) && it.i1n_1.q1v();
  }
  function ARevoir$aRevoir$lambda_0($parId, $aujourdhui) {
    return function (element) {
      var tmp0_elvis_lhs = $parId.y1(element.g1n_1.p1m_1);
      var suivi = tmp0_elvis_lhs == null ? new SuiviElement(element.g1n_1.p1m_1) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = ecarteTropSouvent(ARevoir_instance, element, suivi);
      return tmp1_elvis_lhs == null ? dormant(ARevoir_instance, element, suivi, $aujourdhui) : tmp1_elvis_lhs;
    };
  }
  function ARevoir$aRevoir$lambda_1(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
    var tmp = ordinalPoids(ARevoir_instance, b.h1t_1.m1n_1);
    // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
    var tmp$ret$1 = ordinalPoids(ARevoir_instance, a.h1t_1.m1n_1);
    return compareValues(tmp, tmp$ret$1);
  }
  function ARevoir$aRevoir$lambda_2($this) {
    return function (a, b) {
      var previousCompare = $this.compare(a, b);
      var tmp;
      if (!(previousCompare === 0)) {
        tmp = previousCompare;
      } else {
        // Inline function 'kotlin.comparisons.compareValuesBy' call
        // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
        var tmp_0 = a.h1t_1.g1n_1.p1m_1;
        // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
        var tmp$ret$1 = b.h1t_1.g1n_1.p1m_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function ARevoir() {
    this.f1t_1 = 3;
  }
  protoOf(ARevoir).r1y = function (poids) {
    switch (poids == null ? -1 : poids.g2_1) {
      case 2:
        return 14;
      case 1:
        return 30;
      default:
        return 60;
    }
  };
  protoOf(ARevoir).g1t = function (elements, suivis, aujourdhui) {
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(suivis, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = suivis.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
      var tmp$ret$0 = element.o1y_1;
      destination.b2(tmp$ret$0, element);
    }
    var parId = destination;
    var tmp = asSequence(elements);
    var tmp_0 = filter(tmp, ARevoir$aRevoir$lambda);
    var tmp_1 = mapNotNull(tmp_0, ARevoir$aRevoir$lambda_0(parId, aujourdhui));
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_2 = ARevoir$aRevoir$lambda_1;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_13(tmp_2);
    var tmp_3 = ARevoir$aRevoir$lambda_2(this_0);
    var tmp$ret$4 = new sam$kotlin_Comparator$0_13(tmp_3);
    return toList_0(sortedWith_0(tmp_1, tmp$ret$4));
  };
  var ARevoir_instance;
  function ARevoir_getInstance() {
    return ARevoir_instance;
  }
  function MotifRevoir_ECARTE_PLUSIEURS_FOIS_getInstance() {
    MotifRevoir_initEntries();
    return MotifRevoir_ECARTE_PLUSIEURS_FOIS_instance;
  }
  function MotifRevoir_DORMANT_getInstance() {
    MotifRevoir_initEntries();
    return MotifRevoir_DORMANT_instance;
  }
  function IssueRevoir_REFORMULER_getInstance() {
    IssueRevoir_initEntries();
    return IssueRevoir_REFORMULER_instance;
  }
  function IssueRevoir_DECOUPER_getInstance() {
    IssueRevoir_initEntries();
    return IssueRevoir_DECOUPER_instance;
  }
  function IssueRevoir_PLANIFIER_getInstance() {
    IssueRevoir_initEntries();
    return IssueRevoir_PLANIFIER_instance;
  }
  function IssueRevoir_DELEGUER_getInstance() {
    IssueRevoir_initEntries();
    return IssueRevoir_DELEGUER_instance;
  }
  function IssueRevoir_ABANDONNER_getInstance() {
    IssueRevoir_initEntries();
    return IssueRevoir_ABANDONNER_instance;
  }
  function RevueReduite(retenues, demeurentEnFile, motif) {
    this.t1p_1 = retenues;
    this.u1p_1 = demeurentEnFile;
    this.v1p_1 = motif;
  }
  protoOf(RevueReduite).b1q = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.u1p_1.j();
  };
  protoOf(RevueReduite).toString = function () {
    return 'RevueReduite(retenues=' + toString_0(this.t1p_1) + ', demeurentEnFile=' + toString_0(this.u1p_1) + ', motif=' + this.v1p_1 + ')';
  };
  protoOf(RevueReduite).hashCode = function () {
    var result = hashCode(this.t1p_1);
    result = imul(result, 31) + hashCode(this.u1p_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v1p_1) | 0;
    return result;
  };
  protoOf(RevueReduite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueReduite))
      return false;
    var tmp0_other_with_cast = other instanceof RevueReduite ? other : THROW_CCE();
    if (!equals(this.t1p_1, tmp0_other_with_cast.t1p_1))
      return false;
    if (!equals(this.u1p_1, tmp0_other_with_cast.u1p_1))
      return false;
    if (!(this.v1p_1 === tmp0_other_with_cast.v1p_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_14(function_0) {
    this.t1y_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_14).zc = function (a, b) {
    return this.t1y_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_14).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_14).y2 = function () {
    return this.t1y_1;
  };
  protoOf(sam$kotlin_Comparator$0_14).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_14).hashCode = function () {
    return hashCode(this.y2());
  };
  function Arriere$revueReduite$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs = b.w1p_1.m1n_1;
    var tmp = (tmp0_elvis_lhs == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs).g2_1;
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs_0 = a.w1p_1.m1n_1;
    var tmp$ret$1 = (tmp0_elvis_lhs_0 == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs_0).g2_1;
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
        var tmp_0 = a.x1p_1.g2_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.x1p_1.g2_1;
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
        var tmp_0 = a.a1q().p1m_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.a1q().p1m_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Arriere() {
    this.r1p_1 = 12;
  }
  protoOf(Arriere).u1y = function (entrees, charge) {
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
    var this_0 = new sam$kotlin_Comparator$0_14(tmp);
    var tmp_0 = Arriere$revueReduite$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_14(tmp_0);
    var tmp_1 = Arriere$revueReduite$lambda_1(this_1);
    var tmp$ret$3 = new sam$kotlin_Comparator$0_14(tmp_1);
    var parImportance = sortedWith(entrees, tmp$ret$3);
    var retenues = take(parImportance, charge);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(retenues, 10));
    var _iterator__ex2g4s = retenues.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
      var tmp$ret$4 = item.a1q();
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
      if (gardees.r1(element.a1q())) {
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
      if (!gardees.r1(element_0.a1q())) {
        destination_1.e(element_0);
      }
    }
    return new RevueReduite(tmp_2, destination_1, 'Beaucoup de choses en attente. Voici les ' + charge + ' plus lourdes ou ' + 'les plus press\xE9es ; le reste demeure en file, intact.');
  };
  protoOf(Arriere).s1p = function (entrees, charge, $super) {
    charge = charge === VOID ? 12 : charge;
    return $super === VOID ? this.u1y(entrees, charge) : $super.u1y.call(this, entrees, charge);
  };
  var Arriere_instance;
  function Arriere_getInstance() {
    return Arriere_instance;
  }
  function EntreeRevue(element, urgence, aConfirmer, planAFournir) {
    this.w1p_1 = element;
    this.x1p_1 = urgence;
    this.y1p_1 = aConfirmer;
    this.z1p_1 = planAFournir;
  }
  protoOf(EntreeRevue).a1q = function () {
    return this.w1p_1.g1n_1;
  };
  protoOf(EntreeRevue).toString = function () {
    return 'EntreeRevue(element=' + this.w1p_1.toString() + ', urgence=' + this.x1p_1.toString() + ', aConfirmer=' + this.y1p_1 + ', planAFournir=' + this.z1p_1 + ')';
  };
  protoOf(EntreeRevue).hashCode = function () {
    var result = this.w1p_1.hashCode();
    result = imul(result, 31) + this.x1p_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y1p_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.z1p_1) | 0;
    return result;
  };
  protoOf(EntreeRevue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevue))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevue ? other : THROW_CCE();
    if (!this.w1p_1.equals(tmp0_other_with_cast.w1p_1))
      return false;
    if (!this.x1p_1.equals(tmp0_other_with_cast.x1p_1))
      return false;
    if (!(this.y1p_1 === tmp0_other_with_cast.y1p_1))
      return false;
    if (!(this.z1p_1 === tmp0_other_with_cast.z1p_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_15(function_0) {
    this.v1y_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_15).zc = function (a, b) {
    return this.v1y_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_15).compare = function (a, b) {
    return this.zc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_15).y2 = function () {
    return this.v1y_1;
  };
  protoOf(sam$kotlin_Comparator$0_15).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.y2(), other.y2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_15).hashCode = function () {
    return hashCode(this.y2());
  };
  function FileRevue$ordreInterne$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp = a.x1p_1.g2_1;
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp$ret$1 = b.x1p_1.g2_1;
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
        var tmp_0 = b.y1p_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = a.y1p_1;
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
        var tmp_0 = a.a1q().p1m_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = b.a1q().p1m_1;
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
    var this_0 = new sam$kotlin_Comparator$0_15(tmp_0);
    var tmp_1 = FileRevue$ordreInterne$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_15(tmp_1);
    var tmp_2 = FileRevue$ordreInterne$lambda_1(this_1);
    tmp.p1p_1 = new sam$kotlin_Comparator$0_15(tmp_2);
  }
  protoOf(FileRevue).q1p = function (element, aujourdhui) {
    return new EntreeRevue(element, Priorisation_getInstance().o1w(element.l1n_1, aujourdhui), element.r1n_1, element.i1n_1.q1v() && element.p1n_1 == null);
  };
  var FileRevue_instance;
  function FileRevue_getInstance() {
    if (FileRevue_instance == null)
      new FileRevue();
    return FileRevue_instance;
  }
  function Suivi(elementId, derniereNouvelle) {
    this.w1y_1 = elementId;
    this.x1y_1 = derniereNouvelle;
  }
  protoOf(Suivi).toString = function () {
    return 'Suivi(elementId=' + this.w1y_1.toString() + ', derniereNouvelle=' + this.x1y_1.toString() + ')';
  };
  protoOf(Suivi).hashCode = function () {
    var result = this.w1y_1.hashCode();
    result = imul(result, 31) + this.x1y_1.hashCode() | 0;
    return result;
  };
  protoOf(Suivi).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Suivi))
      return false;
    var tmp0_other_with_cast = other instanceof Suivi ? other : THROW_CCE();
    if (!this.w1y_1.equals(tmp0_other_with_cast.w1y_1))
      return false;
    if (!this.x1y_1.equals(tmp0_other_with_cast.x1y_1))
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
    this.g1q_1 = element;
    this.h1q_1 = motif;
    this.i1q_1 = options;
  }
  protoOf(PropositionRelance).toString = function () {
    return 'PropositionRelance(element=' + this.g1q_1.toString() + ', motif=' + this.h1q_1 + ', options=' + toString_0(this.i1q_1) + ')';
  };
  protoOf(PropositionRelance).hashCode = function () {
    var result = this.g1q_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.h1q_1) | 0;
    result = imul(result, 31) + hashCode(this.i1q_1) | 0;
    return result;
  };
  protoOf(PropositionRelance).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionRelance))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionRelance ? other : THROW_CCE();
    if (!this.g1q_1.equals(tmp0_other_with_cast.g1q_1))
      return false;
    if (!(this.h1q_1 === tmp0_other_with_cast.h1q_1))
      return false;
    if (!equals(this.i1q_1, tmp0_other_with_cast.i1q_1))
      return false;
    return true;
  };
  function engagement($this, element, aujourdhui) {
    var tmp0_elvis_lhs = element.l1n_1;
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
    var tmp1_safe_receiver = element.n1n_1;
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
    var delai = $this.y1y(element.n1n_1, delaisObserves);
    if (silence <= delai)
      return null;
    var tmp0_elvis_lhs = element.n1n_1;
    var qui = tmp0_elvis_lhs == null ? 'cette personne' : tmp0_elvis_lhs;
    var tmp0 = delaisObserves.z1();
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
        var tmp0_elvis_lhs_0 = element.n1n_1;
        if (tmp_0.n1y(element_0, tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0)) {
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
    var tmp0_safe_receiver = it.g1q_1.l1n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return tmp1_elvis_lhs == null ? '9999' : tmp1_elvis_lhs;
  }
  function Relance$aRelancer$lambda_0(it) {
    return it.g1q_1.g1n_1.p1m_1;
  }
  function Relance() {
    this.d1q_1 = 3;
    this.e1q_1 = 7;
  }
  protoOf(Relance).y1y = function (personne, observes) {
    if (personne == null)
      return 7;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = observes.a2();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
      if (Texte_getInstance().n1y(element.u1(), personne)) {
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
      var minValue = minElem.u1();
      do {
        var e = iterator.i();
        // Inline function 'app.zenote.core.revue.Relance.delaiHabituel.<anonymous>' call
        var v = e.u1();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.h());
      tmp$ret$3 = minElem;
    }
    var trouve = tmp$ret$3;
    var tmp1_elvis_lhs = trouve == null ? null : trouve.v1();
    return tmp1_elvis_lhs == null ? 7 : tmp1_elvis_lhs;
  };
  protoOf(Relance).f1q = function (elements, aujourdhui, suivis, delaisObserves) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(suivis, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = suivis.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.w1y_1, element.x1y_1);
      destination.b2(pair.fc_1, pair.gc_1);
    }
    var parElement = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = elements.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      if (element_0.q1n_1.equals(Verdict_ACCEPTE_getInstance())) {
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
      switch (element_1.i1n_1.g2_1) {
        case 1:
          tmp = engagement(Relance_instance, element_1, aujourdhui);
          break;
        case 2:
          var tmp_0 = Relance_instance;
          var tmp1_elvis_lhs = parElement.y1(element_1.g1n_1);
          tmp = attente(tmp_0, element_1, tmp1_elvis_lhs == null ? element_1.l1n_1 : tmp1_elvis_lhs, aujourdhui, delaisObserves);
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
    this.z1y_1 = mot;
    this.a1z_1 = suite;
    var tmp = this;
    // Inline function 'kotlin.text.filter' call
    var tmp0 = Texte_getInstance().l1v(this.z1y_1);
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
          destination.l7(element);
        }
      }
       while (inductionVariable < last);
    tmp.b1z_1 = destination.toString();
    var tmp_0 = this;
    var tmp_1;
    var tmp_2;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.b1z_1;
    if (charSequenceLength(this_0) > 0) {
      var tmp0_safe_receiver = firstOrNull_0(this.z1y_1);
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
      tmp_1 = estAllongementDeBruit(Disfluences_getInstance(), this.b1z_1);
    } else {
      tmp_1 = false;
    }
    tmp_0.c1z_1 = tmp_1;
    var tmp_5 = this;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp0_safe_receiver_0 = firstOrNull_0(this.z1y_1);
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
      var tmp0_0 = this.b1z_1;
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
      tmp_7 = Disfluences_getInstance().d1s_1.r1(this.b1z_1);
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = Disfluences_getInstance().e1s_1.r1(this.b1z_1);
    }
    tmp_5.d1z_1 = tmp_6;
  }
  function estAllongementDeBruit($this, forme) {
    if ($this.c1s_1.r1(forme))
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
      var tmp = lastOrNull_0(this_0);
      if (!equals(tmp == null ? null : new Char(tmp), new Char(element))) {
        this_0.l7(element);
      }
    }
    var ecrasee = this_0.toString();
    return $this.c1s_1.r1(ecrasee);
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
              if (!(jetons.k(it).b1z_1 === jetons.k(it + taille | 0).b1z_1)) {
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
              var this_0 = jetons.k(it_0).b1z_1;
              if (charSequenceLength(this_0) === 0) {
                tmp_3 = true;
              } else {
                tmp_3 = jetons.k(it_0).d1z_1;
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
    return it.z1y_1 + it.a1z_1;
  }
  function Disfluences() {
    Disfluences_instance = this;
    this.c1s_1 = setOf_0(['euh', 'heu', 'eh', 'hum', 'hmm', 'mmh', 'mm', 'hein', 'ben', 'bah', 'beh']);
    this.d1s_1 = setOf_0(['ne', 'n', 'pas', 'non', 'jamais', 'rien', 'aucun', 'aucune', 'ni', 'sans']);
    this.e1s_1 = setOf_0(['zero', 'un', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'cent', 'cents', 'mille', 'million', 'millions', 'milliard', 'milliards', 'demi', 'quart']);
    this.f1s_1 = 3;
  }
  protoOf(Disfluences).g1s = function (brut) {
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
      if (!element.c1z_1) {
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
    this.i1v_1 = '\xE0\xE1\xE2\xE3\xE4\xE5\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF1\xF2\xF3\xF4\xF5\xF6\xF9\xFA\xFB\xFC\xFD\xFF';
    this.j1v_1 = 'aaaaaaceeeeiiiinooooouuuuyy';
    this.k1v_1 = setOf_0(['le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux', 'et', 'ou', 'a', '\xE0', 'en', 'dans', 'sur', 'pour', 'par', 'avec', 'que', 'qui', 'quoi', 'ce', 'cet', 'cette', 'ces', 'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'est', 'sont', 'ai', 'as', 'ont', 'etait', 'ete', 'pas', 'ne', 'plus']);
  }
  protoOf(Texte).l1v = function (texte) {
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
      this_0.l7(i >= 0 ? charSequenceGet('aaaaaaceeeeiiiinooooouuuuyy', i) : element);
    }
    return this_0.toString();
  };
  protoOf(Texte).t1w = function (texte) {
    // Inline function 'kotlin.text.map' call
    var this_0 = this.l1v(texte);
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
      if (element.length > 1 && !Texte_getInstance().k1v_1.r1(element)) {
        destination_0.e(element);
      }
    }
    return destination_0;
  };
  protoOf(Texte).e1z = function (texte) {
    return toSet(this.t1w(texte));
  };
  protoOf(Texte).m1v = function (requete, texte) {
    var demandes = this.e1z(requete);
    if (demandes.j())
      return 0.0;
    var presents = this.e1z(texte);
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
        if (presents.r1(element)) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    return tmp$ret$0 / demandes.l();
  };
  protoOf(Texte).n1y = function (a, b) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(a) ? a : THROW_CCE()));
    var tmp = this.l1v(tmp$ret$0);
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1 = toString_0(trim(isCharSequence(b) ? b : THROW_CCE()));
    return tmp === this.l1v(tmp$ret$1);
  };
  var Texte_instance;
  function Texte_getInstance() {
    if (Texte_instance == null)
      new Texte();
    return Texte_instance;
  }
  function ZeNoteRegles() {
    this.version = '14';
  }
  protoOf(ZeNoteRegles).maintenant = function (elementsJson, aujourdhui) {
    return Regles_getInstance().v1o(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).maintenantAvecContexte = function (elementsJson, contexteJson) {
    return Regles_getInstance().z1o(elementsJson, contexteJson);
  };
  protoOf(ZeNoteRegles).revue = function (elementsJson, aujourdhui) {
    return Regles_getInstance().o1p(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).transcriptionLisible = function (brut) {
    return Regles_getInstance().b1s(brut);
  };
  protoOf(ZeNoteRegles).filtrerAncrage = function (texteSource, elementsJson, passagesIncertainsJson) {
    return Regles_getInstance().h1s(texteSource, elementsJson, passagesIncertainsJson);
  };
  protoOf(ZeNoteRegles).relances = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    return Regles_getInstance().c1q(elementsJson, aujourdhui, suivisJson, delaisJson);
  };
  protoOf(ZeNoteRegles).rechercherParMots = function (requete, elementsJson, capturesJson, reseau) {
    return Regles_getInstance().i1s(requete, elementsJson, capturesJson, reseau);
  };
  protoOf(ZeNoteRegles).rechercherParQuestion = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
    return Regles_getInstance().n1s(requete, elementsJson, capturesJson, aujourdhui, reseau);
  };
  protoOf(ZeNoteRegles).rappels = function (elementsJson, maintenant, suivisJson) {
    return Regles_getInstance().a1s(elementsJson, maintenant, suivisJson);
  };
  protoOf(ZeNoteRegles).rappelsAvecAgenda = function (elementsJson, maintenant, suivisJson, evenementsJson) {
    return Regles_getInstance().j1q(elementsJson, maintenant, suivisJson, evenementsJson);
  };
  protoOf(ZeNoteRegles).momentsDeReunion = function (evenementsJson, maintenant, capturesJson, elementsJson, rattachesJson) {
    return Regles_getInstance().f1u(evenementsJson, maintenant, capturesJson, elementsJson, rattachesJson);
  };
  protoOf(ZeNoteRegles).referencesAResoudre = function (capturesJson, elementsJson, maintenant) {
    return Regles_getInstance().r1s(capturesJson, elementsJson, maintenant);
  };
  protoOf(ZeNoteRegles).aRevoir = function (elementsJson, suivisJson, aujourdhui) {
    return Regles_getInstance().e1t(elementsJson, suivisJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).creneauProtege = function (elementsJson, aujourdhui) {
    return Regles_getInstance().l1t(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).signalCreneau = function (renoncementsDAffilee) {
    return Regles_getInstance().p1t(renoncementsDAffilee);
  };
  protoOf(ZeNoteRegles).fiches = function (capturesJson, elementsJson) {
    return Regles_getInstance().s1t(capturesJson, elementsJson);
  };
  protoOf(ZeNoteRegles).rechercherParPersonne = function (personne, elementsJson, reseau) {
    return Regles_getInstance().p1s(personne, elementsJson, reseau);
  };
  protoOf(ZeNoteRegles).f1z = function () {
    return this.version;
  };
  var ZeNoteRegles_instance;
  function ZeNoteRegles_getInstance() {
    return ZeNoteRegles_instance;
  }
  //region block: post-declaration
  protoOf($serializer).kk = typeParametersSerializers;
  protoOf($serializer_0).kk = typeParametersSerializers;
  protoOf($serializer_1).kk = typeParametersSerializers;
  protoOf($serializer_2).kk = typeParametersSerializers;
  protoOf($serializer_3).kk = typeParametersSerializers;
  protoOf($serializer_4).kk = typeParametersSerializers;
  protoOf($serializer_5).kk = typeParametersSerializers;
  protoOf($serializer_6).kk = typeParametersSerializers;
  protoOf($serializer_7).kk = typeParametersSerializers;
  protoOf($serializer_8).kk = typeParametersSerializers;
  protoOf($serializer_9).kk = typeParametersSerializers;
  protoOf($serializer_10).kk = typeParametersSerializers;
  protoOf($serializer_11).kk = typeParametersSerializers;
  protoOf($serializer_12).kk = typeParametersSerializers;
  protoOf($serializer_13).kk = typeParametersSerializers;
  protoOf($serializer_14).kk = typeParametersSerializers;
  protoOf($serializer_15).kk = typeParametersSerializers;
  protoOf($serializer_16).kk = typeParametersSerializers;
  protoOf($serializer_17).kk = typeParametersSerializers;
  protoOf($serializer_18).kk = typeParametersSerializers;
  protoOf($serializer_19).kk = typeParametersSerializers;
  protoOf($serializer_20).kk = typeParametersSerializers;
  protoOf($serializer_21).kk = typeParametersSerializers;
  protoOf($serializer_22).kk = typeParametersSerializers;
  protoOf($serializer_23).kk = typeParametersSerializers;
  protoOf($serializer_24).kk = typeParametersSerializers;
  protoOf($serializer_25).kk = typeParametersSerializers;
  protoOf($serializer_26).kk = typeParametersSerializers;
  protoOf($serializer_27).kk = typeParametersSerializers;
  protoOf($serializer_28).kk = typeParametersSerializers;
  protoOf($serializer_29).kk = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_6 = new Companion_5();
  Companion_instance_10 = new Companion_9();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_20 = new Companion_19();
  Companion_instance_21 = new Companion_20();
  Companion_instance_22 = new Companion_21();
  Companion_instance_24 = new Companion_23();
  Companion_instance_26 = new Companion_25();
  Companion_instance_28 = new Companion_27();
  Companion_instance_29 = new Companion_28();
  Fiches_instance = new Fiches();
  ResolutionReferences_instance = new ResolutionReferences();
  Companion_instance_31 = new Companion_30();
  CreneauProtege_instance = new CreneauProtege();
  Disponibilites_instance = new Disponibilites();
  Briefings_instance = new Briefings();
  Companion_instance_33 = new Companion_32();
  MomentsReunion_instance = new MomentsReunion();
  ARevoir_instance = new ARevoir();
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

