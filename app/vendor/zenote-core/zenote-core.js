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
  var protoOf = kotlin_kotlin.$_$.j4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w3;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.h1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.x5;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var initMetadataForObject = kotlin_kotlin.$_$.a4;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var objectCreate = kotlin_kotlin.$_$.i4;
  var toString = kotlin_kotlin.$_$.j6;
  var getStringHashCode = kotlin_kotlin.$_$.t3;
  var getNumberHashCode = kotlin_kotlin.$_$.r3;
  var getBooleanHashCode = kotlin_kotlin.$_$.q3;
  var equals = kotlin_kotlin.$_$.o3;
  var initMetadataForClass = kotlin_kotlin.$_$.v3;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var toString_0 = kotlin_kotlin.$_$.m4;
  var hashCode = kotlin_kotlin.$_$.u3;
  var emptyList = kotlin_kotlin.$_$.v1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var Companion_instance = kotlin_kotlin.$_$.g1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c1;
  var createFailure = kotlin_kotlin.$_$.b6;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d1;
  var isBlank = kotlin_kotlin.$_$.a5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.e1;
  var listOfNotNull = kotlin_kotlin.$_$.i2;
  var Collection = kotlin_kotlin.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.c4;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var FunctionAdapter = kotlin_kotlin.$_$.e3;
  var Comparator = kotlin_kotlin.$_$.q5;
  var compareValues = kotlin_kotlin.$_$.a3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.w;
  var compareTo = kotlin_kotlin.$_$.m3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var sortedWith = kotlin_kotlin.$_$.u2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var THROW_IAE = kotlin_kotlin.$_$.y5;
  var Enum = kotlin_kotlin.$_$.t5;
  var Long = kotlin_kotlin.$_$.w5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.h6;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var take = kotlin_kotlin.$_$.v2;
  var listOf = kotlin_kotlin.$_$.k2;
  var to = kotlin_kotlin.$_$.k6;
  var toSet = kotlin_kotlin.$_$.y2;
  var plus = kotlin_kotlin.$_$.n2;
  var compareBy = kotlin_kotlin.$_$.z2;
  var setOf = kotlin_kotlin.$_$.q2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l;
  var charSequenceLength = kotlin_kotlin.$_$.k3;
  var charSequenceGet = kotlin_kotlin.$_$.j3;
  var indexOf = kotlin_kotlin.$_$.z4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y;
  var isLetterOrDigit = kotlin_kotlin.$_$.b5;
  var Char = kotlin_kotlin.$_$.o5;
  var joinToString = kotlin_kotlin.$_$.c2;
  var charArrayOf = kotlin_kotlin.$_$.h3;
  var split = kotlin_kotlin.$_$.g5;
  var checkCountOverflow = kotlin_kotlin.$_$.n1;
  var isCharSequence = kotlin_kotlin.$_$.b4;
  var trim = kotlin_kotlin.$_$.n5;
  var defineProp = kotlin_kotlin.$_$.n3;
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
  initMetadataForClass(RevueJson, 'RevueJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AncrageJson, 'AncrageJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EcarteJson, 'EcarteJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CaptureJson, 'CaptureJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CitationJson, 'CitationJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ReponseJson, 'ReponseJson', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
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
  initMetadataForCompanion(Companion_9);
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
  initMetadataForObject(Texte, 'Texte');
  initMetadataForObject(ZeNoteRegles, 'ZeNoteRegles');
  //endregion
  function Companion() {
  }
  protoOf(Companion).tx = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ElementJson', this, 21);
    tmp0_serialDesc.ng('id', false);
    tmp0_serialDesc.ng('captureId', false);
    tmp0_serialDesc.ng('type', false);
    tmp0_serialDesc.ng('texte', false);
    tmp0_serialDesc.ng('debutCar', false);
    tmp0_serialDesc.ng('finCar', false);
    tmp0_serialDesc.ng('debutMs', true);
    tmp0_serialDesc.ng('finMs', true);
    tmp0_serialDesc.ng('echeance', true);
    tmp0_serialDesc.ng('echeanceConfiance', true);
    tmp0_serialDesc.ng('echeanceIndice', true);
    tmp0_serialDesc.ng('poids', true);
    tmp0_serialDesc.ng('poidsConfiance', true);
    tmp0_serialDesc.ng('poidsIndice', true);
    tmp0_serialDesc.ng('interlocuteur', true);
    tmp0_serialDesc.ng('interlocuteurConfiance', true);
    tmp0_serialDesc.ng('sphere', true);
    tmp0_serialDesc.ng('planDeclencheur', true);
    tmp0_serialDesc.ng('planAction', true);
    tmp0_serialDesc.ng('verdict', true);
    tmp0_serialDesc.ng('corrigeParHumain', true);
    this.ux_1 = tmp0_serialDesc;
  }
  protoOf($serializer).vx = function (encoder, value) {
    var tmp0_desc = this.ux_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    tmp1_output.td(tmp0_desc, 0, value.wx_1);
    tmp1_output.td(tmp0_desc, 1, value.xx_1);
    tmp1_output.td(tmp0_desc, 2, value.yx_1);
    tmp1_output.td(tmp0_desc, 3, value.zx_1);
    tmp1_output.sd(tmp0_desc, 4, value.ay_1);
    tmp1_output.sd(tmp0_desc, 5, value.by_1);
    if (tmp1_output.ae(tmp0_desc, 6) ? true : !(value.cy_1 == null)) {
      tmp1_output.wd(tmp0_desc, 6, LongSerializer_getInstance(), value.cy_1);
    }
    if (tmp1_output.ae(tmp0_desc, 7) ? true : !(value.dy_1 == null)) {
      tmp1_output.wd(tmp0_desc, 7, LongSerializer_getInstance(), value.dy_1);
    }
    if (tmp1_output.ae(tmp0_desc, 8) ? true : !(value.ey_1 == null)) {
      tmp1_output.wd(tmp0_desc, 8, StringSerializer_getInstance(), value.ey_1);
    }
    if (tmp1_output.ae(tmp0_desc, 9) ? true : !(value.fy_1 == null)) {
      tmp1_output.wd(tmp0_desc, 9, DoubleSerializer_getInstance(), value.fy_1);
    }
    if (tmp1_output.ae(tmp0_desc, 10) ? true : !(value.gy_1 == null)) {
      tmp1_output.wd(tmp0_desc, 10, StringSerializer_getInstance(), value.gy_1);
    }
    if (tmp1_output.ae(tmp0_desc, 11) ? true : !(value.hy_1 == null)) {
      tmp1_output.wd(tmp0_desc, 11, StringSerializer_getInstance(), value.hy_1);
    }
    if (tmp1_output.ae(tmp0_desc, 12) ? true : !(value.iy_1 == null)) {
      tmp1_output.wd(tmp0_desc, 12, DoubleSerializer_getInstance(), value.iy_1);
    }
    if (tmp1_output.ae(tmp0_desc, 13) ? true : !(value.jy_1 == null)) {
      tmp1_output.wd(tmp0_desc, 13, StringSerializer_getInstance(), value.jy_1);
    }
    if (tmp1_output.ae(tmp0_desc, 14) ? true : !(value.ky_1 == null)) {
      tmp1_output.wd(tmp0_desc, 14, StringSerializer_getInstance(), value.ky_1);
    }
    if (tmp1_output.ae(tmp0_desc, 15) ? true : !(value.ly_1 == null)) {
      tmp1_output.wd(tmp0_desc, 15, DoubleSerializer_getInstance(), value.ly_1);
    }
    if (tmp1_output.ae(tmp0_desc, 16) ? true : !(value.my_1 == null)) {
      tmp1_output.wd(tmp0_desc, 16, StringSerializer_getInstance(), value.my_1);
    }
    if (tmp1_output.ae(tmp0_desc, 17) ? true : !(value.ny_1 == null)) {
      tmp1_output.wd(tmp0_desc, 17, StringSerializer_getInstance(), value.ny_1);
    }
    if (tmp1_output.ae(tmp0_desc, 18) ? true : !(value.oy_1 == null)) {
      tmp1_output.wd(tmp0_desc, 18, StringSerializer_getInstance(), value.oy_1);
    }
    if (tmp1_output.ae(tmp0_desc, 19) ? true : !(value.py_1 === 'EN_ATTENTE')) {
      tmp1_output.td(tmp0_desc, 19, value.py_1);
    }
    if (tmp1_output.ae(tmp0_desc, 20) ? true : !(value.qy_1 === false)) {
      tmp1_output.rd(tmp0_desc, 20, value.qy_1);
    }
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer).nb = function (encoder, value) {
    return this.vx(encoder, value instanceof ElementJson ? value : THROW_CCE());
  };
  protoOf($serializer).ob = function (decoder) {
    var tmp0_desc = this.ux_1;
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
    var tmp25_input = decoder.xc(tmp0_desc);
    if (tmp25_input.gd()) {
      tmp4_local0 = tmp25_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp25_input.bd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp25_input.bd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp25_input.bd(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp25_input.ad(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp25_input.ad(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp25_input.ed(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp25_input.ed(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp25_input.ed(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp25_input.ed(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp25_input.ed(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp25_input.ed(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp25_input.ed(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp25_input.ed(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp25_input.ed(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp25_input.ed(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp25_input.ed(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp25_input.ed(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp25_input.ed(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp25_input.bd(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp25_input.zc(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp25_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp25_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp25_input.bd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp25_input.bd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp25_input.bd(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp25_input.ad(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp25_input.ad(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp25_input.ed(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp25_input.ed(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp25_input.ed(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp25_input.ed(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp25_input.ed(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp25_input.ed(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp25_input.ed(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp25_input.ed(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp25_input.ed(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp25_input.ed(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp25_input.ed(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp25_input.ed(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp25_input.ed(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp25_input.bd(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp25_input.zc(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp25_input.yc(tmp0_desc);
    return ElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, null);
  };
  protoOf($serializer).mb = function () {
    return this.ux_1;
  };
  protoOf($serializer).pg = function () {
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
      throwMissingFieldException(seen0, 63, $serializer_getInstance().ux_1);
    }
    $this.wx_1 = id;
    $this.xx_1 = captureId;
    $this.yx_1 = type;
    $this.zx_1 = texte;
    $this.ay_1 = debutCar;
    $this.by_1 = finCar;
    if (0 === (seen0 & 64))
      $this.cy_1 = null;
    else
      $this.cy_1 = debutMs;
    if (0 === (seen0 & 128))
      $this.dy_1 = null;
    else
      $this.dy_1 = finMs;
    if (0 === (seen0 & 256))
      $this.ey_1 = null;
    else
      $this.ey_1 = echeance;
    if (0 === (seen0 & 512))
      $this.fy_1 = null;
    else
      $this.fy_1 = echeanceConfiance;
    if (0 === (seen0 & 1024))
      $this.gy_1 = null;
    else
      $this.gy_1 = echeanceIndice;
    if (0 === (seen0 & 2048))
      $this.hy_1 = null;
    else
      $this.hy_1 = poids;
    if (0 === (seen0 & 4096))
      $this.iy_1 = null;
    else
      $this.iy_1 = poidsConfiance;
    if (0 === (seen0 & 8192))
      $this.jy_1 = null;
    else
      $this.jy_1 = poidsIndice;
    if (0 === (seen0 & 16384))
      $this.ky_1 = null;
    else
      $this.ky_1 = interlocuteur;
    if (0 === (seen0 & 32768))
      $this.ly_1 = null;
    else
      $this.ly_1 = interlocuteurConfiance;
    if (0 === (seen0 & 65536))
      $this.my_1 = null;
    else
      $this.my_1 = sphere;
    if (0 === (seen0 & 131072))
      $this.ny_1 = null;
    else
      $this.ny_1 = planDeclencheur;
    if (0 === (seen0 & 262144))
      $this.oy_1 = null;
    else
      $this.oy_1 = planAction;
    if (0 === (seen0 & 524288))
      $this.py_1 = 'EN_ATTENTE';
    else
      $this.py_1 = verdict;
    if (0 === (seen0 & 1048576))
      $this.qy_1 = false;
    else
      $this.qy_1 = corrigeParHumain;
    return $this;
  }
  function ElementJson_init_$Create$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker) {
    return ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker, objectCreate(protoOf(ElementJson)));
  }
  function ElementJson() {
  }
  protoOf(ElementJson).toString = function () {
    return 'ElementJson(id=' + this.wx_1 + ', captureId=' + this.xx_1 + ', type=' + this.yx_1 + ', texte=' + this.zx_1 + ', debutCar=' + this.ay_1 + ', finCar=' + this.by_1 + ', debutMs=' + toString(this.cy_1) + ', finMs=' + toString(this.dy_1) + ', echeance=' + this.ey_1 + ', echeanceConfiance=' + this.fy_1 + ', echeanceIndice=' + this.gy_1 + ', poids=' + this.hy_1 + ', poidsConfiance=' + this.iy_1 + ', poidsIndice=' + this.jy_1 + ', interlocuteur=' + this.ky_1 + ', interlocuteurConfiance=' + this.ly_1 + ', sphere=' + this.my_1 + ', planDeclencheur=' + this.ny_1 + ', planAction=' + this.oy_1 + ', verdict=' + this.py_1 + ', corrigeParHumain=' + this.qy_1 + ')';
  };
  protoOf(ElementJson).hashCode = function () {
    var result = getStringHashCode(this.wx_1);
    result = imul(result, 31) + getStringHashCode(this.xx_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.yx_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.zx_1) | 0;
    result = imul(result, 31) + this.ay_1 | 0;
    result = imul(result, 31) + this.by_1 | 0;
    result = imul(result, 31) + (this.cy_1 == null ? 0 : this.cy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.dy_1 == null ? 0 : this.dy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.ey_1 == null ? 0 : getStringHashCode(this.ey_1)) | 0;
    result = imul(result, 31) + (this.fy_1 == null ? 0 : getNumberHashCode(this.fy_1)) | 0;
    result = imul(result, 31) + (this.gy_1 == null ? 0 : getStringHashCode(this.gy_1)) | 0;
    result = imul(result, 31) + (this.hy_1 == null ? 0 : getStringHashCode(this.hy_1)) | 0;
    result = imul(result, 31) + (this.iy_1 == null ? 0 : getNumberHashCode(this.iy_1)) | 0;
    result = imul(result, 31) + (this.jy_1 == null ? 0 : getStringHashCode(this.jy_1)) | 0;
    result = imul(result, 31) + (this.ky_1 == null ? 0 : getStringHashCode(this.ky_1)) | 0;
    result = imul(result, 31) + (this.ly_1 == null ? 0 : getNumberHashCode(this.ly_1)) | 0;
    result = imul(result, 31) + (this.my_1 == null ? 0 : getStringHashCode(this.my_1)) | 0;
    result = imul(result, 31) + (this.ny_1 == null ? 0 : getStringHashCode(this.ny_1)) | 0;
    result = imul(result, 31) + (this.oy_1 == null ? 0 : getStringHashCode(this.oy_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.py_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.qy_1) | 0;
    return result;
  };
  protoOf(ElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof ElementJson ? other : THROW_CCE();
    if (!(this.wx_1 === tmp0_other_with_cast.wx_1))
      return false;
    if (!(this.xx_1 === tmp0_other_with_cast.xx_1))
      return false;
    if (!(this.yx_1 === tmp0_other_with_cast.yx_1))
      return false;
    if (!(this.zx_1 === tmp0_other_with_cast.zx_1))
      return false;
    if (!(this.ay_1 === tmp0_other_with_cast.ay_1))
      return false;
    if (!(this.by_1 === tmp0_other_with_cast.by_1))
      return false;
    if (!equals(this.cy_1, tmp0_other_with_cast.cy_1))
      return false;
    if (!equals(this.dy_1, tmp0_other_with_cast.dy_1))
      return false;
    if (!(this.ey_1 == tmp0_other_with_cast.ey_1))
      return false;
    if (!equals(this.fy_1, tmp0_other_with_cast.fy_1))
      return false;
    if (!(this.gy_1 == tmp0_other_with_cast.gy_1))
      return false;
    if (!(this.hy_1 == tmp0_other_with_cast.hy_1))
      return false;
    if (!equals(this.iy_1, tmp0_other_with_cast.iy_1))
      return false;
    if (!(this.jy_1 == tmp0_other_with_cast.jy_1))
      return false;
    if (!(this.ky_1 == tmp0_other_with_cast.ky_1))
      return false;
    if (!equals(this.ly_1, tmp0_other_with_cast.ly_1))
      return false;
    if (!(this.my_1 == tmp0_other_with_cast.my_1))
      return false;
    if (!(this.ny_1 == tmp0_other_with_cast.ny_1))
      return false;
    if (!(this.oy_1 == tmp0_other_with_cast.oy_1))
      return false;
    if (!(this.py_1 === tmp0_other_with_cast.py_1))
      return false;
    if (!(this.qy_1 === tmp0_other_with_cast.qy_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).tx = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PropositionJson', this, 5);
    tmp0_serialDesc.ng('elementId', false);
    tmp0_serialDesc.ng('texte', false);
    tmp0_serialDesc.ng('raison', false);
    tmp0_serialDesc.ng('poidsEffectif', false);
    tmp0_serialDesc.ng('urgence', false);
    this.ry_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).sy = function (encoder, value) {
    var tmp0_desc = this.ry_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    tmp1_output.td(tmp0_desc, 0, value.ty_1);
    tmp1_output.td(tmp0_desc, 1, value.uy_1);
    tmp1_output.td(tmp0_desc, 2, value.vy_1);
    tmp1_output.td(tmp0_desc, 3, value.wy_1);
    tmp1_output.td(tmp0_desc, 4, value.xy_1);
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_0).nb = function (encoder, value) {
    return this.sy(encoder, value instanceof PropositionJson ? value : THROW_CCE());
  };
  protoOf($serializer_0).ob = function (decoder) {
    var tmp0_desc = this.ry_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xc(tmp0_desc);
    if (tmp9_input.gd()) {
      tmp4_local0 = tmp9_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.bd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.bd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.bd(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.bd(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.bd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.bd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.bd(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.bd(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yc(tmp0_desc);
    return PropositionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).mb = function () {
    return this.ry_1;
  };
  protoOf($serializer_0).pg = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_0().ry_1);
    }
    $this.ty_1 = elementId;
    $this.uy_1 = texte;
    $this.vy_1 = raison;
    $this.wy_1 = poidsEffectif;
    $this.xy_1 = urgence;
    return $this;
  }
  function PropositionJson_init_$Create$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker) {
    return PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, objectCreate(protoOf(PropositionJson)));
  }
  function PropositionJson(elementId, texte, raison, poidsEffectif, urgence) {
    this.ty_1 = elementId;
    this.uy_1 = texte;
    this.vy_1 = raison;
    this.wy_1 = poidsEffectif;
    this.xy_1 = urgence;
  }
  protoOf(PropositionJson).toString = function () {
    return 'PropositionJson(elementId=' + this.ty_1 + ', texte=' + this.uy_1 + ', raison=' + this.vy_1 + ', poidsEffectif=' + this.wy_1 + ', urgence=' + this.xy_1 + ')';
  };
  protoOf(PropositionJson).hashCode = function () {
    var result = getStringHashCode(this.ty_1);
    result = imul(result, 31) + getStringHashCode(this.uy_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.vy_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.wy_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.xy_1) | 0;
    return result;
  };
  protoOf(PropositionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionJson))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionJson ? other : THROW_CCE();
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
    tmp0_serialDesc.ng('element', false);
    tmp0_serialDesc.ng('aConfirmer', false);
    tmp0_serialDesc.ng('planManquant', false);
    tmp0_serialDesc.ng('urgence', false);
    this.yy_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).zy = function (encoder, value) {
    var tmp0_desc = this.yy_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    tmp1_output.ud(tmp0_desc, 0, $serializer_getInstance(), value.az_1);
    tmp1_output.rd(tmp0_desc, 1, value.bz_1);
    tmp1_output.rd(tmp0_desc, 2, value.cz_1);
    tmp1_output.td(tmp0_desc, 3, value.dz_1);
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_1).nb = function (encoder, value) {
    return this.zy(encoder, value instanceof EntreeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_1).ob = function (decoder) {
    var tmp0_desc = this.yy_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xc(tmp0_desc);
    if (tmp8_input.gd()) {
      tmp4_local0 = tmp8_input.cd(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.zc(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.zc(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.bd(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.cd(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.zc(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.zc(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.bd(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yc(tmp0_desc);
    return EntreeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).mb = function () {
    return this.yy_1;
  };
  protoOf($serializer_1).pg = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_1().yy_1);
    }
    $this.az_1 = element;
    $this.bz_1 = aConfirmer;
    $this.cz_1 = planManquant;
    $this.dz_1 = urgence;
    return $this;
  }
  function EntreeRevueJson_init_$Create$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker) {
    return EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, objectCreate(protoOf(EntreeRevueJson)));
  }
  function EntreeRevueJson(element, aConfirmer, planManquant, urgence) {
    this.az_1 = element;
    this.bz_1 = aConfirmer;
    this.cz_1 = planManquant;
    this.dz_1 = urgence;
  }
  protoOf(EntreeRevueJson).toString = function () {
    return 'EntreeRevueJson(element=' + this.az_1.toString() + ', aConfirmer=' + this.bz_1 + ', planManquant=' + this.cz_1 + ', urgence=' + this.dz_1 + ')';
  };
  protoOf(EntreeRevueJson).hashCode = function () {
    var result = this.az_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.bz_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.cz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.dz_1) | 0;
    return result;
  };
  protoOf(EntreeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevueJson ? other : THROW_CCE();
    if (!this.az_1.equals(tmp0_other_with_cast.az_1))
      return false;
    if (!(this.bz_1 === tmp0_other_with_cast.bz_1))
      return false;
    if (!(this.cz_1 === tmp0_other_with_cast.cz_1))
      return false;
    if (!(this.dz_1 === tmp0_other_with_cast.dz_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ez_1 = [null, new ArrayListSerializer($serializer_getInstance_1())];
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
    tmp0_serialDesc.ng('captureId', false);
    tmp0_serialDesc.ng('entrees', false);
    this.fz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).gz = function (encoder, value) {
    var tmp0_desc = this.fz_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().ez_1;
    tmp1_output.td(tmp0_desc, 0, value.hz_1);
    tmp1_output.ud(tmp0_desc, 1, tmp2_cached[1], value.iz_1);
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_2).nb = function (encoder, value) {
    return this.gz(encoder, value instanceof GroupeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_2).ob = function (decoder) {
    var tmp0_desc = this.fz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xc(tmp0_desc);
    var tmp7_cached = Companion_getInstance_3().ez_1;
    if (tmp6_input.gd()) {
      tmp4_local0 = tmp6_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.cd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.cd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yc(tmp0_desc);
    return GroupeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).mb = function () {
    return this.fz_1;
  };
  protoOf($serializer_2).pg = function () {
    var tmp0_cached = Companion_getInstance_3().ez_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().fz_1);
    }
    $this.hz_1 = captureId;
    $this.iz_1 = entrees;
    return $this;
  }
  function GroupeRevueJson_init_$Create$(seen0, captureId, entrees, serializationConstructorMarker) {
    return GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, objectCreate(protoOf(GroupeRevueJson)));
  }
  function GroupeRevueJson(captureId, entrees) {
    Companion_getInstance_3();
    this.hz_1 = captureId;
    this.iz_1 = entrees;
  }
  protoOf(GroupeRevueJson).toString = function () {
    return 'GroupeRevueJson(captureId=' + this.hz_1 + ', entrees=' + toString_0(this.iz_1) + ')';
  };
  protoOf(GroupeRevueJson).hashCode = function () {
    var result = getStringHashCode(this.hz_1);
    result = imul(result, 31) + hashCode(this.iz_1) | 0;
    return result;
  };
  protoOf(GroupeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof GroupeRevueJson ? other : THROW_CCE();
    if (!(this.hz_1 === tmp0_other_with_cast.hz_1))
      return false;
    if (!equals(this.iz_1, tmp0_other_with_cast.iz_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.jz_1 = [new ArrayListSerializer($serializer_getInstance_2()), null];
  }
  protoOf(Companion_3).tx = function () {
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.RevueJson', this, 2);
    tmp0_serialDesc.ng('groupes', false);
    tmp0_serialDesc.ng('total', false);
    this.kz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).lz = function (encoder, value) {
    var tmp0_desc = this.kz_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().jz_1;
    tmp1_output.ud(tmp0_desc, 0, tmp2_cached[0], value.mz_1);
    tmp1_output.sd(tmp0_desc, 1, value.nz_1);
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_3).nb = function (encoder, value) {
    return this.lz(encoder, value instanceof RevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_3).ob = function (decoder) {
    var tmp0_desc = this.kz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.xc(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().jz_1;
    if (tmp6_input.gd()) {
      tmp4_local0 = tmp6_input.cd(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ad(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.cd(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ad(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yc(tmp0_desc);
    return RevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).mb = function () {
    return this.kz_1;
  };
  protoOf($serializer_3).pg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_4().jz_1[0], IntSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function RevueJson_init_$Init$(seen0, groupes, total, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().kz_1);
    }
    $this.mz_1 = groupes;
    $this.nz_1 = total;
    return $this;
  }
  function RevueJson_init_$Create$(seen0, groupes, total, serializationConstructorMarker) {
    return RevueJson_init_$Init$(seen0, groupes, total, serializationConstructorMarker, objectCreate(protoOf(RevueJson)));
  }
  function RevueJson(groupes, total) {
    Companion_getInstance_4();
    this.mz_1 = groupes;
    this.nz_1 = total;
  }
  protoOf(RevueJson).toString = function () {
    return 'RevueJson(groupes=' + toString_0(this.mz_1) + ', total=' + this.nz_1 + ')';
  };
  protoOf(RevueJson).hashCode = function () {
    var result = hashCode(this.mz_1);
    result = imul(result, 31) + this.nz_1 | 0;
    return result;
  };
  protoOf(RevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof RevueJson ? other : THROW_CCE();
    if (!equals(this.mz_1, tmp0_other_with_cast.mz_1))
      return false;
    if (!(this.nz_1 === tmp0_other_with_cast.nz_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.oz_1 = [new ArrayListSerializer($serializer_getInstance()), new ArrayListSerializer($serializer_getInstance_5())];
  }
  protoOf(Companion_4).tx = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.AncrageJson', this, 2);
    tmp0_serialDesc.ng('retenus', false);
    tmp0_serialDesc.ng('ecartes', false);
    this.pz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).qz = function (encoder, value) {
    var tmp0_desc = this.pz_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().oz_1;
    tmp1_output.ud(tmp0_desc, 0, tmp2_cached[0], value.rz_1);
    tmp1_output.ud(tmp0_desc, 1, tmp2_cached[1], value.sz_1);
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_4).nb = function (encoder, value) {
    return this.qz(encoder, value instanceof AncrageJson ? value : THROW_CCE());
  };
  protoOf($serializer_4).ob = function (decoder) {
    var tmp0_desc = this.pz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xc(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().oz_1;
    if (tmp6_input.gd()) {
      tmp4_local0 = tmp6_input.cd(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.cd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.cd(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.cd(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yc(tmp0_desc);
    return AncrageJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).mb = function () {
    return this.pz_1;
  };
  protoOf($serializer_4).pg = function () {
    var tmp0_cached = Companion_getInstance_5().oz_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1]];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_4().pz_1);
    }
    $this.rz_1 = retenus;
    $this.sz_1 = ecartes;
    return $this;
  }
  function AncrageJson_init_$Create$(seen0, retenus, ecartes, serializationConstructorMarker) {
    return AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, objectCreate(protoOf(AncrageJson)));
  }
  function AncrageJson(retenus, ecartes) {
    Companion_getInstance_5();
    this.rz_1 = retenus;
    this.sz_1 = ecartes;
  }
  protoOf(AncrageJson).toString = function () {
    return 'AncrageJson(retenus=' + toString_0(this.rz_1) + ', ecartes=' + toString_0(this.sz_1) + ')';
  };
  protoOf(AncrageJson).hashCode = function () {
    var result = hashCode(this.rz_1);
    result = imul(result, 31) + hashCode(this.sz_1) | 0;
    return result;
  };
  protoOf(AncrageJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AncrageJson))
      return false;
    var tmp0_other_with_cast = other instanceof AncrageJson ? other : THROW_CCE();
    if (!equals(this.rz_1, tmp0_other_with_cast.rz_1))
      return false;
    if (!equals(this.sz_1, tmp0_other_with_cast.sz_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.EcarteJson', this, 2);
    tmp0_serialDesc.ng('texte', false);
    tmp0_serialDesc.ng('raison', false);
    this.tz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).uz = function (encoder, value) {
    var tmp0_desc = this.tz_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    tmp1_output.td(tmp0_desc, 0, value.vz_1);
    tmp1_output.td(tmp0_desc, 1, value.wz_1);
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_5).nb = function (encoder, value) {
    return this.uz(encoder, value instanceof EcarteJson ? value : THROW_CCE());
  };
  protoOf($serializer_5).ob = function (decoder) {
    var tmp0_desc = this.tz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.xc(tmp0_desc);
    if (tmp6_input.gd()) {
      tmp4_local0 = tmp6_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.bd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.bd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.yc(tmp0_desc);
    return EcarteJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).mb = function () {
    return this.tz_1;
  };
  protoOf($serializer_5).pg = function () {
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
  function EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().tz_1);
    }
    $this.vz_1 = texte;
    $this.wz_1 = raison;
    return $this;
  }
  function EcarteJson_init_$Create$(seen0, texte, raison, serializationConstructorMarker) {
    return EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, objectCreate(protoOf(EcarteJson)));
  }
  function EcarteJson(texte, raison) {
    this.vz_1 = texte;
    this.wz_1 = raison;
  }
  protoOf(EcarteJson).toString = function () {
    return 'EcarteJson(texte=' + this.vz_1 + ', raison=' + this.wz_1 + ')';
  };
  protoOf(EcarteJson).hashCode = function () {
    var result = getStringHashCode(this.vz_1);
    result = imul(result, 31) + getStringHashCode(this.wz_1) | 0;
    return result;
  };
  protoOf(EcarteJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EcarteJson))
      return false;
    var tmp0_other_with_cast = other instanceof EcarteJson ? other : THROW_CCE();
    if (!(this.vz_1 === tmp0_other_with_cast.vz_1))
      return false;
    if (!(this.wz_1 === tmp0_other_with_cast.wz_1))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).tx = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CaptureJson', this, 3);
    tmp0_serialDesc.ng('id', false);
    tmp0_serialDesc.ng('texte', false);
    tmp0_serialDesc.ng('creeLe', false);
    this.xz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).yz = function (encoder, value) {
    var tmp0_desc = this.xz_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    tmp1_output.td(tmp0_desc, 0, value.zz_1);
    tmp1_output.td(tmp0_desc, 1, value.a10_1);
    tmp1_output.td(tmp0_desc, 2, value.b10_1);
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_6).nb = function (encoder, value) {
    return this.yz(encoder, value instanceof CaptureJson ? value : THROW_CCE());
  };
  protoOf($serializer_6).ob = function (decoder) {
    var tmp0_desc = this.xz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.xc(tmp0_desc);
    if (tmp7_input.gd()) {
      tmp4_local0 = tmp7_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.bd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.bd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.bd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.bd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.yc(tmp0_desc);
    return CaptureJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).mb = function () {
    return this.xz_1;
  };
  protoOf($serializer_6).pg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function CaptureJson_init_$Init$(seen0, id, texte, creeLe, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_6().xz_1);
    }
    $this.zz_1 = id;
    $this.a10_1 = texte;
    $this.b10_1 = creeLe;
    return $this;
  }
  function CaptureJson_init_$Create$(seen0, id, texte, creeLe, serializationConstructorMarker) {
    return CaptureJson_init_$Init$(seen0, id, texte, creeLe, serializationConstructorMarker, objectCreate(protoOf(CaptureJson)));
  }
  function CaptureJson() {
  }
  protoOf(CaptureJson).toString = function () {
    return 'CaptureJson(id=' + this.zz_1 + ', texte=' + this.a10_1 + ', creeLe=' + this.b10_1 + ')';
  };
  protoOf(CaptureJson).hashCode = function () {
    var result = getStringHashCode(this.zz_1);
    result = imul(result, 31) + getStringHashCode(this.a10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b10_1) | 0;
    return result;
  };
  protoOf(CaptureJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureJson))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureJson ? other : THROW_CCE();
    if (!(this.zz_1 === tmp0_other_with_cast.zz_1))
      return false;
    if (!(this.a10_1 === tmp0_other_with_cast.a10_1))
      return false;
    if (!(this.b10_1 === tmp0_other_with_cast.b10_1))
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.CitationJson', this, 4);
    tmp0_serialDesc.ng('captureId', false);
    tmp0_serialDesc.ng('extrait', false);
    tmp0_serialDesc.ng('pourquoi', false);
    tmp0_serialDesc.ng('elementId', true);
    this.c10_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).d10 = function (encoder, value) {
    var tmp0_desc = this.c10_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    tmp1_output.td(tmp0_desc, 0, value.e10_1);
    tmp1_output.td(tmp0_desc, 1, value.f10_1);
    tmp1_output.td(tmp0_desc, 2, value.g10_1);
    if (tmp1_output.ae(tmp0_desc, 3) ? true : !(value.h10_1 == null)) {
      tmp1_output.wd(tmp0_desc, 3, StringSerializer_getInstance(), value.h10_1);
    }
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_7).nb = function (encoder, value) {
    return this.d10(encoder, value instanceof CitationJson ? value : THROW_CCE());
  };
  protoOf($serializer_7).ob = function (decoder) {
    var tmp0_desc = this.c10_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.xc(tmp0_desc);
    if (tmp8_input.gd()) {
      tmp4_local0 = tmp8_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.bd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.bd(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ed(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.bd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.bd(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ed(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.yc(tmp0_desc);
    return CitationJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_7).mb = function () {
    return this.c10_1;
  };
  protoOf($serializer_7).pg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_7().c10_1);
    }
    $this.e10_1 = captureId;
    $this.f10_1 = extrait;
    $this.g10_1 = pourquoi;
    if (0 === (seen0 & 8))
      $this.h10_1 = null;
    else
      $this.h10_1 = elementId;
    return $this;
  }
  function CitationJson_init_$Create$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker) {
    return CitationJson_init_$Init$(seen0, captureId, extrait, pourquoi, elementId, serializationConstructorMarker, objectCreate(protoOf(CitationJson)));
  }
  function CitationJson(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.e10_1 = captureId;
    this.f10_1 = extrait;
    this.g10_1 = pourquoi;
    this.h10_1 = elementId;
  }
  protoOf(CitationJson).toString = function () {
    return 'CitationJson(captureId=' + this.e10_1 + ', extrait=' + this.f10_1 + ', pourquoi=' + this.g10_1 + ', elementId=' + this.h10_1 + ')';
  };
  protoOf(CitationJson).hashCode = function () {
    var result = getStringHashCode(this.e10_1);
    result = imul(result, 31) + getStringHashCode(this.f10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g10_1) | 0;
    result = imul(result, 31) + (this.h10_1 == null ? 0 : getStringHashCode(this.h10_1)) | 0;
    return result;
  };
  protoOf(CitationJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CitationJson))
      return false;
    var tmp0_other_with_cast = other instanceof CitationJson ? other : THROW_CCE();
    if (!(this.e10_1 === tmp0_other_with_cast.e10_1))
      return false;
    if (!(this.f10_1 === tmp0_other_with_cast.f10_1))
      return false;
    if (!(this.g10_1 === tmp0_other_with_cast.g10_1))
      return false;
    if (!(this.h10_1 == tmp0_other_with_cast.h10_1))
      return false;
    return true;
  };
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i10_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_7()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_8).tx = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ReponseJson', this, 5);
    tmp0_serialDesc.ng('question', false);
    tmp0_serialDesc.ng('enonce', false);
    tmp0_serialDesc.ng('fondee', false);
    tmp0_serialDesc.ng('citations', false);
    tmp0_serialDesc.ng('indisponibleHorsLigne', true);
    this.j10_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).k10 = function (encoder, value) {
    var tmp0_desc = this.j10_1;
    var tmp1_output = encoder.xc(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().i10_1;
    tmp1_output.td(tmp0_desc, 0, value.l10_1);
    tmp1_output.td(tmp0_desc, 1, value.m10_1);
    tmp1_output.rd(tmp0_desc, 2, value.n10_1);
    tmp1_output.ud(tmp0_desc, 3, tmp2_cached[3], value.o10_1);
    if (tmp1_output.ae(tmp0_desc, 4) ? true : !equals(value.p10_1, emptyList())) {
      tmp1_output.ud(tmp0_desc, 4, tmp2_cached[4], value.p10_1);
    }
    tmp1_output.yc(tmp0_desc);
  };
  protoOf($serializer_8).nb = function (encoder, value) {
    return this.k10(encoder, value instanceof ReponseJson ? value : THROW_CCE());
  };
  protoOf($serializer_8).ob = function (decoder) {
    var tmp0_desc = this.j10_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.xc(tmp0_desc);
    var tmp10_cached = Companion_getInstance_9().i10_1;
    if (tmp9_input.gd()) {
      tmp4_local0 = tmp9_input.bd(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.bd(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.zc(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.cd(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.cd(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.hd(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.bd(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.bd(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.zc(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.cd(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.cd(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.yc(tmp0_desc);
    return ReponseJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_8).mb = function () {
    return this.j10_1;
  };
  protoOf($serializer_8).pg = function () {
    var tmp0_cached = Companion_getInstance_9().i10_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[3], tmp0_cached[4]];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().j10_1);
    }
    $this.l10_1 = question;
    $this.m10_1 = enonce;
    $this.n10_1 = fondee;
    $this.o10_1 = citations;
    if (0 === (seen0 & 16))
      $this.p10_1 = emptyList();
    else
      $this.p10_1 = indisponibleHorsLigne;
    return $this;
  }
  function ReponseJson_init_$Create$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, serializationConstructorMarker) {
    return ReponseJson_init_$Init$(seen0, question, enonce, fondee, citations, indisponibleHorsLigne, serializationConstructorMarker, objectCreate(protoOf(ReponseJson)));
  }
  function ReponseJson(question, enonce, fondee, citations, indisponibleHorsLigne) {
    Companion_getInstance_9();
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    this.l10_1 = question;
    this.m10_1 = enonce;
    this.n10_1 = fondee;
    this.o10_1 = citations;
    this.p10_1 = indisponibleHorsLigne;
  }
  protoOf(ReponseJson).toString = function () {
    return 'ReponseJson(question=' + this.l10_1 + ', enonce=' + this.m10_1 + ', fondee=' + this.n10_1 + ', citations=' + toString_0(this.o10_1) + ', indisponibleHorsLigne=' + toString_0(this.p10_1) + ')';
  };
  protoOf(ReponseJson).hashCode = function () {
    var result = getStringHashCode(this.l10_1);
    result = imul(result, 31) + getStringHashCode(this.m10_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n10_1) | 0;
    result = imul(result, 31) + hashCode(this.o10_1) | 0;
    result = imul(result, 31) + hashCode(this.p10_1) | 0;
    return result;
  };
  protoOf(ReponseJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReponseJson))
      return false;
    var tmp0_other_with_cast = other instanceof ReponseJson ? other : THROW_CCE();
    if (!(this.l10_1 === tmp0_other_with_cast.l10_1))
      return false;
    if (!(this.m10_1 === tmp0_other_with_cast.m10_1))
      return false;
    if (!(this.n10_1 === tmp0_other_with_cast.n10_1))
      return false;
    if (!equals(this.o10_1, tmp0_other_with_cast.o10_1))
      return false;
    if (!equals(this.p10_1, tmp0_other_with_cast.p10_1))
      return false;
    return true;
  };
  function rendre($this, reponse) {
    var tmp = Companion_getInstance_9().tx();
    var tmp_0 = reponse.u10();
    // Inline function 'kotlin.collections.map' call
    var this_0 = reponse.s10_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rendre.<anonymous>' call
      var tmp0_safe_receiver = item.y10_1;
      var tmp$ret$0 = new CitationJson(item.v10_1.z10_1, item.w10_1, item.x10_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a11_1);
      destination.e(tmp$ret$0);
    }
    return $this.b11_1.fo(tmp, new ReponseJson(reponse.q10_1, reponse.r10_1, tmp_0, destination, reponse.t10_1));
  }
  function decoder($this, elementsJson) {
    return $this.b11_1.go(ListSerializer(Companion_instance_0.tx()), elementsJson);
  }
  function raisonDeRejet($this, dto, texteSource) {
    var tmp;
    if (isBlank(dto.zx_1)) {
      tmp = '\xE9l\xE9ment sans texte';
    } else {
      if (dto.ay_1 < 0 || dto.by_1 <= dto.ay_1) {
        tmp = 'passage source vide ou incoh\xE9rent';
      } else {
        if (dto.by_1 > texteSource.length) {
          tmp = 'passage source absent du texte de la capture';
        } else {
          // Inline function 'kotlin.runCatching' call
          var tmp_0;
          try {
            // Inline function 'app.zenote.core.api.Regles.raisonDeRejet.<anonymous>' call
            // Inline function 'kotlin.Companion.success' call
            var value = valueOf(dto.yx_1);
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
            tmp = 'type inconnu : ' + dto.yx_1;
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
      var value = valueOf_3(nom).u1_1;
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
    var tmp0 = listOfNotNull([_this__u8e3s4.fy_1, _this__u8e3s4.iy_1, _this__u8e3s4.ly_1]);
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
    var tmp = new CaptureId(_this__u8e3s4.xx_1);
    var tmp_0 = valueOf(_this__u8e3s4.yx_1);
    var tmp_1 = new Passage(_this__u8e3s4.ay_1, _this__u8e3s4.by_1, _this__u8e3s4.cy_1, _this__u8e3s4.dy_1);
    var tmp0_safe_receiver = _this__u8e3s4.ey_1;
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_3 = Companion_getInstance().ao(tmp0_safe_receiver);
      var tmp0_elvis_lhs = _this__u8e3s4.fy_1;
      var tmp_4 = tmp0_elvis_lhs == null ? 1.0 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.gy_1;
      tmp_2 = new Deduit(tmp_3, tmp_4, tmp1_elvis_lhs == null ? 'fourni' : tmp1_elvis_lhs);
    }
    var tmp_5 = tmp_2;
    var tmp1_safe_receiver = _this__u8e3s4.hy_1;
    var tmp_6;
    if (tmp1_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_7 = valueOf_0(tmp1_safe_receiver);
      var tmp0_elvis_lhs_0 = _this__u8e3s4.iy_1;
      var tmp_8 = tmp0_elvis_lhs_0 == null ? 1.0 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs_0 = _this__u8e3s4.jy_1;
      tmp_6 = new Deduit(tmp_7, tmp_8, tmp1_elvis_lhs_0 == null ? 'fourni' : tmp1_elvis_lhs_0);
    }
    var tmp_9 = tmp_6;
    var tmp2_safe_receiver = _this__u8e3s4.ky_1;
    var tmp_10;
    if (tmp2_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4.ly_1;
      tmp_10 = new Deduit(tmp2_safe_receiver, tmp0_elvis_lhs_1 == null ? 1.0 : tmp0_elvis_lhs_1, 'nomm\xE9');
    }
    var tmp_11 = tmp_10;
    var tmp3_safe_receiver = _this__u8e3s4.my_1;
    var tmp_12;
    if (tmp3_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      tmp_12 = new Deduit(valueOf_1(tmp3_safe_receiver), 1.0, 'd\xE9duit');
    }
    var tmp_13 = tmp_12;
    var tmp4_safe_receiver = _this__u8e3s4.ny_1;
    var tmp_14;
    if (tmp4_safe_receiver == null) {
      tmp_14 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.oy_1;
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
    var derive = new ElementDerive(tmp, tmp_0, _this__u8e3s4.zx_1, tmp_1, tmp_5, tmp_9, tmp_11, tmp_13, tmp_14);
    var tmp_16 = new ElementId(_this__u8e3s4.wx_1);
    var tmp5_safe_receiver = derive.g11_1;
    var tmp_17 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.m11_1;
    var tmp6_safe_receiver = derive.h11_1;
    var tmp_18 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.m11_1;
    var tmp7_safe_receiver = derive.i11_1;
    var tmp_19 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.m11_1;
    var tmp8_safe_receiver = derive.j11_1;
    var tmp_20 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.m11_1;
    var tmp9_safe_receiver = derive.k11_1;
    return new ElementResolu(tmp_16, derive.c11_1, derive.d11_1, derive.e11_1, derive.f11_1, tmp_17, tmp_18, tmp_19, tmp_20, tmp9_safe_receiver == null ? null : tmp9_safe_receiver.m11_1, valueOf_2(_this__u8e3s4.py_1), aConfirmer(_this__u8e3s4, $this), _this__u8e3s4.qy_1, _this__u8e3s4.qy_1 && !(_this__u8e3s4.hy_1 == null) ? 'poids fix\xE9 \xE0 la main' : _this__u8e3s4.jy_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.p11_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).u9 = function (a, b) {
    return this.p11_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.u9(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).j2 = function () {
    return this.p11_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.j2(), other.j2());
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
    return hashCode(this.j2());
  };
  function Regles$json$lambda($this$Json) {
    $this$Json.yo_1 = true;
    $this$Json.wo_1 = true;
    return Unit_instance;
  }
  function Regles$revue$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp = urgenceOrdinale(Regles_getInstance(), a.dz_1);
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp$ret$1 = urgenceOrdinale(Regles_getInstance(), b.dz_1);
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
        var tmp_0 = b.bz_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = a.bz_1;
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
        var tmp_0 = a.az_1.wx_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = b.az_1.wx_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = a.iz_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it = iterator.i();
    var minValue = urgenceOrdinale(Regles_getInstance(), it.dz_1);
    while (iterator.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_0 = iterator.i();
      var v = urgenceOrdinale(Regles_getInstance(), it_0.dz_1);
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var tmp = minValue;
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator_0 = b.iz_1.g();
    if (!iterator_0.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it_1 = iterator_0.i();
    var minValue_0 = urgenceOrdinale(Regles_getInstance(), it_1.dz_1);
    while (iterator_0.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.i();
      var v_0 = urgenceOrdinale(Regles_getInstance(), it_2.dz_1);
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
        var tmp_0 = a.hz_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp$ret$1 = b.hz_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles() {
    Regles_instance = this;
    var tmp = this;
    tmp.b11_1 = Json(VOID, Regles$json$lambda);
  }
  protoOf(Regles).q11 = function (elementsJson, aujourdhui) {
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
    var this_0 = tmp.t11(destination, new ContexteMaintenant(Companion_getInstance().ao(aujourdhui)));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$3 = new PropositionJson(item_0.i12_1.u11_1.a11_1, item_0.i12_1.x11_1, item_0.j12_1, item_0.k12_1.t1_1, item_0.l12_1.t1_1);
      destination_0.e(tmp$ret$3);
    }
    var propositions = destination_0;
    return this.b11_1.fo(ListSerializer(Companion_instance_1.tx()), propositions);
  };
  protoOf(Regles).m12 = function (elementsJson, aujourdhui) {
    var date = Companion_getInstance().ao(aujourdhui);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      if (element.py_1 === 'EN_ATTENTE') {
        destination.e(element);
      }
    }
    var enAttente = destination;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(enAttente, 10));
    var _iterator__ex2g4s_0 = enAttente.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var resolu = versResolu(item, Regles_getInstance());
      var tmp$ret$3 = new EntreeRevueJson(item, aConfirmer(item, Regles_getInstance()), resolu.n12(), Priorisation_getInstance().o12(resolu.z11_1, date).t1_1);
      destination_0.e(tmp$ret$3);
    }
    var entrees = destination_0;
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_1 = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s_1 = entrees.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      var key = element_0.az_1.xx_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_1.q1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_1.o3(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.e(element_0);
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(destination_1.l());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = destination_1.s1().g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var captureId = item_0.n1();
      // Inline function 'kotlin.collections.component2' call
      var dansLeGroupe = item_0.o1();
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = Regles$revue$lambda;
      // Inline function 'kotlin.comparisons.thenByDescending' call
      var this_0 = new sam$kotlin_Comparator$0(tmp_0);
      var tmp_1 = Regles$revue$lambda_0(this_0);
      // Inline function 'kotlin.comparisons.thenBy' call
      var this_1 = new sam$kotlin_Comparator$0(tmp_1);
      var tmp_2 = Regles$revue$lambda_1(this_1);
      var tmp$ret$16 = new sam$kotlin_Comparator$0(tmp_2);
      var tmp$ret$17 = new GroupeRevueJson(captureId, sortedWith(dansLeGroupe, tmp$ret$16));
      destination_2.e(tmp$ret$17);
    }
    var tmp_3 = destination_2;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_4 = Regles$revue$lambda_2;
    // Inline function 'kotlin.comparisons.thenBy' call
    var this_2 = new sam$kotlin_Comparator$0(tmp_4);
    var tmp_5 = Regles$revue$lambda_3(this_2);
    var tmp$ret$21 = new sam$kotlin_Comparator$0(tmp_5);
    var groupes = sortedWith(tmp_3, tmp$ret$21);
    return this.b11_1.fo(Companion_getInstance_4().tx(), new RevueJson(groupes, entrees.l()));
  };
  protoOf(Regles).p12 = function (texteSource, elementsJson) {
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
        var element_0 = new EcarteJson(element.zx_1, raison);
        ecartes.e(element_0);
      }
    }
    return this.b11_1.fo(Companion_getInstance_5().tx(), new AncrageJson(retenus, ecartes));
  };
  protoOf(Regles).q12 = function (requete, elementsJson, capturesJson, reseau) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.b11_1.go(ListSerializer(Companion_instance_7.tx()), capturesJson);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.rechercherParMots.<anonymous>' call
      var tmp$ret$0 = new TexteSource(new CaptureId(item.zz_1), item.a10_1, item.b10_1);
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
    return rendre(this, tmp.u12(requete, destination_0, captures, reseau));
  };
  protoOf(Regles).v12 = function (personne, elementsJson, reseau) {
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
    return rendre(this, tmp.w12(personne, destination, reseau));
  };
  var Regles_instance;
  function Regles_getInstance() {
    if (Regles_instance == null)
      new Regles();
    return Regles_instance;
  }
  function Deduit(valeur, confiance, indice) {
    this.m11_1 = valeur;
    this.n11_1 = confiance;
    this.o11_1 = indice;
    var containsArg = this.n11_1;
    // Inline function 'kotlin.require' call
    if (!(0.0 <= containsArg ? containsArg <= 1.0 : false)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message = 'La confiance est une probabilit\xE9 entre 0 et 1.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.o11_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message_0 = "Une d\xE9duction sans indice n'est pas justifiable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Deduit).toString = function () {
    return 'Deduit(valeur=' + toString(this.m11_1) + ', confiance=' + this.n11_1 + ', indice=' + this.o11_1 + ')';
  };
  protoOf(Deduit).hashCode = function () {
    var result = this.m11_1 == null ? 0 : hashCode(this.m11_1);
    result = imul(result, 31) + getNumberHashCode(this.n11_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o11_1) | 0;
    return result;
  };
  protoOf(Deduit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deduit))
      return false;
    var tmp0_other_with_cast = other instanceof Deduit ? other : THROW_CCE();
    if (!equals(this.m11_1, tmp0_other_with_cast.m11_1))
      return false;
    if (!equals(this.n11_1, tmp0_other_with_cast.n11_1))
      return false;
    if (!(this.o11_1 === tmp0_other_with_cast.o11_1))
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
  protoOf(TypeElement).z12 = function () {
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
    this.a13_1 = declencheur;
    this.b13_1 = action;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.a13_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message = "Un plan sans d\xE9clencheur n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.b13_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message_0 = "Un plan sans action n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Plan).toString = function () {
    return 'Quand ' + this.a13_1 + ', ' + this.b13_1;
  };
  protoOf(Plan).hashCode = function () {
    var result = getStringHashCode(this.a13_1);
    result = imul(result, 31) + getStringHashCode(this.b13_1) | 0;
    return result;
  };
  protoOf(Plan).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plan))
      return false;
    var tmp0_other_with_cast = other instanceof Plan ? other : THROW_CCE();
    if (!(this.a13_1 === tmp0_other_with_cast.a13_1))
      return false;
    if (!(this.b13_1 === tmp0_other_with_cast.b13_1))
      return false;
    return true;
  };
  function ElementId(value) {
    this.a11_1 = value;
  }
  protoOf(ElementId).toString = function () {
    return this.a11_1;
  };
  protoOf(ElementId).hashCode = function () {
    return getStringHashCode(this.a11_1);
  };
  protoOf(ElementId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementId))
      return false;
    var tmp0_other_with_cast = other instanceof ElementId ? other : THROW_CCE();
    if (!(this.a11_1 === tmp0_other_with_cast.a11_1))
      return false;
    return true;
  };
  function ElementDerive(captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan) {
    echeance = echeance === VOID ? null : echeance;
    poids = poids === VOID ? null : poids;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    sphere = sphere === VOID ? null : sphere;
    plan = plan === VOID ? null : plan;
    this.c11_1 = captureId;
    this.d11_1 = type;
    this.e11_1 = texte;
    this.f11_1 = passage;
    this.g11_1 = echeance;
    this.h11_1 = poids;
    this.i11_1 = interlocuteur;
    this.j11_1 = sphere;
    this.k11_1 = plan;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.e11_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.ElementDerive.<anonymous>' call
      var message = "Un \xE9l\xE9ment sans texte n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.l11_1 = new ElementId(this.c11_1.toString() + ':' + this.f11_1.c13_1 + '-' + this.f11_1.d13_1 + ':' + this.d11_1.toString());
  }
  protoOf(ElementDerive).toString = function () {
    return 'ElementDerive(captureId=' + this.c11_1.toString() + ', type=' + this.d11_1.toString() + ', texte=' + this.e11_1 + ', passage=' + this.f11_1.toString() + ', echeance=' + toString(this.g11_1) + ', poids=' + toString(this.h11_1) + ', interlocuteur=' + toString(this.i11_1) + ', sphere=' + toString(this.j11_1) + ', plan=' + toString(this.k11_1) + ')';
  };
  protoOf(ElementDerive).hashCode = function () {
    var result = this.c11_1.hashCode();
    result = imul(result, 31) + this.d11_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.e11_1) | 0;
    result = imul(result, 31) + this.f11_1.hashCode() | 0;
    result = imul(result, 31) + (this.g11_1 == null ? 0 : this.g11_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h11_1 == null ? 0 : this.h11_1.hashCode()) | 0;
    result = imul(result, 31) + (this.i11_1 == null ? 0 : this.i11_1.hashCode()) | 0;
    result = imul(result, 31) + (this.j11_1 == null ? 0 : this.j11_1.hashCode()) | 0;
    result = imul(result, 31) + (this.k11_1 == null ? 0 : this.k11_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElementDerive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDerive))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDerive ? other : THROW_CCE();
    if (!this.c11_1.equals(tmp0_other_with_cast.c11_1))
      return false;
    if (!this.d11_1.equals(tmp0_other_with_cast.d11_1))
      return false;
    if (!(this.e11_1 === tmp0_other_with_cast.e11_1))
      return false;
    if (!this.f11_1.equals(tmp0_other_with_cast.f11_1))
      return false;
    if (!equals(this.g11_1, tmp0_other_with_cast.g11_1))
      return false;
    if (!equals(this.h11_1, tmp0_other_with_cast.h11_1))
      return false;
    if (!equals(this.i11_1, tmp0_other_with_cast.i11_1))
      return false;
    if (!equals(this.j11_1, tmp0_other_with_cast.j11_1))
      return false;
    if (!equals(this.k11_1, tmp0_other_with_cast.k11_1))
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
  function Companion_9() {
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function ElementResolu(id, captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan, verdict, aConfirmer, corrigeParHumain, indicePoids) {
    this.u11_1 = id;
    this.v11_1 = captureId;
    this.w11_1 = type;
    this.x11_1 = texte;
    this.y11_1 = passage;
    this.z11_1 = echeance;
    this.a12_1 = poids;
    this.b12_1 = interlocuteur;
    this.c12_1 = sphere;
    this.d12_1 = plan;
    this.e12_1 = verdict;
    this.f12_1 = aConfirmer;
    this.g12_1 = corrigeParHumain;
    this.h12_1 = indicePoids;
  }
  protoOf(ElementResolu).n12 = function () {
    return this.e12_1.equals(Verdict_ACCEPTE_getInstance()) && this.w11_1.z12() && this.d12_1 == null;
  };
  protoOf(ElementResolu).toString = function () {
    return 'ElementResolu(id=' + this.u11_1.toString() + ', captureId=' + this.v11_1.toString() + ', type=' + this.w11_1.toString() + ', texte=' + this.x11_1 + ', passage=' + this.y11_1.toString() + ', echeance=' + toString(this.z11_1) + ', poids=' + toString(this.a12_1) + ', interlocuteur=' + this.b12_1 + ', sphere=' + toString(this.c12_1) + ', plan=' + toString(this.d12_1) + ', verdict=' + this.e12_1.toString() + ', aConfirmer=' + this.f12_1 + ', corrigeParHumain=' + this.g12_1 + ', indicePoids=' + this.h12_1 + ')';
  };
  protoOf(ElementResolu).hashCode = function () {
    var result = this.u11_1.hashCode();
    result = imul(result, 31) + this.v11_1.hashCode() | 0;
    result = imul(result, 31) + this.w11_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.x11_1) | 0;
    result = imul(result, 31) + this.y11_1.hashCode() | 0;
    result = imul(result, 31) + (this.z11_1 == null ? 0 : this.z11_1.hashCode()) | 0;
    result = imul(result, 31) + (this.a12_1 == null ? 0 : this.a12_1.hashCode()) | 0;
    result = imul(result, 31) + (this.b12_1 == null ? 0 : getStringHashCode(this.b12_1)) | 0;
    result = imul(result, 31) + (this.c12_1 == null ? 0 : this.c12_1.hashCode()) | 0;
    result = imul(result, 31) + (this.d12_1 == null ? 0 : this.d12_1.hashCode()) | 0;
    result = imul(result, 31) + this.e12_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f12_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.g12_1) | 0;
    result = imul(result, 31) + (this.h12_1 == null ? 0 : getStringHashCode(this.h12_1)) | 0;
    return result;
  };
  protoOf(ElementResolu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementResolu))
      return false;
    var tmp0_other_with_cast = other instanceof ElementResolu ? other : THROW_CCE();
    if (!this.u11_1.equals(tmp0_other_with_cast.u11_1))
      return false;
    if (!this.v11_1.equals(tmp0_other_with_cast.v11_1))
      return false;
    if (!this.w11_1.equals(tmp0_other_with_cast.w11_1))
      return false;
    if (!(this.x11_1 === tmp0_other_with_cast.x11_1))
      return false;
    if (!this.y11_1.equals(tmp0_other_with_cast.y11_1))
      return false;
    if (!equals(this.z11_1, tmp0_other_with_cast.z11_1))
      return false;
    if (!equals(this.a12_1, tmp0_other_with_cast.a12_1))
      return false;
    if (!(this.b12_1 == tmp0_other_with_cast.b12_1))
      return false;
    if (!equals(this.c12_1, tmp0_other_with_cast.c12_1))
      return false;
    if (!equals(this.d12_1, tmp0_other_with_cast.d12_1))
      return false;
    if (!this.e12_1.equals(tmp0_other_with_cast.e12_1))
      return false;
    if (!(this.f12_1 === tmp0_other_with_cast.f12_1))
      return false;
    if (!(this.g12_1 === tmp0_other_with_cast.g12_1))
      return false;
    if (!(this.h12_1 == tmp0_other_with_cast.h12_1))
      return false;
    return true;
  };
  function CaptureId(value) {
    this.z10_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.z10_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.CaptureId.<anonymous>' call
      var message = 'Un identifiant de capture ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(CaptureId).toString = function () {
    return this.z10_1;
  };
  protoOf(CaptureId).hashCode = function () {
    return getStringHashCode(this.z10_1);
  };
  protoOf(CaptureId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureId))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureId ? other : THROW_CCE();
    if (!(this.z10_1 === tmp0_other_with_cast.z10_1))
      return false;
    return true;
  };
  function Passage(debutCar, finCar, debutMs, finMs) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    this.c13_1 = debutCar;
    this.d13_1 = finCar;
    this.e13_1 = debutMs;
    this.f13_1 = finMs;
    // Inline function 'kotlin.require' call
    if (!(this.c13_1 >= 0)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message = 'Le d\xE9but du passage ne peut pas \xEAtre n\xE9gatif.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.d13_1 > this.c13_1)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_0 = 'Le passage doit couvrir au moins un caract\xE8re.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(this.e13_1 == null === (this.f13_1 == null))) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_1 = 'Les bornes audio vont par paire, ou pas du tout.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    if (!(this.e13_1 == null) && !(this.f13_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.e13_1.x(new Long(0, 0)) >= 0 && this.f13_1.x(this.e13_1) > 0)) {
        // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
        var message_2 = 'Bornes audio incoh\xE9rentes.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }
    }
  }
  protoOf(Passage).toString = function () {
    return 'Passage(debutCar=' + this.c13_1 + ', finCar=' + this.d13_1 + ', debutMs=' + toString(this.e13_1) + ', finMs=' + toString(this.f13_1) + ')';
  };
  protoOf(Passage).hashCode = function () {
    var result = this.c13_1;
    result = imul(result, 31) + this.d13_1 | 0;
    result = imul(result, 31) + (this.e13_1 == null ? 0 : this.e13_1.hashCode()) | 0;
    result = imul(result, 31) + (this.f13_1 == null ? 0 : this.f13_1.hashCode()) | 0;
    return result;
  };
  protoOf(Passage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Passage))
      return false;
    var tmp0_other_with_cast = other instanceof Passage ? other : THROW_CCE();
    if (!(this.c13_1 === tmp0_other_with_cast.c13_1))
      return false;
    if (!(this.d13_1 === tmp0_other_with_cast.d13_1))
      return false;
    if (!equals(this.e13_1, tmp0_other_with_cast.e13_1))
      return false;
    if (!equals(this.f13_1, tmp0_other_with_cast.f13_1))
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
  protoOf(Urgence).i13 = function () {
    return this.equals(Urgence_DEPASSEE_getInstance()) || this.equals(Urgence_AUJOURD_HUI_getInstance());
  };
  protoOf(Urgence).j13 = function () {
    var tmp;
    switch (this.u1_1) {
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
    this.k13_1 = aujourdhui;
  }
  protoOf(ContexteMaintenant).toString = function () {
    return 'ContexteMaintenant(aujourdhui=' + this.k13_1.toString() + ')';
  };
  protoOf(ContexteMaintenant).hashCode = function () {
    return this.k13_1.hashCode();
  };
  protoOf(ContexteMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenant ? other : THROW_CCE();
    if (!this.k13_1.equals(tmp0_other_with_cast.k13_1))
      return false;
    return true;
  };
  function Proposition(element, raison, poidsEffectif, urgence) {
    this.i12_1 = element;
    this.j12_1 = raison;
    this.k12_1 = poidsEffectif;
    this.l12_1 = urgence;
  }
  protoOf(Proposition).toString = function () {
    return 'Proposition(element=' + this.i12_1.toString() + ', raison=' + this.j12_1 + ', poidsEffectif=' + this.k12_1.toString() + ', urgence=' + this.l12_1.toString() + ')';
  };
  protoOf(Proposition).hashCode = function () {
    var result = this.i12_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.j12_1) | 0;
    result = imul(result, 31) + this.k12_1.hashCode() | 0;
    result = imul(result, 31) + this.l12_1.hashCode() | 0;
    return result;
  };
  protoOf(Proposition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Proposition))
      return false;
    var tmp0_other_with_cast = other instanceof Proposition ? other : THROW_CCE();
    if (!this.i12_1.equals(tmp0_other_with_cast.i12_1))
      return false;
    if (!(this.j12_1 === tmp0_other_with_cast.j12_1))
      return false;
    if (!this.k12_1.equals(tmp0_other_with_cast.k12_1))
      return false;
    if (!this.l12_1.equals(tmp0_other_with_cast.l12_1))
      return false;
    return true;
  };
  function raison($this, element, urgence) {
    var tmp0_elvis_lhs = element.h12_1;
    var consequence = tmp0_elvis_lhs == null ? 'poids non d\xE9termin\xE9, \xE0 confirmer en Revue' : tmp0_elvis_lhs;
    return consequence + ' \u2014 ' + urgence.j13();
  }
  function dUnCranPlusHaut(_this__u8e3s4, $this) {
    var tmp;
    switch (_this__u8e3s4.u1_1) {
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
    this.l13_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).u9 = function (a, b) {
    return this.l13_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.u9(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).j2 = function () {
    return this.l13_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.j2(), other.j2());
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
    return hashCode(this.j2());
  };
  function Priorisation$classer$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp = b.k12_1.u1_1;
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp$ret$1 = a.k12_1.u1_1;
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
        var tmp_0 = a.l12_1.u1_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.l12_1.u1_1;
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
        var tmp_0 = a.i12_1.u11_1.a11_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.i12_1.u11_1.a11_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation() {
    Priorisation_instance = this;
    this.r11_1 = 3;
    this.s11_1 = Poids_MOYEN_getInstance();
  }
  protoOf(Priorisation).o12 = function (echeance, aujourdhui) {
    if (echeance == null)
      return Urgence_AUCUNE_getInstance();
    var tmp0_subject = daysUntil(aujourdhui, echeance);
    return (-2147483648 <= tmp0_subject ? tmp0_subject <= -1 : false) ? Urgence_DEPASSEE_getInstance() : tmp0_subject === 0 ? Urgence_AUJOURD_HUI_getInstance() : tmp0_subject === 1 ? Urgence_DEMAIN_getInstance() : (2 <= tmp0_subject ? tmp0_subject <= 7 : false) ? Urgence_CETTE_SEMAINE_getInstance() : Urgence_PLUS_TARD_getInstance();
  };
  protoOf(Priorisation).m13 = function (elements, contexte) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      if (element.e12_1.equals(Verdict_ACCEPTE_getInstance()) && element.w11_1.z12()) {
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
      var urgence = Priorisation_getInstance().o12(item.z11_1, contexte.k13_1);
      var tmp0_elvis_lhs = item.a12_1;
      var poids = tmp0_elvis_lhs == null ? Priorisation_getInstance().s11_1 : tmp0_elvis_lhs;
      var effectif = urgence.i13() ? dUnCranPlusHaut(poids, Priorisation_getInstance()) : poids;
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
  protoOf(Priorisation).t11 = function (elements, contexte) {
    return take(this.m13(elements, contexte), 3);
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
    this.n13_1 = captureId;
    this.o13_1 = texte;
    this.p13_1 = quand;
  }
  protoOf(TexteSource).toString = function () {
    return 'TexteSource(captureId=' + this.n13_1.toString() + ', texte=' + this.o13_1 + ', quand=' + this.p13_1 + ')';
  };
  protoOf(TexteSource).hashCode = function () {
    var result = this.n13_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.o13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p13_1) | 0;
    return result;
  };
  protoOf(TexteSource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TexteSource))
      return false;
    var tmp0_other_with_cast = other instanceof TexteSource ? other : THROW_CCE();
    if (!this.n13_1.equals(tmp0_other_with_cast.n13_1))
      return false;
    if (!(this.o13_1 === tmp0_other_with_cast.o13_1))
      return false;
    if (!(this.p13_1 === tmp0_other_with_cast.p13_1))
      return false;
    return true;
  };
  function Citation(captureId, extrait, pourquoi, elementId) {
    elementId = elementId === VOID ? null : elementId;
    this.v10_1 = captureId;
    this.w10_1 = extrait;
    this.x10_1 = pourquoi;
    this.y10_1 = elementId;
  }
  protoOf(Citation).toString = function () {
    return 'Citation(captureId=' + this.v10_1.toString() + ', extrait=' + this.w10_1 + ', pourquoi=' + this.x10_1 + ', elementId=' + toString(this.y10_1) + ')';
  };
  protoOf(Citation).hashCode = function () {
    var result = this.v10_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.w10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x10_1) | 0;
    result = imul(result, 31) + (this.y10_1 == null ? 0 : this.y10_1.hashCode()) | 0;
    return result;
  };
  protoOf(Citation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Citation))
      return false;
    var tmp0_other_with_cast = other instanceof Citation ? other : THROW_CCE();
    if (!this.v10_1.equals(tmp0_other_with_cast.v10_1))
      return false;
    if (!(this.w10_1 === tmp0_other_with_cast.w10_1))
      return false;
    if (!(this.x10_1 === tmp0_other_with_cast.x10_1))
      return false;
    if (!equals(this.y10_1, tmp0_other_with_cast.y10_1))
      return false;
    return true;
  };
  function Reponse(question, enonce, citations, indisponibleHorsLigne) {
    indisponibleHorsLigne = indisponibleHorsLigne === VOID ? emptyList() : indisponibleHorsLigne;
    this.q10_1 = question;
    this.r10_1 = enonce;
    this.s10_1 = citations;
    this.t10_1 = indisponibleHorsLigne;
  }
  protoOf(Reponse).u10 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.s10_1.j();
  };
  protoOf(Reponse).toString = function () {
    return 'Reponse(question=' + this.q10_1 + ', enonce=' + this.r10_1 + ', citations=' + toString_0(this.s10_1) + ', indisponibleHorsLigne=' + toString_0(this.t10_1) + ')';
  };
  protoOf(Reponse).hashCode = function () {
    var result = getStringHashCode(this.q10_1);
    result = imul(result, 31) + getStringHashCode(this.r10_1) | 0;
    result = imul(result, 31) + hashCode(this.s10_1) | 0;
    result = imul(result, 31) + hashCode(this.t10_1) | 0;
    return result;
  };
  protoOf(Reponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reponse))
      return false;
    var tmp0_other_with_cast = other instanceof Reponse ? other : THROW_CCE();
    if (!(this.q10_1 === tmp0_other_with_cast.q10_1))
      return false;
    if (!(this.r10_1 === tmp0_other_with_cast.r10_1))
      return false;
    if (!equals(this.s10_1, tmp0_other_with_cast.s10_1))
      return false;
    if (!equals(this.t10_1, tmp0_other_with_cast.t10_1))
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
    switch (type.u1_1) {
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
    switch (verdict.u1_1) {
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
    switch (verdict.u1_1) {
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
    this.q13_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).u9 = function (a, b) {
    return this.q13_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.u9(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).j2 = function () {
    return this.q13_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.j2(), other.j2());
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
    return hashCode(this.j2());
  };
  function RechercheLocale$parMots$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp = b.va_1;
    // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
    var tmp$ret$1 = a.va_1;
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
        var tmp_0 = a.wa_1.v10_1.z10_1;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp$ret$1 = b.wa_1.v10_1.z10_1;
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
        var tmp0_safe_receiver = a.wa_1.y10_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a11_1;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
        var tmp0_safe_receiver_0 = b.wa_1.y10_1;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.a11_1;
        var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? '' : tmp1_elvis_lhs_0;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function RechercheLocale$parPersonne$lambda(it) {
    return etatOrdinal(RechercheLocale_getInstance(), it.e12_1);
  }
  function RechercheLocale$parPersonne$lambda_0(it) {
    return it.u11_1.a11_1;
  }
  function RechercheLocale() {
    RechercheLocale_instance = this;
    this.r12_1 = 'Rien \xE0 ce sujet dans ce qui a \xE9t\xE9 captur\xE9.';
    this.s12_1 = listOf(['analyse des captures pas encore trait\xE9es', 'reformulation de la r\xE9ponse en langage naturel']);
    this.t12_1 = 10;
  }
  protoOf(RechercheLocale).r13 = function (requete, elements, captures, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.s12_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      var tmp$ret$0 = to(item, Texte_getInstance().v13(requete, item.x11_1));
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element.wa_1 > 0.0) {
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
      var element_0 = item_0.xa();
      var note = item_0.ya();
      var tmp$ret$6 = to(note, new Citation(element_0.v11_1, element_0.x11_1, '\xE9l\xE9ment \xAB ' + libelle(RechercheLocale_getInstance(), element_0.w11_1) + ' \xBB contenant les mots cherch\xE9s', element_0.u11_1));
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
      var tmp$ret$9 = item_1.wa_1.v10_1;
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
      if (!dejaCitees.l1(element_1.n13_1)) {
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
      var tmp$ret$15 = to(item_2, Texte_getInstance().v13(requete, item_2.o13_1));
      destination_4.e(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_5 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_5 = destination_4.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parMots.<anonymous>' call
      if (element_2.wa_1 > 0.0) {
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
      var source = item_3.xa();
      var note_0 = item_3.ya();
      var tmp$ret$21 = to(note_0, new Citation(source.n13_1, source.o13_1, 'capture du ' + source.p13_1 + ' contenant les mots cherch\xE9s'));
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
      var tmp$ret$27 = item_4.wa_1;
      destination_7.e(tmp$ret$27);
    }
    var citations = destination_7;
    return reponse(this, requete, citations, indisponibles);
  };
  protoOf(RechercheLocale).u12 = function (requete, elements, captures, reseau, max, $super) {
    captures = captures === VOID ? emptyList() : captures;
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.r13(requete, elements, captures, reseau, max) : $super.r13.call(this, requete, elements, captures, reseau, max);
  };
  protoOf(RechercheLocale).w13 = function (personne, elements, reseau, max) {
    var indisponibles = reseau ? emptyList() : this.s12_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.recherche.RechercheLocale.parPersonne.<anonymous>' call
      if (!(element.b12_1 == null) && Texte_getInstance().x13(element.b12_1, personne)) {
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
      var tmp$ret$3 = new Citation(item.v11_1, item.x11_1, libelle(RechercheLocale_getInstance(), item.w11_1) + ' ' + etat(RechercheLocale_getInstance(), item.e12_1) + ' envers ' + personne, item.u11_1);
      destination_0.e(tmp$ret$3);
    }
    var citations = destination_0;
    return reponse(this, 'ce qui est en cours avec ' + personne, citations, indisponibles);
  };
  protoOf(RechercheLocale).w12 = function (personne, elements, reseau, max, $super) {
    reseau = reseau === VOID ? false : reseau;
    max = max === VOID ? 10 : max;
    return $super === VOID ? this.w13(personne, elements, reseau, max) : $super.w13.call(this, personne, elements, reseau, max);
  };
  var RechercheLocale_instance;
  function RechercheLocale_getInstance() {
    if (RechercheLocale_instance == null)
      new RechercheLocale();
    return RechercheLocale_instance;
  }
  function Texte() {
    Texte_instance = this;
    this.s13_1 = '\xE0\xE1\xE2\xE3\xE4\xE5\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF1\xF2\xF3\xF4\xF5\xF6\xF9\xFA\xFB\xFC\xFD\xFF';
    this.t13_1 = 'aaaaaaceeeeiiiinooooouuuuyy';
    this.u13_1 = setOf(['le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux', 'et', 'ou', 'a', '\xE0', 'en', 'dans', 'sur', 'pour', 'par', 'avec', 'que', 'qui', 'quoi', 'ce', 'cet', 'cette', 'ces', 'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'est', 'sont', 'ai', 'as', 'ont', 'etait', 'ete', 'pas', 'ne', 'plus']);
  }
  protoOf(Texte).y13 = function (texte) {
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
      this_0.f6(i >= 0 ? charSequenceGet('aaaaaaceeeeiiiinooooouuuuyy', i) : element);
    }
    return this_0.toString();
  };
  protoOf(Texte).z13 = function (texte) {
    // Inline function 'kotlin.text.map' call
    var this_0 = this.y13(texte);
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
      if (element.length > 1 && !Texte_getInstance().u13_1.l1(element)) {
        destination_0.e(element);
      }
    }
    return destination_0;
  };
  protoOf(Texte).a14 = function (texte) {
    return toSet(this.z13(texte));
  };
  protoOf(Texte).v13 = function (requete, texte) {
    var demandes = this.a14(requete);
    if (demandes.j())
      return 0.0;
    var presents = this.a14(texte);
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
        if (presents.l1(element)) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    return tmp$ret$0 / demandes.l();
  };
  protoOf(Texte).x13 = function (a, b) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString_0(trim(isCharSequence(a) ? a : THROW_CCE()));
    var tmp = this.y13(tmp$ret$0);
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1 = toString_0(trim(isCharSequence(b) ? b : THROW_CCE()));
    return tmp === this.y13(tmp$ret$1);
  };
  var Texte_instance;
  function Texte_getInstance() {
    if (Texte_instance == null)
      new Texte();
    return Texte_instance;
  }
  function ZeNoteRegles() {
    this.version = '2';
  }
  protoOf(ZeNoteRegles).maintenant = function (elementsJson, aujourdhui) {
    return Regles_getInstance().q11(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).revue = function (elementsJson, aujourdhui) {
    return Regles_getInstance().m12(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).filtrerAncrage = function (texteSource, elementsJson) {
    return Regles_getInstance().p12(texteSource, elementsJson);
  };
  protoOf(ZeNoteRegles).rechercherParMots = function (requete, elementsJson, capturesJson, reseau) {
    return Regles_getInstance().q12(requete, elementsJson, capturesJson, reseau);
  };
  protoOf(ZeNoteRegles).rechercherParPersonne = function (personne, elementsJson, reseau) {
    return Regles_getInstance().v12(personne, elementsJson, reseau);
  };
  protoOf(ZeNoteRegles).b14 = function () {
    return this.version;
  };
  var ZeNoteRegles_instance;
  function ZeNoteRegles_getInstance() {
    return ZeNoteRegles_instance;
  }
  //region block: post-declaration
  protoOf($serializer).qg = typeParametersSerializers;
  protoOf($serializer_0).qg = typeParametersSerializers;
  protoOf($serializer_1).qg = typeParametersSerializers;
  protoOf($serializer_2).qg = typeParametersSerializers;
  protoOf($serializer_3).qg = typeParametersSerializers;
  protoOf($serializer_4).qg = typeParametersSerializers;
  protoOf($serializer_5).qg = typeParametersSerializers;
  protoOf($serializer_6).qg = typeParametersSerializers;
  protoOf($serializer_7).qg = typeParametersSerializers;
  protoOf($serializer_8).qg = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_10 = new Companion_9();
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

