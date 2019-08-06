<template>
  <div class="paginate_container">
    <paginate
      :page-count="pageCount"
      :margin-pages="marginPages"
      :page-range="rangePage"
      :initial-page="initPage"
      :click-handler="pageEvent"
      prev-text="上一页"
      next-text="下一页"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link-item'"
      :prev-class="'prev-item'"
      :prev-link-class="'prev-link-item'"
      :next-class="'next-item'"
      :next-link-class="'next-link-item'"
    ></paginate>
  </div>
</template>

<script>
import paginate from 'vuejs-paginate'
export default {
  props: {
    pageCount: Number,
    marginPages: Number,
    rangePage: Number,
    initPage: Number
  },
  components: {
    paginate
  },
  methods: {
    pageEvent: function (e) {
      console.log(e)
      this.$emit('pageEvent', e)
    }
  }
}
</script>

<style scoped>
  .paginate_container {
    /* widows: 100%;
    height: 20px; */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .page-item {
  }
  .page-link-item {
  }
  .prev-item {
  }
  .prev-link-item {
  }
  .next-item {
  }
  .next-link-item {
  }
</style>
