<template>
<div class="item">
    <h3 class="title" v-on:click="checked=!checked">{{ item.title }}</h3>
    <md-switch v-model="checked" id="my-test" name="my-test" class="md-primary leftside"></md-switch>
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
    .item {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .title {
        color: #465565;
    }
    
    .title:hover {
        color: #6FB485;
    }
</style>