import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import FlightCheck from "../views/FlightCheck";
import MembersArea from "../views/MembersArea";
import Service from "../views/Service";
import PersonalCenter from "../views/PersonalCenter";
import LogIn from "../views/LogIn";
import Register from "../views/Register";
import FlightCheckResult from "../views/FlightCheckSubpage/FlightCheckResult";
import PointsDetails from "../views/MenberAreaSubpage/PointsDetails";
import PointsExchange from "../views/MenberAreaSubpage/PointsExchange";
import PointsExchangeSearchResult from "../views/MenberAreaSubpage/PointsExchangeSearchResult";
import Upgrade from "../views/MenberAreaSubpage/Upgrade";
import UpgradeSearchResult from "../views/MenberAreaSubpage/UpgradeSearchResult";
import Place from "../views/ServiceSubpage/Place";
import Item from "../views/ServiceSubpage/Item";
import UpdateOwn from "../views/PersonalCenterSubpage/UpdateOwn";
import UpdatePassword from "../views/PersonalCenterSubpage/UpdatePassword";
import Index from "../views/Index";
import UserManage from "../views/Manage/UserManage";
import UpdateUser from "../views/Manage/UpdateUser";
import AddUser from "../views/Manage/AddUser";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/FlightCheck',
    name: '航班查询',
    component: FlightCheck
  },
  {
    path: '/MembersArea',
    name: '会员专区',
    component: MembersArea
  },
  {
    path: '/Service',
    name: '推荐专区',
    component: Service
  },
  {
    path: '/PersonalCenter',
    name: '个人中心',
    component: PersonalCenter
  },
  {
    path: '/LogIn',
    name: '登录',
    component: LogIn
  },
  {
    path: '/Register',
    name: '注册',
    component: Register
  },
  {
    path: '/FlightCheck/FlightCheckResult',
    name: '航班查询结果',
    component: FlightCheckResult
  },
  {
    path: '/MembersArea/PointsDetails',
    name: '积分明细',
    component: PointsDetails
  },
  {
    path: '/MembersArea/PointsExchange',
    name: '积分兑换',
    component: PointsExchange
  },
  {
    path: '/MembersArea/PointsExchangeSearchResult',
    name: '积分兑换查询结果',
    component: PointsExchangeSearchResult
  },
  {
    path: '/MembersArea/Upgrade',
    name: '里程升舱',
    component: Upgrade
  },
  {
    path: '/MembersArea/UpgradeSearchResult',
    name: '里程升舱查询结果',
    component: UpgradeSearchResult
  },
  {
    path: '/Service/Place',
    name: '目的地推荐',
    component: Place
  },
  {
    path: '/Service/Item',
    name: '商品推荐',
    component: Item
  },{
    path: '/PersonalCenter/UpdateOwn',
    name: '更改个人信息',
    component: UpdateOwn
  },
  {
    path: '/PersonalCenter/UpdatePassword',
    name: '更改密码',
    component: UpdatePassword
  },
  {
    path: '/Manage',
    name: '管理用户',
    component: Index,
    redirect:"/Manage/UserManage",
    children:[
      {
        path: '/Manage/UserManage',
        name: '查询',
        component: UserManage
      },
      {
        path: '/Manage/UpdateUser',
        name: '更改',
        component: UpdateUser
      },
      {
        path: '/Manage/AddUser',
        name: '添加',
        component: AddUser
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
