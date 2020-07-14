<template>
  <div>
    <section class="bg-secondary text-white">
      <div class="row justify-center bg-primary">
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-9 col-xs-9">
          <div class="row">
            <div class="col-12">
              <span :class="($q.screen.lt.md) ? 'text-h5 text-bold' : 'text-h3 text-bold'">Orinoco</span>
              <span
                :class="($q.screen.lt.md) ? 'text-h5 text-bold text-orange-5' : 'text-h3 text-bold text-orange-5'"
              >Dev</span>
            </div>
            <div class="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 q-pa-md">
              <div
                class="text-caption text-white q-mt-md"
                :style="(this.$q.screen.lt.md) ? 'width:100%;' : 'width:80%;'"
              >
                <p class="q-mt-sm">Desarrollamos tu:</p>
                <div class="row justify-center text-left">
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      size="md"
                      @click="openModal('app')"
                      flat
                      label="Aplicación móvil"
                    ></q-btn>
                  </div>
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      size="md"
                      @click="openModal('paginaWeb')"
                      flat
                      label="Página web"
                    ></q-btn>
                  </div>
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      size="md"
                      @click="openModal('personalizado')"
                      flat
                      label="Sistema web"
                    ></q-btn>
                  </div>
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      size="md"
                      @click="openModal('tiendaOnline')"
                      flat
                      label="Tienda virtual"
                    ></q-btn>
                  </div>
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      size="md"
                      @click="openModal('cripto')"
                      flat
                      label="Criptomoneda"
                    ></q-btn>
                  </div>
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      size="md"
                      @click="openModal('api')"
                      flat
                      label="API"
                    ></q-btn>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
              <div
                class="text-caption text-white q-mt-md"
                :style="(this.$q.screen.lt.md) ? 'width:100%;' : 'width:80%;'"
              >
                <p class="q-mt-sm">Contactanos:</p>
                <div class="row justify-center text-left">
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      icon="mdi-facebook"
                      size="md"
                      flat
                      label="orinoco.dev.58"
                    ></q-btn>
                  </div>
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      icon="mdi-instagram"
                      size="md"
                      flat
                      label="orinocodev2020"
                    ></q-btn>
                  </div>
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      icon="mdi-telegram"
                      size="md"
                      flat
                      label="orinocotrade"
                    ></q-btn>
                  </div>
                  <div class="col-12">
                    <q-btn
                      dark
                      no-caps
                      color="white"
                      icon="mdi-whatsapp"
                      size="md"
                      flat
                      label="+5804248733228"
                    ></q-btn>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-xs-12 q-pa-md">
              <div
                class="text-caption text-white q-mt-md"
                :style="(this.$q.screen.lt.md) ? 'width:100%;' : 'width:80%;'"
              >
                <p class="q-mt-sm">Métodos de pago:</p>
                <div class="row">
                  <div class="col-3">
                    <q-avatar>
                      <q-img src></q-img>
                    </q-avatar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center text-center bg-accent">
        <div class="col-12 bg-accent q-pa-md">
          <span class="text-caption">
            Desarrollado con
            <q-icon
              name="mdi-cards-heart"
              class="q-mr-xs"
              color="secondary"
              style="font-size: 1.5em;"
            ></q-icon>por OrinocoDev
          </span>
        </div>
      </div>
    </section>
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
import blog from "../servicios/blog";
import cripto from "../servicios/cripto";
import paginaWeb from "../servicios/paginaWeb";
import app from "../servicios/app";
import api from "../servicios/api";
import landingPage from "../servicios/landingPage";
import portafolio from "../servicios/portafolio";
import tiendaOnline from "../servicios/tiendaOnline";
import personalizado from "../servicios/personalizado";
export default {
  name: "Footer",
  components: {
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
      modalName: ""
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