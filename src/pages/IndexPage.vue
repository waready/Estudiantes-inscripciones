<template>
  <q-page class="q-pa-sm">
    <div class="row justify-center">
      <div class="col-8 ">
        <q-btn size="15px" class="full-width q-mb-md" color="secondary" label="Actualizar Datos" icon="refresh" @click="recargar()" />
      </div>
    </div>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pie-chart class="shadow-2 rounded-borders"></pie-chart>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <bar-chart class="shadow-2 rounded-borders"></bar-chart>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <TableChart></TableChart>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import BarChart from 'src/components/BarChart.vue';
import PieChart from 'src/components/PieChart.vue';
import AreaChart from 'src/components/AreaChart.vue';
import GuageChart from 'src/components/GuajeChart.vue';
import LineChart from 'src/components/LineChart.vue';
import ScatterChart from 'src/components/ScatterPlot.vue';
import TableChart from 'src/components/TableChart.vue';


export default defineComponent({
  name: 'IndexPage',
  components: {
    BarChart,
    PieChart,
    AreaChart,
    //GuageChart,
    LineChart,
    ScatterChart,
    TableChart
  },
  methods:{
    recargar(){
      window.location.reload(true)
    }
  }
})
</script>
