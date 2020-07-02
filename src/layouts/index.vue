<style scoped>
</style>
<template>
  <q-layout view="hhh lpR fff">
    <!-- <Header></Header> -->
    <q-page-container class="bg-primary text-white" style="min-height:100vh;">
      <router-view />
      <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          type="a"
          href="https://www.facebook.com/orinoco.dev.58"
          target="_blank"
          class="q-ma-xs"
          fab
          icon="mdi-facebook"
          color="secondary"
        />
        <br />
        <q-btn
          type="a"
          href="https://www.instagram.com/orinocodev2020/"
          target="_blank"
          class="q-ma-xs"
          fab
          icon="mdi-instagram"
          color="secondary"
        />
        <br />
        <q-btn
          type="a"
          href
          target="_blank"
          class="q-ma-xs"
          fab
          icon="mdi-telegram"
          color="secondary"
        />
        <br />
        <q-btn
          type="a"
          href="https://wa.me/5804148098295?text=Buen%20dia,%20quisiera%20información%20sobre%20sus%20productos"
          target="_blank"
          class="q-ma-xs"
          fab
          icon="mdi-whatsapp"
          color="secondary"
        />
      </q-page-sticky>-->
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
      fabRight: true
    };
  }
};
</script>
