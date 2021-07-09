import { Varient, AlleleChartOption } from "~/types/vcf"

export class AlleleChart {
  option: AlleleChartOption
  constructor() {
    this.option = {
      legend: {},
      tooltip: {},
      dataset: {
          source: [
              ['type', 'Original', 'Filtered'],
              ['Matcha Latte', 43.3, 85.8, 93.7],
              ['Milk Tea', 83.1, 73.4, 55.1],
          ]
      },
      xAxis: {type: 'category'},
      yAxis: {
        name: 'Numbrt of variants',
        nameLocation: 'middle',
        nameGap: 80
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
          {type: 'bar'},
          {type: 'bar'}
      ]
    }
  }

  updateVarients(varients: Varient[]) {
    this.option.dataset.source = []

    const heads = ['type', 'Original', 'Filtered']
    this.option.dataset.source.push(heads)

    varients.forEach(varient => {
      const data = [varient.type, varient.original, varient.filtered]
      this.option.dataset.source.push(data)
    })
  }

}
