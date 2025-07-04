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

To rebuild the Modelica constants cache (`modelica.json`), add:

```bash
--rebuild-modelica
```

### Running Experiments

To run experiments on specific control system models:

```bash
npx tsx src/index expriment -i ./out/Buildings/Controls/OBC/ASHRAE/G36/Generic/Validation/TimeSuppressionNegativeStartTime.js -d 7200
```

From `expriment` folder.

Where:

- The first argument is the path to the experiment file
- The second argument (7200) is the simulation time in seconds

### Generating NF app

Create a Normal Framework app from translated files

```bash
npx tsx src/index.ts app -i out -o app -c app-config.yaml
```

- `-i`: Folder with translated Modelica models
- `-o`: Output folder for the generated app
- `-c`: Path to the app configuration YAML file

## App Configuration

The `app-config.yaml` file defines the behavior and setup for the generated NF app. It specifies metadata and controller hooks to run during simulation.

Example:

```yaml
name: OBC
description: OBC Modelica App
hooks:
  - name: reheat-controller
    interval: 1
    controller: Buildings/Controls/OBC/ASHRAE/G36/TerminalUnits/Reheat/Controller.js
    parameters:
      VHeaMax_flow: 0.3
      VHeaMin_flow: 0.15
      VCooMax_flow: 1.5
      VOccMin_flow: 0.15
  - name: cooling-only-controller
    interval: 1
    controller: Buildings/Controls/OBC/ASHRAE/G36/TerminalUnits/CoolingOnly/Controller.js
```

Fields

- `name`: Name of the app (used for identification)
- `description`: Optional description
- `hooks`: List of controller hooks

Each hook supports:

- `name`: Unique identifier
- `interval`: Execution interval (in seconds)
- `controller`: Path to the controller file
- `parameters`: Optional dictionary of controller parameters

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

## BOPTEST Integration

