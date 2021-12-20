<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <v-carousel cycle show-arrows-on-hover>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>

      </v-col>
    </v-row>
    <v-row justify="center" class="text-center mt-10" no-gutters>
      <v-col cols="12" sm="8" offset="12">
        <h1>
          “Explosión De Estilo” con Fashion Style, el placer de vestirse bien.
        </h1>
        <h3 class="mt-5 text--secondary">
          Aquí encontrarás ese perfume que te hace inconfundible, esos zapatos
          que hablan de ti
        </h3>
      </v-col>
    </v-row>

    <v-row class="mt-15" justify="center">
      <v-col
        v-for="(item, index) in cards"
        :key="index"
        cols="12"
        sm="4"
        md="3"
      >
        <v-card class="mx-auto" max-width="100%" outlined>
          <v-list-item  >
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1 mt-3">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="75">
              <v-img>
                <img v-bind:src="require('@/assets/images/' + item.img)" />
              </v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explorar </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon @click="item.show = !item.show" three-line>
                {{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}
              </v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="item.show">
              <v-divider></v-divider>
              <v-card-text>
                Siendo una empresa con productos 100% artesanales, nos importa
                la economia de nuestros clientes, es por esto que somos
                reconocidos por mantener los mejores precios del mercado.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>



    </v-row>
    <v-row class="mt-15">
      <v-col cols="12" elevation="12">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card :elevation="hover ? 24 : 6" dark>
              <v-img
                :src="require('@/assets/images/fondo2.jpeg')"
                height="230"
                transition="fade-transition"
                gradient="to top right, rgba(81,91,212,.28) , rgba(129,52,175,.38), rgba(129,52,175,.38), rgba(221,42,123,.54),rgba(245,133,41,.70) "

              ></v-img>
              <div class="follow" color="secondary">
                Síguenos en nuestras redes sociales
                <div class="redes mt-5">
                  <!-- <v-icon color="#00ACEE" size="30px" class="mx-3">mdi-twitter</v-icon>
                  <v-icon color="#3B5998" size="30px" class="mx-3">mdi-facebook</v-icon>
                  <v-icon color="#0088cc" size="30px" class="mx-3 ">mdi-telegram</v-icon>
                  <v-icon color="#c4302b " size="30px" class="mx-3">mdi-youtube</v-icon> -->
                  <v-img
                    max-width="30"
                    class="mx-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    
                  ></v-img>
                   <v-img
                    max-width="30"
                    class="mx-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                  ></v-img>
                   <v-img
                    max-width="30"
                    class="mx-3"
                    src="https://upload.wikimedia.org/wikipedia/sco/9/9f/Twitter_bird_logo_2012.svg"
                  ></v-img>
                   <v-img
                    max-width="30"
                    class="mx-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg"
                  ></v-img>
                </div>
              </div>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col >
        <v-card height="100vh" >

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    items: [
      {
        src: "https://previews.123rf.com/images/leszekczerwonka/leszekczerwonka1605/leszekczerwonka160500178/57552572-mujer-joven-que-usa-el-tel%C3%A9fono-elegante.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
    cards: [
      {
        title: "Carrito",
        subtitle: "Pide ahora mismo",
        img: "car.png",
        text: "Siendo una empresa con productos 100% artesanales, nos importa la economia de nuestros clientes, es por esto que somos reconocidos por mantener los 			mejores precios del mercado.",
        show: false,
        href: "/ir1",
      },
      {
        title: "Limpieza",
        subtitle: "Productos limpios",
        img: "icono2.png",
        text: "Siendo una empresa con productos 100% artesanales, nos importa la economia de nuestros clientes, es por esto que somos reconocidos por mantener los 			mejores precios del mercado.",
        show: false,
        href: "/ir2",
      },
      {
        title: "Tiempo",
        subtitle: "En menos tiempo de entrega",
        img: "tiempo.png",
        text: "Siendo una empresa con productos 100% artesanales, nos importa la economia de nuestros clientes, es por esto que somos reconocidos por mantener los 			mejores precios del mercado.",
        show: false,
        href: "/ir3",
      },
    ],
  }),
  components: {},
};
</script>

<style scoped>
.follow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  z-index: 1;
}
.redes {
  display: flex;
  justify-content: center;
  align-items: center;
}




</style>
