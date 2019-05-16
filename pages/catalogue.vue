<template>
  <div class="container">
      <Article v-for="item in pageData" :key="item.title" :data="item"/>
      <Pagination :data="data" :page="page" @onChange="pageChange" :pageSize="pageSize"/>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import list from '@/api/attributes'
import Article from '@/components/article'
import Pagination from '@/components/pagination'

export default {
  components:{
    Article,
    Pagination
  },
  data(){
    return {
      data:[],
      page:1,
      pageSize:5,
      source:list
    }
  },
  computed:{
    pageData(){
      return this.data.slice((this.page - 1)* this.pageSize,this.page * this.pageSize)
    }
  },
  created(){
      this.data = this.source.sort(function(x,y){
        return dayjs(y.date).valueOf() - dayjs(x.date).valueOf()
      });
    
  },
  methods:{
    pageChange(page){
      this.page = page;
    }
  }
}
</script>

<style>

</style>
