import {
  CstElement,
  CstNode,
  CstParser,
  IToken,
  Lexer,
  createToken,
} from "chevrotain";

// Tokens
const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /[ \t\n\r]+/,
  group: Lexer.SKIPPED,
});

// keywords
// https://specification.modelica.org/master/lexical-structure.html
const Algorithm = createToken({ name: "Algorithm", pattern: /algorithm\s/ });
const And = createToken({ name: "And", pattern: /and\s/ });
const Annotation = createToken({ name: "Annotation", pattern: /annotation\s/ });
const Block = createToken({ name: "Block", pattern: /block\s/ });
const Break = createToken({ name: "Break", pattern: /break\s/ });
const Class = createToken({ name: "Class", pattern: /class\s/ });
const Connect = createToken({ name: "Connect", pattern: /connect\s/ });
const Connector = createToken({ name: "Connector", pattern: /connector\s/ });
const Constant = createToken({ name: "Constant", pattern: /constant\s/ });
const ConstrainedBy = createToken({
  name: "ConstrainedBy",
  pattern: /constrainedby\s/,
});
const Der = createToken({ name: "Der", pattern: /der\s/ });
const Discrete = createToken({ name: "Discrete", pattern: /discrete\s/ });
const Each = createToken({ name: "Each", pattern: /each\s/ });
const Else = createToken({ name: "Else", pattern: /else\s/ });
const ElseIf = createToken({ name: "ElseIf", pattern: /elseif\s/ });
const ElseWhen = createToken({ name: "ElseWhen", pattern: /elsewhen\s/ });
const Encapsulated = createToken({
  name: "Encapsulated",
  pattern: /encapsulated\s/,
});
const End = createToken({ name: "End", pattern: /end\s/ });
const Enumeration = createToken({
  name: "Enumeration",
  pattern: /enumeration\s/,
});
const Equation = createToken({ name: "Equation", pattern: /equation\s/ });
const Expandable = createToken({ name: "Expandable", pattern: /expandable\s/ });
const Extends = createToken({ name: "Extends", pattern: /extends\s/ });
const External = createToken({ name: "External", pattern: /external\s/ });
const False = createToken({ name: "False", pattern: /false\s/ });
const Final = createToken({ name: "Final", pattern: /final\s/ });
const Flow = createToken({ name: "Flow", pattern: /flow\s/ });
const For = createToken({ name: "For", pattern: /for\s/ });
const Function = createToken({ name: "Function", pattern: /function\s/ });
const If = createToken({ name: "If", pattern: /if\s/ });
const Import = createToken({ name: "Import", pattern: /import\s/ });
const Impure = createToken({ name: "Impure", pattern: /impure\s/ });
const In = createToken({ name: "In", pattern: /in\s/ });
const Initial = createToken({ name: "Initial", pattern: /initial\s/ });
const Inner = createToken({ name: "Inner", pattern: /inner\s/ });
const Input = createToken({ name: "Input", pattern: /input\s/ });
const Loop = createToken({ name: "Loop", pattern: /loop\s/ });
const Model = createToken({ name: "Model", pattern: /model\s/ });
const Not = createToken({ name: "Not", pattern: /not\s/ });
const Operator = createToken({ name: "Operator", pattern: /operator\s/ });
const Or = createToken({ name: "Or", pattern: /or\s/ });
const Outer = createToken({ name: "Outer", pattern: /outer\s/ });
const Output = createToken({ name: "Output", pattern: /output\s/ });
const Package = createToken({ name: "Package", pattern: /package\s/ });
const Parameter = createToken({ name: "Parameter", pattern: /parameter\s/ });
const Partial = createToken({ name: "Partial", pattern: /partial\s/ });
const Protected = createToken({ name: "Protected", pattern: /protected\s/ });
const Public = createToken({ name: "Public", pattern: /public\s/ });
const Pure = createToken({ name: "Pure", pattern: /pure\s/ });
const Record = createToken({ name: "Record", pattern: /record\s/ });
const Redeclare = createToken({ name: "Redeclare", pattern: /redeclare/ });
const RePlacable = createToken({ name: "RePlacable", pattern: /replaceable/ });
const Return = createToken({ name: "Return", pattern: /return/ });
const Stream = createToken({ name: "Stream", pattern: /stream/ });
const Then = createToken({ name: "Then", pattern: /then\s/ });
const True = createToken({ name: "True", pattern: /true\s/ });
const Type = createToken({ name: "Type", pattern: /type\s/ });
const When = createToken({ name: "When", pattern: /when\s/ });
const While = createToken({ name: "While", pattern: /while\s/ });
const Within = createToken({ name: "Within", pattern: /within\s/ });

