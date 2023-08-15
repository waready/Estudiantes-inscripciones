<template>
    <div>
        <q-card class="no-shadow" bordered>
            <q-card-section class="text-h6">
                Cantidad Inscritos por Sedes
            </q-card-section>
            <q-card-section>
                <ECharts :option="options" class="q-mt-md" :resizable="true" autoresize style="height: 285px;" />
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ECharts from "vue-echarts";
import axios from 'axios';

export default defineComponent({
    name: "PieChart",
    components: {
        ECharts
    },
    mounted() {
        this.getInscritos();
    },
    data() {
        return {
            options: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    top: 'bottom',
                    bottom: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Cantidad',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '35%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                        ]
                    },
                ]
            }
        }
    },
    methods: {
        async getInscritos(){
            const respuesta = await axios.get('https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos', {
                headers: {
                    Authorization: 'cepreuna_v1_api'
                }
            })
            let resultado = respuesta.data.sedes.map((item)=>{
                return {
                    "value": item.cantidad,
                    "name": item.sede
                };
            })
            this.options.series[0].data = resultado;
        }
    }
})
</script>

<style scoped></style>
