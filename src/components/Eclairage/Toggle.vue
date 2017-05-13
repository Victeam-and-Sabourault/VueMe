<template>
    <div class="toggle" v-on="click: switch" v-class="active: isActive"></div>
</template>

<script>
    export default {
        data() {
            isActive: false;
        },
        methods: {
            switch: function() {
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<style scoped>
    .toggle {}
    
    .title:active {}
</style>