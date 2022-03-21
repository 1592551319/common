<template>
  <Layout class="app-layout">
    <Sider breakpoint="lg" :width="240"><MenuAside /> </Sider>
    <Layout>
      <Header>头部</Header>
      <Content>
        <Card dis-hover>
          <router-view></router-view>
        </Card>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import MenuAside from "./MenuSide/index.vue";
export default {
  components: {
    MenuAside,
  },
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
