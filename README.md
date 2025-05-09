# Modelica Translator

A tool for translating and analyzing Modelica models, particularly focused on building control systems.

## Overview

This project provides tools for translating Modelica models and running experiments on building control systems. It includes functionality for parsing, analyzing, and validating Modelica code.

## Prerequisites

- Node.js (v18 or higher)
- pnpm (package manager)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd modelica-translator
```

2. Install dependencies:

```bash
pnpm install
```

## Usage

### Translation

To translate Modelica models, use the following command:

```bash
npx tsx src/index translate -i ./cxf -o out
```

This command will:

- Read input files from the `./cxf` directory
- Process the Modelica models
- Output the results to the `./out` directory

### Running Experiments

To run experiments on specific control system models:

```bash
npx tsx src/index expriment -i ./out/Buildings/Controls/OBC/ASHRAE/G36/Generic/Validation/TimeSuppressionNegativeStartTime.js -d 7200
```

From `expriment` folder.

Where:

- The first argument is the path to the experiment file
- The second argument (7200) is the simulation time in seconds

## Project Structure

- `src/` - Source code directory
- `cxf/` - Input Modelica files
- `out/` - Output directory for translated files
- `expriment/` - Manual expliments relanted files
- `validation/` - Expriments results
- `standard/` - Standard definitions and configurations
- `modelica-buildings/` - Modelica Buildings library files

## Dependencies

The project uses several key dependencies:

- `@buf/normalframework_nf.bufbuild_es` - Normal Framework protos
- `@dagrejs/graphlib` - Graph manipulation library
- `chevrotain` - Parser toolkit
- `mathjs` - Mathematical operations
- `openai` - AI integration
- `zod` - Schema validation

## Development

The project is written in TypeScript and uses:

- `tsx` for running TypeScript files directly
- `typescript` for type checking and compilation
