<template>
  <div class="main-tag-views">
    <Tag class="last" @click.native="handleScroll('last')">
      <Icon type="ios-arrow-back" />
    </Tag>
    <div class="tag-list">
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
        :closable="item.name != 'homeIndex'"
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
    <Tag class="next" @click.native="handleScroll('next')">
      <Icon type="ios-arrow-forward" />
    </Tag>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      // checkedTag: "",
      homeIndex: {
        name: "homeIndex",
        path: "/home",
        title: "首页",
      },
    };
  },
  mounted() {
    const { name } = this.$route;
    this.checkedTag = name;
  },
  watch: {},
  computed: {
    ...mapGetters(["tagViews", "activeViews"]),
    checkedTag: {
      get() {
        return this.activeViews.name;
      },
      set(v) {
        return v;
      },
    },
  },
  methods: {
    ...mapMutations(["DEL_TAG_VIEWS"]),
    handleChangeTag(route) {
      this.checkedTag = route.name;
      this.$router.push({
        ...route,
      });
    },
    handleCloseTag(route) {
      this.DEL_TAG_VIEWS(route.name);
      if (this.checkedTag == route.name) {
        const lastRouter = this.tagViews[this.tagViews.length - 1];
        this.$router.push({ name: lastRouter ? lastRouter.name : "homeIndex" });
      }
    },
    handleScroll(page) {
      console.log(page);
    },
  },
};
</script>

<style scoped lang="less">
/deep/.ivu-tag-primary {
  cursor: pointer;
}
/deep/.ivu-tag-primary.ivu-tag-dot .ivu-tag-dot-inner {
  background-color: #ccc;
}
/deep/.ivu-tag-primary.ivu-tag-dot.active .ivu-tag-dot-inner {
  background: #2d8cf0;
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
