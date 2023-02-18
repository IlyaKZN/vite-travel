import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainScreen from '../screens/Main/index.vue';
import SignUpView from '../screens/SignUp/index.vue';
import SignInView from '../screens/SignIn/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'main',
    path: '/',
    component: MainScreen,
  },
  {
    name: 'signUp',
    path: '/signup',
    component: SignUpView,
  },
  {
    name: 'signIn',
    path: '/signin',
    component: SignInView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
