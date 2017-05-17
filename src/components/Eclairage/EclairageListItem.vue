<template>
  <div class="item">
    <h3 class="title">{{ item.title }}</h3>
    <md-switch v-model="switchLight" @change="switchTheLight()" class="md-warn leftside"></md-switch>
  </div>
</template>

<script>
import lights from '@/utils/lights'

export default {
  props: ['item'],
  data() {
    return {
      switchLight : false,
    }
  },
  created() {
    lights.getState().then(state => {this.switchLight = state})
  },
  methods: {
    switchTheLight(){
      if (this.switchLight) {
        lights.turnOff()
      } else {
        lights.turnOn()
      }
    }
  }
}
</script>

<style scoped>
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 20px;
  color: #414F5D;
}

.title:hover {
  color: #6FB485;
}
</style>