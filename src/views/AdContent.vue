<template>
  <div>
    <div style="width: 100%;height: 40px;line-height: 40px;border-bottom: 1px solid rgba(153,153,153,0.2)" class="container">
      <span class="h4">广告分类管理</span>
    </div>
    <div style="width: 100%;height: 30px;margin-top: 10px;" class="container">
      <div class="btn-group btn-group-sm" role="group" aria-label="...">
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#editModal">新增</button>
        <button type="button" class="btn btn-default" @click="del">删除</button>
        <button type="button" class="btn btn-default" @click="refresh">刷新</button>
      </div>
    </div>
    <div style="width: 100%;margin-top: 10px;" class="container" id="div">
      <table class="table table-bordered">
        <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td>广告ID</td>
          <td>标题</td>
          <td>链接</td>
          <td>图片</td>
          <td>状态</td>
          <td>排序</td>
          <td>广告分类ID</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td><input type="checkbox" @click="updateSelection($event, item.id)"></td>
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.url}}</td>
          <td><img :src="item.pic" alt="" style="width: 200px;"></td>
          <td>{{item.status}}</td>
          <td>{{item.sort_id}}</td>
          <td>{{item.type_id}}</td>
          <td>
            <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#editModal" @click="findOne(item.id)">修改</button>
            <button class="btn btn-danger btn-xs" @click="delOne(item.id)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" >
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">×</button>
            <h4 id="myModalLabel">广告编辑</h4>
          </div>
          <div class="modal-body">
            <table class="table h5">
              <tr>
                <td>标题</td>
                <td><input class="form-control" placeholder="标题" v-model="entity.title"></td>
              </tr>
              <br>
              <tr>
                <td>链接</td>
                <td><input class="form-control" placeholder="链接" v-model="entity.url"></td>
              </tr>
              <br>
              <tr>
                <td>图片</td>
                <td>
                  <input type="file" @change="uploading($event)" id="file" class="h6">
                  <img :src="entity.pic" alt="" style="width: 200px;">
                  <br>
                  <button @click="uploadFile" class="btn btn-xs btn-default">上传</button>
                </td>
              </tr>
              <br>
              <tr>
                <td>状态</td>
                <td><input class="form-control" placeholder="状态" v-model="entity.status"></td>
              </tr>
              <br>
              <tr>
                <td>排序</td>
                <td><input class="form-control" placeholder="排序" v-model="entity.sort_id"></td>
              </tr>
              <br>
              <tr>
                <td>广告分类名称</td>
                <td>
                  <select name="" id="sort" class="form-control" @change="changeType">
                    <option :value="item.id" v-for="(item, index) in adTypeList" :key="index">{{item.name}}</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success btn-sm" data-dismiss="modal" aria-hidden="true" @click="save">保存</button>
            <button class="btn btn-default btn-sm" data-dismiss="modal" aria-hidden="true" @click="close">关闭</button>
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
  name: 'AdContent',
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
      file: '',
      adTypeList: []
    }
  },
  methods: {
    pageEvent: function (e) {
      this.page = e
      console.log(e)
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/ad_content/findPage?page=' + e + '&size=4'
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
        url: 'http://localhost:8080/ad_content/findOne?id=' + id
      })
        .then(response => {
          this.entity = response.data
        })
    },
    add: function () {
      console.log(this.entity.pic)
      this.entity.type_id = 1
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/ad_content/add',
        data: this.entity
      })
        .then(response => {
          this.pageEvent(this.page)
          this.entity.id = null
          this.entity.title = ''
          this.entity.url = ''
          this.entity.pic = ''
          this.entity.status = ''
          this.entity.sort_id = ''
          this.entity.type_id = ''
        })
      // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('增加失败')
          console.log(error)
        })
    },
    update: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/ad_content/update',
        data: this.entity
      })
        .then(response => {
          this.pageEvent(this.page)
          this.entity.id = null
          this.entity.title = ''
          this.entity.url = ''
          this.entity.pic = ''
          this.entity.status = ''
          this.entity.sort_id = ''
          this.entity.type_id = ''
        })
      // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('更新失败')
        })
    },
    save: function () {
      if (this.entity.id != null) {
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
        url: 'http://localhost:8080/ad_content/deleteOne?id=' + id
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
        url: 'http://localhost:8080/ad_content/delete?ids=' + this.selectIds
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
    refresh: function () {
      this.pageEvent(this.page)
    },
    close: function () {
      this.entity = []
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
          this.entity.pic = response.data.message
          console.log(this.entity.pic)
          alert('图片上传成功')
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('图片上传失败')
          console.log(error)
        })
    },
    findAllAdType: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/ad_type/findAll'
      })
        .then(response => {
          this.adTypeList = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    changeType: function () {
      // eslint-disable-next-line no-undef
      this.entity.type_id = sort.options[sort.selectedIndex].value
    }
  },
  mounted: function () {
    this.pageEvent(1)
    this.findAllAdType()
  }
}
</script>

<style scoped>

</style>
