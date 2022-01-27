import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import { default as Emit } from './views/emit/Parent.vue'
import { default as Refs } from './views/refs/Parent.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Emit",
      component: Emit,
    },
    {
      path: "/refs",
      name: "Refs",
      component: Refs,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
