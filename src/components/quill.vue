<template>
  <quill-editor
    v-model="content"
    ref="contentQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
  >
  </quill-editor>
</template>

<script>
// import _ from "lodash";
import { quillEditor } from "vue-quill-editor";

export default {
  name: "Question",
  components: { quillEditor },
  data() {
    return {
      content: "",
      editorOption: {
        placeholder: "请在这里输入",
        theme: "snow",
      },
    };
  },
};
</script>

<style>
</style>