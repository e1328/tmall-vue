<template>
  <div>
    <div class="container" style="width: 1170px;margin: 22px auto">
      <router-link to="/"><img src="../image/logo_login.png" alt="" class="img-rounded" style="width: 190px;height: 27px;"></router-link>
    </div>
    <div style="width: 100%;height: 600px;background:#1a318f;">
      <div style="width: 1170px;position: relative" class="container">
        <img src="../image/background3_login.jpg" alt="">
        <div style="width: 350px;height: 404px;position: absolute;right: 40px;top: 100px;background:#ffffff;">
          <div style="width: 298px;height: 271px;margin: 25px 26px 20px 26px;">
            <form action="">
              <br>
              <span class="h4">密码登录</span><br><br>
              <input type="text" class="form-control" placeholder="会员名/邮箱/手机号" required="required" style="height: 40px;" v-model="entity.user_name"><br>
              <input type="password" class="form-control" required="required" style="height: 40px;" v-model="entity.user_pass"><br>
              <input type="submit" class="form-control" value="登 录" style="height: 40px;color: white;background:#fd0036;" @click="login"><br>
              <div class="pull-right">
                <a href="#" class="h5" style="margin-right: 6px;" id="forget">忘记密码</a>
                <router-link to="Register"><span class="h5" style="margin-right: 6px;">免费注册</span></router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      entity: [],
      name: {}
    }
  },
  methods: {
    login: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:9103/users/login',
        params: {
          user_name: this.entity.user_name,
          user_pass: this.entity.user_pass
        }
      })
        .then(response => {
          console.log(response)
          if (response.data.success) {
            this.name = this.$store.commit('setName', response.data.message)
            localStorage.setItem('store', response.data.message)
            alert('登录成功')
            this.$router.push({ path: '/' })
          } else {
            alert('登录失败')
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.name = this.$store.state.name
  }
}
// eslint-disable-next-line no-undef
$(function () {
  // eslint-disable-next-line no-undef
  $('#forget').click(function () {
    alert('这个功能没做，哈哈~')
    // try
  })
})
</script>

<style scoped>

</style>
