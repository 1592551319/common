<template>
  <Layout class="app-layout">
    <Sider v-model="collapse" :width="240" hide-trigger collapsible :collapsed-width="80">
      <MenuAside ref="menu" :collapse="collapse" />
    </Sider>
    <Layout>
      <Header />
      <Content>
        <Card dis-hover>
          <keep-alive :include="keepAliveMenu">
            <router-view />
          </keep-alive>
        </Card>
      </Content>
      <SettingDrawer />
    </Layout>
  </Layout>
</template>

<script>
import MenuAside from './MenuSide/index.vue'
import Header from './Header'
import SettingDrawer from './SettingDrawer'
export default {
  components: {
    MenuAside,
    Header,
    SettingDrawer
  },
  data() {
    return {
      collapse: false,
      keepAliveMenu: ['directives', 'ViewDesign']
    }
  },
  methods: {
    async handleOk() {
      await 444
    }
  }
}
</script>

<style lang="less" scoped>
.ivu-layout {
	height: 100%;
	width: 100%;
	// .ivu-layout-sider,
	// .ivu-layout-header {
	//     // background-color: #fff;
	// }
	.ivu-layout-content {
		box-sizing: border-box;
		padding: 10px;
		.ivu-card {
			height: 100%;
			width: 100%;
			/deep/ & > .ivu-card-body {
				height: 100%;
				width: 100%;
			}
		}
	}
}
</style>
