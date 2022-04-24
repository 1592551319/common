<template>
  <div class="directives">
    <Button v-permission="'admin'">权限指令</Button>
    <br />
    <Button v-copy="'admin'">复制指令</Button>
    <br />
    <Button v-debounce="handleDebounce">防抖指令</Button>
    {{ test }}
  </div>
</template>

<script>
export default {
  name: "directives",
  data() {
    return {
      test: "",
    };
  },
  mounted() {
    setTimeout(() => (this.test = 666), 3000);
    console.log(9999);
  },
  methods: {
    handleDebounce() {
      this.$Message.success("888");
    },
  },
};
</script>

<style></style>
