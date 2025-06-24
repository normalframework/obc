export interface TimeSeriesDataPoint {
  time: number;
  [key: string]: number | string;
}

export type TimeSeriesData = TimeSeriesDataPoint[];

export interface ImportedFile {
  id: string;
  name: string;
  data: TimeSeriesData;
  visibleSeries: Record<string, boolean>; // key: column name, value: visible
} 