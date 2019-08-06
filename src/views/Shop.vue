<template>
  <div>
    <div style="width: 100%;height: 40px;line-height: 40px;" class="container">
      <span class="h4">店铺管理</span>
    </div>
    <div style="width: 100%;height: 30px;margin-top: 10px;" class="container">
      <div class="btn-group btn-group-sm" role="group" aria-label="...">
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#editModal">新增</button>
        <button type="button" class="btn btn-default" @click="del">删除</button>
        <button type="button" class="btn btn-default" @click="refresh">刷新</button>
      </div>
    </div>
    <div style="width: 100%;margin-top: 10px;" class="container" id="div">
      <table class="table table-bordered table-striped h6">
        <thead>
        <th><input type="checkbox" style="margin-left: 9px;"></th>
        <th>店铺ID</th>
        <th>店铺名称</th>
        <th>店铺图标</th>
        <th>店铺描述</th>
        <th>商品数量</th>
        <th>总营业额</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td><input type="checkbox" @click="updateSelection($event, item.shop_id)"></td>
          <td>{{item.shop_id}}</td>
          <td>{{item.name}}</td>
          <td><img :src="item.image" alt="" style="width: 50px;"></td>
          <td>{{item.description}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.income}}</td>
          <td>
            <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#editModal" @click="findOne(item.shop_id)">修改</button>
            <button class="btn btn-danger btn-xs" @click="delOne(item.shop_id)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" >
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 id="myModalLabel">店铺编辑</h4>
          </div>
          <div class="modal-body">
            <table class="h5">
              <tr>
                <td>店铺名称</td>
                <td><input class="form-control" v-model="entity.name"></td>
              </tr>
              <br>
              <tr>
                <td>店铺图标</td>
                <td>
                  <input type="file" @change="uploading($event)" id="file" class="h6">
                  <img :src="entity.image" alt="" style="width: 60px">
                  <br>
                  <button @click="uploadFile" class="btn btn-xs btn-default">上传</button>
                </td>
              </tr>
              <br>
              <tr>
                <td>店铺描述</td>
                <td><input class="form-control" v-model="entity.description"></td>
              </tr>
              <br>
              <tr>
                <td>商品数量</td>
                <td><input class="form-control" v-model="entity.amount"></td>
              </tr>
              <br>
              <tr>
                <td>总营业额</td>
                <td><input class="form-control" v-model="entity.income"></td>
              </tr>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success btn-sm" data-dismiss="modal" aria-hidden="true" @click="save">保存</button>
            <button class="btn btn-default btn-sm" data-dismiss="modal" aria-hidden="true">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <cpaginate
      :pageCount="pageCount"
      :marginPages="marginPages"
      :rangePage="rangePage"
      :initPage="initPage"
      @pageEvent="pageEvent">
    </cpaginate>
  </div>
</template>

<script>
import cpaginate from './customPaginate'
export default {
  name: 'Brand',
  components: {
    cpaginate
  },
  data () {
    return {
      pageCount: 20,
      marginPages: 2,
      rangePage: 5,
      initPage: 0,
      list: [],
      selectIds: [],
      page: 1,
      entity: {}
    }
  },
  methods: {
    pageEvent: function (e) {
      this.page = e
      console.log(e)
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/shop/findPage?page=' + e + '&size=10'
      })
        .then(response => {
          this.list = response.data.rows
        })
        .catch(error => {
          alert(error)
        })
    },
    findOne: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/shop/findOne?id=' + id
      })
        .then(response => {
          this.entity = response.data
          console.log(this.entity)
        })
    },
    add: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/shop/add',
        data: this.entity
      })
        .then(response => {
          this.pageEvent(this.page)
          this.entity.shop_id = null
          this.entity.name = ''
          this.entity.image = ''
          this.entity.description = ''
          this.entity.amount = ''
          this.entity.income = ''
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('增加失败')
        })
    },
    update: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/shop/update',
        data: this.entity
      })
        .then(response => {
          this.pageEvent(this.page)
          this.entity.shop_id = null
          this.entity.name = ''
          this.entity.image = ''
          this.entity.description = ''
          this.entity.amount = ''
          this.entity.income = ''
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('更新失败')
        })
    },
    save: function () {
      if (this.entity.shop_id != null) {
        this.update()
      } else {
        this.add()
      }
    },
    updateSelection: function ($event, id) {
      if ($event.target.checked) {
        this.selectIds.push(id)
      } else {
        var index = this.selectIds.indexOf(id)
        this.selectIds.splice(index, 1)
      }
    },
    delOne: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/shop/deleteOne?id=' + id
      })
        .then(response => {
          this.pageEvent(this.page)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          console.log(error)
          alert('删除失败')
        })
    },
    del: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/shop/delete?ids=' + this.selectIds
      })
        .then(response => {
          this.pageEvent(this.page)
          // eslint-disable-next-line no-undef
          $('input:checkbox').prop('checked', false)
          this.selectIds = []
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('删除失败')
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
        url: 'http://localhost:8080/upload/upload',
        data: formdata,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .then(response => {
          this.entity.image = response.data.message
          console.log(this.file)
          alert('图片上传成功')
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('图片上传失败')
          console.log(error)
        })
    },
    refresh: function () {
      this.pageEvent(this.page)
      this.entity.shop_id = null
      this.entity.name = ''
      this.entity.image = ''
      this.entity.description = ''
      this.entity.amount = ''
      this.entity.income = ''
    }
  },
  mounted: function () {
    this.pageEvent(1)
  }
}
</script>

<style scoped>
  #editModal tr td:nth-of-type(odd){
    width: 105px;
  }
  #editModal tr td input{
    width: 455px;
  }
</style>
