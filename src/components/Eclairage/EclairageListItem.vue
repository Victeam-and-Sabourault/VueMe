<template>
<div class="pageTitle">
    <h3 class ="title">{{ option.title }}</h3>
</div>
</template>

<script>
    export default {
        props: ['option'],
        data() {
            return {}
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