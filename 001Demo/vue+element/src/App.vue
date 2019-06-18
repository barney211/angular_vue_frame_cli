<template>
  <div id="app">
    <div class="header" style="width:100%;height:1.02rem;">
      <div class="header-title" style="height:1.02rem;width:62.5%;margin:0 auto;display:flex;justify-content: space-between">
        <img src="./img/logo_03.png" alt="" style="width:17%;margin-top: 0.31rem;height:0.4rem;">
        <div @mouseleave="leaverHover" class="navigator" style="width:64.8%;height:0.5rem;margin-top:0.26rem;display:flex;">
           <div @click="toPage(item.href,index)" @mouseenter="onHover" :data-index="index" :class="['sub-nav',isHover==index?'hoverStyle':'',fixPage==index?'fixStyle':'']" style="flex:1;font-size: 0.16rem;text-align: center;height:100%;line-height: 0.5rem;position: relative" v-for="(item,index) in subNav">{{item.title}}
               <div v-if="index==isHover" class="subDir">
                  <div @click.stop="toPageS(i.href,index,i.subDir)" @mouseover="subOnHover" @mouseleave="subMouseLeave" :data-subindex="subIndex" v-for="(i,subIndex) in subNav[index].subTitle" :class="['subDirD',underHover==subIndex?'bg1':'']">{{i.subDir}}</div>
               </div>
           </div>
        </div>
      </div>
    </div>
    <el-carousel arrow="never"  style="width:100%;height:6.02rem;">
      <el-carousel-item v-for="item in images" style="width:100%;height:100%">
        <img  :src="item.img" alt="" style="width:100%;height:100%"/>
      </el-carousel-item>
    </el-carousel>
    <router-view/>
    <div class="footer">
      <div class="top-footer" style="width:100%;height:1.5rem;background: #777777;">
         <div style="width:62.5%;height:100%;margin:0 auto;color:white;font-size:0.14rem;border:1px solid transparent;position:relative;">
             <div style="margin-top:0.25rem;"><a href="">版权信息</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">法律声明</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">加入我们</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">经销招聘</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">隐身政策</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">联系我们</a></div>
             <div style="margin-top:0.2rem;">合作伙伴：长安商用&nbsp;&nbsp;五十铃汽车&nbsp;&nbsp;上依红&nbsp;&nbsp;中国重汽&nbsp;&nbsp;一汽红塔&nbsp;&nbsp;江苏奥斯&nbsp;&nbsp;镇江飞池</div>
             <div style="margin-top:0.2rem;">迪科汽车专线：400-888-1888</div>
           <img src="" alt="" style="width:0.95rem;height:0.95rem;border:1px solid white;position: absolute;top:0.15rem;right:0;">
           <!--<div style="absolute;top:0.15rem;right:0;bottom: 0.18rem;font-size:0.12rem;">扫一扫，关注微信</div>-->
         </div>
      </div>
      <div class="bottom-footer" style="width:100%;height:0.38rem;background: #464646;color:white;text-align: center;padding-top:0.1rem;">ICP 备案 京ICP备08004883号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      fixPage:0,
      isHover:-1,
      underHover:-1,
      remenberPage:-1,
      images:[
        {img:require("./img/banner.png")},
        {img:require("./img/banner1.png")},
        {img:require("./img/slider.png")}
      ],
      subNav:[
        {title:'首页',href:'/',subTitle:[]},
        {title:'项目策划',href:'/projectPlan',subTitle:[]},
        {title:'造型设计',href:'/modelDesign',
          subTitle:[
            {subDir:'草图设计',href:'/modelDesign/sketch'},
            {subDir:'效果图设计',href:'/modelDesign/sketch'},
            {subDir:'数字模型设计',href:'/modelDesign/sketch'},
            {subDir:'泥模型设计',href:'/modelDesign/sketch'}
            ]
        },
        {title:'工程设计',href:'/engineeringDesign',subTitle:[]},
        {title:'同步工程',href:'/concurrentEngineering',subTitle:[]},
        {title:'验证工程',href:'/validationEng',subTitle:[]},
        {title:'技术咨询',href:'/techConsultation',subTitle:[]},
        {title:'项目案例',href:'/projects',
          subTitle:[
            {subDir:'乘务车',href:'/projects'},
            {subDir:'商用车',href:'/projects'},
            {subDir:'新能源',href:'/projects'}
          ]
        },
    ]

    }
  },
  methods:{
    onHover:function (e) {
      var ix=e.srcElement.dataset.index;
      this.isHover=parseFloat(ix);
      //this.fixPage=parseFloat(ix);
      this.fixPage=-1;
    },
    leaverHover:function () {
      this.isHover=-1;
      this.fixPage=this.remenberPage;
    },
    subOnHover:function (e) {
      this.underHover=e.srcElement.dataset.subindex;
    },
    subMouseLeave:function () {
      this.underHover=-1;
    },
    toPage:function (href,index) {
      this.$router.push({
        path:href
      })
      this.fixPage=index;
      this.remenberPage=index;
    },
    toPageS:function (href,index,dir) {
      this.$router.push({
        path:href,
        query:{title:dir}
      });
      this.remenberPage=index;
    }
  }
}
</script>

<style>
  *{
      padding:0;
     margin:0;
    box-sizing:border-box;
    font-family: "Microsoft YaHei";
  }
  a{
    text-decoration: none;
  }
  body{
    width:100%;
    min-width: 1360px;
    font-size:0.14rem;
    color:#333333;
  }
#app {
  width:100%;
}
.header,.footer{
  width:100%;
  height:100%;
}
.hoverStyle{
  box-shadow:-2px 2px 2px #e8e8e8;

  border-top:5px solid #319bd7;
  color:#319bd7;

}
.fixStyle{
  box-shadow:-2px 2px 2px #e8e8e8;

  border-top:5px solid #319bd7;
  color:#319bd7;
}
.el-carousel__indicator{
  margin-right:0.12rem;
}
  .el-carousel__button{
    background: #fff;
    width:0.4rem;
    height:0.06rem;
  }
  .el-carousel__button
  .is-active{

  }
  .sub-nav:hover{
    coursor:pointer
  }
.subDir{
  position: absolute;top:109%;left:0;width:150%;z-index:10;
}
  .subDirD{
    text-align: left;height:0.3rem;line-height: 0.3rem;
    background: #ffffff;
    color:#999999;
    padding-left:0.15rem;
    font-size:0.14rem;
  }
.bg1{
  background: #f1f1f1;
  color:#319bd7;
}
  .el-carousel__container{
    width:100%;
    height:100%;
  }
  .top-footer>div>div>a{

      color:white;
      font-size:0.14rem;

  }
  .middleContent{
    width:62.5%;height:100%;margin:0 auto;
    display: flex;
    justify-content: space-between;
  }
  .floor-title{
    font-size: 0.2rem;
    color:#333333;
    width:100%;
    height:0.52rem;
    text-align: center;
    margin:0.8rem 0 0.5rem;

  }
  .line{
    display:inline-block;
    width:0.3rem;
    height:0.02rem;
    background: #333333;
    position: relative;
    top:-0.05rem;
  }
</style>

