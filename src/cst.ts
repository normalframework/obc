import { IToken } from "chevrotain";
import {
  AdditionExpression,
  AssignmentModel,
  AtomicExpression,
  ConstantResult,
  ExpressionModel,
  Indexed,
  ParametrizedBlock,
  ParserResult,
  TopLevelExpression,
  UnaryExpression,
  VariableRef,
} from "./modelica";

type Constant = {
  name: string;
  value?: ParsedExpression;
};

type EnumerationValue = { [key: string]: number };

type Enumeration = {
  name: string;
  value: EnumerationValue;
};

type ModelicaFileModel = {
  namespace?: string;
  package?: string;
  model?: string;
  constants: Constant[];
  enumerations: Enumeration[];
};

export type ParsedExpression =
  | {
      value: number | string | boolean;
    }
  | {
      expression: string;
    };

function isNumberExpression(
  expression: ParsedExpression
): expression is { value: number } {
  return "value" in expression && typeof expression.value === "number";
}

function isStringExpression(
  expression: ParsedExpression
): expression is { value: string } {
  return "value" in expression && typeof expression.value === "string";
}

function isBooleanExpression(
  expression: ParsedExpression
): expression is { value: boolean } {
  return "value" in expression && typeof expression.value === "boolean";
}

function formatExpression(expression: ParsedExpression | undefined) {
  if (!expression) {
    return '""';
  }
  if (isNumberExpression(expression)) {
    return expression.value;
  }
  if (isStringExpression(expression)) {
    return `"${expression.value}"`;
  }
  if (isBooleanExpression(expression)) {
    return expression.value ? "true" : "false";
  }
  if ("expression" in expression) {
    return expression.expression;
  }
  return '""';
}

function processParametrizedBlock(
  parametrizedBlock: ParametrizedBlock[] | undefined
) {
  const typeChildren = parametrizedBlock?.[0].children.variableType[0].children;
  if (!typeChildren) {
    return {};
  }

  let identifier = typeChildren.Identifier?.[0].image;
  if (typeChildren.Boolean) {
    identifier = "boolean";
  }
  if (typeChildren.Integer) {
    identifier = "integer";
  }
  if (typeChildren.Real) {
    identifier = "real";
  }
  return { identifier };
}

function processIndexed(indexed: Indexed) {
  const children = indexed.children;
  const identifier = children.Identifier[0].image;
  if (children.expression) {
    const index = processExpression(children.expression[0]);
    if (index) {
      return `${identifier}[${index}]`;
    }
  }
  return identifier;
}

function processVariableRef(variableRef: VariableRef) {
  const children = variableRef.children;
  const parts = children.indexed.map(processIndexed);
  return parts.join(".");
}

function processAtomicExpression(
  atomicExpression: AtomicExpression
): ParsedExpression | undefined {
  if (!atomicExpression) {
    return undefined;
  }
  const children = atomicExpression.children;
  if (children.NumberLiteral) {
    return {
      value: parseFloat(children.NumberLiteral[0].image),
    };
  }
  if (children.StringLiteral) {
    return {
      value: children.StringLiteral[0].image,
    };
  }
  if (children.variableRef) {
    return {
      expression: processVariableRef(children.variableRef[0]),
    };
  }
  if (children.True) {
    return {
      value: true,
    };
  }
  if (children.False) {
    return {
      value: false,
    };
  }
}

function processUnaryExpression(unaryExpression: UnaryExpression) {
  if (!unaryExpression) {
    return undefined;
  }
  const children = unaryExpression.children;
  const atomicExpression = processAtomicExpression(
    children.atomicExpression[0]
  );
  if (!atomicExpression) {
    return undefined;
  }
  if (children.Not && isBooleanExpression(atomicExpression)) {
    return {
      value: !atomicExpression.value,
    };
  }
  if (children.Minus && isNumberExpression(atomicExpression)) {
    return {
      value: -atomicExpression.value,
    };
  }
  return atomicExpression;
}

function expressionOperator(children: {
  Multiply?: [IToken];
  Divide?: [IToken];
  Power?: [IToken];
  Less?: [IToken];
  LessEqual?: [IToken];
  GreaterEqual?: [IToken];
  Greater?: [IToken];
  EqualsComp?: [IToken];
  NotEqual?: [IToken];
  Or?: [IToken];
  And?: [IToken];
  Not?: [IToken];
  Plus?: [IToken];
  Minus?: [IToken];
}) {
  if (children.And) {
    return "&&";
  }
  if (children.Or) {
    return "||";
  }
  if (children.Plus) {
    return "+";
  }
  if (children.Minus) {
    return "-";
  }
  if (children.Multiply) {
    return "*";
  }
  if (children.Divide) {
    return "/";
  }
  if (children.Power) {
    return "**";
  }
  if (children.Less) {
    return "<";
  }
  if (children.LessEqual) {
    return "<=";
  }
  if (children.Greater) {
    return ">";
  }
  if (children.GreaterEqual) {
    return ">=";
  }
  if (children.EqualsComp) {
    return "==";
  }
  if (children.NotEqual) {
    return "!=";
  }
}

