<template>
  <div class="main-tag-views">
    <Tooltip content="下一页">
      <Tag class="last" @click.native="handleScroll('last')">
        <Icon type="ios-arrow-back" />
      </Tag>
    </Tooltip>
    <div ref="tagViews" class="tag-list">
      <Tag
        name="homeIndex"
        type="dot"
        :closable="false"
        color="primary"
        checkable
        :checked="true"
        :class="{ active: checkedTag === 'homeIndex' }"
        @on-change="handleChangeTag(homeIndex, arguments)"
        @on-close="handleCloseTag(homeIndex)"
      >
        首页
      </Tag>
      <Tag
        v-for="item in tagViews"
        :key="item.name"
        :name="item.name"
        type="dot"
        :closable="item.name !== 'homeIndex'"
        color="primary"
        checkable
        :checked="true"
        :class="{ active: checkedTag === item.name }"
        @on-change="handleChangeTag(item, arguments)"
        @on-close="handleCloseTag(item)"
      >
        {{ item.title }}
      </Tag>
    </div>
    <Tooltip content="上一页">
      <Tag class="next" @click.native="handleScroll('next')">
        <Icon type="ios-arrow-forward" />
      </Tag>
    </Tooltip>
    <Tooltip content="关闭所有">
      <Tag class="next" @click.native="handleCloseAll">
        <Icon type="ios-remove-circle-outline" />
      </Tag>
    </Tooltip>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // checkedTag: "",
      homeIndex: {
        name: 'homeIndex',
        path: '/home',
        title: '首页'
      }
    }
  },
  computed: {
    ...mapGetters(['tagViews', 'activeViews', 'themeColor']),
    checkedTag: {
      get() {
        return this.activeViews.name
      },
      set(v) {
        return v
      }
    },
    tagViewsWidth() {
      return this.$refs.tagViews.offsetWidth
    }
  },
  mounted() {
    const { name } = this.$route
    this.checkedTag = name
  },
  methods: {
    ...mapMutations(['DEL_TAG_VIEWS', 'CLEAR_TAG_ALL']),
    handleChangeTag(route) {
      if (this.checkedTag === route.name) return
      this.checkedTag = route.name
      this.$router.push({
        ...route
      })
    },
    handleCloseTag(route) {
      this.DEL_TAG_VIEWS(route.name)
      if (this.checkedTag === route.name) {
        const lastRouter = this.tagViews[this.tagViews.length - 1]
        this.$router.push({ name: lastRouter ? lastRouter.name : 'homeIndex' })
      }
    },
    handleScroll(page) {
      const ref = this.$refs.tagViews
      // const scrollLeft = ref.scrollLeft // 滚动宽度
      // const scrollWidth = ref.scrollWidth // 实际宽度
      const offsetWidth = ref.offsetWidth // 可视宽度

      if (page === 'next') {
        /* 下一页 */
        /* 如果隐藏的滚动宽度大于可视区域的宽度 则滚动一个可是宽度 */
        // if ((scrollWidth - offsetWidth) > offsetWidth) {
        //   this.$refs.tagViews.scrollLeft += offsetWidth
        // } else {
        //   this.$refs.tagViews.scrollLeft += (scrollWidth - offsetWidth)
        // }
        this.$refs.tagViews.scrollLeft += offsetWidth
      }
      if (page === 'last') {
        /* 上一页 */
        this.$refs.tagViews.scrollLeft -= offsetWidth
      }
    },
    handleCloseAll() {
      this.CLEAR_TAG_ALL()
      this.$router.push({ name: 'homeIndex' })
    }
  }
}
</script>

<style scoped lang="less">
/deep/.ivu-tag-primary {
	cursor: pointer;
}

// .tag-list {
//   /deep/.ivu-tag-dot {
//     background-color: var(--primary-color);
//   }
// }
/deep/.ivu-tag-primary.ivu-tag-dot .ivu-tag-dot-inner {
	background-color: #ccc;
}
/deep/.ivu-tag-primary.ivu-tag-dot.active .ivu-tag-dot-inner {
	background: var(--primary-color);
}
.main-tag-views {
	height: 100%;
	display: flex;
	align-items: center;
	.last,
	.next {
		height: 32px;
		line-height: 32px;
		border: 1px solid #e8eaec !important;
		color: #515a6e !important;
		background: #fff !important;
		padding: 0 12px;
		cursor: pointer;
	}
	.tag-list {
		flex: 1;
		display: inline;
		vertical-align: middle;
		white-space: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
		line-height: 0;
		&::-webkit-scrollbar {
			display: none;
		}
	}
}
</style>
