import { Allele } from '~/types/vcf'
import { AlleleChart } from './allele-chart'
describe('Allele Chart', () => {

  let chart: AlleleChart
  beforeEach(() => {
    chart = new AlleleChart()
  })

  it('should default data have simple data', () => {
    const option = chart.option
    expect(option.dataset.source[0].length).toBeGreaterThanOrEqual(1)
    expect(option.series.length).toEqual(2)
  })

  it('should value change when update chart', () => {
    const alleles: Allele[] = [
      {
        "from": "original",
        "value": 1398003,
        "log": 14.15055535,
        "range": "0.00-0.05"
      },
      {
        "from": "original",
        "value": 130569,
        "log": 11.7796571,
        "range": "0.05-0.10"
      },
      {
        "from": "filtered",
        "value": 6261,
        "log": 8.742095196,
        "range": "0.00-0.05"
      },
      {
        "from": "filtered",
        "value": 28960,
        "log": 10.27367085,
        "range": "0.05-0.10"
      },
    ]
    chart.updateVarients(alleles)
    expect(chart.option.series.length).toEqual(2)
    expect(chart.option.dataset.source).toEqual([
      ['Range', 'Original', 'Filtered'],
      ['0.00-0.05', 14.15055535, 8.742095196],
      ['0.05-0.10', 11.7796571, 10.27367085]
    ])
  })
})
