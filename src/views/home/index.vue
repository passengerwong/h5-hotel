<template>
  <span class="home-page"
    >主页
    <span class="f-30">ffff</span>
  </span>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("----hello");
  },
});
</script>
<style lang="less" scoped>
.home-page {
  font-size: 1rem;
  transform: translate(100px);
}
</style>
