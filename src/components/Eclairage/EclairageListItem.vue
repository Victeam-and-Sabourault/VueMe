<template>
<div class="item">
    <h3 class ="title">{{ item.title }}</h3>
    <md-switch v-model="checked" id="my-test" name="my-test" class="md-primary"></md-switch>
</div>
</template>

<script>
    export default {
        props: ['item'],
        data() {

            return {
                checked: false,
            }
        },
    }
</script>

<style scoped>
    .title {
        color: #465565;
    }
    
    .title:hover {
        color: #6FB485;
    }
</style>