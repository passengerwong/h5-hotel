// 自定义组件
import PageLayout from "@/components/cusCommon/pageLayout.vue";
import Header from "@/components/cusCommon/header.vue";

export default {
  install(app: any) {
    app.component("PageLayout", PageLayout);
    app.component("Header", Header);
  },
};
