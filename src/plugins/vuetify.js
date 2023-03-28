import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: false,
    themes: {
      dark: {
        background: '#00a86b',
      },
      light: {
        background: '#FAFAFA',
        primary: '#33691E',
      }
    }
  }
});
