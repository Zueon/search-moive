import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import About from './About';
import Movie from './Movie';
import NotFound from './NotFound';

export default createRouter({
  // Hash 모드 사용
  // https://goolge.com/#/search # 사용하여 원하는 페이지로 접근하는 방법
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  // pages
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/movie/:id',
      component: Movie,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
