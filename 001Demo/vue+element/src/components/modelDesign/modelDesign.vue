<template>
    <div>
      <router-view/>
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

</style>
