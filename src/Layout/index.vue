<template>
  <Layout class="app-layout">
    <Sider
      :width="240"
      v-model="collapse"
      hide-trigger
      collapsible
      :collapsed-width="80"
    >
      <MenuAside :collapse="collapse" ref="menu" />
    </Sider>
    <Layout>
      <Header />
      <Content>
        <Card dis-hover>
          <keep-alive :include="keepAliveMenu">
            <router-view></router-view>
          </keep-alive>
        </Card>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import MenuAside from "./MenuSide/index.vue";
import Header from "./Header";
export default {
  components: {
    MenuAside,
    Header,
  },
  data() {
    return {
      collapse: false,
      keepAliveMenu: ["directives"],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.ivu-layout {
  height: 100%;
  width: 100%;
  .ivu-layout-sider,
  .ivu-layout-header {
    background-color: #fff;
  }
  .ivu-layout-content {
    box-sizing: border-box;
    padding: 10px;
    .ivu-card {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
