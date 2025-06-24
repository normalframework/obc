import json
import re
import csv
import sys
from typing import Dict, Any, List
import pathlib

def parse_simulation_file(filepath: str) -> Dict[str, Any]:
    result = {}
    with open(filepath, "r") as file:
        lines = file.readlines()
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()

        if not line:
            i += 1
            continue

        # Handle JSON block
        if line.startswith("statistics-simulation=") and i + 1 < len(lines) and lines[i + 1].strip().startswith("{"):
            key = "statistics-simulation"
            json_lines = []
            i += 1
            while i < len(lines) and not lines[i].strip().endswith("}"):
                json_lines.append(lines[i].strip())
                i += 1
            if i < len(lines):
                json_lines.append(lines[i].strip())  # Add final line with closing }
            json_str = "\n".join(json_lines)
            result[key] = json.loads(json_str)
        else:
            # Handle time series data
            match = re.match(r"([^=]+)=\[(.*)", line)
            if match:
                key, rest = match.groups()
                values = rest
                # Handle multi-line arrays
                while not values.endswith("]"):
                    i += 1
                    values += lines[i].strip()
                # Convert scientific notation strings to floats
                float_values = [float(v.strip()) for v in values.rstrip("]").split(",")]
                result[key.strip()] = float_values
            elif "=" in line:
                key, value = line.split("=", 1)
                result[key.strip()] = value.strip()
        
        i += 1

    # Write arrays to CSV
    array_data = {k:v for k,v in result.items() if isinstance(v, list) and len(v) > 0 and isinstance(v[0], (int, float))}
    
    if array_data:
        filename = pathlib.Path(filepath).stem
        with open(f'{filename}.csv', 'w', newline='') as f:
            writer = csv.writer(f)
            # Write header
            writer.writerow(array_data.keys())
            # Write data rows
            max_len = max(len(v) for v in array_data.values())
            for i in range(max_len):
                row = [array_data[col][i] if i < len(array_data[col]) else '' for col in array_data.keys()]
                writer.writerow(row)

    return result

def main():
    if len(sys.argv) != 2:
        print("Usage: python parse-result.py <filepath>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    data = parse_simulation_file(filepath)
    
    # Print some basic information about the parsed data
    print(f"Parsed {len(data)} variables")
    if 'time' in data:
        print(f"Time range: {data['time'][0]} to {data['time'][-1]}")
        print(f"Number of time points: {len(data['time'])}")
    
    # Print variable names and their lengths
    print("\nVariables:")
    for key, value in data.items():
        if isinstance(value, list):
            print(f"{key}: {len(value)} points")
        else:
            print(f"{key}: {value}")

if __name__ == "__main__":
    main()
