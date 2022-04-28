import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { Button } from "vant";

// import initPlugins from "./plugins";

const app = createApp(App);
app.use(Button);

app.use(router).mount("#app");
