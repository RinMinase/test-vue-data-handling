import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import Parent from './views/Parent.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Parent,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
