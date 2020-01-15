import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome'
import Users from '../components/User/Users'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    redirect:'/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
    ]
  }
]

const router = new VueRouter({
  routes
})

//挂载理由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  //next()放行 next('/login') 强制跳转
  // if (to.path === '/home') return next('/login');
  if (to.path === '/login') return next()
  // const tokenStr = window.sessionStorage.getItem('token')
  // if(!tokenStr) return next('/login')
  next()
})

export default router
