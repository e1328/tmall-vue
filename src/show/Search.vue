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
    <div style="width: 1170px;height: 92px;" class="nav2 container">
      <router-link to="/">
        <img src="../image/logo_search.png" alt="" style="width: 190px;height: 28px;margin-left: 14px;">
      </router-link>
      <div style="width: 599px;height: 36px;border: 1px solid rgba(102,102,102,0.3);box-sizing: border-box" class="bg-warning">
        <input type="text" class="pull-left" style="width: 504px;height: 35px;">
        <input type="button" class="pull-right btn btn-default" style="width: 93px;height: 35px;" value="搜 索">
      </div>
    </div>
    <div style="width: 1170px;height: 1px;background:#d0cbc6;" class="container"></div>
    <br>
    <div style="width: 1170px;height: 30px;line-height: 30px;border: 1px solid #d0cbc6;box-sizing: border-box" class="nav3 container">
      <div style="width: 100px;height: 28px;background:#f6f4f4;margin-left: -15px;padding-left: 10px;" class="pull-left">品牌</div>
      <ul class="list-inline pull-left">
        <li>富光</li>
        <li>天喜</li>
        <li>星巴克</li>
      </ul>
    </div>
    <br>
    <div style="width: 1170px;height: 24px;background:#f7f5f5;border: 1px solid #d0cbc6;box-sizing: border-box" class="nav4 container">
      <ul class="list-inline h6" style="margin-top: 5px;">
        <li><a href="#" class="h6">综合</a></li>
        <li><a href="#" class="h6">人气</a></li>
        <li><a href="#" class="h6">新品</a></li>
        <li><a href="#" class="h6">销量</a></li>
        <li><a href="#" class="h6">价格</a></li>
        <li><a href="#" class="h6">店铺</a></li>
      </ul>
    </div>
    <br>
    <div style="width: 1170px;margin: 0 auto" class="nav5">
      <div class="container" style="border: 1px solid rgba(153,153,153,0.31)">
        <ul class="list-inline">
          <li v-for="(item, index) in list" :key="index">
            <div style="width: 185px;height: 300px;margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
              <a @click="gotoDetailPage(item.goods_id)"><img :src="item.image" alt="" style="width: 150px;height: 150px;margin: 10px 0 0 7px;"></a>
              <div style="padding: 10px;height: 100px;">
                <span class="h4">￥{{item.price_after}}</span><br>
                <span class="h6">{{item.name}} {{item.caption}}</span><br>
                <a href="#"><span class="h6">富光辉睿专卖店</span></a><br>
                <span class="h6">月成交{{item.sale}}笔</span> <span class="h6">评价{{item.comment}}</span>
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
  name: 'Search',
  data () {
    return {
      mymap: {'key': this.$route.query.id},
      name: '',
      list: []
    }
  },
  methods: {
    find: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/goodssearch/search',
        data: this.mymap
      })
        .then(response => {
          this.list = response.data.rows
          console.log(this.list)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('出错')
          console.log(error)
        })
    },
    // eslint-disable-next-line camelcase
    gotoDetailPage (goods_id) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'Detail', query: { id: goods_id }})
    },
    logout: function () {
      sessionStorage.removeItem('store')
    }
  },
  mounted () {
    this.name = this.$store.state.name
    // this.find(this.$route.query.id)
    this.find()
  }
}
</script>

<style scoped>
  .nav2{
    position: relative;
  }
  .nav2 img{
    position: absolute;
    left: 0px;
    top: 30px;
  }
  .nav2 div{
    position: absolute;
    top: 30px;
    right: 285px;
  }
  .nav3 ul li{
    margin-left: 16px;
  }
  .nav5 ul li{
    margin: 8px 0 10px 17px;
  }
  .nav6 ul li{
    background: #EFEFEF;
  }
</style>
