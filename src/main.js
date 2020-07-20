import Vue from "vue";
import App from "./App.vue";
// 移动端适配
import "lib-flexible";
Vue.config.productionTip = false;

//引入store
import store from "./store";
// 路由
import router from "./router";
import VueRouter from "vue-router";

Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
