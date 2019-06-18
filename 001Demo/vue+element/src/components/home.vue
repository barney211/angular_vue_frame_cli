<template>
    <div>
      <div class="floor-title">
        公司简介<br/>
        <span class="line"></span>&nbsp;<span style="font-size: 0.14rem;">Companey profile</span>&nbsp;<span class="line"></span>
      </div>
      <div class="first-floor" style="height:5.68rem;width:100%;">
        <div class="middleContent" style="">
          <img src="" alt="" style="width:6.44rem;height:100%;border:1px solid red;display:block">
          <div style="height:100%;width:5.11rem;padding-top:1.3rem;line-height:0.32rem;">&nbsp;&nbsp;重庆迪科汽车科技集团成立于2000年9月，从事汽车整车设计的专业化技术公司，设计团队共有120余名，是中国成立最早的汽车设计公司之一。依托迪科汽车研究公司，逐步完善产业链，形成集团化。
            工业设计产业联盟会长单位重庆大学校企合作CAE工程中心、长三角新能源汽车研究院支撑单位等。十八年的技术积累，
            创新的商业模式，推动了迪科科技从技术服务企业向现代化的高科技实体企业发展。 迪科汽车立足于专用车的特点，与长安、庆铃、福田等主机厂合作，共享销售平台向国内外辐射！</div>
        </div>

      </div>
      <div class="floor-title">
        企业平台<br/>
        <span class="line"></span>&nbsp;<span style="font-size:0.14rem;">Enterprise platform</span>&nbsp;<span class="line"></span>
      </div>
      <div class="second-floor" style="height:5.9rem;width:100%;">
        <div class="middleContent" style="">
          <img src="" alt="" style="width:5.94rem;height:100%;border:1px solid red;display:block">
          <div style="height:100%;width:5.83rem;display:flex;flex-wrap: wrap;justify-content: space-between">
            <img src="" alt="" class="platformPic" >
            <img src="" alt="" class="platformPic" >
            <img src="" alt="" class="platformPic" style="margin-top:0.25rem;">
            <img src="" alt=""  class="platformPic"style="margin-top:0.25rem;">
          </div>
        </div>
      </div>
      <div class="floor-title">
        发展历程<br/>
        <span class="line"></span>&nbsp;<span style="font-size:0.14rem;">Development history</span>&nbsp;<span class="line"></span>
      </div>
      <div class="floor-title">
        走进迪科<br/>
        <span class="line"></span>&nbsp;<span style="font-size:0.14rem;">Go into dike</span>&nbsp;<span class="line"></span>
      </div>
      <div class="fourth-floor" style="height:7.45rem;width:100%;margin-bottom: 0.8rem;">
        <div class="middleContent" style="flex-wrap:wrap;">
          <img src="" alt="" class="DikePic" >
          <img src="" alt="" class="DikePic" >
          <img src="" alt="" class="DikePic" >
          <img src="" alt="" class="DikePic" style="margin-top:0.8rem;">
          <img src="" alt="" class="DikePic" style="margin-top:0.8rem;">
          <img src="" alt="" class="DikePic" style="margin-top:0.8rem;">

        </div>
      </div>
        <!--<el-row>-->
          <!--<el-col :span="8" ><div class="grid-content bg-purple">你好</div></el-col>-->
          <!--<el-col :span="8" ><div class="grid-content bg-purple">真好</div></el-col>-->
          <!--<el-col :span="8" ><div class="grid-content bg-purple">好好</div></el-col>-->
        <!--</el-row>-->
        <!--<p>{{test}}</p>-->

      <!--<div>-->
        <!--Count is {{count}}-->
        <!--<el-button type="success" @click="increment(3)">+</el-button>-->
        <!--<el-button type="danger" @click="decrement(2)">-</el-button>-->
      <!--</div>-->
      <!--<div>-->
        <!--<el-button type="primary" @click="toDetail">到详情</el-button>-->
      <!--</div>-->
      <!--<div>-->
        <!--<el-button type="success" @click="toDetail1">到详情</el-button>-->
      <!--</div>-->

    </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'home',
        data() {
            return {
                num1: 1
            };
        },
        methods: {
          ...mapActions([
            'increment',
            'decrement',
            'setValue'
          ]),
            handleChange(value) {
                console.log(value);
            },
          toDetail(){
            this.$router.push({
              path:'/detail',
              query:{
                name:'名字',
                data:'数据'
              }
            });
          },
          toDetail1(){
            this.$router.push({
              name:'detail',
              params:{
                data1:123456,
                data2:123456789,
                data3:this.count
              }
            })
          },
          show(){
           // console.log("对的");
          }
        },
      computed:{
        ... mapGetters([           //与vuex中的getters关联
                    'count',
                    'test'
                       ]),
      },
      mounted(){
          this.show();
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
  .platformPic{
    width:2.81rem;height:2.81rem;border:1px solid red;display:block;
  }
  .DikePic{
    width:3.34rem;height:3.34rem;border:1px solid red;display:block;
  }
   /*div{*/
     /*>p{*/
       /*color:red;*/
     /*}*/
   /*}*/
   /*.bg-purple {*/
     /*background: #d3dce6;*/
   /*}*/
   /*.grid-content {*/
     /*border-radius: 4px;*/
     /*min-height: 36px;*/
     /*text-align: left;*/
   /*}*/
</style>
