import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Edit from "../views/Edit.vue";
import Create from "../views/Create.vue";
import { useLoginStore } from "../stores/login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/edit",
      name: "edit",
      component: Edit,
      meta: {
        requireLogin: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requireLogin: true,
      },
    },
    {
      path: "/create",
      name: "create",
      component: Create,
      meta: {
        requireLogin: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const auth = useLoginStore();
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    auth.loggedIn === false
  ) {
    next("/login");
  } else {
    next();
  }
});
export default router;
