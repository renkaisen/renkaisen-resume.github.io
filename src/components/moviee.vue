<template>
<div>
  <div class="moviee">
      <button type="button" class="btn btn-info btt" @click = 'search()'>正在上映</button>
      <button type="button" class="btn btn-info btt" @click = 'top()' >前250名</button>
      <button type="button" class="btn btn-info btt" @click = 'start()'>平分最高</button>
      <div class="Msearch">
          <input type="text"v-model = 'msg'  placeholder="电影搜索"><button type="button" class="btn btn-info btt" @click = 'newsearch()'>搜索</button>
      </div>
      <div class="list">
        <ul>
          <li v-for = '(val,index) in arr'>
             <a href="">
              <img :src= "val.images.large" alt="">
             </a>
             <div class="meta">
              <h5><span>{{val.title}}</span> <em>{{val.rating.average}}</em></h5>
               <div class="otherinfo">类型:<span>{{val.genres}}</span></div>
             </div>
          </li>
       </ul>
         <div class="paging">
                <label>总共：0条记录,第0/0页;</label>
                <!-- 加上disable类样式，表示按钮禁用状态 -->
                <button class="prev disable ">上一页</button>
                <button class="next">下一页</button>
          </div>
      
      </div>
  </div>
</div>
</template>
<script>
  export default{
    data(){
      return{
          arr:[],
          msg:'',
          t1:''
      }
    },
    // 正在热映: http://api.douban.com/v2/movie/in_theaters
  // 即将上映: http://api.douban.com/v2/movie/coming_soon
  // top250  : http://api.douban.com/v2/movie/top250
  // 搜索    : http://api.douban.com/v2/movie/search ?q=张艺
    methods:{
      search(){
        this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters').then(
          function (data) {
            this.arr = data.body.subjects;
          },function (err) { 
          })
      },
      top(){
        this.$http.jsonp('http://api.douban.com/v2/movie/top250').then(
          function (data) {
          this.arr = data.body.subjects;
        },function (err) {
          console.log('250错误')
        })
      },
      start(){
        this.$http.jsonp('http://api.douban.com/v2/movie/coming_soon').then(function (data) {
          this.arr = data.body.subjects;
        },function (err) {
          console.log('即将上映错误');
        })
      },
      //收索
      newsearch(){
        this.$http.jsonp('http://api.douban.com/v2/movie/search?q='+this.msg)
        .then(function (data) {
          console.log(this.msg);
          console.log('ddd');
            this.arr = data.body.subjects;
        },function (err) {
          console.log('搜索错误')
        })
      }
    },
    //生命周期
    mounted(){
      this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters').then(
          function (data) {
            this.arr = data.body.subjects;
          },function (err) { 
          })
    }
    
   
  }
  
</script>
<style>
  .moviee{
    height: 30px;
  }
  .moviee h4{
    float: left;
  }
  .Msearch{
     float: right;
    font-size: 14px;
  }
  .Msearch input{
    height: 33px;
    width: 200px;
    border: 2px solid #31b0d5;
    border-right: none;
    border-radius: 4px;
  }
  .Msearch .btt{
      width: 100px;
  }
  .list {
      margin: 0 auto;
  }

  .list ul {
      margin: 0 auto;
      width: 1080px;
      overflow: hidden;
  }

  .list ul li {
      margin: 12px 5px;
      padding: 4px;
      float: left;
      background: #fff;
      transition: all .3s;
  }

  .list ul li a {
      display: block;
  }

  .list ul li a img {
      width: 160px;
      height: 200px;
  }

  .list ul li .meta h5 {
      color: #555;
  }

  .list ul li .meta h4 span {
      display: inline-block;
      max-width: 100px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }

  .list ul li .meta h4 em {
      float: right;
      display: inline-block;
      color: #8c8c8c;
  }

  .list ul li .meta .otherinfo {
      margin-top: 3px;
      color: #7E7E7E;
  }

  .list ul li .meta .otherinfo span {
      margin-left: 4px;
      padding: 1px 3px;
      color: #999;
      background: #e6e6e6;
      font-size: 8px;
  }

  .list ul li:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
  }

  .list ul:after,
  .list ul:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
  }

  .list .paging {
      text-align: center;
  }

  .list .paging .prev,
  .list .paging .next {
      border: none;
      border-radius: 4px;
      background: #2aabd2;
      width: 100px;
      height: 40px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
  }






</style>