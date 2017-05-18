<template>
  <page-title :titleImage="src">ASPIRATEUR</page-title>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle'
export default {
  components: {
    PageTitle
  },
  computed: {
    src() {
      return require('../../assets/icons/ic_clean_w.svg')
    }
  },
}
</script>

<style scoped>

</style>