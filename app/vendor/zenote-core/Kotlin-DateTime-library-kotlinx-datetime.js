(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var ChronoUnit = $module$_js_joda_core_gcv2k.ChronoUnit;
  var VOID = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.x4;
  var objectCreate = kotlin_kotlin.$_$.w4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var Long = kotlin_kotlin.$_$.p6;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var toLong = kotlin_kotlin.$_$.z4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e1;
  var Unit_instance = kotlin_kotlin.$_$.o1;
  var abs = kotlin_kotlin.$_$.b5;
  var padStart = kotlin_kotlin.$_$.u5;
  var numberRangeToNumber = kotlin_kotlin.$_$.r4;
  var THROW_CCE = kotlin_kotlin.$_$.r6;
  var ClosedRange = kotlin_kotlin.$_$.c5;
  var isInterface = kotlin_kotlin.$_$.p4;
  var contains = kotlin_kotlin.$_$.f5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var toString = kotlin_kotlin.$_$.a5;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.t;
  var captureStack = kotlin_kotlin.$_$.t3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.u;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.w;
  var IllegalArgumentException = kotlin_kotlin.$_$.o6;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.c1;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.b1;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.d1;
  var RuntimeException = kotlin_kotlin.$_$.q6;
  var Enum = kotlin_kotlin.$_$.m6;
  var initMetadataForInterface = kotlin_kotlin.$_$.l4;
  var toString_0 = kotlin_kotlin.$_$.h1;
  var hashCode = kotlin_kotlin.$_$.h4;
  var getBooleanHashCode = kotlin_kotlin.$_$.d4;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var KProperty0 = kotlin_kotlin.$_$.k5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f4;
  var KMutableProperty1 = kotlin_kotlin.$_$.j5;
  var lazy = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var equals = kotlin_kotlin.$_$.b4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x;
  var toString_1 = kotlin_kotlin.$_$.d7;
  var getStringHashCode = kotlin_kotlin.$_$.g4;
  var charSequenceLength = kotlin_kotlin.$_$.x3;
  var charSequenceGet = kotlin_kotlin.$_$.w3;
  var listOf = kotlin_kotlin.$_$.t2;
  var get_lastIndex = kotlin_kotlin.$_$.s5;
  var emptyList = kotlin_kotlin.$_$.e2;
  var joinToString = kotlin_kotlin.$_$.l2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var single = kotlin_kotlin.$_$.e3;
  var charSequenceSubSequence = kotlin_kotlin.$_$.y3;
  var mutableListOf = kotlin_kotlin.$_$.x2;
  var removeLastOrNull = kotlin_kotlin.$_$.a3;
  var sortWith = kotlin_kotlin.$_$.f3;
  var FunctionAdapter = kotlin_kotlin.$_$.r3;
  var Comparator = kotlin_kotlin.$_$.j6;
  var compareValues = kotlin_kotlin.$_$.m3;
  var Exception = kotlin_kotlin.$_$.n6;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.q;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var joinTo = kotlin_kotlin.$_$.m2;
  var plus = kotlin_kotlin.$_$.z2;
  var toMutableList = kotlin_kotlin.$_$.j3;
  var addAll = kotlin_kotlin.$_$.v1;
  var Collection = kotlin_kotlin.$_$.q1;
  var firstOrNull = kotlin_kotlin.$_$.h2;
  var drop = kotlin_kotlin.$_$.d2;
  var listOf_0 = kotlin_kotlin.$_$.u2;
  var repeat = kotlin_kotlin.$_$.w5;
  var checkCountOverflow = kotlin_kotlin.$_$.w1;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.f1;
  var enumEntries = kotlin_kotlin.$_$.q3;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var Comparable = kotlin_kotlin.$_$.i6;
  var numberToInt = kotlin_kotlin.$_$.u4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b7;
  var numberToDouble = kotlin_kotlin.$_$.t4;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.p;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(DateTimePeriod, 'DateTimePeriod');
  initMetadataForClass(DatePeriod, 'DatePeriod', DatePeriod_init_$Create$, DateTimePeriod);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(DateTimeUnit, 'DateTimeUnit');
  initMetadataForClass(TimeBased, 'TimeBased', VOID, DateTimeUnit);
  initMetadataForClass(DateBased, 'DateBased', VOID, DateTimeUnit);
  initMetadataForClass(DayBased, 'DayBased', VOID, DateBased);
  initMetadataForClass(MonthBased, 'MonthBased', VOID, DateBased);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(DateTimeFormatException, 'DateTimeFormatException', DateTimeFormatException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(DateTimeArithmeticException, 'DateTimeArithmeticException', DateTimeArithmeticException_init_$Create$, RuntimeException);
  initMetadataForClass(AbstractDateTimeFormat, 'AbstractDateTimeFormat');
  initMetadataForClass(Padding, 'Padding', VOID, Enum);
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.cl(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.cl.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.el(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.el.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.gl(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.gl.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function chars(value) {
    return this.jl().ll(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.jl().ml().nl_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate);
  initMetadataForCompanion(Companion_6);
  function year(padding) {
    return this.gm(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.gm(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function dayOfMonth(padding) {
    return this.gm(new BasicFormatStructure(new DayDirective(padding)));
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [WithDate]);
  initMetadataForClass(Builder, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateBuilder]);
  initMetadataForClass(LocalDateFormat, 'LocalDateFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(SignedIntFieldFormatDirective, 'SignedIntFieldFormatDirective');
  initMetadataForClass(YearDirective, 'YearDirective', VOID, SignedIntFieldFormatDirective);
  initMetadataForClass(UnsignedIntFieldFormatDirective, 'UnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthDirective, 'MonthDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(DayDirective, 'DayDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForObject(DateFields, 'DateFields');
  initMetadataForClass(AppendableFormatStructure, 'AppendableFormatStructure', AppendableFormatStructure);
  initMetadataForClass(AbstractFieldSpec, 'AbstractFieldSpec');
  initMetadataForClass(GenericFieldSpec, 'GenericFieldSpec', VOID, AbstractFieldSpec);
  function getterNotNull(container) {
    var tmp0_elvis_lhs = this.go(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.qn() + ' is not set');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  initMetadataForInterface(Accessor, 'Accessor');
  initMetadataForClass(PropertyAccessor, 'PropertyAccessor', VOID, VOID, [Accessor]);
  initMetadataForClass(UnsignedFieldSpec, 'UnsignedFieldSpec', VOID, AbstractFieldSpec);
  initMetadataForClass(ConcatenatedFormatStructure, 'ConcatenatedFormatStructure');
  initMetadataForClass(CachedFormatStructure, 'CachedFormatStructure', VOID, ConcatenatedFormatStructure);
  initMetadataForInterface(NonConcatenatedFormatStructure, 'NonConcatenatedFormatStructure');
  initMetadataForClass(BasicFormatStructure, 'BasicFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ConstantFormatStructure, 'ConstantFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(SpacePaddedFormatter, 'SpacePaddedFormatter');
  initMetadataForClass(ConcatenatedFormatter, 'ConcatenatedFormatter');
  initMetadataForClass(SignedIntFormatterStructure, 'SignedIntFormatterStructure');
  initMetadataForClass(UnsignedIntFormatterStructure, 'UnsignedIntFormatterStructure');
  initMetadataForClass(ConstantStringFormatterStructure, 'ConstantStringFormatterStructure');
  initMetadataForClass(NumberConsumer, 'NumberConsumer');
  initMetadataForClass(ConstantNumberConsumer, 'ConstantNumberConsumer', VOID, NumberConsumer);
  initMetadataForObject(ExpectedInt, 'ExpectedInt');
  initMetadataForClass(TooManyDigits, 'TooManyDigits');
  initMetadataForClass(TooFewDigits, 'TooFewDigits');
  initMetadataForClass(WrongConstant, 'WrongConstant');
  initMetadataForClass(Conflicting, 'Conflicting');
  initMetadataForClass(UnsignedIntConsumer, 'UnsignedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ParseError, 'ParseError');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation');
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation');
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification');
  initMetadataForClass(DayOfWeek_0, 'DayOfWeek', VOID, Enum);
  initMetadataForCompanion(Companion_8);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(LocalDate_0, 'LocalDate', VOID, VOID, [Comparable]);
  initMetadataForClass(Month_0, 'Month', VOID, Enum);
  //endregion
  function DatePeriod_init_$Init$(years, months, days, $this) {
    years = years === VOID ? 0 : years;
    months = months === VOID ? 0 : months;
    days = days === VOID ? 0 : days;
    DatePeriod.call($this, totalMonths(years, months), days);
    return $this;
  }
  function DatePeriod_init_$Create$(years, months, days) {
    return DatePeriod_init_$Init$(years, months, days, objectCreate(protoOf(DatePeriod)));
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function DatePeriod(totalMonths, days) {
    DateTimePeriod.call(this);
    this.nj_1 = totalMonths;
    this.oj_1 = days;
  }
  protoOf(DatePeriod).pj = function () {
    return this.nj_1;
  };
  protoOf(DatePeriod).qj = function () {
    return this.oj_1;
  };
  protoOf(DatePeriod).rj = function () {
    return 0;
  };
  protoOf(DatePeriod).sj = function () {
    return 0;
  };
  protoOf(DatePeriod).tj = function () {
    return 0;
  };
  protoOf(DatePeriod).uj = function () {
    return 0;
  };
  protoOf(DatePeriod).vj = function () {
    return new Long(0, 0);
  };
  function allNonpositive($this) {
    return $this.pj() <= 0 && $this.qj() <= 0 && $this.vj().a1(new Long(0, 0)) <= 0 && (!(($this.pj() | $this.qj()) === 0) || !$this.vj().equals(new Long(0, 0)));
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function DateTimePeriod() {
  }
  protoOf(DateTimePeriod).wj = function () {
    return this.pj() / 12 | 0;
  };
  protoOf(DateTimePeriod).xj = function () {
    return this.pj() % 12 | 0;
  };
  protoOf(DateTimePeriod).rj = function () {
    return this.vj().h2(new Long(817405952, 838)).z();
  };
  protoOf(DateTimePeriod).sj = function () {
    return this.vj().i2(new Long(817405952, 838)).h2(new Long(-129542144, 13)).z();
  };
  protoOf(DateTimePeriod).tj = function () {
    var tmp0 = this.vj().i2(new Long(-129542144, 13));
    // Inline function 'kotlin.Long.div' call
    var other = 1000000000;
    return tmp0.h2(toLong(other)).z();
  };
  protoOf(DateTimePeriod).uj = function () {
    var tmp0 = this.vj();
    // Inline function 'kotlin.Long.rem' call
    var other = 1000000000;
    return tmp0.i2(toLong(other)).z();
  };
  protoOf(DateTimePeriod).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>' call
    var tmp;
    if (allNonpositive(this)) {
      this_0.p6(_Char___init__impl__6a9atx(45));
      tmp = -1;
    } else {
      tmp = 1;
    }
    var sign = tmp;
    this_0.p6(_Char___init__impl__6a9atx(80));
    if (!(this.wj() === 0)) {
      this_0.g9(imul(this.wj(), sign)).p6(_Char___init__impl__6a9atx(89));
    }
    if (!(this.xj() === 0)) {
      this_0.g9(imul(this.xj(), sign)).p6(_Char___init__impl__6a9atx(77));
    }
    if (!(this.qj() === 0)) {
      this_0.g9(imul(this.qj(), sign)).p6(_Char___init__impl__6a9atx(68));
    }
    var t = 'T';
    if (!(this.rj() === 0)) {
      // Inline function 'kotlin.also' call
      this_0.o6(t).g9(imul(this.rj(), sign)).p6(_Char___init__impl__6a9atx(72));
      // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
      t = '';
    }
    if (!(this.sj() === 0)) {
      // Inline function 'kotlin.also' call
      this_0.o6(t).g9(imul(this.sj(), sign)).p6(_Char___init__impl__6a9atx(77));
      // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
      t = '';
    }
    if (!((this.tj() | this.uj()) === 0)) {
      this_0.o6(t);
      this_0.n6(!(this.tj() === 0) ? imul(this.tj(), sign) : imul(this.uj(), sign) < 0 ? '-0' : '0');
      if (!(this.uj() === 0)) {
        var tmp_0 = this_0.p6(_Char___init__impl__6a9atx(46));
        // Inline function 'kotlin.math.absoluteValue' call
        var this_1 = this.uj();
        var tmp$ret$2 = abs(this_1);
        tmp_0.o6(padStart(tmp$ret$2.toString(), 9, _Char___init__impl__6a9atx(48)));
      }
      this_0.p6(_Char___init__impl__6a9atx(83));
    }
    if (this_0.a() === 1) {
      this_0.o6('0D');
    }
    return this_0.toString();
  };
  protoOf(DateTimePeriod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DateTimePeriod))
      return false;
    if (!(this.pj() === other.pj()))
      return false;
    if (!(this.qj() === other.qj()))
      return false;
    if (!this.vj().equals(other.vj()))
      return false;
    return true;
  };
  protoOf(DateTimePeriod).hashCode = function () {
    var result = this.pj();
    result = imul(31, result) + this.qj() | 0;
    result = imul(31, result) + this.vj().hashCode() | 0;
    return result;
  };
  function totalMonths(years, months) {
    // Inline function 'kotlin.Long.times' call
    var totalMonths = toLong(years).g2(toLong(12)).e2(toLong(months));
    var tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), totalMonths)) {
      tmp = totalMonths.z();
    } else {
      throw IllegalArgumentException_init_$Create$('The total number of months in ' + years + ' years and ' + months + ' months overflows an Int');
    }
    return tmp;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function TimeBased(nanoseconds) {
    DateTimeUnit.call(this);
    this.yj_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    if (!(this.yj_1.a1(new Long(0, 0)) > 0)) {
      // Inline function 'kotlinx.datetime.TimeBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.yj_1.toString() + ' ns.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.yj_1.i2(new Long(817405952, 838)).equals(new Long(0, 0))) {
      this.zj_1 = 'HOUR';
      this.ak_1 = this.yj_1.h2(new Long(817405952, 838));
    } else {
      if (this.yj_1.i2(new Long(-129542144, 13)).equals(new Long(0, 0))) {
        this.zj_1 = 'MINUTE';
        this.ak_1 = this.yj_1.h2(new Long(-129542144, 13));
      } else {
        var tmp1 = this.yj_1;
        // Inline function 'kotlin.Long.rem' call
        var other = 1000000000;
        if (tmp1.i2(toLong(other)).equals(new Long(0, 0))) {
          this.zj_1 = 'SECOND';
          var tmp = this;
          var tmp3 = this.yj_1;
          // Inline function 'kotlin.Long.div' call
          var other_0 = 1000000000;
          tmp.ak_1 = tmp3.h2(toLong(other_0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          if (this.yj_1.i2(toLong(1000000)).equals(new Long(0, 0))) {
            this.zj_1 = 'MILLISECOND';
            var tmp_0 = this;
            // Inline function 'kotlin.Long.div' call
            tmp_0.ak_1 = this.yj_1.h2(toLong(1000000));
          } else {
            // Inline function 'kotlin.Long.rem' call
            if (this.yj_1.i2(toLong(1000)).equals(new Long(0, 0))) {
              this.zj_1 = 'MICROSECOND';
              var tmp_1 = this;
              // Inline function 'kotlin.Long.div' call
              tmp_1.ak_1 = this.yj_1.h2(toLong(1000));
            } else {
              this.zj_1 = 'NANOSECOND';
              this.ak_1 = this.yj_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).bk = function (scalar) {
    return new TimeBased(safeMultiply(this.yj_1, toLong(scalar)));
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = this.yj_1.equals(other.yj_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return this.yj_1.z() ^ this.yj_1.m2(32).z();
  };
  protoOf(TimeBased).toString = function () {
    return this.ck(this.ak_1, this.zj_1);
  };
  function DateBased() {
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    DateBased.call(this);
    this.ek_1 = days;
    // Inline function 'kotlin.require' call
    if (!(this.ek_1 > 0)) {
      // Inline function 'kotlinx.datetime.DayBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.ek_1 + ' days.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).bk = function (scalar) {
    return new DayBased(safeMultiply_0(this.ek_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.ek_1 === other.ek_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.ek_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.ek_1 % 7 | 0) === 0 ? this.dk(this.ek_1 / 7 | 0, 'WEEK') : this.dk(this.ek_1, 'DAY');
  };
  function MonthBased(months) {
    DateBased.call(this);
    this.fk_1 = months;
    // Inline function 'kotlin.require' call
    if (!(this.fk_1 > 0)) {
      // Inline function 'kotlinx.datetime.MonthBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.fk_1 + ' months.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).bk = function (scalar) {
    return new MonthBased(safeMultiply_0(this.fk_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.fk_1 === other.fk_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.fk_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.fk_1 % 1200 | 0) === 0 ? this.dk(this.fk_1 / 1200 | 0, 'CENTURY') : (this.fk_1 % 12 | 0) === 0 ? this.dk(this.fk_1 / 12 | 0, 'YEAR') : (this.fk_1 % 3 | 0) === 0 ? this.dk(this.fk_1 / 3 | 0, 'QUARTER') : this.dk(this.fk_1, 'MONTH');
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.gk_1 = new TimeBased(new Long(1, 0));
    this.hk_1 = this.gk_1.bk(1000);
    this.ik_1 = this.hk_1.bk(1000);
    this.jk_1 = this.ik_1.bk(1000);
    this.kk_1 = this.jk_1.bk(60);
    this.lk_1 = this.kk_1.bk(60);
    this.mk_1 = new DayBased(1);
    this.nk_1 = this.mk_1.bk(7);
    this.ok_1 = new MonthBased(1);
    this.pk_1 = this.ok_1.bk(3);
    this.qk_1 = this.ok_1.bk(12);
    this.rk_1 = this.qk_1.bk(100);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function DateTimeUnit() {
    Companion_getInstance_5();
  }
  protoOf(DateTimeUnit).dk = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).ck = function (value, unit) {
    return value.equals(new Long(1, 0)) ? unit : value.toString() + '-' + unit;
  };
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.y1_1 + 1 | 0;
  }
  function DayOfWeek(isoDayNumber) {
    // Inline function 'kotlin.require' call
    if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
      // Inline function 'kotlinx.datetime.DayOfWeek.<anonymous>' call
      var message = 'Expected ISO day-of-week number in 1..7, got ' + isoDayNumber;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries().k(isoDayNumber - 1 | 0);
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_1(message, cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_1(message, cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_1);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function getIsoDateFormat() {
    return Formats_getInstance().tk();
  }
  function minus(_this__u8e3s4, period) {
    var tmp;
    if (!(period.oj_1 === -2147483648) && !(period.xj() === -2147483648)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.datetime.minus.<anonymous>' call
      var tmp$ret$1 = DatePeriod_init_$Create$(-period.wj() | 0, -period.xj() | 0, -period.oj_1 | 0);
      tmp = plus_0(_this__u8e3s4, tmp$ret$1);
    } else {
      tmp = minus_0(minus_0(minus_0(_this__u8e3s4, period.wj(), Companion_getInstance_5().qk_1), period.xj(), Companion_getInstance_5().ok_1), period.oj_1, Companion_getInstance_5().mk_1);
    }
    return tmp;
  }
  function get_number(_this__u8e3s4) {
    return _this__u8e3s4.y1_1 + 1 | 0;
  }
  function Month(number) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(1 <= number ? number <= 12 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries_0().k(number - 1 | 0);
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).xk = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.uk().bl()), input, this.wk());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ParseException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse value from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    var matched = tmp;
    try {
      return this.vk(matched);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_0 = $p;
        var message = e_0.message;
        throw DateTimeFormatException_init_$Create$_2(message == null ? "The value parsed from '" + toString(input) + "' is invalid" : '' + message + " (when parsing '" + toString(input) + "')", e_0);
      } else {
        throw $p;
      }
    }
  };
  var Padding_NONE_instance;
  var Padding_ZERO_instance;
  var Padding_SPACE_instance;
  var Padding_entriesInitialized;
  function Padding_initEntries() {
    if (Padding_entriesInitialized)
      return Unit_instance;
    Padding_entriesInitialized = true;
    Padding_NONE_instance = new Padding('NONE', 0);
    Padding_ZERO_instance = new Padding('ZERO', 1);
    Padding_SPACE_instance = new Padding('SPACE', 2);
  }
  function Padding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Padding_ZERO_getInstance() {
    Padding_initEntries();
    return Padding_ZERO_instance;
  }
  function Padding_SPACE_getInstance() {
    Padding_initEntries();
    return Padding_SPACE_instance;
  }
  function WithDate() {
  }
  function char(_this__u8e3s4, value) {
    return _this__u8e3s4.il(toString_0(value));
  }
  function AbstractDateTimeFormatBuilder() {
  }
  function get_ISO_DATE() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE$factory();
    return tmp0.r1();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE_BASIC$factory();
    return tmp0.r1();
  }
  var ISO_DATE_BASIC$delegate;
  function get_emptyIncompleteLocalDate() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    return emptyIncompleteLocalDate;
  }
  var emptyIncompleteLocalDate;
  function IncompleteLocalDate(year, monthNumber, dayOfMonth, isoDayOfWeek) {
    year = year === VOID ? null : year;
    monthNumber = monthNumber === VOID ? null : monthNumber;
    dayOfMonth = dayOfMonth === VOID ? null : dayOfMonth;
    isoDayOfWeek = isoDayOfWeek === VOID ? null : isoDayOfWeek;
    this.ol_1 = year;
    this.pl_1 = monthNumber;
    this.ql_1 = dayOfMonth;
    this.rl_1 = isoDayOfWeek;
  }
  protoOf(IncompleteLocalDate).sl = function (_set____db54di) {
    this.ol_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).tl = function () {
    return this.ol_1;
  };
  protoOf(IncompleteLocalDate).ul = function (_set____db54di) {
    this.pl_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).vl = function () {
    return this.pl_1;
  };
  protoOf(IncompleteLocalDate).wl = function (_set____db54di) {
    this.ql_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).xl = function () {
    return this.ql_1;
  };
  protoOf(IncompleteLocalDate).yl = function (_set____db54di) {
    this.rl_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).zl = function () {
    return this.rl_1;
  };
  protoOf(IncompleteLocalDate).am = function () {
    var date = LocalDate_init_$Create$(requireParsedField(this.ol_1, 'year'), requireParsedField(this.pl_1, 'monthNumber'), requireParsedField(this.ql_1, 'dayOfMonth'));
    var tmp0_safe_receiver = this.rl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalDate.toLocalDate.<anonymous>' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.cm()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.cm().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).dm = function () {
    return new IncompleteLocalDate(this.ol_1, this.pl_1, this.ql_1, this.rl_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteLocalDate) {
      tmp_2 = this.ol_1 == other.ol_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.pl_1 == other.pl_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.ql_1 == other.ql_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.rl_1 == other.rl_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.ol_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.pl_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.ql_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.rl_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    return tmp_1 + imul(tmp$ret$3, 31) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.ol_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.pl_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.ql_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.rl_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion_6() {
  }
  protoOf(Companion_6).em = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.ml());
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Builder(actualBuilder) {
    this.fm_1 = actualBuilder;
  }
  protoOf(Builder).jl = function () {
    return this.fm_1;
  };
  protoOf(Builder).gm = function (structure) {
    return this.fm_1.ll(structure);
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.hm_1 = actualFormat;
  }
  protoOf(LocalDateFormat).uk = function () {
    return this.hm_1;
  };
  protoOf(LocalDateFormat).im = function (intermediate) {
    return intermediate.am();
  };
  protoOf(LocalDateFormat).vk = function (intermediate) {
    return this.im(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).wk = function () {
    return get_emptyIncompleteLocalDate();
  };
  function requireParsedField(field, name) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    if (field == null) {
      throw DateTimeFormatException_init_$Create$_0('Can not create a ' + name + ' from the given input: the field ' + name + ' is missing');
    }
    return field;
  }
  function AbstractWithDateBuilder() {
  }
  function YearDirective(padding, isYearOfEra) {
    isYearOfEra = isYearOfEra === VOID ? false : isYearOfEra;
    var tmp = DateFields_getInstance().jm_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.sm_1 = padding;
    this.tm_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.sm_1.equals(other.sm_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.tm_1 === other.tm_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.sm_1.hashCode(), 31) + getBooleanHashCode(this.tm_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().km_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.en_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.en_1.equals(other.en_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.en_1.hashCode();
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().lm_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.nn_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.nn_1.equals(other.nn_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.nn_1.hashCode();
  };
  function DateFields() {
    DateFields_instance = this;
    this.jm_1 = new GenericFieldSpec(new PropertyAccessor(year$factory()));
    this.km_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory()), 1, 12);
    this.lm_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory()), 1, 31);
    this.mm_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
  }
  var DateFields_instance;
  function DateFields_getInstance() {
    if (DateFields_instance == null)
      new DateFields();
    return DateFields_instance;
  }
  function ISO_DATE$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_6;
    return tmp.em(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.dl();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.fl();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.hl();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_6;
    return tmp.em(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.dl();
    $this$build.fl();
    $this$build.hl();
    return Unit_instance;
  }
  function ISO_DATE$factory() {
    return getPropertyCallableRef('ISO_DATE', 0, KProperty0, function () {
      return get_ISO_DATE();
    }, null);
  }
  function ISO_DATE_BASIC$factory() {
    return getPropertyCallableRef('ISO_DATE_BASIC', 0, KProperty0, function () {
      return get_ISO_DATE_BASIC();
    }, null);
  }
  function year$factory() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.tl();
    }, function (receiver, value) {
      return receiver.sl(value);
    });
  }
  function monthNumber$factory() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.vl();
    }, function (receiver, value) {
      return receiver.ul(value);
    });
  }
  function dayOfMonth$factory() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.xl();
    }, function (receiver, value) {
      return receiver.wl(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.zl();
    }, function (receiver, value) {
      return receiver.yl(value);
    });
  }
  var properties_initialized_LocalDateFormat_kt_fmnlhc;
  function _init_properties_LocalDateFormat_kt__k1uk9u() {
    if (!properties_initialized_LocalDateFormat_kt_fmnlhc) {
      properties_initialized_LocalDateFormat_kt_fmnlhc = true;
      ISO_DATE$delegate = lazy(ISO_DATE$delegate$lambda);
      ISO_DATE_BASIC$delegate = lazy(ISO_DATE_BASIC$delegate$lambda);
      emptyIncompleteLocalDate = new IncompleteLocalDate();
    }
  }
  function AppendableFormatStructure() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.kl_1 = ArrayList_init_$Create$();
  }
  protoOf(AppendableFormatStructure).ml = function () {
    return new ConcatenatedFormatStructure(this.kl_1);
  };
  protoOf(AppendableFormatStructure).ll = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.kl_1.e(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.nl_1.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'kotlinx.datetime.internal.format.AppendableFormatStructure.add.<anonymous>' call
          this.kl_1.e(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.on(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.um_1 = field;
    this.vm_1 = minDigits;
    this.wm_1 = maxDigits;
    this.xm_1 = spacePadding;
    this.ym_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.vm_1 == null || this.vm_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.vm_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.wm_1 == null || this.vm_1 == null || this.wm_1 >= this.vm_1)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.wm_1 + ') is less than the minimum number of digits (' + this.vm_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).zm = function () {
    var tmp = Accessor$getterNotNull$ref(this.um_1.pn());
    var tmp0_elvis_lhs = this.vm_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.ym_1);
    return !(this.xm_1 == null) ? new SpacePaddedFormatter(formatter, this.xm_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).bl = function () {
    return SignedIntParser(this.vm_1, this.wm_1, this.xm_1, this.um_1.pn(), this.um_1.qn(), this.ym_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.on(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.fn_1 = field;
    this.gn_1 = minDigits;
    this.hn_1 = spacePadding;
    this.in_1 = this.fn_1.xn_1;
    // Inline function 'kotlin.require' call
    if (!(this.gn_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.gn_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.in_1 >= this.gn_1)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.in_1 + ') is less than the minimum number of digits (' + this.gn_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.hn_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.hn_1 > this.gn_1)) {
        // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
        var message_1 = 'The space padding (' + this.hn_1 + ') should be more than the minimum number of digits (' + this.gn_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).zm = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.fn_1.rn_1), this.gn_1);
    return !(this.hn_1 == null) ? new SpacePaddedFormatter(formatter, this.hn_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).bl = function () {
    return spaceAndZeroPaddedUnsignedInt(this.gn_1, this.in_1, this.hn_1, this.fn_1.rn_1, this.fn_1.un_1);
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.qn() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.yn_1 = accessor;
    this.zn_1 = name;
    this.ao_1 = defaultValue;
    this.bo_1 = sign;
  }
  protoOf(GenericFieldSpec).pn = function () {
    return this.yn_1;
  };
  protoOf(GenericFieldSpec).qn = function () {
    return this.zn_1;
  };
  protoOf(GenericFieldSpec).co = function () {
    return this.ao_1;
  };
  function PropertyAccessor(property) {
    this.do_1 = property;
  }
  protoOf(PropertyAccessor).qn = function () {
    return this.do_1.callableName;
  };
  protoOf(PropertyAccessor).eo = function (container, newValue) {
    var oldValue = this.do_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.do_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).fo = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.eo(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).go = function (container) {
    return this.do_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.qn() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.rn_1 = accessor;
    this.sn_1 = minValue;
    this.tn_1 = maxValue;
    this.un_1 = name;
    this.vn_1 = defaultValue;
    this.wn_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.tn_1 < 10) {
      tmp_0 = 1;
    } else if (this.tn_1 < 100) {
      tmp_0 = 2;
    } else if (this.tn_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.tn_1 + ' is too large');
    }
    tmp.xn_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).pn = function () {
    return this.rn_1;
  };
  protoOf(UnsignedFieldSpec).qn = function () {
    return this.un_1;
  };
  protoOf(UnsignedFieldSpec).co = function () {
    return this.vn_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.qn() + ' (default value is ' + toString_1(this.co()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.zk_1 = protoOf(ConcatenatedFormatStructure).zm.call(this);
    this.al_1 = protoOf(ConcatenatedFormatStructure).bl.call(this);
  }
  protoOf(CachedFormatStructure).zm = function () {
    return this.zk_1;
  };
  protoOf(CachedFormatStructure).bl = function () {
    return this.al_1;
  };
  function BasicFormatStructure(directive) {
    this.ho_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.ho_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.ho_1, other.ho_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.ho_1);
  };
  protoOf(BasicFormatStructure).bl = function () {
    return this.ho_1.bl();
  };
  protoOf(BasicFormatStructure).zm = function () {
    return this.ho_1.zm();
  };
  function ConstantFormatStructure(string) {
    this.io_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.io_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.io_1 === other.io_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.io_1);
  };
  protoOf(ConstantFormatStructure).bl = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.io_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$();
      // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>' call
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.io_1, 0))) {
        var tmp0 = this.io_1;
        var tmp$ret$4;
        $l$block: {
          // Inline function 'kotlin.text.takeWhile' call
          var inductionVariable = 0;
          var last = tmp0.length;
          if (inductionVariable < last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
              var it = charSequenceGet(tmp0, index);
              if (!isAsciiDigit(it)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$4 = tmp0.substring(0, index);
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$4 = tmp0;
        }
        this_1.e(new NumberSpanParserOperation(listOf(new ConstantNumberConsumer(tmp$ret$4))));
        var tmp2 = this.io_1;
        var tmp$ret$8;
        $l$block_0: {
          // Inline function 'kotlin.text.dropWhile' call
          var inductionVariable_0 = 0;
          var last_0 = charSequenceLength(tmp2) - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
              var it_0 = charSequenceGet(tmp2, index_0);
              if (!isAsciiDigit(it_0)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$8 = tmp2.substring(index_0);
                break $l$block_0;
              }
            }
             while (inductionVariable_0 <= last_0);
          tmp$ret$8 = '';
        }
        tmp_0 = tmp$ret$8;
      } else {
        tmp_0 = this.io_1;
      }
      var suffix = tmp_0;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(suffix) > 0) {
        if (isAsciiDigit(charSequenceGet(suffix, suffix.length - 1 | 0))) {
          var tmp$ret$13;
          $l$block_1: {
            // Inline function 'kotlin.text.dropLastWhile' call
            var inductionVariable_1 = get_lastIndex(suffix);
            if (0 <= inductionVariable_1)
              do {
                var index_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + -1 | 0;
                // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
                var it_1 = charSequenceGet(suffix, index_1);
                if (!isAsciiDigit(it_1)) {
                  // Inline function 'kotlin.text.substring' call
                  var endIndex = index_1 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$13 = suffix.substring(0, endIndex);
                  break $l$block_1;
                }
              }
               while (0 <= inductionVariable_1);
            tmp$ret$13 = '';
          }
          this_1.e(new PlainStringParserOperation(tmp$ret$13));
          var tmp$ret$17;
          $l$block_2: {
            // Inline function 'kotlin.text.takeLastWhile' call
            var inductionVariable_2 = get_lastIndex(suffix);
            if (0 <= inductionVariable_2)
              do {
                var index_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
                var it_2 = charSequenceGet(suffix, index_2);
                if (!isAsciiDigit(it_2)) {
                  // Inline function 'kotlin.text.substring' call
                  var startIndex = index_2 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$17 = suffix.substring(startIndex);
                  break $l$block_2;
                }
              }
               while (0 <= inductionVariable_2);
            tmp$ret$17 = suffix;
          }
          this_1.e(new NumberSpanParserOperation(listOf(new ConstantNumberConsumer(tmp$ret$17))));
        } else {
          this_1.e(new PlainStringParserOperation(suffix));
        }
      }
      tmp = this_1.f4();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).zm = function () {
    return new ConstantStringFormatterStructure(this.io_1);
  };
  function ConcatenatedFormatStructure(formats) {
    this.nl_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.nl_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.nl_1, other.nl_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.nl_1);
  };
  protoOf(ConcatenatedFormatStructure).bl = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.nl_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.parser.<anonymous>' call
      var tmp$ret$0 = item.bl();
      destination.e(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).zm = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.nl_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.formatter.<anonymous>' call
      var tmp$ret$0 = item.zm();
      destination.e(tmp$ret$0);
    }
    var formatters = destination;
    var tmp;
    if (formatters.l() === 1) {
      tmp = single(formatters);
    } else {
      tmp = new ConcatenatedFormatter(formatters);
    }
    return tmp;
  };
  function NonConcatenatedFormatStructure() {
  }
  function SpacePaddedFormatter(formatter, padding) {
    this.jo_1 = formatter;
    this.ko_1 = padding;
  }
  function ConcatenatedFormatter(formatters) {
    this.lo_1 = formatters;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.mo_1 = number;
    this.no_1 = zeroPadding;
    this.oo_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.no_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.no_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.no_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.no_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.po_1 = number;
    this.qo_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.qo_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.qo_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.qo_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.qo_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function ConstantStringFormatterStructure(string) {
    this.ro_1 = string;
  }
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.uo_1 = expected;
  }
  protoOf(ConstantNumberConsumer).vo = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.uo_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.uo_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.wo_1 = length;
    this.xo_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.wo_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).yo = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.zo_1 = maxDigits;
  }
  protoOf(TooManyDigits).yo = function () {
    return 'expected at most ' + this.zo_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.ap_1 = minDigits;
  }
  protoOf(TooFewDigits).yo = function () {
    return 'expected at least ' + this.ap_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.bp_1 = expected;
  }
  protoOf(WrongConstant).yo = function () {
    return "expected '" + this.bp_1 + "'";
  };
  function Conflicting(conflicting) {
    this.cp_1 = conflicting;
  }
  protoOf(Conflicting).yo = function () {
    return "attempted to overwrite the existing value '" + toString(this.cp_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.fo(receiver, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var conflictingValue = tmp;
    return new Conflicting(conflictingValue);
  }
  function UnsignedIntConsumer(minLength, maxLength, setter, name, multiplyByMinus1) {
    multiplyByMinus1 = multiplyByMinus1 === VOID ? false : multiplyByMinus1;
    NumberConsumer.call(this, minLength == maxLength ? minLength : null, name);
    this.fp_1 = minLength;
    this.gp_1 = maxLength;
    this.hp_1 = setter;
    this.ip_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).ra(this.a()))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.UnsignedIntConsumer.<anonymous>' call
      var message = 'Invalid length for field ' + this.xo_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).vo = function (storage, input, start, end) {
    var tmp;
    if (!(this.gp_1 == null) && (end - start | 0) > this.gp_1) {
      tmp = new TooManyDigits(this.gp_1);
    } else if (!(this.fp_1 == null) && (end - start | 0) < this.fp_1) {
      tmp = new TooFewDigits(this.fp_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.hp_1, storage, this.ip_1 ? -result | 0 : result);
    }
    return tmp;
  };
  function parseAsciiIntOrNull(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
        if (result < 0)
          return null;
      }
       while (inductionVariable < end);
    return result;
  }
  function ParseError(position, message) {
    this.jp_1 = position;
    this.kp_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_7() {
  }
  protoOf(Companion_7).lp = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_7).mp = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function _Parser___init__impl__gdyfby(commands) {
    return commands;
  }
  function _get_commands__a20n1($this) {
    return $this;
  }
  function Parser__match_impl_nzt83d($this, input, initialContainer, startIndex) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$();
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse' call
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.np_1.dm();
      var inputPosition = state.pp_1;
      var parserStructure = state.op_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>' call
        var inductionVariable = 0;
        var last = parserStructure.rp_1.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.rp_1.k(ix).tp(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>.<anonymous>' call
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>.<anonymous>' call
                // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
                var it = _ParseResult___get_value__impl__86mnxf(this_0);
                errors.e(it);
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.sp_1.j()) {
          if (false || inputPosition === charSequenceLength(input)) {
            // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
            return output;
          } else {
            var tmp_0 = inputPosition;
            // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
            var it_0 = new ParseError(tmp_0, Parser$match$lambda);
            errors.e(it_0);
          }
        } else {
          var inductionVariable_0 = parserStructure.sp_1.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.e(new ParserState(output, parserStructure.sp_1.k(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    // Inline function 'kotlin.collections.sortByDescending' call
    if (errors.l() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_1 = Parser$match$lambda_0;
      var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp_1);
      sortWith(errors, tmp$ret$4);
    }
    throw new ParseException(errors);
  }
  function Parser__match$default_impl_x2xlti($this, input, initialContainer, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    var tmp;
    if ($super === VOID) {
      tmp = Parser__match_impl_nzt83d($this, input, initialContainer, startIndex);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).up.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.np_1 = output;
    this.op_1 = parserStructure;
    this.pp_1 = inputPosition;
  }
  function Parser__toString_impl_x33iea($this) {
    return 'Parser(commands=' + $this.toString() + ')';
  }
  function Parser__hashCode_impl_bbxllf($this) {
    return hashCode($this);
  }
  function Parser__equals_impl_djxokv($this, other) {
    if (!(other instanceof Parser))
      return false;
    var tmp0_other_with_cast = other instanceof Parser ? other.qp_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.vp_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ia = function (a, b) {
    return this.vp_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ia(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).p2 = function () {
    return this.vp_1;
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
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp = b.jp_1;
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp$ret$1 = a.jp_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.qp_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.qp_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.qp_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.qp_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.rp_1 = operations;
    this.sp_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.rp_1, ', ') + '(' + joinToString(this.sp_1, ';') + ')';
  };
  function ParseException(errors) {
    Exception_init_$Init$(formatError(errors), this);
    captureStack(this, ParseException);
  }
  function concat(_this__u8e3s4) {
    // Inline function 'kotlin.collections.foldRight' call
    var accumulator = new ParserStructure(emptyList(), emptyList());
    if (!_this__u8e3s4.j()) {
      var iterator = _this__u8e3s4.q(_this__u8e3s4.l());
      while (iterator.l3()) {
        var tmp2 = iterator.m3();
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.<anonymous>' call
        var acc = accumulator;
        accumulator = concat$append(tmp2, acc);
      }
    }
    var naiveParser = accumulator;
    return concat$simplify(naiveParser, emptyList());
  }
  function formatError(errors) {
    if (errors.l() === 1) {
      return 'Position ' + errors.k(0).jp_1 + ': ' + errors.k(0).kp_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$_0(imul(averageMessageLength, errors.l()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.sp_1.j()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.rp_1, other.rp_1), other.sp_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.sp_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.append.<anonymous>' call
        var tmp$ret$0 = concat$append(item, other);
        destination.e(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.rp_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.rp_1.g();
    while (tmp0_iterator.h()) {
      var op = tmp0_iterator.i();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.p(op.wp_1);
        } else {
          currentNumberSpan = toMutableList(op.wp_1);
        }
      } else {
        if (op instanceof UnconditionalModification) {
          unconditionalModificationsForTails.e(op);
        } else {
          if (!(currentNumberSpan == null)) {
            newOperations.e(new NumberSpanParserOperation(currentNumberSpan));
            currentNumberSpan = null;
          }
          newOperations.e(op);
        }
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _this__u8e3s4.sp_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.rp_1.j()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.sp_1;
        var tmp_0;
        if (this_0.j()) {
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>.<anonymous>' call
          tmp_0 = listOf(simplified);
        } else {
          tmp_0 = this_0;
        }
        tmp = tmp_0;
      } else {
        tmp = listOf(simplified);
      }
      var list = tmp;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (destination.j()) {
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      tmp_1 = listOf(new ParserStructure(unconditionalModificationsForTails, emptyList()));
    } else {
      tmp_1 = destination;
    }
    var mergedTails = tmp_1;
    var tmp_2;
    if (currentNumberSpan == null) {
      tmp_2 = new ParserStructure(newOperations, mergedTails);
    } else {
      var tmp$ret$8;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(mergedTails, Collection)) {
          tmp_3 = mergedTails.j();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = mergedTails.g();
        while (_iterator__ex2g4s_0.h()) {
          var element_0 = _iterator__ex2g4s_0.i();
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
          var tmp0_safe_receiver = firstOrNull(element_0.rp_1);
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>.<anonymous>' call
            tmp_4 = tmp0_safe_receiver instanceof NumberSpanParserOperation;
          }
          if (tmp_4 === true) {
            tmp$ret$8 = false;
            break $l$block_0;
          }
        }
        tmp$ret$8 = true;
      }
      if (tmp$ret$8) {
        newOperations.e(new NumberSpanParserOperation(currentNumberSpan));
        tmp_2 = new ParserStructure(newOperations, mergedTails);
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(mergedTails, 10));
        var _iterator__ex2g4s_1 = mergedTails.g();
        while (_iterator__ex2g4s_1.h()) {
          var item = _iterator__ex2g4s_1.i();
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
          var firstOperation = firstOrNull(item.rp_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.wp_1))), drop(item.rp_1, 1)), item.sp_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf(new NumberSpanParserOperation(currentNumberSpan)), item.sp_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf(new NumberSpanParserOperation(currentNumberSpan)), item.rp_1), item.sp_1);
            }
          }
          var tmp$ret$12 = tmp_5;
          destination_0.e(tmp$ret$12);
        }
        var newTails = destination_0;
        tmp_2 = new ParserStructure(newOperations, newTails);
      }
    }
    return tmp_2;
  }
  function formatError$lambda(it) {
    return 'position ' + it.jp_1 + ": '" + it.kp_1() + "'";
  }
  function SignedIntParser(minDigits, maxDigits, spacePadding, setter, name, plusOnExceedsWidth) {
    var parsers = mutableListOf([spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, true)]);
    if (!(plusOnExceedsWidth == null)) {
      parsers.e(spaceAndZeroPaddedUnsignedInt(minDigits, plusOnExceedsWidth, spacePadding, setter, name));
      parsers.e(new ParserStructure(listOf_0([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf(new UnsignedIntConsumer(plusOnExceedsWidth + 1 | 0, maxDigits, setter, name, false)))]), emptyList()));
    } else {
      parsers.e(spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name));
    }
    return new ParserStructure(emptyList(), parsers);
  }
  function spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, withMinus) {
    withMinus = withMinus === VOID ? false : withMinus;
    var minNumberLength = (minDigits == null ? 1 : minDigits) + (withMinus ? 1 : 0) | 0;
    var tmp;
    if (maxDigits == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.internal.format.parser.spaceAndZeroPaddedUnsignedInt.<anonymous>' call
      tmp = withMinus ? maxDigits + 1 | 0 : maxDigits;
    }
    var tmp2_elvis_lhs = tmp;
    var maxNumberLength = tmp2_elvis_lhs == null ? 2147483647 : tmp2_elvis_lhs;
    var spacePadding_0 = spacePadding == null ? 0 : spacePadding;
    // Inline function 'kotlin.comparisons.minOf' call
    var maxPaddedNumberLength = Math.min(maxNumberLength, spacePadding_0);
    if (minNumberLength >= maxPaddedNumberLength)
      return spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, maxNumberLength);
    var accumulated = spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, minNumberLength);
    var inductionVariable = minNumberLength;
    if (inductionVariable < maxPaddedNumberLength)
      do {
        var accumulatedWidth = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        accumulated = new ParserStructure(emptyList(), listOf_0([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, accumulatedWidth + 1 | 0, accumulatedWidth + 1 | 0), concat(listOf_0([new ParserStructure(listOf(new PlainStringParserOperation(' ')), emptyList()), accumulated]))]));
      }
       while (inductionVariable < maxPaddedNumberLength);
    var tmp_0;
    if (spacePadding_0 > maxNumberLength) {
      var prepadding = new PlainStringParserOperation(repeat(' ', spacePadding_0 - maxNumberLength | 0));
      tmp_0 = concat(listOf_0([new ParserStructure(listOf(prepadding), emptyList()), accumulated]));
    } else if (spacePadding_0 === maxNumberLength) {
      tmp_0 = accumulated;
    } else {
      var r = new ParserStructure(emptyList(), listOf_0([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, spacePadding_0 + 1 | 0, maxNumberLength), accumulated]));
      tmp_0 = r;
    }
    return tmp_0;
  }
  function _get_whatThisExpects__4pg11j($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.wp_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<get-whatThisExpects>.<anonymous>' call
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.xo_1);
      destination.e(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.yp_1) {
      tmp = 'a number with at least ' + $this.xp_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.xp_1 + ' digits: ' + toString(consumerLengths);
    }
    return tmp;
  }
  function NumberSpanParserOperation$consume$lambda(this$0) {
    return function () {
      return 'Unexpected end of input: yet to parse ' + _get_whatThisExpects__4pg11j(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_0($digitsInRow, this$0) {
    return function () {
      return 'Only found ' + $digitsInRow._v + ' digits in a row, but need to parse ' + _get_whatThisExpects__4pg11j(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_1($numberString, this$0, $i, $error) {
    return function () {
      return "Can not interpret the string '" + $numberString + "' as " + this$0.wp_1.k($i).xo_1 + ': ' + $error.yo();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.wp_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.wp_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp_0 = sum;
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.minLength.<anonymous>' call
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.xp_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.wp_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0, Collection)) {
        tmp_2 = tmp0.j();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.isFlexible.<anonymous>' call
        if (element_0.a() == null) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    tmp_1.yp_1 = tmp$ret$2;
    var tmp0_0 = this.wp_1;
    var tmp$ret$4;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var tmp_3;
      if (isInterface(tmp0_0, Collection)) {
        tmp_3 = tmp0_0.j();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$4 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s_1 = tmp0_0.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_1 = _iterator__ex2g4s_1.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
        var tmp0_elvis_lhs_0 = element_1.a();
        if (!((tmp0_elvis_lhs_0 == null ? 2147483647 : tmp0_elvis_lhs_0) > 0)) {
          tmp$ret$4 = false;
          break $l$block_2;
        }
      }
      tmp$ret$4 = true;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!tmp$ret$4) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp3 = this.wp_1;
    var tmp$ret$7;
    $l$block_3: {
      // Inline function 'kotlin.collections.count' call
      var tmp_4;
      if (isInterface(tmp3, Collection)) {
        tmp_4 = tmp3.j();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$7 = 0;
        break $l$block_3;
      }
      var count = 0;
      var _iterator__ex2g4s_2 = tmp3.g();
      while (_iterator__ex2g4s_2.h()) {
        var element_2 = _iterator__ex2g4s_2.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
        if (element_2.a() == null) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$7 = count;
    }
    // Inline function 'kotlin.require' call
    if (!(tmp$ret$7 <= 1)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      var tmp0_1 = this.wp_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s_3 = tmp0_1.g();
      while (_iterator__ex2g4s_3.h()) {
        var element_3 = _iterator__ex2g4s_3.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>.<anonymous>' call
        if (element_3.a() == null) {
          destination.e(element_3);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
      var _iterator__ex2g4s_4 = destination.g();
      while (_iterator__ex2g4s_4.h()) {
        var item = _iterator__ex2g4s_4.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>.<anonymous>' call
        var tmp$ret$12 = item.xo_1;
        destination_0.e(tmp$ret$12);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).tp = function (storage, input, startIndex) {
    if ((startIndex + this.xp_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_7;
      return tmp.mp(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.xp_1) {
      var tmp_0 = Companion_instance_7;
      return tmp_0.mp(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.wp_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.wp_1.k(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.xp_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.wp_1.k(i).vo(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_instance_7;
          var tmp_2 = index;
          return tmp_1.mp(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_7.lp(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.zp_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.zp_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.zp_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.zp_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.zp_1, 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_0 = "String '" + this.zp_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.zp_1, this.zp_1.length - 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_1 = "String '" + this.zp_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).tp = function (storage, input, startIndex) {
    if ((startIndex + this.zp_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_7;
      return tmp.mp(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.zp_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.zp_1, i))) {
          var tmp_0 = Companion_instance_7;
          return tmp_0.mp(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_7.lp(startIndex + this.zp_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.zp_1 + "'";
  };
  function UnconditionalModification() {
  }
  function spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths($withMinus, $setter, $name, minNumberLength, maxNumberLength) {
    // Inline function 'kotlin.check' call
    if (!(maxNumberLength >= (1 + ($withMinus ? 1 : 0) | 0))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlinx.datetime.internal.format.parser.spaceAndZeroPaddedUnsignedInt.numberOfRequiredLengths.<anonymous>' call
    if ($withMinus) {
      this_0.e(new PlainStringParserOperation('-'));
    }
    this_0.e(new NumberSpanParserOperation(listOf(new UnsignedIntConsumer(minNumberLength - ($withMinus ? 1 : 0) | 0, maxNumberLength - ($withMinus ? 1 : 0) | 0, $setter, $name, $withMinus))));
    var tmp$ret$2 = this_0.f4();
    return new ParserStructure(tmp$ret$2, emptyList());
  }
  function isAsciiDigit(_this__u8e3s4) {
    return _Char___init__impl__6a9atx(48) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(57) : false;
  }
  function asciiDigitToInt(_this__u8e3s4) {
    return Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(48));
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_instance;
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  var $ENTRIES;
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toDayOfWeek(_this__u8e3s4) {
    return DayOfWeek(_this__u8e3s4.value());
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeParseException');
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function isJodaArithmeticException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'ArithmeticException');
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.aq_1 = new LocalDate_0(LocalDate.MIN);
    this.bq_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_8).cq = function (input, format) {
    var tmp;
    if (format === Formats_getInstance().tk()) {
      var tmp_0;
      try {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.Companion.parse.stub_for_inlining' call
        var p0 = LocalDate.parse(toString(input));
        tmp_0 = new LocalDate_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.xk(input);
    }
    return tmp;
  };
  protoOf(Companion_8).dq = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.cq(input, format) : $super.cq.call(this, input, format);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Formats() {
    Formats_instance = this;
    this.sk_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats).tk = function () {
    return get_ISO_DATE();
  };
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalDate.<init>.<anonymous>' call
      tmp = LocalDate.of(year, monthNumber, dayOfMonth);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDate_0.call($this, tmp);
    return $this;
  }
  function LocalDate_init_$Create$(year, monthNumber, dayOfMonth) {
    return LocalDate_init_$Init$(year, monthNumber, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_init_$Init$_0(year, month, dayOfMonth, $this) {
    LocalDate_init_$Init$(year, get_number(month), dayOfMonth, $this);
    return $this;
  }
  function LocalDate_init_$Create$_0(year, month, dayOfMonth) {
    return LocalDate_init_$Init$_0(year, month, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_0(value) {
    Companion_getInstance_8();
    this.bm_1 = value;
  }
  protoOf(LocalDate_0).tl = function () {
    return this.bm_1.year();
  };
  protoOf(LocalDate_0).eq = function () {
    return toMonth(this.bm_1.month());
  };
  protoOf(LocalDate_0).cm = function () {
    return toDayOfWeek(this.bm_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.bm_1 === other.bm_1 || this.bm_1.equals(other.bm_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.bm_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.bm_1.toString();
  };
  protoOf(LocalDate_0).fq = function (other) {
    return this.bm_1.compareTo(other.bm_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.fq(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  function daysUntil(_this__u8e3s4, other) {
    return numberToInt(_this__u8e3s4.bm_1.until(other.bm_1, ChronoUnit.DAYS));
  }
  function plus_0(_this__u8e3s4, period) {
    var tmp;
    try {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.datetime.plus.<anonymous>' call
      // Inline function 'kotlin.run' call
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      var $this$run = _this__u8e3s4.bm_1;
      var tmp_0;
      if (!(period.nj_1 === 0)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>.<anonymous>' call
        tmp_0 = $this$run.plusMonths(period.nj_1);
      } else {
        tmp_0 = $this$run;
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      var $this$run_0 = tmp_0;
      var tmp_1;
      if (!(period.oj_1 === 0)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>.<anonymous>' call
        tmp_1 = $this$run_0.plusDays(period.oj_1);
      } else {
        tmp_1 = $this$run_0;
      }
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.plus.stub_for_inlining' call
      var p0 = tmp_1;
      tmp = new LocalDate_0(p0);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e) || isJodaArithmeticException(e))
          throw DateTimeArithmeticException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function minus_0(_this__u8e3s4, value, unit) {
    return plusNumber(_this__u8e3s4, -value | 0, unit);
  }
  function plusNumber(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      var tmp_0;
      if (unit instanceof DayBased) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.plusNumber.<anonymous>' call
        tmp_0 = _this__u8e3s4.bm_1.plusDays(numberToInt(numberToDouble(value) * unit.ek_1));
      } else {
        if (unit instanceof MonthBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          // Inline function 'kotlinx.datetime.plusNumber.<anonymous>' call
          tmp_0 = _this__u8e3s4.bm_1.plusMonths(numberToInt(numberToDouble(value) * unit.fk_1));
        } else {
          noWhenBranchMatchedException();
        }
      }
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.plusNumber.stub_for_inlining' call
      var p0 = tmp_0;
      tmp = new LocalDate_0(p0);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e) && !isJodaArithmeticException(e))
          throw e;
        throw DateTimeArithmeticException_init_$Create$_1('The result of adding ' + toString(value) + ' of ' + toString(unit) + ' to ' + _this__u8e3s4.toString() + ' is out of LocalDate range.', e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month_0('JANUARY', 0);
    Month_FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month_MARCH_instance = new Month_0('MARCH', 2);
    Month_APRIL_instance = new Month_0('APRIL', 3);
    Month_MAY_instance = new Month_0('MAY', 4);
    Month_JUNE_instance = new Month_0('JUNE', 5);
    Month_JULY_instance = new Month_0('JULY', 6);
    Month_AUGUST_instance = new Month_0('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month_0('DECEMBER', 11);
  }
  var $ENTRIES_0;
  function Month_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toMonth(_this__u8e3s4) {
    return Month(_this__u8e3s4.value());
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function safeMultiply(a, b) {
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.j2();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.g2(b);
    if (!total.h2(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeMultiply_0(a, b) {
    // Inline function 'kotlin.Long.times' call
    var result = toLong(a).g2(toLong(b));
    if (result.a1(new Long(2147483647, 0)) > 0 || result.a1(new Long(-2147483648, -1)) < 0)
      throw ArithmeticException_init_$Create$('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.z();
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: post-declaration
  protoOf(Builder).il = chars;
  protoOf(Builder).ml = build;
  protoOf(Builder).cl = year;
  protoOf(Builder).dl = year$default;
  protoOf(Builder).el = monthNumber;
  protoOf(Builder).fl = monthNumber$default;
  protoOf(Builder).gl = dayOfMonth;
  protoOf(Builder).hl = dayOfMonth$default;
  protoOf(PropertyAccessor).on = getterNotNull;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_6 = new Companion_6();
  ExpectedInt_instance = new ExpectedInt();
  Companion_instance_7 = new Companion_7();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DayOfWeek_FRIDAY_getInstance;
  _.$_$.b = DayOfWeek_MONDAY_getInstance;
  _.$_$.c = DayOfWeek_SATURDAY_getInstance;
  _.$_$.d = DayOfWeek_SUNDAY_getInstance;
  _.$_$.e = DayOfWeek_THURSDAY_getInstance;
  _.$_$.f = DayOfWeek_TUESDAY_getInstance;
  _.$_$.g = DayOfWeek_WEDNESDAY_getInstance;
  _.$_$.h = DatePeriod_init_$Create$;
  _.$_$.i = LocalDate_init_$Create$_0;
  _.$_$.j = Companion_getInstance_8;
  _.$_$.k = daysUntil;
  _.$_$.l = get_isoDayNumber;
  _.$_$.m = minus;
  _.$_$.n = plus_0;
  //endregion
  return _;
}));