This project supports integration with [BOPTEST](https://github.com/ibpsa/project1-boptest) via the [Normal Framework](https://github.com/normalframework/nf-sdk). The process enables simulation of translated Modelica controllers in a realistic building test environment.

### Step-by-Step Setup

#### 1. Generate Normal App

First, generate a Normal app for the controller you want to run. Use the `app-config.yaml` file with the desired controller configuration (e.g., `reheat-controller`):

```bash
npx tsx src/index app -i ./out -o ./app -c app-config.yaml
```

#### 2. Push App to GitHub

Push the generated app (e.g., contents of `./app`) to a public or private GitHub repository. BOPTEST will later reference this repository for the controller logic.

#### 3. Run the BOPTEST Simulator

Clone and run the [boptest-sdk](https://github.com/normalframework/boptest-sdk) repository. Make sure to:

- Select the appropriate **test case** and **scenario**
- Set environment variables for timing:
  - `APP_INTERVAL` – interval your controller runs (e.g., `1`)
  - `STEP_SIZE` – simulation timestep
  - Ensure `STEP_SIZE / APP_INTERVAL` matches the controller hook's `interval`

#### 4. Launch Normal

Start the Normal server, ensuring that the BOPTEST BACnet container is discoverable by Normal. This allows BACnet discovery of simulation points.

#### 5. Discover BOPTEST Points

In the Normal UI:

- Perform **BACnet discovery**
- Import all relevant BOPTEST points into Normal

#### 6. Enable Trending

Enable trending for the discovered points:

- Set the **polling interval** to `30s`
- Ensure trending is active for all input and output points

#### 7. Label Points for Controller Mapping

Create a new workflow in Normal to organize and map your BOPTEST points:

1. **Import all needed points** into the workflow
2. Create a new attribute called `modelica`
3. Map the points to expected Modelica controller input/output names

##### Example: [Reheat Controller](https://simulationresearch.lbl.gov/modelica/releases/v11.0.0/help/Buildings_Controls_OBC_ASHRAE_G36_TerminalUnits_Reheat.html#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat) with [`multizone_office_simple_air`](https://ibpsa.github.io/project1-boptest/docs-testcases/multizone_office_simple_air/index.html)

**Inputs**

| BOPTEST Point                    | Controller Input |
| -------------------------------- | ---------------- |
| `hvac_oveZonSupEas_TZonHeaSet_u` | `THeaSet`        |
| `hvac_reaZonEas_TZon_y`          | `TZon`           |
| `hvac_reaZonEas_TSup_y`          | `TDis`           |
| `hvac_reaAhu_TSup_y`             | `TSup`           |
| `hvac_oveAhu_TSupSet_u`          | `TSupSet`        |
| `hvac_reaZonEas_V_flow_y`        | `VDis_flow`      |
| `hvac_oveZonSupEas_TZonCooSet_u` | `TCooSet`        |

**Outputs**

| Controller Output | BOPTEST Point                 |
| ----------------- | ----------------------------- |
| `yDam`            | `hvac_oveZonActEas_yDam_u`    |
| `yVal`            | `hvac_oveZonActEas_yReaHea_u` |

Save the workflow to apply the changes.

#### 8. Install and Configure App

Install the previously generated app in Normal and:

- Select the relevant points by name
- Set the **labeling attribute** to `attrs.modelica` in the app's hook configuration

#### 9. Customize Hook Logic (Optional)

For the [Reheat Controller](https://simulationresearch.lbl.gov/modelica/releases/v11.0.0/help/Buildings_Controls_OBC_ASHRAE_G36_TerminalUnits_Reheat.html#Buildings.Controls.OBC.ASHRAE.G36.TerminalUnits.Reheat) with the [`multizone_office_simple_air`](https://ibpsa.github.io/project1-boptest/docs-testcases/multizone_office_simple_air/index.html) test case, you may want to calculate occupancy based on heating and cooling setpoints. Modify the hook code accordingly and save it.

##### Example:

```js
module.exports = async ({ points }) => {
  const read = async (label) => {
    const point = points.byLabel(label).first();
    if (!point) {
      return 0;
    }
    const [value] = await point.read();
    return normalize(value?.value?.real);
  };

  const write = async (label, value) => {
    const point = points.byLabel(label).first();
    if (!point) {
      return;
    }
    await point.write(value);
  };

  const params = {
    uOpeMod: 7, // unoccupied
    TDis: await read("TDis"),
    TSup: await read("TSup"),
    u1Fan: await read("u1Fan"),
    u1HotPla: await read("u1HotPla"),
    VDis_flow: await read("VDis_flow"),
    TCooSet: await read("TCooSet"),
    THeaSet: await read("THeaSet"),
    TZon: await read("TZon"),
    oveFloSet: await read("oveFloSet"),
    TSupSet: await read("TSupSet"),
    ppmCO2: await read("ppmCO2"),
    ppmCO2Set: await read("ppmCO2Set"),
    u1Occ: await read("u1Occ"),
    u1Win: await read("u1Win"),
    oveDamPos: await read("oveDamPos"),
    uHeaOff: await read("uHeaOff"),
  };
  if (
    Math.round(params.TCooSet) === 297 &&
    Math.round(params.THeaSet) === 293
  ) {
    params.uOpeMod = 7; // occupied
  } else if (
    Math.round(params.TCooSet) === 303 &&
    Math.round(params.THeaSet) === 293
  ) {
    params.uOpeMod = 4; // warm-up
  }

  const {
    VAdjAreBreZon_flow,
    VAdjPopBreZon_flow,
    VMinOA_flow,
    VSet_flow,
    VZonAbsMin_flow,
    VZonDesMin_flow,
    yCO2,
    yDam,
    yFloSenAla,
    yHeaValResReq,
    yHotWatPlaReq,
    yLeaDamAla,
    yLeaValAla,
    yLowFloAla,
    yLowTemAla,
    yVal,
    yZonPreResReq,
    yZonTemResReq,
  } = instance(params);

  await Promise.all([
    await write("VAdjAreBreZon_flow", normalize(VAdjAreBreZon_flow)),
    await write("VAdjPopBreZon_flow", normalize(VAdjPopBreZon_flow)),
    await write("VMinOA_flow", normalize(VMinOA_flow)),
    await write("VSet_flow", normalize(VSet_flow)),
    await write("VZonAbsMin_flow", normalize(VZonAbsMin_flow)),
    await write("VZonDesMin_flow", normalize(VZonDesMin_flow)),
    await write("yCO2", normalize(yCO2)),
    await write("yDam", normalize(yDam)),
    await write("yFloSenAla", normalize(yFloSenAla)),
    await write("yHeaValResReq", normalize(yHeaValResReq)),
    await write("yHotWatPlaReq", normalize(yHotWatPlaReq)),
    await write("yLeaDamAla", normalize(yLeaDamAla)),
    await write("yLeaValAla", normalize(yLeaValAla)),
    await write("yLowFloAla", normalize(yLowFloAla)),
    await write("yLowTemAla", normalize(yLowTemAla)),
    await write("yVal", normalize(yVal)),
    await write("yZonPreResReq", normalize(yZonPreResReq)),
    await write("yZonTemResReq", normalize(yZonTemResReq)),
  ]);

  TimeManager.advance(1);
};
```

---

### Results

Once everything is connected:

- The controller reads inputs from BOPTEST
- Computes control signals using your translated Modelica logic
- Writes outputs back via the BACnet interface
- Time series data can be reviewed in the Normal UI for validation and analysis

---
