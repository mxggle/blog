<template>
  <div class="layout">
    <div class="header">
        <div class="header-inner">
          <div class="title">
            我的博客
          </div>
          <div class="links">
            <nuxt-link to="/index" class="link">HOME</nuxt-link>
            <a href="/index" class="link">GIHUB</a>
            <a href="/index" class="link">TWITTER</a>
            <nuxt-link to="/index" class="link">ABOUT</nuxt-link>
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
@containerWidth:600px ;
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
      height: 95px;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, .3);
      .title{
        margin: 30px 0 30px;
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
    padding: 60px 0px;
    margin: 0 auto;
    width: @containerWidth;
  }
}
</style>
