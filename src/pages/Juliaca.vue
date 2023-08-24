<template>
  <bar-chart :sede="nombre"></bar-chart>
  <table-chart :sede="nombre"></table-chart>
</template>

<script>
import BarChart from 'src/components/BarChart.vue';
import TableChart from 'src/components/TableChart.vue';
export default {
  components:{
    BarChart,
    TableChart
  },
  data(){
    return {
      nombre: "Juliaca",

    }
  }
}
</script>

<style>

</style>
