<template>
    <q-page class="q-pa-sm">
      <div class="row justify-center">
        <div class="col-8 ">
          <q-btn size="15px" class="full-width q-mb-md" color="secondary" label="Actualizar Datos" icon="refresh"
            @click="recargar()" />
  
          <!-- <q-btn size="17px" class="full-width q-mb-md" color="primary" label="Pagos alumnos sede" icon="install_mobile"
            to="/pagos" /> -->
  
        </div>
      </div>
      <div class="row q-col-gutter-sm q-py-sm">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <resumen-chart></resumen-chart>
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import ResumenChart from 'src/components/simulacro/Index.vue';
  import TableChart from 'src/components/TableChart.vue';
  
  
  export default defineComponent({
    name: 'IndexPage',
    components: {
      ResumenChart,
      TableChart
    },
    methods: {
      recargar() {
        window.location.reload(true)
      }
    }
  })
  </script>
  