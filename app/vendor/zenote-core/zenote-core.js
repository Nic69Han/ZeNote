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
  var protoOf = kotlin_kotlin.$_$.e4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s3;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.h1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.o5;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var initMetadataForObject = kotlin_kotlin.$_$.w3;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var objectCreate = kotlin_kotlin.$_$.d4;
  var toString = kotlin_kotlin.$_$.a6;
  var getStringHashCode = kotlin_kotlin.$_$.p3;
  var getNumberHashCode = kotlin_kotlin.$_$.n3;
  var getBooleanHashCode = kotlin_kotlin.$_$.m3;
  var equals = kotlin_kotlin.$_$.k3;
  var initMetadataForClass = kotlin_kotlin.$_$.r3;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var toString_0 = kotlin_kotlin.$_$.h4;
  var hashCode = kotlin_kotlin.$_$.q3;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var Companion_instance = kotlin_kotlin.$_$.g1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c1;
  var createFailure = kotlin_kotlin.$_$.s5;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d1;
  var isBlank = kotlin_kotlin.$_$.v4;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.e1;
  var listOfNotNull = kotlin_kotlin.$_$.i2;
  var Collection = kotlin_kotlin.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.x3;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var FunctionAdapter = kotlin_kotlin.$_$.b3;
  var Comparator = kotlin_kotlin.$_$.h5;
  var compareValues = kotlin_kotlin.$_$.x2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.w;
  var compareTo = kotlin_kotlin.$_$.i3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var sortedWith = kotlin_kotlin.$_$.t2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var THROW_IAE = kotlin_kotlin.$_$.p5;
  var Enum = kotlin_kotlin.$_$.k5;
  var Long = kotlin_kotlin.$_$.n5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y5;
  var daysUntil = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var take = kotlin_kotlin.$_$.u2;
  var defineProp = kotlin_kotlin.$_$.j3;
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
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ElementResolu, 'ElementResolu');
  initMetadataForClass(CaptureId, 'CaptureId');
  initMetadataForClass(Passage, 'Passage');
  initMetadataForClass(Urgence, 'Urgence', VOID, Enum);
  initMetadataForClass(ContexteMaintenant, 'ContexteMaintenant');
  initMetadataForClass(Proposition, 'Proposition');
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Priorisation, 'Priorisation');
  initMetadataForObject(ZeNoteRegles, 'ZeNoteRegles');
  //endregion
  function Companion() {
  }
  protoOf(Companion).pw = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.ElementJson', this, 21);
    tmp0_serialDesc.if('id', false);
    tmp0_serialDesc.if('captureId', false);
    tmp0_serialDesc.if('type', false);
    tmp0_serialDesc.if('texte', false);
    tmp0_serialDesc.if('debutCar', false);
    tmp0_serialDesc.if('finCar', false);
    tmp0_serialDesc.if('debutMs', true);
    tmp0_serialDesc.if('finMs', true);
    tmp0_serialDesc.if('echeance', true);
    tmp0_serialDesc.if('echeanceConfiance', true);
    tmp0_serialDesc.if('echeanceIndice', true);
    tmp0_serialDesc.if('poids', true);
    tmp0_serialDesc.if('poidsConfiance', true);
    tmp0_serialDesc.if('poidsIndice', true);
    tmp0_serialDesc.if('interlocuteur', true);
    tmp0_serialDesc.if('interlocuteurConfiance', true);
    tmp0_serialDesc.if('sphere', true);
    tmp0_serialDesc.if('planDeclencheur', true);
    tmp0_serialDesc.if('planAction', true);
    tmp0_serialDesc.if('verdict', true);
    tmp0_serialDesc.if('corrigeParHumain', true);
    this.qw_1 = tmp0_serialDesc;
  }
  protoOf($serializer).rw = function (encoder, value) {
    var tmp0_desc = this.qw_1;
    var tmp1_output = encoder.sb(tmp0_desc);
    tmp1_output.oc(tmp0_desc, 0, value.sw_1);
    tmp1_output.oc(tmp0_desc, 1, value.tw_1);
    tmp1_output.oc(tmp0_desc, 2, value.uw_1);
    tmp1_output.oc(tmp0_desc, 3, value.vw_1);
    tmp1_output.nc(tmp0_desc, 4, value.ww_1);
    tmp1_output.nc(tmp0_desc, 5, value.xw_1);
    if (tmp1_output.vc(tmp0_desc, 6) ? true : !(value.yw_1 == null)) {
      tmp1_output.rc(tmp0_desc, 6, LongSerializer_getInstance(), value.yw_1);
    }
    if (tmp1_output.vc(tmp0_desc, 7) ? true : !(value.zw_1 == null)) {
      tmp1_output.rc(tmp0_desc, 7, LongSerializer_getInstance(), value.zw_1);
    }
    if (tmp1_output.vc(tmp0_desc, 8) ? true : !(value.ax_1 == null)) {
      tmp1_output.rc(tmp0_desc, 8, StringSerializer_getInstance(), value.ax_1);
    }
    if (tmp1_output.vc(tmp0_desc, 9) ? true : !(value.bx_1 == null)) {
      tmp1_output.rc(tmp0_desc, 9, DoubleSerializer_getInstance(), value.bx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 10) ? true : !(value.cx_1 == null)) {
      tmp1_output.rc(tmp0_desc, 10, StringSerializer_getInstance(), value.cx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 11) ? true : !(value.dx_1 == null)) {
      tmp1_output.rc(tmp0_desc, 11, StringSerializer_getInstance(), value.dx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 12) ? true : !(value.ex_1 == null)) {
      tmp1_output.rc(tmp0_desc, 12, DoubleSerializer_getInstance(), value.ex_1);
    }
    if (tmp1_output.vc(tmp0_desc, 13) ? true : !(value.fx_1 == null)) {
      tmp1_output.rc(tmp0_desc, 13, StringSerializer_getInstance(), value.fx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 14) ? true : !(value.gx_1 == null)) {
      tmp1_output.rc(tmp0_desc, 14, StringSerializer_getInstance(), value.gx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 15) ? true : !(value.hx_1 == null)) {
      tmp1_output.rc(tmp0_desc, 15, DoubleSerializer_getInstance(), value.hx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 16) ? true : !(value.ix_1 == null)) {
      tmp1_output.rc(tmp0_desc, 16, StringSerializer_getInstance(), value.ix_1);
    }
    if (tmp1_output.vc(tmp0_desc, 17) ? true : !(value.jx_1 == null)) {
      tmp1_output.rc(tmp0_desc, 17, StringSerializer_getInstance(), value.jx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 18) ? true : !(value.kx_1 == null)) {
      tmp1_output.rc(tmp0_desc, 18, StringSerializer_getInstance(), value.kx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 19) ? true : !(value.lx_1 === 'EN_ATTENTE')) {
      tmp1_output.oc(tmp0_desc, 19, value.lx_1);
    }
    if (tmp1_output.vc(tmp0_desc, 20) ? true : !(value.mx_1 === false)) {
      tmp1_output.mc(tmp0_desc, 20, value.mx_1);
    }
    tmp1_output.tb(tmp0_desc);
  };
  protoOf($serializer).ia = function (encoder, value) {
    return this.rw(encoder, value instanceof ElementJson ? value : THROW_CCE());
  };
  protoOf($serializer).ja = function (decoder) {
    var tmp0_desc = this.qw_1;
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
    var tmp25_input = decoder.sb(tmp0_desc);
    if (tmp25_input.bc()) {
      tmp4_local0 = tmp25_input.wb(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp25_input.wb(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp25_input.wb(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp25_input.wb(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp25_input.vb(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp25_input.vb(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp25_input.zb(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp25_input.zb(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp25_input.zb(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp25_input.zb(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp25_input.zb(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp25_input.zb(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp25_input.zb(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp25_input.zb(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp25_input.zb(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp25_input.zb(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp25_input.zb(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp25_input.zb(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp25_input.zb(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp25_input.wb(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp25_input.ub(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp25_input.cc(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp25_input.wb(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp25_input.wb(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp25_input.wb(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp25_input.wb(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp25_input.vb(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp25_input.vb(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp25_input.zb(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp25_input.zb(tmp0_desc, 7, LongSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp25_input.zb(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp25_input.zb(tmp0_desc, 9, DoubleSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp25_input.zb(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp25_input.zb(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp25_input.zb(tmp0_desc, 12, DoubleSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp25_input.zb(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp25_input.zb(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp25_input.zb(tmp0_desc, 15, DoubleSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp25_input.zb(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp25_input.zb(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp25_input.zb(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp25_input.wb(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp25_input.ub(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp25_input.tb(tmp0_desc);
    return ElementJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, null);
  };
  protoOf($serializer).ha = function () {
    return this.qw_1;
  };
  protoOf($serializer).kf = function () {
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
      throwMissingFieldException(seen0, 63, $serializer_getInstance().qw_1);
    }
    $this.sw_1 = id;
    $this.tw_1 = captureId;
    $this.uw_1 = type;
    $this.vw_1 = texte;
    $this.ww_1 = debutCar;
    $this.xw_1 = finCar;
    if (0 === (seen0 & 64))
      $this.yw_1 = null;
    else
      $this.yw_1 = debutMs;
    if (0 === (seen0 & 128))
      $this.zw_1 = null;
    else
      $this.zw_1 = finMs;
    if (0 === (seen0 & 256))
      $this.ax_1 = null;
    else
      $this.ax_1 = echeance;
    if (0 === (seen0 & 512))
      $this.bx_1 = null;
    else
      $this.bx_1 = echeanceConfiance;
    if (0 === (seen0 & 1024))
      $this.cx_1 = null;
    else
      $this.cx_1 = echeanceIndice;
    if (0 === (seen0 & 2048))
      $this.dx_1 = null;
    else
      $this.dx_1 = poids;
    if (0 === (seen0 & 4096))
      $this.ex_1 = null;
    else
      $this.ex_1 = poidsConfiance;
    if (0 === (seen0 & 8192))
      $this.fx_1 = null;
    else
      $this.fx_1 = poidsIndice;
    if (0 === (seen0 & 16384))
      $this.gx_1 = null;
    else
      $this.gx_1 = interlocuteur;
    if (0 === (seen0 & 32768))
      $this.hx_1 = null;
    else
      $this.hx_1 = interlocuteurConfiance;
    if (0 === (seen0 & 65536))
      $this.ix_1 = null;
    else
      $this.ix_1 = sphere;
    if (0 === (seen0 & 131072))
      $this.jx_1 = null;
    else
      $this.jx_1 = planDeclencheur;
    if (0 === (seen0 & 262144))
      $this.kx_1 = null;
    else
      $this.kx_1 = planAction;
    if (0 === (seen0 & 524288))
      $this.lx_1 = 'EN_ATTENTE';
    else
      $this.lx_1 = verdict;
    if (0 === (seen0 & 1048576))
      $this.mx_1 = false;
    else
      $this.mx_1 = corrigeParHumain;
    return $this;
  }
  function ElementJson_init_$Create$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker) {
    return ElementJson_init_$Init$(seen0, id, captureId, type, texte, debutCar, finCar, debutMs, finMs, echeance, echeanceConfiance, echeanceIndice, poids, poidsConfiance, poidsIndice, interlocuteur, interlocuteurConfiance, sphere, planDeclencheur, planAction, verdict, corrigeParHumain, serializationConstructorMarker, objectCreate(protoOf(ElementJson)));
  }
  function ElementJson() {
  }
  protoOf(ElementJson).toString = function () {
    return 'ElementJson(id=' + this.sw_1 + ', captureId=' + this.tw_1 + ', type=' + this.uw_1 + ', texte=' + this.vw_1 + ', debutCar=' + this.ww_1 + ', finCar=' + this.xw_1 + ', debutMs=' + toString(this.yw_1) + ', finMs=' + toString(this.zw_1) + ', echeance=' + this.ax_1 + ', echeanceConfiance=' + this.bx_1 + ', echeanceIndice=' + this.cx_1 + ', poids=' + this.dx_1 + ', poidsConfiance=' + this.ex_1 + ', poidsIndice=' + this.fx_1 + ', interlocuteur=' + this.gx_1 + ', interlocuteurConfiance=' + this.hx_1 + ', sphere=' + this.ix_1 + ', planDeclencheur=' + this.jx_1 + ', planAction=' + this.kx_1 + ', verdict=' + this.lx_1 + ', corrigeParHumain=' + this.mx_1 + ')';
  };
  protoOf(ElementJson).hashCode = function () {
    var result = getStringHashCode(this.sw_1);
    result = imul(result, 31) + getStringHashCode(this.tw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.uw_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.vw_1) | 0;
    result = imul(result, 31) + this.ww_1 | 0;
    result = imul(result, 31) + this.xw_1 | 0;
    result = imul(result, 31) + (this.yw_1 == null ? 0 : this.yw_1.hashCode()) | 0;
    result = imul(result, 31) + (this.zw_1 == null ? 0 : this.zw_1.hashCode()) | 0;
    result = imul(result, 31) + (this.ax_1 == null ? 0 : getStringHashCode(this.ax_1)) | 0;
    result = imul(result, 31) + (this.bx_1 == null ? 0 : getNumberHashCode(this.bx_1)) | 0;
    result = imul(result, 31) + (this.cx_1 == null ? 0 : getStringHashCode(this.cx_1)) | 0;
    result = imul(result, 31) + (this.dx_1 == null ? 0 : getStringHashCode(this.dx_1)) | 0;
    result = imul(result, 31) + (this.ex_1 == null ? 0 : getNumberHashCode(this.ex_1)) | 0;
    result = imul(result, 31) + (this.fx_1 == null ? 0 : getStringHashCode(this.fx_1)) | 0;
    result = imul(result, 31) + (this.gx_1 == null ? 0 : getStringHashCode(this.gx_1)) | 0;
    result = imul(result, 31) + (this.hx_1 == null ? 0 : getNumberHashCode(this.hx_1)) | 0;
    result = imul(result, 31) + (this.ix_1 == null ? 0 : getStringHashCode(this.ix_1)) | 0;
    result = imul(result, 31) + (this.jx_1 == null ? 0 : getStringHashCode(this.jx_1)) | 0;
    result = imul(result, 31) + (this.kx_1 == null ? 0 : getStringHashCode(this.kx_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.lx_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.mx_1) | 0;
    return result;
  };
  protoOf(ElementJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementJson))
      return false;
    var tmp0_other_with_cast = other instanceof ElementJson ? other : THROW_CCE();
    if (!(this.sw_1 === tmp0_other_with_cast.sw_1))
      return false;
    if (!(this.tw_1 === tmp0_other_with_cast.tw_1))
      return false;
    if (!(this.uw_1 === tmp0_other_with_cast.uw_1))
      return false;
    if (!(this.vw_1 === tmp0_other_with_cast.vw_1))
      return false;
    if (!(this.ww_1 === tmp0_other_with_cast.ww_1))
      return false;
    if (!(this.xw_1 === tmp0_other_with_cast.xw_1))
      return false;
    if (!equals(this.yw_1, tmp0_other_with_cast.yw_1))
      return false;
    if (!equals(this.zw_1, tmp0_other_with_cast.zw_1))
      return false;
    if (!(this.ax_1 == tmp0_other_with_cast.ax_1))
      return false;
    if (!equals(this.bx_1, tmp0_other_with_cast.bx_1))
      return false;
    if (!(this.cx_1 == tmp0_other_with_cast.cx_1))
      return false;
    if (!(this.dx_1 == tmp0_other_with_cast.dx_1))
      return false;
    if (!equals(this.ex_1, tmp0_other_with_cast.ex_1))
      return false;
    if (!(this.fx_1 == tmp0_other_with_cast.fx_1))
      return false;
    if (!(this.gx_1 == tmp0_other_with_cast.gx_1))
      return false;
    if (!equals(this.hx_1, tmp0_other_with_cast.hx_1))
      return false;
    if (!(this.ix_1 == tmp0_other_with_cast.ix_1))
      return false;
    if (!(this.jx_1 == tmp0_other_with_cast.jx_1))
      return false;
    if (!(this.kx_1 == tmp0_other_with_cast.kx_1))
      return false;
    if (!(this.lx_1 === tmp0_other_with_cast.lx_1))
      return false;
    if (!(this.mx_1 === tmp0_other_with_cast.mx_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).pw = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('app.zenote.core.api.PropositionJson', this, 5);
    tmp0_serialDesc.if('elementId', false);
    tmp0_serialDesc.if('texte', false);
    tmp0_serialDesc.if('raison', false);
    tmp0_serialDesc.if('poidsEffectif', false);
    tmp0_serialDesc.if('urgence', false);
    this.nx_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).ox = function (encoder, value) {
    var tmp0_desc = this.nx_1;
    var tmp1_output = encoder.sb(tmp0_desc);
    tmp1_output.oc(tmp0_desc, 0, value.px_1);
    tmp1_output.oc(tmp0_desc, 1, value.qx_1);
    tmp1_output.oc(tmp0_desc, 2, value.rx_1);
    tmp1_output.oc(tmp0_desc, 3, value.sx_1);
    tmp1_output.oc(tmp0_desc, 4, value.tx_1);
    tmp1_output.tb(tmp0_desc);
  };
  protoOf($serializer_0).ia = function (encoder, value) {
    return this.ox(encoder, value instanceof PropositionJson ? value : THROW_CCE());
  };
  protoOf($serializer_0).ja = function (decoder) {
    var tmp0_desc = this.nx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.sb(tmp0_desc);
    if (tmp9_input.bc()) {
      tmp4_local0 = tmp9_input.wb(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.wb(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.wb(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.wb(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.wb(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.cc(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.wb(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.wb(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.wb(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.wb(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.wb(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.tb(tmp0_desc);
    return PropositionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).ha = function () {
    return this.nx_1;
  };
  protoOf($serializer_0).kf = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_0().nx_1);
    }
    $this.px_1 = elementId;
    $this.qx_1 = texte;
    $this.rx_1 = raison;
    $this.sx_1 = poidsEffectif;
    $this.tx_1 = urgence;
    return $this;
  }
  function PropositionJson_init_$Create$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker) {
    return PropositionJson_init_$Init$(seen0, elementId, texte, raison, poidsEffectif, urgence, serializationConstructorMarker, objectCreate(protoOf(PropositionJson)));
  }
  function PropositionJson(elementId, texte, raison, poidsEffectif, urgence) {
    this.px_1 = elementId;
    this.qx_1 = texte;
    this.rx_1 = raison;
    this.sx_1 = poidsEffectif;
    this.tx_1 = urgence;
  }
  protoOf(PropositionJson).toString = function () {
    return 'PropositionJson(elementId=' + this.px_1 + ', texte=' + this.qx_1 + ', raison=' + this.rx_1 + ', poidsEffectif=' + this.sx_1 + ', urgence=' + this.tx_1 + ')';
  };
  protoOf(PropositionJson).hashCode = function () {
    var result = getStringHashCode(this.px_1);
    result = imul(result, 31) + getStringHashCode(this.qx_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.rx_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.sx_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.tx_1) | 0;
    return result;
  };
  protoOf(PropositionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PropositionJson))
      return false;
    var tmp0_other_with_cast = other instanceof PropositionJson ? other : THROW_CCE();
    if (!(this.px_1 === tmp0_other_with_cast.px_1))
      return false;
    if (!(this.qx_1 === tmp0_other_with_cast.qx_1))
      return false;
    if (!(this.rx_1 === tmp0_other_with_cast.rx_1))
      return false;
    if (!(this.sx_1 === tmp0_other_with_cast.sx_1))
      return false;
    if (!(this.tx_1 === tmp0_other_with_cast.tx_1))
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
    tmp0_serialDesc.if('element', false);
    tmp0_serialDesc.if('aConfirmer', false);
    tmp0_serialDesc.if('planManquant', false);
    tmp0_serialDesc.if('urgence', false);
    this.ux_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).vx = function (encoder, value) {
    var tmp0_desc = this.ux_1;
    var tmp1_output = encoder.sb(tmp0_desc);
    tmp1_output.pc(tmp0_desc, 0, $serializer_getInstance(), value.wx_1);
    tmp1_output.mc(tmp0_desc, 1, value.xx_1);
    tmp1_output.mc(tmp0_desc, 2, value.yx_1);
    tmp1_output.oc(tmp0_desc, 3, value.zx_1);
    tmp1_output.tb(tmp0_desc);
  };
  protoOf($serializer_1).ia = function (encoder, value) {
    return this.vx(encoder, value instanceof EntreeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_1).ja = function (decoder) {
    var tmp0_desc = this.ux_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.sb(tmp0_desc);
    if (tmp8_input.bc()) {
      tmp4_local0 = tmp8_input.xb(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ub(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ub(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.wb(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.cc(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.xb(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ub(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ub(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.wb(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.tb(tmp0_desc);
    return EntreeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).ha = function () {
    return this.ux_1;
  };
  protoOf($serializer_1).kf = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_1().ux_1);
    }
    $this.wx_1 = element;
    $this.xx_1 = aConfirmer;
    $this.yx_1 = planManquant;
    $this.zx_1 = urgence;
    return $this;
  }
  function EntreeRevueJson_init_$Create$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker) {
    return EntreeRevueJson_init_$Init$(seen0, element, aConfirmer, planManquant, urgence, serializationConstructorMarker, objectCreate(protoOf(EntreeRevueJson)));
  }
  function EntreeRevueJson(element, aConfirmer, planManquant, urgence) {
    this.wx_1 = element;
    this.xx_1 = aConfirmer;
    this.yx_1 = planManquant;
    this.zx_1 = urgence;
  }
  protoOf(EntreeRevueJson).toString = function () {
    return 'EntreeRevueJson(element=' + this.wx_1.toString() + ', aConfirmer=' + this.xx_1 + ', planManquant=' + this.yx_1 + ', urgence=' + this.zx_1 + ')';
  };
  protoOf(EntreeRevueJson).hashCode = function () {
    var result = this.wx_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.xx_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.yx_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.zx_1) | 0;
    return result;
  };
  protoOf(EntreeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EntreeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof EntreeRevueJson ? other : THROW_CCE();
    if (!this.wx_1.equals(tmp0_other_with_cast.wx_1))
      return false;
    if (!(this.xx_1 === tmp0_other_with_cast.xx_1))
      return false;
    if (!(this.yx_1 === tmp0_other_with_cast.yx_1))
      return false;
    if (!(this.zx_1 === tmp0_other_with_cast.zx_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ay_1 = [null, new ArrayListSerializer($serializer_getInstance_1())];
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
    tmp0_serialDesc.if('captureId', false);
    tmp0_serialDesc.if('entrees', false);
    this.by_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).cy = function (encoder, value) {
    var tmp0_desc = this.by_1;
    var tmp1_output = encoder.sb(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().ay_1;
    tmp1_output.oc(tmp0_desc, 0, value.dy_1);
    tmp1_output.pc(tmp0_desc, 1, tmp2_cached[1], value.ey_1);
    tmp1_output.tb(tmp0_desc);
  };
  protoOf($serializer_2).ia = function (encoder, value) {
    return this.cy(encoder, value instanceof GroupeRevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_2).ja = function (decoder) {
    var tmp0_desc = this.by_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.sb(tmp0_desc);
    var tmp7_cached = Companion_getInstance_3().ay_1;
    if (tmp6_input.bc()) {
      tmp4_local0 = tmp6_input.wb(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.xb(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.cc(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.wb(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.xb(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.tb(tmp0_desc);
    return GroupeRevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).ha = function () {
    return this.by_1;
  };
  protoOf($serializer_2).kf = function () {
    var tmp0_cached = Companion_getInstance_3().ay_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().by_1);
    }
    $this.dy_1 = captureId;
    $this.ey_1 = entrees;
    return $this;
  }
  function GroupeRevueJson_init_$Create$(seen0, captureId, entrees, serializationConstructorMarker) {
    return GroupeRevueJson_init_$Init$(seen0, captureId, entrees, serializationConstructorMarker, objectCreate(protoOf(GroupeRevueJson)));
  }
  function GroupeRevueJson(captureId, entrees) {
    Companion_getInstance_3();
    this.dy_1 = captureId;
    this.ey_1 = entrees;
  }
  protoOf(GroupeRevueJson).toString = function () {
    return 'GroupeRevueJson(captureId=' + this.dy_1 + ', entrees=' + toString_0(this.ey_1) + ')';
  };
  protoOf(GroupeRevueJson).hashCode = function () {
    var result = getStringHashCode(this.dy_1);
    result = imul(result, 31) + hashCode(this.ey_1) | 0;
    return result;
  };
  protoOf(GroupeRevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GroupeRevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof GroupeRevueJson ? other : THROW_CCE();
    if (!(this.dy_1 === tmp0_other_with_cast.dy_1))
      return false;
    if (!equals(this.ey_1, tmp0_other_with_cast.ey_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.fy_1 = [new ArrayListSerializer($serializer_getInstance_2()), null];
  }
  protoOf(Companion_3).pw = function () {
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
    tmp0_serialDesc.if('groupes', false);
    tmp0_serialDesc.if('total', false);
    this.gy_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).hy = function (encoder, value) {
    var tmp0_desc = this.gy_1;
    var tmp1_output = encoder.sb(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().fy_1;
    tmp1_output.pc(tmp0_desc, 0, tmp2_cached[0], value.iy_1);
    tmp1_output.nc(tmp0_desc, 1, value.jy_1);
    tmp1_output.tb(tmp0_desc);
  };
  protoOf($serializer_3).ia = function (encoder, value) {
    return this.hy(encoder, value instanceof RevueJson ? value : THROW_CCE());
  };
  protoOf($serializer_3).ja = function (decoder) {
    var tmp0_desc = this.gy_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.sb(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().fy_1;
    if (tmp6_input.bc()) {
      tmp4_local0 = tmp6_input.xb(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.vb(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.cc(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.xb(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.vb(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.tb(tmp0_desc);
    return RevueJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).ha = function () {
    return this.gy_1;
  };
  protoOf($serializer_3).kf = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_4().fy_1[0], IntSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function RevueJson_init_$Init$(seen0, groupes, total, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().gy_1);
    }
    $this.iy_1 = groupes;
    $this.jy_1 = total;
    return $this;
  }
  function RevueJson_init_$Create$(seen0, groupes, total, serializationConstructorMarker) {
    return RevueJson_init_$Init$(seen0, groupes, total, serializationConstructorMarker, objectCreate(protoOf(RevueJson)));
  }
  function RevueJson(groupes, total) {
    Companion_getInstance_4();
    this.iy_1 = groupes;
    this.jy_1 = total;
  }
  protoOf(RevueJson).toString = function () {
    return 'RevueJson(groupes=' + toString_0(this.iy_1) + ', total=' + this.jy_1 + ')';
  };
  protoOf(RevueJson).hashCode = function () {
    var result = hashCode(this.iy_1);
    result = imul(result, 31) + this.jy_1 | 0;
    return result;
  };
  protoOf(RevueJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RevueJson))
      return false;
    var tmp0_other_with_cast = other instanceof RevueJson ? other : THROW_CCE();
    if (!equals(this.iy_1, tmp0_other_with_cast.iy_1))
      return false;
    if (!(this.jy_1 === tmp0_other_with_cast.jy_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ky_1 = [new ArrayListSerializer($serializer_getInstance()), new ArrayListSerializer($serializer_getInstance_5())];
  }
  protoOf(Companion_4).pw = function () {
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
    tmp0_serialDesc.if('retenus', false);
    tmp0_serialDesc.if('ecartes', false);
    this.ly_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).my = function (encoder, value) {
    var tmp0_desc = this.ly_1;
    var tmp1_output = encoder.sb(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().ky_1;
    tmp1_output.pc(tmp0_desc, 0, tmp2_cached[0], value.ny_1);
    tmp1_output.pc(tmp0_desc, 1, tmp2_cached[1], value.oy_1);
    tmp1_output.tb(tmp0_desc);
  };
  protoOf($serializer_4).ia = function (encoder, value) {
    return this.my(encoder, value instanceof AncrageJson ? value : THROW_CCE());
  };
  protoOf($serializer_4).ja = function (decoder) {
    var tmp0_desc = this.ly_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.sb(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().ky_1;
    if (tmp6_input.bc()) {
      tmp4_local0 = tmp6_input.xb(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.xb(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.cc(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.xb(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.xb(tmp0_desc, 1, tmp7_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.tb(tmp0_desc);
    return AncrageJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).ha = function () {
    return this.ly_1;
  };
  protoOf($serializer_4).kf = function () {
    var tmp0_cached = Companion_getInstance_5().ky_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_4().ly_1);
    }
    $this.ny_1 = retenus;
    $this.oy_1 = ecartes;
    return $this;
  }
  function AncrageJson_init_$Create$(seen0, retenus, ecartes, serializationConstructorMarker) {
    return AncrageJson_init_$Init$(seen0, retenus, ecartes, serializationConstructorMarker, objectCreate(protoOf(AncrageJson)));
  }
  function AncrageJson(retenus, ecartes) {
    Companion_getInstance_5();
    this.ny_1 = retenus;
    this.oy_1 = ecartes;
  }
  protoOf(AncrageJson).toString = function () {
    return 'AncrageJson(retenus=' + toString_0(this.ny_1) + ', ecartes=' + toString_0(this.oy_1) + ')';
  };
  protoOf(AncrageJson).hashCode = function () {
    var result = hashCode(this.ny_1);
    result = imul(result, 31) + hashCode(this.oy_1) | 0;
    return result;
  };
  protoOf(AncrageJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AncrageJson))
      return false;
    var tmp0_other_with_cast = other instanceof AncrageJson ? other : THROW_CCE();
    if (!equals(this.ny_1, tmp0_other_with_cast.ny_1))
      return false;
    if (!equals(this.oy_1, tmp0_other_with_cast.oy_1))
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
    tmp0_serialDesc.if('texte', false);
    tmp0_serialDesc.if('raison', false);
    this.py_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).qy = function (encoder, value) {
    var tmp0_desc = this.py_1;
    var tmp1_output = encoder.sb(tmp0_desc);
    tmp1_output.oc(tmp0_desc, 0, value.ry_1);
    tmp1_output.oc(tmp0_desc, 1, value.sy_1);
    tmp1_output.tb(tmp0_desc);
  };
  protoOf($serializer_5).ia = function (encoder, value) {
    return this.qy(encoder, value instanceof EcarteJson ? value : THROW_CCE());
  };
  protoOf($serializer_5).ja = function (decoder) {
    var tmp0_desc = this.py_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.sb(tmp0_desc);
    if (tmp6_input.bc()) {
      tmp4_local0 = tmp6_input.wb(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.wb(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.cc(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.wb(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.wb(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.tb(tmp0_desc);
    return EcarteJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).ha = function () {
    return this.py_1;
  };
  protoOf($serializer_5).kf = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().py_1);
    }
    $this.ry_1 = texte;
    $this.sy_1 = raison;
    return $this;
  }
  function EcarteJson_init_$Create$(seen0, texte, raison, serializationConstructorMarker) {
    return EcarteJson_init_$Init$(seen0, texte, raison, serializationConstructorMarker, objectCreate(protoOf(EcarteJson)));
  }
  function EcarteJson(texte, raison) {
    this.ry_1 = texte;
    this.sy_1 = raison;
  }
  protoOf(EcarteJson).toString = function () {
    return 'EcarteJson(texte=' + this.ry_1 + ', raison=' + this.sy_1 + ')';
  };
  protoOf(EcarteJson).hashCode = function () {
    var result = getStringHashCode(this.ry_1);
    result = imul(result, 31) + getStringHashCode(this.sy_1) | 0;
    return result;
  };
  protoOf(EcarteJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EcarteJson))
      return false;
    var tmp0_other_with_cast = other instanceof EcarteJson ? other : THROW_CCE();
    if (!(this.ry_1 === tmp0_other_with_cast.ry_1))
      return false;
    if (!(this.sy_1 === tmp0_other_with_cast.sy_1))
      return false;
    return true;
  };
  function decoder($this, elementsJson) {
    return $this.ty_1.cn(ListSerializer(Companion_instance_0.pw()), elementsJson);
  }
  function raisonDeRejet($this, dto, texteSource) {
    var tmp;
    if (isBlank(dto.vw_1)) {
      tmp = '\xE9l\xE9ment sans texte';
    } else {
      if (dto.ww_1 < 0 || dto.xw_1 <= dto.ww_1) {
        tmp = 'passage source vide ou incoh\xE9rent';
      } else {
        if (dto.xw_1 > texteSource.length) {
          tmp = 'passage source absent du texte de la capture';
        } else {
          // Inline function 'kotlin.runCatching' call
          var tmp_0;
          try {
            // Inline function 'app.zenote.core.api.Regles.raisonDeRejet.<anonymous>' call
            // Inline function 'kotlin.Companion.success' call
            var value = valueOf(dto.uw_1);
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
            tmp = 'type inconnu : ' + dto.uw_1;
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
      var value = valueOf_3(nom).h1_1;
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
    var tmp0 = listOfNotNull([_this__u8e3s4.bx_1, _this__u8e3s4.ex_1, _this__u8e3s4.hx_1]);
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
    var tmp = new CaptureId(_this__u8e3s4.tw_1);
    var tmp_0 = valueOf(_this__u8e3s4.uw_1);
    var tmp_1 = new Passage(_this__u8e3s4.ww_1, _this__u8e3s4.xw_1, _this__u8e3s4.yw_1, _this__u8e3s4.zw_1);
    var tmp0_safe_receiver = _this__u8e3s4.ax_1;
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_3 = Companion_getInstance().wm(tmp0_safe_receiver);
      var tmp0_elvis_lhs = _this__u8e3s4.bx_1;
      var tmp_4 = tmp0_elvis_lhs == null ? 1.0 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.cx_1;
      tmp_2 = new Deduit(tmp_3, tmp_4, tmp1_elvis_lhs == null ? 'fourni' : tmp1_elvis_lhs);
    }
    var tmp_5 = tmp_2;
    var tmp1_safe_receiver = _this__u8e3s4.dx_1;
    var tmp_6;
    if (tmp1_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp_7 = valueOf_0(tmp1_safe_receiver);
      var tmp0_elvis_lhs_0 = _this__u8e3s4.ex_1;
      var tmp_8 = tmp0_elvis_lhs_0 == null ? 1.0 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs_0 = _this__u8e3s4.fx_1;
      tmp_6 = new Deduit(tmp_7, tmp_8, tmp1_elvis_lhs_0 == null ? 'fourni' : tmp1_elvis_lhs_0);
    }
    var tmp_9 = tmp_6;
    var tmp2_safe_receiver = _this__u8e3s4.gx_1;
    var tmp_10;
    if (tmp2_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_elvis_lhs_1 = _this__u8e3s4.hx_1;
      tmp_10 = new Deduit(tmp2_safe_receiver, tmp0_elvis_lhs_1 == null ? 1.0 : tmp0_elvis_lhs_1, 'nomm\xE9');
    }
    var tmp_11 = tmp_10;
    var tmp3_safe_receiver = _this__u8e3s4.ix_1;
    var tmp_12;
    if (tmp3_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      tmp_12 = new Deduit(valueOf_1(tmp3_safe_receiver), 1.0, 'd\xE9duit');
    }
    var tmp_13 = tmp_12;
    var tmp4_safe_receiver = _this__u8e3s4.jx_1;
    var tmp_14;
    if (tmp4_safe_receiver == null) {
      tmp_14 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'app.zenote.core.api.Regles.versResolu.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.kx_1;
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
    var derive = new ElementDerive(tmp, tmp_0, _this__u8e3s4.vw_1, tmp_1, tmp_5, tmp_9, tmp_11, tmp_13, tmp_14);
    var tmp_16 = new ElementId(_this__u8e3s4.sw_1);
    var tmp5_safe_receiver = derive.yy_1;
    var tmp_17 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.ez_1;
    var tmp6_safe_receiver = derive.zy_1;
    var tmp_18 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.ez_1;
    var tmp7_safe_receiver = derive.az_1;
    var tmp_19 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.ez_1;
    var tmp8_safe_receiver = derive.bz_1;
    var tmp_20 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.ez_1;
    var tmp9_safe_receiver = derive.cz_1;
    return new ElementResolu(tmp_16, derive.uy_1, derive.vy_1, derive.wy_1, derive.xy_1, tmp_17, tmp_18, tmp_19, tmp_20, tmp9_safe_receiver == null ? null : tmp9_safe_receiver.ez_1, valueOf_2(_this__u8e3s4.lx_1), aConfirmer(_this__u8e3s4, $this), _this__u8e3s4.mx_1, _this__u8e3s4.mx_1 && !(_this__u8e3s4.dx_1 == null) ? 'poids fix\xE9 \xE0 la main' : _this__u8e3s4.fx_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.hz_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).om = function (a, b) {
    return this.hz_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.om(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).w1 = function () {
    return this.hz_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w1(), other.w1());
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
    return hashCode(this.w1());
  };
  function Regles$json$lambda($this$Json) {
    $this$Json.un_1 = true;
    $this$Json.sn_1 = true;
    return Unit_instance;
  }
  function Regles$revue$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp = urgenceOrdinale(Regles_getInstance(), a.zx_1);
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var tmp$ret$1 = urgenceOrdinale(Regles_getInstance(), b.zx_1);
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
        var tmp_0 = b.xx_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = a.xx_1;
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
        var tmp_0 = a.wx_1.sw_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
        var tmp$ret$1 = b.wx_1.sw_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles$revue$lambda_2(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = a.ey_1.g();
    if (!iterator.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it = iterator.i();
    var minValue = urgenceOrdinale(Regles_getInstance(), it.zx_1);
    while (iterator.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_0 = iterator.i();
      var v = urgenceOrdinale(Regles_getInstance(), it_0.zx_1);
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var tmp = minValue;
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator_0 = b.ey_1.g();
    if (!iterator_0.h())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
    var it_1 = iterator_0.i();
    var minValue_0 = urgenceOrdinale(Regles_getInstance(), it_1.zx_1);
    while (iterator_0.h()) {
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.i();
      var v_0 = urgenceOrdinale(Regles_getInstance(), it_2.zx_1);
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
        var tmp_0 = a.dy_1;
        // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
        var tmp$ret$1 = b.dy_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Regles() {
    Regles_instance = this;
    var tmp = this;
    tmp.ty_1 = Json(VOID, Regles$json$lambda);
  }
  protoOf(Regles).iz = function (elementsJson, aujourdhui) {
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
    var this_0 = tmp.lz(destination, new ContexteMaintenant(Companion_getInstance().wm(aujourdhui)));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_0 = this_0.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'app.zenote.core.api.Regles.maintenant.<anonymous>' call
      var tmp$ret$3 = new PropositionJson(item_0.b10_1.nz_1.mz_1, item_0.b10_1.qz_1, item_0.c10_1, item_0.d10_1.g1_1, item_0.e10_1.g1_1);
      destination_0.e(tmp$ret$3);
    }
    var propositions = destination_0;
    return this.ty_1.bn(ListSerializer(Companion_instance_1.pw()), propositions);
  };
  protoOf(Regles).f10 = function (elementsJson, aujourdhui) {
    var date = Companion_getInstance().wm(aujourdhui);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = decoder(this, elementsJson);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      if (element.lx_1 === 'EN_ATTENTE') {
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
      var tmp$ret$3 = new EntreeRevueJson(item, aConfirmer(item, Regles_getInstance()), resolu.g10(), Priorisation_getInstance().h10(resolu.sz_1, date).g1_1);
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
      var key = element_0.wx_1.tw_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_1.d1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_1.y2(key, answer);
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
    var _iterator__ex2g4s_2 = destination_1.f1().g();
    while (_iterator__ex2g4s_2.h()) {
      var item_0 = _iterator__ex2g4s_2.i();
      // Inline function 'app.zenote.core.api.Regles.revue.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var captureId = item_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var dansLeGroupe = item_0.b1();
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
    return this.ty_1.bn(Companion_getInstance_4().pw(), new RevueJson(groupes, entrees.l()));
  };
  protoOf(Regles).i10 = function (texteSource, elementsJson) {
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
        var element_0 = new EcarteJson(element.vw_1, raison);
        ecartes.e(element_0);
      }
    }
    return this.ty_1.bn(Companion_getInstance_5().pw(), new AncrageJson(retenus, ecartes));
  };
  var Regles_instance;
  function Regles_getInstance() {
    if (Regles_instance == null)
      new Regles();
    return Regles_instance;
  }
  function Deduit(valeur, confiance, indice) {
    this.ez_1 = valeur;
    this.fz_1 = confiance;
    this.gz_1 = indice;
    var containsArg = this.fz_1;
    // Inline function 'kotlin.require' call
    if (!(0.0 <= containsArg ? containsArg <= 1.0 : false)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message = 'La confiance est une probabilit\xE9 entre 0 et 1.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.gz_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Deduit.<anonymous>' call
      var message_0 = "Une d\xE9duction sans indice n'est pas justifiable.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Deduit).toString = function () {
    return 'Deduit(valeur=' + toString(this.ez_1) + ', confiance=' + this.fz_1 + ', indice=' + this.gz_1 + ')';
  };
  protoOf(Deduit).hashCode = function () {
    var result = this.ez_1 == null ? 0 : hashCode(this.ez_1);
    result = imul(result, 31) + getNumberHashCode(this.fz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.gz_1) | 0;
    return result;
  };
  protoOf(Deduit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deduit))
      return false;
    var tmp0_other_with_cast = other instanceof Deduit ? other : THROW_CCE();
    if (!equals(this.ez_1, tmp0_other_with_cast.ez_1))
      return false;
    if (!equals(this.fz_1, tmp0_other_with_cast.fz_1))
      return false;
    if (!(this.gz_1 === tmp0_other_with_cast.gz_1))
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
  protoOf(TypeElement).l10 = function () {
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
    this.m10_1 = declencheur;
    this.n10_1 = action;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.m10_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message = "Un plan sans d\xE9clencheur n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.n10_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      // Inline function 'app.zenote.core.model.Plan.<anonymous>' call
      var message_0 = "Un plan sans action n'en est pas un.";
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(Plan).toString = function () {
    return 'Quand ' + this.m10_1 + ', ' + this.n10_1;
  };
  protoOf(Plan).hashCode = function () {
    var result = getStringHashCode(this.m10_1);
    result = imul(result, 31) + getStringHashCode(this.n10_1) | 0;
    return result;
  };
  protoOf(Plan).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plan))
      return false;
    var tmp0_other_with_cast = other instanceof Plan ? other : THROW_CCE();
    if (!(this.m10_1 === tmp0_other_with_cast.m10_1))
      return false;
    if (!(this.n10_1 === tmp0_other_with_cast.n10_1))
      return false;
    return true;
  };
  function ElementId(value) {
    this.mz_1 = value;
  }
  protoOf(ElementId).toString = function () {
    return this.mz_1;
  };
  protoOf(ElementId).hashCode = function () {
    return getStringHashCode(this.mz_1);
  };
  protoOf(ElementId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementId))
      return false;
    var tmp0_other_with_cast = other instanceof ElementId ? other : THROW_CCE();
    if (!(this.mz_1 === tmp0_other_with_cast.mz_1))
      return false;
    return true;
  };
  function ElementDerive(captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan) {
    echeance = echeance === VOID ? null : echeance;
    poids = poids === VOID ? null : poids;
    interlocuteur = interlocuteur === VOID ? null : interlocuteur;
    sphere = sphere === VOID ? null : sphere;
    plan = plan === VOID ? null : plan;
    this.uy_1 = captureId;
    this.vy_1 = type;
    this.wy_1 = texte;
    this.xy_1 = passage;
    this.yy_1 = echeance;
    this.zy_1 = poids;
    this.az_1 = interlocuteur;
    this.bz_1 = sphere;
    this.cz_1 = plan;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.wy_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.ElementDerive.<anonymous>' call
      var message = "Un \xE9l\xE9ment sans texte n'a rien \xE0 proposer.";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.dz_1 = new ElementId(this.uy_1.toString() + ':' + this.xy_1.o10_1 + '-' + this.xy_1.p10_1 + ':' + this.vy_1.toString());
  }
  protoOf(ElementDerive).toString = function () {
    return 'ElementDerive(captureId=' + this.uy_1.toString() + ', type=' + this.vy_1.toString() + ', texte=' + this.wy_1 + ', passage=' + this.xy_1.toString() + ', echeance=' + toString(this.yy_1) + ', poids=' + toString(this.zy_1) + ', interlocuteur=' + toString(this.az_1) + ', sphere=' + toString(this.bz_1) + ', plan=' + toString(this.cz_1) + ')';
  };
  protoOf(ElementDerive).hashCode = function () {
    var result = this.uy_1.hashCode();
    result = imul(result, 31) + this.vy_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.wy_1) | 0;
    result = imul(result, 31) + this.xy_1.hashCode() | 0;
    result = imul(result, 31) + (this.yy_1 == null ? 0 : this.yy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.zy_1 == null ? 0 : this.zy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.az_1 == null ? 0 : this.az_1.hashCode()) | 0;
    result = imul(result, 31) + (this.bz_1 == null ? 0 : this.bz_1.hashCode()) | 0;
    result = imul(result, 31) + (this.cz_1 == null ? 0 : this.cz_1.hashCode()) | 0;
    return result;
  };
  protoOf(ElementDerive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementDerive))
      return false;
    var tmp0_other_with_cast = other instanceof ElementDerive ? other : THROW_CCE();
    if (!this.uy_1.equals(tmp0_other_with_cast.uy_1))
      return false;
    if (!this.vy_1.equals(tmp0_other_with_cast.vy_1))
      return false;
    if (!(this.wy_1 === tmp0_other_with_cast.wy_1))
      return false;
    if (!this.xy_1.equals(tmp0_other_with_cast.xy_1))
      return false;
    if (!equals(this.yy_1, tmp0_other_with_cast.yy_1))
      return false;
    if (!equals(this.zy_1, tmp0_other_with_cast.zy_1))
      return false;
    if (!equals(this.az_1, tmp0_other_with_cast.az_1))
      return false;
    if (!equals(this.bz_1, tmp0_other_with_cast.bz_1))
      return false;
    if (!equals(this.cz_1, tmp0_other_with_cast.cz_1))
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
  function Companion_6() {
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function ElementResolu(id, captureId, type, texte, passage, echeance, poids, interlocuteur, sphere, plan, verdict, aConfirmer, corrigeParHumain, indicePoids) {
    this.nz_1 = id;
    this.oz_1 = captureId;
    this.pz_1 = type;
    this.qz_1 = texte;
    this.rz_1 = passage;
    this.sz_1 = echeance;
    this.tz_1 = poids;
    this.uz_1 = interlocuteur;
    this.vz_1 = sphere;
    this.wz_1 = plan;
    this.xz_1 = verdict;
    this.yz_1 = aConfirmer;
    this.zz_1 = corrigeParHumain;
    this.a10_1 = indicePoids;
  }
  protoOf(ElementResolu).g10 = function () {
    return this.xz_1.equals(Verdict_ACCEPTE_getInstance()) && this.pz_1.l10() && this.wz_1 == null;
  };
  protoOf(ElementResolu).toString = function () {
    return 'ElementResolu(id=' + this.nz_1.toString() + ', captureId=' + this.oz_1.toString() + ', type=' + this.pz_1.toString() + ', texte=' + this.qz_1 + ', passage=' + this.rz_1.toString() + ', echeance=' + toString(this.sz_1) + ', poids=' + toString(this.tz_1) + ', interlocuteur=' + this.uz_1 + ', sphere=' + toString(this.vz_1) + ', plan=' + toString(this.wz_1) + ', verdict=' + this.xz_1.toString() + ', aConfirmer=' + this.yz_1 + ', corrigeParHumain=' + this.zz_1 + ', indicePoids=' + this.a10_1 + ')';
  };
  protoOf(ElementResolu).hashCode = function () {
    var result = this.nz_1.hashCode();
    result = imul(result, 31) + this.oz_1.hashCode() | 0;
    result = imul(result, 31) + this.pz_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.qz_1) | 0;
    result = imul(result, 31) + this.rz_1.hashCode() | 0;
    result = imul(result, 31) + (this.sz_1 == null ? 0 : this.sz_1.hashCode()) | 0;
    result = imul(result, 31) + (this.tz_1 == null ? 0 : this.tz_1.hashCode()) | 0;
    result = imul(result, 31) + (this.uz_1 == null ? 0 : getStringHashCode(this.uz_1)) | 0;
    result = imul(result, 31) + (this.vz_1 == null ? 0 : this.vz_1.hashCode()) | 0;
    result = imul(result, 31) + (this.wz_1 == null ? 0 : this.wz_1.hashCode()) | 0;
    result = imul(result, 31) + this.xz_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.yz_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.zz_1) | 0;
    result = imul(result, 31) + (this.a10_1 == null ? 0 : getStringHashCode(this.a10_1)) | 0;
    return result;
  };
  protoOf(ElementResolu).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementResolu))
      return false;
    var tmp0_other_with_cast = other instanceof ElementResolu ? other : THROW_CCE();
    if (!this.nz_1.equals(tmp0_other_with_cast.nz_1))
      return false;
    if (!this.oz_1.equals(tmp0_other_with_cast.oz_1))
      return false;
    if (!this.pz_1.equals(tmp0_other_with_cast.pz_1))
      return false;
    if (!(this.qz_1 === tmp0_other_with_cast.qz_1))
      return false;
    if (!this.rz_1.equals(tmp0_other_with_cast.rz_1))
      return false;
    if (!equals(this.sz_1, tmp0_other_with_cast.sz_1))
      return false;
    if (!equals(this.tz_1, tmp0_other_with_cast.tz_1))
      return false;
    if (!(this.uz_1 == tmp0_other_with_cast.uz_1))
      return false;
    if (!equals(this.vz_1, tmp0_other_with_cast.vz_1))
      return false;
    if (!equals(this.wz_1, tmp0_other_with_cast.wz_1))
      return false;
    if (!this.xz_1.equals(tmp0_other_with_cast.xz_1))
      return false;
    if (!(this.yz_1 === tmp0_other_with_cast.yz_1))
      return false;
    if (!(this.zz_1 === tmp0_other_with_cast.zz_1))
      return false;
    if (!(this.a10_1 == tmp0_other_with_cast.a10_1))
      return false;
    return true;
  };
  function CaptureId(value) {
    this.s10_1 = value;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.s10_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      // Inline function 'app.zenote.core.model.CaptureId.<anonymous>' call
      var message = 'Un identifiant de capture ne peut pas \xEAtre vide.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(CaptureId).toString = function () {
    return this.s10_1;
  };
  protoOf(CaptureId).hashCode = function () {
    return getStringHashCode(this.s10_1);
  };
  protoOf(CaptureId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CaptureId))
      return false;
    var tmp0_other_with_cast = other instanceof CaptureId ? other : THROW_CCE();
    if (!(this.s10_1 === tmp0_other_with_cast.s10_1))
      return false;
    return true;
  };
  function Passage(debutCar, finCar, debutMs, finMs) {
    debutMs = debutMs === VOID ? null : debutMs;
    finMs = finMs === VOID ? null : finMs;
    this.o10_1 = debutCar;
    this.p10_1 = finCar;
    this.q10_1 = debutMs;
    this.r10_1 = finMs;
    // Inline function 'kotlin.require' call
    if (!(this.o10_1 >= 0)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message = 'Le d\xE9but du passage ne peut pas \xEAtre n\xE9gatif.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.p10_1 > this.o10_1)) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_0 = 'Le passage doit couvrir au moins un caract\xE8re.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(this.q10_1 == null === (this.r10_1 == null))) {
      // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
      var message_1 = 'Les bornes audio vont par paire, ou pas du tout.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    if (!(this.q10_1 == null) && !(this.r10_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.q10_1.x(new Long(0, 0)) >= 0 && this.r10_1.x(this.q10_1) > 0)) {
        // Inline function 'app.zenote.core.model.Passage.<anonymous>' call
        var message_2 = 'Bornes audio incoh\xE9rentes.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_2));
      }
    }
  }
  protoOf(Passage).toString = function () {
    return 'Passage(debutCar=' + this.o10_1 + ', finCar=' + this.p10_1 + ', debutMs=' + toString(this.q10_1) + ', finMs=' + toString(this.r10_1) + ')';
  };
  protoOf(Passage).hashCode = function () {
    var result = this.o10_1;
    result = imul(result, 31) + this.p10_1 | 0;
    result = imul(result, 31) + (this.q10_1 == null ? 0 : this.q10_1.hashCode()) | 0;
    result = imul(result, 31) + (this.r10_1 == null ? 0 : this.r10_1.hashCode()) | 0;
    return result;
  };
  protoOf(Passage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Passage))
      return false;
    var tmp0_other_with_cast = other instanceof Passage ? other : THROW_CCE();
    if (!(this.o10_1 === tmp0_other_with_cast.o10_1))
      return false;
    if (!(this.p10_1 === tmp0_other_with_cast.p10_1))
      return false;
    if (!equals(this.q10_1, tmp0_other_with_cast.q10_1))
      return false;
    if (!equals(this.r10_1, tmp0_other_with_cast.r10_1))
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
  protoOf(Urgence).v10 = function () {
    return this.equals(Urgence_DEPASSEE_getInstance()) || this.equals(Urgence_AUJOURD_HUI_getInstance());
  };
  protoOf(Urgence).w10 = function () {
    var tmp;
    switch (this.h1_1) {
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
    this.x10_1 = aujourdhui;
  }
  protoOf(ContexteMaintenant).toString = function () {
    return 'ContexteMaintenant(aujourdhui=' + this.x10_1.toString() + ')';
  };
  protoOf(ContexteMaintenant).hashCode = function () {
    return this.x10_1.hashCode();
  };
  protoOf(ContexteMaintenant).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContexteMaintenant))
      return false;
    var tmp0_other_with_cast = other instanceof ContexteMaintenant ? other : THROW_CCE();
    if (!this.x10_1.equals(tmp0_other_with_cast.x10_1))
      return false;
    return true;
  };
  function Proposition(element, raison, poidsEffectif, urgence) {
    this.b10_1 = element;
    this.c10_1 = raison;
    this.d10_1 = poidsEffectif;
    this.e10_1 = urgence;
  }
  protoOf(Proposition).toString = function () {
    return 'Proposition(element=' + this.b10_1.toString() + ', raison=' + this.c10_1 + ', poidsEffectif=' + this.d10_1.toString() + ', urgence=' + this.e10_1.toString() + ')';
  };
  protoOf(Proposition).hashCode = function () {
    var result = this.b10_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.c10_1) | 0;
    result = imul(result, 31) + this.d10_1.hashCode() | 0;
    result = imul(result, 31) + this.e10_1.hashCode() | 0;
    return result;
  };
  protoOf(Proposition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Proposition))
      return false;
    var tmp0_other_with_cast = other instanceof Proposition ? other : THROW_CCE();
    if (!this.b10_1.equals(tmp0_other_with_cast.b10_1))
      return false;
    if (!(this.c10_1 === tmp0_other_with_cast.c10_1))
      return false;
    if (!this.d10_1.equals(tmp0_other_with_cast.d10_1))
      return false;
    if (!this.e10_1.equals(tmp0_other_with_cast.e10_1))
      return false;
    return true;
  };
  function raison($this, element, urgence) {
    var tmp0_elvis_lhs = element.a10_1;
    var consequence = tmp0_elvis_lhs == null ? 'poids non d\xE9termin\xE9, \xE0 confirmer en Revue' : tmp0_elvis_lhs;
    return consequence + ' \u2014 ' + urgence.w10();
  }
  function dUnCranPlusHaut(_this__u8e3s4, $this) {
    var tmp;
    switch (_this__u8e3s4.h1_1) {
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
    this.y10_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).om = function (a, b) {
    return this.y10_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.om(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).w1 = function () {
    return this.y10_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.w1(), other.w1());
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
    return hashCode(this.w1());
  };
  function Priorisation$classer$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp = b.d10_1.h1_1;
    // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
    var tmp$ret$1 = a.d10_1.h1_1;
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
        var tmp_0 = a.e10_1.h1_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.e10_1.h1_1;
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
        var tmp_0 = a.b10_1.nz_1.mz_1;
        // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
        var tmp$ret$1 = b.b10_1.nz_1.mz_1;
        tmp = compareValues(tmp_0, tmp$ret$1);
      }
      return tmp;
    };
  }
  function Priorisation() {
    Priorisation_instance = this;
    this.jz_1 = 3;
    this.kz_1 = Poids_MOYEN_getInstance();
  }
  protoOf(Priorisation).h10 = function (echeance, aujourdhui) {
    if (echeance == null)
      return Urgence_AUCUNE_getInstance();
    var tmp0_subject = daysUntil(aujourdhui, echeance);
    return (-2147483648 <= tmp0_subject ? tmp0_subject <= -1 : false) ? Urgence_DEPASSEE_getInstance() : tmp0_subject === 0 ? Urgence_AUJOURD_HUI_getInstance() : tmp0_subject === 1 ? Urgence_DEMAIN_getInstance() : (2 <= tmp0_subject ? tmp0_subject <= 7 : false) ? Urgence_CETTE_SEMAINE_getInstance() : Urgence_PLUS_TARD_getInstance();
  };
  protoOf(Priorisation).z10 = function (elements, contexte) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = elements.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'app.zenote.core.priorisation.Priorisation.classer.<anonymous>' call
      if (element.xz_1.equals(Verdict_ACCEPTE_getInstance()) && element.pz_1.l10()) {
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
      var urgence = Priorisation_getInstance().h10(item.sz_1, contexte.x10_1);
      var tmp0_elvis_lhs = item.tz_1;
      var poids = tmp0_elvis_lhs == null ? Priorisation_getInstance().kz_1 : tmp0_elvis_lhs;
      var effectif = urgence.v10() ? dUnCranPlusHaut(poids, Priorisation_getInstance()) : poids;
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
  protoOf(Priorisation).lz = function (elements, contexte) {
    return take(this.z10(elements, contexte), 3);
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
  function ZeNoteRegles() {
    this.version = '1';
  }
  protoOf(ZeNoteRegles).maintenant = function (elementsJson, aujourdhui) {
    return Regles_getInstance().iz(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).revue = function (elementsJson, aujourdhui) {
    return Regles_getInstance().f10(elementsJson, aujourdhui);
  };
  protoOf(ZeNoteRegles).filtrerAncrage = function (texteSource, elementsJson) {
    return Regles_getInstance().i10(texteSource, elementsJson);
  };
  protoOf(ZeNoteRegles).a11 = function () {
    return this.version;
  };
  var ZeNoteRegles_instance;
  function ZeNoteRegles_getInstance() {
    return ZeNoteRegles_instance;
  }
  //region block: post-declaration
  protoOf($serializer).lf = typeParametersSerializers;
  protoOf($serializer_0).lf = typeParametersSerializers;
  protoOf($serializer_1).lf = typeParametersSerializers;
  protoOf($serializer_2).lf = typeParametersSerializers;
  protoOf($serializer_3).lf = typeParametersSerializers;
  protoOf($serializer_4).lf = typeParametersSerializers;
  protoOf($serializer_5).lf = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
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

