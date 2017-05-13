<template>
<div>
    <page-title titleImage="">Eclairage</page-title>
    <md-list v-for="item in itemList" :key="item.title">
          <md-list-item class="md-inset">
            <eclairage-list-item :item="item"></eclairage-list-item>              
          </md-list-item>
        </md-list>
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
            return {
                itemList: [{
                    title: "Tous",
                }]
            }
        },
        created() {},
        methods: {}
    }
</script>

<style scoped>

</style>