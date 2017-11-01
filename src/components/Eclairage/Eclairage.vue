<template>
  <div>
    <page-title :titleImage="src">éclairage</page-title>
    <md-list class="list-container" v-for="item in itemList" :key="item.title">
      <md-list-item class="item-container">
        <eclairage-list-item :item="item"></eclairage-list-item>              
      </md-list-item>
    </md-list>
    <div class="color-picker-container">     
      <h4>Couleur de la lampe</h4>
      <div class="color-picker">
        <div class="color color-blue" @click="blue()"></div>    
        <div class="color color-white" @click="white()"></div>    
        <div class="color color-red" @click="red()"></div>    
      </div>
    </div>     
  </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle'
import EclairageListItem from './EclairageListItem'
import lights from '@/utils/lights'

export default {
  components: {
    PageTitle,
    EclairageListItem,
  },
  data() {
    return {
      itemList: [
        {
          title: "Fhacktory",
        }
      ]
    }
  },
  computed: {
    src() {
      return require('../../assets/icons/ic_light_w.svg')
    }
  },
  created() {
  },
  methods: {
    blue () {
      lights.turnOn('bleu')
    },
    white () {
      lights.turnOn('blanc')
    },
    red () {
      lights.turnOn('rouge')
    },
  }
}
</script>

<style scoped>
.item-container {
  border-bottom: 1px solid #c8c8c8;
}

.list-container {
  padding: 0;
  margin-top: 10px;
}

.color-picker-container {
  padding: 0 16px;
}

.color-picker{
  display: flex;
  justify-content: space-around;
}

.color {
  border-radius: 50%;
  box-sizing: border-box;
  border: 3px solid #FFFFFF;
  box-shadow: 0 2px 4px 0px rgba(0,0,0,0.2);
  height: 80px;
  width: 80px;
  cursor: pointer;
  transition: all .2s ease;
}

.color:hover {
  box-shadow: 0 4px 6px 0px rgba(0,0,0,0.3);
}

.color-blue {
  background-color: #2D7DE8;
}
.color-white {
  background-color: #FFFFFF;
}
.color-red {
  background-color: #E82D2D;
}

.color-picker {
  list-style: none;
  margin: 0 !important;
  padding: 0;
}

h4 {
  text-transform: uppercase;
  color: #909090;
}
</style>
