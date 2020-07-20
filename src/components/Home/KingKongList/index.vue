<template>
  <div class="KingKongContainer">
    <div class="KingKongItem" v-for="(item, index) in isData.kingKongList" :key="index">
      <img :src="item.picUrl" alt />
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "KingKongList",
  computed: {
    ...mapGetters(["isData"])
  }
};
</script>

<style lang="less" scoped>
.KingKongContainer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 340px;
  .KingKongItem {
    display: flex;
    flex: 0 0 18%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 110px;
    img {
      width: 110px;
      height: 110px;
    }
    span {
      height: 36px;
      line-height: 50px;
    }
  }
}
</style>
