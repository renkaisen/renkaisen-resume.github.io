<!-- 个人信息 -->
<template>
 <!-- 模板里面一定要套一个根元素 -->
 <!-- 头部轮播图 -->
  <div id="news">
    <div class="news">
     <a class="btn btn-primary" role="button"data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    基本信息
     </a>
       <a class="btn btn-primary" role="button"data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
    教育經歷
     </a>
       <a class="btn btn-primary" role="button"data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
    個人格言
     </a>
       <a class="btn btn-primary" role="button"data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
    自我評價
     </a>
  <div class="collapse" id="collapseExample">
    <div class="well">
      <blockquote>
        <p v-for = '(val ,index) in arr'>{{val}}</p>
      </blockquote>
    </div>     
  </div>
     
  </div>
  <div class="collapse" id="collapseExample1">
    <div class="well">
      <blockquote>
        <p>毕业院校：中原工学院</p>
        <p>毕业院系：软件工程</p>
        <p>毕业时间：2000年-2034年</p>
        <p>获取证书：奖学金三等奖、优秀学员、优秀团支书、等等</p>
      </blockquote>
    </div>
  </div>
    <div class="collapse" id="collapseExample2">
    <div class="well">
      <blockquote>
        <p><h4>下雨了，我家喵想你了！</h4></p><p>
          可是，我沒有喵，也沒有你。其實我什麼都沒忘，只是太想你了，當初太想好好珍惜，才會慢慢數去你。
        </p>
        <footer>來自與開心的 <cite title="Source Title">任開心</cite></footer>
      </blockquote>
    </div>
  </div>
    <div class="collapse" id="collapseExample3">
    <div class="well">
      <blockquote>
        <p>1,抗压能力强，且在工作中有较强的调节能力；</p>
<p>2,能适当加班，良好的表达能力和沟通能力，具有责任心和团队合作精神;</p>
<p>3,有自主的学习和良好的解决问题的能力，经常浏览一些前端的博客，论坛；</p> 
<p>4,比如：github，码云，掘金，博客园，等学习前端技术网站,同时这些也是我在开发过程中遇到问题时获取解决问题的有效途径；</p>
<p>5,目前处于学习状态，对 angular 有特殊的兴趣，对于技术的世界一直有颗好奇心，乐于接受新知识；</p>    
      </blockquote>
    </div>
  </div>
  <img :src="url" height="260" width="194" alt="">
  </div>
  </div>
 
</template>

<script>
  export default{
    name:'news',
    data(){
      return {
       
        arr:['姓名：任开心','年龄：26','性别：男','电话：110-119-120','工作年限：3年','求职意向：Web前端，H5开发工程师','E-mail:renkaixin521@gmail.com'],
         url:'src/assets/images.jpg'
      }
    },
    //生命週期
    mounted(){
        
    }
  }
</script>

<style>
  #news img{
    position: absolute;
    right:150px;
    width: 300px;
    height: 500px;
    top: 125px;
    border-radius: 8px;
    opacity: 0.6;
  }

</style>