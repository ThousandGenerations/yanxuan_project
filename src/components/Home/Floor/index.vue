<template>
  <div class="FloorContainer">
    <div class="FloorListContainerTop">
      <div>
        <a href>
          <img :src="FloorListContainerTopImg[0]" alt />
        </a>
      </div>
      <div>
        <a href>
          <img :src="item" alt v-for="(item, index) in contentImg" :key="index" />
        </a>
      </div>
    </div>
    <div class="FloorListContainerContent">
      <div class="title">
        <span>新人专享</span>
      </div>
      <div class="newPersonContainer">
        <div class="newPerson_left">
          <span>新人专享礼包</span>
          <img :src="newPerson_left[0]" alt />
          <i class="animate iconfont icon-youyou-"></i>
        </div>
        <div class="newPerson_rightContainer">
          <div
            class="newPerson_right"
            v-for="(item, index) in indexList.indexActivityModule"
            :key="index"
          >
            <a href>
              <span>{{item.title}}</span>
              <span>{{item.subTitle ? item.subTitle : item.tag}}</span>
              <img
                :src="item.picUrl ? item.picUrl : 'https://yanxuan-item.nosdn.127.net/2738944ac699357481e5c1a94b56bdea.png?quality=75&type=webp&imageView&thumbnail=200x200'"
                alt
              />
              <div class="tag">
                <span>{{item.activityPrice || "¥4.9"}}</span>
                <span>{{item.originPrice || '¥10.0'}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="FloorListContainerContent_two">
      <div class="title">
        <span v-if="indexList.categoryHotSellModule">{{indexList.categoryHotSellModule.title}}</span>
      </div>
      <div class="two_top" v-if="indexList.categoryHotSellModule !== undefined">
        <div
          class="two_item"
          v-for="(item, index) in indexList.categoryHotSellModule.categoryList.slice(0,2)"
          :key="index"
        >
          <span>{{item.categoryName}}</span>
          <img :src="item.picUrl" />
        </div>
      </div>
      <div class="two_bottom" v-if="indexList.categoryHotSellModule !== undefined">
        <div
          class="two_item"
          v-for="(item, index) in indexList.categoryHotSellModule.categoryList.slice(2)"
          :key="index"
        >
          <span>{{item.categoryName}}</span>
          <img :src="item.picUrl" />
        </div>
      </div>
    </div>
    <div class="FloorListContainerContent_three">
      <div class="title">
        <div class="title_left">
          <span class="timeLimit">限时购</span>
          <van-count-down :time="time" class="time">
            <template v-slot="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <span class="timeLimit more">更多></span>
      </div>
      <div class="three_bottom" v-if="indexList.flashSaleModule !== undefined">
        <div
          class="three_item"
          v-for="(item, index) in indexList.flashSaleModule.itemList"
          :key="index"
        >
          <img :src="item.picUrl" />
          <div class="price">
            <span>¥{{item.activityPrice}}</span>
            <span>¥{{item.originPrice}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="FloorListContainerContent_three FloorListContainerContent_four">
      <div class="title">
        <div class="title_left">
          <span class="timeLimit">新品首发</span>
        </div>
        <span class="timeLimit more">更多></span>
      </div>
      <div class="three_bottom four_bottom" v-if="indexList.newItemList !== undefined">
        <div
          class="three_item four_item"
          v-for="(item, index) in indexList.newItemList.slice(0,6)"
          :key="index"
        >
          <img :src="item.listPicUrl" />
          <div class="price describe">
            <span>{{item.name}}</span>
          </div>
          <div class="price_four">
            <span>¥{{item.counterPrice ? item.counterPrice :'暂无报价'}}</span>
          </div>
          <div class="tag" :class="item.itemTagList.length !== 1 ? 'two' : 'one' ">
            <div v-for="(itemTag,index) in item.itemTagList" :key="index">{{itemTag.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="FloorListContainerFooter">
      <div class="footerContainer">
        <div class="footerItem" v-for="(item, index) in footerData" :key="index">
          <span class="title">{{item.title}}</span>
          <span class="desc">{{item.desc}}</span>
          <div class="img">
            <img :src="itemUrl" v-for="(itemUrl, index) in item.picUrl" :key="index" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from "vue";
import { CountDown } from "vant";

Vue.use(CountDown);
export default {
  name: "Floor",
  computed: {
    ...mapState({
      indexList: state => state.home.indexList
    })
  },
  data() {
    return {
      timeData: {
        days: 1,
        hours: 24,
        minutes: 60,
        seconds: 60
      },
      time: 30 * 60 * 60 * 1000,
      FloorListContainerTopImg: [
        "https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75"
      ],
      contentImg: [
        "https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0",
        "https://yanxuan.nosdn.127.net/01fae6d1209f9904af34095feb394325.png?quality=75&type=webp&imageView&thumbnail=375x0"
      ],
      newPerson_left: [
        "http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
      ],
      footerData: [
        {
          title: "严选超市",
          desc: "10元凑好物",
          picUrl: [
            "https://yanxuan-item.nosdn.127.net/cfd0fec5e70ca09d4c0b7492dba26f2e.png?quality=75&type=webp&imageView&thumbnail=150x150",
            "https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&type=webp&imageView&thumbnail=150x150"
          ]
        },
        {
          title: "员工竞选",
          desc: "瑜伽垫74折",
          picUrl: [
            "https://yanxuan-item.nosdn.127.net/fe544cee59cc95a9159a722b6be01faa.png?quality=75&type=webp&imageView&thumbnail=150x150",
            "https://yanxuan-item.nosdn.127.net/ff2b35fc5025fc737e8a5f79206604bf.png?quality=75&type=webp&imageView&thumbnail=150x150"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.FloorContainer {
  background: #eee;
  //   height: 1000px;
  .FloorListContainerTop {
    width: 100%;
    // height: 320px;
    background: #ccc;
    & div:nth-of-type(1) {
      & > a {
        display: block;
        height: 100%;
        & > img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    & div:nth-of-type(2) {
      width: 710px;
      height: 186px;
      margin: 0 auto;
      border: 20px solid #e64904;
      background: #e64904;
      & > a {
        display: block;
        display: flex;
        justify-content: center;
        height: 100%;
        & > img {
          display: block;
          width: 351px;
          height: 100%;
        }
        & > img:nth-of-type(2) {
          margin-left: 7px;
        }
      }
    }
  }
  .FloorListContainerContent {
    width: 100%;
    height: 558px;
    background: white;
    margin: 20px 0;
    .newPersonContainer {
      display: flex;
      padding: 0 25px;
      .newPerson_left {
        position: relative;
        width: 343px;
        height: 434px;
        padding: 30px;
        box-sizing: border-box;
        background: #f9e9cf;
        span {
          font-size: 32px;
        }
        img {
          margin: 40px auto;
          display: block;
          width: 258px;
          height: 257px;
        }
        .animate {
          position: absolute;
          right: 110px;
          bottom: 82px;
          color: white;
          font-size: 20px;
          //   background: deeppink;
        }
      }
      .newPerson_right {
        position: relative;
        width: 343px;
        height: 215px;
        background: #fbe2d3;
        margin-left: 10px;
        padding: 20px;
        box-sizing: border-box;
        a {
          display: block;
          & span:nth-of-type(1),
          & span:nth-of-type(2) {
            font-size: 32px;
            display: block;
          }
          & span:nth-of-type(2) {
            font-size: 20px;
            line-height: 40px;
            color: #7f7f7f;
            // background: #7f7f7f;
          }
          img {
            position: absolute;
            right: 0;
            bottom: 0;
            display: block;
            width: 200px;
            height: 200px;
          }
          .tag {
            position: absolute;
            top: 10px;
            right: 30px;
            width: 80px;
            height: 80px;
            background: #f6a447;
            border-radius: 50%;
            opacity: 0.7;
            & > span:nth-of-type(1) {
              font-size: 30px;
              color: white;
              text-align: center;
              line-height: 50px;
            }
            & > span:nth-of-type(2) {
              font-size: 20px;
              line-height: 10px;
              color: white;
              text-align: center;
              text-decoration: line-through;
            }
          }
        }
      }
      .newPerson_right:nth-of-type(2) {
        margin-top: 5px;
        background: #ffecc2;
        a {
          & > span:nth-of-type(2) {
            display: inline;
            padding: 3px;
            border-radius: 5px;
            font-size: 20px;
            line-height: 40px;
            color: #eee;
            background: #cbb693;
          }
        }
      }
    }

    .title {
      width: 100%;
      height: 90px;
      text-align: center;
      span {
        position: relative;
        line-height: 90px;
        font-size: 38px;
        &::before {
          position: absolute;
          left: -30%;
          top: 50%;
          transform: translateY(-50%);
          content: "";
          width: 24px;
          height: 3px;
          background: #333;
        }
        &::after {
          position: absolute;
          right: -30%;
          top: 50%;
          transform: translateY(-50%);
          content: "";
          width: 24px;
          height: 3px;
          background: #333;
        }
      }
    }
  }
  .FloorListContainerContent_two {
    width: 100%;
    height: 710px;
    padding: 30px;
    box-sizing: border-box;
    background: white;
    .title {
      width: 100%;
      height: 90px;

      span {
        // line-height: 90px;
        font-size: 34px;
      }
    }
    .two_top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 200px;

      .two_item {
        display: flex;
        align-items: center;
        position: relative;
        width: 340px;
        height: 100%;
        background: #f9f3e4;
        span {
          position: relative;
          font-size: 30px;
          margin-top: -20px;
          margin-left: 20px;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -20px;
            width: 48px;
            height: 4px;
            background: #333;
          }
        }
        img {
          position: absolute;
          right: 0;
          top: 0;
          display: block;
          width: 200px;
          height: 200px;
        }
      }
      /* .two_item:nth-of-type(2) {
        margin-left: 5px;
      } */
    }
    .two_bottom {
      height: 370px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      //   align-content: space-around;
      .two_item {
        width: 165px;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #f5f5f5;
        margin-top: 10px;
        span {
          text-align: center;
        }
        img {
          width: 120px;
          height: 120px;
        }
      }
    }
  }
  .FloorListContainerContent_three {
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 700px;
    background: white;
    margin: 20px 0;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100px;
      .title_left {
        display: flex;
        .timeLimit {
          font-size: 32px;
          margin-right: 10px;
        }
        .time {
          .colon {
            display: inline-block;
            margin: 0 4px;
            color: #ee0a24;
          }
          .block {
            display: inline-block;
            width: 35px;
            border-radius: 5px;
            color: #fff;
            font-size: 20px;
            text-align: center;
            background-color: #333;
          }
        }
      }
      .more {
        font-size: 32px;
      }
    }
    .three_bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;

      .three_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 216px;
        height: 300px;
        // background: deeppink;
        img {
          width: 216px;
          height: 216px;
          //   background: pink;
        }
        .price {
          display: flex;
          line-height: 300px - 216px;
          margin-left: -50px;
          span:nth-of-type(1) {
            font-size: 28px;
            color: #dd1a21;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .FloorListContainerContent_four {
    height: 100%;
    & .four_bottom {
      height: 820px;
      & .four_item {
        display: flex;
        flex-direction: column;
        justify-items: self-start;
        height: 385px;
        // background: #f5f5f5;
        img {
          background: #f5f5f5;
        }
        & .describe {
          width: 216px;
          font-size: 20px;
          height: 72px;
          line-height: 40px;
          margin: 0;
          & span:nth-of-type(1) {
            align-self: start;
            color: #333;
            word-break: break-all;
            display: -webkit-box; /**对象作为伸缩盒子模型展示**/
            -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
            -webkit-line-clamp: 2; /**显示的行数**/
            overflow: hidden; /**隐藏超出的内容**/
          }
        }
        .price_four {
          color: #dd1a21;
          width: 100%;
        }
        .tag {
          display: flex;
          align-self: start;
          height: 30px;
          padding: 0 10px;
          color: #dd1a21;
          white-space: nowrap;
          text-align: center;
          div {
            display: block;
            margin-right: 15px;
          }
        }
        .tag.one {
          //   width: 100%;
          background-image: url("../../../assets/images/tag/left.png"),
            url("../../../assets/images/tag/right.png"),
            url("../../../assets/images/tag/6dcff693a2be08725c1313c7e2390840.png");
          background-repeat: no-repeat, no-repeat, repeat-x;
          background-size: auto 100%, auto 100%, 100% 100%;
          background-position: left center, right center, center center;
        }
        .tag.two {
          div {
            border: 1px solid #dd1a21;
            border-radius: 10%;
            // margin: 10px;
            // padding: 20px 10px;
            // padding-top: 10px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .FloorListContainerFooter {
    background: white;
    padding-top: 20px;
    .footerContainer {
      display: flex;
      justify-content: center;

      width: 100%;
      height: 308px;
      //   background: pink;
      overflow: hidden;
      .footerItem {
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        width: 343px;
        height: 264px;
        background: #f5f5f5;
        padding: 20px 0 0 20px;
        box-sizing: border-box;
        .title {
          font-size: 32px;
        }
        .desc {
          font-size: 26px;
          color: #7f7f7f;
        }
        .img {
          display: flex;
          align-content: space-between;
          img {
            // display: inline-block;
            width: 150px;
            height: 150px;
            // background: hotpink;
          }
        }
      }
    }
  }
}
</style>
