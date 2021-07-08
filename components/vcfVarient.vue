<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <v-chart autoresize class="chart" :option="option" />
    </div>
  </div>
</template>

<script lang="ts">

import VChart, { THEME_KEY } from "vue-echarts";
import { defineComponent, onMounted, reactive, Ref, ref, useContext, useFetch } from '@nuxtjs/composition-api'

interface Varient {
  type: string
  original: number
  filtered: number
}

export default defineComponent ({
  components: {
    VChart,
  },
  provide: {
    // [THEME_KEY]: "dark",
  },
  setup() {
    const { $axios } = useContext()
    const varients: Ref<Varient[]> = ref([
      {
        type: 'test',
        original: 200,
        filtered: 300
      }
    ])
    const option = {
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
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        data: ["test"]
      },
      yAxis: {
          type: 'value',
      },
    }

    const updateChart = () => {
      console.log('update chart')
      option.xAxis.data = []
      option.series[0].data = []
      option.series[1].data = []
      varients.value.forEach(varient => {
        option.xAxis.data.push(varient.type)
        option.series[0].data.push(varient.original)
        option.series[1].data.push(varient.filtered)
      })
    }

    const { fetch, fetchState } = useFetch(async () => {
      console.log('fetch')
      console.log(fetchState)
      const data = await $axios.$get<Varient[]>('varients/dashboard')
      varients.value = data
      updateChart()
    })

    return { option, varients, updateChart }
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
