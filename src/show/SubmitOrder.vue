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
      </div>
    </div>
    <div style="width: 1170px;height: 25px;" class="nav3 container">
      <div class="h5" style="margin-top: 6px;">输入收货地址</div>
    </div>
    <div style="width: 1170px;height: 164px;" class="nav4 container">
      <ul class="list-inline h6">
        <li>
          <div>湖南张家界 （周文龙 收）</div>
          <div>永定大庸桥 吉首大学张家界校区</div>
          <div>17343698034</div>
          <a href="#">修改</a>
        </li>
        <li>
          <div>北京北京（周慧 收）</div>
          <div>永定大庸桥 吉首大学张家界校区</div>
          <div>17343698034</div>
          <a href="#">修改</a>
        </li>
        <li>
          <div>北京北京（周慧 收）</div>
          <div>永定大庸桥 吉首大学张家界校区</div>
          <div>17343698034</div>
          <a href="#">修改</a>
        </li>
      </ul>
      <button style="margin-top: 10px;" data-toggle="modal" data-target="#myModal" class="btn btn-default btn-xs">使用新地址</button>
      <a href="#" class="h6 pull-right" style="margin-right: 8px;">管理收货地址</a>
    </div>
    <div style="width: 1170px;height: 25px;" class="nav5 container">
      <div class="h5" style="margin-top: 6px;">确认订单信息</div>
    </div>
    <div style="width: 1170px;" class="nav6 container">
      <table class="table h6">
        <tbody>
        <tr>
          <td>店铺宝贝</td>
          <td>商品属性</td>
          <td>单价</td>
          <td>数量</td>
          <td>优惠方式</td>
          <td>小计</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td style="width: 520px;">
            <img style="width: 50px;height: 50px;float:left;" :src="item.goods.image"/>
            <div style="width: 265px;float:left;">
              <span>{{item.goods.caption}}</span><br>
              <span>店铺:<a href="#">首鲜道旗舰店</a></span>
            </div>
          </td>
          <td>无</td>
          <td>{{item.goods.price_after}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.goods.activity}}</td>
          <td>{{item.goods.price_after * item.amount}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div style="width: 1170px;height: 180px;" class="nav7 container">
      <div style="width: 180px;float: right;margin-right: -30px;">
        <div style="margin-top: 20px;width: 180px;height: 20px;" class="h5">实付款：￥<span class="h4">{{sum_price}}</span></div>
        <input value="提交订单" style="width: 140px;height: 30px;background:#fb5757;color: white" class="h5 btn btn-sm" @click="submitOrder">
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">新增收货地址</h4>
          </div>
          <div class="modal-body">
            <div>
              <span>地址信息：</span>
              <select v-model="provinces" @change="findAllCitiesByProvincesId(provinces)">
                <option :value ="item.provinceid" v-for="item in provincesList">{{item.province}}</option>
              </select>
              <select v-model="cities" @change="findAllAreasByCitiesId(cities)">
                <option :value ="item.cityid" v-for="item in citiesList">{{item.city}}</option>
              </select>
              <select v-model="areas">
                <option :value ="item.areaid" v-for="item in areasList">{{item.area}}</option>
              </select>
            </div>
            <div>
              <span>详细地址：</span>
              <input type="text" v-model="content">
            </div>
            <div>
              <span>邮政编码：</span>
              <input type="text" v-model="zip_code">
            </div>
            <div>
              <span>收货人姓名：</span>
              <input type="text" v-model="name2">
            </div>
            <div>
              <span>手机号码：</span>
              <input type="text" v-model="phone2">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default btn-sm" @click="save">保存</button>
            <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    {{areas}}
  </div>
</template>

<script>
export default {
  name: 'SubmitOrder',
  data () {
    return {
      name: '',
      list: [],
      sum_price: 0,
      sum_amount: 0,
      orders: {},
      num: '' + Math.round(Math.random() * 8999999999 + 1000000000),
      provinces: '',
      provincesList: [],
      cities: '',
      citiesList: [],
      areas: '',
      areasList: [],
      content: '',
      zip_code: '',
      name2: '',
      phone2: '',
      address: {}
    }
  },
  methods: {
    findOrderList: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/order/findOrderList?user_name=' + this.name
      })
        .then(response => {
          console.log(response.data)
          this.list = response.data
          this.total()
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          console.log(error)
          alert('fail')
        })
    },
    total: function () {
      // eslint-disable-next-line no-unused-vars
      for (var i = 0, tota = 0, tots = 0; i < this.list.length; i++) {
        tota += this.list[i].amount * this.list[i].goods.price_after
        tots += this.list[i].amount
      }
      this.sum_price = tota
      this.sum_amount = tots
    },
    submitOrder: function () {
      // eslint-disable-next-line no-unused-expressions
      this.orders = {
        order_name: this.list[0].goods.name,
        user_name: this.name,
        order_num: this.num,
        total_price: this.sum_price,
        total_amount: this.sum_amount,
        introduction: this.list[0].goods.introduction
        // eslint-disable-next-line no-sequences
      },
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/alipay/pay',
        data: this.orders
      })
        .then(response => {
          console.log(response.data)
          const div = document.createElement('div')
          /* 此处form就是后台返回接收到的数据 */
          div.innerHTML = response.data
          document.body.appendChild(div)
          document.forms[0].submit()
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('提交失败')
        })
    },
    findAllProvinces: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/provinces/findAll'
      })
        .then(response => {
          this.provincesList = response.data
        })
    },
    findAllCitiesByProvincesId: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/cities/findAllByProvincesId?id=' + id
      })
        .then(response => {
          this.citiesList = response.data
        })
    },
    findAllAreasByCitiesId: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/areas/findAllByCitiesId?id=' + id
      })
        .then(response => {
          this.areasList = response.data
        })
    },
    save: function () {
      this.address = {
        provinces: parseInt(this.provinces),
        cities: parseInt(this.cities),
        areas: parseInt(this.areas),
        content: this.content,
        zip_code: this.zip_code,
        name2: this.name2,
        phone2: this.phone2
      }
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/address/add',
        data: this.address
      })
        .then(response => {
          alert('新增收货地址成功')
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          console.log(error)
          alert('新增收货地址失败')
        })
    },
    logout: function () {
      sessionStorage.removeItem('store')
    }
  },
  mounted () {
    this.name = this.$store.state.name
    this.findOrderList()
    this.findAllProvinces()
  }
}
</script>

<style scoped>
  .nav4 ul{
    margin-top: 20px;
  }
  .nav4 ul li{
    width: 200px;
    height: 80px;
    margin-right: 20px;
    padding: 8px 8px 20px 12px;
    border: 1px solid rgba(102, 102, 102, 0.15);
  }
  .nav4 ul li div{
    margin-bottom: 4px;
  }
  .modal-body div{
    margin: 20px 0 20px 0;
  }
  .modal-body div span{
    width: 94px;
    display: inline-block;
  }
  .modal-body div input{
    width: 360px;
  }
</style>
