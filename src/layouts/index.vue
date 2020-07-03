<style scoped>
</style>
<template>
  <q-layout view="hhh lpR fff">
    <!-- <Header></Header> -->
    <q-page-container class="bg-primary text-white" style="min-height:100vh;">
      <router-view />
      <div v-scroll="handleScroll">
        <q-page-sticky position="bottom-right" v-if="this.redes === true" :offset="[18, 18]">
          <q-btn
            round
            type="a"
            href="https://www.facebook.com/orinoco.dev.58"
            target="_blank"
            class="q-ma-xs"
            icon="mdi-facebook"
            color="secondary"
          />
          <br />
          <q-btn
            round
            type="a"
            href="https://www.instagram.com/orinocodev2020/"
            target="_blank"
            class="q-ma-xs"
            icon="mdi-instagram"
            color="secondary"
          />
          <br />
          <q-btn
            round
            type="a"
            href
            target="_blank"
            class="q-ma-xs"
            icon="mdi-telegram"
            color="secondary"
          />
          <br />
          <q-btn
            round
            type="a"
            href="https://wa.me/5804148098295?text=Buen%20dia,%20quisiera%20información%20sobre%20sus%20productos"
            target="_blank"
            class="q-ma-xs"
            color="secondary"
            icon="mdi-whatsapp"
          />
        </q-page-sticky>
        <q-page-sticky position="top-right" v-if="this.redesTop === true" :offset="[0, 0]">
          <q-toolbar>
            <q-btn
              type="a"
              href="https://www.facebook.com/orinoco.dev.58"
              target="_blank"
              round
              dense
              color="secondary"
              icon="mdi-facebook"
              class="q-mr-sm"
            />
            <q-btn
              type="a"
              href="https://www.instagram.com/orinocodev2020/"
              target="_blank"
              round
              dense
              color="secondary"
              icon="mdi-instagram"
              class="q-mr-sm"
            />
            <q-btn
              type="a"
              href
              target="_blank"
              color="secondary"
              round
              dense
              icon="mdi-telegram"
              class="q-mr-sm"
            />
            <q-btn
              type="a"
              href="https://wa.me/5804148098295?text=Buen%20dia,%20quisiera%20información%20sobre%20sus%20productos"
              target="_blank"
              round
              dense
              color="secondary"
              icon="mdi-whatsapp"
              class="q-mr-sm"
            />
          </q-toolbar>
        </q-page-sticky>
      </div>
    </q-page-container>
    <Footer></Footer>
  </q-layout>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "Index",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      redes: true,
      redesTop: false,
      fabRight: true
    };
  },
  methods: {
    handleScroll: function(evt) {
      if (window.scrollY > 200) {
        console.log("scroll");
        this.redes = false;
        this.redesTop = true;
      }
      if (window.scrollY === 0) {
        this.redes = true;
        this.redesTop = false;
      }
    }
  }
};
</script>
