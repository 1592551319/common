<template>
  <div class="directives">
    <Button v-permission="'admin'">权限指令</Button>
    <br />
    <Button v-copy="'admin'">复制指令</Button>
    <br />
    <Button v-debounce="handleDebounce">防抖指令</Button>
  </div>
</template>

<script>
export default {
  methods: {
    handleDebounce() {
      this.$Message.success('888')
    },
  },
};
</script>

<style></style>
