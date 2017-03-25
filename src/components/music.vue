<!-- 音乐 -->
<template>
  <div class="music">
  <!-- <span class="bg-success">乐天派</span> -->
    <h2>{{msg}}</h2>
    <div class="video">
    <!-- 让谁运动就要放到transition标签里面 -->
    <transition name = 'fade'>
      <div @click = 'play()' class="cover" v-show = 'bsing'>
        <i class="glyphicon glyphicon-expand"></i>
      </div>
    </transition>  
      <img src="../assets/images.jpg" height="260" width="194" alt="">
    </div>
    <div class="wrods">
      <h2 class="text-primary">喜欢你--开❤</h2>
      <h5 class="text-primary">&nbsp&nbsp原谅一生放荡不羁，爱自由</h5>
      <div class="wrods-ci">
          <p class="text-danger">细雨带风湿透黄昏的街道</p>
          <p class="text-danger">望向孤单的晚灯</p>
          <p class="text-danger">望向孤单的晚灯</p>
          <p class="text-danger">再次泛起心里无数的思念</p>
          <p class="text-danger">以往片刻欢笑仍挂在脸上</p>
          <p class="text-danger">抹去雨水双眼无故地仰望</p>
          <p class="text-danger" >抹去雨水双眼无故地仰望</p>
          <p class="text-danger">抹去雨水双眼无故地仰望</p>
          <p class="text-danger">愿你此刻可会知</p>
          <p class="text-danger">是我衷心的说声</p>
          <p class="text-danger">喜欢你 那双眼动人</p>
          <p class="text-danger">笑声更迷人</p>
          <p class="text-danger">愿再可 轻抚你</p>
          <p class="text-danger">那可爱面容</p>
          <p class="text-danger">挽手说梦话</p>
          <p class="text-danger">像昨天 你共我</p>
          <p class="text-danger">满带理想的我曾经多冲动</p>
          <p class="text-danger">愿你此刻可会知</p>
          <p class="text-danger">是我衷心的说声</p>
          <p class="text-danger">喜欢你 那双眼动人</p>
          <p class="text-danger">笑声更迷人</p>
          <p class="text-danger">愿再可 轻抚你</p>
          <p class="text-danger">那可爱面容</p>
          <p class="text-danger">挽手说梦话</p>
          <p class="text-danger">屡怨与她相爱难有自由</p>
          <p class="text-danger">屡怨与她相爱难有自由</p>
          <p class="text-danger">屡怨与她相爱难有自由</p>
      </div>
    </div>
      <audio src="./love.mp3" id="audio" preload="auto" autoplay="autoplay"loop="loop"></audio>
  </div>
</template>

<style>
  .music{
    position: relative;
    width: 100%;
    height: 600px;
  }
  .music .video{
      height: 47%;
      width: 20%;
      position: absolute;
      left: 10%;
      top: 100px;
      overflow: hidden;
  }
  .music .video img{
      width: 100%;
      height: 100%;
  }
  .music .video .cover{
      height: 50px;
      width: 50px;
      position: absolute;
      left: 40%;
      top:40%;
      background-color: #3B3C3B;
      opacity: 0.6;
      border-radius: 50%;
      cursor: pointer;
  }
   .music .video .cover i{
      font-size: 30px;
      color: #fff;
      padding-top: 8px;
      padding-left: 10px;
   }
  .music .wrods{
      height: 53%;
      width: 33%;
      position: absolute;
      right: 18%;
      top: 0px;
  }
  .music .wrods .wrods-ci{
    height: 300px;
    width: 100%;
    position: absolute;
     overflow:auto;
  }

  /*动画设置*/
  .fade-enter-active,.fade-leave-active{
    transition: 10s all ease;
  }
  //初始转态
  .fade-enter,.fade-leave{
    opacity: 1;
  }
  //移动的
  .fade-enter,.fade-leave-active{
      transform: translateX(100px);
      transform: translateY(100px);
      opacity: 0.5;
  }
</style>

<script>
 export default {
    data(){
      return {
        msg :'乐天派',
        bsing:true,    
      }
    },
    methods:{
      //动画，要给div设置动画名称transition
       play(){
        this.bsing = !this.bsing;
       }
    }

 }
</script>