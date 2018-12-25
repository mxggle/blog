<template>
  <div class="container">
    <div class="bg-container"></div>
    <div class="content">
      <h1 class="title">SHUIZHENYANG</h1>
      <p class="bio">A Front-end Engineer</p>
      <div class="btn-group">
        <nuxt-link to="/articlesList" class="btn">START</nuxt-link>
      </div>
      <div class="links">
        <a href=""><i class="iconfont logo-github"></i></a>
        <a href=""><i class="iconfont logo-twitter"></i></a>
        <a href=""><i class="iconfont icon-rss"></i></a>
        <a href=""><i class="iconfont icon-mail"></i></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'full',
  components: {
  },
  created(){
  }
}
</script>

<style lang="less" scoped>
  .container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .bg-container{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background:#1B2030  url(https://area.sinaapp.com/bingImg/) center center no-repeat;
      background-size: cover;
			// -webkit-transform: translateZ(0) scale(1.0, 1.0);
			// transform: translateZ(0);
			// animation: grow 50s linear 10ms infinite;
      // transition: all 0.2s ease-in-out;
			z-index: -2
    }
    @keyframes grow {
      0% {
        transform: scale(1.4)
      }
      50% {
        transform: scale(1)
      }
      100% {
        transform: scale(1.4)
      }
    }
    .content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #ffffff;
      text-align: center;
      .title{
        margin-bottom: 15px;
        font-size: 32px;
        font-weight: bold;
      }
      .bio{
        margin-bottom: 15px;
        font-size: 20px;
      }
      .btn-group{
        margin-bottom: 20px;
        .btn{
          display: inline-block;
          padding: 5px 6px;
          background-color: #fff;
          color: #000;
        }
      }
    }
    .links{
      .iconfont{
        color: #fff;
      }
    }
  }
</style>
