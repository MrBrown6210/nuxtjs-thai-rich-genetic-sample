<template>
  <div class="px-10 pt-8">
    <div class="font-bold text-2xl">Variant visualization</div>
    <div>
      <div class="font-semibold text-xl mx-auto text-center">Variant Types</div>
      <varient-chart jest="Variant Types" class="pt-4"></varient-chart>
    </div>
    <div>
      <div class="font-semibold text-xl mx-auto text-center">Allele Frequency (AF)</div>
      <allele-chart jest="Allele Frequency"></allele-chart>
    </div>
    <div class="font-semibold text-xl mx-auto text-center pt-8">Missingness</div>
    <div class="flex px-10">
      <missingness-chart class="w-1/2" type="orignal" jest="Missingness"></missingness-chart>
      <missingness-chart class="w-1/2" type="filtered" jest="Missingness"></missingness-chart>
    </div>
    <div jest="Base Changes & Transition"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
