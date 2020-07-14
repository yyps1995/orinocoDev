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
.typed-element {
  display: initial;
  align-items: center;
}
</style>
<template>
  <section>
    <!-- PORTADA -->
    <div class="row justify-center text-center home" style="min-height:100vh;">
      <div class="col-12 text-center self-center">
        <span :class="($q.screen.lt.md) ? 'text-h3 text-bold' : 'text-h1 text-bold'">Orinoco</span>
        <span
          :class="($q.screen.lt.md) ? 'text-h3 text-bold text-orange-5' : 'text-h1 text-bold text-orange-5'"
        >Dev</span>
        <br />
        <img src="/statics/img/flecha-verde.png" style="width: 35%;" />
        <div :class="($q.screen.lt.md) ? 'col-4 text-h6' : 'col-4 text-h3'">
          <vue-typed-js
            :typeSpeed="200"
            :loop="true"
            :strings="[
                  'aplicación móvil',
                  'página web',
                  'sistema web',
                  'tienda virtual',
                  'API',
                  'criptomoneda '
                ]"
          >
            <h3 class="text-white">
              Desarrollamos tu
              <span class="typing text-secondary text-bold"></span>
              <br />
            </h3>
          </vue-typed-js>
        </div>
        <scrollactive class="my-nav">
          <div class="row justify-center">
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <div class="row justify-center">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 q-ma-sm">
                  <q-btn
                    type="a"
                    outline
                    href="#servicios"
                    label="Servicios"
                    class="scrollactive-item full-width"
                    color="orange-5"
                  />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 q-ma-sm">
                  <q-btn
                    type="a"
                    outline
                    href="#portafolio"
                    label="Portafolio"
                    class="scrollactive-item full-width"
                    color="orange-5"
                  />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 q-ma-sm">
                  <q-btn
                    type="a"
                    outline
                    href="#equipo"
                    label="Equipo"
                    class="scrollactive-item full-width"
                    color="orange-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </scrollactive>
      </div>
    </div>
    <!-- FIN PORTADA -->

    <!-- SERVICIOS -->
    <div id="servicios" class="col-12 bg-accent q-pt-xl" style>
      <div class="row justify-center text-center">
        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <span class="text-h3 text-bold text-secondary">Nuestros servicios</span>
          <br />
          <!-- <img src="/statics/img/flecha-verde.png" style="width: 35%" /> -->
          <p
            class="text-h6 text-italic"
          >Desarrollamos el software que necesitas con la mejor tecnología</p>
          <serviciosSlide class="q-mt-xl"></serviciosSlide>
        </div>
      </div>
    </div>
    <!-- FIN SERVICIOS -->

    <!-- PLANES -->
    <div class="col-12 bg-accent q-pt-xl" style>
      <div class="row justify-center text-center">
        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <span class="text-h3 text-bold text-secondary">Nuestro plan basico</span>
          <p
            class="text-h6 text-italic"
          >OrinocoDev cuenta con atractivos planes diseñados especialmente para ti</p>
          <br />
          <div class="row justify-center q-mt-md">
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-md">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-avatar size="100px" color="white" text-color="white">
                    <p class="text-h3 text-secondary text-bold q-mt-md">7</p>
                    <p class="text-h6 text-secondary q-mt-md">días</p>
                  </q-avatar>
                  <br />
                  <span class="text-caption">Entrega</span>
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Landing page</div>
                  <div class="text-h5 text-bold text-secondary">50$</div>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="planesModal('landing page')">Ver plan</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 self-center q-pa-md">
              <q-card class="my-card shadow-13 bg-primary" style="border-radius:15px;" dark>
                <q-card-section horizontal>
                  <q-img class="col-5" src="/statics/img/orinoco-gym.png" />
                  <q-card-section class="self-center">OrinocoGym</q-card-section>
                  <q-card-section class="self-center">
                    <q-btn
                      type="a"
                      target="_blank"
                      href="https://orinocogym.now.sh/#/"
                      flat
                      color="secondary"
                    >Visitar</q-btn>
                  </q-card-section>
                </q-card-section>
              </q-card>
              <q-card class="my-card shadow-13 bg-primary q-mt-sm" style="border-radius:15px;" dark>
                <q-card-section horizontal>
                  <q-img class="col-5" src="/statics/img/orinoco-vet.png" />
                  <q-card-section class="self-center">OrinocoVet</q-card-section>
                  <q-card-section class="self-center">
                    <q-btn
                      type="a"
                      target="_blank"
                      href="https://orinoco-vet.vercel.app/#/"
                      flat
                      color="secondary"
                    >Visitar</q-btn>
                  </q-card-section>
                </q-card-section>
              </q-card>
              <q-card class="my-card shadow-13 bg-primary q-mt-sm" style="border-radius:15px;" dark>
                <q-card-section horizontal>
                  <q-img class="col-5" src="/statics/img/portadaorinocofotos.png" />
                  <q-card-section class="self-center">OrinocoPhotos</q-card-section>
                  <q-card-section class="self-center">
                    <q-btn
                      type="a"
                      target="_blank"
                      href="https://orinoco-drink.vercel.app/#/"
                      flat
                      color="secondary"
                    >Visitar</q-btn>
                  </q-card-section>
                </q-card-section>
              </q-card>
            </div>
            <!-- <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-md">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-avatar size="100px" color="white" text-color="white">
                    <p class="text-h3 text-secondary text-bold q-mt-md">7</p>
                    <p class="text-h6 text-secondary q-mt-md">días</p>
                  </q-avatar>
                  <br />
                  <span class="text-caption">Entrega</span>
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Landing page</div>
                  <div class="text-h5 text-bold text-secondary">50$</div>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="planesModal('landing page')">Ver plan</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-md">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-avatar size="100px" color="white" text-color="white">
                    <p class="text-h3 text-secondary text-bold q-mt-md">7</p>
                    <p class="text-h6 text-secondary q-mt-md">días</p>
                  </q-avatar>
                  <br />
                  <span class="text-caption">Entrega</span>
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Portafolio</div>
                  <div class="text-h5 text-bold text-secondary">100$</div>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="planesModal('portafolio')">Ver plan</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-md">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-avatar size="100px" color="white" text-color="white">
                    <p class="text-h3 text-secondary text-bold q-mt-md">7</p>
                    <p class="text-h6 text-secondary q-mt-md">días</p>
                  </q-avatar>
                  <br />
                  <span class="text-caption">Entrega</span>
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Blog</div>
                  <div class="text-h5 text-bold text-secondary">100$</div>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="planesModal('blog')">Ver plan</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-md">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-avatar size="100px" color="white" text-color="white">
                    <p class="text-h3 text-secondary text-bold q-mt-md">7</p>
                    <p class="text-h6 text-secondary q-mt-md">días</p>
                  </q-avatar>
                  <br />
                  <span class="text-caption">Entrega</span>
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Tienda virtual</div>
                  <div class="text-h5 text-bold text-secondary">150$</div>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="planesModal('tienda online')">Ver plan</q-btn>
                </q-card-actions>
              </q-card>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <!-- PLANES -->

    <!-- SECCION PORTAFOLIO -->
    <div id="portafolio" class="col-12 bg-accent q-pt-xl q-pb-xl" style="min-height:50vh;">
      <div
        :class="(this.$q.screen.lt.md) ? 'row justify-center text-center' : 'row justify-center text-center'"
      >
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-xs-10 self-center">
          <span class="text-h3 text-bold text-secondary">Nuestro portafolio</span>
          <br />
          <p class="text-h6 text-italic">Echa un vistazo a los desarrollos que hemos realizado</p>
        </div>
        <div class="col-10 q-mt-xl">
          <div class="row justify-center">
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-sm">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-img src="/statics/img/janken.png" width="70%" />
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Janken</div>
                  <span class="text-caption">Criptojuego basado en la blockchain de Hive</span>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="portafolioModal('janken')">Ver más</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-sm">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-img src="/statics/img/tasa.png" width="70%" />
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Tasa</div>
                  <span class="text-caption">Tasas de cambio en tiempo real</span>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="portafolioModal('tasa')">Ver más</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-sm">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-img src="/statics/img/rd.png" width="70%" />
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Rdtech</div>
                  <span class="text-caption">Distribuidora y comercializadora</span>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="portafolioModal('rdtech')">Ver más</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 q-pa-sm">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-card-section>
                  <q-img src="/statics/img/colibri.png" width="70%" />
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h6 text-bold">Orinoco</div>
                  <span class="text-caption">Pasarela de pagos de monedas cripto y fiduciarias</span>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center">
                  <q-btn flat color="orange-5" @click="portafolioModal('orinoco')">Ver más</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN SECCION PORTAFOLIO -->

    <!-- TECNOLOGIAS -->
    <div class="row justify-center text-center bg-accent">
      <div class="col-8">
        <span class="text-h3 text-bold text-secondary">Nuestra vanguardia tecnológica</span>
        <p class="text-h6 text-italic">Lenguajes de programación usados por nuestro equipo</p>
        <div class="row justify-center text-center">
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/vue.png" />
            <q-tooltip>vue.js</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/javascript.png" />
            <q-tooltip>javascript</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/css.png" />
            <q-tooltip>css</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/html.png" />
            <q-tooltip>html</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/mongo.png" />
            <q-tooltip>mongodb</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/quasar.png" />
            <q-tooltip>quasar.js</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/graphql.png" />
            <q-tooltip>graphql</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/git.png" />
            <q-tooltip>git</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/npm.png" />
            <q-tooltip>npm</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/node.png" />
            <q-tooltip>node.js</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/apollo.png" />
            <q-tooltip>apollo</q-tooltip>
          </div>
          <div class="col-1 q-ma-md">
            <q-img src="/statics/img/aws.png" />
            <q-tooltip>Amazon web services</q-tooltip>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN TECNOLOGIAS -->

    <!-- SECCION EQUIPO -->
    <div
      id="equipo"
      class="col-12 bg-accent q-pt-xl q-pb-xl"
      style="min-height:100vh;padding-top:100px;"
    >
      <div :class="(this.$q.screen.lt.md) ? 'row justify-center text-center' : 'row'">
        <div class="col-xl-5 col-lg-5 col-md-4 col-sm-12 col-xs-12 xs-hide sm-hide">
          <img src="/statics/img/forma2.png" width="100%" alt />
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-10 q-pa-sm text-center q-mt-xl">
          <span class="text-h3 text-bold text-secondary">Nuestro equipo</span>
          <br />
          <div class="row justify-center">
            <div class="col-9">
              <p
                class="text-h6 text-italic"
              >OrinocoDev está conformado por un equipo de jóvenes venezolanos, quienes entre Desarrolladores e Ingenieros transforman tu creatividad en realidad</p>
            </div>
          </div>
          <div class="col-12">
            <div class="row justify-center">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs">
                <q-card
                  @click="openModalEquipo('Ariana Toro')"
                  dark
                  class="bg-primary text-center my-card shadow-10 card-hover"
                  style="width:100%; min-height:190px; border-radius:15px;"
                >
                  <q-card-section>
                    <q-avatar size="60px">
                      <img src="/statics/img/arianaFotoCarnet.jpg" />
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-caption text-italic">Ariana Toro</span>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs">
                <q-card
                  @click="openModalEquipo('Anderson Perales')"
                  dark
                  class="bg-primary text-center my-card shadow-10 card-hover"
                  style="width:100%; min-height:190px; border-radius:15px;"
                >
                  <q-card-section>
                    <q-avatar size="60px">
                      <img src="/statics/img/andersoFotoCarnet.jpg" />
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-caption text-italic">Anderson Perales</span>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs">
                <q-card
                  @click="openModalEquipo('Jonathan Pérez')"
                  dark
                  class="bg-primary text-center my-card shadow-10 card-hover"
                  style="width:100%; min-height:190px; border-radius:15px;"
                >
                  <q-card-section>
                    <q-avatar size="60px">
                      <img src="/statics/img/jonathanFotoCarnet.jpg" />
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-caption text-italic">Jonathan Pérez</span>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs">
                <q-card
                  @click="openModalEquipo('Elias Estrabao')"
                  dark
                  class="bg-primary text-center my-card shadow-10 card-hover"
                  style="width:100%; min-height:190px; border-radius:15px;"
                >
                  <q-card-section>
                    <q-avatar size="60px">
                      <img src="/statics/img/eliasFotoCarnet.jpg" />
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-caption text-italic">Elias Estrabao</span>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div class="row justify-center">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs">
                <q-card
                  @click="openModalEquipo('Ronald Vizcaya')"
                  dark
                  class="bg-primary text-center my-card shadow-10 card-hover"
                  style="width:100%; min-height:190px; border-radius:15px;"
                >
                  <q-card-section>
                    <q-avatar size="60px">
                      <img src="/statics/img/ronalFotoCarnet.jpg" />
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-caption text-italic">Ronald Vizcaya</span>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs">
                <q-card
                  @click="openModalEquipo('José Alejandro')"
                  dark
                  class="bg-primary text-center my-card shadow-10 card-hover"
                  style="width:100%; min-height:190px; border-radius:15px;"
                >
                  <q-card-section>
                    <q-avatar size="60px">
                      <img src="/statics/img/joseFotoCarnet.jpg" />
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-caption text-italic">José Alejandro</span>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs">
                <q-card
                  @click="openModalEquipo('Cesar Amaya')"
                  dark
                  class="bg-primary text-center my-card shadow-10 card-hover"
                  style="width:100%; min-height:190px; border-radius:15px;"
                >
                  <q-card-section>
                    <q-avatar size="60px">
                      <img src="/statics/img/cesarFotoCarnet.jpg" />
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-caption text-italic">Cesar Amaya</span>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs">
                <q-card
                  @click="openModalEquipo('Andreina Avellaneda')"
                  dark
                  class="bg-primary text-center my-card shadow-10 card-hover"
                  style="width:100%; min-height:190px; border-radius:15px;"
                >
                  <q-card-section>
                    <q-avatar size="60px">
                      <img src="/statics/img/andreinaFotoCarnet.jpg" />
                    </q-avatar>
                  </q-card-section>
                  <q-card-section>
                    <span class="text-caption text-italic">Andreina Avellaneda</span>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN SECCION EQUIPO -->

    <!-- SECCION PAGO -->
    <!-- <div class="row justify-center text-center">
      <div class="col-12 bg-accent" style="min-height:50vh;">
        <span class="text-h3 text-secondary text-bold">Nuestros métodos de pago</span>
        <br />
        <div class="row justify-center">
          <div class="col-8">
            <span
              class="text-h6 text-italic"
            >OrinocoDev te ofrece diversos metodos de pago para que no tengas incovenientes al momento de contratar tu desarrollo</span>
          </div>
        </div>
        <div class="row justify-center">
          <div class="col-10">
            <div class="row justify-center">
              <div class="col-1 q-pt-xl">
                <q-avatar size="100px" color="white" text-color="white"></q-avatar>
                <br />
                <span class="text-caption">Bitcoin</span>
              </div>
              <div class="col-1 q-pt-xl">
                <q-avatar size="100px" color="white" text-color="white"></q-avatar>
                <br />
                <span class="text-caption">Bitcoin</span>
              </div>
              <div class="col-1 q-pt-xl">
                <q-avatar size="100px" color="white" text-color="white"></q-avatar>
                <br />
                <span class="text-caption">Bitcoin</span>
              </div>
              <div class="col-1 q-pt-xl">
                <q-avatar size="100px" color="white" text-color="white"></q-avatar>
                <br />
                <span class="text-caption">Bitcoin</span>
              </div>
              <div class="col-1 q-pt-xl">
                <q-avatar size="100px" color="white" text-color="white"></q-avatar>
                <br />
                <span class="text-caption">Bitcoin</span>
              </div>
              <div class="col-1 q-pt-xl">
                <q-avatar size="100px" color="white" text-color="white"></q-avatar>
                <br />
                <span class="text-caption">Bitcoin</span>
              </div>
              <div class="col-1 q-pt-xl">
                <q-avatar size="100px" color="white" text-color="white"></q-avatar>
                <br />
                <span class="text-caption">Bitcoin</span>
              </div>
              <div class="col-1 q-pt-xl">
                <q-avatar size="100px" color="white" text-color="white"></q-avatar>
                <br />
                <span class="text-caption">Bitcoin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- FIN SECCION PAGO -->

    <!-- PORTAFOLIO MODAL -->
    <q-dialog position="right" v-model="portafolioDialog" persistent :maximized="maximizedToggle">
      <q-card class="bg-primary text-white" style="width:600px;">
        <q-card-section>
          <div class="text-h6">
            <q-btn dense flat icon="close" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <div v-if="this.name === 'orinoco'">
            <span class="text-h3 text-bold">Orinoco.io</span>
            <br />
            <span class="text-h6">Pasarela de pagos de monedas cripto y fiat</span>
          </div>
          <div v-if="this.name === 'janken'">
            <span class="text-h3 text-bold">Janken.game</span>
            <br />
            <span class="text-h6">Criptojuego basado en la blockchain de Hive</span>
          </div>
          <div v-if="this.name === 'tasa'">
            <span class="text-h3 text-bold">Tasa.cash</span>
            <br />
            <span class="text-h6">Tasas de cambio en tiempo real</span>
          </div>
          <div v-if="this.name === 'rdtech'">
            <span class="text-h3 text-bold">Rdtech.com</span>
            <br />
            <span class="text-h6">Distribuidora y comercializadora</span>
          </div>
        </q-card-section>
        <q-card-section>
          <!-- orinoco -->
          <span v-if="this.name === 'orinoco'">
            <br />
            <span>Tecnologías usadas para su desarrollo:</span>
            <br />
            <br />
            <div class="row justify-center">
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >javascript</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >mongodb</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >graphql</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >vue.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >mongoose</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >express.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >node.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >html</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >css</div>
            </div>
            <div class="row justify-center q-mt-lg">
              <div class="col-12">
                - Conexión con la API de la blockchain de Steem
                <br />
                <br />- Conexión con la API de la blockchain de Hive
                <br />
                <br />- Conexión con la API de la blockchain de Bitcoin
                <br />
                <br />- Conexión con la API de la blockchain de EOS
              </div>
            </div>
          </span>
          <!-- orinoco -->

          <!-- janken -->
          <span v-if="this.name === 'janken'">
            <br />Tecnologías usadas para su desarrollo:
            <br />
            <br />
            <div class="row justify-center">
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >javascript</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >mongodb</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >graphql</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >vue.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
            </div>
          </span>
          <!-- janken -->

          <!-- rdtech -->
          <span v-if="this.name === 'rdtech'">
            <br />Tecnologías usadas para su desarrollo:
            <br />
            <br />
            <div class="row justify-center">
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >javascript</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >mongodb</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >graphql</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >vue.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
            </div>
          </span>
          <!-- rdtech -->

          <!-- tasa -->
          <span v-if="this.name === 'tasa'">
            <br />Tecnologías usadas para su desarrollo:
            <br />
            <br />
            <div class="row justify-center">
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >javascript</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >mongodb</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >graphql</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >vue.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
              <div
                class="col-3 q-ma-sm self-center text-orange-5 text-bold text-center shadow-15 bg-accent"
              >quasar.js</div>
            </div>
          </span>
          <!-- tasa -->
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- FIN PORTAFOLIO MODAL -->

    <!-- EQUIPO MODAL -->
    <q-dialog v-model="equipoDialog" persistent position="right" :maximized="maximizedToggle">
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
                <img
                  v-if="this.nombre === 'Cesar Amaya'"
                  src="/statics/img/cesarFotoCarnet.jpg"
                  alt
                />
                <img
                  v-if="this.nombre === 'José Alejandro'"
                  src="/statics/img/joseFotoCarnet.jpg"
                  alt
                />
                <img
                  v-if="this.nombre === 'Andreina Avellaneda'"
                  src="/statics/img/andreinaFotoCarnet.jpg"
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
              <span
                v-if="this.nombre === 'José Alejandro'"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, voluptatibus numquam unde excepturi magnam iste aspernatur inventore soluta rerum accusamus, obcaecati vel pariatur molestias, laboriosam nisi. Optio est corrupti porro?</span>
              <span
                v-if="this.nombre === 'Andreina Avellaneda'"
              >Social Media Manager, Ingeniera apasionada a las redes sociales, responsable de nuestra impecable ortografía y redacción.</span>
              <span
                v-if="this.nombre === 'Cesar Amaya'"
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
                >javascript</div>
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
                >npm</div>
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
    <!-- FIN EQUIPO MODAL -->

    <!-- PLAN MODAL -->
    <q-dialog position="right" v-model="planModal" persistent :maximized="maximizedToggle">
      <q-card class="bg-primary text-white" style="width:600px;">
        <q-card-section>
          <div class="text-h6">
            <q-btn dense flat icon="close" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h3 text-bold text-secondary text-center">Plan {{this.plan}}</div>
        </q-card-section>
        <q-card-section class="q-ma-xl">
          <span
            v-if="this.plan === 'landing page'"
          >Una landing page, o página de aterrizaje, es una página web diseñada específicamente para convertir visitantes en leads.</span>
          <span
            v-if="this.plan === 'portafolio'"
          >Un portafolio online es una forma única de mostrar tu trabajo y permite que otras personas sepan más de ti. Es una plataforma base para tus proyectos, estudios de caso, y toda la información acerca de ti. Además, es una de las mejores formas para expresar tu personalidad, experiencia y capacidades.</span>
          <span
            v-if="this.plan === 'blog'"
          >Un blog es un sitio web para publicar contenido cada cierto tiempo en forma de artículos (también llamados posts) ordenados por fecha de publicación, así el artículo más reciente aparecerá primero.</span>
          <span
            v-if="this.plan === 'tienda online'"
          >Una tienda virtual (o tienda online) es un sitio web donde los vendedores ponen a disposición de sus clientes los productos o servicios mostrándolos a través de imágenes o vídeos y explicando en detalle las características que estos ofrecen.</span>
          <br />
          <br />
          <span class="text-h6">Características de nuestro plan:</span>
          <br />
          <br />
          <span v-if="this.plan === 'landing page'">
            - Páginas ilimitadas disponibles
            <br />- Diseño web (1-5 Pestañas)
            <br />- Catálogo de productos o pervicios
            <br />- Adaptado a smartphone y tablet
            <br />- Hosting y correos corporativos
            <br />- Videos, formularios, galerías
            <br />- Incluye dominio 1 año (ciertas condiciones aplican)
            <br />- Entrega express
            <br />
            <br />50$
            <br />
            <br />
            <q-btn
              label="Contratar plan landing page"
              type="a"
              target="_blank"
              :href="'https://wa.me/5804148098295?text=Buen%20dia,%20mi%20nombre%20es%20'+ nombre +'%20' + apellido +'%20,me%20contacto%20por%20la%20pagina%20web,%20quisiera%20mas%20información%20sobre%20el%20desarrollo%20de%20una%20'+ servicio +''"
              color="secondary"
              rounded
              outline
            ></q-btn>
          </span>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- PLAN MODAL -->
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
      name: "",
      slide: "style",
      plan: "",
      planModal: false
    };
  },
  methods: {
    portafolioModal(name) {
      this.portafolioDialog = true;
      this.name = name;
    },
    openModalEquipo(name) {
      this.nombre = name;
      this.equipoDialog = true;
    },
    planesModal(name) {
      this.plan = name;
      this.planModal = true;
    }
  }
};
</script>
