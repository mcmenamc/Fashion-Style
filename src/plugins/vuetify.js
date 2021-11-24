import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#e34399',
        secondary: '#FCE4EC',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#1976D2',
        success: '#4CAF50',
        warning: '#FFC107',
        background: colors.indigo.lighten5,
      },
      dark: {
        primary: '#AD1457',
        secondary: '#212121',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#64B5F6',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
