<template>
  <Header class="main-header">
    <TagViews />
  </Header>
</template>

<script>
import TagViews from "./TagViews";
export default {
  components: { TagViews },
  methods: {},
};
</script>

<style lang="less" scoped>
.main-header {
  padding: 0;
}
</style>
