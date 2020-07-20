// 管理home 首页数据
import { reqHomeData } from "@/api";
export default {
  state: {
    indexList: {}
  },
  mutations: {
    // 接受提交给state
    RECEIVE_BASE_INDEX_LIST(state, indexList) {
      state.indexList = indexList;
    }
  },
  actions: {
    // 发请求
    async getHomeData({ commit }) {
      const result = await reqHomeData();
      commit("RECEIVE_BASE_INDEX_LIST", result);
    }
  },
  getters: {
    isData(state) {
      if (!state.indexList.kingKongModule) {
        return {};
      } else {
        return state.indexList.kingKongModule;
      }
    }
  }
};
