import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  meta: {},
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
      props: true,
    },
    {
      path: '/users',
      component: UsersList,
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        next();
      },
    },
    { path: '/:notFound(.*)', redirect: '/teams' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.afterEach(() => {
  //sending analytics data. Logs, etc.
  console.log('Global after each');
});

const app = createApp(App);

app.use(router);
app.mount('#app');
