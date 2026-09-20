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
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var ChronoUnit = $module$_js_joda_core_gcv2k.ChronoUnit;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var VOID = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.c5;
  var objectCreate = kotlin_kotlin.$_$.b5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n4;
  var Long = kotlin_kotlin.$_$.v6;
  var initMetadataForClass = kotlin_kotlin.$_$.m4;
  var toLong = kotlin_kotlin.$_$.e5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h1;
  var Unit_instance = kotlin_kotlin.$_$.r1;
  var abs = kotlin_kotlin.$_$.g5;
  var padStart = kotlin_kotlin.$_$.z5;
  var numberRangeToNumber = kotlin_kotlin.$_$.w4;
  var THROW_CCE = kotlin_kotlin.$_$.x6;
  var ClosedRange = kotlin_kotlin.$_$.h5;
  var isInterface = kotlin_kotlin.$_$.u4;
  var contains = kotlin_kotlin.$_$.k5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x;
  var toString = kotlin_kotlin.$_$.f5;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.v;
  var captureStack = kotlin_kotlin.$_$.x3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.w;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.t;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.y;
  var IllegalArgumentException = kotlin_kotlin.$_$.u6;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.e1;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.d1;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.f1;
  var RuntimeException = kotlin_kotlin.$_$.w6;
  var Enum = kotlin_kotlin.$_$.s6;
  var initMetadataForInterface = kotlin_kotlin.$_$.p4;
  var toString_0 = kotlin_kotlin.$_$.k1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var isArray = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var hashCode = kotlin_kotlin.$_$.l4;
  var getBooleanHashCode = kotlin_kotlin.$_$.h4;
  var initMetadataForObject = kotlin_kotlin.$_$.r4;
  var KProperty0 = kotlin_kotlin.$_$.p5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j4;
  var KMutableProperty1 = kotlin_kotlin.$_$.o5;
  var lazy = kotlin_kotlin.$_$.g7;
  var equals = kotlin_kotlin.$_$.f4;
  var listOf = kotlin_kotlin.$_$.y2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var listOf_0 = kotlin_kotlin.$_$.x2;
  var emptyList = kotlin_kotlin.$_$.i2;
  var toString_1 = kotlin_kotlin.$_$.j7;
  var getStringHashCode = kotlin_kotlin.$_$.k4;
  var charSequenceLength = kotlin_kotlin.$_$.b4;
  var charSequenceGet = kotlin_kotlin.$_$.a4;
  var get_lastIndex = kotlin_kotlin.$_$.x5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a2;
  var distinct = kotlin_kotlin.$_$.g2;
  var to = kotlin_kotlin.$_$.k7;
  var joinToString = kotlin_kotlin.$_$.p2;
  var single = kotlin_kotlin.$_$.i3;
  var Collection = kotlin_kotlin.$_$.t1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.c4;
  var mutableListOf = kotlin_kotlin.$_$.b3;
  var removeLastOrNull = kotlin_kotlin.$_$.e3;
  var sortWith = kotlin_kotlin.$_$.j3;
  var FunctionAdapter = kotlin_kotlin.$_$.v3;
  var Comparator = kotlin_kotlin.$_$.p6;
  var compareValues = kotlin_kotlin.$_$.q3;
  var Exception = kotlin_kotlin.$_$.t6;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var joinTo = kotlin_kotlin.$_$.q2;
  var plus = kotlin_kotlin.$_$.d3;
  var toMutableList = kotlin_kotlin.$_$.n3;
  var addAll = kotlin_kotlin.$_$.y1;
  var firstOrNull = kotlin_kotlin.$_$.l2;
  var drop = kotlin_kotlin.$_$.h2;
  var repeat = kotlin_kotlin.$_$.c6;
  var checkCountOverflow = kotlin_kotlin.$_$.z1;
  var compareTo = kotlin_kotlin.$_$.d4;
  var removePrefix = kotlin_kotlin.$_$.a6;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Comparable = kotlin_kotlin.$_$.o6;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i1;
  var enumEntries = kotlin_kotlin.$_$.u3;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var numberToInt = kotlin_kotlin.$_$.z4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.h7;
  var numberToDouble = kotlin_kotlin.$_$.y4;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.r;
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
      this.zm(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.zm.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.bn(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.bn.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.dn(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.dn.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.hn(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.hn.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.jn(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.jn.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.ln(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.ln.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithTime, 'WithTime');
  function appendAlternativeParsingImpl(otherFormats, mainFormat) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(otherFormats.length);
    var inductionVariable = 0;
    var last = otherFormats.length;
    while (inductionVariable < last) {
      var item = otherFormats[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = this.sn();
      // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>.<anonymous>' call
      item(this_0);
      var tmp$ret$1 = this_0.rn().un();
      destination.e(tmp$ret$1);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.sn();
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>' call
    mainFormat(this_1);
    var main = this_1.rn().un();
    this.rn().vn(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.rn();
    // Inline function 'kotlin.also' call
    var this_0 = this.sn();
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendOptionalImpl.<anonymous>' call
    format(this_0);
    tmp.vn(new OptionalFormatStructure(onZero, this_0.rn().un()));
  }
  function chars(value) {
    return this.rn().vn(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.rn().un().wn_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate);
  initMetadataForCompanion(Companion_6);
  function year(padding) {
    return this.po(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.po(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function dayOfMonth(padding) {
    return this.po(new BasicFormatStructure(new DayDirective(padding)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.po(format.qo_1);
      tmp = Unit_instance;
    }
    return tmp;
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
  initMetadataForCompanion(Companion_7);
  function hour(padding) {
    return this.bq(new BasicFormatStructure(new HourDirective(padding)));
  }
  function minute(padding) {
    return this.bq(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.bq(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction(minLength, maxLength) {
    return this.bq(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  function time(format) {
    var tmp;
    if (format instanceof LocalTimeFormat) {
      this.bq(format.hr_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  function addFormatStructureForDate(structure) {
    this.aq(structure);
  }
  function addFormatStructureForTime(structure) {
    this.aq(structure);
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithTime, WithDate]);
  initMetadataForClass(Builder_0, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder]);
  initMetadataForClass(LocalDateTimeFormat, 'LocalDateTimeFormat', VOID, AbstractDateTimeFormat);
  function set_fractionOfSecond(value) {
    this.xq(value == null ? null : value.er(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.yq();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.TimeFieldContainer.<get-fractionOfSecond>.<anonymous>' call
      tmp = new DecimalFraction(tmp0_safe_receiver, 9);
    }
    return tmp;
  }
  initMetadataForInterface(TimeFieldContainer, 'TimeFieldContainer');
  initMetadataForClass(IncompleteLocalDateTime, 'IncompleteLocalDateTime', IncompleteLocalDateTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(IncompleteLocalTime, 'IncompleteLocalTime', IncompleteLocalTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(AmPmMarker, 'AmPmMarker', VOID, Enum);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(Builder_1, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithTimeBuilder]);
  initMetadataForClass(LocalTimeFormat, 'LocalTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(HourDirective, 'HourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(MinuteDirective, 'MinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(SecondDirective, 'SecondDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(DecimalFractionFieldFormatDirective, 'DecimalFractionFieldFormatDirective');
  initMetadataForClass(FractionalSecondDirective, 'FractionalSecondDirective', VOID, DecimalFractionFieldFormatDirective);
  initMetadataForObject(TimeFields, 'TimeFields');
  initMetadataForClass(AppendableFormatStructure, 'AppendableFormatStructure', AppendableFormatStructure);
  initMetadataForClass(AbstractFieldSpec, 'AbstractFieldSpec');
  initMetadataForClass(GenericFieldSpec, 'GenericFieldSpec', VOID, AbstractFieldSpec);
  function getterNotNull(container) {
    var tmp0_elvis_lhs = this.it(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.ss() + ' is not set');
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
  initMetadataForClass(SignedFormatStructure, 'SignedFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(PropertyWithDefault, 'PropertyWithDefault');
  initMetadataForClass(OptionalFormatStructure, 'OptionalFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(AlternativesParsingFormatStructure, 'AlternativesParsingFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ComparisonPredicate, 'ComparisonPredicate');
  initMetadataForObject(Truth, 'Truth');
  initMetadataForClass(ConjunctionPredicate, 'ConjunctionPredicate');
  initMetadataForClass(SpacePaddedFormatter, 'SpacePaddedFormatter');
  initMetadataForClass(ConditionalFormatter, 'ConditionalFormatter');
  initMetadataForClass(ConcatenatedFormatter, 'ConcatenatedFormatter');
  initMetadataForClass(SignedIntFormatterStructure, 'SignedIntFormatterStructure');
  initMetadataForClass(UnsignedIntFormatterStructure, 'UnsignedIntFormatterStructure');
  initMetadataForClass(DecimalFractionFormatterStructure, 'DecimalFractionFormatterStructure');
  initMetadataForClass(ConstantStringFormatterStructure, 'ConstantStringFormatterStructure');
  initMetadataForClass(NumberConsumer, 'NumberConsumer');
  initMetadataForClass(FractionPartConsumer, 'FractionPartConsumer', VOID, NumberConsumer);
  initMetadataForClass(ConstantNumberConsumer, 'ConstantNumberConsumer', VOID, NumberConsumer);
  initMetadataForObject(ExpectedInt, 'ExpectedInt');
  initMetadataForClass(TooManyDigits, 'TooManyDigits');
  initMetadataForClass(TooFewDigits, 'TooFewDigits');
  initMetadataForClass(WrongConstant, 'WrongConstant');
  initMetadataForClass(Conflicting, 'Conflicting');
  initMetadataForClass(UnsignedIntConsumer, 'UnsignedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ParseError, 'ParseError');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation');
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation');
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification');
  initMetadataForClass(DecimalFraction, 'DecimalFraction', VOID, VOID, [Comparable]);
  initMetadataForClass(DayOfWeek_0, 'DayOfWeek', VOID, Enum);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(Instant_0, 'Instant', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_13);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(LocalDate_0, 'LocalDate', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_14);
  initMetadataForObject(Formats_0, 'Formats');
  initMetadataForClass(LocalDateTime_0, 'LocalDateTime', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(LocalTime_0, 'LocalTime', VOID, VOID, [Comparable]);
  initMetadataForClass(Month_0, 'Month', VOID, Enum);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(TimeZone, 'TimeZone');
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(FixedOffsetTimeZone, 'FixedOffsetTimeZone', VOID, TimeZone);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(UtcOffset, 'UtcOffset');
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
    this.jl_1 = totalMonths;
    this.kl_1 = days;
  }
  protoOf(DatePeriod).ll = function () {
    return this.jl_1;
  };
  protoOf(DatePeriod).ml = function () {
    return this.kl_1;
  };
  protoOf(DatePeriod).nl = function () {
    return 0;
  };
  protoOf(DatePeriod).ol = function () {
    return 0;
  };
  protoOf(DatePeriod).pl = function () {
    return 0;
  };
  protoOf(DatePeriod).ql = function () {
    return 0;
  };
  protoOf(DatePeriod).rl = function () {
    return new Long(0, 0);
  };
  function allNonpositive($this) {
    return $this.ll() <= 0 && $this.ml() <= 0 && $this.rl().b1(new Long(0, 0)) <= 0 && (!(($this.ll() | $this.ml()) === 0) || !$this.rl().equals(new Long(0, 0)));
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function DateTimePeriod() {
  }
  protoOf(DateTimePeriod).sl = function () {
    return this.ll() / 12 | 0;
  };
  protoOf(DateTimePeriod).tl = function () {
    return this.ll() % 12 | 0;
  };
  protoOf(DateTimePeriod).nl = function () {
    return this.rl().m2(new Long(817405952, 838)).a1();
  };
  protoOf(DateTimePeriod).ol = function () {
    return this.rl().n2(new Long(817405952, 838)).m2(new Long(-129542144, 13)).a1();
  };
  protoOf(DateTimePeriod).pl = function () {
    var tmp0 = this.rl().n2(new Long(-129542144, 13));
    // Inline function 'kotlin.Long.div' call
    var other = 1000000000;
    return tmp0.m2(toLong(other)).a1();
  };
  protoOf(DateTimePeriod).ql = function () {
    var tmp0 = this.rl();
    // Inline function 'kotlin.Long.rem' call
    var other = 1000000000;
    return tmp0.n2(toLong(other)).a1();
  };
  protoOf(DateTimePeriod).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>' call
    var tmp;
    if (allNonpositive(this)) {
      this_0.g7(_Char___init__impl__6a9atx(45));
      tmp = -1;
    } else {
      tmp = 1;
    }
    var sign = tmp;
    this_0.g7(_Char___init__impl__6a9atx(80));
    if (!(this.sl() === 0)) {
      this_0.x9(imul(this.sl(), sign)).g7(_Char___init__impl__6a9atx(89));
    }
    if (!(this.tl() === 0)) {
      this_0.x9(imul(this.tl(), sign)).g7(_Char___init__impl__6a9atx(77));
    }
    if (!(this.ml() === 0)) {
      this_0.x9(imul(this.ml(), sign)).g7(_Char___init__impl__6a9atx(68));
    }
    var t = 'T';
    if (!(this.nl() === 0)) {
      // Inline function 'kotlin.also' call
      this_0.f7(t).x9(imul(this.nl(), sign)).g7(_Char___init__impl__6a9atx(72));
      // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
      t = '';
    }
    if (!(this.ol() === 0)) {
      // Inline function 'kotlin.also' call
      this_0.f7(t).x9(imul(this.ol(), sign)).g7(_Char___init__impl__6a9atx(77));
      // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
      t = '';
    }
    if (!((this.pl() | this.ql()) === 0)) {
      this_0.f7(t);
      this_0.e7(!(this.pl() === 0) ? imul(this.pl(), sign) : imul(this.ql(), sign) < 0 ? '-0' : '0');
      if (!(this.ql() === 0)) {
        var tmp_0 = this_0.g7(_Char___init__impl__6a9atx(46));
        // Inline function 'kotlin.math.absoluteValue' call
        var this_1 = this.ql();
        var tmp$ret$2 = abs(this_1);
        tmp_0.f7(padStart(tmp$ret$2.toString(), 9, _Char___init__impl__6a9atx(48)));
      }
      this_0.g7(_Char___init__impl__6a9atx(83));
    }
    if (this_0.a() === 1) {
      this_0.f7('0D');
    }
    return this_0.toString();
  };
  protoOf(DateTimePeriod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DateTimePeriod))
      return false;
    if (!(this.ll() === other.ll()))
      return false;
    if (!(this.ml() === other.ml()))
      return false;
    if (!this.rl().equals(other.rl()))
      return false;
    return true;
  };
  protoOf(DateTimePeriod).hashCode = function () {
    var result = this.ll();
    result = imul(31, result) + this.ml() | 0;
    result = imul(31, result) + this.rl().hashCode() | 0;
    return result;
  };
  function totalMonths(years, months) {
    // Inline function 'kotlin.Long.times' call
    var totalMonths = toLong(years).l2(toLong(12)).j2(toLong(months));
    var tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), totalMonths)) {
      tmp = totalMonths.a1();
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
    this.ul_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    if (!(this.ul_1.b1(new Long(0, 0)) > 0)) {
      // Inline function 'kotlinx.datetime.TimeBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.ul_1.toString() + ' ns.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.ul_1.n2(new Long(817405952, 838)).equals(new Long(0, 0))) {
      this.vl_1 = 'HOUR';
      this.wl_1 = this.ul_1.m2(new Long(817405952, 838));
    } else {
      if (this.ul_1.n2(new Long(-129542144, 13)).equals(new Long(0, 0))) {
        this.vl_1 = 'MINUTE';
        this.wl_1 = this.ul_1.m2(new Long(-129542144, 13));
      } else {
        var tmp1 = this.ul_1;
        // Inline function 'kotlin.Long.rem' call
        var other = 1000000000;
        if (tmp1.n2(toLong(other)).equals(new Long(0, 0))) {
          this.vl_1 = 'SECOND';
          var tmp = this;
          var tmp3 = this.ul_1;
          // Inline function 'kotlin.Long.div' call
          var other_0 = 1000000000;
          tmp.wl_1 = tmp3.m2(toLong(other_0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          if (this.ul_1.n2(toLong(1000000)).equals(new Long(0, 0))) {
            this.vl_1 = 'MILLISECOND';
            var tmp_0 = this;
            // Inline function 'kotlin.Long.div' call
            tmp_0.wl_1 = this.ul_1.m2(toLong(1000000));
          } else {
            // Inline function 'kotlin.Long.rem' call
            if (this.ul_1.n2(toLong(1000)).equals(new Long(0, 0))) {
              this.vl_1 = 'MICROSECOND';
              var tmp_1 = this;
              // Inline function 'kotlin.Long.div' call
              tmp_1.wl_1 = this.ul_1.m2(toLong(1000));
            } else {
              this.vl_1 = 'NANOSECOND';
              this.wl_1 = this.ul_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).xl = function (scalar) {
    return new TimeBased(safeMultiply(this.ul_1, toLong(scalar)));
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = this.ul_1.equals(other.ul_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return this.ul_1.a1() ^ this.ul_1.r2(32).a1();
  };
  protoOf(TimeBased).toString = function () {
    return this.yl(this.wl_1, this.vl_1);
  };
  function DateBased() {
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    DateBased.call(this);
    this.am_1 = days;
    // Inline function 'kotlin.require' call
    if (!(this.am_1 > 0)) {
      // Inline function 'kotlinx.datetime.DayBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.am_1 + ' days.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).xl = function (scalar) {
    return new DayBased(safeMultiply_0(this.am_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.am_1 === other.am_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.am_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.am_1 % 7 | 0) === 0 ? this.zl(this.am_1 / 7 | 0, 'WEEK') : this.zl(this.am_1, 'DAY');
  };
  function MonthBased(months) {
    DateBased.call(this);
    this.bm_1 = months;
    // Inline function 'kotlin.require' call
    if (!(this.bm_1 > 0)) {
      // Inline function 'kotlinx.datetime.MonthBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.bm_1 + ' months.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).xl = function (scalar) {
    return new MonthBased(safeMultiply_0(this.bm_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.bm_1 === other.bm_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.bm_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.bm_1 % 1200 | 0) === 0 ? this.zl(this.bm_1 / 1200 | 0, 'CENTURY') : (this.bm_1 % 12 | 0) === 0 ? this.zl(this.bm_1 / 12 | 0, 'YEAR') : (this.bm_1 % 3 | 0) === 0 ? this.zl(this.bm_1 / 3 | 0, 'QUARTER') : this.zl(this.bm_1, 'MONTH');
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.cm_1 = new TimeBased(new Long(1, 0));
    this.dm_1 = this.cm_1.xl(1000);
    this.em_1 = this.dm_1.xl(1000);
    this.fm_1 = this.em_1.xl(1000);
    this.gm_1 = this.fm_1.xl(60);
    this.hm_1 = this.gm_1.xl(60);
    this.im_1 = new DayBased(1);
    this.jm_1 = this.im_1.xl(7);
    this.km_1 = new MonthBased(1);
    this.lm_1 = this.km_1.xl(3);
    this.mm_1 = this.km_1.xl(12);
    this.nm_1 = this.mm_1.xl(100);
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
  protoOf(DateTimeUnit).zl = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).yl = function (value, unit) {
    return value.equals(new Long(1, 0)) ? unit : value.toString() + '-' + unit;
  };
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.d2_1 + 1 | 0;
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
    return Formats_getInstance().pm();
  }
  function minus(_this__u8e3s4, period) {
    var tmp;
    if (!(period.kl_1 === -2147483648) && !(period.tl() === -2147483648)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.datetime.minus.<anonymous>' call
      var tmp$ret$1 = DatePeriod_init_$Create$(-period.sl() | 0, -period.tl() | 0, -period.kl_1 | 0);
      tmp = plus_1(_this__u8e3s4, tmp$ret$1);
    } else {
      tmp = minus_0(minus_0(minus_0(_this__u8e3s4, period.sl(), Companion_getInstance_5().mm_1), period.tl(), Companion_getInstance_5().km_1), period.kl_1, Companion_getInstance_5().im_1);
    }
    return tmp;
  }
  function getIsoDateTimeFormat() {
    return Formats_getInstance_0().qm_1;
  }
  function get_number(_this__u8e3s4) {
    return _this__u8e3s4.d2_1 + 1 | 0;
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
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).um = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.rm().ym()), input, this.tm());
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
      return this.sm(matched);
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
  function WithTime() {
  }
  function char(_this__u8e3s4, value) {
    return _this__u8e3s4.gn(toString_0(value));
  }
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.pn(ifZero, typeof format === 'function' ? format : THROW_CCE());
      tmp = Unit_instance;
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function alternativeParsing(_this__u8e3s4, alternativeFormats, primaryFormat) {
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      var tmp_0 = (isArray(alternativeFormats) ? alternativeFormats : THROW_CCE()).slice();
      _this__u8e3s4.qn(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
      tmp = Unit_instance;
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function AbstractDateTimeFormatBuilder() {
  }
  function get_ISO_DATE() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE$factory();
    return tmp0.s1();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE_BASIC$factory();
    return tmp0.s1();
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
    this.xn_1 = year;
    this.yn_1 = monthNumber;
    this.zn_1 = dayOfMonth;
    this.ao_1 = isoDayOfWeek;
  }
  protoOf(IncompleteLocalDate).bo = function (_set____db54di) {
    this.xn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).co = function () {
    return this.xn_1;
  };
  protoOf(IncompleteLocalDate).do = function (_set____db54di) {
    this.yn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).eo = function () {
    return this.yn_1;
  };
  protoOf(IncompleteLocalDate).fo = function (_set____db54di) {
    this.zn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).go = function () {
    return this.zn_1;
  };
  protoOf(IncompleteLocalDate).ho = function (_set____db54di) {
    this.ao_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).io = function () {
    return this.ao_1;
  };
  protoOf(IncompleteLocalDate).jo = function () {
    var date = LocalDate_init_$Create$(requireParsedField(this.xn_1, 'year'), requireParsedField(this.yn_1, 'monthNumber'), requireParsedField(this.zn_1, 'dayOfMonth'));
    var tmp0_safe_receiver = this.ao_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalDate.toLocalDate.<anonymous>' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.lo()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.lo().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).mo = function () {
    return new IncompleteLocalDate(this.xn_1, this.yn_1, this.zn_1, this.ao_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteLocalDate) {
      tmp_2 = this.xn_1 == other.xn_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.yn_1 == other.yn_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.zn_1 == other.zn_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.ao_1 == other.ao_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.xn_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.yn_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.zn_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.ao_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    return tmp_1 + imul(tmp$ret$3, 31) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.xn_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.yn_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.zn_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.ao_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion_6() {
  }
  protoOf(Companion_6).no = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.un());
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Builder(actualBuilder) {
    this.oo_1 = actualBuilder;
  }
  protoOf(Builder).rn = function () {
    return this.oo_1;
  };
  protoOf(Builder).po = function (structure) {
    return this.oo_1.vn(structure);
  };
  protoOf(Builder).sn = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.qo_1 = actualFormat;
  }
  protoOf(LocalDateFormat).rm = function () {
    return this.qo_1;
  };
  protoOf(LocalDateFormat).ro = function (intermediate) {
    return intermediate.jo();
  };
  protoOf(LocalDateFormat).sm = function (intermediate) {
    return this.ro(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).tm = function () {
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
    var tmp = DateFields_getInstance().so_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.bp_1 = padding;
    this.cp_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.bp_1.equals(other.bp_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.cp_1 === other.cp_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.bp_1.hashCode(), 31) + getBooleanHashCode(this.cp_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().to_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.op_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.op_1.equals(other.op_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.op_1.hashCode();
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().uo_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.xp_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.xp_1.equals(other.xp_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.xp_1.hashCode();
  };
  function DateFields() {
    DateFields_instance = this;
    this.so_1 = new GenericFieldSpec(new PropertyAccessor(year$factory()));
    this.to_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory()), 1, 12);
    this.uo_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory()), 1, 31);
    this.vo_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
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
    return tmp.no(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.an();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.cn();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.en();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_6;
    return tmp.no(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.an();
    $this$build.cn();
    $this$build.en();
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
      return receiver.co();
    }, function (receiver, value) {
      return receiver.bo(value);
    });
  }
  function monthNumber$factory() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.eo();
    }, function (receiver, value) {
      return receiver.do(value);
    });
  }
  function dayOfMonth$factory() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.go();
    }, function (receiver, value) {
      return receiver.fo(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.io();
    }, function (receiver, value) {
      return receiver.ho(value);
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
  function get_ISO_DATETIME() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp0 = ISO_DATETIME$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATETIME$factory();
    return tmp0.s1();
  }
  var ISO_DATETIME$delegate;
  function get_emptyIncompleteLocalDateTime() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    return emptyIncompleteLocalDateTime;
  }
  var emptyIncompleteLocalDateTime;
  function Companion_7() {
  }
  protoOf(Companion_7).yp = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateTimeFormat(builder.un());
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function Builder_0(actualBuilder) {
    this.zp_1 = actualBuilder;
  }
  protoOf(Builder_0).rn = function () {
    return this.zp_1;
  };
  protoOf(Builder_0).aq = function (structure) {
    this.zp_1.vn(structure);
  };
  protoOf(Builder_0).sn = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.cq_1 = actualFormat;
  }
  protoOf(LocalDateTimeFormat).rm = function () {
    return this.cq_1;
  };
  protoOf(LocalDateTimeFormat).dq = function (intermediate) {
    return intermediate.gq();
  };
  protoOf(LocalDateTimeFormat).sm = function (intermediate) {
    return this.dq(intermediate instanceof IncompleteLocalDateTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).tm = function () {
    return get_emptyIncompleteLocalDateTime();
  };
  function IncompleteLocalDateTime(date, time) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    this.eq_1 = date;
    this.fq_1 = time;
  }
  protoOf(IncompleteLocalDateTime).fo = function (_set____db54di) {
    this.eq_1.zn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).go = function () {
    return this.eq_1.zn_1;
  };
  protoOf(IncompleteLocalDateTime).ho = function (_set____db54di) {
    this.eq_1.ao_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).io = function () {
    return this.eq_1.ao_1;
  };
  protoOf(IncompleteLocalDateTime).do = function (_set____db54di) {
    this.eq_1.yn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).eo = function () {
    return this.eq_1.yn_1;
  };
  protoOf(IncompleteLocalDateTime).bo = function (_set____db54di) {
    this.eq_1.xn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).co = function () {
    return this.eq_1.xn_1;
  };
  protoOf(IncompleteLocalDateTime).hq = function (_set____db54di) {
    this.fq_1.kq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).oq = function () {
    return this.fq_1.kq_1;
  };
  protoOf(IncompleteLocalDateTime).pq = function (value) {
    this.fq_1.pq(value);
  };
  protoOf(IncompleteLocalDateTime).qq = function () {
    return this.fq_1.qq();
  };
  protoOf(IncompleteLocalDateTime).rq = function (_set____db54di) {
    this.fq_1.iq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).sq = function () {
    return this.fq_1.iq_1;
  };
  protoOf(IncompleteLocalDateTime).tq = function (_set____db54di) {
    this.fq_1.jq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).uq = function () {
    return this.fq_1.jq_1;
  };
  protoOf(IncompleteLocalDateTime).vq = function (_set____db54di) {
    this.fq_1.lq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).wq = function () {
    return this.fq_1.lq_1;
  };
  protoOf(IncompleteLocalDateTime).xq = function (_set____db54di) {
    this.fq_1.nq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).yq = function () {
    return this.fq_1.nq_1;
  };
  protoOf(IncompleteLocalDateTime).zq = function (_set____db54di) {
    this.fq_1.mq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).ar = function () {
    return this.fq_1.mq_1;
  };
  protoOf(IncompleteLocalDateTime).gq = function () {
    return LocalDateTime_init_$Create$_0(this.eq_1.jo(), this.fq_1.br());
  };
  protoOf(IncompleteLocalDateTime).mo = function () {
    return new IncompleteLocalDateTime(this.eq_1.mo(), this.fq_1.mo());
  };
  function AbstractWithDateTimeBuilder() {
  }
  function ISO_DATETIME$delegate$lambda() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp = Companion_instance_7;
    return tmp.yp(ISO_DATETIME$delegate$lambda$lambda);
  }
  function ISO_DATETIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    $this$build.fn(get_ISO_DATE());
    var tmp = [ISO_DATETIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME$delegate$lambda$lambda$lambda_0);
    $this$build.on(get_ISO_TIME());
    return Unit_instance;
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_instance;
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_instance;
  }
  function ISO_DATETIME$factory() {
    return getPropertyCallableRef('ISO_DATETIME', 0, KProperty0, function () {
      return get_ISO_DATETIME();
    }, null);
  }
  var properties_initialized_LocalDateTimeFormat_kt_67ys6r;
  function _init_properties_LocalDateTimeFormat_kt__aloigl() {
    if (!properties_initialized_LocalDateTimeFormat_kt_67ys6r) {
      properties_initialized_LocalDateTimeFormat_kt_67ys6r = true;
      ISO_DATETIME$delegate = lazy(ISO_DATETIME$delegate$lambda);
      emptyIncompleteLocalDateTime = new IncompleteLocalDateTime();
    }
  }
  function get_ISO_TIME() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp0 = ISO_TIME$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_TIME$factory();
    return tmp0.s1();
  }
  var ISO_TIME$delegate;
  function get_emptyIncompleteLocalTime() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return emptyIncompleteLocalTime;
  }
  var emptyIncompleteLocalTime;
  function TimeFieldContainer() {
  }
  function IncompleteLocalTime(hour, hourOfAmPm, amPm, minute, second, nanosecond) {
    hour = hour === VOID ? null : hour;
    hourOfAmPm = hourOfAmPm === VOID ? null : hourOfAmPm;
    amPm = amPm === VOID ? null : amPm;
    minute = minute === VOID ? null : minute;
    second = second === VOID ? null : second;
    nanosecond = nanosecond === VOID ? null : nanosecond;
    this.iq_1 = hour;
    this.jq_1 = hourOfAmPm;
    this.kq_1 = amPm;
    this.lq_1 = minute;
    this.mq_1 = second;
    this.nq_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).rq = function (_set____db54di) {
    this.iq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).sq = function () {
    return this.iq_1;
  };
  protoOf(IncompleteLocalTime).tq = function (_set____db54di) {
    this.jq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).uq = function () {
    return this.jq_1;
  };
  protoOf(IncompleteLocalTime).hq = function (_set____db54di) {
    this.kq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).oq = function () {
    return this.kq_1;
  };
  protoOf(IncompleteLocalTime).vq = function (_set____db54di) {
    this.lq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).wq = function () {
    return this.lq_1;
  };
  protoOf(IncompleteLocalTime).zq = function (_set____db54di) {
    this.mq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).ar = function () {
    return this.mq_1;
  };
  protoOf(IncompleteLocalTime).xq = function (_set____db54di) {
    this.nq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).yq = function () {
    return this.nq_1;
  };
  protoOf(IncompleteLocalTime).br = function () {
    var tmp0_safe_receiver = this.iq_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>' call
      var tmp0_safe_receiver_0 = this.jq_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.require' call
        if (!((((tmp0_safe_receiver + 11 | 0) % 12 | 0) + 1 | 0) === tmp0_safe_receiver_0)) {
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Inconsistent hour and hour-of-am-pm: hour is ' + tmp0_safe_receiver + ', but hour-of-am-pm is ' + tmp0_safe_receiver_0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
      var tmp1_safe_receiver = this.kq_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.require' call
        if (!(tmp1_safe_receiver.equals(AmPmMarker_PM_getInstance()) === tmp0_safe_receiver >= 12)) {
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          var message_0 = 'Inconsistent hour and the AM/PM marker: hour is ' + tmp0_safe_receiver + ', but the AM/PM marker is ' + tmp1_safe_receiver.toString();
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
      tmp = tmp0_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver_0 = this.jq_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>' call
        var tmp0_safe_receiver_1 = this.kq_1;
        var tmp_2;
        if (tmp0_safe_receiver_1 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          tmp_2 = (tmp1_safe_receiver_0 === 12 ? 0 : tmp1_safe_receiver_0) + (tmp0_safe_receiver_1.equals(AmPmMarker_PM_getInstance()) ? 12 : 0) | 0;
        }
        tmp_1 = tmp_2;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_3;
    if (tmp3_elvis_lhs == null) {
      throw DateTimeFormatException_init_$Create$_0('Incomplete time: missing hour');
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    var hour = tmp_3;
    var tmp_4 = requireParsedField(this.lq_1, 'minute');
    var tmp4_elvis_lhs = this.mq_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.nq_1;
    return LocalTime_init_$Create$(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).mo = function () {
    return new IncompleteLocalTime(this.iq_1, this.jq_1, this.kq_1, this.lq_1, this.mq_1, this.nq_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.iq_1 == other.iq_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.jq_1 == other.jq_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.kq_1, other.kq_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.lq_1 == other.lq_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.mq_1 == other.mq_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.nq_1 == other.nq_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp6_elvis_lhs = this.iq_1;
    var tmp = imul(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs, 31);
    var tmp5_elvis_lhs = this.jq_1;
    var tmp_0 = tmp + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp3_safe_receiver = this.kq_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp2_elvis_lhs = this.lq_1;
    var tmp_2 = tmp_1 + imul(tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, 31) | 0;
    var tmp1_elvis_lhs = this.mq_1;
    var tmp_3 = tmp_2 + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp0_elvis_lhs = this.nq_1;
    return tmp_3 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.iq_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.lq_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.mq_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.nq_1;
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toString.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toString.<anonymous>.<anonymous>' call
      var it = tmp3_safe_receiver.toString();
      tmp_2 = padStart(it, 9 - it.length | 0, _Char___init__impl__6a9atx(48));
    }
    var tmp4_elvis_lhs = tmp_2;
    return tmp + ':' + tmp_0 + ':' + tmp_1 + '.' + (tmp4_elvis_lhs == null ? '???' : tmp4_elvis_lhs);
  };
  var AmPmMarker_AM_instance;
  var AmPmMarker_PM_instance;
  var AmPmMarker_entriesInitialized;
  function AmPmMarker_initEntries() {
    if (AmPmMarker_entriesInitialized)
      return Unit_instance;
    AmPmMarker_entriesInitialized = true;
    AmPmMarker_AM_instance = new AmPmMarker('AM', 0);
    AmPmMarker_PM_instance = new AmPmMarker('PM', 1);
  }
  function AmPmMarker(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_8() {
  }
  protoOf(Companion_8).fr = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new LocalTimeFormat(builder.un());
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function Builder_1(actualBuilder) {
    this.gr_1 = actualBuilder;
  }
  protoOf(Builder_1).rn = function () {
    return this.gr_1;
  };
  protoOf(Builder_1).bq = function (structure) {
    this.gr_1.vn(structure);
  };
  protoOf(Builder_1).sn = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function LocalTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.hr_1 = actualFormat;
  }
  protoOf(LocalTimeFormat).rm = function () {
    return this.hr_1;
  };
  protoOf(LocalTimeFormat).ir = function (intermediate) {
    return intermediate.br();
  };
  protoOf(LocalTimeFormat).sm = function (intermediate) {
    return this.ir(intermediate instanceof IncompleteLocalTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalTimeFormat).tm = function () {
    return get_emptyIncompleteLocalTime();
  };
  function AbstractWithTimeBuilder() {
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().jr_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.tr_1 = padding;
  }
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.tr_1.equals(other.tr_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.tr_1.hashCode();
  };
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().kr_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.yr_1 = padding;
  }
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.yr_1.equals(other.yr_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.yr_1.hashCode();
  };
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().lr_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.ds_1 = padding;
  }
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.ds_1.equals(other.ds_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.ds_1.hashCode();
  };
  function Companion_9() {
    Companion_instance_9 = this;
    this.es_1 = listOf([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.fs_1 = listOf([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_9();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_9().es_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().mr_1, minDigits, maxDigits, zerosToAdd);
    this.ks_1 = minDigits;
    this.ls_1 = maxDigits;
  }
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.ks_1 === other.ks_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.ls_1 === other.ls_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.ks_1) + this.ls_1 | 0;
  };
  function TimeFields() {
    TimeFields_instance = this;
    this.jr_1 = new UnsignedFieldSpec(new PropertyAccessor(hour$factory()), 0, 23);
    this.kr_1 = new UnsignedFieldSpec(new PropertyAccessor(minute$factory()), 0, 59);
    this.lr_1 = new UnsignedFieldSpec(new PropertyAccessor(second$factory()), 0, 59, VOID, 0);
    this.mr_1 = new GenericFieldSpec(new PropertyAccessor(fractionOfSecond$factory()), VOID, new DecimalFraction(0, 9));
    this.nr_1 = new GenericFieldSpec(new PropertyAccessor(amPm$factory()));
    this.or_1 = new UnsignedFieldSpec(new PropertyAccessor(hourOfAmPm$factory()), 1, 12);
  }
  var TimeFields_instance;
  function TimeFields_getInstance() {
    if (TimeFields_instance == null)
      new TimeFields();
    return TimeFields_instance;
  }
  function ISO_TIME$delegate$lambda() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp = Companion_instance_8;
    return tmp.fr(ISO_TIME$delegate$lambda$lambda);
  }
  function ISO_TIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    $this$build.in();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.kn();
    var tmp = [ISO_TIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_TIME$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(58));
    $this$alternativeParsing.mn();
    optional($this$alternativeParsing, VOID, ISO_TIME$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.nn(1, 9);
    return Unit_instance;
  }
  function AmPmMarker_PM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_PM_instance;
  }
  function ISO_TIME$factory() {
    return getPropertyCallableRef('ISO_TIME', 0, KProperty0, function () {
      return get_ISO_TIME();
    }, null);
  }
  function hour$factory() {
    return getPropertyCallableRef('hour', 1, KMutableProperty1, function (receiver) {
      return receiver.sq();
    }, function (receiver, value) {
      return receiver.rq(value);
    });
  }
  function minute$factory() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.wq();
    }, function (receiver, value) {
      return receiver.vq(value);
    });
  }
  function second$factory() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.ar();
    }, function (receiver, value) {
      return receiver.zq(value);
    });
  }
  function fractionOfSecond$factory() {
    return getPropertyCallableRef('fractionOfSecond', 1, KMutableProperty1, function (receiver) {
      return receiver.qq();
    }, function (receiver, value) {
      return receiver.pq(value);
    });
  }
  function amPm$factory() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.oq();
    }, function (receiver, value) {
      return receiver.hq(value);
    });
  }
  function hourOfAmPm$factory() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.uq();
    }, function (receiver, value) {
      return receiver.tq(value);
    });
  }
  var properties_initialized_LocalTimeFormat_kt_l1b0w1;
  function _init_properties_LocalTimeFormat_kt__5i3lfh() {
    if (!properties_initialized_LocalTimeFormat_kt_l1b0w1) {
      properties_initialized_LocalTimeFormat_kt_l1b0w1 = true;
      ISO_TIME$delegate = lazy(ISO_TIME$delegate$lambda);
      emptyIncompleteLocalTime = new IncompleteLocalTime();
    }
  }
  function AppendableFormatStructure() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.tn_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).un = function () {
    return new ConcatenatedFormatStructure(this.tn_1);
  };
  protoOf(AppendableFormatStructure).vn = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.tn_1.e(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.wn_1.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'kotlinx.datetime.internal.format.AppendableFormatStructure.add.<anonymous>' call
          this.tn_1.e(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.qs(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.dp_1 = field;
    this.ep_1 = minDigits;
    this.fp_1 = maxDigits;
    this.gp_1 = spacePadding;
    this.hp_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.ep_1 == null || this.ep_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.ep_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.fp_1 == null || this.ep_1 == null || this.fp_1 >= this.ep_1)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.fp_1 + ') is less than the minimum number of digits (' + this.ep_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).ip = function () {
    return this.dp_1;
  };
  protoOf(SignedIntFieldFormatDirective).jp = function () {
    var tmp = Accessor$getterNotNull$ref(this.dp_1.rs());
    var tmp0_elvis_lhs = this.ep_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.hp_1);
    return !(this.gp_1 == null) ? new SpacePaddedFormatter(formatter, this.gp_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).ym = function () {
    return SignedIntParser(this.ep_1, this.fp_1, this.gp_1, this.dp_1.rs(), this.dp_1.ss(), this.hp_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.qs(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.pp_1 = field;
    this.qp_1 = minDigits;
    this.rp_1 = spacePadding;
    this.sp_1 = this.pp_1.zs_1;
    // Inline function 'kotlin.require' call
    if (!(this.qp_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.qp_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.sp_1 >= this.qp_1)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.sp_1 + ') is less than the minimum number of digits (' + this.qp_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.rp_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.rp_1 > this.qp_1)) {
        // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
        var message_1 = 'The space padding (' + this.rp_1 + ') should be more than the minimum number of digits (' + this.qp_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).ip = function () {
    return this.pp_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).jp = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.pp_1.ts_1), this.qp_1);
    return !(this.rp_1 == null) ? new SpacePaddedFormatter(formatter, this.rp_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).ym = function () {
    return spaceAndZeroPaddedUnsignedInt(this.qp_1, this.sp_1, this.rp_1, this.pp_1.ts_1, this.pp_1.ws_1);
  };
  function Accessor$getterNotNull$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.qs(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.ms_1 = field;
    this.ns_1 = minDigits;
    this.os_1 = maxDigits;
    this.ps_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).ip = function () {
    return this.ms_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).jp = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_1(this.ms_1.rs()), this.ns_1, this.os_1, this.ps_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).ym = function () {
    return new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new FractionPartConsumer(this.ns_1, this.os_1, this.ms_1.rs(), this.ms_1.ss())))), emptyList());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.ss() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.at_1 = accessor;
    this.bt_1 = name;
    this.ct_1 = defaultValue;
    this.dt_1 = sign;
  }
  protoOf(GenericFieldSpec).rs = function () {
    return this.at_1;
  };
  protoOf(GenericFieldSpec).ss = function () {
    return this.bt_1;
  };
  protoOf(GenericFieldSpec).et = function () {
    return this.ct_1;
  };
  function PropertyAccessor(property) {
    this.ft_1 = property;
  }
  protoOf(PropertyAccessor).ss = function () {
    return this.ft_1.callableName;
  };
  protoOf(PropertyAccessor).gt = function (container, newValue) {
    var oldValue = this.ft_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.ft_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).ht = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.gt(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).it = function (container) {
    return this.ft_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.ss() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.ts_1 = accessor;
    this.us_1 = minValue;
    this.vs_1 = maxValue;
    this.ws_1 = name;
    this.xs_1 = defaultValue;
    this.ys_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.vs_1 < 10) {
      tmp_0 = 1;
    } else if (this.vs_1 < 100) {
      tmp_0 = 2;
    } else if (this.vs_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.vs_1 + ' is too large');
    }
    tmp.zs_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).rs = function () {
    return this.ts_1;
  };
  protoOf(UnsignedFieldSpec).ss = function () {
    return this.ws_1;
  };
  protoOf(UnsignedFieldSpec).et = function () {
    return this.xs_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.ss() + ' (default value is ' + toString_1(this.et()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.wm_1 = protoOf(ConcatenatedFormatStructure).jp.call(this);
    this.xm_1 = protoOf(ConcatenatedFormatStructure).ym.call(this);
  }
  protoOf(CachedFormatStructure).jp = function () {
    return this.wm_1;
  };
  protoOf(CachedFormatStructure).ym = function () {
    return this.xm_1;
  };
  function BasicFormatStructure(directive) {
    this.jt_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.jt_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.jt_1, other.jt_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.jt_1);
  };
  protoOf(BasicFormatStructure).ym = function () {
    return this.jt_1.ym();
  };
  protoOf(BasicFormatStructure).jp = function () {
    return this.jt_1.jp();
  };
  function ConstantFormatStructure(string) {
    this.kt_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.kt_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.kt_1 === other.kt_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.kt_1);
  };
  protoOf(ConstantFormatStructure).ym = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.kt_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>' call
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.kt_1, 0))) {
        var tmp0 = this.kt_1;
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
        this_1.e(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$4))));
        var tmp2 = this.kt_1;
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
        tmp_0 = this.kt_1;
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
          this_1.e(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$17))));
        } else {
          this_1.e(new PlainStringParserOperation(suffix));
        }
      }
      tmp = this_1.l4();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).jp = function () {
    return new ConstantStringFormatterStructure(this.kt_1);
  };
  function SignedFormatStructure() {
  }
  function Companion_10() {
  }
  protoOf(Companion_10).lt = function (field) {
    var default_0 = field.et();
    // Inline function 'kotlin.require' call
    if (!!(default_0 == null)) {
      // Inline function 'kotlinx.datetime.internal.format.Companion.fromField.<anonymous>' call
      var message = "The field '" + field.ss() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.rs(), default_0);
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function access$_get_accessor__yxxs4k($this) {
    return $this.mt_1;
  }
  function access$_get_defaultValue__8tt04b($this) {
    return $this.nt_1;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    this.mt_1 = accessor;
    this.nt_1 = defaultValue;
  }
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var tmp0_iterator = this$0.qt_1.g();
      while (tmp0_iterator.h()) {
        var field = tmp0_iterator.i();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        access$_get_accessor__yxxs4k(field).ht(it, access$_get_defaultValue__8tt04b(field));
      }
      return Unit_instance;
    };
  }
  function Accessor$getter$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.it(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.rt(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.st(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.ot_1 = onZero;
    this.pt_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.pt_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.fields.<anonymous>' call
      var tmp$ret$0 = item.ip();
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = distinct(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.fields.<anonymous>' call
      var tmp$ret$3 = Companion_instance_10.lt(item_0);
      destination_0.e(tmp$ret$3);
    }
    tmp.qt_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.ot_1 + ', ' + toString(this.pt_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.ot_1 === other.ot_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.pt_1, other.pt_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.ot_1)) + hashCode(this.pt_1) | 0;
  };
  protoOf(OptionalFormatStructure).ym = function () {
    var tmp = emptyList();
    var tmp_0 = this.pt_1.ym();
    var tmp_1 = (new ConstantFormatStructure(this.ot_1)).ym();
    var tmp_2;
    if (this.qt_1.j()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf_0(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf([tmp_0, concat(listOf([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).jp = function () {
    var formatter = this.pt_1.jp();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.qt_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.formatter.<anonymous>' call
      // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.isDefaultComparisonPredicate' call
      var tmp = access$_get_defaultValue__8tt04b(item);
      var tmp$ret$1 = new ComparisonPredicate(tmp, Accessor$getter$ref(access$_get_accessor__yxxs4k(item)));
      destination.e(tmp$ret$1);
    }
    var predicate = conjunctionPredicate(destination);
    var tmp_0;
    if (predicate instanceof Truth) {
      tmp_0 = new ConstantStringFormatterStructure(this.ot_1);
    } else {
      var tmp_1 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.ot_1));
      tmp_0 = new ConditionalFormatter(listOf([tmp_1, to(Truth$test$ref(Truth_instance), formatter)]));
    }
    return tmp_0;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.tt_1 = mainFormat;
    this.ut_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.ut_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.tt_1, other.tt_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.ut_1, other.ut_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.tt_1)) + hashCode(this.ut_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).ym = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.AlternativesParsingFormatStructure.parser.<anonymous>' call
    this_0.e(this.tt_1.ym());
    var tmp0_iterator = this.ut_1.g();
    while (tmp0_iterator.h()) {
      var format = tmp0_iterator.i();
      this_0.e(format.ym());
    }
    var tmp$ret$2 = this_0.l4();
    return new ParserStructure(tmp, tmp$ret$2);
  };
  protoOf(AlternativesParsingFormatStructure).jp = function () {
    return this.tt_1.jp();
  };
  function ConcatenatedFormatStructure(formats) {
    this.wn_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.wn_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.wn_1, other.wn_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.wn_1);
  };
  protoOf(ConcatenatedFormatStructure).ym = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.wn_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.parser.<anonymous>' call
      var tmp$ret$0 = item.ym();
      destination.e(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).jp = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.wn_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.formatter.<anonymous>' call
      var tmp$ret$0 = item.jp();
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
  function basicFormats(format) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>' call
    basicFormats$_anonymous_$rec_hkf0lf(this_0, format);
    return this_0.l4();
  }
  function basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format) {
    if (format instanceof BasicFormatStructure) {
      $this_buildList.e(format.jt_1);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.wn_1.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>$rec.<anonymous>' call
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.vt_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.tt_1);
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_0 = format.ut_1.g();
              while (_iterator__ex2g4s_0.h()) {
                var element_0 = _iterator__ex2g4s_0.i();
                // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>$rec.<anonymous>' call
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.pt_1);
              }
            }
          }
        }
      }
    }
  }
  function conjunctionPredicate(predicates) {
    return predicates.j() ? Truth_instance : predicates.l() === 1 ? single(predicates) : new ConjunctionPredicate(predicates);
  }
  function ComparisonPredicate(expectedValue, getter) {
    this.wt_1 = expectedValue;
    this.xt_1 = getter;
  }
  protoOf(ComparisonPredicate).rt = function (value) {
    return equals(this.xt_1(value), this.wt_1);
  };
  function Truth() {
  }
  protoOf(Truth).st = function (value) {
    return true;
  };
  protoOf(Truth).rt = function (value) {
    return this.st((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    return Truth_instance;
  }
  function ConjunctionPredicate(predicates) {
    this.yt_1 = predicates;
  }
  protoOf(ConjunctionPredicate).rt = function (value) {
    var tmp0 = this.yt_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.datetime.internal.format.ConjunctionPredicate.test.<anonymous>' call
        if (!element.rt(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function SpacePaddedFormatter(formatter, padding) {
    this.zt_1 = formatter;
    this.au_1 = padding;
  }
  function ConditionalFormatter(formatters) {
    this.bu_1 = formatters;
  }
  function ConcatenatedFormatter(formatters) {
    this.cu_1 = formatters;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.du_1 = number;
    this.eu_1 = zeroPadding;
    this.fu_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.eu_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.eu_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.eu_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.eu_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.gu_1 = number;
    this.hu_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.hu_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.hu_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.hu_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.hu_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.iu_1 = number;
    this.ju_1 = minDigits;
    this.ku_1 = maxDigits;
    this.lu_1 = zerosToAdd;
    var containsArg = this.ju_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.DecimalFractionFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.ju_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.ju_1;
    var containsArg_0 = this.ku_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.DecimalFractionFormatterStructure.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.ku_1 + ') is not in range ' + this.ju_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function ConstantStringFormatterStructure(string) {
    this.mu_1 = string;
  }
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.pu_1 = minLength;
    this.qu_1 = maxLength;
    this.ru_1 = setter;
    var containsArg = this.pu_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.FractionPartConsumer.<anonymous>' call
      var message = 'Invalid minimum length ' + this.pu_1 + ' for field ' + this.tu_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.pu_1;
    var containsArg_0 = this.qu_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.FractionPartConsumer.<anonymous>' call
      var message_0 = 'Invalid maximum length ' + this.qu_1 + ' for field ' + this.tu_1 + ': expected ' + this.pu_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).uu = function (storage, input, start, end) {
    return (end - start | 0) < this.pu_1 ? new TooFewDigits(this.pu_1) : (end - start | 0) > this.qu_1 ? new TooManyDigits(this.qu_1) : setWithoutReassigning(this.ru_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.xu_1 = expected;
  }
  protoOf(ConstantNumberConsumer).uu = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.xu_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.xu_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.su_1 = length;
    this.tu_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.su_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).yu = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.zu_1 = maxDigits;
  }
  protoOf(TooManyDigits).yu = function () {
    return 'expected at most ' + this.zu_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.av_1 = minDigits;
  }
  protoOf(TooFewDigits).yu = function () {
    return 'expected at least ' + this.av_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.bv_1 = expected;
  }
  protoOf(WrongConstant).yu = function () {
    return "expected '" + this.bv_1 + "'";
  };
  function Conflicting(conflicting) {
    this.cv_1 = conflicting;
  }
  protoOf(Conflicting).yu = function () {
    return "attempted to overwrite the existing value '" + toString(this.cv_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ht(receiver, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var conflictingValue = tmp;
    return new Conflicting(conflictingValue);
  }
  function parseAsciiInt(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
      }
       while (inductionVariable < end);
    return result;
  }
  function UnsignedIntConsumer(minLength, maxLength, setter, name, multiplyByMinus1) {
    multiplyByMinus1 = multiplyByMinus1 === VOID ? false : multiplyByMinus1;
    NumberConsumer.call(this, minLength == maxLength ? minLength : null, name);
    this.fv_1 = minLength;
    this.gv_1 = maxLength;
    this.hv_1 = setter;
    this.iv_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).mc(this.a()))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.UnsignedIntConsumer.<anonymous>' call
      var message = 'Invalid length for field ' + this.tu_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).uu = function (storage, input, start, end) {
    var tmp;
    if (!(this.gv_1 == null) && (end - start | 0) > this.gv_1) {
      tmp = new TooManyDigits(this.gv_1);
    } else if (!(this.fv_1 == null) && (end - start | 0) < this.fv_1) {
      tmp = new TooFewDigits(this.fv_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.hv_1, storage, this.iv_1 ? -result | 0 : result);
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
    this.jv_1 = position;
    this.kv_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_11() {
  }
  protoOf(Companion_11).lv = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_11).mv = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function _Parser___init__impl__gdyfby(commands) {
    return commands;
  }
  function _get_commands__a20n1($this) {
    return $this;
  }
  function Parser__match_impl_nzt83d($this, input, initialContainer, startIndex) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$_0();
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
      var output = state.nv_1.mo();
      var inputPosition = state.pv_1;
      var parserStructure = state.ov_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>' call
        var inductionVariable = 0;
        var last = parserStructure.rv_1.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.rv_1.k(ix).tv(output, input, inputPosition);
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
        if (parserStructure.sv_1.j()) {
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
          var inductionVariable_0 = parserStructure.sv_1.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.e(new ParserState(output, parserStructure.sv_1.k(ix_0), inputPosition));
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
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).uv.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.nv_1 = output;
    this.ov_1 = parserStructure;
    this.pv_1 = inputPosition;
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
    var tmp0_other_with_cast = other instanceof Parser ? other.qv_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.vv_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).dc = function (a, b) {
    return this.vv_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.dc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).u2 = function () {
    return this.vv_1;
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
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp = b.jv_1;
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp$ret$1 = a.jv_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.qv_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.qv_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.qv_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.qv_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.rv_1 = operations;
    this.sv_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.rv_1, ', ') + '(' + joinToString(this.sv_1, ';') + ')';
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
      while (iterator.q3()) {
        var tmp2 = iterator.r3();
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
      return 'Position ' + errors.k(0).jv_1 + ': ' + errors.k(0).kv_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$_0(imul(averageMessageLength, errors.l()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.sv_1.j()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.rv_1, other.rv_1), other.sv_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.sv_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.append.<anonymous>' call
        var tmp$ret$0 = concat$append(item, other);
        destination.e(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.rv_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.rv_1.g();
    while (tmp0_iterator.h()) {
      var op = tmp0_iterator.i();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.p(op.wv_1);
        } else {
          currentNumberSpan = toMutableList(op.wv_1);
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
    var tmp0 = _this__u8e3s4.sv_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.rv_1.j()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.sv_1;
        var tmp_0;
        if (this_0.j()) {
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>.<anonymous>' call
          tmp_0 = listOf_0(simplified);
        } else {
          tmp_0 = this_0;
        }
        tmp = tmp_0;
      } else {
        tmp = listOf_0(simplified);
      }
      var list = tmp;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (destination.j()) {
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      tmp_1 = listOf_0(new ParserStructure(unconditionalModificationsForTails, emptyList()));
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
          var tmp0_safe_receiver = firstOrNull(element_0.rv_1);
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
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(mergedTails, 10));
        var _iterator__ex2g4s_1 = mergedTails.g();
        while (_iterator__ex2g4s_1.h()) {
          var item = _iterator__ex2g4s_1.i();
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
          var firstOperation = firstOrNull(item.rv_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.wv_1))), drop(item.rv_1, 1)), item.sv_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.sv_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.rv_1), item.sv_1);
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
    return 'position ' + it.jv_1 + ": '" + it.kv_1() + "'";
  }
  function SignedIntParser(minDigits, maxDigits, spacePadding, setter, name, plusOnExceedsWidth) {
    var parsers = mutableListOf([spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, true)]);
    if (!(plusOnExceedsWidth == null)) {
      parsers.e(spaceAndZeroPaddedUnsignedInt(minDigits, plusOnExceedsWidth, spacePadding, setter, name));
      parsers.e(new ParserStructure(listOf([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(plusOnExceedsWidth + 1 | 0, maxDigits, setter, name, false)))]), emptyList()));
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
        accumulated = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, accumulatedWidth + 1 | 0, accumulatedWidth + 1 | 0), concat(listOf([new ParserStructure(listOf_0(new PlainStringParserOperation(' ')), emptyList()), accumulated]))]));
      }
       while (inductionVariable < maxPaddedNumberLength);
    var tmp_0;
    if (spacePadding_0 > maxNumberLength) {
      var prepadding = new PlainStringParserOperation(repeat(' ', spacePadding_0 - maxNumberLength | 0));
      tmp_0 = concat(listOf([new ParserStructure(listOf_0(prepadding), emptyList()), accumulated]));
    } else if (spacePadding_0 === maxNumberLength) {
      tmp_0 = accumulated;
    } else {
      var r = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, spacePadding_0 + 1 | 0, maxNumberLength), accumulated]));
      tmp_0 = r;
    }
    return tmp_0;
  }
  function _get_whatThisExpects__4pg11j($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.wv_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<get-whatThisExpects>.<anonymous>' call
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.tu_1);
      destination.e(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.yv_1) {
      tmp = 'a number with at least ' + $this.xv_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.xv_1 + ' digits: ' + toString(consumerLengths);
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
      return "Can not interpret the string '" + $numberString + "' as " + this$0.wv_1.k($i).tu_1 + ': ' + $error.yu();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.wv_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.wv_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp_0 = sum;
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.minLength.<anonymous>' call
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.xv_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.wv_1;
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
    tmp_1.yv_1 = tmp$ret$2;
    var tmp0_0 = this.wv_1;
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
    var tmp3 = this.wv_1;
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
      var tmp0_1 = this.wv_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
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
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
      var _iterator__ex2g4s_4 = destination.g();
      while (_iterator__ex2g4s_4.h()) {
        var item = _iterator__ex2g4s_4.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>.<anonymous>' call
        var tmp$ret$12 = item.tu_1;
        destination_0.e(tmp$ret$12);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).tv = function (storage, input, startIndex) {
    if ((startIndex + this.xv_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_11;
      return tmp.mv(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.xv_1) {
      var tmp_0 = Companion_instance_11;
      return tmp_0.mv(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.wv_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.wv_1.k(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.xv_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.wv_1.k(i).uu(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_instance_11;
          var tmp_2 = index;
          return tmp_1.mv(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_11.lv(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.zv_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.zv_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.zv_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.zv_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.zv_1, 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_0 = "String '" + this.zv_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.zv_1, this.zv_1.length - 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_1 = "String '" + this.zv_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).tv = function (storage, input, startIndex) {
    if ((startIndex + this.zv_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_11;
      return tmp.mv(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.zv_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.zv_1, i))) {
          var tmp_0 = Companion_instance_11;
          return tmp_0.mv(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_11.lv(startIndex + this.zv_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.zv_1 + "'";
  };
  function UnconditionalModification(operation) {
    this.aw_1 = operation;
  }
  protoOf(UnconditionalModification).tv = function (storage, input, startIndex) {
    this.aw_1(storage);
    return Companion_instance_11.lv(startIndex);
  };
  function spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths($withMinus, $setter, $name, minNumberLength, maxNumberLength) {
    // Inline function 'kotlin.check' call
    if (!(maxNumberLength >= (1 + ($withMinus ? 1 : 0) | 0))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.parser.spaceAndZeroPaddedUnsignedInt.numberOfRequiredLengths.<anonymous>' call
    if ($withMinus) {
      this_0.e(new PlainStringParserOperation('-'));
    }
    this_0.e(new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(minNumberLength - ($withMinus ? 1 : 0) | 0, maxNumberLength - ($withMinus ? 1 : 0) | 0, $setter, $name, $withMinus))));
    var tmp$ret$2 = this_0.l4();
    return new ParserStructure(tmp$ret$2, emptyList());
  }
  function get_POWERS_OF_TEN() {
    _init_properties_math_kt__tgcmt4();
    return POWERS_OF_TEN;
  }
  var POWERS_OF_TEN;
  function DecimalFraction(fractionalPart, digits) {
    this.cr_1 = fractionalPart;
    this.dr_1 = digits;
    // Inline function 'kotlin.require' call
    if (!(this.dr_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.DecimalFraction.<anonymous>' call
      var message = 'Digits must be non-negative, but was ' + this.dr_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).er = function (newDigits) {
    return newDigits === this.dr_1 ? this.cr_1 : newDigits > this.dr_1 ? imul(this.cr_1, get_POWERS_OF_TEN()[newDigits - this.dr_1 | 0]) : this.cr_1 / get_POWERS_OF_TEN()[this.dr_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).bw = function (other) {
    var tmp0 = this.dr_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = other.dr_1;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.internal.DecimalFraction.compareTo.<anonymous>' call
    var maxPrecision = Math.max(tmp0, b);
    return compareTo(this.er(maxPrecision), other.er(maxPrecision));
  };
  protoOf(DecimalFraction).d = function (other) {
    return this.bw(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.bw(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DecimalFraction).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.datetime.internal.DecimalFraction.toString.<anonymous>' call
    var denominator = get_POWERS_OF_TEN()[this.dr_1];
    this_0.x9(this.cr_1 / denominator | 0);
    this_0.g7(_Char___init__impl__6a9atx(46));
    this_0.f7(removePrefix((denominator + (this.cr_1 % denominator | 0) | 0).toString(), '1'));
    return this_0.toString();
  };
  protoOf(DecimalFraction).hashCode = function () {
    throw UnsupportedOperationException_init_$Create$('DecimalFraction is not supposed to be used as a hash key');
  };
  var properties_initialized_math_kt_amm9wq;
  function _init_properties_math_kt__tgcmt4() {
    if (!properties_initialized_math_kt_amm9wq) {
      properties_initialized_math_kt_amm9wq = true;
      // Inline function 'kotlin.intArrayOf' call
      POWERS_OF_TEN = new Int32Array([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    }
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
  function Companion_12() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_PAST.<anonymous>' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).t2(), 999999999);
    tmp.cw_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_FUTURE.<anonymous>' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).t2(), 0);
    tmp_0.dw_1 = new Instant_0(tmp$ret$3);
    this.ew_1 = new Instant_0(Instant.MIN);
    this.fw_1 = new Instant_0(Instant.MAX);
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Instant_0(value) {
    Companion_getInstance_12();
    this.gw_1 = value;
  }
  protoOf(Instant_0).hw = function (other) {
    return this.gw_1.compareTo(other.gw_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.hw(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.gw_1 === other.gw_1 || this.gw_1.equals(other.gw_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.gw_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.gw_1.toString();
  };
  function isJodaDateTimeParseException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeParseException');
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function isJodaArithmeticException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'ArithmeticException');
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.iw_1 = new LocalDate_0(LocalDate.MIN);
    this.jw_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_13).kw = function (input, format) {
    var tmp;
    if (format === Formats_getInstance().pm()) {
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
      tmp = format.um(input);
    }
    return tmp;
  };
  protoOf(Companion_13).lw = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.kw(input, format) : $super.kw.call(this, input, format);
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function Formats() {
    Formats_instance = this;
    this.om_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats).pm = function () {
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
    Companion_getInstance_13();
    this.ko_1 = value;
  }
  protoOf(LocalDate_0).co = function () {
    return this.ko_1.year();
  };
  protoOf(LocalDate_0).mw = function () {
    return toMonth(this.ko_1.month());
  };
  protoOf(LocalDate_0).lo = function () {
    return toDayOfWeek(this.ko_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.ko_1 === other.ko_1 || this.ko_1.equals(other.ko_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.ko_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.ko_1.toString();
  };
  protoOf(LocalDate_0).nw = function (other) {
    return this.ko_1.compareTo(other.ko_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.nw(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  function daysUntil(_this__u8e3s4, other) {
    return numberToInt(_this__u8e3s4.ko_1.until(other.ko_1, ChronoUnit.DAYS));
  }
  function plus_0(_this__u8e3s4, value, unit) {
    return plusNumber(_this__u8e3s4, value, unit);
  }
  function plus_1(_this__u8e3s4, period) {
    var tmp;
    try {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.datetime.plus.<anonymous>' call
      // Inline function 'kotlin.run' call
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      var $this$run = _this__u8e3s4.ko_1;
      var tmp_0;
      if (!(period.jl_1 === 0)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>.<anonymous>' call
        tmp_0 = $this$run.plusMonths(period.jl_1);
      } else {
        tmp_0 = $this$run;
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      var $this$run_0 = tmp_0;
      var tmp_1;
      if (!(period.kl_1 === 0)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>.<anonymous>' call
        tmp_1 = $this$run_0.plusDays(period.kl_1);
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
  function plusNumber(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      var tmp_0;
      if (unit instanceof DayBased) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.plusNumber.<anonymous>' call
        tmp_0 = _this__u8e3s4.ko_1.plusDays(numberToInt(numberToDouble(value) * unit.am_1));
      } else {
        if (unit instanceof MonthBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          // Inline function 'kotlinx.datetime.plusNumber.<anonymous>' call
          tmp_0 = _this__u8e3s4.ko_1.plusMonths(numberToInt(numberToDouble(value) * unit.bm_1));
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
  function minus_0(_this__u8e3s4, value, unit) {
    return plusNumber(_this__u8e3s4, -value | 0, unit);
  }
  function LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalDateTime.<init>.<anonymous>' call
      tmp = LocalDateTime.of(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond);
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
    LocalDateTime_0.call($this, tmp);
    return $this;
  }
  function LocalDateTime_init_$Create$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond) {
    return LocalDateTime_init_$Init$(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, objectCreate(protoOf(LocalDateTime_0)));
  }
  function LocalDateTime_init_$Init$_0(date, time, $this) {
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.LocalDateTime.<init>.<anonymous>' call
    var tmp$ret$1 = LocalDateTime.of(date.ko_1, time.ow_1);
    LocalDateTime_0.call($this, tmp$ret$1);
    return $this;
  }
  function LocalDateTime_init_$Create$_0(date, time) {
    return LocalDateTime_init_$Init$_0(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.pw_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.qw_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_14).rw = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_0().qm_1) {
      var tmp_0;
      try {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.Companion.parse.stub_for_inlining' call
        var p0 = LocalDateTime.parse(toString(input));
        tmp_0 = new LocalDateTime_0(p0);
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
      tmp = format.um(input);
    }
    return tmp;
  };
  protoOf(Companion_14).sw = function (input, format, $super) {
    format = format === VOID ? getIsoDateTimeFormat() : format;
    return $super === VOID ? this.rw(input, format) : $super.rw.call(this, input, format);
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Formats_0() {
    Formats_instance_0 = this;
    this.qm_1 = get_ISO_DATETIME();
  }
  var Formats_instance_0;
  function Formats_getInstance_0() {
    if (Formats_instance_0 == null)
      new Formats_0();
    return Formats_instance_0;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_14();
    this.tw_1 = value;
  }
  protoOf(LocalDateTime_0).uw = function () {
    return new LocalDate_0(this.tw_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.tw_1 === other.tw_1 || this.tw_1.equals(other.tw_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.tw_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.tw_1.toString();
  };
  protoOf(LocalDateTime_0).vw = function (other) {
    return this.tw_1.compareTo(other.tw_1);
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.vw(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalTime.<init>.<anonymous>' call
      tmp = LocalTime.of(hour, minute, second, nanosecond);
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
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.ww_1 = new LocalTime_0(LocalTime.MIN);
    this.xw_1 = new LocalTime_0(LocalTime.MAX);
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function LocalTime_0(value) {
    Companion_getInstance_15();
    this.ow_1 = value;
  }
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.ow_1 === other.ow_1 || this.ow_1.equals(other.ow_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.ow_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.ow_1.toString();
  };
  protoOf(LocalTime_0).yw = function (other) {
    return this.ow_1.compareTo(other.ow_1);
  };
  protoOf(LocalTime_0).d = function (other) {
    return this.yw(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
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
  function Companion_16() {
    Companion_instance_16 = this;
    this.zw_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_16();
    this.ax_1 = zoneId;
  }
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.ax_1 === other.ax_1 || this.ax_1.equals(other.ax_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.ax_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.ax_1.toString();
  };
  function toInstant(_this__u8e3s4, timeZone) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.toInstant.stub_for_inlining' call
    var p0 = _this__u8e3s4.tw_1.atZone(timeZone.ax_1).toInstant();
    return new Instant_0(p0);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.bx_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_17() {
  }
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.dx_1 = offset;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.ex_1 = new UtcOffset(ZoneOffset.UTC);
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_18();
    this.bx_1 = zoneOffset;
  }
  protoOf(UtcOffset).hashCode = function () {
    return this.bx_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.bx_1 === other.bx_1 || this.bx_1.equals(other.bx_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.bx_1.toString();
  };
  function safeMultiply(a, b) {
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.o2();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.l2(b);
    if (!total.m2(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeMultiply_0(a, b) {
    // Inline function 'kotlin.Long.times' call
    var result = toLong(a).l2(toLong(b));
    if (result.b1(new Long(2147483647, 0)) > 0 || result.b1(new Long(-2147483648, -1)) < 0)
      throw ArithmeticException_init_$Create$('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.a1();
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: post-declaration
  protoOf(Builder).qn = appendAlternativeParsingImpl;
  protoOf(Builder).pn = appendOptionalImpl;
  protoOf(Builder).gn = chars;
  protoOf(Builder).un = build;
  protoOf(Builder).zm = year;
  protoOf(Builder).an = year$default;
  protoOf(Builder).bn = monthNumber;
  protoOf(Builder).cn = monthNumber$default;
  protoOf(Builder).dn = dayOfMonth;
  protoOf(Builder).en = dayOfMonth$default;
  protoOf(Builder_0).qn = appendAlternativeParsingImpl;
  protoOf(Builder_0).pn = appendOptionalImpl;
  protoOf(Builder_0).gn = chars;
  protoOf(Builder_0).un = build;
  protoOf(Builder_0).po = addFormatStructureForDate;
  protoOf(Builder_0).bq = addFormatStructureForTime;
  protoOf(Builder_0).zm = year;
  protoOf(Builder_0).an = year$default;
  protoOf(Builder_0).bn = monthNumber;
  protoOf(Builder_0).cn = monthNumber$default;
  protoOf(Builder_0).dn = dayOfMonth;
  protoOf(Builder_0).en = dayOfMonth$default;
  protoOf(Builder_0).fn = date;
  protoOf(Builder_0).hn = hour;
  protoOf(Builder_0).in = hour$default;
  protoOf(Builder_0).jn = minute;
  protoOf(Builder_0).kn = minute$default;
  protoOf(Builder_0).ln = second;
  protoOf(Builder_0).mn = second$default;
  protoOf(Builder_0).nn = secondFraction;
  protoOf(Builder_0).on = time;
  protoOf(IncompleteLocalTime).pq = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).qq = get_fractionOfSecond;
  protoOf(Builder_1).qn = appendAlternativeParsingImpl;
  protoOf(Builder_1).pn = appendOptionalImpl;
  protoOf(Builder_1).gn = chars;
  protoOf(Builder_1).un = build;
  protoOf(Builder_1).hn = hour;
  protoOf(Builder_1).in = hour$default;
  protoOf(Builder_1).jn = minute;
  protoOf(Builder_1).kn = minute$default;
  protoOf(Builder_1).ln = second;
  protoOf(Builder_1).mn = second$default;
  protoOf(Builder_1).nn = secondFraction;
  protoOf(PropertyAccessor).qs = getterNotNull;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  Companion_instance_10 = new Companion_10();
  Truth_instance = new Truth();
  ExpectedInt_instance = new ExpectedInt();
  Companion_instance_11 = new Companion_11();
  Companion_instance_17 = new Companion_17();
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
  _.$_$.j = LocalDateTime_init_$Create$_0;
  _.$_$.k = LocalDateTime_init_$Create$;
  _.$_$.l = LocalTime_init_$Create$;
  _.$_$.m = Companion_getInstance_5;
  _.$_$.n = Companion_getInstance_13;
  _.$_$.o = Companion_getInstance_14;
  _.$_$.p = Companion_getInstance_16;
  _.$_$.q = daysUntil;
  _.$_$.r = get_isoDayNumber;
  _.$_$.s = minus;
  _.$_$.t = plus_1;
  _.$_$.u = plus_0;
  _.$_$.v = toInstant;
  //endregion
  return _;
}));

