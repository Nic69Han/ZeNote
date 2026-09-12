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
  var toString = kotlin_kotlin.$_$.m4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.q;
  var protoOf = kotlin_kotlin.$_$.j4;
  var objectCreate = kotlin_kotlin.$_$.i4;
  var captureStack = kotlin_kotlin.$_$.g3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.o;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.t;
  var IllegalArgumentException = kotlin_kotlin.$_$.v5;
  var initMetadataForClass = kotlin_kotlin.$_$.v3;
  var Unit_instance = kotlin_kotlin.$_$.h1;
  var Enum = kotlin_kotlin.$_$.t5;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForInterface = kotlin_kotlin.$_$.y3;
  var toString_0 = kotlin_kotlin.$_$.b1;
  var hashCode = kotlin_kotlin.$_$.u3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w3;
  var THROW_CCE = kotlin_kotlin.$_$.x5;
  var getBooleanHashCode = kotlin_kotlin.$_$.q3;
  var initMetadataForObject = kotlin_kotlin.$_$.a4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y;
  var KProperty0 = kotlin_kotlin.$_$.u4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s3;
  var KMutableProperty1 = kotlin_kotlin.$_$.t4;
  var lazy = kotlin_kotlin.$_$.g6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var isInterface = kotlin_kotlin.$_$.c4;
  var equals = kotlin_kotlin.$_$.o3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var toString_1 = kotlin_kotlin.$_$.j6;
  var getStringHashCode = kotlin_kotlin.$_$.t3;
  var charSequenceLength = kotlin_kotlin.$_$.k3;
  var charSequenceGet = kotlin_kotlin.$_$.j3;
  var listOf = kotlin_kotlin.$_$.j2;
  var get_lastIndex = kotlin_kotlin.$_$.c5;
  var emptyList = kotlin_kotlin.$_$.v1;
  var joinToString = kotlin_kotlin.$_$.c2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var single = kotlin_kotlin.$_$.s2;
  var charSequenceSubSequence = kotlin_kotlin.$_$.l3;
  var numberRangeToNumber = kotlin_kotlin.$_$.e4;
  var mutableListOf = kotlin_kotlin.$_$.l2;
  var removeLastOrNull = kotlin_kotlin.$_$.o2;
  var sortWith = kotlin_kotlin.$_$.t2;
  var FunctionAdapter = kotlin_kotlin.$_$.e3;
  var Comparator = kotlin_kotlin.$_$.q5;
  var compareValues = kotlin_kotlin.$_$.a3;
  var Exception = kotlin_kotlin.$_$.u5;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.n;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l;
  var joinTo = kotlin_kotlin.$_$.d2;
  var plus = kotlin_kotlin.$_$.n2;
  var toMutableList = kotlin_kotlin.$_$.x2;
  var addAll = kotlin_kotlin.$_$.m1;
  var Collection = kotlin_kotlin.$_$.j1;
  var firstOrNull = kotlin_kotlin.$_$.y1;
  var drop = kotlin_kotlin.$_$.u1;
  var listOf_0 = kotlin_kotlin.$_$.k2;
  var repeat = kotlin_kotlin.$_$.f5;
  var checkCountOverflow = kotlin_kotlin.$_$.n1;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.z;
  var enumEntries = kotlin_kotlin.$_$.d3;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var Comparable = kotlin_kotlin.$_$.p5;
  var numberToInt = kotlin_kotlin.$_$.g4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DateTimeFormatException, 'DateTimeFormatException', DateTimeFormatException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(AbstractDateTimeFormat, 'AbstractDateTimeFormat');
  initMetadataForClass(Padding, 'Padding', VOID, Enum);
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.zi(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.zi.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.bj(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.bj.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.dj(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.dj.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function chars(value) {
    return this.gj().ij(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.gj().jj().kj_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate);
  initMetadataForCompanion(Companion);
  function year(padding) {
    return this.dk(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.dk(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function dayOfMonth(padding) {
    return this.dk(new BasicFormatStructure(new DayDirective(padding)));
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
    var tmp0_elvis_lhs = this.dm(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.nl() + ' is not set');
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
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation');
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation');
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification');
  initMetadataForClass(DayOfWeek_0, 'DayOfWeek', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(LocalDate_0, 'LocalDate', VOID, VOID, [Comparable]);
  //endregion
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.u1_1 + 1 | 0;
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
  function getIsoDateFormat() {
    return Formats_getInstance().qi();
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).ui = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.ri().yi()), input, this.ti());
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
      return this.si(matched);
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
    return _this__u8e3s4.fj(toString_0(value));
  }
  function AbstractDateTimeFormatBuilder() {
  }
  function get_ISO_DATE() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE$factory();
    return tmp0.o1();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE_BASIC$factory();
    return tmp0.o1();
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
    this.lj_1 = year;
    this.mj_1 = monthNumber;
    this.nj_1 = dayOfMonth;
    this.oj_1 = isoDayOfWeek;
  }
  protoOf(IncompleteLocalDate).pj = function (_set____db54di) {
    this.lj_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).qj = function () {
    return this.lj_1;
  };
  protoOf(IncompleteLocalDate).rj = function (_set____db54di) {
    this.mj_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).sj = function () {
    return this.mj_1;
  };
  protoOf(IncompleteLocalDate).tj = function (_set____db54di) {
    this.nj_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).uj = function () {
    return this.nj_1;
  };
  protoOf(IncompleteLocalDate).vj = function (_set____db54di) {
    this.oj_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).wj = function () {
    return this.oj_1;
  };
  protoOf(IncompleteLocalDate).xj = function () {
    var date = LocalDate_init_$Create$(requireParsedField(this.lj_1, 'year'), requireParsedField(this.mj_1, 'monthNumber'), requireParsedField(this.nj_1, 'dayOfMonth'));
    var tmp0_safe_receiver = this.oj_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalDate.toLocalDate.<anonymous>' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.zj()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.zj().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).ak = function () {
    return new IncompleteLocalDate(this.lj_1, this.mj_1, this.nj_1, this.oj_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteLocalDate) {
      tmp_2 = this.lj_1 == other.lj_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.mj_1 == other.mj_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.nj_1 == other.nj_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.oj_1 == other.oj_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.lj_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.mj_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.nj_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.oj_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    return tmp_1 + imul(tmp$ret$3, 31) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.lj_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.mj_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.nj_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.oj_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion() {
  }
  protoOf(Companion).bk = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.jj());
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Builder(actualBuilder) {
    this.ck_1 = actualBuilder;
  }
  protoOf(Builder).gj = function () {
    return this.ck_1;
  };
  protoOf(Builder).dk = function (structure) {
    return this.ck_1.ij(structure);
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.ek_1 = actualFormat;
  }
  protoOf(LocalDateFormat).ri = function () {
    return this.ek_1;
  };
  protoOf(LocalDateFormat).fk = function (intermediate) {
    return intermediate.xj();
  };
  protoOf(LocalDateFormat).si = function (intermediate) {
    return this.fk(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).ti = function () {
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
    var tmp = DateFields_getInstance().gk_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.pk_1 = padding;
    this.qk_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.pk_1.equals(other.pk_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.qk_1 === other.qk_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.pk_1.hashCode(), 31) + getBooleanHashCode(this.qk_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().hk_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.bl_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.bl_1.equals(other.bl_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.bl_1.hashCode();
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().ik_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.kl_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.kl_1.equals(other.kl_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.kl_1.hashCode();
  };
  function DateFields() {
    DateFields_instance = this;
    this.gk_1 = new GenericFieldSpec(new PropertyAccessor(year$factory()));
    this.hk_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory()), 1, 12);
    this.ik_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory()), 1, 31);
    this.jk_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
  }
  var DateFields_instance;
  function DateFields_getInstance() {
    if (DateFields_instance == null)
      new DateFields();
    return DateFields_instance;
  }
  function ISO_DATE$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance;
    return tmp.bk(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.aj();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.cj();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.ej();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance;
    return tmp.bk(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.aj();
    $this$build.cj();
    $this$build.ej();
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
      return receiver.qj();
    }, function (receiver, value) {
      return receiver.pj(value);
    });
  }
  function monthNumber$factory() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.sj();
    }, function (receiver, value) {
      return receiver.rj(value);
    });
  }
  function dayOfMonth$factory() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.uj();
    }, function (receiver, value) {
      return receiver.tj(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.wj();
    }, function (receiver, value) {
      return receiver.vj(value);
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
    tmp.hj_1 = ArrayList_init_$Create$();
  }
  protoOf(AppendableFormatStructure).jj = function () {
    return new ConcatenatedFormatStructure(this.hj_1);
  };
  protoOf(AppendableFormatStructure).ij = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.hj_1.e(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.kj_1.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'kotlinx.datetime.internal.format.AppendableFormatStructure.add.<anonymous>' call
          this.hj_1.e(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.ll(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.rk_1 = field;
    this.sk_1 = minDigits;
    this.tk_1 = maxDigits;
    this.uk_1 = spacePadding;
    this.vk_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.sk_1 == null || this.sk_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.sk_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.tk_1 == null || this.sk_1 == null || this.tk_1 >= this.sk_1)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.tk_1 + ') is less than the minimum number of digits (' + this.sk_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).wk = function () {
    var tmp = Accessor$getterNotNull$ref(this.rk_1.ml());
    var tmp0_elvis_lhs = this.sk_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.vk_1);
    return !(this.uk_1 == null) ? new SpacePaddedFormatter(formatter, this.uk_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).yi = function () {
    return SignedIntParser(this.sk_1, this.tk_1, this.uk_1, this.rk_1.ml(), this.rk_1.nl(), this.vk_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.ll(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.cl_1 = field;
    this.dl_1 = minDigits;
    this.el_1 = spacePadding;
    this.fl_1 = this.cl_1.ul_1;
    // Inline function 'kotlin.require' call
    if (!(this.dl_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.dl_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.fl_1 >= this.dl_1)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.fl_1 + ') is less than the minimum number of digits (' + this.dl_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.el_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.el_1 > this.dl_1)) {
        // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
        var message_1 = 'The space padding (' + this.el_1 + ') should be more than the minimum number of digits (' + this.dl_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).wk = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.cl_1.ol_1), this.dl_1);
    return !(this.el_1 == null) ? new SpacePaddedFormatter(formatter, this.el_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).yi = function () {
    return spaceAndZeroPaddedUnsignedInt(this.dl_1, this.fl_1, this.el_1, this.cl_1.ol_1, this.cl_1.rl_1);
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.nl() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.vl_1 = accessor;
    this.wl_1 = name;
    this.xl_1 = defaultValue;
    this.yl_1 = sign;
  }
  protoOf(GenericFieldSpec).ml = function () {
    return this.vl_1;
  };
  protoOf(GenericFieldSpec).nl = function () {
    return this.wl_1;
  };
  protoOf(GenericFieldSpec).zl = function () {
    return this.xl_1;
  };
  function PropertyAccessor(property) {
    this.am_1 = property;
  }
  protoOf(PropertyAccessor).nl = function () {
    return this.am_1.callableName;
  };
  protoOf(PropertyAccessor).bm = function (container, newValue) {
    var oldValue = this.am_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.am_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).cm = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.bm(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).dm = function (container) {
    return this.am_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.nl() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.ol_1 = accessor;
    this.pl_1 = minValue;
    this.ql_1 = maxValue;
    this.rl_1 = name;
    this.sl_1 = defaultValue;
    this.tl_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.ql_1 < 10) {
      tmp_0 = 1;
    } else if (this.ql_1 < 100) {
      tmp_0 = 2;
    } else if (this.ql_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.ql_1 + ' is too large');
    }
    tmp.ul_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).ml = function () {
    return this.ol_1;
  };
  protoOf(UnsignedFieldSpec).nl = function () {
    return this.rl_1;
  };
  protoOf(UnsignedFieldSpec).zl = function () {
    return this.sl_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.nl() + ' (default value is ' + toString_1(this.zl()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.wi_1 = protoOf(ConcatenatedFormatStructure).wk.call(this);
    this.xi_1 = protoOf(ConcatenatedFormatStructure).yi.call(this);
  }
  protoOf(CachedFormatStructure).wk = function () {
    return this.wi_1;
  };
  protoOf(CachedFormatStructure).yi = function () {
    return this.xi_1;
  };
  function BasicFormatStructure(directive) {
    this.em_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.em_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.em_1, other.em_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.em_1);
  };
  protoOf(BasicFormatStructure).yi = function () {
    return this.em_1.yi();
  };
  protoOf(BasicFormatStructure).wk = function () {
    return this.em_1.wk();
  };
  function ConstantFormatStructure(string) {
    this.fm_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.fm_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.fm_1 === other.fm_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.fm_1);
  };
  protoOf(ConstantFormatStructure).yi = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.fm_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$();
      // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>' call
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.fm_1, 0))) {
        var tmp0 = this.fm_1;
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
        var tmp2 = this.fm_1;
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
        tmp_0 = this.fm_1;
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
      tmp = this_1.w3();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).wk = function () {
    return new ConstantStringFormatterStructure(this.fm_1);
  };
  function ConcatenatedFormatStructure(formats) {
    this.kj_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.kj_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.kj_1, other.kj_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.kj_1);
  };
  protoOf(ConcatenatedFormatStructure).yi = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.kj_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.parser.<anonymous>' call
      var tmp$ret$0 = item.yi();
      destination.e(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).wk = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.kj_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.formatter.<anonymous>' call
      var tmp$ret$0 = item.wk();
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
    this.gm_1 = formatter;
    this.hm_1 = padding;
  }
  function ConcatenatedFormatter(formatters) {
    this.im_1 = formatters;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.jm_1 = number;
    this.km_1 = zeroPadding;
    this.lm_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.km_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.km_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.km_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.km_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.mm_1 = number;
    this.nm_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.nm_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.nm_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.nm_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.nm_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function ConstantStringFormatterStructure(string) {
    this.om_1 = string;
  }
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.rm_1 = expected;
  }
  protoOf(ConstantNumberConsumer).sm = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.rm_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.rm_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.tm_1 = length;
    this.um_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.tm_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).vm = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.wm_1 = maxDigits;
  }
  protoOf(TooManyDigits).vm = function () {
    return 'expected at most ' + this.wm_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.xm_1 = minDigits;
  }
  protoOf(TooFewDigits).vm = function () {
    return 'expected at least ' + this.xm_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.ym_1 = expected;
  }
  protoOf(WrongConstant).vm = function () {
    return "expected '" + this.ym_1 + "'";
  };
  function Conflicting(conflicting) {
    this.zm_1 = conflicting;
  }
  protoOf(Conflicting).vm = function () {
    return "attempted to overwrite the existing value '" + toString(this.zm_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.cm(receiver, value);
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
    this.cn_1 = minLength;
    this.dn_1 = maxLength;
    this.en_1 = setter;
    this.fn_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).ga(this.a()))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.UnsignedIntConsumer.<anonymous>' call
      var message = 'Invalid length for field ' + this.um_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).sm = function (storage, input, start, end) {
    var tmp;
    if (!(this.dn_1 == null) && (end - start | 0) > this.dn_1) {
      tmp = new TooManyDigits(this.dn_1);
    } else if (!(this.cn_1 == null) && (end - start | 0) < this.cn_1) {
      tmp = new TooFewDigits(this.cn_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.en_1, storage, this.fn_1 ? -result | 0 : result);
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
    this.gn_1 = position;
    this.hn_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).in = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_0).jn = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
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
      var output = state.kn_1.ak();
      var inputPosition = state.mn_1;
      var parserStructure = state.ln_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>' call
        var inductionVariable = 0;
        var last = parserStructure.on_1.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.on_1.k(ix).qn(output, input, inputPosition);
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
        if (parserStructure.pn_1.j()) {
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
          var inductionVariable_0 = parserStructure.pn_1.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.e(new ParserState(output, parserStructure.pn_1.k(ix_0), inputPosition));
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
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).rn.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.kn_1 = output;
    this.ln_1 = parserStructure;
    this.mn_1 = inputPosition;
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
    var tmp0_other_with_cast = other instanceof Parser ? other.nn_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.sn_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).u9 = function (a, b) {
    return this.sn_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.u9(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).j2 = function () {
    return this.sn_1;
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
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp = b.gn_1;
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp$ret$1 = a.gn_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.nn_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.nn_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.nn_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.nn_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.on_1 = operations;
    this.pn_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.on_1, ', ') + '(' + joinToString(this.pn_1, ';') + ')';
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
      while (iterator.b3()) {
        var tmp2 = iterator.c3();
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
      return 'Position ' + errors.k(0).gn_1 + ': ' + errors.k(0).hn_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$(imul(averageMessageLength, errors.l()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.pn_1.j()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.on_1, other.on_1), other.pn_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.pn_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var item = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.append.<anonymous>' call
        var tmp$ret$0 = concat$append(item, other);
        destination.e(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.on_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.on_1.g();
    while (tmp0_iterator.h()) {
      var op = tmp0_iterator.i();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.p(op.tn_1);
        } else {
          currentNumberSpan = toMutableList(op.tn_1);
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
    var tmp0 = _this__u8e3s4.pn_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.on_1.j()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.pn_1;
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
          var tmp0_safe_receiver = firstOrNull(element_0.on_1);
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
          var firstOperation = firstOrNull(item.on_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.tn_1))), drop(item.on_1, 1)), item.pn_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf(new NumberSpanParserOperation(currentNumberSpan)), item.pn_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf(new NumberSpanParserOperation(currentNumberSpan)), item.on_1), item.pn_1);
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
    return 'position ' + it.gn_1 + ": '" + it.hn_1() + "'";
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
    var this_0 = $this.tn_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<get-whatThisExpects>.<anonymous>' call
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.um_1);
      destination.e(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.vn_1) {
      tmp = 'a number with at least ' + $this.un_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.un_1 + ' digits: ' + toString(consumerLengths);
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
      return "Can not interpret the string '" + $numberString + "' as " + this$0.tn_1.k($i).um_1 + ': ' + $error.vm();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.tn_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.tn_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp_0 = sum;
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.minLength.<anonymous>' call
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.un_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.tn_1;
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
    tmp_1.vn_1 = tmp$ret$2;
    var tmp0_0 = this.tn_1;
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
    var tmp3 = this.tn_1;
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
      var tmp0_1 = this.tn_1;
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
        var tmp$ret$12 = item.um_1;
        destination_0.e(tmp$ret$12);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).qn = function (storage, input, startIndex) {
    if ((startIndex + this.un_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_0;
      return tmp.jn(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.un_1) {
      var tmp_0 = Companion_instance_0;
      return tmp_0.jn(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.tn_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.tn_1.k(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.un_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.tn_1.k(i).sm(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_instance_0;
          var tmp_2 = index;
          return tmp_1.jn(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_0.in(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.wn_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.wn_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.wn_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.wn_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.wn_1, 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_0 = "String '" + this.wn_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.wn_1, this.wn_1.length - 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_1 = "String '" + this.wn_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).qn = function (storage, input, startIndex) {
    if ((startIndex + this.wn_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_0;
      return tmp.jn(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.wn_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.wn_1, i))) {
          var tmp_0 = Companion_instance_0;
          return tmp_0.jn(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_0.in(startIndex + this.wn_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.wn_1 + "'";
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
    var tmp$ret$2 = this_0.w3();
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
  function Companion_1() {
    Companion_instance_1 = this;
    this.xn_1 = new LocalDate_0(LocalDate.MIN);
    this.yn_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_1).zn = function (input, format) {
    var tmp;
    if (format === Formats_getInstance().qi()) {
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
      tmp = format.ui(input);
    }
    return tmp;
  };
  protoOf(Companion_1).ao = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.zn(input, format) : $super.zn.call(this, input, format);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Formats() {
    Formats_instance = this;
    this.pi_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats).qi = function () {
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
  function LocalDate_0(value) {
    Companion_getInstance_1();
    this.yj_1 = value;
  }
  protoOf(LocalDate_0).zj = function () {
    return toDayOfWeek(this.yj_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.yj_1 === other.yj_1 || this.yj_1.equals(other.yj_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.yj_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.yj_1.toString();
  };
  protoOf(LocalDate_0).bo = function (other) {
    return this.yj_1.compareTo(other.yj_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.bo(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  function daysUntil(_this__u8e3s4, other) {
    return numberToInt(_this__u8e3s4.yj_1.until(other.yj_1, ChronoUnit.DAYS));
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: post-declaration
  protoOf(Builder).fj = chars;
  protoOf(Builder).jj = build;
  protoOf(Builder).zi = year;
  protoOf(Builder).aj = year$default;
  protoOf(Builder).bj = monthNumber;
  protoOf(Builder).cj = monthNumber$default;
  protoOf(Builder).dj = dayOfMonth;
  protoOf(Builder).ej = dayOfMonth$default;
  protoOf(PropertyAccessor).ll = getterNotNull;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  ExpectedInt_instance = new ExpectedInt();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_1;
  _.$_$.b = daysUntil;
  //endregion
  return _;
}));

