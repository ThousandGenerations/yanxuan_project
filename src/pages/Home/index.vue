<template>
  <div>
    <!-- 站位fixed -->
    <div class="fixedContainer"></div>
    <Search />
    <Scroll />
    <Swiper />
    <Tag />
    <KingKongList />
    <Floor />
  </div>
</template>

<script>
import Search from "@/components/Home/Search";
import Scroll from "@/components/Home/Scroll";
import Swiper from "@/components/Home/Swiper";
import Tag from "@/components/Home/Tag";
import KingKongList from "@/components/Home/KingKongList";
import Floor from "@/components/Home/Floor";

export default {
  name: "",
  components: {
    Search,
    Scroll,
    Swiper,
    Tag,
    KingKongList,
    Floor
  }
};
</script>

<style lang="less" scoped>
.fixedContainer {
  width: 100%;
  height: 135px;
}
</style>
