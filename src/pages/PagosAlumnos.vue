<template>
  <div class="q-mt-md" v-for="item in sedes" :key="item">
    <div>
        <hr/>
    </div>
    <bar-chart :sede="item.name"></bar-chart>
    <table-chart :sede="item.name"></table-chart>
  </div>
</template>

<script>
import BarChart from "src/components/pagos/BarChart.vue";
import TableChart from "src/components/pagos/TableChart.vue";
import axios from 'axios';

export default {
  components: {
    BarChart,
    TableChart,
  },
  mounted() {
    this.getInscritos();
    console.log("hola")
  },
  data() {
    return {
      sedes: [],
    };
  },
  methods: {
    async getInscritos() {
      const respuesta = await axios.get(
        "https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos",
        {
          headers: {
            Authorization: "cepreuna_v1_api",
          },
        }
      );
      let resultado = respuesta.data.sedes.map((item) => {
        return {
          value: item.cantidad,
          name: item.sede,
        };
      });
      this.sedes = resultado;
    },
  },
};
</script>

<style></style>
