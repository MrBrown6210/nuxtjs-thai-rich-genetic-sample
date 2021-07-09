<template>
  <div>
    <!-- <button @click="$fetch" class="border-2">fetch</button> -->
    <div ref="vcf" id="vcf-chart" class="w-screen h-56" />
  </div>
</template>

<script lang="ts">

import * as echarts from 'echarts';
import { Varient } from '@/types/vcf'
import { VarientChart } from '@/utils/vcf-chart'
import { defineComponent, onMounted, reactive, Ref, ref, useContext, useFetch, watch } from '@nuxtjs/composition-api'

export default defineComponent ({
  setup(props, context) {
    const { $axios } = useContext()
    let chart: echarts.ECharts | null = null
    const vcf = ref(null)
    const varientChart = new VarientChart()
    const option = ref(varientChart.option)

    onMounted(() => {
      const chartDOM = vcf.value
      chart = echarts.init(chartDOM!)
    })

    watch(option, () => {
      chart?.setOption(option.value)
    })

    const { fetch, fetchState } = useFetch(async () => {
      console.log('fetch')
      chart?.showLoading()
      const data = await $axios.$get<Varient[]>('varients/dashboard')
      chart?.hideLoading()
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
