import { createWebHistory, createRouter } from 'vue-router';
import AddUser from './components/AddUser';

const routes = [
  {
    path: '/',
    alias: '/users',
    name: 'users',
    component: () => import('./components/Users'),
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('./components/User'),
  },
  {
    path: '/add',
    name: 'add',
    component: AddUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
