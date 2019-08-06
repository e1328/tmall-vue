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
      <router-link to="/"><img src="../image/logo_show.png" alt="" style="width: 145px;height: 30px;margin-left: 10px;"></router-link>
      <div style="width: 535px;height: 34px;" class="bg-danger">
        <input type="text" style="width: 375px;height: 34px;" placeholder="搜索 天猫 商品/品牌/店铺">
        <input type="button" style="width: 80px;height: 34px;text-align: center" class="btn btn-default" value="搜天猫">
        <input type="button" style="width: 80px;height: 34px;text-align: center" class="btn btn-default" value="搜本店">
      </div>
      <div style="width: 110px;height: 50px;position: relative;left: 180px;top: 20px;border: 1px solid rgba(102,102,102,0.3)">
        <div style="height: 25px;" class="h6">良品铺子旗舰店</div>
        <div style="height: 25px;margin-top: -15px;" class="h6"><router-link to="/Shop">进店逛逛</router-link> <a href="#">关注店铺</a></div>
      </div>
    </div>
    <div style="width: 1170px;height: 560px;margin: 0 auto;border: 1px solid rgba(153,153,153,0.11);box-sizing: border-box" class="nav3">
      <div style="width: 418px;height: 560px;margin-top: 40px;" class="pull-left">
        <img :src="goods.image" alt="" style="width: 350px;height: 350px;border: 1px solid rgba(102,102,102,0.1)">
        <ul class="list-inline pull-left h6" style="margin-top: 71px;margin-left: 10px;">
          <li>分享</li>
          <li>收藏商品（441887人气）</li>
          <li>举报</li>
        </ul>
      </div>
      <div style="width: 590px;height: 560px;margin-top: 40px;padding-left: 20px;" class="pull-left nav3_div2">
        <div style="width: 550px;height: 50px;">
          <h4>{{goods.name}}</h4>
          <h5>{{goods.caption}}</h5>
        </div>
        <div style="width: 550px;height: 96px;background:#f0efef;position: relative;top: 4px;padding-left: 10px;" class="">
          <div style="height: 25px;line-height: 25px;" class="h6"><count-down v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)" :currentTime="new Date().getTime()" :startTime="goods.start_time" :endTime="goods.end_time" :tipText="'距离抢购开始还有'" :tipTextEnd="'距离抢购结束还有'" :endText="'抢购已结束'" :dayTxt="'天'" :hourTxt="'小时'" :minutesTxt="'分钟'" :secondsTxt="'秒'"></count-down></div>
          <div style="height: 25px;line-height: 25px;" class="h6">原价：￥{{goods.price_before}}</div>
          <div style="height: 25px;line-height: 25px;" class="h6">秒杀价：{{goods.price_after}}</div>
        </div>
        <div style="width: 550px;height: 38px;line-height: 38px;position: relative;top: 4px;" class="h6">
          运费 快递: 0.00
        </div>
        <div>
          <ul class="list-inline h6">
            <li>月销量{{goods.sale}}</li>
            <li>累计评价{{goods.comment}}</li>
            <li>送天猫积分{{goods.score}}</li>
          </ul>
        </div>
        <div style="width: 550px;height: 40px;position: relative;top: 20px;" class="h5">
          <input type="button" value="立即抢购" style="width: 150px;height: 35px;background:#fb5757;color: #fff;" class="btn btn-default" @click="submitOrder(goods.seckill_id, name)">
        </div>
        <ul class="list-inline h6" style="margin-top: 77px">
          <li>服务承诺</li>
          <li>赠保价险</li>
          <li>破损包退</li>
          <li>正品保证</li>
          <li>极速退款</li>
          <li>七天无理由退换</li>
        </ul>
      </div>
    </div>
    <div style="width: 1170px;margin: 20px auto;clear: both;">
      <div class="container" style="height: 34px;line-height: 34px;background:#ececec;">
        <div style="width: 100px;height: 100%;float:left;"><span class="h6">评价</span></div>
        <div style="width: 160px;height: 100%;float:left;"><span class="h6">评价人</span></div>
        <div style="width: 380px;height: 100%;float:left;"><span class="h6">评价内容</span></div>
        <div style="width: 300px;height: 100%;float:left;"><span class="h6">卖家回复</span></div>
        <div style="width: 200px;height: 100%;float:left;"><span class="h6">评价时间</span></div>
      </div>
      <div class="container" style="height: 50px;line-height: 50px;border: 1px solid rgba(102,102,102,0.17)">
        <div style="width: 100px;height: 100%;float:left;"><span class="h6">好评</span></div>
        <div style="width: 160px;height: 100%;float:left;"><span class="h6">张三</span></div>
        <div style="width: 370px;height: 100%;float:left;"><span class="h6">商品真的很不错</span></div>
        <div style="width: 300px;height: 100%;float:left;"><span class="h6">谢谢亲的支持</span></div>
        <div style="width: 200px;height: 100%;float:left;"><span class="h6">2019年6月8日</span></div>
      </div>
      <div class="container" style="height: 50px;line-height: 50px;border: 1px solid rgba(102,102,102,0.17)">
        <div style="width: 100px;height: 100%;float:left;"><span class="h6">好评</span></div>
        <div style="width: 160px;height: 100%;float:left;"><span class="h6">李四</span></div>
        <div style="width: 370px;height: 100%;float:left;"><span class="h6">商品真的很不错</span></div>
        <div style="width: 300px;height: 100%;float:left;"><span class="h6">谢谢亲的支持</span></div>
        <div style="width: 200px;height: 100%;float:left;"><span class="h6">2019年6月7日</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import CountDown from 'vue2-countdown'
