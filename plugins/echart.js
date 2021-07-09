import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { GraphChart, PieChart, BarChart } from 'echarts/charts'
import {
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
} from 'echarts/components'

import Vue from 'vue'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  GridComponent,
  GraphChart,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  DatasetComponent,
  PieChart,
  BarChart
])

Vue.use(VChart)
