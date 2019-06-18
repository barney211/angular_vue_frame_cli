<template>
    <div>
      <div class="floor-title">
        造型设计<br/>
        <span class="line"></span>&nbsp;<span style="font-size: 0.14rem;">Model design</span>&nbsp;<span class="line"></span>
      </div>
      <div class="mainContent" style="" >
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="" style="margin-top:0.9rem;">
        <img src="" alt="" style="margin-top:0.9rem;">
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'app',
        data() {
            return {
                num1: 1
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
  .mainContent{
    height:8.35rem;width:62.5%;margin:0 auto 0.78rem;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    >img{
      width:5.46rem;
      height:3.8rem;
      border:1px solid red;
    }
  }
</style>
