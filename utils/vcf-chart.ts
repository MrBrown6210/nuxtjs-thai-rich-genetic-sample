import { Varient, VarientChartOption } from "~/types/vcf"

export class VarientChart {
  option: VarientChartOption
  constructor() {
    this.option = {
      legend: {},
      tooltip: {},
      dataset: {
          source: [
              ['product', '2015', '2016', '2017'],
              ['Matcha Latte', 43.3, 85.8, 93.7],
              ['Milk Tea', 83.1, 73.4, 55.1],
          ]
      },
      xAxis: {type: 'category'},
      yAxis: {},
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
      console.log(data)
      this.option.dataset.source.push(data)
    })
  }

}
