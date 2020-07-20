//所有请求的模块
import ajax from "./ajax";

// 请求导航首页数据
export function reqHomeData() {
  return ajax({
    method: "GET",
    url: "/index"
  });
}
