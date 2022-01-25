import { RouteRecordRaw } from "vue-router";

export default [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("views/home/index.vue") },
] as RouteRecordRaw[];
