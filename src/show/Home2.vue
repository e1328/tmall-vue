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
    <div style="width: 1170px;height: 130px;" class="nav2 container">
      <router-link to="/">
        <img src="../image/logo_home.png" alt="" style="width: 240px;height: 130px;">
      </router-link>
      <div style="width: 625px;height: 40px;">
        <input type="text" class="form-control pull-left" style="width: 491px;height: 38px;" placeholder="搜索 天猫 商品/品牌/店铺" v-model="key">
        <input type="button" class="form-control pull-right" style="width: 132px;height: 38px;background:#fd5757;color: white" value="搜索" @click="gotoSearchPage">
      </div>
    </div>
    <div style="height: 36px;width: 1170px;" class="nav3 container">
      <ul class="list-inline">
        <li>商品分类</li>
        <li>天猫超市</li>
        <li>天猫国际</li>
        <li>天猫会员</li>
        <li>电器城</li>
        <li>喵生鲜</li>
        <li>医药馆</li>
        <li>营业厅</li>
        <li>魅力惠</li>
        <li>飞猪旅行</li>
        <li>苏宁易购</li>
      </ul>
    </div>
    <div style="width: 100%;height: 2px;background: red;"></div>
    <div style="width: 100%;height: 502px;background:#e8e8e8;" class="nav4">
      <div style="width: 1170px;border: 1px solid rgba(153,153,153,0.2);box-sizing: border-box;margin: 0 auto">
        <div style="width: 190px;height: 500px;" class="nav4_div1" >
          <ul class="list-unstyled">
            <li><a href="#" class="text-muted">女装/内衣</a></li>
            <li><a href="#" class="text-muted">男装/运动户外</a></li>
            <li><a href="#" class="text-muted">女鞋/男鞋/箱包</a></li>
            <li><a href="#" class="text-muted">美妆/个人护理</a></li>
            <li><a href="#" class="text-muted">腕表/眼镜/珠宝饰品</a></li>
            <li><a href="#" class="text-muted">手机/数码/电脑办公</a></li>
            <li><a href="#" class="text-muted">母婴玩具</a></li>
            <li><a href="#" class="text-muted">零食/茶酒/进口食品</a></li>
            <li><a href="#" class="text-muted">生鲜水果</a></li>
            <li><a href="#" class="text-muted">大家电/生活电器</a></li>
            <li><a href="#" class="text-muted">家具建材</a></li>
            <li><a href="#" class="text-muted">汽车/配件/用品</a>></li>
            <li><a href="#" class="text-muted">家纺/家饰/鲜花</a></li>
            <li><a href="#" class="text-muted">医药保健</a></li>
            <li><a href="#" class="text-muted">厨具/收纳/宠物</a></li>
            <li><a href="#" class="text-muted">图书音像</a></li>
          </ul>
        </div>
        <div class="nav4_div2" style="width: 978px;height: 500px;">
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">女装新品</a>
                <a href="#">商场同款</a>
                <a href="#">仙女连衣裙</a>
              </li>
              <li>
                <a href="#">精选上装></a>
                <a href="#">毛呢外套</a>
                <a href="#">羽绒服</a>
                <a href="#">棉服</a>
                <a href="#">丝绒卫衣</a>
              </li>
              <li>浪漫裙装</li>
              <li>女士下装</li>
              <li>特色女装</li>
              <li>文胸塑身</li>
              <li>家居服</li>
              <li>内裤背心</li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
              <li>
                <a href="#">男士内搭></a>
              </li>
              <li>
                <a href="#">男士裤装></a>
              </li>
              <li>
                <a href="#">特色男装></a>
              </li>
              <li>
                <a href="#">运动鞋></a>
              </li>
              <li>
                <a href="#">运动服></a>
              </li>
              <li>
                <a href="#">户外鞋服></a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">推荐女鞋></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">潮流男鞋></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
              <li>
                <a href="#">女单鞋></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
              <li>
                <a href="#">特色鞋></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
              <li>
                <a href="#">潮流女包></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
              <li>
                <a href="#">精选男包></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
              <li>
                <a href="#">功能箱包></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li >
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
          <div style="width: 978px;height: 500px;background: white;display: none">
            <ul class="list-unstyled">
              <li>
                <a href="#">当季流行></a>
                <a href="#">当季新品</a>
                <a href="#">商场同款</a>
                <a href="#">印花T恤</a>
              </li>
              <li>
                <a href="#">男士外套></a>
                <a href="#">夹克</a>
                <a href="#">单西</a>
                <a href="#">棒球服</a>
                <a href="#">毛呢大衣</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav4_div3">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              <li data-target="#carousel-example-generic" data-slide-to="3"></li>
              <li data-target="#carousel-example-generic" data-slide-to="4"></li>
              <li data-target="#carousel-example-generic" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img :src="carousel1" alt="..." style="width: 1170px;height: 500px;">
              </div>
              <div class="item">
                <img :src="carousel2" alt="..." style="width: 1170px;height: 500px;">
              </div>
              <div class="item">
                <img :src="carousel3" alt="..." style="width: 1170px;height: 500px;">
              </div>
              <div class="item">
                <img :src="carousel4" alt="..." style="width: 1170px;height: 500px;">
              </div>
              <div class="item">
                <img :src="carousel5" alt="..." style="width: 1170px;height: 500px;">
              </div>
              <div class="item">
                <img :src="carousel6" alt="..." style="width: 1170px;height: 500px;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%;background:#f5f5f5;">
      <br>
      <div style="width: 1170px;height: 264px;background:#f5f5f5;border: 1px solid rgba(147,153,128,0.14);box-sizing: border-box;" class="container">
        <div style="height: 24px;margin: 10px 0">
          <span class="h4">商品抢购</span>&nbsp;&nbsp;&nbsp;
          <span class="h6">距结束00:15:05</span>
          <span class="h6 pull-right" style="margin: 6px 14px 0 0">更多</span>
          <span class="h6 pull-right btn btn-xs" style="position: relative;top: -8px;right: 6px;" @click="findSeckillGoodsList">换一批</span>
        </div>
        <table class="table table-bordered">
          <tbody>
          <tr>
            <td style="width: 380px;height: 180px;" v-for="(item, index) in seckillGoodsList" :key="index">
              <div style="width: 355px;height: 180px;">
                <div style="width: 180px;height: 180px;" class="pull-left">
                  <router-link :to="{path:'/Seckill',query: {id: item.seckill_id}}">
                    <img :src="item.image" alt="" style="width: 150px;height: 150px;position: relative;top: 14px;left: 10px;">
                  </router-link>
                </div>
                <div style="width: 175px;height: 180px;padding: 10px" class="pull-right">
                  <h5>{{item.name}}</h5>
                  <h6>{{item.caption}}</h6>
                  <div class="progress" style="height: 10px;">
                    <div class="progress-bar" :style="{width: ((item.amount-item.reserve)/item.amount*100).toFixed(0) + '%', background: '#fb5757'}"></div>
                  </div>
                  <h5><span class="h6">已抢%{{((item.amount-item.reserve)/item.amount*100).toFixed(0)}}</span>&nbsp;<span class="h6">剩余 <span class="h5">{{item.reserve}}</span> 件</span></h5>
                  <h5><span class="h4">￥{{item.price_after}}</span>&nbsp;<span class="h5" style="text-decoration: line-through">￥{{item.price_before}}</span></h5>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <br>
      <div style="width: 1170px;height: 665px;border: 1px solid rgba(153,153,153,0.15)" class="nav5 container">
        <h4>美丽人生</h4>
        <div>
          <img src="../image/美丽人生/head.jpg" alt="" style="width: 235px;height: 618px;" class="pull-left">
          <table class="table table-bordered pull-right" style="width: 900px;height: 618px;">
            <tbody>
            <tr>
              <td v-for="(item, index) in list1" :key="index">
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <router-link :to="{path:'/Detail',query:{id:item.goods_id}}"><img :src="item.image" alt=""></router-link>
                  <div style="padding: 10px;height: 100px;">
                    <h6>{{item.name}} {{item.caption}}</h6>
                    <h4>￥{{item.price_after}}</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td v-for="(item, index) in list2" :key="index">
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <router-link :to="{path:'/Detail',query:{id:item.goods_id}}"><img :src="item.image" alt=""></router-link>
                  <div style="padding: 10px;height: 100px;">
                    <h6>{{item.name}} {{item.caption}}</h6>
                    <h4>￥{{item.price_after}}</h4>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <div style="width: 1170px;height: 665px;border: 1px solid rgba(153,153,153,0.15)" class="nav6 container">
        <h4>潮电酷玩</h4>
        <div>
          <img src="../image/潮电酷玩/head.jpg" alt="" style="width: 235px;height: 618px;" class="pull-left">
          <table class="table table-bordered pull-right" style="width: 900px;height: 618px;">
            <tbody>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/潮电酷玩/image1.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>Dibea/地贝扫地机器人充电器 非通用型号 下单时请联系客服备注</h6>
                    <h4>￥70</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/潮电酷玩/image2.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>秋叶原 QD6328 Type-C转VGA高清转换器 苹果新MacBook转VGA转接线支持USB-C口接投影仪显示器</h6>
                    <h4>￥99</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/潮电酷玩/image3.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>万利达小孩k歌唱歌宝宝话筒儿童麦克风3-6岁可充电无线蓝牙卡拉ok</h6>
                    <h4>￥78</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/潮电酷玩/image4.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>HP/惠普 H160G电脑耳机头戴式台式笔记本电竞游戏耳麦绝地求生吃鸡cf网吧带麦有线带话筒重低音耳机</h6>
                    <h4>￥129</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/潮电酷玩/image5.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>智能电话手表手机wifi多功能安卓插卡防水成人男孩女中小学生儿童上网初中生成年4G全网通定位</h6>
                    <h4>￥258</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/潮电酷玩/image6.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>飞利浦挂烫机家用蒸汽烫衣机大功率手持熨衣机烫斗GC509立式双杆</h6>
                    <h4>￥319</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/潮电酷玩/image7.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>BenQ明基母婴空气净化器复合滤网</h6>
                    <h4>￥99</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/潮电酷玩/image8.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>PANDA/熊猫 F-360 双面复读机便携磁带录音学习英语卡座卡带播放</h6>
                    <h4>￥75</h4>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <div style="width: 1170px;height: 665px;border: 1px solid rgba(153,153,153,0.15)" class="nav7 container">
        <h4>居家生活</h4>
        <div>
          <img src="../image/居家生活/head.jpg" alt="" style="width: 235px;height: 618px;" class="pull-left">
          <table class="table table-bordered pull-right" style="width: 900px;height: 618px;">
            <tbody>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/居家生活/image1.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>不锈钢菠萝去籽刀 菠萝去眼夹  菠萝夹  菠萝夹子</h6>
                    <h4>￥12</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/居家生活/image2.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>南方黑芝麻糊原味360g/袋营养早餐小包装小袋装包邮南方黑芝麻</h6>
                    <h4>￥15.9</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/居家生活/image3.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>子初葫芦头棉签一次性婴儿 儿童掏耳棉签新生儿宝宝专用棉签三盒</h6>
                    <h4>￥25.9</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/居家生活/image4.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>日式创意不锈钢便携式餐具盒三件套装学生可爱筷子盒长柄勺子叉子</h6>
                    <h4>￥5.1</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/居家生活/image5.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>宝家洁魔力速洁胶棉拖把头替换装绵头对折式海绵吸水拖把配件</h6>
                    <h4>￥10</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/居家生活/image6.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>康师傅3+2苏打夹心饼干375g代餐饼干零食品香草奶油夹心饼干</h6>
                    <h4>￥16.8</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/居家生活/image7.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>新品海南特产 春光椰奶杂粮红豆/原味 525g营养早餐</h6>
                    <h4>￥29.9</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/居家生活/image8.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>得力办公用品6893双头油性记号笔勾线笔马克笔一头粗一头细</h6>
                    <h4>￥2.5</h4>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <div style="width: 1170px;height: 665px;border: 1px solid rgba(153,153,153,0.15)" class="nav8 container">
        <h4>打造爱巢</h4>
        <div>
          <img src="../image/打造爱巢/head.jpg" alt="" style="width: 235px;height: 618px;" class="pull-left">
          <table class="table table-bordered pull-right" style="width: 900px;height: 618px;">
            <tbody>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/打造爱巢/image1.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>Joyoung/九阳 JYK-17C15电热水壶家用烧水壶器304不锈钢自动断电</h6>
                    <h4>￥69</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/打造爱巢/image2.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>荣事达电动绞肉机配件 可适合RS-JR08A/05A/06A/03A/09A切丝切片</h6>
                    <h4>￥50</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/打造爱巢/image3.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>星星（XINGX）501升双温立式冰柜 冷冻冷藏点菜柜 冷柜 LCD-500Y</h6>
                    <h4>￥2999</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/打造爱巢/image4.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>海尔 施特劳斯HSNF-300B2纳滤机专用SNF纳滤膜滤芯（4级）</h6>
                    <h4>￥380</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/打造爱巢/image5.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>飞利浦电饭煲锅家用多功能智能电饭锅24小时预约定时HD4514 3-5人</h6>
                    <h4>￥269</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/打造爱巢/image6.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>天际ZZG-20CZ白瓷全自动煮粥宝煲汤锅电炖盅陶瓷迷你BB煲预约定时</h6>
                    <h4>￥198</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/打造爱巢/image7.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>利仁电饼铛家用双面加热新款加深加大口径全自动断电大饼锅烙饼锅</h6>
                    <h4>￥299</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/打造爱巢/image8.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>小熊绞肉机家用电动全自动搅拌机小型打碎肉馅饺子蒜泥器菜料理机</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <div style="width: 1170px;height: 665px;border: 1px solid rgba(153,153,153,0.15)" class="nav9 container">
        <h4>户外出行</h4>
        <div>
          <img src="../image/户外出行/head.jpg" alt="" style="width: 235px;height: 618px;" class="pull-left">
          <table class="table table-bordered pull-right" style="width: 900px;height: 618px;">
            <tbody>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/户外出行/image1.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>探路者T恤 19春夏新款男式户外透气速干运动圆领短袖TAJH81927</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/户外出行/image2.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>Adidas NEO/阿迪休闲 包 BP DAILY 运动休闲 CF6858</h6>
                    <h4>￥120</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/户外出行/image3.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>李宁运动鞋男板鞋休闲鞋2019春季防滑减震耐磨时尚运动生活跑步男</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/户外出行/image4.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>花花公子户外夏季新款女式休闲鞋运动沙滩鞋魔术贴布带按摩凉鞋</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/户外出行/image5.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>信达 SKY-WATCHER 太阳滤光片 巴德膜 150mm口径镜头盖式巴德膜</h6>
                    <h4>￥280</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/户外出行/image6.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>本汀夏季户外防蚊服钓鱼防晒服男夏速干透气超薄连帽垂钓服外套</h6>
                    <h4>￥199.9</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/户外出行/image7.png" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>Bosma博冠鹭双筒望远镜 高清高倍 微光夜视 演唱会旅行一万米</h6>
                    <h4>￥299</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/户外出行/image8.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>稻草人户外 羽绒衣防水保暖男季加厚款外套冲锋衣羽绒服内胆登山</h6>
                    <h4>￥329.8</h4>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br>
      <div style="width: 1170px;height: 1300px;border: 1px solid rgba(153,153,153,0.15)" class="nav9 container">
        <h4 class="text-center">猜你喜欢</h4>
        <div>
          <table class="table table-bordered pull-right" style="width: 1125px;height: 618px;">
            <tbody>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image1.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>探路者T恤 19春夏新款男式户外透气速干运动圆领短袖TAJH81927</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image2.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>Adidas NEO/阿迪休闲 包 BP DAILY 运动休闲 CF6858</h6>
                    <h4>￥120</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image3.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>李宁运动鞋男板鞋休闲鞋2019春季防滑减震耐磨时尚运动生活跑步男</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image4.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>花花公子户外夏季新款女式休闲鞋运动沙滩鞋魔术贴布带按摩凉鞋</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image5.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>花花公子户外夏季新款女式休闲鞋运动沙滩鞋魔术贴布带按摩凉鞋</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image6.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>信达 SKY-WATCHER 太阳滤光片 巴德膜 150mm口径镜头盖式巴德膜</h6>
                    <h4>￥280</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image7.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>本汀夏季户外防蚊服钓鱼防晒服男夏速干透气超薄连帽垂钓服外套</h6>
                    <h4>￥199.9</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image8.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>Bosma博冠鹭双筒望远镜 高清高倍 微光夜视 演唱会旅行一万米</h6>
                    <h4>￥299</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image9.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>稻草人户外 羽绒衣防水保暖男季加厚款外套冲锋衣羽绒服内胆登山</h6>
                    <h4>￥329.8</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image10.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>花花公子户外夏季新款女式休闲鞋运动沙滩鞋魔术贴布带按摩凉鞋</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image11.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>信达 SKY-WATCHER 太阳滤光片 巴德膜 150mm口径镜头盖式巴德膜</h6>
                    <h4>￥280</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image12.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>本汀夏季户外防蚊服钓鱼防晒服男夏速干透气超薄连帽垂钓服外套</h6>
                    <h4>￥199.9</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image13.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>Bosma博冠鹭双筒望远镜 高清高倍 微光夜视 演唱会旅行一万米</h6>
                    <h4>￥299</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image14.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>稻草人户外 羽绒衣防水保暖男季加厚款外套冲锋衣羽绒服内胆登山</h6>
                    <h4>￥329.8</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image15.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>花花公子户外夏季新款女式休闲鞋运动沙滩鞋魔术贴布带按摩凉鞋</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image16.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>信达 SKY-WATCHER 太阳滤光片 巴德膜 150mm口径镜头盖式巴德膜</h6>
                    <h4>￥280</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image17.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>本汀夏季户外防蚊服钓鱼防晒服男夏速干透气超薄连帽垂钓服外套</h6>
                    <h4>￥199.9</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image18.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>Bosma博冠鹭双筒望远镜 高清高倍 微光夜视 演唱会旅行一万米</h6>
                    <h4>￥299</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image19.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>稻草人户外 羽绒衣防水保暖男季加厚款外套冲锋衣羽绒服内胆登山</h6>
                    <h4>￥329.8</h4>
                  </div>
                </div>
              </td>
              <td>
                <div style="width: 185px;height: 280px;margin: 8px 0 0 10px;background: white;">
                  <img src="../image/猜你喜欢/image20.jpg" alt="">
                  <div style="padding: 10px;height: 100px;">
                    <h6>花花公子户外夏季新款女式休闲鞋运动沙滩鞋魔术贴布带按摩凉鞋</h6>
                    <h4>￥89</h4>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style="width: 1170px;height: 60px;" class="container">
        <h3 class="text-center">END</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      carouselList: [],
      carousel1: '',
      carousel2: '',
      carousel3: '',
      carousel4: '',
      carousel5: '',
      carousel6: '',
      name: '',
      list1: [],
      list2: [],
      key: '',
      seckillGoodsList: []
    }
  },
  methods: {
    // eslint-disable-next-line camelcase
    findByAdType: function (type_id) {
      this.axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: 'http://localhost:9103/ad_contents/type/' + type_id
      })
        .then(response => {
          console.log(response.data)
          this.carouselList = response.data
          this.carousel1 = this.carouselList[0].pic
          this.carousel2 = this.carouselList[1].pic
          this.carousel3 = this.carouselList[2].pic
          this.carousel4 = this.carouselList[3].pic
          this.carousel5 = this.carouselList[4].pic
          this.carousel6 = this.carouselList[5].pic
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          // alert('出错')
        })
    },
    findPage1: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/goods/0/4'
      })
        .then(response => {
          this.list1 = response.data.rows
        })
    },
    findPage2: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/goods/1/4'
      })
        .then(response => {
          this.list2 = response.data.rows
        })
    },
    findSeckillGoodsList: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:9103/seckill/findList'
      })
        .then(response => {
          this.seckillGoodsList = response.data
        })
    },
    // eslint-disable-next-line camelcase
    gotoDetailPage (goods_id) {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'Detail', query: { id: goods_id }})
    },
    gotoSearchPage () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'Search', query: { id: this.key }})
    },
    logout: function () {
      localStorage.removeItem('store')
    }
  },
  mounted () {
    this.findByAdType(1)
    this.findPage1()
    this.findPage2()
    this.findSeckillGoodsList()
    this.name = this.$store.state.name
  }
}
$(function () {
  $('.nav4_div2 div').hide()
  $('.nav4_div1 ul li').hover(function () {
    // $('.nav4_div2').css('z-index', 100)
    $(this).toggleClass('color')
    $('.nav4_div2').find('div').eq($(this).index()).show()
  }, function () {
    // $('.nav4_div2').css('z-index', 99)
    $(this).toggleClass('color')
    $('.nav4_div2').find('div').eq($(this).index()).hide()
  })
  $('.nav4_div2 div').hover(function () {
    $(this).show()
    $('.nav4_div1 ul li').eq($(this).index()).toggleClass('color')
  }, function () {
    $(this).hide()
    $('.nav4_div1 ul li').eq($(this).index()).toggleClass('color')
  })
})
</script>

