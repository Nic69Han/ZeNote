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
  var Duration = $module$_js_joda_core_gcv2k.Duration;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var ChronoUnit = $module$_js_joda_core_gcv2k.ChronoUnit;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var DateTimeFormatterBuilder = $module$_js_joda_core_gcv2k.DateTimeFormatterBuilder;
  var ResolverStyle = $module$_js_joda_core_gcv2k.ResolverStyle;
  var VOID = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.m5;
  var objectCreate = kotlin_kotlin.$_$.l5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.x4;
  var Long = kotlin_kotlin.$_$.p7;
  var initMetadataForClass = kotlin_kotlin.$_$.w4;
  var toLong = kotlin_kotlin.$_$.o5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.l1;
  var Unit_instance = kotlin_kotlin.$_$.w1;
  var abs = kotlin_kotlin.$_$.q5;
  var padStart = kotlin_kotlin.$_$.p6;
  var numberRangeToNumber = kotlin_kotlin.$_$.g5;
  var THROW_CCE = kotlin_kotlin.$_$.r7;
  var ClosedRange = kotlin_kotlin.$_$.r5;
  var isInterface = kotlin_kotlin.$_$.e5;
  var contains = kotlin_kotlin.$_$.u5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var toString = kotlin_kotlin.$_$.p5;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x;
  var captureStack = kotlin_kotlin.$_$.h4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.v;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.a1;
  var IllegalArgumentException = kotlin_kotlin.$_$.o7;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.g1;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.f1;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.h1;
  var RuntimeException = kotlin_kotlin.$_$.q7;
  var getStringHashCode = kotlin_kotlin.$_$.u4;
  var initMetadataForObject = kotlin_kotlin.$_$.b5;
  var ensureNotNull = kotlin_kotlin.$_$.w7;
  var ArithmeticException = kotlin_kotlin.$_$.g7;
  var KMutableProperty1 = kotlin_kotlin.$_$.z5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t4;
  var KMutableProperty0 = kotlin_kotlin.$_$.y5;
  var Enum = kotlin_kotlin.$_$.m7;
  var initMetadataForInterface = kotlin_kotlin.$_$.z4;
  var toString_0 = kotlin_kotlin.$_$.o1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var isArray = kotlin_kotlin.$_$.c5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var hashCode = kotlin_kotlin.$_$.v4;
  var listOf = kotlin_kotlin.$_$.g3;
  var get_indices = kotlin_kotlin.$_$.w2;
  var charSequenceLength = kotlin_kotlin.$_$.l4;
  var joinToString = kotlin_kotlin.$_$.x2;
  var equals = kotlin_kotlin.$_$.p4;
  var getBooleanHashCode = kotlin_kotlin.$_$.r4;
  var KProperty0 = kotlin_kotlin.$_$.a6;
  var lazy = kotlin_kotlin.$_$.a8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var getOrNull = kotlin_kotlin.$_$.s2;
  var listOf_0 = kotlin_kotlin.$_$.f3;
  var emptyList = kotlin_kotlin.$_$.o2;
  var toString_1 = kotlin_kotlin.$_$.d8;
  var charSequenceGet = kotlin_kotlin.$_$.k4;
  var get_lastIndex = kotlin_kotlin.$_$.m6;
  var toSet = kotlin_kotlin.$_$.y3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g2;
  var distinct = kotlin_kotlin.$_$.m2;
  var to = kotlin_kotlin.$_$.e8;
  var single = kotlin_kotlin.$_$.s3;
  var Collection = kotlin_kotlin.$_$.y1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.m4;
  var mutableListOf = kotlin_kotlin.$_$.j3;
  var removeLastOrNull = kotlin_kotlin.$_$.n3;
  var sortWith = kotlin_kotlin.$_$.t3;
  var FunctionAdapter = kotlin_kotlin.$_$.f4;
  var Comparator = kotlin_kotlin.$_$.j7;
  var compareValues = kotlin_kotlin.$_$.a4;
  var Exception = kotlin_kotlin.$_$.n7;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.u;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var joinTo = kotlin_kotlin.$_$.y2;
  var plus = kotlin_kotlin.$_$.l3;
  var toMutableList = kotlin_kotlin.$_$.x3;
  var addAll = kotlin_kotlin.$_$.d2;
  var firstOrNull = kotlin_kotlin.$_$.r2;
  var drop = kotlin_kotlin.$_$.n2;
  var repeat = kotlin_kotlin.$_$.s6;
  var sortedWith = kotlin_kotlin.$_$.u3;
  var binarySearch = kotlin_kotlin.$_$.e2;
  var startsWith = kotlin_kotlin.$_$.w6;
  var checkCountOverflow = kotlin_kotlin.$_$.f2;
  var compareTo = kotlin_kotlin.$_$.n4;
  var removePrefix = kotlin_kotlin.$_$.q6;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Comparable = kotlin_kotlin.$_$.i7;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.m1;
  var enumEntries = kotlin_kotlin.$_$.e4;
  var numberToLong = kotlin_kotlin.$_$.k5;
  var Companion_getInstance = kotlin_kotlin.$_$.u1;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.e;
  var toDuration = kotlin_kotlin.$_$.f7;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.d;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var numberToInt = kotlin_kotlin.$_$.j5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b8;
  var numberToDouble = kotlin_kotlin.$_$.i5;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.t;
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
  function set_fractionOfSecond(value) {
    this.io(value == null ? null : value.qu(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.jo();
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
  initMetadataForInterface(UtcOffsetFieldContainer, 'UtcOffsetFieldContainer');
  initMetadataForClass(DateTimeComponentsContents, 'DateTimeComponentsContents', VOID, VOID, [TimeFieldContainer, UtcOffsetFieldContainer]);
  initMetadataForCompanion(Companion_6);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(DateTimeComponents, 'DateTimeComponents');
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
      var this_0 = this.fr();
      // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>.<anonymous>' call
      item(this_0);
      var tmp$ret$1 = this_0.ar().rp();
      destination.e(tmp$ret$1);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.fr();
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>' call
    mainFormat(this_1);
    var main = this_1.ar().rp();
    this.ar().dr(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.ar();
    // Inline function 'kotlin.also' call
    var this_0 = this.fr();
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendOptionalImpl.<anonymous>' call
    format(this_0);
    tmp.dr(new OptionalFormatStructure(onZero, this_0.ar().rp()));
  }
  function chars(value) {
    return this.ar().dr(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.ar().rp().is_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.kr(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.kr.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.lr(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.lr.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.gp(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.gp.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function year(padding) {
    return this.ir(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.ir(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function monthName(names) {
    return this.ir(new BasicFormatStructure(new MonthNameDirective(names)));
  }
  function dayOfMonth(padding) {
    return this.ir(new BasicFormatStructure(new DayDirective(padding)));
  }
  function dayOfWeek(names) {
    return this.ir(new BasicFormatStructure(new DayOfWeekDirective(names)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.ir(format.os_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [WithDate]);
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.or(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.or.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.pr(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.pr.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.qr(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.qr.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithTime, 'WithTime');
  function hour(padding) {
    return this.jr(new BasicFormatStructure(new HourDirective(padding)));
  }
  function minute(padding) {
    return this.jr(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.jr(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction(minLength, maxLength) {
    return this.jr(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  function time(format) {
    var tmp;
    if (format instanceof LocalTimeFormat) {
      this.jr(format.tu_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  function addFormatStructureForDate(structure) {
    this.br(structure);
  }
  function addFormatStructureForTime(structure) {
    this.br(structure);
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithTime, WithDate]);
  function offsetHours$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.sr(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.sr.call(this, padding);
    }
    return tmp;
  }
  function offsetMinutesOfHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.tr(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.tr.call(this, padding);
    }
    return tmp;
  }
  function offsetSecondsOfMinute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.vr(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.vr.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithUtcOffset, 'WithUtcOffset');
  function offsetHours(padding) {
    return this.er(new SignedFormatStructure(new BasicFormatStructure(new UtcOffsetWholeHoursDirective(padding)), true));
  }
  function offsetMinutesOfHour(padding) {
    return this.er(new BasicFormatStructure(new UtcOffsetMinuteOfHourDirective(padding)));
  }
  function offsetSecondsOfMinute(padding) {
    return this.er(new BasicFormatStructure(new UtcOffsetSecondOfMinuteDirective(padding)));
  }
  function offset(format) {
    var tmp;
    if (format instanceof UtcOffsetFormat) {
      this.er(format.nw_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithOffsetBuilder, 'AbstractWithOffsetBuilder', VOID, VOID, [WithUtcOffset]);
  initMetadataForClass(Builder, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder, AbstractWithOffsetBuilder, WithTime, WithUtcOffset, WithDate]);
  initMetadataForClass(AbstractDateTimeFormat, 'AbstractDateTimeFormat');
  initMetadataForClass(DateTimeComponentsFormat, 'DateTimeComponentsFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(TwoDigitNumber, 'TwoDigitNumber');
  initMetadataForClass(Padding, 'Padding', VOID, Enum);
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(MonthNames, 'MonthNames');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(DayOfWeekNames, 'DayOfWeekNames');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(Builder_0, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateBuilder]);
  initMetadataForClass(LocalDateFormat, 'LocalDateFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(SignedIntFieldFormatDirective, 'SignedIntFieldFormatDirective');
  initMetadataForClass(YearDirective, 'YearDirective', VOID, SignedIntFieldFormatDirective);
  initMetadataForClass(UnsignedIntFieldFormatDirective, 'UnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthDirective, 'MonthDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(NamedUnsignedIntFieldFormatDirective, 'NamedUnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthNameDirective, 'MonthNameDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForClass(DayDirective, 'DayDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(DayOfWeekDirective, 'DayOfWeekDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForObject(DateFields, 'DateFields');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Builder_1, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder]);
  initMetadataForClass(LocalDateTimeFormat, 'LocalDateTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(IncompleteLocalDateTime, 'IncompleteLocalDateTime', IncompleteLocalDateTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(IncompleteLocalTime, 'IncompleteLocalTime', IncompleteLocalTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(AmPmMarker, 'AmPmMarker', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Builder_2, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithTimeBuilder]);
  initMetadataForClass(LocalTimeFormat, 'LocalTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(HourDirective, 'HourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(MinuteDirective, 'MinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(SecondDirective, 'SecondDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(DecimalFractionFieldFormatDirective, 'DecimalFractionFieldFormatDirective');
  initMetadataForClass(FractionalSecondDirective, 'FractionalSecondDirective', VOID, DecimalFractionFieldFormatDirective);
  initMetadataForObject(TimeFields, 'TimeFields');
  initMetadataForClass(IncompleteUtcOffset, 'IncompleteUtcOffset', IncompleteUtcOffset, VOID, [UtcOffsetFieldContainer]);
  initMetadataForClass(UtcOffsetWholeHoursDirective, 'UtcOffsetWholeHoursDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(Builder_3, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithOffsetBuilder]);
  initMetadataForClass(UtcOffsetFormat, 'UtcOffsetFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(OffsetFields$sign$1);
  initMetadataForObject(OffsetFields, 'OffsetFields');
  initMetadataForClass(UtcOffsetMinuteOfHourDirective, 'UtcOffsetMinuteOfHourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(UtcOffsetSecondOfMinuteDirective, 'UtcOffsetSecondOfMinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(AppendableFormatStructure, 'AppendableFormatStructure', AppendableFormatStructure);
  initMetadataForClass(AssignableString, 'AssignableString');
  initMetadataForClass(AbstractFieldSpec, 'AbstractFieldSpec');
  initMetadataForClass(GenericFieldSpec, 'GenericFieldSpec', VOID, AbstractFieldSpec);
  function getterNotNull(container) {
    var tmp0_elvis_lhs = this.xx(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.ex() + ' is not set');
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
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(PropertyWithDefault, 'PropertyWithDefault');
  initMetadataForClass(OptionalFormatStructure, 'OptionalFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(AlternativesParsingFormatStructure, 'AlternativesParsingFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ComparisonPredicate, 'ComparisonPredicate');
  initMetadataForObject(Truth, 'Truth');
  initMetadataForClass(ConjunctionPredicate, 'ConjunctionPredicate');
  initMetadataForClass(SpacePaddedFormatter, 'SpacePaddedFormatter');
  initMetadataForClass(SignedFormatter, 'SignedFormatter');
  initMetadataForClass(ConditionalFormatter, 'ConditionalFormatter');
  initMetadataForClass(ConcatenatedFormatter, 'ConcatenatedFormatter');
  initMetadataForClass(SignedIntFormatterStructure, 'SignedIntFormatterStructure');
  initMetadataForClass(UnsignedIntFormatterStructure, 'UnsignedIntFormatterStructure');
  initMetadataForClass(StringFormatterStructure, 'StringFormatterStructure');
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
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(TrieNode, 'TrieNode', TrieNode);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(StringSetParserOperation, 'StringSetParserOperation');
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation');
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation');
  initMetadataForClass(SignParser, 'SignParser');
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification');
  initMetadataForClass(DecimalFraction, 'DecimalFraction', VOID, VOID, [Comparable]);
  initMetadataForClass(DayOfWeek_0, 'DayOfWeek', VOID, Enum);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(Instant_0, 'Instant', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_17);
  initMetadataForObject(Formats_0, 'Formats');
  initMetadataForClass(LocalDate_0, 'LocalDate', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_18);
  initMetadataForObject(Formats_1, 'Formats');
  initMetadataForClass(LocalDateTime_0, 'LocalDateTime', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(LocalTime_0, 'LocalTime', VOID, VOID, [Comparable]);
  initMetadataForClass(Month_0, 'Month', VOID, Enum);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(TimeZone, 'TimeZone');
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(FixedOffsetTimeZone, 'FixedOffsetTimeZone', VOID, TimeZone);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject(Formats_2, 'Formats');
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
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function DatePeriod(totalMonths, days) {
    DateTimePeriod.call(this);
    this.ul_1 = totalMonths;
    this.vl_1 = days;
  }
  protoOf(DatePeriod).wl = function () {
    return this.ul_1;
  };
  protoOf(DatePeriod).xl = function () {
    return this.vl_1;
  };
  protoOf(DatePeriod).yl = function () {
    return 0;
  };
  protoOf(DatePeriod).zl = function () {
    return 0;
  };
  protoOf(DatePeriod).am = function () {
    return 0;
  };
  protoOf(DatePeriod).bm = function () {
    return 0;
  };
  protoOf(DatePeriod).cm = function () {
    return new Long(0, 0);
  };
  function allNonpositive($this) {
    return $this.wl() <= 0 && $this.xl() <= 0 && $this.cm().z(new Long(0, 0)) <= 0 && (!(($this.wl() | $this.xl()) === 0) || !$this.cm().equals(new Long(0, 0)));
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function DateTimePeriod() {
  }
  protoOf(DateTimePeriod).dm = function () {
    return this.wl() / 12 | 0;
  };
  protoOf(DateTimePeriod).em = function () {
    return this.wl() % 12 | 0;
  };
  protoOf(DateTimePeriod).yl = function () {
    return this.cm().n2(new Long(817405952, 838)).b1();
  };
  protoOf(DateTimePeriod).zl = function () {
    return this.cm().o2(new Long(817405952, 838)).n2(new Long(-129542144, 13)).b1();
  };
  protoOf(DateTimePeriod).am = function () {
    var tmp0 = this.cm().o2(new Long(-129542144, 13));
    // Inline function 'kotlin.Long.div' call
    var other = 1000000000;
    return tmp0.n2(toLong(other)).b1();
  };
  protoOf(DateTimePeriod).bm = function () {
    var tmp0 = this.cm();
    // Inline function 'kotlin.Long.rem' call
    var other = 1000000000;
    return tmp0.o2(toLong(other)).b1();
  };
  protoOf(DateTimePeriod).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>' call
    var tmp;
    if (allNonpositive(this)) {
      this_0.j7(_Char___init__impl__6a9atx(45));
      tmp = -1;
    } else {
      tmp = 1;
    }
    var sign = tmp;
    this_0.j7(_Char___init__impl__6a9atx(80));
    if (!(this.dm() === 0)) {
      this_0.aa(imul(this.dm(), sign)).j7(_Char___init__impl__6a9atx(89));
    }
    if (!(this.em() === 0)) {
      this_0.aa(imul(this.em(), sign)).j7(_Char___init__impl__6a9atx(77));
    }
    if (!(this.xl() === 0)) {
      this_0.aa(imul(this.xl(), sign)).j7(_Char___init__impl__6a9atx(68));
    }
    var t = 'T';
    if (!(this.yl() === 0)) {
      // Inline function 'kotlin.also' call
      this_0.i7(t).aa(imul(this.yl(), sign)).j7(_Char___init__impl__6a9atx(72));
      // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
      t = '';
    }
    if (!(this.zl() === 0)) {
      // Inline function 'kotlin.also' call
      this_0.i7(t).aa(imul(this.zl(), sign)).j7(_Char___init__impl__6a9atx(77));
      // Inline function 'kotlinx.datetime.DateTimePeriod.toString.<anonymous>.<anonymous>' call
      t = '';
    }
    if (!((this.am() | this.bm()) === 0)) {
      this_0.i7(t);
      this_0.h7(!(this.am() === 0) ? imul(this.am(), sign) : imul(this.bm(), sign) < 0 ? '-0' : '0');
      if (!(this.bm() === 0)) {
        var tmp_0 = this_0.j7(_Char___init__impl__6a9atx(46));
        // Inline function 'kotlin.math.absoluteValue' call
        var this_1 = this.bm();
        var tmp$ret$2 = abs(this_1);
        tmp_0.i7(padStart(tmp$ret$2.toString(), 9, _Char___init__impl__6a9atx(48)));
      }
      this_0.j7(_Char___init__impl__6a9atx(83));
    }
    if (this_0.a() === 1) {
      this_0.i7('0D');
    }
    return this_0.toString();
  };
  protoOf(DateTimePeriod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DateTimePeriod))
      return false;
    if (!(this.wl() === other.wl()))
      return false;
    if (!(this.xl() === other.xl()))
      return false;
    if (!this.cm().equals(other.cm()))
      return false;
    return true;
  };
  protoOf(DateTimePeriod).hashCode = function () {
    var result = this.wl();
    result = imul(31, result) + this.xl() | 0;
    result = imul(31, result) + this.cm().hashCode() | 0;
    return result;
  };
  function totalMonths(years, months) {
    // Inline function 'kotlin.Long.times' call
    var totalMonths = toLong(years).m2(toLong(12)).k2(toLong(months));
    var tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), totalMonths)) {
      tmp = totalMonths.b1();
    } else {
      throw IllegalArgumentException_init_$Create$('The total number of months in ' + years + ' years and ' + months + ' months overflows an Int');
    }
    return tmp;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function TimeBased(nanoseconds) {
    DateTimeUnit.call(this);
    this.fm_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    if (!(this.fm_1.z(new Long(0, 0)) > 0)) {
      // Inline function 'kotlinx.datetime.TimeBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.fm_1.toString() + ' ns.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.fm_1.o2(new Long(817405952, 838)).equals(new Long(0, 0))) {
      this.gm_1 = 'HOUR';
      this.hm_1 = this.fm_1.n2(new Long(817405952, 838));
    } else {
      if (this.fm_1.o2(new Long(-129542144, 13)).equals(new Long(0, 0))) {
        this.gm_1 = 'MINUTE';
        this.hm_1 = this.fm_1.n2(new Long(-129542144, 13));
      } else {
        var tmp1 = this.fm_1;
        // Inline function 'kotlin.Long.rem' call
        var other = 1000000000;
        if (tmp1.o2(toLong(other)).equals(new Long(0, 0))) {
          this.gm_1 = 'SECOND';
          var tmp = this;
          var tmp3 = this.fm_1;
          // Inline function 'kotlin.Long.div' call
          var other_0 = 1000000000;
          tmp.hm_1 = tmp3.n2(toLong(other_0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          if (this.fm_1.o2(toLong(1000000)).equals(new Long(0, 0))) {
            this.gm_1 = 'MILLISECOND';
            var tmp_0 = this;
            // Inline function 'kotlin.Long.div' call
            tmp_0.hm_1 = this.fm_1.n2(toLong(1000000));
          } else {
            // Inline function 'kotlin.Long.rem' call
            if (this.fm_1.o2(toLong(1000)).equals(new Long(0, 0))) {
              this.gm_1 = 'MICROSECOND';
              var tmp_1 = this;
              // Inline function 'kotlin.Long.div' call
              tmp_1.hm_1 = this.fm_1.n2(toLong(1000));
            } else {
              this.gm_1 = 'NANOSECOND';
              this.hm_1 = this.fm_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).im = function (scalar) {
    return new TimeBased(safeMultiply(this.fm_1, toLong(scalar)));
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = this.fm_1.equals(other.fm_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return this.fm_1.b1() ^ this.fm_1.s2(32).b1();
  };
  protoOf(TimeBased).toString = function () {
    return this.jm(this.hm_1, this.gm_1);
  };
  function DateBased() {
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    DateBased.call(this);
    this.lm_1 = days;
    // Inline function 'kotlin.require' call
    if (!(this.lm_1 > 0)) {
      // Inline function 'kotlinx.datetime.DayBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.lm_1 + ' days.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).im = function (scalar) {
    return new DayBased(safeMultiply_0(this.lm_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.lm_1 === other.lm_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.lm_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.lm_1 % 7 | 0) === 0 ? this.km(this.lm_1 / 7 | 0, 'WEEK') : this.km(this.lm_1, 'DAY');
  };
  function MonthBased(months) {
    DateBased.call(this);
    this.mm_1 = months;
    // Inline function 'kotlin.require' call
    if (!(this.mm_1 > 0)) {
      // Inline function 'kotlinx.datetime.MonthBased.<anonymous>' call
      var message = 'Unit duration must be positive, but was ' + this.mm_1 + ' months.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).im = function (scalar) {
    return new MonthBased(safeMultiply_0(this.mm_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.mm_1 === other.mm_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.mm_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.mm_1 % 1200 | 0) === 0 ? this.km(this.mm_1 / 1200 | 0, 'CENTURY') : (this.mm_1 % 12 | 0) === 0 ? this.km(this.mm_1 / 12 | 0, 'YEAR') : (this.mm_1 % 3 | 0) === 0 ? this.km(this.mm_1 / 3 | 0, 'QUARTER') : this.km(this.mm_1, 'MONTH');
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.nm_1 = new TimeBased(new Long(1, 0));
    this.om_1 = this.nm_1.im(1000);
    this.pm_1 = this.om_1.im(1000);
    this.qm_1 = this.pm_1.im(1000);
    this.rm_1 = this.qm_1.im(60);
    this.sm_1 = this.rm_1.im(60);
    this.tm_1 = new DayBased(1);
    this.um_1 = this.tm_1.im(7);
    this.vm_1 = new MonthBased(1);
    this.wm_1 = this.vm_1.im(3);
    this.xm_1 = this.vm_1.im(12);
    this.ym_1 = this.xm_1.im(100);
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function DateTimeUnit() {
    Companion_getInstance_6();
  }
  protoOf(DateTimeUnit).km = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).jm = function (value, unit) {
    return value.equals(new Long(1, 0)) ? unit : value.toString() + '-' + unit;
  };
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.e2_1 + 1 | 0;
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
    return Formats_getInstance_0().an();
  }
  function minus(_this__u8e3s4, period) {
    var tmp;
    if (!(period.vl_1 === -2147483648) && !(period.em() === -2147483648)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.datetime.minus.<anonymous>' call
      var tmp$ret$1 = DatePeriod_init_$Create$(-period.dm() | 0, -period.em() | 0, -period.vl_1 | 0);
      tmp = plus_1(_this__u8e3s4, tmp$ret$1);
    } else {
      tmp = minus_0(minus_0(minus_0(_this__u8e3s4, period.dm(), Companion_getInstance_6().xm_1), period.em(), Companion_getInstance_6().vm_1), period.vl_1, Companion_getInstance_6().tm_1);
    }
    return tmp;
  }
  function getIsoDateTimeFormat() {
    return Formats_getInstance_1().bn_1;
  }
  function get_number(_this__u8e3s4) {
    return _this__u8e3s4.e2_1 + 1 | 0;
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
  var timeZoneField;
  function get_emptyDateTimeComponentsContents() {
    _init_properties_DateTimeComponents_kt__9iimb5();
    return emptyDateTimeComponentsContents;
  }
  var emptyDateTimeComponentsContents;
  function DateTimeComponentsContents(date, time, offset, timeZoneId) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    offset = offset === VOID ? new IncompleteUtcOffset() : offset;
    timeZoneId = timeZoneId === VOID ? null : timeZoneId;
    this.cn_1 = date;
    this.dn_1 = time;
    this.en_1 = offset;
    this.fn_1 = timeZoneId;
  }
  protoOf(DateTimeComponentsContents).gn = function (_set____db54di) {
    this.cn_1.jn_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).ln = function () {
    return this.cn_1.jn_1;
  };
  protoOf(DateTimeComponentsContents).mn = function (_set____db54di) {
    this.cn_1.kn_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).nn = function () {
    return this.cn_1.kn_1;
  };
  protoOf(DateTimeComponentsContents).on = function (_set____db54di) {
    this.cn_1.in_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).pn = function () {
    return this.cn_1.in_1;
  };
  protoOf(DateTimeComponentsContents).qn = function (_set____db54di) {
    this.cn_1.hn_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).rn = function () {
    return this.cn_1.hn_1;
  };
  protoOf(DateTimeComponentsContents).sn = function (_set____db54di) {
    this.dn_1.vn_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).zn = function () {
    return this.dn_1.vn_1;
  };
  protoOf(DateTimeComponentsContents).ao = function (value) {
    this.dn_1.ao(value);
  };
  protoOf(DateTimeComponentsContents).bo = function () {
    return this.dn_1.bo();
  };
  protoOf(DateTimeComponentsContents).co = function (_set____db54di) {
    this.dn_1.tn_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).do = function () {
    return this.dn_1.tn_1;
  };
  protoOf(DateTimeComponentsContents).eo = function (_set____db54di) {
    this.dn_1.un_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).fo = function () {
    return this.dn_1.un_1;
  };
  protoOf(DateTimeComponentsContents).go = function (_set____db54di) {
    this.dn_1.wn_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).ho = function () {
    return this.dn_1.wn_1;
  };
  protoOf(DateTimeComponentsContents).io = function (_set____db54di) {
    this.dn_1.yn_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).jo = function () {
    return this.dn_1.yn_1;
  };
  protoOf(DateTimeComponentsContents).ko = function (_set____db54di) {
    this.dn_1.xn_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).lo = function () {
    return this.dn_1.xn_1;
  };
  protoOf(DateTimeComponentsContents).mo = function (_set____db54di) {
    this.en_1.no_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).ro = function () {
    return this.en_1.no_1;
  };
  protoOf(DateTimeComponentsContents).so = function (_set____db54di) {
    this.en_1.po_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).to = function () {
    return this.en_1.po_1;
  };
  protoOf(DateTimeComponentsContents).uo = function (_set____db54di) {
    this.en_1.qo_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).vo = function () {
    return this.en_1.qo_1;
  };
  protoOf(DateTimeComponentsContents).wo = function (_set____db54di) {
    this.en_1.oo_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).xo = function () {
    return this.en_1.oo_1;
  };
  protoOf(DateTimeComponentsContents).yo = function () {
    return new DateTimeComponentsContents(this.cn_1.yo(), this.dn_1.yo(), this.en_1.yo(), this.fn_1);
  };
  protoOf(DateTimeComponentsContents).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof DateTimeComponentsContents) {
      tmp_2 = other.cn_1.equals(this.cn_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.dn_1.equals(this.dn_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.en_1.equals(this.en_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.fn_1 == this.fn_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DateTimeComponentsContents).hashCode = function () {
    var tmp = this.cn_1.hashCode() ^ this.dn_1.hashCode() ^ this.en_1.hashCode();
    var tmp0_safe_receiver = this.fn_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda($this$Format) {
    $this$Format.zo(get_ISO_DATE());
    var tmp = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0);
    $this$Format.ap();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.bp();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.cp();
    optional($this$Format, VOID, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1);
    var tmp_0 = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2];
    alternativeParsing($this$Format, tmp_0, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.dp(1, 9);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.ep();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.fp(Formats_instance_2.an());
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda($this$Format) {
    var tmp = [DateTimeComponents$Formats$RFC_1123$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$RFC_1123$lambda$lambda_0);
    $this$Format.gp(Padding_NONE_getInstance());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.jp(Companion_getInstance_8().ip_1);
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.kp();
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.ap();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.bp();
    optional($this$Format, VOID, DateTimeComponents$Formats$RFC_1123$lambda$lambda_1);
    $this$Format.lp(' ');
    var tmp_0 = DateTimeComponents$Formats$RFC_1123$lambda$lambda_2;
    var tmp_1 = [tmp_0, DateTimeComponents$Formats$RFC_1123$lambda$lambda_3];
    alternativeParsing($this$Format, tmp_1, DateTimeComponents$Formats$RFC_1123$lambda$lambda_4);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda($this$alternativeParsing) {
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_0($this$alternativeParsing) {
    $this$alternativeParsing.op(Companion_getInstance_9().np_1);
    $this$alternativeParsing.lp(', ');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.cp();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.lp('UT');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.lp('Z');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_4($this$alternativeParsing) {
    optional($this$alternativeParsing, 'GMT', DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda($this$optional) {
    $this$optional.fp(Formats_instance_2.pp());
    return Unit_instance;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).qp = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new DateTimeComponentsFormat(builder.rp());
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function Formats() {
    Formats_instance = this;
    var tmp = this;
    var tmp_0 = Companion_instance_6;
    tmp.sp_1 = tmp_0.qp(DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_instance_6;
    tmp_1.tp_1 = tmp_2.qp(DateTimeComponents$Formats$RFC_1123$lambda);
  }
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function DateTimeComponents(contents) {
    contents = contents === VOID ? new DateTimeComponentsContents() : contents;
    this.up_1 = contents;
    this.vp_1 = year$factory(this.up_1.cn_1);
    this.wp_1 = new TwoDigitNumber(monthNumber$factory(this.up_1.cn_1));
    this.xp_1 = new TwoDigitNumber(dayOfMonth$factory(this.up_1.cn_1));
    this.yp_1 = new TwoDigitNumber(hour$factory(this.up_1.dn_1));
    this.zp_1 = new TwoDigitNumber(hourOfAmPm$factory(this.up_1.dn_1));
    this.aq_1 = amPm$factory(this.up_1.dn_1);
    this.bq_1 = new TwoDigitNumber(minute$factory(this.up_1.dn_1));
    this.cq_1 = new TwoDigitNumber(second$factory(this.up_1.dn_1));
    this.dq_1 = isNegative$factory(this.up_1.en_1);
    this.eq_1 = new TwoDigitNumber(totalHoursAbs$factory(this.up_1.en_1));
    this.fq_1 = new TwoDigitNumber(minutesOfHour$factory(this.up_1.en_1));
    this.gq_1 = new TwoDigitNumber(secondsOfMinute$factory(this.up_1.en_1));
    this.hq_1 = timeZoneId$factory_0(this.up_1);
  }
  protoOf(DateTimeComponents).qn = function (_set____db54di) {
    var tmp0 = this.vp_1;
    year$factory_0();
    tmp0.set(_set____db54di);
    return Unit_instance;
  };
  protoOf(DateTimeComponents).rn = function () {
    var tmp0 = this.vp_1;
    // Inline function 'kotlin.getValue' call
    year$factory_1();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).jo = function () {
    return this.up_1.dn_1.yn_1;
  };
  protoOf(DateTimeComponents).iq = function () {
    return this.up_1.en_1.iq();
  };
  protoOf(DateTimeComponents).jq = function () {
    return this.up_1.dn_1.jq();
  };
  protoOf(DateTimeComponents).kq = function () {
    var offset = this.iq();
    var time = this.jq();
    var truncatedDate = this.up_1.cn_1.yo();
    truncatedDate.hn_1 = requireParsedField(truncatedDate.hn_1, 'year') % 10000 | 0;
    var tmp;
    try {
      var secDelta = safeMultiply(toLong(ensureNotNull(this.rn()) / 10000 | 0), new Long(2036907392, 73));
      var epochDays = toLong(truncatedDate.lq().nq());
      // Inline function 'kotlin.Long.times' call
      var tmp2 = epochDays.m2(toLong(86400));
      // Inline function 'kotlin.Long.plus' call
      var other = time.pq();
      var tmp4 = tmp2.k2(toLong(other));
      // Inline function 'kotlin.Long.minus' call
      var other_0 = offset.rq();
      var tmp$ret$2 = tmp4.l2(toLong(other_0));
      tmp = safeAdd(secDelta, tmp$ret$2);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2('The parsed date is outside the range representable by Instant', e);
      } else {
        throw $p;
      }
    }
    var totalSeconds = tmp;
    if (totalSeconds.z(Companion_getInstance_17().uq_1.xq()) < 0 || totalSeconds.z(Companion_getInstance_17().vq_1.xq()) > 0)
      throw DateTimeFormatException_init_$Create$_0('The parsed date is outside the range representable by Instant');
    var tmp_1 = Companion_getInstance_17();
    var tmp0_elvis_lhs = this.jo();
    return tmp_1.yq(totalSeconds, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
  };
  function Builder(actualBuilder) {
    this.zq_1 = actualBuilder;
  }
  protoOf(Builder).ar = function () {
    return this.zq_1;
  };
  protoOf(Builder).br = function (structure) {
    this.zq_1.dr(structure);
  };
  protoOf(Builder).er = function (structure) {
    this.zq_1.dr(structure);
  };
  protoOf(Builder).fr = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function DateTimeComponentsFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.xr_1 = actualFormat;
  }
  protoOf(DateTimeComponentsFormat).yr = function () {
    return this.xr_1;
  };
  protoOf(DateTimeComponentsFormat).zr = function (intermediate) {
    return new DateTimeComponents(intermediate);
  };
  protoOf(DateTimeComponentsFormat).as = function (intermediate) {
    return this.zr(intermediate instanceof DateTimeComponentsContents ? intermediate : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).bs = function () {
    return get_emptyDateTimeComponentsContents();
  };
  function TwoDigitNumber(reference) {
    this.ds_1 = reference;
  }
  function timeZoneId$factory() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.fn_1;
    }, function (receiver, value) {
      receiver.fn_1 = value;
      return Unit_instance;
    });
  }
  function year$factory($b0) {
    return getPropertyCallableRef('year', 0, KMutableProperty0, function () {
      return $b0.hn_1;
    }, function (value) {
      $b0.hn_1 = value;
      return Unit_instance;
    });
  }
  function monthNumber$factory($b0) {
    return getPropertyCallableRef('monthNumber', 0, KMutableProperty0, function () {
      return $b0.in_1;
    }, function (value) {
      $b0.in_1 = value;
      return Unit_instance;
    });
  }
  function dayOfMonth$factory($b0) {
    return getPropertyCallableRef('dayOfMonth', 0, KMutableProperty0, function () {
      return $b0.jn_1;
    }, function (value) {
      $b0.jn_1 = value;
      return Unit_instance;
    });
  }
  function hour$factory($b0) {
    return getPropertyCallableRef('hour', 0, KMutableProperty0, function () {
      return $b0.tn_1;
    }, function (value) {
      $b0.tn_1 = value;
      return Unit_instance;
    });
  }
  function hourOfAmPm$factory($b0) {
    return getPropertyCallableRef('hourOfAmPm', 0, KMutableProperty0, function () {
      return $b0.un_1;
    }, function (value) {
      $b0.un_1 = value;
      return Unit_instance;
    });
  }
  function amPm$factory($b0) {
    return getPropertyCallableRef('amPm', 0, KMutableProperty0, function () {
      return $b0.vn_1;
    }, function (value) {
      $b0.vn_1 = value;
      return Unit_instance;
    });
  }
  function minute$factory($b0) {
    return getPropertyCallableRef('minute', 0, KMutableProperty0, function () {
      return $b0.wn_1;
    }, function (value) {
      $b0.wn_1 = value;
      return Unit_instance;
    });
  }
  function second$factory($b0) {
    return getPropertyCallableRef('second', 0, KMutableProperty0, function () {
      return $b0.xn_1;
    }, function (value) {
      $b0.xn_1 = value;
      return Unit_instance;
    });
  }
  function isNegative$factory($b0) {
    return getPropertyCallableRef('isNegative', 0, KMutableProperty0, function () {
      return $b0.no_1;
    }, function (value) {
      $b0.no_1 = value;
      return Unit_instance;
    });
  }
  function totalHoursAbs$factory($b0) {
    return getPropertyCallableRef('totalHoursAbs', 0, KMutableProperty0, function () {
      return $b0.oo_1;
    }, function (value) {
      $b0.oo_1 = value;
      return Unit_instance;
    });
  }
  function minutesOfHour$factory($b0) {
    return getPropertyCallableRef('minutesOfHour', 0, KMutableProperty0, function () {
      return $b0.po_1;
    }, function (value) {
      $b0.po_1 = value;
      return Unit_instance;
    });
  }
  function secondsOfMinute$factory($b0) {
    return getPropertyCallableRef('secondsOfMinute', 0, KMutableProperty0, function () {
      return $b0.qo_1;
    }, function (value) {
      $b0.qo_1 = value;
      return Unit_instance;
    });
  }
  function timeZoneId$factory_0($b0) {
    return getPropertyCallableRef('timeZoneId', 0, KMutableProperty0, function () {
      return $b0.fn_1;
    }, function (value) {
      $b0.fn_1 = value;
      return Unit_instance;
    });
  }
  function year$factory_0() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.rn();
    }, function (receiver, value) {
      return receiver.qn(value);
    });
  }
  function year$factory_1() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.rn();
    }, function (receiver, value) {
      return receiver.qn(value);
    });
  }
  var properties_initialized_DateTimeComponents_kt_io5e5;
  function _init_properties_DateTimeComponents_kt__9iimb5() {
    if (!properties_initialized_DateTimeComponents_kt_io5e5) {
      properties_initialized_DateTimeComponents_kt_io5e5 = true;
      timeZoneField = new GenericFieldSpec(new PropertyAccessor(timeZoneId$factory()));
      emptyDateTimeComponentsContents = new DateTimeComponentsContents();
    }
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).cs = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.yr().hs()), input, this.bs());
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
      return this.as(matched);
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
  function Padding_NONE_getInstance() {
    Padding_initEntries();
    return Padding_NONE_instance;
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
  function WithUtcOffset() {
  }
  function char(_this__u8e3s4, value) {
    return _this__u8e3s4.lp(toString_0(value));
  }
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.hr(ifZero, typeof format === 'function' ? format : THROW_CCE());
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
      _this__u8e3s4.gr(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
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
    return tmp0.t1();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE_BASIC$factory();
    return tmp0.t1();
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
    this.hn_1 = year;
    this.in_1 = monthNumber;
    this.jn_1 = dayOfMonth;
    this.kn_1 = isoDayOfWeek;
  }
  protoOf(IncompleteLocalDate).qn = function (_set____db54di) {
    this.hn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).rn = function () {
    return this.hn_1;
  };
  protoOf(IncompleteLocalDate).on = function (_set____db54di) {
    this.in_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).pn = function () {
    return this.in_1;
  };
  protoOf(IncompleteLocalDate).gn = function (_set____db54di) {
    this.jn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).ln = function () {
    return this.jn_1;
  };
  protoOf(IncompleteLocalDate).mn = function (_set____db54di) {
    this.kn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).nn = function () {
    return this.kn_1;
  };
  protoOf(IncompleteLocalDate).lq = function () {
    var date = LocalDate_init_$Create$(requireParsedField(this.hn_1, 'year'), requireParsedField(this.in_1, 'monthNumber'), requireParsedField(this.jn_1, 'dayOfMonth'));
    var tmp0_safe_receiver = this.kn_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalDate.toLocalDate.<anonymous>' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.js()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.js().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).yo = function () {
    return new IncompleteLocalDate(this.hn_1, this.in_1, this.jn_1, this.kn_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteLocalDate) {
      tmp_2 = this.hn_1 == other.hn_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.in_1 == other.in_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.jn_1 == other.jn_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.kn_1 == other.kn_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.hn_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.in_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.jn_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.kn_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    return tmp_1 + imul(tmp$ret$3, 31) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.hn_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.in_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.jn_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.kn_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion_7() {
    Companion_instance_7 = this;
    this.hp_1 = new MonthNames(listOf(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
    this.ip_1 = new MonthNames(listOf(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function String$toString$ref() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function MonthNames(names) {
    Companion_getInstance_8();
    this.ks_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.ks_1.l() === 12)) {
      // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>' call
      var message = 'Month names must contain exactly 12 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.ks_1);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>' call
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.ks_1.k(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>.<anonymous>' call
          var message_0 = 'A month name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.ks_1.k(ix) === this.ks_1.k(ix2))) {
              // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>.<anonymous>' call
              var message_1 = "Month names must be unique, but '" + this.ks_1.k(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(MonthNames).toString = function () {
    return joinToString(this.ks_1, ', ', 'MonthNames(', ')', VOID, VOID, String$toString$ref());
  };
  protoOf(MonthNames).equals = function (other) {
    var tmp;
    if (other instanceof MonthNames) {
      tmp = equals(this.ks_1, other.ks_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNames).hashCode = function () {
    return hashCode(this.ks_1);
  };
  function Companion_8() {
    Companion_instance_8 = this;
    this.mp_1 = new DayOfWeekNames(listOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
    this.np_1 = new DayOfWeekNames(listOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']));
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function String$toString$ref_0() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function DayOfWeekNames(names) {
    Companion_getInstance_9();
    this.ls_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.ls_1.l() === 7)) {
      // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>' call
      var message = 'Day of week names must contain exactly 7 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.ls_1);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>' call
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.ls_1.k(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>.<anonymous>' call
          var message_0 = 'A day-of-week name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.ls_1.k(ix) === this.ls_1.k(ix2))) {
              // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>.<anonymous>' call
              var message_1 = "Day-of-week names must be unique, but '" + this.ls_1.k(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(DayOfWeekNames).toString = function () {
    return joinToString(this.ls_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, String$toString$ref_0());
  };
  protoOf(DayOfWeekNames).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekNames) {
      tmp = equals(this.ls_1, other.ls_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekNames).hashCode = function () {
    return hashCode(this.ls_1);
  };
  function Companion_9() {
  }
  protoOf(Companion_9).ms = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.rp());
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function Builder_0(actualBuilder) {
    this.ns_1 = actualBuilder;
  }
  protoOf(Builder_0).ar = function () {
    return this.ns_1;
  };
  protoOf(Builder_0).ir = function (structure) {
    return this.ns_1.dr(structure);
  };
  protoOf(Builder_0).fr = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.os_1 = actualFormat;
  }
  protoOf(LocalDateFormat).yr = function () {
    return this.os_1;
  };
  protoOf(LocalDateFormat).ps = function (intermediate) {
    return intermediate.lq();
  };
  protoOf(LocalDateFormat).as = function (intermediate) {
    return this.ps(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).bs = function () {
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
    var tmp = DateFields_getInstance().qs_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.zs_1 = padding;
    this.at_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.zs_1.equals(other.zs_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.at_1 === other.at_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.zs_1.hashCode(), 31) + getBooleanHashCode(this.at_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().rs_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.mt_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.mt_1.equals(other.mt_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.mt_1.hashCode();
  };
  function MonthNameDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().rs_1, names.ks_1, 'monthName');
    this.ut_1 = names;
  }
  protoOf(MonthNameDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthNameDirective) {
      tmp = equals(this.ut_1.ks_1, other.ut_1.ks_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNameDirective).hashCode = function () {
    return hashCode(this.ut_1.ks_1);
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().ss_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.cu_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.cu_1.equals(other.cu_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.cu_1.hashCode();
  };
  function DayOfWeekDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().ts_1, names.ls_1, 'dayOfWeekName');
    this.gu_1 = names;
  }
  protoOf(DayOfWeekDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekDirective) {
      tmp = equals(this.gu_1.ls_1, other.gu_1.ls_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekDirective).hashCode = function () {
    return hashCode(this.gu_1.ls_1);
  };
  function DateFields() {
    DateFields_instance = this;
    this.qs_1 = new GenericFieldSpec(new PropertyAccessor(year$factory_2()));
    this.rs_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory_0()), 1, 12);
    this.ss_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory_0()), 1, 31);
    this.ts_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
  }
  var DateFields_instance;
  function DateFields_getInstance() {
    if (DateFields_instance == null)
      new DateFields();
    return DateFields_instance;
  }
  function ISO_DATE$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_9;
    return tmp.ms(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.kp();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.mr();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.nr();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_9;
    return tmp.ms(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.kp();
    $this$build.mr();
    $this$build.nr();
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
  function year$factory_2() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.rn();
    }, function (receiver, value) {
      return receiver.qn(value);
    });
  }
  function monthNumber$factory_0() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.pn();
    }, function (receiver, value) {
      return receiver.on(value);
    });
  }
  function dayOfMonth$factory_0() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.ln();
    }, function (receiver, value) {
      return receiver.gn(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.nn();
    }, function (receiver, value) {
      return receiver.mn(value);
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
    return tmp0.t1();
  }
  var ISO_DATETIME$delegate;
  function get_emptyIncompleteLocalDateTime() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    return emptyIncompleteLocalDateTime;
  }
  var emptyIncompleteLocalDateTime;
  function Companion_10() {
  }
  protoOf(Companion_10).hu = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new LocalDateTimeFormat(builder.rp());
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function Builder_1(actualBuilder) {
    this.iu_1 = actualBuilder;
  }
  protoOf(Builder_1).ar = function () {
    return this.iu_1;
  };
  protoOf(Builder_1).br = function (structure) {
    this.iu_1.dr(structure);
  };
  protoOf(Builder_1).fr = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function LocalDateTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.ju_1 = actualFormat;
  }
  protoOf(LocalDateTimeFormat).yr = function () {
    return this.ju_1;
  };
  protoOf(LocalDateTimeFormat).ku = function (intermediate) {
    return intermediate.nu();
  };
  protoOf(LocalDateTimeFormat).as = function (intermediate) {
    return this.ku(intermediate instanceof IncompleteLocalDateTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).bs = function () {
    return get_emptyIncompleteLocalDateTime();
  };
  function IncompleteLocalDateTime(date, time) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    this.lu_1 = date;
    this.mu_1 = time;
  }
  protoOf(IncompleteLocalDateTime).gn = function (_set____db54di) {
    this.lu_1.jn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).ln = function () {
    return this.lu_1.jn_1;
  };
  protoOf(IncompleteLocalDateTime).mn = function (_set____db54di) {
    this.lu_1.kn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).nn = function () {
    return this.lu_1.kn_1;
  };
  protoOf(IncompleteLocalDateTime).on = function (_set____db54di) {
    this.lu_1.in_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).pn = function () {
    return this.lu_1.in_1;
  };
  protoOf(IncompleteLocalDateTime).qn = function (_set____db54di) {
    this.lu_1.hn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).rn = function () {
    return this.lu_1.hn_1;
  };
  protoOf(IncompleteLocalDateTime).sn = function (_set____db54di) {
    this.mu_1.vn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).zn = function () {
    return this.mu_1.vn_1;
  };
  protoOf(IncompleteLocalDateTime).ao = function (value) {
    this.mu_1.ao(value);
  };
  protoOf(IncompleteLocalDateTime).bo = function () {
    return this.mu_1.bo();
  };
  protoOf(IncompleteLocalDateTime).co = function (_set____db54di) {
    this.mu_1.tn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).do = function () {
    return this.mu_1.tn_1;
  };
  protoOf(IncompleteLocalDateTime).eo = function (_set____db54di) {
    this.mu_1.un_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).fo = function () {
    return this.mu_1.un_1;
  };
  protoOf(IncompleteLocalDateTime).go = function (_set____db54di) {
    this.mu_1.wn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).ho = function () {
    return this.mu_1.wn_1;
  };
  protoOf(IncompleteLocalDateTime).io = function (_set____db54di) {
    this.mu_1.yn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).jo = function () {
    return this.mu_1.yn_1;
  };
  protoOf(IncompleteLocalDateTime).ko = function (_set____db54di) {
    this.mu_1.xn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).lo = function () {
    return this.mu_1.xn_1;
  };
  protoOf(IncompleteLocalDateTime).nu = function () {
    return LocalDateTime_init_$Create$_0(this.lu_1.lq(), this.mu_1.jq());
  };
  protoOf(IncompleteLocalDateTime).yo = function () {
    return new IncompleteLocalDateTime(this.lu_1.yo(), this.mu_1.yo());
  };
  function AbstractWithDateTimeBuilder() {
  }
  function ISO_DATETIME$delegate$lambda() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp = Companion_instance_10;
    return tmp.hu(ISO_DATETIME$delegate$lambda$lambda);
  }
  function ISO_DATETIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    $this$build.zo(get_ISO_DATE());
    var tmp = [ISO_DATETIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME$delegate$lambda$lambda$lambda_0);
    $this$build.rr(get_ISO_TIME());
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
    return tmp0.t1();
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
    this.tn_1 = hour;
    this.un_1 = hourOfAmPm;
    this.vn_1 = amPm;
    this.wn_1 = minute;
    this.xn_1 = second;
    this.yn_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).co = function (_set____db54di) {
    this.tn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).do = function () {
    return this.tn_1;
  };
  protoOf(IncompleteLocalTime).eo = function (_set____db54di) {
    this.un_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).fo = function () {
    return this.un_1;
  };
  protoOf(IncompleteLocalTime).sn = function (_set____db54di) {
    this.vn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).zn = function () {
    return this.vn_1;
  };
  protoOf(IncompleteLocalTime).go = function (_set____db54di) {
    this.wn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).ho = function () {
    return this.wn_1;
  };
  protoOf(IncompleteLocalTime).ko = function (_set____db54di) {
    this.xn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).lo = function () {
    return this.xn_1;
  };
  protoOf(IncompleteLocalTime).io = function (_set____db54di) {
    this.yn_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).jo = function () {
    return this.yn_1;
  };
  protoOf(IncompleteLocalTime).jq = function () {
    var tmp0_safe_receiver = this.tn_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>' call
      var tmp0_safe_receiver_0 = this.un_1;
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
      var tmp1_safe_receiver = this.vn_1;
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
      var tmp1_safe_receiver_0 = this.un_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>' call
        var tmp0_safe_receiver_1 = this.vn_1;
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
    var tmp_4 = requireParsedField(this.wn_1, 'minute');
    var tmp4_elvis_lhs = this.xn_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.yn_1;
    return LocalTime_init_$Create$(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).yo = function () {
    return new IncompleteLocalTime(this.tn_1, this.un_1, this.vn_1, this.wn_1, this.xn_1, this.yn_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.tn_1 == other.tn_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.un_1 == other.un_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.vn_1, other.vn_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.wn_1 == other.wn_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.xn_1 == other.xn_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.yn_1 == other.yn_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp6_elvis_lhs = this.tn_1;
    var tmp = imul(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs, 31);
    var tmp5_elvis_lhs = this.un_1;
    var tmp_0 = tmp + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp3_safe_receiver = this.vn_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp2_elvis_lhs = this.wn_1;
    var tmp_2 = tmp_1 + imul(tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, 31) | 0;
    var tmp1_elvis_lhs = this.xn_1;
    var tmp_3 = tmp_2 + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp0_elvis_lhs = this.yn_1;
    return tmp_3 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.tn_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.wn_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.xn_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.yn_1;
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
  function Companion_11() {
  }
  protoOf(Companion_11).ru = function (block) {
    var builder = new Builder_2(new AppendableFormatStructure());
    block(builder);
    return new LocalTimeFormat(builder.rp());
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function Builder_2(actualBuilder) {
    this.su_1 = actualBuilder;
  }
  protoOf(Builder_2).ar = function () {
    return this.su_1;
  };
  protoOf(Builder_2).jr = function (structure) {
    this.su_1.dr(structure);
  };
  protoOf(Builder_2).fr = function () {
    return new Builder_2(new AppendableFormatStructure());
  };
  function LocalTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.tu_1 = actualFormat;
  }
  protoOf(LocalTimeFormat).yr = function () {
    return this.tu_1;
  };
  protoOf(LocalTimeFormat).uu = function (intermediate) {
    return intermediate.jq();
  };
  protoOf(LocalTimeFormat).as = function (intermediate) {
    return this.uu(intermediate instanceof IncompleteLocalTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalTimeFormat).bs = function () {
    return get_emptyIncompleteLocalTime();
  };
  function AbstractWithTimeBuilder() {
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().vu_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.fv_1 = padding;
  }
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.fv_1.equals(other.fv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.fv_1.hashCode();
  };
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().wu_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.kv_1 = padding;
  }
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.kv_1.equals(other.kv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.kv_1.hashCode();
  };
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().xu_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.pv_1 = padding;
  }
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.pv_1.equals(other.pv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.pv_1.hashCode();
  };
  function Companion_12() {
    Companion_instance_12 = this;
    this.qv_1 = listOf([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.rv_1 = listOf([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_13();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_13().qv_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().yu_1, minDigits, maxDigits, zerosToAdd);
    this.wv_1 = minDigits;
    this.xv_1 = maxDigits;
  }
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.wv_1 === other.wv_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.xv_1 === other.xv_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.wv_1) + this.xv_1 | 0;
  };
  function TimeFields() {
    TimeFields_instance = this;
    this.vu_1 = new UnsignedFieldSpec(new PropertyAccessor(hour$factory_0()), 0, 23);
    this.wu_1 = new UnsignedFieldSpec(new PropertyAccessor(minute$factory_0()), 0, 59);
    this.xu_1 = new UnsignedFieldSpec(new PropertyAccessor(second$factory_0()), 0, 59, VOID, 0);
    this.yu_1 = new GenericFieldSpec(new PropertyAccessor(fractionOfSecond$factory()), VOID, new DecimalFraction(0, 9));
    this.zu_1 = new GenericFieldSpec(new PropertyAccessor(amPm$factory_0()));
    this.av_1 = new UnsignedFieldSpec(new PropertyAccessor(hourOfAmPm$factory_0()), 1, 12);
  }
  var TimeFields_instance;
  function TimeFields_getInstance() {
    if (TimeFields_instance == null)
      new TimeFields();
    return TimeFields_instance;
  }
  function ISO_TIME$delegate$lambda() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp = Companion_instance_11;
    return tmp.ru(ISO_TIME$delegate$lambda$lambda);
  }
  function ISO_TIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    $this$build.ap();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.bp();
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
    $this$alternativeParsing.cp();
    optional($this$alternativeParsing, VOID, ISO_TIME$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.dp(1, 9);
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
  function hour$factory_0() {
    return getPropertyCallableRef('hour', 1, KMutableProperty1, function (receiver) {
      return receiver.do();
    }, function (receiver, value) {
      return receiver.co(value);
    });
  }
  function minute$factory_0() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.ho();
    }, function (receiver, value) {
      return receiver.go(value);
    });
  }
  function second$factory_0() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.lo();
    }, function (receiver, value) {
      return receiver.ko(value);
    });
  }
  function fractionOfSecond$factory() {
    return getPropertyCallableRef('fractionOfSecond', 1, KMutableProperty1, function (receiver) {
      return receiver.bo();
    }, function (receiver, value) {
      return receiver.ao(value);
    });
  }
  function amPm$factory_0() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.zn();
    }, function (receiver, value) {
      return receiver.sn(value);
    });
  }
  function hourOfAmPm$factory_0() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.fo();
    }, function (receiver, value) {
      return receiver.eo(value);
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
  function get_ISO_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_OFFSET$factory();
    return tmp0.t1();
  }
  var ISO_OFFSET$delegate;
  var ISO_OFFSET_BASIC$delegate;
  function get_FOUR_DIGIT_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = FOUR_DIGIT_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    FOUR_DIGIT_OFFSET$factory();
    return tmp0.t1();
  }
  var FOUR_DIGIT_OFFSET$delegate;
  function get_emptyIncompleteUtcOffset() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    return emptyIncompleteUtcOffset;
  }
  var emptyIncompleteUtcOffset;
  function UtcOffsetFieldContainer() {
  }
  function IncompleteUtcOffset(isNegative, totalHoursAbs, minutesOfHour, secondsOfMinute) {
    isNegative = isNegative === VOID ? null : isNegative;
    totalHoursAbs = totalHoursAbs === VOID ? null : totalHoursAbs;
    minutesOfHour = minutesOfHour === VOID ? null : minutesOfHour;
    secondsOfMinute = secondsOfMinute === VOID ? null : secondsOfMinute;
    this.no_1 = isNegative;
    this.oo_1 = totalHoursAbs;
    this.po_1 = minutesOfHour;
    this.qo_1 = secondsOfMinute;
  }
  protoOf(IncompleteUtcOffset).mo = function (_set____db54di) {
    this.no_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).ro = function () {
    return this.no_1;
  };
  protoOf(IncompleteUtcOffset).wo = function (_set____db54di) {
    this.oo_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).xo = function () {
    return this.oo_1;
  };
  protoOf(IncompleteUtcOffset).so = function (_set____db54di) {
    this.po_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).to = function () {
    return this.po_1;
  };
  protoOf(IncompleteUtcOffset).uo = function (_set____db54di) {
    this.qo_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).vo = function () {
    return this.qo_1;
  };
  protoOf(IncompleteUtcOffset).iq = function () {
    var sign = this.no_1 === true ? -1 : 1;
    var tmp0_safe_receiver = this.oo_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp = imul(tmp0_safe_receiver, sign);
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = this.po_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp_1 = imul(tmp1_safe_receiver, sign);
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = this.qo_1;
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp_3 = imul(tmp2_safe_receiver, sign);
    }
    return UtcOffset_0(tmp_0, tmp_2, tmp_3);
  };
  protoOf(IncompleteUtcOffset).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteUtcOffset) {
      tmp_2 = this.no_1 == other.no_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.oo_1 == other.oo_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.po_1 == other.po_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.qo_1 == other.qo_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteUtcOffset).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.no_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.oo_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp_0 = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.po_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp_1 = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.qo_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
  };
  protoOf(IncompleteUtcOffset).yo = function () {
    return new IncompleteUtcOffset(this.no_1, this.oo_1, this.po_1, this.qo_1);
  };
  protoOf(IncompleteUtcOffset).toString = function () {
    var tmp0_safe_receiver = this.no_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toString.<anonymous>' call
      tmp = tmp0_safe_receiver ? '-' : '+';
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? ' ' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.oo_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.po_1;
    var tmp_2 = toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = this.qo_1;
    return tmp_0 + tmp_1 + ':' + tmp_2 + ':' + toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
  };
  function UtcOffsetWholeHoursDirective(padding) {
    var tmp = OffsetFields_getInstance().dw_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.kw_1 = padding;
  }
  protoOf(UtcOffsetWholeHoursDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetWholeHoursDirective) {
      tmp = this.kw_1.equals(other.kw_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetWholeHoursDirective).hashCode = function () {
    return this.kw_1.hashCode();
  };
  function Companion_13() {
  }
  protoOf(Companion_13).lw = function (block) {
    var builder = new Builder_3(new AppendableFormatStructure());
    block(builder);
    return new UtcOffsetFormat(builder.rp());
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    return Companion_instance_13;
  }
  function Builder_3(actualBuilder) {
    this.mw_1 = actualBuilder;
  }
  protoOf(Builder_3).ar = function () {
    return this.mw_1;
  };
  protoOf(Builder_3).er = function (structure) {
    this.mw_1.dr(structure);
  };
  protoOf(Builder_3).fr = function () {
    return new Builder_3(new AppendableFormatStructure());
  };
  function UtcOffsetFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.nw_1 = actualFormat;
  }
  protoOf(UtcOffsetFormat).yr = function () {
    return this.nw_1;
  };
  protoOf(UtcOffsetFormat).ow = function (intermediate) {
    return intermediate.iq();
  };
  protoOf(UtcOffsetFormat).as = function (intermediate) {
    return this.ow(intermediate instanceof IncompleteUtcOffset ? intermediate : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).bs = function () {
    return get_emptyIncompleteUtcOffset();
  };
  function OffsetFields$sign$1() {
    this.pw_1 = new PropertyAccessor(isNegative$factory_0());
  }
  protoOf(OffsetFields$sign$1).ro = function () {
    return this.pw_1;
  };
  protoOf(OffsetFields$sign$1).qw = function (obj) {
    var tmp;
    var tmp_0;
    var tmp0_elvis_lhs = obj.xo();
    if ((tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) === 0) {
      var tmp1_elvis_lhs = obj.to();
      tmp_0 = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp2_elvis_lhs = obj.vo();
      tmp = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OffsetFields$sign$1).rw = function (obj) {
    return this.qw((!(obj == null) ? isInterface(obj, UtcOffsetFieldContainer) : false) ? obj : THROW_CCE());
  };
  function OffsetFields() {
    OffsetFields_instance = this;
    var tmp = this;
    tmp.cw_1 = new OffsetFields$sign$1();
    var tmp_0 = this;
    var tmp0_accessor = new PropertyAccessor(totalHoursAbs$factory_0());
    var tmp1_sign = this.cw_1;
    tmp_0.dw_1 = new UnsignedFieldSpec(tmp0_accessor, 0, 18, VOID, 0, tmp1_sign);
    var tmp_1 = this;
    var tmp0_accessor_0 = new PropertyAccessor(minutesOfHour$factory_0());
    var tmp1_sign_0 = this.cw_1;
    tmp_1.ew_1 = new UnsignedFieldSpec(tmp0_accessor_0, 0, 59, VOID, 0, tmp1_sign_0);
    var tmp_2 = this;
    var tmp0_accessor_1 = new PropertyAccessor(secondsOfMinute$factory_0());
    var tmp1_sign_1 = this.cw_1;
    tmp_2.fw_1 = new UnsignedFieldSpec(tmp0_accessor_1, 0, 59, VOID, 0, tmp1_sign_1);
  }
  var OffsetFields_instance;
  function OffsetFields_getInstance() {
    if (OffsetFields_instance == null)
      new OffsetFields();
    return OffsetFields_instance;
  }
  function AbstractWithOffsetBuilder() {
  }
  function UtcOffsetMinuteOfHourDirective(padding) {
    var tmp = OffsetFields_getInstance().ew_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.ww_1 = padding;
  }
  protoOf(UtcOffsetMinuteOfHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetMinuteOfHourDirective) {
      tmp = this.ww_1.equals(other.ww_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetMinuteOfHourDirective).hashCode = function () {
    return this.ww_1.hashCode();
  };
  function UtcOffsetSecondOfMinuteDirective(padding) {
    var tmp = OffsetFields_getInstance().fw_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.bx_1 = padding;
  }
  protoOf(UtcOffsetSecondOfMinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetSecondOfMinuteDirective) {
      tmp = this.bx_1.equals(other.bx_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).hashCode = function () {
    return this.bx_1.hashCode();
  };
  function ISO_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_13;
    return tmp.lw(ISO_OFFSET$delegate$lambda$lambda);
  }
  function ISO_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.lp('z');
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.ep();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.ur();
    optional($this$optional, VOID, ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.wr();
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_13;
    return tmp.lw(ISO_OFFSET_BASIC$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.lp('z');
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.ep();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.ur();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.wr();
    return Unit_instance;
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_13;
    return tmp.lw(FOUR_DIGIT_OFFSET$delegate$lambda$lambda);
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$build.ep();
    $this$build.ur();
    return Unit_instance;
  }
  function ISO_OFFSET$factory() {
    return getPropertyCallableRef('ISO_OFFSET', 0, KProperty0, function () {
      return get_ISO_OFFSET();
    }, null);
  }
  function FOUR_DIGIT_OFFSET$factory() {
    return getPropertyCallableRef('FOUR_DIGIT_OFFSET', 0, KProperty0, function () {
      return get_FOUR_DIGIT_OFFSET();
    }, null);
  }
  function totalHoursAbs$factory_0() {
    return getPropertyCallableRef('totalHoursAbs', 1, KMutableProperty1, function (receiver) {
      return receiver.xo();
    }, function (receiver, value) {
      return receiver.wo(value);
    });
  }
  function minutesOfHour$factory_0() {
    return getPropertyCallableRef('minutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.to();
    }, function (receiver, value) {
      return receiver.so(value);
    });
  }
  function secondsOfMinute$factory_0() {
    return getPropertyCallableRef('secondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.vo();
    }, function (receiver, value) {
      return receiver.uo(value);
    });
  }
  function isNegative$factory_0() {
    return getPropertyCallableRef('isNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.ro();
    }, function (receiver, value) {
      return receiver.mo(value);
    });
  }
  var properties_initialized_UtcOffsetFormat_kt_6y9jku;
  function _init_properties_UtcOffsetFormat_kt__9r9ddw() {
    if (!properties_initialized_UtcOffsetFormat_kt_6y9jku) {
      properties_initialized_UtcOffsetFormat_kt_6y9jku = true;
      ISO_OFFSET$delegate = lazy(ISO_OFFSET$delegate$lambda);
      ISO_OFFSET_BASIC$delegate = lazy(ISO_OFFSET_BASIC$delegate$lambda);
      FOUR_DIGIT_OFFSET$delegate = lazy(FOUR_DIGIT_OFFSET$delegate$lambda);
      emptyIncompleteUtcOffset = new IncompleteUtcOffset();
    }
  }
  function AppendableFormatStructure() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.cr_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).rp = function () {
    return new ConcatenatedFormatStructure(this.cr_1);
  };
  protoOf(AppendableFormatStructure).dr = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.cr_1.e(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.is_1.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'kotlinx.datetime.internal.format.AppendableFormatStructure.add.<anonymous>' call
          this.cr_1.e(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.cx(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.bt_1 = field;
    this.ct_1 = minDigits;
    this.dt_1 = maxDigits;
    this.et_1 = spacePadding;
    this.ft_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.ct_1 == null || this.ct_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.ct_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.dt_1 == null || this.ct_1 == null || this.dt_1 >= this.ct_1)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.dt_1 + ') is less than the minimum number of digits (' + this.ct_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).gt = function () {
    return this.bt_1;
  };
  protoOf(SignedIntFieldFormatDirective).ht = function () {
    var tmp = Accessor$getterNotNull$ref(this.bt_1.dx());
    var tmp0_elvis_lhs = this.ct_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.ft_1);
    return !(this.et_1 == null) ? new SpacePaddedFormatter(formatter, this.et_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).hs = function () {
    return SignedIntParser(this.ct_1, this.dt_1, this.et_1, this.bt_1.dx(), this.bt_1.ex(), this.ft_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.cx(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.nt_1 = field;
    this.ot_1 = minDigits;
    this.pt_1 = spacePadding;
    this.qt_1 = this.nt_1.lx_1;
    // Inline function 'kotlin.require' call
    if (!(this.ot_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.ot_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.qt_1 >= this.ot_1)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.qt_1 + ') is less than the minimum number of digits (' + this.ot_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.pt_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.pt_1 > this.ot_1)) {
        // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
        var message_1 = 'The space padding (' + this.pt_1 + ') should be more than the minimum number of digits (' + this.ot_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).gt = function () {
    return this.nt_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).ht = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.nt_1.fx_1), this.ot_1);
    return !(this.pt_1 == null) ? new SpacePaddedFormatter(formatter, this.pt_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).hs = function () {
    return spaceAndZeroPaddedUnsignedInt(this.ot_1, this.qt_1, this.pt_1, this.nt_1.fx_1, this.nt_1.ix_1);
  };
  function getStringValue($this, target) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.internal.format.NamedUnsignedIntFieldFormatDirective.getStringValue.<anonymous>' call
    var it = $this.vt_1.fx_1.cx(target);
    var tmp0_elvis_lhs = getOrNull($this.wt_1, it - $this.vt_1.gx_1 | 0);
    return tmp0_elvis_lhs == null ? 'The value ' + it + ' of ' + $this.vt_1.ix_1 + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString($outer) {
    this.mx_1 = $outer;
  }
  protoOf(AssignableString).nx = function (container, newValue) {
    var tmp0_safe_receiver = this.mx_1.vt_1.fx_1.ox(container, this.mx_1.wt_1.q1(newValue) + this.mx_1.vt_1.gx_1 | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.internal.format.AssignableString.trySetWithoutReassigning.<anonymous>' call
      tmp = this.mx_1.wt_1.k(tmp0_safe_receiver - this.mx_1.vt_1.gx_1 | 0);
    }
    return tmp;
  };
  protoOf(AssignableString).ox = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.nx(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString).ex = function () {
    return this.mx_1.xt_1;
  };
  function NamedUnsignedIntFieldFormatDirective$getStringValue$ref($boundThis) {
    var l = function (p0) {
      return getStringValue($boundThis, p0);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedUnsignedIntFieldFormatDirective(field, values, name) {
    this.vt_1 = field;
    this.wt_1 = values;
    this.xt_1 = name;
    // Inline function 'kotlin.require' call
    if (!(this.wt_1.l() === ((this.vt_1.hx_1 - this.vt_1.gx_1 | 0) + 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.NamedUnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The number of values (' + this.wt_1.l() + ') in ' + toString(this.wt_1) + ' does not match the range of the field (' + ((this.vt_1.hx_1 - this.vt_1.gx_1 | 0) + 1 | 0) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NamedUnsignedIntFieldFormatDirective).gt = function () {
    return this.vt_1;
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).ht = function () {
    return new StringFormatterStructure(NamedUnsignedIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).hs = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.wt_1, new AssignableString(this), 'one of ' + toString(this.wt_1) + ' for ' + this.xt_1)), emptyList());
  };
  function Accessor$getterNotNull$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.cx(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.yv_1 = field;
    this.zv_1 = minDigits;
    this.aw_1 = maxDigits;
    this.bw_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).gt = function () {
    return this.yv_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).ht = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_1(this.yv_1.dx()), this.zv_1, this.aw_1, this.bw_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).hs = function () {
    return new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new FractionPartConsumer(this.zv_1, this.aw_1, this.yv_1.dx(), this.yv_1.ex())))), emptyList());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.ex() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.px_1 = accessor;
    this.qx_1 = name;
    this.rx_1 = defaultValue;
    this.sx_1 = sign;
  }
  protoOf(GenericFieldSpec).dx = function () {
    return this.px_1;
  };
  protoOf(GenericFieldSpec).ex = function () {
    return this.qx_1;
  };
  protoOf(GenericFieldSpec).tx = function () {
    return this.rx_1;
  };
  protoOf(GenericFieldSpec).ux = function () {
    return this.sx_1;
  };
  function PropertyAccessor(property) {
    this.vx_1 = property;
  }
  protoOf(PropertyAccessor).ex = function () {
    return this.vx_1.callableName;
  };
  protoOf(PropertyAccessor).wx = function (container, newValue) {
    var oldValue = this.vx_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.vx_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).ox = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.wx(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).xx = function (container) {
    return this.vx_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.ex() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.fx_1 = accessor;
    this.gx_1 = minValue;
    this.hx_1 = maxValue;
    this.ix_1 = name;
    this.jx_1 = defaultValue;
    this.kx_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.hx_1 < 10) {
      tmp_0 = 1;
    } else if (this.hx_1 < 100) {
      tmp_0 = 2;
    } else if (this.hx_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.hx_1 + ' is too large');
    }
    tmp.lx_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).dx = function () {
    return this.fx_1;
  };
  protoOf(UnsignedFieldSpec).ex = function () {
    return this.ix_1;
  };
  protoOf(UnsignedFieldSpec).tx = function () {
    return this.jx_1;
  };
  protoOf(UnsignedFieldSpec).ux = function () {
    return this.kx_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.ex() + ' (default value is ' + toString_1(this.tx()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.fs_1 = protoOf(ConcatenatedFormatStructure).ht.call(this);
    this.gs_1 = protoOf(ConcatenatedFormatStructure).hs.call(this);
  }
  protoOf(CachedFormatStructure).ht = function () {
    return this.fs_1;
  };
  protoOf(CachedFormatStructure).hs = function () {
    return this.gs_1;
  };
  function BasicFormatStructure(directive) {
    this.yx_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.yx_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.yx_1, other.yx_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.yx_1);
  };
  protoOf(BasicFormatStructure).hs = function () {
    return this.yx_1.hs();
  };
  protoOf(BasicFormatStructure).ht = function () {
    return this.yx_1.ht();
  };
  function ConstantFormatStructure(string) {
    this.zx_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.zx_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.zx_1 === other.zx_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.zx_1);
  };
  protoOf(ConstantFormatStructure).hs = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.zx_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>' call
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.zx_1, 0))) {
        var tmp0 = this.zx_1;
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
        var tmp2 = this.zx_1;
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
        tmp_0 = this.zx_1;
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
      tmp = this_1.o4();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).ht = function () {
    return new ConstantStringFormatterStructure(this.zx_1);
  };
  function formatter$checkIfAllNegative(this$0, value) {
    var seenNonZero = false;
    var tmp0_iterator = this$0.cy_1.g();
    $l$loop: while (tmp0_iterator.h()) {
      var check = tmp0_iterator.i();
      if (check.ro().xx(value) === true)
        seenNonZero = true;
      else if (check.rw(value))
        continue $l$loop;
      else
        return false;
    }
    return seenNonZero;
  }
  function SignedFormatStructure$parser$lambda(this$0) {
    return function (value, isNegative) {
      var tmp0_iterator = this$0.cy_1.g();
      while (tmp0_iterator.h()) {
        var field = tmp0_iterator.i();
        var wasNegative = field.ro().xx(value) === true;
        field.ro().ox(value, !(isNegative === wasNegative));
      }
      return Unit_instance;
    };
  }
  function SignedFormatStructure$formatter$checkIfAllNegative$ref(this$0) {
    var l = function (p0) {
      return formatter$checkIfAllNegative(this$0, p0);
    };
    l.callableName = 'checkIfAllNegative';
    return l;
  }
  function SignedFormatStructure(format, withPlusSign) {
    this.ay_1 = format;
    this.by_1 = withPlusSign;
    var tmp = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = basicFormats(this.ay_1);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'kotlinx.datetime.internal.format.SignedFormatStructure.fieldSigns.<anonymous>' call
      var tmp0_safe_receiver = element.gt().ux();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.e(tmp0_safe_receiver);
      }
    }
    tmp.cy_1 = toSet(destination);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.cy_1.j()) {
      // Inline function 'kotlinx.datetime.internal.format.SignedFormatStructure.<anonymous>' call
      var message = 'Signed format must contain at least one field with a sign';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SignedFormatStructure).toString = function () {
    return 'SignedFormatStructure(' + toString(this.ay_1) + ')';
  };
  protoOf(SignedFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SignedFormatStructure) {
      tmp_0 = equals(this.ay_1, other.ay_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.by_1 === other.by_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SignedFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.ay_1)) + getBooleanHashCode(this.by_1) | 0;
  };
  protoOf(SignedFormatStructure).hs = function () {
    return concat(listOf([new ParserStructure(listOf_0(new SignParser(SignedFormatStructure$parser$lambda(this), this.by_1, 'sign for ' + toString(this.cy_1))), emptyList()), this.ay_1.hs()]));
  };
  protoOf(SignedFormatStructure).ht = function () {
    var innerFormat = this.ay_1.ht();
    return new SignedFormatter(innerFormat, SignedFormatStructure$formatter$checkIfAllNegative$ref(this), this.by_1);
  };
  function Companion_14() {
  }
  protoOf(Companion_14).dy = function (field) {
    var default_0 = field.tx();
    // Inline function 'kotlin.require' call
    if (!!(default_0 == null)) {
      // Inline function 'kotlinx.datetime.internal.format.Companion.fromField.<anonymous>' call
      var message = "The field '" + field.ex() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.dx(), default_0);
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    return Companion_instance_14;
  }
  function access$_get_accessor__yxxs4k($this) {
    return $this.ey_1;
  }
  function access$_get_defaultValue__8tt04b($this) {
    return $this.fy_1;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    this.ey_1 = accessor;
    this.fy_1 = defaultValue;
  }
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var tmp0_iterator = this$0.iy_1.g();
      while (tmp0_iterator.h()) {
        var field = tmp0_iterator.i();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        access$_get_accessor__yxxs4k(field).ox(it, access$_get_defaultValue__8tt04b(field));
      }
      return Unit_instance;
    };
  }
  function Accessor$getter$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.xx(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.jy(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.ky(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.gy_1 = onZero;
    this.hy_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.hy_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.fields.<anonymous>' call
      var tmp$ret$0 = item.gt();
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
      var tmp$ret$3 = Companion_instance_14.dy(item_0);
      destination_0.e(tmp$ret$3);
    }
    tmp.iy_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.gy_1 + ', ' + toString(this.hy_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.gy_1 === other.gy_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.hy_1, other.hy_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.gy_1)) + hashCode(this.hy_1) | 0;
  };
  protoOf(OptionalFormatStructure).hs = function () {
    var tmp = emptyList();
    var tmp_0 = this.hy_1.hs();
    var tmp_1 = (new ConstantFormatStructure(this.gy_1)).hs();
    var tmp_2;
    if (this.iy_1.j()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf_0(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf([tmp_0, concat(listOf([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).ht = function () {
    var formatter = this.hy_1.ht();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.iy_1;
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
      tmp_0 = new ConstantStringFormatterStructure(this.gy_1);
    } else {
      var tmp_1 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.gy_1));
      tmp_0 = new ConditionalFormatter(listOf([tmp_1, to(Truth$test$ref(Truth_instance), formatter)]));
    }
    return tmp_0;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.ly_1 = mainFormat;
    this.my_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.my_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.ly_1, other.ly_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.my_1, other.my_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.ly_1)) + hashCode(this.my_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).hs = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.AlternativesParsingFormatStructure.parser.<anonymous>' call
    this_0.e(this.ly_1.hs());
    var tmp0_iterator = this.my_1.g();
    while (tmp0_iterator.h()) {
      var format = tmp0_iterator.i();
      this_0.e(format.hs());
    }
    var tmp$ret$2 = this_0.o4();
    return new ParserStructure(tmp, tmp$ret$2);
  };
  protoOf(AlternativesParsingFormatStructure).ht = function () {
    return this.ly_1.ht();
  };
  function ConcatenatedFormatStructure(formats) {
    this.is_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.is_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.is_1, other.is_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.is_1);
  };
  protoOf(ConcatenatedFormatStructure).hs = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.is_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.parser.<anonymous>' call
      var tmp$ret$0 = item.hs();
      destination.e(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).ht = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.is_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.formatter.<anonymous>' call
      var tmp$ret$0 = item.ht();
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
    return this_0.o4();
  }
  function basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format) {
    if (format instanceof BasicFormatStructure) {
      $this_buildList.e(format.yx_1);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.is_1.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>$rec.<anonymous>' call
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.ay_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.ly_1);
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_0 = format.my_1.g();
              while (_iterator__ex2g4s_0.h()) {
                var element_0 = _iterator__ex2g4s_0.i();
                // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>$rec.<anonymous>' call
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.hy_1);
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
    this.ny_1 = expectedValue;
    this.oy_1 = getter;
  }
  protoOf(ComparisonPredicate).jy = function (value) {
    return equals(this.oy_1(value), this.ny_1);
  };
  function Truth() {
  }
  protoOf(Truth).ky = function (value) {
    return true;
  };
  protoOf(Truth).jy = function (value) {
    return this.ky((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    return Truth_instance;
  }
  function ConjunctionPredicate(predicates) {
    this.py_1 = predicates;
  }
  protoOf(ConjunctionPredicate).jy = function (value) {
    var tmp0 = this.py_1;
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
        if (!element.jy(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function SpacePaddedFormatter(formatter, padding) {
    this.qy_1 = formatter;
    this.ry_1 = padding;
  }
  function SignedFormatter(formatter, allSubFormatsNegative, alwaysOutputSign) {
    this.sy_1 = formatter;
    this.ty_1 = allSubFormatsNegative;
    this.uy_1 = alwaysOutputSign;
  }
  function ConditionalFormatter(formatters) {
    this.vy_1 = formatters;
  }
  function ConcatenatedFormatter(formatters) {
    this.wy_1 = formatters;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.xy_1 = number;
    this.yy_1 = zeroPadding;
    this.zy_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.yy_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.yy_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.yy_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.yy_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.az_1 = number;
    this.bz_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.bz_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.bz_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.bz_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.bz_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function StringFormatterStructure(string) {
    this.cz_1 = string;
  }
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.dz_1 = number;
    this.ez_1 = minDigits;
    this.fz_1 = maxDigits;
    this.gz_1 = zerosToAdd;
    var containsArg = this.ez_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.DecimalFractionFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.ez_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.ez_1;
    var containsArg_0 = this.fz_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.DecimalFractionFormatterStructure.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.fz_1 + ') is not in range ' + this.ez_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function ConstantStringFormatterStructure(string) {
    this.hz_1 = string;
  }
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.kz_1 = minLength;
    this.lz_1 = maxLength;
    this.mz_1 = setter;
    var containsArg = this.kz_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.FractionPartConsumer.<anonymous>' call
      var message = 'Invalid minimum length ' + this.kz_1 + ' for field ' + this.oz_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.kz_1;
    var containsArg_0 = this.lz_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.FractionPartConsumer.<anonymous>' call
      var message_0 = 'Invalid maximum length ' + this.lz_1 + ' for field ' + this.oz_1 + ': expected ' + this.kz_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).pz = function (storage, input, start, end) {
    return (end - start | 0) < this.kz_1 ? new TooFewDigits(this.kz_1) : (end - start | 0) > this.lz_1 ? new TooManyDigits(this.lz_1) : setWithoutReassigning(this.mz_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.sz_1 = expected;
  }
  protoOf(ConstantNumberConsumer).pz = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.sz_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.sz_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.nz_1 = length;
    this.oz_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.nz_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).tz = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.uz_1 = maxDigits;
  }
  protoOf(TooManyDigits).tz = function () {
    return 'expected at most ' + this.uz_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.vz_1 = minDigits;
  }
  protoOf(TooFewDigits).tz = function () {
    return 'expected at least ' + this.vz_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.wz_1 = expected;
  }
  protoOf(WrongConstant).tz = function () {
    return "expected '" + this.wz_1 + "'";
  };
  function Conflicting(conflicting) {
    this.xz_1 = conflicting;
  }
  protoOf(Conflicting).tz = function () {
    return "attempted to overwrite the existing value '" + toString(this.xz_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ox(receiver, value);
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
    this.a10_1 = minLength;
    this.b10_1 = maxLength;
    this.c10_1 = setter;
    this.d10_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).uc(this.a()))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.UnsignedIntConsumer.<anonymous>' call
      var message = 'Invalid length for field ' + this.oz_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).pz = function (storage, input, start, end) {
    var tmp;
    if (!(this.b10_1 == null) && (end - start | 0) > this.b10_1) {
      tmp = new TooManyDigits(this.b10_1);
    } else if (!(this.a10_1 == null) && (end - start | 0) < this.a10_1) {
      tmp = new TooFewDigits(this.a10_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.c10_1, storage, this.d10_1 ? -result | 0 : result);
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
    this.e10_1 = position;
    this.f10_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_15() {
  }
  protoOf(Companion_15).g10 = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_15).h10 = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    return Companion_instance_15;
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
      var output = state.i10_1.yo();
      var inputPosition = state.k10_1;
      var parserStructure = state.j10_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>' call
        var inductionVariable = 0;
        var last = parserStructure.m10_1.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.m10_1.k(ix).o10(output, input, inputPosition);
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
        if (parserStructure.n10_1.j()) {
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
          var inductionVariable_0 = parserStructure.n10_1.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.e(new ParserState(output, parserStructure.n10_1.k(ix_0), inputPosition));
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
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).p10.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.i10_1 = output;
    this.j10_1 = parserStructure;
    this.k10_1 = inputPosition;
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
    var tmp0_other_with_cast = other instanceof Parser ? other.l10_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.q10_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).kc = function (a, b) {
    return this.q10_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).w2 = function () {
    return this.q10_1;
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
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp = b.e10_1;
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp$ret$1 = a.e10_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.l10_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.l10_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.l10_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.l10_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.m10_1 = operations;
    this.n10_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.m10_1, ', ') + '(' + joinToString(this.n10_1, ';') + ')';
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
      while (iterator.v3()) {
        var tmp2 = iterator.w3();
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
      return 'Position ' + errors.k(0).e10_1 + ': ' + errors.k(0).f10_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$_0(imul(averageMessageLength, errors.l()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.n10_1.j()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.m10_1, other.m10_1), other.n10_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.n10_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.append.<anonymous>' call
        var tmp$ret$0 = concat$append(item, other);
        destination.e(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.m10_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.m10_1.g();
    while (tmp0_iterator.h()) {
      var op = tmp0_iterator.i();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.p(op.r10_1);
        } else {
          currentNumberSpan = toMutableList(op.r10_1);
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
    var tmp0 = _this__u8e3s4.n10_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.m10_1.j()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.n10_1;
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
          var tmp0_safe_receiver = firstOrNull(element_0.m10_1);
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
          var firstOperation = firstOrNull(item.m10_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.r10_1))), drop(item.m10_1, 1)), item.n10_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.n10_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.m10_1), item.n10_1);
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
    return 'position ' + it.e10_1 + ": '" + it.f10_1() + "'";
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
  function TrieNode(children, isTerminal) {
    var tmp;
    if (children === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = children;
    }
    children = tmp;
    isTerminal = isTerminal === VOID ? false : isTerminal;
    this.u10_1 = children;
    this.v10_1 = isTerminal;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.w10_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).kc = function (a, b) {
    return this.w10_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).w2 = function () {
    return this.w10_1;
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
  function _init_$reduceTrie(trie) {
    var tmp0_iterator = trie.u10_1.g();
    while (tmp0_iterator.h()) {
      var child = tmp0_iterator.i().ac();
      _init_$reduceTrie(child);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var newChildren = ArrayList_init_$Create$_0();
    var tmp2_iterator = trie.u10_1.g();
    while (tmp2_iterator.h()) {
      var tmp3_loop_parameter = tmp2_iterator.i();
      var key = tmp3_loop_parameter.zb();
      var child_0 = tmp3_loop_parameter.ac();
      if (!child_0.v10_1 && child_0.u10_1.l() === 1) {
        var tmp4_container = single(child_0.u10_1);
        var grandChildKey = tmp4_container.zb();
        var grandChild = tmp4_container.ac();
        newChildren.e(to(key + grandChildKey, grandChild));
      } else {
        newChildren.e(to(key, child_0));
      }
    }
    trie.u10_1.b2();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = StringSetParserOperation$reduceTrie$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp$ret$2 = sortedWith(newChildren, tmp$ret$1);
    trie.u10_1.p(tmp$ret$2);
  }
  function StringSetParserOperation$lambda($key) {
    return function (it) {
      // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
      var tmp$ret$0 = it.xb_1;
      return compareValues(tmp$ret$0, $key);
    };
  }
  function StringSetParserOperation$consume$lambda(this$0, $input, $startIndex, $index) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = $index._v;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.y10_1 + ' but got ' + tmp$ret$0;
    };
  }
  function StringSetParserOperation$reduceTrie$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.reduceTrie.<anonymous>' call
    var tmp = a.xb_1;
    // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.reduceTrie.<anonymous>' call
    var tmp$ret$1 = b.xb_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function StringSetParserOperation(strings, setter, whatThisExpects) {
    this.x10_1 = setter;
    this.y10_1 = whatThisExpects;
    this.z10_1 = new TrieNode();
    var tmp0_iterator = strings.g();
    while (tmp0_iterator.h()) {
      var string = tmp0_iterator.i();
      // Inline function 'kotlin.text.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!(charSequenceLength(string) > 0)) {
        // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
        var message = 'Found an empty string in ' + this.y10_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var node = this.z10_1;
      var inductionVariable = 0;
      var last = string.length;
      while (inductionVariable < last) {
        var char = charSequenceGet(string, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2 = node.u10_1;
        // Inline function 'kotlin.collections.binarySearchBy' call
        var key = toString_0(char);
        var toIndex = tmp2.l();
        var searchResult = binarySearch(tmp2, 0, toIndex, StringSetParserOperation$lambda(key));
        var tmp;
        if (searchResult < 0) {
          // Inline function 'kotlin.also' call
          var this_0 = new TrieNode();
          // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
          node.u10_1.x3((-searchResult | 0) - 1 | 0, to(toString_0(char), this_0));
          tmp = this_0;
        } else {
          tmp = node.u10_1.k(searchResult).yb_1;
        }
        node = tmp;
      }
      // Inline function 'kotlin.require' call
      if (!!node.v10_1) {
        // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
        var message_0 = "The string '" + string + "' was passed several times";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      node.v10_1 = true;
    }
    _init_$reduceTrie(this.z10_1);
  }
  protoOf(StringSetParserOperation).o10 = function (storage, input, startIndex) {
    var node = this.z10_1;
    var index = {_v: startIndex};
    var lastMatch = null;
    loop: while (index._v <= charSequenceLength(input)) {
      if (node.v10_1)
        lastMatch = index._v;
      var tmp0_iterator = node.u10_1.g();
      while (tmp0_iterator.h()) {
        var tmp1_loop_parameter = tmp0_iterator.i();
        var key = tmp1_loop_parameter.zb();
        var child = tmp1_loop_parameter.ac();
        if (startsWith(input, key, index._v)) {
          node = child;
          index._v = index._v + key.length | 0;
          continue loop;
        }
      }
      break loop;
    }
    var tmp;
    if (!(lastMatch == null)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = lastMatch;
      var tmp$ret$0 = toString(charSequenceSubSequence(input, startIndex, endIndex));
      tmp = setWithoutReassigning_0(this.x10_1, storage, tmp$ret$0, startIndex, lastMatch);
    } else {
      var tmp_0 = Companion_instance_15;
      tmp = tmp_0.h10(startIndex, StringSetParserOperation$consume$lambda(this, input, startIndex, index));
    }
    return tmp;
  };
  function _get_whatThisExpects__4pg11j($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.r10_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<get-whatThisExpects>.<anonymous>' call
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.oz_1);
      destination.e(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.t10_1) {
      tmp = 'a number with at least ' + $this.s10_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.s10_1 + ' digits: ' + toString(consumerLengths);
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
      return "Can not interpret the string '" + $numberString + "' as " + this$0.r10_1.k($i).oz_1 + ': ' + $error.tz();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.r10_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.r10_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp_0 = sum;
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.minLength.<anonymous>' call
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.s10_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.r10_1;
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
    tmp_1.t10_1 = tmp$ret$2;
    var tmp0_0 = this.r10_1;
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
    var tmp3 = this.r10_1;
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
      var tmp0_1 = this.r10_1;
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
        var tmp$ret$12 = item.oz_1;
        destination_0.e(tmp$ret$12);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).o10 = function (storage, input, startIndex) {
    if ((startIndex + this.s10_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_15;
      return tmp.h10(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.s10_1) {
      var tmp_0 = Companion_instance_15;
      return tmp_0.h10(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.r10_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.r10_1.k(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.s10_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.r10_1.k(i).pz(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_instance_15;
          var tmp_2 = index;
          return tmp_1.h10(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_15.g10(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.a11_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.a11_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.a11_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.a11_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.a11_1, 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_0 = "String '" + this.a11_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.a11_1, this.a11_1.length - 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_1 = "String '" + this.a11_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).o10 = function (storage, input, startIndex) {
    if ((startIndex + this.a11_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_15;
      return tmp.h10(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.a11_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.a11_1, i))) {
          var tmp_0 = Companion_instance_15;
          return tmp_0.h10(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_15.g10(startIndex + this.a11_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.a11_1 + "'";
  };
  function SignParser$consume$lambda(this$0, $char) {
    return function () {
      return 'Expected ' + this$0.d11_1 + ' but got ' + toString_0($char);
    };
  }
  function SignParser(isNegativeSetter, withPlusSign, whatThisExpects) {
    this.b11_1 = isNegativeSetter;
    this.c11_1 = withPlusSign;
    this.d11_1 = whatThisExpects;
  }
  protoOf(SignParser).o10 = function (storage, input, startIndex) {
    if (startIndex >= charSequenceLength(input))
      return Companion_instance_15.g10(startIndex);
    var char = charSequenceGet(input, startIndex);
    if (char === _Char___init__impl__6a9atx(45)) {
      this.b11_1(storage, true);
      return Companion_instance_15.g10(startIndex + 1 | 0);
    }
    if (char === _Char___init__impl__6a9atx(43) && this.c11_1) {
      this.b11_1(storage, false);
      return Companion_instance_15.g10(startIndex + 1 | 0);
    }
    var tmp = Companion_instance_15;
    return tmp.h10(startIndex, SignParser$consume$lambda(this, char));
  };
  protoOf(SignParser).toString = function () {
    return this.d11_1;
  };
  function UnconditionalModification(operation) {
    this.e11_1 = operation;
  }
  protoOf(UnconditionalModification).o10 = function (storage, input, startIndex) {
    this.e11_1(storage);
    return Companion_instance_15.g10(startIndex);
  };
  function setWithoutReassigning_0(_this__u8e3s4, receiver, value, position, nextIndex) {
    var conflictingValue = _this__u8e3s4.ox(receiver, value);
    var tmp;
    if (conflictingValue === null) {
      tmp = Companion_instance_15.g10(nextIndex);
    } else {
      var tmp_0 = Companion_instance_15;
      tmp = tmp_0.h10(position, setWithoutReassigning$lambda(conflictingValue, value, _this__u8e3s4));
    }
    return tmp;
  }
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
    var tmp$ret$2 = this_0.o4();
    return new ParserStructure(tmp$ret$2, emptyList());
  }
  function setWithoutReassigning$lambda($conflictingValue, $value, $this_setWithoutReassigning) {
    return function () {
      return "Attempting to assign conflicting values '" + toString_1($conflictingValue) + "' and '" + toString_1($value) + "' to field '" + $this_setWithoutReassigning.ex() + "'";
    };
  }
  function get_POWERS_OF_TEN() {
    _init_properties_math_kt__tgcmt4();
    return POWERS_OF_TEN;
  }
  var POWERS_OF_TEN;
  function DecimalFraction(fractionalPart, digits) {
    this.ou_1 = fractionalPart;
    this.pu_1 = digits;
    // Inline function 'kotlin.require' call
    if (!(this.pu_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.DecimalFraction.<anonymous>' call
      var message = 'Digits must be non-negative, but was ' + this.pu_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).qu = function (newDigits) {
    return newDigits === this.pu_1 ? this.ou_1 : newDigits > this.pu_1 ? imul(this.ou_1, get_POWERS_OF_TEN()[newDigits - this.pu_1 | 0]) : this.ou_1 / get_POWERS_OF_TEN()[this.pu_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).f11 = function (other) {
    var tmp0 = this.pu_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = other.pu_1;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.internal.DecimalFraction.compareTo.<anonymous>' call
    var maxPrecision = Math.max(tmp0, b);
    return compareTo(this.qu(maxPrecision), other.qu(maxPrecision));
  };
  protoOf(DecimalFraction).d = function (other) {
    return this.f11(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.f11(other) === 0;
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
    var denominator = get_POWERS_OF_TEN()[this.pu_1];
    this_0.aa(this.ou_1 / denominator | 0);
    this_0.j7(_Char___init__impl__6a9atx(46));
    this_0.i7(removePrefix((denominator + (this.ou_1 % denominator | 0) | 0).toString(), '1'));
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
  function Companion_16() {
    Companion_instance_16 = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_PAST.<anonymous>' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).v2(), 999999999);
    tmp.sq_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_FUTURE.<anonymous>' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).v2(), 0);
    tmp_0.tq_1 = new Instant_0(tmp$ret$3);
    this.uq_1 = new Instant_0(Instant.MIN);
    this.vq_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_16).g11 = function (input, format) {
    var tmp;
    try {
      tmp = format.cs(input).kq();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse an instant from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_16).h11 = function (input, format, $super) {
    format = format === VOID ? Formats_getInstance().sp_1 : format;
    return $super === VOID ? this.g11(input, format) : $super.g11.call(this, input, format);
  };
  protoOf(Companion_16).yq = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromEpochSeconds.<anonymous>' call
      var tmp$ret$1 = Instant.ofEpochSecond(epochSeconds.v2(), nanosecondAdjustment);
      tmp = new Instant_0(tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = epochSeconds.z(new Long(0, 0)) > 0 ? this.vq_1 : this.uq_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Instant_0(value) {
    Companion_getInstance_17();
    this.wq_1 = value;
  }
  protoOf(Instant_0).xq = function () {
    return numberToLong(this.wq_1.epochSecond());
  };
  protoOf(Instant_0).i11 = function (other) {
    var diff = Duration.between(other.wq_1, this.wq_1);
    Companion_getInstance();
    // Inline function 'kotlin.time.Companion.seconds' call
    var this_0 = diff.seconds();
    var tmp = toDuration(this_0, DurationUnit_SECONDS_getInstance());
    Companion_getInstance();
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    var this_1 = diff.nano();
    var tmp$ret$1 = toDuration(this_1, DurationUnit_NANOSECONDS_getInstance());
    return Duration__plus_impl_yu9v8f(tmp, tmp$ret$1);
  };
  protoOf(Instant_0).j11 = function (other) {
    return this.wq_1.compareTo(other.wq_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.j11(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.wq_1 === other.wq_1 || this.wq_1.equals(other.wq_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.wq_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.wq_1.toString();
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
  function Companion_17() {
    Companion_instance_17 = this;
    this.k11_1 = new LocalDate_0(LocalDate.MIN);
    this.l11_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_17).m11 = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_0().an()) {
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
      tmp = format.cs(input);
    }
    return tmp;
  };
  protoOf(Companion_17).n11 = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.m11(input, format) : $super.m11.call(this, input, format);
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Formats_0() {
    Formats_instance_0 = this;
    this.zm_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats_0).an = function () {
    return get_ISO_DATE();
  };
  var Formats_instance_0;
  function Formats_getInstance_0() {
    if (Formats_instance_0 == null)
      new Formats_0();
    return Formats_instance_0;
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
    Companion_getInstance_18();
    this.mq_1 = value;
  }
  protoOf(LocalDate_0).rn = function () {
    return this.mq_1.year();
  };
  protoOf(LocalDate_0).o11 = function () {
    return toMonth(this.mq_1.month());
  };
  protoOf(LocalDate_0).js = function () {
    return toDayOfWeek(this.mq_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.mq_1 === other.mq_1 || this.mq_1.equals(other.mq_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.mq_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.mq_1.toString();
  };
  protoOf(LocalDate_0).p11 = function (other) {
    return this.mq_1.compareTo(other.mq_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.p11(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).nq = function () {
    return numberToInt(this.mq_1.toEpochDay());
  };
  function daysUntil(_this__u8e3s4, other) {
    return numberToInt(_this__u8e3s4.mq_1.until(other.mq_1, ChronoUnit.DAYS));
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
      var $this$run = _this__u8e3s4.mq_1;
      var tmp_0;
      if (!(period.ul_1 === 0)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>.<anonymous>' call
        tmp_0 = $this$run.plusMonths(period.ul_1);
      } else {
        tmp_0 = $this$run;
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>' call
      var $this$run_0 = tmp_0;
      var tmp_1;
      if (!(period.vl_1 === 0)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.plus.<anonymous>.<anonymous>.<anonymous>' call
        tmp_1 = $this$run_0.plusDays(period.vl_1);
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
        tmp_0 = _this__u8e3s4.mq_1.plusDays(numberToInt(numberToDouble(value) * unit.lm_1));
      } else {
        if (unit instanceof MonthBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          // Inline function 'kotlinx.datetime.plusNumber.<anonymous>' call
          tmp_0 = _this__u8e3s4.mq_1.plusMonths(numberToInt(numberToDouble(value) * unit.mm_1));
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
    var tmp$ret$1 = LocalDateTime.of(date.mq_1, time.oq_1);
    LocalDateTime_0.call($this, tmp$ret$1);
    return $this;
  }
  function LocalDateTime_init_$Create$_0(date, time) {
    return LocalDateTime_init_$Init$_0(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.q11_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.r11_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_18).s11 = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_1().bn_1) {
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
      tmp = format.cs(input);
    }
    return tmp;
  };
  protoOf(Companion_18).t11 = function (input, format, $super) {
    format = format === VOID ? getIsoDateTimeFormat() : format;
    return $super === VOID ? this.s11(input, format) : $super.s11.call(this, input, format);
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function Formats_1() {
    Formats_instance_1 = this;
    this.bn_1 = get_ISO_DATETIME();
  }
  var Formats_instance_1;
  function Formats_getInstance_1() {
    if (Formats_instance_1 == null)
      new Formats_1();
    return Formats_instance_1;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_19();
    this.u11_1 = value;
  }
  protoOf(LocalDateTime_0).v11 = function () {
    return new LocalDate_0(this.u11_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.u11_1 === other.u11_1 || this.u11_1.equals(other.u11_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.u11_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.u11_1.toString();
  };
  protoOf(LocalDateTime_0).w11 = function (other) {
    return this.u11_1.compareTo(other.u11_1);
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.w11(other instanceof LocalDateTime_0 ? other : THROW_CCE());
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
  function Companion_19() {
    Companion_instance_19 = this;
    this.x11_1 = new LocalTime_0(LocalTime.MIN);
    this.y11_1 = new LocalTime_0(LocalTime.MAX);
  }
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function LocalTime_0(value) {
    Companion_getInstance_20();
    this.oq_1 = value;
  }
  protoOf(LocalTime_0).pq = function () {
    return this.oq_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.oq_1 === other.oq_1 || this.oq_1.equals(other.oq_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.oq_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.oq_1.toString();
  };
  protoOf(LocalTime_0).z11 = function (other) {
    return this.oq_1.compareTo(other.oq_1);
  };
  protoOf(LocalTime_0).d = function (other) {
    return this.z11(other instanceof LocalTime_0 ? other : THROW_CCE());
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
  function Companion_20() {
    Companion_instance_20 = this;
    this.a12_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_21();
    this.b12_1 = zoneId;
  }
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.b12_1 === other.b12_1 || this.b12_1.equals(other.b12_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.b12_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.b12_1.toString();
  };
  function toInstant(_this__u8e3s4, timeZone) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.datetime.toInstant.stub_for_inlining' call
    var p0 = _this__u8e3s4.u11_1.atZone(timeZone.b12_1).toInstant();
    return new Instant_0(p0);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.qq_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_21() {
  }
  var Companion_instance_21;
  function Companion_getInstance_22() {
    return Companion_instance_21;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.d12_1 = offset;
  }
  var isoFormat$delegate;
  var isoBasicFormat$delegate;
  var fourDigitsFormat$delegate;
  function Companion_22() {
    Companion_instance_22 = this;
    this.e12_1 = new UtcOffset(ZoneOffset.UTC);
  }
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Formats_2() {
  }
  protoOf(Formats_2).an = function () {
    return get_ISO_OFFSET();
  };
  protoOf(Formats_2).pp = function () {
    return get_FOUR_DIGIT_OFFSET();
  };
  var Formats_instance_2;
  function Formats_getInstance_2() {
    return Formats_instance_2;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_23();
    this.qq_1 = zoneOffset;
  }
  protoOf(UtcOffset).rq = function () {
    return this.qq_1.totalSeconds();
  };
  protoOf(UtcOffset).hashCode = function () {
    return this.qq_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.qq_1 === other.qq_1 || this.qq_1.equals(other.qq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.qq_1.toString();
  };
  function UtcOffset_0(hours, minutes, seconds) {
    hours = hours === VOID ? null : hours;
    minutes = minutes === VOID ? null : minutes;
    seconds = seconds === VOID ? null : seconds;
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      var tmp_0;
      if (!(hours == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_1 = ZoneOffset;
        var tmp_2 = minutes == null ? 0 : minutes;
        var tmp$ret$1 = tmp_1.ofHoursMinutesSeconds(hours, tmp_2, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$1);
      } else if (!(minutes == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_3 = ZoneOffset;
        var tmp_4 = minutes / 60 | 0;
        var tmp_5 = minutes % 60 | 0;
        var tmp$ret$3 = tmp_3.ofHoursMinutesSeconds(tmp_4, tmp_5, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$3);
      } else {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_6 = ZoneOffset;
        var tmp$ret$5 = tmp_6.ofTotalSeconds(seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$5);
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_7;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_8;
        if (isJodaDateTimeException(e)) {
          throw IllegalArgumentException_init_$Create$_0(e);
        } else {
          throw e;
        }
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function isoFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffsetId().toFormatter(ResolverStyle.STRICT);
  }
  function isoBasicFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHmmss', 'Z').toFormatter(ResolverStyle.STRICT);
  }
  function fourDigitsFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHMM', '+0000').toFormatter(ResolverStyle.STRICT);
  }
  var properties_initialized_UtcOffset_kt_4gxffr;
  function _init_properties_UtcOffset_kt__93zod7() {
    if (!properties_initialized_UtcOffset_kt_4gxffr) {
      properties_initialized_UtcOffset_kt_4gxffr = true;
      isoFormat$delegate = lazy(isoFormat$delegate$lambda);
      isoBasicFormat$delegate = lazy(isoBasicFormat$delegate$lambda);
      fourDigitsFormat$delegate = lazy(fourDigitsFormat$delegate$lambda);
    }
  }
  function safeMultiply(a, b) {
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.p2();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.m2(b);
    if (!total.n2(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeAdd(a, b) {
    var sum = a.k2(b);
    if (a.u2(sum).z(new Long(0, 0)) < 0 && a.u2(b).z(new Long(0, 0)) >= 0) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function safeMultiply_0(a, b) {
    // Inline function 'kotlin.Long.times' call
    var result = toLong(a).m2(toLong(b));
    if (result.z(new Long(2147483647, 0)) > 0 || result.z(new Long(-2147483648, -1)) < 0)
      throw ArithmeticException_init_$Create$('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.b1();
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: post-declaration
  protoOf(Builder).gr = appendAlternativeParsingImpl;
  protoOf(Builder).hr = appendOptionalImpl;
  protoOf(Builder).lp = chars;
  protoOf(Builder).rp = build;
  protoOf(Builder).ir = addFormatStructureForDate;
  protoOf(Builder).jr = addFormatStructureForTime;
  protoOf(Builder).kr = year;
  protoOf(Builder).kp = year$default;
  protoOf(Builder).lr = monthNumber;
  protoOf(Builder).mr = monthNumber$default;
  protoOf(Builder).jp = monthName;
  protoOf(Builder).gp = dayOfMonth;
  protoOf(Builder).nr = dayOfMonth$default;
  protoOf(Builder).op = dayOfWeek;
  protoOf(Builder).zo = date;
  protoOf(Builder).or = hour;
  protoOf(Builder).ap = hour$default;
  protoOf(Builder).pr = minute;
  protoOf(Builder).bp = minute$default;
  protoOf(Builder).qr = second;
  protoOf(Builder).cp = second$default;
  protoOf(Builder).dp = secondFraction;
  protoOf(Builder).rr = time;
  protoOf(Builder).sr = offsetHours;
  protoOf(Builder).ep = offsetHours$default;
  protoOf(Builder).tr = offsetMinutesOfHour;
  protoOf(Builder).ur = offsetMinutesOfHour$default;
  protoOf(Builder).vr = offsetSecondsOfMinute;
  protoOf(Builder).wr = offsetSecondsOfMinute$default;
  protoOf(Builder).fp = offset;
  protoOf(Builder_0).gr = appendAlternativeParsingImpl;
  protoOf(Builder_0).hr = appendOptionalImpl;
  protoOf(Builder_0).lp = chars;
  protoOf(Builder_0).rp = build;
  protoOf(Builder_0).kr = year;
  protoOf(Builder_0).kp = year$default;
  protoOf(Builder_0).lr = monthNumber;
  protoOf(Builder_0).mr = monthNumber$default;
  protoOf(Builder_0).gp = dayOfMonth;
  protoOf(Builder_0).nr = dayOfMonth$default;
  protoOf(Builder_1).gr = appendAlternativeParsingImpl;
  protoOf(Builder_1).hr = appendOptionalImpl;
  protoOf(Builder_1).lp = chars;
  protoOf(Builder_1).rp = build;
  protoOf(Builder_1).ir = addFormatStructureForDate;
  protoOf(Builder_1).jr = addFormatStructureForTime;
  protoOf(Builder_1).kr = year;
  protoOf(Builder_1).kp = year$default;
  protoOf(Builder_1).lr = monthNumber;
  protoOf(Builder_1).mr = monthNumber$default;
  protoOf(Builder_1).gp = dayOfMonth;
  protoOf(Builder_1).nr = dayOfMonth$default;
  protoOf(Builder_1).zo = date;
  protoOf(Builder_1).or = hour;
  protoOf(Builder_1).ap = hour$default;
  protoOf(Builder_1).pr = minute;
  protoOf(Builder_1).bp = minute$default;
  protoOf(Builder_1).qr = second;
  protoOf(Builder_1).cp = second$default;
  protoOf(Builder_1).dp = secondFraction;
  protoOf(Builder_1).rr = time;
  protoOf(IncompleteLocalTime).ao = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).bo = get_fractionOfSecond;
  protoOf(Builder_2).gr = appendAlternativeParsingImpl;
  protoOf(Builder_2).hr = appendOptionalImpl;
  protoOf(Builder_2).lp = chars;
  protoOf(Builder_2).rp = build;
  protoOf(Builder_2).or = hour;
  protoOf(Builder_2).ap = hour$default;
  protoOf(Builder_2).pr = minute;
  protoOf(Builder_2).bp = minute$default;
  protoOf(Builder_2).qr = second;
  protoOf(Builder_2).cp = second$default;
  protoOf(Builder_2).dp = secondFraction;
  protoOf(Builder_3).gr = appendAlternativeParsingImpl;
  protoOf(Builder_3).hr = appendOptionalImpl;
  protoOf(Builder_3).lp = chars;
  protoOf(Builder_3).rp = build;
  protoOf(Builder_3).sr = offsetHours;
  protoOf(Builder_3).ep = offsetHours$default;
  protoOf(Builder_3).tr = offsetMinutesOfHour;
  protoOf(Builder_3).ur = offsetMinutesOfHour$default;
  protoOf(Builder_3).vr = offsetSecondsOfMinute;
  protoOf(Builder_3).wr = offsetSecondsOfMinute$default;
  protoOf(PropertyAccessor).cx = getterNotNull;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_6 = new Companion_6();
  Companion_instance_9 = new Companion_9();
  Companion_instance_10 = new Companion_10();
  Companion_instance_11 = new Companion_11();
  Companion_instance_13 = new Companion_13();
  Companion_instance_14 = new Companion_14();
  Truth_instance = new Truth();
  ExpectedInt_instance = new ExpectedInt();
  Companion_instance_15 = new Companion_15();
  Companion_instance_21 = new Companion_21();
  Formats_instance_2 = new Formats_2();
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
  _.$_$.m = Companion_getInstance_6;
  _.$_$.n = Companion_getInstance_17;
  _.$_$.o = Companion_getInstance_18;
  _.$_$.p = Companion_getInstance_19;
  _.$_$.q = Companion_getInstance_21;
  _.$_$.r = daysUntil;
  _.$_$.s = get_isoDayNumber;
  _.$_$.t = minus;
  _.$_$.u = plus_1;
  _.$_$.v = plus_0;
  _.$_$.w = toInstant;
  //endregion
  return _;
}));

