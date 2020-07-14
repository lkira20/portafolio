/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./plugins/fontawesome');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('home', require('./components/Home.vue').default);
Vue.component('proyecto-1', require('./components/Proyecto-1.vue').default);
Vue.component('proyecto-2', require('./components/Proyecto-2.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//BOOTSTRAP VUE 

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueScrollReveal from 'vue-scroll-reveal';
import vueSmoothScroll from 'vue2-smooth-scroll'

import VueLazyload from 'vue-lazyload'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueScrollReveal);

Vue.use(vueSmoothScroll)

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../../public/image/error.png',
  loading: '../../public/image/loading.gif',
  attempt: 1,
  lazyComponent: true
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = new Vue({
    el: '#app',
});
