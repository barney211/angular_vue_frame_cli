<template>
    <div>
        <p>详情</p>

      <div>{{data1}}</div>
      <div>{{data2}}</div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'detail',
        data() {
            return {
                num1: 1
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        },
      created(){
       this.data1=this.$route.params.data1;
       this.data2=this.$route.params.data2;
       console.log(this.$route.params.data3);
      }
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>
