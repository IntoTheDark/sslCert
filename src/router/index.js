import Vue from 'vue'
import Router from 'vue-router'
import sslCert from '@/components/sslCert'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: Index,
      children: [
        {
          path: '/',
          name: 'CA证书生成',
          component: sslCert
        }]
    }
  ]
})
