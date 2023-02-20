import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainScreen from '../screens/Main/index.vue';
import SignUpScreen from '../screens/SignUp/index.vue';
import SignInScreen from '../screens/SignIn/index.vue';
import ProfileScreen from '../screens/Profile/index.vue';
import ProfileEditorScreen from '../screens/Profile/Editor/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'main',
    path: '/',
    component: MainScreen,
  },
  {
    name: 'signUp',
    path: '/signup',
    component: SignUpScreen,
  },
  {
    name: 'signIn',
    path: '/signin',
    component: SignInScreen,
  },
  {
    name: 'profile',
    path: '/profile',
    component: ProfileScreen,
  },
  {
    name: 'profile.edit',
    path: '/edit',
    component: ProfileEditorScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
