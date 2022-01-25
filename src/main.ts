import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import initPlugins from "./plugins";

const app = createApp(App);

app.use(router).use(initPlugins).mount("#app");
