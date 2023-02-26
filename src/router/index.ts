import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainScreen from '../screens/Main/index.vue';
import SignUpScreen from '../screens/SignUp/index.vue';
import SignInScreen from '../screens/SignIn/index.vue';
import ManagerScreen from '../screens/Manager/index.vue';
import ProfileScreen from '../screens/Manager/Profile/index.vue';
import EditorScreen from '../screens/Manager/Editor/index.vue';
import GroupsScreen from '../screens/Manager/Groups/index.vue';
import CreateGroupScreen from '../screens/Manager/CreateGroup/index.vue';
import UsersScreen from '../screens/Users/index.vue';
import GroupCardScreen from '../screens/Manager/GroupCard/index.vue';

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
      {
        name: 'manager-create-group',
        path: 'create-group',
        component: CreateGroupScreen,
      },
      {
        name: 'manager-groups',
        path: 'groups',
        component: GroupsScreen,
      },
      {
        name: 'group-card',
        path: 'groups/:id',
        component: GroupCardScreen,
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
  {
    name: 'users',
    path: '/users',
    component: UsersScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
