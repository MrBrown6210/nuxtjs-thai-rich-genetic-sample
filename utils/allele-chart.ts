import { Varient, AlleleChartOption, Allele } from "~/types/vcf"

export class AlleleChart {
  option: AlleleChartOption
  constructor() {
    this.option = {
      legend: {},
      tooltip: {},
      dataset: {
          source: [
              ['Range', 'Original', 'Filtered'],
              ['Matcha Latte', 43.3, 85.8, 93.7],
              ['Milk Tea', 83.1, 73.4, 55.1],
          ]
      },
      xAxis: {
        type: 'category',
        axisLabel: { interval: 0, rotate: 90 },
      },
      yAxis: {
        name: 'log(Numbrt of variants)',
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

  updateVarients(alleles: Allele[]) {
    this.option.dataset.source = []

    const heads = ['Range', 'Original', 'Filtered']
    this.option.dataset.source.push(heads)

    const mapper: { [key: string]: any; } = {};
    alleles.forEach(allele => {
      if (!mapper[allele.range]) {
        mapper[allele.range] = {}
      }
      mapper[allele.range][allele.from] = allele.log
    })

    Object.keys(mapper).forEach(range => {
      const { original, filtered } = mapper[range]
      const data = [range, original, filtered]
      this.option.dataset.source.push(data)
    })
  }

}
