<template>
  <div class="container">
      <nuxt-link :to="`/articles/${data.title}`">
        <div class="title">{{data.title}}</div>
        <div class="info">
            <span class="info-item">{{data.date | timeFormatter}}</span>
        </div>
        <div class="content">{{data.content}}</div>
      </nuxt-link>
  </div>
</template>

<script>

export default {
  components: {
  },
  props:{
		data:{
			type:Object,
			require:true
		}
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.container{
    margin-bottom: 40px;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 20px;
    .title{
        margin-bottom: 15px;
        font-size: 24px;
        color: #666;
    }
    .info{
        display: flex;
        .info-item{
            font-size: 12px;
            color: #999;
        }
    }
    .content{
        margin-top: 10px;
        font-size: 14px;
        color: #666;
        line-height: 21px;
    }
}
</style>