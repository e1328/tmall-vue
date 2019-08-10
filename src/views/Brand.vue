<template>
  <div>
    <div style="width: 100%;height: 40px;line-height: 40px;" class="container">
      <span class="h4">品牌管理</span>
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
        <th>品牌ID</th>
        <th>品牌名称</th>
        <th>品牌首字母</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td><input type="checkbox" @click="updateSelection($event, item.brand_id)"></td>
          <td>{{item.brand_id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.first_char}}</td>
          <td>
            <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#editModal" @click="findOne(item.brand_id)">修改</button>
            <button class="btn btn-danger btn-xs" @click="delOne(item.brand_id)">删除</button>
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
            <h4 id="myModalLabel">品牌编辑</h4>
          </div>
          <div class="modal-body">
            <table class="h5">
              <tr>
                <td>品牌名称</td>
                <td><input class="form-control" v-model="entity.name"></td>
              </tr>
              <br>
              <tr>
                <td>首字母</td>
                <td><input class="form-control" v-model="entity.first_char"></td>
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
      page: 0,
      entity: {}
    }
  },
  methods: {
    pageEvent: function (e) {
      if (e > 0) {
        e = e - 1
      }
      this.page = e
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/brands/' + this.page + '/10'
      })
        .then(response => {
          console.log(response)
          this.list = response.data.rows
        })
        .catch(error => {
          alert(error)
        })
    },
    findOne: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/brands/' + id
      })
        .then(response => {
          this.entity = response.data
        })
    },
    add: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/brands',
        data: this.entity
      })
        .then(response => {
          this.refresh()
          this.entity.name = ''
          this.entity.first_char = ''
          this.entity.brand_id = null
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('增加失败')
        })
    },
    update: function () {
      this.axios({
        method: 'put',
        url: 'http://localhost:8080/brands',
        data: this.entity
      })
        .then(response => {
          this.refresh()
          this.entity.name = ''
          this.entity.first_char = ''
          this.entity.brand_id = null
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('更新失败')
        })
    },
    save: function () {
      if (this.entity.brand_id != null) {
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
        method: 'delete',
        url: 'http://localhost:8080/brands/' + id
      })
        .then(response => {
          this.refresh()
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('删除失败')
        })
    },
    del: function () {
      this.axios({
        method: 'delete',
        url: 'http://localhost:8080/brands?ids=' + this.selectIds
      })
        .then(response => {
          this.refresh()
          // eslint-disable-next-line no-undef
          $('input:checkbox').prop('checked', false)
          this.selectIds = []
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('删除失败')
        })
    },
    refresh: function () {
      this.pageEvent(this.page + 1)
    }
  },
  mounted: function () {
    this.pageEvent(this.page)
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
