/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#008FFF',
          secondary: '#3992fc',
          surface: '#016bd6',
          'surface-variant': '#003966',
          background: '#EDEEEF',
          'on-background': '#016bd6',
          'on-surface': '#ffffff',
          'on-primary': '#ffffff',
          'on-secondary': '#ffffff',
          'light-blue': '#3992fc'
        },
        variables: {
          'high-emphasis-opacity': 0.99,
          'disabled-opacity': 0.8,
          'border-color': '#003966',
        }
      }
    }
  },
})
