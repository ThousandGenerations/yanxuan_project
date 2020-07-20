<template>
  <div class="horizontal-container">
    <div class="scroll-wrapper" ref="scroll" v-show="!isSelected">
      <div class="scroll-content" ref="tabWapper">
        <div
          class="scroll-item"
          :class="currentIndex === 0 ? 'avtive' : ''"
          ref="tabTest"
          @click="handleClick(0)"
        >推荐</div>
        <div
          class="scroll-item"
          :class="currentIndex === index+1 ? 'avtive' : ''"
          v-for="(item, index) in isData.kingKongList"
          :key="index"
          ref="tabItem"
          @click="handleClick(index+1)"
        >{{item.text}}</div>
      </div>
    </div>
    <div class="all" v-show="isSelected">全部频道</div>
    <div class="toggle" :class="isSelected ? 'rotate' : ''">
      <i class="iconfont icon-sanjiaoxing" @click="handleToggle"></i>
    </div>
    <div class="selected" v-show="isSelected">
      <van-overlay :show="isSelected" @click="isSelected = false" class="mask">
        <div class="seletedContainer">
          <div
            class="selectedItem"
            :class="currentIndex === 0 ? 'cateTag' : ''"
            @click="handleClick(0)"
          >推荐</div>
          <div
            class="selectedItem"
            v-for="(item, index) in isData.kingKongList"
            :key="index"
            :class="currentIndex === index+1 ? 'cateTag' : ''"
            @click="handleClick(index+1)"
          >{{item.text}}</div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";
import { Overlay } from "vant";

Vue.use(Overlay);
export default {
  name: "Scroll",
  data() {
    return {
      currentIndex: 0,
      isSelected: false,
      scrollX: 0
    };
  },
  async mounted() {
    await this.getHomeData();
    this.$nextTick(() => {
      this.init();
    });
    window.onresize = () => {
      this.bs.refresh && this.bs.refresh();
    };
  },

  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    // 点击倒三角事件
    handleToggle() {
      this.isSelected = !this.isSelected;
    },
    // 点击切换nav
    handleClick(index) {
      this.currentIndex = index;
      if (index === 0) {
        index = 0;
        this.bs.scrollToElement(this.$refs.tabTest);
        return;
      }
      // console.log(this.$refs.tabItem[index - 1]);
      /* if (this.$refs.tabItem[index - 1] === 0) index = 0;
      this.scrollX += this.$refs.tabItem[
        index - 1
      ].getBoundingClientRect().width;
      console.log(this.scrollX);
      this.bs.scrollTo(-this.scrollX, 0, 100); */
      this.bs.scrollToElement(this.$refs.tabItem[index - 1 || 0]);
    },
    ...mapActions({
      getHomeData: "getHomeData"
    }),
    init() {
      if (!this.$refs.tabItem) return;
      let width = 0;
      for (let i = 0; i < this.isData.kingKongList.length; i++) {
        width +=
          this.$refs.tabItem[i].getBoundingClientRect &&
          this.$refs.tabItem[i].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
      }
      this.$refs.tabWapper.style.width =
        width + this.$refs.tabTest.getBoundingClientRect().width + "px";

      if (!this.bs) {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          click: true,
          mouseWheel: true, //开启鼠标滚轮
          disableMouse: true, //启用鼠标拖动
          disableTouch: false //启用手指触摸
        });
        console.log(this.bs);
      } else {
        this.bs.refresh();
      }
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach(name => {
        this.bs.on(name, handler);
      });
    }
  },
  computed: {
    ...mapGetters(["isData"])

    /*     ...mapState({
      indexList: state => state.home.indexList
    }) */
  }
};
</script>

<style lang="less" scoped>
.horizontal-container {
  position: fixed;
  left: 0;
  top: 88px;
  z-index: 99;
  background: white;
  width: 100%;
  // height: 100%;
  // position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  .scroll-wrapper {
    position: relative;
    height: 100%;
    width: 90%;
    // margin-left: 20px;
    white-space: nowrap;
    border-radius: 5px;
    overflow: hidden;

    .scroll-content {
      display: inline-block;
    }

    .scroll-item {
      position: relative;
      height: 50px;
      line-height: 50px;
      font-size: 30px;
      display: inline-block;
      text-align: center;
      padding: 0 20px;
      margin: 0 10px;
      &.avtive {
        color: red;
        &::after {
          position: absolute;
          left: 0;
          bottom: 0;
          content: "";
          width: 100%;
          height: 5px;
          background: red;
        }
      }
    }
  }
  .all {
    width: 80%;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
  }
  .toggle {
    transition: all 0.5s;
    margin-right: 20px;
    z-index: 99;
    i {
      font-size: 36px;
    }
  }
  .rotate {
    transform-origin: center;
    transform: rotate(180deg);
    transition: all 0.5s;
  }

  .selected {
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    height: 400px;
    background: white;
    z-index: 99;
    .mask {
      position: absolute;
      top: 400px;
      left: 0;
      width: 100%;
      height: calc(100vh - 400px);
      background: rgba(127, 127, 127, 0.5);
      // opacity: 0.5;
      .seletedContainer {
        opacity: 1;
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        left: 0;
        top: -400px;
        width: 100%;
        height: 400px;
        // background: pink;
        .selectedItem {
          opacity: 2;
          margin: 10px 15px;
          width: 150px;
          height: 56px;
          line-height: 56px;
          text-align: center;
          // border: 1px solid #dd1a21;
          border: 1px solid #ccc;
          // box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 4px 0px;
          border-radius: 4px;
          background: #fafafa;
          // border-color: rgb(201, 201, 201);
        }
        .cateTag {
          color: #dd1a21;
          border: 1px solid #dd1a21;
        }
      }
    }
  }
}
</style>
