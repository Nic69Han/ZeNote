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
  var protoOf = kotlin_kotlin.$_$.n5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.y4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.w1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.w7;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var initMetadataForObject = kotlin_kotlin.$_$.c5;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.m5;
  var toString = kotlin_kotlin.$_$.i8;
  var getStringHashCode = kotlin_kotlin.$_$.v4;
  var getNumberHashCode = kotlin_kotlin.$_$.t4;
  var getBooleanHashCode = kotlin_kotlin.$_$.s4;
  var equals = kotlin_kotlin.$_$.q4;
  var initMetadataForClass = kotlin_kotlin.$_$.x4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toString_0 = kotlin_kotlin.$_$.q5;
  var hashCode = kotlin_kotlin.$_$.w4;
  var emptyList = kotlin_kotlin.$_$.p2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.o;
  var until = kotlin_kotlin.$_$.x5;
  var Collection = kotlin_kotlin.$_$.y1;
  var isInterface = kotlin_kotlin.$_$.f5;
  var Companion_instance = kotlin_kotlin.$_$.v1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p1;
  var createFailure = kotlin_kotlin.$_$.a8;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q1;
  var isBlank = kotlin_kotlin.$_$.m6;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r1;
  var listOfNotNull = kotlin_kotlin.$_$.f3;
  var FunctionAdapter = kotlin_kotlin.$_$.g4;
  var Comparator = kotlin_kotlin.$_$.o7;
  var compareValues = kotlin_kotlin.$_$.b4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var compareTo = kotlin_kotlin.$_$.o4;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var mapCapacity = kotlin_kotlin.$_$.i3;
  var coerceAtLeast = kotlin_kotlin.$_$.t5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var getValue = kotlin_kotlin.$_$.u2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var sortedWith = kotlin_kotlin.$_$.v3;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.t1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.s1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.p;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.q;
  var toInstant = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.w;
  var ensureNotNull = kotlin_kotlin.$_$.b8;
  var to = kotlin_kotlin.$_$.j8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.g8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.n;
  var setOf = kotlin_kotlin.$_$.q3;
  var equals_0 = kotlin_kotlin.$_$.i6;
  var Enum = kotlin_kotlin.$_$.r7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var emptySet = kotlin_kotlin.$_$.r2;
  var toList = kotlin_kotlin.$_$.x3;
  var isCharSequence = kotlin_kotlin.$_$.e5;
  var trim = kotlin_kotlin.$_$.j7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.l1;
  var padStart = kotlin_kotlin.$_$.u6;
  var plus = kotlin_kotlin.$_$.n3;
  var KtMap = kotlin_kotlin.$_$.b2;
  var getOrNull = kotlin_kotlin.$_$.t2;
  var _Duration___get_inWholeDays__impl__7bvpxz = kotlin_kotlin.$_$.j1;
  var charSequenceLength = kotlin_kotlin.$_$.m4;
  var charArrayOf = kotlin_kotlin.$_$.j4;
  var split = kotlin_kotlin.$_$.y6;
  var take = kotlin_kotlin.$_$.f7;
  var joinToString = kotlin_kotlin.$_$.y2;
  var firstOrNull = kotlin_kotlin.$_$.s2;
  var THROW_IAE = kotlin_kotlin.$_$.x7;
  var Long = kotlin_kotlin.$_$.u7;
  var toLong = kotlin_kotlin.$_$.p5;
  var compareBy = kotlin_kotlin.$_$.a4;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.r;
  var take_0 = kotlin_kotlin.$_$.w3;
  var LocalTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.l;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.q;
  var LocalDateTime_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.j;
  var contains = kotlin_kotlin.$_$.h6;
  var Companion_getInstance_3 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.m;
  var plus_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.v;
  var toInt = kotlin_kotlin.$_$.i7;
  var LocalDateTime_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.k;
  var single = kotlin_kotlin.$_$.t3;
  var listOf = kotlin_kotlin.$_$.h3;
  var toSet = kotlin_kotlin.$_$.z3;
  var plus_1 = kotlin_kotlin.$_$.m3;
  var listOfNotNull_0 = kotlin_kotlin.$_$.e3;
  var charSequenceGet = kotlin_kotlin.$_$.l4;
  var isLetterOrDigit = kotlin_kotlin.$_$.o6;
  var Char = kotlin_kotlin.$_$.m7;
  var get_isoDayNumber = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.s;
  var DatePeriod_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.h;
  var minus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.t;
  var plus_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.u;
  var LocalDate_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.i;
  var substringAfter = kotlin_kotlin.$_$.d7;
  var split_0 = kotlin_kotlin.$_$.z6;
  var toIntOrNull = kotlin_kotlin.$_$.h7;
  var startsWith = kotlin_kotlin.$_$.a7;
  var minOf = kotlin_kotlin.$_$.c4;
  var DayOfWeek_SATURDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var DayOfWeek_MONDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DayOfWeek_TUESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.f;
  var DayOfWeek_WEDNESDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.g;
  var DayOfWeek_THURSDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var DayOfWeek_FRIDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DayOfWeek_SUNDAY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var mapOf = kotlin_kotlin.$_$.j3;
  var asSequence = kotlin_kotlin.$_$.e2;
  var filter = kotlin_kotlin.$_$.d6;
  var mapNotNull = kotlin_kotlin.$_$.e6;
  var sortedWith_0 = kotlin_kotlin.$_$.f6;
  var toList_0 = kotlin_kotlin.$_$.g6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var firstOrNull_0 = kotlin_kotlin.$_$.j6;
  var isUpperCase = kotlin_kotlin.$_$.p6;
  var isDigit = kotlin_kotlin.$_$.n6;
  var lastOrNull = kotlin_kotlin.$_$.t6;
  var isWhitespace = kotlin_kotlin.$_$.q6;
  var setOf_0 = kotlin_kotlin.$_$.r3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var indexOf = kotlin_kotlin.$_$.l6;
  var checkCountOverflow = kotlin_kotlin.$_$.g2;
  var defineProp = kotlin_kotlin.$_$.p4;
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
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SuiviElementJson, 'SuiviElementJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_19);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ARevoirJson, 'ARevoirJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
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
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(ElementResolu, 'ElementResolu');
  initMetadataForClass(CaptureId, 'CaptureId');
  initMetadataForClass(Passage, 'Passage');
  initMetadataForObject(CreneauProtege, 'CreneauProtege');
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
  initMetadataForCompanion(Companion_21);
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
  initMetadataForClass(MotifRevoir, 'MotifRevoir', VOID, Enum);
  initMetadataForClass(IssueRevoir, 'IssueRevoir', VOID, Enum);
  initMetadataForClass(ElementARevoir, 'ElementARevoir');
  initMetadataForClass(SuiviElement, 'SuiviElement');
  initMetadataForClass(sam$kotlin_Comparator$0_7, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(ARevoir, 'ARevoir');
  initMetadataForClass(RevueReduite, 'RevueReduite');
  initMetadataForClass(sam$kotlin_Comparator$0_8, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Arriere, 'Arriere');
  initMetadataForClass(EntreeRevue, 'EntreeRevue');
  initMetadataForClass(sam$kotlin_Comparator$0_9, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
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
  protoOf(Companion).g1c = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ElementJson', this, 24);
    tmp0_serialDesc.bk('id', false);
    tmp0_serialDesc.bk('captureId', false);
    tmp0_serialDesc.bk('type', false);
    tmp0_serialDesc.bk('texte', false);
    tmp0_serialDesc.bk('debutCar', false);
    tmp0_serialDesc.bk('finCar', false);
    tmp0_serialDesc.bk('debutMs', true);
    tmp0_serialDesc.bk('finMs', true);
    tmp0_serialDesc.bk('echeance', true);
    tmp0_serialDesc.bk('echeanceConfiance', true);
    tmp0_serialDesc.bk('echeanceIndice', true);
    tmp0_serialDesc.bk('horizon', true);
    tmp0_serialDesc.bk('poids', true);
    tmp0_serialDesc.bk('poidsConfiance', true);
    tmp0_serialDesc.bk('poidsIndice', true);
    tmp0_serialDesc.bk('interlocuteur', true);
    tmp0_serialDesc.bk('interlocuteurConfiance', true);
    tmp0_serialDesc.bk('sphere', true);
    tmp0_serialDesc.bk('planDeclencheur', true);
    tmp0_serialDesc.bk('planAction', true);
    tmp0_serialDesc.bk('verdict', true);
    tmp0_serialDesc.bk('corrigeParHumain', true);
    tmp0_serialDesc.bk('transcriptionIncertaine', true);
    tmp0_serialDesc.bk('issuDeReunion', true);
    this.h1c_1 = tmp0_serialDesc;
  }
  protoOf($serializer).i1c = function (encoder, value) {
    var tmp0_desc = this.h1c_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.j1c_1);
    tmp1_output.qg(tmp0_desc, 1, value.k1c_1);
    tmp1_output.qg(tmp0_desc, 2, value.l1c_1);
    tmp1_output.qg(tmp0_desc, 3, value.m1c_1);
    tmp1_output.pg(tmp0_desc, 4, value.n1c_1);
    tmp1_output.pg(tmp0_desc, 5, value.o1c_1);
    if (tmp1_output.xg(tmp0_desc, 6) ? true : !(value.p1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 6, LongSerializer_getInstance(), value.p1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 7) ? true : !(value.q1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 7, LongSerializer_getInstance(), value.q1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 8) ? true : !(value.r1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 8, StringSerializer_getInstance(), value.r1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 9) ? true : !(value.s1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 9, DoubleSerializer_getInstance(), value.s1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 10) ? true : !(value.t1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 10, StringSerializer_getInstance(), value.t1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 11) ? true : !(value.u1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 11, StringSerializer_getInstance(), value.u1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 12) ? true : !(value.v1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 12, StringSerializer_getInstance(), value.v1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 13) ? true : !(value.w1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 13, DoubleSerializer_getInstance(), value.w1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 14) ? true : !(value.x1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 14, StringSerializer_getInstance(), value.x1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 15) ? true : !(value.y1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 15, StringSerializer_getInstance(), value.y1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 16) ? true : !(value.z1c_1 == null)) {
      tmp1_output.tg(tmp0_desc, 16, DoubleSerializer_getInstance(), value.z1c_1);
    }
    if (tmp1_output.xg(tmp0_desc, 17) ? true : !(value.a1d_1 == null)) {
      tmp1_output.tg(tmp0_desc, 17, StringSerializer_getInstance(), value.a1d_1);
    }
    if (tmp1_output.xg(tmp0_desc, 18) ? true : !(value.b1d_1 == null)) {
      tmp1_output.tg(tmp0_desc, 18, StringSerializer_getInstance(), value.b1d_1);
    }
    if (tmp1_output.xg(tmp0_desc, 19) ? true : !(value.c1d_1 == null)) {
      tmp1_output.tg(tmp0_desc, 19, StringSerializer_getInstance(), value.c1d_1);
    }
    if (tmp1_output.xg(tmp0_desc, 20) ? true : !(value.d1d_1 === 'EN_ATTENTE')) {
      tmp1_output.qg(tmp0_desc, 20, value.d1d_1);
    }
    if (tmp1_output.xg(tmp0_desc, 21) ? true : !(value.e1d_1 === false)) {
      tmp1_output.og(tmp0_desc, 21, value.e1d_1);
    }
    if (tmp1_output.xg(tmp0_desc, 22) ? true : !(value.f1d_1 === false)) {
      tmp1_output.og(tmp0_desc, 22, value.f1d_1);
    }
    if (tmp1_output.xg(tmp0_desc, 23) ? true : !(value.g1d_1 === false)) {
      tmp1_output.og(tmp0_desc, 23, value.g1d_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer).ke = function (encoder, value) {
    return this.i1c(encoder, value instanceof ElementJson ? value : THROW_CCE());
  };
  protoOf($serializer).le = function (decoder) {
    var tmp0_desc = this.h1c_1;
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
    var tmp27_local23 = false;
    var tmp28_input = decoder.uf(tmp0_desc);
    if (tmp28_input.dg()) {
      tmp4_local0 = tmp28_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp28_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp28_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp28_input.yf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp28_input.xf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp28_input.xf(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp28_input.bg(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp28_input.bg(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp28_input.bg(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp28_input.bg(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp28_input.bg(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp28_input.bg(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp28_input.bg(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp28_input.bg(tmp0_desc, 13, DoubleSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp28_input.bg(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp28_input.bg(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp28_input.bg(tmp0_desc, 16, DoubleSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp28_input.bg(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp28_input.bg(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp28_input.bg(tmp0_desc, 19, StringSerializer_getInstance(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp28_input.yf(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp28_input.wf(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp26_local22 = tmp28_input.wf(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp27_local23 = tmp28_input.wf(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp28_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp28_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp28_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp28_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp28_input.yf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp28_input.xf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp28_input.xf(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp28_input.bg(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp28_input.bg(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp28_input.bg(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp28_input.bg(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp28_input.bg(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp28_input.bg(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp28_input.bg(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp28_input.bg(tmp0_desc, 13, DoubleSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp28_input.bg(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp28_input.bg(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp28_input.bg(tmp0_desc, 16, DoubleSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp28_input.bg(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp28_input.bg(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp28_input.bg(tmp0_desc, 19, StringSerializer_getInstance(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp28_input.yf(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp28_input.wf(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp26_local22 = tmp28_input.wf(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp27_local23 = tmp28_input.wf(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp28_input.vf(tmp0_desc);
    return ElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, tmp26_local22, tmp27_local23, null);
  };
  protoOf($serializer).je = function () {
    return this.h1c_1;
  };
  protoOf($serializer).dk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance().h1c_1);
    }
    $this.j1c_1 = id;
    $this.k1c_1 = captureId;
    $this.l1c_1 = type;
    $this.m1c_1 = texte;
    $this.n1c_1 = debutCar;
    $this.o1c_1 = finCar;
    if (0 === (seen0 & 64))
      $this.p1c_1 = null;
    else
      $this.p1c_1 = debutMs;
    if (0 === (seen0 & 128))
      $this.q1c_1 = null;
    else
      $this.q1c_1 = finMs;
    if (0 === (seen0 & 256))
      $this.r1c_1 = null;
    else
      $this.r1c_1 = echeance;
    if (0 === (seen0 & 512))
      $this.s1c_1 = null;
    else
      $this.s1c_1 = echeanceConfiance;
    if (0 === (seen0 & 1024))
      $this.t1c_1 = null;
    else
      $this.t1c_1 = echeanceIndice;
    if (0 === (seen0 & 2048))
      $this.u1c_1 = null;
    else
      $this.u1c_1 = horizon;
    if (0 === (seen0 & 4096))
      $this.v1c_1 = null;
    else
      $this.v1c_1 = poids;
    if (0 === (seen0 & 8192))
      $this.w1c_1 = null;
    else
      $this.w1c_1 = poidsConfiance;
    if (0 === (seen0 & 16384))
      $this.x1c_1 = null;
    else
      $this.x1c_1 = poidsIndice;
    if (0 === (seen0 & 32768))
      $this.y1c_1 = null;
    else
      $this.y1c_1 = interlocuteur;
    if (0 === (seen0 & 65536))
      $this.z1c_1 = null;
    else
      $this.z1c_1 = interlocuteurConfiance;
    if (0 === (seen0 & 131072))
      $this.a1d_1 = null;
    else
      $this.a1d_1 = sphere;
    if (0 === (seen0 & 262144))
      $this.b1d_1 = null;
    else
      $this.b1d_1 = planDeclencheur;
    if (0 === (seen0 & 524288))
      $this.c1d_1 = null;
    else
      $this.c1d_1 = planAction;
    if (0 === (seen0 & 1048576))
      $this.d1d_1 = 'EN_ATTENTE';
    else
      $this.d1d_1 = verdict;
    if (0 === (seen0 & 2097152))
      $this.e1d_1 = false;
    else
      $this.e1d_1 = corrigeParHumain;
    if (0 === (seen0 & 4194304))
      $this.f1d_1 = false;
    else
      $this.f1d_1 = transcriptionIncertaine;
    if (0 === (seen0 & 8388608))
      $this.g1d_1 = false;
    else
      $this.g1d_1 = issuDeReunion;
    return $this;
  }
  function ElementJson_init_$Create$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion, serializationConstructorMarker) {
    return ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion, serializationConstructorMarker, objectCreate(protoOf(ElementJson)));
  }
  function ElementJson(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion) {
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
    issuDeReunion = issuDeReunion === VOID ? false : issuDeReunion;
    this.j1c_1 = id;
    this.k1c_1 = captureId;
    this.l1c_1 = type;
    this.m1c_1 = texte;
    this.n1c_1 = debutCar;
    this.o1c_1 = finCar;
    this.p1c_1 = debutMs;
    this.q1c_1 = finMs;
    this.r1c_1 = echeance;
    this.s1c_1 = echeanceConfiance;
    this.t1c_1 = echeanceIndice;
    this.u1c_1 = horizon;
    this.v1c_1 = poids;
    this.w1c_1 = poidsConfiance;
    this.x1c_1 = poidsIndice;
    this.y1c_1 = interlocuteur;
    this.z1c_1 = interlocuteurConfiance;
    this.a1d_1 = sphere;
    this.b1d_1 = planDeclencheur;
    this.c1d_1 = planAction;
    this.d1d_1 = verdict;
    this.e1d_1 = corrigeParHumain;
    this.f1d_1 = transcriptionIncertaine;
    this.g1d_1 = issuDeReunion;
  }
  protoOf(ElementJson).h1d = function (id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion) {
    return new ElementJson(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion);
  };
  protoOf(ElementJson).i1d = function (id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion, $super) {
    id = id === VOID ? this.j1c_1 : id;
    captureId = captureId === VOID ? this.k1c_1 : captureId;
    type = type === VOID ? this.l1c_1 : type;
    texte = texte === VOID ? this.m1c_1 : texte;
    debutCar = debutCar === VOID ? this.n1c_1 : debutCar;
    finCar = finCar === VOID ? this.o1c_1 : finCar;
    debutMs = debutMs === VOID ? this.p1c_1 : debutMs;
    finMs = finMs === VOID ? this.q1c_1 : finMs;
    echeance = echeance === VOID ? this.r1c_1 : echeance;
    echeanceConfiance = echeanceConfiance === VOID ? this.s1c_1 : echeanceConfiance;
    echeanceIndice = echeanceIndice === VOID ? this.t1c_1 : echeanceIndice;
    horizon = horizon === VOID ? this.u1c_1 : horizon;
    poids = poids === VOID ? this.v1c_1 : poids;
    poidsConfiance = poidsConfiance === VOID ? this.w1c_1 : poidsConfiance;
    poidsIndice = poidsIndice === VOID ? this.x1c_1 : poidsIndice;
    interlocuteur = interlocuteur === VOID ? this.y1c_1 : interlocuteur;
    interlocuteurConfiance = interlocuteurConfiance === VOID ? this.z1c_1 : interlocuteurConfiance;
    sphere = sphere === VOID ? this.a1d_1 : sphere;
    planDeclencheur = planDeclencheur === VOID ? this.b1d_1 : planDeclencheur;
    planAction = planAction === VOID ? this.c1d_1 : planAction;
    verdict = verdict === VOID ? this.d1d_1 : verdict;
    corrigeParHumain = corrigeParHumain === VOID ? this.e1d_1 : corrigeParHumain;
    transcriptionIncertaine = transcriptionIncertaine === VOID ? this.f1d_1 : transcriptionIncertaine;
    issuDeReunion = issuDeReunion === VOID ? this.g1d_1 : issuDeReunion;
    return $super === VOID ? this.h1d(id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion) : $super.h1d.call(this, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, horizon, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, transcriptionIncertaine, issuDeReunion);
  };
  protoOf(ElementJson).toString = function () {
    return 'ElementJson(id=' + this.j1c_1 + ', captureId=' + this.k1c_1 + ', type=' + this.l1c_1 + ', texte=' + this.m1c_1 + ', debutCar=' + this.n1c_1 + ', finCar=' + this.o1c_1 + ', debutMs=' + toString(this.p1c_1) + ', finMs=' + toString(this.q1c_1) + ', echeance=' + this.r1c_1 + ', echeanceConfiance=' + this.s1c_1 + ', echeanceIndice=' + this.t1c_1 + ', horizon=' + this.u1c_1 + ', poids=' + this.v1c_1 + ', poidsConfiance=' + this.w1c_1 + ', poidsIndice=' + this.x1c_1 + ', interlocuteur=' + this.y1c_1 + ', interlocuteurConfiance=' + this.z1c_1 + ', sphere=' + this.a1d_1 + ', planDeclencheur=' + this.b1d_1 + ', planAction=' + this.c1d_1 + ', verdict=' + this.d1d_1 + ', corrigeParHumain=' + this.e1d_1 + ', transcriptionIncertaine=' + this.f1d_1 + ', issuDeReunion=' + this.g1d_1 + ')';
  };
  protoOf(ElementJson).hashCode = function () {
    var result = getStringHashCode(this.j1c_1);
    result = imul(result, 31) + getStringHashCode(this.k1c_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l1c_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m1c_1) | 0;
    result = imul(result, 31) + this.n1c_1 | 0;
    result = imul(result, 31) + this.o1c_1 | 0;
    result = imul(result, 31) + (this.p1c_1 == null ? 0 : this.p1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.q1c_1 == null ? 0 : this.q1c_1.hashCode()) | 0;
    result = imul(result, 31) + (this.r1c_1 == null ? 0 : getStringHashCode(this.r1c_1)) | 0;
    result = imul(result, 31) + (this.s1c_1 == null ? 0 : getNumberHashCode(this.s1c_1)) | 0;
    result = imul(result, 31) + (this.t1c_1 == null ? 0 : getStringHashCode(this.t1c_1)) | 0;
    result = imul(result, 31) + (this.u1c_1 == null ? 0 : getStringHashCode(this.u1c_1)) | 0;
    result = imul(result, 31) + (this.v1c_1 == null ? 0 : getStringHashCode(this.v1c_1)) | 0;
    result = imul(result, 31) + (this.w1c_1 == null ? 0 : getNumberHashCode(this.w1c_1)) | 0;
    result = imul(result, 31) + (this.x1c_1 == null ? 0 : getStringHashCode(this.x1c_1)) | 0;
    result = imul(result, 31) + (this.y1c_1 == null ? 0 : getStringHashCode(this.y1c_1)) | 0;
    result = imul(result, 31) + (this.z1c_1 == null ? 0 : getNumberHashCode(this.z1c_1)) | 0;
    result = imul(result, 31) + (this.a1d_1 == null ? 0 : getStringHashCode(this.a1d_1)) | 0;
    result = imul(result, 31) + (this.b1d_1 == null ? 0 : getStringHashCode(this.b1d_1)) | 0;
    result = imul(result, 31) + (this.c1d_1 == null ? 0 : getStringHashCode(this.c1d_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1d_1) | 0;
    return result;
  };
  protoOf(ElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof ElementJson ? other : THROW_CCE();
    if (!(this.j1c_1 === tmp0_other_with_cast.j1c_1))
      return false;
    if (!(this.k1c_1 === tmp0_other_with_cast.k1c_1))
      return false;
    if (!(this.l1c_1 === tmp0_other_with_cast.l1c_1))
      return false;
    if (!(this.m1c_1 === tmp0_other_with_cast.m1c_1))
      return false;
    if (!(this.n1c_1 === tmp0_other_with_cast.n1c_1))
      return false;
    if (!(this.o1c_1 === tmp0_other_with_cast.o1c_1))
      return false;
    if (!equals(this.p1c_1, tmp0_other_with_cast.p1c_1))
      return false;
    if (!equals(this.q1c_1, tmp0_other_with_cast.q1c_1))
      return false;
    if (!(this.r1c_1 == tmp0_other_with_cast.r1c_1))
      return false;
    if (!equals(this.s1c_1, tmp0_other_with_cast.s1c_1))
      return false;
    if (!(this.t1c_1 == tmp0_other_with_cast.t1c_1))
      return false;
    if (!(this.u1c_1 == tmp0_other_with_cast.u1c_1))
      return false;
    if (!(this.v1c_1 == tmp0_other_with_cast.v1c_1))
      return false;
    if (!equals(this.w1c_1, tmp0_other_with_cast.w1c_1))
      return false;
    if (!(this.x1c_1 == tmp0_other_with_cast.x1c_1))
      return false;
    if (!(this.y1c_1 == tmp0_other_with_cast.y1c_1))
      return false;
    if (!equals(this.z1c_1, tmp0_other_with_cast.z1c_1))
      return false;
    if (!(this.a1d_1 == tmp0_other_with_cast.a1d_1))
      return false;
    if (!(this.b1d_1 == tmp0_other_with_cast.b1d_1))
      return false;
    if (!(this.c1d_1 == tmp0_other_with_cast.c1d_1))
      return false;
    if (!(this.d1d_1 === tmp0_other_with_cast.d1d_1))
      return false;
    if (!(this.e1d_1 === tmp0_other_with_cast.e1d_1))
      return false;
    if (!(this.f1d_1 === tmp0_other_with_cast.f1d_1))
      return false;
    if (!(this.g1d_1 === tmp0_other_with_cast.g1d_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).g1c = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PassageIncertainJson', this, 2);
    tmp0_serialDesc.bk('debutCar', false);
    tmp0_serialDesc.bk('finCar', false);
    this.j1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).k1d = function (encoder, value) {
    var tmp0_desc = this.j1d_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.pg(tmp0_desc, 0, value.l1d_1);
    tmp1_output.pg(tmp0_desc, 1, value.m1d_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_0).ke = function (encoder, value) {
    return this.k1d(encoder, value instanceof PassageIncertainJson ? value : THROW_CCE());
  };
  protoOf($serializer_0).le = function (decoder) {
    var tmp0_desc = this.j1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.uf(tmp0_desc);
    if (tmp6_input.dg()) {
      tmp4_local0 = tmp6_input.xf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.xf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.xf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.xf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.vf(tmp0_desc);
    return PassageIncertainJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).je = function () {
    return this.j1d_1;
  };
  protoOf($serializer_0).dk = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().j1d_1);
    }
    $this.l1d_1 = debutCar;
    $this.m1d_1 = finCar;
    return $this;
  }
  function PassageIncertainJson_init_$Create$(seen0, debutCar, finCar, serializationConstructorMarker) {
    return PassageIncertainJson_init_$Init$(seen0, debutCar, finCar, serializationConstructorMarker, objectCreate(protoOf(PassageIncertainJson)));
  }
  function PassageIncertainJson() {
  }
  protoOf(PassageIncertainJson).toString = function () {
    return 'PassageIncertainJson(debutCar=' + this.l1d_1 + ', finCar=' + this.m1d_1 + ')';
  };
  protoOf(PassageIncertainJson).hashCode = function () {
    var result = this.l1d_1;
    result = imul(result, 31) + this.m1d_1 | 0;
    return result;
  };
  protoOf(PassageIncertainJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PassageIncertainJson))
      return false;
    var tmp0_other_with_cast = other instanceof PassageIncertainJson ? other : THROW_CCE();
    if (!(this.l1d_1 === tmp0_other_with_cast.l1d_1))
      return false;
    if (!(this.m1d_1 === tmp0_other_with_cast.m1d_1))
      return false;
    return true;
  };
  function Companion_1() {
  }
  protoOf(Companion_1).g1c = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PropositionJson', this, 5);
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('texte', false);
    tmp0_serialDesc.bk('raison', false);
    tmp0_serialDesc.bk('poidsEffectif', false);
    tmp0_serialDesc.bk('urgence', false);
    this.n1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).o1d = function (encoder, value) {
    var tmp0_desc = this.n1d_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.p1d_1);
    tmp1_output.qg(tmp0_desc, 1, value.q1d_1);
    tmp1_output.qg(tmp0_desc, 2, value.r1d_1);
    tmp1_output.qg(tmp0_desc, 3, value.s1d_1);
    tmp1_output.qg(tmp0_desc, 4, value.t1d_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_1).ke = function (encoder, value) {
    return this.o1d(encoder, value instanceof PropositionJson ? value : THROW_CCE());
  };
  protoOf($serializer_1).le = function (decoder) {
    var tmp0_desc = this.n1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.uf(tmp0_desc);
    if (tmp9_input.dg()) {
      tmp4_local0 = tmp9_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.yf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.yf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.yf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.yf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vf(tmp0_desc);
    return PropositionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_1).je = function () {
    return this.n1d_1;
  };
  protoOf($serializer_1).dk = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_1().n1d_1);
    }
    $this.p1d_1 = elementId;
    $this.q1d_1 = texte;
    $this.r1d_1 = raison;
    $this.s1d_1 = poidsEffectif;
    $this.t1d_1 = urgence;
    return $this;
  }
  function PropositionJson_init_$Create$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker) {
    return PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, objectCreate(protoOf(PropositionJson)));
  }
  function PropositionJson(elementId, texte, raison, poidsEffectif, urgence) {
    this.p1d_1 = elementId;
    this.q1d_1 = texte;
    this.r1d_1 = raison;
    this.s1d_1 = poidsEffectif;
    this.t1d_1 = urgence;
  }
  protoOf(PropositionJson).toString = function () {
    return 'PropositionJson(elementId=' + this.p1d_1 + ', texte=' + this.q1d_1 + ', raison=' + this.r1d_1 + ', poidsEffectif=' + this.s1d_1 + ', urgence=' + this.t1d_1 + ')';
  };
  protoOf(PropositionJson).hashCode = function () {
    var result = getStringHashCode(this.p1d_1);
    result = imul(result, 31) + getStringHashCode(this.q1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t1d_1) | 0;
    return result;
  };
  protoOf(PropositionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionJson))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionJson ? other : THROW_CCE();
    if (!(this.p1d_1 === tmp0_other_with_cast.p1d_1))
      return false;
    if (!(this.q1d_1 === tmp0_other_with_cast.q1d_1))
      return false;
    if (!(this.r1d_1 === tmp0_other_with_cast.r1d_1))
      return false;
    if (!(this.s1d_1 === tmp0_other_with_cast.s1d_1))
      return false;
    if (!(this.t1d_1 === tmp0_other_with_cast.t1d_1))
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
    tmp0_serialDesc.bk('element', false);
    tmp0_serialDesc.bk('aConfirmer', false);
    tmp0_serialDesc.bk('planManquant', false);
    tmp0_serialDesc.bk('urgence', false);
    this.u1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).v1d = function (encoder, value) {
    var tmp0_desc = this.u1d_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.rg(tmp0_desc, 0, $serializer_getInstance(), value.w1d_1);
    tmp1_output.og(tmp0_desc, 1, value.x1d_1);
    tmp1_output.og(tmp0_desc, 2, value.y1d_1);
    tmp1_output.qg(tmp0_desc, 3, value.z1d_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_2).ke = function (encoder, value) {
    return this.v1d(encoder, value instanceof EntreeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_2).le = function (decoder) {
    var tmp0_desc = this.u1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uf(tmp0_desc);
    if (tmp8_input.dg()) {
      tmp4_local0 = tmp8_input.zf(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.wf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.wf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.yf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.zf(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.wf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.wf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.yf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vf(tmp0_desc);
    return EntreeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).je = function () {
    return this.u1d_1;
  };
  protoOf($serializer_2).dk = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().u1d_1);
    }
    $this.w1d_1 = element;
    $this.x1d_1 = aConfirmer;
    $this.y1d_1 = planManquant;
    $this.z1d_1 = urgence;
    return $this;
  }
  function EntreeRevueJson_init_$Create$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker) {
    return EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, objectCreate(protoOf(EntreeRevueJson)));
  }
  function EntreeRevueJson(element, aConfirmer, planManquant, urgence) {
    this.w1d_1 = element;
    this.x1d_1 = aConfirmer;
    this.y1d_1 = planManquant;
    this.z1d_1 = urgence;
  }
  protoOf(EntreeRevueJson).toString = function () {
    return 'EntreeRevueJson(element=' + this.w1d_1.toString() + ', aConfirmer=' + this.x1d_1 + ', planManquant=' + this.y1d_1 + ', urgence=' + this.z1d_1 + ')';
  };
  protoOf(EntreeRevueJson).hashCode = function () {
    var result = this.w1d_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.x1d_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y1d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z1d_1) | 0;
    return result;
  };
  protoOf(EntreeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevueJson ? other : THROW_CCE();
    if (!this.w1d_1.equals(tmp0_other_with_cast.w1d_1))
      return false;
    if (!(this.x1d_1 === tmp0_other_with_cast.x1d_1))
      return false;
    if (!(this.y1d_1 === tmp0_other_with_cast.y1d_1))
      return false;
    if (!(this.z1d_1 === tmp0_other_with_cast.z1d_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a1e_1 = [null, new ArrayListSerializer($serializer_getInstance_2())];
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
    tmp0_serialDesc.bk('captureId', false);
    tmp0_serialDesc.bk('entrees', false);
    this.b1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).c1e = function (encoder, value) {
    var tmp0_desc = this.b1e_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().a1e_1;
    tmp1_output.qg(tmp0_desc, 0, value.d1e_1);
    tmp1_output.rg(tmp0_desc, 1, tmp2_cached[1], value.e1e_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_3).ke = function (encoder, value) {
    return this.c1e(encoder, value instanceof GroupeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_3).le = function (decoder) {
    var tmp0_desc = this.b1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.uf(tmp0_desc);
    var tmp7_cached = Companion_getInstance_8().a1e_1;
    if (tmp6_input.dg()) {
      tmp4_local0 = tmp6_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.zf(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.zf(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.vf(tmp0_desc);
    return GroupeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).je = function () {
    return this.b1e_1;
  };
  protoOf($serializer_3).dk = function () {
    var tmp0_cached = Companion_getInstance_8().a1e_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().b1e_1);
    }
    $this.d1e_1 = captureId;
    $this.e1e_1 = entrees;
    return $this;
  }
  function GroupeRevueJson_init_$Create$(seen0, captureId, entrees, serializationConstructorMarker) {
    return GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, objectCreate(protoOf(GroupeRevueJson)));
  }
  function GroupeRevueJson(captureId, entrees) {
    Companion_getInstance_8();
    this.d1e_1 = captureId;
    this.e1e_1 = entrees;
  }
  protoOf(GroupeRevueJson).toString = function () {
    return 'GroupeRevueJson(captureId=' + this.d1e_1 + ', entrees=' + toString_0(this.e1e_1) + ')';
  };
  protoOf(GroupeRevueJson).hashCode = function () {
    var result = getStringHashCode(this.d1e_1);
    result = imul(result, 31) + hashCode(this.e1e_1) | 0;
    return result;
  };
  protoOf(GroupeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof GroupeRevueJson ? other : THROW_CCE();
    if (!(this.d1e_1 === tmp0_other_with_cast.d1e_1))
      return false;
    if (!equals(this.e1e_1, tmp0_other_with_cast.e1e_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f1e_1 = [null, null, null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_4).g1c = function () {
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
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('texte', false);
    tmp0_serialDesc.bk('type', false);
    tmp0_serialDesc.bk('interlocuteur', true);
    tmp0_serialDesc.bk('echeance', true);
    tmp0_serialDesc.bk('motif', false);
    tmp0_serialDesc.bk('options', false);
    this.g1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).h1e = function (encoder, value) {
    var tmp0_desc = this.g1e_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().f1e_1;
    tmp1_output.qg(tmp0_desc, 0, value.i1e_1);
    tmp1_output.qg(tmp0_desc, 1, value.j1e_1);
    tmp1_output.qg(tmp0_desc, 2, value.k1e_1);
    if (tmp1_output.xg(tmp0_desc, 3) ? true : !(value.l1e_1 == null)) {
      tmp1_output.tg(tmp0_desc, 3, StringSerializer_getInstance(), value.l1e_1);
    }
    if (tmp1_output.xg(tmp0_desc, 4) ? true : !(value.m1e_1 == null)) {
      tmp1_output.tg(tmp0_desc, 4, StringSerializer_getInstance(), value.m1e_1);
    }
    tmp1_output.qg(tmp0_desc, 5, value.n1e_1);
    tmp1_output.rg(tmp0_desc, 6, tmp2_cached[6], value.o1e_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_4).ke = function (encoder, value) {
    return this.h1e(encoder, value instanceof RelanceJson ? value : THROW_CCE());
  };
  protoOf($serializer_4).le = function (decoder) {
    var tmp0_desc = this.g1e_1;
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
    var tmp11_input = decoder.uf(tmp0_desc);
    var tmp12_cached = Companion_getInstance_9().f1e_1;
    if (tmp11_input.dg()) {
      tmp4_local0 = tmp11_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.bg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.bg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.yf(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.zf(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.bg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.bg(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.yf(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.zf(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.vf(tmp0_desc);
    return RelanceJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_4).je = function () {
    return this.g1e_1;
  };
  protoOf($serializer_4).dk = function () {
    var tmp0_cached = Companion_getInstance_9().f1e_1;
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
      throwMissingFieldException(seen0, 103, $serializer_getInstance_4().g1e_1);
    }
    $this.i1e_1 = elementId;
    $this.j1e_1 = texte;
    $this.k1e_1 = type;
    if (0 === (seen0 & 8))
      $this.l1e_1 = null;
    else
      $this.l1e_1 = interlocuteur;
    if (0 === (seen0 & 16))
      $this.m1e_1 = null;
    else
      $this.m1e_1 = echeance;
    $this.n1e_1 = motif;
    $this.o1e_1 = options;
    return $this;
  }
  function RelanceJson_init_$Create$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker) {
    return RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, objectCreate(protoOf(RelanceJson)));
  }
  function RelanceJson(elementId, texte, type, interlocuteur, echeance, motif, options) {
    Companion_getInstance_9();
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    echeance = echeance === VOID ? null : echeance;
    this.i1e_1 = elementId;
    this.j1e_1 = texte;
    this.k1e_1 = type;
    this.l1e_1 = interlocuteur;
    this.m1e_1 = echeance;
    this.n1e_1 = motif;
    this.o1e_1 = options;
  }
  protoOf(RelanceJson).toString = function () {
    return 'RelanceJson(elementId=' + this.i1e_1 + ', texte=' + this.j1e_1 + ', type=' + this.k1e_1 + ', interlocuteur=' + this.l1e_1 + ', echeance=' + this.m1e_1 + ', motif=' + this.n1e_1 + ', options=' + toString_0(this.o1e_1) + ')';
  };
  protoOf(RelanceJson).hashCode = function () {
    var result = getStringHashCode(this.i1e_1);
    result = imul(result, 31) + getStringHashCode(this.j1e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1e_1) | 0;
    result = imul(result, 31) + (this.l1e_1 == null ? 0 : getStringHashCode(this.l1e_1)) | 0;
    result = imul(result, 31) + (this.m1e_1 == null ? 0 : getStringHashCode(this.m1e_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.n1e_1) | 0;
    result = imul(result, 31) + hashCode(this.o1e_1) | 0;
    return result;
  };
  protoOf(RelanceJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelanceJson))
      return false;
    var tmp0_other_with_cast = other instanceof RelanceJson ? other : THROW_CCE();
    if (!(this.i1e_1 === tmp0_other_with_cast.i1e_1))
      return false;
    if (!(this.j1e_1 === tmp0_other_with_cast.j1e_1))
      return false;
    if (!(this.k1e_1 === tmp0_other_with_cast.k1e_1))
      return false;
    if (!(this.l1e_1 == tmp0_other_with_cast.l1e_1))
      return false;
    if (!(this.m1e_1 == tmp0_other_with_cast.m1e_1))
      return false;
    if (!(this.n1e_1 === tmp0_other_with_cast.n1e_1))
      return false;
    if (!equals(this.o1e_1, tmp0_other_with_cast.o1e_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).g1c = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_6;
  function Companion_getInstance_10() {
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviJson', this, 2);
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('derniereNouvelle', false);
    this.p1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).q1e = function (encoder, value) {
    var tmp0_desc = this.p1e_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.r1e_1);
    tmp1_output.qg(tmp0_desc, 1, value.s1e_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_5).ke = function (encoder, value) {
    return this.q1e(encoder, value instanceof SuiviJson ? value : THROW_CCE());
  };
  protoOf($serializer_5).le = function (decoder) {
    var tmp0_desc = this.p1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.uf(tmp0_desc);
    if (tmp6_input.dg()) {
      tmp4_local0 = tmp6_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.vf(tmp0_desc);
    return SuiviJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).je = function () {
    return this.p1e_1;
  };
  protoOf($serializer_5).dk = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().p1e_1);
    }
    $this.r1e_1 = elementId;
    $this.s1e_1 = derniereNouvelle;
    return $this;
  }
  function SuiviJson_init_$Create$(seen0, elementId, derniereNouvelle, serializationConstructorMarker) {
    return SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, objectCreate(protoOf(SuiviJson)));
  }
  function SuiviJson() {
  }
  protoOf(SuiviJson).toString = function () {
    return 'SuiviJson(elementId=' + this.r1e_1 + ', derniereNouvelle=' + this.s1e_1 + ')';
  };
  protoOf(SuiviJson).hashCode = function () {
    var result = getStringHashCode(this.r1e_1);
    result = imul(result, 31) + getStringHashCode(this.s1e_1) | 0;
    return result;
  };
  protoOf(SuiviJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviJson ? other : THROW_CCE();
    if (!(this.r1e_1 === tmp0_other_with_cast.r1e_1))
      return false;
    if (!(this.s1e_1 === tmp0_other_with_cast.s1e_1))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).g1c = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_11() {
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviRappelJson', this, 3);
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('planPoseLe', false);
    tmp0_serialDesc.bk('foisIgnore', true);
    this.t1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).u1e = function (encoder, value) {
    var tmp0_desc = this.t1e_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.v1e_1);
    tmp1_output.qg(tmp0_desc, 1, value.w1e_1);
    if (tmp1_output.xg(tmp0_desc, 2) ? true : !(value.x1e_1 === 0)) {
      tmp1_output.pg(tmp0_desc, 2, value.x1e_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_6).ke = function (encoder, value) {
    return this.u1e(encoder, value instanceof SuiviRappelJson ? value : THROW_CCE());
  };
  protoOf($serializer_6).le = function (decoder) {
    var tmp0_desc = this.t1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.uf(tmp0_desc);
    if (tmp7_input.dg()) {
      tmp4_local0 = tmp7_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.xf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.xf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vf(tmp0_desc);
    return SuiviRappelJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).je = function () {
    return this.t1e_1;
  };
  protoOf($serializer_6).dk = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().t1e_1);
    }
    $this.v1e_1 = elementId;
    $this.w1e_1 = planPoseLe;
    if (0 === (seen0 & 4))
      $this.x1e_1 = 0;
    else
      $this.x1e_1 = foisIgnore;
    return $this;
  }
  function SuiviRappelJson_init_$Create$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker) {
    return SuiviRappelJson_init_$Init$(seen0, elementId, planPoseLe, foisIgnore, serializationConstructorMarker, objectCreate(protoOf(SuiviRappelJson)));
  }
  function SuiviRappelJson() {
  }
  protoOf(SuiviRappelJson).toString = function () {
    return 'SuiviRappelJson(elementId=' + this.v1e_1 + ', planPoseLe=' + this.w1e_1 + ', foisIgnore=' + this.x1e_1 + ')';
  };
  protoOf(SuiviRappelJson).hashCode = function () {
    var result = getStringHashCode(this.v1e_1);
    result = imul(result, 31) + getStringHashCode(this.w1e_1) | 0;
    result = imul(result, 31) + this.x1e_1 | 0;
    return result;
  };
  protoOf(SuiviRappelJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviRappelJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviRappelJson ? other : THROW_CCE();
    if (!(this.v1e_1 === tmp0_other_with_cast.v1e_1))
      return false;
    if (!(this.w1e_1 === tmp0_other_with_cast.w1e_1))
      return false;
    if (!(this.x1e_1 === tmp0_other_with_cast.x1e_1))
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
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('texte', false);
    tmp0_serialDesc.bk('declencheur', false);
    tmp0_serialDesc.bk('substitution', true);
    tmp0_serialDesc.bk('enRetard', true);
    this.y1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).z1e = function (encoder, value) {
    var tmp0_desc = this.y1e_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.a1f_1);
    tmp1_output.qg(tmp0_desc, 1, value.b1f_1);
    tmp1_output.qg(tmp0_desc, 2, value.c1f_1);
    if (tmp1_output.xg(tmp0_desc, 3) ? true : !(value.d1f_1 === '')) {
      tmp1_output.qg(tmp0_desc, 3, value.d1f_1);
    }
    if (tmp1_output.xg(tmp0_desc, 4) ? true : !(value.e1f_1 === false)) {
      tmp1_output.og(tmp0_desc, 4, value.e1f_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_7).ke = function (encoder, value) {
    return this.z1e(encoder, value instanceof RappelLivreJson ? value : THROW_CCE());
  };
  protoOf($serializer_7).le = function (decoder) {
    var tmp0_desc = this.y1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.uf(tmp0_desc);
    if (tmp9_input.dg()) {
      tmp4_local0 = tmp9_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.yf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.wf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.yf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.wf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vf(tmp0_desc);
    return RappelLivreJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_7).je = function () {
    return this.y1e_1;
  };
  protoOf($serializer_7).dk = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_7().y1e_1);
    }
    $this.a1f_1 = elementId;
    $this.b1f_1 = texte;
    $this.c1f_1 = declencheur;
    if (0 === (seen0 & 8))
      $this.d1f_1 = '';
    else
      $this.d1f_1 = substitution;
    if (0 === (seen0 & 16))
      $this.e1f_1 = false;
    else
      $this.e1f_1 = enRetard;
    return $this;
  }
  function RappelLivreJson_init_$Create$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker) {
    return RappelLivreJson_init_$Init$(seen0, elementId, texte, declencheur, substitution, enRetard, serializationConstructorMarker, objectCreate(protoOf(RappelLivreJson)));
  }
  function RappelLivreJson(elementId, texte, declencheur, substitution, enRetard) {
    substitution = substitution === VOID ? '' : substitution;
    enRetard = enRetard === VOID ? false : enRetard;
    this.a1f_1 = elementId;
    this.b1f_1 = texte;
    this.c1f_1 = declencheur;
    this.d1f_1 = substitution;
    this.e1f_1 = enRetard;
  }
  protoOf(RappelLivreJson).toString = function () {
    return 'RappelLivreJson(elementId=' + this.a1f_1 + ', texte=' + this.b1f_1 + ', declencheur=' + this.c1f_1 + ', substitution=' + this.d1f_1 + ', enRetard=' + this.e1f_1 + ')';
  };
  protoOf(RappelLivreJson).hashCode = function () {
    var result = getStringHashCode(this.a1f_1);
    result = imul(result, 31) + getStringHashCode(this.b1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d1f_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.e1f_1) | 0;
    return result;
  };
  protoOf(RappelLivreJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelLivreJson))
      return false;
    var tmp0_other_with_cast = other instanceof RappelLivreJson ? other : THROW_CCE();
    if (!(this.a1f_1 === tmp0_other_with_cast.a1f_1))
      return false;
    if (!(this.b1f_1 === tmp0_other_with_cast.b1f_1))
      return false;
    if (!(this.c1f_1 === tmp0_other_with_cast.c1f_1))
      return false;
    if (!(this.d1f_1 === tmp0_other_with_cast.d1f_1))
      return false;
    if (!(this.e1f_1 === tmp0_other_with_cast.e1f_1))
      return false;
    return true;
  };
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f1f_1 = [null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
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
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('texte', false);
    tmp0_serialDesc.bk('motif', false);
    tmp0_serialDesc.bk('options', false);
    this.g1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).h1f = function (encoder, value) {
    var tmp0_desc = this.g1f_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().f1f_1;
    tmp1_output.qg(tmp0_desc, 0, value.i1f_1);
    tmp1_output.qg(tmp0_desc, 1, value.j1f_1);
    tmp1_output.qg(tmp0_desc, 2, value.k1f_1);
    tmp1_output.rg(tmp0_desc, 3, tmp2_cached[3], value.l1f_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_8).ke = function (encoder, value) {
    return this.h1f(encoder, value instanceof EscaladeJson ? value : THROW_CCE());
  };
  protoOf($serializer_8).le = function (decoder) {
    var tmp0_desc = this.g1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uf(tmp0_desc);
    var tmp9_cached = Companion_getInstance_13().f1f_1;
    if (tmp8_input.dg()) {
      tmp4_local0 = tmp8_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.zf(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.zf(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vf(tmp0_desc);
    return EscaladeJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).je = function () {
    return this.g1f_1;
  };
  protoOf($serializer_8).dk = function () {
    var tmp0_cached = Companion_getInstance_13().f1f_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().g1f_1);
    }
    $this.i1f_1 = elementId;
    $this.j1f_1 = texte;
    $this.k1f_1 = motif;
    $this.l1f_1 = options;
    return $this;
  }
  function EscaladeJson_init_$Create$(seen0, elementId, texte, motif, options, serializationConstructorMarker) {
    return EscaladeJson_init_$Init$(seen0, elementId, texte, motif, options, serializationConstructorMarker, objectCreate(protoOf(EscaladeJson)));
  }
  function EscaladeJson(elementId, texte, motif, options) {
    Companion_getInstance_13();
    this.i1f_1 = elementId;
    this.j1f_1 = texte;
    this.k1f_1 = motif;
    this.l1f_1 = options;
  }
  protoOf(EscaladeJson).toString = function () {
    return 'EscaladeJson(elementId=' + this.i1f_1 + ', texte=' + this.j1f_1 + ', motif=' + this.k1f_1 + ', options=' + toString_0(this.l1f_1) + ')';
  };
  protoOf(EscaladeJson).hashCode = function () {
    var result = getStringHashCode(this.i1f_1);
    result = imul(result, 31) + getStringHashCode(this.j1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1f_1) | 0;
    result = imul(result, 31) + hashCode(this.l1f_1) | 0;
    return result;
  };
  protoOf(EscaladeJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EscaladeJson))
      return false;
    var tmp0_other_with_cast = other instanceof EscaladeJson ? other : THROW_CCE();
    if (!(this.i1f_1 === tmp0_other_with_cast.i1f_1))
      return false;
    if (!(this.j1f_1 === tmp0_other_with_cast.j1f_1))
      return false;
    if (!(this.k1f_1 === tmp0_other_with_cast.k1f_1))
      return false;
    if (!equals(this.l1f_1, tmp0_other_with_cast.l1f_1))
      return false;
    return true;
  };
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m1f_1 = [null, new ArrayListSerializer($serializer_getInstance_7()), new ArrayListSerializer($serializer_getInstance_8())];
  }
  protoOf(Companion_9).g1c = function () {
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
    tmp0_serialDesc.bk('titre', true);
    tmp0_serialDesc.bk('rappels', true);
    tmp0_serialDesc.bk('escalades', true);
    this.n1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).o1f = function (encoder, value) {
    var tmp0_desc = this.n1f_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().m1f_1;
    if (tmp1_output.xg(tmp0_desc, 0) ? true : !(value.p1f_1 === '')) {
      tmp1_output.qg(tmp0_desc, 0, value.p1f_1);
    }
    if (tmp1_output.xg(tmp0_desc, 1) ? true : !equals(value.q1f_1, emptyList())) {
      tmp1_output.rg(tmp0_desc, 1, tmp2_cached[1], value.q1f_1);
    }
    if (tmp1_output.xg(tmp0_desc, 2) ? true : !equals(value.r1f_1, emptyList())) {
      tmp1_output.rg(tmp0_desc, 2, tmp2_cached[2], value.r1f_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_9).ke = function (encoder, value) {
    return this.o1f(encoder, value instanceof RappelsDuMomentJson ? value : THROW_CCE());
  };
  protoOf($serializer_9).le = function (decoder) {
    var tmp0_desc = this.n1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uf(tmp0_desc);
    var tmp8_cached = Companion_getInstance_14().m1f_1;
    if (tmp7_input.dg()) {
      tmp4_local0 = tmp7_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.zf(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.zf(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.zf(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.zf(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vf(tmp0_desc);
    return RappelsDuMomentJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_9).je = function () {
    return this.n1f_1;
  };
  protoOf($serializer_9).dk = function () {
    var tmp0_cached = Companion_getInstance_14().m1f_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().n1f_1);
    }
    if (0 === (seen0 & 1))
      $this.p1f_1 = '';
    else
      $this.p1f_1 = titre;
    if (0 === (seen0 & 2))
      $this.q1f_1 = emptyList();
    else
      $this.q1f_1 = rappels;
    if (0 === (seen0 & 4))
      $this.r1f_1 = emptyList();
    else
      $this.r1f_1 = escalades;
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
    this.p1f_1 = titre;
    this.q1f_1 = rappels;
    this.r1f_1 = escalades;
  }
  protoOf(RappelsDuMomentJson).toString = function () {
    return 'RappelsDuMomentJson(titre=' + this.p1f_1 + ', rappels=' + toString_0(this.q1f_1) + ', escalades=' + toString_0(this.r1f_1) + ')';
  };
  protoOf(RappelsDuMomentJson).hashCode = function () {
    var result = getStringHashCode(this.p1f_1);
    result = imul(result, 31) + hashCode(this.q1f_1) | 0;
    result = imul(result, 31) + hashCode(this.r1f_1) | 0;
    return result;
  };
  protoOf(RappelsDuMomentJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelsDuMomentJson))
      return false;
    var tmp0_other_with_cast = other instanceof RappelsDuMomentJson ? other : THROW_CCE();
    if (!(this.p1f_1 === tmp0_other_with_cast.p1f_1))
      return false;
    if (!equals(this.q1f_1, tmp0_other_with_cast.q1f_1))
      return false;
    if (!equals(this.r1f_1, tmp0_other_with_cast.r1f_1))
      return false;
    return true;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1f_1 = [new ArrayListSerializer($serializer_getInstance_3()), null, null, null, null];
  }
  protoOf(Companion_10).g1c = function () {
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
    tmp0_serialDesc.bk('groupes', false);
    tmp0_serialDesc.bk('total', false);
    tmp0_serialDesc.bk('reduite', true);
    tmp0_serialDesc.bk('motifReduction', true);
    tmp0_serialDesc.bk('demeurentEnFile', true);
    this.t1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).u1f = function (encoder, value) {
    var tmp0_desc = this.t1f_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().s1f_1;
    tmp1_output.rg(tmp0_desc, 0, tmp2_cached[0], value.v1f_1);
    tmp1_output.pg(tmp0_desc, 1, value.w1f_1);
    if (tmp1_output.xg(tmp0_desc, 2) ? true : !(value.x1f_1 === false)) {
      tmp1_output.og(tmp0_desc, 2, value.x1f_1);
    }
    if (tmp1_output.xg(tmp0_desc, 3) ? true : !(value.y1f_1 === '')) {
      tmp1_output.qg(tmp0_desc, 3, value.y1f_1);
    }
    if (tmp1_output.xg(tmp0_desc, 4) ? true : !(value.z1f_1 === 0)) {
      tmp1_output.pg(tmp0_desc, 4, value.z1f_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_10).ke = function (encoder, value) {
    return this.u1f(encoder, value instanceof RevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_10).le = function (decoder) {
    var tmp0_desc = this.t1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.uf(tmp0_desc);
    var tmp10_cached = Companion_getInstance_15().s1f_1;
    if (tmp9_input.dg()) {
      tmp4_local0 = tmp9_input.zf(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.xf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.wf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.yf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.xf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.zf(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.xf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.wf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.yf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.xf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vf(tmp0_desc);
    return RevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_10).je = function () {
    return this.t1f_1;
  };
  protoOf($serializer_10).dk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_15().s1f_1[0], IntSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().t1f_1);
    }
    $this.v1f_1 = groupes;
    $this.w1f_1 = total;
    if (0 === (seen0 & 4))
      $this.x1f_1 = false;
    else
      $this.x1f_1 = reduite;
    if (0 === (seen0 & 8))
      $this.y1f_1 = '';
    else
      $this.y1f_1 = motifReduction;
    if (0 === (seen0 & 16))
      $this.z1f_1 = 0;
    else
      $this.z1f_1 = demeurentEnFile;
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
    this.v1f_1 = groupes;
    this.w1f_1 = total;
    this.x1f_1 = reduite;
    this.y1f_1 = motifReduction;
    this.z1f_1 = demeurentEnFile;
  }
  protoOf(RevueJson).toString = function () {
    return 'RevueJson(groupes=' + toString_0(this.v1f_1) + ', total=' + this.w1f_1 + ', reduite=' + this.x1f_1 + ', motifReduction=' + this.y1f_1 + ', demeurentEnFile=' + this.z1f_1 + ')';
  };
  protoOf(RevueJson).hashCode = function () {
    var result = hashCode(this.v1f_1);
    result = imul(result, 31) + this.w1f_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.x1f_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1f_1) | 0;
    result = imul(result, 31) + this.z1f_1 | 0;
    return result;
  };
  protoOf(RevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof RevueJson ? other : THROW_CCE();
    if (!equals(this.v1f_1, tmp0_other_with_cast.v1f_1))
      return false;
    if (!(this.w1f_1 === tmp0_other_with_cast.w1f_1))
      return false;
    if (!(this.x1f_1 === tmp0_other_with_cast.x1f_1))
      return false;
    if (!(this.y1f_1 === tmp0_other_with_cast.y1f_1))
      return false;
    if (!(this.z1f_1 === tmp0_other_with_cast.z1f_1))
      return false;
    return true;
  };
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a1g_1 = [new ArrayListSerializer($serializer_getInstance()), new ArrayListSerializer($serializer_getInstance_12())];
  }
  protoOf(Companion_11).g1c = function () {
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
    tmp0_serialDesc.bk('retenus', false);
    tmp0_serialDesc.bk('ecartes', false);
    this.b1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).c1g = function (encoder, value) {
    var tmp0_desc = this.b1g_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().a1g_1;
    tmp1_output.rg(tmp0_desc, 0, tmp2_cached[0], value.d1g_1);
    tmp1_output.rg(tmp0_desc, 1, tmp2_cached[1], value.e1g_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_11).ke = function (encoder, value) {
    return this.c1g(encoder, value instanceof AncrageJson ? value : THROW_CCE());
  };
  protoOf($serializer_11).le = function (decoder) {
    var tmp0_desc = this.b1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.uf(tmp0_desc);
    var tmp7_cached = Companion_getInstance_16().a1g_1;
    if (tmp6_input.dg()) {
      tmp4_local0 = tmp6_input.zf(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.zf(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.zf(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.zf(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.vf(tmp0_desc);
    return AncrageJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).je = function () {
    return this.b1g_1;
  };
  protoOf($serializer_11).dk = function () {
    var tmp0_cached = Companion_getInstance_16().a1g_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().b1g_1);
    }
    $this.d1g_1 = retenus;
    $this.e1g_1 = ecartes;
    return $this;
  }
  function AncrageJson_init_$Create$(seen0, retenus, ecartes, serializationConstructorMarker) {
    return AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, objectCreate(protoOf(AncrageJson)));
  }
  function AncrageJson(retenus, ecartes) {
    Companion_getInstance_16();
    this.d1g_1 = retenus;
    this.e1g_1 = ecartes;
  }
  protoOf(AncrageJson).toString = function () {
    return 'AncrageJson(retenus=' + toString_0(this.d1g_1) + ', ecartes=' + toString_0(this.e1g_1) + ')';
  };
  protoOf(AncrageJson).hashCode = function () {
    var result = hashCode(this.d1g_1);
    result = imul(result, 31) + hashCode(this.e1g_1) | 0;
    return result;
  };
  protoOf(AncrageJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AncrageJson))
      return false;
    var tmp0_other_with_cast = other instanceof AncrageJson ? other : THROW_CCE();
    if (!equals(this.d1g_1, tmp0_other_with_cast.d1g_1))
      return false;
    if (!equals(this.e1g_1, tmp0_other_with_cast.e1g_1))
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
    tmp0_serialDesc.bk('texte', false);
    tmp0_serialDesc.bk('raison', false);
    this.f1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).g1g = function (encoder, value) {
    var tmp0_desc = this.f1g_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.h1g_1);
    tmp1_output.qg(tmp0_desc, 1, value.i1g_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_12).ke = function (encoder, value) {
    return this.g1g(encoder, value instanceof EcarteJson ? value : THROW_CCE());
  };
  protoOf($serializer_12).le = function (decoder) {
    var tmp0_desc = this.f1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.uf(tmp0_desc);
    if (tmp6_input.dg()) {
      tmp4_local0 = tmp6_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.vf(tmp0_desc);
    return EcarteJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_12).je = function () {
    return this.f1g_1;
  };
  protoOf($serializer_12).dk = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_12().f1g_1);
    }
    $this.h1g_1 = texte;
    $this.i1g_1 = raison;
    return $this;
  }
  function EcarteJson_init_$Create$(seen0, texte, raison, serializationConstructorMarker) {
    return EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, objectCreate(protoOf(EcarteJson)));
  }
  function EcarteJson(texte, raison) {
    this.h1g_1 = texte;
    this.i1g_1 = raison;
  }
  protoOf(EcarteJson).toString = function () {
    return 'EcarteJson(texte=' + this.h1g_1 + ', raison=' + this.i1g_1 + ')';
  };
  protoOf(EcarteJson).hashCode = function () {
    var result = getStringHashCode(this.h1g_1);
    result = imul(result, 31) + getStringHashCode(this.i1g_1) | 0;
    return result;
  };
  protoOf(EcarteJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EcarteJson))
      return false;
    var tmp0_other_with_cast = other instanceof EcarteJson ? other : THROW_CCE();
    if (!(this.h1g_1 === tmp0_other_with_cast.h1g_1))
      return false;
    if (!(this.i1g_1 === tmp0_other_with_cast.i1g_1))
      return false;
    return true;
  };
  function Companion_13() {
  }
  protoOf(Companion_13).g1c = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_14;
  function Companion_getInstance_18() {
    return Companion_instance_14;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CaptureJson', this, 4);
    tmp0_serialDesc.bk('id', false);
    tmp0_serialDesc.bk('texte', false);
    tmp0_serialDesc.bk('creeLe', false);
    tmp0_serialDesc.bk('jour', true);
    this.j1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).k1g = function (encoder, value) {
    var tmp0_desc = this.j1g_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.l1g_1);
    tmp1_output.qg(tmp0_desc, 1, value.m1g_1);
    tmp1_output.qg(tmp0_desc, 2, value.n1g_1);
    if (tmp1_output.xg(tmp0_desc, 3) ? true : !(value.o1g_1 == null)) {
      tmp1_output.tg(tmp0_desc, 3, StringSerializer_getInstance(), value.o1g_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_13).ke = function (encoder, value) {
    return this.k1g(encoder, value instanceof CaptureJson ? value : THROW_CCE());
  };
  protoOf($serializer_13).le = function (decoder) {
    var tmp0_desc = this.j1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uf(tmp0_desc);
    if (tmp8_input.dg()) {
      tmp4_local0 = tmp8_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.bg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.bg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vf(tmp0_desc);
    return CaptureJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_13).je = function () {
    return this.j1g_1;
  };
  protoOf($serializer_13).dk = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_13().j1g_1);
    }
    $this.l1g_1 = id;
    $this.m1g_1 = texte;
    $this.n1g_1 = creeLe;
    if (0 === (seen0 & 8))
      $this.o1g_1 = null;
    else
      $this.o1g_1 = jour;
    return $this;
  }
  function CaptureJson_init_$Create$(seen0, id, texte, creeLe, jour, serializationConstructorMarker) {
    return CaptureJson_init_$Init$(seen0, id, texte, creeLe, jour, serializationConstructorMarker, objectCreate(protoOf(CaptureJson)));
  }
  function CaptureJson() {
  }
  protoOf(CaptureJson).toString = function () {
    return 'CaptureJson(id=' + this.l1g_1 + ', texte=' + this.m1g_1 + ', creeLe=' + this.n1g_1 + ', jour=' + this.o1g_1 + ')';
  };
  protoOf(CaptureJson).hashCode = function () {
    var result = getStringHashCode(this.l1g_1);
    result = imul(result, 31) + getStringHashCode(this.m1g_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n1g_1) | 0;
    result = imul(result, 31) + (this.o1g_1 == null ? 0 : getStringHashCode(this.o1g_1)) | 0;
    return result;
  };
  protoOf(CaptureJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureJson))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureJson ? other : THROW_CCE();
    if (!(this.l1g_1 === tmp0_other_with_cast.l1g_1))
      return false;
    if (!(this.m1g_1 === tmp0_other_with_cast.m1g_1))
      return false;
    if (!(this.n1g_1 === tmp0_other_with_cast.n1g_1))
      return false;
    if (!(this.o1g_1 == tmp0_other_with_cast.o1g_1))
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
    tmp0_serialDesc.bk('captureId', false);
    tmp0_serialDesc.bk('extrait', false);
    tmp0_serialDesc.bk('pourquoi', false);
    tmp0_serialDesc.bk('elementId', true);
    this.p1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).q1g = function (encoder, value) {
    var tmp0_desc = this.p1g_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.r1g_1);
    tmp1_output.qg(tmp0_desc, 1, value.s1g_1);
    tmp1_output.qg(tmp0_desc, 2, value.t1g_1);
    if (tmp1_output.xg(tmp0_desc, 3) ? true : !(value.u1g_1 == null)) {
      tmp1_output.tg(tmp0_desc, 3, StringSerializer_getInstance(), value.u1g_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_14).ke = function (encoder, value) {
    return this.q1g(encoder, value instanceof CitationJson ? value : THROW_CCE());
  };
  protoOf($serializer_14).le = function (decoder) {
    var tmp0_desc = this.p1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uf(tmp0_desc);
    if (tmp8_input.dg()) {
      tmp4_local0 = tmp8_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.bg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.bg(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vf(tmp0_desc);
    return CitationJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_14).je = function () {
    return this.p1g_1;
  };
  protoOf($serializer_14).dk = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_14().p1g_1);
    }
    $this.r1g_1 = captureId;
    $this.s1g_1 = extrait;
    $this.t1g_1 = pourquoi;
    if (0 === (seen0 & 8))
      $this.u1g_1 = null;
    else
      $this.u1g_1 = elementId;
    return $this;
  }
  function CitationJson_init_$Create$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker) {
    return CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, objectCreate(protoOf(CitationJson)));
  }
  function CitationJson(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.r1g_1 = captureId;
    this.s1g_1 = extrait;
    this.t1g_1 = pourquoi;
    this.u1g_1 = elementId;
  }
  protoOf(CitationJson).toString = function () {
    return 'CitationJson(captureId=' + this.r1g_1 + ', extrait=' + this.s1g_1 + ', pourquoi=' + this.t1g_1 + ', elementId=' + this.u1g_1 + ')';
  };
  protoOf(CitationJson).hashCode = function () {
    var result = getStringHashCode(this.r1g_1);
    result = imul(result, 31) + getStringHashCode(this.s1g_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t1g_1) | 0;
    result = imul(result, 31) + (this.u1g_1 == null ? 0 : getStringHashCode(this.u1g_1)) | 0;
    return result;
  };
  protoOf(CitationJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CitationJson))
      return false;
    var tmp0_other_with_cast = other instanceof CitationJson ? other : THROW_CCE();
    if (!(this.r1g_1 === tmp0_other_with_cast.r1g_1))
      return false;
    if (!(this.s1g_1 === tmp0_other_with_cast.s1g_1))
      return false;
    if (!(this.t1g_1 === tmp0_other_with_cast.t1g_1))
      return false;
    if (!(this.u1g_1 == tmp0_other_with_cast.u1g_1))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1g_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_14()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_15).g1c = function () {
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
    tmp0_serialDesc.bk('question', false);
    tmp0_serialDesc.bk('enonce', false);
    tmp0_serialDesc.bk('fondee', false);
    tmp0_serialDesc.bk('citations', false);
    tmp0_serialDesc.bk('indisponibleHorsLigne', true);
    tmp0_serialDesc.bk('nonPrisEnCompte', true);
    this.w1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).x1g = function (encoder, value) {
    var tmp0_desc = this.w1g_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().v1g_1;
    tmp1_output.qg(tmp0_desc, 0, value.y1g_1);
    tmp1_output.qg(tmp0_desc, 1, value.z1g_1);
    tmp1_output.og(tmp0_desc, 2, value.a1h_1);
    tmp1_output.rg(tmp0_desc, 3, tmp2_cached[3], value.b1h_1);
    if (tmp1_output.xg(tmp0_desc, 4) ? true : !equals(value.c1h_1, emptyList())) {
      tmp1_output.rg(tmp0_desc, 4, tmp2_cached[4], value.c1h_1);
    }
    if (tmp1_output.xg(tmp0_desc, 5) ? true : !equals(value.d1h_1, emptyList())) {
      tmp1_output.rg(tmp0_desc, 5, tmp2_cached[5], value.d1h_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_15).ke = function (encoder, value) {
    return this.x1g(encoder, value instanceof ReponseJson ? value : THROW_CCE());
  };
  protoOf($serializer_15).le = function (decoder) {
    var tmp0_desc = this.w1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.uf(tmp0_desc);
    var tmp11_cached = Companion_getInstance_20().v1g_1;
    if (tmp10_input.dg()) {
      tmp4_local0 = tmp10_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.wf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.zf(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.zf(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.zf(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.wf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.zf(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.zf(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.zf(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.vf(tmp0_desc);
    return ReponseJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_15).je = function () {
    return this.w1g_1;
  };
  protoOf($serializer_15).dk = function () {
    var tmp0_cached = Companion_getInstance_20().v1g_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_15().w1g_1);
    }
    $this.y1g_1 = question;
    $this.z1g_1 = enonce;
    $this.a1h_1 = fondee;
    $this.b1h_1 = citations;
    if (0 === (seen0 & 16))
      $this.c1h_1 = emptyList();
    else
      $this.c1h_1 = indisponibleHorsLigne;
    if (0 === (seen0 & 32))
      $this.d1h_1 = emptyList();
    else
      $this.d1h_1 = nonPrisEnCompte;
    return $this;
  }
  function ReponseJson_init_$Create$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker) {
    return ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte, serializationConstructorMarker, objectCreate(protoOf(ReponseJson)));
  }
  function ReponseJson(question, enonce, fondee, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    Companion_getInstance_20();
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.y1g_1 = question;
    this.z1g_1 = enonce;
    this.a1h_1 = fondee;
    this.b1h_1 = citations;
    this.c1h_1 = indisponibleHorsLigne;
    this.d1h_1 = nonPrisEnCompte;
  }
  protoOf(ReponseJson).toString = function () {
    return 'ReponseJson(question=' + this.y1g_1 + ', enonce=' + this.z1g_1 + ', fondee=' + this.a1h_1 + ', citations=' + toString_0(this.b1h_1) + ', indisponibleHorsLigne=' + toString_0(this.c1h_1) + ', nonPrisEnCompte=' + toString_0(this.d1h_1) + ')';
  };
  protoOf(ReponseJson).hashCode = function () {
    var result = getStringHashCode(this.y1g_1);
    result = imul(result, 31) + getStringHashCode(this.z1g_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.a1h_1) | 0;
    result = imul(result, 31) + hashCode(this.b1h_1) | 0;
    result = imul(result, 31) + hashCode(this.c1h_1) | 0;
    result = imul(result, 31) + hashCode(this.d1h_1) | 0;
    return result;
  };
  protoOf(ReponseJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReponseJson))
      return false;
    var tmp0_other_with_cast = other instanceof ReponseJson ? other : THROW_CCE();
    if (!(this.y1g_1 === tmp0_other_with_cast.y1g_1))
      return false;
    if (!(this.z1g_1 === tmp0_other_with_cast.z1g_1))
      return false;
    if (!(this.a1h_1 === tmp0_other_with_cast.a1h_1))
      return false;
    if (!equals(this.b1h_1, tmp0_other_with_cast.b1h_1))
      return false;
    if (!equals(this.c1h_1, tmp0_other_with_cast.c1h_1))
      return false;
    if (!equals(this.d1h_1, tmp0_other_with_cast.d1h_1))
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
    tmp0_serialDesc.bk('entiteId', false);
    tmp0_serialDesc.bk('nom', false);
    tmp0_serialDesc.bk('appui', false);
    this.e1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).f1h = function (encoder, value) {
    var tmp0_desc = this.e1h_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.g1h_1);
    tmp1_output.qg(tmp0_desc, 1, value.h1h_1);
    tmp1_output.qg(tmp0_desc, 2, value.i1h_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_16).ke = function (encoder, value) {
    return this.f1h(encoder, value instanceof CandidatJson ? value : THROW_CCE());
  };
  protoOf($serializer_16).le = function (decoder) {
    var tmp0_desc = this.e1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uf(tmp0_desc);
    if (tmp7_input.dg()) {
      tmp4_local0 = tmp7_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vf(tmp0_desc);
    return CandidatJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_16).je = function () {
    return this.e1h_1;
  };
  protoOf($serializer_16).dk = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_16().e1h_1);
    }
    $this.g1h_1 = entiteId;
    $this.h1h_1 = nom;
    $this.i1h_1 = appui;
    return $this;
  }
  function CandidatJson_init_$Create$(seen0, entiteId, nom, appui, serializationConstructorMarker) {
    return CandidatJson_init_$Init$(seen0, entiteId, nom, appui, serializationConstructorMarker, objectCreate(protoOf(CandidatJson)));
  }
  function CandidatJson(entiteId, nom, appui) {
    this.g1h_1 = entiteId;
    this.h1h_1 = nom;
    this.i1h_1 = appui;
  }
  protoOf(CandidatJson).toString = function () {
    return 'CandidatJson(entiteId=' + this.g1h_1 + ', nom=' + this.h1h_1 + ', appui=' + this.i1h_1 + ')';
  };
  protoOf(CandidatJson).hashCode = function () {
    var result = getStringHashCode(this.g1h_1);
    result = imul(result, 31) + getStringHashCode(this.h1h_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i1h_1) | 0;
    return result;
  };
  protoOf(CandidatJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CandidatJson))
      return false;
    var tmp0_other_with_cast = other instanceof CandidatJson ? other : THROW_CCE();
    if (!(this.g1h_1 === tmp0_other_with_cast.g1h_1))
      return false;
    if (!(this.h1h_1 === tmp0_other_with_cast.h1h_1))
      return false;
    if (!(this.i1h_1 === tmp0_other_with_cast.i1h_1))
      return false;
    return true;
  };
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j1h_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_16()), null];
  }
  protoOf(Companion_17).g1c = function () {
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
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('reference', false);
    tmp0_serialDesc.bk('retenu', true);
    tmp0_serialDesc.bk('candidats', true);
    tmp0_serialDesc.bk('aQuestionner', true);
    this.k1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).l1h = function (encoder, value) {
    var tmp0_desc = this.k1h_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().j1h_1;
    tmp1_output.qg(tmp0_desc, 0, value.m1h_1);
    tmp1_output.qg(tmp0_desc, 1, value.n1h_1);
    if (tmp1_output.xg(tmp0_desc, 2) ? true : !(value.o1h_1 == null)) {
      tmp1_output.tg(tmp0_desc, 2, $serializer_getInstance_16(), value.o1h_1);
    }
    if (tmp1_output.xg(tmp0_desc, 3) ? true : !equals(value.p1h_1, emptyList())) {
      tmp1_output.rg(tmp0_desc, 3, tmp2_cached[3], value.p1h_1);
    }
    if (tmp1_output.xg(tmp0_desc, 4) ? true : !(value.q1h_1 === false)) {
      tmp1_output.og(tmp0_desc, 4, value.q1h_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_17).ke = function (encoder, value) {
    return this.l1h(encoder, value instanceof ResolutionJson ? value : THROW_CCE());
  };
  protoOf($serializer_17).le = function (decoder) {
    var tmp0_desc = this.k1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.uf(tmp0_desc);
    var tmp10_cached = Companion_getInstance_22().j1h_1;
    if (tmp9_input.dg()) {
      tmp4_local0 = tmp9_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.bg(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.zf(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.wf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.bg(tmp0_desc, 2, $serializer_getInstance_16(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.zf(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.wf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vf(tmp0_desc);
    return ResolutionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_17).je = function () {
    return this.k1h_1;
  };
  protoOf($serializer_17).dk = function () {
    var tmp0_cached = Companion_getInstance_22().j1h_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_17().k1h_1);
    }
    $this.m1h_1 = elementId;
    $this.n1h_1 = reference;
    if (0 === (seen0 & 4))
      $this.o1h_1 = null;
    else
      $this.o1h_1 = retenu;
    if (0 === (seen0 & 8))
      $this.p1h_1 = emptyList();
    else
      $this.p1h_1 = candidats;
    if (0 === (seen0 & 16))
      $this.q1h_1 = false;
    else
      $this.q1h_1 = aQuestionner;
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
    this.m1h_1 = elementId;
    this.n1h_1 = reference;
    this.o1h_1 = retenu;
    this.p1h_1 = candidats;
    this.q1h_1 = aQuestionner;
  }
  protoOf(ResolutionJson).toString = function () {
    return 'ResolutionJson(elementId=' + this.m1h_1 + ', reference=' + this.n1h_1 + ', retenu=' + toString(this.o1h_1) + ', candidats=' + toString_0(this.p1h_1) + ', aQuestionner=' + this.q1h_1 + ')';
  };
  protoOf(ResolutionJson).hashCode = function () {
    var result = getStringHashCode(this.m1h_1);
    result = imul(result, 31) + getStringHashCode(this.n1h_1) | 0;
    result = imul(result, 31) + (this.o1h_1 == null ? 0 : this.o1h_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.p1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1h_1) | 0;
    return result;
  };
  protoOf(ResolutionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResolutionJson))
      return false;
    var tmp0_other_with_cast = other instanceof ResolutionJson ? other : THROW_CCE();
    if (!(this.m1h_1 === tmp0_other_with_cast.m1h_1))
      return false;
    if (!(this.n1h_1 === tmp0_other_with_cast.n1h_1))
      return false;
    if (!equals(this.o1h_1, tmp0_other_with_cast.o1h_1))
      return false;
    if (!equals(this.p1h_1, tmp0_other_with_cast.p1h_1))
      return false;
    if (!(this.q1h_1 === tmp0_other_with_cast.q1h_1))
      return false;
    return true;
  };
  function Companion_18() {
  }
  protoOf(Companion_18).g1c = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_19;
  function Companion_getInstance_23() {
    return Companion_instance_19;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviElementJson', this, 3);
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('ecarteFois', true);
    tmp0_serialDesc.bk('vuLe', true);
    this.r1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).s1h = function (encoder, value) {
    var tmp0_desc = this.r1h_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    tmp1_output.qg(tmp0_desc, 0, value.t1h_1);
    if (tmp1_output.xg(tmp0_desc, 1) ? true : !(value.u1h_1 === 0)) {
      tmp1_output.pg(tmp0_desc, 1, value.u1h_1);
    }
    if (tmp1_output.xg(tmp0_desc, 2) ? true : !(value.v1h_1 == null)) {
      tmp1_output.tg(tmp0_desc, 2, StringSerializer_getInstance(), value.v1h_1);
    }
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_18).ke = function (encoder, value) {
    return this.s1h(encoder, value instanceof SuiviElementJson ? value : THROW_CCE());
  };
  protoOf($serializer_18).le = function (decoder) {
    var tmp0_desc = this.r1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uf(tmp0_desc);
    if (tmp7_input.dg()) {
      tmp4_local0 = tmp7_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.xf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.bg(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.xf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.bg(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vf(tmp0_desc);
    return SuiviElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_18).je = function () {
    return this.r1h_1;
  };
  protoOf($serializer_18).dk = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function SuiviElementJson_init_$Init$(seen0, elementId, ecarteFois, vuLe, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_18().r1h_1);
    }
    $this.t1h_1 = elementId;
    if (0 === (seen0 & 2))
      $this.u1h_1 = 0;
    else
      $this.u1h_1 = ecarteFois;
    if (0 === (seen0 & 4))
      $this.v1h_1 = null;
    else
      $this.v1h_1 = vuLe;
    return $this;
  }
  function SuiviElementJson_init_$Create$(seen0, elementId, ecarteFois, vuLe, serializationConstructorMarker) {
    return SuiviElementJson_init_$Init$(seen0, elementId, ecarteFois, vuLe, serializationConstructorMarker, objectCreate(protoOf(SuiviElementJson)));
  }
  function SuiviElementJson() {
  }
  protoOf(SuiviElementJson).toString = function () {
    return 'SuiviElementJson(elementId=' + this.t1h_1 + ', ecarteFois=' + this.u1h_1 + ', vuLe=' + this.v1h_1 + ')';
  };
  protoOf(SuiviElementJson).hashCode = function () {
    var result = getStringHashCode(this.t1h_1);
    result = imul(result, 31) + this.u1h_1 | 0;
    result = imul(result, 31) + (this.v1h_1 == null ? 0 : getStringHashCode(this.v1h_1)) | 0;
    return result;
  };
  protoOf(SuiviElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviElementJson ? other : THROW_CCE();
    if (!(this.t1h_1 === tmp0_other_with_cast.t1h_1))
      return false;
    if (!(this.u1h_1 === tmp0_other_with_cast.u1h_1))
      return false;
    if (!(this.v1h_1 == tmp0_other_with_cast.v1h_1))
      return false;
    return true;
  };
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w1h_1 = [null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_19).g1c = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_20;
  function Companion_getInstance_24() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ARevoirJson', this, 5);
    tmp0_serialDesc.bk('elementId', false);
    tmp0_serialDesc.bk('texte', false);
    tmp0_serialDesc.bk('motif', false);
    tmp0_serialDesc.bk('explication', false);
    tmp0_serialDesc.bk('issues', false);
    this.x1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).y1h = function (encoder, value) {
    var tmp0_desc = this.x1h_1;
    var tmp1_output = encoder.uf(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().w1h_1;
    tmp1_output.qg(tmp0_desc, 0, value.z1h_1);
    tmp1_output.qg(tmp0_desc, 1, value.a1i_1);
    tmp1_output.qg(tmp0_desc, 2, value.b1i_1);
    tmp1_output.qg(tmp0_desc, 3, value.c1i_1);
    tmp1_output.rg(tmp0_desc, 4, tmp2_cached[4], value.d1i_1);
    tmp1_output.vf(tmp0_desc);
  };
  protoOf($serializer_19).ke = function (encoder, value) {
    return this.y1h(encoder, value instanceof ARevoirJson ? value : THROW_CCE());
  };
  protoOf($serializer_19).le = function (decoder) {
    var tmp0_desc = this.x1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.uf(tmp0_desc);
    var tmp10_cached = Companion_getInstance_24().w1h_1;
    if (tmp9_input.dg()) {
      tmp4_local0 = tmp9_input.yf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.yf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.yf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.yf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.zf(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.eg(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.yf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.yf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.yf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.yf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.zf(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vf(tmp0_desc);
    return ARevoirJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_19).je = function () {
    return this.x1h_1;
  };
  protoOf($serializer_19).dk = function () {
    var tmp0_cached = Companion_getInstance_24().w1h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[4]];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function ARevoirJson_init_$Init$(seen0, elementId, texte, motif, explication, issues, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_19().x1h_1);
    }
    $this.z1h_1 = elementId;
    $this.a1i_1 = texte;
    $this.b1i_1 = motif;
    $this.c1i_1 = explication;
    $this.d1i_1 = issues;
    return $this;
  }
  function ARevoirJson_init_$Create$(seen0, elementId, texte, motif, explication, issues, serializationConstructorMarker) {
    return ARevoirJson_init_$Init$(seen0, elementId, texte, motif, explication, issues, serializationConstructorMarker, objectCreate(protoOf(ARevoirJson)));
  }
  function ARevoirJson(elementId, texte, motif, explication, issues) {
    Companion_getInstance_24();
    this.z1h_1 = elementId;
    this.a1i_1 = texte;
    this.b1i_1 = motif;
    this.c1i_1 = explication;
    this.d1i_1 = issues;
  }
  protoOf(ARevoirJson).toString = function () {
    return 'ARevoirJson(elementId=' + this.z1h_1 + ', texte=' + this.a1i_1 + ', motif=' + this.b1i_1 + ', explication=' + this.c1i_1 + ', issues=' + toString_0(this.d1i_1) + ')';
  };
  protoOf(ARevoirJson).hashCode = function () {
    var result = getStringHashCode(this.z1h_1);
    result = imul(result, 31) + getStringHashCode(this.a1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c1i_1) | 0;
    result = imul(result, 31) + hashCode(this.d1i_1) | 0;
    return result;
  };
  protoOf(ARevoirJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ARevoirJson))
      return false;
    var tmp0_other_with_cast = other instanceof ARevoirJson ? other : THROW_CCE();
    if (!(this.z1h_1 === tmp0_other_with_cast.z1h_1))
      return false;
    if (!(this.a1i_1 === tmp0_other_with_cast.a1i_1))
      return false;
    if (!(this.b1i_1 === tmp0_other_with_cast.b1i_1))
      return false;
    if (!(this.c1i_1 === tmp0_other_with_cast.c1i_1))
      return false;
    if (!equals(this.d1i_1, tmp0_other_with_cast.d1i_1))
      return false;
    return true;
  };
  function sources($this, capturesJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.e1i_1.s12(ListSerializer(Companion_instance_14.g1c()), capturesJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.sources.<anonymous>' call
      var tmp = new CaptureId(item.l1g_1);
      var tmp0_safe_receiver = item.o1g_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp1_let_receiver = Companion_getInstance();
        // Inline function 'kotlin.let' call
        tmp_0 = sources$parse(tmp1_let_receiver, tmp0_safe_receiver);
      }
      var tmp$ret$1 = new TexteSource(tmp, item.m1g_1, item.n1g_1, tmp_0);
      destination.e(tmp$ret$1);
    }
    return destination;
  }
  function versCandidat($this, candidat) {
    return new CandidatJson(candidat.m1i_1.g1i_1.f1i_1, candidat.m1i_1.i1i_1, candidat.s1i_1);
  }
  function rendre($this, reponse) {
    var tmp = Companion_getInstance_20().g1c();
    var tmp_0 = reponse.y1i();
    // Inline function 'kotlin.collections.map' call
    var this_0 = reponse.v1i_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rendre.<anonymous>' call
      var tmp0_safe_receiver = item.c1j_1;
      var tmp$ret$0 = new CitationJson(item.z1i_1.d1j_1, item.a1j_1, item.b1j_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1j_1);
      destination.e(tmp$ret$0);
    }
    return $this.e1i_1.r12(tmp, new ReponseJson(reponse.t1i_1, reponse.u1i_1, tmp_0, destination, reponse.w1i_1, reponse.x1i_1));
  }
  function decoder($this, elementsJson) {
    return $this.e1i_1.s12(ListSerializer(Companion_instance_0.g1c()), elementsJson);
  }
  function neVientQueDIncertain($this, dto, incertains) {
    if (incertains.j() || dto.o1c_1 <= dto.n1c_1)
      return false;
    var tmp0 = until(dto.n1c_1, dto.o1c_1);
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
              if (position >= element_0.l1d_1 && position < element_0.m1d_1) {
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
    if (isBlank(dto.m1c_1)) {
      tmp = '\xE9l\xE9ment sans texte';
    } else {
      if (dto.n1c_1 < 0 || dto.o1c_1 <= dto.n1c_1) {
        tmp = 'passage source vide ou incoh\xE9rent';
      } else {
        if (dto.o1c_1 > texteSource.length) {
          tmp = 'passage source absent du texte de la capture';
        } else {
          // Inline function 'kotlin.runCatching' call
          var tmp_0;
          try {
            // Inline function 'app.zenote.core.api.Regles.raisonDeRejet.<anonymous>' call
            // Inline function 'kotlin.Companion.success' call
            var value = valueOf(dto.l1c_1);
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
            tmp = 'type inconnu : ' + dto.l1c_1;
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
    if (_this__u8e3s4.f1d_1 || _this__u8e3s4.g1d_1) {
      tmp = true;
    } else {
      var tmp0 = listOfNotNull([_this__u8e3s4.s1c_1, _this__u8e3s4.w1c_1, _this__u8e3s4.z1c_1]);
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
    var tmp = new CaptureId(_this__u8e3s4.k1c_1);
    var tmp_0 = valueOf(_this__u8e3s4.l1c_1);
    var tmp_1 = new Passage(_this__u8e3s4.n1c_1, _this__u8e3s4.o1c_1, _this__u8e3s4.p1c_1, _this__u8e3s4.q1c_1);
    var tmp0_safe_receiver = _this__u8e3s4.r1c_1;
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_3 = Companion_getInstance().w11(tmp0_safe_receiver);
      var tmp0_elvis_lhs = _this__u8e3s4.s1c_1;
      var tmp_4 = tmp0_elvis_lhs == null ? 1.0 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.t1c_1;
      tmp_2 = new Deduit(tmp_3, tmp_4, tmp1_elvis_lhs == null ? 'fourni' : tmp1_elvis_lhs);
    }
    var tmp_5 = tmp_2;
    var tmp1_safe_receiver = _this__u8e3s4.v1c_1;
    var tmp_6;
    if (tmp1_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_7 = valueOf_0(tmp1_safe_receiver);
      var tmp0_elvis_lhs_0 = _this__u8e3s4.w1c_1;
      var tmp_8 = tmp0_elvis_lhs_0 == null ? 1.0 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs_0 = _this__u8e3s4.x1c_1;
      tmp_6 = new Deduit(tmp_7, tmp_8, tmp1_elvis_lhs_0 == null ? 'fourni' : tmp1_elvis_lhs_0);
    }
    var tmp_9 = tmp_6;
    var tmp2_safe_receiver = _this__u8e3s4.y1c_1;
    var tmp_10;
    if (tmp2_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4.z1c_1;
      tmp_10 = new Deduit(tmp2_safe_receiver, tmp0_elvis_lhs_1 == null ? 1.0 : tmp0_elvis_lhs_1, 'nomm\xE9');
    }
    var tmp_11 = tmp_10;
    var tmp3_safe_receiver = _this__u8e3s4.a1d_1;
    var tmp_12;
    if (tmp3_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      tmp_12 = new Deduit(valueOf_1(tmp3_safe_receiver), 1.0, 'd\xE9duit');
    }
    var tmp_13 = tmp_12;
    var tmp4_safe_receiver = _this__u8e3s4.b1d_1;
    var tmp_14;
    if (tmp4_safe_receiver == null) {
      tmp_14 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.c1d_1;
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
    var derive = new ElementDerive(tmp, tmp_0, _this__u8e3s4.m1c_1, tmp_1, tmp_5, tmp_9, tmp_11, tmp_13, tmp_14);
    var tmp_16 = new ElementId(_this__u8e3s4.j1c_1);
    var tmp5_safe_receiver = derive.j1j_1;
    var tmp_17 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.p1j_1;
    var tmp6_safe_receiver = derive.k1j_1;
    var tmp_18 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.p1j_1;
    var tmp7_safe_receiver = derive.l1j_1;
    var tmp_19 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.p1j_1;
    var tmp8_safe_receiver = derive.m1j_1;
    var tmp_20 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.p1j_1;
    var tmp9_safe_receiver = derive.n1j_1;
    return new ElementResolu(tmp_16, derive.f1j_1, derive.g1j_1, derive.h1j_1, derive.i1j_1, tmp_17, tmp_18, tmp_19, tmp_20, tmp9_safe_receiver == null ? null : tmp9_safe_receiver.p1j_1, valueOf_2(_this__u8e3s4.d1d_1), aConfirmer(_this__u8e3s4, $this), _this__u8e3s4.e1d_1, _this__u8e3s4.e1d_1 && !(_this__u8e3s4.v1c_1 == null) ? 'poids fix\xE9 \xE0 la main' : _this__u8e3s4.x1c_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.s1j_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).tc = function (a, b) {
    return this.s1j_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).y2 = function () {
    return this.s1j_1;
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
    this.t1j_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).tc = function (a, b) {
    return this.t1j_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).y2 = function () {
    return this.t1j_1;
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
    this.u1j_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).tc = function (a, b) {
    return this.u1j_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).y2 = function () {
    return this.u1j_1;
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
  function sources$parse(receiver, p0) {
    return receiver.w11(p0);
  }
  function aRevoir$parse(receiver, p0) {
    return receiver.w11(p0);
  }
  function Regles$json$lambda($this$Json) {
    $this$Json.k13_1 = true;
    $this$Json.i13_1 = true;
    return Unit_instance;
  }
  function Regles$revue$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp = urgenceOrdinale(Regles_getInstance(), a.z1d_1);
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp$ret$1 = urgenceOrdinale(Regles_getInstance(), b.z1d_1);
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
        var tmp_0 = b.x1d_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = a.x1d_1;
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
        var tmp_0 = a.w1d_1.j1c_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = b.w1d_1.j1c_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = a.e1e_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it = iterator.i();
    var minValue = urgenceOrdinale(Regles_getInstance(), it.z1d_1);
    while (iterator.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_0 = iterator.i();
      var v = urgenceOrdinale(Regles_getInstance(), it_0.z1d_1);
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var tmp = minValue;
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator_0 = b.e1e_1.g();
    if (!iterator_0.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it_1 = iterator_0.i();
    var minValue_0 = urgenceOrdinale(Regles_getInstance(), it_1.z1d_1);
    while (iterator_0.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.i();
      var v_0 = urgenceOrdinale(Regles_getInstance(), it_2.z1d_1);
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
        var tmp_0 = a.d1e_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp$ret$1 = b.d1e_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$rappels$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
    var tmp = a.v1j_1.e1j_1;
    // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
    var tmp$ret$1 = b.v1j_1.e1j_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles$referencesAResoudre$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
    var tmp = a.j1c_1;
    // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
    var tmp$ret$1 = b.j1c_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Regles() {
    Regles_instance = this;
    var tmp = this;
    tmp.e1i_1 = Json(VOID, Regles$json$lambda);
  }
  protoOf(Regles).j1k = function (elementsJson, aujourdhui) {
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
    var this_0 = tmp.m1k(destination, new ContexteMaintenant(Companion_getInstance().w11(aujourdhui)));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$3 = new PropositionJson(item_0.n1k_1.v1j_1.e1j_1, item_0.n1k_1.y1j_1, item_0.o1k_1, item_0.p1k_1.f2_1, item_0.q1k_1.f2_1);
      destination_0.e(tmp$ret$3);
    }
    var propositions = destination_0;
    return this.e1i_1.r12(ListSerializer(Companion_instance_2.g1c()), propositions);
  };
  protoOf(Regles).r1k = function (elementsJson, aujourdhui) {
    var date = Companion_getInstance().w11(aujourdhui);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      if (element.d1d_1 === 'EN_ATTENTE') {
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
      var tmp$ret$3 = element_0.j1c_1;
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
      var tmp$ret$6 = FileRevue_getInstance().t1k(versResolu(item, Regles_getInstance()), date);
      destination_1.e(tmp$ret$6);
    }
    var entrees = destination_1;
    var reduction = Arriere_instance.v1k(entrees);
    // Inline function 'kotlin.collections.map' call
    var this_0 = reduction.w1k_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_2 = this_0.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var dto = getValue(parId, item_0.d1l().e1j_1);
      var tmp$ret$9 = new EntreeRevueJson(dto, item_0.b1l_1, item_0.c1l_1, item_0.a1l_1.f2_1);
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
      var key = element_1.w1d_1.k1c_1;
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
    return this.e1i_1.r12(Companion_getInstance_15().g1c(), new RevueJson(groupes, entrees.l(), reduction.e1l(), reduction.e1l() ? reduction.y1k_1 : '', reduction.x1k_1.l()));
  };
  protoOf(Regles).f1l = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.e1i_1.s12(ListSerializer(Companion_instance_6.g1c()), suivisJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp$ret$0 = new Suivi(new ElementId(item.r1e_1), Companion_getInstance().w11(item.s1e_1));
      destination.e(tmp$ret$0);
    }
    var suivis = destination;
    var delais = this.e1i_1.s12(MapSerializer(serializer(StringCompanionObject_instance), serializer_0(IntCompanionObject_instance)), delaisJson);
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
    var this_2 = tmp.i1l(destination_0, Companion_getInstance().w11(aujourdhui), suivis, delais);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_1 = this_2.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp0_safe_receiver = item_1.j1l_1.a1k_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      // Inline function 'kotlin.collections.map' call
      var this_3 = item_1.l1l_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var _iterator__ex2g4s_2 = this_3.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>.<anonymous>' call
        var tmp$ret$6 = item_2.f2_1;
        destination_2.e(tmp$ret$6);
      }
      var tmp$ret$9 = new RelanceJson(item_1.j1l_1.v1j_1.e1j_1, item_1.j1l_1.y1j_1, item_1.j1l_1.x1j_1.f2_1, item_1.j1l_1.c1k_1, tmp_0, item_1.k1l_1, destination_2);
      destination_1.e(tmp$ret$9);
    }
    var propositions = destination_1;
    return this.e1i_1.r12(ListSerializer(Companion_getInstance_9().g1c()), propositions);
  };
  protoOf(Regles).m1l = function (elementsJson, maintenant, suivisJson) {
    var instant = Companion_getInstance_0().c12(maintenant);
    var a = toInstant(instant, Companion_getInstance_1().j12_1);
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.e1i_1.s12(ListSerializer(Companion_instance_7.g1c()), suivisJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$0 = element.v1e_1;
      destination.b2(tmp$ret$0, element);
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
      if (element_0.f1k_1.equals(Verdict_ACCEPTE_getInstance()) && !(element_0.e1k_1 == null)) {
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
      var tmp_0 = new RappelId(item_0.v1j_1.e1j_1);
      // Inline function 'kotlin.text.ifBlank' call
      var this_2 = ensureNotNull(item_0.e1k_1).o1l_1;
      var tmp_1;
      if (isBlank(this_2)) {
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>.<anonymous>' call
        tmp_1 = item_0.y1j_1;
      } else {
        tmp_1 = this_2;
      }
      var tmp$ret$12 = tmp_1;
      var tmp$ret$13 = to(item_0, new Rappel(tmp_0, item_0.v1j_1, tmp$ret$12, new Transition(PointDeRupture_REPRISE_APPAREIL_getInstance())));
      destination_2.e(tmp$ret$13);
    }
    var rappels = destination_2;
    var _iterator__ex2g4s_3 = rappels.g();
    while (_iterator__ex2g4s_3.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s_3.i();
      var element_1 = _destruct__k2r9zo.bc();
      var rappel = _destruct__k2r9zo.cc();
      var tmp0_safe_receiver = suivis.y1(element_1.v1j_1.e1j_1);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1e_1;
      // Inline function 'kotlin.repeat' call
      var times = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
          file.t1l(rappel);
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
      var element_2 = _destruct__k2r9zo_0.bc();
      var rappel_0 = _destruct__k2r9zo_0.cc();
      var tmp2_elvis_lhs = suivis.y1(element_2.v1j_1.e1j_1);
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var suivi = tmp_2;
      var echeance = Echeancier_getInstance().y1l(ensureNotNull(element_2.e1k_1).n1l_1, Companion_getInstance_0().c12(suivi.w1e_1));
      if (!Echeancier_getInstance().z1l(echeance, instant))
        continue $l$loop_0;
      if (echeance instanceof Substituee) {
        var tmp14 = element_2.v1j_1.e1j_1;
        // Inline function 'kotlin.collections.set' call
        var value = echeance.b1m_1;
        substitutions.b2(tmp14, value);
      } else {
        if (echeance instanceof Observable) {
          if (echeance.a1m_1.f12(instant) < 0) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_3 = element_2.v1j_1.e1j_1;
            retards.e(element_3);
          }
        } else {
          noWhenBranchMatchedException();
        }
      }
      file.c1m(rappel_0, a);
    }
    var notification = file.d1m(PointDeRupture_REPRISE_APPAREIL_getInstance(), a);
    // Inline function 'kotlin.collections.associateBy' call
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(candidats, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination_3 = LinkedHashMap_init_$Create$(capacity_0);
    var _iterator__ex2g4s_5 = candidats.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_4 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp$ret$18 = element_4.v1j_1.e1j_1;
      destination_3.b2(tmp$ret$18, element_4);
    }
    var parId = destination_3;
    var tmp_3 = Companion_getInstance_14().g1c();
    var tmp5_elvis_lhs = notification == null ? null : notification.i1m();
    var tmp_4 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = notification == null ? null : notification.g1m_1;
    // Inline function 'kotlin.collections.map' call
    var this_3 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var _iterator__ex2g4s_6 = this_3.g();
    while (_iterator__ex2g4s_6.h()) {
      var item_1 = _iterator__ex2g4s_6.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      var tmp0_safe_receiver_0 = parId.y1(item_1.k1m_1.e1j_1);
      var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.e1k_1;
      var tmp2_elvis_lhs_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n1l_1;
      var tmp_5 = tmp2_elvis_lhs_0 == null ? '' : tmp2_elvis_lhs_0;
      var tmp3_elvis_lhs = substitutions.y1(item_1.k1m_1.e1j_1);
      var tmp$ret$22 = new RappelLivreJson(item_1.k1m_1.e1j_1, item_1.l1m_1, tmp_5, tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs, retards.r1(item_1.k1m_1.e1j_1));
      destination_4.e(tmp$ret$22);
    }
    var tmp_6 = destination_4;
    // Inline function 'kotlin.collections.map' call
    var this_4 = file.o1m();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
    var _iterator__ex2g4s_7 = this_4.g();
    while (_iterator__ex2g4s_7.h()) {
      var item_2 = _iterator__ex2g4s_7.i();
      // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_5 = item_2.r1m_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_6 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
      var _iterator__ex2g4s_8 = this_5.g();
      while (_iterator__ex2g4s_8.h()) {
        var item_3 = _iterator__ex2g4s_8.i();
        // Inline function 'app.zenote.core.api.Regles.rappels.<anonymous>.<anonymous>' call
        var tmp$ret$25 = item_3.f2_1;
        destination_6.e(tmp$ret$25);
      }
      var tmp$ret$28 = new EscaladeJson(item_2.p1m_1.k1m_1.e1j_1, item_2.p1m_1.l1m_1, item_2.q1m_1, destination_6);
      destination_5.e(tmp$ret$28);
    }
    return this.e1i_1.r12(tmp_3, new RappelsDuMomentJson(tmp_4, tmp_6, destination_5));
  };
  protoOf(Regles).s1m = function (brut) {
    return Disfluences_getInstance().x1m(brut);
  };
  protoOf(Regles).y1m = function (texteSource, elementsJson, passagesIncertainsJson) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var retenus = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var ecartes = ArrayList_init_$Create$_0();
    var tmp = ListSerializer(Companion_instance_1.g1c());
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_0;
    if (isBlank(passagesIncertainsJson)) {
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      tmp_0 = '[]';
    } else {
      tmp_0 = passagesIncertainsJson;
    }
    var tmp$ret$3 = tmp_0;
    var incertains = this.e1i_1.s12(tmp, tmp$ret$3);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = decoder(this, elementsJson).g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.filtrerAncrage.<anonymous>' call
      var raison = raisonDeRejet(Regles_getInstance(), element, texteSource);
      if (!(raison == null)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = new EcarteJson(element.m1c_1, raison);
        ecartes.e(element_0);
      } else if (neVientQueDIncertain(Regles_getInstance(), element, incertains)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = element.i1d(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, true);
        retenus.e(element_1);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        retenus.e(element);
      }
    }
    return this.e1i_1.r12(Companion_getInstance_16().g1c(), new AncrageJson(retenus, ecartes));
  };
  protoOf(Regles).z1m = function (requete, elementsJson, capturesJson, reseau) {
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
    return rendre(this, tmp.d1n(requete, destination, sources(this, capturesJson), reseau));
  };
  protoOf(Regles).e1n = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
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
    return rendre(this, tmp.f1n(requete, destination, sources(this, capturesJson), Companion_getInstance().w11(aujourdhui), reseau));
  };
  protoOf(Regles).g1n = function (personne, elementsJson, reseau) {
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
    return rendre(this, tmp.h1n(personne, destination, reseau));
  };
  protoOf(Regles).i1n = function (capturesJson, elementsJson, maintenant) {
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.e1i_1.s12(ListSerializer(Companion_instance_14.g1c()), capturesJson);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
      var tmp$ret$0 = element.l1g_1;
      destination.b2(tmp$ret$0, element);
    }
    var captures = destination;
    var elements = decoder(this, elementsJson);
    var instant = Companion_getInstance_2().q11(maintenant);
    var memoire = new Memoire();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Regles$referencesAResoudre$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_1(tmp);
    var _iterator__ex2g4s_0 = sortedWith(elements, tmp$ret$3).g();
    $l$loop_0: while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      var tmp0_safe_receiver = element_0.y1c_1;
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
      var tmp2_elvis_lhs = captures.y1(element_0.k1c_1);
      var tmp_3;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_3 = tmp2_elvis_lhs;
      }
      var capture = tmp_3;
      var tmp_4 = TypeEntite_PERSONNE_getInstance();
      var tmp_5 = new Mention(new CaptureId(element_0.k1c_1), Companion_getInstance_2().q11(capture.n1g_1), element_0.m1c_1, new ElementId(element_0.j1c_1));
      var tmp3_safe_receiver = element_0.a1d_1;
      var tmp_6;
      if (tmp3_safe_receiver == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>' call
        tmp_6 = valueOf_1(tmp3_safe_receiver);
      }
      memoire.o1n(tmp_4, qui, tmp_5, tmp_6);
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
        var tmp0_safe_receiver_0 = element_1.y1c_1;
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
        var resolution = ResolutionReferences_instance.w1n(memoire, qui_0, instant, element_1.m1c_1, setOf(TypeEntite_PERSONNE_getInstance()), new ElementId(element_1.j1c_1));
        var retenu = resolution.y1n_1;
        var apprend = resolution.a1o() || (!(retenu == null) && !equals_0(retenu.m1i_1.i1i_1, qui_0, true));
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
        var this_1 = resolution.z1n_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
        var _iterator__ex2g4s_2 = this_1.g();
        while (_iterator__ex2g4s_2.h()) {
          var item = _iterator__ex2g4s_2.i();
          // Inline function 'app.zenote.core.api.Regles.referencesAResoudre.<anonymous>.<anonymous>' call
          var tmp$ret$16 = versCandidat(Regles_getInstance(), item);
          destination_1.e(tmp$ret$16);
        }
        tmp$ret$13 = new ResolutionJson(element_1.j1c_1, qui_0, tmp_11, destination_1, resolution.a1o());
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
    return this.e1i_1.r12(ListSerializer(Companion_getInstance_22().g1c()), resolutions);
  };
  protoOf(Regles).b1o = function (elementsJson, suivisJson, aujourdhui) {
    var tmp = ListSerializer(Companion_instance_19.g1c());
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
    var this_0 = this.e1i_1.s12(tmp, tmp$ret$1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.aRevoir.<anonymous>' call
      var tmp0_safe_receiver = item.v1h_1;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp1_let_receiver = Companion_getInstance();
        // Inline function 'kotlin.let' call
        tmp_1 = aRevoir$parse(tmp1_let_receiver, tmp0_safe_receiver);
      }
      var tmp$ret$3 = new SuiviElement(item.t1h_1, item.u1h_1, tmp_1);
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
    var remontees = tmp_2.d1o(destination_0, suivis, Companion_getInstance().w11(aujourdhui));
    var tmp_3 = ListSerializer(Companion_getInstance_24().g1c());
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(remontees, 10));
    var _iterator__ex2g4s_1 = remontees.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.aRevoir.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_2 = item_1.h1o_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_2 = this_2.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.api.Regles.aRevoir.<anonymous>.<anonymous>' call
        var tmp$ret$9 = item_2.f2_1;
        destination_2.e(tmp$ret$9);
      }
      var tmp$ret$12 = new ARevoirJson(item_1.e1o_1.v1j_1.e1j_1, item_1.e1o_1.y1j_1, item_1.f1o_1.f2_1, item_1.g1o_1, destination_2);
      destination_1.e(tmp$ret$12);
    }
    return this.e1i_1.r12(tmp_3, destination_1);
  };
  protoOf(Regles).i1o = function (elementsJson, aujourdhui) {
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
    var tmp0_safe_receiver = tmp.l1o(destination, Companion_getInstance().w11(aujourdhui));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1j_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e1j_1;
    return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  };
  protoOf(Regles).m1o = function (renoncementsDAffilee) {
    var tmp;
    if (CreneauProtege_instance.o1o(renoncementsDAffilee)) {
      tmp = CreneauProtege_instance.n1o(renoncementsDAffilee);
    } else {
      tmp = '';
    }
    return tmp;
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
    this.f1i_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.f1i_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.EntiteId.<anonymous>' call
      var message = "Un identifiant d'entit\xE9 ne peut pas \xEAtre vide.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(EntiteId).toString = function () {
    return this.f1i_1;
  };
  protoOf(EntiteId).hashCode = function () {
    return getStringHashCode(this.f1i_1);
  };
  protoOf(EntiteId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntiteId))
      return false;
    var tmp0_other_with_cast = other instanceof EntiteId ? other : THROW_CCE();
    if (!(this.f1i_1 === tmp0_other_with_cast.f1i_1))
      return false;
    return true;
  };
  function Mention(captureId, a, extrait, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.p1o_1 = captureId;
    this.q1o_1 = a;
    this.r1o_1 = extrait;
    this.s1o_1 = elementId;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.r1o_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.Mention.<anonymous>' call
      var message = "Une mention sans extrait n'est pas consultable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Mention).toString = function () {
    return 'Mention(captureId=' + this.p1o_1.toString() + ', a=' + this.q1o_1.toString() + ', extrait=' + this.r1o_1 + ', elementId=' + toString(this.s1o_1) + ')';
  };
  protoOf(Mention).hashCode = function () {
    var result = this.p1o_1.hashCode();
    result = imul(result, 31) + this.q1o_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.r1o_1) | 0;
    result = imul(result, 31) + (this.s1o_1 == null ? 0 : this.s1o_1.hashCode()) | 0;
    return result;
  };
  protoOf(Mention).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Mention))
      return false;
    var tmp0_other_with_cast = other instanceof Mention ? other : THROW_CCE();
    if (!this.p1o_1.equals(tmp0_other_with_cast.p1o_1))
      return false;
    if (!this.q1o_1.equals(tmp0_other_with_cast.q1o_1))
      return false;
    if (!(this.r1o_1 === tmp0_other_with_cast.r1o_1))
      return false;
    if (!equals(this.s1o_1, tmp0_other_with_cast.s1o_1))
      return false;
    return true;
  };
  function Entite(id, type, nom, alias, mentions, sphere) {
    alias = alias === VOID ? emptySet() : alias;
    mentions = mentions === VOID ? emptyList() : mentions;
    sphere = sphere === VOID ? null : sphere;
    this.g1i_1 = id;
    this.h1i_1 = type;
    this.i1i_1 = nom;
    this.j1i_1 = alias;
    this.k1i_1 = mentions;
    this.l1i_1 = sphere;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.i1i_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.memoire.Entite.<anonymous>' call
      var message = "Une entit\xE9 sans nom n'est pas d\xE9signable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Entite).t1o = function () {
    return this.k1i_1.l();
  };
  protoOf(Entite).u1o = function (id, type, nom, alias, mentions, sphere) {
    return new Entite(id, type, nom, alias, mentions, sphere);
  };
  protoOf(Entite).v1o = function (id, type, nom, alias, mentions, sphere, $super) {
    id = id === VOID ? this.g1i_1 : id;
    type = type === VOID ? this.h1i_1 : type;
    nom = nom === VOID ? this.i1i_1 : nom;
    alias = alias === VOID ? this.j1i_1 : alias;
    mentions = mentions === VOID ? this.k1i_1 : mentions;
    sphere = sphere === VOID ? this.l1i_1 : sphere;
    return $super === VOID ? this.u1o(id, type, nom, alias, mentions, sphere) : $super.u1o.call(this, id, type, nom, alias, mentions, sphere);
  };
  protoOf(Entite).toString = function () {
    return 'Entite(id=' + this.g1i_1.toString() + ', type=' + this.h1i_1.toString() + ', nom=' + this.i1i_1 + ', alias=' + toString_0(this.j1i_1) + ', mentions=' + toString_0(this.k1i_1) + ', sphere=' + toString(this.l1i_1) + ')';
  };
  protoOf(Entite).hashCode = function () {
    var result = this.g1i_1.hashCode();
    result = imul(result, 31) + this.h1i_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.i1i_1) | 0;
    result = imul(result, 31) + hashCode(this.j1i_1) | 0;
    result = imul(result, 31) + hashCode(this.k1i_1) | 0;
    result = imul(result, 31) + (this.l1i_1 == null ? 0 : this.l1i_1.hashCode()) | 0;
    return result;
  };
  protoOf(Entite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entite))
      return false;
    var tmp0_other_with_cast = other instanceof Entite ? other : THROW_CCE();
    if (!this.g1i_1.equals(tmp0_other_with_cast.g1i_1))
      return false;
    if (!this.h1i_1.equals(tmp0_other_with_cast.h1i_1))
      return false;
    if (!(this.i1i_1 === tmp0_other_with_cast.i1i_1))
      return false;
    if (!equals(this.j1i_1, tmp0_other_with_cast.j1i_1))
      return false;
    if (!equals(this.k1i_1, tmp0_other_with_cast.k1i_1))
      return false;
    if (!equals(this.l1i_1, tmp0_other_with_cast.l1i_1))
      return false;
    return true;
  };
  function TypeEntite_PERSONNE_getInstance() {
    TypeEntite_initEntries();
    return TypeEntite_PERSONNE_instance;
  }
  function Memoire() {
    this.j1n_1 = LinkedHashMap_init_$Create$_0();
    this.k1n_1 = LinkedHashMap_init_$Create$_0();
    this.l1n_1 = LinkedHashMap_init_$Create$_0();
    this.m1n_1 = 0;
    this.n1n_1 = 0;
  }
  protoOf(Memoire).w1o = function () {
    return toList(this.j1n_1.e2());
  };
  protoOf(Memoire).x1o = function (type, nom) {
    var tmp = Texte_getInstance();
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(nom) ? nom : THROW_CCE()));
    var cherche = tmp.b1p(tmp$ret$0);
    var tmp1 = this.j1n_1.e2();
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp1.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'app.zenote.core.memoire.Memoire.trouver.<anonymous>' call
        var tmp_0;
        if (element.h1i_1.equals(type)) {
          var tmp_1;
          if (Texte_getInstance().b1p(element.i1i_1) === cherche) {
            tmp_1 = true;
          } else {
            var tmp0 = element.j1i_1;
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
                if (Texte_getInstance().b1p(element_0) === cherche) {
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
  protoOf(Memoire).o1n = function (type, nom, mention, sphere) {
    var existante = this.x1o(type, nom);
    var tmp;
    if (existante == null) {
      this.m1n_1 = this.m1n_1 + 1 | 0;
      var tmp_0 = new EntiteId('ent-' + padStart(this.m1n_1.toString(), 4, _Char___init__impl__6a9atx(48)));
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$0 = toString_0(trim(isCharSequence(nom) ? nom : THROW_CCE()));
      tmp = new Entite(tmp_0, type, tmp$ret$0, VOID, VOID, sphere);
    } else {
      tmp = existante;
    }
    var entite = tmp;
    var tmp1 = entite.k1i_1;
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
        if (element.p1o_1.equals(mention.p1o_1) && equals(element.s1o_1, mention.s1o_1) && element.r1o_1 === mention.r1o_1) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
      tmp$ret$1 = false;
    }
    var deja = tmp$ret$1;
    var tmp_2 = deja ? entite.k1i_1 : plus(entite.k1i_1, mention);
    var tmp1_elvis_lhs = entite.l1i_1;
    var enrichie = entite.v1o(VOID, VOID, VOID, VOID, tmp_2, tmp1_elvis_lhs == null ? sphere : tmp1_elvis_lhs);
    var tmp3 = this.j1n_1;
    // Inline function 'kotlin.collections.set' call
    var key = enrichie.g1i_1;
    tmp3.b2(key, enrichie);
    var tmp2_safe_receiver = mention.s1o_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.memoire.Memoire.observer.<anonymous>' call
      this.c1p(tmp2_safe_receiver, enrichie.g1i_1);
    }
    return enrichie;
  };
  protoOf(Memoire).c1p = function (elementId, entiteId) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.j1n_1;
    // Inline function 'kotlin.require' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).w1(entiteId)) {
      // Inline function 'app.zenote.core.memoire.Memoire.rattacher.<anonymous>' call
      var message = 'Rattachement \xE0 une entit\xE9 inconnue : ' + entiteId.toString() + '.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.k1n_1;
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
    this.m1i_1 = entite;
    this.n1i_1 = score;
    this.o1i_1 = proximite;
    this.p1i_1 = recence;
    this.q1i_1 = frequence;
    this.r1i_1 = nomme;
    this.s1i_1 = appui;
  }
  protoOf(Candidat).toString = function () {
    return 'Candidat(entite=' + this.m1i_1.toString() + ', score=' + this.n1i_1 + ', proximite=' + this.o1i_1 + ', recence=' + this.p1i_1 + ', frequence=' + this.q1i_1 + ', nomme=' + this.r1i_1 + ', appui=' + this.s1i_1 + ')';
  };
  protoOf(Candidat).hashCode = function () {
    var result = this.m1i_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.n1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p1i_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q1i_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r1i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.s1i_1) | 0;
    return result;
  };
  protoOf(Candidat).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Candidat))
      return false;
    var tmp0_other_with_cast = other instanceof Candidat ? other : THROW_CCE();
    if (!this.m1i_1.equals(tmp0_other_with_cast.m1i_1))
      return false;
    if (!equals(this.n1i_1, tmp0_other_with_cast.n1i_1))
      return false;
    if (!equals(this.o1i_1, tmp0_other_with_cast.o1i_1))
      return false;
    if (!equals(this.p1i_1, tmp0_other_with_cast.p1i_1))
      return false;
    if (!equals(this.q1i_1, tmp0_other_with_cast.q1i_1))
      return false;
    if (!(this.r1i_1 === tmp0_other_with_cast.r1i_1))
      return false;
    if (!(this.s1i_1 === tmp0_other_with_cast.s1i_1))
      return false;
    return true;
  };
  function Resolution(reference, retenu, candidats) {
    this.x1n_1 = reference;
    this.y1n_1 = retenu;
    this.z1n_1 = candidats;
  }
  protoOf(Resolution).a1o = function () {
    return this.y1n_1 == null && this.z1n_1.l() > 1;
  };
  protoOf(Resolution).toString = function () {
    return 'Resolution(reference=' + this.x1n_1 + ', retenu=' + toString(this.y1n_1) + ', candidats=' + toString_0(this.z1n_1) + ')';
  };
  protoOf(Resolution).hashCode = function () {
    var result = getStringHashCode(this.x1n_1);
    result = imul(result, 31) + (this.y1n_1 == null ? 0 : this.y1n_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.z1n_1) | 0;
    return result;
  };
  protoOf(Resolution).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Resolution))
      return false;
    var tmp0_other_with_cast = other instanceof Resolution ? other : THROW_CCE();
    if (!(this.x1n_1 === tmp0_other_with_cast.x1n_1))
      return false;
    if (!equals(this.y1n_1, tmp0_other_with_cast.y1n_1))
      return false;
    if (!equals(this.z1n_1, tmp0_other_with_cast.z1n_1))
      return false;
    return true;
  };
  function lEmporteNettement($this, premier, tous) {
    var tmp0_elvis_lhs = getOrNull(tous, 1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return premier.r1i_1 || premier.n1i_1 >= 0.75;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var second = tmp;
    if (premier.n1i_1 < 0.75 && !(premier.r1i_1 && !second.r1i_1))
      return false;
    return premier.n1i_1 - second.n1i_1 >= 0.12;
  }
  function noter($this, entite, reference, contexte, maintenant, ignorerElement) {
    var nomme_0 = nomme($this, entite, reference);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = entite.k1i_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
      if (element.s1o_1 == null || !equals(element.s1o_1, ignorerElement)) {
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
      var maxValue = Texte_getInstance().d1p(contexte, it.r1o_1);
      while (iterator.h()) {
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
        var it_0 = iterator.i();
        var v = Texte_getInstance().d1p(contexte, it_0.r1o_1);
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
      var maxValue_0 = maxElem.q1o_1;
      do {
        var e = iterator_0.i();
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
        var v_0 = e.q1o_1;
        if (compareTo(maxValue_0, v_0) < 0) {
          maxElem = e;
          maxValue_0 = v_0;
        }
      }
       while (iterator_0.h());
      tmp$ret$8 = maxElem;
    }
    var tmp1_safe_receiver = tmp$ret$8;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q1o_1;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.noter.<anonymous>' call
      tmp_0 = _Duration___get_inWholeDays__impl__7bvpxz(maintenant.r11(tmp2_safe_receiver)).x2();
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
    var cherchee = tmp.b1p(tmp$ret$0);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(cherchee) === 0)
      return false;
    if (Texte_getInstance().b1p(entite.i1i_1) === cherchee)
      return true;
    var tmp2 = entite.j1i_1;
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
        if (Texte_getInstance().b1p(element) === cherchee) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2)
      return true;
    var tmp4 = split(Texte_getInstance().b1p(entite.i1i_1), charArrayOf([_Char___init__impl__6a9atx(32)]));
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
        var maxValue = maxElem.q1o_1;
        do {
          var e = iterator.i();
          // Inline function 'app.zenote.core.memoire.ResolutionReferences.appui.<anonymous>' call
          var v = e.q1o_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (iterator.h());
        tmp$ret$1 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1o_1;
      var extrait = tmp1_safe_receiver == null ? null : take(tmp1_safe_receiver, 60);
      if (!(extrait == null)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = 'd\xE9j\xE0 cit\xE9e \xE0 propos de \xAB ' + extrait + ' \xBB';
        morceaux.e(element_0);
      }
    }
    var tmp2_subject = connues.l();
    // Inline function 'kotlin.collections.plusAssign' call
    var element_1 = tmp2_subject === 0 ? 'jamais mentionn\xE9e' : tmp2_subject === 1 ? 'mentionn\xE9e une fois' : 'mentionn\xE9e ' + entite.t1o() + ' fois';
    morceaux.e(element_1);
    return joinToString(morceaux, ', ');
  }
  function sam$kotlin_Comparator$0_2(function_0) {
    this.e1p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).tc = function (a, b) {
    return this.e1p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).y2 = function () {
    return this.e1p_1;
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
  function ResolutionReferences$resoudre$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
    var tmp = b.n1i_1;
    // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
    var tmp$ret$1 = a.n1i_1;
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
        var tmp_0 = a.m1i_1.i1i_1;
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
        var tmp$ret$1 = b.m1i_1.i1i_1;
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
        var tmp_0 = a.m1i_1.g1i_1.f1i_1;
        // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
        var tmp$ret$1 = b.m1i_1.g1i_1.f1i_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function ResolutionReferences() {
    this.p1n_1 = 30.0;
    this.q1n_1 = 5.0;
    this.r1n_1 = 0.5;
    this.s1n_1 = 0.3;
    this.t1n_1 = 0.2;
    this.u1n_1 = 0.12;
    this.v1n_1 = 0.05;
  }
  protoOf(ResolutionReferences).w1n = function (memoire, reference, maintenant, contexte, types, ignorerElement) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = memoire.w1o();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.memoire.ResolutionReferences.resoudre.<anonymous>' call
      if (types.j() || types.r1(element.h1i_1)) {
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
      var tmp0_0 = element_1.k1i_1;
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
          if (element_2.s1o_1 == null || !equals(element_2.s1o_1, ignorerElement)) {
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
      if (element_3.n1i_1 > 0.05) {
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
    this.p1j_1 = valeur;
    this.q1j_1 = confiance;
    this.r1j_1 = indice;
    var containsArg = this.q1j_1;
    // Inline function 'kotlin.require' call
    if (!(0.0 <= containsArg ? containsArg <= 1.0 : false)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message = 'La confiance est une probabilit\xE9 entre 0 et 1.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.r1j_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message_0 = "Une d\xE9duction sans indice n'est pas justifiable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Deduit).toString = function () {
    return 'Deduit(valeur=' + toString(this.p1j_1) + ', confiance=' + this.q1j_1 + ', indice=' + this.r1j_1 + ')';
  };
  protoOf(Deduit).hashCode = function () {
    var result = this.p1j_1 == null ? 0 : hashCode(this.p1j_1);
    result = imul(result, 31) + getNumberHashCode(this.q1j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.r1j_1) | 0;
    return result;
  };
  protoOf(Deduit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deduit))
      return false;
    var tmp0_other_with_cast = other instanceof Deduit ? other : THROW_CCE();
    if (!equals(this.p1j_1, tmp0_other_with_cast.p1j_1))
      return false;
    if (!equals(this.q1j_1, tmp0_other_with_cast.q1j_1))
      return false;
    if (!(this.r1j_1 === tmp0_other_with_cast.r1j_1))
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
  protoOf(TypeElement).h1p = function () {
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
    this.n1l_1 = declencheur;
    this.o1l_1 = action;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.n1l_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message = "Un plan sans d\xE9clencheur n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.o1l_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message_0 = "Un plan sans action n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Plan).toString = function () {
    return 'Quand ' + this.n1l_1 + ', ' + this.o1l_1;
  };
  protoOf(Plan).hashCode = function () {
    var result = getStringHashCode(this.n1l_1);
    result = imul(result, 31) + getStringHashCode(this.o1l_1) | 0;
    return result;
  };
  protoOf(Plan).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plan))
      return false;
    var tmp0_other_with_cast = other instanceof Plan ? other : THROW_CCE();
    if (!(this.n1l_1 === tmp0_other_with_cast.n1l_1))
      return false;
    if (!(this.o1l_1 === tmp0_other_with_cast.o1l_1))
      return false;
    return true;
  };
  function ElementId(value) {
    this.e1j_1 = value;
  }
  protoOf(ElementId).toString = function () {
    return this.e1j_1;
  };
  protoOf(ElementId).hashCode = function () {
    return getStringHashCode(this.e1j_1);
  };
  protoOf(ElementId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementId))
      return false;
    var tmp0_other_with_cast = other instanceof ElementId ? other : THROW_CCE();
    if (!(this.e1j_1 === tmp0_other_with_cast.e1j_1))
      return false;
    return true;
  };
  function ElementDerive(captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan) {
    echeance = echeance === VOID ? null : echeance;
    poids = poids === VOID ? null : poids;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    sphere = sphere === VOID ? null : sphere;
    plan = plan === VOID ? null : plan;
    this.f1j_1 = captureId;
    this.g1j_1 = type;
    this.h1j_1 = texte;
    this.i1j_1 = passage;
    this.j1j_1 = echeance;
    this.k1j_1 = poids;
    this.l1j_1 = interlocuteur;
    this.m1j_1 = sphere;
    this.n1j_1 = plan;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.h1j_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.ElementDerive.<anonymous>' call
      var message = "Un \xE9l\xE9ment sans texte n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.o1j_1 = new ElementId(this.f1j_1.toString() + ':' + this.i1j_1.i1p_1 + '-' + this.i1j_1.j1p_1 + ':' + this.g1j_1.toString());
  }
  protoOf(ElementDerive).toString = function () {
    return 'ElementDerive(captureId=' + this.f1j_1.toString() + ', type=' + this.g1j_1.toString() + ', texte=' + this.h1j_1 + ', passage=' + this.i1j_1.toString() + ', echeance=' + toString(this.j1j_1) + ', poids=' + toString(this.k1j_1) + ', interlocuteur=' + toString(this.l1j_1) + ', sphere=' + toString(this.m1j_1) + ', plan=' + toString(this.n1j_1) + ')';
  };
  protoOf(ElementDerive).hashCode = function () {
    var result = this.f1j_1.hashCode();
    result = imul(result, 31) + this.g1j_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.h1j_1) | 0;
    result = imul(result, 31) + this.i1j_1.hashCode() | 0;
    result = imul(result, 31) + (this.j1j_1 == null ? 0 : this.j1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.k1j_1 == null ? 0 : this.k1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.l1j_1 == null ? 0 : this.l1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.m1j_1 == null ? 0 : this.m1j_1.hashCode()) | 0;
    result = imul(result, 31) + (this.n1j_1 == null ? 0 : this.n1j_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElementDerive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDerive))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDerive ? other : THROW_CCE();
    if (!this.f1j_1.equals(tmp0_other_with_cast.f1j_1))
      return false;
    if (!this.g1j_1.equals(tmp0_other_with_cast.g1j_1))
      return false;
    if (!(this.h1j_1 === tmp0_other_with_cast.h1j_1))
      return false;
    if (!this.i1j_1.equals(tmp0_other_with_cast.i1j_1))
      return false;
    if (!equals(this.j1j_1, tmp0_other_with_cast.j1j_1))
      return false;
    if (!equals(this.k1j_1, tmp0_other_with_cast.k1j_1))
      return false;
    if (!equals(this.l1j_1, tmp0_other_with_cast.l1j_1))
      return false;
    if (!equals(this.m1j_1, tmp0_other_with_cast.m1j_1))
      return false;
    if (!equals(this.n1j_1, tmp0_other_with_cast.n1j_1))
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
  function Companion_20() {
  }
  var Companion_instance_21;
  function Companion_getInstance_25() {
    return Companion_instance_21;
  }
  function ElementResolu(id, captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan, verdict, aConfirmer, corrigeParHumain, indicePoids) {
    this.v1j_1 = id;
    this.w1j_1 = captureId;
    this.x1j_1 = type;
    this.y1j_1 = texte;
    this.z1j_1 = passage;
    this.a1k_1 = echeance;
    this.b1k_1 = poids;
    this.c1k_1 = interlocuteur;
    this.d1k_1 = sphere;
    this.e1k_1 = plan;
    this.f1k_1 = verdict;
    this.g1k_1 = aConfirmer;
    this.h1k_1 = corrigeParHumain;
    this.i1k_1 = indicePoids;
  }
  protoOf(ElementResolu).toString = function () {
    return 'ElementResolu(id=' + this.v1j_1.toString() + ', captureId=' + this.w1j_1.toString() + ', type=' + this.x1j_1.toString() + ', texte=' + this.y1j_1 + ', passage=' + this.z1j_1.toString() + ', echeance=' + toString(this.a1k_1) + ', poids=' + toString(this.b1k_1) + ', interlocuteur=' + this.c1k_1 + ', sphere=' + toString(this.d1k_1) + ', plan=' + toString(this.e1k_1) + ', verdict=' + this.f1k_1.toString() + ', aConfirmer=' + this.g1k_1 + ', corrigeParHumain=' + this.h1k_1 + ', indicePoids=' + this.i1k_1 + ')';
  };
  protoOf(ElementResolu).hashCode = function () {
    var result = this.v1j_1.hashCode();
    result = imul(result, 31) + this.w1j_1.hashCode() | 0;
    result = imul(result, 31) + this.x1j_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.y1j_1) | 0;
    result = imul(result, 31) + this.z1j_1.hashCode() | 0;
    result = imul(result, 31) + (this.a1k_1 == null ? 0 : this.a1k_1.hashCode()) | 0;
    result = imul(result, 31) + (this.b1k_1 == null ? 0 : this.b1k_1.hashCode()) | 0;
    result = imul(result, 31) + (this.c1k_1 == null ? 0 : getStringHashCode(this.c1k_1)) | 0;
    result = imul(result, 31) + (this.d1k_1 == null ? 0 : this.d1k_1.hashCode()) | 0;
    result = imul(result, 31) + (this.e1k_1 == null ? 0 : this.e1k_1.hashCode()) | 0;
    result = imul(result, 31) + this.f1k_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g1k_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.h1k_1) | 0;
    result = imul(result, 31) + (this.i1k_1 == null ? 0 : getStringHashCode(this.i1k_1)) | 0;
    return result;
  };
  protoOf(ElementResolu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementResolu))
      return false;
    var tmp0_other_with_cast = other instanceof ElementResolu ? other : THROW_CCE();
    if (!this.v1j_1.equals(tmp0_other_with_cast.v1j_1))
      return false;
    if (!this.w1j_1.equals(tmp0_other_with_cast.w1j_1))
      return false;
    if (!this.x1j_1.equals(tmp0_other_with_cast.x1j_1))
      return false;
    if (!(this.y1j_1 === tmp0_other_with_cast.y1j_1))
      return false;
    if (!this.z1j_1.equals(tmp0_other_with_cast.z1j_1))
      return false;
    if (!equals(this.a1k_1, tmp0_other_with_cast.a1k_1))
      return false;
    if (!equals(this.b1k_1, tmp0_other_with_cast.b1k_1))
      return false;
    if (!(this.c1k_1 == tmp0_other_with_cast.c1k_1))
      return false;
    if (!equals(this.d1k_1, tmp0_other_with_cast.d1k_1))
      return false;
    if (!equals(this.e1k_1, tmp0_other_with_cast.e1k_1))
      return false;
    if (!this.f1k_1.equals(tmp0_other_with_cast.f1k_1))
      return false;
    if (!(this.g1k_1 === tmp0_other_with_cast.g1k_1))
      return false;
    if (!(this.h1k_1 === tmp0_other_with_cast.h1k_1))
      return false;
    if (!(this.i1k_1 == tmp0_other_with_cast.i1k_1))
      return false;
    return true;
  };
  function CaptureId(value) {
    this.d1j_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.d1j_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.CaptureId.<anonymous>' call
      var message = 'Un identifiant de capture ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(CaptureId).toString = function () {
    return this.d1j_1;
  };
  protoOf(CaptureId).hashCode = function () {
    return getStringHashCode(this.d1j_1);
  };
  protoOf(CaptureId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureId))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureId ? other : THROW_CCE();
    if (!(this.d1j_1 === tmp0_other_with_cast.d1j_1))
      return false;
    return true;
  };
  function Passage(debutCar, finCar, debutMs, finMs) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    this.i1p_1 = debutCar;
    this.j1p_1 = finCar;
    this.k1p_1 = debutMs;
    this.l1p_1 = finMs;
    // Inline function 'kotlin.require' call
    if (!(this.i1p_1 >= 0)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message = 'Le d\xE9but du passage ne peut pas \xEAtre n\xE9gatif.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.j1p_1 > this.i1p_1)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_0 = 'Le passage doit couvrir au moins un caract\xE8re.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(this.k1p_1 == null === (this.l1p_1 == null))) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_1 = 'Les bornes audio vont par paire, ou pas du tout.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    if (!(this.k1p_1 == null) && !(this.l1p_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.k1p_1.z(new Long(0, 0)) >= 0 && this.l1p_1.z(this.k1p_1) > 0)) {
        // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
        var message_2 = 'Bornes audio incoh\xE9rentes.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }
    }
  }
  protoOf(Passage).toString = function () {
    return 'Passage(debutCar=' + this.i1p_1 + ', finCar=' + this.j1p_1 + ', debutMs=' + toString(this.k1p_1) + ', finMs=' + toString(this.l1p_1) + ')';
  };
  protoOf(Passage).hashCode = function () {
    var result = this.i1p_1;
    result = imul(result, 31) + this.j1p_1 | 0;
    result = imul(result, 31) + (this.k1p_1 == null ? 0 : this.k1p_1.hashCode()) | 0;
    result = imul(result, 31) + (this.l1p_1 == null ? 0 : this.l1p_1.hashCode()) | 0;
    return result;
  };
  protoOf(Passage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Passage))
      return false;
    var tmp0_other_with_cast = other instanceof Passage ? other : THROW_CCE();
    if (!(this.i1p_1 === tmp0_other_with_cast.i1p_1))
      return false;
    if (!(this.j1p_1 === tmp0_other_with_cast.j1p_1))
      return false;
    if (!equals(this.k1p_1, tmp0_other_with_cast.k1p_1))
      return false;
    if (!equals(this.l1p_1, tmp0_other_with_cast.l1p_1))
      return false;
    return true;
  };
  function ordreEcheance($this, element) {
    var tmp0_safe_receiver = element.a1k_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wq();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? new Long(0, -2147483648) : tmp2_elvis_lhs;
  }
  function CreneauProtege$proposition$lambda(it) {
    return ordreEcheance(CreneauProtege_instance, it);
  }
  function CreneauProtege$proposition$lambda_0(it) {
    return it.v1j_1.e1j_1;
  }
  function CreneauProtege() {
    this.j1o_1 = 7;
    this.k1o_1 = 3;
  }
  protoOf(CreneauProtege).l1o = function (elements, aujourdhui) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.CreneauProtege.proposition.<anonymous>' call
      if (CreneauProtege_instance.m1p(element, aujourdhui)) {
        destination.e(element);
      }
    }
    var tmp = destination;
    var tmp_0 = CreneauProtege$proposition$lambda;
    return firstOrNull(sortedWith(tmp, compareBy([tmp_0, CreneauProtege$proposition$lambda_0])));
  };
  protoOf(CreneauProtege).m1p = function (element, aujourdhui) {
    if (!element.f1k_1.equals(Verdict_ACCEPTE_getInstance()))
      return false;
    if (!element.x1j_1.h1p())
      return false;
    if (!equals(element.b1k_1, Poids_FORT_getInstance()))
      return false;
    var tmp0_elvis_lhs = element.a1k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var echeance = tmp;
    return (echeance.wq() - aujourdhui.wq() | 0) > 7;
  };
  protoOf(CreneauProtege).o1o = function (renoncementsDAffilee) {
    return renoncementsDAffilee >= 3;
  };
  protoOf(CreneauProtege).n1o = function (renoncementsDAffilee) {
    return 'Le cr\xE9neau prot\xE9g\xE9 est pass\xE9 ' + renoncementsDAffilee + ' fois sans \xEAtre pris. ' + "Il n'est peut-\xEAtre pas au bon moment.";
  };
  var CreneauProtege_instance;
  function CreneauProtege_getInstance() {
    return CreneauProtege_instance;
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
  protoOf(Urgence).p1p = function () {
    return this.equals(Urgence_DEPASSEE_getInstance()) || this.equals(Urgence_AUJOURD_HUI_getInstance());
  };
  protoOf(Urgence).q1p = function () {
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
    this.r1p_1 = aujourdhui;
  }
  protoOf(ContexteMaintenant).toString = function () {
    return 'ContexteMaintenant(aujourdhui=' + this.r1p_1.toString() + ')';
  };
  protoOf(ContexteMaintenant).hashCode = function () {
    return this.r1p_1.hashCode();
  };
  protoOf(ContexteMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenant ? other : THROW_CCE();
    if (!this.r1p_1.equals(tmp0_other_with_cast.r1p_1))
      return false;
    return true;
  };
  function Proposition(element, raison, poidsEffectif, urgence) {
    this.n1k_1 = element;
    this.o1k_1 = raison;
    this.p1k_1 = poidsEffectif;
    this.q1k_1 = urgence;
  }
  protoOf(Proposition).toString = function () {
    return 'Proposition(element=' + this.n1k_1.toString() + ', raison=' + this.o1k_1 + ', poidsEffectif=' + this.p1k_1.toString() + ', urgence=' + this.q1k_1.toString() + ')';
  };
  protoOf(Proposition).hashCode = function () {
    var result = this.n1k_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.o1k_1) | 0;
    result = imul(result, 31) + this.p1k_1.hashCode() | 0;
    result = imul(result, 31) + this.q1k_1.hashCode() | 0;
    return result;
  };
  protoOf(Proposition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Proposition))
      return false;
    var tmp0_other_with_cast = other instanceof Proposition ? other : THROW_CCE();
    if (!this.n1k_1.equals(tmp0_other_with_cast.n1k_1))
      return false;
    if (!(this.o1k_1 === tmp0_other_with_cast.o1k_1))
      return false;
    if (!this.p1k_1.equals(tmp0_other_with_cast.p1k_1))
      return false;
    if (!this.q1k_1.equals(tmp0_other_with_cast.q1k_1))
      return false;
    return true;
  };
  function raison($this, element, urgence) {
    var tmp0_elvis_lhs = element.i1k_1;
    var consequence = tmp0_elvis_lhs == null ? 'poids non d\xE9termin\xE9, \xE0 confirmer en Revue' : tmp0_elvis_lhs;
    return consequence + ' \u2014 ' + urgence.q1p();
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
  function sam$kotlin_Comparator$0_3(function_0) {
    this.s1p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).tc = function (a, b) {
    return this.s1p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).y2 = function () {
    return this.s1p_1;
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
  function Priorisation$classer$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp = b.p1k_1.g2_1;
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp$ret$1 = a.p1k_1.g2_1;
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
        var tmp_0 = a.q1k_1.g2_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.q1k_1.g2_1;
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
        var tmp_0 = a.n1k_1.v1j_1.e1j_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.n1k_1.v1j_1.e1j_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation() {
    Priorisation_instance = this;
    this.k1k_1 = 3;
    this.l1k_1 = Poids_MOYEN_getInstance();
  }
  protoOf(Priorisation).t1p = function (echeance, aujourdhui) {
    if (echeance == null)
      return Urgence_AUCUNE_getInstance();
    var tmp0_subject = daysUntil(aujourdhui, echeance);
    return (-2147483648 <= tmp0_subject ? tmp0_subject <= -1 : false) ? Urgence_DEPASSEE_getInstance() : tmp0_subject === 0 ? Urgence_AUJOURD_HUI_getInstance() : tmp0_subject === 1 ? Urgence_DEMAIN_getInstance() : (2 <= tmp0_subject ? tmp0_subject <= 7 : false) ? Urgence_CETTE_SEMAINE_getInstance() : Urgence_PLUS_TARD_getInstance();
  };
  protoOf(Priorisation).u1p = function (elements, contexte) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      if (element.f1k_1.equals(Verdict_ACCEPTE_getInstance()) && element.x1j_1.h1p()) {
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
      var urgence = Priorisation_getInstance().t1p(item.a1k_1, contexte.r1p_1);
      var tmp0_elvis_lhs = item.b1k_1;
      var poids = tmp0_elvis_lhs == null ? Priorisation_getInstance().l1k_1 : tmp0_elvis_lhs;
      var effectif = urgence.p1p() ? dUnCranPlusHaut(poids, Priorisation_getInstance()) : poids;
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
  protoOf(Priorisation).m1k = function (elements, contexte) {
    return take_0(this.u1p(elements, contexte), 3);
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
    this.v1p_1 = point;
  }
  protoOf(Transition).toString = function () {
    return 'Transition(point=' + this.v1p_1.toString() + ')';
  };
  protoOf(Transition).hashCode = function () {
    return this.v1p_1.hashCode();
  };
  protoOf(Transition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Transition))
      return false;
    var tmp0_other_with_cast = other instanceof Transition ? other : THROW_CCE();
    if (!this.v1p_1.equals(tmp0_other_with_cast.v1p_1))
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
    this.a1m_1 = quand;
  }
  protoOf(Observable).toString = function () {
    return 'Observable(quand=' + this.a1m_1.toString() + ')';
  };
  protoOf(Observable).hashCode = function () {
    return this.a1m_1.hashCode();
  };
  protoOf(Observable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Observable))
      return false;
    var tmp0_other_with_cast = other instanceof Observable ? other : THROW_CCE();
    if (!this.a1m_1.equals(tmp0_other_with_cast.a1m_1))
      return false;
    return true;
  };
  function Substituee(explication) {
    this.b1m_1 = explication;
  }
  protoOf(Substituee).toString = function () {
    return 'Substituee(explication=' + this.b1m_1 + ')';
  };
  protoOf(Substituee).hashCode = function () {
    return getStringHashCode(this.b1m_1);
  };
  protoOf(Substituee).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Substituee))
      return false;
    var tmp0_other_with_cast = other instanceof Substituee ? other : THROW_CCE();
    if (!(this.b1m_1 === tmp0_other_with_cast.b1m_1))
      return false;
    return true;
  };
  function Echeancier() {
    Echeancier_instance = this;
    this.u1l_1 = LocalTime_init_$Create$(18, 0);
    this.v1l_1 = LocalTime_init_$Create$(7, 0);
    this.w1l_1 = "ZeNote ne sait pas encore reconna\xEEtre ce signal : l'agenda n'est pas branch\xE9, et la position n'est pas collect\xE9e.";
    this.x1l_1 = Regex_init_$Create$('(\\d{4})-(\\d{2})-(\\d{2})');
  }
  protoOf(Echeancier).y1l = function (declencheur, poseLe) {
    var plie = Texte_getInstance().b1p(declencheur);
    if (contains(plie, 'ce soir')) {
      return new Observable(LocalDateTime_init_$Create$(poseLe.e12(), this.u1l_1));
    }
    if (contains(plie, 'demain matin')) {
      return new Observable(LocalDateTime_init_$Create$(plus_0(poseLe.e12(), 1, Companion_getInstance_3().cn_1), this.v1l_1));
    }
    var tmp0_safe_receiver = this.x1l_1.qa(plie);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var _destruct__k2r9zo = tmp0_safe_receiver.gb();
      // Inline function 'kotlin.text.Destructured.component1' call
      var annee = _destruct__k2r9zo.sd_1.fb().k(1);
      // Inline function 'kotlin.text.Destructured.component2' call
      var mois = _destruct__k2r9zo.sd_1.fb().k(2);
      // Inline function 'kotlin.text.Destructured.component3' call
      var jour = _destruct__k2r9zo.sd_1.fb().k(3);
      return new Observable(LocalDateTime_init_$Create$_0(toInt(annee), toInt(mois), toInt(jour), 0, 0));
    }
    return new Substituee("ZeNote ne sait pas encore reconna\xEEtre ce signal : l'agenda n'est pas branch\xE9, et la position n'est pas collect\xE9e.");
  };
  protoOf(Echeancier).z1l = function (echeance, maintenant) {
    var tmp;
    if (echeance instanceof Substituee) {
      tmp = true;
    } else {
      if (echeance instanceof Observable) {
        tmp = echeance.a1m_1.f12(maintenant) <= 0;
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
    this.w1p_1 = rappel;
    this.x1p_1 = motif;
  }
  protoOf(Immediate).toString = function () {
    return 'Immediate(rappel=' + this.w1p_1.toString() + ', motif=' + this.x1p_1 + ')';
  };
  protoOf(Immediate).hashCode = function () {
    var result = this.w1p_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.x1p_1) | 0;
    return result;
  };
  protoOf(Immediate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Immediate))
      return false;
    var tmp0_other_with_cast = other instanceof Immediate ? other : THROW_CCE();
    if (!this.w1p_1.equals(tmp0_other_with_cast.w1p_1))
      return false;
    if (!(this.x1p_1 === tmp0_other_with_cast.x1p_1))
      return false;
    return true;
  };
  function MiseEnFile(rappel, motif) {
    this.y1p_1 = rappel;
    this.z1p_1 = motif;
  }
  protoOf(MiseEnFile).toString = function () {
    return 'MiseEnFile(rappel=' + this.y1p_1.toString() + ', motif=' + this.z1p_1 + ')';
  };
  protoOf(MiseEnFile).hashCode = function () {
    var result = this.y1p_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.z1p_1) | 0;
    return result;
  };
  protoOf(MiseEnFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MiseEnFile))
      return false;
    var tmp0_other_with_cast = other instanceof MiseEnFile ? other : THROW_CCE();
    if (!this.y1p_1.equals(tmp0_other_with_cast.y1p_1))
      return false;
    if (!(this.z1p_1 === tmp0_other_with_cast.z1p_1))
      return false;
    return true;
  };
  function Escaladee(escalade) {
    this.a1q_1 = escalade;
  }
  protoOf(Escaladee).toString = function () {
    return 'Escaladee(escalade=' + this.a1q_1.toString() + ')';
  };
  protoOf(Escaladee).hashCode = function () {
    return this.a1q_1.hashCode();
  };
  protoOf(Escaladee).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Escaladee))
      return false;
    var tmp0_other_with_cast = other instanceof Escaladee ? other : THROW_CCE();
    if (!this.a1q_1.equals(tmp0_other_with_cast.a1q_1))
      return false;
    return true;
  };
  function Notification(point, emiseA, rappels, enRetard) {
    this.e1m_1 = point;
    this.f1m_1 = emiseA;
    this.g1m_1 = rappels;
    this.h1m_1 = enRetard;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.g1m_1.j()) {
      // Inline function 'app.zenote.core.rappels.Notification.<anonymous>' call
      var message = "Une notification sans rappel n'a rien \xE0 dire.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Notification).i1m = function () {
    return this.g1m_1.l() === 1 ? single(this.g1m_1).l1m_1 : '' + this.g1m_1.l() + ' choses \xE0 voir maintenant';
  };
  protoOf(Notification).toString = function () {
    return 'Notification(point=' + this.e1m_1.toString() + ', emiseA=' + this.f1m_1.toString() + ', rappels=' + toString_0(this.g1m_1) + ', enRetard=' + toString_0(this.h1m_1) + ')';
  };
  protoOf(Notification).hashCode = function () {
    var result = this.e1m_1.hashCode();
    result = imul(result, 31) + this.f1m_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.g1m_1) | 0;
    result = imul(result, 31) + hashCode(this.h1m_1) | 0;
    return result;
  };
  protoOf(Notification).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Notification))
      return false;
    var tmp0_other_with_cast = other instanceof Notification ? other : THROW_CCE();
    if (!this.e1m_1.equals(tmp0_other_with_cast.e1m_1))
      return false;
    if (!this.f1m_1.equals(tmp0_other_with_cast.f1m_1))
      return false;
    if (!equals(this.g1m_1, tmp0_other_with_cast.g1m_1))
      return false;
    if (!equals(this.h1m_1, tmp0_other_with_cast.h1m_1))
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
    this.p1m_1 = rappel;
    this.q1m_1 = motif;
    this.r1m_1 = options;
  }
  protoOf(Escalade).toString = function () {
    return 'Escalade(rappel=' + this.p1m_1.toString() + ', motif=' + this.q1m_1 + ', options=' + toString_0(this.r1m_1) + ')';
  };
  protoOf(Escalade).hashCode = function () {
    var result = this.p1m_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.q1m_1) | 0;
    result = imul(result, 31) + hashCode(this.r1m_1) | 0;
    return result;
  };
  protoOf(Escalade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Escalade))
      return false;
    var tmp0_other_with_cast = other instanceof Escalade ? other : THROW_CCE();
    if (!this.p1m_1.equals(tmp0_other_with_cast.p1m_1))
      return false;
    if (!(this.q1m_1 === tmp0_other_with_cast.q1m_1))
      return false;
    if (!equals(this.r1m_1, tmp0_other_with_cast.r1m_1))
      return false;
    return true;
  };
  function Companion_21() {
    this.b1q_1 = 3;
  }
  var Companion_instance_22;
  function Companion_getInstance_26() {
    return Companion_instance_22;
  }
  function sam$kotlin_Comparator$0_4(function_0) {
    this.c1q_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_4).tc = function (a, b) {
    return this.c1q_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).y2 = function () {
    return this.c1q_1;
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
  function sam$kotlin_Comparator$0_5(function_0) {
    this.d1q_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_5).tc = function (a, b) {
    return this.d1q_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).y2 = function () {
    return this.d1q_1;
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
  function FileOpportunite$vider$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp = a.j1m_1.e1q_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp$ret$1 = b.j1m_1.e1q_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite$vider$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp = a.e1q_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
    var tmp$ret$1 = b.e1q_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite$escalades$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.rappels.FileOpportunite.escalades.<anonymous>' call
    var tmp = a.p1m_1.j1m_1.e1q_1;
    // Inline function 'app.zenote.core.rappels.FileOpportunite.escalades.<anonymous>' call
    var tmp$ret$1 = b.p1m_1.j1m_1.e1q_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function FileOpportunite(silences) {
    silences = silences === VOID ? emptyList() : silences;
    this.p1l_1 = silences;
    this.q1l_1 = LinkedHashMap_init_$Create$_0();
    this.r1l_1 = LinkedHashMap_init_$Create$_0();
    this.s1l_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(FileOpportunite).c1m = function (rappel, a) {
    var tmp0_safe_receiver = this.s1l_1.y1(rappel.j1m_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return new Escaladee(tmp0_safe_receiver);
    }
    if (rappel.n1m_1) {
      return new Immediate(rappel, 'rappel critique : pr\xE9sent\xE9 sans attendre un point de rupture');
    }
    var tmp2 = this.q1l_1;
    var tmp3 = rappel.j1m_1;
    // Inline function 'kotlin.collections.set' call
    var value = to(rappel, a);
    tmp2.b2(tmp3, value);
    return new MiseEnFile(rappel, 'en attente du prochain point de rupture');
  };
  protoOf(FileOpportunite).d1m = function (point, a) {
    var tmp0 = this.p1l_1;
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
        if (element.h1q(a)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      return null;
    if (this.q1l_1.j())
      return null;
    var livres = toList(this.q1l_1.e2());
    this.q1l_1.d2();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(livres, 10));
    var _iterator__ex2g4s_0 = livres.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.rappels.FileOpportunite.vider.<anonymous>' call
      var tmp$ret$2 = item.zb_1;
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
      if (element_0.ac_1.s11(a) < 0) {
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
      var tmp$ret$10 = item_0.zb_1.j1m_1;
      destination_1.e(tmp$ret$10);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_2 = FileOpportunite$vider$lambda_0;
    var tmp$ret$13 = new sam$kotlin_Comparator$0_4(tmp_2);
    var tmp$ret$14 = sortedWith(destination_1, tmp$ret$13);
    return new Notification(point, a, tmp_1, tmp$ret$14);
  };
  protoOf(FileOpportunite).t1l = function (rappel) {
    var tmp0_safe_receiver = this.s1l_1.y1(rappel.j1m_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = this.r1l_1.y1(rappel.j1m_1);
    var compte = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) + 1 | 0;
    var tmp2 = this.r1l_1;
    // Inline function 'kotlin.collections.set' call
    var key = rappel.j1m_1;
    tmp2.b2(key, compte);
    if (compte < 3)
      return null;
    this.q1l_1.c2(rappel.j1m_1);
    var escalade = new Escalade(rappel, 'ignor\xE9 ' + compte + " fois : ce rappel ne se repr\xE9sente plus \xE0 l'identique");
    var tmp5 = this.s1l_1;
    // Inline function 'kotlin.collections.set' call
    var key_0 = rappel.j1m_1;
    tmp5.b2(key_0, escalade);
    return escalade;
  };
  protoOf(FileOpportunite).o1m = function () {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = this.s1l_1.e2();
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
    this.e1q_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.e1q_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.RappelId.<anonymous>' call
      var message = 'Un identifiant de rappel ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(RappelId).toString = function () {
    return this.e1q_1;
  };
  protoOf(RappelId).hashCode = function () {
    return getStringHashCode(this.e1q_1);
  };
  protoOf(RappelId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RappelId))
      return false;
    var tmp0_other_with_cast = other instanceof RappelId ? other : THROW_CCE();
    if (!(this.e1q_1 === tmp0_other_with_cast.e1q_1))
      return false;
    return true;
  };
  function Rappel(id, elementId, texte, declencheur, critique) {
    critique = critique === VOID ? false : critique;
    this.j1m_1 = id;
    this.k1m_1 = elementId;
    this.l1m_1 = texte;
    this.m1m_1 = declencheur;
    this.n1m_1 = critique;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.l1m_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.rappels.Rappel.<anonymous>' call
      var message = "Un rappel sans texte n'a rien \xE0 rappeler.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Rappel).toString = function () {
    return 'Rappel(id=' + this.j1m_1.toString() + ', elementId=' + this.k1m_1.toString() + ', texte=' + this.l1m_1 + ', declencheur=' + toString_0(this.m1m_1) + ', critique=' + this.n1m_1 + ')';
  };
  protoOf(Rappel).hashCode = function () {
    var result = this.j1m_1.hashCode();
    result = imul(result, 31) + this.k1m_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.l1m_1) | 0;
    result = imul(result, 31) + hashCode(this.m1m_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n1m_1) | 0;
    return result;
  };
  protoOf(Rappel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rappel))
      return false;
    var tmp0_other_with_cast = other instanceof Rappel ? other : THROW_CCE();
    if (!this.j1m_1.equals(tmp0_other_with_cast.j1m_1))
      return false;
    if (!this.k1m_1.equals(tmp0_other_with_cast.k1m_1))
      return false;
    if (!(this.l1m_1 === tmp0_other_with_cast.l1m_1))
      return false;
    if (!equals(this.m1m_1, tmp0_other_with_cast.m1m_1))
      return false;
    if (!(this.n1m_1 === tmp0_other_with_cast.n1m_1))
      return false;
    return true;
  };
  function TexteSource(captureId, texte, quand, jour) {
    jour = jour === VOID ? null : jour;
    this.i1q_1 = captureId;
    this.j1q_1 = texte;
    this.k1q_1 = quand;
    this.l1q_1 = jour;
  }
  protoOf(TexteSource).toString = function () {
    return 'TexteSource(captureId=' + this.i1q_1.toString() + ', texte=' + this.j1q_1 + ', quand=' + this.k1q_1 + ', jour=' + toString(this.l1q_1) + ')';
  };
  protoOf(TexteSource).hashCode = function () {
    var result = this.i1q_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.j1q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k1q_1) | 0;
    result = imul(result, 31) + (this.l1q_1 == null ? 0 : this.l1q_1.hashCode()) | 0;
    return result;
  };
  protoOf(TexteSource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TexteSource))
      return false;
    var tmp0_other_with_cast = other instanceof TexteSource ? other : THROW_CCE();
    if (!this.i1q_1.equals(tmp0_other_with_cast.i1q_1))
      return false;
    if (!(this.j1q_1 === tmp0_other_with_cast.j1q_1))
      return false;
    if (!(this.k1q_1 === tmp0_other_with_cast.k1q_1))
      return false;
    if (!equals(this.l1q_1, tmp0_other_with_cast.l1q_1))
      return false;
    return true;
  };
  function Citation(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.z1i_1 = captureId;
    this.a1j_1 = extrait;
    this.b1j_1 = pourquoi;
    this.c1j_1 = elementId;
  }
  protoOf(Citation).toString = function () {
    return 'Citation(captureId=' + this.z1i_1.toString() + ', extrait=' + this.a1j_1 + ', pourquoi=' + this.b1j_1 + ', elementId=' + toString(this.c1j_1) + ')';
  };
  protoOf(Citation).hashCode = function () {
    var result = this.z1i_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.a1j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b1j_1) | 0;
    result = imul(result, 31) + (this.c1j_1 == null ? 0 : this.c1j_1.hashCode()) | 0;
    return result;
  };
  protoOf(Citation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Citation))
      return false;
    var tmp0_other_with_cast = other instanceof Citation ? other : THROW_CCE();
    if (!this.z1i_1.equals(tmp0_other_with_cast.z1i_1))
      return false;
    if (!(this.a1j_1 === tmp0_other_with_cast.a1j_1))
      return false;
    if (!(this.b1j_1 === tmp0_other_with_cast.b1j_1))
      return false;
    if (!equals(this.c1j_1, tmp0_other_with_cast.c1j_1))
      return false;
    return true;
  };
  function Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? emptyList() : nonPrisEnCompte;
    this.t1i_1 = question;
    this.u1i_1 = enonce;
    this.v1i_1 = citations;
    this.w1i_1 = indisponibleHorsLigne;
    this.x1i_1 = nonPrisEnCompte;
  }
  protoOf(Reponse).y1i = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.v1i_1.j();
  };
  protoOf(Reponse).m1q = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) {
    return new Reponse(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).n1q = function (question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte, $super) {
    question = question === VOID ? this.t1i_1 : question;
    enonce = enonce === VOID ? this.u1i_1 : enonce;
    citations = citations === VOID ? this.v1i_1 : citations;
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? this.w1i_1 : indisponibleHorsLigne;
    nonPrisEnCompte = nonPrisEnCompte === VOID ? this.x1i_1 : nonPrisEnCompte;
    return $super === VOID ? this.m1q(question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte) : $super.m1q.call(this, question, enonce, citations, indisponibleHorsLigne, nonPrisEnCompte);
  };
  protoOf(Reponse).toString = function () {
    return 'Reponse(question=' + this.t1i_1 + ', enonce=' + this.u1i_1 + ', citations=' + toString_0(this.v1i_1) + ', indisponibleHorsLigne=' + toString_0(this.w1i_1) + ', nonPrisEnCompte=' + toString_0(this.x1i_1) + ')';
  };
  protoOf(Reponse).hashCode = function () {
    var result = getStringHashCode(this.t1i_1);
    result = imul(result, 31) + getStringHashCode(this.u1i_1) | 0;
    result = imul(result, 31) + hashCode(this.v1i_1) | 0;
    result = imul(result, 31) + hashCode(this.w1i_1) | 0;
    result = imul(result, 31) + hashCode(this.x1i_1) | 0;
    return result;
  };
  protoOf(Reponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reponse))
      return false;
    var tmp0_other_with_cast = other instanceof Reponse ? other : THROW_CCE();
    if (!(this.t1i_1 === tmp0_other_with_cast.t1i_1))
      return false;
    if (!(this.u1i_1 === tmp0_other_with_cast.u1i_1))
      return false;
    if (!equals(this.v1i_1, tmp0_other_with_cast.v1i_1))
      return false;
    if (!equals(this.w1i_1, tmp0_other_with_cast.w1i_1))
      return false;
    if (!equals(this.x1i_1, tmp0_other_with_cast.x1i_1))
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
      var tmp$ret$0 = new Citation(item.w1j_1, item.y1j_1, libelle(RechercheLocale_getInstance(), item.x1j_1) + ' de ' + periode.q1q_1, item.v1j_1);
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
      var tmp$ret$3 = item_0.z1i_1;
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
      if (!dejaCitees.r1(element.i1q_1)) {
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
      var tmp$ret$9 = new Citation(item_1.i1q_1, item_1.j1q_1, 'capture du ' + item_1.k1q_1);
      destination_2.e(tmp$ret$9);
    }
    var surCaptures = destination_2;
    var tmp = plus_1(surElements, surCaptures);
    var tmp_0 = RechercheLocale$tout$lambda;
    var citations = take_0(sortedWith(tmp, compareBy([tmp_0, RechercheLocale$tout$lambda_0])), max);
    return reponse($this, '', citations, emptyList());
  }
  function avec(_this__u8e3s4, $this, ecarte) {
    return ecarte.j() ? _this__u8e3s4 : _this__u8e3s4.n1q(VOID, VOID, VOID, VOID, ecarte);
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
  function sam$kotlin_Comparator$0_6(function_0) {
    this.r1q_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_6).tc = function (a, b) {
    return this.r1q_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_6).y2 = function () {
    return this.r1q_1;
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
  function RechercheLocale$parMots$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp = b.zb_1;
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp$ret$1 = a.zb_1;
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
        var tmp_0 = a.ac_1.z1i_1.d1j_1;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp$ret$1 = b.ac_1.z1i_1.d1j_1;
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
        var tmp0_safe_receiver = a.ac_1.c1j_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1j_1;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp0_safe_receiver_0 = b.ac_1.c1j_1;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.e1j_1;
        var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function RechercheLocale$tout$lambda(it) {
    return it.z1i_1.d1j_1;
  }
  function RechercheLocale$tout$lambda_0(it) {
    var tmp0_safe_receiver = it.c1j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1j_1;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function RechercheLocale$parPersonne$lambda(it) {
    return etatOrdinal(RechercheLocale_getInstance(), it.f1k_1);
  }
  function RechercheLocale$parPersonne$lambda_0(it) {
    return it.v1j_1.e1j_1;
  }
  function RechercheLocale() {
    RechercheLocale_instance = this;
    this.a1n_1 = 'Rien \xE0 ce sujet dans ce qui a \xE9t\xE9 captur\xE9.';
    this.b1n_1 = listOf(['analyse des captures pas encore trait\xE9es', 'reformulation de la r\xE9ponse en langage naturel']);
    this.c1n_1 = 10;
  }
  protoOf(RechercheLocale).s1q = function (requete, elements, captures, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.b1n_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$0 = to(item, Texte_getInstance().d1p(requete, item.y1j_1));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element.ac_1 > 0.0) {
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
      var element_0 = item_0.bc();
      var note = item_0.cc();
      var tmp$ret$6 = to(note, new Citation(element_0.w1j_1, element_0.y1j_1, '\xE9l\xE9ment \xAB ' + libelle(RechercheLocale_getInstance(), element_0.x1j_1) + ' \xBB contenant les mots cherch\xE9s', element_0.v1j_1));
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
      var tmp$ret$9 = item_1.ac_1.z1i_1;
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
      if (!dejaCitees.r1(element_1.i1q_1)) {
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
      var tmp$ret$15 = to(item_2, Texte_getInstance().d1p(requete, item_2.j1q_1));
      destination_4.e(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_5 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_5 = destination_4.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element_2.ac_1 > 0.0) {
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
      var source = item_3.bc();
      var note_0 = item_3.cc();
      var tmp$ret$21 = to(note_0, new Citation(source.i1q_1, source.j1q_1, 'capture du ' + source.k1q_1 + ' contenant les mots cherch\xE9s'));
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
      var tmp$ret$27 = item_4.ac_1;
      destination_7.e(tmp$ret$27);
    }
    var citations = destination_7;
    return reponse(this, requete, citations, indisponibles);
  };
  protoOf(RechercheLocale).d1n = function (requete, elements, captures, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.s1q(requete, elements, captures, reseau, max) : $super.s1q.call(this, requete, elements, captures, reseau, max);
  };
  protoOf(RechercheLocale).t1q = function (requete, elements, captures, aujourdhui, reseau, max) {
    var tmp;
    if (RepereTemporel_getInstance().y1q(requete) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parQuestion.<anonymous>' call
      tmp = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
    }
    var ecarte = listOfNotNull_0(tmp);
    var tmp1_elvis_lhs = RepereTemporel_getInstance().z1q(requete, aujourdhui);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return avec(this.s1q(requete, elements, captures, reseau, max), this, ecarte);
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
      if (!(element.l1q_1 == null) && repere.a1r_1.c1r(element.l1q_1)) {
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
      var tmp$ret$5 = item.i1q_1;
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
      if (idsPeriode.r1(element_0.w1j_1)) {
        destination_1.e(element_0);
      }
    }
    var elementsPeriode = destination_1;
    var reste = RepereTemporel_getInstance().d1r(requete, repere);
    var parLesMots = isBlank(reste) ? null : this.s1q(reste, elementsPeriode, dansLaPeriode, reseau, max);
    var motsMuets = parLesMots == null || parLesMots.v1i_1.j();
    var brut = motsMuets ? tout(this, dansLaPeriode, elementsPeriode, repere.a1r_1, max) : ensureNotNull(parLesMots);
    var enonce = brut.v1i_1.j() ? 'Rien de captur\xE9 ' + repere.a1r_1.q1q_1 + '.' : motsMuets && !isBlank(reste) ? 'Aucun de ces mots dans les captures de ' + repere.a1r_1.q1q_1 + ' ; ' + ('voici les ' + brut.v1i_1.l() + " qu'elle contient.") : '' + brut.v1i_1.l() + ' \xE9l\xE9ment(s) de ' + repere.a1r_1.q1q_1 + ', ' + 'chacun rattach\xE9 \xE0 sa capture source.';
    return brut.n1q(requete, enonce, VOID, reseau ? emptyList() : this.b1n_1, ecarte);
  };
  protoOf(RechercheLocale).f1n = function (requete, elements, captures, aujourdhui, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.t1q(requete, elements, captures, aujourdhui, reseau, max) : $super.t1q.call(this, requete, elements, captures, aujourdhui, reseau, max);
  };
  protoOf(RechercheLocale).e1r = function (personne, elements, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.b1n_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      if (!(element.c1k_1 == null) && Texte_getInstance().f1r(element.c1k_1, personne)) {
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
      var tmp$ret$3 = new Citation(item.w1j_1, item.y1j_1, libelle(RechercheLocale_getInstance(), item.x1j_1) + ' ' + etat(RechercheLocale_getInstance(), item.f1k_1) + ' envers ' + personne, item.v1j_1);
      destination_0.e(tmp$ret$3);
    }
    var citations = destination_0;
    return reponse(this, 'ce qui est en cours avec ' + personne, citations, indisponibles);
  };
  protoOf(RechercheLocale).h1n = function (personne, elements, reseau, max, $super) {
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.e1r(personne, elements, reseau, max) : $super.e1r.call(this, personne, elements, reseau, max);
  };
  var RechercheLocale_instance;
  function RechercheLocale_getInstance() {
    if (RechercheLocale_instance == null)
      new RechercheLocale();
    return RechercheLocale_instance;
  }
  function Periode(du, au, libelle) {
    this.o1q_1 = du;
    this.p1q_1 = au;
    this.q1q_1 = libelle;
    // Inline function 'kotlin.require' call
    if (!(this.o1q_1.y11(this.p1q_1) <= 0)) {
      // Inline function 'app.zenote.core.recherche.Periode.<anonymous>' call
      var message = 'Une p\xE9riode dont le d\xE9but suit la fin ne d\xE9signe aucun jour.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(Periode).c1r = function (jour) {
    return jour.y11(this.o1q_1) >= 0 && jour.y11(this.p1q_1) <= 0;
  };
  protoOf(Periode).toString = function () {
    return 'Periode(du=' + this.o1q_1.toString() + ', au=' + this.p1q_1.toString() + ', libelle=' + this.q1q_1 + ')';
  };
  protoOf(Periode).hashCode = function () {
    var result = this.o1q_1.hashCode();
    result = imul(result, 31) + this.p1q_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.q1q_1) | 0;
    return result;
  };
  protoOf(Periode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Periode))
      return false;
    var tmp0_other_with_cast = other instanceof Periode ? other : THROW_CCE();
    if (!this.o1q_1.equals(tmp0_other_with_cast.o1q_1))
      return false;
    if (!this.p1q_1.equals(tmp0_other_with_cast.p1q_1))
      return false;
    if (!(this.q1q_1 === tmp0_other_with_cast.q1q_1))
      return false;
    return true;
  };
  function Repere(periode, expression) {
    this.a1r_1 = periode;
    this.b1r_1 = expression;
  }
  protoOf(Repere).toString = function () {
    return 'Repere(periode=' + this.a1r_1.toString() + ', expression=' + this.b1r_1 + ')';
  };
  protoOf(Repere).hashCode = function () {
    var result = this.a1r_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.b1r_1) | 0;
    return result;
  };
  protoOf(Repere).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Repere))
      return false;
    var tmp0_other_with_cast = other instanceof Repere ? other : THROW_CCE();
    if (!this.a1r_1.equals(tmp0_other_with_cast.a1r_1))
      return false;
    if (!(this.b1r_1 === tmp0_other_with_cast.b1r_1))
      return false;
    return true;
  };
  function aplatir($this, requete) {
    // Inline function 'kotlin.text.map' call
    var this_0 = Texte_getInstance().b1p(requete);
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
    var lundi = minus(date, DatePeriod_init_$Create$(VOID, VOID, get_isoDayNumber(date.ss()) - 1 | 0));
    return new Periode(lundi, plus_2(lundi, DatePeriod_init_$Create$(VOID, VOID, 6)), libelle);
  }
  function moisDe($this, date, libelle) {
    var premier = LocalDate_init_$Create$(date.ao(), date.x11(), 1);
    return new Periode(premier, minus(plus_2(premier, DatePeriod_init_$Create$(VOID, 1)), DatePeriod_init_$Create$(VOID, VOID, 1)), libelle);
  }
  function dernier($this, date, jourVoulu, libelle) {
    var recul = get_isoDayNumber(date.ss()) - get_isoDayNumber(jourVoulu) | 0;
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
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? $this.x1q_1.y1(apres.k(0)) : tmp1_elvis_lhs;
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
    var recul = _destruct__k2r9zo.bc();
    var nom = _destruct__k2r9zo.cc();
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
    var samedi = dernier(RepereTemporel_getInstance(), d, DayOfWeek_SATURDAY_getInstance(), '').o1q_1;
    return new Periode(samedi, plus_2(samedi, DatePeriod_init_$Create$(VOID, VOID, 1)), 'le week-end dernier');
  }
  function RepereTemporel$formes$lambda_8(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.ao(), d.x11(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
  }
  function RepereTemporel$formes$lambda_9(d) {
    return moisDe(RepereTemporel_getInstance(), minus(LocalDate_init_$Create$(d.ao(), d.x11(), 1), DatePeriod_init_$Create$(VOID, VOID, 1)), 'le mois dernier');
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
    this.u1q_1 = listOf(['en voiture', 'dans le train', 'dans l avion', 'en marchant', 'en reunion', 'au bureau', 'a la maison', 'au telephone', 'en visio', 'dans le metro']);
    this.v1q_1 = "le contexte de capture (le lieu, l'activit\xE9) : ZeNote ne l'enregistre pas \u2014 aucun signal de position n'est collect\xE9";
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
    tmp.w1q_1 = listOf([tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, to('dimanche dernier', RepereTemporel$formes$lambda_17)]);
    this.x1q_1 = mapOf([to('un', 1), to('une', 1), to('deux', 2), to('trois', 3), to('quatre', 4), to('cinq', 5), to('six', 6), to('sept', 7), to('huit', 8), to('neuf', 9), to('dix', 10), to('quinze', 15)]);
  }
  protoOf(RepereTemporel).y1q = function (requete) {
    var plie = aplatir(this, requete);
    var tmp0 = this.u1q_1;
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
  protoOf(RepereTemporel).z1q = function (requete, aujourdhui) {
    var plie = aplatir(this, requete);
    var _iterator__ex2g4s = this.w1q_1.g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      var expression = _destruct__k2r9zo.bc();
      var calcul = _destruct__k2r9zo.cc();
      if (contains(plie, ' ' + expression + ' '))
        return new Repere(calcul(aujourdhui), expression);
    }
    return depuisCompte(this, plie, aujourdhui);
  };
  protoOf(RepereTemporel).d1r = function (requete, repere) {
    var motsDuRepere = toSet(Texte_getInstance().g1r(repere.b1r_1));
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = Texte_getInstance().g1r(requete);
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
    this.e1o_1 = element;
    this.f1o_1 = motif;
    this.g1o_1 = explication;
    this.h1o_1 = issues;
  }
  protoOf(ElementARevoir).toString = function () {
    return 'ElementARevoir(element=' + this.e1o_1.toString() + ', motif=' + this.f1o_1.toString() + ', explication=' + this.g1o_1 + ', issues=' + toString_0(this.h1o_1) + ')';
  };
  protoOf(ElementARevoir).hashCode = function () {
    var result = this.e1o_1.hashCode();
    result = imul(result, 31) + this.f1o_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.g1o_1) | 0;
    result = imul(result, 31) + hashCode(this.h1o_1) | 0;
    return result;
  };
  protoOf(ElementARevoir).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementARevoir))
      return false;
    var tmp0_other_with_cast = other instanceof ElementARevoir ? other : THROW_CCE();
    if (!this.e1o_1.equals(tmp0_other_with_cast.e1o_1))
      return false;
    if (!this.f1o_1.equals(tmp0_other_with_cast.f1o_1))
      return false;
    if (!(this.g1o_1 === tmp0_other_with_cast.g1o_1))
      return false;
    if (!equals(this.h1o_1, tmp0_other_with_cast.h1o_1))
      return false;
    return true;
  };
  function SuiviElement(elementId, ecarteFois, vuLe) {
    ecarteFois = ecarteFois === VOID ? 0 : ecarteFois;
    vuLe = vuLe === VOID ? null : vuLe;
    this.h1r_1 = elementId;
    this.i1r_1 = ecarteFois;
    this.j1r_1 = vuLe;
  }
  protoOf(SuiviElement).toString = function () {
    return 'SuiviElement(elementId=' + this.h1r_1 + ', ecarteFois=' + this.i1r_1 + ', vuLe=' + toString(this.j1r_1) + ')';
  };
  protoOf(SuiviElement).hashCode = function () {
    var result = getStringHashCode(this.h1r_1);
    result = imul(result, 31) + this.i1r_1 | 0;
    result = imul(result, 31) + (this.j1r_1 == null ? 0 : this.j1r_1.hashCode()) | 0;
    return result;
  };
  protoOf(SuiviElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviElement))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviElement ? other : THROW_CCE();
    if (!(this.h1r_1 === tmp0_other_with_cast.h1r_1))
      return false;
    if (!(this.i1r_1 === tmp0_other_with_cast.i1r_1))
      return false;
    if (!equals(this.j1r_1, tmp0_other_with_cast.j1r_1))
      return false;
    return true;
  };
  function ecarteTropSouvent($this, element, suivi) {
    if (suivi.i1r_1 < 3)
      return null;
    return new ElementARevoir(element, MotifRevoir_ECARTE_PLUSIEURS_FOIS_getInstance(), '\xE9cart\xE9 ' + suivi.i1r_1 + " fois : ce n'est sans doute pas le bon d\xE9coupage", listOf([IssueRevoir_REFORMULER_getInstance(), IssueRevoir_DECOUPER_getInstance(), IssueRevoir_ABANDONNER_getInstance()]));
  }
  function dormant($this, element, suivi, aujourdhui) {
    if (!element.f1k_1.equals(Verdict_ACCEPTE_getInstance()))
      return null;
    var tmp0_elvis_lhs = suivi.j1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var depuis = tmp;
    var jours = aujourdhui.wq() - depuis.wq() | 0;
    var seuil = $this.k1r(element.b1k_1);
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
  function sam$kotlin_Comparator$0_7(function_0) {
    this.l1r_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_7).tc = function (a, b) {
    return this.l1r_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_7).y2 = function () {
    return this.l1r_1;
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
  function ARevoir$aRevoir$lambda(it) {
    return !it.f1k_1.equals(Verdict_REJETE_getInstance()) && it.x1j_1.h1p();
  }
  function ARevoir$aRevoir$lambda_0($parId, $aujourdhui) {
    return function (element) {
      var tmp0_elvis_lhs = $parId.y1(element.v1j_1.e1j_1);
      var suivi = tmp0_elvis_lhs == null ? new SuiviElement(element.v1j_1.e1j_1) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = ecarteTropSouvent(ARevoir_instance, element, suivi);
      return tmp1_elvis_lhs == null ? dormant(ARevoir_instance, element, suivi, $aujourdhui) : tmp1_elvis_lhs;
    };
  }
  function ARevoir$aRevoir$lambda_1(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
    var tmp = ordinalPoids(ARevoir_instance, b.e1o_1.b1k_1);
    // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
    var tmp$ret$1 = ordinalPoids(ARevoir_instance, a.e1o_1.b1k_1);
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
        var tmp_0 = a.e1o_1.v1j_1.e1j_1;
        // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
        var tmp$ret$1 = b.e1o_1.v1j_1.e1j_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function ARevoir() {
    this.c1o_1 = 3;
  }
  protoOf(ARevoir).k1r = function (poids) {
    switch (poids == null ? -1 : poids.g2_1) {
      case 2:
        return 14;
      case 1:
        return 30;
      default:
        return 60;
    }
  };
  protoOf(ARevoir).d1o = function (elements, suivis, aujourdhui) {
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(suivis, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = suivis.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.ARevoir.aRevoir.<anonymous>' call
      var tmp$ret$0 = element.h1r_1;
      destination.b2(tmp$ret$0, element);
    }
    var parId = destination;
    var tmp = asSequence(elements);
    var tmp_0 = filter(tmp, ARevoir$aRevoir$lambda);
    var tmp_1 = mapNotNull(tmp_0, ARevoir$aRevoir$lambda_0(parId, aujourdhui));
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_2 = ARevoir$aRevoir$lambda_1;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_0 = new sam$kotlin_Comparator$0_7(tmp_2);
    var tmp_3 = ARevoir$aRevoir$lambda_2(this_0);
    var tmp$ret$4 = new sam$kotlin_Comparator$0_7(tmp_3);
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
    this.w1k_1 = retenues;
    this.x1k_1 = demeurentEnFile;
    this.y1k_1 = motif;
  }
  protoOf(RevueReduite).e1l = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.x1k_1.j();
  };
  protoOf(RevueReduite).toString = function () {
    return 'RevueReduite(retenues=' + toString_0(this.w1k_1) + ', demeurentEnFile=' + toString_0(this.x1k_1) + ', motif=' + this.y1k_1 + ')';
  };
  protoOf(RevueReduite).hashCode = function () {
    var result = hashCode(this.w1k_1);
    result = imul(result, 31) + hashCode(this.x1k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y1k_1) | 0;
    return result;
  };
  protoOf(RevueReduite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueReduite))
      return false;
    var tmp0_other_with_cast = other instanceof RevueReduite ? other : THROW_CCE();
    if (!equals(this.w1k_1, tmp0_other_with_cast.w1k_1))
      return false;
    if (!equals(this.x1k_1, tmp0_other_with_cast.x1k_1))
      return false;
    if (!(this.y1k_1 === tmp0_other_with_cast.y1k_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_8(function_0) {
    this.m1r_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_8).tc = function (a, b) {
    return this.m1r_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_8).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_8).y2 = function () {
    return this.m1r_1;
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
  function Arriere$revueReduite$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs = b.z1k_1.b1k_1;
    var tmp = (tmp0_elvis_lhs == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs).g2_1;
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs_0 = a.z1k_1.b1k_1;
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
        var tmp_0 = a.a1l_1.g2_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.a1l_1.g2_1;
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
        var tmp_0 = a.d1l().e1j_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.d1l().e1j_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Arriere() {
    this.u1k_1 = 12;
  }
  protoOf(Arriere).n1r = function (entrees, charge) {
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
    var this_0 = new sam$kotlin_Comparator$0_8(tmp);
    var tmp_0 = Arriere$revueReduite$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_8(tmp_0);
    var tmp_1 = Arriere$revueReduite$lambda_1(this_1);
    var tmp$ret$3 = new sam$kotlin_Comparator$0_8(tmp_1);
    var parImportance = sortedWith(entrees, tmp$ret$3);
    var retenues = take_0(parImportance, charge);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(retenues, 10));
    var _iterator__ex2g4s = retenues.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
      var tmp$ret$4 = item.d1l();
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
      if (gardees.r1(element.d1l())) {
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
      if (!gardees.r1(element_0.d1l())) {
        destination_1.e(element_0);
      }
    }
    return new RevueReduite(tmp_2, destination_1, 'Beaucoup de choses en attente. Voici les ' + charge + ' plus lourdes ou ' + 'les plus press\xE9es ; le reste demeure en file, intact.');
  };
  protoOf(Arriere).v1k = function (entrees, charge, $super) {
    charge = charge === VOID ? 12 : charge;
    return $super === VOID ? this.n1r(entrees, charge) : $super.n1r.call(this, entrees, charge);
  };
  var Arriere_instance;
  function Arriere_getInstance() {
    return Arriere_instance;
  }
  function EntreeRevue(element, urgence, aConfirmer, planAFournir) {
    this.z1k_1 = element;
    this.a1l_1 = urgence;
    this.b1l_1 = aConfirmer;
    this.c1l_1 = planAFournir;
  }
  protoOf(EntreeRevue).d1l = function () {
    return this.z1k_1.v1j_1;
  };
  protoOf(EntreeRevue).toString = function () {
    return 'EntreeRevue(element=' + this.z1k_1.toString() + ', urgence=' + this.a1l_1.toString() + ', aConfirmer=' + this.b1l_1 + ', planAFournir=' + this.c1l_1 + ')';
  };
  protoOf(EntreeRevue).hashCode = function () {
    var result = this.z1k_1.hashCode();
    result = imul(result, 31) + this.a1l_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.b1l_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.c1l_1) | 0;
    return result;
  };
  protoOf(EntreeRevue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevue))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevue ? other : THROW_CCE();
    if (!this.z1k_1.equals(tmp0_other_with_cast.z1k_1))
      return false;
    if (!this.a1l_1.equals(tmp0_other_with_cast.a1l_1))
      return false;
    if (!(this.b1l_1 === tmp0_other_with_cast.b1l_1))
      return false;
    if (!(this.c1l_1 === tmp0_other_with_cast.c1l_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_9(function_0) {
    this.o1r_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_9).tc = function (a, b) {
    return this.o1r_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_9).compare = function (a, b) {
    return this.tc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_9).y2 = function () {
    return this.o1r_1;
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
  function FileRevue$ordreInterne$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp = a.a1l_1.g2_1;
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp$ret$1 = b.a1l_1.g2_1;
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
        var tmp_0 = b.b1l_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = a.b1l_1;
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
        var tmp_0 = a.d1l().e1j_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = b.d1l().e1j_1;
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
    var this_0 = new sam$kotlin_Comparator$0_9(tmp_0);
    var tmp_1 = FileRevue$ordreInterne$lambda_0(this_0);
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_1 = new sam$kotlin_Comparator$0_9(tmp_1);
    var tmp_2 = FileRevue$ordreInterne$lambda_1(this_1);
    tmp.s1k_1 = new sam$kotlin_Comparator$0_9(tmp_2);
  }
  protoOf(FileRevue).t1k = function (element, aujourdhui) {
    return new EntreeRevue(element, Priorisation_getInstance().t1p(element.a1k_1, aujourdhui), element.g1k_1, element.x1j_1.h1p() && element.e1k_1 == null);
  };
  var FileRevue_instance;
  function FileRevue_getInstance() {
    if (FileRevue_instance == null)
      new FileRevue();
    return FileRevue_instance;
  }
  function Suivi(elementId, derniereNouvelle) {
    this.p1r_1 = elementId;
    this.q1r_1 = derniereNouvelle;
  }
  protoOf(Suivi).toString = function () {
    return 'Suivi(elementId=' + this.p1r_1.toString() + ', derniereNouvelle=' + this.q1r_1.toString() + ')';
  };
  protoOf(Suivi).hashCode = function () {
    var result = this.p1r_1.hashCode();
    result = imul(result, 31) + this.q1r_1.hashCode() | 0;
    return result;
  };
  protoOf(Suivi).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Suivi))
      return false;
    var tmp0_other_with_cast = other instanceof Suivi ? other : THROW_CCE();
    if (!this.p1r_1.equals(tmp0_other_with_cast.p1r_1))
      return false;
    if (!this.q1r_1.equals(tmp0_other_with_cast.q1r_1))
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
    this.j1l_1 = element;
    this.k1l_1 = motif;
    this.l1l_1 = options;
  }
  protoOf(PropositionRelance).toString = function () {
    return 'PropositionRelance(element=' + this.j1l_1.toString() + ', motif=' + this.k1l_1 + ', options=' + toString_0(this.l1l_1) + ')';
  };
  protoOf(PropositionRelance).hashCode = function () {
    var result = this.j1l_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.k1l_1) | 0;
    result = imul(result, 31) + hashCode(this.l1l_1) | 0;
    return result;
  };
  protoOf(PropositionRelance).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionRelance))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionRelance ? other : THROW_CCE();
    if (!this.j1l_1.equals(tmp0_other_with_cast.j1l_1))
      return false;
    if (!(this.k1l_1 === tmp0_other_with_cast.k1l_1))
      return false;
    if (!equals(this.l1l_1, tmp0_other_with_cast.l1l_1))
      return false;
    return true;
  };
  function engagement($this, element, aujourdhui) {
    var tmp0_elvis_lhs = element.a1k_1;
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
    var tmp1_safe_receiver = element.c1k_1;
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
    var delai = $this.r1r(element.c1k_1, delaisObserves);
    if (silence <= delai)
      return null;
    var tmp0_elvis_lhs = element.c1k_1;
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
        var tmp0_elvis_lhs_0 = element.c1k_1;
        if (tmp_0.f1r(element_0, tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0)) {
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
    var tmp0_safe_receiver = it.j1l_1.a1k_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return tmp1_elvis_lhs == null ? '9999' : tmp1_elvis_lhs;
  }
  function Relance$aRelancer$lambda_0(it) {
    return it.j1l_1.v1j_1.e1j_1;
  }
  function Relance() {
    this.g1l_1 = 3;
    this.h1l_1 = 7;
  }
  protoOf(Relance).r1r = function (personne, observes) {
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
      if (Texte_getInstance().f1r(element.u1(), personne)) {
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
  protoOf(Relance).i1l = function (elements, aujourdhui, suivis, delaisObserves) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(suivis, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = suivis.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.p1r_1, element.q1r_1);
      destination.b2(pair.zb_1, pair.ac_1);
    }
    var parElement = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = elements.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      if (element_0.f1k_1.equals(Verdict_ACCEPTE_getInstance())) {
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
      switch (element_1.x1j_1.g2_1) {
        case 1:
          tmp = engagement(Relance_instance, element_1, aujourdhui);
          break;
        case 2:
          var tmp_0 = Relance_instance;
          var tmp1_elvis_lhs = parElement.y1(element_1.v1j_1);
          tmp = attente(tmp_0, element_1, tmp1_elvis_lhs == null ? element_1.a1k_1 : tmp1_elvis_lhs, aujourdhui, delaisObserves);
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
    this.s1r_1 = mot;
    this.t1r_1 = suite;
    var tmp = this;
    // Inline function 'kotlin.text.filter' call
    var tmp0 = Texte_getInstance().b1p(this.s1r_1);
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
    tmp.u1r_1 = destination.toString();
    var tmp_0 = this;
    var tmp_1;
    var tmp_2;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.u1r_1;
    if (charSequenceLength(this_0) > 0) {
      var tmp0_safe_receiver = firstOrNull_0(this.s1r_1);
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
      tmp_1 = estAllongementDeBruit(Disfluences_getInstance(), this.u1r_1);
    } else {
      tmp_1 = false;
    }
    tmp_0.v1r_1 = tmp_1;
    var tmp_5 = this;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp0_safe_receiver_0 = firstOrNull_0(this.s1r_1);
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
      var tmp0_0 = this.u1r_1;
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
      tmp_7 = Disfluences_getInstance().u1m_1.r1(this.u1r_1);
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = Disfluences_getInstance().v1m_1.r1(this.u1r_1);
    }
    tmp_5.w1r_1 = tmp_6;
  }
  function estAllongementDeBruit($this, forme) {
    if ($this.t1m_1.r1(forme))
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
        this_0.l7(element);
      }
    }
    var ecrasee = this_0.toString();
    return $this.t1m_1.r1(ecrasee);
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
              if (!(jetons.k(it).u1r_1 === jetons.k(it + taille | 0).u1r_1)) {
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
              var this_0 = jetons.k(it_0).u1r_1;
              if (charSequenceLength(this_0) === 0) {
                tmp_3 = true;
              } else {
                tmp_3 = jetons.k(it_0).w1r_1;
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
    return it.s1r_1 + it.t1r_1;
  }
  function Disfluences() {
    Disfluences_instance = this;
    this.t1m_1 = setOf_0(['euh', 'heu', 'eh', 'hum', 'hmm', 'mmh', 'mm', 'hein', 'ben', 'bah', 'beh']);
    this.u1m_1 = setOf_0(['ne', 'n', 'pas', 'non', 'jamais', 'rien', 'aucun', 'aucune', 'ni', 'sans']);
    this.v1m_1 = setOf_0(['zero', 'un', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'cent', 'cents', 'mille', 'million', 'millions', 'milliard', 'milliards', 'demi', 'quart']);
    this.w1m_1 = 3;
  }
  protoOf(Disfluences).x1m = function (brut) {
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
      if (!element.v1r_1) {
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
    this.y1o_1 = '\xE0\xE1\xE2\xE3\xE4\xE5\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF1\xF2\xF3\xF4\xF5\xF6\xF9\xFA\xFB\xFC\xFD\xFF';
    this.z1o_1 = 'aaaaaaceeeeiiiinooooouuuuyy';
    this.a1p_1 = setOf_0(['le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux', 'et', 'ou', 'a', '\xE0', 'en', 'dans', 'sur', 'pour', 'par', 'avec', 'que', 'qui', 'quoi', 'ce', 'cet', 'cette', 'ces', 'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'est', 'sont', 'ai', 'as', 'ont', 'etait', 'ete', 'pas', 'ne', 'plus']);
  }
  protoOf(Texte).b1p = function (texte) {
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
  protoOf(Texte).g1r = function (texte) {
    // Inline function 'kotlin.text.map' call
    var this_0 = this.b1p(texte);
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
      if (element.length > 1 && !Texte_getInstance().a1p_1.r1(element)) {
        destination_0.e(element);
      }
    }
    return destination_0;
  };
  protoOf(Texte).x1r = function (texte) {
    return toSet(this.g1r(texte));
  };
  protoOf(Texte).d1p = function (requete, texte) {
    var demandes = this.x1r(requete);
    if (demandes.j())
      return 0.0;
    var presents = this.x1r(texte);
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
  protoOf(Texte).f1r = function (a, b) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(a) ? a : THROW_CCE()));
    var tmp = this.b1p(tmp$ret$0);
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1 = toString_0(trim(isCharSequence(b) ? b : THROW_CCE()));
    return tmp === this.b1p(tmp$ret$1);
  };
  var Texte_instance;
  function Texte_getInstance() {
    if (Texte_instance == null)
      new Texte();
    return Texte_instance;
  }
  function ZeNoteRegles() {
    this.version = '12';
  }
  protoOf(ZeNoteRegles).maintenant = function (elementsJson, aujourdhui) {
    return Regles_getInstance().j1k(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).revue = function (elementsJson, aujourdhui) {
    return Regles_getInstance().r1k(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).transcriptionLisible = function (brut) {
    return Regles_getInstance().s1m(brut);
  };
  protoOf(ZeNoteRegles).filtrerAncrage = function (texteSource, elementsJson, passagesIncertainsJson) {
    return Regles_getInstance().y1m(texteSource, elementsJson, passagesIncertainsJson);
  };
  protoOf(ZeNoteRegles).relances = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    return Regles_getInstance().f1l(elementsJson, aujourdhui, suivisJson, delaisJson);
  };
  protoOf(ZeNoteRegles).rechercherParMots = function (requete, elementsJson, capturesJson, reseau) {
    return Regles_getInstance().z1m(requete, elementsJson, capturesJson, reseau);
  };
  protoOf(ZeNoteRegles).rechercherParQuestion = function (requete, elementsJson, capturesJson, aujourdhui, reseau) {
    return Regles_getInstance().e1n(requete, elementsJson, capturesJson, aujourdhui, reseau);
  };
  protoOf(ZeNoteRegles).rappels = function (elementsJson, maintenant, suivisJson) {
    return Regles_getInstance().m1l(elementsJson, maintenant, suivisJson);
  };
  protoOf(ZeNoteRegles).referencesAResoudre = function (capturesJson, elementsJson, maintenant) {
    return Regles_getInstance().i1n(capturesJson, elementsJson, maintenant);
  };
  protoOf(ZeNoteRegles).aRevoir = function (elementsJson, suivisJson, aujourdhui) {
    return Regles_getInstance().b1o(elementsJson, suivisJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).creneauProtege = function (elementsJson, aujourdhui) {
    return Regles_getInstance().i1o(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).signalCreneau = function (renoncementsDAffilee) {
    return Regles_getInstance().m1o(renoncementsDAffilee);
  };
  protoOf(ZeNoteRegles).rechercherParPersonne = function (personne, elementsJson, reseau) {
    return Regles_getInstance().g1n(personne, elementsJson, reseau);
  };
  protoOf(ZeNoteRegles).y1r = function () {
    return this.version;
  };
  var ZeNoteRegles_instance;
  function ZeNoteRegles_getInstance() {
    return ZeNoteRegles_instance;
  }
  //region block: post-declaration
  protoOf($serializer).ek = typeParametersSerializers;
  protoOf($serializer_0).ek = typeParametersSerializers;
  protoOf($serializer_1).ek = typeParametersSerializers;
  protoOf($serializer_2).ek = typeParametersSerializers;
  protoOf($serializer_3).ek = typeParametersSerializers;
  protoOf($serializer_4).ek = typeParametersSerializers;
  protoOf($serializer_5).ek = typeParametersSerializers;
  protoOf($serializer_6).ek = typeParametersSerializers;
  protoOf($serializer_7).ek = typeParametersSerializers;
  protoOf($serializer_8).ek = typeParametersSerializers;
  protoOf($serializer_9).ek = typeParametersSerializers;
  protoOf($serializer_10).ek = typeParametersSerializers;
  protoOf($serializer_11).ek = typeParametersSerializers;
  protoOf($serializer_12).ek = typeParametersSerializers;
  protoOf($serializer_13).ek = typeParametersSerializers;
  protoOf($serializer_14).ek = typeParametersSerializers;
  protoOf($serializer_15).ek = typeParametersSerializers;
  protoOf($serializer_16).ek = typeParametersSerializers;
  protoOf($serializer_17).ek = typeParametersSerializers;
  protoOf($serializer_18).ek = typeParametersSerializers;
  protoOf($serializer_19).ek = typeParametersSerializers;
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
  Companion_instance_19 = new Companion_18();
  ResolutionReferences_instance = new ResolutionReferences();
  Companion_instance_21 = new Companion_20();
  CreneauProtege_instance = new CreneauProtege();
  Companion_instance_22 = new Companion_21();
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

