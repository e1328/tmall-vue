<template>
  <div>
    <div style="width: 100%;height: 40px;line-height: 40px;" class="container">
      <span class="h4">分类管理</span>
    </div>
    <div>
      <ol class="breadcrumb">
        <li @click="grade=1;selectList(sort0)">顶级分类列表</li>
        <li @click="grade=2;selectList(sort1)">{{sort1.name}}</li>
        <li @click="grade=3;selectList(sort2)">{{sort2.name}}</li>
      </ol>
    </div>
    <div style="width: 100%;height: 30px;margin-top: 10px;" class="container">
      <div class="btn-group btn-group-sm" role="group" aria-label="...">
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#editModal">新增</button>
        <button type="button" class="btn btn-default">删除</button>
        <button type="button" class="btn btn-default">刷新</button>
      </div>
    </div>
    <div style="width: 100%;margin-top: 10px;" class="container" id="div">
      <table class="table table-bordered table-striped h6">
        <thead>
        <th><input type="checkbox" style="margin-left: 9px;"></th>
        <th>分类ID</th>
        <th>分类名称</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td><input type="checkbox"></td>
          <td>{{item.sort_id}}</td>
          <td>{{item.name}}</td>
          <td>
            <span v-if="grade!=3">
              <button class="btn btn-success btn-xs" @click="setGrade(grade+1);selectList(item)">查询下级</button>
            </span>
            <button class="btn btn-success btn-xs" data-toggle="modal" data-target="#editModal" @click="findOne(item.sort_id)">修改</button>
            <span v-if="grade==3">
              <button class="btn btn-danger btn-xs" @click="delOne(item.sort_id)">删除</button>
            </span>
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
            <h4 id="myModalLabel">商品分类编辑</h4>
          </div>
          <div class="modal-body">
            <table class="h5">
              <tr>
                <td>上级商品分类</td>
                <td>
                  {{sort1.name}} >>  {{sort2.name}}
                </td>
              </tr>
              <br>
              <tr>
                <td>商品分类名称</td>
                <td><input  class="form-control" placeholder="商品分类名称" v-model="entity.name"></td>
              </tr>
              <br>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success btn-sm" data-dismiss="modal" aria-hidden="true" @click="save">保存</button>
            <button class="btn btn-default btn-sm" data-dismiss="modal" aria-hidden="true" @click="close">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  data () {
    return {
      grade: 1,
      entity: {
        sort_id: null,
        parent_id: 0
      },
      list: [],
      sort0: {
        name: '',
        sort_id: 0
      },
      sort1: {},
      sort2: {}
    }
  },
  methods: {
    // eslint-disable-next-line camelcase
    findByParentId: function (parent_id) {
      // eslint-disable-next-line camelcase
      this.entity.parent_id = parent_id
      this.axios({
        method: 'get',
        // eslint-disable-next-line camelcase
        url: 'http://localhost:8080/sorts/find/' + parent_id
      })
        .then(response => {
          // eslint-disable-next-line no-unused-expressions
          this.list = response.data
          console.log(response.data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('失败')
        })
    },
    setGrade: function (value) {
      this.grade = value
    },
    // eslint-disable-next-line camelcase
    selectList: function (entity) {
      // eslint-disable-next-line eqeqeq
      if (this.grade == 1) {
        this.sort1 = {}
        this.sort2 = {}
      }
      // eslint-disable-next-line eqeqeq
      if (this.grade == 2) {
        // eslint-disable-next-line camelcase
        this.sort1 = entity
        this.sort2 = {}
      }
      // eslint-disable-next-line eqeqeq
      if (this.grade == 3) {
        // eslint-disable-next-line camelcase
        this.sort2 = entity
      }
      this.findByParentId(entity.sort_id)
    },
    add: function () {
      this.axios({
        method: 'post',
        url: 'http://localhost:8080/sorts',
        data: this.entity
      })
        .then(response => {
          this.findByParentId(this.entity.parent_id)
          this.entity.name = ''
          this.entity.sort_id = null
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    update: function () {
      this.axios({
        method: 'put',
        url: 'http://localhost:8080/sorts',
        data: this.entity
      })
        .then(response => {
          this.findByParentId(this.entity.parent_id)
          this.entity.name = ''
          this.entity.sort_id = null
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    findOne: function (id) {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/sorts/' + id
      })
        .then(response => {
          this.entity = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    },
    close: function () {
      this.entity.name = ''
    },
    save: function () {
      if (this.entity.sort_id != null) {
        this.update()
      } else {
        this.add()
      }
    },
    delOne: function (id) {
      this.axios({
        method: 'delete',
        url: 'http://localhost:8080/sorts/' + id
      })
        .then(response => {
          this.findByParentId(this.entity.parent_id)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('fail')
        })
    }
  },
  mounted () {
    this.findByParentId(0)
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
