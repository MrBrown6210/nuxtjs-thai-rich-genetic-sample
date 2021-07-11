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

export interface Allele {
  from: string
  value: number
  log: number
  range: string
}

export interface AlleleChartOption {
  title?: {
      text: string;
      left: string;
  };
  legend: {};
  tooltip: {};
  dataset: {
      source: (string | number)[][];
  };
  xAxis: {};
  yAxis: {};
  series: {
      type: string;
  }[];
}

export interface Missingness {
  type: string
  fraction: number
  varient: number
}

export interface MissingnessChartOption {
  title?: {
      text: string;
      left: string;
  };
  legend: {};
  tooltip: {};
  dataset: {
      source: (string | number)[][];
  };
  xAxis: {};
  yAxis: {};
  series: {}[];
}
