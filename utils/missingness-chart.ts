import { Missingness, MissingnessChartOption } from "~/types/vcf"

export type missingnessChartStyle = 'orignal' | 'filtered'

export class MissingnessChart {
  option: MissingnessChartOption
  private type: missingnessChartStyle
  constructor(type: missingnessChartStyle) {
    this.option = {
      legend: {},
      tooltip: {},
      dataset: {
          source: [
              ['Fraction', type],
              ['0.1', 2000],
              ['0.2', 4000],
          ]
      },
      xAxis: {
        type: 'category',
        axisLabel: { interval: 0, rotate: 0 },
      },
      yAxis: {
        name: 'Number of varients',
        nameLocation: 'middle',
        nameGap: 80,
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
          {
            type: 'bar',
            itemStyle: {
              color: type == 'orignal' ? '#5470c6' : '#91cc75'
            },
            barCategoryGap: "1",
          },
      ]
    }
    this.type = type
  }

  updateVarients(missingnesses: Missingness[]) {
    this.option.dataset.source = []

    const heads = ['Fraction', this.type]
    this.option.dataset.source.push(heads)

    missingnesses.forEach(missingness => {
      const data = [missingness.fraction, missingness.varient]
      this.option.dataset.source.push(data)
    })
  }

}
