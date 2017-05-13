<template>
<div>
    <ul class="menu-list">
        <menu-list-item iconName="ic_voice" title="Éclairage" nbr="3" desc="Lampes connectées" route="/eclairage"/>
        <menu-list-item iconName="ic_voice" title="Robotique" nbr="0" desc="Robot connecté" route="/robotique"/>
        <menu-list-item iconName="ic_voice" title="Aspirateur" nbr="0" desc="Aspirateur connecté" route="/"/>
        <menu-list-item iconName="ic_voice" title="Machine à café" nbr="0" desc="Machine à café connectée" route="/"/>
    </ul>
</div>
</template>

<script>
import MenuListItem from './MenuListItem.vue';
export default {
    data () {
        return {

        }
    },
    components: {
        MenuListItem,
    }
}
</script>

<style scoped>
.menu-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 7px;
}
</style>
