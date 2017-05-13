<template>
<div>
    <page-title titleImage="">Eclairage</page-title>
    <ul>
        <li v-for="option in options">
            <eclairage-list-item :option="option"></eclairage-list-item>
        </li>
    </ul>
</div>
</template>

<script>
    import PageTitle from '../Common/PageTitle'
    import EclairageListItem from './EclairageListItem'
    export default {
        components: {
            PageTitle,
            EclairageListItem,
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