import { createRouter, createWebHistory } from 'vue-router'
import ListsView from '../views/ListsView.vue'
import NewListView from '@/views/NewListView.vue'
import AboutView from '../views/AboutView.vue'
import ListDetailsView from '@/views/ListDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'lists',
      component: ListsView,
    },
    {
      path: '/new',
      name: 'new-list',
      component: NewListView,
    },
    {
      path: '/list/:id',
      name: 'list',
      component: ListDetailsView,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
