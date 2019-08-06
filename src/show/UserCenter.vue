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
          <li><router-link to=""><span>个人资料</span></router-link></li>
          <li><router-link to="/Car"><span>我的购物车</span></router-link></li>
          <li><router-link to="/MyOrder"><span>我的订单</span></router-link></li>
          <li><router-link to=""><span>收藏的商品</span></router-link></li>
          <li><router-link to=""><span>收藏的店铺</span></router-link></li>
          <li><router-link to=""><span>收货地址管理</span></router-link></li>
          <li><router-link to=""><span>评价管理</span></router-link></li>
          <li><router-link to=""><span>我的足迹</span></router-link></li>
        </ul>
      </div>
      <div style="width: 1020px;float:left;" class="container nav3_div2">
        <div class="all" style="margin-top: 20px;">
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
                <span class="h6">待付款<span style="color: #f40">1</span></span>
              </div>
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">待发货<span style="color: #f40">2</span></span>
              </div>
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">待收货<span style="color: #f40">3</span></span>
              </div>
              <div style="width: 144px;float:left;padding-left: 56px;">
                <span class="h6">待评价<span style="color: #f40">4</span></span>
              </div>
              <div style="width: 144px;float:left;padding-left: 56px;"><span class="h6">退款</span></div>
            </div>
          </div>
        </div>
        <div class="info" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none">
          <span class="h6">亲爱的周文龙，填写真实的资料，有助于好友找到你哦。</span><br><br>
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
                <input type="radio"><span class="h6">男</span>
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
        <div></div>
        <div></div>
        <div class="goods" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none">
          <ul class="list-inline">
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="shop" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none">
          <div style="height: 160px;margin-bottom: 20px;border: 1px solid rgba(153,153,153,0.26)">
            <div style="width: 170px;height: 160px;padding: 20px 0 0 10px;float:left;">
              <img src="https://img.alicdn.com/bao/uploaded//i1/619123122/O1CN011YvuzJWPCJpIVE2_!!619123122.png_50x50.jpg" alt="" class="img-circle" style="width: 40px;">
              <span class="h6"><a href="#">良品铺子旗舰店</a></span>
              <span class="h6"><a href="#">删除</a></span>
            </div>
            <div style="height: 160px;float:left;">
              <ul>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
              </ul>
            </div>
          </div>
          <div style="height: 160px;margin-bottom: 20px;border: 1px solid rgba(153,153,153,0.26)">
            <div style="width: 170px;height: 160px;padding: 20px 0 0 10px;float:left;">
              <img src="https://img.alicdn.com/bao/uploaded//ee/3e/T1tGnAFnhjXXb1upjX.jpg_50x50.jpg" alt="" class="img-circle" style="width: 40px;">
              <span class="h6"><a href="#">达利集团旗舰店</a></span>
              <span class="h6"><a href="#">删除</a></span>
            </div>
            <div style="height: 160px;float:left;">
              <ul>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
                <li>
                  <img src="https://img.alicdn.com/bao/uploaded/i2/619123122/O1CN01WJkJPj1Yvv3JPsc7v-619123122.jpg_160x160xz.jpg" alt="" style="width: 120px;">
                  <span class="h6">￥10.09</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="address" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none">
          <div style="padding: 16px 0 10px 24px">
            <span class="h6">新增收货地址</span>
            <table>
              <tr style="height: 40px;">
                <td>
                  <span class="h6">地址信息：</span>
                </td>
                <td>
                  <select name="" id="">
                    <option value="">省</option>
                    <option value="">北京</option>
                    <option value="">天津</option>
                    <option value="">河北省</option>
                    <option value="">山西省</option>
                  </select>
                  <select name="" id="">
                    <option value="">市</option>
                  </select>
                  <select name="" id="">
                    <option value="">区</option>
                  </select>
                  <select name="" id="">
                    <option value="">街道</option>
                  </select>
                </td>
              </tr>
              <tr style="height: 40px;">
                <td><span class="h6">详细地址：</span></td>
                <td><input type="text"></td>
              </tr>
              <tr style="height: 40px;">
                <td><span class="h6">邮政编码：</span></td>
                <td><input type="text"></td>
              </tr>
              <tr style="height: 40px;">
                <td><span class="h6">收货人姓名：</span></td>
                <td><input type="text"></td>
              </tr>
              <tr style="height: 40px;">
                <td><span class="h6">手机号码：</span></td>
                <td><input type="text"></td>
              </tr>
            </table>
            <button class="h6">保存</button>
          </div>
          <div style="margin:0 20px 0 20px;">
            <div class="h6" style="height: 34px;line-height: 34px;background:#eaebef;border: 1px solid rgba(102,102,102,0.21)">
              <div style="width: 100px;float:left;padding-left: 6px;">收货人</div>
              <div style="width: 116px;float:left;">所在地址</div>
              <div style="width: 200px;float:left;">详细信息</div>
              <div style="width: 100px;float:left;">邮编</div>
              <div style="width: 140px;float:left;">电话/手机</div>
              <div style="width: 110px;float:left;">操作</div>
              <div style="width: 112px;float:left;">无</div>
            </div>
            <div class="h6" style="height: 72px;border: 1px solid rgba(102,102,102,0.21)">
              <div style="width: 100px;float:left;padding-top: 20px;padding-left: 6px;">周文龙</div>
              <div style="width: 116px;float:left;padding: 20px 14px 10px 0">湖南省 张家界市 永定区 大庸桥街道</div>
              <div style="width: 200px;float:left;padding-top: 20px;">吉首大学张家界校区</div>
              <div style="width: 100px;float:left;padding-top: 20px;">427000</div>
              <div style="width: 140px;float:left;padding-top: 20px;">17343698034</div>
              <div style="width: 110px;float:left;padding-top: 20px;"><a href="#">修改</a> | <a href="#">删除</a></div>
              <div style="width: 112px;float:left;padding-top: 20px;">默认地址</div>
            </div>
            <div class="h6" style="height: 72px;border: 1px solid rgba(102,102,102,0.21)">
              <div style="width: 100px;float:left;padding-top: 20px;padding-left: 6px;">周文龙</div>
              <div style="width: 116px;float:left;padding: 20px 14px 10px 0">湖南省 张家界市 永定区 大庸桥街道</div>
              <div style="width: 200px;float:left;padding-top: 20px;">吉首大学张家界校区</div>
              <div style="width: 100px;float:left;padding-top: 20px;">427000</div>
              <div style="width: 140px;float:left;padding-top: 20px;">17343698034</div>
              <div style="width: 110px;float:left;padding-top: 20px;"><a href="#">修改</a> | <a href="#">删除</a></div>
              <div style="width: 112px;float:left;padding-top: 20px;">默认地址</div>
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
              <span>修改</span>
              <span>删除</span>
            </div>
          </div>
          <div style="height: 100px;border: 1px solid rgba(102,102,102,0.24)" class="h6">
            <div style="width: 100px;float:left;padding-left: 20px;padding-top: 20px">好评</div>
            <div style="width: 360px;float:left;padding-top: 20px">特别好用</div>
            <div style="width: 140px;float:left;padding-top: 20px;">买家：李四</div>
            <div style="width: 260px;float:left;padding: 14px 40px 10px 0">
              <img src="../image/美丽人生/image4.jpg" alt="" style="width: 70px;float:left;">
              <div style="float:left;width: 100px;padding-left: 10px;">
                <span>springmvc视频教程MyBatis电商项目Java商城源码SSM框...</span><br>
                <span>￥1.00</span>
              </div>
            </div>
            <div style="width: 60px;float:left;padding-top: 20px;">
              <span>修改</span>
              <span>删除</span>
            </div>
          </div>
        </div>
        <div class="root" style="border: 1px solid rgba(102,102,102,0.25);margin-top: 20px;display: none">
          <ul class="list-inline">
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
            <li>
              <div style="margin: 8px 0 0 10px;border: 1px solid rgba(102,102,102,0.21)">
                <img src="../image/户外出行/image1.jpg" alt="">
                <div style="padding: 10px;height: 100px;">
                  <span class="h4">￥22</span><br>
                  <span class="h6">饼干  南方黑芝麻糊原味360g/袋营养早餐小包装</span><br>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
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
  // $('.nav3_div1 ul li span').eq(0).addClass('color1')
  $('.nav3_div1 ul li').click(function () {
    let flag = $(this).index()
    $('.nav3_div1 ul li').each(function () {
      if (flag == $(this).index()) {
        $('.nav3_div2>div').eq($(this).index()).show()
        // $('.nav3_div1 ul li span').eq($(this).index()).addClass('color1')
      } else {
        $('.nav3_div2>div').eq($(this).index()).hide()
        // $('.nav3_div1 ul li span').eq($(this).index()).removeClass('color1')
      }
    })
  })
})
</script>

<style scoped>
  .color1{
    color: red;
  }
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
  .root ul{
    padding-bottom: 6px;
  }
  .root ul li{
    margin: 10px 0 4px 18px;
  }
  .root ul li>div{
    width: 152px;
    height: 200px;
  }
  .root ul li>div img{
    width: 110px;
    height: 110px;
    margin: 10px 0 0 18px;
  }
  .info{
    padding: 20px 0 20px 32px;
  }
  .goods ul{
    padding-bottom: 6px;
  }
  .goods ul li{
    margin: 10px 0 4px 18px;
  }
  .goods ul li>div{
    width: 152px;
    height: 200px;
  }
  .goods ul li>div img{
    width: 110px;
    height: 110px;
    margin: 10px 0 0 18px;
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
</style>
