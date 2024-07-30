export type BlockData = {
  "@context": Context;
  "@graph": Node[];
};

export type Context = {
  S231P: string;
};

export type Node = {
  "@id": string;
  "@type"?: string;
  "S231P:containsBlock"?: Link[];
  "S231P:hasInput"?: Link[];
  "S231P:hasOutput"?: Link;
  "S231P:hasParameter"?: Link;
  "S231P:label"?: string;
  "S231P:accessSpecifier"?: string;
  "S231P:description"?: string;
  "S231P:graphics"?: string;
  "S231P:isConnectedTo"?: Link | Link[];
  "S231P:hasInstance"?: Link | Link[];
  "S231P:isFinal"?: boolean;
  "S231P:value"?: number | string | {
    "@type": string;
    "@value": string;
  };
  "S231P:isOfDataType"?: Link | Link[];
};

export type Link = {
  "@id": string;
};

export type ExecutionParameter = {
  id: string;
  name: string;
  value?: string;
};

export type ExecutionNode = {
  id: string;
  type: string;
  name: string;
  inputs?: string[];
  outputs?: string[];
  parameters?: ExecutionParameter[];
};

export type ExecutionEdgeBlock = {
  name: string;
  parameter: string;
  id: string;
};

export type ExecutionEdgeNode = {
  block: ExecutionEdgeBlock;
  name: string;
};

export type ExecutionEdge = {
  from: ExecutionEdgeNode;
  to: ExecutionEdgeNode;
  label: string;
};
