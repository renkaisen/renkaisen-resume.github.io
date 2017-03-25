<template>
  <div id="app">


  <!-- 侧边栏 -->
  <div class="sidebar">
      <!-- 头像 -->
      <div class="sidebar-top">
        <a href="#"><img src='./assets/images.jpg' class="img-circle"></a>
        <h4>任开森</h4>
        <h5>前端工程师</h5>
        <h5><i class="glyphicon glyphicon-phone-alt"></i> 139-4998-2389</h5>

      </div>
      <!-- 菜单 -->
      <div class="menu">
        <ul>
          <li><router-link class = 'glyphicon glyphicon-heart' to ='/nav'> 个人信息</router-link></li>

          <li><router-link class = 'glyphicon glyphicon-star' to ='/Item'> 技能展示</router-link></li>

          <li><router-link class = ' glyphicon glyphicon-heart-empty'to ='/Work'> 工作经验</router-link></li>

          <li><router-link class = 'glyphicon glyphicon-star-empty 'to ='/Success'> 项目经验one</router-link></li>

          <li><router-link class = 'glyphicon glyphicon-stats 'to ='Navcontent'> 项目经验two</router-link></li>

          <li><router-link class = 'glyphicon glyphicon-headphones' to ='/Music'> {{msg}}</router-link></li>
        </ul>
      </div>
      <div class="bottom"> 
        <h5><a href="https://renkaisen.github.io/">https://renkaisen.github.io/</a></h5>
      </div>
  </div>
  <!-- 顶头导航 中心-->
  <div class="main">
  <div class="header">
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
       <a class="navbar-brand" href="#">
       <i class="glyphicon glyphicon-heart-empty fa fa-user"></i>
       人心中心</a>
      </div>
     <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      <ul class="nav navbar-nav navbar-right">
        <li><router-link class = 'glyphicon glyphicon-user fa fa-user'to ='/Moviee'>电影排行榜</router-link></li>
        <li><router-link class = 'glyphicon glyphicon-pawn fa fa-user'to ='/Music'>音乐</router-link></li>
      </ul>
     </div>
     </div>
   </nav>
  </div>
    <audio src="../assets/love.mp3" id="audio" preload="auto"autoplay="autoplay" loop="loop"></audio>
  </div>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your renk'
    }
  }
}
</script>

<style >
.sidebar{
  position: fixed;
  left: 0;
  top: 0;
  width: 180px;
  height: 100%;
  background-color: #2f4050;

}
.sidebar .sidebar-top{
  margin-top: 30px;
  text-align: center;
  color: #fff;
}
.sidebar .sidebar-top img{
   width: 100px;
  height: 100px;
  border: 2px solid rgba(255, 255, 255, 0.4);
}
.sidebar .sidebar-top h5{
  color: #529C9B;
}
/*侧边栏导航*/
.menu{
  margin-top: 20px;
  font-size: 15px;
}
.menu li{
  
  margin-top: 15px;

}
.menu li a{
  display: block;
  line-height: 1;
  height: 20px;
  color: #529C9B;
  text-decoration: none;
  
}
.menu li a:hover{
  color: red;
  font-size: 17px;
}
/*底部*/
.bottom{
  position: absolute;
  left: 0;
  bottom: 60px;
  font-size: 15px;
  overflow: hidden;
  /*text-align: center;*/
  padding-left: 8px;
  color: #529C9B;
}

/*顶头中心，*/
.main{
  /*height: 600px;*/
  background-color: pink;
  margin-left: 180px;
}
.main .navbar{
  background-color: #C62F2F;
}
/*路由显示区域*/
.show{
  margin-left: 180px;
}

</style>
