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
    <div style="width: 1170px;height: 85px;margin: 0 auto" class="nav2">
      <router-link to="/">
        <img src="../image/logo_show.png" alt="" style="width: 145px;height: 30px;margin-left: 14px;">
      </router-link>
      <div style="width: 535px;height: 34px;" class="bg-danger">
        <input type="text" style="width: 375px;height: 34px;" placeholder="搜索 天猫 商品/品牌/店铺">
        <input type="button" style="width: 80px;height: 34px;text-align: center" class="btn btn-default" value="搜天猫">
        <input type="button" style="width: 80px;height: 34px;text-align: center" class="btn btn-default" value="搜本店">
      </div>
      <div style="width: 106px;height: 50px;position: relative;left: 180px;top: 20px;border: 1px solid rgba(102,102,102,0.3)">
        <div style="height: 25px;" class="h6">良品铺子旗舰店</div>
        <div style="height: 25px;margin-top: -15px;" class="h6"><a href="#">进店逛逛</a> <a href="#">关注店铺</a></div>
      </div>
    </div><br>
    <div style="width: 1170px;margin: 0 auto;" class="nav3">
      <div class="container" style="border: 1px solid rgba(153,153,153,0.31);margin-bottom: 20px;">
        <ul class="list-inline">
          <li>
            <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
              <img src="../image/户外出行/image1.jpg" alt="" style="width: 150px;height: 150px;margin: 10px 0 0 7px;">
              <div style="padding: 10px;height: 100px;">
                <span class="h4">￥22</span><br>
                <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装小袋装包邮南方黑芝饼麻干</span><br>
                <span class="h6">月成交2笔</span> <span class="h6">评价33</span>
              </div>
            </div>
          </li>
          <li>
            <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
              <img src="../image/户外出行/image1.jpg" alt="" style="width: 150px;height: 150px;margin: 10px 0 0 7px;">
              <div style="padding: 10px;height: 100px;">
                <span class="h4">￥22</span><br>
                <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装小袋装包邮南方黑芝饼麻干</span><br>
                <span class="h6">月成交2笔</span> <span class="h6">评价33</span>
              </div>
            </div>
          </li>
          <li>
            <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
              <img src="../image/户外出行/image1.jpg" alt="" style="width: 150px;height: 150px;margin: 10px 0 0 7px;">
              <div style="padding: 10px;height: 100px;">
                <span class="h4">￥22</span><br>
                <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装小袋装包邮南方黑芝饼麻干</span><br>
                <span class="h6">月成交2笔</span> <span class="h6">评价33</span>
              </div>
            </div>
          </li>
          <li>
            <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
              <img src="../image/户外出行/image1.jpg" alt="" style="width: 150px;height: 150px;margin: 10px 0 0 7px;">
              <div style="padding: 10px;height: 100px;">
                <span class="h4">￥22</span><br>
                <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装小袋装包邮南方黑芝饼麻干</span><br>
                <span class="h6">月成交2笔</span> <span class="h6">评价33</span>
              </div>
            </div>
          </li>
          <li>
            <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
              <img src="../image/户外出行/image1.jpg" alt="" style="width: 150px;height: 150px;margin: 10px 0 0 7px;">
              <div style="padding: 10px;height: 100px;">
                <span class="h4">￥22</span><br>
                <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装小袋装包邮南方黑芝饼麻干</span><br>
                <span class="h6">月成交2笔</span> <span class="h6">评价33</span>
              </div>
            </div>
          </li>
          <li>
            <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
              <img src="../image/户外出行/image1.jpg" alt="" style="width: 150px;height: 150px;margin: 10px 0 0 7px;">
              <div style="padding: 10px;height: 100px;">
                <span class="h4">￥22</span><br>
                <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装小袋装包邮南方黑芝饼麻干</span><br>
                <span class="h6">月成交2笔</span> <span class="h6">评价33</span>
              </div>
            </div>
          </li>
          <li>
            <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
              <img src="../image/户外出行/image1.jpg" alt="" style="width: 150px;height: 150px;margin: 10px 0 0 7px;">
              <div style="padding: 10px;height: 100px;">
                <span class="h4">￥22</span><br>
                <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装小袋装包邮南方黑芝饼麻干</span><br>
                <span class="h6">月成交2笔</span> <span class="h6">评价33</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>

<style scoped>
  .nav2{
    position: relative;
  }
  .nav2 img{
    position: absolute;
    top: 24px;
    left: 0px;
  }
  .nav2>div{
    position: absolute;
    right: 0;
    top: 24px;
  }
  .nav2>div input{
    float: left;
  }
  .nav3 ul li{
    margin: 8px 0 10px 17px;
  }
</style>
