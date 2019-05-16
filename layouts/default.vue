<template>
  <div class="layout">
    <div class="header">
        <div class="header-inner">
          <div class="title">
            MUGGLE
          </div>
          <div class="links">
            <nuxt-link to="/" class="link">Home</nuxt-link>
            <a href="https://github.com/mxggle" target="_b" class="link">GitHub</a>
            <a href="https://twitter.com/shuizheny" target="_b" class="link">Twitter</a>
            <!-- <nuxt-link to="/" class="link">ABOUT</nuxt-link> -->
          </div>
        </div>
    </div>
    <div class="content">
      <nuxt/>
    </div>
    <div class="footer">
      <!-- footer -->
    </div>
  </div>
</template>

<style lang="less" scoped>
@containerWidth:780px ;
.layout{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .header{
    .header-inner{
      margin: 0 auto;
      width: @containerWidth;
      height: 110px;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, .3);
      .title{
        margin: 30px 0 50px;
        font-size: 30px;
        color: #666;
      }
      .links{
        .link{
          margin: 0 12px;
          font-size: 15px;
          color: #666;
          transition: color .2s;
          &:hover{
            color: #444;
          }
        }
      }
    }
  }
  .content{
    padding: 50px 0px 60px;
    margin: 0 auto;
    width: @containerWidth;
  }
}
</style>