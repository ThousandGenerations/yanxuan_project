<template>
  <div>
    <van-swipe :autoplay="3000" @change="onChange" class="swiperContainer" ref="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator" v-for="(image, index) in images" :key="index">
          <div
            class="custom-indicator_item"
            @click="handleClick(index)"
            :class="index === current? 'active':''"
          ></div>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  name: "Swiper",
  data() {
    return {
      current: 0,

      images: [
        "https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/e4b5ab7f6bb4b286b9fe18e42bb1f731.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/668b5187e5a7c283ca8bb5695d3e87f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/e14d684c9dc43de2af5215c3d49b6870.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/7e01b30c2c440e118cf09e14c7a69266.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/d842ce2015b95a2eeee319b438b14dbd.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
      ]
    };
  },
  mounted() {},
  methods: {
    onChange(index) {
      this.current = index;
    },
    handleClick(index) {
      this.$refs.swipe.swipeTo(index);
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
.swiperContainer {
  margin-top: 5px;
  width: 100%;
  height: 300px;
}
img {
  width: 100%;
  height: 300px;
}
.custom-indicator {
  position: relative;
  left: 20%;
  bottom: 40px;
  float: left;
  z-index: 1;
}
.custom-indicator_item {
  margin: 0 5px;
  width: 40px;
  height: 4px;
  background: #fff;
  opacity: 0.4;
}
.active {
  background: #fff;
  opacity: 1;
}
</style>
