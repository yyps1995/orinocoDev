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
            <img src="/statics/img/tienda.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Tienda Virtual</div>
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
            <img src="/statics/img/app.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Aplicacíon</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('app')">Ver más</q-btn>
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
            <q-btn flat color="orange-5" @click="openModal('paginaWeb')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/personalizado.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Sistema web</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('personalizado')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/criptomoneda.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Criptomonedas</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('cripto')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/api.png" style="width:50%;" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Api</div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat color="orange-5" @click="openModal('api')">Ver más</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
    </hooper>

    <q-dialog v-model="dialog" position="right" persistent :maximized="maximizedToggle">
      <blog v-if="this.modalName === 'blog'"></blog>
      <cripto v-if="this.modalName === 'cripto'"></cripto>
      <app v-if="this.modalName === 'app'"></app>
      <paginaWeb v-if="this.modalName === 'paginaWeb'"></paginaWeb>
      <api v-if="this.modalName === 'api'"></api>
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
import cripto from "../servicios/cripto";
import paginaWeb from "../servicios/paginaWeb";
import app from "../servicios/app";
import api from "../servicios/api";
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
    cripto,
    paginaWeb,
    app,
    api,
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
        autoPlay: true,
        itemsToShow: 4,
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
      if (name === "cripto") {
        this.modalName = "cripto";
        this.dialog = true;
      }
      if (name === "api") {
        this.modalName = "api";
        this.dialog = true;
      }
      if (name === "app") {
        this.modalName = "app";
        this.dialog = true;
      }
      if (name === "paginaWeb") {
        this.modalName = "paginaWeb";
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