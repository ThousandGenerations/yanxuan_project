<template>
  <div class="tagContainer">
    <div v-for="(item,index) in indexList.policyDescList" :key="index">
      <img :src="item.icon" />
      <span>{{item.desc}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Tag",
  computed: {
    ...mapState({
      indexList: state => state.home.indexList
    })
  }
};
</script>

<style lang="less" scoped>
.tagContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  line-height: 75px;
  padding: 0 30px;
  box-sizing: border-box;
  div {
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    span {
      vertical-align: middle;
      margin-left: 5px;
    }
  }
}
</style>
