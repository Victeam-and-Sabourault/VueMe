<template>
  <div>
    <page-title :titleImage="src">robotique</page-title>
  </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle'

export default {
  components: {
    PageTitle,
  },
  computed: {
    src() {
      return require('../../assets/icons/ic_robot_w.svg')
    }
  }
}
</script>

<style scoped>

</style>