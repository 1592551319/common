<template>
  <div>
    <Collapse v-model="value1">
      <Panel name="1">
        修改主题色，适用任何组件库
        <div slot="content">
          <div>安装依赖</div>
          <div># use npm or pnpm</div>
          <div>
            npm install color@3.2.1 @zougt/some-loader-utils
            @zougt/theme-css-extract-webpack-plugin -D
          </div>
          <div># use yarn</div>
          <div>
            yarn add color@3.2.1 @zougt/some-loader-utils
            @zougt/theme-css-extract-webpack-plugin -D
          </div>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data() {
    return {
      value1: [1]
    }
  }
}
</script>

<style></style>
