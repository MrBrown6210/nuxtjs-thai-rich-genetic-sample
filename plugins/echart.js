import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { GraphChart, PieChart, BarChart } from 'echarts/charts'
import {
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
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
  PieChart,
  BarChart
])

Vue.use(VChart)
