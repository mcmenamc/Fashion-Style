<template>
  <v-app >
    <Header />

    <v-main >
      <v-container   >
        <!-- <XyzTransition
          appear
          xyz="fade in-left-100% out-right-100%"
          mode="out-in"
        > -->
          <router-view></router-view>
        <!-- </XyzTransition> -->
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
};
</script>
