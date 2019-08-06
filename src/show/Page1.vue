<template>
  <div style="width: 1170px;margin: 0 auto">
    <div style="width: 1170px;float:left;margin-bottom: 20px;" v-for="(item, index) in withoutPayList" :key="index">
      <div style="width: 1170px;height: 36px;border: 1px solid rgba(102,102,102,0.14);background:#f1f1f1;">
        <div class="h6 pull-left" style="margin-left: 10px;">2019-06-06 21:16:43</div>
        <div class="h6 pull-left" style="margin-left: 10px;">订单号: {{item.order_num}}</div>
        <div class="h6 pull-left" style="margin-left: 374px;padding-left: 76px;">天猫商场</div>
        <div class="h6 pull-left" style="margin-left: 216px;">和我联系</div>
        <div class="h6 pull-left" style="margin-left: 100px;">删除</div>
      </div>
      <div style="width: 1170px;display: table;">
        <div style="display: table-row">
          <div style="width: 779px;display: table-cell">
            <div style="width: 779px;height: 96px;border: 1px solid rgba(102,102,102,0.14)" class="pull-left" v-for="(goods, index) in item.goodsList" :key="index">
              <img :src="goods.image" alt="" style="width: 80px;height: 80px;margin: 8px 8px;">
              <span class="h6">{{goods.name}} {{goods.caption}}</span>
              <div class="pull-right h6" style="margin: 10px 55px;">
                <h6>￥{{goods.price_after}}</h6>
                <h6 style="margin-left: 10px;">{{goods.order_amount}}</h6>
              </div>
            </div>
          </div>
          <div style="width: 390px;display: table-cell;position: relative;">
            <div :style="{height: item.goodsList.length*96 + 'px',display: 'table',position: 'absolute'}">
              <div style="display: table-cell;border: 1px solid rgba(102,102,102,0.14)">
                <div style="width: 130px;" class="pull-left">
                  <div class="h6" style="margin: 40px 60px">{{item.total_amount}}</div>
                </div>
              </div>
              <div style="display: table-cell;border: 1px solid rgba(102,102,102,0.14)">
                <div style="width: 130px;" class="pull-left">
                  <div style="position: relative;top: -20px;right: -26px">
                    <h6>￥{{item.total_price}}</h6>
                    <h6>(含运费：￥0.00)</h6>
                  </div>
                </div>
              </div>
              <div style="display: table-cell;border: 1px solid rgba(102,102,102,0.14)">
                <div style="width: 126px;" class="pull-left">
                  <div class="h6" style="width: 50px;height: 50px;position: relative;left: 56px;">
                    <button class="btn btn-xs" @click="pay(item.id)">付款</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 1170px;float:left;margin-bottom: 20px;" v-for="(item, index) in withoutPutList" :key="index">
      <div style="width: 1170px;height: 36px;border: 1px solid rgba(102,102,102,0.14);background:#f1f1f1;">
        <div class="h6 pull-left" style="margin-left: 10px;">2019-06-06 21:16:43</div>
        <div class="h6 pull-left" style="margin-left: 10px;">订单号: {{item.order_num}}</div>
        <div class="h6 pull-left" style="margin-left: 374px;padding-left: 76px;">天猫商场</div>
        <div class="h6 pull-left" style="margin-left: 216px;">和我联系</div>
        <div class="h6 pull-left" style="margin-left: 100px;">删除</div>
      </div>
      <div style="width: 1170px;display: table;border: 1px solid rgba(153,153,153,0.21)">
        <div style="display: table-row">
          <div style="width: 779px;display: table-cell">
            <div style="width: 779px;height: 96px;border: 1px solid rgba(102,102,102,0.14)" class="pull-left" v-for="(goods, index) in item.goodsList" :key="index">
              <img :src="goods.image" alt="" style="width: 80px;height: 80px;margin: 8px 8px;">
              <span class="h6">{{goods.name}} {{goods.caption}}</span>
              <div class="pull-right h6" style="margin: 10px 55px;">
                <h6>￥{{goods.price_after}}</h6>
                <h6 style="margin-left: 10px;">{{goods.order_amount}}</h6>
              </div>
            </div>
          </div>
          <div style="width: 390px;display: table-cell;position: relative;">
            <div :style="{height: item.goodsList.length*96 + 'px',display: 'table',position: 'absolute'}">
              <div style="display: table-cell;border: 1px solid rgba(153,153,153,0.21)">
                <div style="width: 130px;" class="pull-left">
                  <div class="h6" style="margin: 40px 60px">{{item.total_amount}}</div>
                </div>
              </div>
              <div style="display: table-cell;border: 1px solid rgba(153,153,153,0.21)">
                <div style="width: 130px;" class="pull-left">
                  <div style="position: relative;top: -20px;right: -26px">
                    <h6>￥{{item.total_price}}</h6>
                    <h6>(含运费：￥0.00)</h6>
                  </div>
                </div>
              </div>
              <div style="display: table-cell;">
                <div style="width: 130px;" class="pull-left">
                  <div class="h6" style="width: 50px;height: 50px;position: relative;top: -15px;left: 40px;">
                    <button class="btn btn-xs">待发货</button>
                    <button class="btn btn-xs" onclick="alert('催货成功')" style="margin-top: 6px;">催卖家发货</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 1170px;float:left;margin-bottom: 20px;" v-for="(item, index) in withoutGetList" :key="index">
      <div style="width: 1170px;height: 36px;border: 1px solid rgba(102,102,102,0.14);background:#f1f1f1;">
        <div class="h6 pull-left" style="margin-left: 10px;">2019-06-06 21:16:43</div>
        <div class="h6 pull-left" style="margin-left: 10px;">订单号: {{item.order_num}}</div>
        <div class="h6 pull-left" style="margin-left: 374px;padding-left: 76px;">天猫商场</div>
        <div class="h6 pull-left" style="margin-left: 216px;">和我联系</div>
        <div class="h6 pull-left" style="margin-left: 100px;">删除</div>
      </div>
      <div style="width: 1170px;display: table;border: 1px solid rgba(153,153,153,0.21)">
        <div style="display: table-row">
          <div style="width: 777px;display: table-cell">
            <div style="width: 777px;height: 96px;border: 1px solid rgba(102,102,102,0.14)" class="pull-left" v-for="(goods, index) in item.goodsList" :key="index">
              <img :src="goods.image" alt="" style="width: 80px;height: 80px;margin: 8px 8px;">
              <span class="h6">{{goods.name}} {{goods.caption}}</span>
              <div class="pull-right h6" style="margin: 10px 55px;">
                <h6>￥{{goods.price_after}}</h6>
                <h6 style="margin-left: 10px;">{{goods.order_amount}}</h6>
              </div>
            </div>
          </div>
          <div style="width: 390px;display: table-cell;position: relative;">
            <div :style="{height: item.goodsList.length*96 + 'px',display: 'table',position: 'absolute'}">
              <div style="display: table-cell;border: 1px solid rgba(153,153,153,0.21)">
                <div style="width: 130px;" class="pull-left">
                  <div class="h6" style="margin: 40px 60px">{{item.total_amount}}</div>
                </div>
              </div>
              <div style="display: table-cell;border: 1px solid rgba(153,153,153,0.21)">
                <div style="width: 130px;" class="pull-left">
                  <div style="position: relative;top: -20px;right: -26px">
                    <h6>￥{{item.total_price}}</h6>
                    <h6>(含运费：￥0.00)</h6>
                  </div>
                </div>
              </div>
              <div style="display: table-cell;border: 1px solid rgba(153,153,153,0.21)">
                <div style="width: 126px;" class="pull-left">
                  <div class="h6" style="width: 50px;height: 50px;position: relative;left: 48px;">
                    <button class="btn btn-xs" onclick="alert('确认收货成功')">确认收货</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 1170px;float:left;margin-bottom: 20px;" v-for="(item, index) in withoutCommentList" :key="index">
      <div style="width: 1170px;height: 36px;border: 1px solid rgba(102,102,102,0.14);background:#f1f1f1;">
        <div class="h6 pull-left" style="margin-left: 10px;">2019-06-06 21:16:43</div>
        <div class="h6 pull-left" style="margin-left: 10px;">订单号: {{item.order_num}}</div>
        <div class="h6 pull-left" style="margin-left: 374px;padding-left: 76px;">天猫商场</div>
        <div class="h6 pull-left" style="margin-left: 216px;">和我联系</div>
        <div class="h6 pull-left" style="margin-left: 100px;">删除</div>
      </div>
      <div style="width: 1170px;display: table;border: 1px solid rgba(153,153,153,0.21)">
        <div style="display: table-row">
          <div style="width: 777px;display: table-cell;">
            <div style="width: 777px;height: 96px;border: 1px solid rgba(102,102,102,0.14)" class="pull-left" v-for="(goods, index) in item.goodsList" :key="index">
              <img :src="goods.image" alt="" style="width: 80px;height: 80px;margin: 8px 8px;">
              <span class="h6">{{goods.name}} {{goods.caption}}</span>
              <div class="pull-right h6" style="margin: 10px 55px;">
                <h6>￥{{goods.price_after}}</h6>
                <h6 style="margin-left: 10px;">{{goods.order_amount}}</h6>
              </div>
            </div>
          </div>
          <div style="width: 390px;display: table-cell;position: relative;">
            <div :style="{height: item.goodsList.length*96 + 'px',display: 'table',position: 'absolute'}">
              <div style="display: table-cell;border: 1px solid rgba(102,102,102,0.14)">
                <div style="width: 130px;" class="pull-left">
                  <div class="h6" style="margin: 40px 60px">{{item.total_amount}}</div>
                </div>
              </div>
              <div style="display: table-cell;border: 1px solid rgba(102,102,102,0.14)">
                <div style="width: 130px;" class="pull-left">
                  <div style="position: relative;top: -20px;right: -26px">
                    <h6>￥{{item.total_price}}</h6>
                    <h6>(含运费：￥0.00)</h6>
                  </div>
                </div>
              </div>
              <div style="display: table-cell;border: 1px solid rgba(102,102,102,0.14)">
                <div style="width: 126px;" class="pull-left">
                  <div class="h6" style="width: 50px;height: 50px;position: relative;left: 56px;">
                    <button class="btn btn-xs" data-toggle="modal" data-target="#myModal" @click="comment(item.goodsList)">评价</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h5 class="modal-title" id="myModalLabel">评价商品</h5>
          </div>
          <div class="modal-body">
            <table class="h6 table table-border">
              <thead>
              <th>商品图片</th>
              <th>商品信息</th>
              <th>评价内容</th>
              <th>操作</th>
              </thead>
              <tbody>
              <tr v-for="(item, index) in goodsList" :key="index">
                <td>
                  <img :src="item.image" alt="" style="width: 80px;">
                </td>
                <td style="width: 160px;">
                  {{item.name}}<br>
                  {{item.caption}}<br>
                  ￥{{item.price_after}}
                </td>
                <td>
                  <input type="text" class="form-control" v-model="item.content">
                </td>
                <td>
                  <button class="btn btn-xs btn-default" @click="write(name,item.shop_id,item.goods_id,item.content)">评价</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default btn-sm">保存</button>
            <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  data () {
    return {
      withoutPayList: [],
      withoutPutList: [],
      withoutGetList: [],
      withoutCommentList: [],
      goodsList: [],
      name: ''
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
          if (state == 0) {
            this.withoutPayList = response.data
            // eslint-disable-next-line eqeqeq
          } else if (state == 2) {
            this.withoutPutList = response.data
            // eslint-disable-next-line eqeqeq
          } else if (state == 3) {
            this.withoutGetList = response.data
            // eslint-disable-next-line eqeqeq
          } else if (state == 4) {
            this.withoutCommentList = response.data
          }
          console.log(this.withoutPayList)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    pay: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/alipay/pay2?id=' + id
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
          alert('付款失败')
        })
    },
    comment: function (list) {
      this.goodsList = list
    },
    // eslint-disable-next-line camelcase
    write: function (user_name, shop_id, goods_id, content) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/comment/write',
        params: {
          user_name: user_name,
          shop_id: shop_id,
          goods_id: goods_id,
          content: content
        }
      })
        .then(response => {
          if (response.data.success) {
            alert('评价成功')
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('评价失败')
          console.log(error)
        })
    }
  },
  mounted () {
    this.name = this.$store.state.name
    this.findMyOrderListWithState(0)
    this.findMyOrderListWithState(2)
    this.findMyOrderListWithState(3)
    this.findMyOrderListWithState(4)
  }
}
</script>

<style scoped>

</style>
