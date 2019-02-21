<template>
  <section class="container">
      <Article v-for="item in data" :key="item.title" :data="item"/>
  </section>
</template>

<script>
import list from '@/api/attributes'
import Article from '@/components/article'
export default {
  components:{
    Article
  },
  data(){
    return {
      data:[]
    }
  },
  created(){
    this.data = list.sort(function(x,y){
      new Date(x.date).valueOf() - new Date(y.date).valueOf() 
    })
    console.log(this.data)
  }
}
</script>

<style>

</style>
