import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './components/pages/coaches/CoachesList.vue';
import NotFound from './components/pages/NotFound.vue';
import store from './store/store';

const CoachDetail = defineAsyncComponent(() =>
  import('./components/pages/coaches/CoachDetail.vue')
);
const CoachesRegistration = defineAsyncComponent(() =>
  import('./components/pages/coaches/CoachesRegistration.vue')
);

const CoachContact = defineAsyncComponent(() =>
  import('./components/pages/requests/CoachContact.vue')
);

const ReceivedRequests = defineAsyncComponent(() =>
  import('./components/pages/requests/ReceivedRequests.vue')
);

const UserAuth = () => import('./components/pages/auth/UserAuth.vue');

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
