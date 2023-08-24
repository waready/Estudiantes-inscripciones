<template>
  <div>
    <q-card class="no-shadow" bordered>
      <q-card-section class="text-h6">
        Cantidad Inscritos por Areas & Sedes {{ suma }} <h5 v-if="sede">Sede: {{ sede }}  </h5>
        <q-btn icon="fa fa-download" class="float-right" @click="SaveImage" flat dense>
          <q-tooltip>Download PNG</q-tooltip>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <ECharts ref="barchart" :option="options" class="q-mt-md" :resizable="true" autoresize style="height: 285px;" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ECharts from 'vue-echarts';
import "echarts";
import axios from 'axios';

export default defineComponent({
  name: "BarChart",
  props:["sede"],
  mounted() {
    this.getInscritos();
  },
  data() {
    return {
      options: {
        legend: {
          bottom: 10,
        },
        tooltip: {},
        dataset: {
          source: [

          ]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '20%',
          top: '5%',
          containLabel: true
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      },
    }
  },
  components: {
    ECharts
  },
  methods: {
    SaveImage() {
      const linkSource = this.$refs.barchart.getDataURL();
      const downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);
      downloadLink.href = linkSource;
      downloadLink.target = '_self';
      downloadLink.download = 'BarChart.png';
      downloadLink.click();
    },
    async getInscritos() {
      const respuesta = await axios.get('https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos', {
        headers: {
          Authorization: 'cepreuna_v1_api'
        }
      })
      var areas=respuesta.data.areas

      // console.log("sedes ",this.sede)

      if(this.sede){

      areas=respuesta.data.areas.filter((item)=>{
        return item.sede==this.sede;
      })

      }
      let resultado =areas.reduce(function (acc, objeto) {

        var sedeIndex = acc.findIndex(item => item[0] === objeto.sede);
        if (sedeIndex === -1) {
          acc.push([objeto.sede, 0, 0, 0]); // Agregar una nueva entrada para la sede
          sedeIndex = acc.length - 1;
        }
        if (objeto.areas === 'Sociales') {
          acc[sedeIndex][3] += objeto.cantidad;
        } else if (objeto.areas === 'Ingenierías') {
          acc[sedeIndex][1] += objeto.cantidad;
        } else if (objeto.areas === 'Biomédicas') {
          acc[sedeIndex][2] += objeto.cantidad;
        }
        // if (objeto.areas === 'Sociales') {
        //   acc[sedeIndex][1] += objeto.cantidad;
        // } else if (objeto.areas === 'Ingenierías') {
        //   acc[sedeIndex][2] += objeto.cantidad;
        // } else if (objeto.areas === 'Biomédicas') {
        //   acc[sedeIndex][3] += objeto.cantidad;
        // }

        return acc;
      }, []);

      resultado.unshift(['Areas', 'Ingenierías', 'Biomédicas', 'Sociales']);

      this.options.dataset.source = resultado

    }

  },


})
</script>

<style scoped></style>
