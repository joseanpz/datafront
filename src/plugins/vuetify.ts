import Vue from 'vue';
import Vuetify from 'vuetify';

import colors from 'vuetify/lib/util/colors';


/*
  // default colors
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
*/


Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    options: {
      customProperties: true,
    },
    primary: colors.grey.darken4,
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    themes: {
      light: {
        primary: colors.grey.darken3,
      },
    },

    /*themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.grey.darken3,
      },
    },*/
  },
});
