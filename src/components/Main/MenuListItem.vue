<template>
  <router-link :to="route" tag="li" class="menu-list-item">
    <div class="menu-item-icon-section">
      <img :src="src"/>
    </div>
    <div class="menu-item-content">
      <h3>{{title}}</h3>
      <div class="menu-item-counter-container">
        <div class="menu-item-counter" :class="{empty: nbr <= 0}" >
          {{nbr}}
        </div> 
        <div class="menu-item-counter-desc">
          {{desc}}
        </div> 
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: [
  'title',
  'nbr',
  'desc',
  'route',
  'iconName',
  ],
  computed: {
    src () {
      return require('../../assets/icons/' + this.iconName + '.svg')
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 0;
  margin-bottom: 10px;
}

.menu-list-item {
  margin: 3px 16px;
  background-color: #FFFFFF;
  display: flex;
  height: 70px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.menu-list-item:active {
  background-color: #ddd;
}

.menu-item-icon-section {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 0 10px 0 rgba(0,0,0,0.05);
}

.menu-item-content {
  padding: 5px 10px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #465565;
  display: flex;
  flex-direction: column;
}

.menu-item-counter-container {
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #586E75;
  align-items: center;
}

.menu-item-counter {
  height: 20px;
  width: 20px;
  background-color: #6FB485;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 5px;
}

.menu-item-counter.empty {
  background-color: #BBB;
}

img {
  width: 30px;
}
</style>
