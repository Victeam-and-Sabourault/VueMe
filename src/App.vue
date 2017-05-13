<template>
  <div id="app">
    <vue-me-header/>
    <router-view></router-view>
    <voice-recognizer/>
  </div>
</template>

<script>
import VoiceRecognizer from './components/Common/VoiceRecognizer.vue';
import VueMeHeader from './components/Common/VueMeHeader.vue';
export default {
  components: {
    VoiceRecognizer,
    VueMeHeader,
  },
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  min-height: 100vh;
  margin: 0;
  background-color: #F5F5F5;
}
</style>
