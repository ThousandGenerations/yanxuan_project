// 引入路由器对象
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// 声明使用 vue-Router 插件
Vue.use(VueRouter);

//配置所有路由
export default new VueRouter({
  //模式 默认 hash
  mode: "history",
  //配置所有路由
  routes
});
