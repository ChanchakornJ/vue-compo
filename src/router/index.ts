import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'

import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/event/NetworkErrorView.vue'
import UserView from '@/views/UserView.vue'
import UserDetailView from '@/views/UserDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-view',
      component: UserView,
      props: (route) => ({
        // page: parseInt(route.query.page?.toString() || '1'),
        // perPage: Number(route.query.limit) || 2
      })
      
    },
     {
      path: '/user/:id',
      name: 'user-detail-view',
      component: UserDetailView,
      props: true
    },
    {
      path: '/about',
      name: 'about',
     component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props:true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }, 
    {
      path: '/network-error',
      name: '/network-error-view',
      component: NetworkErrorView
    }
  ],
})

export default router
