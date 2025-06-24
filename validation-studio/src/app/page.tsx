"use client";

import { useState } from "react";
import { FileUpload } from "@/components/file-upload";
import { TimeSeriesChart } from "@/components/time-series-chart";
import { ImportedFile, TimeSeriesData } from "@/types/time-series";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [files, setFiles] = useState<ImportedFile[]>([]);

  // Add new files
  const handleFilesAdded = (
    newFiles: { name: string; data: TimeSeriesData }[]
  ) => {
    setFiles((prev) => [
      ...prev,
      ...newFiles.map((f) => ({
        id: uuidv4(),
        name: f.name,
        data: f.data,
        visibleSeries: Object.fromEntries(
          Object.keys(f.data[0] || {})
            .filter((k) => k !== "time")
            .map((k) => [k, false])
        ),
      })),
    ]);
  };

  // Remove a file
  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  // Toggle series visibility
  const handleToggleSeries = (fileId: string, series: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === fileId
          ? {
              ...f,
              visibleSeries: {
                ...f.visibleSeries,
                [series]: !f.visibleSeries[series],
              },
            }
          : f
      )
    );
  };

  // Toggle all series for a file
  const handleToggleAllSeries = (fileId: string, visible: boolean) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === fileId
          ? {
              ...f,
              visibleSeries: Object.fromEntries(
                Object.keys(f.visibleSeries).map((k) => [k, visible])
              ),
            }
          : f
      )
    );
  };

  // Gather all visible series for chart
  const chartSeries = files.flatMap((file) => {
    if (!file.data.length) return [];
    return Object.entries(file.visibleSeries)
      .filter(([, visible]) => visible)
      .map(([series]) => ({
        fileId: file.id,
        fileName: file.name,
        series,
        data: file.data.map((row) => ({ time: row.time, value: row[series] })),
        color: undefined,
      }));
  });

  // Compose chart data for overlay with proper time alignment
  const chartData: Record<string, number | string | null>[] = [];
  if (chartSeries.length > 0) {
    // Get all unique time points across all series
    const allTimes = Array.from(
      new Set(chartSeries.flatMap((s) => s.data.map((d) => d.time)))
    ).sort((a, b) => a - b);

    // Create data points for each unique time
    allTimes.forEach((time) => {
      const row: Record<string, number | string | null> = { time };
      // For each series, find the closest value at this time point
      chartSeries.forEach((s) => {
        const key = `${s.fileName}::${s.series}`;
        // Find exact match or interpolate
        const exactMatch = s.data.find((d) => d.time === time);
        if (exactMatch) {
          row[key] = exactMatch.value;
        } else {
          // Find surrounding points for linear interpolation
          const before = s.data.reduce<{time: number, value: number | string} | null>((prev, curr) => 
            curr.time < time && (!prev || curr.time > prev.time) ? curr : prev, null);
          const after = s.data.reduce<{time: number, value: number | string} | null>((prev, curr) => 
            curr.time > time && (!prev || curr.time < prev.time) ? curr : prev, null);
          
          if (before && after && typeof before.value === 'number' && typeof after.value === 'number') {
            // Linear interpolation
            const ratio = (time - before.time) / (after.time - before.time);
            row[key] = before.value + ratio * (after.value - before.value);
          } else {
            row[key] = null; // No interpolation possible
          }
        }
      });
      chartData.push(row);
    });
  }

  // Assign colors
  const colorPalette = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080",
    "#ffffff",
    "#000000",
  ];
  const chartKeys = chartSeries.map((s) => `${s.fileName}::${s.series}`);
  const chartColors = Object.fromEntries(
    chartKeys.map((k, i) => [k, colorPalette[i % colorPalette.length]])
  );

  return (
    <div className="flex h-screen">
      {/* Left: Chart */}
      <div className="flex-1 min-w-0 px-2 py-4 flex flex-col">
        <div className="flex-1 min-h-0">
          <TimeSeriesChart
            data={
              chartData as Array<{
                time: number;
                [key: string]: number | string | null;
              }>
            }
            keys={chartKeys}
            colors={chartColors}
          />
        </div>
      </div>
      {/* Right: File list and controls */}
      <div className="w-[350px] border-l bg-card p-4 overflow-y-auto flex flex-col gap-6">
        <FileUpload onFilesAdded={handleFilesAdded} />
        <div className="space-y-6">
          {files.map((file) => (
            <div key={file.id} className="border rounded-lg p-3 bg-background">
              <div className="flex items-center justify-between mb-2">
                <span
                  className="font-semibold text-sm truncate"
                  title={file.name}
                >
                  {file.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => handleRemoveFile(file.id)}
                >
                  Remove
                </Button>
              </div>
              <div className="flex gap-2 mb-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-xs"
                  onClick={() => handleToggleAllSeries(file.id, true)}
                >
                  Select All
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-xs"
                  onClick={() => handleToggleAllSeries(file.id, false)}
                >
                  Unselect All
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                {Object.keys(file.visibleSeries).map((series) => (
                  <label
                    key={series}
                    className="flex items-center gap-2 text-xs cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={file.visibleSeries[series]}
                      onChange={() => handleToggleSeries(file.id, series)}
                    />
                    {series}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