function calculateExpressions(
  expressions: (ParsedExpression | undefined)[],
  operator: string | undefined
) {
  const filteredExpressions = expressions.filter((e) => e);
  if (filteredExpressions.length === 0) {
    return undefined;
  }

  if (filteredExpressions.length === 1) {
    return filteredExpressions[0];
  }

  if (!operator) {
    return filteredExpressions[0];
  }

  if (
    isBooleanExpression(filteredExpressions[0]!) &&
    isBooleanExpression(filteredExpressions[1]!)
  ) {
    if (operator === "&&") {
      return {
        value: filteredExpressions[0]!.value && filteredExpressions[1]!.value,
      };
    }
    if (operator === "||") {
      return {
        value: filteredExpressions[0]!.value || filteredExpressions[1]!.value,
      };
    }
  }

  if (
    isNumberExpression(filteredExpressions[0]!) &&
    isNumberExpression(filteredExpressions[1]!)
  ) {
    switch (operator) {
      case "+":
        return {
          value: filteredExpressions[0]!.value + filteredExpressions[1]!.value,
        };
      case "-":
        return {
          value: filteredExpressions[0]!.value - filteredExpressions[1]!.value,
        };
      case "*":
        return {
          value: filteredExpressions[0]!.value * filteredExpressions[1]!.value,
        };
      case "/":
        return {
          value: filteredExpressions[0]!.value / filteredExpressions[1]!.value,
        };
      case "**":
        return {
          value: filteredExpressions[0]!.value ** filteredExpressions[1]!.value,
        };
      case "<":
        return {
          value: filteredExpressions[0]!.value < filteredExpressions[1]!.value,
        };
      case "<=":
        return {
          value: filteredExpressions[0]!.value <= filteredExpressions[1]!.value,
        };
      case ">":
        return {
          value: filteredExpressions[0]!.value > filteredExpressions[1]!.value,
        };
      case ">=":
        return {
          value: filteredExpressions[0]!.value >= filteredExpressions[1]!.value,
        };
      case "==":
        return {
          value:
            filteredExpressions[0]!.value === filteredExpressions[1]!.value,
        };
      case "!=":
        return {
          value:
            filteredExpressions[0]!.value !== filteredExpressions[1]!.value,
        };
    }
  }

  return {
    expression: `${formatExpression(
      filteredExpressions[0]!
    )} ${operator} ${formatExpression(filteredExpressions[1]!)}`,
  };
}

function processTopLevelExpression(topLevelExpression: TopLevelExpression) {
  if (!topLevelExpression) {
    return undefined;
  }
  const children = topLevelExpression.children;
  const expressions = children.unaryExpression.map(processUnaryExpression);
  const operator = expressionOperator(children);
  return calculateExpressions(expressions, operator);
}

function processAdditionExpression(additionExpression: AdditionExpression) {
  if (!additionExpression) {
    return undefined;
  }
  const children = additionExpression.children;
  const expressions = children.topLevelExpression.map(
    processTopLevelExpression
  );
  const operator = expressionOperator(children);
  return calculateExpressions(expressions, operator);
}

function processExpression(expression: ExpressionModel | undefined) {
  if (!expression) {
    return undefined;
  }
  const children = expression.children;
  return processAdditionExpression(children.additionExpression[0]);
}

function processAssignment(assignment: AssignmentModel | undefined) {
  if (!assignment) {
    return undefined;
  }
  const children = assignment.children;
  return processExpression(children.expression[0]);
}

function parseConstants(constants: ConstantResult[]) {
  return constants.flatMap((c) => {
    return c.children.constantDeclaration
      .filter((d) => d.children.assignment)
      .map((d) => {
        const value = processAssignment(d.children.assignment![0]);
        const name = processParametrizedBlock(
          d.children.parametrizedBlock
        ).identifier;

        return {
          name: name ?? "",
          value,
        };
      });
  });
}

export function processCst(cst: ParserResult): ModelicaFileModel {
  const namespace = cst.children.namespace?.[0].children?.Identifier?.[0].image;
  const packageName = processParametrizedBlock(
    cst.children.package?.[0].children.parametrizedBlock
  );

  const model = processParametrizedBlock(
    cst.children.model?.[0].children.parametrizedBlock
  );

  const constants = parseConstants(cst.children.constant ?? []);
  const enumerations = cst.children.enumeration?.map((c) => {
    const identifiers = c.children.Identifier.map((i) => i.image);
    const value: EnumerationValue = {};
    const values = identifiers.slice(1);
    values.forEach((key, index) => {
      value[key] = index;
    });
    return {
      name: c.children.Identifier[0].image,
      value,
    };
  });

  return {
    namespace,
    package: packageName?.identifier,
    model: model?.identifier,
    constants: constants ?? [],
    enumerations: enumerations ?? [],
  };
}
