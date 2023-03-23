<template>
  <div class="directives">
    <Button v-permission="'admin'">权限指令</Button>
    <br>
    <Button v-copy="'admin'">复制指令</Button>
    <br>
    <Button v-debounce="handleDebounce">防抖指令</Button>
    <!-- <Button @click="handleDecoratorDebounce">修饰器防抖</Button> -->
    {{ test }}
  </div>
</template>

<script>
// import { debounce } from "@/plugins/decorator";
export default {
  name: 'Directives',
  data() {
    return {
      test: ''
    }
  },
  mounted() {},
  methods: {
    handleDebounce() {
      this.$Message.success('888')
    },
    // @debounce(100)
    handleDecoratorDebounce() {
      console.log('handleDecoratorDebounce')
    }
  }
}
</script>

<style></style>
