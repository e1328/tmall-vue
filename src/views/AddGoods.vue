<template>
  <div>
    <div style="width: 100%;height: 40px;line-height: 40px" class="container">
      <span class="h4">商品增加</span>
    </div>
    <div style="width: 100%;margin-top: 10px;" class="container h5" id="div">
      <table class="table table-bordered">
        <tbody>
        <tr>
          <td>商品分类</td>
          <td>
            <table>
              <tr>
                <td>
                  <select name="" id="sort1" class="form-control" @change="changeType1">
                    <option :value="item.sort_id" v-for="(item,index) in sort1List" :key="index">{{item.name}}</option>
                  </select>
                </td>
                <td>
                  <select name="" id="sort2" class="form-control" @change="changeType2">
                    <option :value="item.sort_id" v-for="(item,index) in sort2List" :key="index">{{item.name}}</option>
                  </select>
                </td>
                <td>
                  <select name="" id="sort3" class="form-control" @change="changeType3">
                    <option value="" v-for="(item,index) in sort3List" :key="index">{{item.name}}</option>
                  </select>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>商品名称</td>
          <td><input type="text" class="form-control" v-model="entity.name"></td>
        </tr>
        <tr>
          <td>图片</td>
          <td>
            <input type="file" @change="uploading($event)" id="file" class="h6">
            <img :src="image" alt="" style="width: 125px">
            <br>
            <button @click="uploadFile" class="btn btn-xs btn-default">上传</button>
          </td>
        </tr>
        <tr>
          <td>副标题</td>
          <td><input type="text" class="form-control" v-model="entity.caption"></td>
        </tr>
        <tr>
          <td>打折前价格</td>
          <td><input type="text" class="form-control" v-model="entity.price_before"></td>
        </tr>
        <tr>
          <td>打折后价格</td>
          <td><input type="text" class="form-control" v-model="entity.price_after"></td>
        </tr>
        <tr>
          <td>库存</td>
          <td><input type="text" class="form-control" v-model="entity.reserve"></td>
        </tr>
        <tr>
          <td>商品介绍</td>
          <td><input type="text" class="form-control" v-model="entity.introduction"></td>
        </tr>
        <tr>
          <td>促销活动</td>
          <td><input type="text" class="form-control" v-model="entity.activity"></td>
        </tr>
        <tr>
          <td>所属品牌</td>
          <td>
            <select name="" id="brand" class="form-control" @click="changeBrand">
              <option :value="item.brand_id" v-for="(item,index) in brandList" :key="index">{{item.name}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>所属店铺</td>
          <td>
            <select name="" id="shop" class="form-control" @click="changeShop">
              <option :value="item.shop_id" v-for="(item,index) in shopList" :key="index">{{item.name}}</option>
            </select>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div style="width: 100%;" class="container">
      <div class="btn-group btn-group-sm" role="group" aria-label="...">
        <button type="button" class="btn btn-default" @click="save">保存</button>
        <button type="button" class="btn btn-default">返回列表</button>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'AddGoods',
  data () {
    return {
      image: '',
      file: '',
      entity: {},
      brandList: [],
      shopList: [],
      sort1List: [],
      sort2List: [],
      sort3List: []
    }
  },
  methods: {
    save: function () {
      this.entity.image = this.image
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/goods',
        data: this.entity
      })
        .then(response => {
          alert('增加成功')
          this.entity = []
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('增加失败')
          console.log(error)
        })
    },
    uploading: function ($event) {
      this.file = $event.target.files[0]
    },
    uploadFile: function () {
      var formdata = new window.FormData()
      formdata.append('file', this.file)
      this.axios({
        method: 'post',
        url: 'http://localhost:8082/upload/upload',
        data: formdata,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .then(response => {
          this.image = response.data.message
          console.log(this.file)
          alert('图片上传成功')
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('图片上传失败')
          console.log(error)
        })
    },
    findAllBrand: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/brands'
      })
        .then(response => {
          this.brandList = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    findAllShop: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/shops'
      })
        .then(response => {
          this.shopList = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    // eslint-disable-next-line camelcase
    findByParentId1: function (parent_id) {
      // eslint-disable-next-line camelcase
      this.entity.parent_id = parent_id
      this.axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: 'http://localhost:8080/sorts/find/' + parent_id
      })
        .then(response => {
          // eslint-disable-next-line no-unused-expressions
          this.sort1List = response.data
          console.log(response.data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('失败')
        })
    },
    // eslint-disable-next-line camelcase
    findByParentId2: function (parent_id) {
      // eslint-disable-next-line camelcase
      this.entity.parent_id = parent_id
      this.axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: 'http://localhost:8080/sorts/find/' + parent_id
      })
        .then(response => {
          // eslint-disable-next-line no-unused-expressions
          this.sort2List = response.data
          console.log(response.data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('失败')
        })
    },
    // eslint-disable-next-line camelcase
    findByParentId3: function (parent_id) {
      // eslint-disable-next-line camelcase
      this.entity.parent_id = parent_id
      this.axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: 'http://localhost:8080/sorts/find/' + parent_id
      })
        .then(response => {
          // eslint-disable-next-line no-unused-expressions
          this.sort3List = response.data
          console.log(response.data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('失败')
        })
    },
    changeType1: function () {
      // eslint-disable-next-line no-undef
      this.findByParentId2(sort1.options[sort1.selectedIndex].value)
      // eslint-disable-next-line no-undef
      this.entity.sort1_id = sort1.options[sort1.selectedIndex].value
    },
    changeType2: function () {
      // eslint-disable-next-line no-undef
      this.findByParentId3(sort2.options[sort2.selectedIndex].value)
      // eslint-disable-next-line no-undef
      this.entity.sort2_id = sort2.options[sort2.selectedIndex].value
    },
    changeType3: function () {
      // eslint-disable-next-line no-undef
      this.entity.sort3_id = sort3.options[sort3.selectedIndex].value
    },
    changeBrand: function () {
      // eslint-disable-next-line no-undef
      this.entity.brand_id = brand.options[brand.selectedIndex].value
    },
    changeShop: function () {
      // eslint-disable-next-line no-undef
      this.entity.shop_id = shop.options[shop.selectedIndex].value
    }
  },
  mounted () {
    this.findAllBrand()
    this.findAllShop()
    this.findByParentId1(0)
    this.findByParentId2(1)
    this.findByParentId3(17)
  }
}
</script>

<style scoped>

</style>
