<template>
  <div class>
    <v-row dense>
      <v-col cols="12">
        <v-carousel cycle show-arrows-on-hover>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
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
      <v-col v-for="(item, index) in cards" :key="index" cols="12"  sm="4" md="6">
        <v-card to class="mx-auto" max-width="100%" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1 mt-3">
				{{ item.title }}
                </v-list-item-title
              >
              <v-list-item-subtitle>
				{{item.subtitle}}
			  </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="75">
              <v-img>
                <img v-bind:src="require('@/assets/images/'+item.img)" />
              </v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explorar </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>
                {{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}
              </v-icon>
            </v-btn>
            
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
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
    show: false,
    cards: [
      {
          title: "Descipción",
        subtitle: "1,000 mil maravillas",
        img: "car.png",
		text: "Siendo una empresa con productos 100% artesanales, nos importa la economia de nuestros clientes, es por esto que somos reconocidos por mantener los 			mejores precios del mercado.",
		show: false,
	  	href: "#",
      },
      {
        title: "Descipción",
        subtitle: "1,000 mil maravillas",
         img: "car.png",
		text: "Siendo una empresa con productos 100% artesanales, nos importa la economia de nuestros clientes, es por esto que somos reconocidos por mantener los 			mejores precios del mercado.",
		show: false,
	  	href: "#",
      },
	  
    ],
  }),
  components: {},
};
</script>
