<template>
<div class="vueme-header">
    <h1>VueMe</h1>
    <router-link to="/" class="go-home">
        <img src="../../assets/icons/ic_home.svg"/>
    </router-link>
</div>
</template>

<script>
export default {
        data () {
            return {
            }
        },
        created () {
        },
        methods: {
        }
    }
</script>

<style scoped>
h1 {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 20px;
    color: #4A4A4A;
}

.vueme-header {
    height: 60px;
    background-color: white;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.24);
    display: flex;
    align-items: center;
    padding: 2px 8px 2px 16px;
    justify-content: space-between;
    z-index: 1;
}

img {
    width: 30px;
    cursor: pointer;
}

.go-home {
    border-radius: 50%;
    padding: 8px;
    transition: all .3s ease;
}
.go-home:active {
    background-color: #ddd;
}
</style>
