<template>
  <div>
    <p v-if="$fetchState.pending">Fetching Varient Chart...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <div ref="vcf" id="vcf-chart" class="w-screen h-56" />
    </div>
  </div>
</template>

<script lang="ts">

import * as echarts from 'echarts';
import { Varient } from '@/types/vcf'
import { VarientChart } from '@/utils/vcf-chart'
import { defineComponent, onMounted, reactive, Ref, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent ({
  setup(props, context) {
    const { $axios } = useContext()
    let chart: echarts.ECharts | null = null
    const vcf = ref(null)
    const varientChart = new VarientChart()
    const option = ref(varientChart.option)

    onMounted(() => {
      const chartDOM = vcf.value
      console.log('DOM', chartDOM)
      chart = echarts.init(chartDOM!)
      chart?.setOption(option.value)
    })

    const { fetch, fetchState } = useFetch(async () => {
      console.log('fetch')
      const data = await $axios.$get<Varient[]>('varients/dashboard')
      varientChart.updateVarients(data)
    })

    return { option, vcf }
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
