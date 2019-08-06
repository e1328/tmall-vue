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
        <router-link to="/">
          <img src="../image/logo_login.png" alt="" style="width: 190px;height: 28px;position: relative;left: -250px;top: 35px;">
        </router-link>
        <div style="width: 515px;height: 35px;position: relative;right: -655px;">
          <input type="text" style="width: 422px;height: 35px;float:left;">
          <input type="button" class="btn btn-default" style="width: 93px;height: 35px;float:left;" value="搜索">
        </div>
      </div>
    </div>
    <div style="width: 1170px;height: 600px;margin: 0 auto" class="nav3">
      <div style="width: 150px;float:left;" class="nav3_div1">
        <ul class="h5">
          <li><router-link to=""><span>店铺信息</span></router-link></li>
          <li><router-link to=""><span>信息修改</span></router-link></li>
          <li><router-link to=""><span>商品管理</span></router-link></li>
          <li><router-link to=""><span>增加商品</span></router-link></li>
          <li><router-link to=""><span>优惠活动</span></router-link></li>
        </ul>
      </div>
      <div style="width: 1020px;float:left;" class="container nav3_div2">
        <div class="all" style="margin-top: 20px;display: none;">
          <div style="width: 726px;height: 126px;border: 1px solid rgba(102,102,102,0.16)">
            <div style="height: 70px;background:#f5f8fa;line-height: 70px;">
              <img src="https://img.alicdn.com/bao/uploaded//i1/619123122/O1CN011YvuzJWPCJpIVE2_!!619123122.png_50x50.jpg" alt="" style="width: 52px;margin-left: 12px;" class="img-circle">
              <span class="h6" style="margin-left: 16px;">良品铺子旗舰店</span>
              <span class="h6" style="margin-left: 10px;">这是店铺的描述</span>
            </div>
            <div style="height: 56px;line-height: 56px;">
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">拥有商品 <span style="color: #f40">17</span></span>
              </div>
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">总营业额 <span style="color: #f40">4000</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="info" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none;">
          <table>
            <tr style="height: 50px;">
              <td>
                <span class="h6">店铺名：</span>
              </td>
              <td>
                <input type="text">
              </td>
            </tr>
            <tr style="height: 160px;">
              <td>
                <span class="h6" style="position: relative;top: -74px">店铺图标：</span>
              </td>
              <td>
                <img src="https://img.alicdn.com/bao/uploaded//i1/619123122/O1CN011YvuzJWPCJpIVE2_!!619123122.png_50x50.jpg" alt="" style="width: 80px;height: 80px;border: 1px solid rgba(102,102,102,0.35)">
                <input type="file" class="h6">
                <input type="button" value="上传" class="h6">
              </td>
            </tr>
            <tr style="height: 40px;">
              <td>
                <span class="h6">店铺描述：</span>
              </td>
              <td>
                <input type="text">
              </td>
            </tr>
          </table>
          <hr>
          <button class="h6">保存</button>
        </div>
        <div class="goods" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;margin-bottom: 20px;display: none">
          <Goods></Goods>
        </div>
        <div class="add" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;margin-bottom: 20px;display: none;">
          <AddGoods></AddGoods>
        </div>
        <div class="discount" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none">
          暂时没有优惠活动
        </div>
      </div>
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h5 class="modal-title" id="myModalLabel">回复买家：李四</h5>
            </div>
            <div class="modal-body">
              <span class="h5">请输入要回复的内容：</span><br><br>
              <input type="text" class="form-control">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-sm">保存</button>
              <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddGoods from '../views/AddGoods'
import Goods from '../views/Goods'
export default {
  name: 'ShopManage',
  components: {
    AddGoods,
    Goods
  },
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    this.name = this.$store.state.name
  }
}
$(function () {
  $('.nav3_div2>div').eq(0).show()
  $('.nav3_div1 ul li').click(function () {
    let flag = $(this).index()
    $('.nav3_div1 ul li').each(function () {
      if (flag == $(this).index()) {
        $('.nav3_div2>div').eq($(this).index()).show()
      } else {
        $('.nav3_div2>div').eq($(this).index()).hide()
      }
    })
  })
})
</script>

<style scoped>
  .nav3>div>ul{
    margin-left: -20px;
    margin-top: 20px;
  }
  .nav3>div>ul li{
    list-style: none;
    margin-top: 20px;
  }
  .nav3>div>ul li a{
    color: #333333;
  }
  .info{
    padding: 20px 0 20px 32px;
  }
  .goods{
    padding: 20px 20px 0 20px;
  }
  .goods ul{
    list-style: none;
  }
  .goods ul li{
    width: 120px;
    float: left;
    margin-top: 10px;
    margin-left: 24px;
  }
  .add{
    padding: 20px 20px 0 20px;
  }
  .add ul{
    list-style: none;
  }
  .add ul li{
    width: 120px;
    float: left;
    margin-top: 10px;
    margin-left: 24px;
  }
</style>
