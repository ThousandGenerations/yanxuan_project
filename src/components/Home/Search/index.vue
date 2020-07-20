<template>
  <div class="SearchContainer">
    <div>
      <h1 class="h1">网易严选</h1>
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div @click="goSearchDetail">
      <i class="iconfont icon-search"></i>
      <span>搜索商品,共99999款商品</span>
    </div>
    <div>登录</div>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    goSearchDetail() {
      this.$router.push({
        path: "searchdetail"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.SearchContainer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  & div:nth-of-type(1) {
    .h1 {
      font-size: 0;
    }
    img {
      width: 138px;
      height: 40px;
    }
  }
  & div:nth-of-type(2) {
    width: 442px;
    height: 56px;
    background: #eee;
    border-radius: 5%;
    i {
      line-height: 56px;
      font-size: 40px;
      margin: 0 10px 0 40px;
    }
    span {
      font-size: 28px;
      color: #666;
      line-height: 56px;
      vertical-align: top;
    }
  }
  & div:nth-of-type(3) {
    width: 75px;
    height: 40px;
    border: 1px solid #dd1a21;
    color: #dd1a21;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    vertical-align: top;
    font-size: 26px;
  }
}
</style>
