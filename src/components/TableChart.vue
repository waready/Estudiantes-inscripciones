<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Cantidad de Inscritos por Turnos"
      :rows="rows"
      :columns="columns"
      row-key="name"
      separator="cell"
      :pagination="initialPagination"
      class="table-bg"
      dark
    />
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
const columns = [
  {
    name: "cantidad",
    align: "center",
    label: "CANTIDAD #",
    field: "cantidad",
    sortable: true,
  },
  {
    name: "denominacion",
    align: "center",
    label: "DENOMINACION",
    field: "denominacion",
    sortable: true,
  },
  {
    name: "areas",
    align: "center",
    label: "AREAS",
    field: "areas",
    sortable: true,
  },
  {
    name: "sede",
    align: "center",
    label: "SEDE",
    field: "sede",
    sortable: true,
  },
];

export default {
  mounted() {
    this.getInscritos();
  },
  props: ["sede"],
  data() {
    return {
      initialPagination: {
        sortBy: "desc",
        descending: false,
        rowsPerPage: 10,
        // rowsNumber: xx if getting data from a server
      },
      separator: ref("vertical"),
      columns,
      rows: [],
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
      
      var turnos = respuesta.data.turnos;
       console.log("sedes ",this.sede)
      if (this.sede) {
        turnos = respuesta.data.turnos.filter((item) => {
          return item.sede == this.sede;
        });
      }
      this.rows = turnos;
    },
  },
};
</script>
<style scoped>
.table-bg {
  background-color: #162b4d;
}
</style>
