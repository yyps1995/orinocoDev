<template>
  <div class="row bg-accent" style="width:600px;">
    <div class="col-12">
      <q-card v-if="show === false" class="bg-accent text-white" style="min-height:100vh;">
        <q-card-section>
          <div class="text-h6">
            <q-btn dense flat icon="close" v-close-popup></q-btn>
          </div>
        </q-card-section>

        <q-card-section class="text-center text-h2 text-secondary text-bold q-pt-xl">Portafolios</q-card-section>
        <q-card-section class="text-center text-h2 text-bold q-pt-xl">
          <img src style="height:200px;" alt />
        </q-card-section>
        <q-card-section class="q-pa-xl">
          <span>Un portafolio online es una forma única de mostrar su trabajo y le permite que otras personas sepan más de usted. Es una plataforma base para sus proyectos, estudios de caso, y toda la información acerca de usted. Además de esto, es una de las mejores formas para expresar su personalidad, experiencia y capacidades.</span>
          <br />
          <br />
          <span>Tener su propio sitio web significa que, los clientes siempre sabrán dónde localizarle y si están interesados, se pondrán en contacto con usted. Si no tiene una presencia en línea hoy en día, usted se está quedando atrás. Un portafolio es una buena forma para presentarse ante fotógrafos, diseñadores, desarrolladores y una amplia variedad de artistas para presentar su trabajo en línea. Le permite reflejar su identidad a través de sus trabajos – fotos, diseño gráfico, sketches, etc.</span>
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
  name: "portafolio",
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