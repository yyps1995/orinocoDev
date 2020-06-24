<template>
  <q-card class="bg-primary">
    <q-card-section>
      <div class="text-h6">
        <q-btn dense flat icon="close" label="Regresar" v-close-popup></q-btn>
      </div>
    </q-card-section>
    <q-card-section></q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "equipo",
  props: ["nameU"],
  components: {},
  data() {
    return { tab: "mails", innerTab: "innerMails", splitterModel: 20 };
  }
};
</script>