export default {
  name: 'Detail',
  components: {
    CountDown
  },
  data () {
    return {
      name: '',
      amount: 1,
      goods: {}
    }
  },
  methods: {
    // eslint-disable-next-line camelcase
    findOneFromRedis: function (goods_id) {
      this.axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: 'http://localhost:8080/seckill/findOneFromRedis?id=' + goods_id
      })
        .then(response => {
          this.goods = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('出错')
        })
    },
    // eslint-disable-next-line camelcase
    addGoodsToCarList: function (goods_id, amount) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/car/addGoodsToCarList',
        params: {
          goods_id: goods_id,
          amount: amount,
          user_name: this.name
        }
      })
        .then(response => {
          alert('添加购物车成功')
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('添加购物车失败')
        })
    },
    // eslint-disable-next-line camelcase
    submitOrder: function (id, user_name) {
      if (this.name == null) {
        alert('请先登录')
        return false
      }
      this.axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: 'http://localhost:8080/seckill/submitOrder?id=' + id + '&user_name=' + user_name
      })
        .then(response => {
          if (response.data.success) {
            this.axios({
              method: 'get',
              url: 'http://localhost:8080/alipay/pay3?user_name=' + this.name
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
          }
        })
    },
    add: function () {
      this.amount = this.amount + 1
    },
    del: function () {
      this.amount = this.amount - 1
    },
    countDownS_cb: function (x) {
      console.log(x)
    },
    countDownE_cb: function (x) {
      console.log(x)
    },
    logout: function () {
      sessionStorage.removeItem('store')
    }
  },
  mounted () {
    this.findOneFromRedis(this.$route.query.id)
    this.name = this.$store.state.name
  }
}
$(function () {
  $('#detail').click(function () {
    $('.nav4_div2').show()
    $('.nav4_div3').hide()
  })
  $('#comment').click(function () {
    $('.nav4_div3').show()
    $('.nav4_div2').hide()
  })
})
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
  .nav3 img{
    float: left;
  }
  .nav3 .nav3_div3 ul li{
    border: 1px solid rgba(153, 153, 153, 0.2);
    margin-bottom: 10px;
  }
  .nav4{
    position: relative;
  }
  .nav4 .nav4_div1{
    position: absolute;
    top: -10px;
    right: 183px;
  }
  .nav4 .nav4_div2{
    position: absolute;
    top: 50px;
  }
  .nav4 .nav4_div3{
    position: absolute;
    top: 50px;
  }
  .nav4 .nav4_div3 ul li{
    height: 80px;
    width: 1170px;
    border-bottom: 1px solid rgba(102, 102, 102, 0.21);
  }
</style>
