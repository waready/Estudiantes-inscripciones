<template>
  <div>
    <q-card class="q-mt-sm shadow" bordered>
      <q-card-section class="text-h6 q-pb-none">
        <q-item>
          <q-item-section avatar class="">
            <q-icon color="blue" name="fas fa-chart-line" size="44px" />
          </q-item-section>

          <q-item-section>
            <div class="text-h6">Resumen General</div>
            <div>
              <q-text> Pagos Registrados : {{ pagosInRange }} </q-text>
            </div>
            <div>
              <q-text> Inscritos Total : {{ suma }} </q-text>  
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
                    <q-btn
                      :color="item.color"
                      text-color="white"
                      icon="fa fa-bar-chart"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-blue text-bold">{{
                      item.cantidad
                    }}</q-item-label>
                    <q-item-label caption>{{ item.area }}</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div
                class="col-lg-2 col-md-2 col-xs-6 col-sm-6"
              >
                <q-item>
                  <q-item-section top avatar >
                    <q-btn
                      color="red"
                      text-color="white"
                      icon="fa fa-bar-chart"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-h6 text-blue text-bold">
                        {{ pagosFaltantes }}
                    </q-item-label>
                    <q-item-label caption>Pagos Faltantes</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>

  </div>
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
      pagosInRange:0,
      countSimulacros:0,
    };
  },
  methods: {
    async getInscritos() {
      const respuesta = await axios.get(
        "https://sistemas.cepreuna.edu.pe/api/v1/simulacro/datos",
        {
          headers: {
            Authorization: "cepreuna_v1_api",
          },
        }
      );

      this.countSimulacros = respuesta.data.countSimulacros;
      this.pagosInRange = respuesta.data.pagosInRange;

      this.sedes = respuesta.data.countByArea.map((item) => {
        switch (item.area) {
          case "Ingenierías":
            // "Condiciones Generales"
            item.color = "orange-8";
            item.icon = "fas fa-cogs fa-5x primary";
            break;
          case "Sociales":
            // "Informacion de cotizaciones"
            item.color = "green-6";
            item.icon = "fas fa-info-circle fa-5x blue";
            break;
          case "Biomédicas":
            // "Prueba"
            item.color = "grey-8";
            item.icon = "fas fa-chain-broken fa-5x danger";
            break;

          default:
            // sin icon
            item.color = "secondary";
            item.icon = "";
            break;
        }
        console.log(item);
        return item;
      });
    },
    detalle(item) {
      console.log(item);
    },
  },
  computed: {
    suma() {
      return this.sedes.reduce((acc, item) => acc + item.cantidad, 0);
    },
    pagosFaltantes(){
        return this.pagosInRange - this.countSimulacros; 
    }
  },
});
</script>
