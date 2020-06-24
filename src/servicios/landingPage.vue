<template>
  <div class="row bg-accent" style="width:600px;">
    <div class="col-12">
      <q-card v-if="show === false" class="bg-accent text-white" style="min-height:100vh;">
        <q-card-section>
          <div class="text-h6">
            <q-btn dense flat icon="close" v-close-popup></q-btn>
          </div>
        </q-card-section>

        <q-card-section class="text-center text-h2 text-secondary text-bold q-pt-xl">Landing Pages</q-card-section>
        <q-card-section class="text-center text-h2 text-bold q-pt-xl">
          <img src style="height:200px;" alt />
        </q-card-section>
        <q-card-section class="q-pa-xl">
          <span>Una landing page, o página de aterrizaje, es una página web diseñada específicamente para convertir visitantes en leads.</span>
          <br />
          <br />
          <span>
            Su razonamiento es sencillo: si ofrecemos algo que seduzca al usuario, éste estará más dispuesto a dejar información a través de un formulario, si con ello va a poder acceder al mismo y a otros contenidos de interés.
            Esta página nos ayuda a convertir a los usuarios en clientes finales, de ahí la importancia de conseguir crear una landing page que convierta de verdad.
          </span>
          <q-card-section class="text-center text-h2 text-bold">
            <q-btn
              label="Contratar servicio"
              color="secondary"
              rounded
              outline
              @click="show = true"
            ></q-btn>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card
        v-if="show === true"
        class="bg-primary text-white shadow-15 q-ma-xl"
        style="border-radius:20px;"
      >
        <q-card-section>
          <div class="text-h6">
            <q-btn dense flat icon="close" @click="show = false"></q-btn>
          </div>
        </q-card-section>

        <q-card-section class="text-center text-h2 text-bold">
          <q-input filled dark v-model="nombre" label="Nombre" />
          <q-input
            dark
            class="q-mt-md"
            label="Observaciones"
            v-model="Observaciones"
            filled
            type="textarea"
          />
        </q-card-section>

        <q-card-section class="text-center text-h2 text-bold">
          <q-btn label="Enviar" color="secondary" rounded outline></q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "landingPage",
  components: {},
  data() {
    return {
      show: false,
      nombre: "",
      Observaciones: ""
    };
  }
};
</script>