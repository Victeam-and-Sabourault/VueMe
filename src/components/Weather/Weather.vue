<template>
  <docker category="Météo">
      <h3>La température à {{ weather.city }} est de {{ weatherTemp }}°</h3>
      <img :src="weatherIcon">
    </docker>
</template>

<script>
import Docker from '@/components/Docker/Docker'

export default {
  props: ['weather'],
  computed: {
    /**
     * Convert kelvin degree to celsius degree
     * @return {integer} temperature in celsius degree
     */
    weatherTemp () {
      return parseInt(this.weather.temp) - 273
    },
    weatherIcon () {
      return 'http://openweathermap.org/img/w/' + this.weather.icon + '.png'
    }
  },
  components: {
    Docker
  }
}
</script>

<style scoped>
  
</style>