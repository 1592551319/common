<template>
  <div class="login">
    <Card class="login-card" :shadow="true">
      <Form ref="loginModel" :model="loginModel" :rules="rules" :label-width="60">
        <FormItem prop="user" label="账号">
          <Input v-model="loginModel.user" type="text" placeholder="请输入账号">
            <Icon slot="prepend" type="ios-person-outline" />
          </Input>
        </FormItem>
        <FormItem prop="password" label="密码">
          <Input v-model="loginModel.password" type="password" placeholder="请输入密码">
            <Icon slot="prepend" type="ios-lock-outline" />
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleLogin">登录</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'Login',
  data() {
    return {
      loginModel: {},
      rules: {
        user: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs['loginModel'].validate((valid) => {
        if (valid) {
          login(this.loginModel).then((res) => {
            if (res.ret === 0) {
              this.$Message.success('登录成功')
              localStorage.setItem('token', true)
              this.$router.push({
                path: '/'
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #eee;
	.login-card {
		width: 350px;
	}
}
</style>
