<template>
<div>
    <div class="home-banner">
        <img class="logo-app" src="../../assets/icons/logo_app.svg"/>
        <img class="img-vue-home" src="../../assets/icons/img_vue_home.svg"/>
    </div>
    <ul class="menu-list">
        <menu-list-item iconName="ic_light" title="Éclairage" nbr="1" desc="Lampes connectées" route="/eclairage"/>
        <menu-list-item iconName="ic_robot" title="Robotique" nbr="0" desc="Robot connecté" route="/robotique"/>
        <menu-list-item iconName="ic_clean" title="Aspirateur" nbr="0" desc="Aspirateur connecté" route="/"/>
        <menu-list-item iconName="ic_coffee" title="Machine à café" nbr="0" desc="Machine à café connectée" route="/"/>
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

.home-banner {
   background: #465565; 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   height: 90px;
}

.logo-app {
    margin: 20px 0px 0px 0px;
    max-width: 60%;
}

.img-vue-home {
    width: 100%;
}
</style>
