<template>
<div class="pageTitle">
    <div class="titleImage">
        <img :src="titleImage"></img>
    </div>
    <h1><slot></slot></h1>
</div>
</template>

<script>
    export default {
        props: ['titleImage'],
        data() {
            return {}
        },
    }
</script>

<style scoped>
    .pageTitle {
        background-color: #465565;
    }
    
    .titleImage {
        background-color: #6FB485;
    }
</style>