<style scoped>
</style>
<template>
  <q-layout view="hhh lpR fff">
    <Header></Header>
    <q-page-container class="bg-primary text-white" style="min-height:100vh;">
      <router-view />
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
    return {};
  }
};
</script>
