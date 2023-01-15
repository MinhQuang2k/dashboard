import { createRouter, createWebHistory } from "vue-router";
import CategoryView from "../views/CategoryView.vue";
import AddCategoryView from "../views/AddCategoryView.vue";
import TemplateView from "../views/TemplateView.vue";
import AddTemplateView from "../views/AddTemplateView.vue";
import LoginForm from "../views/LoginForm.vue";
import BaseLayout from "../common/BaseLayout.vue";
import { USER_INFO } from "@/const/context";

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "/",
        name: "template",
        component: TemplateView,
      },
      {
        path: "/template/add",
        name: "addTemplateView",
        component: AddTemplateView,
      },
      {
        path: "/category",
        name: "category",
        component: CategoryView,
      },
      {
        path: "/category/add",
        name: "addCategoryView",
        component: AddCategoryView,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const auth = JSON.parse(localStorage.getItem(USER_INFO));
  if (authRequired && !auth?.token) {
    return "/login";
  }
});

export default router;
