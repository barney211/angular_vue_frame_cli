<template>
    <div>
      <div class="floor-title">
        同步工程<br/>
        <span class="line"></span>&nbsp;<span style="font-size: 0.14rem;">Concurrent engineering</span>&nbsp;<span class="line"></span>
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
