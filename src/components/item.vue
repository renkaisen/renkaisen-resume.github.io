<template>
  <div class="item">
  <p class="bg-success text-primary">技能清单</p>
    <select class="form-control">
      <option @click = 'get()'>javascript</option>
      <option>一</option>
      <option>起</option>
      <option>{{msg}}</option>
     
    </select>
    <br>
    <div class="item-content">
       <ul>
          <li v-for = '(val,index) in arr'>
            <p class="text-muted">{{val}}</p>
          </li>
       </ul>
    </div>
    
</div>

  </div>
</template>
<script>
  export default{
    data(){
      return { 
        arr:[
          '1,熟练HTML和CSS，熟悉Web标签语义化，掌握盒模型，能快速还原视觉设计，并处理主流浏览器的常见兼容问题；',
          '2，熟练使用JQuery实现文档操作，事件处理。对jQuery的内部封装有一定的研究，熟练使用AJAX，JSON，与后台协作完成数据交互，数据渲染，熟悉jsonp的实现原理，能够通过jsonp解决跨域问题',
'3，熟悉原生js，对面向对象设计思想，对闭包，原型链有深入了解。',
'4，熟悉HTML5+CSS3，对于阴影，边框，渐变等C3属性运用自如，熟悉CSS3弹性盒模型原理，对于CSS3三维立体变形(transform),过渡(transtion)及动画(animation)掌握熟练；',
'5，熟悉Bootstrap框架，实现响应式布局，掌握Bootstrap布局的核心模块栅格系统，以及CSS预编译器：LESS,SaSS.',
'6,了解angularJS框架，对MVC/MVVM开发思想有所了解，理解单页面应用程序；',
'7，了解nodeJS,熟悉3M(nvm版本管理工具，npm下载和管理包工具，nrm切换镜像源)；',
'8，了解前端自动化构建工具：Gulp，Webpack。熟练使用git版本管理工具对源代码进行管理，维护；',
'9，经常浏览GitHub、GitLab，博客园等开源社区。对一些热门技术或新技术有兴趣或了解，如vue.js,React.js.'
        ],
        msg:'加油！'
      }
    },
    methods:{
      get(){
        alert(1);
        /*switch(){
          case 1:
          break;
          case 2:
          break;
          case 3:
          break;
          case 4:
          break;
          default:
          break;
        }*/
      }
    }
  }
  //当点击的时候，展示不同的数据；
  
</script>
<style>
.item-content ul{
  padding: 0;
}
 .item-content li{
  padding-left: 20px;
  margin-top: 20px;
  background-color: #D9EDF7;
 }
 .item-content ul p{
  width: 100%;
  height: 100%;
  font-size: 15px;
 }
</style>