<template>
  <div>
    <q-card class="no-shadow" bordered>
      <q-card-section class="text-h6">
        Cantidad de estudiantes Pagos {{ sumaTotal }}
        <h5 v-if="sede">Sede: {{ sede }}</h5>
        <q-btn
          icon="fa fa-download"
          class="float-right"
          @click="SaveImage"
          flat
          dense
        >
          <q-tooltip>Download PNG</q-tooltip>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <ECharts
          ref="barchart"
          :option="options"
          class="q-mt-md"
          :resizable="true"
          autoresize
          style="height: 285px"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ECharts from "vue-echarts";
import "echarts";
import axios from "axios";

export default defineComponent({
  name: "BarChart",
  props: ["sede"],
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
          source: [],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "20%",
          top: "5%",
          containLabel: true,
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: "bar",
            itemStyle: {
              color: "#1ec761", // Cambia el color de la primera barra
            },
          },
          {
            type: "bar",
            itemStyle: {
              color: "#f5cf27", // Cambia el color de la segunda barra
            },
          },
          {
            type: "bar",
            itemStyle: {
              color: "#f73955", // Cambia el color de la tercera barra
            },
          },
        ],
      },
      sumaTotal: 0,
    };
  },
  components: {
    ECharts,
  },
  methods: {
    SaveImage() {
      const linkSource = this.$refs.barchart.getDataURL();
      const downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
      downloadLink.href = linkSource;
      downloadLink.target = "_self";
      downloadLink.download = "BarChart.png";
      downloadLink.click();
    },
    async getInscritos() {
      const respuesta = await axios.get(
        "https://sistemas.cepreuna.edu.pe/api/v1/alumnos/pagos",
        {
          headers: {
            Authorization: "cepreuna_v1_api",
          },
        }
      );
      var areas = respuesta.data.sedes;
      let sumaTotal = 0;

      if (this.sede) {
        areas = respuesta.data.sedes.filter((item) => {
          return item.sede == this.sede;
        });
      }

      let resultado = areas.reduce(function (acc, objeto) {
        var sedeIndex = acc.findIndex((item) => item[0] === objeto.sede);
        if (sedeIndex === -1) {
          acc.push([objeto.sede, 0, 0, 0]); // Agregar una nueva entrada para la sede
          sedeIndex = acc.length - 1;
        }
        let total = 0;
        if (objeto.estado === 3) {
          acc[sedeIndex][3] += objeto.cantidad;
          total += objeto.cantidad;
        } else if (objeto.estado === 1) {
          acc[sedeIndex][1] += objeto.cantidad;
          total += objeto.cantidad;
        } else if (objeto.estado === 2) {
          acc[sedeIndex][2] += objeto.cantidad;
          total += objeto.cantidad;
        }
        sumaTotal += total;
        // console.log(sumaTotal);

        return acc;
      }, []);

      resultado.unshift(["Areas", "Pagado", "Incompleto", "Deuda"]);

      this.options.dataset.source = resultado;
      this.sumaTotal = sumaTotal; // Asigna la suma total al dato "sumaTotal" del componente
    },
  },
});
</script>

<style scoped></style>
