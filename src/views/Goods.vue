<template>
  <div>
    <div style="width: 100%;height: 30px;margin-top: 10px;" class="container">
      <div class="btn-group btn-group-sm" role="group" aria-label="...">
        <button type="button" class="btn btn-default" @click="del">删除</button>
        <button type="button" class="btn btn-default" @click="refresh">刷新</button>
      </div>
    </div>
    <div style="width: 100%;margin-top: 10px;" class="container" id="div">
      <table class="table table-bordered table-striped h6">
        <thead>
        <th><input type="checkbox" style="margin-left: 9px;"></th>
        <th>商品ID</th>
        <th>商品名称</th>
        <th>商品图片</th>
        <th>副标题</th>
        <th>打折前价格</th>
        <th>打折后价格</th>
        <th>商品介绍</th>
        <th>促销活动</th>
        <th>销售量</th>
        <th>库存</th>
        <th>评价数</th>
        <th>送积分</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td><input type="checkbox" @click="updateSelection($event, item.goods_id)"></td>
          <td>{{item.goods_id}}</td>
          <td>{{item.name}}</td>
          <td><img :src="item.image" alt="" style="width: 40px;height: 40px;"></td>
          <td>{{item.caption}}</td>
          <td>{{item.price_before}}</td>
          <td>{{item.price_after}}</td>
          <td>{{item.introduction}}</td>
          <td>{{item.activity}}</td>
          <td>{{item.sale}}</td>
          <td>{{item.reserve}}</td>
          <td>{{item.comment}}</td>
          <td>{{item.score}}</td>
          <td>
            <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#editModal" @click="findOne(item.goods_id)">修改</button>
            <button class="btn btn-danger btn-xs" @click="delOne(item.goods_id)">删除</button>
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
            <table class="table h5">
              <tbody>
              <tr>
                <td>商品名称</td>
                <td><input class="form-control" v-model="entity.name"></td>
              </tr>
              <tr>
                <td>商品图片</td>
                <td>
                  <input type="file" @change="uploading($event)" id="file" class="h6">
                  <img :src="entity.image" alt="" style="width: 100px">
                  <br>
                  <button @click="uploadFile" class="btn btn-xs btn-default">上传</button>
                </td>
              </tr>
              <tr>
                <td>副标题</td>
                <td><input class="form-control" v-model="entity.caption"></td>
              </tr>
              <tr>
                <td>打折前价格</td>
                <td><input class="form-control" v-model="entity.price_before"></td>
              </tr>
              <tr>
                <td>打折后价格</td>
                <td><input class="form-control" v-model="entity.price_after"></td>
              </tr>
              <tr>
                <td>商品介绍</td>
                <td><input class="form-control" v-model="entity.introduction"></td>
              </tr>
              <tr>
                <td>促销活动</td>
                <td><input class="form-control" v-model="entity.activity"></td>
              </tr>
              <tr>
                <td>销售量</td>
                <td><input class="form-control" v-model="entity.sale"></td>
              </tr>
              <tr>
                <td>库存</td>
                <td><input class="form-control" v-model="entity.reserve"></td>
              </tr>
              <tr>
                <td>评价数</td>
                <td><input class="form-control" v-model="entity.comment"></td>
              </tr>
              <tr>
                <td>送积分</td>
                <td><input class="form-control" v-model="entity.score"></td>
              </tr>
              </tbody>
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
  name: 'Goods',
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
      entity: []
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
        url: 'http://localhost:8080/goods/' + this.page + '/7'
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
        url: 'http://localhost:8080/goods/' + id
      })
        .then(response => {
          this.entity = response.data
        })
    },
    update: function () {
      this.axios({
        method: 'put',
        url: 'http://localhost:8080/goods/',
        data: this.entity
      })
        .then(response => {
          this.refresh()
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
        method: 'delete',
        url: 'http://localhost:8080/goods/' + id
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
        url: 'http://localhost:8080/goods?ids=' + this.selectIds
      })
        .then(response => {
          this.refresh()
          $('input:checkbox').prop('checked', false)
          this.selectIds = []
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
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
        url: 'http://localhost:9106/upload/',
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
      this.pageEvent(this.page + 1)
    }
  },
  mounted () {
    this.pageEvent(this.page)
  }
}
</script>

<style scoped>

</style>
