<template>
  <div>
  <el-carousel height="500px" arrow="never">
    <el-carousel-item v-for="item in images">
      <img  :src="item.img" alt="" style="width:100%;height:500px;"/>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'app',
        data() {
            return {
                num1: 1,
                images:[
                  {img:require("../img/banner.png")},
                  {img:require("../img/banner1.png")},
                  {img:require("../img/slider.png")},
                ]
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
  .el-carousel__button{
    background: black;
  }
</style>
