/**
 * 注意事项：
 * 1、菜单维护：添加菜单的时候必须添加redirect_url为router中的path，形如："/store_management"
 */
import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Home from '@/components/Pages/Home'
import About from '@/components/Pages/About'
import Technology from '@/components/Pages/Technology'


Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

/**
 * [router 添加路由规则]
 * 1、正确添加路由，要使用meta
 * 2、为了处理面包屑，请将对应的name和path写到breadcrumbList中
 * @type {Router}
 */
const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      children: [
        {
          path: '/home',
          name: '首页',
          meta: {
            title: '首页'
          },
          component: Home
        },
        {
          path: '/about',
          name: '关于我们',
          meta: {
            title: '关于我们'
          },
          component: About
        },
        {
          path: '/technology',
          name: '技术支持',
          meta: {
            title: '技术支持'
          },
          component: Technology
        },
        {
          path: '/error',
          name: '未找到页面',
          meta: {
            title: '未找到页面',
            scrollToTop: true,
            breadcrumbList: [
              {name: '首页', path: '/'},
              {name: '未找到页面', path: '/error'}
            ]
          },
          component: Error
        }
      ]
    },
    {
      path: '/*',
      redirect: '/Home'
    }
  ]
})

// beforeEach是router的钩子函数，在进入路由前执行
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router
