<template>
  <v-app >
    <Header />

    <v-main >
      <v-container fluid>
        <XyzTransition
          appear
          xyz="fade in-left-100% out-right-100%"
          mode="out-in"
        >
          <router-view></router-view>
         </XyzTransition> 
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  name: "App",

  data: () => ({
    //
  }),
  // create a new instance of the Header component
  components: {
    Header,
    Footer,
  },
  mounted() {
    //
    const theme = localStorage.getItem("dark_theme");

    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
    // if (
    //   window.matchMedia &&
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
    // )
     else{
      this.$vuetify.theme.dark = true;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
};
</script>
