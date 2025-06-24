import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TimeSeriesData, TimeSeriesDataPoint } from "@/types/time-series";

interface FileUploadProps {
  onFilesAdded: (files: { name: string; data: TimeSeriesData }[]) => void;
}
export function parseSimulationFile(content: string): TimeSeriesData {
  const lines = content.split(/\r?\n/);
  const data: Record<string, number[]> = {};
  let timeRange: number[] = [];

  let currentKey: string | null = null;
  let buffer: string[] = [];

  function flushBuffer() {
    if (currentKey && buffer.length > 0) {
      const full = buffer.join("").replace(/[\[\]]/g, "");
      const values = full
        .split(",")
        .map((s) => parseFloat(s.trim()))
        .filter((v) => !isNaN(v));

      if (currentKey === "time") {
        timeRange = values;
      } else {
        data[currentKey] = values;
      }
    }

    currentKey = null;
    buffer = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("statistics-simulation=")) continue;

    const equalIndex = trimmed.indexOf("=");
    if (equalIndex !== -1 && trimmed.includes("[")) {
      flushBuffer();
      currentKey = trimmed.substring(0, equalIndex).trim();
      buffer.push(trimmed.substring(equalIndex + 1).trim());
    } else if (currentKey) {
      buffer.push(trimmed);
    }
  }

  flushBuffer();

  // Find time range and determine point count
  if (timeRange.length !== 2) {
    throw new Error(`Expected time = [start, end], but got: ${timeRange}`);
  }
  const [start, end] = timeRange;

  const maxLength = Math.max(...Object.values(data).map((arr) => arr.length));
  const timeStep = (end - start) / (maxLength - 1);
  const timeArray = Array.from(
    { length: maxLength },
    (_, i) => start + i * timeStep
  );

  const result: TimeSeriesData = [];

  for (let i = 0; i < maxLength; i++) {
    const point: TimeSeriesDataPoint = { time: timeArray[i] };

    for (const key of Object.keys(data)) {
      const values = data[key];
      if (values.length === maxLength) {
        point[key] = values[i];
      } else if (values.length === 1) {
        point[key] = values[0];
      } else if (values.length === 2) {
        point[key] = values[i === 0 ? 0 : 1]; // first and then repeat second
      } else {
        point[key] = values[i] ?? null; // fallback (possibly sparse)
      }
    }

    result.push(point);
  }

  return result;
}
export function FileUpload({ onFilesAdded }: FileUploadProps) {
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsLoading(true);
      try {
        const parsedFiles = await Promise.all(
          acceptedFiles.map(async (file) => {
            const text = await file.text();
            let data: TimeSeriesData;

            // Check if it's a Modelica result file
            if (
              text.includes("time=[") &&
              text.includes("statistics-simulation=")
            ) {
              data = parseSimulationFile(text);
            } else {
              // Handle CSV files
              const lines = text.split("\n");
              const headers = lines[0].split(",");
              data = lines.slice(1).map((line, index) => {
                const values = line.split(",");
                const row: TimeSeriesDataPoint = { time: index };
                headers.forEach((header, i) => {
                  row[header.trim()] = parseFloat(values[i]) || values[i];
                });
                return row;
              });
            }

            return { name: file.name, data };
          })
        );
        console.log(parsedFiles);
        onFilesAdded(parsedFiles);
      } catch (error) {
        console.error("Error processing file:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [onFilesAdded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "text/plain": [".txt"],
    },
    maxFiles: 10,
  });

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "p-8 border-2 border-dashed cursor-pointer transition-colors",
        isDragActive
          ? "border-primary bg-primary/5"
          : "border-muted-foreground/25",
        isLoading && "opacity-50 cursor-not-allowed"
      )}
    >
      <input {...getInputProps()} disabled={isLoading} multiple />
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm text-muted-foreground">
          {isLoading
            ? "Processing file..."
            : isDragActive
            ? "Drop the files here"
            : "Drag and drop CSV or Modelica result files here, or click to select"}
        </p>
      </div>
    </Card>
  );
}
