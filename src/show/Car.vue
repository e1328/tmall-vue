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
    <div style="width: 1170px;height: 50px;margin: 0 auto" class="nav4">
      <ul class="h6">
        <li style="width: 80px;margin-left: -32px;"><input type="checkbox" style="margin-left: 6px;">全选</li>
        <li style="width: 251px;margin-left: 20px;">商品信息</li>
        <li style="width: 110px;margin-left: 300px;">单价</li>
        <li style="width: 120px;margin-left: 20px;">数量</li>
        <li style="width: 120px;margin-left: 10px;">金额</li>
        <li style="width: 119px;margin-left: 12px;">操作</li>
      </ul>
    </div>
    <div style="width: 1170px;margin: 0 auto" class="nav5">
      <table class="table table-bordered h6">
        <tbody>
        <tr style="width: 1170px;height: 130px;" v-for="(item, index) in list" :key="index">
          <td style="width: 392px;">
            <div style="height: 82px;margin-top: 16px;margin-left: 6px;">
              <input type="checkbox" @click="updateSelection($event, item.car_id, index)">
              <img :src="item.goods.image" alt="" style="width: 80px;height: 80px;">
              <div style="width: 226px;height: 36px;position: relative;left: 100px;top: -60px;">
                {{item.goods.name}}
              </div>
            </div>
          </td>
          <td style="width: 252px;">
            <div style="height: 18px;margin-top: 50px;">{{item.goods.caption}}</div>
          </td>
          <td style="width: 130px;">
            <div style="height: 18px;margin-top: 50px;">￥{{item.goods.price_after}}</div>
          </td>
          <td style="width: 120px;">
            <div style="height: 24px;margin-top: 50px;">
              <input type="button" style="width: 20px;background:#efefef;border: 1px solid #999" value="-" @click="cut(index,item.car_id)">
              <input type="text" style="width: 30px;text-align: center" :value="item.amount">
              <input type="button" style="width: 20px;background:#efefef;border: 1px solid #999" value="+" @click="add(index,item.car_id)">
            </div>
          </td>
          <td style="width: 140px;">
            <div style="height: 18px;margin-top: 50px;">￥{{item.goods.price_after * item.amount}}</div>
          </td>
          <td style="width: 120px;">
            <div style="height: 36px;margin-top: 42px;">
              <div style="height: 26px;"><a href="#">移入收藏夹</a></div>
              <div style="height: 18px;"><a href="#" @click="delOne(item.car_id)">删除</a></div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div style="height: 200px;">
      <div style="width: 1170px;height: 50px;background:#e4e4e4;" class="nav6 container">
        <div style="height: 32px;position: relative;top: 10px;">
          <ul class="list-inline pull-left">
            <li><input type="checkbox"></li>
            <li class="h6"><a href="#">全选</a></li>
            <li class="h6"><a href="#" @click="del">删除</a></li>
            <li class="h6"><a href="#">移入收藏夹</a></li>
            <li class="h6"><a href="#">分享</a></li>
          </ul>
          <ul class="list-inline h6 pull-right">
            <li>已选商品{{selectIds.length}}件</li>
            <li>合计（不含运费）：</li>
            <li>{{sum}}</li>
            <li style="margin-top: -10px;"><button class="btn btn-sm" @click="account">结算</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Car',
  data () {
    return {
      name: '',
      sum: 0,
      list: [],
      selectIds: []
    }
  },
  methods: {
    findCarList: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/car/findCarList?user_name=' + this.name
      })
        .then(response => {
          console.log(response.data)
          this.list = response.data
          this.total()
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('失败')
        })
    },
    add: function (index, id) {
      this.list[index].amount++
      this.total()
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/car/add?car_id=' + id
      })
    },
    cut: function (index, id) {
      this.list[index].amount--
      this.total()
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/car/cut?car_id=' + id
      })
        .then(response => {
          console.log(response)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    total: function () {
      for (var i = 0, tota = 0; i < this.list.length; i++) {
        tota += this.list[i].amount * this.list[i].goods.price_after
      }
      this.sum = tota
    },
    // eslint-disable-next-line camelcase
    updateSelection: function ($event, id, index1) {
      if ($event.target.checked) {
        this.selectIds.push(id)
        this.list[index1].is_click *= -1
        this.updateIsClick(id)
      } else {
        var index = this.selectIds.indexOf(id)
        this.selectIds.splice(index, 1)
        this.list[index1].is_click *= -1
        this.updateIsClick(id)
      }
    },
    delOne: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/car/deleteOne?car_id=' + id
      })
        .then(response => {
          this.findCarList()
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('删除失败')
        })
    },
    del: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/car/delete?car_ids=' + this.selectIds
      })
        .then(response => {
          // eslint-disable-next-line no-undef
          $('input:checkbox').prop('checked', false)
          this.selectIds = []
          this.findCarList()
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('删除失败')
        })
    },
    // eslint-disable-next-line camelcase
    updateIsClick: function (car_id) {
      this.axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: 'http://localhost:8080/car/updateIsClick?car_id=' + car_id
      })
    },
    test: function () {
      alert('ok')
    },
    // eslint-disable-next-line camelcase
    account: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/order/addGoodsToOrderList?user_name=' + this.name
      })
      this.$router.push({ path: '/SubmitOrder' })
    },
    logout: function () {
      sessionStorage.removeItem('store')
    }
  },
  mounted () {
    this.name = this.$store.state.name
    this.findCarList()
  }
}
</script>

<style scoped>
  .nav4 ul{
    list-style: none;
  }
  .nav4 ul li{
    float: left;
    height: 50px;
    line-height: 50px;
  }
  .nav5 table tr td{
    height: 130px;
  }
</style>
