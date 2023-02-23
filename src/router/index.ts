import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainScreen from '../screens/Main/index.vue';
import SignUpScreen from '../screens/SignUp/index.vue';
import SignInScreen from '../screens/SignIn/index.vue';
import ManagerScreen from '../screens/Manager/index.vue';
import ProfileScreen from '../screens/Manager/Profile/index.vue';
import EditorScreen from '../screens/Manager/Editor/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'main',
    path: '/',
    component: MainScreen,
  },
  {
    name: 'manager',
    path: '/manager',
    component: ManagerScreen,
    children: [
      {
        name: 'manager-profile',
        path: 'profile',
        component: ProfileScreen,
      },
      {
        name: 'manager-editor',
        path: 'editor',
        component: EditorScreen,
      },
    ],
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
