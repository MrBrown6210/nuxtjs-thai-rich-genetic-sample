<template>
  <div>
    <v-chart class="h-80" autoresize :option="option" :loading="$fetchState.pending"></v-chart>
  </div>
</template>

<script lang="ts">

import VChart from "vue-echarts";
import { Varient } from '@/types/vcf'
import { VarientChart } from '@/utils/varient-chart'
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent ({
  components: {
    VChart
  },
  setup() {
    const { $axios } = useContext()
    const varientChart = new VarientChart()
    const option = ref(varientChart.option)

    useFetch(async () => {
      const data = await $axios.$get<Varient[]>('varients/dashboard')
      varientChart.updateVarients(data)
    })

    return { option }
  },
});
</script>
