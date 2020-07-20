// 引入所有路由组件
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Buy from "@/pages/Buy";
import ShopCart from "@/pages/ShopCart";
import Personal from "@/pages/Personal";
import SearchDetail from "@/pages/Home/SearchDetail";
//配置路由规则
export default [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "category",
    path: "/category",
    component: Category
  },
  {
    name: "buy",
    path: "/buy",
    component: Buy
  },
  {
    name: "shopCart",
    path: "/shopCart",
    component: ShopCart
  },
  {
    name: "personal",
    path: "/personal",
    component: Personal
  },
  {
    name: "searchdetail",
    path: "/searchdetail",
    component: SearchDetail
  }
];
