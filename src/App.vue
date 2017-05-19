<template>
  <div id="app">
    <vue-me-header/>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <voice-recognizer/>
  </div>
</template>

<script>
import VoiceRecognizer from '@/components/Common/VoiceRecognizer';
import VueMeHeader from '@/components/Common/VueMeHeader';

export default {
  components: {
    VoiceRecognizer,
    VueMeHeader
  }
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

body.md-theme-default {
  background-color: #F5F5F5 !important;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-320px);
  opacity: 0;
}

</style>
