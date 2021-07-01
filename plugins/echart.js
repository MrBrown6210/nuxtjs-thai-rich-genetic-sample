import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { GraphChart } from 'echarts/charts'
import { TitleComponent } from 'echarts/components'
import { ToolboxComponent } from 'echarts/components'
import { LegendComponent } from 'echarts/components'
import { PieChart } from 'echarts/charts'

import Vue from 'vue'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  GraphChart,
  TitleComponent,
  ToolboxComponent,
  LegendComponent,
  PieChart
])

Vue.use(VChart)
