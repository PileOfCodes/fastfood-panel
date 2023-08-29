import * as twelements from '~/node_modules/tw-elements/dist/js/index.min.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(twelements);
});