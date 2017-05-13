<template>
<div>
    <page-title titleImage="">Eclairage</page-title>
    <ul>
        <li v-for="option in options">
            <option :option="option"></option>
        </li>
    </ul>
</div>
</template>

<script>
    import PageTitle from '../Common/PageTitle'
    import Option from './Option'
    export default {
        components: {
            PageTitle,
            Option,
        },
        data() {
            return {}
        },
        created() {},
        methods: {}
    }
</script>

<style scoped>

</style>