// data types
const DataType = createToken({ name: "DataType", pattern: Lexer.NA });
const Integer = createToken({
  name: "Integer",
  pattern: /Integer\s/,
  categories: [DataType],
});
const Real = createToken({
  name: "Real",
  pattern: /Real\s/,
  categories: [DataType],
});
const Boolean = createToken({
  name: "Boolean",
  pattern: /Boolean\s/,
  categories: [DataType],
});
const String = createToken({
  name: "String",
  pattern: /String\s/,
  categories: [DataType],
});

// common functions
const CommonFn = createToken({ name: "CommonFn", pattern: Lexer.NA });
const Fill = createToken({
  name: "Fill",
  pattern: /fill\(/,
  categories: [CommonFn],
});
const LoadResource = createToken({
  name: "LoadResource",
  pattern: /Modelica\.Utilities\.Files\.loadResource\(/,
  categories: [CommonFn],
});
const Abs = createToken({
  name: "Abs",
  pattern: /abs\(/,
  categories: [CommonFn],
});
const Max = createToken({
  name: "Max",
  pattern: /max\(/,
  categories: [CommonFn],
});
const Assert = createToken({ name: "Assert", pattern: /assert\(/ });
const Level = createToken({ name: "Level", pattern: /level\s/ }); // used for assertion level

// Common block that we need to parse
const CLDInput = createToken({
  name: "CLDInput",
  pattern:
    /Buildings\.Controls\.OBC\.CDL\.Interfaces\.[A-Za-z_][A-Za-z0-9_]*Input/,
});
const CLDOutput = createToken({
  name: "CLDOutput",
  pattern:
    /Buildings\.Controls\.OBC\.CDL\.Interfaces\.[A-Za-z_][A-Za-z0-9_]*Output/,
});

const Equals = createToken({ name: "Equals", pattern: /=/ });
const Semicolon = createToken({ name: "Semicolon", pattern: /;/ });
const Colon = createToken({ name: "Colon", pattern: /:/ });
const Comma = createToken({ name: "Comma", pattern: /,/ });
const LParen = createToken({ name: "LParen", pattern: /\(/ });
const RParen = createToken({ name: "RParen", pattern: /\)/ });
const LSquare = createToken({ name: "LSquare", pattern: /\[/ });
const RSquare = createToken({ name: "RSquare", pattern: /\]/ });
const LFigure = createToken({ name: "LFigure", pattern: /\{/ });
const RFigure = createToken({ name: "RFigure", pattern: /\}/ });
const Power = createToken({ name: "Power", pattern: /\^/ });
const Comment = createToken({ name: "Comment", pattern: /\/\/.*/ });
const Assignment = createToken({ name: "Assigment", pattern: /:=/ });

const ArithmeticOperator = createToken({
  name: "ArithmeticOperator",
  pattern: Lexer.NA,
});
const Minus = createToken({
  name: "Minus",
  pattern: /-/,
  categories: ArithmeticOperator,
});
const Plus = createToken({
  name: "Plus",
  pattern: /\+/,
  categories: ArithmeticOperator,
});
const Multiply = createToken({
  name: "Multiply",
  pattern: /\*/,
  categories: ArithmeticOperator,
});
const Divide = createToken({
  name: "Divide",
  pattern: /\//,
  categories: ArithmeticOperator,
});
const Less = createToken({
  name: "Less",
  pattern: /</,
  categories: ArithmeticOperator,
});
const Greater = createToken({
  name: "Greater",
  pattern: />/,
  categories: ArithmeticOperator,
});
const EqualsComp = createToken({
  name: "EqualsComp",
  pattern: /==/,
  categories: ArithmeticOperator,
});
const LessEqual = createToken({
  name: "LessEqual",
  pattern: /<=/,
  categories: ArithmeticOperator,
});
const GreaterEqual = createToken({
  name: "GreaterEqual",
  pattern: />=/,
  categories: ArithmeticOperator,
});
const NotEqual = createToken({
  name: "NotEqual",
  pattern: /<>/,
  categories: ArithmeticOperator,
});
const Url = createToken({ name: "Url", pattern: /https?:\/\/\S+/ });
const Identifier = createToken({
  name: "Identifier",
  pattern: /[a-zA-Z_][\w\.]*/,
});
const StringLiteral = createToken({
  name: "StringLiteral",
  pattern: /"(\\.|[^"\\])*"/,
});
const NumberLiteral = createToken({
  name: "NumberLiteral",
  pattern: /\d+(\.\d*)?([eE][+-]?\d+)?/,
});

const datatypes = [Integer, Real, Boolean];
const functions = [Fill, LoadResource, Abs, Max, Assert];
const keywords = [
  Expandable,
  Connector,
  Within,
  Package,
  Model,
  Constant,
  Type,
  Enumeration,
  End,
  Annotation,
  External,
  True,
  False,
  Extends,
  Parameter,
  Final,
  CLDInput,
  CLDOutput,
  Protected,
  Connect,
  Equation,
  RePlacable,
  Redeclare,
  Partial,
  Each,
  Block,
  Input,
  Output,
  For,
  While,
  In,
  Loop,
  If,
  When,
  Then,
  ElseIf,
  Else,
  Initial,
  Level,
  Function,
  Impure,
  Pure,
  Algorithm,
  And,
  Or,
  Not,
  ConstrainedBy,
  Inner,
  Discrete,
  Record,

  ...datatypes,
  ...functions,
];
const symbols = [
  EqualsComp,
  Assignment,
  NotEqual,
  LessEqual,
  GreaterEqual,
  Equals,
  Semicolon,
  Comma,
  LParen,
  RParen,
  LSquare,
  Minus,
  Plus,
  Multiply,
  Divide,
  Less,
  Greater,
  RSquare,
  LFigure,
  RFigure,
  Colon,
  Power,
];

const allTokens = [
  WhiteSpace,
  Comment,
  Url,
  ...keywords,
  ...symbols,
  Identifier,
  StringLiteral,
  NumberLiteral,
];

const ModelicaLexer = new Lexer(allTokens);

type NamespaceResult = CstElement & {
  children: {
    Within: [IToken];
    Identifier: [IToken];
    Semicolon: [IToken];
  };
};

type ModelResult = CstElement & {
  children: {
    Model: [IToken];
    Identifier: [IToken];
  };
};

type PackageResult = CstElement & {
  children: {
    Package: [IToken];
    Identifier: [IToken];
    StringLiteral: [IToken];
  };
};

export type ConstantResult = CstElement & {
  children: {
    Constant: [IToken];
    Integer?: [IToken];
    Real?: [IToken];
    Boolean?: [IToken];
    Identifier: [IToken];
    Equals: [IToken];
    NumberLiteral?: [IToken];
    StringLiteral?: [IToken];
    Semicolon: [IToken];
  };
};

export type EnumerationResult = CstElement & {
  children: {
    Type: [IToken];
    Identifier: [IToken];
    Equals: [IToken];
    Enumeration: [IToken];
    StringLiteral: [IToken];
    LParen: [IToken];
    Comma: IToken[];
    RParen: [IToken];
  };
};

export type ParserResult = CstNode & {
  children: {
    namespace?: [NamespaceResult];
    package?: [PackageResult];
    model?: [ModelResult];
    constant?: ConstantResult[];
    enumeration?: EnumerationResult[];
    end: any[];
  };
};

// Parser
class ModelicaParser extends CstParser {
  constructor() {
    super(allTokens);

    this.performSelfAnalysis();
  }

  file = this.RULE("file", () => {
    this.MANY(() => {
      this.OR([
        { ALT: () => this.SUBRULE(this.namespace) },
        { ALT: () => this.SUBRULE(this.package) },
        { ALT: () => this.SUBRULE(this.model) },
        { ALT: () => this.SUBRULE(this.rePlacablePackage) },
        { ALT: () => this.SUBRULE(this.rePlacableModel) },
        { ALT: () => this.SUBRULE(this.block) },
        { ALT: () => this.SUBRULE(this.extends) },
        { ALT: () => this.SUBRULE(this.protected) },
        { ALT: () => this.SUBRULE(this.equation) },
        { ALT: () => this.SUBRULE(this.connect) },
        { ALT: () => this.SUBRULE(this.cdlInput) },
        { ALT: () => this.SUBRULE(this.blockInput) },
        { ALT: () => this.SUBRULE(this.blockOutput) },
        { ALT: () => this.SUBRULE(this.cldOutput) },
        { ALT: () => this.SUBRULE(this.declaration) },
        { ALT: () => this.SUBRULE(this.parameter) },
        { ALT: () => this.SUBRULE(this.constant) },
        { ALT: () => this.SUBRULE(this.enumeration) },
        { ALT: () => this.SUBRULE(this.annotation) },
        { ALT: () => this.SUBRULE(this.end) },
        { ALT: () => this.SUBRULE(this.comment) },
        { ALT: () => this.SUBRULE(this.loop) },
        { ALT: () => this.SUBRULE(this.property) },
        { ALT: () => this.SUBRULE(this.assertBlock) },
        { ALT: () => this.SUBRULE(this.ifStatement) },
        { ALT: () => this.SUBRULE(this.elseStatement) },
        { ALT: () => this.SUBRULE(this.endIf) },
        { ALT: () => this.SUBRULE(this.endWhile) },
        { ALT: () => this.SUBRULE(this.elseIF) },
        { ALT: () => this.SUBRULE(this.func) },
        { ALT: () => this.SUBRULE(this.algorithm) },
        { ALT: () => this.SUBRULE(this.recordAssignment) },
        { ALT: () => this.SUBRULE(this.record) },
        { ALT: () => this.SUBRULE(this.external) },
        { ALT: () => this.SUBRULE(this.connector) },
      ]);
    });
  });

  inputConnector = this.RULE("inputConnector", () => {
    this.CONSUME(Equals);
    this.CONSUME(Input);
    this.CONSUME(Identifier);
  });

  outputConnector = this.RULE("outputConnector", () => {
    this.CONSUME(Equals);
    this.CONSUME(Output);
    this.CONSUME(Identifier);
  });

  connector = this.RULE("connector", () => {
    this.OPTION(() => {
      this.CONSUME(Expandable);
    });

    this.CONSUME(Connector);
    this.CONSUME(Identifier);
    this.OPTION1(() => {
      this.OR([
        { ALT: () => this.SUBRULE(this.outputConnector) },
        { ALT: () => this.SUBRULE(this.inputConnector) },
      ]);
    });
    this.OPTION2(() => {
      this.CONSUME(StringLiteral);
    });
  });

  recordAssignment = this.RULE("recordAssignment", () => {
    this.CONSUME(Record);
    this.CONSUME(Identifier);
    this.CONSUME(Equals);
    this.CONSUME1(Identifier);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION1(() => {
      this.CONSUME(StringLiteral);
    });
    this.CONSUME(Semicolon);
  });

  record = this.RULE("record", () => {
    this.CONSUME(Record);
    this.CONSUME(Identifier);
    this.OPTION1(() => {
      this.CONSUME(StringLiteral);
    });
  });

  dataType = this.RULE("dataType", () => {
    this.OR([
      { ALT: () => this.CONSUME(Real) },
      { ALT: () => this.CONSUME(Integer) },
      { ALT: () => this.CONSUME(Boolean) },
    ]);
  });

  variableType = this.RULE("variableType", () => {
    this.OR([
      { ALT: () => this.CONSUME(Real) },
      { ALT: () => this.CONSUME(Integer) },
      { ALT: () => this.CONSUME(Boolean) },
      { ALT: () => this.CONSUME(Identifier) },
    ]);
    this.OPTION(() => {
      this.SUBRULE(this.index);
    });
  });

  property = this.RULE("property", () => {
    this.SUBRULE(this.dataType);
    this.SUBRULE(this.indexed);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION1(() => {
      this.SUBRULE(this.assignment);
    });
    this.OPTION2(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION3(() => {
      this.SUBRULE(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  functionInput = this.RULE("functionInput", () => {
    this.CONSUME(Input);
    this.SUBRULE(this.variableType);
    this.SUBRULE(this.indexed);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION2(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });

    this.CONSUME(Semicolon);
  });

  functionOutput = this.RULE("functionOutput", () => {
    this.CONSUME(Output);
    this.SUBRULE(this.variableType);
    this.SUBRULE(this.indexed);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION2(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });

    this.CONSUME(Semicolon);
  });

  func = this.RULE("func", () => {
    this.OPTION(() => {
      this.CONSUME(Redeclare);
    });
    this.OPTION4(() => {
      this.OR([
        { ALT: () => this.CONSUME(Impure) },
        { ALT: () => this.CONSUME(Pure) },
      ]);
    });
    this.CONSUME(Function);
    this.CONSUME(Identifier);
    this.OPTION1(() => {
      this.CONSUME(StringLiteral);
    });
    this.MANY(() => {
      this.SUBRULE(this.functionInput);
    });

    this.MANY1(() => {
      this.SUBRULE(this.functionOutput);
    });

    this.OPTION2(() => {
      this.CONSUME(Extends);
      this.CONSUME1(Identifier);
    });
    this.OPTION3(() => {
      this.CONSUME(Semicolon);
    });
  });

  algorithm = this.RULE("algorithm", () => {
    this.OPTION(() => {
      this.CONSUME(Initial);
    });
    this.CONSUME(Algorithm);
  });

  comment = this.RULE("comment", () => {
    this.CONSUME(Comment);
  });

  namespace = this.RULE("namespace", () => {
    this.CONSUME(Within);
    this.OPTION(() => {
      this.CONSUME(Identifier);
    });

    this.CONSUME(Semicolon);
  });

  block = this.RULE("block", () => {
    this.OPTION1(() => {
      this.CONSUME(Partial);
    });
    this.CONSUME(Block);
    this.CONSUME(Identifier);
    this.OPTION(() => {
      this.CONSUME(StringLiteral);
    });
  });

  constrainedBy = this.RULE("constrainedBy", () => {
    this.CONSUME(ConstrainedBy);
    this.CONSUME(Identifier);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
  });

  rePlacableModel = this.RULE("rePlacableModel", () => {
    this.CONSUME(RePlacable);
    this.CONSUME(Model);
    this.CONSUME(Identifier);
    this.CONSUME(Equals);
    this.CONSUME1(Identifier);

    this.OPTION2(() => {
      this.SUBRULE(this.constrainedBy);
    });

    this.OPTION(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION1(() => {
      this.SUBRULE(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  rePlacablePackage = this.RULE("rePlacablePackage", () => {
    this.CONSUME(RePlacable);
    this.CONSUME(Package);
    this.CONSUME(Identifier);
    this.CONSUME(Equals);
    this.CONSUME1(Identifier);

    this.OPTION1(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION2(() => {
      this.SUBRULE(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  packageImport = this.RULE("packageImport", () => {
    this.CONSUME(Equals);
    this.CONSUME(Identifier);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
  });

  external = this.RULE("external", () => {
    this.CONSUME(External);
    this.CONSUME(StringLiteral);
    this.SUBRULE(this.expression);
  });

  package = this.RULE("package", () => {
    this.CONSUME(Package);
    this.CONSUME(Identifier);
    this.OPTION1(() => {
      this.SUBRULE(this.packageImport);
    });

    this.OPTION3(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION4(() => {
      this.CONSUME(Semicolon);
    });
  });

  protected = this.RULE("protected", () => {
    this.CONSUME(Protected);
  });

  equation = this.RULE("equation", () => {
    this.OPTION(() => {
      this.CONSUME(Initial);
    });
    this.CONSUME(Equation);
  });

  model = this.RULE("model", () => {
    this.OPTION1(() => {
      this.CONSUME(Partial);
    });
    this.CONSUME(Model);
    this.CONSUME(Identifier);
    this.OPTION(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
  });

  extends = this.RULE("extends", () => {
    this.CONSUME(Extends);
    this.CONSUME(Identifier);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.CONSUME(Semicolon);
  });

  assignment = this.RULE("assignment", () => {
    this.OR([
      { ALT: () => this.CONSUME(Equals) },
      { ALT: () => this.CONSUME(Assignment) },
    ]);
    this.SUBRULE1(this.expression);
  });

  defaultAssignments = this.RULE("defaultAssignments", () => {
    this.CONSUME(LParen);
    this.MANY({
      DEF: () => {
        this.MANY1(() => {
          this.OR1([
            { ALT: () => this.CONSUME(Each) },
            { ALT: () => this.CONSUME(Final) },
            { ALT: () => this.CONSUME(Redeclare) },
            { ALT: () => this.CONSUME(RePlacable) },
            { ALT: () => this.CONSUME(Package) },
          ]);
        });

        this.SUBRULE(this.indexed);
        this.MANY2(() => {
          this.OR([
            { ALT: () => this.SUBRULE(this.assignment) },
            { ALT: () => this.SUBRULE(this.defaultAssignments) },
          ]);
        });

        this.OPTION(() => {
          this.CONSUME(Comma);
        });
      },
    });
    this.CONSUME(RParen);
  });

  parameterModifier = this.RULE("parameterModifier", () => {
    this.OPTION(() => {
      this.CONSUME(RePlacable);
    });
    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Each) },
        { ALT: () => this.CONSUME(Final) },
        { ALT: () => this.CONSUME(Redeclare) },
        { ALT: () => this.CONSUME(Package) },
      ]);
    });
  });

  parameter = this.RULE("parameter", () => {
    this.SUBRULE(this.parameterModifier);

    this.CONSUME(Parameter);
    this.SUBRULE(this.variableType);
    this.SUBRULE(this.indexed);

    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION1(() => {
      this.SUBRULE(this.assignment);
    });

    this.OPTION4(() => {
      this.SUBRULE(this.constrained);
    });

    this.OPTION2(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION3(() => {
      this.SUBRULE1(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  blockInput = this.RULE("blockInput", () => {
    this.CONSUME(Input);
    this.SUBRULE(this.variableType);
    this.SUBRULE(this.variableRef);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION3(() => {
      this.SUBRULE(this.assignment);
    });
    this.OPTION1(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION2(() => {
      this.SUBRULE(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  blockOutput = this.RULE("blockOutput", () => {
    this.CONSUME(Output);
    this.SUBRULE(this.variableType);
    this.CONSUME(Identifier);
    this.OPTION3(() => {
      this.SUBRULE(this.assignment);
    });
    this.OPTION1(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION2(() => {
      this.SUBRULE(this.itemAnnotation); // Capture optional description string
    });

    this.CONSUME(Semicolon);
  });

  ioCondition = this.RULE("ioCondition", () => {
    this.CONSUME(If);
    this.SUBRULE(this.expression);
  });

  cdlInput = this.RULE("cdlInput", () => {
    this.CONSUME(CLDInput);
    this.SUBRULE(this.indexed);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION4(() => {
      this.SUBRULE(this.ioCondition);
    });
    this.OPTION2(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION3(() => {
      this.SUBRULE1(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  cldOutput = this.RULE("cldOutput", () => {
    this.CONSUME(CLDOutput);
    this.SUBRULE(this.indexed);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION4(() => {
      this.SUBRULE(this.ioCondition);
    });
    this.OPTION2(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION3(() => {
      this.SUBRULE1(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  ifDeclaration = this.RULE("ifDeclaration", () => {
    this.SUBRULE(this.ifOrWhen);
    this.SUBRULE(this.expression);
  });

  constrained = this.RULE("constrained", () => {
    this.CONSUME(ConstrainedBy);
    this.CONSUME(Identifier);
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
  });

  declarationModifier = this.RULE("declarationModifier", () => {
    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Inner) },
        { ALT: () => this.CONSUME(Discrete) },
        { ALT: () => this.CONSUME(RePlacable) },
      ]);
    });
  });

  unpack = this.RULE("unpack", () => {
    this.CONSUME(LParen);
    this.AT_LEAST_ONE_SEP({
      SEP: Comma,
      DEF: () => {
        this.SUBRULE(this.indexed);
      },
    });
    this.CONSUME(RParen);
  });

  declaration = this.RULE("declaration", () => {
    this.OPTION8(() => {
      this.SUBRULE(this.declarationModifier);
    });
    this.OR2([
      { ALT: () => this.SUBRULE2(this.indexed) },
      { ALT: () => this.SUBRULE2(this.unpack) },
    ]);

    // Unary operators
    this.OPTION6(() => {
      this.OR([
        { ALT: () => this.CONSUME(Minus) },
        { ALT: () => this.CONSUME(Plus) },
        { ALT: () => this.CONSUME(Divide) },
        { ALT: () => this.CONSUME(Multiply) },
      ]);
      this.SUBRULE3(this.expression);
    });

    // Function call
    this.OPTION5(() => {
      this.CONSUME(LParen);
      this.SUBRULE(this.expression);
      this.CONSUME(RParen);
    });
    this.OPTION4(() => {
      this.SUBRULE1(this.indexed);
    });
    this.OPTION(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.OPTION3(() => {
      this.SUBRULE(this.assignment);
    });
    this.OPTION7(() => {
      this.SUBRULE(this.ifDeclaration);
    });
    this.OPTION9(() => {
      this.SUBRULE(this.constrained);
    });
    this.OPTION1(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION2(() => {
      this.SUBRULE(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  variableRef = this.RULE("variableRef", () => {
    this.AT_LEAST_ONE(() => {
      this.SUBRULE1(this.indexed);
    });
  });

  connect = this.RULE("connect", () => {
    this.CONSUME(Connect);
    this.CONSUME(LParen);
    this.MANY_SEP({
      SEP: Comma,
      DEF: () => {
        this.SUBRULE(this.variableRef);
      },
    });
    this.CONSUME(RParen);
    this.OPTION(() => {
      this.SUBRULE(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  constant = this.RULE("constant", () => {
    this.CONSUME(Constant);
    this.SUBRULE(this.variableType);
    this.CONSUME1(Identifier);
    this.OPTION1(() => {
      this.SUBRULE(this.defaultAssignments);
    });
    this.CONSUME(Equals);
    this.SUBRULE(this.expression);
    this.OPTION(() => {
      this.CONSUME(StringLiteral); // Capture optional description string
    });
    this.OPTION2(() => {
      this.SUBRULE(this.itemAnnotation); // Capture optional description string
    });
    this.CONSUME(Semicolon);
  });

  expression = this.RULE("expression", () => {
    this.SUBRULE(this.additionExpression);
    this.OPTION(() => {
      this.SUBRULE(this.forLoop);
    });
  });

  additionExpression = this.RULE("additionExpression", () => {
    this.SUBRULE(this.topLevelExpression);

    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Plus) },
        { ALT: () => this.CONSUME(Minus) },
      ]);
      this.SUBRULE1(this.topLevelExpression);
    });
  });

  topLevelExpression = this.RULE("topLevelExpression", () => {
    this.SUBRULE(this.unaryExpression);

    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Multiply) },
        { ALT: () => this.CONSUME(Divide) },
        { ALT: () => this.CONSUME(Power) },
        { ALT: () => this.CONSUME(Less) },
        { ALT: () => this.CONSUME(LessEqual) },
        { ALT: () => this.CONSUME(GreaterEqual) },
        { ALT: () => this.CONSUME(Greater) },
        { ALT: () => this.CONSUME(EqualsComp) },
        { ALT: () => this.CONSUME(NotEqual) },
        { ALT: () => this.CONSUME(Or) },
        { ALT: () => this.CONSUME(And) },
        { ALT: () => this.CONSUME(Colon) },
      ]);
      this.SUBRULE1(this.unaryExpression);
    });
  });

  public unaryExpression = this.RULE("unaryExpression", () => {
    // Zero or more unary operators, e.g. ---a, +++b, -(5), etc.
    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Minus) },
        { ALT: () => this.CONSUME(Plus) },
        { ALT: () => this.CONSUME(Not) },
      ]);
    });

    // Then the base "atomic" expression
    this.SUBRULE(this.atomicExpression);
  });

  ifOrWhen = this.RULE("ifOrWhen", () => {
    this.OR([
      { ALT: () => this.CONSUME(If) },
      { ALT: () => this.CONSUME(When) },
    ]);
  });

  ifStatement = this.RULE("ifStatement", () => {
    this.SUBRULE(this.ifOrWhen);
    this.SUBRULE(this.expression);
    this.CONSUME(Then);
  });

  elseStatement = this.RULE("elseStatement", () => {
    this.CONSUME(Else);
  });

  endIf = this.RULE("endIf", () => {
    this.CONSUME(End);
    this.SUBRULE(this.ifOrWhen);
    this.CONSUME(Semicolon);
  });

  endWhile = this.RULE("endWhile", () => {
    this.CONSUME(End);
    this.CONSUME(While);
    this.CONSUME(Semicolon);
  });

  elseIF = this.RULE("elseIF", () => {
    this.CONSUME(ElseIf);
    this.SUBRULE(this.expression);
    this.CONSUME(Then);
  });

  table = this.RULE("table", () => {
    this.CONSUME(LSquare);
    this.MANY_SEP1({
      SEP: Semicolon,
      DEF: () => {
        this.MANY_SEP2({
          SEP: Comma,
          DEF: () => {
            this.SUBRULE(this.expression);
          },
        });
      },
    });
    this.CONSUME(RSquare);
  });

  set = this.RULE("set", () => {
    this.CONSUME(LFigure);
    this.MANY_SEP({
      SEP: Comma,
      DEF: () => {
        this.SUBRULE(this.expression);
      },
    });
    this.OPTION(() => {
      this.SUBRULE(this.forLoop);
    });
    this.CONSUME(RFigure);
  });

  atomicExpression = this.RULE("atomicExpression", () => {
    this.OR([
      { ALT: () => this.CONSUME(NumberLiteral) },
      {
        ALT: () => {
          this.SUBRULE(this.dataType);
          this.SUBRULE2(this.functionCall);
        },
      },
      {
        ALT: () => {
          this.CONSUME1(Identifier);
          this.SUBRULE1(this.functionCall);
        },
      },
      {
        ALT: () => {
          this.OPTION1(() => {
            this.CONSUME(Each);
          });
          this.SUBRULE(this.variableRef);
        },
      },
      { ALT: () => this.CONSUME(StringLiteral) },
      { ALT: () => this.CONSUME(False) },
      { ALT: () => this.CONSUME(True) },
      { ALT: () => this.SUBRULE(this.table) },
      { ALT: () => this.SUBRULE(this.set) },
      { ALT: () => this.SUBRULE(this.fillFn) },
      { ALT: () => this.SUBRULE(this.asbFn) },
      { ALT: () => this.SUBRULE(this.maxFn) },
      { ALT: () => this.SUBRULE(this.loadFn) },
      { ALT: () => this.SUBRULE(this.ifExpression) },
      {
        ALT: () => {
          this.CONSUME(LParen);
          this.SUBRULE(this.expression);
          this.CONSUME(RParen);
        },
      },
    ]);
  });

  ifExpression = this.RULE("ifExpression", () => {
    this.SUBRULE(this.ifStatement);
    this.SUBRULE1(this.expression);
    this.CONSUME(Else);
    this.SUBRULE2(this.expression);
  });

  forQualifier = this.RULE("forQualifier", () => {
    this.CONSUME(Colon);
    this.SUBRULE(this.expression);
  });

  whileLoop = this.RULE("whileLoop", () => {
    this.CONSUME(While);
    this.SUBRULE(this.expression);
  });

  forLoop = this.RULE("forLoop", () => {
    this.CONSUME(For);
    this.CONSUME(Identifier);
    this.CONSUME(In);
    this.SUBRULE(this.expression);
    this.OPTION(() => {
      this.SUBRULE(this.forQualifier);
    });
  });

  loop = this.RULE("loop", () => {
    this.OR([
      { ALT: () => this.SUBRULE(this.whileLoop) },
      { ALT: () => this.SUBRULE(this.forLoop) },
    ]);
    this.CONSUME(Loop);
  });

  functionCall = this.RULE("functionCall", () => {
    this.CONSUME(LParen);
    this.MANY_SEP({
      SEP: Comma,
      DEF: () => {
        this.SUBRULE(this.expression);
        this.OPTION(() => {
          this.SUBRULE(this.assignment);
        });
      },
    });
    this.CONSUME(RParen);
  });

  asbFn = this.RULE("absFunction", () => {
    this.CONSUME(Abs);
    this.SUBRULE(this.expression);
    this.CONSUME(RParen);
  });

  maxFn = this.RULE("maxFunction", () => {
    this.CONSUME(Max);
    this.MANY_SEP({
      SEP: Comma,
      DEF: () => {
        this.SUBRULE(this.expression);
      },
    });

    this.CONSUME(RParen);
  });

  fillFn = this.RULE("fillFunction", () => {
    this.CONSUME(Fill);
    this.MANY_SEP({
      SEP: Comma,
      DEF: () => {
        this.SUBRULE(this.expression);
      },
    });
    this.CONSUME(RParen);
  });

  assertBlock = this.RULE("assert", () => {
    this.CONSUME(Assert);
    this.SUBRULE(this.expression);
    this.CONSUME(Comma);
    this.SUBRULE1(this.expression);

    this.OPTION(() => {
      this.CONSUME2(Comma);
      this.OPTION2(() => {
        this.CONSUME(Level);
        this.CONSUME(Equals);
      });
      this.SUBRULE2(this.expression);
    });
    this.CONSUME(RParen);
    this.CONSUME(Semicolon);
  });

  loadFn = this.RULE("loadResourceFunction", () => {
    this.CONSUME(LoadResource);
    this.OR([
      { ALT: () => this.SUBRULE(this.loadFn) },
      { ALT: () => this.CONSUME(StringLiteral) },
      { ALT: () => this.CONSUME(Identifier) },
    ]);
    this.CONSUME(RParen);
  });

  enumeration = this.RULE("enumeration", () => {
    this.CONSUME(Type);
    this.CONSUME1(Identifier);
    this.CONSUME(Equals);
    this.CONSUME(Enumeration);
    this.CONSUME(LParen);
    this.MANY_SEP({
      SEP: Comma,
      DEF: () => {
        this.CONSUME2(Identifier);
        this.OPTION1(() => {
          this.CONSUME1(StringLiteral); // Capture optional description string
        });
      },
    });
    this.CONSUME(RParen);
    this.OPTION2(() => {
      this.CONSUME2(StringLiteral); // Capture optional description string
    });
  });

  index = this.RULE("index", () => {
    this.CONSUME(LSquare);
    this.MANY(() => {
      this.OR([
        { ALT: () => this.SUBRULE(this.expression) },
        { ALT: () => this.CONSUME(Colon) },
        { ALT: () => this.CONSUME(Comma) },
        { ALT: () => this.CONSUME(End) },
      ]);
    });
    this.CONSUME(RSquare);
  });

  indexed = this.RULE("indexed", () => {
    this.CONSUME(Identifier);
    this.OPTION(() => {
      this.SUBRULE(this.index);
    });
  });

  annotation = this.RULE("annotation", () => {
    this.CONSUME(Annotation);
    this.MANY(() => {
      this.SUBRULE(this.annotationBody);
    });
    this.OPTION(() => {
      this.CONSUME(RParen);
    });
    this.CONSUME(Semicolon);
  });

  itemAnnotation = this.RULE("itemAnnotation", () => {
    this.CONSUME(Annotation);
    this.MANY(() => {
      this.SUBRULE1(this.annotationBody);
    });
  });

  annotationBody = this.RULE("annotationBody", () => {
    this.CONSUME(LParen);
    this.MANY(() => {
      this.OR([
        { ALT: () => this.SUBRULE(this.annotationBody) },
        ...allTokens
          .filter((t) => t.name !== "LParen" && t.name !== "RParen")
          .map((t) => ({ ALT: () => this.CONSUME(t) })),
      ]);
    });
    this.CONSUME(RParen);
  });

  end = this.RULE("end", () => {
    this.CONSUME(End);
    this.CONSUME(Identifier);
    this.CONSUME(Semicolon);
  });
}

const parser = new ModelicaParser();

function parseModelica(fileContent: string): ParserResult {
  const lexResult = ModelicaLexer.tokenize(fileContent);
  parser.input = lexResult.tokens;

  const cst = parser.file();

  if (parser.errors.length > 0) {
    console.log(parser.errors[0]);
    throw new Error("Parsing errors detected");
  }

  return cst as ParserResult;
}

export { parseModelica };
