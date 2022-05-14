import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './components/pages/coaches/CoachesList.vue';
import CoachDetail from './components/pages/coaches/CoachDetail.vue';
import CoachesRegistration from './components/pages/coaches/CoachesRegistration';

import CoachContact from './components/pages/requests/CoachContact.vue';
import ReceivedRequests from './components/pages/requests/ReceivedRequests';

import NotFound from './components/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: CoachContact }],
    },
    { path: '/register', component: CoachesRegistration },
    { path: '/requests', component: ReceivedRequests },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;