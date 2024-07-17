<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="flex flex-center bg-grey-2">
                <q-card class="q-pa-md shadow-2 my_card" bordered>
                    <q-form @submit="login" class="q-gutter-md">
                        <q-card-section class="text-center">
                            <div class="text-grey-9 text-h5 text-weight-bold">Cepreuna Ficha Simulacro</div>
                            <div class="text-grey-8">Recuerda que para recuperar tu ficha, primero tienes que estar
                                registrado en el simulacro</div>
                            <q-img src="~assets/img/logo.png" />
                        </q-card-section>
                        <q-card-section>
                            <div class="input-container">
                                <label for="email">Correo Institucional:</label>
                                <input id="email" class="custom-input" type="email" v-model="email" required>
                            </div>
                            <div class="input-container">
                                <label for="password">Contraseña:</label>
                                <input id="password" class="custom-input" type="password" v-model="password" required>
                            </div>
                        </q-card-section>
                        <q-card-section>
                            <q-btn style="border-radius: 8px;" color="primary" rounded size="md" label="Obtener Ficha"
                                no-caps class="full-width" type="submit"></q-btn>
                        </q-card-section>
                        <q-card-section class="text-center q-pt-none">
                        </q-card-section>
                    </q-form>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
// import AuthServices from "src/auth-module/AuthServices.js";
import { QSpinnerGears } from 'quasar'
import axios from 'axios';
//import Transition from "@/components/Transition.vue";

export default defineComponent({
    name: 'Login',
    setup() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async login() {
            const dismiss = this.$q.notify({
                spinner: QSpinnerGears,
                message: '<p>Esperando al Servidor &nbsp;<span><i class="fa fa-server" aria-hidden="true"></i> <span> <p>',
                timeout: 0, // Establecer el timeout a 0 para que la notificación no se cierre automáticamente
                html: true
            });

            await axios.post("https://sistemas.cepreuna.edu.pe/api/v1/ficha/api-get-ficha",
                {
                    email: this.email,
                    password: this.password
                },
                {
                    headers: {
                        Authorization: "cepreuna_v1_api",
                    },
                }
            ).then((response) => {
                dismiss()
                if (response.data.status) {
                    location.href = "https://sistemas.cepreuna.edu.pe/" + response.data.datos
                } else {
                    this.showNotif(response.data.mensajes)
                    setTimeout(() => {
                        location.reload();
                    }, 3000);
                }
            }).catch((error) => {
                dismiss();
                this.showNotif(error.message);
                setTimeout(() => {
                    location.reload();
                }, 3000);
             });

        },
        showNotif(message) {
            this.$q.notify({
                position: 'top-right',
                message: message,
                color: 'negative',
                icon: 'report_problem'
            })
        },
    }
})
</script>

<style scoped>
.my_card {
    width: 23rem;
    border-radius: 8px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

.custom-input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

.custom-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>