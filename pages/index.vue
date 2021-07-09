<template>
  <div class="px-10 pt-8">
    <div class="font-bold text-2xl">Variant visualization</div>
    <div>
      <div class="font-semibold text-xl mx-auto text-center">Variant Types</div>
      <varient-chart jest="Variant Types" class="pt-10"></varient-chart>
    </div>
    <div>
      <allele-chart jest="Allele Frequency"></allele-chart>
    </div>
    <div jest="Missingness"></div>
    <div jest="Base Changes & Transition"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
