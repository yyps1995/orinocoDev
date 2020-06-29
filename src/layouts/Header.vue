<template>
  <section>
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-btn
          class="lg-hide xl-hide md-hide"
          flat
          @click="drawer = !drawer"
          color="white"
          round
          dense
          icon="menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :width="200" :breakpoint="500" overlay>
      <q-scroll-area class="fit" style="background-color:#2c2c2c;">
        <q-banner class="bg-transparent text-white q-pa-md" style="width:100%;height:auto;">
          <q-img src="/statics/img/logo_vertice.svg" style="width: 150px; height: 120px;" />
        </q-banner>
        <q-tabs v-model="tab" vertical class="text-white">
          <q-separator dark />
          <q-route-tab to="/" exact label="inicio"></q-route-tab>
          <q-separator dark />
          <q-route-tab to="/productos" exact label="productos"></q-route-tab>
          <q-separator dark />
          <q-route-tab to="/nosotros" exact label="nosotros"></q-route-tab>
          <q-separator dark />
          <q-route-tab to="/contactenos" exact label="contactenos"></q-route-tab>
          <q-separator dark />
        </q-tabs>
      </q-scroll-area>
    </q-drawer>
  </section>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      drawer: false,
      hello: false,
      tab: ""
    };
  }
};
</script>