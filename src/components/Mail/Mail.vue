<template>
  <docker @close="$emit('close')" category="Mail">
    <h3>Objet : {{ mail.title }}</h3>
    <p>Corps : {{ mail.body }}</p>
  </docker>
</template>

<script>
import Docker from '@/components/Docker/Docker' 
export default {
  props: ['mail'],
  components: {
    Docker
  }
}
</script>

<style scoped>
  
</style>