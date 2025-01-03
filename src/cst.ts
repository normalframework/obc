import { ConstantResult, ParserResult } from "./modelica";

type Constant = {
  name: string;
  value?: string | number | boolean;
  expression?: string;
};

type EnumerationValue = { [key: string]: number } | { [key: number]: string };

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

function parseConstants(constants: ConstantResult[]) {
  return constants.map((c) => {
    let value;
    let expression;
    if (c.children.Integer) {
      if (c.children.NumberLiteral) {
        value = parseInt(c.children.NumberLiteral?.[0].image ?? "0");
      } else {
        expression = c.children.StringLiteral;
      }
    } else if (c.children.Real) {
      if (c.children.NumberLiteral) {
        value = parseFloat(c.children.NumberLiteral?.[0].image ?? "0");
      } else {
        expression = c.children.StringLiteral;
      }
      value = parseFloat(c.children.NumberLiteral?.[0].image ?? "0");
    } else {
      const val = c.children.StringLiteral?.[0].image;
      if (val) {
        if (["true", "false"].includes(val)) {
          value = val === "true";
        } else {
          expression = val;
        }
      }
    }
    const name = (c as any).children.Identifier[0].image;

    return {
      name,
      value,
      expression,
    };
  });
}

export function processCst(cst: ParserResult): ModelicaFileModel {
  const namespace = cst.children.namespace?.[0].children.Identifier[0].image;
  const packageName = cst.children.package?.[0]?.children.Identifier[0].image;
  const model = cst.children.model?.[0]?.children.Identifier[0].image;
  const constants = parseConstants(cst.children.constant ?? []);
  const enumerations = cst.children.enumeration?.map((c) => {
    const identifiers = c.children.Identifier.map((i) => i.image);
    const value: EnumerationValue = {};
    const values = identifiers.slice(1);
    values.forEach((key, index) => {
      value[key] = index;
      value[index] = key;
    });
    return {
      name: c.children.Identifier[0].image,
      value,
    };
  });

  return {
    namespace,
    package: packageName,
    model,
    constants: constants ?? [],
    enumerations: enumerations ?? [],
  };
}
