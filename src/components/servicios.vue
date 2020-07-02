<style lang="stylus">
.hooper {
  height: auto;
}
</style>
<template>
  <div>
    <hooper :settings="hooperSettings">
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/blog.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Criptomonedas</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('blog')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/blog.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Api</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('blog')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/tienda.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Tienda Virtual</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('landingPage')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/portafolio.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Aplicacíon</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('portafolio')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card
          class="my-card text-center shadow-13 bg-primary"
          style="width:100%; border-radius:15px;"
        >
          <q-card-section align="center">
            <img src="/statics/img/lading.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Página web</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('tiendaOnline')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/personalizado.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Sistema</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('personalizado')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
    </hooper>

    <q-dialog v-model="dialog" position="right" persistent :maximized="maximizedToggle">
      <blog v-if="this.modalName === 'blog'"></blog>
      <portafolio v-if="this.modalName === 'portafolio'"></portafolio>
      <landingPage v-if="this.modalName === 'landingPage'"></landingPage>
      <tiendaOnline v-if="this.modalName === 'tiendaOnline'"></tiendaOnline>
      <personalizado v-if="this.modalName === 'personalizado'"></personalizado>
    </q-dialog>
  </div>
</template>
<script>
import { Hooper, Slide } from "hooper";
import blog from "../servicios/blog";
import landingPage from "../servicios/landingPage";
import portafolio from "../servicios/portafolio";
import tiendaOnline from "../servicios/tiendaOnline";
import personalizado from "../servicios/personalizado";
import "hooper/dist/hooper.css";
export default {
  name: "serviciosSlide",
  components: {
    Hooper,
    Slide,
    blog,
    landingPage,
    portafolio,
    tiendaOnline,
    personalizado
  },
  data() {
    return {
      dialog: false,
      maximizedToggle: true,
      modalName: "",
      hooperSettings: {
        infiniteScroll: true,
        autoPlay: false,
        itemsToShow: 5,
        centerMode: false,
        pagination: "no",
        breakpoints: {
          150: {
            centerMode: true,
            itemsToShow: 1
          },
          300: {
            centerMode: true,
            itemsToShow: 1.5
          },
          600: {
            centerMode: true,
            itemsToShow: 2
          },
          800: {
            centerMode: false,
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 5
          }
        }
      }
    };
  },
  methods: {
    openModal(name) {
      if (name === "blog") {
        this.modalName = "blog";
        this.dialog = true;
      }
      if (name === "landingPage") {
        this.modalName = "landingPage";
        this.dialog = true;
      }
      if (name === "portafolio") {
        this.modalName = "portafolio";
        this.dialog = true;
      }
      if (name === "tiendaOnline") {
        this.modalName = "tiendaOnline";
        this.dialog = true;
      }
      if (name === "personalizado") {
        this.modalName = "personalizado";
        this.dialog = true;
      }
    }
  }
};
</script>