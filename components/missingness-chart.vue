<template>
  <div>
    <v-chart class="h-80" autoresize :option="option" :loading="$fetchState.pending"></v-chart>
  </div>
</template>

<script lang="ts">

import VChart from "vue-echarts";
import { Allele, Missingness, Varient } from '@/types/vcf'
import { MissingnessChart, missingnessChartStyle } from '@/utils/missingness-chart'
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent ({
  components: {
    VChart
  },
  props: {
    type: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const { $axios } = useContext()
    const _type = props.type as missingnessChartStyle
    const alleleChart = new MissingnessChart(_type)
    const option = ref(alleleChart.option)

    useFetch(async () => {
      const data = await $axios.$get<Missingness[]>(`missingness/dashboard?type=${props.type}`)
      alleleChart.updateVarients(data)
    })

    return { option }
  },
});
</script>
