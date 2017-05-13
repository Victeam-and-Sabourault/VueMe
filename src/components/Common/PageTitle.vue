<template>
<div class="pageTitle">
    <div class="icon">
        <img :src="titleImage"></img>
    </div>
    <div class="non-rectangle-icon">
    </div>
    <h1 class="title"><slot></slot></h1>
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
        display: flex;
        height: 70px;
        overflow: hidden;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2);
        cursor: pointer;
        transition: all .3s ease-in-out;
    }
    
    .title {
        color: white;
        padding: 5px 10px;
        font-family: Helvetica, Arial, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    
    .icon {
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 15px;
        background-color: #6FB485;
    }
    
    .non-rectangle-icon {
        width: 1px;
        height: 100px;
        border: 1px solid #6FB485;
        border-color: transparent transparent transparent #6FB485;
        border-width: 100px;
    }
</style>