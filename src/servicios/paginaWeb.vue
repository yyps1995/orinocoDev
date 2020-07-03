<template>
  <div class="row bg-accent" style="width:600px;">
    <div class="col-12">
      <q-card v-if="show === false" class="bg-accent text-white" style="min-height:100vh;">
        <q-card-section>
          <div class="text-h6">
            <q-btn dense flat icon="close" v-close-popup></q-btn>
          </div>
        </q-card-section>

        <q-card-section class="text-center text-h2 text-secondary text-bold q-pt-xl">Página Web</q-card-section>
        <q-card-section class="q-pa-xl">
          <span>
            Una página web está compuesta principalmente por información de un tema factible (solo texto o módulos multimedia) así como por hiperenlaces; además puede contener o asociar hoja de estilo, datos de estilo para especificar cómo debe visualizarse, y también aplicaciones embebidas para así permitir interacción.
            <br />
            <br />Las páginas web son escritas en un lenguaje de marcado que provee la capacidad de manejar e insertar hiperenlaces, generalmente HTML.
            <br />
            <br />Respecto a la estructura de las páginas web, algunos organismos, en especial el World Wide Web Consortium (W3C), suelen establecer directivas con la intención de normalizar el diseño, y para así facilitar y simplificar la visualización e interpretación del contenido.
            <br />
            <br />Una página web es en esencia una tarjeta de presentación digital, ya sea para empresas, organizaciones, o personas, así como una manera de comunicar ideas, pensamientos, conocimientos, informaciones o teorías.3​ Así mismo, la nueva tendencia orienta a que las páginas web no sean solo atractivas para los internautas, sino también optimizadas (preparadas), para los buscadores a través del código fuente. Forzar esta doble función puede, sin embargo, crear conflictos respecto de la calidad del contenido.
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
        </q-card-section>

        <q-card-section class="text-center text-h2 text-bold">
          <q-btn
            label="Enviar"
            type="a"
            target="_blank"
            :href="'https://wa.me/5804148098295?text=Buen%20dia,%20mi%20nombre%20es%20'+ nombre +'%20' + apellido +'%20,me%20contacto%20por%20la%20pagina%20web,%20quisiera%20mas%20información%20sobre%20el%20desarrollo%20de%20un%20'+ servicio +''"
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
  name: "paginaWeb",
  components: {},
  data() {
    return {
      show: false,
      apellido: "",
      nombre: "",
      servicio: "página web"
    };
  }
};
</script>