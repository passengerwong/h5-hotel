<template>
  <div class="home-page">主页</div>
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
}
</style>
