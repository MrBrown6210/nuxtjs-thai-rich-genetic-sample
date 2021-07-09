export interface Varient {
  type: string
  original: number
  filtered: number
}

export interface VarientChartOption {
  title?: {
      text: string;
      left: string;
  };
  legend: {};
  tooltip: {};
  dataset: {
      source: (string | number)[][];
  };
  xAxis: {
      type: string;
  };
  yAxis: {};
  series: {
      type: string;
  }[];
}
