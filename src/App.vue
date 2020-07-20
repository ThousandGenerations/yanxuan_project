<template>
  <div>
    <router-view />
    <van-tabbar
      :placeholder="true"
      route
      v-model="active"
      class="active_tab"
      active-color="red"
      inactive-color="#999"
    >
      <van-tabbar-item
        replace
        :to="item.name"
        v-for="(item,index) in tabbars"
        :key="index"
        @click="tab(index)"
      >
        <span :class="currIndex === index ? 'activeBar':''">{{item.title}}</span>
        <template slot="icon">
          <img :src="currIndex === index  ? item.active : item.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reqHomeData } from "@/api";
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "App",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "首页",
          normal: require("./assets/images/tabBar/tab-home.png"),
          active: require("./assets/images/tabBar/tab-home-current.png")
        },
        {
          name: "category",
          title: "分类",
          normal: require("./assets/images/tabBar/tab-cate.png"),
          active: require("./assets/images/tabBar/tab-cate-current.png")
        },
        {
          name: "buy",
          title: "值得买",
          normal: require("./assets/images/tabBar/buy.png"),
          active: require("./assets/images/tabBar/buy-current.png")
        },
        {
          name: "shopCart",
          title: "购物车",
          normal: require("./assets/images/tabBar/tab-cart.png"),
          active: require("./assets/images/tabBar/tab-cart-current.png")
        },
        {
          name: "personal",
          title: "个人",
          normal: require("./assets/images/tabBar/tab-my.png"),
          active: require("./assets/images/tabBar/tab-my-current.png")
        }
      ]
    };
  },
  methods: {
    tab(index) {
      this.currIndex = index;
      console.log(index === this.currIndex);
    }
  }
};
</script>

<style lang="less" scoped>
.activeBar {
  color: red;
}
</style>
