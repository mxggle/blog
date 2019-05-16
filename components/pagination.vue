<template>
  <div class="pagination-wrapper">
    <svg @click="pageChange('pre')" class="btn btn-prev" height="78" viewBox="0 0 24 24" width="78" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
      <path d="M0-.5h24v24H0z" fill="none"/>
    </svg>
    <svg  @click="pageChange('next')" class="btn btn-next" height="78" viewBox="0 0 24 24" width="78" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
      <path d="M0-.25h24v24H0z" fill="none"/>
    </svg>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array,
      require:true
    },
    page:{
      type:Number,
      require:true
    },
    pageSize:{
      type:Number,
      require:false,
      default:3
    }
  },
  data(){
    return {
      totalPage:1
    }
  },
  created(){
    this.totalPage = Math.ceil(this.data.length / this.pageSize);
  },
  methods:{
    pageChange(type){
      if (type === 'pre' && this.page > 1) {
        this.$emit('onChange',this.page - 1)
      }else if(type === 'next' && this.page < this.totalPage){
        this.$emit('onChange',this.page + 1)
      }
    }
  }
}
</script>

<style lang="less" scoped>

.pagination-wrapper {
  margin: 0 auto;
  width: 100%;
  height: 78px;
  font-size: 0;
  position: relative;
  text-align: center;
}


.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  fill: #000;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.6;
}

.btn-next {
  // left: calc(100% + 20px);
  right: 0  
}

.btn-prev {
  // right: calc(100% + 20px);
  left: 0  
}
</style>
