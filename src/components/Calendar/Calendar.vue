<template>
  <docker category="Calendrier">
  <p>{{ eventText }}</p>
</docker>
</template>

<script>
import Docker from '@/components/Docker/Docker'

export default {
  props: ['event'],
  computed: {
    eventText() {
      return `${this.event.title[0].toUpperCase() + this.event.title.slice(1)} ${this.event.time}`
    }
  },
  components: {
    Docker,
  }
}
</script>

<style scoped>
  
</style>