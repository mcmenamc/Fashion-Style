<template>
  <div>
    <v-navigation-drawer  v-model="drawer" color="secondary" clipped app>
      <v-card-actions >
        <v-icon @click="toggle_dark_mode" right large  >mdi-theme-light-dark</v-icon>
        <v-spacer></v-spacer>

        <v-icon v-if="$vuetify.breakpoint.mdAndDown"  @click.stop="drawer = !drawer" right>mdi-close</v-icon>
      </v-card-actions>

      <v-list dense class="mt-1">
        <template>
          <div v-for="item in links" :key="item.title">
            <v-list-group
              :group="'attricons'"
              v-if="item.links"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-icon
              link
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="subItem in item.links"
                :key="subItem.title"
                :to="subItem.to"
              >
                <v-list-item-icon>
                  <v-icon right size="18" v-text="subItem.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item v-else :to="item.to" link>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </template>
      </v-list>
      
      <template v-slot:append>
        <div class="pa-2">
          <v-btn to="/sign_in" color="info"   block>
            Iniciar Sesión
          </v-btn>
        </div>
        <div class="pa-2">
          <v-btn to="/sign_up"  color="info"   block>
            Registrarse
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar  clipped-left app color="primary" dark>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Fashion Style</v-toolbar-title>
      <v-spacer></v-spacer>

  
   
     
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: null,

    links: [
      {
        icon: "mdi-home-variant",
        title: "Home",
        to: "/",
      },
      {
        icon: "mdi-account-question",
        title: "Nosotros",
        to: "/nosotros",
      },
      {
        icon: "mdi-store",
        title: "Temporada",
        links: [
          {
            title: "Primavera",
            icon: "mdi-fire",
            to: "/temporada/primavera",
          },
          {
            title: "Verano",
            icon: "mdi-tshirt-crew",
            to: "/temporada/verano",
          },
          {
            title: "Otoño",
            icon: "mdi-leaf-maple",
            to: "/temporada/otoño",
          },
          {
            title: "Invierno",
            icon: "mdi-snowflake",
            to: "/temporada/invierno",
          },
        ],
      },
      {
        icon: "mdi-currency-usd",
        title: "Presupuesto",
        to: "/presupuesto",
      },
      {
        icon: "mdi-map-marker",
        title: "Ubicación",
        to: "/ubicacion",
      },
    ],
  }),
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
  mounted() {
    // const theme = localStorage.getItem("dark_theme");

    // if (theme) {
    //   if (theme === "true") {
    //     this.$vuetify.theme.dark = true;
    //   } else {
    //     this.$vuetify.theme.dark = false;
    //   }
    // }
    // if (
    //   window.matchMedia &&
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
    // )
    //  {
    //   this.$vuetify.theme.dark = true;
    //   localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    // }
  },
};
</script>

<style scoped></style>
