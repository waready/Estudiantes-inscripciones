<template>
    <q-card class="q-mt-sm shadow" bordered>
        <q-card-section class="text-h6 q-pb-none">
            <q-item>
                <q-item-section avatar class="">
                    <q-icon color="blue" name="fas fa-chart-line" size="44px" />
                </q-item-section>

                <q-item-section>
                    <div class="text-h6">Resumen General</div>
                </q-item-section>
            </q-item>
            <q-card-section class="row">
                <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
                    <div class="row justify-center">
                        <div class="col-lg-2 col-md-2 col-xs-6 col-sm-6" v-for="(item,index) in sedes" :key="index">
                            <q-item>
                                <q-item-section top avatar>
                                    <q-avatar color="blue" text-color="white" icon="fa fa-bar-chart" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="text-h6 text-blue text-bold">{{ item.cantidad }}</q-item-label>
                                    <q-item-label caption>{{ item.sede }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </div>
                        <!-- usar los colores de abajo segun el Pie -->
                        <!-- <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                            <q-item>
                                <q-item-section top avatar>
                                    <q-avatar color="grey-8" text-color="white" icon="fa fa-bar-chart" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="text-h6 text-grey-8 text-bold">9876</q-item-label>
                                    <q-item-label caption>Electronics</q-item-label>
                                </q-item-section>
                            </q-item>
                        </div>
                        <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                            <q-item>
                                <q-item-section top avatar>
                                    <q-avatar color="green-6" text-color="white" icon="fa fa-bar-chart" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="text-h6 text-green-6 text-bold">345</q-item-label>
                                    <q-item-label caption>Toys</q-item-label>
                                </q-item-section>
                            </q-item>
                        </div>
                        <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
                            <q-item>
                                <q-item-section top avatar>
                                    <q-avatar color="orange-8" text-color="white" icon="fa fa-bar-chart" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="text-h6 text-orange-8 text-bold">1021</q-item-label>
                                    <q-item-label caption>Vouchers</q-item-label>
                                </q-item-section>
                            </q-item>
                        </div> -->
                    </div>
                </div>
            </q-card-section>
        </q-card-section>
    </q-card>
</template>
<script>
import axios from 'axios';
import { defineComponent } from "vue";
export default defineComponent({
    name: "Resumen",
    mounted() {
        this.getInscritos();
    },
    data() {
        return {
            sedes:[]
        }
    },
    methods: {
        async getInscritos(){
            const respuesta = await axios.get('https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos', {
                headers: {
                    Authorization: 'cepreuna_v1_api'
                }
            })
            this.sedes = respuesta.data.sedes
            // let resultado = respuesta.data.sedes.map((item)=>{
            //     return {
            //         "value": item.cantidad,
            //         "name": item.sede
            //     };
            // })
          
        }
    }
})
</script>