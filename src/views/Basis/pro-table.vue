<template>
  <div class="table">
    <Form :label-width="0" style="width: 500px"> <InputNumberForm /> </Form>
  </div>
</template>

<script>
import InputNumberForm from "./InputNumberForm.vue";
export default {
  components: { InputNumberForm },
};
</script>

<style></style>
