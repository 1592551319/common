<template>
  <Modal
    :value="value"
    title="Fullscreen Modal"
    @on-visible-change="handleVisible"
  >
    <div v-for="item in 99" :key="item">This is a fullscreen modal</div>
  </Modal>
</template>

<script>
import { Modal } from "view-design";
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value",
    event: "nnnn",
  },
  components: {
    Modal,
  },
  data() {
    return {
      modal11: false,
    };
  },
  methods: {
    handleVisible(v) {
      this.$emit("nnnn", v);
    },
  },
};
</script>

<style>
</style>