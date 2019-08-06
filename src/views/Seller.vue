<template>
  <div>
    <div style="width: 100%;height: 40px;line-height: 40px;border-bottom: 1px solid rgba(153,153,153,0.2)" class="container">
      <span class="h4">商家管理</span>
    </div>
    <div style="width: 100%;height: 30px;margin-top: 10px;" class="container">
      <div class="btn-group btn-group-sm" role="group" aria-label="...">
        <button type="button" class="btn btn-default" @click="del">删除</button>
        <button type="button" class="btn btn-default" @click="refresh">刷新</button>
      </div>
    </div>
    <div style="width: 100%;margin-top: 10px;" class="container" id="div">
      <table class="table table-bordered table-striped h6">
        <thead>
        <th><input type="checkbox" style="margin-left: 10px;"></th>
        <th>商家ID</th>
        <th>商家名</th>
        <th>用户ID</th>
        <th>个人收入</th>
        <th>管理的店铺</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td><input type="checkbox" @click="updateSelection($event, item.seller_id)"></td>
          <td>{{item.seller_id}}</td>
          <td>{{item.seller_name}}</td>
          <td>{{item.user_id}}</td>
          <td>{{item.income}}</td>
          <td>{{item.shop_ids}}</td>
          <td>
            <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#editModal" @click="findOne(item.seller_id)">修改</button>
            <button class="btn btn-danger btn-xs" @click="delOne(item.seller_id)">删除</button>
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
            <h4 id="myModalLabel">商家修改</h4>
          </div>
          <div class="modal-body">
            <table class="h5">
              <tr>
                <td>商家名</td>
                <td>
                  <input  class="form-control" v-model="entity.seller_name">
                </td>
              </tr>
              <br>
              <tr>
                <td>用户ID</td>
                <td>
                  <input  class="form-control" v-model="entity.user_id">
                </td>
              </tr>
              <br>
              <tr>
                <td>个人收入</td>
                <td><input  class="form-control" v-model="entity.income"></td>
              </tr>
              <br>
              <tr>
                <td>管理的店铺</td>
                <td><input  class="form-control" v-model="entity.shop_ids"></td>
              </tr>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success btn-sm" data-dismiss="modal" aria-hidden="true" @click="update">保存</button>
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
  name: 'User',
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
      entity: {},
      userList: []
    }
  },
  methods: {
    pageEvent: function (e) {
      this.page = e
      console.log(e)
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/seller/findPage?page=' + e + '&size=10'
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
        url: 'http://localhost:8080/seller/findOne?id=' + id
      })
        .then(response => {
          this.entity = response.data
        })
    },
    update: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/seller/update',
        data: this.entity
      })
        .then(response => {
          this.pageEvent(this.page)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('修改失败')
        })
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
        url: 'http://localhost:8080/seller/deleteOne?id=' + id
      })
        .then(response => {
          this.pageEvent(this.page)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('删除失败')
        })
    },
    del: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/seller/delete?ids=' + this.selectIds
      })
        .then(response => {
          this.pageEvent(this.page)
          $('input:checkbox').prop('checked', false)
          this.selectIds = []
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
          console.log(error)
        })
    },
    findAllUser: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/user/findAll'
      })
        .then(response => {
          this.userList = response.data
        })
    },
    refresh: function () {
      this.pageEvent(this.page)
    }
  },
  mounted () {
    this.pageEvent(1)
    this.findAllUser()
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
