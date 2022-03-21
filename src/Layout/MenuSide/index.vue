<template>
  <Menu
    :theme="'light'"
    :accordion="true"
    :active-name="activeRouter"
    :open-names="openMenu"
  >
    <Submenu name="basis">
      <template slot="title">
        <Icon type="ios-paper" />
        基础功能
      </template>
      <MenuItem name="/basis/directives" to="/basis/directives">指令</MenuItem>
      <MenuItem name="1-2">js</MenuItem>
      <MenuItem name="1-3">css</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    activeRouter() {
      const { path } = this.$route;
      return path;
    },
    openMenu() {
      const { path } = this.$route;
      const pathArr = path.split("/");
      return [pathArr[1]];
    },
  },
};
</script>

<style lang='less' scoped>
.ivu-menu {
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
}
</style>