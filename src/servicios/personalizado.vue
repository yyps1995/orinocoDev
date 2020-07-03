<template>
  <div class="row bg-accent" style="width:600px;">
    <div class="col-12">
      <q-card v-if="show === false" class="bg-accent text-white" style="min-height:100vh;">
        <q-card-section>
          <div class="text-h6">
            <q-btn dense flat icon="close" v-close-popup></q-btn>
          </div>
        </q-card-section>

        <q-card-section class="text-center text-h2 text-secondary text-bold q-pt-xl">Sistema Web</q-card-section>
        <q-card-section class="q-pa-xl">
          <span>
            Se denomina sistema web a aquellas aplicaciones de software que puede utilizarse accediendo a un servidor web a través de Internet o de una intranet mediante un navegador.
            <br />
            <br />Las aplicaciones web son muy usadas hoy en día, debido a lo práctico del navegador web como cliente ligero, a la independencia del sistema operativo y otras ventajas que te contamos ahora:
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
          <q-input filled dark v-model="apellido" label="Apellido" />
          <q-input filled dark v-model="servicio" label="servicio" disable />
          <!-- <q-input
            dark
            class="q-mt-md"
            label="Caracteristicas"
            v-model="caracterisiticas"
            filled
            type="textarea"
          />-->
        </q-card-section>

        <q-card-section class="text-center text-h2 text-bold">
          <q-btn
            label="Enviar"
            type="a"
            target="_blank"
            :href="'https://wa.me/5804148098295?text=Buen%20dia,%20mi%20nombre%20es%20'+ nombre +'%20' + apellido +'%20,me%20contacto%20por%20la%20pagina%20web,%20quisiera%20mas%20información%20sobre%20el%20desarrollo%20de%20un%20sistema%20'+ servicio +''"
            color="secondary"
            rounded
            outline
          ></q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "personalizado",
  components: {},
  data() {
    return {
      show: false,
      apellido: "",
      nombre: "",
      servicio: "personalizado"
    };
  }
};
</script>