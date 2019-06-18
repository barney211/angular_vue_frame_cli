<template>
    <div>
      <div class="floor-title">
        {{title}}<br/>
        <span class="line"></span>&nbsp;<span style="font-size: 0.14rem;">{{ETitle}}</span>&nbsp;<span class="line"></span>
      </div>
      <div class="mainBody">
        <img :data-num="index" @mouseover="onMouseover" src="item.src" alt="" v-for="(item,index) in designList" :class="[index>2?'marginTop':'',hoverScale==index?'scaleStyle':'']">
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'app',
        data() {
            return {
              timer:null,
              title:'',
              ETitle:'',
               hoverScale:-1,
                num1: 1,
                designList:[
                  {src:''},
                  {src:''},
                  {src:''},
                  {src:''},
                  {src:''},
                  {src:''},
                ]
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
          onMouseover(e){
              var num=e.srcElement.dataset.num;
              this.hoverScale=num;
          },
          getDesignTitle(){
            if(this.title=='草图设计'){
              this.ETitle='sketch Design'
            }else if(this.title=='效果图设计'){
              this.ETitle='Effect design'
            }else if(this.title=='数字模型设计'){
              this.ETitle='Mathematical model design'
            }else{
              this.ETitle='Mud model design'
            }
          }
        },
      watch:{     //监听路由的变化在路由不变时可涮新页面类容
         '$route'(to,from){
           this.title=this.$route.query.title;
           this.getDesignTitle();
         }
      },

        mounted(){
          this.title=this.$route.query.title;
          this.getDesignTitle();
        }


    }
</script>

<style lang="less" rel="stylesheet/less">
   .mainBody{
     height:8.62rem;width:62.5%;margin:0 auto 0.9rem;
     display:flex;
     justify-content: space-between;
     flex-wrap: wrap;
     >img{
       width:3.63rem;
       height:4rem;
       border:1px solid red;

     }
   }
  .marginTop{
    margin-top: 0.52rem;
  }
  .scaleStyle{
    transform:scale(1.05);
    box-shadow:#f1f2f3 0px 0px 3px 5px;
  }
</style>
