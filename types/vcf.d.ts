export interface Varient {
  type: string
  original: number
  filtered: number
}

export interface VarientChartOption {
  title: {
      text: string;
      left: string;
  };
  tooltip: {
      trigger: string;
      axisPointer: {
          type: string;
      };
  };
  series: {
      data: number[];
      type: string;
  }[];
  xAxis: {
      type: string;
      data: string[];
  };
  yAxis: {
      type: string;
  };
}
