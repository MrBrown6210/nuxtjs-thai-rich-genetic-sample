import { Varient, VarientChartOption } from "~/types/vcf"

export class VarientChart {
  option: VarientChartOption
  constructor() {
    this.option = {
      title: {
        text: "Varient Type",
        left: "center",
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      series: [
        {
          data: [200, 200],
          type: 'bar'
        },
        {
          data: [200],
          type: 'bar'
        }
      ],
      xAxis: {
        type: 'category',
        data: ["test"]
      },
      yAxis: {
          type: 'value',
      },
    }
  }

  updateVarients(varients: Varient[]) {
    this.option.xAxis.data = []
    this.option.series[0].data = []
    this.option.series[1].data = []
    varients.forEach(varient => {
      this.option.xAxis.data.push(varient.type)
      this.option.series[0].data.push(varient.original)
      this.option.series[1].data.push(varient.filtered)
    })
  }

}
