<template>
  <div>
    <div style="width: 100%;border: 1px solid rgba(153,153,153,0.3);background: #fdfdfe">
      <div class="container" style="width: 1170px;height: 48px;margin: 16px auto">
        <router-link to="/">
          <img src="../image/logo_login.png" alt="" class="img-rounded" style="width: 190px;height: 27px;margin-top: 10px;">
        </router-link>
        <span class="pull-right" style="display: inline-block;margin-top: 12px;">喵，欢迎来天猫！<span class="h5"><router-link to="Login">请登录</router-link></span></span>
      </div>
    </div>
    <div style="width: 100%;height: 534px;background:#fafbfb;border-bottom: 1px solid rgba(153,153,153,0.21)" class="bg-success">
      <div style="width: 1170px;position: relative" class="container">
        <h3 class="text-center" style="position: relative;top: 14px;" id="title">天猫注册</h3>
        <div class="bg-warning nav2_left" style="width: 84px;">
          <ul class="list-unstyled">
            <li>用户名</li>
            <li>设置密码</li>
            <li>确定密码</li>
            <li>手机号码</li>
            <li>滑动验证</li>
            <li>短信验证码</li>
          </ul>
        </div>
        <div style="width: 330px;margin: 30px auto;">
          <form action="">
            <input type="text" class="form-control pull-right" style="height: 38px;margin-top: 22px;" required="required" v-model="entity.user_name">
            <input type="password" class="form-control pull-right" style="height: 38px;margin-top: 22px;" required="required" v-model="entity.user_pass">
            <input type="password" class="form-control pull-right" style="height: 38px;margin-top: 22px;" required="required">
            <input type="text" class="form-control pull-right" style="height: 38px;margin-top: 22px;" v-model="entity.phone" required="required">
            <div style="height: 38px;position: absolute;top: 339px;">
              <div id="box">
                <div class="btn">》</div>
                <p class="text">拖动滑块验证</p>
                <div class="bg"></div>
              </div>
            </div>
            <input type="text" class="form-control pull-right" style="height: 38px;margin-top: 22px;">
            <input type="text" class="form-control pull-left" style="width: 330px;height: 38px;margin-top: 22px;" required="required" v-model="entity.phone_code">
            <input type="submit" class="form-control pull-right" style="height: 38px;margin-top: 22px;color: white;background:#fd5757;" value="立即注册" @click="register">
          </form>
        </div>
        <span class="btn btn-sm btn-default" style="position: relative;left: 750px;top: 325px;" @click="sendMessage">发送验证码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      entity: {},
      num: '',
      code: ''
    }
  },
  methods: {
    sendMessage: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:9103/users/send?phone=' + this.entity.phone
      })
        .then(response => {
          alert('短信发送成功')
          this.code = response.data.code
          this.num = response.data.num
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('发送失败')
          console.log(error)
        })
    },
    register: function () {
      // // eslint-disable-next-line eqeqeq
      // if (this.code !== this.entity.phone_code || this.num !== this.entity.phone) {
      //   alert('验证失败')
      //   return false
      // }

      this.axios({
        method: 'get',
        url: 'http://localhost:9103/users/test',
        params: {
          'phone': this.entity.phone,
          'code': this.entity.phone_code
        }
      })
        .then(response => {
          if (response.data.success) {
            console.log('test-success')
            console.log('user=' + this.entity)
            this.axios({
              method: 'post',
              url: 'http://localhost:9103/users',
              data: this.entity
            })
              .then(response => {
                if (response.data.success) {
                  $('input').val('')
                  this.code = ''
                  this.num = ''
                  this.entity = {}
                  console.log(response)
                  // eslint-disable-next-line standard/object-curly-even-spacing
                  this.$router.push({ path: '/Login'})
                } else {
                  alert('注册失败')
                }
              })
              // eslint-disable-next-line handle-callback-err
              .catch(error => {
                alert('请求失败')
                console.log(error)
              })
          } else {
            alert('验证码有误')
            return false
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('请求错误')
          return false
        })
    }
  }
}
window.onload = function () {
  // 事件:滑块1.按下  onmousedown
  // 2.拖动 onmousemove
  // 3.松开 onmouseup
  var flag = false // 处理验证是否通过  默认是不通过
  var box = document.getElementById('box')// 大盒子
  var btn = document.getElementsByClassName('btn')[0]// 滑块
  var text = document.getElementsByClassName('text')[0]// 文字
  var bg = document.getElementsByClassName('bg')[0]// 背景
  // 按下
  btn.onmousedown = function (e) {
    var downX = e.clientX // 按下按钮后与窗口的x轴间距
    // 移动
    btn.onmousemove = function (e) {
      var moveX = e.clientX - downX // 滑动的时候距离窗口的x轴的间距  滑动的x-按下的x
      // 只有在大于0的时候才拖动
      if (moveX > 0) {
        btn.style.left = moveX + 'px'// 滑块与左边的距离
        bg.style.width = moveX + 'px' // 背景的宽度就是滑块距离左边的位置
        // 验证成功 条件 不能> 盒子的宽度-滑块的宽度
        if (moveX >= (box.offsetWidth - btn.offsetWidth)) {
          text.innerText = '验证成功'
          text.style.color = '#fff'
          btn.onmousemove = null // 清除拖动事件
          btn.onmousedown = null // 清除按下事件
          flag = true // 通过的时候设置为true
        }
      }
    }
  }

  // 松开
  btn.onmouseup = function () {
    // 为假的时候
    if (flag == false) {
      btn.onmousemove = null// 清除事件
      btn.style.left = 0
      bg.style.width = 0
    }
  }
}
</script>

<style scoped>
  .nav2_left ul{
    position: absolute;
    left: 336px;
    top: 76px;
  }
  .nav2_left ul li{
    height: 38px;
    margin-top: 22px;
    line-height: 38px;
    text-align: right;
  }
  #box{
    width:330px;
    height: 38px;
    position: relative;
    background: #ccc;
  }
  #box .btn{
    width:38px;
    height: 38px;
    box-sizing: border-box;
    border:1px solid #eee;
    text-align: center;
    line-height: 28px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    font-size: 14px;
    background: #fff;
    cursor: pointer;

  }
  #box .bg{
    width: 0;
    height: 100%;
    background: rgb(144, 238, 144);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  #box .text{
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    line-height: 38px;
    z-index: 2;
    font-size: 14px;
    left: 0;
    top: 0;
    margin: 0;
  }
</style>
