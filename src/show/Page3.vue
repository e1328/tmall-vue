<template>
  <div style="width: 1170px;margin: 0 auto">
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
  </div>
</template>

<script>
export default {
  name: 'Page1',
  data () {
    return {
      withoutPutList: [],
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
          if (state == 2) {
            this.withoutPutList = response.data
            // eslint-disable-next-line eqeqeq
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    }
  },
  mounted () {
    this.name = this.$store.state.name
    this.findMyOrderListWithState(2)
  }
}
</script>

<style scoped>

</style>
