
import indexPage from '../mixings/index';
import commonPage from '../mixings/common';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.mixin(indexPage)
    nuxtApp.vueApp.mixin(commonPage)
})

