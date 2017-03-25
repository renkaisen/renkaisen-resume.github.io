<template>
<div id="work">
    <div class="work-centent">
      <div class="work-left">
         <ul class="items">
            <li>
            <h3><i class="glyphicon glyphicon-globe"></i>杭州珺墨网络科技有限公司</h3>
            </li>
            <br/>
            <li>&nbsp;&nbsp;工作岗位：前端开发工程师 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2014年7月--2015年2月</li>
            <br/>
            <br/>
            <li>工作职责：
          <ul class="sub-items">
            <li>1,利用HTML、CSS、JavaScript进行代码构建，制作符合W3C标准的Web页面</li>
            <li>2,实现前端业务逻辑和各种页面特效以及交互效果</li>
            <li>3,处理浏览器兼容性,持续优化前端体验和响应速度；
            </li>
            <li></li>
            <li>4,配合后台开发人员完成数据交互与功能的实现</li>
          </ul>
        </li>
      </ul>
      </div>
      <div class="work-left">
         <ul class="items">
            <li>
            <h3><i class="glyphicon glyphicon-globe"></i>杭州珺墨网络科技有限公司</h3>
            </li>
            <br/>
            <li>&nbsp;&nbsp;工作岗位：前端开发工程师 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2014年7月--2015年2月</li>
            <br/>
            <br/>
            <li>工作职责：
          <ul class="sub-items">
            <li>1,利用HTML、CSS、JavaScript进行代码构建，制作符合W3C标准的Web页面</li>
            <li>2,实现前端业务逻辑和各种页面特效以及交互效果</li>
            <li>3,处理浏览器兼容性,持续优化前端体验和响应速度；
            </li>
            <li></li>
            <li>4,配合后台开发人员完成数据交互与功能的实现</li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
    <p class="bg-success">牵着一头小鹿回家</p>
</div>
</template>
<script>
</script>
<style>
  .bg-success{
    font-size: 18px;
     font-family:'SimHei';
     text-align: center;
  }
 .work-centent{
  height: 533px;
  position: relative;
 } 
 .work-centent .work-left{
    float: left;
    width: 50%;
    height: 100%;
 }
 .work-centent .work-left ul{
    padding-left: 30px;

 }
 .work-centent .work-left .items h3{
    font-size: 25px;
    font-weight:600;
 }
 .work-centent .work-left .items i{
    height: 30px;
    width: 45px;
    padding-left: 15px;
    color:#53979A;
 }
 .work-centent .work-left .items .sub-items li{
    padding-left:38px; 
    font-size: 15px;
    padding-top: 5px;

 }
 .work-centent .work-left .items li:nth-child(3){
    padding-left:38px; 
    font-size: 15px;
    font-weight: 600;
 }
  .work-centent .work-left .items li:nth-child(6){
    padding-left:45px; 
    font-size: 15px;
    font-weight: 600;
 }
 .work-centent .work-left .items::before{
    content: " ";
    display: block;
    position: absolute;
    width: 3px;
    left: 55px;
    bottom: 3px;
    height: 89%;
    background-color: #3c6066;
 }
  .work-centent .work-left .items::after{
    content: " ";
    display: block;
    position: absolute;
    width: 3px;
    right:490px;
    bottom: 3px;
    height: 89%;
    background-color: #3c6066;
 }
  .work-centent .work-right{
    float: left;
    width: 50%;
    height: 100%;
 }
</style>