import { VarientChart } from './varient-chart'
describe('Varient Type Chart', () => {

  let chart: VarientChart
  beforeEach(() => {
    chart = new VarientChart()
  })

  it('should default data have simple data', () => {
    const option = chart.option
    expect(option.dataset.source[0].length).toBeGreaterThanOrEqual(1)
    expect(option.series.length).toEqual(2)
  })

  it('should value change when update chart', () => {
    const varients = [
      {
        type: 'SNPs',
        original: 12910,
        filtered: 7530,
      },
      {
        type: 'Detection',
        original: 24910,
        filtered: 4419,
      }
    ]
    chart.updateVarients(varients)
    expect(chart.option.series.length).toEqual(2)
    expect(chart.option.dataset.source).toEqual([
      ['type', 'Original', 'Filtered'],
      ['SNPs', 12910, 7530],
      ['Detection', 24910, 4419]
    ])
  })
})
