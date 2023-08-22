<template>
  <q-card class="q-mt-sm shadow" bordered>
    <q-card-section class="text-h6 q-pb-none">
      <q-item>
        <q-item-section avatar class="">
          <q-icon color="blue" name="fas fa-chart-line" size="44px" />
        </q-item-section>

        <q-item-section>
          <div class="text-h6">Resumen General</div>
          <div>
            <q-text>
                Inscritos : {{ suma }}
            </q-text>
          </div>
        </q-item-section>
      </q-item>
      <q-card-section class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          <div class="row justify-center">
            <div
              class="col-lg-2 col-md-2 col-xs-6 col-sm-6"
              v-for="(item, index) in sedes"
              :key="index"
            >
              <q-item>
                <q-item-section top avatar @click="detalle(item)">
                  <q-avatar
                    :color="item.color"
                    text-color="white"
                    icon="fa fa-bar-chart"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-blue text-bold">{{
                    item.cantidad
                  }}</q-item-label>
                  <q-item-label caption>{{ item.sede }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script>
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Resumen",
  mounted() {
    this.getInscritos();
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
      this.sedes = respuesta.data.sedes.map((item) => {
        switch (item.sede) {
          case "Azangaro":
            // "Condiciones Generales"
            item.color = "orange-8"
            item.icon = "fas fa-cogs fa-5x primary";
            break;
          case "Huancané":
            // "Informacion de cotizaciones"
            item.color = "green-6"
            item.icon = "fas fa-info-circle fa-5x blue";
            break;
          case "Ilave":
            // "Prueba"
            item.color = "grey-8"
            item.icon = "fas fa-chain-broken fa-5x danger";
            break;
          case "Juli":
            // "Sucursales y Cajas'"
            item.color = "blue"
            item.icon = "fas fa-institution fa-5x warning";
            break;
          case "Juliaca":
            // "Transacciones por estado'"
            item.color = "red-6"
            item.icon = "fas fa-credit-card-alt fa-5x";
            break;
          case "Puno":
            // "Cuadre de monedas en saldos diarios"
            item.color = "deep-purple-8"
            item.icon = "fas fa-balance-scale fa-5x success";
            break;
          case "Virtual":
            // "Posibles rubros bolsa"
            item.color = "brown-9"
            item.icon = "mt-2 fas fa-sack-dollar fa-5x secondary";
            break;

          default:
            // sin icon
            item.color = "secondary"
            item.icon = "";
            break;
        }
        console.log(item);
        return item;
      });
    },
    detalle(item){
      console.log(item)
    }
  },
  computed:{
    suma(){
      return this.sedes.reduce((acc, item) => acc + item.cantidad, 0);
    }
  }
});
</script>
