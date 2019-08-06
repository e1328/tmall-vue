<template>
  <div>
    <div style="width: 100%;height: 40px;line-height: 40px;border-bottom: 1px solid rgba(153,153,153,0.2)" class="container">
      <span class="h4">用户管理</span>
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
        <th>用户ID</th>
        <th>用户名</th>
        <th>真实姓名</th>
        <th>手机号码</th>
        <th>电子邮箱</th>
        <th>创建时间</th>
        <th>更新时间</th>
        <th>性别</th>
        <th>状态</th>
        <th>积分</th>
        <th>头像</th>
        <th>是否手机验证</th>
        <th>是否邮箱验证</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td><input type="checkbox" @click="updateSelection($event, item.user_id)"></td>
          <td>{{item.user_id}}</td>
          <td>{{item.user_name}}</td>
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>{{item.created}}</td>
          <td>{{item.updated}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.status}}</td>
          <td>{{item.integral}}</td>
          <td>{{item.image}}</td>
          <td>{{item.is_phone_check}}</td>
          <td>{{item.is_email_check}}</td>
          <td>
            <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#editModal" @click="findOne(item.user_id)">修改</button>
            <button class="btn btn-danger btn-xs" @click="delOne(item.user_id)">删除</button>
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
            <h4 id="myModalLabel">用户修改</h4>
          </div>
          <div class="modal-body">
            <table class="h5">
              <tr>
                <td>用户名</td>
                <td><input  class="form-control" v-model="entity.user_name"></td>
              </tr>
              <br>
              <tr>
                <td>真实姓名</td>
                <td><input  class="form-control" v-model="entity.name"></td>
              </tr>
              <br>
              <tr>
                <td>手机号码</td>
                <td><input  class="form-control" v-model="entity.phone"></td>
              </tr>
              <br>
              <tr>
                <td>电子邮箱</td>
                <td><input  class="form-control" v-model="entity.email"></td>
              </tr>
              <br>
              <tr>
                <td>性别</td>
                <td><input  class="form-control" v-model="entity.sex"></td>
              </tr>
              <br>
              <tr>
                <td>状态</td>
                <td><input  class="form-control" v-model="entity.status"></td>
              </tr>
              <br>
              <tr>
                <td>积分</td>
                <td><input  class="form-control" v-model="entity.integral"></td>
              </tr>
              <br>
              <tr>
                <td>是否手机验证</td>
                <td><input  class="form-control" v-model="entity.is_phone_check"></td>
              </tr>
              <br>
              <tr>
                <td>是否邮箱验证</td>
                <td><input  class="form-control" v-model="entity.is_email_check"></td>
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
      entity: {}
    }
  },
  methods: {
    pageEvent: function (e) {
      this.page = e
      console.log(e)
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/user/findPage?page=' + e + '&size=10'
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
        url: 'http://localhost:8080/user/findOne?id=' + id
      })
        .then(response => {
          this.entity = response.data
        })
    },
    update: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/user/update',
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
        url: 'http://localhost:8080/user/deleteOne?id=' + id
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
        url: 'http://localhost:8080/user/delete?ids=' + this.selectIds
      })
        .then(response => {
          this.pageEvent(this.page)
          $('input:checkbox').prop('checked', false)
          this.selectIds = []
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    refresh: function () {
      this.pageEvent(this.page)
    }
  },
  mounted () {
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
