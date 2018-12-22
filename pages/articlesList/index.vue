<template>
  <div class="container">
      <!-- 文章列表 -->
    <Article v-for="item in list" :key="item.title" :data="item"/>
  </div>
</template>

<script>
import Article from './components/article'
export default {
  components: {
      Article
  },
  data(){
      return {
        list:[{
            date:'2018-12-22',
            title:'javascript原型链浅谈',
            content:'站在于斯屈达尔的渡口向对岸看时，伊斯坦布尔欧洲区的上空，总有一架飞机安静划过。阿塔图尔克机场就在离市区二十公里远的地方，我是在经过塔克西姆广场的时候，发现的第一架飞机。'
        },{
            date:'2018-12-12',
            title:'记录与分析',
            content:'我们说系统的简洁时，我们说 Less is more，说 KISS；我们说理论的简洁时，我们说 Ockham’s Razor，说“如无必要，勿增实体”。基于极少的假设，简单的几条公理，通过组合推导，演绎出大千世界，纷繁万物，这样的思维游戏，简直令人心醉神迷。。'
        },{
            date:'2018-12-12',
            title:'记录与分析',
            content:'我们说系统的简洁时，我们说 Less is more，说 KISS；我们说理论的简洁时，我们说 Ockham’s Razor，说“如无必要，勿增实体”。基于极少的假设，简单的几条公理，通过组合推导，演绎出大千世界，纷繁万物，这样的思维游戏，简直令人心醉神迷。。'
        },{
            date:'2018-12-12',
            title:'记录与分析',
            content:'我们说系统的简洁时，我们说 Less is more，说 KISS；我们说理论的简洁时，我们说 Ockham’s Razor，说“如无必要，勿增实体”。基于极少的假设，简单的几条公理，通过组合推导，演绎出大千世界，纷繁万物，这样的思维游戏，简直令人心醉神迷。。'
        },{
            date:'2018-12-12',
            title:'记录与分析',
            content:'我们说系统的简洁时，我们说 Less is more，说 KISS；我们说理论的简洁时，我们说 Ockham’s Razor，说“如无必要，勿增实体”。基于极少的假设，简单的几条公理，通过组合推导，演绎出大千世界，纷繁万物，这样的思维游戏，简直令人心醉神迷。。'
        },{
            date:'2018-12-12',
            title:'记录与分析',
            content:'我们说系统的简洁时，我们说 Less is more，说 KISS；我们说理论的简洁时，我们说 Ockham’s Razor，说“如无必要，勿增实体”。基于极少的假设，简单的几条公理，通过组合推导，演绎出大千世界，纷繁万物，这样的思维游戏，简直令人心醉神迷。。'
        }]
      }
  },
  created(){
  }
}
</script>

<style lang="less" scoped>

</style>
