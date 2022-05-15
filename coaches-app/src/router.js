import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './components/pages/coaches/CoachesList.vue';
import CoachDetail from './components/pages/coaches/CoachDetail.vue';
import CoachesRegistration from './components/pages/coaches/CoachesRegistration';
import UserAuth from './components/pages/auth/UserAuth';

import CoachContact from './components/pages/requests/CoachContact.vue';
import ReceivedRequests from './components/pages/requests/ReceivedRequests';
import NotFound from './components/pages/NotFound.vue';

import store from './store/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetail,
      children: [{ path: 'contact', component: CoachContact }],
    },
    {
      path: '/register',
      component: CoachesRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: ReceivedRequests,
      meta: { requiresAuth: true },
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
