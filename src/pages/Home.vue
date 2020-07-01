<style>
.card-hover:hover {
  background-color: #22242b !important;
  cursor: pointer;
}
.home {
  background-image: url(/statics/img/transformamos.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #c7c5c5;
}
html {
  scroll-behavior: smooth;
}
</style>
<template>
  <section>
    <!-- PORTADA -->
    <div class="row justify-center text-center home">
      <div
        class="col-xl-5 col-lg-5 col-md-5 col-sm-10 col-xs-10 q-mt-xl"
        style="padding-top:150px;min-height:80vh;"
      >
        <span :class="($q.screen.lt.md) ? 'text-h3 text-bold' : 'text-h1 text-bold'">Orinoco</span>
        <span
          :class="($q.screen.lt.md) ? 'text-h3 text-bold text-orange-5' : 'text-h1 text-bold text-orange-5'"
        >Dev</span>
        <br />
        <img src="/statics/img/flecha-verde.png" style="width: 75%;" />
        <div class="row q-mt-sm q-mb-md">
          <div
            :class="($q.screen.lt.md) ? 'col-12 text-h6' : 'col-12 text-h4'"
            class="col-12 text-h4"
          >Transformamos tu creatividad en realidad</div>
        </div>
        <div class="row justify-center q-mt-xl text-orange-5">
          <scrollactive
            class="my-nav"
            active-class="active"
            :offset="80"
            :duration="800"
            bezier-easing-value=".5,0,.35,1"
          >
            <q-btn
              type="a"
              href="#portafolio"
              label="Portafolio"
              class="scrollactive-item"
              flat
              color="orange-5"
            />
            <q-btn
              type="a"
              href="#servicios"
              label="Servicios"
              class="scrollactive-item"
              flat
              color="orange-5"
            />
            <q-btn
              type="a"
              href="#equipo"
              label="Equipo"
              class="scrollactive-item"
              flat
              color="orange-5"
            />
          </scrollactive>
        </div>
      </div>
      <!-- <div class="col-6 sm-hide xs-hide text-right" style="margin-top:-50px;">
        <img src="/statics/img/formaNegra.png" style="width:100%;" alt />
      </div>-->
      <!-- <div class="col-12 sm-hide xs-hide">
        <img src="/statics/img/forma1.svg" alt />
      </div>-->
      <!-- SECCION PORTAFOLIO -->
      <div
        id="portafolio"
        class="col-12 q-pt-xl q-pb-xl"
        style="min-height:50vh;margin-top:-100px;background-color:#222222b9;"
      >
        <div :class="(this.$q.screen.lt.md) ? 'row justify-center text-center' : 'row'">
          <div
            class="col-xl-7 col-lg-7 col-md-7 col-sm-10 col-xs-10 q-pa-md self-center xs-hide sm-hide"
          >
            <div class="row justify-center text-center">
              <div class="col-3 q-pa-sm">
                <q-card
                  class="my-card shadow-13 bg-primary"
                  style="width:100%; border-radius:15px;"
                >
                  <q-card-section>
                    <img src="/statics/img/janken.svg" />
                  </q-card-section>
                  <q-card-section class="q-pt-none text-center">
                    <div class="text-h6 text-bold">Janken</div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-3 q-pa-sm">
                <q-card
                  class="my-card shadow-13 bg-primary"
                  style="width:100%; border-radius:15px;"
                >
                  <q-card-section>
                    <img src="/statics/img/tasa.svg" />
                  </q-card-section>
                  <q-card-section class="q-pt-none text-center">
                    <div class="text-h6 text-bold">Tasa</div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-3 q-pa-sm">
                <q-card
                  class="my-card shadow-13 bg-primary"
                  style="width:100%; border-radius:15px;"
                >
                  <q-card-section>
                    <img src="/statics/img/colibri.svg" />
                  </q-card-section>
                  <q-card-section class="q-pt-none text-center">
                    <div class="text-h6 text-bold">orinoco</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-5 col-md-4 col-sm-10 col-xs-10 self-center">
            <span class="text-h2 text-bold">Nuestro portafolio</span>
            <br />
            <!-- <img src="/statics/img/flecha-verde.png" style="width: 80%" /> -->
            <p class="text-h6">Echa un vistazo a los software que hemos desarrollado</p>
            <q-btn
              color="orange-5"
              @click="openModalPortafolio()"
              class
              outline
              label="Conoce nuestro portafolio"
              rounded
            />
          </div>
          <div class="col-10 q-mt-xl md-hide xl-hide lg-hide">
            <div class="row justify-center">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ma-sm self-center">
                <q-card
                  class="my-card q-pa-md shadow-13 bg-primary"
                  style="width:100%; border-radius:15px;"
                >
                  <img src="/statics/img/tasa.svg" width="75%" />
                  <q-card-section class="q-pt-none text-center">
                    <div class="text-h5 text-bold">Tasa.cash</div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ma-sm">
                <q-card
                  class="my-card q-pa-md shadow-13 bg-primary"
                  style="width:100%; border-radius:15px;"
                >
                  <img src="/statics/img/colibri.svg" height="150px" />
                  <q-card-section class="q-pt-none text-center">
                    <div class="text-h5 text-bold">Orinoco.io</div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 q-ma-sm self-center">
                <q-card
                  class="my-card q-pa-md shadow-13 bg-primary"
                  style="width:100%; border-radius:15px;"
                >
                  <img src="/statics/img/janken.svg" height="100px" />
                  <q-card-section class="q-pt-none text-center">
                    <div class="text-h5 text-bold">Janken</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- FIN SECCION PORTAFOLIO -->
    </div>
    <!-- FIN PORTADA -->

    <!-- SERVICIOS -->
    <div id="servicios" class="col-12 bg-accent q-pt-xl" style>
      <div class="row justify-center text-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-xs-10">
          <span class="text-h2 text-bold">Nuestros servicios</span>
          <br />
          <!-- <img src="/statics/img/flecha-verde.png" style="width: 35%" /> -->
          <p class="text-h6">Desarrollamos los software que están de moda con la mejor tecnología</p>
          <serviciosSlide class="q-mt-xl"></serviciosSlide>
        </div>
      </div>
    </div>
    <!-- FIN SERVICIOS -->

    <!-- SECCION EQUIPO -->
    <div
      id="equipo"
      class="col-12 bg-accent q-pt-xl q-pb-xl"
      style="min-height:100vh;padding-top:50px;"
    >
      <div
        :class="(this.$q.screen.lt.md) ? 'row justify-center text-center' : 'row justify-between'"
      >
        <div class="col-xl-5 col-lg-5 col-md-4 col-sm-12 col-xs-12 xs-hide sm-hide">
          <img src="/statics/img/forma2.png" width="100%" alt />
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-xs-10 self-center q-pa-sm">
          <span class="text-h2 text-bold">Nuestro equipo</span>
          <br />
          <!-- <img src="/statics/img/flecha-verde.png" style="width: 90%;" /> -->
          <p
            class="text-h6"
          >OrinocoDev esta conformado por un equipo joven de desarrolladores para llevar tu creatividad a la realidad</p>
          <!-- <q-btn color="secondary" @click="openModal('equipo')" class label="Conocenos" rounded /> -->
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 sm-hide xs-hide">
          <div class="row">
            <div class="col-4 self-center q-ma-xs">
              <!-- <q-card
                dark
                @click="openModalEquipo('Ariana Toro')"
                class="bg-primary my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section></q-card-section>
              </q-card>-->
              <q-card
                @click="openModalEquipo('Anderson Perales')"
                dark
                class="bg-primary text-center my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/andersoFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Anderson Perales</span>
                </q-card-section>
              </q-card>
              <q-card
                dark
                @click="openModalEquipo('Jonathan Pérez')"
                class="bg-primary text-center my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/jonathanFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Jonathan Pérez</span>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-4 q-ma-xs" style="margin-left:-20px;">
              <q-card
                @click="openModalEquipo('Elias Estrabao')"
                dark
                class="bg-primary text-center my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/eliasFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Elias Estrabao</span>
                </q-card-section>
              </q-card>
              <q-card
                @click="openModalEquipo('Ronald Vizcaya')"
                dark
                class="bg-primary text-center my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/ronalFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Ronald Vizcaya</span>
                </q-card-section>
              </q-card>
              <q-card
                @click="openModalEquipo('Ariana Toro')"
                dark
                class="bg-primary text-center my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/arianaFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Ariana Toro</span>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="col-10 md-hide xl-hide lg-hide">
          <div class="row justify-center">
            <div class="col-5 q-ma-xs">
              <q-card
                @click="openModalEquipo('Ariana Toro')"
                dark
                class="bg-primary text-center my-card shadow-10 card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/arianaFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Ariana Toro</span>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-5 q-ma-xs">
              <q-card
                @click="openModalEquipo('Anderson Perales')"
                dark
                class="bg-primary text-center my-card shadow-10 card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/andersoFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Anderson Perales</span>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-5 q-ma-xs">
              <q-card
                @click="openModalEquipo('Jonathan Pérez')"
                dark
                class="bg-primary text-center my-card shadow-10 card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/jonathanFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Jonathan Pérez</span>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-5 q-ma-xs">
              <q-card
                @click="openModalEquipo('Elias Estrabao')"
                dark
                class="bg-primary text-center my-card shadow-10 card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/eliasFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Elias Estrabao</span>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-5 q-ma-xs">
              <q-card
                @click="openModalEquipo('Ronald Vizcaya')"
                dark
                class="bg-primary text-center my-card shadow-10 card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section>
                  <q-avatar size="60px">
                    <img src="/statics/img/ronalFotoCarnet.jpg" />
                  </q-avatar>
                </q-card-section>
                <q-card-section>
                  <span class="text-h6">Ronald Vizcaya</span>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN SECCION EQUIPO -->

    <div class="row" style="margin-top:-1px;">
      <div class="col-12">
        <img src="/statics/img/forma3.svg" alt />
      </div>
    </div>

    <!-- PORTAFOLIO -->
    <q-dialog
      v-model="portafolioDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <portafolioOrinoco></portafolioOrinoco>
    </q-dialog>
    <!-- FIN PORTAFOLIO -->

    <!-- EQUIPO -->
    <q-dialog v-model="equipoDialog" position="right" :maximized="maximizedToggle">
      <q-card class="bg-primary text-white" style="width:600px;">
        <div class="row justify-center">
          <div class="text-center col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <q-card-section>
              <q-avatar size="100px">
                <img
                  v-if="this.nombre === 'Jonathan Pérez'"
                  src="/statics/img/jonathanFotoCarnet.jpg"
                  alt
                />
                <img
                  v-if="this.nombre === 'Ariana Toro'"
                  src="/statics/img/arianaFotoCarnet.jpg"
                  alt
                />
                <img
                  v-if="this.nombre === 'Anderson Perales'"
                  src="/statics/img/andersoFotoCarnet.jpg"
                  alt
                />
                <img
                  v-if="this.nombre === 'Elias Estrabao'"
                  src="/statics/img/eliasFotoCarnet.jpg"
                  alt
                />
                <img
                  v-if="this.nombre === 'Ronald Vizcaya'"
                  src="/statics/img/ronalFotoCarnet.jpg"
                  alt
                />
              </q-avatar>
            </q-card-section>
            <q-card-section class="text-h4 text-orange-5 text-bold">
              <q-btn dense flat icon="close" v-close-popup></q-btn>
              | {{this.nombre}}
            </q-card-section>
            <q-card-section class>
              <span
                v-if="this.nombre === 'Jonathan Pérez'"
              >Apasionado por la teconología y el diseño web</span>
              <span
                v-if="this.nombre === 'Ariana Toro'"
              >Me desempeño como backend developer y programar es mi ocupación y hobbie</span>
              <span
                v-if="this.nombre === 'Anderson Perales'"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, voluptatibus numquam unde excepturi magnam iste aspernatur inventore soluta rerum accusamus, obcaecati vel pariatur molestias, laboriosam nisi. Optio est corrupti porro?</span>
              <span
                v-if="this.nombre === 'Elias Estrabao'"
              >Me gusta la innovación y la tecnología y el modo en que facilitan los procesos en la actualidad</span>
              <span
                v-if="this.nombre === 'Ronald Vizcaya'"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, voluptatibus numquam unde excepturi magnam iste aspernatur inventore soluta rerum accusamus, obcaecati vel pariatur molestias, laboriosam nisi. Optio est corrupti porro?</span>
            </q-card-section>
            <q-card-section>
              <div class="row justify-center" v-if="this.nombre === 'Jonathan Pérez'">
                <div class="col-12 q-mb-md">
                  <span class="text-h5 text-bold">Conocimientos</span>
                </div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >css</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >html</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >quasar.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >bulma.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >vue.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >photoshop</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >ilustrator</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >git</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >npm</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >bootstrap</div>
              </div>

              <div class="row justify-center" v-if="this.nombre === 'Ariana Toro'">
                <div class="col-12 q-mb-md">
                  <span class="text-h5 text-bold">Conocimientos</span>
                </div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >javascript</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >java</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >html</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >css</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >vue.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >quasar.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >javaFx</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >npm</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >maven</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >mysql</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >mongodb</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >node.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >graphql</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >apollo</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >git</div>
              </div>

              <div class="row justify-center" v-if="this.nombre === 'Anderson Perales'">
                <div class="col-12 q-mb-md">
                  <span class="text-h5 text-bold">Conocimientos</span>
                </div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                ></div>
              </div>

              <div class="row justify-center" v-if="this.nombre === 'Elias Estrabao'">
                <div class="col-12 q-mb-md">
                  <span class="text-h5 text-bold">Conocimientos</span>
                </div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >mongodb</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >php</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >javascript</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >node.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >vue.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >quasar.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >graphql</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >git</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >npm</div>
              </div>

              <div class="row justify-center" v-if="this.nombre === 'Ronald Vizcaya'">
                <div class="col-12 q-mb-md">
                  <span class="text-h5 text-bold">Conocimientos</span>
                </div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >aws</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >node.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >quasar.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >vue.js</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >css</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >html</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >servidores</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >git</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >npm</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >mongodb</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >graphql</div>
                <div
                  class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
                >bootstrap</div>
              </div>
            </q-card-section>
          </div>
        </div>
      </q-card>
    </q-dialog>
    <!-- FIN EQUIPO -->
  </section>
</template>
<script>
import serviciosSlide from "../components/servicios";
import equipo from "../components/equipo";
import portafolioOrinoco from "../components/portafolioOrinoco";
import redesSociales from "../components/redesSociales";
export default {
  name: "Home",
  components: { serviciosSlide, equipo, portafolioOrinoco, redesSociales },
  data() {
    return {
      portafolioDialog: false,
      equipoDialog: false,
      nombre: "",
      maximizedToggle: true,
      modalName: "",
      nameU: "",
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
  methods: {
    openModalPortafolio() {
      this.portafolioDialog = true;
    },
    openModalEquipo(name) {
      this.nombre = name;
      this.equipoDialog = true;
    }
  }
};
</script>
