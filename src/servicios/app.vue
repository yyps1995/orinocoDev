<template>
  <div class="row bg-accent" style="width:600px;">
    <div class="col-12">
      <q-card v-if="show === false" class="bg-accent text-white" style="min-height:100vh;">
        <q-card-section>
          <div class="text-h6">
            <q-btn dense flat icon="close" v-close-popup></q-btn>
          </div>
        </q-card-section>

        <q-card-section class="text-center text-h2 text-secondary text-bold q-pt-xl">Aplicación</q-card-section>
        <q-card-section class="q-pa-xl">
          <span>
            Una aplicación móvil, una aplicación, una apli1​o una app (acortamiento del inglés application), es una aplicación informática diseñada para ser ejecutada en teléfonos inteligentes, tabletas y otros dispositivos móviles. Este tipo de aplicaciones permiten al usuario efectuar un variado conjunto de tareas —profesional, de ocio, educativas, de acceso a servicios, etc.—, facilitando las gestiones o actividades a desarrollar.2​
            <br />
            <br />Por lo general, se encuentran disponibles a través de ciertas plataformas de distribución, o por intermedio de las compañías propietarias de los sistemas operativos móviles tales como Android, iOS, BlackBerry OS, Windows Phone, entre otros. Existen aplicaciones móviles gratuitas y otras de pago, donde en promedio el 20 a 30 % del coste de la aplicación se destina al distribuidor y el resto es para el desarrollador.3​ El término app se volvió popular rápidamente, tanto que en 2010 fue listada por la American Dialect Society como la palabra del año.4​
            <br />
            <br />Al ser aplicaciones residentes en los dispositivos están escritas en algún lenguaje de programación compilado, y su funcionamiento y recursos se encaminan a aportar una serie de ventajas tales como:
            <br />
            <br />-Un acceso más rápido y sencillo a la información necesaria sin necesidad de los datos de autenticación en cada acceso.
            <br />-Un almacenamiento de datos personales que, a prioridad, es de una manera segura.
            <br />-Una gran versatilidad en cuanto a su utilización o aplicación práctica.
            <br />-La atribución de funcionalidades específicas.
            <br />-Mejorar la capacidad de conectividad y disponibilidad de servicios y productos (usuario-usuario, usuario-proveedor de servicios, etc.).
            <br />
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
  name: "app",
  components: {},
  data() {
    return {
      show: false,
      apellido: "",
      nombre: "",
      servicio: "app"
    };
  }
};
</script>