import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebaseConfig';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/signup', component: SignUp },
  { path: '/login', component: Login },
  { path: '/home', component: Home, meta: { requiresAuth: true } },
  { path: '/', redirect: '/signup' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;