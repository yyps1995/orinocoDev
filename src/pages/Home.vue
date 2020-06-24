<style>
.card-hover:hover {
  background-color: #9be3b8 !important;
}
</style>
<template>
  <section>
    <!-- PORTADA -->
    <div class="row justify-end">
      <div
        class="col-xl-5 col-lg-5 col-md-5 col-sm-10 col-xs-10 q-mt-xl"
        style="padding-top:50px;min-height:45vh;"
      >
        <span class="text-h2 text-bold">Orinoco</span>
        <br />
        <span class="text-h2 text-bold text-secondary">Dev</span>
        <br />
        <img src="/statics/img/flecha-verde.svg" style="width: 40%; height: 50px;" />
        <div class="row q-mt-sm q-mb-md">
          <div class="col-10 text-h6">
            Lorem ipsum dolor sit, amet consectetu
            dipisicing elit. Voluptatum, ullam nihil
            enim, numquam.
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-4">
            <q-btn color="secondary" class="full-width" label="Conocenos" rounded />
          </div>
        </div>-->
        <!-- <div class="row justify-center q-mt-xl text-secondary">
          <div class="col">Link</div>
          <div class="col">Link</div>
          <div class="col">Link</div>
          <div class="col">Link</div>
          <div class="col">Link</div>
          <div class="col">Link</div>
        </div>-->
      </div>
      <div class="col-6 sm-hide xs-hide text-right" style="margin-top:-50px;">
        <img src="/statics/img/formaNegra.svg" style="width:75%;" alt />
      </div>
    </div>
    <!-- FIN PORTADA -->

    <!-- SECCION EQUIPO -->
    <div class="row">
      <div class="col-12">
        <img src="/statics/img/forma1.svg" alt />
      </div>
    </div>

    <div class="col-12 bg-accent q-pb-xl" style="min-height:100vh;margin-top:-10px;">
      <div
        :class="(this.$q.screen.lt.md) ? 'row justify-center text-center' : 'row justify-between'"
      >
        <div class="col-xl-5 col-lg-5 col-md-4 col-sm-12 col-xs-12">
          <img src="/statics/img/forma2.svg" alt />
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-10 col-xs-10 self-center q-pa-sm">
          <span class="text-h2 text-bold text-secondary">Nuestro equipo</span>
          <br />
          <img src="/statics/img/flecha-verde.svg" style="width: 90%; height: 50px;" />
          <p
            class="text-h6"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel harum velit? Aperiam illum repellendus, id temporibus fugiat non beatae? Porro magnam nobis quam nihil molestias fugit voluptas expedita ab.</p>
          <!-- <q-btn color="secondary" @click="openModal('equipo')" class label="Conocenos" rounded /> -->
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 sm-hide xs-hide">
          <div class="row">
            <div class="col-4 self-center q-ma-xs">
              <q-card
                dark
                @click="openModalEquipo('Ariana Toro')"
                class="bg-primary my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section></q-card-section>
              </q-card>
              <q-card
                @click="openModalEquipo('Anderson Perales')"
                dark
                class="bg-primary my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section></q-card-section>
              </q-card>
              <q-card
                dark
                @click="openModalEquipo('Jonathan Pérez')"
                class="bg-primary my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section></q-card-section>
              </q-card>
            </div>
            <div class="col-4 q-ma-xs" style="margin-left:-20px;">
              <q-card
                @click="openModalEquipo('Elias Estrabao')"
                dark
                class="bg-primary my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section></q-card-section>
              </q-card>
              <q-card
                @click="openModalEquipo('Ronald Vizcaya')"
                dark
                class="bg-primary my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section></q-card-section>
              </q-card>
              <q-card
                @click="openModalEquipo('Jose Alejandro')"
                dark
                class="bg-primary my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section></q-card-section>
              </q-card>
              <q-card
                @click="openModalEquipo('Cesar Amaya')"
                dark
                class="bg-primary my-card shadow-10 q-ma-sm card-hover"
                style="width:100%; min-height:170px; border-radius:15px;"
              >
                <q-card-section></q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN SECCION EQUIPO -->

    <!-- SECCION PORTAFOLIO -->
    <div class="col-12 bg-accent q-pt-xl q-pb-xl" style="min-height:100vh; padding-top:100px;">
      <div :class="(this.$q.screen.lt.md) ? 'row justify-center text-center' : 'row'">
        <div
          class="col-xl-7 col-lg-7 col-md-7 col-sm-10 col-xs-10 q-pa-md self-center xs-hide sm-hide"
        >
          <div class="row justify-center text-center">
            <div class="col-3 text-center q-pa-sm self-center">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-img src="/statics/img/" height="200px" />
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h5 text-bold">Janken</div>
                  <div
                    class="text-caption text-grey"
                  >Small plates, salads & sandwiches in an intimate setting.</div>
                </q-card-section>

                <q-separator />
              </q-card>
            </div>
            <div class="col-3 q-pa-sm self-center">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-img src="/statics/img/" height="200px" />
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h5 text-bold">Tasa.cash</div>
                  <div
                    class="text-caption text-grey"
                  >Small plates, salads & sandwiches in an intimate setting.</div>
                </q-card-section>

                <q-separator />
              </q-card>
            </div>
            <div class="col-4 q-pa-sm">
              <q-card class="my-card shadow-13 bg-primary" style="width:100%; border-radius:15px;">
                <q-img src="/statics/img/" height="250px" />
                <q-card-section class="q-pt-none text-center">
                  <div class="text-h5 text-bold">Orinoco.io</div>
                  <div
                    class="text-caption text-grey"
                  >Small plates, salads & sandwiches in an intimate setting.</div>
                </q-card-section>

                <q-separator />
              </q-card>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-5 col-md-4 col-sm-10 col-xs-10 self-center">
          <span class="text-h2 text-bold text-secondary">Nuestro portafolio</span>
          <br />
          <img src="/statics/img/flecha-verde.svg" style="width: 90%" />
          <p class="text-h6">
            Revisa nuestro portafolio de productos
            hechos por nuestro equipo
          </p>
          <q-btn
            color="secondary"
            @click="openModalPortafolio()"
            class
            outline
            label="Conoce nuestro portafolio"
            rounded
          />
        </div>
      </div>
    </div>
    <!-- FIN SECCION PORTAFOLIO -->

    <!-- SERVICIOS -->
    <div class="col-12 bg-accent" style="min-height:100vh; padding-top:50px;">
      <div class="row justify-center text-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-xs-10">
          <span class="text-h2 text-bold text-secondary">Nuestros servicios</span>
          <br />
          <img src="/statics/img/flecha-verde.svg" style="width: 35%" />
          <p class="text-h6">
            te ofrecemos los servicos que estan de moda con la mejor tecnologia
            de desarrollo
          </p>
          <serviciosSlide class="q-mt-xl"></serviciosSlide>
        </div>
        <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-xs-10 q-mt-xl">
          <span class="text-h4 text-bold text-secondary">Caracteristicas de nuestros servicios</span>
          <div class="row justify-center q-mt-xl">
            <div class="col-3 self-center q-ma-xl">
              <div>
                <span class="text-secondary text-bold text-h5">Responsive Design</span>
                <p class="text-caption">
                  Un sitio web que se adapte a cualquier dispositivo es fundamental para los tiempos actuales,
                  orinocoDev te ofrece diseños llamativos y adaptables
                </p>
                <div class="row text-center justify-center">
                  <div class="col-8">
                    <img src="/statics/img/responsive.svg" style="width:100%;height:200px;" alt />
                  </div>
                </div>
              </div>
              <div class="q-mt-xl">
                <span class="text-secondary text-bold text-h5">Responsive Design</span>
                <p class="text-caption">
                  Un sitio web que se adapte a cualquier dispositivo es fundamental para los tiempos actuales,
                  orinocoDev te ofrece diseños llamativos y adaptables
                </p>
                <div class="row text-center justify-center">
                  <div class="col-8">
                    <img src="/statics/img/responsive.svg" style="width:100%;height:200px;" alt />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 q-pa-xl self-center">
              <img src="/statics/img/caract.svg" alt style="width: 100%;height:400px;" />
            </div>
            <div class="col-3 self-center">
              <div>
                <span class="text-secondary text-bold text-h5">Responsive Design</span>
                <p class="text-caption">
                  Un sitio web que se adapte a cualquier dispositivo es fundamental para los tiempos actuales,
                  orinocoDev te ofrece diseños llamativos y adaptables
                </p>
                <div class="row text-center justify-center">
                  <div class="col-8">
                    <img src="/statics/img/responsive.svg" style="width:100%;height:200px;" alt />
                  </div>
                </div>
              </div>
              <div class="q-mt-xl">
                <span class="text-secondary text-bold text-h5">Responsive Design</span>
                <p class="text-caption">
                  Un sitio web que se adapte a cualquier dispositivo es fundamental para los tiempos actuales,
                  orinocoDev te ofrece diseños llamativos y adaptables
                </p>
                <div class="row text-center justify-center">
                  <div class="col-8">
                    <img src="/statics/img/responsive.svg" style="width:100%;height:200px;" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
    <!-- FIN SERVICIOS -->

    <!-- TESTIMONIOS -->
    <div
      :class="(this.$q.screen.lt.md) ? 'row justify-center text-center' : 'row justify-center q-pa-xl'"
      class="bg-accent"
    >
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-10 self-center">
        <span
          :class="(this.$q.screen.lt.md) ? 'text-h3 text-bold text-secondary' : 'text-h2 text-bold text-secondary'"
        >Testimonios</span>
        <br />
        <img src="/statics/img/flecha-verde.svg" style="width: 70%" />
        <p
          class="text-h6"
        >Nuestros clientes esta satisfechos con los servicios que les hemos ofrecido, aqui algunas de sus opniones</p>
      </div>
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-10">
        <q-carousel
          style="border-radius:20px;"
          v-model="slide"
          vertical
          transition-prev="slide-down"
          transition-next="slide-up"
          swipeable
          animated
          control-color="white"
          navigation-icon="radio_button_unchecked"
          navigation
          padding
          arrows
          height="300px"
          :class="(this.$q.screen.lt.sm) ? 'bg-accent shadow-13 q-mb-xl text-white shadow-1 rounded-borders' : 'bg-primary shadow-13 q-mb-xl text-white shadow-1 rounded-borders'"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md text-center">{{ lorem }}</div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">{{ lorem }}</div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md text-center">{{ lorem }}</div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">{{ lorem }}</div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <!-- FIN TESTIMONIOS -->

    <div class="row">
      <div class="col-12">
        <img src="/statics/img/forma3.svg" alt />
      </div>
    </div>

    <!-- REDES SOCIALES -->
    <div
      class="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-xs-10 self-center text-center"
      style="padding-top:100px; padding-bottom:100px;;min-height:50vh;"
    >
      <span class="text-h2 text-bold text-secondary">Nuestras redes sociales</span>
      <br />
      <img src="/statics/img/flecha-verde.svg" style="width: 45%" />
      <p class="text-h6">
        Mantante es conectato con nosotros a
        traves de nuestras redes sociales
      </p>
      <div class="row justify-center">
        <div class="col-10">
          <redesSociales class="sm-hide xs-hide"></redesSociales>
        </div>
      </div>
    </div>
    <!-- FIN REDES SOCIALES -->

    <div class="row">
      <div class="col-12">
        <img src="/statics/img/forma4.svg" alt />
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
    <q-dialog
      v-model="equipoDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white" style="height:100vh;">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-7 col-sm-10 col-xs-12">
            <img src="/statics/img/fondoFoto.svg" alt />
          </div>
          <div class="col-xl-7 col-lg-7 col-md-5 col-sm-10 col-xs-12">
            <q-card-section class="text-h2 text-secondary text-bold q-pt-xl">
              <q-btn dense flat icon="close" v-close-popup></q-btn>
              | {{this.nombre}}
            </q-card-section>
            <q-card-section class>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, voluptatibus numquam unde excepturi magnam iste aspernatur inventore soluta rerum accusamus, obcaecati vel pariatur molestias, laboriosam nisi. Optio est corrupti porro?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
            </q-card-section>
            <q-card-section>
              <div class="row">
                <div class="col-12 q-mb-md">
                  <span class="text-h5 text-bold">Conocimientos</span>
                </div>

                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
                <div
                  class="col-2 q-ma-sm q-pa-md self-center text-secondary text-bold text-h5 text-center shadow-15 bg-accent"
                  style="min-height:75px;"
                >css</div>
              </div>
              <div class="row">
                <div class="col-12 q-mt-md">
                  <span class="text-h5 text-bold">Redes Sociales</span>
                </div>
                <div class="col-12 q-mt-md">
                  <div class="row">
                    <div class="col">
                      <q-btn flat type="a" style="padding:10px;" target="_blank">
                        <img src="statics/img/RRSS-facebook.png" style="width:35px;" />
                      </q-btn>
                    </div>
                    <div class="col">
                      <q-btn flat type="a" style="padding:10px;" target="_blank">
                        <img src="statics/img/RRSS-instagram.png" style="width:35px;" />
                      </q-btn>
                    </div>
                    <div class="col">
                      <q-btn flat type="a" style="padding:10px;" target="_blank">
                        <img src="statics/img/RRSS-twitter.png" style="width:35px;" />
                      </q-btn>
                    </div>
                    <div class="col">
                      <q-btn flat style="padding:10px;" type="a" target="_blank">
                        <img src="statics/img/RRSS-youtube.png" style="width:35px;" />
                      </q-btn>
                    </div>
                    <div class="col">
                      <q-btn flat type="a" style="padding:10px;" target="_blank">
                        <img src="statics/img/RRSS-discord.png" style="width:35px;" />
                      </q-btn>
                    </div>
                    <div class="col">
                      <q-btn flat type="a" style="padding:10px;" target="_blank">
                        <img src="statics/img/RRSS-steem.png" style="width:35px;" />
                      </q-btn>
                    </div>
                    <div class="col">
                      <q-btn flat type="a" style="padding:10px;" target="_blank">
                        <img src="statics/img/RRSS-telegram.png" style="width:35px;" />
                      </q-btn>
                    </div>
                  </div>
                </div>
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
