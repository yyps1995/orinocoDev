<template>
  <div>
    <section class="bg-secondary text-white">
      <div class="row justify-center bg-primary">
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-9 col-xs-9">
          <div class="row">
            <div class="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 self-center q-pa-md">
              <span :class="($q.screen.lt.md) ? 'text-h5 text-bold' : 'text-h3 text-bold'">Orinoco</span>
              <span
                :class="($q.screen.lt.md) ? 'text-h5 text-bold text-orange-5' : 'text-h3 text-bold text-orange-5'"
              >Dev</span>
              <div
                class="text-caption text-white q-mt-md"
                :style="(this.$q.screen.lt.md) ? 'width:100%;' : 'width:80%;'"
              >
                <p class="q-mt-sm">Desarrollamos tu:</p>
                <p>
                  - Aplicación móvil
                  <br />- Página web
                  <br />- Sistema web
                  <br />- Tienda virtual
                  <br />- Criptomoneda
                  <br />- API
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12 self-center q-pa-md">
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
            <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-xs-12 self-center q-pa-md"></div>
          </div>
        </div>
      </div>
      <div class="row justify-center text-center bg-accent">
        <div class="col-12 bg-accent q-pa-md">
          <span class="text-h6">
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
  </div>
</template>
<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  }
};
</script>