<template>
<div>
    <page-title :titleImage="src">ROBOTIQUE</page-title>
</div>
</template>

<script>
    import PageTitle from '../Common/PageTitle'
    export default {
        components: {
            PageTitle,
        },
        data() {
            return {
            }
        },
        computed: {
            src() {
                return require('../../assets/icons/ic_robot_w.svg')
            }
        },
        created() {},
        methods: {},
    }
</script>

<style scoped>

</style>