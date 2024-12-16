import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/home-page.vue';
import AboutPage from '../pages/about-page.vue';
import CarPage from '../pages/car-page.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/cars/:id',
      name: 'car',
      component: CarPage,
    },
  ],
});
