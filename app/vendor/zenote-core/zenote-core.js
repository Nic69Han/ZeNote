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
  var protoOf = kotlin_kotlin.$_$.p4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.k1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var initMetadataForObject = kotlin_kotlin.$_$.g4;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.o4;
  var toString = kotlin_kotlin.$_$.q6;
  var getStringHashCode = kotlin_kotlin.$_$.z3;
  var getNumberHashCode = kotlin_kotlin.$_$.x3;
  var getBooleanHashCode = kotlin_kotlin.$_$.w3;
  var equals = kotlin_kotlin.$_$.u3;
  var initMetadataForClass = kotlin_kotlin.$_$.b4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toString_0 = kotlin_kotlin.$_$.s4;
  var hashCode = kotlin_kotlin.$_$.a4;
  var emptyList = kotlin_kotlin.$_$.a2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var Companion_instance = kotlin_kotlin.$_$.j1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.e1;
  var createFailure = kotlin_kotlin.$_$.i6;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.f1;
  var isBlank = kotlin_kotlin.$_$.h5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.g1;
  var listOfNotNull = kotlin_kotlin.$_$.n2;
  var Collection = kotlin_kotlin.$_$.m1;
  var isInterface = kotlin_kotlin.$_$.i4;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var FunctionAdapter = kotlin_kotlin.$_$.k3;
  var Comparator = kotlin_kotlin.$_$.x5;
  var compareValues = kotlin_kotlin.$_$.g3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.y;
  var compareTo = kotlin_kotlin.$_$.s3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var mapCapacity = kotlin_kotlin.$_$.q2;
  var coerceAtLeast = kotlin_kotlin.$_$.u4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var getValue = kotlin_kotlin.$_$.e2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var sortedWith = kotlin_kotlin.$_$.a3;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.h1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u;
  var THROW_IAE = kotlin_kotlin.$_$.f6;
  var Enum = kotlin_kotlin.$_$.a6;
  var Long = kotlin_kotlin.$_$.d6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o6;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var take = kotlin_kotlin.$_$.b3;
  var listOf = kotlin_kotlin.$_$.p2;
  var to = kotlin_kotlin.$_$.r6;
  var toSet = kotlin_kotlin.$_$.e3;
  var plus = kotlin_kotlin.$_$.t2;
  var compareBy = kotlin_kotlin.$_$.f3;
  var setOf = kotlin_kotlin.$_$.w2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n;
  var charSequenceLength = kotlin_kotlin.$_$.q3;
  var charSequenceGet = kotlin_kotlin.$_$.p3;
  var indexOf = kotlin_kotlin.$_$.g5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a1;
  var isLetterOrDigit = kotlin_kotlin.$_$.i5;
  var Char = kotlin_kotlin.$_$.v5;
  var joinToString = kotlin_kotlin.$_$.h2;
  var charArrayOf = kotlin_kotlin.$_$.n3;
  var split = kotlin_kotlin.$_$.n5;
  var checkCountOverflow = kotlin_kotlin.$_$.s1;
  var isCharSequence = kotlin_kotlin.$_$.h4;
  var trim = kotlin_kotlin.$_$.u5;
  var defineProp = kotlin_kotlin.$_$.t3;
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
  protoOf(Companion).py = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ElementJson', this, 21);
    tmp0_serialDesc.jh('id', false);
    tmp0_serialDesc.jh('captureId', false);
    tmp0_serialDesc.jh('type', false);
    tmp0_serialDesc.jh('texte', false);
    tmp0_serialDesc.jh('debutCar', false);
    tmp0_serialDesc.jh('finCar', false);
    tmp0_serialDesc.jh('debutMs', true);
    tmp0_serialDesc.jh('finMs', true);
    tmp0_serialDesc.jh('echeance', true);
    tmp0_serialDesc.jh('echeanceConfiance', true);
    tmp0_serialDesc.jh('echeanceIndice', true);
    tmp0_serialDesc.jh('poids', true);
    tmp0_serialDesc.jh('poidsConfiance', true);
    tmp0_serialDesc.jh('poidsIndice', true);
    tmp0_serialDesc.jh('interlocuteur', true);
    tmp0_serialDesc.jh('interlocuteurConfiance', true);
    tmp0_serialDesc.jh('sphere', true);
    tmp0_serialDesc.jh('planDeclencheur', true);
    tmp0_serialDesc.jh('planAction', true);
    tmp0_serialDesc.jh('verdict', true);
    tmp0_serialDesc.jh('corrigeParHumain', true);
    this.qy_1 = tmp0_serialDesc;
  }
  protoOf($serializer).ry = function (encoder, value) {
    var tmp0_desc = this.qy_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    tmp1_output.yd(tmp0_desc, 0, value.sy_1);
    tmp1_output.yd(tmp0_desc, 1, value.ty_1);
    tmp1_output.yd(tmp0_desc, 2, value.uy_1);
    tmp1_output.yd(tmp0_desc, 3, value.vy_1);
    tmp1_output.xd(tmp0_desc, 4, value.wy_1);
    tmp1_output.xd(tmp0_desc, 5, value.xy_1);
    if (tmp1_output.fe(tmp0_desc, 6) ? true : !(value.yy_1 == null)) {
      tmp1_output.be(tmp0_desc, 6, LongSerializer_getInstance(), value.yy_1);
    }
    if (tmp1_output.fe(tmp0_desc, 7) ? true : !(value.zy_1 == null)) {
      tmp1_output.be(tmp0_desc, 7, LongSerializer_getInstance(), value.zy_1);
    }
    if (tmp1_output.fe(tmp0_desc, 8) ? true : !(value.az_1 == null)) {
      tmp1_output.be(tmp0_desc, 8, StringSerializer_getInstance(), value.az_1);
    }
    if (tmp1_output.fe(tmp0_desc, 9) ? true : !(value.bz_1 == null)) {
      tmp1_output.be(tmp0_desc, 9, DoubleSerializer_getInstance(), value.bz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 10) ? true : !(value.cz_1 == null)) {
      tmp1_output.be(tmp0_desc, 10, StringSerializer_getInstance(), value.cz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 11) ? true : !(value.dz_1 == null)) {
      tmp1_output.be(tmp0_desc, 11, StringSerializer_getInstance(), value.dz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 12) ? true : !(value.ez_1 == null)) {
      tmp1_output.be(tmp0_desc, 12, DoubleSerializer_getInstance(), value.ez_1);
    }
    if (tmp1_output.fe(tmp0_desc, 13) ? true : !(value.fz_1 == null)) {
      tmp1_output.be(tmp0_desc, 13, StringSerializer_getInstance(), value.fz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 14) ? true : !(value.gz_1 == null)) {
      tmp1_output.be(tmp0_desc, 14, StringSerializer_getInstance(), value.gz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 15) ? true : !(value.hz_1 == null)) {
      tmp1_output.be(tmp0_desc, 15, DoubleSerializer_getInstance(), value.hz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 16) ? true : !(value.iz_1 == null)) {
      tmp1_output.be(tmp0_desc, 16, StringSerializer_getInstance(), value.iz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 17) ? true : !(value.jz_1 == null)) {
      tmp1_output.be(tmp0_desc, 17, StringSerializer_getInstance(), value.jz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 18) ? true : !(value.kz_1 == null)) {
      tmp1_output.be(tmp0_desc, 18, StringSerializer_getInstance(), value.kz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 19) ? true : !(value.lz_1 === 'EN_ATTENTE')) {
      tmp1_output.yd(tmp0_desc, 19, value.lz_1);
    }
    if (tmp1_output.fe(tmp0_desc, 20) ? true : !(value.mz_1 === false)) {
      tmp1_output.wd(tmp0_desc, 20, value.mz_1);
    }
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer).sb = function (encoder, value) {
    return this.ry(encoder, value instanceof ElementJson ? value : THROW_CCE());
  };
  protoOf($serializer).tb = function (decoder) {
    var tmp0_desc = this.qy_1;
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
    var tmp25_input = decoder.cd(tmp0_desc);
    if (tmp25_input.ld()) {
      tmp4_local0 = tmp25_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp25_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp25_input.gd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp25_input.gd(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp25_input.fd(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp25_input.fd(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp25_input.jd(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp25_input.jd(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp25_input.jd(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp25_input.jd(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp25_input.jd(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp25_input.jd(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp25_input.jd(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp25_input.jd(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp25_input.jd(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp25_input.jd(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp25_input.jd(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp25_input.jd(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp25_input.jd(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp25_input.gd(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp25_input.ed(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp25_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp25_input.gd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp25_input.gd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp25_input.gd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp25_input.gd(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp25_input.fd(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp25_input.fd(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp25_input.jd(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp25_input.jd(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp25_input.jd(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp25_input.jd(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp25_input.jd(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp25_input.jd(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp25_input.jd(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp25_input.jd(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp25_input.jd(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp25_input.jd(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp25_input.jd(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp25_input.jd(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp25_input.jd(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp25_input.gd(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp25_input.ed(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp25_input.dd(tmp0_desc);
    return ElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, null);
  };
  protoOf($serializer).rb = function () {
    return this.qy_1;
  };
  protoOf($serializer).lh = function () {
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
      throwMissingFieldException(seen0, 63, $serializer_getInstance().qy_1);
    }
    $this.sy_1 = id;
    $this.ty_1 = captureId;
    $this.uy_1 = type;
    $this.vy_1 = texte;
    $this.wy_1 = debutCar;
    $this.xy_1 = finCar;
    if (0 === (seen0 & 64))
      $this.yy_1 = null;
    else
      $this.yy_1 = debutMs;
    if (0 === (seen0 & 128))
      $this.zy_1 = null;
    else
      $this.zy_1 = finMs;
    if (0 === (seen0 & 256))
      $this.az_1 = null;
    else
      $this.az_1 = echeance;
    if (0 === (seen0 & 512))
      $this.bz_1 = null;
    else
      $this.bz_1 = echeanceConfiance;
    if (0 === (seen0 & 1024))
      $this.cz_1 = null;
    else
      $this.cz_1 = echeanceIndice;
    if (0 === (seen0 & 2048))
      $this.dz_1 = null;
    else
      $this.dz_1 = poids;
    if (0 === (seen0 & 4096))
      $this.ez_1 = null;
    else
      $this.ez_1 = poidsConfiance;
    if (0 === (seen0 & 8192))
      $this.fz_1 = null;
    else
      $this.fz_1 = poidsIndice;
    if (0 === (seen0 & 16384))
      $this.gz_1 = null;
    else
      $this.gz_1 = interlocuteur;
    if (0 === (seen0 & 32768))
      $this.hz_1 = null;
    else
      $this.hz_1 = interlocuteurConfiance;
    if (0 === (seen0 & 65536))
      $this.iz_1 = null;
    else
      $this.iz_1 = sphere;
    if (0 === (seen0 & 131072))
      $this.jz_1 = null;
    else
      $this.jz_1 = planDeclencheur;
    if (0 === (seen0 & 262144))
      $this.kz_1 = null;
    else
      $this.kz_1 = planAction;
    if (0 === (seen0 & 524288))
      $this.lz_1 = 'EN_ATTENTE';
    else
      $this.lz_1 = verdict;
    if (0 === (seen0 & 1048576))
      $this.mz_1 = false;
    else
      $this.mz_1 = corrigeParHumain;
    return $this;
  }
  function ElementJson_init_$Create$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker) {
    return ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker, objectCreate(protoOf(ElementJson)));
  }
  function ElementJson() {
  }
  protoOf(ElementJson).toString = function () {
    return 'ElementJson(id=' + this.sy_1 + ', captureId=' + this.ty_1 + ', type=' + this.uy_1 + ', texte=' + this.vy_1 + ', debutCar=' + this.wy_1 + ', finCar=' + this.xy_1 + ', debutMs=' + toString(this.yy_1) + ', finMs=' + toString(this.zy_1) + ', echeance=' + this.az_1 + ', echeanceConfiance=' + this.bz_1 + ', echeanceIndice=' + this.cz_1 + ', poids=' + this.dz_1 + ', poidsConfiance=' + this.ez_1 + ', poidsIndice=' + this.fz_1 + ', interlocuteur=' + this.gz_1 + ', interlocuteurConfiance=' + this.hz_1 + ', sphere=' + this.iz_1 + ', planDeclencheur=' + this.jz_1 + ', planAction=' + this.kz_1 + ', verdict=' + this.lz_1 + ', corrigeParHumain=' + this.mz_1 + ')';
  };
  protoOf(ElementJson).hashCode = function () {
    var result = getStringHashCode(this.sy_1);
    result = imul(result, 31) + getStringHashCode(this.ty_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.uy_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.vy_1) | 0;
    result = imul(result, 31) + this.wy_1 | 0;
    result = imul(result, 31) + this.xy_1 | 0;
    result = imul(result, 31) + (this.yy_1 == null ? 0 : this.yy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.zy_1 == null ? 0 : this.zy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.az_1 == null ? 0 : getStringHashCode(this.az_1)) | 0;
    result = imul(result, 31) + (this.bz_1 == null ? 0 : getNumberHashCode(this.bz_1)) | 0;
    result = imul(result, 31) + (this.cz_1 == null ? 0 : getStringHashCode(this.cz_1)) | 0;
    result = imul(result, 31) + (this.dz_1 == null ? 0 : getStringHashCode(this.dz_1)) | 0;
    result = imul(result, 31) + (this.ez_1 == null ? 0 : getNumberHashCode(this.ez_1)) | 0;
    result = imul(result, 31) + (this.fz_1 == null ? 0 : getStringHashCode(this.fz_1)) | 0;
    result = imul(result, 31) + (this.gz_1 == null ? 0 : getStringHashCode(this.gz_1)) | 0;
    result = imul(result, 31) + (this.hz_1 == null ? 0 : getNumberHashCode(this.hz_1)) | 0;
    result = imul(result, 31) + (this.iz_1 == null ? 0 : getStringHashCode(this.iz_1)) | 0;
    result = imul(result, 31) + (this.jz_1 == null ? 0 : getStringHashCode(this.jz_1)) | 0;
    result = imul(result, 31) + (this.kz_1 == null ? 0 : getStringHashCode(this.kz_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.lz_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.mz_1) | 0;
    return result;
  };
  protoOf(ElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof ElementJson ? other : THROW_CCE();
    if (!(this.sy_1 === tmp0_other_with_cast.sy_1))
      return false;
    if (!(this.ty_1 === tmp0_other_with_cast.ty_1))
      return false;
    if (!(this.uy_1 === tmp0_other_with_cast.uy_1))
      return false;
    if (!(this.vy_1 === tmp0_other_with_cast.vy_1))
      return false;
    if (!(this.wy_1 === tmp0_other_with_cast.wy_1))
      return false;
    if (!(this.xy_1 === tmp0_other_with_cast.xy_1))
      return false;
    if (!equals(this.yy_1, tmp0_other_with_cast.yy_1))
      return false;
    if (!equals(this.zy_1, tmp0_other_with_cast.zy_1))
      return false;
    if (!(this.az_1 == tmp0_other_with_cast.az_1))
      return false;
    if (!equals(this.bz_1, tmp0_other_with_cast.bz_1))
      return false;
    if (!(this.cz_1 == tmp0_other_with_cast.cz_1))
      return false;
    if (!(this.dz_1 == tmp0_other_with_cast.dz_1))
      return false;
    if (!equals(this.ez_1, tmp0_other_with_cast.ez_1))
      return false;
    if (!(this.fz_1 == tmp0_other_with_cast.fz_1))
      return false;
    if (!(this.gz_1 == tmp0_other_with_cast.gz_1))
      return false;
    if (!equals(this.hz_1, tmp0_other_with_cast.hz_1))
      return false;
    if (!(this.iz_1 == tmp0_other_with_cast.iz_1))
      return false;
    if (!(this.jz_1 == tmp0_other_with_cast.jz_1))
      return false;
    if (!(this.kz_1 == tmp0_other_with_cast.kz_1))
      return false;
    if (!(this.lz_1 === tmp0_other_with_cast.lz_1))
      return false;
    if (!(this.mz_1 === tmp0_other_with_cast.mz_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).py = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PropositionJson', this, 5);
    tmp0_serialDesc.jh('elementId', false);
    tmp0_serialDesc.jh('texte', false);
    tmp0_serialDesc.jh('raison', false);
    tmp0_serialDesc.jh('poidsEffectif', false);
    tmp0_serialDesc.jh('urgence', false);
    this.nz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).oz = function (encoder, value) {
    var tmp0_desc = this.nz_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    tmp1_output.yd(tmp0_desc, 0, value.pz_1);
    tmp1_output.yd(tmp0_desc, 1, value.qz_1);
    tmp1_output.yd(tmp0_desc, 2, value.rz_1);
    tmp1_output.yd(tmp0_desc, 3, value.sz_1);
    tmp1_output.yd(tmp0_desc, 4, value.tz_1);
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_0).sb = function (encoder, value) {
    return this.oz(encoder, value instanceof PropositionJson ? value : THROW_CCE());
  };
  protoOf($serializer_0).tb = function (decoder) {
    var tmp0_desc = this.nz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.cd(tmp0_desc);
    if (tmp9_input.ld()) {
      tmp4_local0 = tmp9_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.gd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.gd(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.gd(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.gd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.gd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.gd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.gd(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.gd(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.dd(tmp0_desc);
    return PropositionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).rb = function () {
    return this.nz_1;
  };
  protoOf($serializer_0).lh = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_0().nz_1);
    }
    $this.pz_1 = elementId;
    $this.qz_1 = texte;
    $this.rz_1 = raison;
    $this.sz_1 = poidsEffectif;
    $this.tz_1 = urgence;
    return $this;
  }
  function PropositionJson_init_$Create$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker) {
    return PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, objectCreate(protoOf(PropositionJson)));
  }
  function PropositionJson(elementId, texte, raison, poidsEffectif, urgence) {
    this.pz_1 = elementId;
    this.qz_1 = texte;
    this.rz_1 = raison;
    this.sz_1 = poidsEffectif;
    this.tz_1 = urgence;
  }
  protoOf(PropositionJson).toString = function () {
    return 'PropositionJson(elementId=' + this.pz_1 + ', texte=' + this.qz_1 + ', raison=' + this.rz_1 + ', poidsEffectif=' + this.sz_1 + ', urgence=' + this.tz_1 + ')';
  };
  protoOf(PropositionJson).hashCode = function () {
    var result = getStringHashCode(this.pz_1);
    result = imul(result, 31) + getStringHashCode(this.qz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.rz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.sz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.tz_1) | 0;
    return result;
  };
  protoOf(PropositionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionJson))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionJson ? other : THROW_CCE();
    if (!(this.pz_1 === tmp0_other_with_cast.pz_1))
      return false;
    if (!(this.qz_1 === tmp0_other_with_cast.qz_1))
      return false;
    if (!(this.rz_1 === tmp0_other_with_cast.rz_1))
      return false;
    if (!(this.sz_1 === tmp0_other_with_cast.sz_1))
      return false;
    if (!(this.tz_1 === tmp0_other_with_cast.tz_1))
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
    tmp0_serialDesc.jh('element', false);
    tmp0_serialDesc.jh('aConfirmer', false);
    tmp0_serialDesc.jh('planManquant', false);
    tmp0_serialDesc.jh('urgence', false);
    this.uz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).vz = function (encoder, value) {
    var tmp0_desc = this.uz_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    tmp1_output.zd(tmp0_desc, 0, $serializer_getInstance(), value.wz_1);
    tmp1_output.wd(tmp0_desc, 1, value.xz_1);
    tmp1_output.wd(tmp0_desc, 2, value.yz_1);
    tmp1_output.yd(tmp0_desc, 3, value.zz_1);
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_1).sb = function (encoder, value) {
    return this.vz(encoder, value instanceof EntreeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_1).tb = function (decoder) {
    var tmp0_desc = this.uz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.cd(tmp0_desc);
    if (tmp8_input.ld()) {
      tmp4_local0 = tmp8_input.hd(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ed(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ed(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.gd(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.hd(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ed(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ed(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.gd(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.dd(tmp0_desc);
    return EntreeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).rb = function () {
    return this.uz_1;
  };
  protoOf($serializer_1).lh = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_1().uz_1);
    }
    $this.wz_1 = element;
    $this.xz_1 = aConfirmer;
    $this.yz_1 = planManquant;
    $this.zz_1 = urgence;
    return $this;
  }
  function EntreeRevueJson_init_$Create$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker) {
    return EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, objectCreate(protoOf(EntreeRevueJson)));
  }
  function EntreeRevueJson(element, aConfirmer, planManquant, urgence) {
    this.wz_1 = element;
    this.xz_1 = aConfirmer;
    this.yz_1 = planManquant;
    this.zz_1 = urgence;
  }
  protoOf(EntreeRevueJson).toString = function () {
    return 'EntreeRevueJson(element=' + this.wz_1.toString() + ', aConfirmer=' + this.xz_1 + ', planManquant=' + this.yz_1 + ', urgence=' + this.zz_1 + ')';
  };
  protoOf(EntreeRevueJson).hashCode = function () {
    var result = this.wz_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.xz_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.yz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.zz_1) | 0;
    return result;
  };
  protoOf(EntreeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevueJson ? other : THROW_CCE();
    if (!this.wz_1.equals(tmp0_other_with_cast.wz_1))
      return false;
    if (!(this.xz_1 === tmp0_other_with_cast.xz_1))
      return false;
    if (!(this.yz_1 === tmp0_other_with_cast.yz_1))
      return false;
    if (!(this.zz_1 === tmp0_other_with_cast.zz_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a10_1 = [null, new ArrayListSerializer($serializer_getInstance_1())];
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
    tmp0_serialDesc.jh('captureId', false);
    tmp0_serialDesc.jh('entrees', false);
    this.b10_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).c10 = function (encoder, value) {
    var tmp0_desc = this.b10_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().a10_1;
    tmp1_output.yd(tmp0_desc, 0, value.d10_1);
    tmp1_output.zd(tmp0_desc, 1, tmp2_cached[1], value.e10_1);
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_2).sb = function (encoder, value) {
    return this.c10(encoder, value instanceof GroupeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_2).tb = function (decoder) {
    var tmp0_desc = this.b10_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.cd(tmp0_desc);
    var tmp7_cached = Companion_getInstance_3().a10_1;
    if (tmp6_input.ld()) {
      tmp4_local0 = tmp6_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.hd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.hd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.dd(tmp0_desc);
    return GroupeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).rb = function () {
    return this.b10_1;
  };
  protoOf($serializer_2).lh = function () {
    var tmp0_cached = Companion_getInstance_3().a10_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().b10_1);
    }
    $this.d10_1 = captureId;
    $this.e10_1 = entrees;
    return $this;
  }
  function GroupeRevueJson_init_$Create$(seen0, captureId, entrees, serializationConstructorMarker) {
    return GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, objectCreate(protoOf(GroupeRevueJson)));
  }
  function GroupeRevueJson(captureId, entrees) {
    Companion_getInstance_3();
    this.d10_1 = captureId;
    this.e10_1 = entrees;
  }
  protoOf(GroupeRevueJson).toString = function () {
    return 'GroupeRevueJson(captureId=' + this.d10_1 + ', entrees=' + toString_0(this.e10_1) + ')';
  };
  protoOf(GroupeRevueJson).hashCode = function () {
    var result = getStringHashCode(this.d10_1);
    result = imul(result, 31) + hashCode(this.e10_1) | 0;
    return result;
  };
  protoOf(GroupeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof GroupeRevueJson ? other : THROW_CCE();
    if (!(this.d10_1 === tmp0_other_with_cast.d10_1))
      return false;
    if (!equals(this.e10_1, tmp0_other_with_cast.e10_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f10_1 = [null, null, null, null, null, null, new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_3).py = function () {
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
    tmp0_serialDesc.jh('elementId', false);
    tmp0_serialDesc.jh('texte', false);
    tmp0_serialDesc.jh('type', false);
    tmp0_serialDesc.jh('interlocuteur', true);
    tmp0_serialDesc.jh('echeance', true);
    tmp0_serialDesc.jh('motif', false);
    tmp0_serialDesc.jh('options', false);
    this.g10_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).h10 = function (encoder, value) {
    var tmp0_desc = this.g10_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().f10_1;
    tmp1_output.yd(tmp0_desc, 0, value.i10_1);
    tmp1_output.yd(tmp0_desc, 1, value.j10_1);
    tmp1_output.yd(tmp0_desc, 2, value.k10_1);
    if (tmp1_output.fe(tmp0_desc, 3) ? true : !(value.l10_1 == null)) {
      tmp1_output.be(tmp0_desc, 3, StringSerializer_getInstance(), value.l10_1);
    }
    if (tmp1_output.fe(tmp0_desc, 4) ? true : !(value.m10_1 == null)) {
      tmp1_output.be(tmp0_desc, 4, StringSerializer_getInstance(), value.m10_1);
    }
    tmp1_output.yd(tmp0_desc, 5, value.n10_1);
    tmp1_output.zd(tmp0_desc, 6, tmp2_cached[6], value.o10_1);
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_3).sb = function (encoder, value) {
    return this.h10(encoder, value instanceof RelanceJson ? value : THROW_CCE());
  };
  protoOf($serializer_3).tb = function (decoder) {
    var tmp0_desc = this.g10_1;
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
    var tmp11_input = decoder.cd(tmp0_desc);
    var tmp12_cached = Companion_getInstance_4().f10_1;
    if (tmp11_input.ld()) {
      tmp4_local0 = tmp11_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.gd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.jd(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.jd(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.gd(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.hd(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.gd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.gd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.gd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.jd(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.jd(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.gd(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.hd(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.dd(tmp0_desc);
    return RelanceJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_3).rb = function () {
    return this.g10_1;
  };
  protoOf($serializer_3).lh = function () {
    var tmp0_cached = Companion_getInstance_4().f10_1;
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
      throwMissingFieldException(seen0, 103, $serializer_getInstance_3().g10_1);
    }
    $this.i10_1 = elementId;
    $this.j10_1 = texte;
    $this.k10_1 = type;
    if (0 === (seen0 & 8))
      $this.l10_1 = null;
    else
      $this.l10_1 = interlocuteur;
    if (0 === (seen0 & 16))
      $this.m10_1 = null;
    else
      $this.m10_1 = echeance;
    $this.n10_1 = motif;
    $this.o10_1 = options;
    return $this;
  }
  function RelanceJson_init_$Create$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker) {
    return RelanceJson_init_$Init$(seen0, elementId, texte, type, interlocuteur, echeance, motif, options, serializationConstructorMarker, objectCreate(protoOf(RelanceJson)));
  }
  function RelanceJson(elementId, texte, type, interlocuteur, echeance, motif, options) {
    Companion_getInstance_4();
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    echeance = echeance === VOID ? null : echeance;
    this.i10_1 = elementId;
    this.j10_1 = texte;
    this.k10_1 = type;
    this.l10_1 = interlocuteur;
    this.m10_1 = echeance;
    this.n10_1 = motif;
    this.o10_1 = options;
  }
  protoOf(RelanceJson).toString = function () {
    return 'RelanceJson(elementId=' + this.i10_1 + ', texte=' + this.j10_1 + ', type=' + this.k10_1 + ', interlocuteur=' + this.l10_1 + ', echeance=' + this.m10_1 + ', motif=' + this.n10_1 + ', options=' + toString_0(this.o10_1) + ')';
  };
  protoOf(RelanceJson).hashCode = function () {
    var result = getStringHashCode(this.i10_1);
    result = imul(result, 31) + getStringHashCode(this.j10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k10_1) | 0;
    result = imul(result, 31) + (this.l10_1 == null ? 0 : getStringHashCode(this.l10_1)) | 0;
    result = imul(result, 31) + (this.m10_1 == null ? 0 : getStringHashCode(this.m10_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.n10_1) | 0;
    result = imul(result, 31) + hashCode(this.o10_1) | 0;
    return result;
  };
  protoOf(RelanceJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelanceJson))
      return false;
    var tmp0_other_with_cast = other instanceof RelanceJson ? other : THROW_CCE();
    if (!(this.i10_1 === tmp0_other_with_cast.i10_1))
      return false;
    if (!(this.j10_1 === tmp0_other_with_cast.j10_1))
      return false;
    if (!(this.k10_1 === tmp0_other_with_cast.k10_1))
      return false;
    if (!(this.l10_1 == tmp0_other_with_cast.l10_1))
      return false;
    if (!(this.m10_1 == tmp0_other_with_cast.m10_1))
      return false;
    if (!(this.n10_1 === tmp0_other_with_cast.n10_1))
      return false;
    if (!equals(this.o10_1, tmp0_other_with_cast.o10_1))
      return false;
    return true;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).py = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.SuiviJson', this, 2);
    tmp0_serialDesc.jh('elementId', false);
    tmp0_serialDesc.jh('derniereNouvelle', false);
    this.p10_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).q10 = function (encoder, value) {
    var tmp0_desc = this.p10_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    tmp1_output.yd(tmp0_desc, 0, value.r10_1);
    tmp1_output.yd(tmp0_desc, 1, value.s10_1);
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_4).sb = function (encoder, value) {
    return this.q10(encoder, value instanceof SuiviJson ? value : THROW_CCE());
  };
  protoOf($serializer_4).tb = function (decoder) {
    var tmp0_desc = this.p10_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.cd(tmp0_desc);
    if (tmp6_input.ld()) {
      tmp4_local0 = tmp6_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.gd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.dd(tmp0_desc);
    return SuiviJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).rb = function () {
    return this.p10_1;
  };
  protoOf($serializer_4).lh = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_4().p10_1);
    }
    $this.r10_1 = elementId;
    $this.s10_1 = derniereNouvelle;
    return $this;
  }
  function SuiviJson_init_$Create$(seen0, elementId, derniereNouvelle, serializationConstructorMarker) {
    return SuiviJson_init_$Init$(seen0, elementId, derniereNouvelle, serializationConstructorMarker, objectCreate(protoOf(SuiviJson)));
  }
  function SuiviJson() {
  }
  protoOf(SuiviJson).toString = function () {
    return 'SuiviJson(elementId=' + this.r10_1 + ', derniereNouvelle=' + this.s10_1 + ')';
  };
  protoOf(SuiviJson).hashCode = function () {
    var result = getStringHashCode(this.r10_1);
    result = imul(result, 31) + getStringHashCode(this.s10_1) | 0;
    return result;
  };
  protoOf(SuiviJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuiviJson))
      return false;
    var tmp0_other_with_cast = other instanceof SuiviJson ? other : THROW_CCE();
    if (!(this.r10_1 === tmp0_other_with_cast.r10_1))
      return false;
    if (!(this.s10_1 === tmp0_other_with_cast.s10_1))
      return false;
    return true;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t10_1 = [new ArrayListSerializer($serializer_getInstance_2()), null, null, null, null];
  }
  protoOf(Companion_5).py = function () {
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
    tmp0_serialDesc.jh('groupes', false);
    tmp0_serialDesc.jh('total', false);
    tmp0_serialDesc.jh('reduite', true);
    tmp0_serialDesc.jh('motifReduction', true);
    tmp0_serialDesc.jh('demeurentEnFile', true);
    this.u10_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).v10 = function (encoder, value) {
    var tmp0_desc = this.u10_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().t10_1;
    tmp1_output.zd(tmp0_desc, 0, tmp2_cached[0], value.w10_1);
    tmp1_output.xd(tmp0_desc, 1, value.x10_1);
    if (tmp1_output.fe(tmp0_desc, 2) ? true : !(value.y10_1 === false)) {
      tmp1_output.wd(tmp0_desc, 2, value.y10_1);
    }
    if (tmp1_output.fe(tmp0_desc, 3) ? true : !(value.z10_1 === '')) {
      tmp1_output.yd(tmp0_desc, 3, value.z10_1);
    }
    if (tmp1_output.fe(tmp0_desc, 4) ? true : !(value.a11_1 === 0)) {
      tmp1_output.xd(tmp0_desc, 4, value.a11_1);
    }
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_5).sb = function (encoder, value) {
    return this.v10(encoder, value instanceof RevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_5).tb = function (decoder) {
    var tmp0_desc = this.u10_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_input = decoder.cd(tmp0_desc);
    var tmp10_cached = Companion_getInstance_6().t10_1;
    if (tmp9_input.ld()) {
      tmp4_local0 = tmp9_input.hd(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.fd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ed(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.gd(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.fd(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.hd(tmp0_desc, 0, tmp10_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.fd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ed(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.gd(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.fd(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.dd(tmp0_desc);
    return RevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_5).rb = function () {
    return this.u10_1;
  };
  protoOf($serializer_5).lh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_6().t10_1[0], IntSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function RevueJson_init_$Init$(seen0, groupes, total, reduite, motifReduction, demeurentEnFile, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().u10_1);
    }
    $this.w10_1 = groupes;
    $this.x10_1 = total;
    if (0 === (seen0 & 4))
      $this.y10_1 = false;
    else
      $this.y10_1 = reduite;
    if (0 === (seen0 & 8))
      $this.z10_1 = '';
    else
      $this.z10_1 = motifReduction;
    if (0 === (seen0 & 16))
      $this.a11_1 = 0;
    else
      $this.a11_1 = demeurentEnFile;
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
    this.w10_1 = groupes;
    this.x10_1 = total;
    this.y10_1 = reduite;
    this.z10_1 = motifReduction;
    this.a11_1 = demeurentEnFile;
  }
  protoOf(RevueJson).toString = function () {
    return 'RevueJson(groupes=' + toString_0(this.w10_1) + ', total=' + this.x10_1 + ', reduite=' + this.y10_1 + ', motifReduction=' + this.z10_1 + ', demeurentEnFile=' + this.a11_1 + ')';
  };
  protoOf(RevueJson).hashCode = function () {
    var result = hashCode(this.w10_1);
    result = imul(result, 31) + this.x10_1 | 0;
    result = imul(result, 31) + getBooleanHashCode(this.y10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z10_1) | 0;
    result = imul(result, 31) + this.a11_1 | 0;
    return result;
  };
  protoOf(RevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof RevueJson ? other : THROW_CCE();
    if (!equals(this.w10_1, tmp0_other_with_cast.w10_1))
      return false;
    if (!(this.x10_1 === tmp0_other_with_cast.x10_1))
      return false;
    if (!(this.y10_1 === tmp0_other_with_cast.y10_1))
      return false;
    if (!(this.z10_1 === tmp0_other_with_cast.z10_1))
      return false;
    if (!(this.a11_1 === tmp0_other_with_cast.a11_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b11_1 = [new ArrayListSerializer($serializer_getInstance()), new ArrayListSerializer($serializer_getInstance_7())];
  }
  protoOf(Companion_6).py = function () {
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
    tmp0_serialDesc.jh('retenus', false);
    tmp0_serialDesc.jh('ecartes', false);
    this.c11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).d11 = function (encoder, value) {
    var tmp0_desc = this.c11_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().b11_1;
    tmp1_output.zd(tmp0_desc, 0, tmp2_cached[0], value.e11_1);
    tmp1_output.zd(tmp0_desc, 1, tmp2_cached[1], value.f11_1);
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_6).sb = function (encoder, value) {
    return this.d11(encoder, value instanceof AncrageJson ? value : THROW_CCE());
  };
  protoOf($serializer_6).tb = function (decoder) {
    var tmp0_desc = this.c11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.cd(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().b11_1;
    if (tmp6_input.ld()) {
      tmp4_local0 = tmp6_input.hd(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.hd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.hd(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.hd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.dd(tmp0_desc);
    return AncrageJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).rb = function () {
    return this.c11_1;
  };
  protoOf($serializer_6).lh = function () {
    var tmp0_cached = Companion_getInstance_7().b11_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_6().c11_1);
    }
    $this.e11_1 = retenus;
    $this.f11_1 = ecartes;
    return $this;
  }
  function AncrageJson_init_$Create$(seen0, retenus, ecartes, serializationConstructorMarker) {
    return AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, objectCreate(protoOf(AncrageJson)));
  }
  function AncrageJson(retenus, ecartes) {
    Companion_getInstance_7();
    this.e11_1 = retenus;
    this.f11_1 = ecartes;
  }
  protoOf(AncrageJson).toString = function () {
    return 'AncrageJson(retenus=' + toString_0(this.e11_1) + ', ecartes=' + toString_0(this.f11_1) + ')';
  };
  protoOf(AncrageJson).hashCode = function () {
    var result = hashCode(this.e11_1);
    result = imul(result, 31) + hashCode(this.f11_1) | 0;
    return result;
  };
  protoOf(AncrageJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AncrageJson))
      return false;
    var tmp0_other_with_cast = other instanceof AncrageJson ? other : THROW_CCE();
    if (!equals(this.e11_1, tmp0_other_with_cast.e11_1))
      return false;
    if (!equals(this.f11_1, tmp0_other_with_cast.f11_1))
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
    tmp0_serialDesc.jh('texte', false);
    tmp0_serialDesc.jh('raison', false);
    this.g11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).h11 = function (encoder, value) {
    var tmp0_desc = this.g11_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    tmp1_output.yd(tmp0_desc, 0, value.i11_1);
    tmp1_output.yd(tmp0_desc, 1, value.j11_1);
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_7).sb = function (encoder, value) {
    return this.h11(encoder, value instanceof EcarteJson ? value : THROW_CCE());
  };
  protoOf($serializer_7).tb = function (decoder) {
    var tmp0_desc = this.g11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.cd(tmp0_desc);
    if (tmp6_input.ld()) {
      tmp4_local0 = tmp6_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.gd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.gd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.dd(tmp0_desc);
    return EcarteJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).rb = function () {
    return this.g11_1;
  };
  protoOf($serializer_7).lh = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_7().g11_1);
    }
    $this.i11_1 = texte;
    $this.j11_1 = raison;
    return $this;
  }
  function EcarteJson_init_$Create$(seen0, texte, raison, serializationConstructorMarker) {
    return EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, objectCreate(protoOf(EcarteJson)));
  }
  function EcarteJson(texte, raison) {
    this.i11_1 = texte;
    this.j11_1 = raison;
  }
  protoOf(EcarteJson).toString = function () {
    return 'EcarteJson(texte=' + this.i11_1 + ', raison=' + this.j11_1 + ')';
  };
  protoOf(EcarteJson).hashCode = function () {
    var result = getStringHashCode(this.i11_1);
    result = imul(result, 31) + getStringHashCode(this.j11_1) | 0;
    return result;
  };
  protoOf(EcarteJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EcarteJson))
      return false;
    var tmp0_other_with_cast = other instanceof EcarteJson ? other : THROW_CCE();
    if (!(this.i11_1 === tmp0_other_with_cast.i11_1))
      return false;
    if (!(this.j11_1 === tmp0_other_with_cast.j11_1))
      return false;
    return true;
  };
  function Companion_8() {
  }
  protoOf(Companion_8).py = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CaptureJson', this, 3);
    tmp0_serialDesc.jh('id', false);
    tmp0_serialDesc.jh('texte', false);
    tmp0_serialDesc.jh('creeLe', false);
    this.k11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).l11 = function (encoder, value) {
    var tmp0_desc = this.k11_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    tmp1_output.yd(tmp0_desc, 0, value.m11_1);
    tmp1_output.yd(tmp0_desc, 1, value.n11_1);
    tmp1_output.yd(tmp0_desc, 2, value.o11_1);
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_8).sb = function (encoder, value) {
    return this.l11(encoder, value instanceof CaptureJson ? value : THROW_CCE());
  };
  protoOf($serializer_8).tb = function (decoder) {
    var tmp0_desc = this.k11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.cd(tmp0_desc);
    if (tmp7_input.ld()) {
      tmp4_local0 = tmp7_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.gd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.gd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.gd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.gd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.dd(tmp0_desc);
    return CaptureJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).rb = function () {
    return this.k11_1;
  };
  protoOf($serializer_8).lh = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function CaptureJson_init_$Init$(seen0, id, texte, creeLe, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_8().k11_1);
    }
    $this.m11_1 = id;
    $this.n11_1 = texte;
    $this.o11_1 = creeLe;
    return $this;
  }
  function CaptureJson_init_$Create$(seen0, id, texte, creeLe, serializationConstructorMarker) {
    return CaptureJson_init_$Init$(seen0, id, texte, creeLe, serializationConstructorMarker, objectCreate(protoOf(CaptureJson)));
  }
  function CaptureJson() {
  }
  protoOf(CaptureJson).toString = function () {
    return 'CaptureJson(id=' + this.m11_1 + ', texte=' + this.n11_1 + ', creeLe=' + this.o11_1 + ')';
  };
  protoOf(CaptureJson).hashCode = function () {
    var result = getStringHashCode(this.m11_1);
    result = imul(result, 31) + getStringHashCode(this.n11_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o11_1) | 0;
    return result;
  };
  protoOf(CaptureJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureJson))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureJson ? other : THROW_CCE();
    if (!(this.m11_1 === tmp0_other_with_cast.m11_1))
      return false;
    if (!(this.n11_1 === tmp0_other_with_cast.n11_1))
      return false;
    if (!(this.o11_1 === tmp0_other_with_cast.o11_1))
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
    tmp0_serialDesc.jh('captureId', false);
    tmp0_serialDesc.jh('extrait', false);
    tmp0_serialDesc.jh('pourquoi', false);
    tmp0_serialDesc.jh('elementId', true);
    this.p11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).q11 = function (encoder, value) {
    var tmp0_desc = this.p11_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    tmp1_output.yd(tmp0_desc, 0, value.r11_1);
    tmp1_output.yd(tmp0_desc, 1, value.s11_1);
    tmp1_output.yd(tmp0_desc, 2, value.t11_1);
    if (tmp1_output.fe(tmp0_desc, 3) ? true : !(value.u11_1 == null)) {
      tmp1_output.be(tmp0_desc, 3, StringSerializer_getInstance(), value.u11_1);
    }
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_9).sb = function (encoder, value) {
    return this.q11(encoder, value instanceof CitationJson ? value : THROW_CCE());
  };
  protoOf($serializer_9).tb = function (decoder) {
    var tmp0_desc = this.p11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.cd(tmp0_desc);
    if (tmp8_input.ld()) {
      tmp4_local0 = tmp8_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.gd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.jd(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.gd(tmp0_desc, 0);
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
            tmp7_local3 = tmp8_input.jd(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.dd(tmp0_desc);
    return CitationJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).rb = function () {
    return this.p11_1;
  };
  protoOf($serializer_9).lh = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_9().p11_1);
    }
    $this.r11_1 = captureId;
    $this.s11_1 = extrait;
    $this.t11_1 = pourquoi;
    if (0 === (seen0 & 8))
      $this.u11_1 = null;
    else
      $this.u11_1 = elementId;
    return $this;
  }
  function CitationJson_init_$Create$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker) {
    return CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, objectCreate(protoOf(CitationJson)));
  }
  function CitationJson(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.r11_1 = captureId;
    this.s11_1 = extrait;
    this.t11_1 = pourquoi;
    this.u11_1 = elementId;
  }
  protoOf(CitationJson).toString = function () {
    return 'CitationJson(captureId=' + this.r11_1 + ', extrait=' + this.s11_1 + ', pourquoi=' + this.t11_1 + ', elementId=' + this.u11_1 + ')';
  };
  protoOf(CitationJson).hashCode = function () {
    var result = getStringHashCode(this.r11_1);
    result = imul(result, 31) + getStringHashCode(this.s11_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t11_1) | 0;
    result = imul(result, 31) + (this.u11_1 == null ? 0 : getStringHashCode(this.u11_1)) | 0;
    return result;
  };
  protoOf(CitationJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CitationJson))
      return false;
    var tmp0_other_with_cast = other instanceof CitationJson ? other : THROW_CCE();
    if (!(this.r11_1 === tmp0_other_with_cast.r11_1))
      return false;
    if (!(this.s11_1 === tmp0_other_with_cast.s11_1))
      return false;
    if (!(this.t11_1 === tmp0_other_with_cast.t11_1))
      return false;
    if (!(this.u11_1 == tmp0_other_with_cast.u11_1))
      return false;
    return true;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v11_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_9()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_10).py = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ReponseJson', this, 5);
    tmp0_serialDesc.jh('question', false);
    tmp0_serialDesc.jh('enonce', false);
    tmp0_serialDesc.jh('fondee', false);
    tmp0_serialDesc.jh('citations', false);
    tmp0_serialDesc.jh('indisponibleHorsLigne', true);
    this.w11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).x11 = function (encoder, value) {
    var tmp0_desc = this.w11_1;
    var tmp1_output = encoder.cd(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().v11_1;
    tmp1_output.yd(tmp0_desc, 0, value.y11_1);
    tmp1_output.yd(tmp0_desc, 1, value.z11_1);
    tmp1_output.wd(tmp0_desc, 2, value.a12_1);
    tmp1_output.zd(tmp0_desc, 3, tmp2_cached[3], value.b12_1);
    if (tmp1_output.fe(tmp0_desc, 4) ? true : !equals(value.c12_1, emptyList())) {
      tmp1_output.zd(tmp0_desc, 4, tmp2_cached[4], value.c12_1);
    }
    tmp1_output.dd(tmp0_desc);
  };
  protoOf($serializer_10).sb = function (encoder, value) {
    return this.x11(encoder, value instanceof ReponseJson ? value : THROW_CCE());
  };
  protoOf($serializer_10).tb = function (decoder) {
    var tmp0_desc = this.w11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.cd(tmp0_desc);
    var tmp10_cached = Companion_getInstance_11().v11_1;
    if (tmp9_input.ld()) {
      tmp4_local0 = tmp9_input.gd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.gd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ed(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.hd(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.hd(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.md(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.gd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.gd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ed(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.hd(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.hd(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.dd(tmp0_desc);
    return ReponseJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_10).rb = function () {
    return this.w11_1;
  };
  protoOf($serializer_10).lh = function () {
    var tmp0_cached = Companion_getInstance_11().v11_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3], tmp0_cached[4]];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_10().w11_1);
    }
    $this.y11_1 = question;
    $this.z11_1 = enonce;
    $this.a12_1 = fondee;
    $this.b12_1 = citations;
    if (0 === (seen0 & 16))
      $this.c12_1 = emptyList();
    else
      $this.c12_1 = indisponibleHorsLigne;
    return $this;
  }
  function ReponseJson_init_$Create$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, serializationConstructorMarker) {
    return ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, serializationConstructorMarker, objectCreate(protoOf(ReponseJson)));
  }
  function ReponseJson(question, enonce, fondee, citations, indisponibleHorsLigne) {
    Companion_getInstance_11();
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    this.y11_1 = question;
    this.z11_1 = enonce;
    this.a12_1 = fondee;
    this.b12_1 = citations;
    this.c12_1 = indisponibleHorsLigne;
  }
  protoOf(ReponseJson).toString = function () {
    return 'ReponseJson(question=' + this.y11_1 + ', enonce=' + this.z11_1 + ', fondee=' + this.a12_1 + ', citations=' + toString_0(this.b12_1) + ', indisponibleHorsLigne=' + toString_0(this.c12_1) + ')';
  };
  protoOf(ReponseJson).hashCode = function () {
    var result = getStringHashCode(this.y11_1);
    result = imul(result, 31) + getStringHashCode(this.z11_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.a12_1) | 0;
    result = imul(result, 31) + hashCode(this.b12_1) | 0;
    result = imul(result, 31) + hashCode(this.c12_1) | 0;
    return result;
  };
  protoOf(ReponseJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReponseJson))
      return false;
    var tmp0_other_with_cast = other instanceof ReponseJson ? other : THROW_CCE();
    if (!(this.y11_1 === tmp0_other_with_cast.y11_1))
      return false;
    if (!(this.z11_1 === tmp0_other_with_cast.z11_1))
      return false;
    if (!(this.a12_1 === tmp0_other_with_cast.a12_1))
      return false;
    if (!equals(this.b12_1, tmp0_other_with_cast.b12_1))
      return false;
    if (!equals(this.c12_1, tmp0_other_with_cast.c12_1))
      return false;
    return true;
  };
  function rendre($this, reponse) {
    var tmp = Companion_getInstance_11().py();
    var tmp_0 = reponse.h12();
    // Inline function 'kotlin.collections.map' call
    var this_0 = reponse.f12_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rendre.<anonymous>' call
      var tmp0_safe_receiver = item.l12_1;
      var tmp$ret$0 = new CitationJson(item.i12_1.m12_1, item.j12_1, item.k12_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n12_1);
      destination.e(tmp$ret$0);
    }
    return $this.o12_1.bp(tmp, new ReponseJson(reponse.d12_1, reponse.e12_1, tmp_0, destination, reponse.g12_1));
  }
  function decoder($this, elementsJson) {
    return $this.o12_1.cp(ListSerializer(Companion_instance_0.py()), elementsJson);
  }
  function raisonDeRejet($this, dto, texteSource) {
    var tmp;
    if (isBlank(dto.vy_1)) {
      tmp = '\xE9l\xE9ment sans texte';
    } else {
      if (dto.wy_1 < 0 || dto.xy_1 <= dto.wy_1) {
        tmp = 'passage source vide ou incoh\xE9rent';
      } else {
        if (dto.xy_1 > texteSource.length) {
          tmp = 'passage source absent du texte de la capture';
        } else {
          // Inline function 'kotlin.runCatching' call
          var tmp_0;
          try {
            // Inline function 'app.zenote.core.api.Regles.raisonDeRejet.<anonymous>' call
            // Inline function 'kotlin.Companion.success' call
            var value = valueOf(dto.uy_1);
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
            tmp = 'type inconnu : ' + dto.uy_1;
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
    var tmp0 = listOfNotNull([_this__u8e3s4.bz_1, _this__u8e3s4.ez_1, _this__u8e3s4.hz_1]);
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
    var tmp = new CaptureId(_this__u8e3s4.ty_1);
    var tmp_0 = valueOf(_this__u8e3s4.uy_1);
    var tmp_1 = new Passage(_this__u8e3s4.wy_1, _this__u8e3s4.xy_1, _this__u8e3s4.yy_1, _this__u8e3s4.zy_1);
    var tmp0_safe_receiver = _this__u8e3s4.az_1;
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_3 = Companion_getInstance().wo(tmp0_safe_receiver);
      var tmp0_elvis_lhs = _this__u8e3s4.bz_1;
      var tmp_4 = tmp0_elvis_lhs == null ? 1.0 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.cz_1;
      tmp_2 = new Deduit(tmp_3, tmp_4, tmp1_elvis_lhs == null ? 'fourni' : tmp1_elvis_lhs);
    }
    var tmp_5 = tmp_2;
    var tmp1_safe_receiver = _this__u8e3s4.dz_1;
    var tmp_6;
    if (tmp1_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_7 = valueOf_0(tmp1_safe_receiver);
      var tmp0_elvis_lhs_0 = _this__u8e3s4.ez_1;
      var tmp_8 = tmp0_elvis_lhs_0 == null ? 1.0 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs_0 = _this__u8e3s4.fz_1;
      tmp_6 = new Deduit(tmp_7, tmp_8, tmp1_elvis_lhs_0 == null ? 'fourni' : tmp1_elvis_lhs_0);
    }
    var tmp_9 = tmp_6;
    var tmp2_safe_receiver = _this__u8e3s4.gz_1;
    var tmp_10;
    if (tmp2_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4.hz_1;
      tmp_10 = new Deduit(tmp2_safe_receiver, tmp0_elvis_lhs_1 == null ? 1.0 : tmp0_elvis_lhs_1, 'nomm\xE9');
    }
    var tmp_11 = tmp_10;
    var tmp3_safe_receiver = _this__u8e3s4.iz_1;
    var tmp_12;
    if (tmp3_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      tmp_12 = new Deduit(valueOf_1(tmp3_safe_receiver), 1.0, 'd\xE9duit');
    }
    var tmp_13 = tmp_12;
    var tmp4_safe_receiver = _this__u8e3s4.jz_1;
    var tmp_14;
    if (tmp4_safe_receiver == null) {
      tmp_14 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.kz_1;
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
    var derive = new ElementDerive(tmp, tmp_0, _this__u8e3s4.vy_1, tmp_1, tmp_5, tmp_9, tmp_11, tmp_13, tmp_14);
    var tmp_16 = new ElementId(_this__u8e3s4.sy_1);
    var tmp5_safe_receiver = derive.t12_1;
    var tmp_17 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.z12_1;
    var tmp6_safe_receiver = derive.u12_1;
    var tmp_18 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.z12_1;
    var tmp7_safe_receiver = derive.v12_1;
    var tmp_19 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.z12_1;
    var tmp8_safe_receiver = derive.w12_1;
    var tmp_20 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.z12_1;
    var tmp9_safe_receiver = derive.x12_1;
    return new ElementResolu(tmp_16, derive.p12_1, derive.q12_1, derive.r12_1, derive.s12_1, tmp_17, tmp_18, tmp_19, tmp_20, tmp9_safe_receiver == null ? null : tmp9_safe_receiver.z12_1, valueOf_2(_this__u8e3s4.lz_1), aConfirmer(_this__u8e3s4, $this), _this__u8e3s4.mz_1, _this__u8e3s4.mz_1 && !(_this__u8e3s4.dz_1 == null) ? 'poids fix\xE9 \xE0 la main' : _this__u8e3s4.fz_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.c13_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ca = function (a, b) {
    return this.c13_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ca(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).n2 = function () {
    return this.c13_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n2(), other.n2());
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
    return hashCode(this.n2());
  };
  function Regles$json$lambda($this$Json) {
    $this$Json.up_1 = true;
    $this$Json.sp_1 = true;
    return Unit_instance;
  }
  function Regles$revue$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp = urgenceOrdinale(Regles_getInstance(), a.zz_1);
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp$ret$1 = urgenceOrdinale(Regles_getInstance(), b.zz_1);
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
        var tmp_0 = b.xz_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = a.xz_1;
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
        var tmp_0 = a.wz_1.sy_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = b.wz_1.sy_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = a.e10_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it = iterator.i();
    var minValue = urgenceOrdinale(Regles_getInstance(), it.zz_1);
    while (iterator.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_0 = iterator.i();
      var v = urgenceOrdinale(Regles_getInstance(), it_0.zz_1);
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var tmp = minValue;
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator_0 = b.e10_1.g();
    if (!iterator_0.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it_1 = iterator_0.i();
    var minValue_0 = urgenceOrdinale(Regles_getInstance(), it_1.zz_1);
    while (iterator_0.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.i();
      var v_0 = urgenceOrdinale(Regles_getInstance(), it_2.zz_1);
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
        var tmp_0 = a.d10_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp$ret$1 = b.d10_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles() {
    Regles_instance = this;
    var tmp = this;
    tmp.o12_1 = Json(VOID, Regles$json$lambda);
  }
  protoOf(Regles).d13 = function (elementsJson, aujourdhui) {
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
    var this_0 = tmp.g13(destination, new ContexteMaintenant(Companion_getInstance().wo(aujourdhui)));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$3 = new PropositionJson(item_0.v13_1.h13_1.n12_1, item_0.v13_1.k13_1, item_0.w13_1, item_0.x13_1.x1_1, item_0.y13_1.x1_1);
      destination_0.e(tmp$ret$3);
    }
    var propositions = destination_0;
    return this.o12_1.bp(ListSerializer(Companion_instance_1.py()), propositions);
  };
  protoOf(Regles).z13 = function (elementsJson, aujourdhui) {
    var date = Companion_getInstance().wo(aujourdhui);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      if (element.lz_1 === 'EN_ATTENTE') {
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
      var tmp$ret$3 = element_0.sy_1;
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
      var tmp$ret$6 = FileRevue_getInstance().b14(versResolu(item, Regles_getInstance()), date);
      destination_1.e(tmp$ret$6);
    }
    var entrees = destination_1;
    var reduction = Arriere_instance.d14(entrees);
    // Inline function 'kotlin.collections.map' call
    var this_0 = reduction.e14_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_2 = this_0.g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var dto = getValue(parId, item_0.l14().n12_1);
      var tmp$ret$9 = new EntreeRevueJson(dto, item_0.j14_1, item_0.k14_1, item_0.i14_1.x1_1);
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
      var key = element_1.wz_1.ty_1;
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
    return this.o12_1.bp(Companion_getInstance_6().py(), new RevueJson(groupes, entrees.l(), reduction.m14(), reduction.m14() ? reduction.g14_1 : '', reduction.f14_1.l()));
  };
  protoOf(Regles).n14 = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.o12_1.cp(ListSerializer(Companion_instance_5.py()), suivisJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp$ret$0 = new Suivi(new ElementId(item.r10_1), Companion_getInstance().wo(item.s10_1));
      destination.e(tmp$ret$0);
    }
    var suivis = destination;
    var delais = this.o12_1.cp(MapSerializer(serializer(StringCompanionObject_instance), serializer_0(IntCompanionObject_instance)), delaisJson);
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
    var this_2 = tmp.q14(destination_0, Companion_getInstance().wo(aujourdhui), suivis, delais);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s_1 = this_2.g();
    while (_iterator__ex2g4s_1.h()) {
      var item_1 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>' call
      var tmp0_safe_receiver = item_1.r14_1.m13_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      // Inline function 'kotlin.collections.map' call
      var this_3 = item_1.t14_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var _iterator__ex2g4s_2 = this_3.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_2 = _iterator__ex2g4s_2.i();
        // Inline function 'app.zenote.core.api.Regles.relances.<anonymous>.<anonymous>' call
        var tmp$ret$6 = item_2.x1_1;
        destination_2.e(tmp$ret$6);
      }
      var tmp$ret$9 = new RelanceJson(item_1.r14_1.h13_1.n12_1, item_1.r14_1.k13_1, item_1.r14_1.j13_1.x1_1, item_1.r14_1.o13_1, tmp_0, item_1.s14_1, destination_2);
      destination_1.e(tmp$ret$9);
    }
    var propositions = destination_1;
    return this.o12_1.bp(ListSerializer(Companion_getInstance_4().py()), propositions);
  };
  protoOf(Regles).u14 = function (texteSource, elementsJson) {
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
        var element_0 = new EcarteJson(element.vy_1, raison);
        ecartes.e(element_0);
      }
    }
    return this.o12_1.bp(Companion_getInstance_7().py(), new AncrageJson(retenus, ecartes));
  };
  protoOf(Regles).v14 = function (requete, elementsJson, capturesJson, reseau) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.o12_1.cp(ListSerializer(Companion_instance_9.py()), capturesJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rechercherParMots.<anonymous>' call
      var tmp$ret$0 = new TexteSource(new CaptureId(item.m11_1), item.n11_1, item.o11_1);
      destination.e(tmp$ret$0);
    }
    var captures = destination;
    var tmp = RechercheLocale_getInstance();
    // Inline function 'kotlin.collections.map' call
    var this_1 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.rechercherParMots.<anonymous>' call
      var tmp$ret$3 = versResolu(item_0, Regles_getInstance());
      destination_0.e(tmp$ret$3);
    }
    return rendre(this, tmp.z14(requete, destination_0, captures, reseau));
  };
  protoOf(Regles).a15 = function (personne, elementsJson, reseau) {
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
    return rendre(this, tmp.b15(personne, destination, reseau));
  };
  var Regles_instance;
  function Regles_getInstance() {
    if (Regles_instance == null)
      new Regles();
    return Regles_instance;
  }
  function Deduit(valeur, confiance, indice) {
    this.z12_1 = valeur;
    this.a13_1 = confiance;
    this.b13_1 = indice;
    var containsArg = this.a13_1;
    // Inline function 'kotlin.require' call
    if (!(0.0 <= containsArg ? containsArg <= 1.0 : false)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message = 'La confiance est une probabilit\xE9 entre 0 et 1.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.b13_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message_0 = "Une d\xE9duction sans indice n'est pas justifiable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Deduit).toString = function () {
    return 'Deduit(valeur=' + toString(this.z12_1) + ', confiance=' + this.a13_1 + ', indice=' + this.b13_1 + ')';
  };
  protoOf(Deduit).hashCode = function () {
    var result = this.z12_1 == null ? 0 : hashCode(this.z12_1);
    result = imul(result, 31) + getNumberHashCode(this.a13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b13_1) | 0;
    return result;
  };
  protoOf(Deduit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deduit))
      return false;
    var tmp0_other_with_cast = other instanceof Deduit ? other : THROW_CCE();
    if (!equals(this.z12_1, tmp0_other_with_cast.z12_1))
      return false;
    if (!equals(this.a13_1, tmp0_other_with_cast.a13_1))
      return false;
    if (!(this.b13_1 === tmp0_other_with_cast.b13_1))
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
  protoOf(TypeElement).e15 = function () {
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
    this.f15_1 = declencheur;
    this.g15_1 = action;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.f15_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message = "Un plan sans d\xE9clencheur n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.g15_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message_0 = "Un plan sans action n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Plan).toString = function () {
    return 'Quand ' + this.f15_1 + ', ' + this.g15_1;
  };
  protoOf(Plan).hashCode = function () {
    var result = getStringHashCode(this.f15_1);
    result = imul(result, 31) + getStringHashCode(this.g15_1) | 0;
    return result;
  };
  protoOf(Plan).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plan))
      return false;
    var tmp0_other_with_cast = other instanceof Plan ? other : THROW_CCE();
    if (!(this.f15_1 === tmp0_other_with_cast.f15_1))
      return false;
    if (!(this.g15_1 === tmp0_other_with_cast.g15_1))
      return false;
    return true;
  };
  function ElementId(value) {
    this.n12_1 = value;
  }
  protoOf(ElementId).toString = function () {
    return this.n12_1;
  };
  protoOf(ElementId).hashCode = function () {
    return getStringHashCode(this.n12_1);
  };
  protoOf(ElementId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementId))
      return false;
    var tmp0_other_with_cast = other instanceof ElementId ? other : THROW_CCE();
    if (!(this.n12_1 === tmp0_other_with_cast.n12_1))
      return false;
    return true;
  };
  function ElementDerive(captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan) {
    echeance = echeance === VOID ? null : echeance;
    poids = poids === VOID ? null : poids;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    sphere = sphere === VOID ? null : sphere;
    plan = plan === VOID ? null : plan;
    this.p12_1 = captureId;
    this.q12_1 = type;
    this.r12_1 = texte;
    this.s12_1 = passage;
    this.t12_1 = echeance;
    this.u12_1 = poids;
    this.v12_1 = interlocuteur;
    this.w12_1 = sphere;
    this.x12_1 = plan;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.r12_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.ElementDerive.<anonymous>' call
      var message = "Un \xE9l\xE9ment sans texte n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.y12_1 = new ElementId(this.p12_1.toString() + ':' + this.s12_1.h15_1 + '-' + this.s12_1.i15_1 + ':' + this.q12_1.toString());
  }
  protoOf(ElementDerive).toString = function () {
    return 'ElementDerive(captureId=' + this.p12_1.toString() + ', type=' + this.q12_1.toString() + ', texte=' + this.r12_1 + ', passage=' + this.s12_1.toString() + ', echeance=' + toString(this.t12_1) + ', poids=' + toString(this.u12_1) + ', interlocuteur=' + toString(this.v12_1) + ', sphere=' + toString(this.w12_1) + ', plan=' + toString(this.x12_1) + ')';
  };
  protoOf(ElementDerive).hashCode = function () {
    var result = this.p12_1.hashCode();
    result = imul(result, 31) + this.q12_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.r12_1) | 0;
    result = imul(result, 31) + this.s12_1.hashCode() | 0;
    result = imul(result, 31) + (this.t12_1 == null ? 0 : this.t12_1.hashCode()) | 0;
    result = imul(result, 31) + (this.u12_1 == null ? 0 : this.u12_1.hashCode()) | 0;
    result = imul(result, 31) + (this.v12_1 == null ? 0 : this.v12_1.hashCode()) | 0;
    result = imul(result, 31) + (this.w12_1 == null ? 0 : this.w12_1.hashCode()) | 0;
    result = imul(result, 31) + (this.x12_1 == null ? 0 : this.x12_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElementDerive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDerive))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDerive ? other : THROW_CCE();
    if (!this.p12_1.equals(tmp0_other_with_cast.p12_1))
      return false;
    if (!this.q12_1.equals(tmp0_other_with_cast.q12_1))
      return false;
    if (!(this.r12_1 === tmp0_other_with_cast.r12_1))
      return false;
    if (!this.s12_1.equals(tmp0_other_with_cast.s12_1))
      return false;
    if (!equals(this.t12_1, tmp0_other_with_cast.t12_1))
      return false;
    if (!equals(this.u12_1, tmp0_other_with_cast.u12_1))
      return false;
    if (!equals(this.v12_1, tmp0_other_with_cast.v12_1))
      return false;
    if (!equals(this.w12_1, tmp0_other_with_cast.w12_1))
      return false;
    if (!equals(this.x12_1, tmp0_other_with_cast.x12_1))
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
    this.h13_1 = id;
    this.i13_1 = captureId;
    this.j13_1 = type;
    this.k13_1 = texte;
    this.l13_1 = passage;
    this.m13_1 = echeance;
    this.n13_1 = poids;
    this.o13_1 = interlocuteur;
    this.p13_1 = sphere;
    this.q13_1 = plan;
    this.r13_1 = verdict;
    this.s13_1 = aConfirmer;
    this.t13_1 = corrigeParHumain;
    this.u13_1 = indicePoids;
  }
  protoOf(ElementResolu).toString = function () {
    return 'ElementResolu(id=' + this.h13_1.toString() + ', captureId=' + this.i13_1.toString() + ', type=' + this.j13_1.toString() + ', texte=' + this.k13_1 + ', passage=' + this.l13_1.toString() + ', echeance=' + toString(this.m13_1) + ', poids=' + toString(this.n13_1) + ', interlocuteur=' + this.o13_1 + ', sphere=' + toString(this.p13_1) + ', plan=' + toString(this.q13_1) + ', verdict=' + this.r13_1.toString() + ', aConfirmer=' + this.s13_1 + ', corrigeParHumain=' + this.t13_1 + ', indicePoids=' + this.u13_1 + ')';
  };
  protoOf(ElementResolu).hashCode = function () {
    var result = this.h13_1.hashCode();
    result = imul(result, 31) + this.i13_1.hashCode() | 0;
    result = imul(result, 31) + this.j13_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.k13_1) | 0;
    result = imul(result, 31) + this.l13_1.hashCode() | 0;
    result = imul(result, 31) + (this.m13_1 == null ? 0 : this.m13_1.hashCode()) | 0;
    result = imul(result, 31) + (this.n13_1 == null ? 0 : this.n13_1.hashCode()) | 0;
    result = imul(result, 31) + (this.o13_1 == null ? 0 : getStringHashCode(this.o13_1)) | 0;
    result = imul(result, 31) + (this.p13_1 == null ? 0 : this.p13_1.hashCode()) | 0;
    result = imul(result, 31) + (this.q13_1 == null ? 0 : this.q13_1.hashCode()) | 0;
    result = imul(result, 31) + this.r13_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.s13_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.t13_1) | 0;
    result = imul(result, 31) + (this.u13_1 == null ? 0 : getStringHashCode(this.u13_1)) | 0;
    return result;
  };
  protoOf(ElementResolu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementResolu))
      return false;
    var tmp0_other_with_cast = other instanceof ElementResolu ? other : THROW_CCE();
    if (!this.h13_1.equals(tmp0_other_with_cast.h13_1))
      return false;
    if (!this.i13_1.equals(tmp0_other_with_cast.i13_1))
      return false;
    if (!this.j13_1.equals(tmp0_other_with_cast.j13_1))
      return false;
    if (!(this.k13_1 === tmp0_other_with_cast.k13_1))
      return false;
    if (!this.l13_1.equals(tmp0_other_with_cast.l13_1))
      return false;
    if (!equals(this.m13_1, tmp0_other_with_cast.m13_1))
      return false;
    if (!equals(this.n13_1, tmp0_other_with_cast.n13_1))
      return false;
    if (!(this.o13_1 == tmp0_other_with_cast.o13_1))
      return false;
    if (!equals(this.p13_1, tmp0_other_with_cast.p13_1))
      return false;
    if (!equals(this.q13_1, tmp0_other_with_cast.q13_1))
      return false;
    if (!this.r13_1.equals(tmp0_other_with_cast.r13_1))
      return false;
    if (!(this.s13_1 === tmp0_other_with_cast.s13_1))
      return false;
    if (!(this.t13_1 === tmp0_other_with_cast.t13_1))
      return false;
    if (!(this.u13_1 == tmp0_other_with_cast.u13_1))
      return false;
    return true;
  };
  function CaptureId(value) {
    this.m12_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.m12_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.CaptureId.<anonymous>' call
      var message = 'Un identifiant de capture ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(CaptureId).toString = function () {
    return this.m12_1;
  };
  protoOf(CaptureId).hashCode = function () {
    return getStringHashCode(this.m12_1);
  };
  protoOf(CaptureId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureId))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureId ? other : THROW_CCE();
    if (!(this.m12_1 === tmp0_other_with_cast.m12_1))
      return false;
    return true;
  };
  function Passage(debutCar, finCar, debutMs, finMs) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    this.h15_1 = debutCar;
    this.i15_1 = finCar;
    this.j15_1 = debutMs;
    this.k15_1 = finMs;
    // Inline function 'kotlin.require' call
    if (!(this.h15_1 >= 0)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message = 'Le d\xE9but du passage ne peut pas \xEAtre n\xE9gatif.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.i15_1 > this.h15_1)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_0 = 'Le passage doit couvrir au moins un caract\xE8re.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(this.j15_1 == null === (this.k15_1 == null))) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_1 = 'Les bornes audio vont par paire, ou pas du tout.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    if (!(this.j15_1 == null) && !(this.k15_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.j15_1.a1(new Long(0, 0)) >= 0 && this.k15_1.a1(this.j15_1) > 0)) {
        // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
        var message_2 = 'Bornes audio incoh\xE9rentes.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }
    }
  }
  protoOf(Passage).toString = function () {
    return 'Passage(debutCar=' + this.h15_1 + ', finCar=' + this.i15_1 + ', debutMs=' + toString(this.j15_1) + ', finMs=' + toString(this.k15_1) + ')';
  };
  protoOf(Passage).hashCode = function () {
    var result = this.h15_1;
    result = imul(result, 31) + this.i15_1 | 0;
    result = imul(result, 31) + (this.j15_1 == null ? 0 : this.j15_1.hashCode()) | 0;
    result = imul(result, 31) + (this.k15_1 == null ? 0 : this.k15_1.hashCode()) | 0;
    return result;
  };
  protoOf(Passage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Passage))
      return false;
    var tmp0_other_with_cast = other instanceof Passage ? other : THROW_CCE();
    if (!(this.h15_1 === tmp0_other_with_cast.h15_1))
      return false;
    if (!(this.i15_1 === tmp0_other_with_cast.i15_1))
      return false;
    if (!equals(this.j15_1, tmp0_other_with_cast.j15_1))
      return false;
    if (!equals(this.k15_1, tmp0_other_with_cast.k15_1))
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
  protoOf(Urgence).n15 = function () {
    return this.equals(Urgence_DEPASSEE_getInstance()) || this.equals(Urgence_AUJOURD_HUI_getInstance());
  };
  protoOf(Urgence).o15 = function () {
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
    this.p15_1 = aujourdhui;
  }
  protoOf(ContexteMaintenant).toString = function () {
    return 'ContexteMaintenant(aujourdhui=' + this.p15_1.toString() + ')';
  };
  protoOf(ContexteMaintenant).hashCode = function () {
    return this.p15_1.hashCode();
  };
  protoOf(ContexteMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenant ? other : THROW_CCE();
    if (!this.p15_1.equals(tmp0_other_with_cast.p15_1))
      return false;
    return true;
  };
  function Proposition(element, raison, poidsEffectif, urgence) {
    this.v13_1 = element;
    this.w13_1 = raison;
    this.x13_1 = poidsEffectif;
    this.y13_1 = urgence;
  }
  protoOf(Proposition).toString = function () {
    return 'Proposition(element=' + this.v13_1.toString() + ', raison=' + this.w13_1 + ', poidsEffectif=' + this.x13_1.toString() + ', urgence=' + this.y13_1.toString() + ')';
  };
  protoOf(Proposition).hashCode = function () {
    var result = this.v13_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.w13_1) | 0;
    result = imul(result, 31) + this.x13_1.hashCode() | 0;
    result = imul(result, 31) + this.y13_1.hashCode() | 0;
    return result;
  };
  protoOf(Proposition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Proposition))
      return false;
    var tmp0_other_with_cast = other instanceof Proposition ? other : THROW_CCE();
    if (!this.v13_1.equals(tmp0_other_with_cast.v13_1))
      return false;
    if (!(this.w13_1 === tmp0_other_with_cast.w13_1))
      return false;
    if (!this.x13_1.equals(tmp0_other_with_cast.x13_1))
      return false;
    if (!this.y13_1.equals(tmp0_other_with_cast.y13_1))
      return false;
    return true;
  };
  function raison($this, element, urgence) {
    var tmp0_elvis_lhs = element.u13_1;
    var consequence = tmp0_elvis_lhs == null ? 'poids non d\xE9termin\xE9, \xE0 confirmer en Revue' : tmp0_elvis_lhs;
    return consequence + ' \u2014 ' + urgence.o15();
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
    this.q15_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).ca = function (a, b) {
    return this.q15_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.ca(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).n2 = function () {
    return this.q15_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n2(), other.n2());
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
    return hashCode(this.n2());
  };
  function Priorisation$classer$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp = b.x13_1.y1_1;
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp$ret$1 = a.x13_1.y1_1;
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
        var tmp_0 = a.y13_1.y1_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.y13_1.y1_1;
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
        var tmp_0 = a.v13_1.h13_1.n12_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.v13_1.h13_1.n12_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation() {
    Priorisation_instance = this;
    this.e13_1 = 3;
    this.f13_1 = Poids_MOYEN_getInstance();
  }
  protoOf(Priorisation).r15 = function (echeance, aujourdhui) {
    if (echeance == null)
      return Urgence_AUCUNE_getInstance();
    var tmp0_subject = daysUntil(aujourdhui, echeance);
    return (-2147483648 <= tmp0_subject ? tmp0_subject <= -1 : false) ? Urgence_DEPASSEE_getInstance() : tmp0_subject === 0 ? Urgence_AUJOURD_HUI_getInstance() : tmp0_subject === 1 ? Urgence_DEMAIN_getInstance() : (2 <= tmp0_subject ? tmp0_subject <= 7 : false) ? Urgence_CETTE_SEMAINE_getInstance() : Urgence_PLUS_TARD_getInstance();
  };
  protoOf(Priorisation).s15 = function (elements, contexte) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      if (element.r13_1.equals(Verdict_ACCEPTE_getInstance()) && element.j13_1.e15()) {
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
      var urgence = Priorisation_getInstance().r15(item.m13_1, contexte.p15_1);
      var tmp0_elvis_lhs = item.n13_1;
      var poids = tmp0_elvis_lhs == null ? Priorisation_getInstance().f13_1 : tmp0_elvis_lhs;
      var effectif = urgence.n15() ? dUnCranPlusHaut(poids, Priorisation_getInstance()) : poids;
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
  protoOf(Priorisation).g13 = function (elements, contexte) {
    return take(this.s15(elements, contexte), 3);
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
  function TexteSource(captureId, texte, quand) {
    this.t15_1 = captureId;
    this.u15_1 = texte;
    this.v15_1 = quand;
  }
  protoOf(TexteSource).toString = function () {
    return 'TexteSource(captureId=' + this.t15_1.toString() + ', texte=' + this.u15_1 + ', quand=' + this.v15_1 + ')';
  };
  protoOf(TexteSource).hashCode = function () {
    var result = this.t15_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.u15_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v15_1) | 0;
    return result;
  };
  protoOf(TexteSource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TexteSource))
      return false;
    var tmp0_other_with_cast = other instanceof TexteSource ? other : THROW_CCE();
    if (!this.t15_1.equals(tmp0_other_with_cast.t15_1))
      return false;
    if (!(this.u15_1 === tmp0_other_with_cast.u15_1))
      return false;
    if (!(this.v15_1 === tmp0_other_with_cast.v15_1))
      return false;
    return true;
  };
  function Citation(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.i12_1 = captureId;
    this.j12_1 = extrait;
    this.k12_1 = pourquoi;
    this.l12_1 = elementId;
  }
  protoOf(Citation).toString = function () {
    return 'Citation(captureId=' + this.i12_1.toString() + ', extrait=' + this.j12_1 + ', pourquoi=' + this.k12_1 + ', elementId=' + toString(this.l12_1) + ')';
  };
  protoOf(Citation).hashCode = function () {
    var result = this.i12_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.j12_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k12_1) | 0;
    result = imul(result, 31) + (this.l12_1 == null ? 0 : this.l12_1.hashCode()) | 0;
    return result;
  };
  protoOf(Citation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Citation))
      return false;
    var tmp0_other_with_cast = other instanceof Citation ? other : THROW_CCE();
    if (!this.i12_1.equals(tmp0_other_with_cast.i12_1))
      return false;
    if (!(this.j12_1 === tmp0_other_with_cast.j12_1))
      return false;
    if (!(this.k12_1 === tmp0_other_with_cast.k12_1))
      return false;
    if (!equals(this.l12_1, tmp0_other_with_cast.l12_1))
      return false;
    return true;
  };
  function Reponse(question, enonce, citations, indisponibleHorsLigne) {
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    this.d12_1 = question;
    this.e12_1 = enonce;
    this.f12_1 = citations;
    this.g12_1 = indisponibleHorsLigne;
  }
  protoOf(Reponse).h12 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.f12_1.j();
  };
  protoOf(Reponse).toString = function () {
    return 'Reponse(question=' + this.d12_1 + ', enonce=' + this.e12_1 + ', citations=' + toString_0(this.f12_1) + ', indisponibleHorsLigne=' + toString_0(this.g12_1) + ')';
  };
  protoOf(Reponse).hashCode = function () {
    var result = getStringHashCode(this.d12_1);
    result = imul(result, 31) + getStringHashCode(this.e12_1) | 0;
    result = imul(result, 31) + hashCode(this.f12_1) | 0;
    result = imul(result, 31) + hashCode(this.g12_1) | 0;
    return result;
  };
  protoOf(Reponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reponse))
      return false;
    var tmp0_other_with_cast = other instanceof Reponse ? other : THROW_CCE();
    if (!(this.d12_1 === tmp0_other_with_cast.d12_1))
      return false;
    if (!(this.e12_1 === tmp0_other_with_cast.e12_1))
      return false;
    if (!equals(this.f12_1, tmp0_other_with_cast.f12_1))
      return false;
    if (!equals(this.g12_1, tmp0_other_with_cast.g12_1))
      return false;
    return true;
  };
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
    this.w15_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).ca = function (a, b) {
    return this.w15_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.ca(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).n2 = function () {
    return this.w15_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n2(), other.n2());
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
    return hashCode(this.n2());
  };
  function RechercheLocale$parMots$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp = b.ab_1;
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp$ret$1 = a.ab_1;
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
        var tmp_0 = a.bb_1.i12_1.m12_1;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp$ret$1 = b.bb_1.i12_1.m12_1;
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
        var tmp0_safe_receiver = a.bb_1.l12_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n12_1;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp0_safe_receiver_0 = b.bb_1.l12_1;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.n12_1;
        var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function RechercheLocale$parPersonne$lambda(it) {
    return etatOrdinal(RechercheLocale_getInstance(), it.r13_1);
  }
  function RechercheLocale$parPersonne$lambda_0(it) {
    return it.h13_1.n12_1;
  }
  function RechercheLocale() {
    RechercheLocale_instance = this;
    this.w14_1 = 'Rien \xE0 ce sujet dans ce qui a \xE9t\xE9 captur\xE9.';
    this.x14_1 = listOf(['analyse des captures pas encore trait\xE9es', 'reformulation de la r\xE9ponse en langage naturel']);
    this.y14_1 = 10;
  }
  protoOf(RechercheLocale).x15 = function (requete, elements, captures, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.x14_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$0 = to(item, Texte_getInstance().b16(requete, item.k13_1));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element.bb_1 > 0.0) {
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
      var element_0 = item_0.cb();
      var note = item_0.db();
      var tmp$ret$6 = to(note, new Citation(element_0.i13_1, element_0.k13_1, '\xE9l\xE9ment \xAB ' + libelle(RechercheLocale_getInstance(), element_0.j13_1) + ' \xBB contenant les mots cherch\xE9s', element_0.h13_1));
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
      var tmp$ret$9 = item_1.bb_1.i12_1;
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
      if (!dejaCitees.o1(element_1.t15_1)) {
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
      var tmp$ret$15 = to(item_2, Texte_getInstance().b16(requete, item_2.u15_1));
      destination_4.e(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_5 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_5 = destination_4.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element_2.bb_1 > 0.0) {
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
      var source = item_3.cb();
      var note_0 = item_3.db();
      var tmp$ret$21 = to(note_0, new Citation(source.t15_1, source.u15_1, 'capture du ' + source.v15_1 + ' contenant les mots cherch\xE9s'));
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
      var tmp$ret$27 = item_4.bb_1;
      destination_7.e(tmp$ret$27);
    }
    var citations = destination_7;
    return reponse(this, requete, citations, indisponibles);
  };
  protoOf(RechercheLocale).z14 = function (requete, elements, captures, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.x15(requete, elements, captures, reseau, max) : $super.x15.call(this, requete, elements, captures, reseau, max);
  };
  protoOf(RechercheLocale).c16 = function (personne, elements, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.x14_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      if (!(element.o13_1 == null) && Texte_getInstance().d16(element.o13_1, personne)) {
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
      var tmp$ret$3 = new Citation(item.i13_1, item.k13_1, libelle(RechercheLocale_getInstance(), item.j13_1) + ' ' + etat(RechercheLocale_getInstance(), item.r13_1) + ' envers ' + personne, item.h13_1);
      destination_0.e(tmp$ret$3);
    }
    var citations = destination_0;
    return reponse(this, 'ce qui est en cours avec ' + personne, citations, indisponibles);
  };
  protoOf(RechercheLocale).b15 = function (personne, elements, reseau, max, $super) {
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.c16(personne, elements, reseau, max) : $super.c16.call(this, personne, elements, reseau, max);
  };
  var RechercheLocale_instance;
  function RechercheLocale_getInstance() {
    if (RechercheLocale_instance == null)
      new RechercheLocale();
    return RechercheLocale_instance;
  }
  function RevueReduite(retenues, demeurentEnFile, motif) {
    this.e14_1 = retenues;
    this.f14_1 = demeurentEnFile;
    this.g14_1 = motif;
  }
  protoOf(RevueReduite).m14 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.f14_1.j();
  };
  protoOf(RevueReduite).toString = function () {
    return 'RevueReduite(retenues=' + toString_0(this.e14_1) + ', demeurentEnFile=' + toString_0(this.f14_1) + ', motif=' + this.g14_1 + ')';
  };
  protoOf(RevueReduite).hashCode = function () {
    var result = hashCode(this.e14_1);
    result = imul(result, 31) + hashCode(this.f14_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g14_1) | 0;
    return result;
  };
  protoOf(RevueReduite).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueReduite))
      return false;
    var tmp0_other_with_cast = other instanceof RevueReduite ? other : THROW_CCE();
    if (!equals(this.e14_1, tmp0_other_with_cast.e14_1))
      return false;
    if (!equals(this.f14_1, tmp0_other_with_cast.f14_1))
      return false;
    if (!(this.g14_1 === tmp0_other_with_cast.g14_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.e16_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).ca = function (a, b) {
    return this.e16_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.ca(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).n2 = function () {
    return this.e16_1;
  };
  protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n2(), other.n2());
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
    return hashCode(this.n2());
  };
  function Arriere$revueReduite$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs = b.h14_1.n13_1;
    var tmp = (tmp0_elvis_lhs == null ? Poids_MOYEN_getInstance() : tmp0_elvis_lhs).y1_1;
    // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
    var tmp0_elvis_lhs_0 = a.h14_1.n13_1;
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
        var tmp_0 = a.i14_1.y1_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.i14_1.y1_1;
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
        var tmp_0 = a.l14().n12_1;
        // Inline function 'app.zenote.core.revue.Arriere.revueReduite.<anonymous>' call
        var tmp$ret$1 = b.l14().n12_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Arriere() {
    this.c14_1 = 12;
  }
  protoOf(Arriere).f16 = function (entrees, charge) {
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
      var tmp$ret$4 = item.l14();
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
      if (gardees.o1(element.l14())) {
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
      if (!gardees.o1(element_0.l14())) {
        destination_1.e(element_0);
      }
    }
    return new RevueReduite(tmp_2, destination_1, 'Beaucoup de choses en attente. Voici les ' + charge + ' plus lourdes ou ' + 'les plus press\xE9es ; le reste demeure en file, intact.');
  };
  protoOf(Arriere).d14 = function (entrees, charge, $super) {
    charge = charge === VOID ? 12 : charge;
    return $super === VOID ? this.f16(entrees, charge) : $super.f16.call(this, entrees, charge);
  };
  var Arriere_instance;
  function Arriere_getInstance() {
    return Arriere_instance;
  }
  function EntreeRevue(element, urgence, aConfirmer, planAFournir) {
    this.h14_1 = element;
    this.i14_1 = urgence;
    this.j14_1 = aConfirmer;
    this.k14_1 = planAFournir;
  }
  protoOf(EntreeRevue).l14 = function () {
    return this.h14_1.h13_1;
  };
  protoOf(EntreeRevue).toString = function () {
    return 'EntreeRevue(element=' + this.h14_1.toString() + ', urgence=' + this.i14_1.toString() + ', aConfirmer=' + this.j14_1 + ', planAFournir=' + this.k14_1 + ')';
  };
  protoOf(EntreeRevue).hashCode = function () {
    var result = this.h14_1.hashCode();
    result = imul(result, 31) + this.i14_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j14_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k14_1) | 0;
    return result;
  };
  protoOf(EntreeRevue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevue))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevue ? other : THROW_CCE();
    if (!this.h14_1.equals(tmp0_other_with_cast.h14_1))
      return false;
    if (!this.i14_1.equals(tmp0_other_with_cast.i14_1))
      return false;
    if (!(this.j14_1 === tmp0_other_with_cast.j14_1))
      return false;
    if (!(this.k14_1 === tmp0_other_with_cast.k14_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_3(function_0) {
    this.g16_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).ca = function (a, b) {
    return this.g16_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.ca(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).n2 = function () {
    return this.g16_1;
  };
  protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n2(), other.n2());
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
    return hashCode(this.n2());
  };
  function FileRevue$ordreInterne$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp = a.i14_1.y1_1;
    // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
    var tmp$ret$1 = b.i14_1.y1_1;
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
        var tmp_0 = b.j14_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = a.j14_1;
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
        var tmp_0 = a.l14().n12_1;
        // Inline function 'app.zenote.core.revue.FileRevue.ordreInterne.<anonymous>' call
        var tmp$ret$1 = b.l14().n12_1;
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
    tmp.a14_1 = new sam$kotlin_Comparator$0_3(tmp_2);
  }
  protoOf(FileRevue).b14 = function (element, aujourdhui) {
    return new EntreeRevue(element, Priorisation_getInstance().r15(element.m13_1, aujourdhui), element.s13_1, element.j13_1.e15() && element.q13_1 == null);
  };
  var FileRevue_instance;
  function FileRevue_getInstance() {
    if (FileRevue_instance == null)
      new FileRevue();
    return FileRevue_instance;
  }
  function Suivi(elementId, derniereNouvelle) {
    this.h16_1 = elementId;
    this.i16_1 = derniereNouvelle;
  }
  protoOf(Suivi).toString = function () {
    return 'Suivi(elementId=' + this.h16_1.toString() + ', derniereNouvelle=' + this.i16_1.toString() + ')';
  };
  protoOf(Suivi).hashCode = function () {
    var result = this.h16_1.hashCode();
    result = imul(result, 31) + this.i16_1.hashCode() | 0;
    return result;
  };
  protoOf(Suivi).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Suivi))
      return false;
    var tmp0_other_with_cast = other instanceof Suivi ? other : THROW_CCE();
    if (!this.h16_1.equals(tmp0_other_with_cast.h16_1))
      return false;
    if (!this.i16_1.equals(tmp0_other_with_cast.i16_1))
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
    this.r14_1 = element;
    this.s14_1 = motif;
    this.t14_1 = options;
  }
  protoOf(PropositionRelance).toString = function () {
    return 'PropositionRelance(element=' + this.r14_1.toString() + ', motif=' + this.s14_1 + ', options=' + toString_0(this.t14_1) + ')';
  };
  protoOf(PropositionRelance).hashCode = function () {
    var result = this.r14_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.s14_1) | 0;
    result = imul(result, 31) + hashCode(this.t14_1) | 0;
    return result;
  };
  protoOf(PropositionRelance).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionRelance))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionRelance ? other : THROW_CCE();
    if (!this.r14_1.equals(tmp0_other_with_cast.r14_1))
      return false;
    if (!(this.s14_1 === tmp0_other_with_cast.s14_1))
      return false;
    if (!equals(this.t14_1, tmp0_other_with_cast.t14_1))
      return false;
    return true;
  };
  function engagement($this, element, aujourdhui) {
    var tmp0_elvis_lhs = element.m13_1;
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
    var tmp1_safe_receiver = element.o13_1;
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
    var delai = $this.j16(element.o13_1, delaisObserves);
    if (silence <= delai)
      return null;
    var tmp0_elvis_lhs = element.o13_1;
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
        var tmp0_elvis_lhs_0 = element.o13_1;
        if (tmp_0.d16(element_0, tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0)) {
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
    var tmp0_safe_receiver = it.r14_1.m13_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return tmp1_elvis_lhs == null ? '9999' : tmp1_elvis_lhs;
  }
  function Relance$aRelancer$lambda_0(it) {
    return it.r14_1.h13_1.n12_1;
  }
  function Relance() {
    this.o14_1 = 3;
    this.p14_1 = 7;
  }
  protoOf(Relance).j16 = function (personne, observes) {
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
      if (Texte_getInstance().d16(element.q1(), personne)) {
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
  protoOf(Relance).q14 = function (elements, aujourdhui, suivis, delaisObserves) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(suivis, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = suivis.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.h16_1, element.i16_1);
      destination.w1(pair.ab_1, pair.bb_1);
    }
    var parElement = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = elements.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.revue.Relance.aRelancer.<anonymous>' call
      if (element_0.r13_1.equals(Verdict_ACCEPTE_getInstance())) {
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
      switch (element_1.j13_1.y1_1) {
        case 1:
          tmp = engagement(Relance_instance, element_1, aujourdhui);
          break;
        case 2:
          var tmp_0 = Relance_instance;
          var tmp1_elvis_lhs = parElement.t1(element_1.h13_1);
          tmp = attente(tmp_0, element_1, tmp1_elvis_lhs == null ? element_1.m13_1 : tmp1_elvis_lhs, aujourdhui, delaisObserves);
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
    this.y15_1 = '\xE0\xE1\xE2\xE3\xE4\xE5\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF1\xF2\xF3\xF4\xF5\xF6\xF9\xFA\xFB\xFC\xFD\xFF';
    this.z15_1 = 'aaaaaaceeeeiiiinooooouuuuyy';
    this.a16_1 = setOf(['le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux', 'et', 'ou', 'a', '\xE0', 'en', 'dans', 'sur', 'pour', 'par', 'avec', 'que', 'qui', 'quoi', 'ce', 'cet', 'cette', 'ces', 'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'est', 'sont', 'ai', 'as', 'ont', 'etait', 'ete', 'pas', 'ne', 'plus']);
  }
  protoOf(Texte).k16 = function (texte) {
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
      this_0.n6(i >= 0 ? charSequenceGet('aaaaaaceeeeiiiinooooouuuuyy', i) : element);
    }
    return this_0.toString();
  };
  protoOf(Texte).l16 = function (texte) {
    // Inline function 'kotlin.text.map' call
    var this_0 = this.k16(texte);
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
      if (element.length > 1 && !Texte_getInstance().a16_1.o1(element)) {
        destination_0.e(element);
      }
    }
    return destination_0;
  };
  protoOf(Texte).m16 = function (texte) {
    return toSet(this.l16(texte));
  };
  protoOf(Texte).b16 = function (requete, texte) {
    var demandes = this.m16(requete);
    if (demandes.j())
      return 0.0;
    var presents = this.m16(texte);
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
  protoOf(Texte).d16 = function (a, b) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(a) ? a : THROW_CCE()));
    var tmp = this.k16(tmp$ret$0);
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1 = toString_0(trim(isCharSequence(b) ? b : THROW_CCE()));
    return tmp === this.k16(tmp$ret$1);
  };
  var Texte_instance;
  function Texte_getInstance() {
    if (Texte_instance == null)
      new Texte();
    return Texte_instance;
  }
  function ZeNoteRegles() {
    this.version = '3';
  }
  protoOf(ZeNoteRegles).maintenant = function (elementsJson, aujourdhui) {
    return Regles_getInstance().d13(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).revue = function (elementsJson, aujourdhui) {
    return Regles_getInstance().z13(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).filtrerAncrage = function (texteSource, elementsJson) {
    return Regles_getInstance().u14(texteSource, elementsJson);
  };
  protoOf(ZeNoteRegles).relances = function (elementsJson, aujourdhui, suivisJson, delaisJson) {
    return Regles_getInstance().n14(elementsJson, aujourdhui, suivisJson, delaisJson);
  };
  protoOf(ZeNoteRegles).rechercherParMots = function (requete, elementsJson, capturesJson, reseau) {
    return Regles_getInstance().v14(requete, elementsJson, capturesJson, reseau);
  };
  protoOf(ZeNoteRegles).rechercherParPersonne = function (personne, elementsJson, reseau) {
    return Regles_getInstance().a15(personne, elementsJson, reseau);
  };
  protoOf(ZeNoteRegles).n16 = function () {
    return this.version;
  };
  var ZeNoteRegles_instance;
  function ZeNoteRegles_getInstance() {
    return ZeNoteRegles_instance;
  }
  //region block: post-declaration
  protoOf($serializer).mh = typeParametersSerializers;
  protoOf($serializer_0).mh = typeParametersSerializers;
  protoOf($serializer_1).mh = typeParametersSerializers;
  protoOf($serializer_2).mh = typeParametersSerializers;
  protoOf($serializer_3).mh = typeParametersSerializers;
  protoOf($serializer_4).mh = typeParametersSerializers;
  protoOf($serializer_5).mh = typeParametersSerializers;
  protoOf($serializer_6).mh = typeParametersSerializers;
  protoOf($serializer_7).mh = typeParametersSerializers;
  protoOf($serializer_8).mh = typeParametersSerializers;
  protoOf($serializer_9).mh = typeParametersSerializers;
  protoOf($serializer_10).mh = typeParametersSerializers;
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

