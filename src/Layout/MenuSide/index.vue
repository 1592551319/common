<template>
  <Menu
    ref="menu"
    :theme="themeMode"
    :accordion="true"
    :active-name="activeRouter"
    :open-names="openMenu"
    class="menu-main"
    width="auto"
    :class="menuitemClasses"
  >
    <div class="icon-wrap">
      <img :src="icon" class="icon">
    </div>
    <div class="menu-wrap">
      <Submenu v-for="menu in menuList" :key="menu.name" :name="menu.name">
        <template slot="title">
          <Icon type="ios-paper" />
          <span>{{ menu.meta.title }}</span>
        </template>
        <MenuItem
          v-for="child in menu.children"
          :key="child.name"
          :name="menu.path + '/' + child.path"
          :to="menu.path + '/' + child.path"
        >
          <span> {{ child.meta.title }}</span>
        </MenuItem>
      </Submenu>
    </div>
  </Menu>
</template>

<script>
import asyncRoutes from '@/router/async-routes.js'
import { mapGetters } from 'vuex'
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuList: [],
      icon: require('@/assets/images/logo.jpeg')
    }
  },
  watch: {
    activeViews() {
      this.handleUpdate()
    }
  },

  mounted() {
    this.handleFilterMenu()
    this.handleUpdate()
  },
  computed: {
    ...mapGetters(['activeViews', 'themeMode']),
    menuitemClasses() {
      return ['menu-item', this.collapse ? 'collapsed-menu' : '']
    },
    activeRouter() {
      return this.activeViews.path
    },
    openMenu() {
      const { path } = this.activeViews
      const pathArr = path.split('/')
      return [pathArr[1]]
    }
  },
  methods: {
    handleUpdate() {
      this.$nextTick(() => {
        this.$refs['menu'].updateOpened()
      })
    },
    handleFilterMenu() {
      this.menuList = asyncRoutes.filter((item) => {
        return item.name !== 'home'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.menu-main {
	display: flex;
	flex-direction: column;
	.menu-wrap {
		flex: 1;
		overflow: auto;
		&::-webkit-scrollbar {
			display: none;
		}
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
		transition: all 0.3s;
	}
}
.ivu-menu {
	box-sizing: border-box;
	height: 100%;
	overflow: auto;
	.icon-wrap {
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		.icon {
			width: 80px;
			height: 80px;
			display: block;
			border-radius: 50%;
		}
	}
}
.menu-item span {
	display: inline-block;
	overflow: hidden;
	width: 69px;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: bottom;
	transition: width 0.2s ease 0.2s;
}
.menu-item i {
	transform: translateX(0px);
	transition: font-size 0.2s ease, transform 0.2s ease;
	vertical-align: middle;
	font-size: 16px;
}
.collapsed-menu span {
	width: 0px;
	transition: width 0.2s ease;
	display: none;
}
.collapsed-menu i {
	transform: translateX(5px);
	transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
	vertical-align: middle;
	font-size: 22px;
}
</style>
