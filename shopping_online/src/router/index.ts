import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RequestImportListComponent from "@/components/requestImport/RequestImportListComponent.vue";
import CategoryDetail from "@/components/management/category/CategoryDetail.vue";
import CategoryList from "@/components/management/category/CategoryList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: "/request-import-list",
        name: "request-import-list",
        component: RequestImportListComponent,
      },
      {
        path: "/category-list",
        name: "category-list",
        component: CategoryList,
      },
      {
        path: "/category-detail/:id",
        name: "category-detail",
        component: CategoryDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
