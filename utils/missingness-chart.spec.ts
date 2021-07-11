import { Missingness } from '~/types/vcf'
import { MissingnessChart, missingnessChartStyle } from './missingness-chart'
describe('Missingness Chart', () => {

  let chart: MissingnessChart
  let type: missingnessChartStyle
  beforeEach(() => {
    type = 'orignal'
    chart = new MissingnessChart(type)
  })

  it('should default data have simple data', () => {
    const option = chart.option
    expect(option.dataset.source[0].length).toBeGreaterThanOrEqual(1)
    expect(option.series.length).toEqual(1)
  })

  it('should value change when update chart as original type', () => {
    const missingnesses: Missingness[] = [
      {
        type: 'original',
        fraction: 0.1,
        varient: 394100
      },
      {
        type: 'original',
        fraction: 0.2,
        varient: 124100
      },
      {
        type: 'original',
        fraction: 0.3,
        varient: 374100
      },
      {
        type: 'original',
        fraction: 0.4,
        varient: 324100
      },
    ]
    chart.updateVarients(missingnesses)
    expect(chart.option.series.length).toEqual(1)
    expect(chart.option.dataset.source).toEqual([
      ['Fraction', type],
      [0.1, 394100],
      [0.2, 124100],
      [0.3, 374100],
      [0.4, 324100],
    ])
  })

  it('should value change when update chart as filtered type', () => {
    type = 'filtered'
    chart = new MissingnessChart(type)
    const missingnesses: Missingness[] = [
      {
        type: 'filtered',
        fraction: 0.1,
        varient: 324120
      },
      {
        type: 'filtered',
        fraction: 0.2,
        varient: 264960
      },
      {
        type: 'filtered',
        fraction: 0.3,
        varient: 224500
      },
      {
        type: 'filtered',
        fraction: 0.4,
        varient: 194100
      },
    ]
    chart.updateVarients(missingnesses)
    expect(chart.option.series.length).toEqual(1)
    expect(chart.option.dataset.source).toEqual([
      ['Fraction', type],
      [0.1, 324120],
      [0.2, 264960],
      [0.3, 224500],
      [0.4, 194100],
    ])
  })
})
