import { createRouter, createWebHashHistory, Router } from "vue-router";

import routes from "./config";

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
