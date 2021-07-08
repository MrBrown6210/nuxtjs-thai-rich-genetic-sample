import { VarientChart } from './vcf-chart'
describe('Varient Type Chart', () => {

  let chart: VarientChart
  beforeEach(() => {
    chart = new VarientChart()
  })

  it('should have title', () => {
    expect(chart.option.title).toBeDefined()
  })

  it('should default data have simple data', () => {
    const option = chart.option
    expect(option.series.length).toBeGreaterThanOrEqual(1)
    expect(option.series[0].data.length).toBeGreaterThanOrEqual(1)
    expect(option.xAxis.data.length).toBeGreaterThanOrEqual(1)
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
    expect(chart.option.series[0].data).toEqual([12910, 24910])
    expect(chart.option.series[1].data).toEqual([7530, 4419])
    expect(chart.option.xAxis.data.length).toEqual(2)
    expect(chart.option.xAxis.data[0]).toEqual('SNPs')
    expect(chart.option.xAxis.data[1]).toEqual('Detection')
  })
})
