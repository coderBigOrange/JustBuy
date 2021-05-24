import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//路由懒加载 (值得挖掘的地方)
const Home = () => import ('views/home/Home');
const Category = () => import ('views/category/Category');
const Cart = () => import ('views/cart/Cart');
const Profile = () => import ('views/profile/Profile');
const Detail = () => import ('views/detail/Detail');

const routes = [
  {path:'', redirect: "/home"},
  {path:'/home', component: Home},
  {path:'/category', component: Category},
  {path:'/cart', component: Cart},
  {path:'/profile', component: Profile},
  {path:'/detail/:iid', component: Detail}
  //动态路由传递参数iid
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
