<template>
    <div>
      <div class="floor-title">
        工程设计<br/>
        <span class="line"></span>&nbsp;<span style="font-size: 0.14rem;">Engineering design</span>&nbsp;<span class="line"></span>
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

<style>

</style>
