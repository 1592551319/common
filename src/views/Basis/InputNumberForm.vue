<template>
  <div class="input-number-form">
    <div class="input-number-row" v-for="(item, index) in 8" :key="index">
      <FormItem error="大侠饶命">
        <InputNumber :size="size"></InputNumber>
        <span class="input-number-unit">{{ unit }}</span>
      </FormItem>
      <FormItem error="大侠饶命">
        <InputNumber :size="size"></InputNumber>
        <span class="input-number-unit">{{ unit }}</span>
      </FormItem>
      <FormItem error="大侠饶命">
        <InputNumber :size="size"></InputNumber>
        <span class="input-number-unit">{{ unit }}</span>
      </FormItem>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "small",
    },
    rules: {
      type: Array,
    },
    unit: {
      type: String,
      default: "(km)",
    },
  },
};
</script>

<style lang="less" scoped>
.input-number-form {
  .input-number-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .input-number-unit {
    margin: 0 8px;
  }
}
</style>
