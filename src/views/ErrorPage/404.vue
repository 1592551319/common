<template>
  <div class="nofound">
    <Button type="primary" class="btn" @click="handleBack">返回首页</Button>
  </div>
</template>

<script>
export default {
  name: '404',
  data() {
    return {
      notFound: require('@/assets/images/404.jpg')
    }
  },
  methods: {
    handleBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.nofound {
	height: 100%;
	width: 100%;
	background-image: url(../../assets/images/404.jpg);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
