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
          <li><router-link to=""><span>全部功能</span></router-link></li>
          <li><router-link to=""><span>商家信息</span></router-link></li>
          <li><router-link to=""><span>我的店铺</span></router-link></li>
          <li><router-link to=""><span>所有订单</span></router-link></li>
          <li><router-link to=""><span>待发货</span></router-link></li>
          <li><router-link to=""><span>已发货</span></router-link></li>
          <li><router-link to=""><span>评价管理</span></router-link></li>
        </ul>
      </div>
      <div style="width: 1020px;float:left;" class="container nav3_div2">
        <div class="all" style="margin-top: 20px;display: none;">
          <div style="width: 726px;height: 126px;border: 1px solid rgba(102,102,102,0.16)">
            <div style="height: 70px;background:#f5f8fa;line-height: 70px;">
              <img src="https://wwc.alicdn.com/avatar/getAvatar.do?userId=3347030377&width=80&height=80&type=sns" alt="" style="width: 52px;margin-left: 12px;" class="img-circle">
              <span class="h6" style="margin-left: 16px;">wenlongzhou(周文龙)</span>
              <span class="h6" style="margin-left: 10px;">哈哈</span>
              <span class="h6" style="margin-left: 10px;">男</span>
              <span class="h6" style="margin-left: 10px;">1999年11月22日</span>
              <span class="h6" style="margin-left: 10px;">湖南省张家界市永定区大庸桥街道</span>
            </div>
            <div style="height: 56px;line-height: 56px;">
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">待发货<span style="color: #f40">1</span></span>
              </div>
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">已发货<span style="color: #f40">2</span></span>
              </div>
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">待确认<span style="color: #f40">3</span></span>
              </div>
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">管理的店铺<span style="color: #f40">4</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="info" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none;">
          <span class="h6">商家：周文龙（17343698034）</span><br><br>
          <table>
            <tr style="height: 160px;">
              <td>
                <span class="h6" style="position: relative;top: -74px">当前头像：</span>
              </td>
              <td>
                <img src="https://wwc.alicdn.com/avatar/getAvatar.do?userId=3347030377&width=80&height=80&type=sns" alt="" style="width: 80px;height: 80px;border: 1px solid rgba(102,102,102,0.35)">
                <input type="file" class="h6">
                <input type="button" value="上传" class="h6">
              </td>
            </tr>
            <tr style="height: 40px;">
              <td>
                <span class="h6">昵称：</span>
              </td>
              <td>
                <input type="text">
              </td>
            </tr>
            <tr style="height: 40px;">
              <td>
                <span class="h6">真实姓名：</span>
              </td>
              <td>
                <input type="text">
              </td>
            </tr>
            <tr style="height: 40px;">
              <td>
                <span class="h6">性别</span>
              </td>
              <td>
                <input type="radio"><span class="h6">男</span>&nbsp;
                <input type="radio"><span class="h6">女</span>
              </td>
            </tr>
            <tr style="height: 40px;">
              <td>
                <span class="h6">生日</span>
              </td>
              <td>
                <select name="" id="">
                  <option value="">年</option>
                  <option value="">1990</option>
                  <option value="">1991</option>
                  <option value="">1992</option>
                  <option value="">1993</option>
                  <option value="">1994</option>
                </select>
                <select name="" id="">
                  <option value="">月</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                </select>
                <select name="" id="">
                  <option value="">日</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </td>
            </tr>
            <tr style="height: 40px;">
              <td>
                <span class="h6">居住地</span>
              </td>
              <td>
                <select name="" id="">
                  <option value="">北京</option>
                  <option value="">天津</option>
                  <option value="">河北省</option>
                  <option value="">山西省</option>
                </select>
                <select name="" id="">
                  <option value="">北京市</option>
                </select>
                <select name="" id="">
                  <option value="">东城区</option>
                </select>
              </td>
            </tr>
            <tr style="height: 40px;">
              <td>
                <span class="h6">家乡</span>
              </td>
              <td>
                <select name="" id="">
                  <option value="">北京</option>
                  <option value="">天津</option>
                  <option value="">河北省</option>
                  <option value="">山西省</option>
                </select>
                <select name="" id="">
                  <option value="">北京市</option>
                </select>
                <select name="" id="">
                  <option value="">东城区</option>
                </select>
              </td>
            </tr>
          </table>
          <hr>
          <button class="h6">保存</button>
        </div>
        <div class="shop" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none">
          <div style="height: 36px;line-height: 36px;margin-bottom: 14px;background:#ededed;border: 1px solid rgba(102,102,102,0.15)" class="h6">
            <div style="width: 100px;height: 36px;float:left;padding-left: 20px;">
              店铺图标
            </div>
            <div style="width: 200px;height: 36px;float:left;padding-left: 20px;">
              店铺名
            </div>
            <div style="width: 486px;height: 36px;float:left;padding-left: 20px;">
              店铺描述
            </div>
            <div style="width: 160px;height: 36px;float:left;padding-left: 20px;">
              操作
            </div>
          </div>
          <div style="height: 100px;margin-bottom: 14px;border: 1px solid rgba(102,102,102,0.16)" class="h6">
            <div style="width: 100px;height: 100px;float:left;padding: 24px 20px 0 24px">
              <img src="https://img.alicdn.com/bao/uploaded//i1/619123122/O1CN011YvuzJWPCJpIVE2_!!619123122.png_50x50.jpg" alt="">
            </div>
            <div style="width: 200px;height: 36px;float:left;padding: 34px 0 0 20px">
              良品铺子旗舰店
            </div>
            <div style="width: 486px;height: 36px;float:left;padding: 34px 0 0 20px">
              保证正品，满一送一
            </div>
            <div style="width: 160px;height: 36px;float:left;padding: 34px 0 0 0">
              <router-link to="/ShopManage"><span>管理店铺</span></router-link>
              <a href="#">删除店铺</a>
            </div>
          </div>
          <div style="height: 100px;margin-bottom: 14px;border: 1px solid rgba(102,102,102,0.16)" class="h6">
            <div style="width: 100px;height: 100px;float:left;padding: 24px 20px 0 24px">
              <img src="https://img.alicdn.com/bao/uploaded//i1/619123122/O1CN011YvuzJWPCJpIVE2_!!619123122.png_50x50.jpg" alt="">
            </div>
            <div style="width: 200px;height: 36px;float:left;padding: 34px 0 0 20px">
              良品铺子旗舰店
            </div>
            <div style="width: 486px;height: 36px;float:left;padding: 34px 0 0 20px">
              保证正品，满一送一
            </div>
            <div style="width: 160px;height: 36px;float:left;padding: 34px 0 0 0">
              <a href="#">管理店铺</a>
              <a href="#">删除店铺</a>
            </div>
          </div>
        </div>
        <div class="order" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none;">
          <div style="width: 950px;margin-bottom: 20px;" v-for="(item, index) in withoutPutList" :key="index">
            <div style="width: 950px;height: 36px;border: 1px solid rgba(102,102,102,0.14);background:#f1f1f1;">
              <div class="h6 pull-left" style="width: 120px;">2019-06-06 21:16:43</div>
              <div class="h6 pull-left" style="width: 480px;">订单号: {{item.order_num}}</div>
              <div class="h6 pull-left" style="width: 80px;">单价</div>
              <div class="h6 pull-left" style="width: 78px;padding-left: 10px;">数量</div>
              <div class="h6 pull-left" style="width: 100px;padding-left: 10px;">实付款</div>
              <div class="h6 pull-left" style="width: 90px;padding-left: 10px;">交易操作</div>
            </div>
            <div style="width: 950px;display: table;position: relative;border: 1px solid rgba(102,102,102,0.21);">
              <div style="width: 676px;display: table-cell">
                <div style="width: 676px;height: 96px;float:left;border: 1px solid rgba(102,102,102,0.15)" v-for="(goods, index) in item.goodsList" :key="index">
                  <div class="h6 pull-left" style="margin-left: 10px;width: 120px;">
                    <img :src="goods.image" alt="" style="width: 80px;">
                  </div>
                  <div class="h6 pull-left" style="margin-left: 10px;width: 340px;">
                    {{goods.name}} {{goods.caption}}
                  </div>
                  <div class="h6 pull-left" style="margin-left: 116px;width: 60px;">
                    <span>￥{{goods.price_after}}</span><br>
                    <span>{{item.amount}}</span>
                  </div>
                </div>
              </div>
              <div style="display: table-cell;position: absolute">
                <div class="pull-left" style="width: 80px;padding: 20px 0 0 20px;">
                  <span class="h6">{{item.total_amount}}</span>
                </div>
                <div class="pull-left" style="width: 100px;padding: 20px 0 0 8px;">
                  <span class="h6">￥{{item.total_price}}</span><br>
                  <span class="h6">(含运费：￥0.00)</span>
                </div>
                <div class="pull-left" style="width: 90px;padding: 20px 0 0 10px;">
                  <span class="h6" style="margin-left: 10px;">
                    <button class="btn btn-xs">发货</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 950px;margin-bottom: 20px;" v-for="(item, index) in withoutGetList" :key="index">
            <div style="width: 950px;height: 36px;border: 1px solid rgba(102,102,102,0.14);background:#f1f1f1;">
              <div class="h6 pull-left" style="width: 120px;">2019-06-06 21:16:43</div>
              <div class="h6 pull-left" style="width: 480px;">订单号: {{item.order_num}}</div>
              <div class="h6 pull-left" style="width: 80px;">单价</div>
              <div class="h6 pull-left" style="width: 78px;padding-left: 10px;">数量</div>
              <div class="h6 pull-left" style="width: 100px;padding-left: 10px;">实付款</div>
              <div class="h6 pull-left" style="width: 90px;padding-left: 10px;">交易操作</div>
            </div>
            <div style="width: 950px;display: table;position: relative;border: 1px solid rgba(102,102,102,0.21);">
              <div style="width: 676px;display: table-cell">
                <div style="width: 676px;height: 96px;float:left;border: 1px solid rgba(102,102,102,0.15)" v-for="(goods, index) in item.goodsList" :key="index">
                  <div class="h6 pull-left" style="margin-left: 10px;width: 120px;">
                    <img :src="goods.image" alt="" style="width: 80px;">
                  </div>
                  <div class="h6 pull-left" style="margin-left: 10px;width: 340px;">
                    {{goods.name}} {{goods.caption}}
                  </div>
                  <div class="h6 pull-left" style="margin-left: 116px;width: 60px;">
                    <span>￥{{goods.price_after}}</span><br>
                    <span>{{item.amount}}</span>
                  </div>
                </div>
              </div>
              <div style="display: table-cell;position: absolute">
                <div class="pull-left" style="width: 80px;padding: 20px 0 0 20px;">
                  <span class="h6">{{item.total_amount}}</span>
                </div>
                <div class="pull-left" style="width: 100px;padding: 20px 0 0 8px;">
                  <span class="h6">￥{{item.total_price}}</span><br>
                  <span class="h6">(含运费：￥0.00)</span>
                </div>
                <div class="pull-left" style="width: 90px;padding: 20px 0 0 10px;">
                  <span class="h6">
                    <button class="btn btn-xs" style="position: relative;right: 10px;">等待买家确认</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="unput" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none;">
          <div style="width: 950px;margin-bottom: 20px;" v-for="(item, index) in withoutPutList" :key="index">
            <div style="width: 950px;height: 36px;border: 1px solid rgba(102,102,102,0.14);background:#f1f1f1;">
              <div class="h6 pull-left" style="width: 120px;">2019-06-06 21:16:43</div>
              <div class="h6 pull-left" style="width: 480px;">订单号: {{item.order_num}}</div>
              <div class="h6 pull-left" style="width: 80px;">单价</div>
              <div class="h6 pull-left" style="width: 78px;padding-left: 10px;">数量</div>
              <div class="h6 pull-left" style="width: 100px;padding-left: 10px;">实付款</div>
              <div class="h6 pull-left" style="width: 90px;padding-left: 10px;">交易操作</div>
            </div>
            <div style="width: 950px;display: table;position: relative;border: 1px solid rgba(102,102,102,0.21);">
              <div style="width: 676px;display: table-cell">
                <div style="width: 676px;height: 96px;float:left;border: 1px solid rgba(102,102,102,0.15)" v-for="(goods, index) in item.goodsList" :key="index">
                  <div class="h6 pull-left" style="margin-left: 10px;width: 120px;">
                    <img :src="goods.image" alt="" style="width: 80px;">
                  </div>
                  <div class="h6 pull-left" style="margin-left: 10px;width: 340px;">
                    {{goods.name}} {{goods.caption}}
                  </div>
                  <div class="h6 pull-left" style="margin-left: 116px;width: 60px;">
                    <span>￥{{goods.price_after}}</span><br>
                    <span>{{item.amount}}</span>
                  </div>
                </div>
              </div>
              <div style="display: table-cell;position: absolute">
                <div class="pull-left" style="width: 80px;padding: 20px 0 0 20px;">
                  <span class="h6">{{item.total_amount}}</span>
                </div>
                <div class="pull-left" style="width: 100px;padding: 20px 0 0 8px;">
                  <span class="h6">￥{{item.total_price}}</span><br>
                  <span class="h6">(含运费：￥0.00)</span>
                </div>
                <div class="pull-left" style="width: 90px;padding: 20px 0 0 10px;">
                  <span class="h6" style="margin-left: 10px;">
                    <button class="btn btn-xs">发货</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="put" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none">
          <div style="width: 950px;margin-bottom: 20px;" v-for="(item, index) in withoutGetList" :key="index">
            <div style="width: 950px;height: 36px;border: 1px solid rgba(102,102,102,0.14);background:#f1f1f1;">
              <div class="h6 pull-left" style="width: 120px;">2019-06-06 21:16:43</div>
              <div class="h6 pull-left" style="width: 480px;">订单号: {{item.order_num}}</div>
              <div class="h6 pull-left" style="width: 80px;">单价</div>
              <div class="h6 pull-left" style="width: 78px;padding-left: 10px;">数量</div>
              <div class="h6 pull-left" style="width: 100px;padding-left: 10px;">实付款</div>
              <div class="h6 pull-left" style="width: 90px;padding-left: 10px;">交易操作</div>
            </div>
            <div style="width: 950px;display: table;position: relative;border: 1px solid rgba(102,102,102,0.21);">
              <div style="width: 676px;display: table-cell">
                <div style="width: 676px;height: 96px;float:left;border: 1px solid rgba(102,102,102,0.15)" v-for="(goods, index) in item.goodsList" :key="index">
                  <div class="h6 pull-left" style="margin-left: 10px;width: 120px;">
                    <img :src="goods.image" alt="" style="width: 80px;">
                  </div>
                  <div class="h6 pull-left" style="margin-left: 10px;width: 340px;">
                    {{goods.name}} {{goods.caption}}
                  </div>
                  <div class="h6 pull-left" style="margin-left: 116px;width: 60px;">
                    <span>￥{{goods.price_after}}</span><br>
                    <span>{{item.amount}}</span>
                  </div>
                </div>
              </div>
              <div style="display: table-cell;position: absolute">
                <div class="pull-left" style="width: 80px;padding: 20px 0 0 20px;">
                  <span class="h6">{{item.total_amount}}</span>
                </div>
                <div class="pull-left" style="width: 100px;padding: 20px 0 0 8px;">
                  <span class="h6">￥{{item.total_price}}</span><br>
                  <span class="h6">(含运费：￥0.00)</span>
                </div>
                <div class="pull-left" style="width: 90px;padding: 20px 0 0 10px;">
                  <span class="h6">
                    <button class="btn btn-xs" style="position: relative;right: 10px;">等待买家确认</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comment" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;padding: 0 20px 0 20px;display: none">
          <div style="height: 40px;line-height: 40px;background:#ededed;" class="h6">
            <div style="width: 100px;float:left;padding-left: 20px;">评价</div>
            <div style="width: 360px;float:left;">评论</div>
            <div style="width: 140px;float:left;">评价人</div>
            <div style="width: 260px;float:left;">宝贝信息</div>
            <div style="width: 60px;float:left;padding-left: 8px;">操作</div>
          </div>
          <div style="height: 100px;border: 1px solid rgba(102,102,102,0.24)" class="h6">
            <div style="width: 100px;float:left;padding-left: 20px;padding-top: 20px">好评</div>
            <div style="width: 360px;float:left;padding-top: 20px">东西很不错</div>
            <div style="width: 140px;float:left;padding-top: 20px;">买家：张三</div>
            <div style="width: 260px;float:left;padding: 14px 40px 10px 0">
              <img src="../image/美丽人生/image4.jpg" alt="" style="width: 70px;float:left;">
              <div style="float:left;width: 100px;padding-left: 10px;">
                <span>springmvc视频教程MyBatis电商项目Java商城源码SSM框...</span><br>
                <span>￥1.00</span>
              </div>
            </div>
            <div style="width: 60px;float:left;padding-top: 20px;">
              <span><a href="#" data-toggle="modal" data-target="#myModal">回复</a></span>
              <span><a href="#">删除</a></span>
            </div>
          </div>
          <div style="height: 100px;border: 1px solid rgba(102,102,102,0.24)" class="h6">
            <div style="width: 100px;float:left;padding-left: 20px;padding-top: 20px">好评</div>
            <div style="width: 360px;float:left;padding-top: 20px">
              <span>特别好用</span><br><br>
              <span>谢谢亲</span>
            </div>
            <div style="width: 140px;float:left;padding-top: 20px;">
              <span>买家：李四</span><br><br>
              <span>卖家：良品铺子旗舰店</span>
            </div>
            <div style="width: 260px;float:left;padding: 14px 40px 10px 0">
              <img src="../image/美丽人生/image4.jpg" alt="" style="width: 70px;float:left;">
              <div style="float:left;width: 100px;padding-left: 10px;">
                <span>springmvc视频教程MyBatis电商项目Java商城源码SSM框...</span><br>
                <span>￥1.00</span>
              </div>
            </div>
            <div style="width: 60px;float:left;padding-top: 20px;">
              <span><a href="#" data-toggle="modal" data-target="#myModal">回复</a></span>
              <span><a href="#">删除</a></span>
            </div>
          </div>
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
export default {
  name: 'SellerCenter',
  data () {
    return {
      name: '',
      withoutPutList: [],
      withoutGetList: []
    }
  },
  methods: {
    findMyOrderListWithState: function (state) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/myorder/findMyOrderListWithState',
        params: {
          user_name: this.name,
          state: state
        }
      })
        .then(response => {
          // eslint-disable-next-line eqeqeq
          if (state == 2) {
            this.withoutPutList = response.data
            // eslint-disable-next-line eqeqeq
          } else if (state == 3) {
            this.withoutGetList = response.data
            // eslint-disable-next-line eqeqeq
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    logout: function () {
      sessionStorage.removeItem('store')
    }
  },
  mounted () {
    this.name = this.$store.state.name
    this.findMyOrderListWithState(2)
    this.findMyOrderListWithState(3)
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
  .shop{
    padding: 20px 20px 0 20px;
  }
  .shop ul{
    list-style: none;
  }
  .shop ul li{
    width: 120px;
    float: left;
    margin-top: 10px;
    margin-left: 24px;
  }
  .unput{
    padding: 20px 20px 0 20px;
  }
  .unput ul{
    list-style: none;
  }
  .unput ul li{
    width: 120px;
    float: left;
    margin-top: 10px;
    margin-left: 24px;
  }
  .put{
    padding: 20px 20px 0 20px;
  }
  .put ul{
    list-style: none;
  }
  .put ul li{
    width: 120px;
    float: left;
    margin-top: 10px;
    margin-left: 24px;
  }
  .order{
    padding: 20px 20px 0 20px;
  }
  .order ul{
    list-style: none;
  }
  .order ul li{
    width: 120px;
    float: left;
    margin-top: 10px;
    margin-left: 24px;
  }
</style>
