<template>
  <PageLayout :title="title"> </PageLayout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const title = ref("我是首页");

    return { title };
  },
});
</script>
<style lang="less" scoped>
.home-page {
  font-size: 1rem;
  transform: translate(100px);
}
</style>
