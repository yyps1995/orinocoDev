<template>
  <q-card class="bg-primary text-white">
    <q-card-section>
      <div class="text-h6">
        <q-btn dense flat icon="close" v-close-popup></q-btn>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row justify-center">
        <div class="col-12 text-center q-ma-xl">
          <span class="text-h4 text-white text-bold">Nuestro portafolio de productos</span>
          <br />
          <img src="/statics/img/flecha-verde.svg" style="width: 35%" />
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <q-card class="my-card q-pa-md bg-primary q-ma-md shadow-13" bordered>
                <q-card-section style="min-height:200px;;">
                  <img src="/statics/img/colibri.svg" />
                </q-card-section>

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs text-white">Orinoco.io</div>
                </q-card-section>

                <q-card-actions>
                  <q-btn
                    flat
                    color="secondary"
                    type="a"
                    target="_blank"
                    href="https://orinoco.io"
                    label="Visitar"
                  />
                </q-card-actions>
              </q-card>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <q-card class="my-card q-pa-md bg-primary q-ma-md shadow-13" bordered>
                <q-card-section class="q-mt-xl" style="min-height:200px;;">
                  <img src="/statics/img/janken.svg" />
                </q-card-section>

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs text-white">Janken.game</div>
                </q-card-section>

                <q-card-actions>
                  <q-btn
                    flat
                    color="secondary"
                    type="a"
                    target="_blank"
                    href="https://janken.game"
                    label="Visitar"
                  />
                </q-card-actions>
              </q-card>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <q-card class="my-card q-pa-md bg-primary q-ma-md shadow-13" bordered>
                <q-card-section style="min-height:200px;;">
                  <img src="/statics/img/tasa.svg" />
                </q-card-section>

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs text-white">Tasa.cash</div>
                </q-card-section>

                <q-card-actions>
                  <q-btn
                    flat
                    color="secondary"
                    type="a"
                    target="_blank"
                    href="https://tasa.cash"
                    label="Visitar"
                  />
                </q-card-actions>
              </q-card>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <q-card class="my-card q-pa-md bg-primary q-ma-md shadow-13" bordered>
                <q-card-section style="min-height:200px;;"></q-card-section>

                <q-card-section>
                  <div class="text-h5 q-mt-sm q-mb-xs text-white">RDTH</div>
                </q-card-section>

                <q-card-actions>
                  <q-btn
                    flat
                    color="secondary"
                    type="a"
                    target="_blank"
                    href="https://rdth.com"
                    label="Visitar"
                  />
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "portafolioOrinoco",
  components: {},
  data() {
    return {};
  }
};
</script>