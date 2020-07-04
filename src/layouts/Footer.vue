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
                  - Aplicación
                  <br />- Página web
                  <br />- Sistema web
                  <br />- Tienda virtual
                  <br />- criptomoneda
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
            <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-xs-12 self-center q-pa-md">
              <!-- <div class="row">
                <div class="col-12">
                  <q-btn
                    dark
                    no-caps
                    color="white"
                    icon="mdi-google-maps"
                    size="md"
                    flat
                    label="Avenida el Dorado No 68 C-61"
                  ></q-btn>
                  <q-btn
                    dark
                    no-caps
                    color="white"
                    icon="mdi-checkbox-blank-circle"
                    size="md"
                    flat
                    label="Bogota - Colombia"
                  ></q-btn>
                  <q-btn
                    dark
                    no-caps
                    color="white"
                    icon="mdi-whatsapp"
                    size="md"
                    flat
                    label="+57 310 206 6376"
                  ></q-btn>
                  <q-btn
                    dark
                    no-caps
                    color="white"
                    icon="mdi-phone-settings-outline"
                    size="md"
                    flat
                    label="+57 310 206 6376"
                  ></q-btn>
                </div>
              </div>-->
              <!-- <div class="row q-ml-md q-mt-md">
                <div class="col-6">
                  <span style="font-size:10px;">Desarrollado por:</span>
                  <q-img src="statics/img/logo_promedios.png" spinner-color="white" width="80%" />
                </div>
                <div class="col-2 self-center">
                  <q-icon name="mdi-whatsapp" size="md"></q-icon>
                </div>
                <div class="col-2 self-center">
                  <q-icon name="mdi-email" size="md"></q-icon>
                </div>
                <div class="col-2 self-center">
                  <q-icon name="mdi-phone-settings-outline" size="md"></q-icon>
                </div>
              </div>-->
            </div>
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
            ></q-icon>por orinocoDev
          </span>
        </div>
      </div>
    </section>
    <!-- <div class="row q-pa-xl justify-center bg-primary" style="margin-top:-10px;">
      <div class="col-10">
        <div class="row justify-center q-mt-xl text-white">
          <div class="col-3">
            <span
              :class="($q.screen.lt.md) ? 'text-white text-h5 text-bold' : 'text-white text-h3 text-bold'"
            >Orinoco</span>
            <span
              :class="($q.screen.lt.md) ? 'text-h5 text-bold text-orange-5' : 'text-h3 text-bold text-orange-5'"
            >Dev</span>
            <p class="q-mt-sm">Desarrollamos tu:</p>
            <p>- Aplicación</p>
            <p>- Página web</p>
            <p>- Sistema web</p>
            <p>- Tienda virtual</p>
            <p>- criptomoneda</p>
            <p>- API</p>
          </div>
          <div class="col-3">
            <p class="q-mt-xl">Planes:</p>
            <p>- Plan landing page</p>
            <p>- Plan portafolio</p>
            <p>- Plan blog</p>
            <p>- Plan tienda online</p>
          </div>
          <div class="col-3">
            <p class="q-mt-xl">Planes:</p>
            <p>- Plan landing page</p>
            <p>- Plan portafolio</p>
            <p>- Plan blog</p>
            <p>- Plan tienda online</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center text-center text-white">
      <div class="col-12 bg-accent q-pa-md">
        <span class="text-h6">
          Desarrollado con
          <q-icon
            name="mdi-cards-heart"
            class="q-mr-xs"
            color="secondary"
            style="font-size: 1.5em;"
          ></q-icon>por orinocoDev
        </span>
      </div>
    </div>-->
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