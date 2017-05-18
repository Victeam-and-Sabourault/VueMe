<template>
  <div>
    <page-title :titleImage="src">Machine à café</page-title>
  </div>
</template>

<script>
import PageTitle from '@/components/Common/PageTitle'
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
    }
  },
  computed: {
    src() {
      return require('../../assets/icons/ic_coffee.svg')
    }
  },
  created() {},
  methods: {},
}
</script>

<style scoped>

</style>