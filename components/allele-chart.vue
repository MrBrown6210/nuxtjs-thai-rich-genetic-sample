<template>
  <div>
    <v-chart class="h-80" autoresize :option="option" :loading="$fetchState.pending"></v-chart>
  </div>
</template>

<script lang="ts">

import VChart from "vue-echarts";
import { Allele, Varient } from '@/types/vcf'
import { AlleleChart } from '@/utils/allele-chart'
import { defineComponent, onMounted, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent ({
  components: {
    VChart
  },
  setup() {
    const { $axios } = useContext()
    const alleleChart = new AlleleChart()
    const option = ref(alleleChart.option)

    useFetch(async () => {
      const data = await $axios.$get<Allele[]>('alleles/dashboard')
      alleleChart.updateVarients(data)
    })

    return { option }
  },
});
</script>
