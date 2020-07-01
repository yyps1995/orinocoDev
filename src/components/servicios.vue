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

          <!-- <q-card-section>
            <q-btn
              fab
              color="accent"
              class="absolute shadow-13"
              label="50$"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
          </q-card-section>-->

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Blogs</div>
            <!-- <div
              class="text-caption text-grey"
            >Small plates, salads & sandwiches in an intimate setting.</div>-->
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="orange-5" @click="openModal('blog')">Mas información</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/lading.png" style="width:50%;" />
          </q-card-section>

          <!-- <q-card-section>
            <q-btn
              fab
              color="accent"
              class="absolute shadow-13"
              label="50$"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
          </q-card-section>-->

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Landing Pages</div>
            <!-- <div
              class="text-caption text-grey"
            >Small plates, salads & sandwiches in an intimate setting.</div>-->
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="orange-5" @click="openModal('landingPage')">Mas información</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/portafolio.png" style="width:50%;" />
          </q-card-section>

          <!-- <q-card-section>
            <q-btn
              fab
              color="accent"
              class="absolute shadow-13"
              label="50$"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
          </q-card-section>-->

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Portafolios</div>
            <!-- <div
              class="text-caption text-grey"
            >Small plates, salads & sandwiches in an intimate setting.</div>-->
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="orange-5" @click="openModal('portafolio')">Mas información</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card
          class="my-card text-center shadow-13 bg-primary"
          style="width:100%; border-radius:15px;"
        >
          <q-card-section align="center">
            <img src="/statics/img/tienda.png" style="width:50%;" />
          </q-card-section>
          <!-- <q-card-section>
            <q-btn
              fab
              color="accent"
              class="absolute shadow-13"
              label="50$"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
          </q-card-section>-->

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Tiendas Online</div>
            <!-- <div
              class="text-caption text-grey"
            >Small plates, salads & sandwiches in an intimate setting.</div>-->
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="orange-5" @click="openModal('tiendaOnline')">Mas información</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
      <slide style="margin:20px;">
        <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
          <q-card-section align="center">
            <img src="/statics/img/personalizado.png" style="width:50%;" />
          </q-card-section>

          <!-- <q-card-section>
            <q-btn
              fab
              color="accent"
              class="absolute shadow-13"
              label="50$"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
          </q-card-section>-->

          <q-card-section class="q-pt-none">
            <div class="text-h5 text-bold">Personalizado</div>
            <!-- <div
              class="text-caption text-grey"
            >Small plates, salads & sandwiches in an intimate setting.</div>-->
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="orange-5" @click="openModal('personalizado')">Mas información</q-btn>
          </q-card-actions>
        </q-card>
      </slide>
    </hooper>

    <q-dialog v-model="dialog" position="right" :maximized="maximizedToggle">
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