<style scoped>
  .color{
    background: white;
  }
  .nav2{
    position: relative;
  }
  .nav2 img{
    position: absolute;
    left: -20px;
  }
  .nav2 div{
    position: absolute;
    right: 272px;
    top: 40px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }
  .nav3{
    position: relative;
    left: -10px;
  }
  .nav3 ul li{
    line-height: 36px;
    width: 66px;
  }
  .nav3 ul li:nth-child(1){
    width: 191px;
    padding-left: 30px;
    background: #fd5757;
    color: white;
  }
  .nav4>div{
    position: relative;
  }
  .nav4 ul li{
    width: 190px;
    height: 31.2px;
    line-height: 31.2px;
    padding-left: 30px;
  }
  .nav4 .nav4_div1{
    position: absolute;
    z-index: 100;
    left: 0px;
  }
  .nav4 .nav4_div2{
    position: absolute;
    z-index: 100;
    right: 0px;
  }
  .nav4 .nav4_div3{
    position: absolute;
    z-index: 99;
    right: 0px;
  }
  .nav4 .nav4_div2 ul li{
    width: 978px;
    height: 62.5px;
    line-height: 62.5px;
  }
  .nav5 table tr td{
    width: 255px;
    height: 309px;
  }
  .nav5 table tr td img{
    width: 170px;
    height: 170px;
    position: relative;
    left: 7px;
    top: 8px;
  }
  .nav6 table tr td{
    width: 255px;
    height: 309px;
  }
  .nav6 table tr td img{
    width: 170px;
    height: 170px;
    position: relative;
    left: 7px;
    top: 8px;
  }
  .nav7 table tr td{
    width: 255px;
    height: 309px;
  }
  .nav7 table tr td img{
    width: 170px;
    height: 170px;
    position: relative;
    left: 7px;
    top: 8px;
  }
  .nav8 table tr td{
    width: 255px;
    height: 309px;
  }
  .nav8 table tr td img{
    width: 170px;
    height: 170px;
    position: relative;
    left: 7px;
    top: 8px;
  }
  .nav9 table tr td{
    width: 255px;
    height: 309px;
  }
  .nav9 table tr td img{
    width: 170px;
    height: 170px;
    position: relative;
    left: 7px;
    top: 8px;
  }
  .nav10 table tr td{
    width: 255px;
    height: 309px;
  }
  .nav10 table tr td img{
    width: 170px;
    height: 170px;
    position: relative;
    left: 7px;
    top: 8px;
  }
  .carousel-control.left {
    background-image:none;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  }
  .carousel-control.right {
    left: auto; right: 0;
    background-image:none;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  }
</style>
