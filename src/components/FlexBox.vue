<template>
  <div class="flex margin-bottom">
    <div class="flex flex_wrap">
      <slot></slot>
    </div>
    <div style="flex: 1"></div>
    <div class="button-group" v-if="button">
      <slot name="button">
        <Button type="primary" @click="handleSearch">搜索</Button>
        <Button type="default" @click="handleReset">重置</Button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "flexBox",
  props: {
    button: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$attrs);
  },
  methods: {
    handleSearch() {
      this.$emit("search");
    },
    handleReset() {
      this.$emit("reset");
    },
  },
  computed: {
    flexClass() {
      return {
        flex: true,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.flex_wrap {
  flex-wrap: wrap;
}
.flex {
  display: flex;
}
.margin-bottom {
  margin-bottom: 20px;
}
.button-group {
  display: flex;
  align-items: flex-end;
  button {
    margin-left: 8px;
  }
}
</style>
