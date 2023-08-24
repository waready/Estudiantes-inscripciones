<template>
  <bar-chart :sede="nombre" ></bar-chart>
</template>

<script>
import BarChart from 'src/components/BarChart.vue';
export default {
  components:{
    BarChart
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
