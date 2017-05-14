<template>
<div>
    <page-title :titleImage="src">ÉCLAIRAGE</page-title>
    <md-list v-for="item in itemList" :key="item.title">
          <md-list-item class="item-container">
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
                }, {
                    title: "Fhacktory",
                    lightNumber: 2,
                }]
            }
        },
        computed: {
            src() {
                return require('../../assets/icons/ic_light_w.svg')
            }
        },
        created() {},
        methods: {}
    }
</script>

<style scoped>
    .item-container {
        border-bottom: 1px solid #c8c8c8;
    }
</style>