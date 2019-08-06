<template>
  <div>
    <div style="width: 100%;height: 36px;line-height: 32px;background:#f1f1f1;" class="nav1">
      <div style="width: 1170px;" class="container">
        <ul class="list-inline pull-left" v-if="!name">
          <li><span class="h6">喵，欢迎来天猫</span></li>
          <li><router-link to="Login"><span class="h6">请登录</span></router-link></li>
          <li><router-link to="Register"><span class="h6">免费注册</span></router-link></li>
        </ul>
        <ul class="list-inline pull-left" v-else>
          <li><span class="h6">喵，欢迎来天猫</span></li>
          <li><span class="h6" style="color: #ff8800;">{{name}}</span></li>
          <li><router-link to=""><span class="h6">积分</span></router-link></li>
          <li><router-link to=""><span class="h6">消息</span></router-link></li>
          <li><router-link to="/Login"><span class="h6" @click="logout">退出</span></router-link></li>
        </ul>
        <ul class="list-inline pull-right">
          <li>
            <div class="dropdown">
              <button class="btn btn-default btn-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                我的淘宝
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#" class="h6">已买到的宝贝</a></li>
                <li><a href="#" class="h6">已卖出的宝贝</a></li>
              </ul>
            </div>
          </li>
          <li><router-link to="/Car"><span class="h6">购物车0件</span></router-link></li>
          <li>
            <div class="dropdown">
              <button class="btn btn-default btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                收藏夹
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a href="#" class="h6">收藏的宝贝</a></li>
                <li><a href="#" class="h6">收藏的店铺</a></li>
              </ul>
            </div>
          </li>
          <li><router-link to="/UserCenter"><span class="h6">用户中心</span></router-link></li>
          <li><router-link to="/MyOrder"><span class="h6">我的订单</span></router-link></li>
          <li><router-link to="/SellerCenter"><span class="h6">我是商家</span></router-link></li>
        </ul>
      </div>
    </div>
    <div style="width: 1170px;height: 95px;margin: 0 auto" class="nav2">
      <div style="width: 1170px;height: 35px;">
        <img src="../image/logo_login.png" alt="" style="width: 190px;height: 28px;position: relative;left: -203px;top: 35px;">
      </div>
    </div>
    <div style="width: 1170px;height: 360px;margin: 0 auto">
      <div style="width: 195px;height: 360px;margin: 0 auto">
        <div class="h5 text-center">扫一扫付款（元）</div>
        <div class="h4 text-center" style="color: #FF6600;">￥2,426.40</div>
        <div>
          <img src="../image/支付页面/alipay2wei.png" alt="" style="width: 195px;height: 256px;">
        </div>
        <div class="text-center" style="margin-top: 16px;">
          <button class="btn btn-danger btn-sm" id="pay">确认支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pay',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    logout: function () {
      sessionStorage.removeItem('store')
    }
  },
  mounted () {
    this.name = this.$store.state.name
  }
}
$(function () {
  $('#pay').click(function () {
    alert('支付成功！')
  })
})
</script>

<style scoped>

</style>
