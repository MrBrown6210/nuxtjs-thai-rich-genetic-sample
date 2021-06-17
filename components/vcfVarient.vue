<template>
  <div>
    <div>hello</div>
    <div ref="varient"></div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default defineComponent({
  setup() {
    let varient;
    return { varient }
  },
  mounted() {
  },
  methods: {
    renderVarientChart() {
      const chart = am4core.create(this.$refs.varient, am4charts.XYChart)

      const category = new am4charts.CategoryAxis()
      category.title.text = 'Variant'
      category.dataFields.category = 'Local'
      chart.xAxes.push(category)



      chart.data = [
        {
          x: 1,
          y: 2,
        },
        {
          x: 1,
          y: 2,
        }
      ]
    }
  }
})
</script>
